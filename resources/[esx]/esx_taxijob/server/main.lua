ESX = nil
local playerStarted = nil
local destination = nil
local moneyForDistance = 0

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

if Config.MaxInService ~= -1 then
  TriggerEvent('esx_service:activateService', 'taxi', Config.MaxInService)
end

TriggerEvent('esx_phone:registerNumber', 'taxi', _U('taxi_client'), true, true)
TriggerEvent('esx_society:registerSociety', 'taxi', 'Taxi', 'society_taxi', 'society_taxi', 'society_taxi', {type = 'private'})

RegisterServerEvent('esx_taxijob:getInfos')
AddEventHandler('esx_taxijob:getInfos', function(targetDistance)
  moneyForDistance = math.ceil(targetDistance)
end)

RegisterServerEvent('esx_taxijob:success')
AddEventHandler('esx_taxijob:success', function()

  math.randomseed(os.time())

  local xPlayer        = ESX.GetPlayerFromId(source)
  local tip            = math.random(Config.NPCJobEarnings.min, Config.NPCJobEarnings.max)
  local tipchance      = math.random(0, 100)
  local total          = 0
  local societyAccount = nil

  if moneyForDistance > 0 then
    total = moneyForDistance
  end

  if xPlayer.job.grade > 0 then
    total = total * (1 + 0.3*xPlayer.job.grade)
  end

  TriggerEvent('esx_addonaccount:getSharedAccount', 'society_taxi', function(account)
    societyAccount = account
  end)

  if societyAccount ~= nil then

    local playerMoney  = math.ceil(total / 100 * 15)
    local societyMoney = math.floor(total / 100 * 20)

    if tipchance > 70 then
      xPlayer.addMoney(tip)
      TriggerClientEvent('esx:showNotification', xPlayer.source, "Hier ein kleines Trinkgeld: ~g~$" .. tip)
    end
    xPlayer.addMoney(playerMoney)
    societyAccount.addMoney(societyMoney)

    TriggerClientEvent('esx:showNotification', xPlayer.source, _U('have_earned') .. playerMoney)
    TriggerClientEvent('esx:showNotification', xPlayer.source, _U('comp_earned') .. societyMoney)

  else

    xPlayer.addMoney(total)
    TriggerClientEvent('esx:showNotification', xPlayer.source, _U('have_earned') .. total)

  end

  moneyForDistance = 0

end)

RegisterServerEvent('esx_taxijob:getStockItem')
AddEventHandler('esx_taxijob:getStockItem', function(itemName, count)

  local xPlayer = ESX.GetPlayerFromId(source)

  TriggerEvent('esx_addoninventory:getSharedInventory', 'society_taxi', function(inventory)

    local item = inventory.getItem(itemName)

    if item.count >= count then
      inventory.removeItem(itemName, count)
      xPlayer.addInventoryItem(itemName, count)
    else
      TriggerClientEvent('esx:showNotification', xPlayer.source, _U('quantity_invalid'))
    end

    TriggerClientEvent('esx:showNotification', xPlayer.source, _U('have_withdrawn') .. count .. ' ' .. item.label)

  end)

end)

ESX.RegisterServerCallback('esx_taxijob:getStockItems', function(source, cb)

  TriggerEvent('esx_addoninventory:getSharedInventory', 'society_taxi', function(inventory)
    cb(inventory.items)
  end)

end)

RegisterServerEvent('esx_taxijob:putStockItems')
AddEventHandler('esx_taxijob:putStockItems', function(itemName, count)

  local xPlayer = ESX.GetPlayerFromId(source)

  TriggerEvent('esx_addoninventory:getSharedInventory', 'society_taxi', function(inventory)

    local item = inventory.getItem(itemName)

    if item.count >= 0 and count > 0 then
      xPlayer.removeInventoryItem(itemName, count)
      inventory.addItem(itemName, count)
    else
      TriggerClientEvent('esx:showNotification', xPlayer.source, _U('quantity_invalid'))
    end

    TriggerClientEvent('esx:showNotification', xPlayer.source, _U('added') .. count .. ' ' .. item.label)

  end)

end)

ESX.RegisterServerCallback('esx_taxijob:getPlayerInventory', function(source, cb)

  local xPlayer    = ESX.GetPlayerFromId(source)
  local items      = xPlayer.inventory

  cb({
    items      = items
  })

end)
