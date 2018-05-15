RegisterServerEvent("getInteriors")

AddEventHandler('onGameTypeStart', function(resource)
	print("[INFO] interiors script loaded!")
	MySQL:open(mySQL.host, mySQL.db, mySQL.login, mySQL.pass)
end)

function mysql_load_interiors()
	local executed_query = MySQL:executeQuery("SELECT * FROM "..mySQL.db.."."..mySQL.inttable)
	local result = MySQL:getResults(executed_query, {'id','enter','exit','iname'}, "id")
	local ints = {}
	if result ~= nil then
		for i=1,#result do
			local t = table.pack(result[i]['id'],json.decode(result[i]['enter']),json.decode(result[i]['exit']),result[i]['iname'])
			table.insert(ints, t)
		end
		return ints
	end
end

AddEventHandler('getInteriors', function()
	local to_player = mysql_load_interiors()
	if to_player ~= nil then TriggerClientEvent('sendInteriors', source, to_player) end
end)