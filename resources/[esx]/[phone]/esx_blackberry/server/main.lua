ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

TriggerEvent('esx_phone:registerNumber', 'deepweb', 'DeepWeb', true, false, true, true)

function OnBlackBerryItemChange(source)

	local _source = source
	local xPlayer    = ESX.GetPlayerFromId(_source)
	local found      = false
	local blackberry = xPlayer.getInventoryItem('blackberry')

	if blackberry.count > 0 then
		found = true
	end

	if found then
		TriggerEvent('esx_phone:addSource', 'deepweb', _source)
	else
		TriggerEvent('esx_phone:removeSource', 'deepweb', _source)
	end

	TriggerClientEvent('esx_blackberry:onHasBlackberry', _source, found)

end

AddEventHandler('esx:playerLoaded', function(source)

	local xPlayer    = ESX.GetPlayerFromId(source)
	local blackberry = xPlayer.getInventoryItem('blackberry')

	if blackberry.count > 0  then
		TriggerEvent('esx_phone:addSource', 'deepweb', source)
	end

end)

AddEventHandler('esx:playerDropped', function(source)
	local _source = source
	TriggerEvent('esx_phone:removeSource', 'deepweb', _source)
end)

AddEventHandler('esx:onAddInventoryItem', function(source, item, count)
	if item.name == 'blackberry' then
		OnBlackBerryItemChange(source)
	end
end)

AddEventHandler('esx:onRemoveInventoryItem', function(source, item, count)
	if item.name == 'blackberry' then
		OnBlackBerryItemChange(source)
	end
end)
