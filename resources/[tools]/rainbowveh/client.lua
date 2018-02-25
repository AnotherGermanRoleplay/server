local toggle = false 
local rainbowveh = false
local speed = 0.25

-- Crashing
TriggerEvent('es:addGroupCommand', 'vehrainbow', "superadmin", function(source, args, user)
    toggle = not toggle
    if toggle then
        rainbowveh = true
        TriggerEvent("chatMessage", "", {255,255,255}, "Vehicle Rainbow: ^2^*Enabled")

    else
        rainbowveh = false
        TriggerEvent("chatMessage", "", {255,255,255}, "Vehicle Rainbow: ^8^*Disabled")
    end
    for k,v in pairs(args) do
        if k == 1 then
            speed = v
        end
    end
end, function(source, args, user)
    TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficienct permissions!")
end, {help = "Just a test command thing, ya know?", params = {{name = "speed", help = "The speed in which the color changes"}}})

RegisterCommand("vehrainbow", function(source, args, rawCommand)
    toggle = not toggle
    if toggle then
        rainbowveh = true
        TriggerEvent("chatMessage", "", {255,255,255}, "Vehicle Rainbow: ^2^*Enabled")

    else
        rainbowveh = false
		TriggerEvent("chatMessage", "", {255,255,255}, "Vehicle Rainbow: ^8^*Disabled")
	end
	for k,v in pairs(args) do
		if k == 1 then
			speed = v
		end
	end
end,false)

Citizen.CreateThread(function()
	local function RGBRainbow( frequency )
		local result = {}
		local curtime = GetGameTimer() / 1000

		result.r = math.floor( math.sin( curtime * frequency + 0 ) * 127 + 128 )
		result.g = math.floor( math.sin( curtime * frequency + 2 ) * 127 + 128 )
		result.b = math.floor( math.sin( curtime * frequency + 4 ) * 127 + 128 )
	
		return result
	end
    while true do
    	local rainbow = RGBRainbow( speed )
    	Citizen.Wait(0)
    	if rainbowveh then
    		if IsPedInAnyVehicle(PlayerPedId(), true) then
    			veh = GetVehiclePedIsUsing(PlayerPedId())
    			SetVehicleCustomPrimaryColour(veh, rainbow.r, rainbow.g, rainbow.b)
    			SetVehicleCustomSecondaryColour(veh, rainbow.r, rainbow.g, rainbow.b)
    		else
    			rainbowveh = false
    			toggle = false
    		end
    	end
    end
end)
