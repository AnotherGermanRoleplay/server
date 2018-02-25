Citizen.CreateThread(function()
	while true do
		Wait(1)

		car = GetVehiclePedIsIn(GetPlayerPed(-1), false)
		if car then
			speed = GetEntitySpeed(car)
			if speed > 0.0 then
				TriggerEvent("ee:onPlayerDriving", car, speed)
			end
		end
	end
end)