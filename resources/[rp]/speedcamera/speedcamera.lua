--script by devilkkw
local maxSpeed= 40.0
local minSpeed= 10.0
local info ="nope"


function drawTxt(x,y ,width,height,scale, text, r,g,b,a)
    SetTextFont(0)
    SetTextProportional(0)
    SetTextScale(scale, scale)
    SetTextColour(r, g, b, a)
    SetTextDropShadow(0, 0, 0, 0,255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x - width/2, y - height/2 + 0.005)
end

Citizen.CreateThread(function()
	while true do
		Wait(0)
		  if IsControlPressed(1, 217)then
		    local pos = GetEntityCoords(GetPlayerPed(-1))
			 local carM = GetClosestVehicle(pos['x'], pos['y'], pos['z'], 10.0,0,70)
			 if carM ~=nil then
			      local plate=GetVehicleNumberPlateText(carM)
			      local herSpeedKm= GetEntitySpeed(carM)*3.6
			      local herSpeedMph= GetEntitySpeed(carM)*2.236936
			 
			 if herSpeedKm > minSpeed then			 
			         
			    if herSpeedKm < maxSpeed then 
			      
				  info = string.format("~b~Kennzeichen:~w~ %s ~n~~y~Km/h: ~g~%s~n~~y~Mph: ~g~%s",plate,math.ceil(herSpeedKm),math.ceil(herSpeedMph) )
				 else
				  
				  info = string.format("~b~Kennzeichen:~w~ %s ~n~~y~Km/h: ~r~%s~n~~y~Mph: ~r~%s",plate,math.ceil(herSpeedKm),math.ceil(herSpeedMph) )
				  
				end 
				
				 DrawRect(0.5,0.0,0.12,0.18,0,10,28,210)
                 drawTxt(0.55,0.1,0.185,0.206, 0.40, info, 255,255,255,255)
			     
			 end
			 end
		
	   end
	 end  
end)