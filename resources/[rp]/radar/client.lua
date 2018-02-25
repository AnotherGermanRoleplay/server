--DrawMarker(1,item.x, item.y, item.z-1.0001, 0, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5, 178, 236, 93, 155, 0, 0, 2, 0, 0, 0, 0)
-- local kmh = GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false)) * 3.6

-------- GUI options --------

-------- Script --------

radarActivated = false
limitSpeed = 130
inSubMenu = false

local xp = 0
local xm = 0
local yp = 0
local ym = 0

multiplier = 1

local lastNumberPlate = ""
local blackListedModelsArray = {}
local blackListedPlatesArray = {}

onlySpeed = false
onlyShowModel = false
onlyShowPlate = false

menu = false

menuIndex = 0

GUIoptions = {
    x = 0.1,
    y = 0.2,
    width = 0.2,
    height = 0.04,
    scale = 0.4,
    font = 0,
    menu_title = "radar",
    menu_subtitle = "Categories",
    color_r = 30,
    color_g = 144,
    color_b = 255,
}

Citizen.CreateThread(function()

	while true do
		Citizen.Wait(0)
		OMenu.renderGUI(GUIoptions)
		renderMenuHUD()
		tick()
	end

end)

Citizen.CreateThread(function()

	while true do
		Citizen.Wait(0)

		if(radarActivated == true) then

			if(IsPedInAnyPoliceVehicle(GetPlayerPed(-1))) then

			 	local playerPos = GetEntityCoords(GetPlayerPed(-1))
		--	DrawMarker(1,plyCoords["x"]+xm-xp, plyCoords["y"]+ym-yp, plyCoords["z"]-1.0001, 0, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5, 178, 236, 93, 155, 0, 0, 2, 0, 0, 0, 0)
				heading = GetEntityHeading(GetVehiclePedIsIn(GetPlayerPed(-1)))
				local VehHeading = math.rad(heading)
    			local a = math.cos(VehHeading)
   				local b = math.sin(VehHeading)


				local x = (playerPos.x+xm)-xp-b
				local y = (playerPos.y+ym)-yp+a
				local _, gH = GetGroundZFor_3dCoord(x,y,playerPos.z+1000)
				local z = gH

				DrawMarker(1,x,y,z,0,0,0,0,0,0,2.001,2.0001,0.5001,0,155,255,200,0,0,0,0)


				local veh = GetClosestVehicle(x, y, z+1, 3.001, 0, 70)
				local kmh = 0

					if(speed == "MPH") then
						kmh = GetEntitySpeed(veh)* 2.236936 -- Thanks to CaptainTenneal (fivem.net : https://forum.fivem.net/u/captaintenneal/summary)
					else
						kmh = GetEntitySpeed(veh) * 3.6
					end

				if(veh ~=nil) then
					if(GetVehicleNumberPlateText(veh) ~=nil) then
						if(GetVehicleNumberPlateText(veh)==lastNumberPlate) then
						else
							local str = ""
							local fastSpeed = false

							if(kmh > limitSpeed) then
								str = str.."~g~"..text[lang].speed.." : ~r~"..round(kmh,0).."\n"
								PlaySound(-1,  "CANCEL", "HUD_MINI_GAME_SOUNDSET", 0,0,1)
								fastSpeed = true
							else
								str = str.."~g~"..text[lang].speed.." : ~b~"..round(kmh,0).."\n"
							end

							local blackListedPlate = false
							local blackListedModel = false

							for _,v in pairs(blackListedPlatesArray) do
								if(GetVehicleNumberPlateText(veh) == v) then
									str = str.."~g~"..text[lang].plate.." : ~r~"..GetVehicleNumberPlateText(veh).."\n"
									blackListedPlate = true
								end
							end

							if(blackListedPlate == false) then
								str = str.."~g~"..text[lang].plate.." : ~b~"..GetVehicleNumberPlateText(veh).."\n"
							end


							for _,v in pairs(blackListedModelsArray) do
								if(GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh))) == v) then
									str = str.."~g~"..text[lang].model.." : ~r~"..GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh)))
									blackListedModel = true
								end
							end

							if(blackListedModel == false) then
								str = str.."~g~"..text[lang].model.." : ~b~"..GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh)))
							end

							if((onlyShowPlate == true and blackListedPlate == true) or (onlyShowModel == true and blackListedModel == true) or (fastSpeed == true and onlySpeed == true) or (onlyShowModel == false and onlyShowPlate == false and onlySpeed == false)) then
								SendNotification(str)
								lastNumberPlate = GetVehicleNumberPlateText(veh)
							end
						end
					else
						t, d = GetClosestPlayer(x,y,z)
						if(d ~= -1 and d < 4) then
							veh = GetVehiclePedIsUsing(GetPlayerPed(t))
							if(speed == "MPH") then
								kmh = GetEntitySpeed(veh)* 2.236936 -- Thanks to CaptainTenneal (fivem.net : https://forum.fivem.net/u/captaintenneal/summary)
							else
								kmh = GetEntitySpeed(veh) * 3.6
							end

							if(GetVehicleNumberPlateText(veh)==lastNumberPlate) then
							else

								local str = ""
								local fastSpeed = false

								if(kmh > limitSpeed) then
									str = str.."~g~"..text[lang].speed.." : ~r~"..round(kmh,0).."\n"
									PlaySound(-1,  "CANCEL", "HUD_MINI_GAME_SOUNDSET", 0,0,1)
									fastSpeed = true
								else
									str = str.."~g~"..text[lang].speed.." : ~b~"..round(kmh,0).."\n"
								end

								local blackListedPlate = false
								local blackListedModel = false

								for _,v in pairs(blackListedPlatesArray) do
									if(GetVehicleNumberPlateText(veh) == v) then
										str = str.."~g~"..text[lang].plate.." : ~r~"..GetVehicleNumberPlateText(veh).."\n"
										blackListedPlate = true
									end
								end

								if(blackListedPlate == false) then
									str = str.."~g~"..text[lang].plate.." : ~b~"..GetVehicleNumberPlateText(veh).."\n"
								end


								for _,v in pairs(blackListedModelsArray) do
									if(GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh))) == v) then
										str = str.."~g~"..text[lang].model.." : ~r~"..GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh)))
										blackListedModel = true
									end
								end

								if(blackListedModel == false) then
									str = str.."~g~"..text[lang].model.." : ~b~"..GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(veh)))
								end

								if((onlyShowPlate == true and blackListedPlate == true) or (onlyShowModel == true and blackListedModel == true) or (fastSpeed == true and onlySpeed == true) or (onlyShowModel == false and onlyShowPlate == false and onlySpeed == false)) then
									SendNotification(str)
									lastNumberPlate = GetVehicleNumberPlateText(veh)
								end
							end							
						end
					end
				end
			else
				radarActivated = false
			end
		end
	end

