--==================================================================================
--======               ESX_IDENTITY BY ARKSEYONET @Ark                        ======
--======    YOU CAN FIND ME ON MY DISCORD @Ark - https://discord.gg/cGHHxPX   ======
--======    IF YOU ALTER THIS VERSION OF THE SCRIPT, PLEASE GIVE ME CREDIT    ======
--======     Special Thanks To Alphakush and CMD.Telhada For Help Testing     ======
--==================================================================================

--===============================================
--==                 VARIABLES                 ==
--===============================================
local guiEnabled = false
local myIdentity = {}

ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

--===============================================
--==                 VARIABLES                 ==
--===============================================
function EnableGui(enable)
    SetNuiFocus(enable)
    guiEnabled = enable

    SendNUIMessage({
        type = "enableui",
        enable = enable
    })
end

function openRegistry()
  TriggerEvent('esx_identity:showRegisterIdentity')
end


--===============================================
--==           Show Registration               ==
--===============================================
RegisterNetEvent("esx_identity:showRegisterIdentity")
AddEventHandler("esx_identity:showRegisterIdentity", function()
  EnableGui(true)
end)

RegisterNetEvent("esx_identity:updatePlayer")
AddEventHandler("esx_identity:updatePlayer", function()
  ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
    TriggerEvent('skinchanger:loadSkin', skin)
  end)
end)
--===============================================
--==              Close GUI                    ==
--===============================================
RegisterNUICallback('escape', function(data, cb)
    EnableGui(false)
end)

--===============================================
--==           Register Callback               ==
--===============================================
RegisterNUICallback('register', function(data)
  myIdentity = data
  EnableGui(false)
  Wait (500)
  TriggerServerEvent('esx_identity:updateLastChar', data)
  TriggerEvent('esx_skin:openSaveableMenu', function(submitCb)
    TriggerEvent('skinchanger:getSkin', function(skin)
      TriggerServerEvent('esx_skin:save', skin)
      TriggerServerEvent('esx_identity:setIdentity', skin, data)
    end)
    Citizen.Wait(20000)
    TriggerEvent('skinchanger:getSkin', function(skin)
      TriggerServerEvent('esx_skin:save', skin)
    end)
    TriggerServerEvent('esx_phone:refresh', ESX.PlayerData.identifier)
  end)
end)

--===============================================
--==                 THREADING                 ==
--===============================================
Citizen.CreateThread(function()
    while true do
        if guiEnabled then
            DisableControlAction(0, 1, guiEnabled) -- LookLeftRight
            DisableControlAction(0, 2, guiEnabled) -- LookUpDown

            DisableControlAction(0, 142, guiEnabled) -- MeleeAttackAlternate

            DisableControlAction(0, 106, guiEnabled) -- VehicleMouseControlOverride

            if IsDisabledControlJustReleased(0, 142) then -- MeleeAttackAlternate
                SendNUIMessage({
                    type = "click"
                })
            end
        end
        Citizen.Wait(0)
    end
end)
