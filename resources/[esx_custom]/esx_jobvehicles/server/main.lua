ESX                = nil
local Categories   = {}
local Vehicles     = {}

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

function RemoveOwnedVehicle (plate)
  MySQL.Async.fetchAll(
    'SELECT * FROM owned_job_vehicles',
    {},
    function (result)
      for i=1, #result, 1 do
        local vehicleProps = json.decode(result[i].vehicle)

        if vehicleProps.plate == plate then
          MySQL.Async.execute(
            'DELETE FROM owned_job_vehicles WHERE id = @id',
            { ['@id'] = result[i].id }
          )
        end
      end
    end
  )
end

AddEventHandler('onMySQLReady', function ()
  Categories       = MySQL.Sync.fetchAll('SELECT * FROM job_vehicle_categories')
  local vehicles   = MySQL.Sync.fetchAll('SELECT * FROM job_vehicles')

  for i=1, #vehicles, 1 do
    local vehicle = vehicles[i]

    for j=1, #Categories, 1 do
      if Categories[j].name == vehicle.category then
        vehicle.categoryLabel = Categories[j].label
      end
    end

    table.insert(Vehicles, vehicle)
  end
end)

RegisterServerEvent('esx_jobvehicleshop:setVehicleOwned')
AddEventHandler('esx_jobvehicleshop:setVehicleOwned', function (vehicleProps, job)
  local _source = source
  local xPlayer = ESX.GetPlayerFromId(source)

  MySQL.Async.execute(
    'INSERT INTO owned_job_vehicles (vehicle, owner, job) VALUES (@vehicle, @owner, @job)',
    {
      ['@vehicle'] = json.encode(vehicleProps),
      ['@owner']   = xPlayer.identifier,
      ['@job']     = job,
    },
    function (rowsChanged)
      TriggerClientEvent('esx:showNotification', _source, _U('vehicle').. vehicleProps.plate .. _('belongs'))
    end
  )
end)

RegisterServerEvent('esx_jobvehicleshop:setVehicleOwnedPlayerId')
AddEventHandler('esx_jobvehicleshop:setVehicleOwnedPlayerId', function (playerId, vehicleProps)
  local xPlayer = ESX.GetPlayerFromId(playerId)

  MySQL.Async.execute(
    'INSERT INTO owned_job_vehicles (vehicle, owner, job) VALUES (@vehicle, @owner, @job)',
    {
      ['@vehicle'] = json.encode(vehicleProps),
      ['@owner']   = xPlayer.identifier,
      ['@job']     = xPlayer.job.name,
    },
    function (rowsChanged)
      TriggerClientEvent('esx:showNotification', playerId, _U('vehicle') .. vehicleProps.plate .. _('belongs'))
    end
  )
end)

ESX.RegisterServerCallback('esx_jobvehicleshop:getCategories', function (source, cb)
  cb(Categories)
end)

ESX.RegisterServerCallback('esx_jobvehicleshop:getVehicles', function (source, cb)
  cb(Vehicles)
end)

ESX.RegisterServerCallback('esx_jobvehicleshop:buyVehicle', function (source, cb, vehicleModel)
  local xPlayer     = ESX.GetPlayerFromId(source)
  local vehicleData = nil

  for i=1, #Vehicles, 1 do
    if Vehicles[i].model == vehicleModel then
      vehicleData = Vehicles[i]
      break
    end
  end

  if xPlayer.get('money') >= vehicleData.price then
    xPlayer.removeMoney(vehicleData.price)
    TriggerEvent('esx_addonaccount:getSharedAccount', 'society_'..xPlayer.job.name, function(account)
      if account ~= nil then
        price = math.floor(vehicleData.price/2)
        account.addMoney(price)
      end
    end)
    cb(true)
  elseif xPlayer.get('bank') >= vehicleData.price then
    xPlayer.removeBank(vehicleData.price)
    TriggerEvent('esx_addonaccount:getSharedAccount', 'society_'..xPlayer.job.name, function(account)
      if account ~= nil then
        price = math.floor(vehicleData.price/2)
        account.addMoney(price)
      end
    end)
    cb(true)
  else
    cb(false)
  end
end)

ESX.RegisterServerCallback('esx_jobvehicleshop:getPersonnalVehicles', function (source, cb)
  local xPlayer = ESX.GetPlayerFromId(source)

  MySQL.Async.fetchAll(
    'SELECT * FROM owned_job_vehicles WHERE owner = @owner AND job = @job',
    { ['@owner'] = xPlayer.identifier, ['@job'] = xPlayer.job.name },
    function (result)
      local vehicles = {}

      for i=1, #result, 1 do
        local vehicleData = json.decode(result[i].vehicle)
        table.insert(vehicles, vehicleData)
      end

      cb(vehicles)
    end
  )
end)

ESX.RegisterServerCallback('esx_jobvehicleshop:resellVehicle', function (source, cb, plate, price)
  MySQL.Async.fetchAll(
    'SELECT * FROM rented_vehicles WHERE plate = @plate LIMIT 1',
    { ['@plate'] = plate },
    function (result)
      if #result > 0 then
        cb(false)
      else
        local xPlayer = ESX.GetPlayerFromId(source)

        MySQL.Async.fetchAll(
          'SELECT * FROM owned_job_vehicles WHERE owner = @owner',
          { ['@owner'] = xPlayer.identifier },
          function (result)
            local found = false

            for i=1, #result, 1 do
              local vehicleProps = json.decode(result[i].vehicle)

              if vehicleProps.plate == plate then
                found = true
                break
              end
            end

            if found then
              xPlayer.addMoney(price)
              RemoveOwnedVehicle(plate)

              cb(true)
            else
              if xPlayer.job.grade_name == 'boss' then
                MySQL.Async.fetchAll(
                  'SELECT * FROM owned_job_vehicles WHERE owner = @owner',
                  { ['@owner'] = 'society:' .. xPlayer.job.name },
                  function (result)
                    local found = false

                    for i=1, #result, 1 do
                      local vehicleProps = json.decode(result[i].vehicle)

                      if vehicleProps.plate == plate then
                        found = true
                        break
                      end
                    end

                    if found then
                      xPlayer.addMoney(price)
                      RemoveOwnedVehicle(plate)

                      cb(true)
                    else
                      cb(false)
                    end
                  end
                )
              else
                cb(false)
              end
            end
          end
        )
      end
    end
  )
end)

if Config.EnableJvCommand then
  TriggerEvent('es:addCommand', 'jv', function (source, args, user)
    TriggerClientEvent('esx_jobvehicleshop:openPersonnalVehicleMenu', source)
  end, {help = "Spawnen eines Job-Fahrzeugs"})


  TriggerEvent('es:addGroupCommand', 'jvr', 'admin', function(source, args, user)
    
    TriggerClientEvent('esx_jobvehicleshop:openPersonnalVehicleMenuResetTimer', source)

  end, function(source, args, user)
    TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Insufficient Permissions.")
  end)
end