end)



-- 300 +y
-- 200 -> +x
-- 100 -y
-- 0 <- -x

function tick()
	DrawMarker(2, 1717,6389, 36, 0.0, 0.0, 0.0, 180.0, 0.0, 0.0, 0.75, 0.75, 0.75, 255, 0, 0, 100, false, true, 2, false, false, false, false)
    DrawMarker(2, 1718,6389, 36, 0.0, 0.0, 0.0, 180.0, 0.0, 0.0, 0.75, 0.75, 0.75, 0, 255, 0, 100, false, true, 2, false, false, false, false)
    DrawMarker(2, 1719,6389, 36, 0.0, 0.0, 0.0, 180.0, 0.0, 0.0, 0.75, 0.75, 0.75, 0, 255, 0, 100, false, true, 2, false, false, false, false)
	if(IsPedInAnyPoliceVehicle(GetPlayerPed(-1))) then
		if(GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(-1), 0)) ~= GetHashKey("POLMAV")) then

			if(IsControlPressed(1,36) and IsControlPressed(1,311)) then ----- LCTRL + K !
				Wait(100)
				menu = not menu
			end

			if(radarActivated) then

				if(IsControlPressed(1, 61)) then
					local heading = GetEntityHeading(GetVehiclePedIsIn(GetPlayerPed(-1)))

					if(heading < 300 and heading > 200) then

						if(ym > 0) then
							ym = ym -(0.01*multiplier)
						else
							if(yp<=maxDistance) then
								yp = yp + (0.01*multiplier)
							end
						end

					elseif(heading < 200 and heading > 100) then

						if(xp>0) then
							xp = xp-(0.01*multiplier)
						else
							if(xm<=maxDistance) then
								xm = xm+(0.01*multiplier)
							end
						end

					elseif(heading < 100 and heading >= 50) then

						if(yp > 0) then
							yp = yp-(0.01*multiplier)
						else
							if(ym<=maxDistance) then
								ym = ym+(0.01*multiplier)
							end
						end

					elseif(heading < 50) then

						if(xm>0) then
							xm = xm-(0.01*multiplier)
						else
							if(xp<=maxDistance) then
								xp = xp+(0.01*multiplier)
							end
						end

					end
				end



				if(IsControlPressed(1, 60)) then
					local heading = GetEntityHeading(GetVehiclePedIsIn(GetPlayerPed(-1)))



					if(heading < 300 and heading > 200) then

						if(yp > 0) then
							yp = yp-(0.01*multiplier)
						else
							if(ym<=maxDistance) then
								ym = ym+(0.01*multiplier)
							end
						end

					elseif(heading < 200 and heading > 100) then
	
						if(xm>0) then
							xm = xm-(0.01*multiplier)
						else
							if(xp<=maxDistance) then
								xp = xp+(0.01*multiplier)
							end
						end				

					elseif(heading < 100 and heading >= 50) then

						if(ym > 0) then
							ym = ym -(0.01*multiplier)
						else
							if(yp<=maxDistance) then
								yp = yp + (0.01*multiplier)
							end
						end

					elseif(heading < 50) then

						if(xp>0) then
							xp = xp-(0.01*multiplier)
						else
							if(xm<=maxDistance) then
								xm = xm+(0.01*multiplier)
							end
						end							

					end

				end

				if(IsControlPressed(1, 108)) then
					local heading = GetEntityHeading(GetVehiclePedIsIn(GetPlayerPed(-1)))



					if(heading < 300 and heading > 200) then

						if(xp>0) then
							xp = xp-(0.01*multiplier)
						else
							if(xm<=maxDistance) then
								xm = xm+(0.01*multiplier)
							end
						end

					elseif(heading < 200 and heading > 100) then

						if(ym > 0) then
							ym = ym -(0.01*multiplier)
						else
							if(yp<=maxDistance) then
								yp = yp + (0.01*multiplier)
							end
						end

					elseif(heading < 100 and heading >= 50) then

						if(xm>0) then
							xm = xm-(0.01*multiplier)
						else
							if(xp<=maxDistance) then
								xp = xp+(0.01*multiplier)
							end
						end

					elseif(heading < 50) then

						if(yp > 0) then
							yp = yp-(0.01*multiplier)
						else
							if(ym<=maxDistance) then
								ym = ym+(0.01*multiplier)
							end
						end

					end
				end

				if(IsControlPressed(1, 107)) then
					local heading = GetEntityHeading(GetVehiclePedIsIn(GetPlayerPed(-1)))



					if(heading < 300 and heading > 200) then
						
						if(xm>0) then
							xm = xm-(0.01*multiplier)
						else
							if(xp<=maxDistance) then
								xp = xp+(0.01*multiplier)
							end
						end

					elseif(heading < 200 and heading > 100) then

						if(yp > 0) then
							yp = yp-(0.01*multiplier)
						else
							if(ym<=maxDistance) then
								ym = ym+(0.01*multiplier)
							end
						end

					elseif(heading < 100 and heading >= 50) then

						if(xp>0) then
							xp = xp-(0.01*multiplier)
						else
							if(xm<=maxDistance) then
								xm = xm+(0.01*multiplier)
							end
						end

					elseif(heading < 50) then

						if(ym > 0) then
							ym = ym -(0.01*multiplier)
						else
							if(yp<=maxDistance) then
								yp = yp + (0.01*multiplier)
							end
						end

					end

				end
			end
		end
	else
		if(menu) then
			menu = false
		end
	end
