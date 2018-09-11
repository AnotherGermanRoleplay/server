local moneyToAlert = 100000

AddEventHandler('chatMessage', function(source, name, message)
  if string.sub(message, 1, string.len("/")) ~= "/"
    or string.sub(message, 1, string.len("/ooc")) == "/ooc"
    or string.sub(message, 1, string.len("/twt")) == "/twt"
    or string.sub(message, 1, string.len("/ad")) == "/ad" then
		sendToDiscord(name, message)
	end
  sendToAdminDiscord(name, message)
end)

function sendToDiscord(name, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-chat
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
  	function(err, text, headers) end,
  	'POST',
  	json.encode({username = name, content = message}),
  	{ ['Content-Type'] = 'application/json' }
  )
end

function sendToAdminDiscord(name, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-commandinput
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = name, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end


function sendToLogDiscord(name, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = name, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToTeamCommandLog(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = name, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToDevLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = "Devlog", content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToSocietyLogDiscord(society, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = society, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToWeaponLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = 'LOG', content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToSuspectLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    function(err, text, headers) end,
    'POST',
    json.encode({username = 'LOG', content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end



RegisterServerEvent('discord_bot:cmd_log')
AddEventHandler('discord_bot:cmd_log',function(log)
  sendToTeamCommandLog(log)
end)

-- TriggerEvent('discord_bot:dev_log', "Select * From users Done")
RegisterServerEvent('discord_bot:dev_log')
AddEventHandler('discord_bot:dev_log',function(log)
  sendToDevLogDiscord(log)
end)

RegisterServerEvent('discord_bot:society_log')
AddEventHandler('discord_bot:society_log',function(society, log)
  sendToSocietyLogDiscord(society, log)
end)

--  TriggerEvent("discord_bot:admin_log", log)
RegisterServerEvent('discord_bot:admin_log')
AddEventHandler('discord_bot:admin_log',function(log)
    sendToAdminDiscord('LOG', GetPlayerName(source) .. ' ' .. log)
end)

--  TriggerEvent("discord_bot:log", message)
RegisterServerEvent('discord_bot:log')
AddEventHandler('discord_bot:log',function(log)
    sendToLogDiscord('LOG', log)
end)


AddEventHandler('playerConnecting', function()
  if GetPlayerName(source) ~= nil then
    sendToAdminDiscord('SYSTEM', GetPlayerName(source) .. ' joined.')
    sendToDiscord('SYSTEM', GetPlayerName(source) .. ' joined.')
  end
end)

AddEventHandler('playerDropped', function(reason)
    sendToAdminDiscord('SYSTEM', GetPlayerName(source) .. ' left (' .. reason .. ')')
    sendToDiscord('SYSTEM', GetPlayerName(source) .. ' left (' .. reason .. ')')
end)

RegisterServerEvent('discord_bot:respawn')
AddEventHandler('discord_bot:respawn', function(source)
  sendToAdminDiscord('SYSTEM', "``" .. GetPlayerName(source) .. "`` ist respawnt ``")
end)


RegisterServerEvent('playerDied')
AddEventHandler('playerDied',function(killer,reason)
  if killer == nil then --Can't figure out what's generating invalid, it's late. If you figure it out, let me know. I just handle it as a string for now.
    reason = 2
  end
  if reason == 0 then
    sendToAdminDiscord('SYSTEM', "``" .. GetPlayerName(source) .. "`` committed suicide. ")
  elseif reason == 1 then
    sendToAdminDiscord('SYSTEM', "``" .. killer .. "`` killed ``" .. GetPlayerName(source) .. "``")
  else
    sendToAdminDiscord('SYSTEM', "``" .. GetPlayerName(source) .. "`` died respawn 2 minutes.")
  end
end)



-- Add event when a player give an item
--  TriggerEvent("esx:giveitemalert",sourceXPlayer.name,targetXPlayer.name,ESX.Items[itemName].label,itemCount) -> ESX_extended
RegisterServerEvent("esx:cheatalert")
AddEventHandler("esx:cheatalert", function(args)
	  sendToSuspectLogDiscord("-----------------Verdacht auf Cheating-----------------")
    for key,arg in args do
      sendToSuspectLogDiscord(arg)
    end
    sendToSuspectLogDiscord("------------------------------------------------------")
end)

-- Add event when a player give an item
--  TriggerEvent("esx:giveitemalert",sourceXPlayer.name,targetXPlayer.name,ESX.Items[itemName].label,itemCount) -> ESX_extended
RegisterServerEvent("esx:giveitemalert")
AddEventHandler("esx:giveitemalert", function(name,nametarget,itemname,amount)
	sendToLogDiscord('LOG', 'ITEM :: ' .. name .. ' gibt ' .. nametarget .. ' ' .. amount .. ' ' .. itemname)
end)

-- Add event when a player give money
-- TriggerEvent("esx:givemoneyalert",sourceXPlayer.name,targetXPlayer.name,itemCount) -> ESX_extended
RegisterServerEvent("esx:givemoneyalert")
AddEventHandler("esx:givemoneyalert", function(name,nametarget,amount)

	sendToLogDiscord('LOG', 'MONEY :: ' .. name .. ' gibt ' .. nametarget .. ' $' .. amount)
  if (amount > moneyToAlert) then 
    local args = {}
    table.insert(args,name .. ' gibt ' .. nametarget .. ' $' .. amount);
    table.insert(args,'Wollen wir vielleicht mal nachhaken ob da alles Koscher ist?');
    TriggerEvent("esx:cheatalert", args)
  end
end)

-- Add event when a player give money
-- TriggerEvent("esx:givemoneybankalert",sourceXPlayer.name,targetXPlayer.name,itemCount) -> ESX_extended
RegisterServerEvent("esx:givemoneybankalert")
AddEventHandler("esx:givemoneybankalert", function(name,nametarget,amount)
	sendToLogDiscord('LOG', 'ACCOUNT_MONEY :: ' .. name .. ' gibt ' .. nametarget .. ' $' .. amount)
  if (amount > moneyToAlert) then 
    local args = {}
    table.insert(args,name .. ' gibt ' .. nametarget .. ' $' .. amount);
    table.insert(args,'Wollen wir vielleicht mal nachhaken ob da alles Koscher ist?');
    TriggerEvent("esx:cheatalert", args)
  end
end)

-- Add event when a player give weapon
--  TriggerEvent("esx:giveweaponalert",sourceXPlayer.name,targetXPlayer.name,weaponLabel) -> ESX_extended
RegisterServerEvent("esx:giveweaponalert")
AddEventHandler("esx:giveweaponalert", function(name,nametarget,weaponlabel)
	sendToWeaponLogDiscord(name .. ' gibt ' .. nametarget .. ' - 1x ' .. weaponlabel)
end)
