--[[

-- ESX Voice
-- Original Author of Script: github.com/aabbfive
-- Edited by: nearbyplayer

--]]

local voice = {default = 5.001, shout = 25.001, sshout = 50.001, whisper = 1.001, current = 2, level = nil}

function drawLevel(r, g, b, a)
  SetTextFont(4)
  SetTextProportional(1)
  SetTextScale(0.5, 0.5)
  SetTextColour(r, g, b, a)
  SetTextDropShadow(0, 0, 0, 0, 255)
  SetTextEdge(1, 0, 0, 0, 255)
  SetTextDropShadow()
  SetTextOutline()
  SetTextEntry("STRING")
  AddTextComponentString("~y~Voice:~s~ " .. voice.level)
  DrawText(0.015, 0.645)
end

function setVoice()
  voice.current = (voice.current + 1) % 4
  if voice.current == 0 then
    NetworkSetTalkerProximity(voice.default)
    voice.level = "Normal (5m)"
  elseif voice.current == 1 then
    NetworkSetTalkerProximity(voice.shout)
    voice.level = "Rufen (25m)"
  elseif voice.current == 2 then
    NetworkSetTalkerProximity(voice.sshout)
    voice.level = "Schreien (50m)"
  elseif voice.current == 3 then
    NetworkSetTalkerProximity(voice.whisper)
    voice.level = "Flüstern (1m)"
  end
end

AddEventHandler('onClientMapStart', function()
  if voice.current == 0 then
    NetworkSetTalkerProximity(voice.default)
  elseif voice.current == 1 then
    NetworkSetTalkerProximity(voice.shout)
  elseif voice.current == 2 then
    NetworkSetTalkerProximity(voice.sshout)
  elseif voice.current == 3 then
    NetworkSetTalkerProximity(voice.whisper)
  end
end)

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if IsControlJustPressed(1, 74) and IsControlPressed(1, 21) then
      voice.current = (voice.current + 1) % 4
      print(voice.current)
      if voice.current == 0 then
        NetworkSetTalkerProximity(voice.default)
        voice.level = "Normal (5m)"
      elseif voice.current == 1 then
        NetworkSetTalkerProximity(voice.shout)
        voice.level = "Rufen (25m)"
      elseif voice.current == 2 then
        NetworkSetTalkerProximity(voice.sshout)
        voice.level = "Schreien (50m)"
      elseif voice.current == 3 then
        NetworkSetTalkerProximity(voice.whisper)
        voice.level = "Flüstern (1m)"
      end
    end
    if voice.current == 0 then
      voice.level = "Normal (5m)"
    elseif voice.current == 1 then
      voice.level = "Rufen (25m)"
    elseif voice.current == 2 then
      voice.level = "Schreien (50m)"
    elseif voice.current == 3 then
      voice.level = "Flüstern (1m)"
    end
    if NetworkIsPlayerTalking(PlayerId()) then
      drawLevel(41, 128, 185, 255)
    elseif not NetworkIsPlayerTalking(PlayerId()) then
      drawLevel(185, 185, 185, 255)
    end
  end
end)
