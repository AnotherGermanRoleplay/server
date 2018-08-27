Config = {}
Config.DrawDistance = 100.0
Config.MarkerType = 1
Config.MarkerSize = { x = 1.5, y = 1.5, z = 1.0 }
Config.MarkerColor = { r = 50, g = 50, b = 204 }
Config.EnablePlayerManagement = true
Config.EnableArmoryManagement = false
Config.EnableESXIdentity = true -- only turn this on if you are using esx_identity
Config.EnableNonFreemodePeds = true -- turn this on if you want custom peds
Config.EnableSocietyOwnedVehicles = false
Config.EnableLicenses = true
Config.MaxInService = 8
Config.Locale = 'en'

-- Config.PoliceStations = {
Config.MafiaStations = {
  Mafia = {
    Blip = {
      Pos = { x = -1886.12, y = 2060.12, z = 139.98 },
      Sprite = 303,
      Display = 4,
      Scale = 1.2,
      Colour = 40,
    },
    AuthorizedWeapons = {
      { name = 'WEAPON_FLASHLIGHT', price = 80 },
      { name = 'WEAPON_NIGHTSTICK', price = 200 },
      { name = 'WEAPON_STUNGUN', price = 450 },
      { name = 'WEAPON_COMBATPISTOL', price = 450 },
      { name = 'WEAPON_FLARE', price = 300 },
      { name = 'WEAPON_FLAREGUN', price = 300 },
      { name = 'WEAPON_BZGAS', price = 750 },
      { name = 'WEAPON_PUMPSHOTGUN', price = 600 },
      { name = 'WEAPON_ASSAULTSMG', price = 1250 },
      { name = 'WEAPON_SMG_MK2', price = 1350 },
      { name = 'WEAPON_CARBINERIFLE', price = 1500 },
      { name = 'WEAPON_CARBINERIFLE_MK2', price = 1700 },
      { name = 'WEAPON_SPECIALCARBINE', price = 1800 },
      { name = 'WEAPON_SNIPERRIFLE', price = 1800 },
      { name = 'WEAPON_HEAVYSNIPER', price = 2500 },
      { name = 'GADGET_PARACHUTE', price = 1500 },
    },
    AuthorizedVehicles = {
      { name = 'w222wald', label = 'W 222 Wald' },
      { name = 'cls2015', label = 'CLS 63 AMG' },
      { name = 'lumma750', label = 'BMW 750' },
      { name = 'a8fsi', label = 'Audia A8 FSI' },
      { name = 'gle', label = 'GLE 63 AMG Coupé' },
      { name = 'rrphantom', label = 'Phantom VIII 2018' },
      { name = 'Wraith', label = 'Wraith' },
    },
    Armories = {
      { x = -1816.94, y = 2115.43, z = 139.52 },
    },
    Vehicles = {
      {
        Spawner = { x = -1934.68, y = 2087.17, z = 139.52 },
        SpawnPoint = { x = -1896.23, y = 2018.66, z = 139.83 },
        Heading = 180.0,
      }
    },
    Helicopters = {
      {
        Spawner = { x = -1932.34, y = 2130.27, z = 139.53 },
        SpawnPoint = { x = -1830.07, y = 2109.54, z = 140.80 },
        Heading = 0.0,
      }
    },
    VehicleDeleters = {
      { x = -1820.02, y = 2133.50, z = 139.52 },
      { x = -1889.87, y = 2045.75, z = 139.87 },
    },
    BossActions = {
      { x = -1926.14, y = 2099.52, z = 139.52 },
    }
  }
}
