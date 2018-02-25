

local FirstJoinProper = false
local near = false
local closed = false
local insideGarage = false
local currentGarage = nil
local insidePosition = {}
local outsidePosition = {}
local oldrot = nil
local isPreviewing = false
local oldmod = -1
local oldmodtype = -1
local previewmod = -1
local oldmodaction = false
local hasJustBeenInGarage = false
local locations = {
	[1] = { locked = false, range = 2, outside = { x = -362.796, y = -132.400, z = 38.252, heading = 71.187}, inside = {x = -337.386,y = -136.924,z = 38.573, heading = 269.455}},
	[2] = { locked = false, range = 3, outside = { x = -1140.191, y = -1985.478, z = 12.729, heading = 315.290}, inside = {x = -1155.536,y = -2007.183,z = 12.744, heading = 155.413}},
	[3] = { locked = false, range = 3, outside = { x = 716.464, y = -1088.869, z = 21.929, heading = 88.768}, inside = {x = 731.816,y = -1088.822,z = 21.733, heading = 269.318}},
	[4] = { locked = false, range = 3, outside = { x = 1174.811, y = 2649.954, z = 37.371, heading = 0.450}, inside = {x = 1175.04,y = 2640.216,z = 37.321, heading = 182.402}},
	[5] = { locked = false, range = 1, outside = { x = 111.366, y = 6625.840, z = 31.787, heading = 269}, inside = {x = 111.366, y = 6625.840, z = 31.787, heading = 71}},
	[6] = { locked = false, range = 3, outside = { x = 1371.013, y = 3595.905, z = 34.895, heading = 155}, inside = {x = 1371.013, y = 3595.905, z = 34.895, heading = 311}},
	[7] = { locked = false, range = 3, outside = { x = -81.235, y = 6421.702, z = 31.490, heading = 269.768}, inside = {x = -81.235, y = 6421.702, z = 31.490, heading = 88}},
	[8] = { locked = false, range = 3, outside = { x = -199.087, y = -1383.172, z = 31.258, heading = 190}, inside = {x = -199.087, y = -1383.172, z = 31.258, heading = 11}},
	[9] = { locked = false, range = 3, outside = { x = -211.614, y = -1324.847, z = 30.890, heading = 270.187}, inside = {x = -211.614, y = -1324.847, z = 30.890, heading = 69.455}},
	[10] = { locked = false, range = 3, outside = { x = -1465.312, y = -923.037, z = 10.036, heading = 155.290}, inside = {x = -1465.312, y = -923.037, z = 10.036, heading = 315.413}},
	[11] = { locked = false, range = 1, outside = { x = 104.982, y = 6621.961, z = 31.787, heading = 45.290}, inside = {x = 104.982, y = 6621.961, z = 31.787, heading = 45.290}},
}

function AddBlips()
	for i, pos in ipairs(locations) do
		local blip = AddBlipForCoord(pos.inside.x,pos.inside.y,pos.inside.z)
		SetBlipSprite(blip, 72)
		SetBlipScale(blip, 0.9)
		SetBlipAsShortRange(blip,true)
	end
end

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


Citizen.CreateThread(function()
	TriggerServerEvent("fx_customs:RequestPriceList") -- request price list
	while true do
		Citizen.Wait(0)
		if NetworkIsSessionStarted() then
			for i, pos in pairs(locations) do
				local player = GetPlayerPed(-1)
				local playerLoc = GetEntityCoords(player)
				local veh = GetVehiclePedIsUsing(player)
				local distance = GetDistanceBetweenCoords(pos.outside.x, pos.outside.y, pos.outside.z, playerLoc )
				
				if distance < pos.range and not near then
					if DoesEntityExist(veh) then
						if not pos.locked and not hasJustBeenInGarage then
								TriggerServerEvent("fx_customs:RequestPriceList")
								currentGarage = i
								insidePosition = pos.inside
								outsidePosition = pos.outside
								SetVehicleInGarage()
						elseif pos.locked and not currentGarage then
							drawTxt("~r~Locked, please wait",4,1,0.5,0.8,1.0,255,255,255,255)
						end
					end
				end
			end	
		end
	end
end)

RegisterNetEvent('LockGarage')
AddEventHandler('LockGarage', function(tbl)
	for i, garage in ipairs(tbl) do
		locations[i].locked = garage.locked
	end
end)

RegisterNetEvent('fx_customs:RequestPriceList')
AddEventHandler('fx_customs:RequestPriceList', function(modprices)
	modPrices = modprices
end)


function SetVehicleInGarage()	
	local pos = insidePosition
	local player = GetPlayerPed(-1)
	local veh = GetVehiclePedIsIn(player,false)
	local model = GetEntityModel(veh)
	oldrot = GetEntityHeading(veh)
	
	if DoesEntityExist(veh) then
		vehicleInGarage = true
		hasJustBeenInGarage = true
		TriggerServerEvent("fx_customs:SetVehicle", veh_data )	 
		SetEntityCoordsNoOffset(veh,pos.x,pos.y,pos.z)
		SetEntityHeading(veh,pos.heading)
		SetVehicleOnGroundProperly(veh)
		FreezeEntityPosition(veh, true)
		SetVehicleDoorsLocked(veh,4)
		SetPlayerInvincible(GetPlayerIndex(),true)
		SetEntityInvincible(veh,true)
		SetEntityCollision(veh,false,false)	
		TriggerServerEvent('fx_customs:LockGarage',true,currentGarage, GetPlayerServerId(GetPlayerIndex()))	
		SetVehicleModKit(veh,0)
		WarMenu.OpenMenu('LSC')
	end
