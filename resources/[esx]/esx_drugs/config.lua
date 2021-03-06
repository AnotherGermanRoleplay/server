Config              = {}
Config.MarkerType   = 1
Config.DrawDistance = 100.0
Config.ZoneSize     = {x = 5.0, y = 5.0, z = 3.0}
--Config.MarkerColor  = {r = 100, g = 204, b = 100}
Config.RequiredCopsCoke = 2 -- 2 -- 1
Config.RequiredCopsMeth = 1 -- 2 -- 2
Config.RequiredCopsWeed = 0 -- 0 -- 0
Config.RequiredCopsOpium = 2 -- 3 -- 3
Config.Locale = 'de'


-- Config.Zones = {
	-- CokeFarm = 		 {x=2448.9228515625,  y=-1836.8076171875, z=51.953701019287},
	-- CokeTreatment =  {x=-458.13967895508, y=-2278.6174316406, z=7.5158290863037},
	-- CokeResell = 	 {x=-1756.1984863281, y=427.31674194336,  z=126.68292999268},
	-- MethFarm = 		 {x=1525.298828125, 	 y=1710.0217285156,  z=109.00956726074},
	-- MethTreatment =  {x=-1001.4151611328, y=4848.0087890625,  z=274.00686645508},
	-- MethResell = 	 {x=-63.592178344727, y=-1224.0709228516, z=27.768648147583},
	-- WeedFarm = 		 {x=1609.125, 		 y=6663.5942382813,  z=20.961572647095},
	-- WeedTreatment =  {x=91.061386108398,  y=3750.0380859375,  z=39.77326965332},
	-- WeedResell = 	 {x=-54.249694824219, y=-1443.3666992188, z=31.068626403809},
	-- OpiumFarm = 	 {x=1972.784790039,	 y=3819.3999023438,  z=33.428722381592},
	-- OpiumTreatment = {x=971.86499023438,y=-2157.61328125, z=28.475107192994},
	-- OpiumResell = 	 {x=2331.0881347656,y=2570.2250976562,z=46.681819915772}
-- }

Config.Zones = {
	-- CokeFarm = 		 {x=2287.5656738281,  y=4765.6552734375, z=38.632804870605}, -- v1 spot
	CokeFarm = 		 { x = 1911.0610351563, y = 4890.9775390625, z = 47.684661865234 }, -- spot 1 new
	CokeTreatment =  {x=2434.3010253906, y=4968.7905273438, z=42.34761428833},
	-- CokeResell = 	 {x=-1756.1984863281, y=427.31674194336,  z=126.68292999268}, -- v1 spot
	-- CokeResell = 	 { x = 726.80798339844, y = 4168.9750976563, z = 40.709239959717 }, -- spot 1 new
	CokeResell = 	 { x = -440.79693603516, y = 1070.66796875, z = 332.01019287109 }, -- spot 2 new

	-- MethFarm = 		 {x=412.60940551758, y=6604.33984375, z=27.425922393799}, -- v1 spot
	MethFarm = 		 { x = 412.88208007813, y = 6495.6650390625, z = 28.093534469604 }, -- spot 1 new
	MethTreatment =  {x=1389.3192138672, y=3604.7277832031,  z=38.941883087158},
	-- MethResell = 	 {x=-63.592178344727, y=-1224.0709228516, z=27.768648147583}, -- v1 spot
	-- MethResell = 	 { x = 84.77751159668, y = 3718.1535644531, z = 40.334804534912 }, -- spot 1 new
	MethResell = 	 { x = 870.54699707031, y = -2311.705078125, z = 30.570415496826 }, -- spot 2 new

	WeedFarm = 		 {x=2210.7202148438, y=5578.0078125,  z=53.897754669189},
	WeedTreatment =  { x = 2195.4323730469, y = 5600.2338867188, z = 53.663356781006 }, -- spot 1 new
	-- WeedTreatment =  {x=-471.40591430664, y=6287.4848632813, z=13.713069915771}, -- v1 spot
	-- WeedResell = 	 {x=-57.809589385986, y=-1531.7004394531, z=33.3620262146}, -- v1 spot
	WeedResell = 	 { x = -1602.716796875, y = 5193.69921875, z = 4.3100929260254 }, -- spot 1 new

	 OpiumFarm = 	 {x=-102.19829559326, y=1909.9090576172, z=196.96278381348}, -- v1 spot
	-- OpiumFarm = 	 { x = 356.46194458008, y = 6469.7172851563, z = 30.084701538086 }, -- spot 1 new
	OpiumTreatment = {x=-98.670524597168, y=6205.1010742188, z=31.025020599365},
	OpiumResell = 	 {x=2331.0881347656, y=2570.2250976562, z=46.681819915772} -- v1 spot
	-- OpiumResell = 	 { x = 1241.384765625, y = -417.15054321289, z = 71.578498840332 }, -- spot 1 new
}

Config.Prices = {
	Coke = {
		cops0 = 198,
		cops1 = 258,
		cops2 = 308,
		cops3 = 458,
		cops4 = 596,
		cops5 = 628
	},
	Meth = {
		cops0 = 226,
		cops1 = 324,
		cops2 = 424,
		cops3 = 502,
		cops4 = 566,
		cops5 = 604,
		cops6 = 700
	},
	Weed = {
		cops0 = 98,
		cops1 = 178,
		cops2 = 222,
		cops3 = 375,
		cops4 = 410
	},
	Opium = {
		cops0 = 300,
		cops1 = 500,
		cops2 = 700,
		cops3 = 800,
		cops4 = 900,
		cops5 = 1000,
		cops6 = 2500
	}
}
