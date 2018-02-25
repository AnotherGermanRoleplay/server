-- CONFIG --

-- Blacklisted ped models
pedblacklist = {
	"STORY_LINE_PEDS_1",
	"SOTRY_LINE_PEDS_2",
	"ANIMALS",
	"CS_MODELS_1",
	"CS_MODELS_2",
	"CSB_MODELS",
	"MP_PEDS",
	"FEMALE_A_PEDS_1",
	"FEMALE_A_PEDS_2",
	"MALE_A_PEDS_1",
	"MALE_A_PEDS_2",
	"MALE_A_PEDS_3",
	"G_PEDS",
	"S_PEDS_1",
	"S_PEDS_2",
	"U_PEDS_1",
	"U_PEDS_2"
}

-- Defaults to this ped model if an error happened
defaultpedmodel = "a_m_y_skater_01"

-- CODE --

Citizen.CreateThread(function()
	while true do
		Wait(1)

		playerPed = GetPlayerPed(-1)
		if playerPed then
			playerModel = GetEntityModel(playerPed)

			if not prevPlayerModel then
				if isPedBlacklisted(prevPlayerModel) then
					SetPlayerModel(PlayerId(), GetHashKey(defaultpedmodel))
				else
					prevPlayerModel = playerModel
				end
			else
				if isPedBlacklisted(playerModel) then
					SetPlayerModel(PlayerId(), prevPlayerModel)
					sendForbiddenMessage("Dieses Ped ist auf der Blacklist!")
				end

				prevPlayerModel = playerModel
			end
		end
	end
end)

function isPedBlacklisted(model)
	for _, blacklistedPed in pairs(pedblacklist) do
		if model == GetHashKey(blacklistedPed) then
			return true
		end
	end

	return false
end