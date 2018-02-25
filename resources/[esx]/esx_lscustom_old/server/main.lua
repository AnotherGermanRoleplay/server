ESX = nil
sharedAccountName = 'society_mecano'

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('esx_lscustom:buyMod')
AddEventHandler('esx_lscustom:buyMod', function(price)
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	price = tonumber(price)
	if price > xPlayer.getMoney() then
		TriggerClientEvent('esx_lscustom:cancelInstallMod', _source)
		TriggerClientEvent('esx:showNotification', _source, _U('not_enough_money'))
	else
		xPlayer.removeMoney(price)
		if xPlayer.job.name ~= 'mecano' then
			TriggerEvent('esx_addonaccount:getSharedAccount', sharedAccountName, function(account)
				if account ~= nil then
					account.addMoney(price)
				end
			end)
		end
		TriggerClientEvent('esx_lscustom:installMod', _source)
		TriggerClientEvent('esx:showNotification', _source, _U('purchased'))
	end
end)

RegisterServerEvent('esx_lscustom:refreshOwnedVehicle')
AddEventHandler('esx_lscustom:refreshOwnedVehicle', function(myCar)

	MySQL.Async.execute(
		'UPDATE `owned_vehicles` SET `vehicle` = @vehicle WHERE `vehicle` LIKE "%' .. myCar['plate'] .. '%"',
		{
			['@vehicle'] = json.encode(myCar)
		}
	)

	MySQL.Async.execute(
		'UPDATE `owned_job_vehicles` SET `vehicle` = @vehicle WHERE `vehicle` LIKE "%' .. myCar['plate'] .. '%"',
		{
			['@vehicle'] = json.encode(myCar)
		}
	)
end)