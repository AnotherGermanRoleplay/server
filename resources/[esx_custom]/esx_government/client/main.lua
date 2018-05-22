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
local LastStation               = nil
local LastPart                  = nil
local LastPartNum               = nil
local LastEntity                = nil
local CurrentAction             = nil
local CurrentActionMsg          = ''
local CurrentActionData         = {}
local IsHandcuffed              = false
local IsDragged                 = false
local CopPed                    = 0

ESX                             = nil
GUI.Time                        = 0

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

function SetVehicleMaxMods(vehicle)

  local props = {
    modEngine       = 2,
    modBrakes       = 2,
    modTransmission = 2,
    modSuspension   = 3,
    modTurbo        = true,
  }

  ESX.Game.SetVehicleProperties(vehicle, props)

end

function OpenArmoryMenu(station)

  if Config.EnableArmoryManagement then

    local elements = {
      {label = _U('get_weapon'), value = 'get_weapon'},
      {label = _U('put_weapon'), value = 'put_weapon'},
      {label = 'Prendre Objet',  value = 'get_stock'},
      {label = 'Déposer objet',  value = 'put_stock'}
    }

    if PlayerData.job.grade_name == 'boss' or PlayerData.job.grade_name == 'experience' then
      table.insert(elements, {label = _U('buy_weapons'), value = 'buy_weapons'})
    end

    ESX.UI.Menu.CloseAll()

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'armory',
      {
        title    = _U('armory'),
        align    = 'top-left',
        elements = elements,
      },
      function(data, menu)

        if data.current.value == 'get_weapon' then
          OpenGetWeaponMenu()
        end

        if data.current.value == 'put_weapon' then
          OpenPutWeaponMenu()
        end

        if data.current.value == 'buy_weapons' then
          OpenBuyWeaponsMenu(station)
        end

        if data.current.value == 'put_stock' then
              OpenPutStocksMenu()
            end

            if data.current.value == 'get_stock' then
              OpenGetStocksMenu()
            end

      end,
      function(data, menu)

        menu.close()

        CurrentAction     = 'menu_armory'
        CurrentActionMsg  = _U('open_armory')
        CurrentActionData = {station = station}
      end
    )

  else

    local elements = {}

    for i = 1, #Config.GovernmentStations[station].AuthorizedWeapons, 1 do
      local weapon = Config.GovernmentStations[station].AuthorizedWeapons[i]
      table.insert(elements, { label = ESX.GetWeaponLabel(weapon.name), value = weapon.name })
    end

    table.insert(elements, { label = "Combat Pistol Flashlight", value = "cPistolFlashlight" })
    table.insert(elements, { label = "Carbine Rifle Flashlight Extended Magazine Grip Scope", value = "CRFEMGS" })
    table.insert(elements, { label = "Assault SMG Flashlight Extended Magazine Suppressor Scope", value = "ASMGFEMSS" })
    table.insert(elements, { label = "Pump Shotgun Flashlight", value = "PSF" })
    table.insert(elements, { label = "Sniper Rifle Advanced Scope", value = "SRAS" })
    table.insert(elements, { label = "SMG Mk II Extended Magazine Scope", value = "SMGMkIIEMS" })
    table.insert(elements, { label = "Special Carbine Extended Magazine Flashlight Grip Scope", value = "SCEMFGS" })

    ESX.UI.Menu.CloseAll()

    ESX.UI.Menu.Open('default', GetCurrentResourceName(), 'armory',
      {
        title = _U('armory'),
        align = 'top-left',
        elements = elements,
      },
      function(data, menu)
        local weapon = data.current.value
        if (weapon == "cPistolFlashlight") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 1593441988, 899381934)
        elseif (weapon == "CRFEMGS") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 2210333304, 2076495324)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 2210333304, 2433783441)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 2210333304, 202788691)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 2210333304, 2698550338)
        elseif (weapon == "ASMGFEMSS") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 4024951519, 2076495324)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 4024951519, 3141985303)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 4024951519, 2805810788)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 4024951519, 2637152041)
        elseif (weapon == "PSF") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 487013001, 2076495324)
        elseif (weapon == "SRAS") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 100416529, 3159677559)
        elseif (weapon == "SMGMkIIEMS") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3430731035, 3112393518)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3430731035, 2076495324)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3430731035, 3842157419)
        elseif (weapon == "SCEMFGS") then
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3231910285, 2089537806)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3231910285, 2076495324)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3231910285, 202788691)
          GiveWeaponComponentToPed(GetPlayerPed(-1), 3231910285, 2698550338)
        else
          TriggerServerEvent('esx_policejob:giveWeapon', weapon, 1000)
        end
      end,
      function(data, menu)

        menu.close()

        CurrentAction = 'menu_armory'
        CurrentActionMsg = _U('open_armory')
        CurrentActionData = { station = station }
      end)
  end
end

