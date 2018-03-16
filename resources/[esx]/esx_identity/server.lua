--==================================================================================
--======               ESX_IDENTITY BY ARKSEYONET @Ark                    	  ======
--======    YOU CAN FIND ME ON MY DISCORD @Ark - https://discord.gg/cGHHxPX   ======
--======    IF YOU ALTER THIS VERSION OF THE SCRIPT, PLEASE GIVE ME CREDIT    ======
--======            Special Thanks To COSHAREK FOR THE UI Design              ======
--======     Special Thanks To Alphakush and CMD.Telhada For Help Testing     ======
--==================================================================================

--===================================================================
--==                        MAIN FUNCTIONS                         ==
--===================================================================

ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

--===============================================
--==     Get The Player's Identification       ==
--===============================================
function getIdentity(source, callback)
	local identifier = GetPlayerIdentifiers(source)[1]
	if identifier ~= nil then
    MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
		{
			['@identifier'] = identifier
		},
		function(result)
			if result ~= nil and result[1]['firstname'] ~= nil then
				local data = {
					identifier	= result[1]['identifier'],
					firstname	= result[1]['firstname'],
					lastname	= result[1]['lastname'],
					dateofbirth	= result[1]['dateofbirth'],
					sex			= result[1]['sex'],
					height		= result[1]['height'],
          job		= result[1]['job'],
          job_grade		= result[1]['job_grade'],
          second_job		= result[1]['second_job'],
          loadout = result[1]['loadout'],
          skin		= result[1]['skin']
				}

				callback(data)
			else
				local data = {
					identifier 	= '',
					firstname 	= '',
					lastname 	= '',
					dateofbirth = '',
					sex 		= '',
					height 		= '',
          job		= '',
          job_grade		= '',
          second_job		= '',
          loadout = '',
          skin		= ''
				}

				callback(data)
			end
		end)
	end
end

--===============================================
--==     Get The Player's Identification       ==
--===============================================
function getCharacters(source, callback)
	local identifier = GetPlayerIdentifiers(source)[1]
    MySQL.Async.fetchAll("SELECT * FROM `characters` WHERE `identifier` = @identifier",
	{
		['@identifier'] = identifier
	},
	function(result)
		if result[1] and result[2] and result[3] then
			local data = {
				identifier		= result[1]['identifier'],
				firstname1		= result[1]['firstname'],
				lastname1		= result[1]['lastname'],
				dateofbirth1	= result[1]['dateofbirth'],
				sex1			= result[1]['sex'],
				height1			= result[1]['height'],
        job1		= result[1]['job'],
        job_grade1		= result[1]['job_grade'],
        second_job1		= result[1]['second_job'],
        loadout1 = result[1]['loadout'],
        skin1		= result[1]['skin'],

				firstname2		= result[2]['firstname'],
				lastname2		= result[2]['lastname'],
				dateofbirth2	= result[2]['dateofbirth'],
				sex2			= result[2]['sex'],
				height2			= result[2]['height'],
        job2		= result[2]['job'],
        job_grade2		= result[2]['job_grade'],
        second_job2		= result[2]['second_job'],
        loadout2 = result[2]['loadout'],
        skin2		= result[2]['skin'],

				firstname3		= result[3]['firstname'],
				lastname3		= result[3]['lastname'],
				dateofbirth3	= result[3]['dateofbirth'],
				sex3			= result[3]['sex'],
				height3			= result[3]['height'],
        job3		= result[3]['job'],
        job_grade3		= result[3]['job_grade'],
        second_job3		= result[3]['second_job'],
        loadout3 = result[3]['loadout'],
        skin3		= result[3]['skin']
			}

			callback(data)
		elseif result[1] and result[2] and not result[3] then
			local data = {
				identifier		= result[1]['identifier'],
				firstname1		= result[1]['firstname'],
				lastname1		= result[1]['lastname'],
				dateofbirth1	= result[1]['dateofbirth'],
				sex1			= result[1]['sex'],
				height1			= result[1]['height'],
        job1		= result[1]['job'],
        job_grade1		= result[1]['job_grade'],
        second_job1		= result[1]['second_job'],
        loadout1 = result[1]['loadout'],
        skin1		= result[1]['skin'],

				firstname2		= result[2]['firstname'],
				lastname2		= result[2]['lastname'],
				dateofbirth2	= result[2]['dateofbirth'],
				sex2			= result[2]['sex'],
				height2			= result[2]['height'],
        job2		= result[2]['job'],
        job_grade2		= result[2]['job_grade'],
        second_job2		= result[2]['second_job'],
        loadout2 = result[2]['loadout'],
        skin2		= result[2]['skin'],

				firstname3		= '',
				lastname3		= '',
				dateofbirth3	= '',
				sex3			= '',
				height3			= '',
        job3		= '',
        job_grade3		= '',
        second_job3		= '',
        loadout3 = '',
        skin3		= ''
			}

			callback(data)
		elseif result[1] and not result[2] and not result[3] then
			local data = {
				identifier		= result[1]['identifier'],
				firstname1		= result[1]['firstname'],
				lastname1		= result[1]['lastname'],
				dateofbirth1	= result[1]['dateofbirth'],
				sex1			= result[1]['sex'],
				height1			= result[1]['height'],
        job1		= result[1]['job'],
        job_grade1		= result[1]['job_grade'],
        second_job1		= result[1]['second_job'],
        loadout1 = result[1]['loadout'],
        skin1		= result[1]['skin'],

				firstname2		= '',
				lastname2		= '',
				dateofbirth2	= '',
				sex2			= '',
				height2			= '',
        job2		= '',
        job_grade2		= '',
        second_job2		= '',
        loadout2 = '',
        skin2		= '',

				firstname3		= '',
				lastname3		= '',
				dateofbirth3	= '',
				sex3			= '',
				height3			= '',
        job3		= '',
        job_grade3		= '',
        second_job3		= '',
        loadout3 = '',
        skin3		= ''
			}

			callback(data)
		else
			local data = {
				identifier		= '',
				firstname1		= '',
				lastname1		= '',
				dateofbirth1	= '',
				sex1			= '',
				height1			= '',
        job1		= '',
        job_grade1		= '',
        second_job1		= '',
        loadout1 = '',
        skin1		= '',

				firstname2		= '',
				lastname2		= '',
				dateofbirth2	= '',
				sex2			= '',
				height2			= '',
        job2		= '',
        job_grade2		= '',
        second_job2		= '',
        loadout2 = '',
        skin2		= '',

				firstname3		= '',
				lastname3		= '',
				dateofbirth3	= '',
				sex3			= '',
				height3			= '',
        job3		= '',
        job_grade3		= '',
        second_job3		= '',
        loadout3 = '',
        skin3		= ''
			}

			callback(data)
		end
	end)
