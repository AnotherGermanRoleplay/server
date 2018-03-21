AddEventHandler('playerConnecting', function(playerID, setKickReason)
	local sid, lid, ip = getSortedIdentifiers(source)
	if (sid == nil or lid == nil or ip == nil) then print("Failed to ban") end
	
	local result = nil
	
	MySQL.ready(function ()
		--Sync because we don't want the user to continue loading while the db query is still ongoing
		result = MySQL.Sync.fetchAll
		(
			--BAN EVERYONE WAHAHAHA
			--"SELECT `id`, `userName`, `ip`, `steamid`, `license`, `bannedUntil`, `reason`, `dateTime`, `admin`, `adminSteamId`, `adminLicense` FROM `banned_user` WHERE (`steamid`=@steamid OR `license`=@license OR `ip`=@ip) AND (`bannedUntil` >= NOW()) OR 1;",
			"SELECT `id`, `userName`, `ip`, `steamid`, `license`, `bannedUntil`, `reason`, `dateTime`, `admin`, `adminSteamId`, `adminLicense` FROM `banned_user` WHERE (`steamid`=@steamid OR `license`=@license OR `ip`=@ip) AND (`bannedUntil` >= NOW());",
			{
				['@steamid'] = sid,
				['@license'] = lid,
				['@ip'] = ip,
			}
		)
	end)
		
	if (result ~= nil) then
		for k,v in pairs(result) do
			if (settings["showDebugOutput"]) then
				print(k..":")
				for i,j in pairs(v) do
					print("\t" ..i.."="..j)
				end
			end
			local reason = convertReason(settings['playerKickedReason'], v)
			setKickReason(reason)
			CancelEvent()
			break
		end
	end
end)

