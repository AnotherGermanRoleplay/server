Citizen.CreateThread(function()
	while true do
		Wait(1)

		car = GetVehiclePedIsIn(GetPlayerPed(-1), false)
		if not car then
			if prevCar then
				TriggerEvent("ee:onPlayerExitVehicle", prevCar)
				prevCar = nil
			end
		else
			if not prevCar then
				TriggerEvent("ee:onPlayerEnterVehicle", car)
			end
			prevCar = car
		end
	end
end)