function OpenVehicleSpawnerMenu(station, partNum)

  local vehicles = Config.GovernmentStations[station].Vehicles

  ESX.UI.Menu.CloseAll()

  if Config.EnableSocietyOwnedVehicles then

    local elements = {}

    ESX.TriggerServerCallback('esx_society:getVehiclesInGarage', function(garageVehicles)

      for i=1, #garageVehicles, 1 do
        table.insert(elements, {label = GetDisplayNameFromVehicleModel(garageVehicles[i].model) .. ' [' .. garageVehicles[i].plate .. ']', value = garageVehicles[i]})
      end

      ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'vehicle_spawner',
        {
          title    = _U('vehicle_menu'),
          align    = 'top-left',
          elements = elements,
        },
        function(data, menu)

          menu.close()

          local vehicleProps = data.current.value

		  if (PlayerData.job.grade >= vehicles[partNum].rank) then
			 ESX.Game.SpawnVehicle(vehicleProps.model, vehicles[partNum].SpawnPoint, 270.0, function(vehicle)
  				ESX.Game.SetVehicleProperties(vehicle, vehicleProps)
  				local playerPed = GetPlayerPed(-1)
          TriggerEvent("ls:newVehicle", GetPlayerServerId(PlayerId()), GetVehicleNumberPlateText(vehicle), nil)
  				TaskWarpPedIntoVehicle(playerPed, vehicle, -1)
  			end)

			 TriggerServerEvent('esx_society:removeVehicleFromGarage', 'government', vehicleProps)
		  else
			-- ERROR
			 ESX.ShowNotification('Du kannst dieses Auto mit deinem aktuellen Cop-Rang nicht ausparken.')
		  end

        end,
        function(data, menu)

          menu.close()

          CurrentAction     = 'menu_vehicle_spawner'
          CurrentActionMsg  = _U('vehicle_spawner')
          CurrentActionData = {station = station, partNum = partNum}

        end
      )

    end, 'government')

  else

    local elements = {}

    for i=1, #Config.GovernmentStations[station].AuthorizedVehicles, 1 do
      local vehicle = Config.GovernmentStations[station].AuthorizedVehicles[i]
      table.insert(elements, {label = vehicle.label, value = vehicle.name, rank = vehicle.rank})
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'vehicle_spawner',
      {
        title    = _U('vehicle_menu'),
        align    = 'top-left',
        elements = elements,
      },
      function(data, menu)
        menu.close()

        local model = data.current.value
        local vehicle = GetClosestVehicle(vehicles[partNum].SpawnPoint.x,
						vehicles[partNum].SpawnPoint.y,
						vehicles[partNum].SpawnPoint.z, 3.0, 0, 71)

        if not DoesEntityExist(vehicle) then
          local playerPed = GetPlayerPed(-1)

          if Config.MaxInService == -1 then
			if (PlayerData.job.grade >= data.current.rank) then
				ESX.Game.SpawnVehicle(model, {
				  x = vehicles[partNum].SpawnPoint.x,
				  y = vehicles[partNum].SpawnPoint.y,
				  z = vehicles[partNum].SpawnPoint.z
				}, vehicles[partNum].Heading, function(vehicle)
				  TaskWarpPedIntoVehicle(playerPed,  vehicle,  -1)
				  SetVehicleMaxMods(vehicle)
          TriggerEvent("ls:newVehicle", GetPlayerServerId(PlayerId()), GetVehicleNumberPlateText(vehicle), nil)
				end)
			else
				-- ERROR
				ESX.ShowNotification('Du kannst dieses Auto mit deinem aktuellen Rang nicht ausparken.')
			end
          else

            ESX.TriggerServerCallback('esx_service:enableService', function(canTakeService, maxInService, inServiceCount)

              if canTakeService then

				if (PlayerData.job.grade >= vehicles[partNum].rank) then
					ESX.Game.SpawnVehicle(model, {
					  x = vehicles[partNum].SpawnPoint.x,
					  y = vehicles[partNum].SpawnPoint.y,
					  z = vehicles[partNum].SpawnPoint.z
					}, vehicles[partNum].Heading, function(vehicle)
					  TaskWarpPedIntoVehicle(playerPed,  vehicle,  -1)
					  SetVehicleMaxMods(vehicle)
            TriggerEvent("ls:newVehicle", GetPlayerServerId(PlayerId()), GetVehicleNumberPlateText(vehicle), nil)
					end)
				else
					-- ERROR
					ESX.ShowNotification('Du kannst dieses Auto mit deinem aktuellen Rang nicht ausparken.')
				end

              else
                ESX.ShowNotification(_U('service_max') .. inServiceCount .. '/' .. maxInService)
              end

            end, 'government')

          end

        else
          ESX.ShowNotification(_U('vehicle_out'))
        end

      end,
      function(data, menu)

        menu.close()

        CurrentAction     = 'menu_vehicle_spawner'
        CurrentActionMsg  = _U('vehicle_spawner')
        CurrentActionData = {station = station, partNum = partNum}

      end
    )

  end

end

function OpenPoliceActionsMenu()

  ESX.UI.Menu.CloseAll()

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'government_actions',
    {
      title    = 'Government',
      align    = 'top-left',
      elements = {
        {label = _U('citizen_interaction'), value = 'citizen_interaction'},
        {label = _U('vehicle_interaction'), value = 'vehicle_interaction'},
        {label = _U('object_spawner'),      value = 'object_spawner'},
      },
    },
    function(data, menu)

      if data.current.value == 'citizen_interaction' then



      end

      if data.current.value == 'vehicle_interaction' then

        ESX.UI.Menu.Open(
          'default', GetCurrentResourceName(), 'vehicle_interaction',
          {
            title    = _U('vehicle_interaction'),
            align    = 'top-left',
            elements = {
              {label = _U('vehicle_info'), value = 'vehicle_infos'},
              {label = _U('pick_lock'),    value = 'hijack_vehicle'},
            },
          },
          function(data2, menu2)

            local playerPed = GetPlayerPed(-1)
            local coords    = GetEntityCoords(playerPed)
            local vehicle   = GetClosestVehicle(coords.x,  coords.y,  coords.z,  3.0,  0,  71)

            if DoesEntityExist(vehicle) then

              local vehicleData = ESX.Game.GetVehicleProperties(vehicle)

              if data2.current.value == 'vehicle_infos' then
                OpenVehicleInfosMenu(vehicleData)
              end

              if data2.current.value == 'hijack_vehicle' then

                local playerPed = GetPlayerPed(-1)
                local coords    = GetEntityCoords(playerPed)

                if IsAnyVehicleNearPoint(coords.x, coords.y, coords.z, 3.0) then

                  local vehicle = GetClosestVehicle(coords.x,  coords.y,  coords.z,  3.0,  0,  71)

                  if DoesEntityExist(vehicle) then

                    Citizen.CreateThread(function()

                      TaskStartScenarioInPlace(playerPed, "WORLD_HUMAN_WELDING", 0, true)

                      Wait(20000)

                      ClearPedTasksImmediately(playerPed)

                      SetVehicleDoorsLocked(vehicle, 1)
                      SetVehicleDoorsLockedForAllPlayers(vehicle, false)

                      TriggerEvent('esx:showNotification', _U('vehicle_unlocked'))

                    end)

                  end

                end

              end

            else
              ESX.ShowNotification(_U('no_vehicles_nearby'))
            end

          end,
          function(data2, menu2)
            menu2.close()
          end
        )

      end

      if data.current.value == 'object_spawner' then

        ESX.UI.Menu.Open(
          'default', GetCurrentResourceName(), 'citizen_interaction',
          {
            title    = _U('traffic_interaction'),
            align    = 'top-left',
            elements = {
              {label = _U('box'),   value = 'prop_boxpile_07d'},
              {label = _U('cash'),   value = 'hei_prop_cash_crate_half_full'}
            },
          },
          function(data2, menu2)


            local model     = data2.current.value
            local playerPed = GetPlayerPed(-1)
            local coords    = GetEntityCoords(playerPed)
            local forward   = GetEntityForwardVector(playerPed)
            local x, y, z   = table.unpack(coords + forward * 1.0)

            ESX.Game.SpawnObject(model, {
              x = x,
              y = y,
              z = z
            }, function(obj)
              SetEntityHeading(obj, GetEntityHeading(playerPed))
              PlaceObjectOnGroundProperly(obj)
            end)

          end,
          function(data2, menu2)
            menu2.close()
          end
        )

      end

    end,
    function(data, menu)

      menu.close()

    end
  )

