Citizen.CreateThread(function()
	while true do
		Wait(1)

		car = GetVehiclePedIsIn(GetPlayerPed(-1), false)
		if car then
			bodyHealth = GetVehicleBodyHealth(car)
			if prevBodyHealth then
				if not bodyHealth then
					TriggerEvent("ee:onVehicleBodyHealthChange", car, 0, prevBodyHealth)
				elseif bodyHealth < prevBodyHealth then
					TriggerEvent("ee:onVehicleBodyHealthChange", car, bodyHealth, prevBodyHealth)
				end
			end
			prevBodyHealth = bodyHealth

			engineHealth = GetVehicleEngineHealth(car)
			if prevEngineHealth then
				if not engineHealth then
					TriggerEvent("ee:onVehicleEngineHealthChange", car, 0, prevEngineHealth)
				elseif engineHealth < prevEngineHealth then
					TriggerEvent("ee:onVehicleEngineHealthChange", car, engineHealth, prevEngineHealth)
				end
			end
			prevEngineHealth = engineHealth
		end
	end
end)