end


function setPower()
	radarActivated = not radarActivated
	inSubMenu = false
	OMenu.hidden = true
end


function onlyShowModels()
	onlyShowModel = not onlyShowModel
	inSubMenu = false
end

function onlyShowPlates()
	onlyShowPlate = not onlyShowPlate
	inSubMenu = false
end

function onlyShowSpeed()
	onlySpeed = not onlySpeed
	OMenu.hidden = true
end


function SendNotification(message)
	SetNotificationTextEntry("STRING")
	AddTextComponentString(message)
	DrawNotification(false, false)
end



function setMultiplier(m)
	multiplier = m
end




function round(num, dec)
  local mult = 10^(dec or 0)
  return math.floor(num * mult + 0.5) / mult
end

function addModelToArray(model)
	table.insert(blackListedModelsArray,model)
end


function addPlateToArray(model)
	table.insert(blackListedPlatesArray,model)
end

function GetPlayers()
    local players = {}

    for i = 0, 31 do
        if NetworkIsPlayerActive(i) then
            table.insert(players, i)
        end
    end

    return players
end

function GetClosestPlayer(x,y,z)
	local players = GetPlayers()
	local closestDistance = -1
	local closestPlayer = -1
	
	for index,value in ipairs(players) do
		local target = GetPlayerPed(value)
		if(target ~= ply) then
			local targetCoords = GetEntityCoords(GetPlayerPed(value), 0)
			local distance = GetDistanceBetweenCoords(targetCoords["x"], targetCoords["y"], targetCoords["z"], x, y, z, true)
			if(closestDistance == -1 or closestDistance > distance) then
				closestPlayer = value
				closestDistance = distance
			end
		end
	end
	
	return closestPlayer, closestDistance
