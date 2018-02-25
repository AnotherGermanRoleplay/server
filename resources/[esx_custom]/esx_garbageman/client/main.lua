ESX                  = nil
local PlayerLoaded   = false
local onDuty         = false
local PlayerData     = nil
local hasVehicle     = false
local jobVehicle     = nil
local timePlayerLeftVehicle = 0
local hasDestination = false
local destination    = nil
local atBin          = false
local bins           = Config.Bins
local test 		     = false

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
  PlayerData = ESX.GetPlayerData()
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
  PlayerLoaded = true
  PlayerData = xPlayer
  for k,v in pairs(Config.Bins) do
    v.Visible = true
    v.fullAgain = 0
    v.CurrentAmount = v.MaxAmount
  end
  bins = Config.Bins
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
  PlayerData.job = job
end)


RegisterNetEvent('esx_garbageman:startjob')
AddEventHandler('esx_garbageman:startjob', function()
  if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' then
  	if not onDuty then
      TriggerEvent("chatMessage", "Mülldeponie", {255, 0, 0}, "Wilkommen im Dienst.\nHol dir dein Dienstfahrzeug.")
      onDuty = true
      TriggerEvent('esx_garbageman:findNextDestination')
    else      
      TriggerEvent("chatMessage", "Mülldeponie", {255, 0, 0}, "Bitte fahre dein Fahrzeug zurück zur Mülldeponie,\num eine Bezahlung zu erhalten.")
    end
  end
end)

RegisterNetEvent('esx_garbageman:payCheck')
AddEventHandler('esx_garbageman:payCheck', function(amount)
  TriggerEvent("chatMessage", "Mülldeponie", {255, 0, 0}, "Du hast Müllsäcke abgegeben und dafür ".. amount .."$ erhalten.")
end)

RegisterNetEvent('esx_garbageman:hasEnteredBin')
AddEventHandler('esx_garbageman:hasEnteredBin', function(zone)
  if atBin == false then
    atBin = true
  end
  Citizen.CreateThread(function()
  	local tookAtThisBin = 0
    while atBin == true do
      Wait(3000)
	    for k,v in pairs(bins) do
    	  if k == zone then
    	    if v.CurrentAmount > 0 then
    	      v.CurrentAmount = v.CurrentAmount - 1
    	      TriggerServerEvent('esx_garbageman:takeBinSack')
    	    end
    	    if v.CurrentAmount == 0 then
    	      v.Visible = false
    	  	  v.fullAgain = GetGameTimer() + Config.refillTime
    	  	  atBin = false
    	    end
    	  end
        end
    end
      Config.Bins = bins
  end)
end)

RegisterNetEvent('esx_garbageman:hasExitedBin')
AddEventHandler('esx_garbageman:hasExitedBin', function(zone)
  if atBin == true then
    atBin = false
    for k,v in pairs(bins) do
    	if k == zone then
    	  v.Visible = false
    	  v.fullAgain = GetGameTimer() + Config.refillTime
    	end
    end
    Config.Bins = bins
  end
end)


RegisterNetEvent('esx_garbageman:findNextDestination')
AddEventHandler('esx_garbageman:findNextDestination', function()
  local x, y, z = table.unpack(GetEntityCoords(GetPlayerPed(-1), false))

end)


AddEventHandler('esx_garbageman:hasEnteredMarker', function(zone)
  if zone == 'bilb' and onDuty == true and hasVehicle == false then
    local hash = GetHashKey(Config.Vehicles.Grade1.Model)

    RequestModel(hash)
    while not HasModelLoaded(hash) do
	  RequestModel(hash)
	  Citizen.Wait(0)
    end
	
	local x, y, z = table.unpack(GetEntityCoords(GetPlayerPed(-1), false))
	jobVehicle = CreateVehicle(hash, x + 2, y + 2, z + 1, 0.0, true, false)
	SetPedIntoVehicle(GetPlayerPed(-1), jobVehicle, 0)
	SetVehicleNumberPlateText(jobVehicle, 'Mülldeponie LS')
    hasVehicle = true
  end
  
  if zone == 'endGarbageJob' and onDuty == true and hasVehicle == true then
    if jobVehicle ~= nil then
    	if onDuty then
          TriggerServerEvent('esx_garbageman:payPlayer')
    	else
    	  KnockPedOffVehicle(GetPlayerPed(-1))
    	  ESX.Game.DeleteVehicle(jobVehicle)
    	  jobVehicle = nil
    	  hasVehicle = false
    	  TriggerServerEvent('esx_garbageman:payPlayer')
    	end
    end
  end
end)

