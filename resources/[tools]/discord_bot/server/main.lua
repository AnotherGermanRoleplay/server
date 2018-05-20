local moneyToAlert = 3000000

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
  PerformHttpRequest('https://discordapp.com/api/webhooks/424565336503877632/Tn7bdKLl1naPoK30FKgqHogAeqgEVVmIiyisImI3kEUaIBzcg0MWhW9tGaKa5--aCWGR',
  	function(err, text, headers) end,
  	'POST',
  	json.encode({username = name, content = message}),
  	{ ['Content-Type'] = 'application/json' }
  )
end

function sendToAdminDiscord(name, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-commandinput
  PerformHttpRequest('https://discordapp.com/api/webhooks/424562852930519041/qzgJHdvuhAJa34A_i34OjhLdGPxTtwzyn5LcP66me_F5AaBXmALQ35wZgqrg7V1yw61e',
    function(err, text, headers) end,
    'POST',
    json.encode({username = name, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end


function sendToLogDiscord(name, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/424565704541470731/_Jj-UhoXF70bD2jUp92eIpNpgFOu73_iS_n2mX6ZMlBI4a1H_Y2PXwB-eClBb1zOoE2j',
    function(err, text, headers) end,
    'POST',
    json.encode({username = name, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToDevLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/415269779884998668/tc9zLQ2vNQliwefp5Wr_trb91-HbsINFSRtx-F53uCru03B0OSO0ZYsh_HZGffmY653k',
    function(err, text, headers) end,
    'POST',
    json.encode({username = "Devlog", content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToSocietyLogDiscord(society, message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/443367987668451328/zOdM9HtpCsirVeuP8xQ7HD5QAWi9J22GaPKYwva_Q0UeYtIxBtohaj1G1QzvXbEcikco',
    function(err, text, headers) end,
    'POST',
    json.encode({username = society, content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToWeaponLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/443380144082780180/xAeDZIRPAD-9M0iVQqj0-ZqXWz7WXJ3SUV9UuBBrYr0MdwNDHrxAhOqcj7N8jscmygdC',
    function(err, text, headers) end,
    'POST',
    json.encode({username = 'LOG', content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end

function sendToSuspectLogDiscord(message)
  if message == nil or message == '' then return FALSE end
  -- #ig-log (weapon und money exchange)
  PerformHttpRequest('https://discordapp.com/api/webhooks/445940354546532355/pbFRWNTjtu7evK-jh24UF6ud5lhl5VqkvqJD3KVFwcU0MlpVQz9AGOG3C0euO-AHdPhg',
    function(err, text, headers) end,
    'POST',
    json.encode({username = 'LOG', content = message}),
    { ['Content-Type'] = 'application/json' }
  )
end


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
  local date = os.date('*t')
	
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
  for i = 30,1,-1 
  do 
      Citizen.Wait(1000)
      local playerint = GetPlayerFromServerId(source) or nil
      if (playerint == nil) then 
          if date.day < 10 then date.day = '0' .. tostring(date.day) end
          if date.month < 10 then date.month = '0' .. tostring(date.month) end
          if date.hour < 10 then date.hour = '0' .. tostring(date.hour) end
          if date.min < 10 then date.min = '0' .. tostring(date.min) end
          if date.sec < 10 then date.sec = '0' .. tostring(date.sec) end
        
        sendToSuspectLogDiscord("--------------Verdacht auf Combatlog------------------")
        sendToSuspectLogDiscord("``" .. GetPlayerName(source) .. "`` hat am " .. ' `' .. date.day .. '.' .. date.month .. '.' .. date.year .. ' - ' .. date.hour .. ':' .. date.min .. ':' .. date.sec .. '` ' .. ' innerhalb von 10 Sekunden nach dem Tod die Verbindung getrennt.')
        sendToSuspectLogDiscord('http://steamcommunity.com/profiles/' .. tonumber(GetIDFromSource('steam', source), 16))
        if reason == 0 then
          sendToSuspectLogDiscord("``" .. GetPlayerName(source) .. "`` committed suicide. ")
        elseif reason == 1 then
          sendToSuspectLogDiscord("``" .. killer .. "`` killed ``" .. GetPlayerName(source) .. "``")
        else
          sendToSuspectLogDiscord("``" .. GetPlayerName(source) .. "`` died respawn 2 minutes.")
        end
        sendToSuspectLogDiscord("``" .. GetPlayerName(source) .. "`` left.")
        sendToSuspectLogDiscord("------------------------------------------------------")
        return
      end
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