end

function openPolice()
  if PlayerData.job ~= nil and PlayerData.job.name == 'government' and not ESX.UI.Menu.IsOpen('default', GetCurrentResourceName(), 'government_actions') and (GetGameTimer() - GUI.Time) > 150 then
    OpenPoliceActionsMenu()
    GUI.Time = GetGameTimer()
  end
end

function getJob()
  if PlayerData.job ~= nil then
  return PlayerData.job.name
  end
end

function OpenIdentityCardMenu(player)

  if Config.EnableESXIdentity then

    ESX.TriggerServerCallback('esx_government:getOtherPlayerData', function(data)

      local sexLabel    = nil
      local sex         = nil
      local dobLabel    = nil
      local heightLabel = nil
      local idLabel     = nil

      if data.sex ~= nil then
        if (data.sex == 'm') or (data.sex == 'M') then
          sex = 'Mann'
        else
          sex = 'Frau'
        end
        sexLabel = 'Geschlecht : ' .. sex
      else
        sexLabel = 'Geschlecht : Unknown'
      end

      if data.dob ~= nil then
        dobLabel = 'Geb. : ' .. data.dob
      else
        dobLabel = 'Geb. : Unknown'
      end

      if data.height ~= nil then
        heightLabel = 'Größe : ' .. data.height
      else
        heightLabel = 'Größe : Unknown'
      end

      if data.name ~= nil then
        idLabel = 'ID : ' .. data.name
      else
        idLabel = 'ID : Unknown'
      end

      local elements = {
        {label = _U('name') .. data.firstname .. " " .. data.lastname, value = nil},
        {label = sexLabel,    value = nil},
        {label = dobLabel,    value = nil},
        {label = heightLabel, value = nil},
        {label = idLabel,     value = nil},
      }

      if data.drunk ~= nil then
        table.insert(elements, {label = _U('bac') .. data.drunk .. '%', value = nil})
      end

      if data.licenses ~= nil then

        table.insert(elements, {label = '--- Lizenzen ---', value = nil})

        for i=1, #data.licenses, 1 do
          table.insert(elements, {label = data.licenses[i].label, value = nil})
        end

      end

      ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'citizen_interaction',
        {
          title    = _U('citizen_interaction'),
          align    = 'top-left',
          elements = elements,
        },
        function(data, menu)

        end,
        function(data, menu)
          menu.close()
        end
      )

    end, GetPlayerServerId(player))

  else

    ESX.TriggerServerCallback('esx_government:getOtherPlayerData', function(data)

        local elements = {
          {label = _U('name') .. data.name, value = nil}
        }

      if data.drunk ~= nil then
        table.insert(elements, {label = _U('bac') .. data.drunk .. '%', value = nil})
      end

      if data.licenses ~= nil then

        table.insert(elements, {label = '--- Lizenzen ---', value = nil})

        for i=1, #data.licenses, 1 do
          table.insert(elements, {label = data.licenses[i].label, value = nil})
        end

      end

      ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'citizen_interaction',
        {
          title    = _U('citizen_interaction'),
          align    = 'top-left',
          elements = elements,
        },
        function(data, menu)

        end,
        function(data, menu)
          menu.close()
        end
      )

    end, GetPlayerServerId(player))

  end

end

function OpenCloakroomMenu()

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'cloakroom',
    {
      title    = _U('cloakroom'),
      align    = 'top-left',
      elements = {
        {label = _U('citizen_wear'), value = 'citizen_wear'},
        {label = _U('government_wear'), value = 'government_wear'},
      },
    },
    function(data, menu)

      menu.close()

      if data.current.value == 'citizen_wear' then

        ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin, jobSkin)
          TriggerEvent('skinchanger:loadSkin', skin)
        end)

      end

      if data.current.value == 'government_wear' then

        ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin, jobSkin)

          if skin.sex == 0 then
            TriggerEvent('skinchanger:loadClothes', skin, jobSkin.skin_male)
          else
            TriggerEvent('skinchanger:loadClothes', skin, jobSkin.skin_female)
          end

        end)

      end

      CurrentAction = 'menu_cloakroom'
      CurrentActionMsg = _U('open_cloackroom')
      CurrentActionData = {}

    end,
    function(data, menu)
      menu.close()
    end
  )

end

function OpenBodySearchMenu(player)

  ESX.TriggerServerCallback('esx_government:getOtherPlayerData', function(data)

    local elements = {}

    table.insert(elements, {label = '--- Waffen ---', value = nil})

    for i=1, #data.weapons, 1 do
      table.insert(elements, {
        label          = _U('confiscate') .. ESX.GetWeaponLabel(data.weapons[i].name),
        value          = data.weapons[i].name,
        itemType       = 'item_weapon',
        amount         = data.ammo,
      })
    end

    table.insert(elements, {label = _U('inventory_label'), value = nil})

    for i=1, #data.inventory, 1 do
      if data.inventory[i].count > 0 then
        table.insert(elements, {
          label          = _U('confiscate_inv') .. data.inventory[i].count .. ' ' .. data.inventory[i].label,
          value          = data.inventory[i].name,
          itemType       = 'item_standard',
          amount         = data.inventory[i].count,
        })
      end
    end


    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'body_search',
      {
        title    = _U('search'),
        align    = 'top-left',
        elements = elements,
      },
      function(data, menu)

        local itemType = data.current.itemType
        local itemName = data.current.value
        local amount   = data.current.amount

        if data.current.value ~= nil then

          TriggerServerEvent('esx_government:confiscatePlayerItem', GetPlayerServerId(player), itemType, itemName, amount)

          OpenBodySearchMenu(player)

        end

      end,
      function(data, menu)
        menu.close()
      end
    )

  end, GetPlayerServerId(player))

end

