characters = {}
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

function getIdentity(source, callback)
  local identifier = source
  MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
    {
      ['@identifier'] = identifier
    },
    function(result)
      if result[1] ~= nil then
        local data = {
          identifier = identifier,
          firstname = result[1]['firstname'],
          lastname = result[1]['lastname'],
          dateofbirth = result[1]['dateofbirth'],
          sex = result[1]['sex'],
          height = result[1]['height'],
          phonenumber = result[1]['phone_number'],
          job = result[1]['job'],
          job_grade = result[1]['job_grade'],
          second_job = result[1]['second_job'],
          loadout = result[1]['loadout'],
          skin = result[1]['skin'],
          phone_number = result[1]['phone_number']
        }

        callback(data)
      else
        local data = {
          identifier = '',
          firstname = '',
          lastname = '',
          dateofbirth = '',
          sex = '',
          height = '',
          phonenumber = '',
          job = '',
          job_grade = '',
          second_job = '',
          loadout = '',
          skin = '',
          phone_number = ''
        }

        callback(data)
      end
    end)
end

function getCharacters(source, callback)
    local identifier = GetPlayerIdentifiers(source)[1]
    MySQL.Async.fetchAll("SELECT * FROM `characters` WHERE `identifier` = @identifier",
        {
            ['@identifier'] = identifier
        },
        function(result)
            if result[1] and result[2] and result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = result[2]['id'],
                    firstname2 = result[2]['firstname'],
                    lastname2 = result[2]['lastname'],
                    dateofbirth2 = result[2]['dateofbirth'],
                    sex2 = result[2]['sex'],
                    height2 = result[2]['height'],
                    job2 = result[2]['job'],
                    job_grade2 = result[2]['job_grade'],
                    second_job2 = result[2]['second_job'],
                    loadout2 = result[2]['loadout'],
                    skin2 = result[2]['skin'],
                    phone_number2 = result[2]['phone_number'],

                    characterId3 = result[3]['id'],
                    firstname3 = result[3]['firstname'],
                    lastname3 = result[3]['lastname'],
                    dateofbirth3 = result[3]['dateofbirth'],
                    sex3 = result[3]['sex'],
                    height3 = result[3]['height'],
                    job3 = result[3]['job'],
                    job_grade3 = result[3]['job_grade'],
                    second_job3 = result[3]['second_job'],
                    loadout3 = result[3]['loadout'],
                    skin3 = result[3]['skin'],
                    phone_number3 = result[3]['phone_number']
                }

                callback(data)
            elseif result[1] and result[2] and not result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = result[2]['id'],
                    firstname2 = result[2]['firstname'],
                    lastname2 = result[2]['lastname'],
                    dateofbirth2 = result[2]['dateofbirth'],
                    sex2 = result[2]['sex'],
                    height2 = result[2]['height'],
                    job2 = result[2]['job'],
                    job_grade2 = result[2]['job_grade'],
                    second_job2 = result[2]['second_job'],
                    loadout2 = result[2]['loadout'],
                    skin2 = result[2]['skin'],
                    phone_number2 = result[2]['phone_number'],

                    characterId3 = '',
                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = '',
                }

                callback(data)
            elseif result[1] and not result[2] and not result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = '',
                    firstname2 = '',
                    lastname2 = '',
                    dateofbirth2 = '',
                    sex2 = '',
                    height2 = '',
                    job2 = '',
                    job_grade2 = '',
                    second_job2 = '',
                    loadout2 = '',
                    skin2 = '',
                    phone_number2 = '',

                    characterId3 = '',
                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = ''
                }

                callback(data)
            else
                local data = {
                    identifier = '',
                    firstname1 = '',
                    lastname1 = '',
                    dateofbirth1 = '',
                    sex1 = '',
                    height1 = '',
                    job1 = '',
                    job_grade1 = '',
                    second_job1 = '',
                    loadout1 = '',
                    skin1 = '',
                    phone_number1 = '',

                    firstname2 = '',
                    lastname2 = '',
                    dateofbirth2 = '',
                    sex2 = '',
                    height2 = '',
                    job2 = '',
                    job_grade2 = '',
                    second_job2 = '',
                    loadout2 = '',
                    skin2 = '',
                    phone_number2 = '',

                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = ''
                }

                callback(data)
            end
        end)
end

