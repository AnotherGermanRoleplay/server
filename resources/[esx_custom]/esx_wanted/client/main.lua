ESX              = nil
wantedDisabled	 = true
permanentWanted  = false
wantedLevel      = 0
runningTimeout   = nil

local playerId = PlayerId()
local PlayerData = {}

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

---------------------------Events---------------------------

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
  PlayerData = xPlayer

end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
  PlayerData.job = job
end)

RegisterNetEvent('esx_wanted:setWanted')
AddEventHandler('esx_wanted:setWanted', function(player, level, permanent, timeout)

	if runningTimeout ~= nil then
		ESX.ClearTimeout(runningTimeout)
		runningTimeout = nil
	end

	if level < 6 then
		wantedLevel = level
	else
		wantedLevel = 5
	end
	wantedDisabled = false

	if timeout > 0 and permanent == false then
		runningTimeout = ESX.SetTimeout(timeout, function()
			wantedLevel = 0
			wantedDisabled = true
		end)
	elseif timeout == 0 and permanent == false then
		wantedLevel = 0
		wantedDisabled = true
	end

end)

---------------------------Threads---------------------------

Citizen.CreateThread(function()
	while true do

		Citizen.Wait(0)

		if wantedDisabled == true and Config.DisableWantedLevel then
	  		-- if GetPlayerWantedLevel(playerId) ~= 0 and ESX.PlayerData.job.name == 'police' then
		    if GetPlayerWantedLevel(playerId) ~= 0 and wantedDisabled then
		        SetPlayerWantedLevel(playerId, 0, false)
		        SetPlayerWantedLevelNow(playerId, false)
		    end

		else

			if GetPlayerWantedLevel(playerId) ~= wantedLevel and wantedLevel > 0 then
		        SetPlayerWantedLevel(playerId, wantedLevel, false)
		        SetPlayerWantedLevelNow(playerId, false)
			end

		end

	end
end)