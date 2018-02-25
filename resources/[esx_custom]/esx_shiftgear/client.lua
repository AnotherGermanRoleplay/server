local Keys = {
  ["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57,
  ["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177,
  ["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
  ["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
  ["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
  ["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70,
  ["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
  ["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
  ["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}

local trigger = false
ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

Citizen.CreateThread(function()
  while true do
    Wait(0)
    local ped = GetPlayerPed(-1)
    if(IsPedInAnyVehicle(ped)) then
      local veh = GetVehiclePedIsIn(ped, false)
      if IsControlJustReleased(0, Keys["CAPS"]) and trigger == false then
      if GetPedInVehicleSeat(veh, -1) == ped then
    
      trigger = true
      SetVehicleEngineHealth(veh, GetVehicleEngineHealth(veh) - math.random(2, 20))
      
      -- Trigger Event to all Players in car      
      ESX.ShowNotification("Boost ~g~aktiviert~w~.")
      boostEffectForClientsInVehicle(veh)
      Wait(3000)
      trigger = false
      ESX.ShowNotification("Boost ~y~cooldown (30s)~w~.")
      Wait(30000)
    end
      end
    end
  end
end)



function boostEffectForClientsInVehicle(veh)
  if veh ~= nil then
    local xPlayers = ESX.Game.GetPlayers()
    local playerPed = 0
    for i=-1, 2 do
      playerPed = GetPedInVehicleSeat(veh, i)
      if playerPed ~= 0 and IsPedAPlayer(playerPed) then

        for i=1, #xPlayers, 1 do
          local xPlayer = xPlayers[i]
          local xPlayerPed = GetPlayerPed(xPlayer)
          if playerPed == xPlayerPed then
            TriggerServerEvent('esx_shiftgear:boost', GetPlayerServerId(xPlayer))
            break
          end
        end
      
      end
    end
  end
end

RegisterNetEvent('esx_shiftgear:boostEffect')
AddEventHandler('esx_shiftgear:boostEffect', function(player)
  local veh = GetVehiclePedIsIn(GetPlayerPed(-1), false)
  StartScreenEffect("RaceTurbo", 0, 0) --Screen Effect
  SetVehicleBoostActive(veh, 1, 0) --Boost Sound
  Wait(3000)
  SetVehicleBoostActive(veh, 0, 0)
end)
     
        
Citizen.CreateThread(function()
  while true do
    Wait(0)
    local ped = GetPlayerPed(-1)
    if(IsPedInAnyVehicle(ped)) then
      local veh = GetVehiclePedIsIn(ped, false)
      if trigger == true then
        boost(veh)
      else
        stopBoost(veh)
      end
    end
  end
end)

function boost(veh)
  SetVehicleEnginePowerMultiplier(veh, 4.0)
  SetVehicleEngineTorqueMultiplier(veh, 4.0)
end

function stopBoost(veh)
  SetVehicleEnginePowerMultiplier(veh, 1.0)
  SetVehicleEngineTorqueMultiplier(veh, 1.0)
end