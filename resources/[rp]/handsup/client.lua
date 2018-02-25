Citizen.CreateThread(function()
    local dict = "missminuteman_1ig_2"
    
	RequestAnimDict(dict)
	while not HasAnimDictLoaded(dict) do
		Citizen.Wait(100)
	end
    local handsup = false
	while true do
		Citizen.Wait(0)
		if IsControlJustPressed(1, 47) then --Start holding G
            local ped = GetPlayerPed(-1)
            if not handsup then
                TaskPlayAnim(ped, dict, "handsup_enter", 8.0, 8.0, -1, 50, 0, false, false, false)
                --if DoesEntityExist(ped) and not IsEntityDead(ped) then
                --    SetPedDropsWeapon(ped)
                --end
                handsup = true
            else
                handsup = false
                ClearPedTasks(ped)
            end
        end
    end
end)
	