end


function SetVehicleOutsideGarage()	
	local pos = outsidePosition
	local ped = GetPlayerPed(-1)
	local veh = GetVehiclePedIsUsing(ped)
	vehicleInGarage = false
	
	SetEntityCoordsNoOffset(veh,pos.x,pos.y,pos.z)
	SetEntityHeading(veh,pos.heading)
	SetVehicleOnGroundProperly(veh)
	SetVehicleHasBeenOwnedByPlayer(veh,true)
	local id = NetworkGetNetworkIdFromEntity(veh)
	SetNetworkIdCanMigrate(id, true)
	Citizen.InvokeNative(0x629BFA74418D6239,Citizen.PointerValueIntInitialized(veh))
	SetPlayerInvincible(GetPlayerIndex(),false)
	SetEntityInvincible(veh,false)
	SetEntityCollision(veh,true,true)
	FreezeEntityPosition(veh, false)
	SetVehicleDoorsLocked(veh,0)
	SetEntityHeading(veh,oldrot)
	TriggerServerEvent('fx_customs:LockGarage',false, currentGarage)	
	currentGarage = nil
	oldrot = nil
    SetTimeout(5000, function()
        hasJustBeenInGarage = false -- wait 5 seconds and unlock the garage for the new guy
    end)
end




local vehicleMods = {
	{name = "Spoilers", id = 0},
	{name = "Front Bumper", id = 1},
	{name = "Rear Bumper", id = 2},
	{name = "Side Skirt", id = 3},
	{name = "Exhaust", id = 4},
	{name = "Frame", id = 5},
	{name = "Grille", id = 6},
	{name = "Hood", id = 7},
	{name = "Fender", id = 8},
	{name = "Right Fender", id = 9},
	{name = "Roof", id = 10},
	{name = "Vanity Plates", id = 25},
	{name = "Trim", id = 27},
	{name = "Ornaments", id = 28},
	{name = "Dashboard", id = 29},
	{name = "Dial", id = 30},
	{name = "Door Speaker", id = 31},
	{name = "Seats", id = 32},
	{name = "Steering Wheel", id = 33},
	{name = "Shifter Leavers", id = 34},
	{name = "Plaques", id = 35},
	{name = "Speakers", id = 36},
	{name = "Trunk", id = 37},
	{name = "Hydraulics", id = 38},
	{name = "Engine Block", id = 39},
	{name = "Air Filter", id = 40},
	{name = "Struts", id = 41},
	{name = "Arch Cover", id = 42},
	{name = "Aerials", id = 43},
	{name = "Trim 2", id = 44},
	{name = "Tank", id = 45},
	{name = "Windows", id = 46},
	{name = "Livery", id = 48},
	{name = "Horns", id = 14},
	{name = "Wheels", id = 23},
	{name = "Wheel Types", id = "wheeltypes"},
	{name = "Extras", id = "extra"},
	{name = "Neons", id = "neon"},
	{name = "Paint", id = "paint"},
}


local perfMods = {
	{name = "Engine", id = 11},
	{name = "Brakes", id = 12},
	{name = "Transmission", id = 13},
	{name = "Suspension", id = 15},
}

local horns = {
	["HORN_STOCK"] = -1,
	["Truck Horn"] = 1,
	["Police Horn"] = 2,
	["Clown Horn"] = 3,
	["Musical Horn 1"] = 4,
	["Musical Horn 2"] = 5,
	["Musical Horn 3"] = 6,
	["Musical Horn 4"] = 7,
	["Musical Horn 5"] = 8,
	["Sad Trombone Horn"] = 9,
	["Classical Horn 1"] = 10,
	["Classical Horn 2"] = 11,
	["Classical Horn 3"] = 12,
	["Classical Horn 4"] = 13,
	["Classical Horn 5"] = 14,
	["Classical Horn 6"] = 15,
	["Classical Horn 7"] = 16,
	["Scaledo Horn"] = 17,
	["Scalere Horn"] = 18,
	["Salemi Horn"] = 19,
	["Scalefa Horn"] = 20,
	["Scalesol Horn"] = 21,
	["Scalela Horn"] = 22,
	["Scaleti Horn"] = 23,
	["Scaledo Horn High"] = 24,
	["Jazz Horn 1"] = 25,
	["Jazz Horn 2"] = 26,
	["Jazz Horn 3"] = 27,
	["Jazz Loop Horn"] = 28,
	["Starspangban Horn 1"] = 28,
	["Starspangban Horn 2"] = 29,
	["Starspangban Horn 3"] = 30,
	["Starspangban Horn 4"] = 31,
	["Classical Loop 1"] = 32,
	["Classical Horn 8"] = 33,
	["Classical Loop 2"] = 34,
	
}