end

--===============================================
--==    Set The Player's Identification        ==
--===============================================
function setIdentity(identifier, data, callback)
    MySQL.Async.execute('UPDATE `users` SET `firstname` = @firstname, `lastname` = @lastname, `dateofbirth` = @dateofbirth, `sex` = @sex, `height` = @height, `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `phone_number` = @phone_number WHERE identifier = @identifier',
      {
        ['@identifier']   = identifier,
        ['@firstname']    = data.firstname,
        ['@lastname']     = data.lastname,
        ['@dateofbirth']  = data.dateofbirth,
        ['@sex']        = data.sex,
        ['@height']       = data.height,
        ['@job']     	= "unemployed",
        ['@job_grade']     	= "0",
        ['@second_job']     	= "unemployed",
        ['@loadout']     	= "[]",
        ['@phone_number']      = ""
      },
      function(done)
        if callback then
          callback(true)
        end
      end)

    MySQL.Async.execute(
      'INSERT INTO characters (identifier, firstname, lastname, dateofbirth, sex, height) VALUES (@identifier, @firstname, @lastname, @dateofbirth, @sex, @height)',
      {
        ['@identifier'] = identifier,
        ['@firstname']  = data.firstname,
        ['@lastname'] 	= data.lastname,
        ['@dateofbirth'] = data.dateofbirth,
        ['@sex']		= data.sex,
        ['@height'] 	= data.height
      })

    xPlayer = ESX.GetPlayerFromIdentifier(identifier)
    xPlayer.setJob("unemployed", 0)
    xPlayer.setSecondJob("unemployed", 0)
    TriggerEvent('esx_phone:refresh', steamid)
end

function updateLastChar(identifier, callback)

  getIdentity(identifier, function(data1)
    MySQL.Async.execute('UPDATE `characters` SET `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin WHERE identifier = @identifier and firstname = @firstname and lastname = @lastname and dateofbirth = @dateofbirth and sex = @sex',
      {
        ['@identifier']   = identifier,
        ['@firstname']    = data1.firstname,
        ['@lastname']     = data1.lastname,
        ['@dateofbirth']  = data1.dateofbirth,
        ['@sex']        = data1.sex,
        ['@height']       = data1.height,
        ['@job']     	= data1.job,
        ['@job_grade']     	= data1.job_grade,
        ['@second_job']     	= data1.second_job,
        ['@loadout']     	= data1.loadout,
        ['@skin']     	= data1.skin
      },
      function(done)
        if callback then
          callback(true)
        end
      end)
  end)

