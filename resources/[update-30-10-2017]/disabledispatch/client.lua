Citizen.CreateThread(function()
	for i = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 do
		Citizen.InvokeNative(0xDC0F817884CDD856, i, false)
	end
end)


    --PoliceAutomobileDispatch = 1,
    --PoliceHelicopterDispatch = 2,
    --FireDepartmentDispatch = 3,
    --SwatAutomobileDispatch = 4,
    --AmbulanceDepartmentDispatch = 5,
    --PoliceRidersDispatch = 6,
    --PoliceVehicleRequest = 7,
    --PoliceRoadBlockDispatch = 8,
    --GangDispatch = 11,
    --SwatHelicopterDispatch = 12,
    --PoliceBoatDispatch = 13,
    --ArmyVehicleDispatch = 14,
    --BikerBackupDispatch = 15

    -- To disable multiple numbers at the same time, just put a comma, line 2 (ex : for i = 5, 6, 7 do)...

    -- List of native https://runtime.fivem.net/doc/reference.html#_0xDC0F817884CDD856
    -- Script : https://forum.fivem.net/t/release-disable-all-emergency-service-and-military-dispatching/23823