local neonColors = {
	["White"] = {255,255,255},
	["Blue"] ={0,0,255},
	["Electric Blue"] ={0,150,255},
	["Mint Green"] ={50,255,155},
	["Lime Green"] ={0,255,0},
	["Yellow"] ={255,255,0},
	["Golden Shower"] ={204,204,0},
	["Orange"] ={255,128,0},
	["Red"] ={255,0,0},
	["Pony Pink"] ={255,102,255},
	["Hot Pink"] ={255,0,255},
	["Purple"] ={153,0,153},
}

local paintsClassic = { -- kill me pls 
	{name = "Black", id = 0},
	{name = "Carbon Black", id = 147},
	{name = "Graphite", id = 1},
	{name = "Anhracite Black", id = 11},
	{name = "Black Steel", id = 2},
	{name = "Dark Steel", id = 3},
	{name = "Silver", id = 4},
	{name = "Bluish Silver", id = 5},
	{name = "Rolled Steel", id = 6},
	{name = "Shadow Silver", id = 7},
	{name = "Stone Silver", id = 8},
	{name = "Midnight Silver", id = 9},
	{name = "Cast Iron Silver", id = 10},
	{name = "Red", id = 27},
	{name = "Torino Red", id = 28},
	{name = "Formula Red", id = 29},
	{name = "Lava Red", id = 150},
	{name = "Blaze Red", id = 30},
	{name = "Grace Red", id = 31},
	{name = "Garnet Red", id = 32},
	{name = "Sunset Red", id = 33},
	{name = "Cabernet Red", id = 34},
	{name = "Wine Red", id = 143},
	{name = "Candy Red", id = 35},
	{name = "Hot Pink", id = 135},
	{name = "Pfsiter Pink", id = 137},
	{name = "Salmon Pink", id = 136},
	{name = "Sunrise Orange", id = 36},
	{name = "Orange", id = 38},
	{name = "Bright Orange", id = 138},
	{name = "Gold", id = 99},
	{name = "Bronze", id = 90},
	{name = "Yellow", id = 88},
	{name = "Race Yellow", id = 89},
	{name = "Dew Yellow", id = 91},
	{name = "Dark Green", id = 49},
	{name = "Racing Green", id = 50},
	{name = "Sea Green", id = 51},
	{name = "Olive Green", id = 52},
	{name = "Bright Green", id = 53},
	{name = "Gasoline Green", id = 54},
	{name = "Lime Green", id = 92},
	{name = "Midnight Blue", id = 141},
	{name = "Galaxy Blue", id = 61},
	{name = "Dark Blue", id = 62},
	{name = "Saxon Blue", id = 63},
	{name = "Blue", id = 64},
	{name = "Mariner Blue", id = 65},
	{name = "Harbor Blue", id = 66},
	{name = "Diamond Blue", id = 67},
	{name = "Surf Blue", id = 68},
	{name = "Nautical Blue", id = 69},
	{name = "Racing Blue", id = 73},
	{name = "Ultra Blue", id = 70},
	{name = "Light Blue", id = 74},
	{name = "Chocolate Brown", id = 96},
	{name = "Bison Brown", id = 101},
	{name = "Creeen Brown", id = 95},
	{name = "Feltzer Brown", id = 94},
	{name = "Maple Brown", id = 97},
	{name = "Beechwood Brown", id = 103},
	{name = "Sienna Brown", id = 104},
	{name = "Saddle Brown", id = 98},
	{name = "Moss Brown", id = 100},
	{name = "Woodbeech Brown", id = 102},
	{name = "Straw Brown", id = 99},
	{name = "Sandy Brown", id = 105},
	{name = "Bleached Brown", id = 106},
	{name = "Schafter Purple", id = 71},
	{name = "Spinnaker Purple", id = 72},
	{name = "Midnight Purple", id = 142},
	{name = "Bright Purple", id = 145},
	{name = "Cream", id = 107},
	{name = "Ice White", id = 111},
	{name = "Frost White", id = 112},
}


local paintsMatte = {
	{name = "Black", id = 12},
	{name = "Gray", id = 13},
	{name = "Light Gray", id = 14},
	{name = "Ice White", id = 131},
	{name = "Blue", id = 83},
	{name = "Dark Blue", id = 82},
	{name = "Midnight Blue", id = 84},
	{name = "Midnight Purple", id = 149},
	{name = "Schafter Purple", id = 148},
	{name = "Red", id = 39},
	{name = "Dark Red", id = 40},
	{name = "Orange", id = 41},
	{name = "Yellow", id = 42},
	{name = "Lime Green", id = 55},
	{name = "Green", id = 128},
	{name = "Forest Green", id = 151},
	{name = "Foliage Green", id = 155},
	{name = "Olive Darb", id = 152},
	{name = "Dark Earth", id = 153},
	{name = "Desert Tan", id = 154},
}

local paintsMetal = {
	{name = "Brushed Steel", id = 117},
	{name = "Brushed Black Steel", id = 118},
	{name = "Brushed Aluminum", id = 119},
	{name = "Pure Gold", id = 158},
	{name = "Brushed Gold", id = 159},
}



defaultVehAction = ""

if GetVehiclePedIsUsing(PlayerPedId()) then
	veh = GetVehiclePedIsUsing(PlayerPedId())
end


RegisterNetEvent("lscustoms:payedForPart")

AddEventHandler("lscustoms:payedForPart", function(afford)
	couldafford = afford
end)
function payPart(price)
	couldafford = nil 
	TriggerServerEvent("fx_customs:payPart", price)
	repeat
	Wait(10)
	until couldafford ~= nil
	return couldafford