end



--===============================================
--==  Get The Player's Character            ==
--===============================================
function getIdentity(identifier, callback)
  if identifier ~= nil then
    MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
      {
        ['@identifier'] = identifier
      },
      function(result)
        local data = {
          identifier	= result[1]['identifier'],
          firstname	= result[1]['firstname'],
          lastname	= result[1]['lastname'],
          dateofbirth	= result[1]['dateofbirth'],
          sex			= result[1]['sex'],
          height		= result[1]['height'],
          job		= result[1]['job'],
          job_grade		= result[1]['job_grade'],
          second_job		= result[1]['second_job'],
          loadout = result[1]['loadout'],
          skin		= result[1]['skin']
        }

        callback(data)

      end)
  end
end

--===============================================
--==  Update The Player's Identification       ==
--===============================================
function updateIdentity(steamid, data, callback)
  getIdentity(steamid, function(data1)
    MySQL.Async.execute('UPDATE `characters` SET `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin WHERE identifier = @identifier and firstname = @firstname and lastname = @lastname and dateofbirth = @dateofbirth and sex = @sex',
      {
        ['@identifier']   = steamid,
        ['@firstname']    = data1.firstname,
        ['@lastname']     = data1.lastname,
        ['@dateofbirth']  = data1.dateofbirth,
        ['@sex']        = data1.sex,
        ['@height']       = data1.height,
        ['@job']     	= data1.job,
        ['@job_grade']     	= data1.job_grade,
        ['@second_job']     	= data1.second_job,
        ['@loadout']     	= data1.loadout,
        ['@skin']     	= data1.skin
      },
      function(done)

      end)
    MySQL.Async.execute('UPDATE `users` SET `firstname` = @firstname, `lastname` = @lastname, `dateofbirth` = @dateofbirth, `sex` = @sex, `height` = @height, `job` = @job, `job_grade` = @job_grade, `second_job` = @second_job, `loadout` = @loadout, `skin` = @skin WHERE identifier = @identifier',
      {
        ['@identifier']   = steamid,
        ['@firstname']    = data.firstname,
        ['@lastname']     = data.lastname,
        ['@dateofbirth']  = data.dateofbirth,
        ['@sex']        = data.sex,
        ['@height']       = data.height,
        ['@job']     	= data.job,
        ['@job_grade']     	= data.job_grade,
        ['@second_job']     	= data.second_job,
        ['@loadout']     	= data.loadout,
        ['@skin']     	= data.skin
      },
      function(done)
        if callback then
          callback(true)
        end
      end)
    xPlayer = ESX.GetPlayerFromIdentifier(steamid)
    xPlayer.setJob(data.job, data.job_grade)
    xPlayer.setSecondJob(data.second_job, 0)
  end)
end

--===============================================
--==  Delete The Player's Identification       ==
--===============================================
function deleteIdentity(identifier, data, callback)
  MySQL.Async.execute("DELETE FROM `characters` WHERE identifier = @identifier AND firstname = @firstname AND lastname = @lastname AND dateofbirth = @dateofbirth AND sex = @sex AND height = @height",
    {
      ['@identifier']   = identifier,
      ['@firstname']    = data.firstname,
      ['@lastname']     = data.lastname,
      ['@dateofbirth']  = data.dateofbirth,
      ['@sex']    		= data.sex,
      ['@height']     	= data.height,
      ['@job']     	= data.job,
      ['@job_grade']     	= data.job_grade,
      ['@second_job']     	= data.second_job,
      ['@loadout']     	= data.loadout,
      ['@skin']     	= data.skin
    },
	function(done)
		if callback then
			callback(true)
		end
	end)
end

--===============================================
--==       Server Event Set Identity           ==
--===============================================
RegisterServerEvent('esx_identity:setIdentity')
AddEventHandler('esx_identity:setIdentity', function(data ,skin)
	local identifier = GetPlayerIdentifiers(source)[1]
    setIdentity(GetPlayerIdentifiers(source)[1], data, skin, function(callback)
		if callback == true then
			print('Successfully Set Identity For ' .. identifier)
		else
			print('Failed To Set Identity.')
		end
	end)
end)


--===============================================
--==       Server Event update Last Char       ==
--===============================================

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
	getIdentity(source, function(data)
		if data.firstname == '' then
			TriggerClientEvent('esx_identity:showRegisterIdentity', source)
		else
			print('Successfully Loaded Identity For ' .. data.firstname .. ' ' .. data.lastname)
		end
	end)
end)