-- Create Blips0
Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do	
    Wait(0)
    if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' then
      local blip = AddBlipForCoord(Config.Zones.bilb.Pos.x, Config.Zones.bilb.Pos.y, Config.Zones.bilb.Pos.z)
      SetBlipSprite (blip, 104)
      SetBlipDisplay(blip, 4)
      SetBlipScale  (blip, 1.0)
      SetBlipColour (blip, 5)
      SetBlipAsShortRange(blip, true)
      BeginTextCommandSetBlipName("STRING")
      AddTextComponentString("Müllabfuhr")
      EndTextCommandSetBlipName(blip)
    end
  end
end)

-- Display markers
Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do
    Wait(0)
    if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' then

      local coords = GetEntityCoords(GetPlayerPed(-1))

      for k,v in pairs(Config.Zones) do
        if(v.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < Config.DrawDistance) then
          DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
        end
      end

    end

  end
end)

Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' then

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
        TriggerEvent('esx_garbageman:hasEnteredMarker', currentZone)
      end

      if not isInMarker and HasAlreadyEnteredMarker then
        HasAlreadyEnteredMarker = false
        TriggerEvent('esx_garbageman:hasExitedMarker', LastZone)
      end

    end

  end
end)

-- Check if Player is at any Bin
Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do

    Wait(0)

    if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' and onDuty == true and hasVehicle == true then

      local bin_coords      = GetEntityCoords(GetPlayerPed(-1))
      local bin_isInMarker  = false
      local bin_currentZone = nil

      for k,v in pairs(bins) do
        if(GetDistanceBetweenCoords(bin_coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < v.Size.x) then
          bin_isInMarker  = true
          bin_currentZone = k
        end
      end

      if (bin_isInMarker and not bin_HasAlreadyEnteredMarker) or (bin_isInMarker and bin_LastZone ~= bin_currentZone) then
        bin_HasAlreadyEnteredMarker = true
        bin_LastZone                = bin_currentZone
        TriggerEvent('esx_garbageman:hasEnteredBin', bin_currentZone)
      end

      if not bin_isInMarker and bin_HasAlreadyEnteredMarker then
        bin_HasAlreadyEnteredMarker = false
        TriggerEvent('esx_garbageman:hasExitedBin', bin_LastZone)
      end

    end

  end
end)

-- Check if player is near any Bin
Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do

    Wait(0)
    local list = {'hei_prop_heist_binbag', 'prop_bin_04a', 'prop_bin_10a', 'prop_bin_10b', 'prop_bin_11a', 'prop_bin_11b', 'prop_bin_12a', 'prop_bin_13a', 'prop_bin_14a', 'prop_bin_14b'}
    for k,v in pairs(list) do
      if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' and onDuty == true and hasVehicle == true then
        local ped = GetPlayerPed(-1)
        local obj = GetClosestObjectOfType(GetEntityCoords(ped).x, GetEntityCoords(ped).y, GetEntityCoords(ped).z, 3.0, GetHashKey(v), false, true, true)
        local dist = GetDistanceBetweenCoords(GetEntityCoords(ped), GetEntityCoords(obj), true)
        local coord = GetEntityCoords(obj, true)
        if dist < 10 then
          TriggerEvent('esx_garbageman:TEST', coord)
        end
      end
    end
  end	
end)

-- Display markers for Bins
Citizen.CreateThread(function()
  while PlayerLoaded == false do
    Wait(0)
  end
  while true do
    Wait(0)
    if PlayerData.job ~= nil and PlayerData.job.name == 'garbageman' and onDuty == true and hasVehicle == true then

      local coords = GetEntityCoords(GetPlayerPed(-1))

      for k,v in pairs(Config.Bins) do
      	if v.fullAgain < GetGameTimer() then
      	  v.Visible = true
      	end
        if(v.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos.x, v.Pos.y, v.Pos.z, true) < Config.DrawDistance and v.Visible == true) then
            DrawMarker(v.Type, v.Pos.x, v.Pos.y, v.Pos.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, v.Size.x, v.Size.y, v.Size.z, v.Color.r, v.Color.g, v.Color.b, 100, false, true, 2, false, false, false, false)
        end
      end

    end

  end
end)