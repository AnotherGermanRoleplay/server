Citizen.CreateThread(function()
	while true do
		Wait(1)

		car = GetVehiclePedIsIn(GetPlayerPed(-1), false)
		if not car then
			speed = GetEntitySpeed(GetPlayerPed(-1))
			if speed > 0.0 then
				TriggerEvent("ee:onPlayerMove", speed)
			end
		end
	end
end)