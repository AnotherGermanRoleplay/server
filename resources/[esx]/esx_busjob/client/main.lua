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

local PlayerData                = {}
local GUI                       = {}
local HasAlreadyEnteredMarker   = false
local LastZone                  = nil
local CurrentAction             = nil
local CurrentActionMsg          = ''
local CurrentActionData         = {}
local OnJob                     = false
local CurrentCustomer           = nil
local CurrentCustomerBlip       = nil
local DestinationBlip           = nil
local IsNearCustomer            = false
local CustomerIsEnteringVehicle = false
local CustomerEnteredVehicle    = false
local TargetCoords              = nil

ESX                             = nil
GUI.Time                        = 0

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

function DrawSub(msg, time)
  ClearPrints()
  SetTextEntry_2("STRING")
  AddTextComponentString(msg)
  DrawSubtitleTimed(time, 1)
end

function ShowLoadingPromt(msg, time, type)
  Citizen.CreateThread(function()
    Citizen.Wait(0)
    N_0xaba17d7ce615adbf("STRING")
    AddTextComponentString(msg)
    N_0xbd12f8228410d9b4(type)
    Citizen.Wait(time)
    N_0x10d373323e5b9c0d()
  end)
end

function GetRandomWalkingNPC()

  local search = {}
  local peds   = ESX.Game.GetPeds()

  for i=1, #peds, 1 do
    if IsPedHuman(peds[i]) and IsPedWalking(peds[i]) and not IsPedAPlayer(peds[i]) then
      table.insert(search, peds[i])
    end
  end

  if #search > 0 then
    return search[GetRandomIntInRange(1, #search)]
  end

  print('Using fallback code to find walking ped')

  for i=1, 250, 1 do

    local ped = GetRandomPedAtCoord(0.0,  0.0,  0.0,  math.huge + 0.0,  math.huge + 0.0,  math.huge + 0.0,  26)

    if DoesEntityExist(ped) and IsPedHuman(ped) and IsPedWalking(ped) and not IsPedAPlayer(ped) then
      table.insert(search, ped)
    end

  end

  if #search > 0 then
    return search[GetRandomIntInRange(1, #search)]
  end

end

function ClearCurrentMission()

  if DoesBlipExist(CurrentCustomerBlip) then
    RemoveBlip(CurrentCustomerBlip)
  end

  if DoesBlipExist(DestinationBlip) then
    RemoveBlip(DestinationBlip)
  end

  CurrentCustomer           = nil
  CurrentCustomerBlip       = nil
  DestinationBlip           = nil
  IsNearCustomer            = false
  CustomerIsEnteringVehicle = false
  CustomerEnteredVehicle    = false
  TargetCoords              = nil

end

function StartBusJob()

  ShowLoadingPromt(_U('taking_service') .. 'Bus/Chauffeur', 5000, 3)
  ClearCurrentMission()

  OnJob = true

end

function StopBusJob()

  local playerPed = GetPlayerPed(-1)

  if IsPedInAnyVehicle(playerPed, false) and CurrentCustomer ~= nil then
    local vehicle = GetVehiclePedIsIn(playerPed,  false)
    TaskLeaveVehicle(CurrentCustomer,  vehicle,  0)

    if CustomerEnteredVehicle then
      TaskGoStraightToCoord(CurrentCustomer,  TargetCoords.x,  TargetCoords.y,  TargetCoords.z,  1.0,  -1,  0.0,  0.0)
    end

  end

  ClearCurrentMission()

  OnJob = false

  DrawSub(_U('mission_complete'), 5000)

end

function OpenBusActionsMenu()

  local elements = {
    {label = _U('spawn_veh'), value = 'spawn_vehicle'},
    {label = _U('deposit_stock'), value = 'put_stock'},
    {label = _U('take_stock'), value = 'get_stock'}
  }

  if Config.EnablePlayerManagement and PlayerData.job ~= nil and PlayerData.job.grade_name == 'boss' then
    table.insert(elements, {label = _U('boss_actions'), value = 'boss_actions'})
  end

  ESX.UI.Menu.CloseAll()

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'bus_actions',
    {
      title    = 'Bus',
      elements = elements
    },
    function(data, menu)

      if data.current.value == 'put_stock' then
        OpenPutStocksMenu()
      end

      if data.current.value == 'get_stock' then
        OpenGetStocksMenu()
      end

      if data.current.value == 'spawn_vehicle' then

        if Config.EnableSocietyOwnedVehicles then

          local elements = {}

          ESX.TriggerServerCallback('esx_society:getVehiclesInGarage', function(vehicles)

            for i=1, #vehicles, 1 do
              table.insert(elements, {label = GetDisplayNameFromVehicleModel(vehicles[i].model) .. ' [' .. vehicles[i].plate .. ']', value = vehicles[i]})
            end

            ESX.UI.Menu.Open(
              'default', GetCurrentResourceName(), 'vehicle_spawner',
              {
                title    = _U('spawn_veh'),
                align    = 'top-left',
                elements = elements,
              },
              function(data, menu)

                menu.close()

                local vehicleProps = data.current.value

                ESX.Game.SpawnVehicle(vehicleProps.model, Config.Zones.VehicleSpawnPoint.Pos, 270.0, function(vehicle)
                  ESX.Game.SetVehicleProperties(vehicle, vehicleProps)
                  local playerPed = GetPlayerPed(-1)
                  TaskWarpPedIntoVehicle(playerPed,  vehicle,  -1)
                  TriggerEvent("ls:newVehicle", GetPlayerServerId(PlayerId()), GetVehicleNumberPlateText(vehicle), nil)
                end)

                TriggerServerEvent('esx_society:removeVehicleFromGarage', 'bus', vehicleProps)

              end,
              function(data, menu)
                menu.close()
              end
            )

          end, 'bus')

        else

          menu.close()

          if Config.MaxInService == -1 then

            local playerPed = GetPlayerPed(-1)
            local coords    = Config.Zones.VehicleSpawnPoint.Pos

            ESX.Game.SpawnVehicle('bus', coords, 225.0, function(vehicle)
              TaskWarpPedIntoVehicle(playerPed,  vehicle, -1)
            end)

          else

            ESX.TriggerServerCallback('esx_service:enableService', function(canTakeService, maxInService, inServiceCount)

              if canTakeService then

                local playerPed = GetPlayerPed(-1)
                local coords    = Config.Zones.VehicleSpawnPoint.Pos

                ESX.Game.SpawnVehicle('bus', coords, 225.0, function(vehicle)
                  TaskWarpPedIntoVehicle(playerPed,  vehicle, -1)
                  TriggerEvent("ls:newVehicle", GetPlayerServerId(PlayerId()), GetVehicleNumberPlateText(vehicle), nil)
                end)

              else

                ESX.ShowNotification(_U('full_service') .. inServiceCount .. '/' .. maxInService)

              end

            end, 'bus')

          end

        end

      end

      if data.current.value == 'boss_actions' then
        TriggerEvent('esx_society:openBossMenu', 'bus', function(data, menu)
          menu.close()
        end, {wash = true})
      end

    end,
    function(data, menu)

      menu.close()

      CurrentAction     = 'bus_actions_menu'
      CurrentActionMsg  = _U('press_to_open')
      CurrentActionData = {}

    end
  )

end

function OpenMobileBusActionsMenu()

  ESX.UI.Menu.CloseAll()

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'mobile_bus_actions',
    {
      title    = 'Bus',
      elements = {
        {label = _U('billing'), value = 'billing'}
      }
    },
    function(data, menu)

      if data.current.value == 'billing' then

        ESX.UI.Menu.Open(
          'dialog', GetCurrentResourceName(), 'billing',
          {
            title = _U('invoice_amount')
          },
          function(data, menu)

            local amount = tonumber(data.value)

            if amount == nil then
              ESX.ShowNotification(_U('amount_invalid'))
            else

              menu.close()

              local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()

              if closestPlayer == -1 or closestDistance > 3.0 then
                ESX.ShowNotification(_U('no_players_near'))
              else
                TriggerServerEvent('esx_billing:sendBill', GetPlayerServerId(closestPlayer), 'society_bus', 'Bus', amount)
              end

            end

          end,
          function(data, menu)
            menu.close()
          end
        )

      end

    end,
    function(data, menu)
      menu.close()
    end
  )

end

function OpenGetStocksMenu()

  ESX.TriggerServerCallback('esx_busjob:getStockItems', function(items)

    print(json.encode(items))

    local elements = {}

    for i=1, #items, 1 do
      table.insert(elements, {label = 'x' .. items[i].count .. ' ' .. items[i].label, value = items[i].name})
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'stocks_menu',
      {
        title    = 'Bus Stock',
        elements = elements
      },
      function(data, menu)

        local itemName = data.current.value

        ESX.UI.Menu.Open(
          'dialog', GetCurrentResourceName(), 'stocks_menu_get_item_count',
          {
            title = _U('quantity')
          },
          function(data2, menu2)

            local count = tonumber(data2.value)

            if count == nil then
              ESX.ShowNotification(_U('quantity_invalid'))
            else
              menu2.close()
              menu.close()
              OpenGetStocksMenu()

              TriggerServerEvent('esx_busjob:getStockItem', itemName, count)
            end

          end,
          function(data2, menu2)
            menu2.close()
          end
        )

      end,
      function(data, menu)
        menu.close()
      end
    )

  end)

end

function OpenPutStocksMenu()

  ESX.TriggerServerCallback('esx_busjob:getPlayerInventory', function(inventory)

    local elements = {}

    for i=1, #inventory.items, 1 do

      local item = inventory.items[i]

      if item.count > 0 then
        table.insert(elements, {label = item.label .. ' x' .. item.count, type = 'item_standard', value = item.name})
      end

    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'stocks_menu',
      {
        title    = _U('inventory'),
        elements = elements
      },
      function(data, menu)

        local itemName = data.current.value

        ESX.UI.Menu.Open(
          'dialog', GetCurrentResourceName(), 'stocks_menu_put_item_count',
          {
            title = _U('quantity')
          },
          function(data2, menu2)

            local count = tonumber(data2.value)

            if count == nil or count < 1 then
              ESX.ShowNotification(_U('quantity_invalid'))
            else
              menu2.close()
              menu.close()
              OpenPutStocksMenu()

              TriggerServerEvent('esx_busjob:putStockItems', itemName, count)
            end

          end,
          function(data2, menu2)
            menu2.close()
          end
        )

      end,
      function(data, menu)
        menu.close()
      end
    )

  end)