function getChars(steamid, callback)
    MySQL.Async.fetchAll("SELECT * FROM `characters` WHERE `identifier` = @identifier",
        {
            ['@identifier'] = steamid
        },
        function(result)
            if result[1] and result[2] and result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = result[2]['id'],
                    firstname2 = result[2]['firstname'],
                    lastname2 = result[2]['lastname'],
                    dateofbirth2 = result[2]['dateofbirth'],
                    sex2 = result[2]['sex'],
                    height2 = result[2]['height'],
                    job2 = result[2]['job'],
                    job_grade2 = result[2]['job_grade'],
                    second_job2 = result[2]['second_job'],
                    loadout2 = result[2]['loadout'],
                    skin2 = result[2]['skin'],
                    phone_number2 = result[2]['phone_number'],

                    characterId3 = result[3]['id'],
                    firstname3 = result[3]['firstname'],
                    lastname3 = result[3]['lastname'],
                    dateofbirth3 = result[3]['dateofbirth'],
                    sex3 = result[3]['sex'],
                    height3 = result[3]['height'],
                    job3 = result[3]['job'],
                    job_grade3 = result[3]['job_grade'],
                    second_job3 = result[3]['second_job'],
                    loadout3 = result[3]['loadout'],
                    skin3 = result[3]['skin'],
                    phone_number3 = result[3]['phone_number']
                }

                callback(data)
            elseif result[1] and result[2] and not result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = result[2]['id'],
                    firstname2 = result[2]['firstname'],
                    lastname2 = result[2]['lastname'],
                    dateofbirth2 = result[2]['dateofbirth'],
                    sex2 = result[2]['sex'],
                    height2 = result[2]['height'],
                    job2 = result[2]['job'],
                    job_grade2 = result[2]['job_grade'],
                    second_job2 = result[2]['second_job'],
                    loadout2 = result[2]['loadout'],
                    skin2 = result[2]['skin'],
                    phone_number2 = result[2]['phone_number'],

                    characterId3 = '',
                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = '',
                }

                callback(data)
            elseif result[1] and not result[2] and not result[3] then
                local data = {
                    identifier = result[1]['identifier'],
                    characterId1 = result[1]['id'],
                    firstname1 = result[1]['firstname'],
                    lastname1 = result[1]['lastname'],
                    dateofbirth1 = result[1]['dateofbirth'],
                    sex1 = result[1]['sex'],
                    height1 = result[1]['height'],
                    job1 = result[1]['job'],
                    job_grade1 = result[1]['job_grade'],
                    second_job1 = result[1]['second_job'],
                    loadout1 = result[1]['loadout'],
                    skin1 = result[1]['skin'],
                    phone_number1 = result[1]['phone_number'],

                    characterId2 = '',
                    firstname2 = '',
                    lastname2 = '',
                    dateofbirth2 = '',
                    sex2 = '',
                    height2 = '',
                    job2 = '',
                    job_grade2 = '',
                    second_job2 = '',
                    loadout2 = '',
                    skin2 = '',
                    phone_number2 = '',

                    characterId3 = '',
                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = ''
                }

                callback(data)
            else
                local data = {
                    identifier = '',
                    characterId1 = '',
                    firstname1 = '',
                    lastname1 = '',
                    dateofbirth1 = '',
                    sex1 = '',
                    height1 = '',
                    job1 = '',
                    job_grade1 = '',
                    second_job1 = '',
                    loadout1 = '',
                    skin1 = '',
                    phone_number1 = '',

                    characterId2 = '',
                    firstname2 = '',
                    lastname2 = '',
                    dateofbirth2 = '',
                    sex2 = '',
                    height2 = '',
                    job2 = '',
                    job_grade2 = '',
                    second_job2 = '',
                    loadout2 = '',
                    skin2 = '',
                    phone_number2 = '',

                    characterId3 = '',
                    firstname3 = '',
                    lastname3 = '',
                    dateofbirth3 = '',
                    sex3 = '',
                    height3 = '',
                    job3 = '',
                    job_grade3 = '',
                    second_job3 = '',
                    loadout3 = '',
                    skin3 = '',
                    phone_number3 = ''
                }

                callback(data)
            end
        end)
end

