const _i = Citizen.pointerValueInt();
const _f = Citizen.pointerValueFloat();
const _v = Citizen.pointerValueVector();
const _r = Citizen.returnResultAnyway();
const _ri = Citizen.resultAsInteger();
const _rf = Citizen.resultAsFloat();
const _s = Citizen.resultAsString();
const _rv = Citizen.resultAsVector();
const _ro = Citizen.resultAsObject();
const _in = Citizen.invokeNative;
const _ii = Citizen.pointerValueIntInitialized;
const _fi = Citizen.pointerValueFloatInitialized;
function _ch(hash) {
	if (typeof hash === 'string') {
		return window.GetHashKey(hash);
	}

	return hash;
}

function _ts(num) {
	if (num == 0 || !num) { // workaround for users calling string parameters with '0', also nil being translated
		return null;
	}
	return num.toString();
}
function _fv(flt) {
	return flt + 0.0000001;
}

function _mfr(fn) {
	return Citizen.makeRefFunction(fn);
}

const _ENV = null;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
window.AddMinimapOverlay = function (name) {
	return _in("0x4afd2499", _ts(name), _r, _ri);
};

window.AddTextEntry = function (entryKey, entryText) {
	return _in("0x32ca01c3", _ts(entryKey), _ts(entryText));
};

window.AddTextEntryByHash = function (entryKey, entryText) {
	return _in("0x289da860", _ch(entryKey), _ts(entryText));
};

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
window.CallMinimapScaleformFunction = function (miniMap, fnName) {
	return _in("0x4c89c0ed", miniMap, _ts(fnName), _r);
};

/**
 * Cancels the currently executing event. See https://wiki.fivem.net/wiki/CancelEvent
 */
window.CancelEvent = function () {
	return _in("0xfa29d35d");
};

window.DeleteFunctionReference = function (referenceIdentity) {
	return _in("0x1e86f206", _ts(referenceIdentity));
};

window.DeleteResourceKvp = function (key) {
	return _in("0x7389b5df", _ts(key));
};

window.DuplicateFunctionReference = function (referenceIdentity) {
	return _in("0xf4e2079d", _ts(referenceIdentity), _r, _s);
};

window.EndFindKvp = function (handle) {
	return _in("0xb3210203", handle);
};

window.EndFindObject = function (findHandle) {
	return _in("0xdeda4e50", findHandle);
};

window.EndFindPed = function (findHandle) {
	return _in("0x9615c2ad", findHandle);
};

window.EndFindPickup = function (findHandle) {
	return _in("0x3c407d53", findHandle);
};

window.EndFindVehicle = function (findHandle) {
	return _in("0x9227415a", findHandle);
};

window.ExecuteCommand = function (commandString) {
	return _in("0x561c060b", _ts(commandString));
};

/**
 * This native is not implemented.
 */
window.ExperimentalLoadCloneCreate = function (data, objectId, tree) {
	return _in("0xd2cb95a3", _ts(data), objectId, _ts(tree), _r, _ri);
};

/**
 * This native is not implemented.
 */
window.ExperimentalLoadCloneSync = function (entity, data) {
	return _in("0x6bc189ac", entity, _ts(data));
};

/**
 * This native is not implemented.
 */
window.ExperimentalSaveCloneCreate = function (entity) {
	return _in("0x9d65cad2", entity, _r, _s);
};

/**
 * This native is not implemented.
 */
window.ExperimentalSaveCloneSync = function (entity) {
	return _in("0x38d19210", entity, _r, _s);
};

window.FindFirstObject = function (outEntity) {
	return _in("0xfaa6cb5d", _ii(outEntity) /* may be optional */, _r, _ri);
};

window.FindFirstPed = function (outEntity) {
	return _in("0xfb012961", _ii(outEntity) /* may be optional */, _r, _ri);
};

window.FindFirstPickup = function (outEntity) {
	return _in("0x3ff9d340", _ii(outEntity) /* may be optional */, _r, _ri);
};

window.FindFirstVehicle = function (outEntity) {
	return _in("0x15e55694", _ii(outEntity) /* may be optional */, _r, _ri);
};

window.FindKvp = function (handle) {
	return _in("0xbd7bebc5", handle, _r, _s);
};

window.FindNextObject = function (findHandle, outEntity) {
	return _in("0x4e129dbf", findHandle, _ii(outEntity) /* may be optional */, _r);
};

window.FindNextPed = function (findHandle, outEntity) {
	return _in("0xab09b548", findHandle, _ii(outEntity) /* may be optional */, _r);
};

window.FindNextPickup = function (findHandle, outEntity) {
	return _in("0x4107ef0f", findHandle, _ii(outEntity) /* may be optional */, _r);
};

