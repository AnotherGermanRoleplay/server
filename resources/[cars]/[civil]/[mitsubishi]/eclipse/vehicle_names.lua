function AddTextEntry(key, value)
	Citizen.InvokeNative(GetHashKey("ADD_TEXT_ENTRY"), key, value)
end

Citizen.CreateThread(function()
  AddTextEntry('0x5F8F10B7', 'Eclipse GSX')
  AddTextEntry('0x82C4C10E', 'Mitsubishi')
end)