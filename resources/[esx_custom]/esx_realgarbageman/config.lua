Config              = {}
Config.DrawDistance = 100.0
Config.MaxDelivery	= 10
Config.TruckPrice	= 100
Config.Locale       = 'de'

Config.Trucks = {
	"trash",
	"trash2"
}

Config.Cloakroom = {
	CloakRoom = {
			Pos   = { x = -429.17434692383, y = -1727.9896240234, z = 18.783836364746 },
			Size  = {x = 3.0, y = 3.0, z = 1.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1
		},
}

Config.Zones = {
	VehicleSpawner = {
			Pos   = { x = -441.96520996094, y = -1697.4591064453, z = 17.941474914551 },
			Size  = {x = 3.0, y = 3.0, z = 1.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1
		},

	VehicleSpawnPoint = {
			Pos   = { x = -458.17056274414, y = -1713.9943847656, z = 17.640628814697 },
			Size  = {x = 3.0, y = 3.0, z = 1.0},
			Type  = -1
		},
}

Config.Livraison = {
-------------------------------------------Los Santos
	-- Strawberry avenue et Davis avenue
	Delivery1LS = {
			Pos   = {x = 377.1493, y = 433.8024, z = 143.0},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 150
		},
	-- a coté des flic
	Delivery2LS = {
			Pos   = {x = 361.2759, y = 439.0827, z = 143.9},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 200
		},
	-- vers la plage
	Delivery3LS = {
			Pos   = {x = 112.2643, y = 569.3325, z = 181.8},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 250
		},
	-- studio 1
	Delivery4LS = {
			Pos   = {x = -188.9956, y = 502.7683, z = 133.4},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 300
		},
	-- popular street et el rancho boulevard
	Delivery5LS = {
			Pos   = {x = -682.8948, y = 606.8768, z = 142.9},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 350
		},
	--Alta street et las lagunas boulevard
	Delivery6LS = {
			Pos   = {x = -753.1247, y = 634.3936, z = 141.4},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 150
		},
	--Rockford Drive Noth et boulevard del perro
	Delivery7LS = {
			Pos   = {x = -872.1888, y = 700.3489, z = 148.5},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 200
		},
	--Rockford Drive Noth et boulevard del perro
	Delivery8LS = {
			Pos   = {x = -1258.5366, y = 460.4249, z = 93.0},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 250
		},
	--New empire way (airport)
	Delivery9LS = {
			Pos   = {x = -783.8108, y = 356.4823, z = 86.8},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 300
		},
	--Rockford drive south
	Delivery10LS = {
			Pos   = {x = -639.0473, y = 57.2426, z = 43.0},
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 350
		},
------------------------------------------- Blaine County
	-- panorama drive
	Delivery1BC = {
			Pos   = { x = -1542.0269, y = -565.0408, z = 32.6 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 300
		},
	-- route 68
	Delivery2BC = {
			Pos   = { x = -1504.0362, y = -513.3822, z = 31.8 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 350
		},
	-- Algonquin boulevard et cholla springs avenue
	Delivery3BC = {
			Pos   = { x = -1392.4261, y = -446.1357, z = 33.4 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 400
		},
	-- Joshua road
	Delivery4BC = {
			Pos   = { x = -870.8645, y = -373.4924, z = 38.2 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 450
		},
	-- East joshua road
	Delivery5BC = {
			Pos   = { x = -46.1748, y = -762.3884, z = 31.8 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 500
		},
	-- Seaview road
	Delivery6BC = {
			Pos   = { x = -23.7449, y = -625.1749, z = 34.6 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 300
		},
	-- Paleto boulevard
	Delivery7BC = {
			Pos   = { x = 262.2975, y = -1119.4555, z = 28.3 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 350
		},
	-- Paleto boulevard et Procopio drive
	Delivery8BC = {
			Pos   = { x = 470.0793, y = -1023.4085, z = 27.2 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 400
		},
	-- Marina drive et joshua road
	Delivery9BC = {
			Pos   = { x = -362.0739, y = -146.5872, z = 37.2 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 450
		},
	-- Pyrite Avenue
	Delivery10BC = {
			Pos   = { x = -683.1820, y = -881.4190, z = 23.5 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 500
		},
	
	RetourCamion = {
			Pos   = { x = -450.87258911133, y = -1692.2984619141, z = 17.950969696045 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 0
		},
	
	AnnulerMission = {
			Pos   = { x = -468.53598022461, y = -1719.5186767578, z = 17.683155059814 },
			Color = {r = 204, g = 204, b = 0},
			Size  = {x = 5.0, y = 5.0, z = 3.0},
			Color = {r = 204, g = 204, b = 0},
			Type  = 1,
			Paye = 0
		},
}
