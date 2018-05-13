--[[

  ESX RP Chat

--]]

ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

function getIdentity(source, callback)
  local identifier = GetPlayerIdentifiers(source)[1]
  MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier", {['@identifier'] = identifier},
  function(result)
    if result ~= nil and result[1]['firstname'] ~= nil then
      local data = {
        identifier    = result[1]['identifier'],
        firstname     = result[1]['firstname'],
        lastname      = result[1]['lastname'],
        dateofbirth   = result[1]['dateofbirth'],
        sex           = result[1]['sex'],
        height        = result[1]['height']
      }
      callback(data)
    else
      local data = {
        identifier    = '',
        firstname     = '',
        lastname      = '',
        dateofbirth   = '',
        sex           = '',
        height        = ''
      }
      callback(data)
    end
  end)
end

AddEventHandler('chatMessage', function(source, name, message)
  getIdentity(source, function(data)
    if string.sub(message, 1, string.len("/")) ~= "/" then
      TriggerClientEvent("sendProximityMessage", -1, source, data.firstname, message)
    end
  end)
  CancelEvent()
end)

TriggerEvent('es:addCommand', 'me', function(source, args, user)
    if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
      getIdentity(source, function(data)
        TriggerClientEvent("sendProximityMessageMe", -1, source, data.firstname, table.concat(args, " "))
      end)
    end
end, {help = 'Versetze deinen Charakter in eine Chat-Rolle.'})

TriggerEvent('es:addCommand', 'pm', function(source, args, user)
    local id = args[1]
    if tonumber(id) and id ~= nil then
      table.remove(args, 1)
      if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
        getIdentity(source, function(data)
          TriggerClientEvent("sendProximityMessagePm", -1, source, data.firstname, table.concat(args, " "), id, GetPlayerName(id))
        end)
      end
    end
end, {help = 'Schreibe eine private Nachricht.'})

TriggerEvent('es:addCommand', 'do', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    getIdentity(source, function(data)
      TriggerClientEvent("sendProximityMessageDo", -1, source, data.firstname, table.concat(args, " "))
    end)
  end
end, {help = 'Zeige was du tust.'})

TriggerEvent('es:addCommand', 't', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    getIdentity(source, function(data)
      TriggerClientEvent("sendProximityMessageTeam", -1, source, data.firstname, table.concat(args, " "), ESX.GetPlayerFromId(source))
    end)
  end
end, {help = 'Schreibe im Fraktionschat.'})

TriggerEvent('es:addCommand', 'twt', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    TriggerClientEvent('chatMessage', -1, "^0[^4Twitter^0] (^5@" .. GetPlayerName(source) .. "^0)", {30, 144, 255}, table.concat(args, " "))
  end
end, {help = 'Sende einen Tweet. [IC]'})

TriggerEvent('es:addCommand', 'ad', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    TriggerClientEvent('chatMessage', -1, "^0[^6Werbung^0] (^1@" .. GetPlayerName(source) .. "^0)", {255, 144, 30}, table.concat(args, " "))
  end
end, {help = 'Schreibe deine eigene Werbung. [IC]'})

TriggerEvent('es:addCommand', 'ooc', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    TriggerClientEvent('chatMessage', -1, "OOC | " .. GetPlayerName(source), {128, 128, 128}, table.concat(args, " "))
  end
end, {help = 'Sende eine globale OutOfCharacter Nachricht.'})

TriggerEvent('es:addCommand', 'anon', function(source, args, user)
  if string.gsub(table.concat(args, " "), "%s$", "") ~= '' then
    TriggerClientEvent('chatMessage', -1, "Anonym | ", {195, 195, 195}, table.concat(args, " "))
  end
end, {help = 'Sende eine globale anonyme Nachricht.'})

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
