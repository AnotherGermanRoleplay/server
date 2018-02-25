-- CONFIG --
Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
  PlayerData = xPlayer
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
  PlayerData.job = job
end)

-- Allow passengers to shoot
local passengerDriveBy = true

-- CODE --

Citizen.CreateThread(function()
	while true do
		Wait(1)

		playerPed = GetPlayerPed(-1)
		car = GetVehiclePedIsIn(playerPed, false)
		if car then
			if GetPedInVehicleSeat(car, -1) == playerPed and PlayerData.job.name ~= 'police' then
				SetPlayerCanDoDriveBy(PlayerId(), false)
			elseif GetPedInVehicleSeat(car, -1) == playerPed and PlayerData.job.name == 'police' then
				if GetSelectedPedWeapon(playerPed) == GetHashKey("weapon_stungun") then
					SetPlayerCanDoDriveBy(PlayerId(), true)
				else
					SetPlayerCanDoDriveBy(PlayerId(), false)
				end
			elseif passengerDriveBy then
				SetPlayerCanDoDriveBy(PlayerId(), true)
			else
				SetPlayerCanDoDriveBy(PlayerId(), false)
			end
		end
	end
end)