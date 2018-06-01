-----------------------------------------------------------------------------------------------
--SCRIPT CREADO PARA EL SERVIDOR DE FIVEM DE PLATA O PLOMO COMUNIDAD GAMER.
--SCRIPT CREADO TOTALMENTE POR THEMAYKELLLL1 [ MIGUEL ANGEL LOPEZ REYES ].
--PLATA O PLOMO COMUNIDAD GAMER ACEPTA NO VENDER / REGALAR / PASAR ESTOS SCRIPTS A OTRAS PERSONAS O COMUNIDADES.
-----------------------------------------------------------------------------------------------


-------------------------------------------
------------------VARIABLES----------------
-------------------------------------------

local pizzeria = { x = -1285.73, y = -1387.15, z = 3.44}
local spawnfaggio = { x = -1278.39, y = -1386.84, z = 3.38 }

local multiplicador_De_dinero = 0.09
local modelName = 'vwcaddy'

local propina = 0
local posibilidad = 0

local casas = {
	[1] = {name = "Vinewood Hills"		,x = -1220.50, y = 666.95 , z = 143.10},
	[2] = {name = "Vinewood Hills"		,x = -1338.97, y = 606.31 , z = 133.37},
	[3] = {name = "Rockford Hills"		,x = -1051.85, y = 431.66 , z = 76.06 },
	[4] = {name = "Rockford Hills"		,x = -904.04 , y = 191.49 , z = 68.44 },
	[5] = {name = "Rockford Hills"		,x = -21.58  , y = -23.70 , z = 72.24 },
	[6] = {name = "Hawick"        		,x = -904.04 , y = 191.49 , z = 68.44 },
	[7] = {name = "Alta"          		,x = 225.39  , y = -283.63, z = 28.25 },
	[8] = {name = "Pillbox Hills" 		,x = 5.62    , y = -707.72, z = 44.97 },
	[9] = {name = "Mission Row"   		,x = 284.50  , y = -938.50 , z = 28.35},
	[10] ={name = "Rancho"        		,x = 411.59  , y = -1487.54, z = 29.14},
	[11] ={name = "Davis"         		,x = 85.19   , y = -1958.18, z = 20.12},
	[12] ={name = "Chamberlain Hills"	,x = -213.00, y =-1617.35 , z =37.35},
	[13] ={name = "La Puerta"      		,x = -1015.65, y =-1515.05 ,z = 5.51}
}

local isInJobPizz = false
local sigcasa = 0
local plateab = "POPJOBS"
local isToHouse = false
local isToPizzaria = false
local paga = 0

local px = 0
local py = 0
local pz = 0

local blips = {
	{title="Pizzeria", colour=66, id=267, x = -1285.73, y = -1387.15, z = 3.44},
}

-------------------------------------------
--------------------BLIPS------------------
-------------------------------------------

Citizen.CreateThread(function()

    for _, info in pairs(blips) do
      info.blip = AddBlipForCoord(info.x, info.y, info.z)
      SetBlipSprite(info.blip, info.id)
      SetBlipDisplay(info.blip, 4)
      SetBlipScale(info.blip, 0.9)
      SetBlipColour(info.blip, info.colour)
      SetBlipAsShortRange(info.blip, true)
	  BeginTextCommandSetBlipName("STRING")
      AddTextComponentString(info.title)
      EndTextCommandSetBlipName(info.blip)
    end
end)

function Iracasa(casas,sigcasa)
	blip_casa = AddBlipForCoord(casas[sigcasa].x,casas[sigcasa].y, casas[sigcasa].z)
	SetBlipSprite(blip_casa, 1)
	SetNewWaypoint(casas[sigcasa].x,casas[sigcasa].y)
end

