Citizen.CreateThread(function()
	while true do
		Wait(1)

		model = GetEntityModel(GetPlayerPed(-1))
		if prevModel and model ~= prevModel then
			TriggerEvent("ee:onPlayerModelChange", model, prevModel)
		end

		prevModel = model
	end
end)