function OpenVehicleInfosMenu(vehicleData)

  ESX.TriggerServerCallback('esx_government:getVehicleInfos', function(infos)

    local elements = {}

    table.insert(elements, {label = _U('plate') .. infos.plate, value = nil})

    if infos.owner == nil then
      table.insert(elements, {label = _U('owner_unknown'), value = nil})
    else
      table.insert(elements, {label = _U('owner') .. infos.owner, value = nil})
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'vehicle_infos',
      {
        title    = _U('vehicle_info'),
        align    = 'top-left',
        elements = elements,
      },
      nil,
      function(data, menu)
        menu.close()
      end
    )

  end, vehicleData.plate)

end

function OpenGetWeaponMenu()

  ESX.TriggerServerCallback('esx_government:getArmoryWeapons', function(weapons)

    local elements = {}

    for i=1, #weapons, 1 do
      if weapons[i].count > 0 then
        table.insert(elements, {label = 'x' .. weapons[i].count .. ' ' .. ESX.GetWeaponLabel(weapons[i].name), value = weapons[i].name})
      end
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'armory_get_weapon',
      {
        title    = _U('get_weapon_menu'),
        align    = 'top-left',
        elements = elements,
      },
      function(data, menu)

        menu.close()

        ESX.TriggerServerCallback('esx_government:removeArmoryWeapon', function()
          OpenGetWeaponMenu()
        end, data.current.value)

      end,
      function(data, menu)
        menu.close()
      end
    )

  end)

end

function OpenPutWeaponMenu()

  local elements   = {}
  local playerPed  = GetPlayerPed(-1)
  local weaponList = ESX.GetWeaponList()

  for i=1, #weaponList, 1 do

    local weaponHash = GetHashKey(weaponList[i].name)

    if HasPedGotWeapon(playerPed,  weaponHash,  false) and weaponList[i].name ~= 'WEAPON_UNARMED' then
      local ammo = GetAmmoInPedWeapon(playerPed, weaponHash)
      table.insert(elements, {label = weaponList[i].label, value = weaponList[i].name})
    end

  end

  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'armory_put_weapon',
    {
      title    = _U('put_weapon_menu'),
      align    = 'top-left',
      elements = elements,
    },
    function(data, menu)

      menu.close()

      ESX.TriggerServerCallback('esx_government:addArmoryWeapon', function()
        OpenPutWeaponMenu()
      end, data.current.value)

    end,
    function(data, menu)
      menu.close()
    end
  )

end

function OpenBuyWeaponsMenu(station)

  ESX.TriggerServerCallback('esx_government:getArmoryWeapons', function(weapons)

    local elements = {}

    for i=1, #Config.GovernmentStations[station].AuthorizedWeapons, 1 do

      local weapon = Config.GovernmentStations[station].AuthorizedWeapons[i]
      local count  = 0

      for i=1, #weapons, 1 do
        if weapons[i].name == weapon.name then
          count = weapons[i].count
          break
        end
      end

      table.insert(elements, {label = 'x' .. count .. ' ' .. ESX.GetWeaponLabel(weapon.name) .. ' $' .. weapon.price, value = weapon.name, price = weapon.price})

    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'armory_buy_weapons',
      {
        title    = _U('buy_weapon_menu'),
        align    = 'top-left',
        elements = elements,
      },
      function(data, menu)

        ESX.TriggerServerCallback('esx_government:buy', function(hasEnoughMoney)

          if hasEnoughMoney then
            ESX.TriggerServerCallback('esx_government:addArmoryWeapon', function()
              OpenBuyWeaponsMenu(station)
            end, data.current.value)
          else
            ESX.ShowNotification(_U('not_enough_money'))
          end

        end, data.current.price)

      end,
      function(data, menu)
        menu.close()
      end
    )

  end)

end

