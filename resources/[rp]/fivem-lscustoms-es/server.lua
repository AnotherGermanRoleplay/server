useES = true


local tbl = {
	[1] = {locked = false, player = -1},
	[2] = {locked = false, player = -1},
	[3] = {locked = false, player = -1},
	[4] = {locked = false, player = -1},
	[5] = {locked = false, player = -1},
	[6] = {locked = false, player = -1},
	[7] = {locked = false, player = -1},
	[8] = {locked = false, player = -1},
	[9] = {locked = false, player = -1},
	[10] = {locked = false, player = -1},
	[11] = {locked = false, player = -1},
}

local modPrices = {
	["repair"] = 500,
	["clean"] = 20,
	["extra"] = 0,
	["neons"] = 2000,
	["paint"] = 1000,
	["Steering Wheel"] = 30,
	["Air Filter"] = 20,
	["Dashboard"] = 500,
	["Ornaments"] = 1000,
	["Struts"] = 200,
	["Engine Block"] = 150,
	["Roof"] = 100,
	["Side Skirt"] = 50,
	["Trim"] = 50,
	["Windows"] = 10,
	["Vanity Plates"] = 10,
	["Frame"] = 100,
	["Grille"] = 10,
	["Dial"] = 50,
	["Door Speaker"] = 100,
	["Rear Bumper"] = 300,
	["Front Bumper"] = 300,
	["Spoilers"] = 100,
	["Trim 2"] = 30,
	["Seats"] = 200,
	["Tank"] = 20,
	["Aerials"] = 10,
	["Arch Cover"] = 100,
	["Fender"] = 200,
	["Right Fender"] = 200,
	["Exhaust"] = 100,
	["Hood"] = 200,
	["Hydraulics"] = 500,
	["Trunk"] = 200,
	["Speakers"] = 100,
	["Plaques"] = 50,
	["Shifter Leavers"] = 50,
	["Livery"] = 500,
	["Performance_1"] = 500,
	["Performance_2"] = 1000,
	["Performance_3"] = 1500,
	["Performance_4"] = 2000,
	["Turbo"] = 4000,	
	["Wheels"] = 2000,
	["Wheel Types"] = 0,
}



Citizen.CreateThread(function()
	RegisterServerEvent('fx_customs:LockGarage')
	AddEventHandler('fx_customs:LockGarage', function(b,garage,player)
		tbl[tonumber(garage)].locked = b
		tbl[tonumber(garage)].player = player
		TriggerClientEvent('LockGarage',-1,tbl)
	end)
	
	function openGarage()
		for theId,theValues in pairs(tbl) do
			if tbl[theId].locked == true and tbl[theId].player ~= -1 and not GetPlayerName(tbl[theId].player) then
				local pl = GetPlayerName(tbl[theId].player)
				tbl[theId].locked = false
				TriggerClientEvent('LockGarage',-1,tbl)
				Citizen.Trace("garage closed but player not found, opening..")
			end
		end
		SetTimeout(20000, openGarage)
	end
	SetTimeout(20000, openGarage)
	
	RegisterServerEvent("fx_customs:RequestPriceList")
	AddEventHandler("fx_customs:RequestPriceList", function()
		TriggerClientEvent("fx_customs:RequestPriceList",source,modPrices)
	end)
	
	if useES == false then
		for theRow,theKey in pairs(modPrices) do 
			modPrices[theRow] = 0
		end
	end
	
	RegisterServerEvent("fx_customs:payPart")
	AddEventHandler('fx_customs:payPart', function(price)
		if useES then
			sorse = source
			couldafford = false 
			TriggerEvent('es:getPlayerFromId', sorse, function(ourUser) 
				if ourUser and ourUser.getMoney() >= price then
					ourUser.removeMoney(price)
					couldafford = true
				else
					couldafford = false 
				end
			end)
		else 
			couldafford = true
		end
		
		TriggerClientEvent("lscustoms:payedForPart", sorse, couldafford)
	end)	
end)