end


RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
  PlayerData = xPlayer
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
  PlayerData.job = job
end)

AddEventHandler('esx_busjob:hasEnteredMarker', function(zone)

  if zone == 'BusActions' then
    CurrentAction     = 'bus_actions_menu'
    CurrentActionMsg  = _U('press_to_open')
    CurrentActionData = {}
  end

  if zone == 'VehicleDeleter' then

    local playerPed = GetPlayerPed(-1)

    if IsPedInAnyVehicle(playerPed,  false) then
      CurrentAction     = 'delete_vehicle'
      CurrentActionMsg  = _U('store_veh')
      CurrentActionData = {}
    end

  end

end)

AddEventHandler('esx_busjob:hasExitedMarker', function(zone)
  ESX.UI.Menu.CloseAll()
  CurrentAction = nil
end)

RegisterNetEvent('esx_phone:loaded')
AddEventHandler('esx_phone:loaded', function(phoneNumber, contacts)

  local specialContact = {
    name       = 'Bus',
    number     = 'bus',
    base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QkcCzU593JNjgAABLpJREFUWMPtlk1sVFUUgL9z75s3naGl5bcCSkEaNDYEoQnSSmIkLhRj3JgYE7YuIJFEQ4zGGFm5MCQmsiAREzcmuoCNGENMXAghEDFiAiitFQqCtLSlf9PpzHvv3uNipi1Dp1MFoy44m/d3zrnf+bnnXbgv/7HInS/06kfw0Gtw/pWF5C4sIR6yoHfn3UF8PXRRd3po9IvGsQVPTdB06OcKlaBi8e63YPUeOHdqK/nuvSQjG0DNXYdnIViWeI3lXNPO0f3Zd3tO51atp35fd3UA4kHoemMl4z++TzTwNJrce4oznmBFvN6P2cW5t9fvlFD/mDMD+HHw2oa7tRktgkht71PJEV9TzWQ9qYZ4MzdNm5gaAF3jD2KCbKY41hq4aAkyB4AqZG2eNZlrAPTmW8i7bE3eydgGeW8zxgP0VAf4pPcFwsByY6SDfBQzlz9FqJcRXl9zEIAPe3eR0yZkjmZVhMHRAv1JgcALcKw6QN6lcWKYcFnyrnb9ixhG4wYAhpLFJNTV1M+pYRywVPZ0BYCgSPlK+b66SOmbaPlpaj9rDYvbfc/I3W+xf0j+vwDyd7zcg1T0gFeDV8FjcGoQ5qqqYJByPQWvgsNU1Z7y4bTk887QKgAebbhKKkix2A1QCAs1uIVGO8jqTD8AnYvOMJosoVYTjsQxg+MJ1kDvXACvrjmKBA34sR/QaKA0cQCkRD7V+apgxZE2EQB7Wj7FqS0NIp3qcwUtTUgRQ2RCisNpJKV8PhdAxhbBhmDzEMRQ3wYSwsQFcBN4hePnQn66HCJiUQ3LCwCqbFoXs60twoiCScOCtlLGcxcITZ5Q/PTWrQowLQos3QFr3wNTB70H4MYhnPecv5rmu/Ozx64qpFKTdD4WYURg+UvQ8mbp26UP0F+PlDtG5gFQBQlg4ROQXllqzrptiPuMVJDjxa2TbHo4mqm2lniNQEuzIzBaylpjJ4TLSyrpbag7Wo5sPgAR0ARGTkLjM6jPoNdPYHSS2AlHTtbxzdksRmaSNcX9XHuBXTvGCWwEw8ehvgONBb1xAoiAcNZylQBiAVu63voWHbuGFuswyS+QBquWLY946jPR7EGh0NbiMNaW6jz4JTrcjU4apNiFJkEps3fslGk3F7u6iO3KdEN0el8qurhX3EQAfmYXqJQTVPt4piozRHhIBF8I8LlUMlm3Yn9PY/u+puhm8cnOzsoM5CcmMKZnyWCyaLvXTquqFQUTqXnquJNKVG87ymVAsgRRVNxuB3sOTAbB9KFkBiCfxxgz4L1/Z2BgYMupU6d2FwqFVd57RGSsvb3947Vr1/7uvTdVFp2+N8b4vr7+ZWfOfL+7UCgs9d5jrR3s6Og42NzcfDyO4wHvZ2KZNfI3bNiAc25FOp3+GngcIIqiG7lc7nlr7dlLly7VLMHGjRvx3q8LguAY0Fq27xkZGXk2DMPfLl++XKMJgTAMKRWP+LaoEmttYq1lPgmCAMDdbi8iSRiGvpr9LABVxRhzK0mSw6ra4L23URR95Zy7Mu/qZXsR6XfOHVbVl733RFF0OEmSvmr6Vf+6ra2tAHWq+oD33jjn+sMwnBgeHmZoaGheiLJ9VlWbvfc45/pEZPLKlb8Uw335d+VPpbIiiCwreVUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMjhUMTE6NTM6NTcrMDI6MDCbeyQJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTI4VDExOjUzOjU3KzAyOjAw6iactQAAAABJRU5ErkJggg==',
  }

  TriggerEvent('esx_phone:addSpecialContact', specialContact.name, specialContact.number, specialContact.base64Icon)

end)

