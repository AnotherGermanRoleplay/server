Config.Jobs.muellmann = {
  BlipInfos = {
    Sprite = 318,
    Color = 21
  },
  Vehicles = {
    Truck = {
      Spawner = 1,
      Hash = "trash2",
      Trailer = "none",
      HasCaution = true
    }
  },
  Zones = {
    CloakRoom = {
      Pos   = {x = -573.14, y = -1605.683, z = 26.01},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Color = {r = 204, g = 204, b = 104},
      Marker= 1,
      Blip  = true,
      Name  = _U('mm_locker_room'),
      Type  = "cloakroom",
      Hint  = _U('cloak_change'),
      GPS = {x = -573.14, y = -1605.683, z = 27.01}
    },

    Muell1 = {
      Pos   = {x = -146.30305480957, y = -1465.8724365234, z = 32.468318939209},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Color = {r = 204, g = 204, b = 0},
      Marker= 1,
      Blip  = true,
      Name  = _U('mm_mapblip1'),
      Type  = "work",
      Item  = {
        {
          name   = _U('mm_trash_1'),
          db_name= "trash1",
          time   = 3000,
          max    = 20,
          add    = 1,
          remove = 1,
          requires = "nothing",
          requires_name = "Nothing",
          drop   = 100
        }
      },
      Hint  = _U('mm_pickup')
    },

    Muell2 = {
      Pos   = {x = -1506.6589355469, y = -199.62753295898, z = 50.101055145264},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Color = {r = 204, g = 204, b = 0},
      Marker= 1,
      Blip  = true,
      Name  = _U('mm_mapblip2'),
      Type  = "work",
      Item  = {
        {
          name   = _U('mm_trash_2'),
          db_name= "trash2",
          time   = 5000,
          max    = 20,
          add    = 1,
          remove = 1,
          requires = "trash1",
          requires_name = _U('mm_trash_1'),
          drop   = 100
        }
      },
      Hint  = _U('mm_pickup')
    },
  
    Muell3 = {
      Pos   = {x = -1377.6395263672, y = -640.10205078125, z = 26.957704544067},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Color = {r = 204, g = 204, b = 0},
      Marker= 1,
      Blip  = true,
      Name  = _U('mm_mapblip3'),
      Type  = "work",
      Item  = {
        {
          name   = _U('mm_trash_3'),
          db_name= "trash3",
          time   = 6000,
          max    = 20,
          add    = 1,
          remove = 1,
          requires = "trash2",
          requires_name = _U('mm_trash_2'),
          drop   = 100
        }
      },
      Hint  = _U('mm_pickup')
    },

    VehicleSpawner = {
      Pos   = {x = -580.10974121094, y = -1612.1303710938, z = 26.010812759399},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Color = {r = 204, g = 204, b = 0},
      Marker= 1,
      Blip  = false,
      Name  = _U('spawn_veh'),
      Type  = "vehspawner",
      Spawner = 1,
      Hint  = _U('spawn_veh_button'),
      Caution = 100
    },

    VehicleSpawnPoint = {
      Pos   = {x = -617.69866943359, y = -1597.7618408203, z = 25.751012802124},
      Size  = {x = 3.0, y = 3.0, z = 1.0},
      Marker= -1,
      Blip  = false,
      Name  = _U('service_vh'),
      Type  = "vehspawnpt",
      Spawner = 1,
      Heading = 285.1
    },

    VehicleDeletePoint = {
      Pos   = {x = -586.87097167969, y = -1590.0478515625, z = 25.75114440918},
      Size  = {x = 5.0, y = 5.0, z = 1.0},
      Color = {r = 255, g = 0, b = 0},
      Marker= 1,
      Blip  = false,
      Name  = _U('return_vh'),
      Type  = "vehdelete",
      Hint  = _U('return_vh_button'),
      Spawner = 1,
      Caution = 100,
      GPS = 0,
      Teleport = 0
    },

    Delivery = {
      Pos   = {x = -474.36764526367, y = -1671.8930664063, z = 17.546991348267},
      Color = {r = 204, g = 204, b = 0},
      Size  = {x = 5.0, y = 5.0, z = 3.0},
      Marker= 1,
      Blip  = true,
      Name  = _U('delivery_point'),
      Type  = "delivery",
      Spawner = 1,
      Item  = {
        {
          name   = _U('delivery'),
          time   = 500,
          remove = 1,
          max    = 20, -- if not present, probably an error at itemQtty >= item.max in esx_jobs_sv.lua
          price  = 53,
          requires = "trash3",
          requires_name = _U('mm_trash3'),
          drop   = 100
        }
      },
      Hint  = _U('mm_deliver_button')
    }
  }
}
