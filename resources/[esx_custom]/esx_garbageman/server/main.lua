ESX = nil
local PlayersWorking = {}
local Players = {}

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

TriggerEvent('es:addCommand', 'startjob', function(source, args, user)
		TriggerClientEvent('esx_garbageman:startjob', source)
end)

RegisterServerEvent('esx_garbageman:payPlayer')
AddEventHandler('esx_garbageman:payPlayer', function()
  local source = source
  local xPlayer = ESX.GetPlayerFromId(source)
  if xPlayer ~= nil then
  	local amount = xPlayer.getInventoryItem('binsack').count * 10
    xPlayer.setInventoryItem('binsack', 0)
    xPlayer.addMoney(amount)
    TriggerClientEvent('esx_garbageman:payCheck', source, amount)
  end
end)

RegisterServerEvent('esx_garbageman:takeBinSack')
AddEventHandler('esx_garbageman:takeBinSack', function()
  local source = source
  local xPlayer = ESX.GetPlayerFromId(source)
  if xPlayer ~= nil then
    xPlayer.addInventoryItem('binsack', 1)
  end
end)

RegisterServerEvent('esx_garbageman:clearBinSack')
AddEventHandler('esx_garbageman:clearBinSack', function()
  
end)