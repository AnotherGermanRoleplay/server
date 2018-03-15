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

ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

function interactionMenu()
  ESX.UI.Menu.Open(
    'default', GetCurrentResourceName(), 'interaction',
    {
      title    = _U('citizen_interaction'),
      align    = 'top-left',
      elements = {
        {label = _U('handcuff'),    value = 'handcuff'},
        {label = _U('drag'),      value = 'drag'},
        {label = _U('put_in_vehicle'),  value = 'put_in_vehicle'},
        {label = _U('out_the_vehicle'), value = 'out_the_vehicle'}
      },
    },
    function(data2, menu2)

      local player, distance = ESX.Game.GetClosestPlayer()

      if distance ~= -1 and distance <= 3.0 then

        if data2.current.value == 'handcuff' then
          ESX.TriggerServerCallback('esx_ambulancejob:getItemAmount', function(qtty1)
            if qtty1 > 0 then
              local xPlayer = ESX.GetPlayerFromId(source)
              xPlayer.removeItem('handcuff', 1)
              TriggerServerEvent('esx_policejob:handcuff', GetPlayerServerId(player))
            else
              ESX.ShowNotification(_U('not_enough_handcuff'))
            end
          end, 'handcuff')

        end

        if data2.current.value == 'drag' then
          TriggerServerEvent('esx_policejob:drag', GetPlayerServerId(player))
        end

        if data2.current.value == 'put_in_vehicle' then
          TriggerServerEvent('esx_policejob:putInVehicle', GetPlayerServerId(player))
        end

        if data2.current.value == 'out_the_vehicle' then
          TriggerServerEvent('esx_policejob:OutVehicle', GetPlayerServerId(player))
        end

      else
        ESX.ShowNotification(_U('no_players_nearby'))
      end

    end,
    function(data2, menu2)
      menu2.close()
    end
  )
end

Citizen.CreateThread(function()
  while true do

    Citizen.Wait(0)

      if IsControlPressed(0, Keys['T']) and not ESX.UI.Menu.IsOpen('default', GetCurrentResourceName(), 'interaction') then
          interactionMenu()
      end

  end
end)



