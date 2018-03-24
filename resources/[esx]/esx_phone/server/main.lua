ESX                       = nil
local DisptachRequestId   = 0
local PhoneNumbers        = {}

TriggerEvent('esx:getSharedObject', function(obj)
  ESX = obj
end)

function GenerateUniquePhoneNumber()

  local foundNumber = false
  local phoneNumber = nil

  while not foundNumber do

    phoneNumber = math.random(10000, 999999)

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

function GetDistpatchRequestId()

  local requestId = DisptachRequestId

  if DisptachRequestId < 65535 then
    DisptachRequestId = DisptachRequestId + 1
  else
    DisptachRequestId = 0
  end

  return requestId

end

AddEventHandler('esx_phone:getDistpatchRequestId', function(cb)
  cb(GetDistpatchRequestId())
end)

AddEventHandler('onResourceStart', function(ressource)
  if ressource == 'esx_phone' then
    TriggerEvent('esx_phone:ready')
  end
end)

AddEventHandler('esx:playerLoaded', function(source)

  local xPlayer = ESX.GetPlayerFromId(source)
  local xIdentity = {}

  getIdentity(xPlayer.identifier, function(data)
    xIdentity = data

    for num,v in pairs(PhoneNumbers) do
      if tonumber(num) == num then -- If phonenumber is a player phone number
        for src,_ in pairs(v.sources) do
          TriggerClientEvent('esx_phone:setPhoneNumberSource', source, num, tonumber(src))
        end
      end
    end

    MySQL.Async.fetchAll(
      'SELECT * FROM users WHERE identifier = @identifier',
      {
        ['@identifier'] = xPlayer.identifier
      },
      function(result)

        local phoneNumber = result[1].phone_number

        if phoneNumber == nil then

          phoneNumber = GenerateUniquePhoneNumber()

          MySQL.Async.execute(
            'UPDATE users SET phone_number = @phone_number WHERE identifier = @identifier',
            {
              ['@identifier']   = xPlayer.identifier,
              ['@phone_number'] = phoneNumber
            }
          )

          MySQL.Async.execute(
            'UPDATE characters SET phone_number = @phone_number WHERE id = @identifier',
            {
              --TODO :: CharacterId!!! statt Identifier
              ['@identifier'] = xIdentity.characterId,
              ['@phone_number'] = phoneNumber
            }
          )
        end

        TriggerClientEvent('esx_phone:setPhoneNumberSource', -1, phoneNumber, source)

        PhoneNumbers[phoneNumber] = {
          type          = 'player',
          hashDispatch  = false,
          sharePos      = false,
          hideNumber    = false,
          hidePosIfAnon = false,
          sources       = {[source] = true}
        }

        xPlayer.set('phoneNumber', phoneNumber)

        if PhoneNumbers[xPlayer.job.name] ~= nil then
          TriggerEvent('esx_phone:addSource', xPlayer.job.name, source)
        end

        local contacts = {}

        MySQL.Async.fetchAll(
          'SELECT * FROM user_contacts WHERE identifier = @identifier ORDER BY name ASC',
          {
            ['@identifier'] = xIdentity.characterId
          },
          function(result2)

            for i=1, #result2, 1 do

              table.insert(contacts, {
                name   = result2[i].name,
                number = result2[i].number,
              })
            end

            xPlayer.set('contacts', contacts)

            TriggerClientEvent('esx_phone:loaded', source, phoneNumber, contacts)

          end
        )
        end
      )
    end
  )

end)

AddEventHandler('esx:playerDropped', function(source)

  local xPlayer = ESX.GetPlayerFromId(source)

  TriggerClientEvent('esx_phone:setPhoneNumberSource', -1, xPlayer.get('phoneNumber'), -1)

  PhoneNumbers[xPlayer.get('phoneNumber')] = nil

  if PhoneNumbers[xPlayer.job.name] ~= nil then
    TriggerEvent('esx_phone:removeSource', xPlayer.job.name, source)
  end

end)

AddEventHandler('esx:setJob', function(source, job, lastJob)

  if PhoneNumbers[lastJob.name] ~= nil then
    TriggerEvent('esx_phone:removeSource', lastJob.name, source)
  end

  if PhoneNumbers[job.name] ~= nil then
    TriggerEvent('esx_phone:addSource', job.name, source)
  end

end)

RegisterServerEvent('esx_phone:reload')
AddEventHandler('esx_phone:reload', function(phoneNumber)

  local _source  = source
  local xPlayer  = ESX.GetPlayerFromId(_source)
  local contacts = xPlayer.get('contacts')

  TriggerClientEvent('esx_phone:loaded', _source, phoneNumber, contacts)

end)


