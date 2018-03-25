-- Script made by Havanna (http://steamcommunity.com/id/HavannaPC/)

AddEventHandler( "playerConnecting", function(name, setReason )
	local identifier = GetPlayerIdentifiers(source)[1]
	if not isWhiteListed(identifier) then
		setReason("Du stehst nicht auf der Whitelist. Bewirb dich jetzt unter: https://another-grp.com")
		print("(" .. identifier .. ") " .. name .. " wurde gekickt. Grund: Whitelist")
		CancelEvent()
    end
end)

-- Chat Command to add someone in WhiteList
TriggerEvent('es:addGroupCommand', 'wladd', "admin", function(source, args, user)
	if #args == 2 then
		if isWhiteListed(args[2]) then
			TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, args[2] .. " steht bereits auf der Whitelist!")
		else
			addWhiteList(args[2])
			TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, args[2] .. " wurde der Whitelist hinzugefügt!")
		end
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Incorrect identifier!")
	end
end, function(source, args, user)
	TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficienct permissions!")
end)

-- Chat Command to remove someone in WhiteList
TriggerEvent('es:addGroupCommand', 'wlremove', "admin", function(source, args, user)
	if #args == 2 then
		if isWhiteListed(args[2]) then
			removeWhiteList(args[2])
			TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, args[2] .. " wurde von der Whitelist entfernt!")
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, args[2] .. " war nie auf der Whitelist!")
		end
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Incorrect identifier!")
	end
end, function(source, args, user)
	TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficienct permissions!")
end)

function addWhiteList(identifier)
	MySQL.Sync.execute("INSERT INTO user_whitelist (`identifier`, `whitelisted`) VALUES (@identifier, @whitelisted)",{['@identifier'] = identifier, ['@whitelisted'] = 1})
end

function removeWhiteList(identifier)
	MySQL.Sync.execute("DELETE FROM user_whitelist WHERE identifier = @identifier", {['@identifier'] = identifier})
end

function isWhiteListed(identifier)
	local result = MySQL.Sync.fetchScalar("SELECT whitelisted FROM user_whitelist WHERE identifier = @username AND whitelisted = 1", {['@username'] = identifier})
	if result then
		return true
	end
	return false
end

-- Rcon command to add/remove someone in WhiteList
AddEventHandler('rconCommand', function(commandName, args)
	if commandName == 'wladd' then
		if #args ~= 1 then
			RconPrint("Usage: whitelistadd [identifier]\n")
			CancelEvent()
			return
		end
		if isWhiteListed(args[1]) then
			RconPrint(args[1] .. " is already whitelisted!\n")
			CancelEvent()
		else
			addWhiteList(args[1])
			RconPrint(args[1] .. " has been whitelisted!\n")
			CancelEvent()
		end
	elseif commandName == 'wlremove' then
		if #args ~= 1 then
			RconPrint("Usage: whitelistremove [identifier]\n")
			CancelEvent()
			return
		end
		if isWhiteListed(args[1]) then
			removeWhiteList(args[1])
			RconPrint(args[1] .. " is no longer whitelisted!\n")
			CancelEvent()
		else
			RconPrint(args[1] .. " is not whitelisted!\n")
			CancelEvent()
		end
	end
end)