--[[
	for printing tables
]]
local tabsCount = 0
function prettyPrintTable(o)
	if type(o) == 'table' then
		local s = string.rep('\t', tabsCount) .. '{\n'
		tabsCount = tabsCount + 1

		local i = 1
		for k,v in pairs(o) do
			if type(k) ~= 'number' then
				k = '"'..k..'"'
			end


			if(i == #o) then
				s = s .. string.rep('\t', tabsCount) .. '['..k..'] = ' .. printTable(v).. '\n'
			else
				s = s .. string.rep('\t', tabsCount) .. '['..k..'] = ' .. printTable(v) .. ',\n'
			end
			i = i + 1
		end
		tabsCount = tabsCount - 1
		return s .. string.rep('\t', tabsCount) .. '}'
	else
		return tostring(o)
	end
end

function printTable(o)
	if type(o) == 'table' then
		local s = '{ '
		local i = 1
		for k,v in pairs(o) do
			if type(k) ~= 'number' then
				k = '"'..k..'"'
			end

			if(i == #o) then
				s = s .. '['..k..'] = ' .. printTable(v)
			else
				s = s .. '['..k..'] = ' .. printTable(v) .. ', '
			end
			i = i + 1
		end
		return s .. ' }'
	else
		return tostring(o)
	end
end

TriggerEvent('es:addAdminCommand', 'ban', 1, function (source, args, user)
	--[[
		args:
			1: wildcard name || player id
			2: duration in minutes
			3-n: reason
	]]

	if (#args < 1) then
		TriggerClientEvent('chatMessage', source, "BAN ERROR", {255, 0, 0}, " "..settings['banerror_numArgs'])
		return
	end

	local bannedDuration = nil
	local bannTimeType = "u"
	if (#args >= 2) then
		bannedDuration = tonumber(args[2]) --45
		if (bannedDuration == nil) then
			bannedDuration = tonumber(string.sub(args[2], 2)) --d45
			if(bannedDuration == nil) then
				TriggerClientEvent('chatMessage', source, "BAN ERROR", {255, 0, 0}, " "..settings['banerror_timeNotNumber'])
				return
			end

			bannTimeType = string.sub(args[2], 1, 1):lower()
			if(bannTimeType ~= "y" and bannTimeType ~= "d" and bannTimeType ~= "h" and bannTimeType ~= "m" and bannTimeType ~= "u") then
				TriggerClientEvent('chatMessage', source, "BAN ERROR", {255, 0, 0}, " "..settings['banerror_wrongBannTimeType'])
				return
			end
		else
			bannTimeType = "d"
		end
	end

	local reason = settings['noReason']
	if (#args >= 3) then
		--remove first two arguments
		local reasonTable = {table.unpack(args)}
		table.remove(reasonTable, 1)
		table.remove(reasonTable, 1)
		--print("reasonTable:\n"..prettyPrintTable(reasonTable))

		reason = table.concat(reasonTable, " ")
	end

	local players = GetPlayers()

	local adminSteamID, adminLicense, _ = getSortedIdentifiers(source)
	local adminName = GetPlayerName(source)

	--check if args[1] is number or wildcard name
	local playerName
	local playerFound = false
	local playerID = tonumber(args[1])
	--args[1] is player id?
	if (playerID==nil) then --no
		for k,v in pairs(players) do
			print("-------------------------- "..tostring(args[1]))
			local name = GetPlayerName(v)
			print("-------------------------- "..tostring(name))
			local i,j = name:lower():find(args[1]:lower())
			print("-------------------------- "..tostring(i)..", "..tostring(j))
			if (i ~= nil and j ~= nil) then
				if (playerFound) then
					TriggerClientEvent('chatMessage', source, "BAN ERROR", {255, 0, 0}, " "..settings['banerror_tooManyFound'])
					return
				end

				playerName = name
				playerFound = true
				playerID = v;
			end
		end
	end

	if(not playerFound) then
		TriggerClientEvent('chatMessage', source, "BAN ERROR", {255, 0, 0}, " "..settings['banerror_noPlayerfound'])
	else
		local playerSteamID, playerLicense, playerIP = getSortedIdentifiers(playerID)

		print(playerName)
		print(playerIP)
		print(playerSteamID)
		print(playerLicense)
		print(bannedDuration)
		print(bannTimeType)
		print(reason)
		print(adminName)
		print(adminSteamID)
		print(adminLicense)
		--BanPlayer(playerName, playerIP, playerSteamID, playerLicense, bannedDuration, bannTimeType, reason, adminName, adminSteamID, adminLicense)
	end
end, function(source, args, user)
	TriggerClientEvent('chatMessage', source, "ERROR", {255, 0, 0}, " "..settings['banerror_noPermission'])
end, 
{
	help = "Bannt einen Spieler vom Server. Beispiele: /ban Hans d60 Weil du eine Wurst bist (Bannt Hans für 60 Tage) - /ban Karl (Bannt Karl für immer ohne Grundangabe)", 
	params = 
	{
		{
			name = "Spieler", 
			help = "Der Name/Die ID des Spielers der gebannt werden soll"
		},
		{
			name = "Zeit (Optional)", 
			help = "Dauer des Banns (Standard: Unendlich) (Beispiele: 12 oder u oder y2 oder d30 oder h4 oder m45 (12 Tage, Unendlich, 2 Jahre, 30 Tage, 4 Stunden, 45 Minuten)"
		},
		{
			name = "Grund (Optional)", 
			help = "Der Grund warum wird der Spieler gebannt wird"
		},
	}
})

function BanPlayer(playerName, playerIP, playerSteamID, playerLicense, bannedDuration, bannTimeType, reason, adminName, adminSteamID, adminLicense)
	local duration = bannedDuration or 999
	local timeType = ({["u"]="YEAR",["y"]="YEAR",["d"]="DAY",["h"]="HOUR",["m"]="MINUTE"})[bannTimeType]

	MySQL.ready(function ()
		MySQL.Async.execute
		(
			"INSERT INTO `banned_user`(`userName`, `ip`, `steamid`, `license`, `bannedUntil`, `reason`, `dateTime`, `admin`, `adminSteamId`, `adminLicense`) VALUES (@name,@ip,@steam,@license,DATE_ADD(NOW(), INTERVAL @bannedDuration @bannedTimeType),@reason,NOW(),@adminName,@adminSteam,@adminLicense);",
			{
				["@name"] = playerName,
				["@ip"] = playerIP,
				["@steam"] = playerSteamID,
				["@license"] = playerLicense,
				["@bannedDuration"] = duration,
				["@bannedTimeType"] = timeType,
				["@reason"] = reason,
				["@adminName"] = adminName,
				["@adminSteam"] = adminSteam,
				["@adminLicense"] = adminLicense
			},

			function (rowsChanged)
				--How many rows are affected and changed
			end
		)
		end
	)
end

--TODO(Woogy) might have problems when user has a name that is a keyword in this function. i.e. when ~name~ == "~steam~"
function convertReason(kickMsg, dbEntry)
	local msg = kickMsg
	--print(dbEntry["bannedUntil"])
	--print(os.date("%c", dbEntry["bannedUntil"]))
	
	msg = msg.gsub(msg, "~id~", dbEntry["id"])
	msg = msg.gsub(msg, "~name~", dbEntry["userName"])
	msg = msg.gsub(msg, "~ip~", dbEntry["ip"])
	msg = msg.gsub(msg, "~steam~", dbEntry["steamid"])
	msg = msg.gsub(msg, "~license~", dbEntry["license"])
	msg = msg.gsub(msg, "~until~", prettyPrintTime(mySQLTimestampToTable(dbEntry["bannedUntil"])))
	msg = msg.gsub(msg, "~reason~", dbEntry["reason"])
	msg = msg.gsub(msg, "~time~", prettyPrintTime(mySQLTimestampToTable(dbEntry["dateTime"])))
	msg = msg.gsub(msg, "~admin~", dbEntry["admin"])
	msg = msg.gsub(msg, "~adminSteam~", dbEntry["adminSteamId"])
	msg = msg.gsub(msg, "~adminLicense~", dbEntry["adminLicense"])
	
	return msg
end

function mySQLTimestampToTable(timestamp)
	--os.date require milliseconds, timestamp is in seconds so we divide by 1000
	return os.date("*t", timestamp/1000)
end

function prettyPrintTime(t)
	return tostring(t.day).."."..tostring(t.month).."."..tostring(t.year).." "..tostring(t.hour)..":"..tostring(t.min).." " ..settings['time']
end

--[[
	GetPlayerIdentifiers might be unsorted
--]]
function getSortedIdentifiers(source)
	local sid = nil
	local lid = nil
	local ip = nil
	for _,v in ipairs(GetPlayerIdentifiers(source)) do
		--1=steam:XXXXXXXXXXXXXXX
		--2=license:XXXXXXXXXXXXXXXXXXXXXXXXXXXX
		--3=ip:XXXXXXXXXXXXXXXX
		if (stringStartsWith(v, "steam:")) then sid = v end
		if (stringStartsWith(v, "license:")) then lid = v end
		if (stringStartsWith(v, "ip:")) then ip = v end
		
		if(sid ~= nil and lid ~= nil and ip ~= nil) then
			break
		end
	end
	return sid, lid, ip
end

function stringStartsWith(str, val)
	return string.sub(str, 1, string.len(val)) == val
end

function stringsplit(inputstr, sep)
	if sep == nil then
		sep = "%s"
	end
	local t={} ; i=1
	for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
		t[i] = str
		i = i + 1
	end
	return t
end