--===================================================================
--==                         MAIN COMMANDS                         ==
--===================================================================

--===============================================
--==      /charlist - Show Your Characters     ==
--===============================================
--[[
TriggerEvent('es:addGroupCommand', 'idhelp', "user", function(source, args, user)
	TriggerClientEvent('chatMessage', source, 'IDHelp', {255, 0, 0}, "ESX_IDENTITY Commands")
	TriggerClientEvent('chatMessage', source, 'IDHelp', {255, 0, 0}, "/register - Neuen Charakter erstellen")
	TriggerClientEvent('chatMessage', source, 'IDHelp', {255, 0, 0}, "/charlist - Liste deiner Charaktere")
	TriggerClientEvent('chatMessage', source, 'IDHelp', {255, 0, 0}, "/charselect 1,2,3 - Wechsel deinen Charakter")
	TriggerClientEvent('chatMessage', source, 'IDHelp', {255, 0, 0}, "/delchar 1,2,3 - Lösche einen Charakter")
end, function(source, args, user)
	TriggerClientEvent('chatMessage', source, "IDHelp", {255, 0, 0}, "Insufficienct permissions!")
end, {help = "Alle Charakter-Commands im Überblick"})
]]


--===============================================
--==      /register - Open Registration        ==
--===============================================
--TriggerEvent('es:addCommand', 'register', function(source, args, user)
--	getCharacters(source, function(data)
--		if data.firstname3 ~= '' then
--			TriggerClientEvent('chatMessage', source, 'REGISTER', {255, 0, 0}, "Du kannst nur 3 Charaktere haben.")
--		else
--			TriggerClientEvent('esx_identity:showRegisterIdentity', source, {})
--		end
--	end)
--end)

--===============================================
--==      /char - Show Active Character        ==
--===============================================
--TriggerEvent('es:addGroupCommand', 'char', "user", function(source, args, user)
--	getIdentity(source, function(data)
--		if data.firstname == '' then
--			TriggerClientEvent('chatMessage', source, 'CHAR', {255, 0, 0}, "Du hast keinen aktiven Charakter.")
--		else
--			TriggerClientEvent('chatMessage', source, 'CHAR', {255, 0, 0}, "Aktiver Charakter: " .. data.firstname .. " " .. data.lastname)
--		end
--	end)
--end, function(source, args, user)
--	TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficienct permissions!")
--end, {help = "Liste deinen aktuellen Charakter auf"})

--===============================================
--==      /charlist - Show Your Characters     ==
--===============================================
--TriggerEvent('es:addGroupCommand', 'charlist', "user", function(source, args, user)
--	getCharacters(source, function(data)
--		if data.firstname1 ~= '' then
--			TriggerClientEvent('chatMessage', source, 'CHARLIST', {255, 0, 0}, "Charakter 1: " .. data.firstname1 .. " " .. data.lastname1)
--			if data.firstname2 ~= '' then
--				TriggerClientEvent('chatMessage', source, 'CHARLIST', {255, 0, 0}, "Charakter 2: " .. data.firstname2 .. " " .. data.lastname2)
--				if data.firstname3 ~= '' then
--					TriggerClientEvent('chatMessage', source, 'CHARLIST', {255, 0, 0}, "Charakter 3: " .. data.firstname3 .. " " .. data.lastname3)
--				end
--			end
--		else
--			TriggerClientEvent('chatMessage', source, 'CHARLIST', {255, 0, 0}, "Du hast keine Charaktere. Bitte nutze den /register Command.")
--		end
--	end)
--end, function(source, args, user)
--	TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficienct permissions!")
--end, {help = "Liste deine Charaktere auf"})

