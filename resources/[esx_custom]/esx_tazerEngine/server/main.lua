ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('esx_tazerEngine:Serversynchro')
AddEventHandler('esx_tazerEngine:Serversynchro',function(player, entity)
	TriggerClientEvent('esx_tazerEngine:Clientsynchro', player, entity)
end)