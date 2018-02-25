TriggerEvent('es:addCommand', 'rappel', function(source, args, user)
    TriggerClientEvent("CGC:rappel", source)
end, {help = 'Seile dich vom Helicopter ab.'})