--- added by Philipp
-- Diese Funktion soll die User-Tabelle aktualisieren um für jeden Charakter eine eigene Nummer zu gewährleisten.
--- esx::refresh
RegisterServerEvent('esx_phone:refresh')
AddEventHandler('esx_phone:refresh', function(indentifier)

  local _source  = indentifier
  local xPlayer  = ESX.GetPlayerFromIdentifier(_source)
  local xIdentity = {}

  getIdentity(xPlayer.identifier, function(data)
    xIdentity = data


    for num,v in pairs(PhoneNumbers) do
      if tonumber(num) == num then -- If phonenumber is a player phone number
        for src,_ in pairs(v.sources) do
          TriggerClientEvent('esx_phone:setPhoneNumberSource', xPlayer.source, num, tonumber(src))
        end
      end
    end

    MySQL.Async.fetchAll(
      'SELECT * FROM users WHERE identifier = @identifier',
      {
        ['@identifier'] = _source
      },
      function(result)

        local phoneNumber = result[1].phone_number

        if phoneNumber == nil then

          phoneNumber = GenerateUniquePhoneNumber()

          MySQL.Async.execute(
            'UPDATE users SET phone_number = @phone_number WHERE identifier = @identifier',
            {
              ['@identifier']   = xPlayer.identifier,
              ['@phone_number'] = phoneNumber
            }
          )

          MySQL.Async.execute(
            'UPDATE characters SET phone_number = @phone_number WHERE id = @identifier',
            {
              ['@identifier'] = xIdentity.characterId,
              ['@phone_number'] = phoneNumber
            }
          )
        end

        TriggerClientEvent('esx_phone:setPhoneNumberSource', -1, phoneNumber, xPlayer.source)

        PhoneNumbers[phoneNumber] = {
          type          = 'player',
          hashDispatch  = false,
          sharePos      = false,
          hideNumber    = false,
          hidePosIfAnon = false,
          sources       = {[xPlayer.source] = true}
        }

        xPlayer.set('phoneNumber', phoneNumber)

        if PhoneNumbers[xPlayer.job.name] ~= nil then
          TriggerEvent('esx_phone:addSource', xPlayer.job.name, xPlayer.source)
        end



        MySQL.Async.fetchAll(
          'SELECT * FROM user_contacts WHERE identifier = @identifier ORDER BY name ASC',
          {
            ['@identifier'] = xIdentity.characterId
          },
          function(result2)
            local contacts = {}

            for i=1, #result2, 1 do

              table.insert(contacts, {
                name   = result2[i].name,
                number = result2[i].number,
              })
            end

            xPlayer.set('contacts', contacts)

            TriggerClientEvent('esx_phone:loaded', xPlayer.source, phoneNumber, contacts)

          end
        )
      end
    )


    end
  )

end)

RegisterServerEvent('esx_phone:send')
AddEventHandler('esx_phone:send', function(phoneNumber, message, anon, position)

  local _source = source
  local xPlayer = ESX.GetPlayerFromId(_source)


  if PhoneNumbers[phoneNumber] ~= nil then

    local counter = 0
    local moneyRemoved = 0

    for k,v in pairs(PhoneNumbers[phoneNumber].sources) do

      local numType          = PhoneNumbers[phoneNumber].type
      local numHasDispatch   = PhoneNumbers[phoneNumber].hasDispatch
      local numHide          = PhoneNumbers[phoneNumber].hideNumber
      local numHidePosIfAnon = PhoneNumbers[phoneNumber].hidePosIfAnon
      local numPosition      = (PhoneNumbers[phoneNumber].sharePos and position or false)
      local numSource        = tonumber(k)

      counter = counter + 1

      if numHidePosIfAnon and anon then
        numPosition = false
      end

      if numHasDispatch then

        if xPlayer.get('money') >= 10 then
          if moneyRemoved == 0 then
            xPlayer.removeMoney(10)
            moneyRemoved = 1
          end
          TriggerClientEvent('esx_phone:onMessage', numSource, xPlayer.get('phoneNumber'), message, numPosition, (numHide and true or anon), numType, GetDistpatchRequestId())
          TriggerClientEvent('esx:showNotification', xPlayer.source, 'Du hast einen Dispatch gesendet und ~r~$10~w~ dafür bezahlt!')
        else
          TriggerClientEvent('esx:showNotification', xPlayer.source, 'Du hast nicht genug Geld um einen Dispatch zu senden!')
        end
      else
        TriggerClientEvent('esx_phone:onMessage', numSource, xPlayer.get('phoneNumber'), message, numPosition, (numHide and true or anon), numType, false)
        TriggerClientEvent('esx:showNotification', xPlayer.source, _U('message_sent'))
      end

    end

    if counter == 0 then
      TriggerClientEvent('esx:showNotification', xPlayer.source, 'Deine Nachricht hat ~y~niemanden~w~ erreicht.')
    end

  else

    TriggerClientEvent('esx:showNotification', xPlayer.source, 'Deine Nachricht hat ~y~niemanden~w~ erreicht.')

  end

end)

