Citizen.CreateThread(function()
	while true do
		Wait(1)

		if IsPlayerPressingHorn(PlayerId()) then
			car = GetVehiclePedIsIn(GetPlayerPed(-1), false)
			
			TriggerEvent("ee:onPlayerHonking", car)

			if not hornStarted then
				TriggerEvent("ee:onPlayerStartHonking", car)
				hornStarted = true
			end
		else
			if hornStarted then
				TriggerEvent("ee:onPlayerStopHonking", car)
				hornStarted = false
			end
		end
	end
end)