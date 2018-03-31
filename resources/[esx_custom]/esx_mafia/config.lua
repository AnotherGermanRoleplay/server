Config                            = {}
Config.DrawDistance               = 100.0
Config.MarkerType                 = 1
Config.MarkerSize                 = { x = 1.5, y = 1.5, z = 1.0 }
Config.MarkerColor                = { r = 50, g = 50, b = 204 }
Config.EnablePlayerManagement     = true
Config.EnableArmoryManagement     = false
Config.EnableESXIdentity          = true -- only turn this on if you are using esx_identity
Config.EnableNonFreemodePeds      = true -- turn this on if you want custom peds
Config.EnableSocietyOwnedVehicles = false
Config.EnableLicenses             = true
Config.MaxInService               = -1
Config.Locale                     = 'en'

Config.Bosses = {
  "steam:110000106abab10",
  "steam:11000011201aa78"
}

Config.MafiaStations = {

  Mafia = {

    Blip = {
      Pos     = { x = -1886.1246337891, y = 2060.1286621094, z = 139.98597717285 },
      Sprite  = 303,
      Display = 4,
      Scale   = 1.2,
      Colour  = 40,
    },

    AuthorizedWeapons = {
      { name = 'WEAPON_COMBATPISTOL',     price = 300 },
      { name = 'WEAPON_PUMPSHOTGUN',      price = 600 },
      { name = 'WEAPON_STUNGUN',          price = 50 },
      { name = 'WEAPON_FLASHLIGHT',       price = 80 },
      -- { name = 'WEAPON_FIREEXTINGUISHER', price = 0 },
      { name = 'WEAPON_FLAREGUN',         price = 60 },
      { name = 'GADGET_PARACHUTE',        price = 300 },
    },

	-- The Vehicles will be available by cop rank
	-- recruit = 0
	-- patrol = 1
	-- detective = 2
	-- sergeant = 3
	-- lieutenant = 4
	-- captain = 5
	-- boss = 6
    AuthorizedVehicles = {
      { name = 'schafter2', label = 'Undercover [R:0]', rank = 0 },
      { name = 'kuruma',    label = 'Kuruma [R:0]',     rank = 0 },
      { name = 'sandking',  label = 'Sandking [R:1]',   rank = 1 },
      { name = 'mule3',     label = 'Laster [R:1]',     rank = 1 },
      { name = 'guardian',  label = 'Guardian [R:2]',   rank = 2 },
      { name = 'burrito3', 	label = 'Van [R:2]',        rank = 2 },
      { name = 'mesa',      label = 'Jeep [R:3]',       rank = 3 },
      { name = 'stretch',   label = 'Limo [R:3]',       rank = 3 }
    },

    Armories = {
      { x = -1816.9476318359, y = 2115.431640625, z = 139.5288848877 },
    },

    Vehicles = {
      {
        Spawner    = { x = -1934.6804199219, y = 2087.171875, z = 139.52890014648 },
        SpawnPoint = { x = -1896.2322998047, y = 2018.6697998047, z = 139.83227539063 },
        Heading    = 180.0,
      }
    },

    Helicopters = {
      {
        Spawner    = { x = -1932.3415527344, y = 2130.2729492188, z = 139.5345916748 },
        SpawnPoint = { x = -1830.0762939453, y = 2109.5405273438, z = 140.80242919922 },
        Heading    = 0.0,
      }
    },

    VehicleDeleters = {
      { x = -1820.0257568359, y = 2133.5070800781, z = 139.52871704102 },
      { x = -1889.8702392578, y = 2045.7532958984, z = 139.87413024902 },
    },

    BossActions = {
      { x = -1926.1439208984, y = 2099.5205078125, z = 139.52871704102 }
    },

  },

}
