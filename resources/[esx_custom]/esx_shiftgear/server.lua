ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


RegisterServerEvent('esx_shiftgear:boost')
AddEventHandler('esx_shiftgear:boost', function(player)

	print(player)
	TriggerClientEvent('esx_shiftgear:boostEffect', player)
		
end)

RegisterServerEvent('printbaby')
AddEventHandler('printbaby', function(msg)
	print(msg)
end)