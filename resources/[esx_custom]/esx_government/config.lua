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
      { name = 'fbi2', 	    label = 'Mercedes V-Klasse [R:1]',    rank = 1 },
      { name = 'sfum2',     label = 'CVPI [R:1]',                 rank = 1 },
      { name = 'lspd8',     label = 'BMW M5 [R:2]',               rank = 2 },
      { name = 'sheriff2',  label = 'BMW X5 [R:2]',               rank = 2 },
      { name = 'fbi',       label = 'Mercedes E63 [R:2]',         rank = 2 },
      { name = 'sfum1',     label = 'Chevrolet Tahoe [R:2]',      rank = 2 },
      { name = 'sspres',    label = 'Chevrolet Suburban [R:2]',   rank = 2 },
      { name = 'onebeast',  label = 'One Beast [R:2]',            rank = 2 }
    },

    Cloakrooms = {
      { x = -428.23330688477, y = 1060.6662597656, z = 322.64753417969 },
    },

    Armories = {
      { x = -461.39300537109, y = 1080.8347167969, z = 321.64732055664 },
    },

    Vehicles = {
      {
        Spawner    = { x = -423.72854614258, y = 1207.7795410156, z = 324.55830078125 },
        SpawnPoint = { x = -405.77001953125, y = 1229.8961181641, z = 324.44178466797 },
        Heading    = 162.0,
      }
    },

    Helicopters = {
      {
        Spawner    = { x = -444.92651367188, y = 1141.1663818359, z = 325.63358764648 },
        SpawnPoint = { x = -453.30426025391, y = 1143.5422363281, z = 325.63358764648 },
        Heading    = 251.5,
      }
    },

    VehicleDeleters = {
      { x = -382.88458251953, y = 1219.1340332031, z = 324.44178466797 }
    },

    BossActions = {
      { x = -435.37524414063, y = 1069.5850830078, z = 339.48133544922 }
    },

  },

}