function OpenGetStocksMenu()

  ESX.TriggerServerCallback('esx_government:getStockItems', function(items)

    print(json.encode(items))

    local elements = {}

    for i=1, #items, 1 do
      table.insert(elements, {label = 'x' .. items[i].count .. ' ' .. items[i].label, value = items[i].name})
    end

    ESX.UI.Menu.Open(
      'default', GetCurrentResourceName(), 'stocks_menu',
      {
        title    = _U('government_stock'),
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

              TriggerServerEvent('esx_government:getStockItem', itemName, count)
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

  ESX.TriggerServerCallback('esx_government:getPlayerInventory', function(inventory)

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

              TriggerServerEvent('esx_government:putStockItems', itemName, count)
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

RegisterNetEvent('esx_phone:loaded')
AddEventHandler('esx_phone:loaded', function(phoneNumber, contacts)

  local specialContact = {
    name       = 'Government',
    number     = 'government',
    base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAL/klEQVR4Xu2dZbA1RxGGn0AIGiS4Q3ANLsFdCq/CCgqX4O4aXAuCU0hwK7xwJziEBAsOwQsNLsHrSe0XPk6d3Z3dHdu723/uj7vb09PznpnZnrd79mCVRXtgj0X3fu08KwAWDoIVACsAFu6BhXd/nQFWACzcAwvv/joDrABYuAcW3v11BlgBsHAPLLz76wywAmDhHlh499cZYAXAwj2w8O7vhBlgT+CfCx/H0d2fCwC08xLANYD9gPMBZwT2Bo4H/Av4E/Ar4JvA14CPAIcAR4/2zgJerB0AZwLuBtwBON2I8fgz8EbgecDhI97f8a/UCoCTAY8E7g3sFWkU3go8EDgykr4doaZGAOwPvB44SwIPOyPcCzg4ge5ZqqwNALduBseNXUo5CLgf8J+UjcxBd00AuG0z+LlsejFwwBwGKaWNuZzd14crAR9sdvR9z8b8/0OAp8VUODddNQBgH+CrwBkKOM/4weWBzxVou4omawDAS4A7FfSG4LtoE0soaEaZpksD4ALAV4DjlOn+sa0KwJcVtqFI86UB8ArAzV9p+TZw3iV+FZQEwEmBnwMnLD36TftXAT5WiS3ZzCgJgFs0AZ9sne1p6PnAPWsxJpcdJQFQevO36eNvAOeP5Hhnt3MBJwdOBPwV+B3wHeD3kdqIoqYkAD4PXDJKL+Io8UTxJMDfRqq7MuCsdk3g7B06fgh8oDmk+vDItqK9VhIAPwNOH60ncRTtO+Kw6NrAU4ELjzDhCOChwLtGvBvllZIA+AVwmii9iKfEafu7geqc2l8Q6SvmtU1YWk5DVikJgG8B587a2/7GTgX8pv+xY9b29wCXDXg29JFDgWsBR4W+EOO5kgD4JHC5GJ2IpMM9gOyivhNCn3ENd82PLZ8GrjZhHzLYnpIAkKBx48EWp3vBJSmEdfQUwEOkVPIc4D6plG/qLQkA10/pXrWIIWn5hl1yoYZadtyERjsDXQpwSUguJQHwaODA5D0Mb8DjaD/huuRtwI3CVY5+8n3AdUa/PeDFkgDwAMZgUC3yauA2HcbIQv5RxoOrcwLfS+2ckgAQ4e6kaxGJIV1ru1xC1+dckoWsUhIAHr7I3a9FHg+4LLXJm4CbZjTW4ND1U7dXEgDSvnV6LfKhJvGkzZ7DGuJILntNcDEBJqmUBIDfvDEDKVMdJT3MAI/U8W1itpEEllzyg54zhSh2lATATwvxALscdx5Acsg2+RRgzkIucca5eOrGSgJARxt7r0lMRROY2yTXJ+Cutt8LXDe1c0oC4B3ADVJ3cIB+D2I8x28LBb8IuOsAfVMflS53+6lK+t4vCYCHA0/sMzDj/z2bv3pHe48BHpvRHkPOD0vdXkkAeBDkgVAt4gA/rsOYuwBmE+USU9eenbqxkgDwVO3XzbSbup8h+gWkXyZtcrOGxROiK8YzTv8uA0mlJADs2OuAWybtYZhy2cmGev/d8bisnweHqYvylL9+Z4GkUhoA5gTWQMV+AvCoHk+bPuYpXS75Uo7AU2kA6Mx35gh5doyaPAC///vYuh4XexycS/xM1q6kUgMArP3zhaS97Fbu18iTA9rPHQeQdSRFLKnUAAA7WJIgamKo022fyN4NAUqfntD/9x1OherpfK4WAHgsnIUAseGNvwMnDiwzdxngM1G8HqbkqsBHwx4d/1QtAPCX5S8st1g57GKBjUoDM5chB5XdLKLTAgI0qdQCgJsDb0ja0+3KXw7ccUC7uYD6LOD+A+wa/WgtALAimClTueXOwEsHNOpZgTQt8wdSib/+c+TKD6gFADrz+znOvzdGbQzvznCwYeFUkuUQaJfxNQHguZnTs8cybqxamrKayD2alLNUAPs/vTUBQHZQVyw+tkP6Dn/a2ksdt+g7k4jqh5oAYMcMCOng1GIKuCncngEMleMDf4hYwnb39k1Ps0xuGy1tqK29z9cGgFxM4alBllR8xi9m+gEcC4zaAKBhqU/dDOaY2DnlG1tiiEtIbMlCAtnd6BoBYMk4KdrOBrHll00hB0PPU8RiEF+eoqDlXU8bs56L1AgAfaMjUlTvfBDwjEgDF7vETZbj382+1woA7TIgYuAlphj2jXVxxA2Bt0c0zqyjN0fUF6SqVgBovFW7LN4YU4yvuwzEEomkHtpMlY8nKjjRa1fNAHBK7MvX7+3gxgNm/vQRP4bovEikGSXmzDTEfmoGgFO1Do4pfmP7DR9TpgLVYtVjKoxF6cPSAOCe4o9RPPc/JdYV8KaTsSIx9lZjX5763gqAqR4ES8zefYKaojeX1AyAFNm4p0xwzCp9e0pRpxdOBNAE7FH1HuDHgMmaMeVsCXgHUyOXKwC2jLAl5E3WjH2RhCFgP7liimVjLB8zVtYlYIvnYgdZdjVh7l/sGP7UE0xvNrXIdBGpcQ9gDd7PJkrC8G5hq3z4N4Z4v4BElilibWJL5vZVKJ3SRuu7tQFAbqDk0JSlY4wvOMO4xxgrxhOeFHHzZnGqIvWSagGAu/P7NsmQ8vRTi8EgGb5+wg2NCzhDSSQ1WzhmxVA5Bk9vSsdbryiLlAaAoV6/oQ2E5Bj4TacaFn5lM6BG5IaIdx0YALpdxJtGbN+jamdBS8gnPxouAQCnTzc98vFrujHE8/1XNSnrQ6lil26YwvbLGSKWmCD6msauJLT5XACwHU/NLHpwk4puCts2UPLyrBssGDzu9b6fUBHcUsYNDFlvIJa4QTRNTDbyW4CjYylODYAzA9KoHfizxjI6ox6XCK+yd82XrxcqezUznMUwY1+J64UWBzfU8SNDDWp7LgUADN54j46l4C1zFjuYM7XPY9+3bp9ROw9v/hKoxOXA9HOZSIIipljNxBnKGsej2VMxAeCNW/7ajYqZcbNT5bdNlXO//38S2MkLNsBJVWBCDqWzzWAgxACAn3CueQZFThHokJ3w2D+aQfVz0vuP+sTwtmlffj6mEr8eHtBkMQe1MQUAnq1bNMnB99e/VHEqdp9gjaG+Ndnl0P1EygKQcilNeg3iF44BgO942YORsJRZsnMDlHkGBzW1Bruuf9uzuXQqBe19d5+ZXm6aeacMBYDpVAZOrtCneMH/91YRf+FddyEY8nbZOEFCP/npeMW+YpxDAODO3jXGb91Vuj3gsmB8v6sUbo5Ls7ySpzOVPRQA1u+xuLPVPVcJ94DL5CNaHs9RI/HdwPW6zA0BgLt8b71e0g4/fIj7n7QA9bZLoo0RuFcIGYP+VrY/cQgg0FolpPEYZ95jO7AT3rO+oOHvbZL6Am0Pkzqrm4YAYCrrdScM4pQ+dFUi8XLIlLeC9OYchAAg921ZU5xd47tWRD91i2Ee8KS4g3hXc73lZkMA8P6AGzVrdHwtNnly1/a55yYt5bUwBqb2nboHyH1ZUi0DF9MOgz8eM29K6gu0pb0Zc5i0Ccx9X15Mx9eia+9mx79pjyHklIxgiS0ylyYB4Os5LjCsZaQS2WHI3HP8TTGq2nVf8VRzZD93lrYN2QNYGbNzHZlq5QLelx3kJ9+meDA0pFTtUFcdBRjHmTQDGNuW2bPKeA+0paRJMDlgvNreN2U0WRNhEgBcR6ysscp4D3hBpgkgmzI1razPIiON7j8mAcC1a5++ltb/d3rAS6ANCG2Kx7XmQ6QSqWuddPuQPYAEg/UEcNoQSQk7YosKK5bJ4EklMpo7aeohAHAaKZG0kcopJfRa6mZbXcHU9w90BaGO8UMIAERRSuJCiQHJ3abxfuMpm+J1dW3HxTFslKVkbeNJewBRFJvSHKNzc9LRVgH0wIY4kqovElc7xy5kBjBRMWYSZKrO1qx3/5YLpySSdt1XPLVPjl0niScEAMawd0pyx1SHjn2/7Q4Ap3+XgVQiNa3zxxsCAJWEPJeqEztBr+TMT2zpSOq7CCWGdv54Qwa2SOWKnTDqu/VBWpb0rE0xr8IiU6lkBUAqzw7U2wYAufvPHKhr6OOdP/KQGWBog+vzM/LACoAZDVYKU1cApPDqjHSuAJjRYKUwdQVACq/OSOcKgBkNVgpTVwCk8OqMdK4AmNFgpTB1BUAKr85I5wqAGQ1WClNXAKTw6ox0rgCY0WClMHUFQAqvzkjnCoAZDVYKU1cApPDqjHSuAJjRYKUw9b8Om7WQgGLWnQAAAABJRU5ErkJggg=='
  }

  TriggerEvent('esx_phone:addSpecialContact', specialContact.name, specialContact.number, specialContact.base64Icon)

end)

AddEventHandler('esx_government:hasEnteredMarker', function(station, part, partNum)

  if part == 'Cloakroom' then
    CurrentAction = 'menu_cloakroom'
    CurrentActionMsg = _U('open_cloackroom')
    CurrentActionData = {}
  end

  if part == 'Armory' then
    CurrentAction     = 'menu_armory'
    CurrentActionMsg  = _U('open_armory')
    CurrentActionData = {station = station}
  end

  if part == 'VehicleSpawner' then
    CurrentAction     = 'menu_vehicle_spawner'
    CurrentActionMsg  = _U('vehicle_spawner')
    CurrentActionData = {station = station, partNum = partNum}
  end

  if part == 'HelicopterSpawner' then

    local helicopters = Config.GovernmentStations[station].Helicopters

    if not IsAnyVehicleNearPoint(helicopters[partNum].SpawnPoint.x, helicopters[partNum].SpawnPoint.y, helicopters[partNum].SpawnPoint.z,  3.0) then

      ESX.Game.SpawnVehicle('supervolito', {
        x = helicopters[partNum].SpawnPoint.x,
        y = helicopters[partNum].SpawnPoint.y,
        z = helicopters[partNum].SpawnPoint.z
      }, helicopters[partNum].Heading, function(vehicle)
      end)

    end

    ESX.ShowNotification("Ein Maverick steht auf dem ~b~Helikopter-Platz~w~ zur verfügung.")

  end

  if part == 'VehicleDeleter' then

    local playerPed = GetPlayerPed(-1)
    local coords    = GetEntityCoords(playerPed)

    if IsPedInAnyVehicle(playerPed,  false) then

      local vehicle = GetVehiclePedIsIn(playerPed, false)

      if DoesEntityExist(vehicle) then
        CurrentAction     = 'delete_vehicle'
        CurrentActionMsg  = _U('store_vehicle')
        CurrentActionData = {vehicle = vehicle}
      end

    end

  end

  if part == 'BossActions' then
    CurrentAction     = 'menu_boss_actions'
    CurrentActionMsg  = _U('open_bossmenu')
    CurrentActionData = {}
  end

end)

AddEventHandler('esx_government:hasExitedMarker', function(station, part, partNum)
  ESX.UI.Menu.CloseAll()
  CurrentAction = nil
end)

AddEventHandler('esx_government:hasEnteredEntityZone', function(entity)

  local playerPed = GetPlayerPed(-1)

  if PlayerData.job ~= nil and PlayerData.job.name == 'government' and not IsPedInAnyVehicle(playerPed, false) then
    CurrentAction     = 'remove_entity'
    CurrentActionMsg  = _U('remove_object')
    CurrentActionData = {entity = entity}
  end

end)

AddEventHandler('esx_government:hasExitedEntityZone', function(entity)

  if CurrentAction == 'remove_entity' then
    CurrentAction = nil
  end

end)

RegisterNetEvent('esx_government:handcuff')
AddEventHandler('esx_government:handcuff', function()

  IsHandcuffed    = not IsHandcuffed;
  local playerPed = GetPlayerPed(-1)

  Citizen.CreateThread(function()

    if IsHandcuffed then

      RequestAnimDict('mp_arresting')

      while not HasAnimDictLoaded('mp_arresting') do
        Wait(1)
      end

      TaskPlayAnim(playerPed, 'mp_arresting', 'idle', 8.0, -8, -1, 49, 0, 0, 0, 0)
      SetEnableHandcuffs(playerPed, true)
      SetPedCanPlayGestureAnims(playerPed, false)
      FreezeEntityPosition(playerPed,  true)

    else

      ClearPedSecondaryTask(playerPed)
      SetEnableHandcuffs(playerPed, false)
      SetPedCanPlayGestureAnims(playerPed,  true)
      FreezeEntityPosition(playerPed, false)

    end

  end)
end)

RegisterNetEvent('esx_government:drag')
AddEventHandler('esx_government:drag', function(cop)
  TriggerServerEvent('esx:clientLog', 'starting dragging')
  IsDragged = not IsDragged
  CopPed = tonumber(cop)
end)

Citizen.CreateThread(function()
  while true do
    Wait(0)
    if IsHandcuffed then
      if IsDragged then
        DoScreenFadeOut(500)
        local ped = GetPlayerPed(GetPlayerFromServerId(CopPed))
        local myped = GetPlayerPed(-1)
        AttachEntityToEntity(myped, ped, 11816, 0.54, 0.54, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true)
      else
        DoScreenFadeIn(500)
        DetachEntity(GetPlayerPed(-1), true, false)
      end
    end
  end
end)

RegisterNetEvent('esx_government:putInVehicle')
AddEventHandler('esx_government:putInVehicle', function()

  local playerPed = GetPlayerPed(-1)
  local coords    = GetEntityCoords(playerPed)

  if IsAnyVehicleNearPoint(coords.x, coords.y, coords.z, 5.0) then

    local vehicle = GetClosestVehicle(coords.x,  coords.y,  coords.z,  5.0,  0,  71)

    if DoesEntityExist(vehicle) then

      local maxSeats = GetVehicleMaxNumberOfPassengers(vehicle)
      local freeSeat = nil

      for i=maxSeats - 1, 0, -1 do
        if IsVehicleSeatFree(vehicle,  i) then
          freeSeat = i
          break
        end
      end

      if freeSeat ~= nil then
        TaskWarpPedIntoVehicle(playerPed,  vehicle,  freeSeat)
      end

    end

  end

end)

RegisterNetEvent('esx_government:OutVehicle')
AddEventHandler('esx_government:OutVehicle', function(t)
  local ped = GetPlayerPed(t)
  ClearPedTasksImmediately(ped)
  plyPos = GetEntityCoords(GetPlayerPed(-1),  true)
  local xnew = plyPos.x+2
  local ynew = plyPos.y+2

  SetEntityCoords(GetPlayerPed(-1), xnew, ynew, plyPos.z)
end)

-- Handcuff
Citizen.CreateThread(function()
  while true do
    Wait(0)
    if IsHandcuffed then
      DisableControlAction(0, 24,   true) -- Input Attack
      DisableControlAction(0, 140,  true) -- Melee Attack Alternate
      DisableControlAction(0, 141,  true) -- Melee Attack Alternate
      DisableControlAction(0, 142,  true) -- Melee Attack Alternate
      DisableControlAction(0, 257,  true) -- Input Attack 2
      DisableControlAction(0, 263,  true) -- Input Melee Attack
      DisableControlAction(0, 264,  true) -- Input Melee Attack 2

      DisableControlAction(0, 30,  true) -- MoveLeftRight
      DisableControlAction(0, 31,  true) -- MoveUpDown
    end
  end
end)

-- Create blips
Citizen.CreateThread(function()

  for k,v in pairs(Config.GovernmentStations) do

    local blip = AddBlipForCoord(v.Blip.Pos.x, v.Blip.Pos.y, v.Blip.Pos.z)

    SetBlipSprite (blip, 419)
    SetBlipDisplay(blip, 4)
    SetBlipScale  (blip, 1.2)
    SetBlipAsShortRange(blip, true)

    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString("Gouvernement")
    EndTextCommandSetBlipName(blip)

  end

end)

-- Display markers
Citizen.CreateThread(function()
  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'government' then

      local playerPed = GetPlayerPed(-1)
      local coords    = GetEntityCoords(playerPed)

      for k,v in pairs(Config.GovernmentStations) do

        for i = 1, #v.Cloakrooms, 1 do
          if GetDistanceBetweenCoords(coords, v.Cloakrooms[i].x, v.Cloakrooms[i].y, v.Cloakrooms[i].z, true) < Config.DrawDistance then
            DrawMarker(Config.MarkerType, v.Cloakrooms[i].x, v.Cloakrooms[i].y, v.Cloakrooms[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
          end
        end

        for i=1, #v.Armories, 1 do
          if GetDistanceBetweenCoords(coords,  v.Armories[i].x,  v.Armories[i].y,  v.Armories[i].z,  true) < Config.DrawDistance then
            DrawMarker(Config.MarkerType, v.Armories[i].x, v.Armories[i].y, v.Armories[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
          end
        end

        for i=1, #v.Vehicles, 1 do
          if GetDistanceBetweenCoords(coords,  v.Vehicles[i].Spawner.x,  v.Vehicles[i].Spawner.y,  v.Vehicles[i].Spawner.z,  true) < Config.DrawDistance then
            DrawMarker(Config.MarkerType, v.Vehicles[i].Spawner.x, v.Vehicles[i].Spawner.y, v.Vehicles[i].Spawner.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
          end
        end

        for i=1, #v.Helicopters, 1 do
          if GetDistanceBetweenCoords(coords,  v.Helicopters[i].Spawner.x,  v.Helicopters[i].Spawner.y,  v.Helicopters[i].Spawner.z,  true) < Config.DrawDistance then
            DrawMarker(Config.MarkerType, v.Helicopters[i].Spawner.x, v.Helicopters[i].Spawner.y, v.Helicopters[i].Spawner.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
          end
        end

        for i=1, #v.VehicleDeleters, 1 do
          if GetDistanceBetweenCoords(coords,  v.VehicleDeleters[i].x,  v.VehicleDeleters[i].y,  v.VehicleDeleters[i].z,  true) < Config.DrawDistance then
            DrawMarker(Config.MarkerType, v.VehicleDeleters[i].x, v.VehicleDeleters[i].y, v.VehicleDeleters[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
          end
        end

        if Config.EnablePlayerManagement and PlayerData.job ~= nil and PlayerData.job.name == 'government' and (PlayerData.job.grade_name == 'boss' or PlayerData.job.grade_name == 'experience') then

          for i=1, #v.BossActions, 1 do
            if not v.BossActions[i].disabled and GetDistanceBetweenCoords(coords,  v.BossActions[i].x,  v.BossActions[i].y,  v.BossActions[i].z,  true) < Config.DrawDistance then
              DrawMarker(Config.MarkerType, v.BossActions[i].x, v.BossActions[i].y, v.BossActions[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.MarkerSize.x, Config.MarkerSize.y, Config.MarkerSize.z, Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
            end
          end

        end

      end

    end

  end
end)

-- Enter / Exit marker events
Citizen.CreateThread(function()

  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'government' then

      local playerPed      = GetPlayerPed(-1)
      local coords         = GetEntityCoords(playerPed)
      local isInMarker     = false
      local currentStation = nil
      local currentPart    = nil
      local currentPartNum = nil

      for k,v in pairs(Config.GovernmentStations) do

        for i=1, #v.Armories, 1 do
          if GetDistanceBetweenCoords(coords,  v.Armories[i].x,  v.Armories[i].y,  v.Armories[i].z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'Armory'
            currentPartNum = i
          end
        end

        for i = 1, #v.Cloakrooms, 1 do
          if GetDistanceBetweenCoords(coords, v.Cloakrooms[i].x, v.Cloakrooms[i].y, v.Cloakrooms[i].z, true) < Config.MarkerSize.x then
            isInMarker = true
            currentStation = k
            currentPart = 'Cloakroom'
            currentPartNum = i
          end
        end

        for i=1, #v.Vehicles, 1 do

          if GetDistanceBetweenCoords(coords,  v.Vehicles[i].Spawner.x,  v.Vehicles[i].Spawner.y,  v.Vehicles[i].Spawner.z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'VehicleSpawner'
            currentPartNum = i
          end

          if GetDistanceBetweenCoords(coords,  v.Vehicles[i].SpawnPoint.x,  v.Vehicles[i].SpawnPoint.y,  v.Vehicles[i].SpawnPoint.z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'VehicleSpawnPoint'
            currentPartNum = i
          end

        end

        for i=1, #v.Helicopters, 1 do

          if GetDistanceBetweenCoords(coords,  v.Helicopters[i].Spawner.x,  v.Helicopters[i].Spawner.y,  v.Helicopters[i].Spawner.z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'HelicopterSpawner'
            currentPartNum = i
          end

          if GetDistanceBetweenCoords(coords,  v.Helicopters[i].SpawnPoint.x,  v.Helicopters[i].SpawnPoint.y,  v.Helicopters[i].SpawnPoint.z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'HelicopterSpawnPoint'
            currentPartNum = i
          end

        end

        for i=1, #v.VehicleDeleters, 1 do
          if GetDistanceBetweenCoords(coords,  v.VehicleDeleters[i].x,  v.VehicleDeleters[i].y,  v.VehicleDeleters[i].z,  true) < Config.MarkerSize.x then
            isInMarker     = true
            currentStation = k
            currentPart    = 'VehicleDeleter'
            currentPartNum = i
          end
        end

        if Config.EnablePlayerManagement and PlayerData.job ~= nil and PlayerData.job.name == 'government' and (PlayerData.job.grade_name == 'boss' or PlayerData.job.grade_name == 'experience') then

          for i=1, #v.BossActions, 1 do
            if GetDistanceBetweenCoords(coords,  v.BossActions[i].x,  v.BossActions[i].y,  v.BossActions[i].z,  true) < Config.MarkerSize.x then
              isInMarker     = true
              currentStation = k
              currentPart    = 'BossActions'
              currentPartNum = i
            end
          end

        end

      end

      local hasExited = false

      if isInMarker and not HasAlreadyEnteredMarker or (isInMarker and (LastStation ~= currentStation or LastPart ~= currentPart or LastPartNum ~= currentPartNum) ) then

        if
          (LastStation ~= nil and LastPart ~= nil and LastPartNum ~= nil) and
          (LastStation ~= currentStation or LastPart ~= currentPart or LastPartNum ~= currentPartNum)
        then
          TriggerEvent('esx_government:hasExitedMarker', LastStation, LastPart, LastPartNum)
          hasExited = true
        end

        HasAlreadyEnteredMarker = true
        LastStation             = currentStation
        LastPart                = currentPart
        LastPartNum             = currentPartNum

        TriggerEvent('esx_government:hasEnteredMarker', currentStation, currentPart, currentPartNum)
      end

      if not hasExited and not isInMarker and HasAlreadyEnteredMarker then

        HasAlreadyEnteredMarker = false

        TriggerEvent('esx_government:hasExitedMarker', LastStation, LastPart, LastPartNum)
      end

    end

  end
end)

-- Enter / Exit entity zone events
Citizen.CreateThread(function()

  local trackedEntities = {
    'prop_boxpile_07d',
    'hei_prop_cash_crate_half_full'
  }

  while true do

    Citizen.Wait(0)

    local playerPed = GetPlayerPed(-1)
    local coords    = GetEntityCoords(playerPed)

    local closestDistance = -1
    local closestEntity   = nil

    for i=1, #trackedEntities, 1 do

      local object = GetClosestObjectOfType(coords.x,  coords.y,  coords.z,  3.0,  GetHashKey(trackedEntities[i]), false, false, false)

      if DoesEntityExist(object) then

        local objCoords = GetEntityCoords(object)
        local distance  = GetDistanceBetweenCoords(coords.x,  coords.y,  coords.z,  objCoords.x,  objCoords.y,  objCoords.z,  true)

        if closestDistance == -1 or closestDistance > distance then
          closestDistance = distance
          closestEntity   = object
        end

      end

    end

    if closestDistance ~= -1 and closestDistance <= 3.0 then

      if LastEntity ~= closestEntity then
        TriggerEvent('esx_government:hasEnteredEntityZone', closestEntity)
        LastEntity = closestEntity
      end

    else

      if LastEntity ~= nil then
        TriggerEvent('esx_government:hasExitedEntityZone', LastEntity)
        LastEntity = nil
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

      if IsControlPressed(0,  Keys['E']) and PlayerData.job ~= nil and PlayerData.job.name == 'government' and (GetGameTimer() - GUI.Time) > 150 then

        if CurrentAction == 'menu_cloakroom' then
          OpenCloakroomMenu()
        end

        if CurrentAction == 'menu_armory' then
          OpenArmoryMenu(CurrentActionData.station)
        end

        if CurrentAction == 'menu_vehicle_spawner' then
          OpenVehicleSpawnerMenu(CurrentActionData.station, CurrentActionData.partNum)
        end

        if CurrentAction == 'delete_vehicle' then
          ESX.Game.DeleteVehicle(CurrentActionData.vehicle)
        end

        if CurrentAction == 'menu_boss_actions' then

          ESX.UI.Menu.CloseAll()

          TriggerEvent('esx_society:openBossMenu', 'government', function(data, menu)

            menu.close()

            CurrentAction     = 'menu_boss_actions'
            CurrentActionMsg  = _U('open_bossmenu')
            CurrentActionData = {}

          end)

        end

        if CurrentAction == 'remove_entity' then
          DeleteEntity(CurrentActionData.entity)
        end

        CurrentAction = nil
        GUI.Time      = GetGameTimer()

      end

    end

    if IsControlPressed(0,  Keys['F6']) and PlayerData.job ~= nil and PlayerData.job.name == 'government' and not ESX.UI.Menu.IsOpen('default', GetCurrentResourceName(), 'government_actions') and (GetGameTimer() - GUI.Time) > 150 then
      OpenPoliceActionsMenu()
      GUI.Time = GetGameTimer()
    end

  end
end)
