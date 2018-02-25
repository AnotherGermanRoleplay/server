ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

Citizen.CreateThread(function() -- Creates thread
	while true do -- infinite loop
		Citizen.Wait(0) -- wait so it doesnt crash
		if IsPlayerFreeAiming(PlayerId()) then -- checks if player is aiming around
			if IsPedShooting(GetPlayerPed(-1)) then -- checks if ped is shooting
				
				local entity = getEntity(PlayerId())

				if IsEntityAVehicle(entity) then
					local pedDriver = GetPedInVehicleSeat(entity, -1)

					if IsPedAPlayer(pedDriver) then --Wenn ein spieler
						local player = getPlayerFromPed(pedDriver)
						if player ~= nil then
							TriggerServerEvent('esx_tazerEngine:Serversynchro', player, entity)
						end
					else
						TaskLeaveVehicle(pedDriver, entity, 0)
					end
				end
			end
		end
	end
end)


function getEntity(player) --Function To Get Entity Player Is Aiming At

	if GetSelectedPedWeapon(GetPlayerPed(-1)) ~= 911657153 then
		return nil
	end

	local result, entity = GetEntityPlayerIsFreeAimingAt(player)
	
	if IsEntityAVehicle(entity) then
		return entity
	end

	if IsEntityAPed(entity) then
		local veh = GetVehiclePedIsIn(entity, false)
		if veh ~= nil then
			return veh
		end
	end

	return entity
end

RegisterNetEvent('esx_tazerEngine:Clientsynchro')
AddEventHandler('esx_tazerEngine:Clientsynchro', function(player, entity)
	local veh = GetVehiclePedIsIn(GetPlayerPed(-1), false)
	if GetIsVehicleEngineRunning(veh) then
		SetVehicleEngineOn(veh, false, true )
	    SetVehicleUndriveable(veh, 1)
		Wait(5000)
	  	SetVehicleEngineOn(veh, true, true )
	    SetVehicleUndriveable(veh, 0)
	end
end)

function getPlayerFromPed(ped)
    if ped ~= 0 and IsPedAPlayer(ped) then
        local xPlayers = ESX.Game.GetPlayers()
    	local playerfound = nil

        for i=1, #xPlayers, 1 do
            local xPlayer = xPlayers[i]
            local xPlayerPed = GetPlayerPed(xPlayer)
            if ped == xPlayerPed then
                playerfound = GetPlayerServerId(xPlayer)
            	break
            end
        end
    	return playerfound
    end
end