end

Citizen.CreateThread(function()
	WarMenu.CreateMenu('LSC', 'Los Santos Customs')
	WarMenu.SetSubTitle('LSC', 'Los Santos Customs')
	WarMenu.CreateSubMenu('tunings', 'LSC', 'Visual Tuning')
	WarMenu.CreateSubMenu('performance', 'LSC', 'Performance Tuning')
	WarMenu.CreateSubMenu('closeMenu', 'LSC', 'Are you sure?')
	WarMenu.SetTitleBackgroundColor('LSC', 120,120,120,255)
	WarMenu.SetTitleBackgroundColor('tunings', 120,120,120,255)
	WarMenu.SetTitleBackgroundColor('performance', 120,120,120,255)
	WarMenu.SetTitleBackgroundColor('closeMenu', 120,120,120,255)
	
	WarMenu.SetMenuBackgroundColor('LSC', 0,0,0,220)
	WarMenu.SetMenuBackgroundColor('tunings', 0,0,0,220)
	WarMenu.SetMenuBackgroundColor('performance', 0,0,0,220)
	WarMenu.SetMenuBackgroundColor('closeMenu', 0,0,0,220)
	
	for i,theItem in pairs(vehicleMods) do
		WarMenu.CreateSubMenu(theItem.id, 'tunings', theItem.name)
		
		if theItem.id == "paint" then
			WarMenu.CreateSubMenu("primary", theItem.id, "Primary Paint")
			WarMenu.CreateSubMenu("secondary", theItem.id, "Secondary Paint")
			
			WarMenu.CreateSubMenu("rimpaint", theItem.id, "Wheel Paint")
			
			WarMenu.CreateSubMenu("classic1", "primary", "Classic Paint")
			WarMenu.CreateSubMenu("metallic1", "primary", "Metallic Paint")
			WarMenu.CreateSubMenu("matte1", "primary","Matte Paint")
			WarMenu.CreateSubMenu("metal1", "primary","Metal Paint")
			WarMenu.CreateSubMenu("classic2", "secondary", "Classic Paint")
			WarMenu.CreateSubMenu("metallic2", "secondary", "Metallic Paint")
			WarMenu.CreateSubMenu("matte2", "secondary","Matte Paint")
			WarMenu.CreateSubMenu("metal2", "secondary","Metal Paint")
			
			WarMenu.CreateSubMenu("classic3", "rimpaint", "Classic Paint")
			WarMenu.CreateSubMenu("metallic3", "rimpaint", "Metallic Paint")
			WarMenu.CreateSubMenu("matte3", "rimpaint","Matte Paint")
			WarMenu.CreateSubMenu("metal3", "rimpaint","Metal Paint")
			
		end
	end
	
	for i,theItem in pairs(perfMods) do
		WarMenu.CreateSubMenu(theItem.id, 'performance', theItem.name)
	end
	
	AddBlips()
	
	
	while true do
		ped = PlayerPedId()
		veh = GetVehiclePedIsUsing(ped)
		if WarMenu.IsMenuOpened('LSC') then
			if not IsVehicleDamaged(veh) and WarMenu.MenuButton("Visual Tuning", "tunings") then
			elseif not IsVehicleDamaged(veh) and WarMenu.MenuButton("Performance Tuning", "performance") then 
			elseif IsVehicleDamaged(veh) and WarMenu.Button('Repair Vehicle', modPrices.repair.."$") then
				--SetVehicleFixed(veh)
				payed = payPart(modPrices.repair)
				Citizen.Trace(tostring(payed))
				if payed then
					SetVehicleFixed(veh)
				end
				
			elseif GetVehicleDirtLevel(veh) ~= 0.0 and WarMenu.Button('Clean Vehicle', modPrices.clean.."$") then
				payed = payPart(modPrices.clean)
				if payed then
					SetVehicleDirtLevel(veh, 0.0)
				end
				
			elseif WarMenu.MenuButton('Exit', 'closeMenu') then
			end
			
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened('closeMenu') then
			if WarMenu.Button('Yes') then
				WarMenu.CloseMenu()
				SetVehicleOutsideGarage()
			elseif WarMenu.MenuButton('No', 'LSC') then
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened('tunings') then
			for i,theItem in pairs(vehicleMods) do
				if theItem.id == "extra" and #checkValidVehicleExtras() ~= 0 then
					if WarMenu.MenuButton(theItem.name, theItem.id) then
					end
				elseif theItem.id == "neon" then
					if WarMenu.MenuButton(theItem.name, theItem.id) then
					end
				elseif theItem.id == "paint" then
					if WarMenu.MenuButton(theItem.name, theItem.id) then
					end
				elseif theItem.id == "wheeltypes" then
					if WarMenu.MenuButton(theItem.name, theItem.id) then
					end
				else
					local valid = checkValidVehicleMods(theItem.id)
					for ci,ctheItem in pairs(valid) do
						if WarMenu.MenuButton(theItem.name, theItem.id) then
						end
						break
					end
				end
				
			end
			WarMenu.Display()
		elseif IsControlJustReleased(0, 244) and veh and GetPedInVehicleSeat(veh, -1) == ped then --M by default
			--SetVehicleModKit(veh,0)
			--WarMenu.OpenMenu('LSC')
			
			
		elseif WarMenu.IsMenuOpened('performance') then
			for i,theItem in pairs(perfMods) do
				if WarMenu.MenuButton(theItem.name, theItem.id) then
				end
			end	
			if IsToggleModOn(veh,18) then
				turboStatus = "Installed"
			else
				turboStatus = modPrices.Turbo.."$"
			end
			if WarMenu.Button("Turbo Tune", turboStatus) then
				if not IsToggleModOn(veh,18) then
					payed = payPart(modPrices.Turbo)
					if payed then
						ToggleVehicleMod(veh, 18, not IsToggleModOn(veh,18))
					end
				else
					ToggleVehicleMod(veh, 18, not IsToggleModOn(veh,18))
				end
			end
			WarMenu.Display()
			
			
		elseif WarMenu.IsMenuOpened("primary") then
			WarMenu.MenuButton("Classic", "classic1")
			WarMenu.MenuButton("Metallic", "metallic1")
			WarMenu.MenuButton("Matte", "matte1")
			WarMenu.MenuButton("Metal", "metal1")
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("secondary") then
			WarMenu.MenuButton("Classic", "classic2")
			WarMenu.MenuButton("Metallic", "metallic2")
			WarMenu.MenuButton("Matte", "matte2")
			WarMenu.MenuButton("Metal", "metal2")
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("rimpaint") then
			WarMenu.MenuButton("Classic", "classic3")
			WarMenu.MenuButton("Metallic", "metallic3")
			WarMenu.MenuButton("Matte", "matte3")
			WarMenu.MenuButton("Metal", "metal3")
			WarMenu.Display()
			
		elseif WarMenu.IsMenuOpened("classic1") then
			for theName,thePaint in pairs(paintsClassic) do
				tp,ts = GetVehicleColours(veh)
				if tp == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and tp == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						
						isPreviewing = true
					elseif isPreviewing and curprim == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,thePaint.id,oldsec)
							SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and curprim ~= thePaint.id then
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						isPreviewing = true
					end
				end
			end
			
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metallic1") then
			for theName,thePaint in pairs(paintsClassic) do
				tp,ts = GetVehicleColours(veh)
				if tp == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and tp == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						
						isPreviewing = true
					elseif isPreviewing and curprim == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then 
							SetVehicleColours(veh,thePaint.id,oldsec)
							SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and curprim ~= thePaint.id then
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("matte1") then
			for theName,thePaint in pairs(paintsMatte) do
				tp,ts = GetVehicleColours(veh)
				if tp == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and tp == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleColours(veh,thePaint.id,oldsec)
						
						isPreviewing = true
					elseif isPreviewing and curprim == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then 
							SetVehicleColours(veh,thePaint.id,oldsec)
							SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and curprim ~= thePaint.id then
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metal1") then
			for theName,thePaint in pairs(paintsMetal) do
				tp,ts = GetVehicleColours(veh)
				if tp == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and tp == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						SetVehicleColours(veh,thePaint.id,oldsec)
						
						isPreviewing = true
					elseif isPreviewing and curprim == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,thePaint.id,oldsec)
							SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and curprim ~= thePaint.id then
						SetVehicleColours(veh,thePaint.id,oldsec)
						SetVehicleExtraColours(veh, thePaint.id,oldwheelcolour)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("classic2") then
			for theName,thePaint in pairs(paintsClassic) do
				tp,ts = GetVehicleColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldmod = table.pack(oldprim,oldsec)
						SetVehicleColours(veh,oldprim,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and cursec == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,oldprim,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and cursec ~= thePaint.id then
						SetVehicleColours(veh,oldprim,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metallic2") then 
			for theName,thePaint in pairs(paintsClassic) do
				tp,ts = GetVehicleColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldmod = table.pack(oldprim,oldsec)
						SetVehicleColours(veh,oldprim,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and cursec == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,oldprim,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and cursec ~= thePaint.id then
						SetVehicleColours(veh,oldprim,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("matte2") then 
			for theName,thePaint in pairs(paintsMatte) do
				tp,ts = GetVehicleColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldmod = table.pack(oldprim,oldsec)
						SetVehicleColours(veh,oldprim,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and cursec == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,oldprim,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and cursec ~= thePaint.id then
						SetVehicleColours(veh,oldprim,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metal2") then
			for theName,thePaint in pairs(paintsMetal) do
				tp,ts = GetVehicleColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				curprim,cursec = GetVehicleColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldmod = table.pack(oldprim,oldsec)
						SetVehicleColours(veh,oldprim,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and cursec == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleColours(veh,oldprim,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and cursec ~= thePaint.id then
						SetVehicleColours(veh,oldprim,thePaint.id)
						isPreviewing = true
					end
				end
			end
			
		elseif WarMenu.IsMenuOpened("classic3") then
			for theName,thePaint in pairs(paintsClassic) do
				_,ts = GetVehicleExtraColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				_,currims = GetVehicleExtraColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and currims == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then 
							SetVehicleExtraColours(veh, oldpearl,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and currims ~= thePaint.id then
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metallic3") then 
			for theName,thePaint in pairs(paintsClassic) do
				_,ts = GetVehicleExtraColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				_,currims = GetVehicleExtraColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and currims == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleExtraColours(veh, oldpearl,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and currims ~= thePaint.id then
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("matte3") then 
			for theName,thePaint in pairs(paintsMatte) do
				_,ts = GetVehicleExtraColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				_,currims = GetVehicleExtraColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and currims == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleExtraColours(veh, oldpearl,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and currims ~= thePaint.id then
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		elseif WarMenu.IsMenuOpened("metal3") then
			for theName,thePaint in pairs(paintsMetal) do
				_,ts = GetVehicleExtraColours(veh)
				if ts == thePaint.id and not isPreviewing then
					pricetext = "Installed"
				else
					if isPreviewing and ts == thePaint.id then
						pricetext = "Previewing"
					else
						pricetext = modPrices.paint.."$"
					end
				end
				_,currims = GetVehicleExtraColours(veh)
				if WarMenu.Button(thePaint.name, pricetext) then
					if not isPreviewing then
						oldmodtype = "paint"
						oldmodaction = false
						oldprim,oldsec = GetVehicleColours(veh)
						oldpearl,oldwheelcolour = GetVehicleExtraColours(veh)
						oldmod = table.pack(oldprim,oldsec,oldpearl,oldwheelcolour)
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						
						isPreviewing = true
					elseif isPreviewing and currims == thePaint.id then
						payed = payPart(modPrices.paint)
						if payed then
							SetVehicleExtraColours(veh, oldpearl,thePaint.id)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					elseif isPreviewing and currims ~= thePaint.id then
						SetVehicleExtraColours(veh, oldpearl,thePaint.id)
						isPreviewing = true
					end
				end
			end
			WarMenu.Display()
		end
		
		
		for i,theItem in pairs(vehicleMods) do
			
			if WarMenu.IsMenuOpened(41) or WarMenu.IsMenuOpened(39) or WarMenu.IsMenuOpened(40) or WarMenu.IsMenuOpened(45) then
				SetVehicleDoorOpen(veh, 4, false, true)
			elseif WarMenu.IsMenuOpened(38) or WarMenu.IsMenuOpened(37) then
				SetVehicleDoorOpen(veh, 5, false, true)
				
			elseif WarMenu.IsMenuOpened("tunings") then
				SetVehicleDoorShut(veh, 4, false)
				SetVehicleDoorShut(veh, 5, false)
				if isPreviewing then
					if oldmodtype == "neon" then
						local r,g,b = table.unpack(oldmod)
						SetVehicleNeonLightsColour(veh,r,g,b)
						SetVehicleNeonLightEnabled(veh, 0, oldmodaction)
						SetVehicleNeonLightEnabled(veh, 1, oldmodaction)
						SetVehicleNeonLightEnabled(veh, 2, oldmodaction)
						SetVehicleNeonLightEnabled(veh, 3, oldmodaction)
						isPreviewing = false
						oldmodtype = -1
						oldmod = -1
					elseif oldmodtype == "paint" then
						local pa,pb,pc,pd = table.unpack(oldmod)
						SetVehicleColours(veh, pa,pb)
						SetVehicleExtraColours(veh,pc,pd)
						isPreviewing = false
						oldmodtype = -1
						oldmod = -1						
					else
						if oldmodaction == "rm" then
							RemoveVehicleMod(veh, oldmodtype)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						else
							SetVehicleMod(veh, oldmodtype,oldmod,false)
							isPreviewing = false
							oldmodtype = -1
							oldmod = -1
						end
					end
				end
			end
			
			
			
			
			if WarMenu.IsMenuOpened(theItem.id) then
				if theItem.id == "wheeltypes" then
					if WarMenu.Button("Sport Wheels") then
						SetVehicleWheelType(veh,0)
					elseif WarMenu.Button("Muscle Wheels") then
						SetVehicleWheelType(veh,1)
					elseif WarMenu.Button("Lowrider Wheels") then
						SetVehicleWheelType(veh,2)
					elseif WarMenu.Button("SUV Wheels") then
						SetVehicleWheelType(veh,3)
					elseif WarMenu.Button("Offroad Wheels") then
						SetVehicleWheelType(veh,4)
					elseif WarMenu.Button("Tuner Wheels") then
						SetVehicleWheelType(veh,5)
					elseif WarMenu.Button("High End Wheels") then 
						SetVehicleWheelType(veh,7)
					end
					WarMenu.Display()
				elseif theItem.id == "extra" then
					local extras = checkValidVehicleExtras()
					for i,theItem in pairs(extras) do
						if IsVehicleExtraTurnedOn(veh,i) then
							pricestring = "Installed"
						else
							pricestring = modPrices.extra.."$"
						end
						
						if WarMenu.Button(theItem.menuName, pricestring) then
							SetVehicleExtra(veh, i, IsVehicleExtraTurnedOn(veh,i))
						end
					end
					WarMenu.Display()
				elseif theItem.id == "neon" then
					
					if WarMenu.Button("None", "0$") then
						SetVehicleNeonLightsColour(veh,255,255,255)
						SetVehicleNeonLightEnabled(veh,0,false)
						SetVehicleNeonLightEnabled(veh,1,false)
						SetVehicleNeonLightEnabled(veh,2,false)
						SetVehicleNeonLightEnabled(veh,3,false)
					end
					
					
					for i,theItem in pairs(neonColors) do
						colorr,colorg,colorb = table.unpack(theItem)
						r,g,b = GetVehicleNeonLightsColour(veh)
						
						if colorr == r and colorg == g and colorb == b and IsVehicleNeonLightEnabled(vehicle,2) and not isPreviewing then
							pricestring = "Installed"
						else
							if isPreviewing and colorr == r and colorg == g and colorb == b then
								pricestring = "Previewing"
							else
								pricestring = modPrices.neons.."$"
							end
						end
						
						if WarMenu.Button(i, pricestring) then
							if not isPreviewing then
								oldmodtype = "neon"
								oldmodaction = IsVehicleNeonLightEnabled(veh,1)
								oldr,oldg,oldb = GetVehicleNeonLightsColour(veh)
								oldmod = table.pack(oldr,oldg,oldb)
								SetVehicleNeonLightsColour(veh,colorr,colorg,colorb)
								SetVehicleNeonLightEnabled(veh,0,true)
								SetVehicleNeonLightEnabled(veh,1,true)
								SetVehicleNeonLightEnabled(veh,2,true)
								SetVehicleNeonLightEnabled(veh,3,true)
								isPreviewing = true
							elseif isPreviewing and colorr == r and colorg == g and colorb == b then
								payed = payPart(modPrices.neons)
								if payed then
									SetVehicleNeonLightsColour(veh,colorr,colorg,colorb)
									SetVehicleNeonLightEnabled(veh,0,true)
									SetVehicleNeonLightEnabled(veh,1,true)
									SetVehicleNeonLightEnabled(veh,2,true)
									SetVehicleNeonLightEnabled(veh,3,true)
									isPreviewing = false
									oldmodtype = -1
									oldmod = -1
								end
							elseif isPreviewing and colorr ~= r or colorg ~= g or colorb ~= b then
								SetVehicleNeonLightsColour(veh,colorr,colorg,colorb)
								SetVehicleNeonLightEnabled(veh,0,true)
								SetVehicleNeonLightEnabled(veh,1,true)
								SetVehicleNeonLightEnabled(veh,2,true)
								SetVehicleNeonLightEnabled(veh,3,true)
								isPreviewing = true
							end
						end
					end
					WarMenu.Display()
				elseif theItem.id == "paint" then
					
					if WarMenu.MenuButton("Primary Paint","primary") then
						
					elseif WarMenu.MenuButton("Secondary Paint","secondary") then
						
					elseif WarMenu.MenuButton("Wheel Paint","rimpaint") then
						
					end
					
					
					WarMenu.Display()
					
				else
					local valid = checkValidVehicleMods(theItem.id)
					for ci,ctheItem in pairs(valid) do
						for eh,tehEtem in pairs(modPrices) do
							if eh == theItem.name and GetVehicleMod(veh,theItem.id) ~= ctheItem.data.realIndex then
								price = tehEtem.."$"
								actualprice = tehEtem
							elseif eh == theItem.name and isPreviewing and GetVehicleMod(veh,theItem.id) == ctheItem.data.realIndex then
								price = "Previewing"
								actualprice = tehEtem
							elseif eh == theItem.name and GetVehicleMod(veh,theItem.id) == ctheItem.data.realIndex then
								price = "Installed"
								actualprice = tehEtem
							end
						end
						if ctheItem.menuName == "Stock" then price = 0 end
						if theItem.name == "Horns" then
							for chorn,HornId in pairs(horns) do
								if HornId == ci-1 then
									ctheItem.menuName = chorn
								end
							end
						end
						if ctheItem.menuName == "NULL" then
							ctheItem.menuName = "unknown"
						end
						if WarMenu.Button(ctheItem.menuName, price) then
							
							
							
							
							
							if not isPreviewing then
								oldmodtype = theItem.id
								oldmod = GetVehicleMod(veh, theItem.id)
								isPreviewing = true
								if ctheItem.data.realIndex == -1 then
									oldmodaction = "rm"
									RemoveVehicleMod(veh, ctheItem.data.modid)
									isPreviewing = false
									oldmodtype = -1
									oldmod = -1
									oldmodaction = false
								else
									oldmodaction = false
									SetVehicleMod(veh, theItem.id, ctheItem.data.realIndex, false)
								end
							elseif isPreviewing and GetVehicleMod(veh,theItem.id) == ctheItem.data.realIndex then
								payed = payPart(actualprice)
								if payed then
									isPreviewing = false
									oldmodtype = -1
									oldmod = -1
									oldmodaction = false
									if ctheItem.data.realIndex == -1 then
										RemoveVehicleMod(veh, ctheItem.data.modid)
									else
										SetVehicleMod(veh, theItem.id, ctheItem.data.realIndex, false)
									end
								end
							elseif isPreviewing and GetVehicleMod(veh,theItem.id) ~= ctheItem.data.realIndex then
								if ctheItem.data.realIndex == -1 then
									RemoveVehicleMod(veh, ctheItem.data.modid)
									isPreviewing = false
									oldmodtype = -1
									oldmod = -1
									oldmodaction = false
								else
									SetVehicleMod(veh, theItem.id, ctheItem.data.realIndex, false)
									isPreviewing = true
								end
							end
						end
					end			
					WarMenu.Display()
				end
			end
		end
		
		for i,theItem in pairs(perfMods) do
			if WarMenu.IsMenuOpened(theItem.id) then
				
				if GetVehicleMod(veh,theItem.id) == 0 then
					pricestock = "0$"
					price1 = "Installed"
					price2 = modPrices.Performance_2.."$"
					price3 = modPrices.Performance_3.."$"
					price4 = modPrices.Performance_4.."$"
				elseif GetVehicleMod(veh,theItem.id) == 1 then
					pricestock = "0$"
					price1 = modPrices.Performance_1.."$"
					price2 = "Installed"
					price3 = modPrices.Performance_3.."$"
					price4 = modPrices.Performance_4.."$"
				elseif GetVehicleMod(veh,theItem.id) == 2 then
					pricestock = "0$"
					price1 = modPrices.Performance_1.."$"
					price2 = modPrices.Performance_2.."$"
					price3 = "Installed"
					price4 = modPrices.Performance_4.."$"
				elseif GetVehicleMod(veh,theItem.id) == 3 then
					pricestock = "0$"
					price1 = modPrices.Performance_1.."$"
					price2 = modPrices.Performance_2.."$"
					price3 = modPrices.Performance_3.."$"
					price4 = "Installed"
				elseif GetVehicleMod(veh,theItem.id) == -1 then
					pricestock = "Installed"
					price1 = modPrices.Performance_1.."$"
					price2 = modPrices.Performance_2.."$"
					price3 = modPrices.Performance_3.."$"
					price4 = modPrices.Performance_4.."$"
				end
				if WarMenu.Button("Stock "..theItem.name, pricestock) then
					SetVehicleMod(veh,theItem.id, -1)
				elseif WarMenu.Button(theItem.name.." Upgrade 1", price1) then
					payed = payPart(modPrices.Performance_1)
					if payed then
						SetVehicleMod(veh,theItem.id, 0)
					end
				elseif WarMenu.Button(theItem.name.." Upgrade 2", price2) then
					payed = payPart(modPrices.Performance_2)
					if payed then
						SetVehicleMod(veh,theItem.id, 1)
					end
				elseif WarMenu.Button(theItem.name.." Upgrade 3", price3) then
					payed = payPart(modPrices.Performance_3)
					if payed then
						SetVehicleMod(veh,theItem.id, 2)
					end
				elseif theItem.id ~= 13 and theItem.id ~= 12 and WarMenu.Button(theItem.name.." Upgrade 4", price4) then
					payed = payPart(modPrices.Performance_4)
					if payed then
						SetVehicleMod(veh,theItem.id, 3)
					end
				end
				WarMenu.Display()
			end
		end
		
		Citizen.Wait(0)
	end
end)




function checkValidVehicleExtras()
	local playerPed = PlayerPedId()
	local playerVeh = GetVehiclePedIsIn(playerPed, false)
	local valid = {}
	
	for i=0,50,1 do
		if(DoesExtraExist(playerVeh, i))then
			local realModName = "Extra #"..tostring(i)
			local text = "OFF"
			if(IsVehicleExtraTurnedOn(playerVeh, i))then
				text = "ON"
			end
			local realSpawnName = "extra "..tostring(i)
			table.insert(valid, {
				menuName=realModName,
				data ={
					["action"] = realSpawnName,
					["state"] = text
				}
			})
		end
	end
	
	return valid
end


function DoesVehicleHaveExtras( veh )
	for i = 1, 30 do 
		if ( DoesExtraExist( veh, i ) ) then 
			return true 
		end 
	end 
	
	return false 
end 


function checkValidVehicleMods(modID)
	local playerPed = PlayerPedId()
	local playerVeh = GetVehiclePedIsIn(playerPed, false)
	local valid = {}
	local modCount = GetNumVehicleMods(playerVeh,modID)
	
	-- Handle Liveries if they don't exist in modCount
	if (modID == 48 and modCount == 0) then
		
		-- Local to prevent below code running.
		local modCount = GetVehicleLiveryCount(playerVeh)
		for i=1, modCount, 1 do
			local realIndex = i - 1
			local modName = GetLiveryName(playerVeh, realIndex)
			local realModName = GetLabelText(modName)
			local modid, realSpawnName = modID, realIndex
			
			valid[i] = {
				menuName=realModName,
				data = {
					["modid"] = modid,
					["realIndex"] = realSpawnName
				}
			}
		end
	end
	-- Handles all other mods
	for i = 1, modCount, 1 do
		local realIndex = i - 1
		local modName = GetModTextLabel(playerVeh, modID, realIndex)
		local realModName = GetLabelText(modName)
		local modid, realSpawnName = modCount, realIndex
		
		
		valid[i] = {
			menuName=realModName,
			data = {
				["modid"] = modid,
				["realIndex"] = realSpawnName
			}
		}
	end
	
	
	-- Insert Stock Option for modifications
	if(modCount > 0)then
		local realIndex = -1
		local modid, realSpawnName = modID, realIndex
		table.insert(valid, 1, {
			menuName="Stock",
			data = {
				["modid"] = modid,
				["realIndex"] = realSpawnName
			}
		})
	end
	
	return valid
end