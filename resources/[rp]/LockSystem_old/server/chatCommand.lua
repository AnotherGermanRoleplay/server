if(globalConf["SERVER"].enableGiveKey)then
    RegisterCommand('givekey', function(source, args, rawCommand)
        local src = source
        local identifier = GetPlayerIdentifiers(src)[1]

        if(args[1])then
            local targetId = args[1]
            local targetIdentifier = GetPlayerIdentifiers(targetId)[1]
            if(targetIdentifier)then
                if(targetIdentifier ~= identifier)then
                    if(args[2])then
                        local plate = string.lower(args[2])
                        if(owners[plate])then
                            if(owners[plate] == identifier)then
                                alreadyHas = false
                                for k, v in pairs(secondOwners) do
                                    if(k == plate)then
                                        for _, val in ipairs(v) do
                                            if(val == targetIdentifier)then
                                                alreadyHas = true
                                            end
                                        end
                                    end
                                end

                                if(not alreadyHas)then
                                    TriggerClientEvent("ls:giveKeys", targetIdentifier, plate)
                                    TriggerEvent("ls:addSecondOwner", targetIdentifier, plate)

                                    TriggerClientEvent("ls:notify", targetId, "Du hast die Schlüssel des Fahrzeugs " .. plate .. " von " .. GetPlayerName(src) .. " bekommen.")
                                    TriggerClientEvent("ls:notify", src, "Du hast die Schlüssel des Fehrzeugs " .. plate .. " an " .. GetPlayerName(targetId) .. " vergeben.")
                                else
                                    TriggerClientEvent("ls:notify", src, "Dein Ziel hat bereits die Schlüssel")
                                    TriggerClientEvent("ls:notify", targetId, GetPlayerName(src) .. " versuchte dir seine Schlüssel zu geben, doch du hast sie schon!")
                                end
                            else
                                TriggerClientEvent("ls:notify", src, "Das ist nicht dein Fahrzeug!")
                            end
                        else
                            TriggerClientEvent("ls:notify", src, "Ein Fahrzeug mit diesem Kennzeichen existiert nicht!")
                        end
                    else
                        TriggerClientEvent("ls:notify", src, "Zweites Argument fehlt : /givekey <id> <plate>")
                    end
                else
                    TriggerClientEvent("ls:notify", src, "Du kannst dir doch nicht selbst Schlüssel geben!")
                end
            else
                TriggerClientEvent("ls:notify", src, "Spieler nicht gefunden")
            end
        else
            TriggerClientEvent("ls:notify", src, 'Erstes Argument fehlt : /givekey <id> <plate>')
        end

        CancelEvent()
    end)
end