-------------------------------------------
------------------CITIZENS-----------------
-------------------------------------------

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		if isInJobPizz == false then
			DrawMarker(1,pizzeria.x,pizzeria.y,pizzeria.z, 0, 0, 0, 0, 0, 0, 1.5001, 1.5001, 0.6001,255,255,51, 200, 0, 0, 0, 0)
			if GetDistanceBetweenCoords(pizzeria.x, pizzeria.y, pizzeria.z, GetEntityCoords(GetPlayerPed(-1),true)) < 1.5 then
				drawTxt("Druecke <E> um Pizza auszuliefern",2, 1, 0.45, 0.03, 0.80,255,255,51,255)
				if IsControlJustPressed(1,38) then
					isInJobPizz = true
					isToHouse = true
					sigcasa = math.random(1, 13)
					-- [INFO] TriggerEvent('chatMessage', 'SYSTEM', {255, 0, 0}, sigcasa)
					px = casas[sigcasa].x
					py = casas[sigcasa].y
					pz = casas[sigcasa].z
					distancia = round(GetDistanceBetweenCoords(pizzeria.x, pizzeria.y, pizzeria.z, px,py,pz))
					paga = distancia * multiplicador_De_dinero
					-- [INFO] TriggerEvent('chatMessage', 'SYSTEM', {255, 0, 0}, distancia)
					spawn_faggio()
					Iracasa(casas,sigcasa)
				end
			end
		end
		if isToHouse == true then
			destinol = casas[sigcasa].name
			drawTxt("Bring die Lieferung nach "..destinol,4, 1, 0.45, 0.92, 0.70,255,255,255,255)
			DrawMarker(1,casas[sigcasa].x,casas[sigcasa].y,casas[sigcasa].z, 0, 0, 0, 0, 0, 0, 1.5001, 1.5001, 0.6001,255,255,51, 200, 0, 0, 0, 0)
			if GetDistanceBetweenCoords(px,py,pz, GetEntityCoords(GetPlayerPed(-1),true)) < 3 then
				drawTxt("Druecke <E> um die Pizza auszuliefern",2, 1, 0.45, 0.03, 0.80,255,255,51,255)
				if IsControlJustPressed(1,38) then
					posibilidad = math.random(1, 100)
					if (posibilidad >= 70) and (posibilidad <= 90) then
						propina = math.random(1, 50)
						TriggerEvent('chatMessage', 'KUNDE', {255, 0, 0},"Trinkgeld : "..propina.."€")
						TriggerServerEvent("pop_pizzero:propina", propina)
					end
					isToHouse = false
					isToPizzaria = true
					RemoveBlip(blip_casa)
					SetNewWaypoint(pizzeria.x,pizzeria.y)
				end
			end
		end
		if isToPizzaria == true then
			drawTxt("Fahre zurueck zur Pizzeria",4, 1, 0.45, 0.92, 0.70,255,255,255,255)
			DrawMarker(1,pizzeria.x,pizzeria.y,pizzeria.z, 0, 0, 0, 0, 0, 0, 1.5001, 1.5001, 0.6001,255,255,51, 200, 0, 0, 0, 0)
				if GetDistanceBetweenCoords(pizzeria.x,pizzeria.y,pizzeria.z, GetEntityCoords(GetPlayerPed(-1),true)) < 3 then
					drawTxt("Druecke <E> um ausgezahlt zu werden",2, 1, 0.45, 0.03, 0.80,255,255,51,255)
					-- if IsVehicleModel(GetVehiclePedIsIn(GetPlayerPed(-1), true), GetHashKey("vwcaddy"))  then
					if IsVehicleModel(GetVehiclePedIsIn(GetPlayerPed(-1), true), GetHashKey(modelName))  then
						if IsControlJustPressed(1,38) then
							if IsInVehicle() then
								TriggerEvent('chatMessage', 'PIZZERIA', {255, 0, 0},"Danke für die Aushilfe, hier deine Bezahlung: "..paga.."€")
								TriggerServerEvent("pop_pizzero:propina", paga)
								isToHouse = false
								isToPizzaria = false
								isInJobPizz = false
								paga = 0
								px = 0
								py = 0
								pz = 0
								local vehicleu = GetVehiclePedIsIn(GetPlayerPed(-1), false)
								SetEntityAsMissionEntity( vehicleu, true, true )
			               		deleteCar( vehicleu )
							else
								TriggerEvent('chatMessage', 'PIZZERIA', {255, 0, 0},"Du bekommst nix, solange du mir mein Moped nicht wiederbringst.")
							end
						end
					else
						TriggerEvent('chatMessage', 'PIZZERIA', {255, 0, 0},"Du bekommst nix, solange du mir mein Moped nicht wiederbringst.")
					end
				end
		end
		if IsEntityDead(GetPlayerPed(-1)) then
			 isInJobPizz = false
			 sigcasa = 0
			 isToHouse = false
			 isToPizzaria = false
			 paga = 0
			 px = 0
			 py = 0
			 pz = 0
		end
	end
end)

-------------------------------------------
----------------FUNCIONES------------------
-------------------------------------------

function spawn_faggio()
	Citizen.Wait(0)

	local myPed = GetPlayerPed(-1)
	local player = PlayerId()
	-- local vehicle = GetHashKey('vwcaddy')
	local vehicle = GetHashKey(modelName)

	RequestModel(vehicle)

	while not HasModelLoaded(vehicle) do
		Wait(1)
	end

	local spawned_car = CreateVehicle(vehicle, spawnfaggio.x,spawnfaggio.y,spawnfaggio.z, 431.436, - 996.786, 25.1887, true, false)

	local plate = "PIZZA"..math.random(100, 900)
    SetVehicleNumberPlateText(spawned_car, plate)
	SetVehicleOnGroundProperly(spawned_car)
	SetVehicleLivery(spawned_car, 2)
	SetPedIntoVehicle(myPed, spawned_car, - 1)
	SetModelAsNoLongerNeeded(vehicle)
	Citizen.InvokeNative(0xB736A491E64A32CF, Citizen.PointerValueIntInitialized(spawned_car))
end

function round(num, numDecimalPlaces)
	local mult = 5^(numDecimalPlaces or 0)
	return math.floor(num * mult + 0.5) / mult
end

function deleteCar( entity )
    Citizen.InvokeNative( 0xEA386986E786A54F, Citizen.PointerValueIntInitialized( entity ) )
end

function IsInVehicle()
  local ply = GetPlayerPed(-1)
  if IsPedSittingInAnyVehicle(ply) then
    return true
  else
    return false
  end
end

-------------------------------------------
----------FUNCIONES ADICIONALES------------
-------------------------------------------

function drawTxt(text,font,centre,x,y,scale,r,g,b,a)
    SetTextFont(font)
    SetTextProportional(0)
    SetTextScale(scale, scale)
    SetTextColour(r, g, b, a)
    SetTextDropShadow(0, 0, 0, 0,255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextCentre(centre)
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x , y)
end