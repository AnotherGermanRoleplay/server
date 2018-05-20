-- Huge server file.

local interiors = {
	[1] = { ["xe"] = -429.267578125, ["ye"] = 1110.5731201172, ["ze"] = 326.48231201172, ["he"] = 343, ["xo"] = -438.52435302734, ["yo"] = 1076.0909423828, ["zo"] = 339.48087768555, ["ho"] = 168.2, ["name"] = 'Büro der Presidenten'},
    [2] = { ["xe"] = -444.62847900391, ["ye"] = 1068.0081787109, ["ze"] = 339.47175292969, ["he"] = 312, ["xo"] = -437.45629882813, ["yo"] = 1077.8905029297, ["zo"] = 330.87821655273, ["ho"] = 162.7, ["name"] = 'Büro der Presidenten'},

}

RegisterServerEvent("interiors:sendData_s")
AddEventHandler("interiors:sendData_s", function()
    TriggerClientEvent("interiors:f_sendData", source, interiors)
end)
