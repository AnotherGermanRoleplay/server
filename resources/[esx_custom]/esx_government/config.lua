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

Config.GovernmentStations = {

  Government = {
    Blip = {
      Pos     = { x = 906.78900146484, y = 1252.9321289063, z = 366.11929321289 },
      Sprite  = 303,
      Display = 4,
      Scale   = 1.2,
      Colour  = 40,
    },

    AuthorizedWeapons = {
      { name = 'WEAPON_FLASHLIGHT',     price = 80 },
      { name = 'WEAPON_HANDCUFFS',      price = 100 },
      { name = 'WEAPON_NIGHTSTICK',     price = 200 },
      { name = 'WEAPON_STUNGUN',        price = 450 },
      { name = 'WEAPON_COMBATPISTOL',   price = 450 },
      { name = 'WEAPON_FLARE',     		price = 300 },
      { name = 'WEAPON_FLAREGUN',     	price = 300 },
      { name = 'WEAPON_BZGAS',       	price = 750 },
      { name = 'WEAPON_PUMPSHOTGUN',    price = 600 },
      { name = 'WEAPON_ASSAULTSMG',     price = 1250 },
      { name = 'WEAPON_CARBINERIFLE',   price = 1500 },
      { name = 'WEAPON_SNIPERRIFLE',    price = 1800 },
      { name = 'WEAPON_SPECIALCARBINE',    price = 1800 },
      { name = 'WEAPON_BULLPUPRIFLE',    price = 1800 },
      { name = 'WEAPON_HEAVYSHOTGUN',    price = 1800 },
      { name = 'WEAPON_MARKSMANRIFLE',    price = 1800 },
      { name = 'WEAPON_COMBATPDW',    price = 1800 },
      { name = 'WEAPON_MACHINEPISTOL',    price = 1800 },
      { name = 'GADGET_PARACHUTE',      price = 1500 },
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
      { name = 'fbi2', 	label = 'Mercedes Vito [R:1]',        rank = 1 },
      { name = 'fbi',      label = 'BMW M5 [R:1]',       rank = 1 },
      { name = 'schafter2', label = 'Undercover [R:2]', rank = 2 },
      { name = 'kuruma',    label = 'Kuruma [R:2]',     rank = 2 },
      { name = 'sandking',  label = 'Sandking [R:2]',   rank = 2 },
      { name = 'mule3',     label = 'Laster [R:2]',     rank = 2 },
      { name = 'guardian',  label = 'Guardian [R:2]',   rank = 2 },
      { name = 'stretch',   label = 'Limo [R:2]',       rank = 2 }
    },

    Cloakrooms = {
      { x = 926.4970703125, y = 1238.0355224609, z = 365.01956787109 },
    },

    Armories = {
      { x = 930.03063964844, y = 1259.7661132813, z = 365.0194152832 },
    },

    Vehicles = {
      {
        Spawner    = { x = 922.13653564453, y = 1247.3802490234, z = 361.00925292969 },
        SpawnPoint = { x = 912.11285400391, y = 1250.9367675781, z = 361.00925292969 },
        Heading    = 180.0,
      }
    },

    Helicopters = {
      {
        Spawner    = { x = 752.5517578125, y = 1285.8754882813, z = 359.196875 },
        SpawnPoint = { x = 737.70770263672, y = 1294.5115966797, z = 359.1961730957 },
        Heading    = 0.0,
      }
    },

    VehicleDeleters = {
      { x = 913.625244140639, y = 1266.6430664063, z = 361.00952758789 }
    },

    BossActions = {
      { x = 939.99279785156, y = 1249.5911865234, z = 365.01959838867 }
    },

  },

}
