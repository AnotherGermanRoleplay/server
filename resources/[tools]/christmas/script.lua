local Month = GetClockMonth()
local igWinter = false

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0) -- prevent crashing

        if Month == 11 and igWinter then
            SetForceVehicleTrails(true)
            SetForcePedFootstepsTracks(true)
    		SetWeatherTypePersist("XMAS")
            SetWeatherTypeNowPersist("XMAS")
            SetWeatherTypeNow("XMAS")
            SetOverrideWeather("XMAS")
            Month = GetClockMonth()
        elseif not igWinter then
            SetForceVehicleTrails(true)
            SetForcePedFootstepsTracks(true)
            SetWeatherTypePersist("XMAS")
            SetWeatherTypeNowPersist("XMAS")
            SetWeatherTypeNow("XMAS")
            SetOverrideWeather("XMAS")
        else
            Citizen.Wait(5000)
            Month = GetClockMonth()
        end

        if GetSelectedPedWeapon(PlayerPedId()) == GetHashKey('WEAPON_SNOWBALL') then
            -- SetCanAttackFriendly(PlayerPedId(), false, false)
            SetPlayerWeaponDamageModifier(PlayerId(), 0.0)
            SetPedSuffersCriticalHits(PlayerPedId(), false)
        else
            -- SetCanAttackFriendly(PlayerPedId(), true, false)
            SetPedSuffersCriticalHits(PlayerPedId(), true)
        end

	end

end)

Citizen.CreateThread(function()

    showHelp = true
    while true do

        Citizen.Wait(0)

        if IsNextWeatherType('XMAS') then -- check for xmas weather type
            RequestAnimDict('anim@mp_snowball') -- pre-load the animation
            if IsControlJustReleased(0, 119) and not IsPedInAnyVehicle(GetPlayerPed(-1), true) and not IsPlayerFreeAiming(PlayerId()) and not IsPedSwimming(PlayerPedId()) and not IsPedSwimmingUnderWater(PlayerPedId()) and not IsPedRagdoll(PlayerPedId()) and not IsPedFalling(PlayerPedId()) and not IsPedRunning(PlayerPedId()) and not IsPedSprinting(PlayerPedId()) then -- check if the snowball should be picked up
                TaskPlayAnim(PlayerPedId(), 'anim@mp_snowball', 'pickup_snowball', 8.0, -1, -1, 0, 1, 0, 0, 0) -- pickup the snowball
                GiveWeaponToPed(GetPlayerPed(-1), GetHashKey('WEAPON_SNOWBALL'), 1, false, true) -- get 2 snowballs each time.
                Citizen.Wait(1950) -- wait 1.95 seconds to prevent spam clicking and getting a lot of snowballs without waiting for animatin to finish.
                GiveWeaponToPed(GetPlayerPed(-1), GetHashKey('WEAPON_SNOWBALL'), 1, false, true) -- get 2 snowballs each time.
            end
            if not IsPedInAnyVehicle(GetPlayerPed(-1), true) --[[and not IsPlayerFreeAiming(PlayerId())]] then
                if showHelp then
                    showHelpNotification()
                end
                showHelp = false
            else
                showHelp = true
            end
        end

    end

end)

function showHelpNotification()
    BeginTextCommandDisplayHelp("STRING")
    AddTextComponentSubstringPlayerName("Drücke ~INPUT_VEH_FLY_VERTICAL_FLIGHT_MODE~ um Schneebälle aufzuheben!")
    EndTextCommandDisplayHelp(0, 0, 1, -1)
end

AddEventHandler('playerSpawned', function()
    showHelpNotification()
end)