function getID(steamid, callback)
    MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
        {
            ['@identifier'] = steamid
        },
        function(result)
            if result[1] ~= nil then
                local data = {
                    identifier = result[1]['identifier'],
                    firstname = result[1]['firstname'],
                    lastname = result[1]['lastname'],
                    dateofbirth = result[1]['dateofbirth'],
                    sex = result[1]['sex'],
                    height = result[1]['height'],
                    job = result[1]['job'],
                    job_grade = result[1]['job_grade'],
                    second_job = result[1]['second_job'],
                    loadout = result[1]['loadout'],
                    skin = result[1]['skin'],
                    phone_number = result[1]['phone_number'],
                }

                callback(data)
            else
                local data = {
                    identifier = '',
                    firstname = '',
                    lastname = '',
                    dateofbirth = '',
                    sex = '',
                    height = '',
                    phonenumber = '',
                    job = '',
                    job_grade = '',
                    second_job = '',
                    loadout = '',
                    skin = '',
                    phone_number = ''
                }

                callback(data)
            end
        end)
end


RegisterServerEvent('menu:characters')
AddEventHandler('menu:characters', function(callback)
    getCharacters(source, function(data)
        if data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 ~= '' then
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 1: " .. data.firstname1 .. " " .. data.lastname1)
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 2: " .. data.firstname2 .. " " .. data.lastname2)
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 3: " .. data.firstname3 .. " " .. data.lastname3)
        elseif data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 == '' then
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 1: " .. data.firstname1 .. " " .. data.firstname1)
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 2: " .. data.firstname2 .. " " .. data.lastname2)
        elseif data.firstname1 ~= '' and data.firstname2 == '' and data.firstname3 == '' then
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Charakter 1: " .. data.firstname1 .. " " .. data.firstname1)
        elseif data.firstname1 == '' and data.firstname2 == '' and data.firstname3 == '' then
            TriggerClientEvent('chatMessage', -1, '', { 217, 217, 217 }, "Du hast keine Charaktere.")
        end
    end)
end)

function getPlayerID(source)
    local identifiers = GetPlayerIdentifiers(source)
    local player = getIdentifiant(identifiers)
    return player
end

function getIdentifiant(id)
    for _, v in ipairs(id) do
        return v
    end
end

AddEventHandler('es:playerLoaded', function(source)
    local steamid = GetPlayerIdentifiers(source)[1]

    getCharacters(source, function(data)
        if data ~= nil then
            if data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 ~= '' then
                local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                local char2 = tostring(data.firstname2) .. " " .. tostring(data.lastname2)
                local char3 = tostring(data.firstname3) .. " " .. tostring(data.lastname3)

                identification = {
                    steamidentifier = steamid,
                    playerid = source
                }

                characters = {
                    character1 = char1,
                    character2 = char2,
                    character3 = char3,
                }

                TriggerClientEvent('menu:setCharacters', source, characters)
                TriggerClientEvent('menu:setIdentifier', source, identification)

            elseif data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 == '' then
                local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                local char2 = tostring(data.firstname2) .. " " .. tostring(data.lastname2)
                local char3 = "Kein Charakter"

                identification = {
                    steamidentifier = steamid,
                    playerid = source
                }

                characters = {
                    character1 = char1,
                    character2 = char2,
                    character3 = char3,
                }

                TriggerClientEvent('menu:setCharacters', source, characters)
                TriggerClientEvent('menu:setIdentifier', source, identification)

            elseif data.firstname1 ~= '' and data.firstname2 == '' and data.firstname3 == '' then
                local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                local char2 = "Kein Charakter"
                local char3 = "Kein Charakter"

                identification = {
                    steamidentifier = steamid,
                    playerid = source
                }

                characters = {
                    character1 = char1,
                    character2 = char2,
                    character3 = char3,
                }

                TriggerClientEvent('menu:setCharacters', source, characters)
                TriggerClientEvent('menu:setIdentifier', source, identification)

            elseif data.firstname1 == '' and data.firstname2 == '' and data.firstname3 == '' then
                local char1 = "Kein Charakter"
                local char2 = "Kein Charakter"
                local char3 = "Kein Charakter"

                identification = {
                    steamidentifier = steamid,
                    playerid = source
                }

                characters = {
                    character1 = char1,
                    character2 = char2,
                    character3 = char3,
                }

                TriggerClientEvent('menu:setCharacters', source, characters)
                TriggerClientEvent('menu:setIdentifier', source, identification)

            else

                identification = {
                    steamidentifier = steamid,
                    playerid = source
                }

                characters = {
                    character1 = "Kein Charakter",
                    character2 = "Kein Charakter",
                    character3 = "Kein Charakter"
                }

                TriggerClientEvent('menu:setCharacters', source, characters)
                TriggerClientEvent('menu:setIdentifier', source, identification)
            end
        end
    end)
end)

