

AddEventHandler('playerConnecting', function(playerID, setKickReason)
	local sid, lid, ip = getSortedIdentifiers(source)
	if (sid == nil or lid == nil or ip == nil) then print("Failed to ban") end
	
	local result = nil
	
	--[[
	MySQL.ready(function ()
		--Sync because we don't want the user to continue loading while the db query is still ongoing
		result = MySQL.Sync.fetchAll
		(
			"SELECT `id`, `userName`, `ip`, `steamid`, `license`, FROM_UNIXTIME(`bannedUntil`), `reason`, FROM_UNIXTIME(`dateTime`), `admin`, `adminSteamId`, `adminLicense` FROM `banned_user` WHERE 1;",
			{}
		)
	end)
	]]
	
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

AddEventHandler('chatMessage', function(playerID, color, message)
	
end)

--TODO(Woogy) might have problems when user has a name that is a keyword in this function. i.e. when ~name~ == "~steam~"
function convertReason(kickMsg, dbEntry)
	local msg = kickMsg
	print(dbEntry["bannedUntil"])
	print(os.date("%c", dbEntry["bannedUntil"]))
	msg = msg.gsub(msg, "~id~", dbEntry["id"])
	msg = msg.gsub(msg, "~name~", dbEntry["userName"])
	msg = msg.gsub(msg, "~ip~", dbEntry["ip"])
	msg = msg.gsub(msg, "~steam~", dbEntry["steamid"])
	msg = msg.gsub(msg, "~license~", dbEntry["license"])
	msg = msg.gsub(msg, "~until~", tostring(os.date("%c", dbEntry["bannedUntil"])))
	msg = msg.gsub(msg, "~reason~", dbEntry["reason"])
	msg = msg.gsub(msg, "~time~", tostring(os.date("%d, %m, %Y - %H:%M:%S", dbEntry["dateTime"])))
	msg = msg.gsub(msg, "~admin~", dbEntry["admin"])
	msg = msg.gsub(msg, "~adminSteam~", dbEntry["adminSteamId"])
	msg = msg.gsub(msg, "~adminLicense~", dbEntry["adminLicense"])
	
	return msg
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