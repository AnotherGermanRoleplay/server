checkRate = 1000
ping = 0

-- The x and y offset (starting at the top left corner) --
-- Default: 0.005, 0.001
offset = {x = 0.005, y = 0.001}

-- Text RGB Color --
-- Default: 64, 64, 64 (gray)
rgb = {r = 164, g = 164, b = 164}

-- Text transparency --
-- Default: 255
alpha = 255

-- Text scale
-- Default: 0.4
-- NOTE: Number needs to be a float (so instead of 1 do 1.0)
scale = 0.4

-- Text Font --
-- 0 - 5 possible
-- Default: 1
font = 4

pingText = "Ping: " .. ping

RegisterNetEvent('pingkick:showPing')
AddEventHandler('pingkick:showPing', function(ping)
	pingText = "Ping: " .. ping

end)

Citizen.CreateThread(function()
	while true do
		Wait(checkRate)

		TriggerServerEvent("checkMyPingBro")
		
	end
end)

Citizen.CreateThread(function()
	while true do
		Wait(1)

		SetTextColour(rgb.r, rgb.g, rgb.b, alpha)

		SetTextFont(font)
		SetTextScale(scale, scale)
		SetTextWrap(0.0, 1.0)
		SetTextCentre(false)
		SetTextDropshadow(2, 2, 0, 0, 0)
		SetTextEdge(1, 0, 0, 0, 205)
		SetTextEntry("STRING")
		AddTextComponentString(pingText)
		DrawText(offset.x, offset.y)
	end
end)