RegisterNetEvent("CGC:rappel")

AddEventHandler("CGC:rappel", function()
    Citizen.CreateThread(function()
        if not IsPedInAnyHeli(GetPlayerPed(-1)) then
            TriggerEvent("chatMessage", "Error", {255, 0, 0}, "Du bist nicht in nem Maverick.")
            return
        end
        
        heli = GetVehiclePedIsIn(GetPlayerPed(-1), false)
        
        if not IsVehicleModel(heli, GetHashKey("maverick")) and not IsVehicleModel(heli, GetHashKey("polmav")) then
            TriggerEvent("chatMessage", "Error", {255, 0, 0}, "Du bist nicht in nem Maverick.")
            return
        end
        
        if GetPedInVehicleSeat(heli, -1) == GetPlayerPed(-1) or GetPedInVehicleSeat(heli, 0) == GetPlayerPed(-1) then
            TriggerEvent("chatMessage", "Error", {255, 0, 0}, "Du musst hinten im Helicopter sein, um dich abzuseilen.")
            return
        end
        
        TaskRappelFromHeli(GetPlayerPed(-1), 0)
    end)
end)