-- Create Blips
Citizen.CreateThread(function()

  local blip = AddBlipForCoord(Config.Zones.BusActions.Pos.x, Config.Zones.BusActions.Pos.y, Config.Zones.BusActions.Pos.z)

  SetBlipSprite (blip, 85)
  SetBlipDisplay(blip, 4)
  SetBlipScale  (blip, 1.0)
  SetBlipColour (blip, 26)
  SetBlipAsShortRange(blip, true)

  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString("Bus")
  EndTextCommandSetBlipName(blip)

end)

-- Display markers
Citizen.CreateThread(function()
  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'bus' then

      local coords = GetEntityCoords(GetPlayerPed(-1))

      for k,v in pairs(Config.Zones) do
        if(v.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < Config.DrawDistance) then
          DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
        end
      end

    end

  end
end)

-- Enter / Exit marker events
Citizen.CreateThread(function()
  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'bus' then

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
        TriggerEvent('esx_busjob:hasEnteredMarker', currentZone)
      end

      if not isInMarker and HasAlreadyEnteredMarker then
        HasAlreadyEnteredMarker = false
        TriggerEvent('esx_busjob:hasExitedMarker', LastZone)
      end

    end

  end
end)

-- Bus Job
Citizen.CreateThread(function()

  while true do

    Citizen.Wait(0)

    local playerPed = GetPlayerPed(-1)

    if OnJob then

      if CurrentCustomer == nil then

        DrawSub(_U('drive_search_pass'), 5000)

        if IsPedInAnyVehicle(playerPed,  false) and GetEntitySpeed(playerPed) > 0 then

          local waitUntil = GetGameTimer() + GetRandomIntInRange(30000,  45000)

          while OnJob and waitUntil > GetGameTimer() do
            Citizen.Wait(0)
          end

          if OnJob and IsPedInAnyVehicle(playerPed,  false) and GetEntitySpeed(playerPed) > 0 then

            CurrentCustomer = GetRandomWalkingNPC()

            if CurrentCustomer ~= nil then

              CurrentCustomerBlip = AddBlipForEntity(CurrentCustomer)

              SetBlipAsFriendly(CurrentCustomerBlip, 1)
              SetBlipColour(CurrentCustomerBlip, 2)
              SetBlipCategory(CurrentCustomerBlip, 3)
              SetBlipRoute(CurrentCustomerBlip,  true)

              SetEntityAsMissionEntity(CurrentCustomer,  true, false)
              ClearPedTasksImmediately(CurrentCustomer)
              SetBlockingOfNonTemporaryEvents(CurrentCustomer, 1)

              local standTime = GetRandomIntInRange(60000,  180000)

              TaskStandStill(CurrentCustomer, standTime)

              ESX.ShowNotification(_U('customer_found'))

            end

          end

        end

      else

        if IsPedFatallyInjured(CurrentCustomer) then

          ESX.ShowNotification(_U('client_unconcious'))

          if DoesBlipExist(CurrentCustomerBlip) then
            RemoveBlip(CurrentCustomerBlip)
          end

          if DoesBlipExist(DestinationBlip) then
            RemoveBlip(DestinationBlip)
          end

          SetEntityAsMissionEntity(CurrentCustomer,  false, true)

          CurrentCustomer           = nil
          CurrentCustomerBlip       = nil
          DestinationBlip           = nil
          IsNearCustomer            = false
          CustomerIsEnteringVehicle = false
          CustomerEnteredVehicle    = false
          TargetCoords              = nil

        end

        if IsPedInAnyVehicle(playerPed,  false) then

          local vehicle          = GetVehiclePedIsIn(playerPed,  false)
          local playerCoords     = GetEntityCoords(playerPed)
          local customerCoords   = GetEntityCoords(CurrentCustomer)
          local customerDistance = GetDistanceBetweenCoords(playerCoords.x,  playerCoords.y,  playerCoords.z,  customerCoords.x,  customerCoords.y,  customerCoords.z)

          if IsPedSittingInVehicle(CurrentCustomer,  vehicle) then

            if CustomerEnteredVehicle then

              local targetDistance = GetDistanceBetweenCoords(playerCoords.x,  playerCoords.y,  playerCoords.z,  TargetCoords.x,  TargetCoords.y,  TargetCoords.z)

              if targetDistance <= 10.0 then

                TaskLeaveVehicle(CurrentCustomer,  vehicle,  0)

                ESX.ShowNotification(_U('arrive_dest'))

                TaskGoStraightToCoord(CurrentCustomer,  TargetCoords.x,  TargetCoords.y,  TargetCoords.z,  1.0,  -1,  0.0,  0.0)
                SetEntityAsMissionEntity(CurrentCustomer,  false, true)

                TriggerServerEvent('esx_busjob:success')

                RemoveBlip(DestinationBlip)

                local scope = function(customer)
                  ESX.SetTimeout(60000, function()
                    DeletePed(customer)
                  end)
                end

                scope(CurrentCustomer)

                CurrentCustomer           = nil
                CurrentCustomerBlip       = nil
                DestinationBlip           = nil
                IsNearCustomer            = false
                CustomerIsEnteringVehicle = false
                CustomerEnteredVehicle    = false
                TargetCoords              = nil

              end

              if TargetCoords ~= nil then
                DrawMarker(1, TargetCoords.x, TargetCoords.y, TargetCoords.z - 1.0, 0, 0, 0, 0, 0, 0, 4.0, 4.0, 2.0, 178, 236, 93, 155, 0, 0, 2, 0, 0, 0, 0)
              end

            else

              RemoveBlip(CurrentCustomerBlip)

              CurrentCustomerBlip = nil

              TargetCoords = Config.JobLocations[GetRandomIntInRange(1,  #Config.JobLocations)]

              local street = table.pack(GetStreetNameAtCoord(TargetCoords.x, TargetCoords.y, TargetCoords.z))
              local msg    = nil

              if street[2] ~= 0 and street[2] ~= nil then
                msg = string.format(_U('take_me_to_near', GetStreetNameFromHashKey(street[1]),GetStreetNameFromHashKey(street[2])))
              else
                msg = string.format(_U('take_me_to', GetStreetNameFromHashKey(street[1])))
              end

              ESX.ShowNotification(msg)

              DestinationBlip = AddBlipForCoord(TargetCoords.x, TargetCoords.y, TargetCoords.z)

              BeginTextCommandSetBlipName("STRING")
              AddTextComponentString("Destination")
              EndTextCommandSetBlipName(blip)

              SetBlipRoute(DestinationBlip,  true)

              CustomerEnteredVehicle = true

            end

          else

            DrawMarker(1, customerCoords.x, customerCoords.y, customerCoords.z - 1.0, 0, 0, 0, 0, 0, 0, 4.0, 4.0, 2.0, 178, 236, 93, 155, 0, 0, 2, 0, 0, 0, 0)

            if not CustomerEnteredVehicle then

              if customerDistance <= 30.0 then

                if not IsNearCustomer then
                  ESX.ShowNotification(_U('close_to_client'))
                  IsNearCustomer = true
                end

              end

              if customerDistance <= 100.0 then

                if not CustomerIsEnteringVehicle then

                  ClearPedTasksImmediately(CurrentCustomer)

                  local seat = 0

                  for i=4, 0, 1 do
                    if IsVehicleSeatFree(vehicle,  seat) then
                      seat = i
                      break
                    end
                  end

                  TaskEnterVehicle(CurrentCustomer,  vehicle,  -1,  seat,  2.0,  1)

                  CustomerIsEnteringVehicle = true

                end

              end

            end

          end

        else

          DrawSub(_U('return_to_veh'), 5000)

        end

      end

    end

  end
end)

-- Key Controls
Citizen.CreateThread(function()
  while true do

    Citizen.Wait(0)

    if CurrentAction ~= nil then

      SetTextComponentFormat('STRING')
      AddTextComponentString(CurrentActionMsg)
      DisplayHelpTextFromStringLabel(0, 0, 1, -1)

      if IsControlPressed(0,  Keys['E']) and PlayerData.job ~= nil and PlayerData.job.name == 'bus' and (GetGameTimer() - GUI.Time) > 300 then

        if CurrentAction == 'bus_actions_menu' then
          OpenBusActionsMenu()
        end

        if CurrentAction == 'delete_vehicle' then

          local playerPed = GetPlayerPed(-1)

          if Config.EnableSocietyOwnedVehicles then
            local vehicleProps = ESX.Game.GetVehicleProperties(CurrentActionData.vehicle)
            TriggerServerEvent('esx_society:putVehicleInGarage', 'bus', vehicleProps)
          else
            if GetEntityModel(CurrentActionData.vehicle) == GetHashKey('bus') then
              if Config.MaxInService ~= -1 then
                TriggerServerEvent('esx_service:disableService', 'bus')
              end
            end
          end

          ESX.Game.DeleteVehicle(CurrentActionData.vehicle)

        end

        CurrentAction = nil
        GUI.Time      = GetGameTimer()

      end

    end

    if IsControlPressed(0,  Keys['F6']) and Config.EnablePlayerManagement and PlayerData.job ~= nil and PlayerData.job.name == 'bus' and (GetGameTimer() - GUI.Time) > 150 then
      OpenMobileBusActionsMenu()
      GUI.Time = GetGameTimer()
    end

    if IsControlPressed(0,  Keys['DELETE']) and (GetGameTimer() - GUI.Time) > 150 then

      if OnJob then
        StopBusJob()
      else

        if PlayerData.job ~= nil and PlayerData.job.name == 'bus' then

          local playerPed = GetPlayerPed(-1)

          if IsPedInAnyVehicle(playerPed,  false) then

            local vehicle = GetVehiclePedIsIn(playerPed,  false)

            if PlayerData.job.grade >= 3 then
              StartBusJob()
            else
              if GetEntityModel(vehicle) == GetHashKey('bus') then
                StartBusJob()
              else
                ESX.ShowNotification(_U('must_in_bus'))
              end
            end

          else

            if PlayerData.job.grade >= 3 then
              ESX.ShowNotification(_U('must_in_vehicle'))
            else
              ESX.ShowNotification(_U('must_in_bus'))
            end

          end

        end

      end

      GUI.Time = GetGameTimer()

    end

  end
end)
