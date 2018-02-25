AddEventHandler("playerSpawned", function(spawn)
	TriggerEvent("ee:onPlayerSpawn", spawn)

	if not alreadyFirstSpawned then
		TriggerEvent("ee:onPlayerFirstSpawn", spawn)
		alreadyFirstSpawned = true
	end
end)