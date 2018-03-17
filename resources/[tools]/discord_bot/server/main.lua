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

RegisterServerEvent('discord_bot:admin_log')
AddEventHandler('discord_bot:admin_log',function(log)
    sendToAdminDiscord('LOG', GetPlayerName(source) .. ' ' .. log)
end)

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