--[[------------------------------------------------------------------------
    Vehicle Damage Shit
------------------------------------------------------------------------]]--
local levelOfDamageToKillThisBitch = 855.0 
local prevDamage = 0
local hud_x = 0.159 
local hud_y = 0.885

local text_x = 0.2575
local text_y = 0.975

function IsValidVehicle( veh )
    local model = GetEntityModel( veh )

    if ( IsThisModelACar( model ) or IsThisModelABike( model ) or IsThisModelAQuadbike( model ) ) then  
        return true 
    else 
        return false 
    end 
end 

function ManageVehicleDamage()
    local ped = GetPlayerPed( -1 )

    if ( DoesEntityExist( ped ) and not IsEntityDead( ped ) ) then 
        if ( IsPedSittingInAnyVehicle( ped ) ) then 
            local vehicle = GetVehiclePedIsIn( ped, false )

            if ( GetPedInVehicleSeat( vehicle, -1 ) == ped ) then 
                local damage = GetVehicleEngineHealth( vehicle )

                if ( damage < levelOfDamageToKillThisBitch and IsValidVehicle( vehicle ) ) then 
                    SetVehicleEngineHealth( vehicle, 300 )
                    SetVehicleEngineOn( vehicle, false, true )
                    SetVehicleUndriveable(vehicle, 1)
                    SendNotification("Motor ist ~r~zerstört~w~.")
                else
                    CheckCrash(vehicle, damage)
                end 
            end  
        end 
    end 
end 

function RenderDamageBox()
    local ped = GetPlayerPed( -1 )

    if ( DoesEntityExist( ped ) and not IsEntityDead( ped ) ) then 
        if ( IsPedSittingInAnyVehicle( ped ) ) then 
            local vehicle = GetVehiclePedIsIn( ped, false )

            if ( GetPedInVehicleSeat( vehicle, -1 ) == ped ) then 
                local damage = (GetVehicleEngineHealth( vehicle )-levelOfDamageToKillThisBitch)/900
                local max_damage = (1000-levelOfDamageToKillThisBitch)/900
                if damage < 0 then
                    damage = 1
                end

                DrawRect(hud_x, hud_y, 0.005, max_damage, 122, 25, 25, 200)
                DrawRect(hud_x, hud_y+(max_damage-damage)/2, 0.005, damage, 255, 50, 50, 255)
            end  
        end 
    end 
end

function CheckCrash(vehicle, damage)
    if prevDamage > 0 and (prevDamage - damage) > 15 then
        if math.random(1, 10) > 7 then
            SetVehicleUndriveable(vehicle, 1)
            SendNotification("Motor ist ~y~ausgefallen~w~.")
            Citizen.Wait(math.random(100, 5500))
            SendNotification("Motor ~g~läuft wieder~w~.")
            SetVehicleUndriveable(vehicle, 0)
        end
    end
    prevDamage = damage
end

function SendNotification(message)
    SetNotificationTextEntry("STRING")
    AddTextComponentString(message)
    DrawNotification(false, false)
end

Citizen.CreateThread(function()
    while true do
        RenderDamageBox()
        Citizen.Wait(0)
    end
end )

Citizen.CreateThread( function()
    while true do 
        ManageVehicleDamage()
        Citizen.Wait( 550 )
    end 
end )


--[[------------------------------------------------------------------------
    Vehicle Fix
------------------------------------------------------------------------]]--
RegisterNetEvent( 'wk:fixVehicle' )
AddEventHandler( 'wk:fixVehicle', function() 
    local ped = GetPlayerPed( -1 )

    if ( DoesEntityExist( ped ) and not IsEntityDead( ped ) ) then 
        if ( IsPedSittingInAnyVehicle( ped ) ) then 
            local vehicle = GetVehiclePedIsIn( ped, false )

            if ( GetPedInVehicleSeat( vehicle, -1 ) == ped ) then 
                SetVehicleEngineHealth( vehicle, 1000 )
                SetVehicleEngineOn( vehicle, true, true )
                SetVehicleUndriveable(vehicle, 0)
                SetVehicleFixed( vehicle )
                SendNotification("Alles wieder ~g~repariert~w~.")
            end  
        end 
    end 
end )