--===============================================
--== /charselect 1,2,3 Select Your Active Char ==
--===============================================
--TriggerEvent('es:addCommand', 'charselect', function(source, args, user)
--	table.remove(args, 1)
--	local charNumber = tonumber(table.concat(args, " "))
--	getCharacters(source, function(data)
--		if charNumber == 1 then
--			local data = {
--				identifier 	= data.identifier,
--				firstname	= data.firstname1,
--				lastname	= data.lastname1,
--				dateofbirth	= data.dateofbirth1,
--				sex			= data.sex1,
--				height		= data.height1,
--       job		= data.job1,
--       job_grade		= data.job_grade1,
--       second_job		= data.second_job1,
--       loadout = data.loadout1,
--       skin		= data.skin1
--			}
--
--			if data.firstname ~= '' then
--				updateIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
--					if callback == true then
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Aktiver Charakter gesetzt auf " .. data.firstname .. " " .. data.lastname .. "!")
--					else
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Fehler beim wechseln!")
--					end
--				end)
--			else
--				TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Du hast kein Charakter auf Slot 1!")
--			end
--		elseif charNumber == 2 then
--			local data = {
--				identifier 	= data.identifier,
--				firstname	= data.firstname2,
--				lastname	= data.lastname2,
--				dateofbirth	= data.dateofbirth2,
--				sex			= data.sex2,
--				height		= data.height2,
--        job		= data.job2,
--        job_grade		= data.job_grade2,
--        second_job		= data.second_job2,
--        loadout = data.loadout2,
--        skin		= data.skin2
--			}
--
--			if data.firstname ~= '' then
--				updateIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
--
--					if callback == true then
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Aktiver Charakter gesetzt auf " .. data.firstname .. " " .. data.lastname .. "!")
--            TriggerClientEvent('esx_identity:updatePlayer')
--            ESX.GetPlayerFromIdentifier(source).setJob(data.job, data.job_grade)
--					else
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Fehler beim wechseln!")
--					end
--				end)
--			else
--				TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Du hast kein Charakter auf Slot 2!")
--			end
--		elseif charNumber == 3 then
--			local data = {
--				identifier 	= data.identifier,
--				firstname	= data.firstname3,
--				lastname	= data.lastname3,
--				dateofbirth	= data.dateofbirth3,
--				sex			= data.sex3,
--				height		= data.height3,
--        job		= data.job3,
--        job_grade		= data.job_grade3,
--        second_job		= data.second_job3,
--        loadout = data.loadout3,
--        skin		= data.skin3
--			}
--
--			if data.firstname ~= '' then
--				updateIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
--					if callback == true then
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Aktiver Charakter gesetzt auf " .. data.firstname .. " " .. data.lastname .. "!")
--					else
--						TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Fehler beim wechseln!")
--					end
--				end)
--			else
--				TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Du hast kein Charakter auf Slot 3!")
--			end
--		else
--			TriggerClientEvent('chatMessage', source, "CHARSELECT", {255, 0, 0}, "Fehler beim wechseln!")
--		end
--	end)
--end)
--[[

--===============================================
--== /charselect 1,2,3 Select Your Active Char ==
--===============================================
TriggerEvent('es:addCommand', 'delchar', function(source, args, user)
	table.remove(args, 1)
	local charNumber = tonumber(table.concat(args, " "))
	getCharacters(source, function(data)
		if charNumber == 1 then
			local data = {
				identifier 	= data.identifier,
				firstname	= data.firstname1,
				lastname	= data.lastname1,
				dateofbirth	= data.dateofbirth1,
				sex			= data.sex1,
				height		= data.height1,
        job		= data.job1,
        job_grade		= data.job_grade1,
        second_job		= data.second_job1,
        loadout = data.loadout1,
        skin		= data.skin1
			}
			if data.firstname ~= '' then
				deleteIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
					if callback == true then
					TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
					else
						TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Fehler beim Löschen!")
					end
				end)
			else
				TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast kein Charakter auf Slot 1!")
			end
		elseif charNumber == 2 then
			local data = {
				identifier 	= data.identifier,
				firstname	= data.firstname2,
				lastname	= data.lastname2,
				dateofbirth	= data.dateofbirth2,
				sex			= data.sex2,
				height		= data.height2,
        job		= data.job2,
        job_grade		= data.job_grade2,
        second_job		= data.second_job2,
        loadout = data.loadout2,
        skin		= data.skin2
			}
			if data.firstname ~= '' then
				deleteIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
					if callback == true then
						TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
					else
						TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Fehler beim Löschen!")
					end
				end)
			else
				TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast kein Charakter auf Slot 2!")
			end
		elseif charNumber == 3 then
			local data = {
				identifier 	= data.identifier,
				firstname	= data.firstname3,
				lastname	= data.lastname3,
				dateofbirth	= data.dateofbirth3,
				sex			= data.sex3,
				height		= data.height3,
        job		= data.job3,
        job_grade		= data.job_grade3,
        second_job		= data.second_job3,
        loadout = data.loadout3,
        skin		= data.skin3
			}
			if data.firstname ~= '' then
				deleteIdentity(GetPlayerIdentifiers(source)[1], data, function(callback)
					if callback == true then
						TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast " .. data.firstname .. " " .. data.lastname .. " gelöscht!")
					else
						TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Fehler beim Löschen!")
					end
				end)
			else
				TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Du hast kein Charakter auf Slot 3!")
			end
		else
			TriggerClientEvent('chatMessage', source, "DELCHAR", {255, 0, 0}, "Fehler beim Löschen!")
		end
	end)
end)
]]
