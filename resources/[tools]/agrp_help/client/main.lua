local Keys = {
  ["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57, 
  ["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177, 
  ["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
  ["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
  ["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
  ["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70, 
  ["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
  ["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
  ["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}

RegisterCommand('help', function(source, args, rawCommand)
    exports.pNotify:SetQueueMax("centerLeft", 4)
    exports.pNotify:SetQueueMax("centerRight", 4)

    if rawCommand == 'help more' or rawCommand == 'help m' then
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help important</b> - Wichtige Informationen zum Server.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help info</b> - Infos zu den gängigen Hotkeys und Befehlen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help vehicle</b> - Infos zu den Hotkeys im Auto.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job</b> - Infos zu den Jobs.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: lightblue;'>/help server</b> - Infos zu den Servern wie z.B. Ts3/Discord.",
	    	type = "success",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: orange;'>/help rules</b> - Infos zu den Regeln.",
	    	type = "error",
	    	timeout = 5000,
		    layout = "topCenter",
        	queue = "topCenter"
		})
    elseif rawCommand == 'help rules' or rawCommand == 'help r' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction.</span>",
	    	type = "error",
	    	timeout = 5000,
		    layout = "topCenter",
        	queue = "topCenter"
		})
    elseif rawCommand == 'help server' or rawCommand == 'help s' then
	    exports.pNotify:SendNotification({
	    	text = "Discord: https://discord.gg/7KgTpuk",
	    	type = "success",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
	    exports.pNotify:SendNotification({
	    	text = "Teamspeak: dnet.xyz",
	    	type = "success",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help important' or rawCommand == 'help i' then
	    exports.pNotify:SendNotification({
	    	text = "Ein Verstoß gegen die Regeln kann und wird direkte Konsequenzen mitsich führen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "NPC-Wagen können nicht geklaut werden, es sei denn man erschießt z.B. den Fahrer.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Discord: <b style='color: aqua;'>https://discord.gg/7KgTpuk</b>",
	    	type = "success",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "Teamspeak: <b style='color: aqua;'>dnet.xyz</b>",
	    	type = "success",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
    elseif rawCommand == 'help info' then
	    exports.pNotify:SendNotification({
	    	text = "Schreibe <b style='color: cyan;'>/ooc</b> vor deine Nachricht damit es jeder lesen kann.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[N]</b> um im Voice-Chat zu sprechen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[SHIFT] + [H]</b> um die Voice-Reichweite zu erhöhen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Schreibe <b style='color: cyan;'>/die</b> um dich selbst umzubringen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Schreibe <b style='color: cyan;'>/twt</b> vor eine Nachricht um zu twittern.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
    elseif rawCommand == 'help job' or rawCommand == 'help j' then
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job schlachter</b> - Infos zum Schlachter-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job fischer</b> - Infos zum Fischer-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job bergarbeiter</b> - Infos zum Bergarbeiter-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job holzfaeller</b> - Infos zum Holzfäller-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job refiner</b> - Infos zum Refiner-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job reporter</b> - Infos zum Reporter-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job schneider</b> - Infos zum Schneider-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job lspd</b> - Infos zum LSPD-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job mechaniker</b> - Infos zum Mechaniker-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job makler</b> - Infos zum Makler-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job taxi</b> - Infos zum Taxi-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job sanitaeter</b> - Infos zum Sanitäter-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job autohaendler</b> - Infos zum Autohändler-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help job banker</b> - Infos zum Banker-Job.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
    elseif rawCommand == 'help vehicle' or rawCommand == 'help v' then
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[M]</b> um das Auto zu managen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[Y]</b> um den Tempomat ein- oder auszuschalten.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[E]</b> zum hupen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[Backspace]</b> für den Warnblinker.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[-]</b> um nach links zu blinken.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[+]</b> um nach rechts zu blinken.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Fahre an eine Tankstelle und drücke <b style='color: yellow;'>[E]</b> um zu tanken.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
    elseif rawCommand == 'help job taxi' then
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[ENTF]</b> im Taxi um den Job zu starten.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "Wenn der Job gestartet ist, fahre herum um <b style='color: cyan;'>Passagiere</b> zu finden.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
	    exports.pNotify:SendNotification({
	    	text = "Sammel <b style='color: cyan;'>Passagiere</b> ein und bringe sie zum <b style='color: yellow'>Ziel</b> um <span style='color: lightgreen'>Geld</span> zu verdienen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
		})
    elseif rawCommand == 'help job schlachter' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job fischer' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job bergarbeiter' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job holzfaeller' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job refiner' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job reporter' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job schneider' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job lspd' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job mechaniker' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job makler' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job taxi' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job sanitaeter' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job autohaendler' or rawCommand == 'help job ah' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
    elseif rawCommand == 'help job banker' then
	    exports.pNotify:SendNotification({
	    	text = "<span style='color: orange;'>Under Construction. Forum: </span><span style='color: lightblue;'>another-grp.de</span>",
	    	type = "info",
	    	timeout = 5000,
		    layout = "bottomCenter",
        	queue = "bottomCenter"
		})
	else
	    exports.pNotify:SendNotification({
	    	text = "<b style='color: cyan;'>/help more</b> - Für weitere \"Help\"-Befehle.",
	    	type = "success",
	    	timeout = 5000,
		    layout = "centerLeft",
        	queue = "centerLeft"
	    })
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[F1]</b> um das Handy zu öffnen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
		})
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[F2]</b> um das Inventar zu öffnen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
	    })
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[F3]</b> um Animationen abzuspielen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
	    })
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[F7]</b> um deine Rechnungen zu sehen.",
	    	type = "info",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
	    })
	    exports.pNotify:SendNotification({
	    	text = "Drücke <b style='color: yellow;'>[ESC]</b> oder <b style='color: yellow;'>[Backspace]</b> um die Menüs wieder zu schließen.",
	    	type = "warning",
	    	timeout = 5000,
		    layout = "centerRight",
        	queue = "centerRight"
	    })
    end
end)



Citizen.CreateThread(function()
    while true 
    	do
		-- These natives has to be called every frame.
		SetVehicleDensityMultiplierThisFrame(0.5)
		SetPedDensityMultiplierThisFrame(0.5)
		SetRandomVehicleDensityMultiplierThisFrame(0.1)
		SetParkedVehicleDensityMultiplierThisFrame(0.1)
		SetScenarioPedDensityMultiplierThisFrame(0.1, 0.1)
		
		local playerPed = GetPlayerPed(-1)
		local pos = GetEntityCoords(playerPed) 
		RemoveVehiclesFromGeneratorsInArea(pos['x'] - 500.0, pos['y'] - 500.0, pos['z'] - 500.0, pos['x'] + 500.0, pos['y'] + 500.0, pos['z'] + 500.0);
		
		
		-- These natives do not have to be called everyframe.
		SetGarbageTrucks(0)
		SetRandomBoats(0)
    	
		Citizen.Wait(1)
	end

end)

local PlayerData = {}

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)



RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)

  PlayerData = xPlayer

end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)

  PlayerData.job = job

end)