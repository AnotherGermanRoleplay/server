-- CONFIG --

-- Ping Limit
pingLimit = 600
count = {}

-- CODE --

RegisterServerEvent("checkMyPingBro")
AddEventHandler("checkMyPingBro", function()
	ping = GetPlayerPing(source)
	
	if ping >= pingLimit then
		if count[source] == nil then
			count[source] = 0
		end
		count[source] = count[source] +1
		if count[source] >= 5 then
			DropPlayer(source, "Ping is too high (Limit: " .. pingLimit .. " Your Ping: " .. ping .. ")")
		end
	else
		count[source] = 0
	end

	TriggerClientEvent("pingkick:showPing", source, ping)
end)