AddEventHandler('esx_phone:registerNumber', function(number, type, sharePos, hasDispatch, hideNumber, hidePosIfAnon)

  local hideNumber    = hideNumber    or false
  local hidePosIfAnon = hidePosIfAnon or false

  PhoneNumbers[number] = {
    type          = type,
    sharePos      = sharePos,
    hasDispatch   = (hasDispatch or false),
    hideNumber    = hideNumber,
    hidePosIfAnon = hidePosIfAnon,
    sources       = {}
  }

end)

AddEventHandler('esx_phone:addSource', function(number, source)
  PhoneNumbers[number].sources[tostring(source)] = true
end)

AddEventHandler('esx_phone:removeSource', function(number, source)
  PhoneNumbers[number].sources[tostring(source)] = nil
end)

function getIdentity(identifier, callback)
  if identifier ~= nil then
    MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
      {
        ['@identifier'] = identifier
      },
      function(result)
        --(Woogy) There're some "empty" characters in the db. Characters without a name shouldn't be saved in the db anyway
          MySQL.Async.fetchAll("SELECT * FROM `characters` WHERE `identifier` = @identifier AND `firstname` = @firstname AND `lastname` = @lastname AND `job` = @job AND `job_grade` = @job_grade AND `second_job` = @second_job",
            {
              ['@identifier'] = identifier,
              ['@firstname'] = result[1].firstname,
              ['@lastname'] = result[1].lastname,
              ['@job'] = result[1].job,
              ['@job_grade'] = result[1].job_grade,
              ['@second_job'] = result[1].second_job,
            },
            function(result1)
              local data = {
                identifier	= result1[1]['identifier'] or nil,
                characterId = result1[1]['id'] or nil,
                firstname	= result1[1]['firstname'] or nil,
                lastname	= result1[1]['lastname'] or nil,
                dateofbirth	= result1[1]['dateofbirth'] or nil,
                sex			= result1[1]['sex'] or nil,
                height		= result1[1]['height'] or nil,
                job		    = result1[1]['job'] or nil,
                job_grade	= result1[1]['job_grade'] or nil,
                second_job	= result1[1]['second_job'] or nil,
                loadout     = result1[1]['loadout'] or nil,
                skin		= result1[1]['skin'] or nil,
                phone_number = result1[1]['phone_number'] or nil
              }
              callback(data)
            end
          )
      end
    )
  end
end

RegisterServerEvent('esx_phone:addPlayerContact')
AddEventHandler('esx_phone:addPlayerContact', function(phoneNumber, contactName)

  local _source     = source
  local xPlayer     = ESX.GetPlayerFromId(_source)
  local foundNumber = false
  local foundPlayer = nil
  local xIdentity = {}
  getIdentity(xPlayer.identifier, function(data1)
    xIdentity = data1

    MySQL.Async.fetchAll(
      'SELECT phone_number FROM characters WHERE phone_number = @number',
      {
        ['@number'] = phoneNumber
      },
      function(result)

        if result[1] ~= nil then
          foundNumber = true
        end

        if foundNumber then

          if phoneNumber == xPlayer.get('phoneNumber') then
            TriggerClientEvent('esx:showNotification', _source, _U('cannot_add_self'))
          else

            local hasAlreadyAdded = false
            local contacts        = xPlayer.get('contacts')

            for i=1, #contacts, 1 do
              if contacts[i].number == phoneNumber then
                hasAlreadyAdded = true
              end
            end

            if hasAlreadyAdded then
              TriggerClientEvent('esx:showNotification', _source, _U('number_in_contacts'))
            else

              table.insert(contacts, {
                name   = contactName,
                number = phoneNumber,
              })

              xPlayer.set('contacts', contacts)

              MySQL.Async.execute(
                'INSERT INTO user_contacts (identifier, name, number) VALUES (@identifier, @name, @number)',
                {
                  ['@identifier'] = xIdentity.characterId,
                  ['@name']       = contactName,
                  ['@number']     = phoneNumber
                },
                function(rowsChanged)

                  TriggerClientEvent('esx:showNotification', _source, _U('contact_added'))

                  TriggerClientEvent('esx_phone:addContact', _source, contactName, phoneNumber)
                end
              )

            end
          end

        else
          TriggerClientEvent('esx:showNotification', source, _U('number_not_assigned'))
        end

      end
    )
    end
  )

end)

RegisterServerEvent('esx_phone:stopDispatch')
AddEventHandler('esx_phone:stopDispatch', function(dispatchRequestId)
  TriggerClientEvent('esx_phone:stopDispatch', -1, dispatchRequestId, GetPlayerName(source))
end)
