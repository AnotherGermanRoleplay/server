Citizen.CreateThread(function()
	while true do
		Wait(1)

		wantedLvl = GetPlayerWantedLevel(PlayerId())
		if prevWantedLvl then
			if not wantedLvl then
				TriggerEvent("ee:onPlayerStopWanted", prevWantedLvl)
			else
				TriggerEvent("ee:onPlayerWanted", wantedLvl)
			end
		elseif wantedLvl then
			TriggerEvent("ee:onPlayerStartWanted", wantedLvl)
		end

		prevWantedLvl = wantedLvl
	end
end)