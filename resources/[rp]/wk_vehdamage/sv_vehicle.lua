--[[------------------------------------------------------------------------
	Fix Vehicle 
------------------------------------------------------------------------]]--

TriggerEvent('es:addGroupCommand', 'fix', 'admin', function(source, args, user)
	CancelEvent()
    TriggerClientEvent( 'wk:fixVehicle', source )
end, function(source, args, user)
  TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficient Permissions.")
end)