RegisterServerEvent('menu:setChars')
AddEventHandler('menu:setChars', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        if data ~= nil then
            if data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 ~= '' then
                getID(myIdentifiers.steamidentifier, function(result)
                    if result ~= nil then
                        local activeName = tostring(result.firstname) .. " " .. tostring(result.lastname)
                        local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                        local char2 = tostring(data.firstname2) .. " " .. tostring(data.lastname2)
                        local char3 = tostring(data.firstname3) .. " " .. tostring(data.lastname3)

                        if activeName == char1 then
                            characters = {
                                character1 = char1 .. " [Active]",
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        elseif activeName == char2 then
                            characters = {
                                character1 = char1,
                                character2 = char2 .. " [Active]",
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        elseif activeName == char3 then
                            characters = {
                                character1 = char1,
                                character2 = char2,
                                character3 = char3 .. " [Active]"
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        else
                            characters = {
                                character1 = char1,
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        end
                    else
                        characters = {
                            character1 = char1,
                            character2 = char2,
                            character3 = char3
                        }

                        TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                    end
                end)
            elseif data.firstname1 ~= '' and data.firstname2 ~= '' and data.firstname3 == '' then
                getID(myIdentifiers.steamidentifier, function(result)
                    if result ~= nil then
                        local activeName = tostring(result.firstname) .. " " .. tostring(result.lastname)
                        local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                        local char2 = tostring(data.firstname2) .. " " .. tostring(data.lastname2)
                        local char3 = "Kein Charakter"

                        if activeName == char1 then
                            characters = {
                                character1 = char1 .. " [Active]",
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        elseif activeName == char2 then
                            characters = {
                                character1 = char1,
                                character2 = char2 .. " [Active]",
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        else
                            characters = {
                                character1 = char1,
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        end
                    else
                        characters = {
                            character1 = char1,
                            character2 = char2,
                            character3 = char3
                        }

                        TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                    end
                end)
            elseif data.firstname1 ~= '' and data.firstname2 == '' and data.firstname3 == '' then
                getID(myIdentifiers.steamidentifier, function(result)
                    if result ~= nil then
                        local activeName = tostring(result.firstname) .. " " .. tostring(result.lastname)
                        local char1 = tostring(data.firstname1) .. " " .. tostring(data.lastname1)
                        local char2 = "Kein Charakter"
                        local char3 = "Kein Charakter"

                        if activeName == char1 then
                            characters = {
                                character1 = char1 .. " [Active]",
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        else
                            characters = {
                                character1 = char1,
                                character2 = char2,
                                character3 = char3
                            }

                            TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                        end
                    else
                        characters = {
                            character1 = char1,
                            character2 = char2,
                            character3 = char3
                        }

                        TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
                    end
                end)
            else
                characters = {
                    character1 = "Kein Charakter",
                    character2 = "Kein Charakter",
                    character3 = "Kein Charakter"
                }

                TriggerClientEvent('menu:setCharacters', myIdentifiers.playerid, characters)
            end
        end
    end)
end)


RegisterServerEvent('menu:deleteChar1')
AddEventHandler('menu:deleteChar1', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            characterId = data.characterId1,
            firstname = data.firstname1,
            lastname = data.lastname1,
            dateofbirth = data.dateofbirth1,
            sex = data.sex1,
            height = data.height1,
            job = data.job1,
            job_grade = data.job_grade1,
            second_job = data.second_job1,
            loadout = data.loadout1,
            skin = data.skin1,
            phone_number = data.phone_number1
        }

        if data.firstname ~= '' then
            deleteCharacter(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Delete Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 1!")
        end
    end)
end)

RegisterServerEvent('menu:deleteChar2')
AddEventHandler('menu:deleteChar2', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            characterId = data.characterId2,
            firstname = data.firstname2,
            lastname = data.lastname2,
            dateofbirth = data.dateofbirth2,
            sex = data.sex2,
            height = data.height2,
            job = data.job2,
            job_grade = data.job_grade2,
            second_job = data.second_job2,
            loadout = data.loadout2,
            skin = data.skin2,
            phone_number = data.phone_number2
        }

        if data.firstname ~= '' then
            deleteCharacter(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Delete Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 2!")
        end
    end)
end)

RegisterServerEvent('menu:deleteChar3')
AddEventHandler('menu:deleteChar3', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            characterId = data.characterId3,
            firstname = data.firstname3,
            lastname = data.lastname3,
            dateofbirth = data.dateofbirth3,
            sex = data.sex3,
            height = data.height3,
            job = data.job3,
            job_grade = data.job_grade3,
            second_job = data.second_job3,
            loadout = data.loadout3,
            skin = data.skin3,
            phone_number = data.phone_number3
        }

        if data.firstname ~= '' then
            deleteCharacter(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Delete Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 3!")
        end
    end)
end)

RegisterServerEvent('menu:selectChar1')
AddEventHandler('menu:selectChar1', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            firstname = data.firstname1,
            lastname = data.lastname1,
            dateofbirth = data.dateofbirth1,
            sex = data.sex1,
            height = data.height1,
            job = data.job1,
            job_grade = data.job_grade1,
            second_job = data.second_job1,
            loadout = data.loadout1,
            skin = data.skin1,
            phone_number = data.phone_number1
        }

        if data.firstname ~= '' then
            updateIdentity(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du bist nun " .. data.firstname .. " " .. data.lastname .. "!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Update Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 1!")
        end
    end)
end)

RegisterServerEvent('menu:selectChar2')
AddEventHandler('menu:selectChar2', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            firstname = data.firstname2,
            lastname = data.lastname2,
            dateofbirth = data.dateofbirth2,
            sex = data.sex2,
            height = data.height2,
            job = data.job2,
            job_grade = data.job_grade2,
            second_job = data.second_job2,
            loadout = data.loadout2,
            skin = data.skin2,
            phone_number = data.phone_number2
        }

        if data.firstname ~= '' then
            updateIdentity(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du bist jetzt " .. data.firstname .. " " .. data.lastname .. "!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Update Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 2!")
        end
    end)
end)

RegisterServerEvent('menu:selectChar3')
AddEventHandler('menu:selectChar3', function(myIdentifiers)
    getChars(myIdentifiers.steamidentifier, function(data)
        local data = {
            identifier = data.identifier,
            firstname = data.firstname3,
            lastname = data.lastname3,
            dateofbirth = data.dateofbirth3,
            sex = data.sex3,
            height = data.height3,
            job = data.job3,
            job_grade = data.job_grade3,
            second_job = data.second_job3,
            loadout = data.loadout3,
            skin = data.skin3,
            phone_number = data.phone_number3
        }

        if data.firstname ~= '' then
            updateIdentity(myIdentifiers.steamidentifier, data, function(callback)
                if callback == true then
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Du bist jetzt " .. data.firstname .. " " .. data.lastname .. "!")
                else
                    TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Failed To Update Identity!")
                end
            end)
        else
            TriggerClientEvent('chatMessage', myIdentifiers.playerid, "[IDENTITY]", { 255, 0, 0 }, "Kein Charakter in Slot 3!")
        end
    end)
end)

--===============================================
--==  Update The Player's Identification       ==
--===============================================
-- TODO::Für morgen
function updateIdentity(steamid, data, callback)
  local _steamid = steamid
  getIdentity(_steamid, function(data1)
    MySQL.Async.execute('UPDATE `characters` SET `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin, `phone_number` = @phone_number WHERE identifier = @identifier and firstname = @firstname and lastname = @lastname and dateofbirth = @dateofbirth and sex = @sex',
      {
        ['@identifier'] = data1.identifier,
        ['@firstname'] = data1.firstname,
        ['@lastname'] = data1.lastname,
        ['@dateofbirth'] = data1.dateofbirth,
        ['@sex'] = data1.sex,
        ['@height'] = data1.height,
        ['@job'] = data1.job,
        ['@job_grade'] = data1.job_grade,
        ['@second_job'] = data1.second_job,
        ['@loadout'] = data1.loadout,
        ['@skin'] = data1.skin,
        ['@phone_number'] = data1.phone_number
      },
      function(done)

        MySQL.Async.execute('UPDATE `users` SET `firstname` = @firstname, `lastname` = @lastname, `dateofbirth` = @dateofbirth, `sex` = @sex, `height` = @height, `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin, `phone_number` = @phone_number WHERE identifier = @identifier',
          {
            ['@identifier'] = data.identifier,
            ['@firstname'] = data.firstname,
            ['@lastname'] = data.lastname,
            ['@dateofbirth'] = data.dateofbirth,
            ['@sex'] = data.sex,
            ['@height'] = data.height,
            ['@job'] = data.job,
            ['@job_grade'] = data.job_grade,
            ['@second_job'] = data.second_job,
            ['@loadout'] = data.loadout,
            ['@skin'] = data.skin,
            ['@phone_number'] = data.phone_number
          },
          function(done)
            xPlayer = ESX.GetPlayerFromIdentifier(data.identifier)
            xPlayer.setJob(data.job, data.job_grade)
            xPlayer.setSecondJob(data.second_job, 0)
            TriggerEvent('esx_phone:refresh', steamid)
            TriggerClientEvent('updateSkin', xPlayer.source)
            if callback then
              callback(true)
            end
          end)
      end)
  end)
end

    --===============================================
    --==  Delete The Player's Character            ==
    --===============================================
    function deleteCharacter(steamid, data, callback)
        MySQL.Async.execute("DELETE FROM `characters` WHERE identifier = @identifier AND firstname = @firstname AND lastname = @lastname AND dateofbirth = @dateofbirth AND sex = @sex AND height = @height",
            {
                ['@identifier'] = steamid,
                ['@firstname'] = data.firstname,
                ['@lastname'] = data.lastname,
                ['@dateofbirth'] = data.dateofbirth,
                ['@sex'] = data.sex,
                ['@height'] = data.height,
                ['@job'] = data.job,
                ['@job_grade'] = data.job_grade,
                ['@second_job'] = data.second_job,
                ['@loadout'] = data.loadout,
                ['@skin'] = data.skin
            },
            function(done)
                if callback then
                    callback(true)
                end
            end)

        MySQL.Async.execute("DELETE FROM `user_contacts` WHERE identifier = @identifier",
            {
                ['@identifier'] = data.characterId
            },
            function(done)
            end)
    end

    --===============================================
    --==  Get Jobname by grade                     ==
    --===============================================
    function getJobByGrade(job, grade, callback)
        cb1 = nil
        cb2 = nil
        data = {}
        MySQL.Async.fetchAll("SELECT * FROM `jobs` WHERE `name` = @job",
            {
                ['@job'] = job
            },
            function(result)
                cb1 = result[1]['label']

                MySQL.Async.fetchAll("SELECT * FROM `job_grades` WHERE `job_name` = @job and `grade` = @grade",
                    {
                        ['@grade'] = grade,
                        ['@job'] = job
                    },
                    function(result)
                        cb2 = result[1]['label']

                        data = {
                            job = cb1,
                            grade = cb2
                        }

                        callback(data)
                    end)
            end)
    end

    --===============================================
    --==       Server Event Set Identity           ==
    --===============================================
    function GenerateUniquePhoneNumber()

      local foundNumber = false
      local phoneNumber = nil

      while not foundNumber do

        phoneNumber = math.random(10000, 99999)

        local result = MySQL.Sync.fetchAll(
          'SELECT COUNT(*) as count FROM characters WHERE phone_number = @phoneNumber',
          {
            ['@phoneNumber'] = phoneNumber
          }
        )

        local count  = tonumber(result[1].count)

        if count == 0 then
          foundNumber = true
        end

      end

      return phoneNumber
    end

    function setIdentity(identifier, data, skin, callback)
        phoneNumber = GenerateUniquePhoneNumber()

        MySQL.Async.execute('UPDATE `users` SET `loadout` = @loadout, `skin` = @skin, `firstname` = @firstname, `lastname` = @lastname, `dateofbirth` = @dateofbirth, `sex` = @sex, `height` = @height, `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `phone_number` = @phonenumber WHERE identifier = @identifier',
            {
                ['@identifier']         = identifier,
                ['@firstname']          = data.firstname,
                ['@lastname']           = data.lastname,
                ['@dateofbirth']        = data.dateofbirth,
                ['@sex']                = data.sex,
                ['@height']             = data.height,
                ['@job']                = "unemployed",
                ['@job_grade']          = "0",
                ['@second_job']         = "unemployed",
                ['@loadout']            = "[]",
                ['@skin']               = skin,
                ['@phonenumber']        = phoneNumber
            },
            function(done)
                if callback then
                    callback(true)
                end
            end)

        MySQL.Async.execute(
            'INSERT INTO characters (identifier, firstname, lastname, dateofbirth, sex, height, job, job_grade, second_job, loadout, skin, phone_number) VALUES (@identifier, @firstname, @lastname, @dateofbirth, @sex, @height, @job, @job_grade, @second_job, @loadout, @skin, @phonenumber)',
            {
                ['@identifier']       = identifier,
                ['@firstname']        = data.firstname,
                ['@lastname']         = data.lastname,
                ['@dateofbirth']      = data.dateofbirth,
                ['@sex']              = data.sex,
                ['@height']           = data.height,
                ['@job']              = "unemployed",
                ['@job_grade']        = "0",
                ['@second_job']       = "unemployed",
                ['@loadout']          = "[]",
                ['@skin']             = skin,
                ['@phonenumber']      = phoneNumber
            }
        )

          xPlayer = ESX.GetPlayerFromIdentifier(identifier)
          xPlayer.setJob("unemployed", 0)
          xPlayer.setSecondJob("unemployed", 0)
          TriggerEvent('esx_phone:refresh', steamid)
    end

    RegisterServerEvent('esx_identity:setIdentity')
    AddEventHandler('esx_identity:setIdentity', function(data ,skin)
        local identifier = GetPlayerIdentifiers(source)[1]
        setIdentity(GetPlayerIdentifiers(source)[1], data, skin, function(callback)
            if callback == true then
                print('Successfully Set Identity For ' .. identifier)
                TriggerEvent('esx_phone:refresh', steamid)
                Citizen.Wait(2000)
                TriggerEvent('esx_phone:refresh', steamid)
            else
                print('Failed To Set Identity.')
            end
        end)
    end)


    --===============================================
    --==       Server Event update Last Char       ==
    --===============================================

    function updateLastChar(identifier, callback)

      getIdentity(identifier, function(data1)
        MySQL.Async.execute('UPDATE `characters` SET `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin WHERE identifier = @identifier and firstname = @firstname and lastname = @lastname and dateofbirth = @dateofbirth and sex = @sex',
          {
            ['@identifier']     = identifier,
            ['@firstname']      = data1.firstname,
            ['@lastname']       = data1.lastname,
            ['@dateofbirth']    = data1.dateofbirth,
            ['@sex']            = data1.sex,
            ['@height']         = data1.height,
            ['@job']            = data1.job,
            ['@job_grade']      = data1.job_grade,
            ['@second_job']     = data1.second_job,
            ['@loadout']        = data1.loadout,
            ['@skin']           = data1.skin
          },
          function(done)
            if callback then
              callback(true)
            end
          end)
      end)

    end

    RegisterServerEvent('esx_identity:updateLastChar')
    AddEventHandler('esx_identity:updateLastChar', function(data)
      local identifier = GetPlayerIdentifiers(source)[1]
      updateLastChar(GetPlayerIdentifiers(source)[1], function(callback)
        if callback == true then
          print('Successfully Saved ')
        else
          print('Failed To Save Identity.')
        end
      end)
    end)


    --===============================================
    --==       Player Loaded Event Handler         ==
    --===============================================
    AddEventHandler('es:playerLoaded', function(source)
        local identifier = GetPlayerIdentifiers(source)[1]
        getIdentity(identifier, function(data)
            if data.firstname == '' then
                TriggerClientEvent('esx_identity:showRegisterIdentity', source)
            else
                print('Successfully Loaded Identity For ' .. data.firstname .. ' ' .. data.lastname)
            end
        end)
    end)


    --===============================================
    --== /charselect 1,2,3 Select Your Active Char ==
    --===============================================
    TriggerEvent('es:addCommand', 'getID', function(source, args, user)

        identification = {
            steamidentifier = GetPlayerIdentifiers(source)[1],
            playerid = source
        }

        TriggerClientEvent('menu:setIdentifier', source, identification)
    end)

    --===============================================
    --== /charselect 1,2,3 Select Your Active Char ==
    --===============================================
    TriggerEvent('es:addCommand', 'retID', function(source, args, user)
        TriggerClientEvent('menu:getSteamIdent', source)
    end)