end













Citizen.CreateThread(function()
	multiplier = 1
	while true do
		Citizen.Wait(0)
		if(menu) then
			TriggerEvent("radarGUI:Title", "Radar")

			TriggerEvent("radarGUI:Bool", text[lang].menuOnOff, radarActivated, function(cb)
				radarActivated = cb
			end)

			TriggerEvent("radarGUI:Int", text[lang].menuDeplacementMultiplier, multiplier, 1, 10, function(cb)
				multiplier = cb
			end)


			TriggerEvent("radarGUI:Int5", text[lang].menuSetLimitation, limitSpeed, 5, 300, function(cb)
				limitSpeed = cb
			end)


			TriggerEvent("radarGUI:Option", text[lang].menuSetModelPriority, function(cb)
				if(cb) then
					addModel()
					menu = false
				else
					
				end
			end)


			TriggerEvent("radarGUI:Option", text[lang].menuSetPlatePriority, function(cb)
				if(cb) then
					addPlate()
					menu = false
				else
					
				end
			end)


			TriggerEvent("radarGUI:Bool", text[lang].menuSetOnlyShowSpeed, onlySpeed, function(cb)
				onlySpeed = cb
			end)


			TriggerEvent("radarGUI:Bool", text[lang].menuSetOnlyShowModel, onlyShowModel, function(cb)
				onlyShowModel = cb
			end)


			TriggerEvent("radarGUI:Bool", text[lang].menuSetOnlyShowPlate, onlyShowPlate, function(cb)
				onlyShowPlate = cb
			end)



			TriggerEvent("radarGUI:Option", text[lang].menuReset, function(cb)
				if(cb) then
					xp = 0
					xm = 0
					yp = 0
					ym = 0
				else
					
				end
			end)

			TriggerEvent("radarGUI:Update")

		end
	end

end)