local Keys = {
  ["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57,
  ["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177,
  ["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
  ["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
  ["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
  ["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70,
  ["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
  ["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
  ["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}

local GUI                     = {}
local HasAlreadyEnteredMarker = false
local LastZone                = nil
local PlayerData              = {}
local CurrentAction           = nil
local CurrentActionMsg        = ''
local CurrentActionData       = {}
local IsInShopMenu            = false
local Categories              = {}
local Vehicles                = {}
local LastVehicles            = {}
local CurrentVehicleData      = nil
local LastVehicle             = GetGameTimer() - 10 * 60000
local LastSpawnedVehicle      = {}

ESX                           = nil
GUI.Time                      = 0

Citizen.CreateThread(function ()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end

  ESX.TriggerServerCallback('esx_jobvehicleshop:getCategories', function (categories)
    Categories = categories
  end)

  ESX.TriggerServerCallback('esx_jobvehicleshop:getVehicles', function (vehicles)
    Vehicles = vehicles
  end)
end)

function DeleteShopInsideVehicles ()
  while #LastVehicles > 0 do
    local vehicle = LastVehicles[1]
    ESX.Game.DeleteVehicle(vehicle)
    table.remove(LastVehicles, 1)
  end
end

function OpenShopMenu ()

  IsInShopMenu = true

  ESX.UI.Menu.CloseAll()

  local playerPed = GetPlayerPed(-1)

  FreezeEntityPosition(playerPed, true)
  SetEntityVisible(playerPed, false)
  SetEntityCoords(playerPed, Config.Zones.ShopInside.Pos.x, Config.Zones.ShopInside.Pos.y, Config.Zones.ShopInside.Pos.z)

  local vehiclesByCategory = {}
  local elements           = {}
  local firstVehicleData   = nil

  for i=1, #Categories, 1 do
    vehiclesByCategory[Categories[i].name] = {}
  end

  for i=1, #Vehicles, 1 do
    table.insert(vehiclesByCategory[Vehicles[i].category], Vehicles[i])
  end

  for i=1, #Categories, 1 do
    local category         = Categories[i]
    local categoryVehicles = vehiclesByCategory[category.name]
    local options          = {}

    for j=1, #categoryVehicles, 1 do
      local vehicle = categoryVehicles[j]

      if i == 1 and j == 1 then
        firstVehicleData = vehicle
      end

      table.insert(options, vehicle.name .. ' ' .. _U('rank') .. vehicle.grade .. ' $' .. vehicle.price)
    end

    table.insert(elements, {
      name    = category.name,
      label   = category.label,
      value   = 0,
      type    = 'slider',
      max     = #Categories[i],
      options = options
    })
  end

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'vehicle_shop',
    {
      title    = _U('car_dealer'),
      align    = 'top-left',
      elements = elements,
    },
    function (data, menu)
      local vehicleData = vehiclesByCategory[data.current.name][data.current.value + 1]

      ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'shop_confirm',
        {
          title = _U('buy') .. ' ' .. vehicleData.name .. ' ' .. _U('for') .. ' ' .. vehicleData.price .. ' ' .. _U('rank') .. vehicleData.grade .. ' ' ..  ' ?',
          align = 'top-left',
          elements = {
            {label = _U('yes'), value = 'yes'},
            {label = _U('no'), value = 'no'},
          },
        },
        function (data2, menu2)
          if data2.current.value == 'yes' then
            local playerData = ESX.GetPlayerData()
            if PlayerData.job.name == vehicleData.job and PlayerData.job.grade >= vehicleData.grade then
              ESX.TriggerServerCallback('esx_jobvehicleshop:buyVehicle', function (hasEnoughMoney)
                if hasEnoughMoney then
                    IsInShopMenu = false

                    menu2.close()
                    menu.close()

                    DeleteShopInsideVehicles()

                    ESX.Game.SpawnVehicle(vehicleData.model, {
                      x = Config.Zones.ShopOutside.Pos.x,
                      y = Config.Zones.ShopOutside.Pos.y,
                      z = Config.Zones.ShopOutside.Pos.z
                    }, Config.Zones.ShopOutside.Heading, function (vehicle)

                      TaskWarpPedIntoVehicle(playerPed, vehicle, -1)

                      local vehicleProps = ESX.Game.GetVehicleProperties(vehicle)

                      if Config.EnableOwnedVehicles then
                        TriggerServerEvent('esx_jobvehicleshop:setVehicleOwned', vehicleProps, vehicleData.job)
                      end

                      table.insert(LastSpawnedVehicle, vehicle)

                      ESX.ShowNotification(_U('vehicle_purchased'))
                    end)

                    FreezeEntityPosition(playerPed, false)
                    SetEntityVisible(playerPed, true)
                  else
                    ESX.ShowNotification("Du bist nicht berechtigt dieses Fahrzeug zu kaufen.")
                  end
                end, vehicleData.model)
              else
                ESX.ShowNotification(_U('not_enough_money'))
              end
          end

          if data2.current.value == 'no' then
            menu2.close()
          end

        end,
        function (data2, menu2)
          menu2.close()
        end
      )

    end,
    function (data, menu)

      menu.close()

      DeleteShopInsideVehicles()

      local playerPed = GetPlayerPed(-1)

      CurrentAction     = 'shop_menu'
      CurrentActionMsg  = _U('shop_menu')
      CurrentActionData = {}

      FreezeEntityPosition(playerPed, false)
      SetEntityVisible(playerPed, true)

      if Config.EnablePlayerManagement then
        SetEntityCoords(playerPed, Config.Zones.BossActions.Pos.x, Config.Zones.BossActions.Pos.y, Config.Zones.BossActions.Pos.z)
      else
        SetEntityCoords(playerPed, Config.Zones.ShopEntering.Pos.x, Config.Zones.ShopEntering.Pos.y, Config.Zones.ShopEntering.Pos.z)
      end

      IsInShopMenu = false

    end,
    function (data, menu)
      local vehicleData = vehiclesByCategory[data.current.name][data.current.value + 1]
      local playerPed   = GetPlayerPed(-1)

      DeleteShopInsideVehicles()

      ESX.Game.SpawnLocalVehicle(vehicleData.model, {
        x = Config.Zones.ShopInside.Pos.x,
        y = Config.Zones.ShopInside.Pos.y,
        z = Config.Zones.ShopInside.Pos.z
      }, Config.Zones.ShopInside.Heading, function(vehicle)
        table.insert(LastVehicles, vehicle)
        TaskWarpPedIntoVehicle(playerPed, vehicle, -1)
        FreezeEntityPosition(vehicle, true)
      end)
    end
  )

  DeleteShopInsideVehicles()

  ESX.Game.SpawnLocalVehicle(firstVehicleData.model, {
    x = Config.Zones.ShopInside.Pos.x,
    y = Config.Zones.ShopInside.Pos.y,
    z = Config.Zones.ShopInside.Pos.z
  }, Config.Zones.ShopInside.Heading, function (vehicle)
    table.insert(LastVehicles, vehicle)
    TaskWarpPedIntoVehicle(playerPed, vehicle, -1)
    FreezeEntityPosition(vehicle, true)
  end)

end

function OpenPersonnalVehicleMenu ()

  ESX.UI.Menu.CloseAll()

  ESX.TriggerServerCallback('esx_jobvehicleshop:getPersonnalVehicles', function (vehicles)
    local elements = {}

    for i=1, #vehicles, 1 do
      for j=1, #Vehicles, 1 do
        if vehicles[i].model == GetHashKey(Vehicles[j].model) then
          vehicles[i].name = Vehicles[j].name
        end
      end
    end

    for i=1, #vehicles, 1 do
      table.insert(elements, {label = vehicles[i].name .. ' [' .. vehicles[i].plate .. ']', value = vehicles[i]})
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'personnal_vehicle',
      {
        title    = _U('personal_vehicle'),
        align    = 'top-left',
        elements = elements,
      },
      function (data, menu)
        local playerPed   = GetPlayerPed(-1)
        local coords      = GetEntityCoords(playerPed)
        local heading     = GetEntityHeading(playerPed)
        local vehicleData = data.current.value

        menu.close()

        ESX.Game.SpawnVehicle(vehicleData.model, {
          x = coords.x,
          y = coords.y,
          z = coords.z
        }, heading, function (vehicle)
          while #LastSpawnedVehicle > 0 do
            local delVehicle = LastSpawnedVehicle[1]
            ESX.Game.DeleteVehicle(delVehicle)
            table.remove(LastSpawnedVehicle, 1)
          end

          table.insert(LastSpawnedVehicle, vehicle)

          ESX.Game.SetVehicleProperties(vehicle, vehicleData)
          TaskWarpPedIntoVehicle(playerPed, vehicle, -1)
          LastVehicle = GetGameTimer()
        end)
      end,
      function (data, menu)
        menu.close()
      end
    )
  end)
end

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function (xPlayer)
  PlayerData = xPlayer

  if Config.EnablePlayerManagement then
    if PlayerData.job.name == 'cardealer' then
      Config.Zones.ShopEntering.Type = 1

      if PlayerData.job.grade_name == 'boss' then
        Config.Zones.BossActions.Type = 1
      end
    else
      Config.Zones.ShopEntering.Type = -1
      Config.Zones.BossActions.Type  = -1
    end
  end
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function (job)
  PlayerData.job = job

  if Config.EnablePlayerManagement then
    if PlayerData.job.name == 'cardealer' then
      Config.Zones.ShopEntering.Type = 1

      if PlayerData.job.grade_name == 'boss' then
        Config.Zones.BossActions.Type = 1
      end

    else
      Config.Zones.ShopEntering.Type = -1
      Config.Zones.BossActions.Type  = -1
    end
  end
end)

RegisterNetEvent('esx_jobvehicleshop:openPersonnalVehicleMenu')
AddEventHandler('esx_jobvehicleshop:openPersonnalVehicleMenu', function ()
  if GetGameTimer() - LastVehicle > 10 * 60000 then
    OpenPersonnalVehicleMenu()
  else
    ESX.ShowNotification("Warte bitte 10 Minuten, bevor du ein neues Auto spawnst.")
  end
end)

RegisterNetEvent('esx_jobvehicleshop:openPersonnalVehicleMenuResetTimer')
AddEventHandler('esx_jobvehicleshop:openPersonnalVehicleMenuResetTimer', function ()
  if GetGameTimer() - LastVehicle < 10 * 60000 then
    LastVehicle = GetGameTimer() - 10*60000
  end
end)

AddEventHandler('esx_jobvehicleshop:hasEnteredMarker', function (zone)
  if zone == 'ShopEntering' then
    CurrentAction     = 'shop_menu'
    CurrentActionMsg  = _U('shop_menu')
    CurrentActionData = {}
  end

  if zone == 'ResellVehicle' then
    local playerPed = GetPlayerPed(-1)

    if IsPedInAnyVehicle(playerPed, false) then
      local vehicle     = GetVehiclePedIsIn(playerPed, false)
      local vehicleData = nil

      for i=1, #Vehicles, 1 do
        if GetHashKey(Vehicles[i].model) == GetEntityModel(vehicle) then
          vehicleData = Vehicles[i]
          break
        end
      end

      local resellPrice = math.floor(vehicleData.price / 100 * Config.ResellPercentage)

      CurrentAction     = 'resell_vehicle'
      CurrentActionMsg  = _U('sell_menu').. vehicleData.name .. _U('price') .. resellPrice

      CurrentActionData = {
        vehicle = vehicle,
        price   = resellPrice
      }
    end
  end
end)

AddEventHandler('esx_jobvehicleshop:hasExitedMarker', function (zone)
  if not IsInShopMenu then
    ESX.UI.Menu.CloseAll()
  end

  CurrentAction = nil
end)

-- Create Blips
Citizen.CreateThread(function ()
  local blip = AddBlipForCoord(Config.Zones.ShopEntering.Pos.x, Config.Zones.ShopEntering.Pos.y, Config.Zones.ShopEntering.Pos.z)

  SetBlipSprite (blip, 326)
  SetBlipDisplay(blip, 4)
  SetBlipScale  (blip, 1.0)
  SetBlipAsShortRange(blip, true)

  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString(_U('car_dealer'))
  EndTextCommandSetBlipName(blip)
end)

-- Display markers
Citizen.CreateThread(function ()
  while true do
    Wait(0)

    local coords = GetEntityCoords(GetPlayerPed(-1))

    for k,v in pairs(Config.Zones) do
      if(v.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < Config.DrawDistance) then
        DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
      end
    end
  end
end)

-- Enter / Exit marker events
Citizen.CreateThread(function ()
  while true do
    Wait(0)

    local coords      = GetEntityCoords(GetPlayerPed(-1))
    local isInMarker  = false
    local currentZone = nil

    for k,v in pairs(Config.Zones) do
      if(GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < v.Size.x) then
        isInMarker  = true
        currentZone = k
      end
    end

    if (isInMarker and not HasAlreadyEnteredMarker) or (isInMarker and LastZone ~= currentZone) then
      HasAlreadyEnteredMarker = true
      LastZone                = currentZone
      TriggerEvent('esx_jobvehicleshop:hasEnteredMarker', currentZone)
    end

    if not isInMarker and HasAlreadyEnteredMarker then
      HasAlreadyEnteredMarker = false
      TriggerEvent('esx_jobvehicleshop:hasExitedMarker', LastZone)
    end
  end
end)

-- Key controls
Citizen.CreateThread(function ()
  while true do
    Citizen.Wait(0)

    if CurrentAction ~= nil then
      SetTextComponentFormat('STRING')
      AddTextComponentString(CurrentActionMsg)
      DisplayHelpTextFromStringLabel(0, 0, 1, -1)

      if IsControlPressed(0, Keys['E']) and (GetGameTimer() - GUI.Time) > 300 then
        if CurrentAction == 'shop_menu' then
          OpenShopMenu()
        end

        if CurrentAction == 'resell_vehicle' then
          ESX.TriggerServerCallback('esx_jobvehicleshop:resellVehicle', function (isOwnedVehicle)
            if isOwnedVehicle then
              DeleteVehicle(CurrentActionData.vehicle)
              ESX.ShowNotification(_U('vehicle_sold'))
            else
              ESX.ShowNotification(_U('not_yours'))
            end
          end, GetVehicleNumberPlateText(CurrentActionData.vehicle), CurrentActionData.price)
        end

        CurrentAction = nil
        GUI.Time      = GetGameTimer()
      end
    end
  end
end)

-- Load IPLS
Citizen.CreateThread(function ()
  RemoveIpl('v_carshowroom')
  RemoveIpl('shutter_open')
  RemoveIpl('shutter_closed')
  RemoveIpl('shr_int')
  RemoveIpl('csr_inMission')
  RequestIpl('v_carshowroom')
  RequestIpl('shr_int')
  RequestIpl('shutter_closed')
end)
