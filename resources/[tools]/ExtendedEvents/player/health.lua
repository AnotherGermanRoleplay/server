Citizen.CreateThread(function()
	while true do
		Wait(1)

		health = GetEntityHealth(GetPlayerPed(-1))
		if prevHealth then
			if not health then
				TriggerEvent("ee:onPlayerDead", prevHealth)
				TriggerEvent("ee:onPlayerHealthChange", 0, prevHealth)
			elseif health < prevHealth then
				TriggerEvent("ee:onPlayerHealthChange", health, prevHealth)
			end
		end

		prevHealth = health
	end
end)