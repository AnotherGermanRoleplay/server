-- Huge server file.

local interiors = {
	[1] = { ["xe"] = 425.818725585938, ["ye"] = -972.795227050781, ["ze"] = 30.7093944549561, ["he"] = 321.7075, ["xo"] = 426.540893554688, ["yo"] = -981.741760253906, ["zo"] = 30.7099342346191, ["ho"] = 234.62, ["name"] = 'Testing Police Office'},
}

RegisterServerEvent("interiors:sendData_s")
AddEventHandler("interiors:sendData_s", function()
    TriggerClientEvent("interiors:f_sendData", source, interiors)
end)