window.FindNextVehicle = function (findHandle, outEntity) {
	return _in("0x8839120d", findHandle, _ii(outEntity) /* may be optional */, _r);
};

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
window.GetCamMatrix = function (camera) {
	return _in("0x8f57a89d", camera, _v, _v, _v, _v);
};

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
window.GetCurrentResourceName = function () {
	return _in("0xe5e9ebbb", _r, _s);
};

window.GetInstanceId = function () {
	return _in("0x9f1c4383", _r, _ri);
};

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
window.GetNumResourceMetadata = function (resourceName, metadataKey) {
	return _in("0x776e864", _ts(resourceName), _ts(metadataKey), _r, _ri);
};

window.GetNumResources = function () {
	return _in("0x863f27b", _r, _ri);
};

window.GetPlayerFromServerId = function (serverId) {
	return _in("0x344ea166", serverId, _r, _ri);
};

window.GetPlayerServerId = function (player) {
	return _in("0x4d97bcc7", player, _r, _ri);
};

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist"
 * },
 * {
 * "name": "command1"
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
window.GetRegisteredCommands = function () {
	return window.msgpack_unpack(_in("0xd4bef069", _r, _ro));
};

window.GetResourceByFindIndex = function (findIndex) {
	return _in("0x387246b7", findIndex, _r, _s);
};

window.GetResourceKvpFloat = function (key) {
	return _in("0x35bdceea", _ts(key), _r, _rf);
};

window.GetResourceKvpInt = function (key) {
	return _in("0x557b586a", _ts(key), _r, _ri);
};

window.GetResourceKvpString = function (key) {
	return _in("0x5240da5a", _ts(key), _r, _s);
};

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 * @param resourceName The resource name.
 */
window.GetResourceMetadata = function (resourceName, metadataKey, index) {
	return _in("0x964bab1d", _ts(resourceName), _ts(metadataKey), index, _r, _s);
};

window.GetVehicleAcceleration = function (vehicle) {
	return _in("0x478321", vehicle, _r, _rf);
};

window.GetVehicleAlarmTimeLeft = function (vehicle) {
	return _in("0xc62aac98", vehicle, _r, _ri);
};

window.GetVehicleClutch = function (vehicle) {
	return _in("0x1dad4583", vehicle, _r, _rf);
};

window.GetVehicleCurrentGear = function (vehicle) {
	return _in("0xb4f4e566", vehicle, _r, _ri);
};

window.GetVehicleCurrentRpm = function (vehicle) {
	return _in("0xe7b12b54", vehicle, _r, _rf);
};

window.GetVehicleDashboardSpeed = function (vehicle) {
	return _in("0x9aad420e", vehicle, _r, _rf);
};

window.GetVehicleEngineTemperature = function (vehicle) {
	return _in("0xf4f495cb", vehicle, _r, _rf);
};

window.GetVehicleFuelLevel = function (vehicle) {
	return _in("0x5f739bb8", vehicle, _r, _rf);
};

window.GetVehicleGravityAmount = function (vehicle) {
	return _in("0xb48a1292", vehicle, _r, _rf);
};

window.GetVehicleHandbrake = function (vehicle) {
	return _in("0x483b013c", vehicle, _r);
};

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return A floating-point value.
 */
window.GetVehicleHandlingFloat = function (vehicle, _class, fieldName) {
	return _in("0x642fc12f", vehicle, _ts(_class), _ts(fieldName), _r, _rf);
};

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
window.GetVehicleHandlingInt = function (vehicle, _class, fieldName) {
	return _in("0x27396c75", vehicle, _ts(_class), _ts(fieldName), _r, _ri);
};

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
window.GetVehicleHandlingVector = function (vehicle, _class, fieldName) {
	return _in("0xfb341304", vehicle, _ts(_class), _ts(fieldName), _r, _rv);
};

window.GetVehicleHighGear = function (vehicle) {
	return _in("0xf1d1d689", vehicle, _r, _rf);
};

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
window.GetVehicleIndicatorLights = function (vehicle) {
	return _in("0x83070354", vehicle, _r, _ri);
};

window.GetVehicleNextGear = function (vehicle) {
	return _in("0xddb298ae", vehicle, _r, _ri);
};

window.GetVehicleNumberOfWheels = function (vehicle) {
	return _in("0xedf4b0fc", vehicle, _r, _ri);
};

window.GetVehicleOilLevel = function (vehicle) {
	return _in("0xfc7f8ef4", vehicle, _r, _rf);
};

window.GetVehicleSteeringAngle = function (vehicle) {
	return _in("0x1382fcea", vehicle, _r, _rf);
};

window.GetVehicleSteeringScale = function (vehicle) {
	return _in("0x954465de", vehicle, _r, _rf);
};

window.GetVehicleTurboPressure = function (vehicle) {
	return _in("0xe02b51d7", vehicle, _r, _rf);
};

window.GetVehicleWheelHealth = function (vehicle, wheelIndex) {
	return _in("0x54a677f5", vehicle, wheelIndex, _r, _rf);
};

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
window.GetVehicleWheelSpeed = function (vehicle, wheelIndex) {
	return _in("0x149c9da0", vehicle, wheelIndex, _r, _rf);
};

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
window.GetVehicleWheelXOffset = function (vehicle, wheelIndex) {
	return _in("0xcc90cbca", vehicle, wheelIndex, _r, _rf);
};

window.GetVehicleWheelXrot = function (vehicle, wheelIndex) {
	return _in("0x15ecc0ab", vehicle, wheelIndex, _r, _rf);
};

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
window.HasMinimapOverlayLoaded = function (id) {
	return _in("0xf7535f32", id, _r);
};

window.InvokeFunctionReference = function (referenceIdentity, argsSerialized, argsLength, retvalLength) {
	return _in("0xe3551879", _ts(referenceIdentity), _ts(argsSerialized), argsLength, _ii(retvalLength) /* may be optional */, _r, _s);
};

window.IsAceAllowed = function (object) {
	return _in("0x7ebb9929", _ts(object), _r);
};

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
window.IsDuplicityVersion = function () {
	return _in("0xcf24c52e", _r);
};

window.IsVehicleAlarmSet = function (vehicle) {
	return _in("0xdc921211", vehicle, _r);
};

window.IsVehicleEngineStarting = function (vehicle) {
	return _in("0xbb340d04", vehicle, _r);
};

window.IsVehicleInteriorLightOn = function (vehicle) {
	return _in("0xa411f72c", vehicle, _r);
};

window.IsVehicleNeedsToBeHotwired = function (vehicle) {
	return _in("0xf9933bf4", vehicle, _r);
};

window.IsVehiclePreviouslyOwnedByPlayer = function (vehicle) {
	return _in("0xf849ed67", vehicle, _r);
};

window.IsVehicleWanted = function (vehicle) {
	return _in("0xa7daf7c", vehicle, _r);
};

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
window.LoadResourceFile = function (resourceName, fileName) {
	return _in("0x76a9ee1f", _ts(resourceName), _ts(fileName), _r, _s);
};

window.RegisterCommand = function (commandName, handler, restricted) {
	return _in("0x5fa79b0f", _ts(commandName), _mfr(handler), restricted);
};

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
window.RegisterFontFile = function (fileName) {
	return _in("0x1b3a363", _ts(fileName));
};

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET\_TEXT\_FONT](#_0x66E0276CC5F6B9DA) and similar natives.
 */
window.RegisterFontId = function (fontName) {
	return _in("0xacf6d8ee", _ts(fontName), _r, _ri);
};

window.RegisterNuiCallbackType = function (callbackType) {
	return _in("0xcd03cda9", _ts(callbackType));
};

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
window.SendLoadingScreenMessage = function (jsonString) {
	return _in("0x8bbe6cc0", _ts(jsonString), _r);
};

window.SendNuiMessage = function (jsonString) {
	return _in("0x78608acb", _ts(jsonString), _r);
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetHandlingField = function (vehicle, _class, fieldName, value) {
	return _in("0xfe8064e3", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The floating-point value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetHandlingFloat = function (vehicle, _class, fieldName, value) {
	return _in("0x90dd01c", _ts(vehicle), _ts(_class), _ts(fieldName), _fv(value));
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param value The integer value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetHandlingInt = function (vehicle, _class, fieldName, value) {
	return _in("0x8ab3f46c", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param value The Vector3 value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetHandlingVector = function (vehicle, _class, fieldName, value) {
	return _in("0x7f9d543", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
window.SetManualShutdownLoadingScreenNui = function (manualShutdown) {
	return _in("0x1722c938", manualShutdown);
};

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 * @param xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 */
window.SetMinimapOverlayDisplay = function (miniMap, x, y, xScale, yScale, alpha) {
	return _in("0x6a48b3ca", miniMap, _fv(x), _fv(y), _fv(xScale), _fv(yScale), _fv(alpha));
};

window.SetModelHeadlightConfiguration = function (modelHash, ratePerSecond, headlightRotation, invertRotation) {
	return _in("0x7f6b8d75", _ch(modelHash), _fv(ratePerSecond), _fv(headlightRotation), invertRotation);
};

window.SetNuiFocus = function (hasFocus, hasCursor) {
	return _in("0x5b98ae30", hasFocus, hasCursor);
};

window.SetResourceKvp = function (key, value) {
	return _in("0x21c7a35b", _ts(key), _ts(value));
};

window.SetResourceKvpFloat = function (key, value) {
	return _in("0x9add2938", _ts(key), _fv(value));
};

window.SetResourceKvpInt = function (key, value) {
	return _in("0x6a2b1e8", _ts(key), value);
};

window.SetSnakeoilForEntry = function (name, path, data) {
	return _in("0xa7dd3209", _ts(name), _ts(path), _ts(data));
};

window.SetTextChatEnabled = function (enabled) {
	return _in("0x97b2f9f8", enabled, _r);
};

window.SetVehicleAlarmTimeLeft = function (vehicle, time) {
	return _in("0xc108ee6f", vehicle, time);
};

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
window.SetVehicleAutoRepairDisabled = function (vehicle, value) {
	return _in("0x5f3a3574", vehicle, value);
};

window.SetVehicleClutch = function (vehicle, clutch) {
	return _in("0x2f70aced", vehicle, _fv(clutch));
};

window.SetVehicleCurrentRpm = function (vehicle, rpm) {
	return _in("0x2a01a8fc", vehicle, _fv(rpm));
};

window.SetVehicleEngineTemperature = function (vehicle, temperature) {
	return _in("0x6c93c4a9", vehicle, _fv(temperature));
};

window.SetVehicleFuelLevel = function (vehicle, level) {
	return _in("0xba970511", vehicle, _fv(level));
};

window.SetVehicleGravityAmount = function (vehicle, gravity) {
	return _in("0x1a963e58", vehicle, _fv(gravity));
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetVehicleHandlingField = function (vehicle, _class, fieldName, value) {
	return _in("0x2ba40795", vehicle, _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The floating-point value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetVehicleHandlingFloat = function (vehicle, _class, fieldName, value) {
	return _in("0x488c86d2", vehicle, _ts(_class), _ts(fieldName), _fv(value));
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param value The integer value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetVehicleHandlingInt = function (vehicle, _class, fieldName, value) {
	return _in("0xc37f4cf9", vehicle, _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param value The Vector3 value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 */
window.SetVehicleHandlingVector = function (vehicle, _class, fieldName, value) {
	return _in("0x12497890", vehicle, _ts(_class), _ts(fieldName), value);
};

window.SetVehicleHighGear = function (vehicle, gear) {
	return _in("0x20b1b3e6", vehicle, _fv(gear));
};

window.SetVehicleOilLevel = function (vehicle, level) {
	return _in("0x90d1cad1", vehicle, _fv(level));
};

window.SetVehicleSteeringAngle = function (vehicle, angle) {
	return _in("0xffccc2ea", vehicle, _fv(angle));
};

window.SetVehicleSteeringScale = function (vehicle, scale) {
	return _in("0xeb46596f", vehicle, _fv(scale));
};

window.SetVehicleTurboPressure = function (vehicle, pressure) {
	return _in("0x6485615e", vehicle, _fv(pressure));
};

window.SetVehicleWheelHealth = function (vehicle, wheelIndex, health) {
	return _in("0xb22ecefd", vehicle, wheelIndex, _fv(health));
};

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 */
window.SetVehicleWheelXOffset = function (vehicle, wheelIndex, offset) {
	return _in("0xbd6357d", vehicle, wheelIndex, _fv(offset));
};

window.SetVehicleWheelXrot = function (vehicle, wheelIndex, value) {
	return _in("0xec75d517", vehicle, wheelIndex, _fv(value));
};

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
window.ShutdownLoadingScreenNui = function () {
	return _in("0xb9234afb");
};

window.StartFindKvp = function (prefix) {
	return _in("0xdd379006", _ts(prefix), _r, _ri);
};

/**
 * The backing function for TriggerEvent.
 */
window.TriggerEventInternal = function (eventName, eventPayload, payloadLength) {
	return _in("0x91310870", _ts(eventName), _ts(eventPayload), payloadLength);
};

/**
 * The backing function for TriggerServerEvent.
 */
window.TriggerServerEventInternal = function (eventName, eventPayload, payloadLength) {
	return _in("0x7fdd1128", _ts(eventName), _ts(eventPayload), payloadLength);
};

/**
 * Returns whether or not the currently executing event was canceled. See https://wiki.fivem.net/wiki/WasEventCanceled
 * @return A boolean.
 */
window.WasEventCanceled = function () {
	return _in("0x58382a19", _r);
};

