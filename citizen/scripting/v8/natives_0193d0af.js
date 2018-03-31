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

window.AbortTextChat = function () {
	return _in("0x1AC8F4AD40E22127");
};

window.Absf = function (value) {
	return _in("0x73D57CFFDD12C355", _fv(value), _r, _rf);
};

window.Absi = function (value) {
	return _in("0xF0D31AD191A74F87", value, _r, _ri);
};

window.Acos = function (p0) {
	return _in("0x1D08B970013C34B6", _fv(p0), _r, _rf);
};

window.ActivateDamageTrackerOnNetworkId = function (netID, p1) {
	return _in("0xD45B1FFCCD52FF19", netID, p1);
};

window.ActivateFrontendMenu = function (menuhash, Toggle_Pause, component) {
	return _in("0xEF01D36B9C9D0C7B", _ch(menuhash), Toggle_Pause, component);
};

window.ActivatePhysics = function (entity) {
	return _in("0x710311ADF0E20730", entity);
};

window.ActivateRockstarEditor = function () {
	return _in("0x49DA8145672B2725");
};

window.AddAMarkerOverVehicle = function (vehicle) {
	return _in("0x5991A01434CE9677", vehicle, _r);
};

window.AddAmmoToPed = function (ped, weaponHash, ammo) {
	return _in("0x78F0424C34306220", ped, _ch(weaponHash), ammo);
};

window.AddArmourToPed = function (ped, amount) {
	return _in("0x5BA652A0CD14DF2F", ped, amount);
};

window.AddBlipForCoord = function (x, y, z) {
	return _in("0x5A039BB0BCA604B6", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.AddBlipForEntity = function (entity) {
	return _in("0x5CDE92C702A8FCE7", entity, _r, _ri);
};

window.AddBlipForPickup = function (pickup) {
	return _in("0xBE339365C863BD36", pickup, _r, _ri);
};

window.AddBlipForRadius = function (posX, posY, posZ, radius) {
	return _in("0x46818D79B1F7499A", _fv(posX), _fv(posY), _fv(posZ), _fv(radius), _r, _ri);
};

window.AddCamSplineNode = function (camera, x, y, z, xRot, yRot, zRot, length, p8, p9) {
	return _in("0x8609C75EC438FB3B", camera, _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), length, p8, p9);
};

window.AddClanDecalToVehicle = function (vehicle, ped, boneIndex, x1, x2, x3, y1, y2, y3, z1, z2, z3, scale, p13, alpha) {
	return _in("0x428BDCB9DA58DA53", vehicle, ped, boneIndex, _fv(x1), _fv(x2), _fv(x3), _fv(y1), _fv(y2), _fv(y3), _fv(z1), _fv(z2), _fv(z3), _fv(scale), p13, alpha, _r);
};

window.AddCoverBlockingArea = function (playerX, playerY, playerZ, radiusX, radiusY, radiusZ, p6, p7, p8, p9) {
	return _in("0x45C597097DD7CB81", _fv(playerX), _fv(playerY), _fv(playerZ), _fv(radiusX), _fv(radiusY), _fv(radiusZ), p6, p7, p8, p9);
};

window.AddCoverPoint = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xD5C12A75C7B9497F", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, p5, p6, p7, _r, _ri);
};

window.AddDecal = function (decalType, posX, posY, posZ, p4, p5, p6, p7, p8, p9, width, height, rCoef, gCoef, bCoef, opacity, timeout, p17, p18, p19) {
	return _in("0xB302244A1839BDAD", decalType, _fv(posX), _fv(posY), _fv(posZ), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(width), _fv(height), _fv(rCoef), _fv(gCoef), _fv(bCoef), _fv(opacity), _fv(timeout), p17, p18, p19, _r, _ri);
};

window.AddDoorToSystem = function (doorHash, modelHash, x, y, z, p5, p6, p7) {
	return _in("0x6F8838D03D1DC226", _ch(doorHash), _ch(modelHash), _fv(x), _fv(y), _fv(z), p5, p6, p7);
};

window.AddEntityIcon = function (entity, icon) {
	return _in("0x9CD43EEE12BF4DD0", entity, _ts(icon), _r, _ri);
};

window.AddExplosion = function (x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake) {
	return _in("0xE3AD2BDBAEE269AC", _fv(x), _fv(y), _fv(z), explosionType, _fv(damageScale), isAudible, isInvisible, _fv(cameraShake));
};

window.AddExplosionWithUserVfx = function (x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake) {
	return _in("0x36DD3FE58B5E5212", _fv(x), _fv(y), _fv(z), explosionType, _ch(explosionFx), _fv(damageScale), isAudible, isInvisible, _fv(cameraShake));
};

window.AddFrontendMenuContext = function (hash) {
	return _in("0xDD564BDD0472C936", _ch(hash));
};

window.AddHospitalRestart = function (x, y, z, p3, p4) {
	return _in("0x1F464EF988465A81", _fv(x), _fv(y), _fv(z), _fv(p3), p4, _r, _ri);
};

window.AddLineToConversation = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
	return _in("0xC5EF963405593646", p0, _ts(p1), _ts(p2), p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
};

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
window.AddMinimapOverlay = function (name) {
	return _in("0x4afd2499", _ts(name), _r, _ri);
};

window.AddNavmeshBlockingObject = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0xFCD5C8E06E502F5A", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, _r, _ri);
};

window.AddNavmeshRequiredRegion = function (x, y, radius) {
	return _in("0x387EAD7EE42F6685", _fv(x), _fv(y), _fv(radius));
};

window.AddNextMessageToPreviousBriefs = function (p0) {
	return _in("0x60296AF4BA14ABC5", p0);
};

window.AddOwnedExplosion = function (ped, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake) {
	return _in("0x172AA1B624FA1013", ped, _fv(x), _fv(y), _fv(z), explosionType, _fv(damageScale), isAudible, isInvisible, _fv(cameraShake));
};

window.AddPatrolRouteLink = function (p0, p1) {
	return _in("0x23083260DEC3A551", p0, p1);
};

window.AddPatrolRouteNode = function (p0, p1, x1, y1, z1, x2, y2, z2, p8) {
	return _in("0x8EDF950167586B7C", p0, _ts(p1), _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p8);
};

window.AddPedToConversation = function (p0, ped, p2) {
	return _in("0x95D9F4BC443956E7", p0, ped, _ts(p2));
};

window.AddPetrolDecal = function (x, y, z, groundLvl, width, transparency) {
	return _in("0x4F5212C7AD880DF8", _fv(x), _fv(y), _fv(z), _fv(groundLvl), _fv(width), _fv(transparency), _r, _ri);
};

window.AddPickupToInteriorRoomByName = function (pickup, roomName) {
	return _in("0x3F6167F351168730", pickup, _ts(roomName));
};

window.AddPoliceRestart = function (p0, p1, p2, p3, p4) {
	return _in("0x452736765B31FC4B", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, _r, _ri);
};

window.AddRelationshipGroup = function (name, groupHash) {
	return _in("0xF372BC22FCB88606", _ts(name), _ii(groupHash) /* may be optional */, _r, _ri);
};

window.AddRope = function (x, y, z, rotX, rotY, rotZ, length, ropeType, maxLength, minLength, p10, p11, p12, rigid, p14, breakWhenShot, unkPtr) {
	return _in("0xE832D760399EB220", _fv(x), _fv(y), _fv(z), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(length), ropeType, _fv(maxLength), _fv(minLength), _fv(p10), p11, p12, rigid, _fv(p14), breakWhenShot, _ii(unkPtr) /* may be optional */, _r, _ri);
};

window.AddScenarioBlockingArea = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x1B5C85C612E5256E", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, p7, p8, p9, _r, _ri);
};

window.AddScriptToRandomPed = function (name, model, p2, p3) {
	return _in("0x4EE5367468A65CCC", _ts(name), _ch(model), _fv(p2), _fv(p3));
};

window.AddShockingEventAtPosition = function (type, x, y, z, duration) {
	return _in("0xD9F8455409B525E9", type, _fv(x), _fv(y), _fv(z), _fv(duration), _r, _ri);
};

window.AddShockingEventForEntity = function (type, entity, duration) {
	return _in("0x7FD8F3BE76F89422", type, entity, _fv(duration), _r, _ri);
};

window.AddStuntJump = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16) {
	return _in("0x1A992DA297A4630C", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11), _fv(p12), _fv(p13), _fv(p14), p15, p16, _r, _ri);
};

window.AddStuntJumpAngled = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18) {
	return _in("0xBBE5D803A5360CBF", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11), _fv(p12), _fv(p13), _fv(p14), _fv(p15), _fv(p16), p17, p18, _r, _ri);
};

window.AddTextComponentAppTitle = function (p0, p1) {
	return _in("0x761B77454205A61D", _ts(p0), p1);
};

window.AddTextComponentFloat = function (value, decimalPlaces) {
	return _in("0xE7DCB5B874BCD96E", _fv(value), decimalPlaces);
};

window.AddTextComponentFormattedInteger = function (value, commaSeparated) {
	return _in("0x0E4C749FF9DE9CC4", value, commaSeparated);
};

window.AddTextComponentInteger = function (value) {
	return _in("0x03B504CF259931BC", value);
};

window.AddTextComponentScaleform = function (p0) {
	return _in("0x5F68520888E69014", _ts(p0));
};

window.AddTextComponentSubstringBlipName = function (blip) {
	return _in("0x80EAD8E2E1D5D52E", blip);
};

window.AddTextComponentSubstringPlayerName = function (text) {
	return _in("0x6C188BE134E074AA", _ts(text));
};

window.AddTextComponentSubstringTextLabel = function (labelName) {
	return _in("0xC63CD5D2920ACBE7", _ts(labelName));
};

window.AddTextComponentSubstringTextLabelHashKey = function (gxtEntryHash) {
	return _in("0x17299B63C7683A2B", _ch(gxtEntryHash));
};

window.AddTextComponentSubstringTime = function (timestamp, flags) {
	return _in("0x1115F16B8AB9E8BF", timestamp, flags);
};

window.AddTextComponentSubstringWebsite = function (website) {
	return _in("0x94CF4AC034C9C986", _ts(website));
};

window.AddTextEntry = function (entryKey, entryText) {
	return _in("0x32ca01c3", _ts(entryKey), _ts(entryText));
};

window.AddTextEntryByHash = function (entryKey, entryText) {
	return _in("0x289da860", _ch(entryKey), _ts(entryText));
};

window.AddToClockTime = function (hours, minutes, seconds) {
	return _in("0xD716F30D8C8980E2", hours, minutes, seconds);
};

window.AddToItemset = function (p0, p1) {
	return _in("0xE3945201F14637DD", p0, p1, _r);
};

window.AddTrevorRandomModifier = function (gamerTagId) {
	return _in("0x595B5178E412E199", gamerTagId, _r);
};

window.AddVehicleStuckCheckWithWarp = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x2FA9923062DD396C", p0, _fv(p1), p2, p3, p4, p5, p6);
};

window.AddVehicleSubtaskAttackCoord = function (ped, x, y, z) {
	return _in("0x5CF0D8F9BBA0DD75", ped, _fv(x), _fv(y), _fv(z));
};

window.AddVehicleSubtaskAttackPed = function (ped, ped2) {
	return _in("0x85F462BADC7DA47F", ped, ped2);
};

window.AddVehicleUpsidedownCheck = function (vehicle) {
	return _in("0xB72E26D81006005B", vehicle);
};

window.AdvanceClockTimeTo = function (hour, minute, second) {
	return _in("0xC8CA9670B9D83B3B", hour, minute, second);
};

window.AnimateGameplayCamZoom = function (p0, distance) {
	return _in("0xDF2E1F7742402E81", _fv(p0), _fv(distance));
};

window.AnimatedShakeCam = function (cam, p1, p2, p3, amplitude) {
	return _in("0xA2746EEAE3E577CD", cam, _ts(p1), _ts(p2), _ts(p3), _fv(amplitude));
};

window.AnyPassengersRappeling = function (vehicle) {
	return _in("0x291E373D483E7EE7", vehicle, _r);
};

window.AppClearBlock = function () {
	return _in("0x5FE1DF3342DB7DBA");
};

window.AppCloseApp = function () {
	return _in("0xE41C65E07A5F05FC");
};

window.AppCloseBlock = function () {
	return _in("0xE8E3FCF72EAC0EF8");
};

window.AppDataValid = function () {
	return _in("0x846AA8E7D55EE5B6", _r);
};

window.AppDeleteAppData = function (appName) {
	return _in("0x44151AEA95C8A003", _ts(appName), _r);
};

window.AppGetDeletedFileStatus = function () {
	return _in("0xC9853A2BE3DED1A6", _r, _ri);
};

window.AppGetFloat = function (property) {
	return _in("0x1514FB24C02C2322", _ts(property), _r, _rf);
};

window.AppGetInt = function (property) {
	return _in("0xD3A58A12C77D9D4B", _ts(property), _r, _ri);
};

window.AppGetString = function (property) {
	return _in("0x749B023950D2311C", _ts(property), _r, _s);
};

window.AppHasLinkedSocialClubAccount = function () {
	return _in("0x71EEE69745088DA0", _r);
};

window.AppHasSyncedData = function (appName) {
	return _in("0xCA52279A7271517F", _ts(appName), _r);
};

window.AppSaveData = function () {
	return _in("0x95C5D356CDA6E85F");
};

window.AppSetApp = function (appName) {
	return _in("0xCFD0406ADAF90D2B", _ts(appName));
};

window.AppSetBlock = function (blockName) {
	return _in("0x262AB456A3D21F93", _ts(blockName));
};

window.AppSetFloat = function (property, value) {
	return _in("0x25D7687C68E0DAA4", _ts(property), _fv(value));
};

window.AppSetInt = function (property, value) {
	return _in("0x607E8E3D3E4F9611", _ts(property), value);
};

window.AppSetString = function (property, value) {
	return _in("0x3FF2FCEC4B7721B4", _ts(property), _ts(value));
};

window.ApplyDamageToPed = function (ped, damageAmount, p2) {
	return _in("0x697157CED63F18D4", ped, damageAmount, p2);
};

window.ApplyForceToEntity = function (entity, forceType, x, y, z, xRot, yRot, zRot, p8, isRel, p10, highForce, p12, p13) {
	return _in("0xC5F68BE9613E2D18", entity, forceType, _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), p8, isRel, p10, highForce, p12, p13);
};

window.ApplyForceToEntityCenterOfMass = function (entity, forceType, x, y, z, p5, isRel, highForce, p8) {
	return _in("0x18FF00FC7EFF559E", entity, forceType, _fv(x), _fv(y), _fv(z), p5, isRel, highForce, p8);
};

window.ApplyImpulseToCloth = function (posX, posY, posZ, vecX, vecY, vecZ, impulse) {
	return _in("0xE37F721824571784", _fv(posX), _fv(posY), _fv(posZ), _fv(vecX), _fv(vecY), _fv(vecZ), _fv(impulse));
};

window.ApplyPedBlood = function (ped, boneIndex, xRot, yRot, zRot, woundType) {
	return _in("0x83F7E01C7B769A26", ped, boneIndex, _fv(xRot), _fv(yRot), _fv(zRot), _ts(woundType));
};

window.ApplyPedBloodByZone = function (ped, p1, p2, p3, p4) {
	return _in("0x3311E47B91EDCBBC", ped, p1, _fv(p2), _fv(p3), _ii(p4) /* may be optional */);
};

window.ApplyPedBloodDamageByZone = function (ped, p1, p2, p3, p4) {
	return _in("0x816F6981C60BF53B", ped, p1, _fv(p2), _fv(p3), p4);
};

window.ApplyPedBloodSpecific = function (ped, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0xEF0D582CBF2D9B0F", ped, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _fv(p7), _ii(p8) /* may be optional */);
};

window.ApplyPedDamageDecal = function (ped, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x397C38AA7B4A5F83", ped, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, _ts(p9));
};

window.ApplyPedDamagePack = function (ped, damagePack, damage, mult) {
	return _in("0x46DF918788CB093F", ped, _ts(damagePack), _fv(damage), _fv(mult));
};

window.AreAllNavmeshRegionsLoaded = function () {
	return _in("0x8415D95B194A3AEA", _r);
};

window.AreAllVehicleWindowsIntact = function (vehicle) {
	return _in("0x11D862A3E977A9EF", vehicle, _r);
};

window.AreAnyVehicleSeatsFree = function (vehicle) {
	return _in("0x2D34FC3BC4ADB780", vehicle, _r);
};

window.AreCoordsCollidingWithExterior = function (x, y, z) {
	return _in("0xEEA5AC2EDA7C33E8", _fv(x), _fv(y), _fv(z), _r);
};

window.ArePlayerFlashingStarsAboutToDrop = function (player) {
	return _in("0xAFAF86043E5874E9", player, _r);
};

window.ArePlayerStarsGreyedOut = function (player) {
	return _in("0x0A6EB355EE14A2DB", player, _r);
};

window.ArePropellersUndamaged = function (vehicle) {
	return _in("0x755D6D5267CBBD7E", vehicle, _r);
};

window.AreStringsEqual = function (string1, string2) {
	return _in("0x0C515FAB3FF9EA92", _ts(string1), _ts(string2), _r);
};

window.ArrayValueAddBoolean = function (value) {
	return _in("0xF8B0F5A43E928C76", _i, value);
};

window.ArrayValueAddFloat = function (value) {
	return _in("0x57A995FD75D37F56", _i, _fv(value));
};

window.ArrayValueAddInteger = function (value) {
	return _in("0xCABDB751D86FE93B", _i, value);
};

window.ArrayValueAddObject = function (arrayData) {
	return _in("0x6889498B3E19C797", _ii(arrayData) /* may be optional */, _r, _ri);
};

window.ArrayValueAddString = function (value) {
	return _in("0x2F0661C155AEEEAA", _i, _ts(value));
};

window.ArrayValueAddVector3 = function (valueX, valueY, valueZ) {
	return _in("0x407F8D034F70F0C2", _i, _fv(valueX), _fv(valueY), _fv(valueZ));
};

window.ArrayValueGetBoolean = function (arrayIndex) {
	return _in("0x50C1B2874E50C114", _i, arrayIndex, _r);
};

window.ArrayValueGetFloat = function (arrayIndex) {
	return _in("0xC0C527B525D7CFB5", _i, arrayIndex, _r, _rf);
};

window.ArrayValueGetInteger = function (arrayIndex) {
	return _in("0x3E5AE19425CD74BE", _i, arrayIndex, _r, _ri);
};

window.ArrayValueGetObject = function (arrayIndex) {
	return _in("0x8B5FADCC4E3A145F", _i, arrayIndex, _r, _ri);
};

window.ArrayValueGetSize = function (arrayData) {
	return _in("0x065DB281590CEA2D", _ii(arrayData) /* may be optional */, _r, _ri);
};

window.ArrayValueGetString = function (arrayIndex) {
	return _in("0xD3F2FFEB8D836F52", _i, arrayIndex, _r, _s);
};

window.ArrayValueGetType = function (arrayIndex) {
	return _in("0x3A0014ADB172A3C5", _i, arrayIndex, _r, _ri);
};

window.ArrayValueGetVector3 = function (arrayIndex) {
	return _in("0x8D2064E5B64A628A", _i, arrayIndex, _r, _rv);
};

window.Asin = function (p0) {
	return _in("0xC843060B5765DCE7", _fv(p0), _r, _rf);
};

window.AssistedMovementCloseRoute = function () {
	return _in("0xAEBF081FFC0A0E5E");
};

window.AssistedMovementFlushRoute = function () {
	return _in("0x8621390F0CDCFE1F");
};

window.AssistedMovementIsRouteLoaded = function (route) {
	return _in("0x60F9A4393A21F741", _ts(route), _r);
};

window.AssistedMovementOverrideLoadDistanceThisFrame = function (dist) {
	return _in("0x13945951E16EF912", _fv(dist));
};

window.AssistedMovementRemoveRoute = function (route) {
	return _in("0x3548536485DD792B", _ts(route));
};

window.AssistedMovementRequestRoute = function (route) {
	return _in("0x817268968605947A", _ts(route));
};

window.AssistedMovementSetRouteProperties = function (route, props) {
	return _in("0xD5002D78B7162E1B", _ts(route), props);
};

window.Atan = function (p0) {
	return _in("0xA9D1795CD5043663", _fv(p0), _r, _rf);
};

window.Atan2 = function (p0, p1) {
	return _in("0x8927CBF9D22261A4", _fv(p0), _fv(p1), _r, _rf);
};

window.AttachCamToEntity = function (cam, entity, xOffset, yOffset, zOffset, isRelative) {
	return _in("0xFEDB7D269E8C60E3", cam, entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), isRelative);
};

window.AttachCamToPedBone = function (cam, ped, boneIndex, x, y, z, heading) {
	return _in("0x61A3DBA14AB7F411", cam, ped, boneIndex, _fv(x), _fv(y), _fv(z), heading);
};

window.AttachEntitiesToRope = function (rope, ent1, ent2, ent1_x, ent1_y, ent1_z, ent2_x, ent2_y, ent2_z, length, p10, p11) {
	return _in("0x3D95EC8B6D940AC3", rope, ent1, ent2, _fv(ent1_x), _fv(ent1_y), _fv(ent1_z), _fv(ent2_x), _fv(ent2_y), _fv(ent2_z), _fv(length), p10, p11, _i, _i);
};

window.AttachEntityToEntity = function (entity1, entity2, boneIndex, xPos, yPos, zPos, xRot, yRot, zRot, p9, useSoftPinning, collision, isPed, vertexIndex, fixedRot) {
	return _in("0x6B9BBD38AB0796DF", entity1, entity2, boneIndex, _fv(xPos), _fv(yPos), _fv(zPos), _fv(xRot), _fv(yRot), _fv(zRot), p9, useSoftPinning, collision, isPed, vertexIndex, fixedRot);
};

window.AttachEntityToEntityPhysically = function (entity1, entity2, boneIndex1, boneIndex2, xPos1, yPos1, zPos1, xPos2, yPos2, zPos2, xRot, yRot, zRot, breakForce, fixedRot, p15, collision, p17, p18) {
	return _in("0xC3675780C92F90F9", entity1, entity2, boneIndex1, boneIndex2, _fv(xPos1), _fv(yPos1), _fv(zPos1), _fv(xPos2), _fv(yPos2), _fv(zPos2), _fv(xRot), _fv(yRot), _fv(zRot), _fv(breakForce), fixedRot, p15, collision, p17, p18);
};

window.AttachPortablePickupToPed = function (ped, p1) {
	return _in("0x8DC39368BDD57755", ped, p1);
};

window.AttachRopeToEntity = function (rope, entity, x, y, z, p5) {
	return _in("0x4B490A6832559A65", rope, entity, _fv(x), _fv(y), _fv(z), p5);
};

window.AttachSynchronizedSceneToEntity = function (sceneID, entity, boneIndex) {
	return _in("0x272E4723B56A3B96", sceneID, entity, boneIndex);
};

window.AttachTvAudioToEntity = function (entity) {
	return _in("0x845BAD77CC770633", entity);
};

window.AttachVehicleToCargobob = function (vehicle, cargobob, p2, x, y, z) {
	return _in("0x4127F1D84E347769", vehicle, cargobob, p2, _fv(x), _fv(y), _fv(z));
};

window.AttachVehicleToTowTruck = function (towTruck, vehicle, rear, hookOffsetX, hookOffsetY, hookOffsetZ) {
	return _in("0x29A16F8D621C4508", towTruck, vehicle, rear, _fv(hookOffsetX), _fv(hookOffsetY), _fv(hookOffsetZ));
};

window.AttachVehicleToTrailer = function (vehicle, trailer, radius) {
	return _in("0x3C7D42D58F770B54", vehicle, trailer, _fv(radius));
};

window.AudioIsScriptedMusicPlaying = function () {
	return _in("0x845FFC3A4FEEFA3E", _r, _ri);
};

window.BadSportPlayerLeftDetected = function (p1, p2) {
	return _in("0xEC5E3AF5289DCA81", _i, p1, p2, _r);
};

window.BeginEnumeratingThreads = function () {
	return _in("0xDADFADA5A20143A8");
};

window.BeginReplayStats = function (p0, p1) {
	return _in("0xE0E500246FF73D66", p0, p1);
};

window.BeginSrl = function () {
	return _in("0x9BADDC94EF83B823");
};

window.BeginTextCommandClearPrint = function (text) {
	return _in("0xE124FA80A759019C", _ts(text));
};

window.BeginTextCommandDisplayHelp = function (inputType) {
	return _in("0x8509B634FBE7DA11", _ts(inputType));
};

window.BeginTextCommandDisplayText = function (text) {
	return _in("0x25FBB336DF1804CB", _ts(text));
};

window.BeginTextCommandIsMessageDisplayed = function (text) {
	return _in("0x853648FD1063A213", _ts(text));
};

window.BeginTextCommandIsThisHelpMessageBeingDisplayed = function (labelName) {
	return _in("0x0A24DA3A41B718F5", _ts(labelName));
};

window.BeginTextCommandLineCount = function (entry) {
	return _in("0x521FB041D93DD0E4", _ts(entry));
};

window.BeginTextCommandObjective = function (p0) {
	return _in("0x23D69E0465570028", _ts(p0));
};

window.BeginTextCommandPrint = function (GxtEntry) {
	return _in("0xB87A37EEB7FAA67D", _ts(GxtEntry));
};

window.BeginTextCommandScaleformString = function (componentType) {
	return _in("0x80338406F3475E55", _ts(componentType));
};

window.BeginTextCommandSetBlipName = function (gxtentry) {
	return _in("0xF9113A30DE5C6670", _ts(gxtentry));
};

window.BeginTextCommandTimer = function (p0) {
	return _in("0x8F9EE5687F8EECCD", _ts(p0));
};

window.BeginTextCommandWidth = function (text) {
	return _in("0x54CE8AC98E120CAB", _ts(text));
};

window.BlipSiren = function (vehicle) {
	return _in("0x1B9025BDA76822B6", vehicle);
};

window.BlockDecisionMakerEvent = function (name, type) {
	return _in("0xE42FCDFD0E4196F7", _ch(name), type);
};

window.BreakEntityGlass = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x2E648D16F6E308F3", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), p9, p10);
};

window.CalculateTravelDistanceBetweenPoints = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xADD95C7005C4A197", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r, _rf);
};

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
window.CallMinimapScaleformFunction = function (miniMap, fnName) {
	return _in("0x4c89c0ed", miniMap, _ts(fnName), _r);
};

window.CallScaleformMovieFunctionFloatParams = function (scaleform, functionName, param1, param2, param3, param4, param5) {
	return _in("0xD0837058AE2E4BEE", scaleform, _ts(functionName), _fv(param1), _fv(param2), _fv(param3), _fv(param4), _fv(param5));
};

window.CallScaleformMovieFunctionMixedParams = function (scaleform, functionName, floatParam1, floatParam2, floatParam3, floatParam4, floatParam5, stringParam1, stringParam2, stringParam3, stringParam4, stringParam5) {
	return _in("0xEF662D8D57E290B1", scaleform, _ts(functionName), _fv(floatParam1), _fv(floatParam2), _fv(floatParam3), _fv(floatParam4), _fv(floatParam5), _ts(stringParam1), _ts(stringParam2), _ts(stringParam3), _ts(stringParam4), _ts(stringParam5));
};

window.CallScaleformMovieFunctionStringParams = function (scaleform, functionName, param1, param2, param3, param4, param5) {
	return _in("0x51BC1ED3CC44E8F7", scaleform, _ts(functionName), _ts(param1), _ts(param2), _ts(param3), _ts(param4), _ts(param5));
};

window.CallScaleformMovieMethod = function (scaleform, method) {
	return _in("0xFBD96D87AC96D533", scaleform, _ts(method));
};

window.CanCreateRandomBikeRider = function () {
	return _in("0xEACEEDA81751915C", _r);
};

window.CanCreateRandomCops = function () {
	return _in("0x5EE2CAFF7F17770D", _r);
};

window.CanCreateRandomDriver = function () {
	return _in("0xB8EB95E5B4E56978", _r);
};

window.CanCreateRandomPed = function (unk) {
	return _in("0x3E8349C08E4B82E4", unk, _r);
};

window.CanKnockPedOffVehicle = function (ped) {
	return _in("0x51AC07A44D4F5B8A", ped, _r);
};

window.CanPedHearPlayer = function (player, ped) {
	return _in("0xF297383AA91DCA29", player, ped, _r);
};

window.CanPedInCombatSeeTarget = function (ped, target) {
	return _in("0xEAD42DE3610D0721", ped, target, _r);
};

window.CanPedRagdoll = function (ped) {
	return _in("0x128F79EDCECE4FD5", ped, _r);
};

window.CanPhoneBeSeenOnScreen = function () {
	return _in("0xC4E2813898C97A4B", _r);
};

window.CanPlayOnline = function () {
	return _in("0x5F91D5D0B36AA310", _r);
};

window.CanPlayerStartMission = function (player) {
	return _in("0xDE7465A27D403C06", player, _r);
};

window.CanRegisterMissionEntities = function (p0, p1, p2, p3) {
	return _in("0x69778E7564BADE6D", p0, p1, p2, p3, _r);
};

window.CanRegisterMissionObjects = function (p0) {
	return _in("0x800DD4721A8B008B", p0, _r);
};

window.CanRegisterMissionPeds = function (p0) {
	return _in("0xBCBF4FEF9FA5D781", p0, _r);
};

window.CanRegisterMissionPickups = function (p0) {
	return _in("0x0A49D1CB6E34AF72", p0, _r);
};

window.CanRegisterMissionVehicles = function (p0) {
	return _in("0x7277F1F2E085EE74", p0, _r);
};

window.CanSetEnterStateForRegisteredEntity = function (cutsceneEntName, modelHash) {
	return _in("0x645D0B458D8E17B5", _ts(cutsceneEntName), _ch(modelHash), _r);
};

window.CanSetExitStateForCamera = function (p0) {
	return _in("0xB2CBCD0930DFB420", p0, _r);
};

window.CanSetExitStateForRegisteredEntity = function (cutsceneEntName, modelHash) {
	return _in("0x4C6A6451C79E4662", _ts(cutsceneEntName), _ch(modelHash), _r);
};

window.CanShuffleSeat = function (vehicle, p1) {
	return _in("0x30785D90C956BF35", vehicle, p1, _r);
};

window.CanUseWeaponOnParachute = function (weaponHash) {
	return _in("0xBC7BE5ABC0879F74", _ch(weaponHash), _r);
};

window.CanVehicleParachuteBeActivated = function (vehicle) {
	return _in("0xA916396DF4154EE3", vehicle, _r);
};

/**
 * Cancels the currently executing event. See https://wiki.fivem.net/wiki/CancelEvent
 */
window.CancelEvent = function () {
	return _in("0xfa29d35d");
};

window.CancelMusicEvent = function (eventName) {
	return _in("0x5B17A90291133DA5", _ts(eventName), _r);
};

window.CancelStuntJump = function () {
	return _in("0xE6B7B0ACD4E4B75E");
};

window.CapInterior = function (interiorID, toggle) {
	return _in("0xD9175F941610DB54", interiorID, toggle);
};

window.Ceil = function (value) {
	return _in("0x11E019C8F43ACC8A", _fv(value), _r, _ri);
};

window.CellCamActivate = function (p0, p1) {
	return _in("0xFDE8F069C542D126", p0, p1);
};

window.CellCamIsCharVisibleNoFaceCheck = function (entity) {
	return _in("0x439E9BC95B7E7FBE", entity, _r);
};

window.CenterPlayerOnRadarThisFrame = function () {
	return _in("0x6D14BFDC33B34F55");
};

window.ChangePlayerPed = function (player, ped, b2, b3) {
	return _in("0x048189FAC643DEEE", player, ped, b2, b3);
};

window.ClampGameplayCamPitch = function (minimum, maximum) {
	return _in("0xA516C198B7DCA1E1", _fv(minimum), _fv(maximum), _r, _ri);
};

window.ClampGameplayCamYaw = function (minimum, maximum) {
	return _in("0x8F993D26E0CA5E8E", _fv(minimum), _fv(maximum), _r, _ri);
};

window.CleanItemset = function (p0) {
	return _in("0x41BC0D722FC04221", p0);
};

window.ClearAdditionalText = function (p0, p1) {
	return _in("0x2A179DF17CCF04CD", p0, p1);
};

window.ClearAllBrokenGlass = function () {
	return _in("0xB32209EFFDC04913", _r, _ri);
};

window.ClearAllHelpMessages = function () {
	return _in("0x6178F68A87A4D3A0");
};

window.ClearAllPedProps = function (ped) {
	return _in("0xCD8A7537A9B52F06", ped);
};

window.ClearAmbientZoneListState = function (p1) {
	return _in("0x120C48C614909FA4", _i, p1);
};

window.ClearAmbientZoneState = function (zoneName, p1) {
	return _in("0x218DD44AAAC964FF", _ts(zoneName), p1);
};

window.ClearAngledAreaOfVehicles = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x11DB3500F042A8AA", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, p9, p10, p11);
};

window.ClearArea = function (X, Y, Z, radius, p4, ignoreCopCars, ignoreObjects, p7) {
	return _in("0xA56F01F3765B93A0", _fv(X), _fv(Y), _fv(Z), _fv(radius), p4, ignoreCopCars, ignoreObjects, p7);
};

window.ClearAreaOfCops = function (x, y, z, radius, flags) {
	return _in("0x04F8FC8FCF58F88D", _fv(x), _fv(y), _fv(z), _fv(radius), flags);
};

window.ClearAreaOfEverything = function (x, y, z, radius, p4, p5, p6, p7) {
	return _in("0x957838AAF91BD12D", _fv(x), _fv(y), _fv(z), _fv(radius), p4, p5, p6, p7);
};

window.ClearAreaOfObjects = function (x, y, z, radius, flags) {
	return _in("0xDD9B9B385AAC7F5B", _fv(x), _fv(y), _fv(z), _fv(radius), flags);
};

window.ClearAreaOfPeds = function (x, y, z, radius, flags) {
	return _in("0xBE31FD6CE464AC59", _fv(x), _fv(y), _fv(z), _fv(radius), flags);
};

window.ClearAreaOfProjectiles = function (x, y, z, radius, flags) {
	return _in("0x0A1CB9094635D1A6", _fv(x), _fv(y), _fv(z), _fv(radius), flags);
};

window.ClearAreaOfVehicles = function (x, y, z, radius, p4, p5, p6, p7, p8) {
	return _in("0x01C7B9B38428AEB6", _fv(x), _fv(y), _fv(z), _fv(radius), p4, p5, p6, p7, p8);
};

window.ClearBit = function (offset) {
	return _in("0xE80492A9AC099A93", _i, offset);
};

window.ClearBrief = function () {
	return _in("0x9D292F73ADBD9313");
};

window.ClearCloudHat = function () {
	return _in("0x957E790EA1727B64");
};

window.ClearDecisionMakerEventResponse = function (name, type) {
	return _in("0x4FC9381A7AEE8968", _ch(name), type);
};

window.ClearDrawOrigin = function () {
	return _in("0xFF0B610F6BE0D7AF");
};

window.ClearDrivebyTaskUnderneathDrivingTask = function (ped) {
	return _in("0xC35B5CDB2824CF69", ped);
};

window.ClearEntityLastDamageEntity = function (entity) {
	return _in("0xA72CD9CA74A5ECBA", entity, _r, _ri);
};

window.ClearEntityLastWeaponDamage = function (entity) {
	return _in("0xAC678E40BE7C74D2", entity);
};

window.ClearFacialIdleAnimOverride = function (ped) {
	return _in("0x726256CC1EEB182F", ped);
};

window.ClearFloatingHelp = function (p0, p1) {
	return _in("0x50085246ABD3FEFA", p0, p1);
};

window.ClearFocus = function () {
	return _in("0x31B73D1EA9F01DA2");
};

window.ClearGpsFlags = function () {
	return _in("0x21986729D6A3A830");
};

window.ClearGpsPlayerWaypoint = function () {
	return _in("0xFF4FB7C8CDFA3DA7");
};

window.ClearGpsRaceTrack = function () {
	return _in("0x7AA5B4CE533C858B");
};

window.ClearHdArea = function () {
	return _in("0xCE58B1CFB9290813");
};

window.ClearHelp = function (toggle) {
	return _in("0x8DFCED7A656F8802", toggle);
};

window.ClearOverrideWeather = function () {
	return _in("0x338D2E3477711050");
};

window.ClearPedAlternateMovementAnim = function (ped, stance, p2) {
	return _in("0xD8D19675ED5FBDCE", ped, stance, _fv(p2));
};

window.ClearPedAlternateWalkAnim = function (ped, p1) {
	return _in("0x8844BBFCE30AA9E9", ped, _fv(p1));
};

window.ClearPedBloodDamage = function (ped) {
	return _in("0x8FE22675A5A45817", ped);
};

window.ClearPedBloodDamageByZone = function (ped, p1) {
	return _in("0x56E3B78C5408D9F4", ped, p1);
};

window.ClearPedDamageDecalByZone = function (ped, p1, p2) {
	return _in("0x523C79AEEFCC4A2A", ped, p1, _ts(p2));
};

window.ClearPedDecorations = function (ped) {
	return _in("0x0E5173C163976E38", ped);
};

window.ClearPedDriveByClipsetOverride = function (ped) {
	return _in("0x4AFE3690D7E0B5AC", ped);
};

window.ClearPedFacialDecorations = function (ped) {
	return _in("0xE3B27E70CEAB9F0C", ped);
};

window.ClearPedInPauseMenu = function () {
	return _in("0x5E62BE5DC58E9E06");
};

window.ClearPedLastDamageBone = function (ped) {
	return _in("0x8EF6B7AC68E2F01B", ped);
};

window.ClearPedLastWeaponDamage = function (ped) {
	return _in("0x0E98F88A24C5F4B8", ped);
};

window.ClearPedNonCreationArea = function () {
	return _in("0x2E05208086BA0651");
};

window.ClearPedProp = function (ped, propId) {
	return _in("0x0943E5B8E078E76E", ped, propId);
};

window.ClearPedSecondaryTask = function (ped) {
	return _in("0x176CECF6F920D707", ped);
};

window.ClearPedTasks = function (ped) {
	return _in("0xE1EF3C1216AFF2CD", ped);
};

window.ClearPedTasksImmediately = function (ped) {
	return _in("0xAAA34F8A7CB32098", ped);
};

window.ClearPedWetness = function (ped) {
	return _in("0x9C720776DAA43E7E", ped);
};

window.ClearPlayerHasDamagedAtLeastOneNonAnimalPed = function (player) {
	return _in("0x4AACB96203D11A31", player);
};

window.ClearPlayerHasDamagedAtLeastOnePed = function (player) {
	return _in("0xF0B67A4DE6AB5F98", player);
};

window.ClearPlayerParachuteModelOverride = function (player) {
	return _in("0x8753997EB5F6EE3F", player);
};

window.ClearPlayerParachutePackModelOverride = function (player) {
	return _in("0x10C54E4389C12B42", player);
};

window.ClearPlayerParachuteVariationOverride = function (player) {
	return _in("0x0F4CC924CF8C7B21", player);
};

window.ClearPlayerWantedLevel = function (player) {
	return _in("0xB302540597885499", player);
};

window.ClearPopscheduleOverrideVehicleModel = function (scheduleId) {
	return _in("0x5C0DE367AA0D911C", scheduleId);
};

window.ClearPrints = function () {
	return _in("0xCC33FA791322B9D9");
};

window.ClearRelationshipBetweenGroups = function (relationship, group1, group2) {
	return _in("0x5E29243FB56FC6D4", relationship, _ch(group1), _ch(group2));
};

window.ClearReminderMessage = function () {
	return _in("0xB57D8DD645CFA2CF");
};

window.ClearReplayStats = function () {
	return _in("0x1B1AB132A16FDA55");
};

window.ClearRoomForEntity = function (entity) {
	return _in("0xB365FC0C4E27FFA7", entity);
};

window.ClearSequenceTask = function (taskSequence) {
	return _in("0x3841422E9C488D8C", _ii(taskSequence) /* may be optional */, _r, _ri);
};

window.ClearSmallPrints = function () {
	return _in("0x2CEA2839313C09AC");
};

window.ClearThisPrint = function (p0) {
	return _in("0xCF708001E1E536DD", _ts(p0));
};

window.ClearTimecycleModifier = function () {
	return _in("0x0F07E7745A236711");
};

window.ClearVehicleCustomPrimaryColour = function (vehicle) {
	return _in("0x55E1D2758F34E437", vehicle, _r, _ri);
};

window.ClearVehicleCustomSecondaryColour = function (vehicle) {
	return _in("0x5FFBDEEC3E8E2009", vehicle, _r, _ri);
};

window.ClearWeatherTypePersist = function () {
	return _in("0xCCC39339BEF76CF5");
};

window.ClonePed = function (ped, heading, isNetwork, p3) {
	return _in("0xEF29A16337FACADB", ped, _fv(heading), isNetwork, p3, _r, _ri);
};

window.ClonePedToTarget = function (ped, targetPed) {
	return _in("0xE952D6431689AD9A", ped, targetPed);
};

window.CloseBombBayDoors = function (vehicle) {
	return _in("0x3556041742A0DC74", vehicle);
};

window.ClosePatrolRoute = function () {
	return _in("0xB043ECA801B8CBC1");
};

window.CloseSequenceTask = function (taskSequence) {
	return _in("0x39E72BC99E6360CB", taskSequence, _r, _ri);
};

window.CompareStrings = function (str1, str2, matchCase, maxLength) {
	return _in("0x1E34710ECD4AB0EB", _ts(str1), _ts(str2), matchCase, maxLength, _r, _ri);
};

window.ControlLandingGear = function (vehicle, state) {
	return _in("0xCFC8BE9A5E1FE575", vehicle, state);
};

window.ControlMountedWeapon = function (ped) {
	return _in("0xDCFE42068FE0135A", ped, _r);
};

window.Cos = function (value) {
	return _in("0xD0FFB162F40A139C", _fv(value), _r, _rf);
};

window.CreateAmbientPickup = function (pickupHash, posX, posY, posZ, p4, value, modelHash, p7, p8) {
	return _in("0x673966A0C0FD7171", _ch(pickupHash), _fv(posX), _fv(posY), _fv(posZ), p4, value, _ch(modelHash), p7, p8, _r, _ri);
};

window.CreateCam = function (camName, p1) {
	return _in("0xC3981DCE61D9E13F", _ts(camName), p1, _r, _ri);
};

window.CreateCamWithParams = function (camName, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9) {
	return _in("0xB51194800B257161", _ts(camName), _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(fov), p8, p9, _r, _ri);
};

window.CreateCamera = function (camHash, p1) {
	return _in("0x5E3CF89C6BCCA67D", _ch(camHash), p1, _r, _ri);
};

window.CreateCameraWithParams = function (camHash, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9) {
	return _in("0x6ABFA3E16460F22D", _ch(camHash), _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(fov), p8, p9, _r, _ri);
};

window.CreateCheckpoint = function (type, posX1, posY1, posZ1, posX2, posY2, posZ2, radius, red, green, blue, alpha, reserved) {
	return _in("0x0134F0835AB6BFCB", type, _fv(posX1), _fv(posY1), _fv(posZ1), _fv(posX2), _fv(posY2), _fv(posZ2), _fv(radius), red, green, blue, alpha, reserved, _r, _ri);
};

window.CreateCinematicShot = function (p0, p1, p2, entity) {
	return _in("0x741B0129D4560F31", p0, p1, p2, entity);
};

window.CreateForcedObject = function (x, y, z, p3, modelHash, p5) {
	return _in("0x150E808B375A385A", _fv(x), _fv(y), _fv(z), p3, _ch(modelHash), p5);
};

window.CreateGroup = function (unused) {
	return _in("0x90370EBE0FEE1A3D", unused, _r, _ri);
};

window.CreateIncident = function (incidentType, x, y, z, p5, radius, outIncidentID) {
	return _in("0x3F892CAF67444AE7", incidentType, _fv(x), _fv(y), _fv(z), p5, _fv(radius), _ii(outIncidentID) /* may be optional */, _r);
};

window.CreateIncidentWithEntity = function (incidentType, ped, amountOfPeople, radius, outIncidentID) {
	return _in("0x05983472F0494E60", incidentType, ped, amountOfPeople, _fv(radius), _ii(outIncidentID) /* may be optional */, _r);
};

window.CreateItemset = function (p0) {
	return _in("0x35AD299F50D91B24", p0, _r, _ri);
};

window.CreateLightningThunder = function () {
	return _in("0xF6062E089251C898");
};

window.CreateMissionTrain = function (variation, x, y, z, direction) {
	return _in("0x63C6CCA8E68AE8C8", variation, _fv(x), _fv(y), _fv(z), direction, _r, _ri);
};

window.CreateMobilePhone = function (phoneType) {
	return _in("0xA4E8E696C532FBC7", phoneType);
};

window.CreateModelHide = function (x, y, z, radius, model, p5) {
	return _in("0x8A97BCA30A0CE478", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(model), p5);
};

window.CreateModelHideExcludingScriptObjects = function (x, y, z, radius, model, p5) {
	return _in("0x3A52AE588830BF7F", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(model), p5);
};

window.CreateModelSwap = function (x, y, z, radius, originalModel, newModel, p6) {
	return _in("0x92C47782FDA8B2A3", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(originalModel), _ch(newModel), p6);
};

window.CreateMoneyPickups = function (x, y, z, value, amount, model) {
	return _in("0x0589B5E791CE9B2B", _fv(x), _fv(y), _fv(z), value, amount, _ch(model));
};

window.CreateMpGamerTag = function (ped, username, pointedClanTag, isRockstarClan, clanTag, p5) {
	return _in("0xBFEFE3321A3F5015", ped, _ts(username), pointedClanTag, isRockstarClan, _ts(clanTag), p5, _r, _ri);
};

window.CreateMpGamerTagColor = function (headDisplayId, username, pointedClanTag, isRockstarClan, clanTag, p5, r, g, b) {
	return _in("0x6DD05E9D83EFA4C9", headDisplayId, _ts(username), pointedClanTag, isRockstarClan, _ts(clanTag), p5, r, g, b);
};

window.CreateNewScriptedConversation = function () {
	return _in("0xD2C91A0B572AAE56");
};

window.CreateNmMessage = function (startImmediately, messageId) {
	return _in("0x418EF2A1BCE56685", startImmediately, messageId);
};

window.CreateObject = function (modelHash, x, y, z, isNetwork, p5, dynamic) {
	return _in("0x509D5878EB39E842", modelHash, _fv(x), _fv(y), _fv(z), isNetwork, p5, dynamic, _r, _ri);
};

window.CreateObjectNoOffset = function (modelHash, x, y, z, isNetwork, p5, dynamic) {
	return _in("0x9A294B2138ABB884", _ch(modelHash), _fv(x), _fv(y), _fv(z), isNetwork, p5, dynamic, _r, _ri);
};

window.CreatePatrolRoute = function () {
	return _in("0xAF8A443CCC8018DC");
};

window.CreatePed = function (pedType, modelHash, x, y, z, heading, isNetwork, p7) {
	return _in("0xD49F9B0955C367DE", pedType, _ch(modelHash), _fv(x), _fv(y), _fv(z), _fv(heading), isNetwork, p7, _r, _ri);
};

window.CreatePedInsideVehicle = function (vehicle, pedType, modelHash, seat, isNetwork, p5) {
	return _in("0x7DD959874C1FD534", vehicle, pedType, _ch(modelHash), seat, isNetwork, p5, _r, _ri);
};

window.CreatePickUpRopeForCargobob = function (cargobob, state) {
	return _in("0x7BEB0C7A235F6F3B", cargobob, state);
};

window.CreatePickup = function (pickupHash, posX, posY, posZ, p4, value, p6, modelHash) {
	return _in("0xFBA08C503DD5FA58", _ch(pickupHash), _fv(posX), _fv(posY), _fv(posZ), p4, value, p6, _ch(modelHash), _r, _ri);
};

window.CreatePickupRotate = function (pickupHash, posX, posY, posZ, rotX, rotY, rotZ, flag, amount, p9, p10, modelHash) {
	return _in("0x891804727E0A98B7", _ch(pickupHash), _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), flag, amount, p9, p10, _ch(modelHash), _r, _ri);
};

window.CreatePortablePickup = function (pickupHash, x, y, z, placeOnGround, modelHash) {
	return _in("0x2EAF1FDB2FB55698", _ch(pickupHash), _fv(x), _fv(y), _fv(z), placeOnGround, _ch(modelHash), _r, _ri);
};

window.CreatePortablePickup_2 = function (pickupHash, x, y, z, placeOnGround, modelHash) {
	return _in("0x125494B98A21AAF7", _ch(pickupHash), _fv(x), _fv(y), _fv(z), placeOnGround, _ch(modelHash), _r, _ri);
};

window.CreateRandomPed = function (posX, posY, posZ) {
	return _in("0xB4AC7D0CF06BFE8F", _fv(posX), _fv(posY), _fv(posZ), _r, _ri);
};

window.CreateRandomPedAsDriver = function (vehicle, returnHandle) {
	return _in("0x9B62392B474F44A0", vehicle, returnHandle, _r, _ri);
};

window.CreateScriptVehicleGenerator = function (x, y, z, heading, p4, p5, modelHash, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16) {
	return _in("0x9DEF883114668116", _fv(x), _fv(y), _fv(z), _fv(heading), _fv(p4), _fv(p5), _ch(modelHash), p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, _r, _ri);
};

window.CreateSynchronizedScene = function (x, y, z, roll, pitch, yaw, p6) {
	return _in("0x8C18E0F9080ADD73", _fv(x), _fv(y), _fv(z), _fv(roll), _fv(pitch), _fv(yaw), p6, _r, _ri);
};

window.CreateTrackedPoint = function () {
	return _in("0xE2C9439ED45DEA60", _r, _ri);
};

window.CreateVehicle = function (modelHash, x, y, z, heading, isNetwork, p6) {
	return _in("0xAF35D0D2583051B0", _ch(modelHash), _fv(x), _fv(y), _fv(z), _fv(heading), isNetwork, p6, _r, _ri);
};

window.CreateWeaponObject = function (weaponHash, ammoCount, x, y, z, showWorldModel, heading, p7) {
	return _in("0x9541D3CF0D398F36", _ch(weaponHash), ammoCount, _fv(x), _fv(y), _fv(z), showWorldModel, _fv(heading), p7, _r, _ri);
};

window.CustomMenuCoordinates = function (p0) {
	return _in("0x487A82C650EB7799", _fv(p0));
};

window.DatafileCreate = function () {
	return _in("0xD27058A1CA2B13EE");
};

window.DatafileDelete = function () {
	return _in("0x9AB9C1CFC8862DFB");
};

window.DatafileGetFileDict = function () {
	return _in("0x906B778CA1DC72B6", _r, _s);
};

window.DatafileIsSavePending = function () {
	return _in("0xBEDB96A7584AA8CF", _r);
};

window.DecorExistOn = function (entity, propertyName) {
	return _in("0x05661B80A8C9165F", entity, _ts(propertyName), _r);
};

window.DecorGetBool = function (entity, propertyName) {
	return _in("0xDACE671663F2F5DB", entity, _ts(propertyName), _r);
};

window.DecorGetFloat = function (entity, propertyName) {
	return _in("0x6524A2F114706F43", entity, _ts(propertyName), _r, _rf);
};

window.DecorGetInt = function (entity, propertyName) {
	return _in("0xA06C969B02A97298", entity, _ts(propertyName), _r, _ri);
};

window.DecorIsRegisteredAsType = function (propertyName, type) {
	return _in("0x4F14F9F870D6FBC8", _ts(propertyName), type, _r);
};

window.DecorRegister = function (propertyName, type) {
	return _in("0x9FD90732F56403CE", _ts(propertyName), type);
};

window.DecorRegisterLock = function () {
	return _in("0xA9D14EEA259F9248");
};

window.DecorRemove = function (entity, propertyName) {
	return _in("0x00EE9F297C738720", entity, _ts(propertyName), _r);
};

window.DecorSetBool = function (entity, propertyName, value) {
	return _in("0x6B1E8E2ED1335B71", entity, _ts(propertyName), value, _r);
};

window.DecorSetFloat = function (entity, propertyName, value) {
	return _in("0x211AB1DD8D0F363A", entity, _ts(propertyName), _fv(value), _r);
};

window.DecorSetInt = function (entity, propertyName, value) {
	return _in("0x0CE3AA5E1CA19E10", entity, _ts(propertyName), value, _r);
};

window.DecorSetTime = function (entity, propertyName, value) {
	return _in("0x95AED7B8E39ECAA4", entity, _ts(propertyName), value, _r);
};

window.DeleteAllTrains = function () {
	return _in("0x736A718577F39C7D");
};

window.DeleteCheckpoint = function (checkpoint) {
	return _in("0xF5ED37F54CD4D52E", checkpoint);
};

window.DeleteChildRope = function (rope) {
	return _in("0xAA5D6B1888E4DB20", rope, _r, _ri);
};

window.DeleteEntity = function (entity) {
	return _in("0xAE3CBE5BF394C9C9", _ii(entity) /* may be optional */);
};

window.DeleteFunctionReference = function (referenceIdentity) {
	return _in("0x1e86f206", _ts(referenceIdentity));
};

window.DeleteIncident = function (incidentId) {
	return _in("0x556C1AA270D5A207", incidentId);
};

window.DeleteMissionTrain = function (train) {
	return _in("0x5B76B14AE875C795", _ii(train) /* may be optional */);
};

window.DeleteObject = function (object) {
	return _in("0x539E0AE3E6634B9F", _ii(object) /* may be optional */);
};

window.DeletePatrolRoute = function (patrolRoute) {
	return _in("0x7767DD9D65E91319", _ts(patrolRoute));
};

window.DeletePed = function (ped) {
	return _in("0x9614299DCB53E54B", _ii(ped) /* may be optional */);
};

window.DeleteResourceKvp = function (key) {
	return _in("0x7389b5df", _ts(key));
};

window.DeleteRope = function (rope) {
	return _in("0x52B4829281364649", _ii(rope) /* may be optional */);
};

window.DeleteScriptVehicleGenerator = function (vehicleGenerator) {
	return _in("0x22102C9ABFCF125D", vehicleGenerator);
};

window.DeleteStuntJump = function (p0) {
	return _in("0xDC518000E39DAE1F", p0);
};

window.DeleteVehicle = function (vehicle) {
	return _in("0xEA386986E786A54F", _ii(vehicle) /* may be optional */);
};

window.DestroyAllCams = function (thisScriptCheck) {
	return _in("0x8E5FB15663F79120", thisScriptCheck);
};

window.DestroyCam = function (cam, thisScriptCheck) {
	return _in("0x865908C81A2C22E9", cam, thisScriptCheck);
};

window.DestroyItemset = function (p0) {
	return _in("0xDE18220B1C183EDA", p0);
};

window.DestroyMobilePhone = function () {
	return _in("0x3BC861DF703E5097");
};

window.DestroyPlayerInPauseMenu = function () {
	return _in("0x5B74EA8CFD5E3E7E", _r, _ri);
};

window.DestroyTrackedPoint = function (point) {
	return _in("0xB25DC90BAD56CA42", point);
};

window.DetachCam = function (cam) {
	return _in("0xA2FABBE87F4BAD82", cam);
};

window.DetachEntity = function (entity, p1, collision) {
	return _in("0x961AC54BF0613F5D", entity, p1, collision);
};

window.DetachPortablePickupFromPed = function (ped) {
	return _in("0xCF463D1E9A0AECB1", ped);
};

window.DetachRopeFromEntity = function (rope, entity) {
	return _in("0xBCF3026912A8647D", rope, entity);
};

window.DetachSynchronizedScene = function (sceneID) {
	return _in("0x6D38F1F04CBB37EA", sceneID);
};

window.DetachVehicleFromAnyCargobob = function (vehicle) {
	return _in("0xADF7BE450512C12F", vehicle, _r);
};

window.DetachVehicleFromAnyTowTruck = function (vehicle) {
	return _in("0xD0E9CE05A1E68CD8", vehicle, _r);
};

window.DetachVehicleFromCargobob = function (vehicle, cargobob) {
	return _in("0x0E21D3DF1051399D", vehicle, cargobob);
};

window.DetachVehicleFromTowTruck = function (towTruck, vehicle) {
	return _in("0xC2DB6B6708350ED8", towTruck, vehicle);
};

window.DetachVehicleFromTrailer = function (vehicle) {
	return _in("0x90532EDF0D2BDD86", vehicle);
};

window.DetachVehicleWindscreen = function (vehicle) {
	return _in("0x6D645D59FB5F5AD3", vehicle);
};

window.DisableAimCamThisUpdate = function () {
	return _in("0x1A31FE0049E542F6");
};

window.DisableAllControlActions = function (inputGroup) {
	return _in("0x5F4B6931816E599B", inputGroup);
};

window.DisableAutomaticRespawn = function (disableRespawn) {
	return _in("0x2C2B3493FBF51C71", disableRespawn);
};

window.DisableBlipNameForVar = function () {
	return _in("0x5C90988E7C8E1AF4", _r, _ri);
};

window.DisableControlAction = function (inputGroup, control, disable) {
	return _in("0xFE99B66D079CF6BC", inputGroup, control, disable);
};

window.DisableFirstPersonCamThisFrame = function () {
	return _in("0xDE2EF5DA284CC8DF");
};

window.DisableFrontendThisFrame = function () {
	return _in("0x6D3465A73092F0E6");
};

window.DisableHospitalRestart = function (hospitalIndex, toggle) {
	return _in("0xC8535819C450EBA8", hospitalIndex, toggle);
};

window.DisableInputGroup = function (inputGroup) {
	return _in("0x7F4724035FDCA1DD", inputGroup);
};

window.DisableInterior = function (interiorID, toggle) {
	return _in("0x6170941419D7D8EC", interiorID, toggle);
};

window.DisableInteriorProp = function (interiorID, propName) {
	return _in("0x420BD37289EEE162", interiorID, _ts(propName));
};

window.DisableNavmeshInArea = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x4C8872D8CDBE1B8B", p0, p1, p2, p3, p4, p5, p6);
};

window.DisablePedPainAudio = function (ped, toggle) {
	return _in("0xA9A41C1E940FB0E8", ped, toggle);
};

window.DisablePhoneThisFrame = function (toggle) {
	return _in("0x015C49A93E3E086E", toggle);
};

window.DisablePlaneAileron = function (vehicle, p1, p2) {
	return _in("0x23428FC53C60919C", vehicle, p1, p2);
};

window.DisablePlayerFiring = function (player, toggle) {
	return _in("0x5E6CC07646BBEAB8", player, toggle);
};

window.DisablePlayerVehicleRewards = function (player) {
	return _in("0xC142BE3BB9CE125F", player);
};

window.DisablePoliceReports = function () {
	return _in("0xB4F90FAF7670B16F");
};

window.DisablePoliceRestart = function (policeIndex, toggle) {
	return _in("0x23285DED6EBD7EA3", policeIndex, toggle);
};

window.DisableRadarThisFrame = function () {
	return _in("0x5FBAE526203990C9");
};

window.DisableScriptBrainSet = function (brainSet) {
	return _in("0x14D8518E9760F08F", brainSet);
};

window.DisableStuntJumpSet = function (p0) {
	return _in("0xA5272EBEDD4747F6", p0);
};

window.DisableVehicleDistantlights = function (toggle) {
	return _in("0xC9F98AC1884E73A2", toggle);
};

window.DisableVehicleFirstPersonCamThisFrame = function () {
	return _in("0xADFF1B2A555F5FBA");
};

window.DisableVehicleImpactExplosionActivation = function (vehicle, toggle) {
	return _in("0xD8050E0EB60CF274", vehicle, toggle);
};

window.DisableVehicleWeapon = function (disabled, weaponHash, vehicle, owner) {
	return _in("0xF4FC6A6F67D8D856", disabled, _ch(weaponHash), vehicle, owner);
};

window.DisplayAmmoThisFrame = function (display) {
	return _in("0xA5E78BA2B1331C55", display);
};

window.DisplayAreaName = function (toggle) {
	return _in("0x276B6CE369C33678", toggle);
};

window.DisplayCash = function (toggle) {
	return _in("0x96DEC8D5430208B7", toggle);
};

window.DisplayDistantVehicles = function (toggle) {
	return _in("0xF796359A959DF65D", toggle);
};

window.DisplayHelpTextThisFrame = function (message, p1) {
	return _in("0x960C9FF8F616E41C", _ts(message), p1);
};

window.DisplayHud = function (toggle) {
	return _in("0xA6294919E56FF02A", toggle);
};

window.DisplayOnscreenKeyboard = function (p0, windowTitle, p2, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength) {
	return _in("0x00DC833F2568DBF6", p0, _ts(windowTitle), _ts(p2), _ts(defaultText), _ts(defaultConcat1), _ts(defaultConcat2), _ts(defaultConcat3), maxInputLength);
};

window.DisplayOnscreenKeyboard_2 = function (p0, windowTitle, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, defaultConcat4, defaultConcat5, defaultConcat6, defaultConcat7, maxInputLength) {
	return _in("0xCA78CFA0366592FE", p0, _ts(windowTitle), _i, _ts(defaultText), _ts(defaultConcat1), _ts(defaultConcat2), _ts(defaultConcat3), _ts(defaultConcat4), _ts(defaultConcat5), _ts(defaultConcat6), _ts(defaultConcat7), maxInputLength);
};

window.DisplayRadar = function (Toggle) {
	return _in("0xA0EBB943C300E693", Toggle, _r, _ri);
};

window.DisplaySniperScopeThisFrame = function () {
	return _in("0x73115226F4814E62");
};

window.DisplaySystemSigninUi = function (unk) {
	return _in("0x94DD7888C10A979E", unk);
};

window.DisposeSynchronizedScene = function (scene) {
	return _in("0xCD9CC7E200A52A6F", scene);
};

window.DoAutoSave = function () {
	return _in("0x50EEAAD86232EE55");
};

window.DoScreenFadeIn = function (duration) {
	return _in("0xD4E8E24955024033", duration);
};

window.DoScreenFadeOut = function (duration) {
	return _in("0x891B5B39AC6302AF", duration);
};

window.DoesAnimDictExist = function (animDict) {
	return _in("0x2DA49C3B79856961", _ts(animDict), _r);
};

window.DoesBlipExist = function (blip) {
	return _in("0xA6DB27D19ECBB7DA", blip, _r);
};

window.DoesCamExist = function (cam) {
	return _in("0xA7A932170592B50E", cam, _r);
};

window.DoesCargobobHavePickUpRope = function (cargobob) {
	return _in("0x1821D91AD4B56108", cargobob, _r);
};

window.DoesCargobobHavePickupMagnet = function (cargobob) {
	return _in("0x6E08BF5B3722BAC9", cargobob, _r);
};

window.DoesCutsceneEntityExist = function (cutsceneEntName, modelHash) {
	return _in("0x499EF20C5DB25C59", _ts(cutsceneEntName), _ch(modelHash), _r);
};

window.DoesDesObjectExist = function (handle) {
	return _in("0x52AF537A0C5B8AAD", handle, _r);
};

window.DoesDoorExist = function (doorHash) {
	return _in("0xC153C43EA202C8C1", _ch(doorHash), _r);
};

window.DoesEntityBelongToThisScript = function (entity, p1) {
	return _in("0xDDE6DF5AE89981D2", entity, p1, _r);
};

window.DoesEntityExist = function (entity) {
	return _in("0x7239B21A38F536BA", entity, _r);
};

window.DoesEntityHaveDrawable = function (entity) {
	return _in("0x060D6E96F8B8E48D", entity, _r);
};

window.DoesEntityHavePhysics = function (entity) {
	return _in("0xDA95EA3317CC5064", entity, _r);
};

window.DoesExtraExist = function (vehicle, extraId) {
	return _in("0x1262D55792428154", vehicle, extraId, _r);
};

window.DoesGroupExist = function (groupId) {
	return _in("0x7C6B0C22F9F40BBE", groupId, _r);
};

window.DoesNavmeshBlockingObjectExist = function (p0) {
	return _in("0x0EAEB0DB4B132399", p0, _r);
};

window.DoesObjectOfTypeExistAtCoords = function (x, y, z, radius, hash, p5) {
	return _in("0xBFA48E2FF417213F", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(hash), p5, _r);
};

window.DoesParticleFxLoopedExist = function (ptfxHandle) {
	return _in("0x74AFEF0D2E1E409B", ptfxHandle, _r);
};

window.DoesPedHaveAiBlip = function (ped) {
	return _in("0x15B8ECF844EE67ED", ped, _r);
};

window.DoesPickupExist = function (pickup) {
	return _in("0xAFC1CA75AD4074D1", pickup, _r);
};

window.DoesPickupObjectExist = function (pickupObject) {
	return _in("0xD9EFB6DBF7DAAEA3", pickupObject, _r);
};

window.DoesRopeExist = function (rope) {
	return _in("0xFD5448BE3111ED96", _ii(rope) /* may be optional */, _r);
};

window.DoesScenarioExistInArea = function (x, y, z, radius, b) {
	return _in("0x5A59271FFADD33C1", _fv(x), _fv(y), _fv(z), _fv(radius), b, _r);
};

window.DoesScenarioGroupExist = function (scenarioGroup) {
	return _in("0xF9034C136C9E00D3", _ts(scenarioGroup), _r);
};

window.DoesScenarioOfTypeExistInArea = function (p0, p1, p2, p4, p5) {
	return _in("0x0A9D0C2A3BBC86C1", _fv(p0), _fv(p1), _fv(p2), _i, _fv(p4), p5, _r);
};

window.DoesScriptExist = function (scriptName) {
	return _in("0xFC04745FBE67C19A", _ts(scriptName), _r);
};

window.DoesScriptVehicleGeneratorExist = function (vehicleGenerator) {
	return _in("0xF6086BC836400876", vehicleGenerator, _r);
};

window.DoesScriptWithNameHashExist = function (scriptHash) {
	return _in("0xF86AA3C56BA31381", _ch(scriptHash), _r);
};

window.DoesScriptedCoverPointExistAtCoords = function (x, y, z) {
	return _in("0xA98B8E3C088E5A31", _fv(x), _fv(y), _fv(z), _r);
};

window.DoesTextBlockExist = function (gxt) {
	return _in("0x1C7302E725259789", _ts(gxt), _r);
};

window.DoesTextLabelExist = function (gxt) {
	return _in("0xAC09CA973C564252", _ts(gxt), _r);
};

window.DoesVehicleExistWithDecorator = function (decorator) {
	return _in("0x956B409B984D9BF7", _ts(decorator), _r);
};

window.DoesVehicleHaveDecal = function (vehicle, p1) {
	return _in("0x060D935D3981A275", vehicle, p1, _r);
};

window.DoesVehicleHaveDoor = function (vehicle, doorIndex) {
	return _in("0x645F4B6E8499F632", vehicle, doorIndex, _r);
};

window.DoesVehicleHaveRoof = function (vehicle) {
	return _in("0x8AC862B0B32C5B80", vehicle, _r);
};

window.DoesVehicleHaveStuckVehicleCheck = function (vehicle) {
	return _in("0x57E4C39DE5EE8470", vehicle, _r);
};

window.DoesVehicleHaveWeapons = function (vehicle) {
	return _in("0x25ECB9F8017D98E0", vehicle, _r);
};

window.DoesWeaponTakeWeaponComponent = function (weaponHash, componentHash) {
	return _in("0x5CEE3DF569CECAB0", _ch(weaponHash), _ch(componentHash), _r);
};

window.DoorControl = function (doorHash, x, y, z, locked, p5, p6, p7) {
	return _in("0x9B12F9A24FABEDB0", _ch(doorHash), _fv(x), _fv(y), _fv(z), locked, _fv(p5), _fv(p6), _fv(p7));
};

window.DownloadCheck = function () {
	return _in("0x4F18196C8D38768D");
};

window.DrawBox = function (x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
	return _in("0xD3A9971CADAC7252", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha);
};

window.DrawDebugBox = function (x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
	return _in("0x083A2CA4F2E573BD", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha);
};

window.DrawDebugCross = function (x, y, z, size, red, green, blue, alpha) {
	return _in("0x73B1189623049839", _fv(x), _fv(y), _fv(z), _fv(size), red, green, blue, alpha);
};

window.DrawDebugLine = function (x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
	return _in("0x7FDFADE676AA3CB0", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha);
};

window.DrawDebugLineWithTwoColours = function (x1, y1, z1, x2, y2, z2, r1, g1, b1, r2, g2, b2, alpha1, alpha2) {
	return _in("0xD8B9A8AC5608FF94", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), r1, g1, b1, r2, g2, b2, alpha1, alpha2);
};

window.DrawDebugSphere = function (x, y, z, radius, red, green, blue, alpha) {
	return _in("0xAAD68E1AB39DA632", _fv(x), _fv(y), _fv(z), _fv(radius), red, green, blue, alpha);
};

window.DrawDebugText = function (text, x, y, z, red, green, blue, alpha) {
	return _in("0x3903E216620488E8", _ts(text), _fv(x), _fv(y), _fv(z), red, green, blue, alpha);
};

window.DrawDebugText_2d = function (text, x, y, z, red, green, blue, alpha) {
	return _in("0xA3BB2E9555C05A8F", _ts(text), _fv(x), _fv(y), _fv(z), red, green, blue, alpha);
};

window.DrawLightWithRange = function (posX, posY, posZ, colorR, colorG, colorB, range, intensity) {
	return _in("0xF2A1B2771A01DBD4", _fv(posX), _fv(posY), _fv(posZ), colorR, colorG, colorB, _fv(range), _fv(intensity));
};

window.DrawLightWithRangeAndShadow = function (x, y, z, r, g, b, range, intensity, shadow) {
	return _in("0xF49E9A9716A04595", _fv(x), _fv(y), _fv(z), r, g, b, _fv(range), _fv(intensity), _fv(shadow));
};

window.DrawLine = function (x1, y1, z1, x2, y2, z2, red, green, blue, alpha) {
	return _in("0x6B7256074AE34680", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha);
};

window.DrawMarker = function (type, posX, posY, posZ, dirX, dirY, dirZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, red, green, blue, alpha, bobUpAndDown, faceCamera, p19, rotate, textureDict, textureName, drawOnEnts) {
	return _in("0x28477EC23D892089", type, _fv(posX), _fv(posY), _fv(posZ), _fv(dirX), _fv(dirY), _fv(dirZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(scaleX), _fv(scaleY), _fv(scaleZ), red, green, blue, alpha, bobUpAndDown, faceCamera, p19, rotate, _ts(textureDict), _ts(textureName), drawOnEnts);
};

window.DrawNotification = function (blink, p1) {
	return _in("0x2ED7843F8F801023", blink, p1, _r, _ri);
};

window.DrawNotificationIcon = function (p0, p1, p2, p3, p4) {
	return _in("0xAA295B6F28BD587D", _ts(p0), _ts(p1), p2, p3, _ts(p4), _r, _ri);
};

window.DrawNotification_2 = function (blink, p1) {
	return _in("0x44FA03975424A0EE", blink, p1, _r, _ri);
};

window.DrawNotification_3 = function (blink, p1) {
	return _in("0x378E809BF61EC840", blink, p1, _r, _ri);
};

window.DrawNotification_4 = function (blink, p1) {
	return _in("0xF020C96915705B3A", blink, p1, _r, _ri);
};

window.DrawPoly = function (x1, y1, z1, x2, y2, z2, x3, y3, z3, red, green, blue, alpha) {
	return _in("0xAC26716048436851", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(x3), _fv(y3), _fv(z3), red, green, blue, alpha);
};

window.DrawRect = function (x, y, width, height, r, g, b, a) {
	return _in("0x3A618A217E5154F0", _fv(x), _fv(y), _fv(width), _fv(height), r, g, b, a);
};

window.DrawScaleformMovie = function (scaleformHandle, x, y, width, height, red, green, blue, alpha, unk) {
	return _in("0x54972ADAF0294A93", scaleformHandle, _fv(x), _fv(y), _fv(width), _fv(height), red, green, blue, alpha, unk);
};

window.DrawScaleformMovieFullscreen = function (scaleform, red, green, blue, alpha, unk) {
	return _in("0x0DF606929C105BE1", scaleform, red, green, blue, alpha, unk);
};

window.DrawScaleformMovieFullscreenMasked = function (scaleform1, scaleform2, red, green, blue, alpha) {
	return _in("0xCF537FDE4FBD4CE5", scaleform1, scaleform2, red, green, blue, alpha);
};

window.DrawScaleformMovie_3d = function (scaleform, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9, scaleX, scaleY, scaleZ, p13) {
	return _in("0x87D51D72255D4E78", scaleform, _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(p7), _fv(p8), _fv(p9), _fv(scaleX), _fv(scaleY), _fv(scaleZ), p13);
};

window.DrawScaleformMovie_3dNonAdditive = function (scaleform, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9, scaleX, scaleY, scaleZ, p13) {
	return _in("0x1CE592FDC749D6F5", scaleform, _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(p7), _fv(p8), _fv(p9), _fv(scaleX), _fv(scaleY), _fv(scaleZ), p13);
};

window.DrawSpotLight = function (posX, posY, posZ, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff) {
	return _in("0xD0F64B265C8C8B33", _fv(posX), _fv(posY), _fv(posZ), _fv(dirX), _fv(dirY), _fv(dirZ), colorR, colorG, colorB, _fv(distance), _fv(brightness), _fv(roundness), _fv(radius), _fv(falloff));
};

window.DrawSpotLightWithShadow = function (posX, posY, posZ, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff, shadow) {
	return _in("0x5BCA583A583194DB", _fv(posX), _fv(posY), _fv(posZ), _fv(dirX), _fv(dirY), _fv(dirZ), colorR, colorG, colorB, _fv(distance), _fv(brightness), _fv(roundness), _fv(radius), _fv(falloff), _fv(shadow));
};

window.DrawSprite = function (textureDict, textureName, screenX, screenY, width, height, heading, red, green, blue, alpha) {
	return _in("0xE7FFAE5EBF23D890", _ts(textureDict), _ts(textureName), _fv(screenX), _fv(screenY), _fv(width), _fv(height), _fv(heading), red, green, blue, alpha);
};

window.DrawTvChannel = function (xPos, yPos, xScale, yScale, rotation, red, green, blue, alpha) {
	return _in("0xFDDC2B4ED3C69DF0", _fv(xPos), _fv(yPos), _fv(xScale), _fv(yScale), _fv(rotation), red, green, blue, alpha);
};

window.DuplicateFunctionReference = function (referenceIdentity) {
	return _in("0xf4e2079d", _ts(referenceIdentity), _r, _s);
};

window.DynamicMixerRelatedFn = function (p0, p1, p2) {
	return _in("0x153973AB99FE8980", p0, _ts(p1), _fv(p2));
};

window.EjectJb700Roof = function (vehicle, x, y, z) {
	return _in("0xE38CB9D7D39FDBCC", vehicle, _fv(x), _fv(y), _fv(z));
};

window.EnableAlienBloodVfx = function (Toggle) {
	return _in("0x9DCE1F0F78260875", Toggle);
};

window.EnableAllControlActions = function (inputGroup) {
	return _in("0xA5FFE9B05F199DE7", inputGroup);
};

window.EnableClownBloodVfx = function (toggle) {
	return _in("0xD821490579791273", toggle);
};

window.EnableControlAction = function (inputGroup, control, enable) {
	return _in("0x351220255D64C155", inputGroup, control, enable);
};

window.EnableCrosshairThisFrame = function () {
	return _in("0xEA7F0AD7E9BA676F");
};

window.EnableDeathbloodSeethrough = function (p0) {
	return _in("0x4895BDEA16E7C080", p0);
};

window.EnableDispatchService = function (dispatchType, toggle) {
	return _in("0xDC0F817884CDD856", dispatchType, toggle);
};

window.EnableInteriorProp = function (interiorID, propName) {
	return _in("0x55E86AF2712B36A1", interiorID, _ts(propName));
};

window.EnableLaserSightRendering = function (toggle) {
	return _in("0xC8B46D7727D864AA", toggle);
};

window.EnableMovieSubtitles = function (toggle) {
	return _in("0x873FA65C778AD970", toggle);
};

window.EnableScriptBrainSet = function (brainSet) {
	return _in("0x67AA4D73F0CFA86B", brainSet);
};

window.EnableSpecialAbility = function (player, toggle) {
	return _in("0x181EC197DAEFE121", player, toggle);
};

window.EnableStuntJumpSet = function (p0) {
	return _in("0xE369A5783B866016", p0);
};

window.EnableTennisMode = function (ped, toggle, p2) {
	return _in("0x28A04B411933F8A6", ped, toggle, p2);
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

window.EndReplayStats = function () {
	return _in("0xA23E821FBDF8A5F2");
};

window.EndSrl = function () {
	return _in("0x0A41540E63C9EE17");
};

window.EndTextCommandClearPrint = function () {
	return _in("0xFCC75460ABA29378");
};

window.EndTextCommandDisplayHelp = function (p0, loop, beep, shape) {
	return _in("0x238FFE5C7B0498A6", p0, loop, beep, shape);
};

window.EndTextCommandDisplayText = function (x, y) {
	return _in("0xCD015E5BB0D96A57", _fv(x), _fv(y));
};

window.EndTextCommandGetLineCount = function (x, y) {
	return _in("0x9040DFB09BE75706", _fv(x), _fv(y), _r, _ri);
};

window.EndTextCommandGetWidth = function (font) {
	return _in("0x85F061DA64ED2F67", font, _r, _rf);
};

window.EndTextCommandIsMessageDisplayed = function () {
	return _in("0x8A9BA1AB3E237613", _r);
};

window.EndTextCommandIsThisHelpMessageBeingDisplayed = function (p0) {
	return _in("0x10BDDBFC529428DD", p0, _r);
};

window.EndTextCommandObjective = function (p0) {
	return _in("0xCFDBDF5AE59BA0F4", p0);
};

window.EndTextCommandPrint = function (duration, drawImmediately) {
	return _in("0x9D77056A530643F6", duration, drawImmediately);
};

window.EndTextCommandScaleformString = function () {
	return _in("0x362E2D3FE93A9959");
};

window.EndTextCommandScaleformString_2 = function () {
	return _in("0xAE4E8157D9ECF087");
};

window.EndTextCommandSetBlipName = function (blip) {
	return _in("0xBC38B49BCB83BC9B", blip);
};

window.EndTextCommandTimer = function (p0) {
	return _in("0xA86911979638106F", p0);
};

window.ExecuteCommand = function (commandString) {
	return _in("0x561c060b", _ts(commandString));
};

window.ExpandWorldLimits = function (x, y, z) {
	return _in("0x5006D96C995A5827", _fv(x), _fv(y), _fv(z));
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

window.ExplodePedHead = function (ped, weaponHash) {
	return _in("0x2D05CED3A38D0F3A", ped, _ch(weaponHash));
};

window.ExplodeProjectiles = function (ped, weaponHash, p2) {
	return _in("0xFC4BD125DE7611E4", ped, _ch(weaponHash), p2);
};

window.ExplodeVehicle = function (vehicle, isAudible, isInvisible) {
	return _in("0xBA71116ADF5B514C", vehicle, isAudible, isInvisible);
};

window.ExplodeVehicleInCutscene = function (vehicle, p1) {
	return _in("0x786A4EB67B01BF0B", vehicle, p1);
};

window.FadeDecalsInRange = function (p0, p1, p2, p3, p4) {
	return _in("0xD77EDADB0420E6E0", p0, p1, p2, p3, p4);
};

window.FadeOutLocalPlayer = function (p0) {
	return _in("0x416DBD4CD6ED8DD2", p0);
};

window.FilloutPmPlayerList = function (p1, p2) {
	return _in("0xCBBD7C4991B64809", _i, p1, p2, _r);
};

window.FilloutPmPlayerListWithNames = function (p2, p3) {
	return _in("0x716B6DB9D1886106", _i, _i, p2, p3, _r);
};

window.FindAnimEventPhase = function (animDictionary, animName, p2) {
	return _in("0x07F1BE2BCCAA27A7", _ts(animDictionary), _ts(animName), _ts(p2), _i, _i, _r);
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

window.FindRadioStationIndex = function (station) {
	return _in("0x8D67489793FF428B", station, _r, _ri);
};

window.FindSpawnPointInDirection = function (x1, y1, z1, x2, y2, z2, distance, spawnPoint) {
	return _in("0x6874E2190B0C1972", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(distance), _v, _r);
};

window.FixVehicleWindow = function (vehicle, index) {
	return _in("0x772282EBEB95E682", vehicle, index, _r, _ri);
};

window.FlashAbilityBar = function (toggle) {
	return _in("0x02CFBA0C9E9275CE", toggle);
};

window.FlashMinimapDisplay = function () {
	return _in("0xF2DD778C22B15BDA");
};

window.FlashWantedDisplay = function (p0) {
	return _in("0xA18AFB39081B6A1F", p0, _r, _ri);
};

window.Floor = function (value) {
	return _in("0xF34EE736CF047844", _fv(value), _r, _ri);
};

window.ForceAmbientSiren = function (value) {
	return _in("0x552369F549563AD5", value);
};

window.ForceCleanup = function (cleanupFlags) {
	return _in("0xBC8983F38F78ED51", cleanupFlags);
};

window.ForceCleanupForAllThreadsWithThisName = function (name, cleanupFlags) {
	return _in("0x4C68DDDDF0097317", _ts(name), cleanupFlags);
};

window.ForceCleanupForThreadWithThisId = function (id, cleanupFlags) {
	return _in("0xF745B37630DF176B", id, cleanupFlags);
};

window.ForceEntityAiAndAnimationUpdate = function (entity) {
	return _in("0x40FDEDB72F8293B2", entity);
};

window.ForcePedMotionState = function (ped, motionStateHash, p2, p3, p4) {
	return _in("0xF28965D04F570DCA", ped, _ch(motionStateHash), p2, p3, p4, _r);
};

window.ForcePedToOpenParachute = function (ped) {
	return _in("0x16E42E800B472221", ped);
};

window.ForceRoomForEntity = function (entity, interiorID, roomHashKey) {
	return _in("0x52923C4710DD9907", entity, interiorID, _ch(roomHashKey));
};

window.ForceSocialClubUpdate = function () {
	return _in("0xEB6891F03362FB12");
};

window.FormatFocusHeading = function (x, y, z, rad, p4, p5) {
	return _in("0x219C7B8D53E429FD", _fv(x), _fv(y), _fv(z), _fv(rad), p4, p5, _r, _ri);
};

window.FreezeEntityPosition = function (entity, toggle) {
	return _in("0x428CA6DBD1094446", entity, toggle);
};

window.FreezePedCameraRotation = function (ped) {
	return _in("0xFF287323B0E2C69A", ped);
};

window.FreezeRadioStation = function (radioStation) {
	return _in("0x344F393B027E38C3", _ts(radioStation));
};

window.GenerateDirectionsToCoord = function (x, y, z, p3) {
	return _in("0xF90125F1F79ECDF8", _fv(x), _fv(y), _fv(z), p3, _f, _f, _f, _r, _ri);
};

window.GetActiveScreenResolution = function () {
	return _in("0x873C9F3104101DD3", _i, _i);
};

window.GetActiveVehicleMissionType = function (veh) {
	return _in("0x534AEBA6E5ED4CAB", veh, _r, _ri);
};

window.GetAllVehicles = function (vehArray) {
	return _in("0x9B8E1BF04B51F2E8", _ii(vehArray) /* may be optional */, _r, _ri);
};

window.GetAllocatedStackSize = function () {
	return _in("0x8B3CA62B1EF19B62", _r, _ri);
};

window.GetAmmoInClip = function (ped, weaponHash, ammo) {
	return _in("0x2E1202248937775C", ped, _ch(weaponHash), _ii(ammo) /* may be optional */, _r);
};

window.GetAmmoInPedWeapon = function (ped, weaponhash) {
	return _in("0x015A522136D7F951", ped, _ch(weaponhash), _r, _ri);
};

window.GetAngleBetween_2dVectors = function (x1, y1, x2, y2) {
	return _in("0x186FC4BE848E1C92", _fv(x1), _fv(y1), _fv(x2), _fv(y2), _r, _rf);
};

window.GetAnimDuration = function (animDict, animName) {
	return _in("0xFEDDF04D62B8D790", _ts(animDict), _ts(animName), _r, _rf);
};

window.GetAnimInitialOffsetPosition = function (animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9) {
	return _in("0xBE22B26DD764C040", _ts(animDict), _ts(animName), _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), _fv(p8), p9, _r, _rv);
};

window.GetAnimInitialOffsetRotation = function (animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9) {
	return _in("0x4B805E6046EE9E47", _ts(animDict), _ts(animName), _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), _fv(p8), p9, _r, _rv);
};

window.GetAspectRatio = function (b) {
	return _in("0xF1307EF624A80D87", b, _r, _rf);
};

window.GetAudibleMusicTrackTextId = function () {
	return _in("0x50B196FC9ED6545B", _r, _ri);
};

window.GetBestPedWeapon = function (ped, p1) {
	return _in("0x8483E98E8B888AE2", ped, p1, _r, _ri);
};

window.GetBitsInRange = function (_var, rangeStart, rangeEnd) {
	return _in("0x53158863FCC0893A", _var, rangeStart, rangeEnd, _r, _ri);
};

window.GetBlipAlpha = function (blip) {
	return _in("0x970F608F0EE6C885", blip, _r, _ri);
};

window.GetBlipColour = function (blip) {
	return _in("0xDF729E8D20CF7327", blip, _r, _ri);
};

window.GetBlipCoords = function (blip) {
	return _in("0x586AFE3FF72D996E", blip, _r, _rv);
};

window.GetBlipFromEntity = function (entity) {
	return _in("0xBC8DBDCA2436F7E8", entity, _r, _ri);
};

window.GetBlipHudColour = function (blip) {
	return _in("0x729B5F1EFBC0AAEE", blip, _r, _ri);
};

window.GetBlipInfoIdCoord = function (blip) {
	return _in("0xFA7C7F0AADF25D09", blip, _r, _rv);
};

window.GetBlipInfoIdDisplay = function (blip) {
	return _in("0x1E314167F701DC3B", blip, _r, _ri);
};

window.GetBlipInfoIdEntityIndex = function (blip) {
	return _in("0x4BA4E2553AFEDC2C", blip, _r, _ri);
};

window.GetBlipInfoIdIterator = function () {
	return _in("0x186E5D252FA50E7D", _r, _ri);
};

window.GetBlipInfoIdPickupIndex = function (blip) {
	return _in("0x9B6786E4C03DD382", blip, _r, _ri);
};

window.GetBlipInfoIdType = function (blip) {
	return _in("0xBE9B0959FFD0779B", blip, _r, _ri);
};

window.GetBlipSprite = function (blip) {
	return _in("0x1FC877464A04FC4F", blip, _r, _ri);
};

window.GetBoatAnchor = function (vehicle) {
	return _in("0x26C10ECBDA5D043B", vehicle, _r);
};

window.GetCamAnimCurrentPhase = function (cam) {
	return _in("0xA10B2DB49E92A6B0", cam, _r, _rf);
};

window.GetCamCoord = function (cam) {
	return _in("0xBAC038F7459AE5AE", cam, _r, _rv);
};

window.GetCamFarClip = function (cam) {
	return _in("0xB60A9CFEB21CA6AA", cam, _r, _rf);
};

window.GetCamFarDof = function (cam) {
	return _in("0x255F8DAFD540D397", cam, _r, _rf);
};

window.GetCamFov = function (cam) {
	return _in("0xC3330A45CCCDB26A", cam, _r, _rf);
};

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
window.GetCamMatrix = function (camera) {
	return _in("0x8f57a89d", camera, _v, _v, _v, _v);
};

window.GetCamNearClip = function (cam) {
	return _in("0xC520A34DAFBF24B1", cam, _r, _rf);
};

window.GetCamRot = function (cam, rotationOrder) {
	return _in("0x7D304C1C955E3E12", cam, rotationOrder, _r, _rv);
};

window.GetCamSplineNodeIndex = function (cam) {
	return _in("0xB22B17DF858716A6", cam, _r);
};

window.GetCamSplineNodePhase = function (cam) {
	return _in("0xD9D0E694C8282C96", cam, _r, _rf);
};

window.GetCamSplinePhase = function (cam) {
	return _in("0xB5349E36C546509A", cam, _r, _rf);
};

window.GetCargobobHookPosition = function (cargobob) {
	return _in("0xCBDB9B923CACC92D", cargobob, _r, _rv);
};

window.GetCauseOfMostRecentForceCleanup = function () {
	return _in("0x9A41CF4674A12272", _r, _ri);
};

window.GetCgoffset = function (rope) {
	return _in("0x8214A4B5A7A33612", rope, _r, _rv);
};

window.GetClipSetForScriptedGunTask = function (p0) {
	return _in("0x3A8CADC7D37AACC5", p0, _r, _s);
};

window.GetClockDayOfMonth = function () {
	return _in("0x3D10BC92A4DB1D35", _r, _ri);
};

window.GetClockDayOfWeek = function () {
	return _in("0xD972E4BD7AEB235F", _r, _ri);
};

window.GetClockHours = function () {
	return _in("0x25223CA6B4D20B7F", _r, _ri);
};

window.GetClockMinutes = function () {
	return _in("0x13D2B8ADD79640F2", _r, _ri);
};

window.GetClockMonth = function () {
	return _in("0xBBC72712E80257A1", _r, _ri);
};

window.GetClockSeconds = function () {
	return _in("0x494E97C2EF27C470", _r, _ri);
};

window.GetClockYear = function () {
	return _in("0x961777E64BDAF717", _r, _ri);
};

window.GetClosestFirePos = function (x, y, z) {
	return _in("0x352A9F6BCF90081F", _v, _fv(x), _fv(y), _fv(z), _r);
};

window.GetClosestMajorVehicleNode = function (x, y, z, unknown1, unknown2) {
	return _in("0x2EABE3B06F58C1BE", _fv(x), _fv(y), _fv(z), _v, _fv(unknown1), unknown2, _r);
};

window.GetClosestObjectOfType = function (x, y, z, radius, modelHash, isMission, p6, p7) {
	return _in("0xE143FA2249364369", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(modelHash), isMission, p6, p7, _r, _ri);
};

window.GetClosestPed = function (x, y, z, radius, p4, p5, p7, p8, pedType) {
	return _in("0xC33AB876A77F8164", _fv(x), _fv(y), _fv(z), _fv(radius), p4, p5, _i, p7, p8, pedType, _r);
};

window.GetClosestRoad = function (x, y, z, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x132F52BBA570FE92", _fv(x), _fv(y), _fv(z), p3, p4, p5, p6, p7, p8, p9, p10, _r, _ri);
};

window.GetClosestVehicle = function (x, y, z, radius, modelHash, flags) {
	return _in("0xF73EB622C4F1689B", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(modelHash), flags, _r, _ri);
};

window.GetClosestVehicleNode = function (x, y, z, nodeType, p5, p6) {
	return _in("0x240A18690AE96513", _fv(x), _fv(y), _fv(z), _v, nodeType, _fv(p5), _fv(p6), _r);
};

window.GetClosestVehicleNodeWithHeading = function (x, y, z, nodeType, p6, p7) {
	return _in("0xFF071FB798B803B0", _fv(x), _fv(y), _fv(z), _v, _f, nodeType, _fv(p6), p7, _r);
};

window.GetCloudHatOpacity = function () {
	return _in("0x20AC25E781AE4A84", _r, _rf);
};

window.GetCollisionNormalOfLastHitForEntity = function (entity) {
	return _in("0xE465D4AB7CA6AE72", entity, _r, _rv);
};

window.GetCombatFloat = function (ped, p1) {
	return _in("0x52DFF8A10508090A", ped, p1, _r, _rf);
};

window.GetContentCategory = function (p0) {
	return _in("0xA7BAB11E7C9C6C5A", p0, _r, _ri);
};

window.GetContentDescriptionHash = function (p0) {
	return _in("0x7CF0448787B23758", p0, _r, _ri);
};

window.GetContentFileVersion = function (p0, p1) {
	return _in("0x37025B27D9B658B1", p0, p1, _r, _ri);
};

window.GetContentId = function (p0) {
	return _in("0x55AA95F481D694D2", p0, _r, _s);
};

window.GetContentUserId = function (p0) {
	return _in("0xCD67AD041A394C9C", p0, _r, _s);
};

window.GetControlInstructionalButton = function (inputGroup, control, p2) {
	return _in("0x0499D7B09FC9B407", inputGroup, control, p2, _r, _s);
};

window.GetControlNormal = function (inputGroup, control) {
	return _in("0xEC3C9B8D5327B563", inputGroup, control, _r, _rf);
};

window.GetControlValue = function (inputGroup, control) {
	return _in("0xD95E79E8686D2C27", inputGroup, control, _r, _ri);
};

window.GetConvertibleRoofState = function (vehicle) {
	return _in("0xF8C397922FC03F41", vehicle, _r, _ri);
};

window.GetCurrentFrontendMenu = function () {
	return _in("0x2309595AD6145265", _r, _ri);
};

window.GetCurrentLanguageId = function () {
	return _in("0x2BDD44CC428A7EAE", _r, _ri);
};

window.GetCurrentNotification = function () {
	return _in("0x82352748437638CA", _r, _ri);
};

window.GetCurrentPedVehicleWeapon = function (ped, weaponHash) {
	return _in("0x1017582BCD3832DC", ped, _ii(weaponHash) /* may be optional */, _r);
};

window.GetCurrentPedWeapon = function (ped, p2) {
	return _in("0x3A87E44BB9A01D54", ped, _i, p2, _r);
};

window.GetCurrentPedWeaponEntityIndex = function (ped) {
	return _in("0x3B390A939AF0B5FC", ped, _r, _ri);
};

window.GetCurrentPlaybackForVehicle = function (p0) {
	return _in("0x42BC05C27A946054", p0, _r, _ri);
};

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
window.GetCurrentResourceName = function () {
	return _in("0xe5e9ebbb", _r, _s);
};

window.GetCurrentScriptedConversationLine = function () {
	return _in("0x480357EE890C295A", _r, _ri);
};

window.GetCurrentWebsiteId = function () {
	return _in("0x97D47996FC48CBAD", _r, _ri);
};

window.GetCutsceneSectionPlaying = function () {
	return _in("0x49010A6A396553D8", _r, _ri);
};

window.GetCutsceneTime = function () {
	return _in("0xE625BEABBAFFDAB9", _r, _ri);
};

window.GetCutsceneTotalDuration = function () {
	return _in("0xEE53B14A19E480D4", _r, _ri);
};

window.GetDateAndTimeFromUnixEpoch = function (unixEpoch, timeStructure) {
	return _in("0xAC97AF97FA68E5D5", unixEpoch, _ii(timeStructure) /* may be optional */);
};

window.GetDeadPedPickupCoords = function (ped, p1, p2) {
	return _in("0xCD5003B097200F36", ped, _fv(p1), _fv(p2), _r, _rv);
};

window.GetDecalWashLevel = function (decal) {
	return _in("0x323F647679A09103", decal, _r, _rf);
};

window.GetDefaultScriptRendertargetRenderId = function () {
	return _in("0x52F0982D7FD156B6", _r, _ri);
};

window.GetDesObject = function (x, y, z, rotation, name) {
	return _in("0xB48FCED898292E52", _fv(x), _fv(y), _fv(z), _fv(rotation), _ts(name), _r, _ri);
};

window.GetDesObjectState = function (handle) {
	return _in("0x899BA936634A322E", handle, _r, _ri);
};

window.GetDisabledControlNormal = function (inputGroup, control) {
	return _in("0x11E65974A982637C", inputGroup, control, _r, _rf);
};

window.GetDisplayNameFromVehicleModel = function (modelHash) {
	return _in("0xB215AAC32D25D019", _ch(modelHash), _r, _s);
};

window.GetDistanceBetweenCoords = function (x1, y1, z1, x2, y2, z2, useZ) {
	return _in("0xF1B760881820C952", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), useZ, _r, _rf);
};

window.GetDlcVehicleData = function (dlcVehicleIndex, outData) {
	return _in("0x33468EDC08E371F6", dlcVehicleIndex, _ii(outData) /* may be optional */, _r);
};

window.GetDlcVehicleFlags = function (dlcVehicleIndex) {
	return _in("0x5549EE11FA22FCF2", dlcVehicleIndex, _r, _ri);
};

window.GetDlcVehicleModel = function (dlcVehicleIndex) {
	return _in("0xECC01B7C5763333C", dlcVehicleIndex, _r, _ri);
};

window.GetDlcWeaponComponentData = function (dlcWeaponIndex, dlcWeapCompIndex, ComponentDataPtr) {
	return _in("0x6CF598A2957C2BF8", dlcWeaponIndex, dlcWeapCompIndex, _ii(ComponentDataPtr) /* may be optional */, _r);
};

window.GetDlcWeaponData = function (dlcWeaponIndex, outData) {
	return _in("0x79923CD21BECE14E", dlcWeaponIndex, _ii(outData) /* may be optional */, _r);
};

window.GetEntityAlpha = function (entity) {
	return _in("0x5A47B3B5E63E94C6", entity, _r, _ri);
};

window.GetEntityAnimCurrentTime = function (entity, animDict, animName) {
	return _in("0x346D81500D088F42", entity, _ts(animDict), _ts(animName), _r, _rf);
};

window.GetEntityAnimTotalTime = function (entity, animDict, animName) {
	return _in("0x50BD2730B191E360", entity, _ts(animDict), _ts(animName), _r, _rf);
};

window.GetEntityAttachedTo = function (entity) {
	return _in("0x48C2BED9180FE123", entity, _r, _ri);
};

window.GetEntityAttachedToTowTruck = function (towTruck) {
	return _in("0xEFEA18DCF10F8F75", towTruck, _r, _ri);
};

window.GetEntityBoneIndexByName = function (entity, boneName) {
	return _in("0xFB71170B7E76ACBA", entity, _ts(boneName), _r, _ri);
};

window.GetEntityCollisonDisabled = function (entity) {
	return _in("0xCCF1E97BEFDAE480", entity, _r);
};

window.GetEntityCoords = function (entity, alive) {
	return _in("0x3FEF770D40960D5A", entity, alive, _r, _rv);
};

window.GetEntityForwardVector = function (entity) {
	return _in("0x0A794A5A57F8DF91", entity, _r, _rv);
};

window.GetEntityForwardX = function (entity) {
	return _in("0x8BB4EF4214E0E6D5", entity, _r, _rf);
};

window.GetEntityForwardY = function (entity) {
	return _in("0x866A4A5FAE349510", entity, _r, _rf);
};

window.GetEntityHeading = function (entity) {
	return _in("0xE83D4F9BA2A38914", entity, _r, _rf);
};

window.GetEntityHealth = function (entity) {
	return _in("0xEEF059FAD016D209", entity, _r, _ri);
};

window.GetEntityHeight = function (entity, X, Y, Z, atTop, inWorldCoords) {
	return _in("0x5A504562485944DD", entity, _fv(X), _fv(Y), _fv(Z), atTop, inWorldCoords, _r, _rf);
};

window.GetEntityHeightAboveGround = function (entity) {
	return _in("0x1DD55701034110E5", entity, _r, _rf);
};

window.GetEntityIndexOfCutsceneEntity = function (cutsceneEntName, modelHash) {
	return _in("0x0A2E9FDB9A8C62F6", _ts(cutsceneEntName), _ch(modelHash), _r, _ri);
};

window.GetEntityIndexOfRegisteredEntity = function (cutsceneEntName, modelHash) {
	return _in("0xC0741A26499654CD", _ts(cutsceneEntName), _ch(modelHash), _r, _ri);
};

window.GetEntityLodDist = function (entity) {
	return _in("0x4159C2762B5791D6", entity, _r, _ri);
};

window.GetEntityMatrix = function (entity) {
	return _in("0xECB2FC7235A7D137", entity, _v, _v, _v, _v);
};

window.GetEntityMaxHealth = function (entity) {
	return _in("0x15D757606D170C3C", entity, _r, _ri);
};

window.GetEntityModel = function (entity) {
	return _in("0x9F47B058362C84B5", entity, _r, _ri);
};

window.GetEntityPhysicsHeading = function (entity) {
	return _in("0x846BF6291198A71E", entity, _r, _rf);
};

window.GetEntityPitch = function (entity) {
	return _in("0xD45DC2893621E1FE", entity, _r, _rf);
};

window.GetEntityPlayerIsFreeAimingAt = function (player, entity) {
	return _in("0x2975C866E6713290", player, _ii(entity) /* may be optional */, _r);
};

window.GetEntityPopulationType = function (entity) {
	return _in("0xF6F5161F4534EDFF", entity, _r, _ri);
};

window.GetEntityQuaternion = function (entity) {
	return _in("0x7B3703D2D32DFA18", entity, _f, _f, _f, _f);
};

window.GetEntityRoll = function (entity) {
	return _in("0x831E0242595560DF", entity, _r, _rf);
};

window.GetEntityRotation = function (entity, rotationOrder) {
	return _in("0xAFBD61CC738D9EB9", entity, rotationOrder, _r, _rv);
};

window.GetEntityRotationVelocity = function (entity) {
	return _in("0x213B91045D09B983", entity, _r, _rv);
};

window.GetEntityScript = function (entity, script) {
	return _in("0xA6E9C38DB51D7748", entity, _ii(script) /* may be optional */, _r, _s);
};

window.GetEntitySpeed = function (entity) {
	return _in("0xD5037BA82E12416F", entity, _r, _rf);
};

window.GetEntitySpeedVector = function (entity, relative) {
	return _in("0x9A8D700A51CB7B0D", entity, relative, _r, _rv);
};

window.GetEntitySubmergedLevel = function (entity) {
	return _in("0xE81AFC1BC4CC41CE", entity, _r, _rf);
};

window.GetEntityType = function (entity) {
	return _in("0x8ACD366038D14505", entity, _r, _ri);
};

window.GetEntityUprightValue = function (entity) {
	return _in("0x95EED5A694951F9F", entity, _r, _rf);
};

window.GetEntityVelocity = function (entity) {
	return _in("0x4805D2B1D8CF94A9", entity, _r, _rv);
};

window.GetEntryPositionOfDoor = function (vehicle, doorIndex) {
	return _in("0xC0572928C0ABFDA3", vehicle, doorIndex, _r, _rv);
};

window.GetEventAtIndex = function (p0, p1) {
	return _in("0xD8F66A3A60C62153", p0, p1, _r, _ri);
};

window.GetEventData = function (p0, p1, p3) {
	return _in("0x2902843FCD2B2D79", p0, p1, _i, p3, _r);
};

window.GetEventExists = function (p0, p1) {
	return _in("0x936E6168A9BCEDB5", p0, p1, _r);
};

window.GetFakeWantedLevel = function () {
	return _in("0x4C9296CBCD1B971E", _r, _ri);
};

window.GetFirstBlipInfoId = function (blipSprite) {
	return _in("0x1BEDE233E6CD2A1F", blipSprite, _r, _ri);
};

window.GetFirstParentIdForPedType = function (type) {
	return _in("0x68D353AB88B97E0C", type, _r, _ri);
};

window.GetFollowPedCamViewMode = function () {
	return _in("0x8D4D46230B2C353A", _r, _ri);
};

window.GetFollowPedCamZoomLevel = function () {
	return _in("0x33E6C8EFD0CD93E9", _r, _ri);
};

window.GetFollowVehicleCamViewMode = function () {
	return _in("0xA4FF579AC0E3AAAE", _r, _ri);
};

window.GetFollowVehicleCamZoomLevel = function () {
	return _in("0xEE82280AB767B690", _r, _ri);
};

window.GetForcedComponent = function (componentHash, componentId) {
	return _in("0x6C93ED8C2F74859B", _ch(componentHash), componentId, _i, _i, _i);
};

window.GetFrameCount = function () {
	return _in("0xFC8202EFC642E6F2", _r, _ri);
};

window.GetFrameTime = function () {
	return _in("0x15C40837039FFAF7", _r, _rf);
};

window.GetFreeStackSlotsCount = function (stackSize) {
	return _in("0xFEAD16FC8F9DFC0F", stackSize, _r, _ri);
};

window.GetGameTimer = function () {
	return _in("0x9CD27B0045628463", _r, _ri);
};

window.GetGameplayCamCoord = function () {
	return _in("0x14D6F5678D8F1B37", _r, _rv);
};

window.GetGameplayCamCoords = function () {
	return _in("0xA200EB1EE790F448", _r, _rv);
};

window.GetGameplayCamFov = function () {
	return _in("0x65019750A0324133", _r, _rf);
};

window.GetGameplayCamRelativeHeading = function () {
	return _in("0x743607648ADD4587", _r, _rf);
};

window.GetGameplayCamRelativePitch = function () {
	return _in("0x3A6867B4845BEDA2", _r, _rf);
};

window.GetGameplayCamRot = function (rotationOrder) {
	return _in("0x837765A25378F0BB", rotationOrder, _r, _rv);
};

window.GetGameplayCamRot = function (rotationOrder) {
	return _in("0x5B4E4C817FCC2DFB", rotationOrder, _r, _rv);
};

window.GetGameplayCamZoom = function () {
	return _in("0x7EC52CC40597D170", _r, _rf);
};

window.GetGlobalCharBuffer = function () {
	return _in("0x24DA7D7667FD7B09", _r, _s);
};

window.GetGroundZFor_3dCoord = function (x, y, z, unk) {
	return _in("0xC906A7DAB05C8D2B", _fv(x), _fv(y), _fv(z), _f, unk, _r);
};

window.GetGroupSize = function (groupID) {
	return _in("0x8DE69FE35CA09A45", groupID, _i, _i);
};

window.GetHasLowerableWheels = function (vehicle) {
	return _in("0xDCA174A42133F08C", vehicle, _r);
};

window.GetHashKey = function (value) {
	return _in("0xD24D37CC275948CC", _ts(value), _r, _ri);
};

window.GetHashNameForComponent = function (entity, componentId, drawableVariant, textureVariant) {
	return _in("0x0368B3A838070348", entity, componentId, drawableVariant, textureVariant, _r, _ri);
};

window.GetHashNameForProp = function (entity, componentId, propIndex, propTextureIndex) {
	return _in("0x5D6160275CAEC8DD", entity, componentId, propIndex, propTextureIndex, _r, _ri);
};

window.GetHashOfMapAreaAtCoords = function (x, y, z) {
	return _in("0x7EE64D51E8498728", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.GetHashOfThisScriptName = function () {
	return _in("0x8A1C8B1738FFE87E", _r, _ri);
};

window.GetHeadingFromVector_2d = function (dx, dy) {
	return _in("0x2FFB6B224F4B2926", _fv(dx), _fv(dy), _r, _rf);
};

window.GetHeliEngineHealth = function (vehicle) {
	return _in("0xAC51915D27E4A5F7", vehicle, _r, _rf);
};

window.GetHeliMainRotorHealth = function (vehicle) {
	return _in("0xE4CB7541F413D2C5", vehicle, _r, _rf);
};

window.GetHeliTailRotorHealth = function (vehicle) {
	return _in("0xAE8CE82A4219AC8C", vehicle, _r, _rf);
};

window.GetHudColour = function (hudColorIndex) {
	return _in("0x7C9C91AB74A0360F", hudColorIndex, _i, _i, _i, _i);
};

window.GetHudComponentPosition = function (id) {
	return _in("0x223CA69A8C4417FD", id, _r, _rv);
};

window.GetIdOfNextThreadInEnumeration = function () {
	return _in("0x30B4FA1C82DD4B9F", _r, _ri);
};

window.GetIdOfThisThread = function () {
	return _in("0xC30338E8088E2E21", _r, _ri);
};

window.GetIdealPlayerSwitchType = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xB5D7B26B45720E05", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r, _ri);
};

window.GetIndexOfCurrentLevel = function () {
	return _in("0xCBAD6729F7B1F4FC", _r, _ri);
};

window.GetIndexedItemInItemset = function (p0, p1) {
	return _in("0x7A197E2521EE2BAB", p0, p1, _r, _ri);
};

window.GetInstanceId = function () {
	return _in("0x9f1c4383", _r, _ri);
};

window.GetInteriorAtCoords = function (x, y, z) {
	return _in("0xB0F7F8663821D9C3", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.GetInteriorAtCoordsWithType = function (x, y, z, interiorType) {
	return _in("0x05B7A89BD78797FC", _fv(x), _fv(y), _fv(z), _ts(interiorType), _r, _ri);
};

window.GetInteriorFromCollision = function (x, y, z) {
	return _in("0xEC4CF9FCB29A4424", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.GetInteriorFromEntity = function (entity) {
	return _in("0x2107BA504071A6BB", entity, _r, _ri);
};

window.GetInteriorGroupId = function (interiorID) {
	return _in("0xE4A84ABF135EF91A", interiorID, _r, _ri);
};

window.GetIsHidef = function () {
	return _in("0x84ED31191CC5D2C9", _r);
};

window.GetIsLeftVehicleHeadlightDamaged = function (vehicle) {
	return _in("0x5EF77C9ADD3B11A3", vehicle, _r);
};

window.GetIsLoadingScreenActive = function () {
	return _in("0x10D0A8F259E93EC9", _r);
};

window.GetIsMultiplayerBrief = function (p0) {
	return _in("0xE3433EADAAF7EE40", p0);
};

window.GetIsPedGadgetEquipped = function (ped, gadgetHash) {
	return _in("0xF731332072F5156C", ped, _ch(gadgetHash), _r);
};

window.GetIsRightVehicleHeadlightDamaged = function (vehicle) {
	return _in("0xA7ECB73355EB2F20", vehicle, _r);
};

window.GetIsSlowRoadFlag = function (nodeID) {
	return _in("0x4F5070AA58F69279", nodeID, _r);
};

window.GetIsTaskActive = function (ped, taskNumber) {
	return _in("0xB0760331C7AA4155", ped, taskNumber, _r);
};

window.GetIsVehicleEngineRunning = function (vehicle) {
	return _in("0xAE31E7DF9B5B132E", vehicle, _r);
};

window.GetIsVehiclePrimaryColourCustom = function (vehicle) {
	return _in("0xF095C0405307B21B", vehicle, _r);
};

window.GetIsVehicleSecondaryColourCustom = function (vehicle) {
	return _in("0x910A32E7AAD2656C", vehicle, _r);
};

window.GetIsWaypointRecordingLoaded = function (name) {
	return _in("0xCB4E8BE8A0063C5D", _ts(name), _r);
};

window.GetIsWidescreen = function () {
	return _in("0x30CF4BDA4FCB1905", _r);
};

window.GetItemsetSize = function (p0) {
	return _in("0xD9127E83ABF7C631", p0, _r, _ri);
};

window.GetJackTarget = function (ped) {
	return _in("0x5486A79D9FBD342D", ped, _r, _ri);
};

window.GetKeyForEntityInRoom = function (entity) {
	return _in("0x399685DB942336BC", entity, _r, _ri);
};

window.GetLabelText = function (labelName) {
	return _in("0x7B5280EBA9840C72", _ts(labelName), _r, _s);
};

window.GetLandingGearState = function (vehicle) {
	return _in("0x9B0F3DCA3DB0F4CD", vehicle, _r, _ri);
};

window.GetLastDrivenVehicle = function () {
	return _in("0xB2D06FAEDE65B577", _r, _ri);
};

window.GetLastMaterialHitByEntity = function (entity) {
	return _in("0x5C3D0A935F535C4C", entity, _r, _ri);
};

window.GetLastPedInVehicleSeat = function (vehicle, seatIndex) {
	return _in("0x83F969AA1EE2A664", vehicle, seatIndex, _r, _ri);
};

window.GetLengthOfLiteralString = function (string) {
	return _in("0xF030907CCBB8A9FD", _ts(string), _r, _ri);
};

window.GetLengthOfString = function (p0) {
	return _in("0x43E4111189E54F0E", _ts(p0), _r, _ri);
};

window.GetLengthOfStringWithThisTextLabel = function (gxt) {
	return _in("0x801BD273D3A23F74", _ts(gxt), _r, _ri);
};

window.GetLiveryName = function (vehicle, liveryIndex) {
	return _in("0xB4C7A93837C91A1F", vehicle, liveryIndex, _r, _s);
};

window.GetLocalPlayerAimState = function () {
	return _in("0xBB41AFBBBC0A0287", _r, _ri);
};

window.GetLocalTime = function () {
	return _in("0x50C7A99057A69748", _i, _i, _i, _i, _i, _i);
};

window.GetLockonRangeOfCurrentPedWeapon = function (ped) {
	return _in("0x840F03E9041E2C9C", ped, _r, _rf);
};

window.GetMainPlayerBlipId = function () {
	return _in("0xDCD4EC3F419D02FA", _r, _ri);
};

window.GetMaxAmmo = function (ped, weaponHash, ammo) {
	return _in("0xDC16122C7A20C933", ped, _ch(weaponHash), _ii(ammo) /* may be optional */, _r);
};

window.GetMaxAmmoInClip = function (ped, weaponHash, p2) {
	return _in("0xA38DCFFCEA8962FA", ped, _ch(weaponHash), p2, _r, _ri);
};

window.GetMaxRangeOfCurrentPedWeapon = function (ped) {
	return _in("0x814C9D19DFD69679", ped, _r, _rf);
};

window.GetMaxWantedLevel = function () {
	return _in("0x462E0DB9B137DC5F", _r, _ri);
};

window.GetMaximumNumberOfPhotos = function () {
	return _in("0x34D23450F028B0BF", _r, _ri);
};

window.GetMeleeTargetForPed = function (ped) {
	return _in("0x18A3E9EE1297FD39", ped, _r, _ri);
};

window.GetMillisecondsPerGameMinute = function () {
	return _in("0x2F8B4D1C595B11DB", _r, _ri);
};

window.GetMissionFlag = function () {
	return _in("0xA33CDCCDA663159E", _r);
};

window.GetMobilePhonePosition = function (position) {
	return _in("0x584FDFDA48805B86", _v);
};

window.GetMobilePhoneRenderId = function (renderId) {
	return _in("0xB4A53E05F68B6FA1", _ii(renderId) /* may be optional */);
};

window.GetMobilePhoneRotation = function (p1) {
	return _in("0x1CEFB61F193070AE", _v, p1);
};

window.GetModSlotName = function (vehicle, modType) {
	return _in("0x51F0FEB9F6AE98C0", vehicle, modType, _r, _s);
};

window.GetModTextLabel = function (vehicle, modType, modValue) {
	return _in("0x8935624F8C5592CC", vehicle, modType, modValue, _r, _s);
};

window.GetModelDimensions = function (modelHash) {
	return _in("0x03E8D3D5F549087A", _ch(modelHash), _v, _v);
};

window.GetMount = function (ped) {
	return _in("0xE7E11B8DCBED1058", ped, _r, _ri);
};

window.GetMusicPlaytime = function () {
	return _in("0xE7A0D23DC414507B", _r, _ri);
};

window.GetNameOfThread = function (threadId) {
	return _in("0x05A42BA9FC8DA96B", threadId, _r, _s);
};

window.GetNameOfZone = function (x, y, z) {
	return _in("0xCD90657D4C30E1CA", _fv(x), _fv(y), _fv(z), _r, _s);
};

window.GetNamedRendertargetRenderId = function (p0) {
	return _in("0x1A6478B61C6BDC3B", _ts(p0), _r, _ri);
};

window.GetNavmeshRouteDistanceRemaining = function (ped) {
	return _in("0xC6F5C0BCDC74D62D", ped, _i, _i, _r, _ri);
};

window.GetNavmeshRouteResult = function (ped) {
	return _in("0x632E831F382A0FA8", ped, _r, _ri);
};

window.GetNearestPlayerToEntity = function (entity) {
	return _in("0x7196842CB375CDB3", entity, _r, _ri);
};

window.GetNearestPlayerToEntityOnTeam = function (entity, team) {
	return _in("0x4DC9A62F844D9337", entity, team, _r, _ri);
};

window.GetNetworkIdFromSoundId = function (soundId) {
	return _in("0x2DE3F0A134FFBC0D", soundId, _r, _ri);
};

window.GetNetworkTime = function () {
	return _in("0x7A5487FE9FAA6B48", _r, _ri);
};

window.GetNextBlipInfoId = function (blipSprite) {
	return _in("0x14F96AA50D6FBEA7", blipSprite, _r, _ri);
};

window.GetNextWeatherTypeHashName = function () {
	return _in("0x711327CD09C8F162", _r, _ri);
};

window.GetNgstatBoolHash = function (index, spStat, charStat, character, section) {
	return _in("0xBA52FF538ED2BC71", index, spStat, charStat, character, _ts(section), _r, _ri);
};

window.GetNgstatIntHash = function (index, spStat, charStat, character, section) {
	return _in("0x2B4CDCA6F07FF3DA", index, spStat, charStat, character, _ts(section), _r, _ri);
};

window.GetNoLoadingScreen = function () {
	return _in("0x18C1270EA7F199BC", _r);
};

window.GetNthClosestVehicleNode = function (x, y, z, nthClosest, unknown1, unknown2, unknown3) {
	return _in("0xE50E52416CCF948B", _fv(x), _fv(y), _fv(z), nthClosest, _v, unknown1, unknown2, unknown3, _r);
};

window.GetNthClosestVehicleNodeFavourDirection = function (x, y, z, desiredX, desiredY, desiredZ, nthClosest, nodetype, p10, p11) {
	return _in("0x45905BE8654AE067", _fv(x), _fv(y), _fv(z), _fv(desiredX), _fv(desiredY), _fv(desiredZ), nthClosest, _v, _f, nodetype, p10, p11, _r);
};

window.GetNthClosestVehicleNodeId = function (x, y, z, nth, nodetype, p5, p6) {
	return _in("0x22D7275A79FE8215", _fv(x), _fv(y), _fv(z), nth, nodetype, _fv(p5), _fv(p6), _r, _ri);
};

window.GetNthClosestVehicleNodeIdWithHeading = function (x, y, z, nthClosest, outHeading, p6, p7, p8) {
	return _in("0x6448050E9C2A7207", _fv(x), _fv(y), _fv(z), nthClosest, _v, _fv(outHeading), p6, _fv(p7), _fv(p8), _r, _ri);
};

window.GetNthClosestVehicleNodeWithHeading = function (x, y, z, nthClosest, unknown2, unknown3, unknown4) {
	return _in("0x80CA6A8B6C094CC4", _fv(x), _fv(y), _fv(z), nthClosest, _v, _f, _i, unknown2, _fv(unknown3), _fv(unknown4), _r);
};

window.GetNumDecorations = function (character) {
	return _in("0x278F76C3B0A8F109", character, _r, _ri);
};

window.GetNumDlcVehicles = function () {
	return _in("0xA7A866D21CD2329B", _r, _ri);
};

window.GetNumDlcWeaponComponents = function (dlcWeaponIndex) {
	return _in("0x405425358A7D61FE", dlcWeaponIndex, _r, _ri);
};

window.GetNumDlcWeapons = function () {
	return _in("0xEE47635F352DA367", _r, _ri);
};

window.GetNumForcedComponents = function (componentHash) {
	return _in("0xC6B9DB42C04DD8C3", _ch(componentHash), _r, _ri);
};

window.GetNumHairColors = function () {
	return _in("0xE5C0CF872C2AD150", _r, _ri);
};

window.GetNumHeadOverlayValues = function (overlayID) {
	return _in("0xCF1CE768BB43480E", overlayID, _r, _ri);
};

window.GetNumMakeupColors = function () {
	return _in("0xD1F7CA1535D22818", _r, _ri);
};

window.GetNumMembershipDesc = function () {
	return _in("0x1F471B79ACC90BEF", _r, _ri);
};

window.GetNumModColors = function (p0, p1) {
	return _in("0xA551BE18C11A476D", p0, p1, _r, _ri);
};

window.GetNumModKits = function (vehicle) {
	return _in("0x33F2E3FE70EAAE1D", vehicle, _r, _ri);
};

window.GetNumParentPedsOfType = function (type) {
	return _in("0x5EF37013A6539C9D", type, _r, _ri);
};

window.GetNumPropsFromOutfit = function (character, p1, p2, p3, p4, componentId) {
	return _in("0x9BDF59818B1E38C1", character, p1, p2, p3, p4, componentId, _r, _ri);
};

window.GetNumReservedMissionObjects = function (p0) {
	return _in("0xAA81B5F10BC43AC2", p0, _r, _ri);
};

window.GetNumReservedMissionPeds = function (p0) {
	return _in("0x1F13D5AE5CB17E17", p0, _r, _ri);
};

window.GetNumReservedMissionVehicles = function (p0) {
	return _in("0xCF3A965906452031", p0, _r, _ri);
};

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key to look up in the resource manifest.
 * @param resourceName The resource name.
 */
window.GetNumResourceMetadata = function (resourceName, metadataKey) {
	return _in("0x776e864", _ts(resourceName), _ts(metadataKey), _r, _ri);
};

window.GetNumResources = function () {
	return _in("0x863f27b", _r, _ri);
};

window.GetNumVehicleMods = function (vehicle, modType) {
	return _in("0xE38E9162A2500646", vehicle, modType, _r, _ri);
};

window.GetNumVehicleWindowTints = function () {
	return _in("0x9D1224004B3A6707", _r, _ri);
};

window.GetNumberOfActiveBlips = function () {
	return _in("0x9A3FF3DE163034E8", _r, _ri);
};

window.GetNumberOfEvents = function (p0) {
	return _in("0x5F92A689A06620AA", p0, _r, _ri);
};

window.GetNumberOfFiresInRange = function (x, y, z, radius) {
	return _in("0x50CAD495A460B305", _fv(x), _fv(y), _fv(z), _fv(radius), _r, _ri);
};

window.GetNumberOfInstancesOfScriptWithNameHash = function (scriptHash) {
	return _in("0x2C83A9DA6BFFC4F9", _ch(scriptHash), _r, _ri);
};

window.GetNumberOfPassengerVoiceVariations = function (p0) {
	return _in("0x66E49BF55B4B1874", p0, _r, _ri);
};

window.GetNumberOfPedDrawableVariations = function (ped, componentId) {
	return _in("0x27561561732A7842", ped, componentId, _r, _ri);
};

window.GetNumberOfPedPropDrawableVariations = function (ped, propId) {
	return _in("0x5FAF9754E789FB47", ped, propId, _r, _ri);
};

window.GetNumberOfPedPropTextureVariations = function (ped, propId, drawableId) {
	return _in("0xA6E7F1CEB523E171", ped, propId, drawableId, _r, _ri);
};

window.GetNumberOfPedTextureVariations = function (ped, componentId, drawableId) {
	return _in("0x8F7156A3142A6BAD", ped, componentId, drawableId, _r, _ri);
};

window.GetNumberOfPlayers = function () {
	return _in("0x407C7F91DDB46C16", _r, _ri);
};

window.GetNumberOfStreamingRequests = function () {
	return _in("0x4060057271CEBC89", _r, _ri);
};

window.GetNumberOfVehicleColours = function (vehicle) {
	return _in("0x3B963160CD65D41E", vehicle, _r, _ri);
};

window.GetNumberOfVehicleDoors = function (vehicle) {
	return _in("0x92922A607497B14D", vehicle, _r, _ri);
};

window.GetNumberOfVehicleNumberPlates = function () {
	return _in("0x4C4D6B2644F458CB", _r, _ri);
};

window.GetObjectFragmentDamageHealth = function (p0, p1) {
	return _in("0xB6FBFD079B8D0596", p0, p1, _r, _rf);
};

window.GetObjectIndexFromEntityIndex = function (entity) {
	return _in("0xD7E3B9735C0F89D6", entity, _r, _ri);
};

window.GetObjectOffsetFromCoords = function (xPos, yPos, zPos, heading, xOffset, yOffset, zOffset) {
	return _in("0x163E252DE035A133", _fv(xPos), _fv(yPos), _fv(zPos), _fv(heading), _fv(xOffset), _fv(yOffset), _fv(zOffset), _r, _rv);
};

window.GetOffsetFromEntityGivenWorldCoords = function (entity, posX, posY, posZ) {
	return _in("0x2274BC1C4885E333", entity, _fv(posX), _fv(posY), _fv(posZ), _r, _rv);
};

window.GetOffsetFromEntityInWorldCoords = function (entity, offsetX, offsetY, offsetZ) {
	return _in("0x1899F328B0E12848", entity, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _r, _rv);
};

window.GetOffsetFromInteriorInWorldCoords = function (interiorID, x, y, z) {
	return _in("0x9E3B3E6D66F6E22F", interiorID, _fv(x), _fv(y), _fv(z), _r, _rv);
};

window.GetOnlineVersion = function () {
	return _in("0xFCA9373EF340AC0A", _r, _s);
};

window.GetOnscreenKeyboardResult = function () {
	return _in("0x8362B09B91893647", _r, _s);
};

window.GetPauseMenuState = function () {
	return _in("0x272ACD84970869C5", _r, _ri);
};

window.GetPedAccuracy = function (ped) {
	return _in("0x37F4AD56ECBC0CD6", ped, _r, _ri);
};

window.GetPedAlertness = function (ped) {
	return _in("0xF6AA118530443FD2", ped, _r, _ri);
};

window.GetPedAmmoByType = function (ped, ammoType) {
	return _in("0x39D22031557946C1", ped, ammoType, _r, _ri);
};

window.GetPedAmmoTypeFromWeapon = function (ped, weaponHash) {
	return _in("0x7FEAD38B326B9F74", ped, _ch(weaponHash), _r, _ri);
};

window.GetPedAmmoTypeFromWeapon_2 = function (ped, weaponHash) {
	return _in("0xF489B44DD5AF4BD9", ped, _ch(weaponHash), _r, _ri);
};

window.GetPedArmour = function (ped) {
	return _in("0x9483AF821605B1D8", ped, _r, _ri);
};

window.GetPedAsGroupLeader = function (groupID) {
	return _in("0x5CCE68DBD5FE93EC", groupID, _r, _ri);
};

window.GetPedAsGroupMember = function (groupID, memberNumber) {
	return _in("0x51455483CF23ED97", groupID, memberNumber, _r, _ri);
};

window.GetPedBoneCoords = function (ped, boneId, offsetX, offsetY, offsetZ) {
	return _in("0x17C07FC640E86B4E", ped, boneId, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _r, _rv);
};

window.GetPedBoneIndex = function (ped, boneId) {
	return _in("0x3F428D08BE5AAE31", ped, boneId, _r, _ri);
};

window.GetPedCauseOfDeath = function (ped) {
	return _in("0x16FFE42AB2D2DC59", ped, _r, _ri);
};

window.GetPedCombatMovement = function (ped) {
	return _in("0xDEA92412FCAEB3F5", ped, _r, _ri);
};

window.GetPedCombatRange = function (ped) {
	return _in("0xF9D9F7F2DB8E2FA0", ped, _r, _ri);
};

window.GetPedConfigFlag = function (ped, flagId, p2) {
	return _in("0x7EE53118C892B513", ped, flagId, p2, _r);
};

window.GetPedDecorationsState = function (ped) {
	return _in("0x71EAB450D86954A1", ped, _r, _ri);
};

window.GetPedDefensiveAreaPosition = function (ped, p1) {
	return _in("0x3C06B8786DD94CD1", ped, p1, _r, _rv);
};

window.GetPedDesiredMoveBlendRatio = function (ped) {
	return _in("0x8517D4A6CA8513ED", ped, _r, _rf);
};

window.GetPedDrawableVariation = function (ped, componentId) {
	return _in("0x67F3780DD425D4FC", ped, componentId, _r, _ri);
};

window.GetPedEnveffScale = function (ped) {
	return _in("0x9C14D30395A51A3C", ped, _r, _rf);
};

window.GetPedExtractedDisplacement = function (ped, worldSpace) {
	return _in("0xE0AF41401ADF87E3", ped, worldSpace, _r, _rv);
};

window.GetPedFloodInvincibility = function (ped, p1) {
	return _in("0x2BC338A7B21F4608", ped, p1);
};

window.GetPedGroupIndex = function (ped) {
	return _in("0xF162E133B4E7A675", ped, _r, _ri);
};

window.GetPedHeadBlendData = function (ped, headBlendData) {
	return _in("0x2746BD9D88C5C5D0", ped, _ii(headBlendData) /* may be optional */, _r);
};

window.GetPedHeadOverlayValue = function (ped, overlayID) {
	return _in("0xA60EF3B6461A4D43", ped, overlayID, _r, _ri);
};

window.GetPedInVehicleSeat = function (vehicle, index) {
	return _in("0xBB40DD2270B65366", vehicle, index, _r, _ri);
};

window.GetPedIndexFromEntityIndex = function (entity) {
	return _in("0x04A2A40C73395041", entity, _r, _ri);
};

window.GetPedInsideExplosionArea = function (explosionType, x1, y1, z1, x2, y2, z2, radius) {
	return _in("0x14BA4BA137AF6CEC", explosionType, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(radius), _r, _ri);
};

window.GetPedLastDamageBone = function (ped, outBone) {
	return _in("0xD75960F6BD9EA49C", ped, _ii(outBone) /* may be optional */, _r);
};

window.GetPedLastWeaponImpactCoord = function (ped, coords) {
	return _in("0x6C4D0409BA1A2BC2", ped, _v, _r);
};

window.GetPedMaxHealth = function (ped) {
	return _in("0x4700A416E8324EF3", ped, _r, _ri);
};

window.GetPedMoney = function (ped) {
	return _in("0x3F69145BBA87BAE7", ped, _r, _ri);
};

window.GetPedNearbyPeds = function (ped, ignore) {
	return _in("0x23F8F5FC7E8C4A6B", ped, _i, ignore, _r, _ri);
};

window.GetPedNearbyVehicles = function (ped, sizeAndVehs) {
	return _in("0xCFF869CBFA210D82", ped, _ii(sizeAndVehs) /* may be optional */, _r, _ri);
};

window.GetPedPaletteVariation = function (ped, componentId) {
	return _in("0xE3DD5F2A84B42281", ped, componentId, _r, _ri);
};

window.GetPedParachuteLandingType = function (ped) {
	return _in("0x8B9F1FC6AE8166C0", ped, _r, _ri);
};

window.GetPedParachuteState = function (ped) {
	return _in("0x79CFD9827CC979B6", ped, _r, _ri);
};

window.GetPedParachuteTintIndex = function (ped, outTintIndex) {
	return _in("0xEAF5F7E5AE7C6C9D", ped, _ii(outTintIndex) /* may be optional */);
};

window.GetPedPropIndex = function (ped, componentId) {
	return _in("0x898CC20EA75BACD8", ped, componentId, _r, _ri);
};

window.GetPedPropTextureIndex = function (ped, componentId) {
	return _in("0xE131A28626F81AB2", ped, componentId, _r, _ri);
};

window.GetPedRagdollBoneIndex = function (ped, bone) {
	return _in("0x2057EF813397A772", ped, bone, _r, _ri);
};

window.GetPedRelationshipGroupDefaultHash = function (ped) {
	return _in("0x42FDD0F017B1E38E", ped, _r, _ri);
};

window.GetPedRelationshipGroupHash = function (ped) {
	return _in("0x7DBDD04862D95F04", ped, _r, _ri);
};

window.GetPedResetFlag = function (ped, flagId) {
	return _in("0xAF9E59B1B1FBF2A0", ped, flagId, _r);
};

window.GetPedSourceOfDeath = function (ped) {
	return _in("0x93C8B64DEB84728C", ped, _r, _ri);
};

window.GetPedStealthMovement = function (ped) {
	return _in("0x7C2AC9CA66575FBF", ped, _r);
};

window.GetPedTextureVariation = function (ped, componentId) {
	return _in("0x04A355E041E004E6", ped, componentId, _r, _ri);
};

window.GetPedTimeOfDeath = function (ped) {
	return _in("0x1E98817B311AE98A", ped, _r, _ri);
};

window.GetPedType = function (ped) {
	return _in("0xFF059E1E4C01E63C", ped, _r, _ri);
};

window.GetPedUsingVehicleDoor = function (vehicle, doorIndex) {
	return _in("0x218297BF0CFD853B", vehicle, doorIndex, _r, _ri);
};

window.GetPedWaypointDistance = function (p0) {
	return _in("0xE6A877C64CAF1BC5", p0, _r, _rf);
};

window.GetPedWaypointProgress = function (p0) {
	return _in("0x2720AAA75001E094", p0, _r, _ri);
};

window.GetPedWeaponTintIndex = function (ped, weaponHash) {
	return _in("0x2B9EEDC07BD06B9F", ped, _ch(weaponHash), _r, _ri);
};

window.GetPedWeapontypeInSlot = function (ped, weaponSlot) {
	return _in("0xEFFED78E9011134D", ped, _ch(weaponSlot), _r, _ri);
};

window.GetPedheadshotTxdString = function (handle) {
	return _in("0xDB4EACD4AD0A5D6B", handle, _r, _s);
};

window.GetPedsJacker = function (ped) {
	return _in("0x9B128DC36C1E04CF", ped, _r, _ri);
};

window.GetPhoneGestureAnimCurrentTime = function (ped) {
	return _in("0x47619ABE8B268C60", ped, _r, _rf);
};

window.GetPhoneGestureAnimTotalTime = function (ped) {
	return _in("0x1EE0F68A7C25DEC6", ped, _r, _rf);
};

window.GetPickupCoords = function (pickup) {
	return _in("0x225B8B35C88029B3", pickup, _r, _rv);
};

window.GetPickupObject = function (pickup) {
	return _in("0x5099BC55630B25AE", pickup, _r, _ri);
};

window.GetPlayerCurrentStealthNoise = function (player) {
	return _in("0x2F395D61F3A1F877", player, _r, _rf);
};

window.GetPlayerFromServerId = function (serverId) {
	return _in("0x344ea166", serverId, _r, _ri);
};

window.GetPlayerGroup = function (player) {
	return _in("0x0D127585F77030AF", player, _r, _ri);
};

window.GetPlayerHasReserveParachute = function (player) {
	return _in("0x5DDFE2FF727F3CA3", player, _r);
};

window.GetPlayerHeadsetSoundAlternate = function (p0, p1) {
	return _in("0xBCC29F935ED07688", _ts(p0), _fv(p1));
};

window.GetPlayerIndex = function () {
	return _in("0xA5EDC40EF369B48D", _r, _ri);
};

window.GetPlayerInvincible = function (player) {
	return _in("0xB721981B2B939E07", player, _r);
};

window.GetPlayerMaxArmour = function (player) {
	return _in("0x92659B4CE1863CB3", player, _r, _ri);
};

window.GetPlayerName = function (player) {
	return _in("0x6D0DE6A7B5DA71F8", player, _r, _s);
};

window.GetPlayerParachutePackTintIndex = function (player, tintIndex) {
	return _in("0x6E9C742F340CE5A2", player, _ii(tintIndex) /* may be optional */);
};

window.GetPlayerParachuteSmokeTrailColor = function (player) {
	return _in("0xEF56DBABD3CD4887", player, _i, _i, _i);
};

window.GetPlayerParachuteTintIndex = function (player, tintIndex) {
	return _in("0x75D3F7A1B0D9B145", player, _ii(tintIndex) /* may be optional */);
};

window.GetPlayerPed = function (player) {
	return _in("0x43A66C31C68491C0", player, _r, _ri);
};

window.GetPlayerPedIsFollowing = function (ped) {
	return _in("0x6A3975DEA89F9A17", ped, _r, _ri);
};

window.GetPlayerPedScriptIndex = function (player) {
	return _in("0x50FAC3A3E030A6E1", player, _r, _ri);
};

window.GetPlayerRadioStationGenre = function () {
	return _in("0xA571991A7FE6CCEB", _r, _ri);
};

window.GetPlayerRadioStationIndex = function () {
	return _in("0xE8AF77C4C06ADC93", _r, _ri);
};

window.GetPlayerRadioStationName = function () {
	return _in("0xF6D733C32076AD03", _r, _s);
};

window.GetPlayerReserveParachuteTintIndex = function (player, index) {
	return _in("0xD5A016BC3C09CF40", player, _ii(index) /* may be optional */);
};

window.GetPlayerRgbColour = function (player) {
	return _in("0xE902EF951DCE178F", player, _i, _i, _i);
};

window.GetPlayerServerId = function (player) {
	return _in("0x4d97bcc7", player, _r, _ri);
};

window.GetPlayerShortSwitchState = function () {
	return _in("0x20F898A5D9782800", _r, _ri);
};

window.GetPlayerSprintStaminaRemaining = function (player) {
	return _in("0x3F9F16F8E65A7ED7", player, _r, _rf);
};

window.GetPlayerSprintTimeRemaining = function (player) {
	return _in("0x1885BC9B108B4C99", player, _r, _rf);
};

window.GetPlayerSwitchState = function () {
	return _in("0x470555300D10B2A5", _r, _ri);
};

window.GetPlayerSwitchType = function () {
	return _in("0xB3C94A90D9FC9E62", _r, _ri);
};

window.GetPlayerTargetEntity = function (player, entity) {
	return _in("0x13EDE1A5DBF797C9", player, _ii(entity) /* may be optional */, _r);
};

window.GetPlayerTeam = function (player) {
	return _in("0x37039302F4E0A008", player, _r, _ri);
};

window.GetPlayerUnderwaterTimeRemaining = function (player) {
	return _in("0xA1FCF8E6AF40B731", player, _r, _rf);
};

window.GetPlayerWantedCentrePosition = function (player) {
	return _in("0x0C92BA89F1AF26F8", player, _r, _rv);
};

window.GetPlayerWantedLevel = function (player) {
	return _in("0xE28E54788CE8F12D", player, _r, _ri);
};

window.GetPlayersLastVehicle = function () {
	return _in("0xB6997A7EB3F5C8C0", _r, _ri);
};

window.GetPositionInRecording = function (p0) {
	return _in("0x2DACD605FC681475", p0, _r, _rf);
};

window.GetPositionOfVehicleRecordingAtTime = function (p0, p1, p2) {
	return _in("0xD242728AA6F0FBA2", p0, _fv(p1), _ts(p2), _r, _rv);
};

window.GetPosixTime = function () {
	return _in("0xDA488F299A5B164E", _i, _i, _i, _i, _i, _i);
};

window.GetPosixTime = function () {
	return _in("0x9A73240B49945C76", _r, _ri);
};

window.GetPrevWeatherTypeHashName = function () {
	return _in("0x564B884A05EC45A3", _r, _ri);
};

window.GetProfileSetting = function (profileSetting) {
	return _in("0xC488FF2356EA7791", profileSetting, _r, _ri);
};

window.GetPropFromOutfit = function (outfit, slot, item) {
	return _in("0x19F2A026EDF0013F", outfit, slot, _ii(item) /* may be optional */, _r);
};

window.GetPstatBoolHash = function (index, spStat, charStat, character) {
	return _in("0x80C75307B1C42837", index, spStat, charStat, character, _r, _ri);
};

window.GetPstatIntHash = function (index, spStat, charStat, character) {
	return _in("0x61E111E323419E07", index, spStat, charStat, character, _r, _ri);
};

window.GetRadioStationName = function (radioStation) {
	return _in("0xB28ECA15046CA8B9", radioStation, _r, _s);
};

window.GetRainLevel = function () {
	return _in("0x96695E368AD855F3", _r, _ri);
};

window.GetRandomEventFlag = function () {
	return _in("0xD2D57F1D764117B1", _r, _ri);
};

window.GetRandomFloatInRange = function (startRange, endRange) {
	return _in("0x313CE5879CEB6FCD", _fv(startRange), _fv(endRange), _r, _rf);
};

window.GetRandomIntInRange = function (startRange, endRange) {
	return _in("0xD53343AA4FB7DD28", startRange, endRange, _r, _ri);
};

window.GetRandomPedAtCoord = function (x, y, z, xRadius, yRadius, zRadius, pedType) {
	return _in("0x876046A8E3A4B71C", _fv(x), _fv(y), _fv(z), _fv(xRadius), _fv(yRadius), _fv(zRadius), pedType, _r, _ri);
};

window.GetRandomVehicleBackBumperInSphere = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xB50807EABE20A8DC", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, p5, p6, _r, _ri);
};

window.GetRandomVehicleFrontBumperInSphere = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xC5574E0AEB86BA68", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, p5, p6, _r, _ri);
};

window.GetRandomVehicleInSphere = function (x, y, z, radius, modelHash, flags) {
	return _in("0x386F6CE5BAF6091C", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(modelHash), flags, _r, _ri);
};

window.GetRandomVehicleModelInMemory = function (p0) {
	return _in("0x055BF0AC0C34F4FD", p0, _i, _i);
};

window.GetRandomVehicleNode = function (x, y, z, radius, p4, p5, p6) {
	return _in("0x93E0DB8440B73A7D", _fv(x), _fv(y), _fv(z), _fv(radius), p4, p5, p6, _v, _f, _r);
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

window.GetRelationshipBetweenGroups = function (group1, group2) {
	return _in("0x9E6B70061662AE5C", _ch(group1), _ch(group2), _r, _ri);
};

window.GetRelationshipBetweenPeds = function (ped1, ped2) {
	return _in("0xEBA5AD3A0EAF7121", ped1, ped2, _r, _ri);
};

window.GetRenderingCam = function () {
	return _in("0x5234F9F10919EABA", _r, _ri);
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
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 * @param metadataKey The key in the resource manifest.
 * @param resourceName The resource name.
 */
window.GetResourceMetadata = function (resourceName, metadataKey, index) {
	return _in("0x964bab1d", _ts(resourceName), _ts(metadataKey), index, _r, _s);
};

window.GetRoomKeyFromEntity = function (entity) {
	return _in("0x47C2A06D4F5F424B", entity, _r, _ri);
};

window.GetRoomKeyFromGameplayCam = function () {
	return _in("0xA6575914D2A0B450", _r, _ri);
};

window.GetRootContentId = function (p0) {
	return _in("0xC0173D6BFF4E0348", p0, _r, _s);
};

window.GetRopeLastVertexCoord = function (rope) {
	return _in("0x21BB0FBD3E217C2D", rope, _r, _ri);
};

window.GetRopeLength = function (rope) {
	return _in("0x73040398DFF9A4A6", rope, _r, _rf);
};

window.GetRopeVertexCoord = function (rope, vertex) {
	return _in("0xEA61CA8E80F09E4D", rope, vertex, _r, _ri);
};

window.GetRopeVertexCount = function (rope) {
	return _in("0x3655F544CD30F0B5", rope, _r, _ri);
};

window.GetRotationOfVehicleRecordingAtTime = function (p0, p1, p2) {
	return _in("0x2058206FBE79A8AD", p0, _fv(p1), _ii(p2) /* may be optional */, _r, _ri);
};

window.GetSafeCoordForPed = function (x, y, z, onGround, flags) {
	return _in("0xB61C8E878A4199CA", _fv(x), _fv(y), _fv(z), onGround, _v, flags, _r);
};

window.GetSafePickupCoords = function (x, y, z, p3, p4) {
	return _in("0x6E16BC2503FF1FF0", _fv(x), _fv(y), _fv(z), p3, p4, _r, _rv);
};

window.GetSafeZoneSize = function () {
	return _in("0xBAF107B6BB2C97F0", _r, _rf);
};

window.GetScreenCoordFromWorldCoord = function (worldX, worldY, worldZ) {
	return _in("0xF9904D11F1ACBEC3", _fv(worldX), _fv(worldY), _fv(worldZ), _f, _f, _r);
};

window.GetScreenCoordFromWorldCoord = function (worldX, worldY, worldZ) {
	return _in("0x34E82F05DF2974F5", _fv(worldX), _fv(worldY), _fv(worldZ), _f, _f, _r);
};

window.GetScreenEffectIsActive = function (effectName) {
	return _in("0x36AD3E690DA5ACEB", _ts(effectName), _r);
};

window.GetScreenResolution = function () {
	return _in("0x888D57E407E63624", _i, _i);
};

window.GetScriptTaskStatus = function (targetPed, taskHash) {
	return _in("0x77F1BEB8863288D5", targetPed, _ch(taskHash), _r, _ri);
};

window.GetScriptedCoverPointCoords = function (coverpoint) {
	return _in("0x594A1028FC2A3E85", coverpoint, _r, _rv);
};

window.GetSeatPedIsTryingToEnter = function (ped) {
	return _in("0x6F4C85ACD641BCD2", ped, _r, _ri);
};

window.GetSelectedPedWeapon = function (ped) {
	return _in("0x0A6DB4965674D243", ped, _r, _ri);
};

window.GetSequenceProgress = function (ped) {
	return _in("0x00A9010CFE1E3533", ped, _r, _ri);
};

window.GetShapeTestResult = function (rayHandle) {
	return _in("0x3D87450E15D98694", rayHandle, _i /* actually bool */, _v, _v, _i, _r, _ri);
};

window.GetShapeTestResultEx = function (rayHandle) {
	return _in("0x65287525D951F6BE", rayHandle, _i /* actually bool */, _v, _v, _i, _i, _r, _ri);
};

window.GetShopPedComponent = function (p0, p1) {
	return _in("0x74C0E2A57EC66760", _ch(p0), _ii(p1) /* may be optional */);
};

window.GetShopPedOutfit = function (p0, p1) {
	return _in("0xB7952076E444979D", p0, _ii(p1) /* may be optional */);
};

window.GetShopPedOutfitLocate = function (p0) {
	return _in("0x073CA26B079F956E", p0, _r, _ri);
};

window.GetShopPedQueryComponent = function (componentId, outComponent) {
	return _in("0x249E310B2D920699", componentId, _ii(outComponent) /* may be optional */);
};

window.GetShopPedQueryOutfit = function (p0, outfit) {
	return _in("0x6D793F03A631FE56", p0, _ii(outfit) /* may be optional */);
};

window.GetShopPedQueryProp = function (p0, p1) {
	return _in("0xDE44A00999B2837D", p0, _ii(p1) /* may be optional */);
};

window.GetSnowLevel = function () {
	return _in("0xC5868A966E5BE3AE", _r, _ri);
};

window.GetSoundId = function () {
	return _in("0x430386FE9BF80B45", _r, _ri);
};

window.GetSoundIdFromNetworkId = function (netId) {
	return _in("0x75262FD12D0A1C84", netId, _r, _ri);
};

window.GetStateOfClosestDoorOfType = function (type, x, y, z) {
	return _in("0xEDC1A5B84AEF33FF", _ch(type), _fv(x), _fv(y), _fv(z), _i /* actually bool */, _f);
};

window.GetStreamPlayTime = function () {
	return _in("0x4E72BBDBCA58A3DB", _r, _ri);
};

window.GetStreetNameAtCoord = function (x, y, z) {
	return _in("0x2EB41072B4C1E4C0", _fv(x), _fv(y), _fv(z), _i, _i);
};

window.GetStreetNameFromHashKey = function (hash) {
	return _in("0xD0EF8A959B8A4CB9", _ch(hash), _r, _s);
};

window.GetSupportsGpsRouteFlag = function (nodeID) {
	return _in("0xA2AE5C478B96E3B6", nodeID, _r);
};

window.GetSynchronizedScenePhase = function (sceneID) {
	return _in("0xE4A310B1D7FA73CC", sceneID, _r, _rf);
};

window.GetSynchronizedSceneRate = function (sceneID) {
	return _in("0xD80932D577274D40", sceneID, _r, _rf);
};

window.GetTattooZone = function (collection, overlay) {
	return _in("0x9FD452BFBE7A7A8B", _ch(collection), _ch(overlay), _r, _ri);
};

window.GetTextScaleHeight = function (size, font) {
	return _in("0xDB88A37483346780", _fv(size), font, _r, _rf);
};

window.GetTextSubstring = function (text, position, length) {
	return _in("0x169BD9382084C8C0", _ts(text), position, length, _r, _s);
};

window.GetTextSubstringSafe = function (text, position, length, maxLength) {
	return _in("0xB2798643312205C5", _ts(text), position, length, maxLength, _r, _s);
};

window.GetTextSubstringSlice = function (text, startPosition, endPosition) {
	return _in("0xCE94AEBA5D82908A", _ts(text), startPosition, endPosition, _r, _s);
};

window.GetTextureResolution = function (textureDict, textureName) {
	return _in("0x35736EE65BD00C11", _ts(textureDict), _ts(textureName), _r, _rv);
};

window.GetThisScriptName = function () {
	return _in("0x442E0A7EDE4A738A", _r, _s);
};

window.GetTimeAsString = function (time) {
	return _in("0x9E23B1777A927DAD", time, _r, _s);
};

window.GetTimeDifference = function (timeA, timeB) {
	return _in("0xA2C6FC031D46FFF0", timeA, timeB, _r, _ri);
};

window.GetTimeOffset = function (timeA, timeB) {
	return _in("0x017008CCDAD48503", timeA, timeB, _r, _ri);
};

window.GetTimePositionInRecording = function (p0) {
	return _in("0x5746F3A7AB7FE544", p0, _r, _rf);
};

window.GetTimeSinceLastArrest = function () {
	return _in("0x5063F92F07C2A316", _r, _ri);
};

window.GetTimeSinceLastDeath = function () {
	return _in("0xC7034807558DDFCA", _r, _ri);
};

window.GetTimeSincePlayerDroveAgainstTraffic = function (player) {
	return _in("0xDB89591E290D9182", player, _r, _ri);
};

window.GetTimeSincePlayerDroveOnPavement = function (player) {
	return _in("0xD559D2BE9E37853B", player, _r, _ri);
};

window.GetTimeSincePlayerHitPed = function (player) {
	return _in("0xE36A25322DC35F42", player, _r, _ri);
};

window.GetTimeSincePlayerHitVehicle = function (player) {
	return _in("0x5D35ECF3A81A0EE0", player, _r, _ri);
};

window.GetTimecycleModifierIndex = function () {
	return _in("0xFDF3D97C674AFB66", _r, _ri);
};

window.GetTotalDurationOfVehicleRecording = function (p0, p1) {
	return _in("0x0E48D1C262390950", p0, p1, _r, _ri);
};

window.GetTotalDurationOfVehicleRecordingId = function (p0) {
	return _in("0x102D125411A7B6E6", p0, _r, _rf);
};

window.GetTotalScInboxIds = function () {
	return _in("0x03A93FF1A2CA0864", _r, _ri);
};

window.GetTrainCarriage = function (train, trailerNumber) {
	return _in("0x08AAFD0814722BC3", train, trailerNumber, _r, _ri);
};

window.GetTunablesContentModifierId = function (contentHash) {
	return _in("0x187382F8A3E0A6C3", _ch(contentHash), _r, _ri);
};

window.GetTupstatBoolHash = function (index, spStat, charStat, character) {
	return _in("0xC4BB08EE7907471E", index, spStat, charStat, character, _r, _ri);
};

window.GetTupstatIntHash = function (index, spStat, charStat, character) {
	return _in("0xD16C2AD6B8E32854", index, spStat, charStat, character, _r, _ri);
};

window.GetTvChannel = function () {
	return _in("0xFC1E275A90D39995", _r, _ri);
};

window.GetTvVolume = function () {
	return _in("0x2170813D3DD8661B", _r, _rf);
};

window.GetUserLanguageId = function () {
	return _in("0xA8AE43AEC1A61314", _r, _ri);
};

window.GetUtcTime = function () {
	return _in("0x8117E09A19EEF4D3", _i, _i, _i, _i, _i, _i);
};

window.GetVariantComponent = function (componentHash, componentId) {
	return _in("0x6E11F282F11863B6", _ch(componentHash), componentId, _i, _i, _i);
};

window.GetVehicleAcceleration = function (vehicle) {
	return _in("0x478321", vehicle, _r, _rf);
};

window.GetVehicleAcceleration = function (vehicle) {
	return _in("0x5DD35C8D074E57AE", vehicle, _r, _rf);
};

window.GetVehicleAlarmTimeLeft = function (vehicle) {
	return _in("0xc62aac98", vehicle, _r, _ri);
};

window.GetVehicleAttachedToCargobob = function (cargobob) {
	return _in("0x873B82D42AC2B9E5", cargobob, _r, _ri);
};

window.GetVehicleAttachedToEntity = function (object) {
	return _in("0x375E7FC44F21C8AB", object, _r, _ri);
};

window.GetVehicleBodyHealth = function (vehicle) {
	return _in("0xF271147EB7B40F12", vehicle, _r, _rf);
};

window.GetVehicleBodyHealth_2 = function (vehicle) {
	return _in("0xB8EF61207C2393A9", vehicle, _r, _rf);
};

window.GetVehicleCauseOfDestruction = function (vehicle) {
	return _in("0xE495D1EF4C91FD20", vehicle, _r, _ri);
};

window.GetVehicleClass = function (vehicle) {
	return _in("0x29439776AAA00A62", vehicle, _r, _ri);
};

window.GetVehicleClassFromName = function (modelHash) {
	return _in("0xDEDF1C8BD47C2200", _ch(modelHash), _r, _ri);
};

window.GetVehicleClassMaxAcceleration = function (vehicleClass) {
	return _in("0x2F83E7E45D9EA7AE", vehicleClass, _r, _rf);
};

window.GetVehicleClassMaxAgility = function (vehicleClass) {
	return _in("0x4F930AD022D6DE3B", vehicleClass, _r, _rf);
};

window.GetVehicleClassMaxBraking = function (vehicleClass) {
	return _in("0x4BF54C16EC8FEC03", vehicleClass, _r, _rf);
};

window.GetVehicleClassMaxTraction = function (vehicleClass) {
	return _in("0xDBC86D85C5059461", vehicleClass, _r, _rf);
};

window.GetVehicleClutch = function (vehicle) {
	return _in("0x1dad4583", vehicle, _r, _rf);
};

window.GetVehicleColor = function (vehicle) {
	return _in("0xF3CC740D36221548", vehicle, _i, _i, _i);
};

window.GetVehicleColourCombination = function (vehicle) {
	return _in("0x6A842D197F845D56", vehicle, _r, _ri);
};

window.GetVehicleColours = function (vehicle) {
	return _in("0xA19435F193E081AC", vehicle, _i, _i);
};

window.GetVehicleCurrentGear = function (vehicle) {
	return _in("0xb4f4e566", vehicle, _r, _ri);
};

window.GetVehicleCurrentRpm = function (vehicle) {
	return _in("0xe7b12b54", vehicle, _r, _rf);
};

window.GetVehicleCustomPrimaryColour = function (vehicle) {
	return _in("0xB64CF2CCA9D95F52", vehicle, _i, _i, _i);
};

window.GetVehicleCustomSecondaryColour = function (vehicle) {
	return _in("0x8389CD56CA8072DC", vehicle, _i, _i, _i);
};

window.GetVehicleDashboardColour = function (vehicle, color) {
	return _in("0xB7635E80A5C31BFF", vehicle, _ii(color) /* may be optional */);
};

window.GetVehicleDashboardSpeed = function (vehicle) {
	return _in("0x9aad420e", vehicle, _r, _rf);
};

window.GetVehicleDefaultHorn = function (vehicle) {
	return _in("0x02165D55000219AC", vehicle, _r, _ri);
};

window.GetVehicleDeformationAtPos = function (vehicle, offsetX, offsetY, offsetZ) {
	return _in("0x4EC6CFBC7B2E9536", vehicle, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _r, _rv);
};

window.GetVehicleDirtLevel = function (vehicle) {
	return _in("0x8F17BC8BA08DA62B", vehicle, _r, _rf);
};

window.GetVehicleDoorAngleRatio = function (vehicle, door) {
	return _in("0xFE3F9C29F7B32BD5", vehicle, door, _r, _rf);
};

window.GetVehicleDoorLockStatus = function (vehicle) {
	return _in("0x25BC98A59C2EA962", vehicle, _r, _ri);
};

window.GetVehicleDoorsLockedForPlayer = function (vehicle, player) {
	return _in("0xF6AF6CB341349015", vehicle, player, _r);
};

window.GetVehicleEngineHealth = function (vehicle) {
	return _in("0xC45D23BAF168AAB8", vehicle, _r, _rf);
};

window.GetVehicleEngineTemperature = function (vehicle) {
	return _in("0xf4f495cb", vehicle, _r, _rf);
};

window.GetVehicleEnveffScale = function (vehicle) {
	return _in("0xA82819CAC9C4C403", vehicle, _r, _rf);
};

window.GetVehicleExtraColours = function (vehicle) {
	return _in("0x3BC4245933A166F7", vehicle, _i, _i);
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
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return A floating-point value.
 */
window.GetVehicleHandlingFloat = function (vehicle, _class, fieldName) {
	return _in("0x642fc12f", vehicle, _ts(_class), _ts(fieldName), _r, _rf);
};

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
window.GetVehicleHandlingInt = function (vehicle, _class, fieldName) {
	return _in("0x27396c75", vehicle, _ts(_class), _ts(fieldName), _r, _ri);
};

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
window.GetVehicleHandlingVector = function (vehicle, _class, fieldName) {
	return _in("0xfb341304", vehicle, _ts(_class), _ts(fieldName), _r, _rv);
};

window.GetVehicleHighGear = function (vehicle) {
	return _in("0xf1d1d689", vehicle, _r, _ri);
};

window.GetVehicleIndexFromEntityIndex = function (entity) {
	return _in("0x4B53F92932ADFAC0", entity, _r, _ri);
};

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
window.GetVehicleIndicatorLights = function (vehicle) {
	return _in("0x83070354", vehicle, _r, _ri);
};

window.GetVehicleInteriorColour = function (vehicle, color) {
	return _in("0x7D1464D472D32136", vehicle, _ii(color) /* may be optional */);
};

window.GetVehicleLayoutHash = function (vehicle) {
	return _in("0x28D37D4F71AC5C58", vehicle, _r, _ri);
};

window.GetVehicleLightsState = function (vehicle) {
	return _in("0xB91B4C20085BD12F", vehicle, _i /* actually bool */, _i /* actually bool */, _r);
};

window.GetVehicleLivery = function (vehicle) {
	return _in("0x2BB9230590DA5E8A", vehicle, _r, _ri);
};

window.GetVehicleLiveryCount = function (vehicle) {
	return _in("0x87B63E25A529D526", vehicle, _r, _ri);
};

window.GetVehicleMaxBraking = function (vehicle) {
	return _in("0xAD7E85FC227197C4", vehicle, _r, _rf);
};

window.GetVehicleMaxNumberOfPassengers = function (vehicle) {
	return _in("0xA7C4F2C6E744A550", vehicle, _r, _ri);
};

window.GetVehicleMaxTraction = function (vehicle) {
	return _in("0xA132FB5370554DB0", vehicle, _r, _rf);
};

window.GetVehicleMod = function (vehicle, modType) {
	return _in("0x772960298DA26FDB", vehicle, modType, _r, _ri);
};

window.GetVehicleModColor_1 = function (vehicle) {
	return _in("0xE8D65CA700C9A693", vehicle, _i, _i, _i);
};

window.GetVehicleModColor_1Name = function (vehicle, p1) {
	return _in("0xB45085B721EFD38C", vehicle, p1, _r, _s);
};

window.GetVehicleModColor_2 = function (vehicle) {
	return _in("0x81592BE4E3878728", vehicle, _i, _i);
};

window.GetVehicleModColor_2Name = function (vehicle) {
	return _in("0x4967A516ED23A5A1", vehicle, _r, _s);
};

window.GetVehicleModData = function (vehicle, modType, modIndex) {
	return _in("0x4593CF82AA179706", vehicle, modType, modIndex, _r, _ri);
};

window.GetVehicleModKit = function (vehicle) {
	return _in("0x6325D1A044AE510D", vehicle, _r, _ri);
};

window.GetVehicleModKitType = function (vehicle) {
	return _in("0xFC058F5121E54C32", vehicle, _r, _ri);
};

window.GetVehicleModModifierValue = function (vehicle, modType, modIndex) {
	return _in("0x90A38E9838E0A8C1", vehicle, modType, modIndex, _r, _ri);
};

window.GetVehicleModVariation = function (vehicle, modType) {
	return _in("0xB3924ECD70E095DC", vehicle, modType, _r);
};

window.GetVehicleModelAcceleration = function (modelHash) {
	return _in("0x8C044C5C84505B6A", _ch(modelHash), _r, _rf);
};

window.GetVehicleModelMaxBraking = function (modelHash) {
	return _in("0xDC53FD41B4ED944C", _ch(modelHash), _r, _rf);
};

window.GetVehicleModelMaxSpeed = function (modelHash) {
	return _in("0xF417C2502FFFED43", _ch(modelHash), _r, _rf);
};

window.GetVehicleModelMaxTraction = function (modelHash) {
	return _in("0x539DE94D44FDFD0D", _ch(modelHash), _r, _rf);
};

window.GetVehicleModelNumberOfSeats = function (modelHash) {
	return _in("0x2AD93716F184EDA4", _ch(modelHash), _r, _ri);
};

window.GetVehicleNeonLightsColour = function (vehicle) {
	return _in("0x7619EEE8C886757F", vehicle, _i, _i, _i);
};

window.GetVehicleNextGear = function (vehicle) {
	return _in("0xddb298ae", vehicle, _r, _ri);
};

window.GetVehicleNodePosition = function (nodeId, outPosition) {
	return _in("0x703123E5E7D429C2", nodeId, _v);
};

window.GetVehicleNodeProperties = function (x, y, z) {
	return _in("0x0568566ACBB5DEDC", _fv(x), _fv(y), _fv(z), _i, _i, _r);
};

window.GetVehicleNumberOfPassengers = function (vehicle) {
	return _in("0x24CB2137731FFE89", vehicle, _r, _ri);
};

window.GetVehicleNumberOfWheels = function (vehicle) {
	return _in("0xedf4b0fc", vehicle, _r, _ri);
};

window.GetVehicleNumberPlateText = function (vehicle) {
	return _in("0x7CE1CCB9B293020E", vehicle, _r, _s);
};

window.GetVehicleNumberPlateTextIndex = function (vehicle) {
	return _in("0xF11BC2DD9A3E7195", vehicle, _r, _ri);
};

window.GetVehicleOilLevel = function (vehicle) {
	return _in("0xfc7f8ef4", vehicle, _r, _rf);
};

window.GetVehicleOwner = function (vehicle, entity) {
	return _in("0x8F5EBAB1F260CFCE", vehicle, _ii(entity) /* may be optional */, _r);
};

window.GetVehiclePedIsIn = function (ped, lastVehicle) {
	return _in("0x9A9112A0FE9A4713", ped, lastVehicle, _r, _ri);
};

window.GetVehiclePedIsTryingToEnter = function (ped) {
	return _in("0x814FA8BE5449445D", ped, _r, _ri);
};

window.GetVehiclePedIsUsing = function (ped) {
	return _in("0x6094AD011A2EA87D", ped, _r, _ri);
};

window.GetVehiclePetrolTankHealth = function (vehicle) {
	return _in("0x7D5DABE888D2D074", vehicle, _r, _rf);
};

window.GetVehiclePlateType = function (vehicle) {
	return _in("0x9CCC9525BF2408E0", vehicle, _r, _ri);
};

window.GetVehicleRecordingId = function (p0, p1) {
	return _in("0x21543C612379DB3C", p0, _ts(p1), _r, _ri);
};

window.GetVehicleSteeringAngle = function (vehicle) {
	return _in("0x1382fcea", vehicle, _r, _rf);
};

window.GetVehicleSteeringScale = function (vehicle) {
	return _in("0x954465de", vehicle, _r, _rf);
};

window.GetVehicleSuspensionHeight = function (vehicle) {
	return _in("0x53952FD2BAA19F17", vehicle, _r, _rf);
};

window.GetVehicleTrailerVehicle = function (vehicle, trailer) {
	return _in("0x1CDD6BADC297830D", vehicle, _ii(trailer) /* may be optional */, _r);
};

window.GetVehicleTurboPressure = function (vehicle) {
	return _in("0xe02b51d7", vehicle, _r, _rf);
};

window.GetVehicleTyreSmokeColor = function (vehicle) {
	return _in("0xB635392A4938B3C3", vehicle, _i, _i, _i);
};

window.GetVehicleTyresCanBurst = function (vehicle) {
	return _in("0x678B9BB8C3F58FEB", vehicle, _r);
};

window.GetVehicleWaypointProgress = function (p0) {
	return _in("0x9824CFF8FC66E159", p0, _r, _ri);
};

window.GetVehicleWaypointTargetPoint = function (p0) {
	return _in("0x416B62AC8B9E5BBD", p0, _r, _ri);
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

window.GetVehicleWheelType = function (vehicle) {
	return _in("0xB3ED1BFB4BE636DC", vehicle, _r, _ri);
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

window.GetVehicleWindowTint = function (vehicle) {
	return _in("0x0EE21293DAD47C95", vehicle, _r, _ri);
};

window.GetWantedLevelRadius = function (player) {
	return _in("0x085DEB493BE80812", player, _r, _rf);
};

window.GetWantedLevelThreshold = function (wantedLevel) {
	return _in("0xFDD179EAF45B556C", wantedLevel, _r, _ri);
};

window.GetWaterHeight = function (x, y, z, height) {
	return _in("0xF6829842C06AE524", _fv(x), _fv(y), _fv(z), _fi(height) /* may be optional */, _r);
};

window.GetWaterHeightNoWaves = function (x, y, z, height) {
	return _in("0x8EE6B53CE13A9794", _fv(x), _fv(y), _fv(z), _fi(height) /* may be optional */, _r);
};

window.GetWavesIntensity = function () {
	return _in("0x2B2A2CC86778B619", _r, _rf);
};

window.GetWaypointDistanceAlongRoute = function (p0, p1) {
	return _in("0xA5B769058763E497", _ts(p0), p1, _r, _rf);
};

window.GetWeaponClipSize = function (weaponHash) {
	return _in("0x583BE370B1EC6EB4", _ch(weaponHash), _r, _ri);
};

window.GetWeaponComponentHudStats = function (componentHash, outData) {
	return _in("0xB3CAF387AE12E9F8", _ch(componentHash), _ii(outData) /* may be optional */, _r);
};

window.GetWeaponComponentTypeModel = function (componentHash) {
	return _in("0x0DB57B41EC1DB083", _ch(componentHash), _r, _ri);
};

window.GetWeaponDamageType = function (weaponHash) {
	return _in("0x3BE0BB12D25FB305", _ch(weaponHash), _r, _ri);
};

window.GetWeaponHashFromPickup = function (pickupHash) {
	return _in("0x08F96CA6C551AD51", pickupHash, _r, _ri);
};

window.GetWeaponHudStats = function (weaponHash, outData) {
	return _in("0xD92C739EE34C9EBA", _ch(weaponHash), _ii(outData) /* may be optional */, _r);
};

window.GetWeaponObjectFromPed = function (ped, p1) {
	return _in("0xCAE1DC9A0E22A16D", ped, p1, _r, _ri);
};

window.GetWeaponObjectTintIndex = function (weapon) {
	return _in("0xCD183314F7CD2E57", weapon, _r, _ri);
};

window.GetWeaponTintCount = function (weaponHash) {
	return _in("0x5DCF6C5CAB2E9BF7", _ch(weaponHash), _r, _ri);
};

window.GetWeapontypeGroup = function (weaponHash) {
	return _in("0xC3287EE3050FB74C", _ch(weaponHash), _r, _ri);
};

window.GetWeapontypeModel = function (weaponHash) {
	return _in("0xF46CDC33180FDA94", _ch(weaponHash), _r, _ri);
};

window.GetWeapontypeSlot = function (weaponHash) {
	return _in("0x4215460B9B8B7FA0", _ch(weaponHash), _r, _ri);
};

window.GetWeatherTypeTransition = function () {
	return _in("0xF3BBE884A14BB413", _i, _i, _f);
};

window.GetWindDirection = function () {
	return _in("0x1F400FEF721170DA", _r, _rv);
};

window.GetWindSpeed = function () {
	return _in("0xA8CF1CC0AFCD3F12", _r, _rf);
};

window.GetWorldPositionOfEntityBone = function (entity, boneIndex) {
	return _in("0x44A8FCB8ED227738", entity, boneIndex, _r, _rv);
};

window.GetZoneAtCoords = function (x, y, z) {
	return _in("0x27040C25DE6CB2F4", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.GetZoneFromNameId = function (zoneName) {
	return _in("0x98CD1D2934B76CC1", _ts(zoneName), _r, _ri);
};

window.GetZonePopschedule = function (zoneId) {
	return _in("0x4334BC40AA0CB4BB", zoneId, _r, _ri);
};

window.GetZoneScumminess = function (zoneId) {
	return _in("0x5F7B268D15BA0739", zoneId, _r, _ri);
};

window.GiveAchievementToPlayer = function (achievement) {
	return _in("0xBEC7076D64130195", achievement, _r);
};

window.GiveDelayedWeaponToPed = function (ped, weaponHash, time, equipNow) {
	return _in("0xB282DC6EBD803C75", ped, _ch(weaponHash), time, equipNow);
};

window.GivePedHelmet = function (ped, cannotRemove, helmetFlag, textureIndex) {
	return _in("0x54C7C4A94367717E", ped, cannotRemove, helmetFlag, textureIndex);
};

window.GivePedNmMessage = function (ped) {
	return _in("0xB158DFCCC56E5C5B", ped);
};

window.GivePedToPauseMenu = function (ped, p1) {
	return _in("0xAC0BFBDC3BE00E14", ped, p1);
};

window.GivePlayerRagdollControl = function (player, toggle) {
	return _in("0x3C49C870E66F0A28", player, toggle);
};

window.GiveWeaponComponentToPed = function (ped, weaponHash, componentHash) {
	return _in("0xD966D51AA5B28BB9", ped, _ch(weaponHash), _ch(componentHash));
};

window.GiveWeaponComponentToWeaponObject = function (weaponObject, addonHash) {
	return _in("0x33E179436C0B31DB", weaponObject, _ch(addonHash));
};

window.GiveWeaponObjectToPed = function (weaponObject, ped) {
	return _in("0xB1FA61371AF7C4B7", weaponObject, ped);
};

window.GiveWeaponToPed = function (ped, weaponHash, ammoCount, isHidden, equipNow) {
	return _in("0xBF0FD6E56C964FCB", ped, _ch(weaponHash), ammoCount, isHidden, equipNow);
};

window.HasAchievementBeenPassed = function (achievement) {
	return _in("0x867365E111A3B6EB", achievement, _r);
};

window.HasActionModeAssetLoaded = function (asset) {
	return _in("0xE4B5F4BF2CB24E65", _ts(asset), _r);
};

window.HasAdditionalTextLoaded = function (slot) {
	return _in("0x02245FE4BED318B8", slot, _r);
};

window.HasAnimDictLoaded = function (animDict) {
	return _in("0xD031A9162D01088C", _ts(animDict), _r);
};

window.HasAnimEventFired = function (entity, actionHash) {
	return _in("0xEAF4CD9EA3E7E922", entity, _ch(actionHash), _r);
};

window.HasAnimSetLoaded = function (animSet) {
	return _in("0xC4EA073D86FB29B0", _ts(animSet), _r);
};

window.HasBgScriptBeenDownloaded = function () {
	return _in("0x8132C0EB8B2B3293", _r);
};

window.HasBulletImpactedInArea = function (x, y, z, p3, p4, p5) {
	return _in("0x9870ACFB89A90995", _fv(x), _fv(y), _fv(z), _fv(p3), p4, p5, _r);
};

window.HasBulletImpactedInBox = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xDC8C5D7CFEAB8394", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, p7, _r);
};

window.HasButtonCombinationJustBeenEntered = function (hash, amount) {
	return _in("0x071E2A839DE82D90", _ch(hash), amount, _r);
};

window.HasCheatStringJustBeenEntered = function (hash) {
	return _in("0x557E43C447E700A8", _ch(hash), _r);
};

window.HasClipSetLoaded = function (clipSet) {
	return _in("0x318234F4F3738AF3", _ts(clipSet), _r);
};

window.HasClosestObjectOfTypeBeenBroken = function (p0, p1, p2, p3, modelHash, p5) {
	return _in("0x761B0E69AC4D007E", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _ch(modelHash), p5, _r);
};

window.HasCollisionForModelLoaded = function (model) {
	return _in("0x22CCA434E368F03A", _ch(model), _r);
};

window.HasCollisionLoadedAroundEntity = function (entity) {
	return _in("0xE9676F61BC0B3321", entity, _r);
};

window.HasCutsceneFinished = function () {
	return _in("0x7C0A893088881D57", _r);
};

window.HasCutsceneLoaded = function () {
	return _in("0xC59F528E9AB9F339", _r);
};

window.HasEntityAnimFinished = function (entity, animDict, animName, p3) {
	return _in("0x20B711662962B472", entity, _ts(animDict), _ts(animName), p3, _r);
};

window.HasEntityBeenDamagedByAnyObject = function (entity) {
	return _in("0x95EB9964FF5C5C65", entity, _r);
};

window.HasEntityBeenDamagedByAnyPed = function (entity) {
	return _in("0x605F5A140F202491", entity, _r);
};

window.HasEntityBeenDamagedByAnyVehicle = function (entity) {
	return _in("0xDFD5033FDBA0A9C8", entity, _r);
};

window.HasEntityBeenDamagedByEntity = function (entity1, entity2, p2) {
	return _in("0xC86D67D52A707CF8", entity1, entity2, p2, _r);
};

window.HasEntityBeenDamagedByWeapon = function (entity, weaponHash, weaponType) {
	return _in("0x131D401334815E94", entity, _ch(weaponHash), weaponType, _r);
};

window.HasEntityClearLosToEntity = function (entity1, entity2, traceType) {
	return _in("0xFCDFF7B72D23A1AC", entity1, entity2, traceType, _r);
};

window.HasEntityClearLosToEntityInFront = function (entity1, entity2) {
	return _in("0x0267D00AF114F17A", entity1, entity2, _r);
};

window.HasEntityCollidedWithAnything = function (entity) {
	return _in("0x8BAD02F0368D9E14", entity, _r);
};

window.HasForceCleanupOccurred = function (cleanupFlags) {
	return _in("0xC968670BFACE42D9", cleanupFlags, _r);
};

window.HasHudScaleformLoaded = function (hudComponent) {
	return _in("0xDF6E5987D2B4D140", hudComponent, _r);
};

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
window.HasMinimapOverlayLoaded = function (id) {
	return _in("0xf7535f32", id, _r);
};

window.HasModelLoaded = function (model) {
	return _in("0x98A4EB5D89A0C952", _ch(model), _r);
};

window.HasNamedPtfxAssetLoaded = function (fxName) {
	return _in("0x8702416E512EC454", _ts(fxName), _r);
};

window.HasNamedScaleformMovieLoaded = function (scaleformName) {
	return _in("0x0C1C5D756FB5F337", _ts(scaleformName), _r);
};

window.HasNetworkTimeStarted = function () {
	return _in("0x46718ACEEDEAFC84", _r);
};

window.HasObjectBeenBroken = function (object) {
	return _in("0x8ABFB70C49CC43E2", object, _r);
};

window.HasPedBeenDamagedByWeapon = function (ped, weaponHash, weaponType) {
	return _in("0x2D343D2219CD027A", ped, _ch(weaponHash), weaponType, _r);
};

window.HasPedGotWeapon = function (ped, weaponHash, p2) {
	return _in("0x8DECB02F88F428BC", ped, _ch(weaponHash), p2, _r);
};

window.HasPedGotWeaponComponent = function (ped, weaponHash, componentHash) {
	return _in("0xC593212475FAE340", ped, _ch(weaponHash), _ch(componentHash), _r);
};

window.HasPedHeadBlendFinished = function (ped) {
	return _in("0x654CD0A825161131", ped, _r);
};

window.HasPedReceivedEvent = function (p0, p1) {
	return _in("0x8507BCB710FA6DC0", p0, p1, _r);
};

window.HasPickupBeenCollected = function (pickup) {
	return _in("0x80EC48E6679313F9", pickup, _r);
};

window.HasPlayerBeenSpottedInStolenVehicle = function (player) {
	return _in("0xD705740BB0A1CF4C", player, _r);
};

window.HasPlayerDamagedAtLeastOneNonAnimalPed = function (player) {
	return _in("0xE4B90F367BD81752", player, _r);
};

window.HasPlayerDamagedAtLeastOnePed = function (player) {
	return _in("0x20CE80B0C2BF4ACC", player, _r);
};

window.HasPlayerLeftTheWorld = function (player) {
	return _in("0xD55DDFB47991A294", player, _r);
};

window.HasPlayerTeleportFinished = function (player) {
	return _in("0xE23D5873C2394C61", player, _r);
};

window.HasPreloadModsFinished = function (p0) {
	return _in("0x06F43E5175EB6D96", p0, _r);
};

window.HasPtfxAssetLoaded = function () {
	return _in("0xCA7D9B86ECA7481B", _r);
};

window.HasScaleformContainerMovieLoadedIntoParent = function (scaleformHandle) {
	return _in("0x8217150E1217EBFD", scaleformHandle, _r);
};

window.HasScaleformMovieLoaded = function (scaleformHandle) {
	return _in("0x85F01B8D5B90570E", scaleformHandle, _r);
};

window.HasScriptLoaded = function (scriptName) {
	return _in("0xE6CC9F3BA0FB9EF1", _ts(scriptName), _r);
};

window.HasScriptWithNameHashLoaded = function (scriptHash) {
	return _in("0x5F0F0C783EB16C04", _ch(scriptHash), _r);
};

window.HasSoundFinished = function (soundId) {
	return _in("0xFCBDCE714A7C88E5", soundId, _r);
};

window.HasStealthModeAssetLoaded = function (asset) {
	return _in("0xE977FC5B08AF3441", _ts(asset), _r);
};

window.HasStreamedTextureDictLoaded = function (textureDict) {
	return _in("0x0145F696AAAAD2E4", _ts(textureDict), _r);
};

window.HasThisAdditionalTextLoaded = function (gxt, slot) {
	return _in("0xADBF060E2B30C5BC", _ts(gxt), slot, _r);
};

window.HasThisCutsceneLoaded = function (cutsceneName) {
	return _in("0x228D3D94F8A11C3C", _ts(cutsceneName), _r);
};

window.HasTunablesBeenDownloaded = function () {
	return _in("0x0467C11ED88B7D28", _r);
};

window.HasVehicleAssetLoaded = function (vehicleAsset) {
	return _in("0x1BBE0523B8DB9A21", vehicleAsset, _r);
};

window.HasVehicleGotProjectileAttached = function (driver, vehicle, weaponHash, p3) {
	return _in("0x717C8481234E3B88", driver, vehicle, _ch(weaponHash), p3, _r);
};

window.HasVehicleJumpingAbility = function (vehicle) {
	return _in("0x9078C0C5EF8C19E9", vehicle, _r);
};

window.HasVehicleParachute = function (vehicle) {
	return _in("0xBC9CFF381338CB4F", vehicle, _r);
};

window.HasVehicleRecordingBeenLoaded = function (p0, p1) {
	return _in("0x300D614A4C785FC4", p0, _ii(p1) /* may be optional */, _r);
};

window.HasVehicleRocketBoost = function (vehicle) {
	return _in("0x36D782F68B309BDA", vehicle, _r);
};

window.HasWeaponAssetLoaded = function (weaponHash) {
	return _in("0x36E353271F0E90EE", _ch(weaponHash), _r);
};

window.HasWeaponGotWeaponComponent = function (weapon, addonHash) {
	return _in("0x76A18844E743BF91", weapon, _ch(addonHash), _r);
};

window.HideHelpTextThisFrame = function () {
	return _in("0xD46923FC481CA285");
};

window.HideHudAndRadarThisFrame = function () {
	return _in("0x719FF505F097FD20");
};

window.HideHudComponentThisFrame = function (id) {
	return _in("0x6806C51AD12B83B8", id);
};

window.HideLoadingOnFadeThisFrame = function () {
	return _in("0x4B0311D3CDC4648F");
};

window.HideMapObjectThisFrame = function (mapObjectHash) {
	return _in("0xA97F257D0151A6AB", _ch(mapObjectHash));
};

window.HideNumberOnBlip = function (blip) {
	return _in("0x532CFF637EF80148", blip);
};

window.HidePedBloodDamageByZone = function (ped, p1, p2) {
	return _in("0x62AB793144DE75DC", ped, p1, p2);
};

window.HidePedWeaponForScriptedCutscene = function (ped, toggle) {
	return _in("0x6F6981D2253C208F", ped, toggle);
};

window.HideScriptedHudComponentThisFrame = function (id) {
	return _in("0xE374C498D8BADC14", id);
};

window.HideSpecialAbilityLockonOperation = function (p0, p1) {
	return _in("0x3EED80DFF7325CAA", p0, p1);
};

window.HighlightPlacementCoords = function (x, y, z, colorIndex) {
	return _in("0x3430676B11CDF21D", _fv(x), _fv(y), _fv(z), colorIndex);
};

window.HintAmbientAudioBank = function (p0, p1) {
	return _in("0x8F8C0E370AE62F5C", p0, p1, _r, _ri);
};

window.HintScriptAudioBank = function (p0, p1) {
	return _in("0xFB380A29641EC31A", p0, p1, _r, _ri);
};

window.IgnoreNextRestart = function (toggle) {
	return _in("0x21FFB63D8C615361", toggle);
};

window.InitShopPedComponent = function (outComponent) {
	return _in("0x1E8C308FD312C036", _ii(outComponent) /* may be optional */);
};

window.InitShopPedProp = function (outProp) {
	return _in("0xEB0A2B758F7B850F", _ii(outProp) /* may be optional */);
};

window.IntToParticipantindex = function (value) {
	return _in("0x9EC6603812C24710", value, _r, _ri);
};

window.IntToPlayerindex = function (value) {
	return _in("0x41BD2A6B006AF756", value, _r, _ri);
};

window.InterruptConversation = function (p0) {
	return _in("0xA018A12E5C5C2FA6", p0, _i, _i);
};

window.InvokeFunctionReference = function (referenceIdentity, argsSerialized, argsLength, retvalLength) {
	return _in("0xe3551879", _ts(referenceIdentity), _ts(argsSerialized), argsLength, _ii(retvalLength) /* may be optional */, _r, _s);
};

window.IsAceAllowed = function (object) {
	return _in("0x7ebb9929", _ts(object), _r);
};

window.IsAimCamActive = function () {
	return _in("0x68EDDA28A5976D07", _r);
};

window.IsAlarmPlaying = function (alarmName) {
	return _in("0x226435CB96CCFC8C", _ts(alarmName), _r);
};

window.IsAmbientSpeechDisabled = function (ped) {
	return _in("0x932C2D096A2C3FFF", ped, _r);
};

window.IsAmbientSpeechPlaying = function (p0) {
	return _in("0x9072C8B49907BFAD", p0, _r);
};

window.IsAmbientZoneEnabled = function (ambientZone) {
	return _in("0x01E2817A479A7F9B", _ts(ambientZone), _r);
};

window.IsAnEntity = function (handle) {
	return _in("0x731EC8A916BD11A1", handle, _r);
};

window.IsAnyObjectNearPoint = function (x, y, z, range, p4) {
	return _in("0x397DC58FF00298D1", _fv(x), _fv(y), _fv(z), _fv(range), p4, _r);
};

window.IsAnyPedNearPoint = function (x, y, z, radius) {
	return _in("0x083961498679DC9F", _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsAnyPedShootingInArea = function (x1, y1, z1, x2, y2, z2, p6, p7) {
	return _in("0xA0D3D71EA1086C55", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p6, p7, _r);
};

window.IsAnySpeechPlaying = function (ped) {
	return _in("0x729072355FA39EC9", ped, _r);
};

window.IsAnyVehicleNearPoint = function (x, y, z, radius) {
	return _in("0x61E1DD6125A3EEE6", _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsAreaOccupied = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
	return _in("0xA61B4DF533DCB56E", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, p7, p8, p9, p10, p11, p12, _r);
};

window.IsAudioSceneActive = function (scene) {
	return _in("0xB65B60556E2A9225", _ts(scene), _r);
};

window.IsAussieVersion = function () {
	return _in("0x9F1935CA1F724008", _r);
};

window.IsAutoSaveInProgress = function () {
	return _in("0x69240733738C19A0", _r);
};

window.IsBigVehicle = function (vehicle) {
	return _in("0x9F243D3919F442FE", vehicle, _r);
};

window.IsBitSet = function (address, offset) {
	return _in("0xA921AA820C25702F", address, offset, _r);
};

window.IsBlipFlashing = function (blip) {
	return _in("0xA5E41FD83AD6CEF0", blip, _r);
};

window.IsBlipOnMinimap = function (blip) {
	return _in("0xE41CA53051197A27", blip, _r);
};

window.IsBlipShortRange = function (blip) {
	return _in("0xDA5F8727EB75B926", blip, _r);
};

window.IsBulletInAngledArea = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x1A8B5F3C01E2B477", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, _r);
};

window.IsBulletInArea = function (p0, p1, p2, p3, p4) {
	return _in("0x3F2023999AD51C1F", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, _r);
};

window.IsBulletInBox = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xDE0F6D7450D37351", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _r);
};

window.IsCamActive = function (cam) {
	return _in("0xDFB2B516207D3534", cam, _r);
};

window.IsCamInterpolating = function (cam) {
	return _in("0x036F97C908C2B52C", cam, _r);
};

window.IsCamPlayingAnim = function (cam, animName, animDictionary) {
	return _in("0xC90621D8A0CEECF2", cam, _ts(animName), _ts(animDictionary), _r);
};

window.IsCamRendering = function (cam) {
	return _in("0x02EC0AF5C5A49B7A", cam, _r);
};

window.IsCamShaking = function (cam) {
	return _in("0x6B24BFE83A2BE47B", cam, _r);
};

window.IsCamSplinePaused = function (p0) {
	return _in("0x0290F35C0AD97864", p0, _r);
};

window.IsCinematicCamRendering = function () {
	return _in("0xB15162CB5826E9E8", _r);
};

window.IsCinematicCamShaking = function () {
	return _in("0xBBC08F6B4CB8FF0A", _r);
};

window.IsCinematicShotActive = function (p0) {
	return _in("0xCC9F3371A7C28BC9", p0, _r);
};

window.IsControlEnabled = function (inputGroup, control) {
	return _in("0x1CEA6BFDF248E5D9", inputGroup, control, _r);
};

window.IsControlJustPressed = function (inputGroup, control) {
	return _in("0x580417101DDB492F", inputGroup, control, _r);
};

window.IsControlJustReleased = function (inputGroup, control) {
	return _in("0x50F940259D3841E6", inputGroup, control, _r);
};

window.IsControlPressed = function (inputGroup, control) {
	return _in("0xF3A21BCD95725A4A", inputGroup, control, _r);
};

window.IsControlReleased = function (inputGroup, control) {
	return _in("0x648EE3E7F38877DD", inputGroup, control, _r);
};

window.IsConversationPedDead = function (ped) {
	return _in("0xE0A0AEC214B1FABA", ped, _r);
};

window.IsCopPedInArea_3d = function (x1, y1, z1, x2, y2, z2) {
	return _in("0x16EC4839969F9F5E", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r);
};

window.IsCopVehicleInArea_3d = function (x1, x2, y1, y2, z1, z2) {
	return _in("0x7EEF65D5F153E26A", _fv(x1), _fv(x2), _fv(y1), _fv(y2), _fv(z1), _fv(z2), _r);
};

window.IsCutsceneActive = function () {
	return _in("0x991251AFC3981F84", _r);
};

window.IsCutscenePlaying = function () {
	return _in("0xD3C2E180A40F031E", _r);
};

window.IsDamageTrackerActiveOnNetworkId = function (netID) {
	return _in("0x6E192E33AD436366", netID, _r);
};

window.IsDecalAlive = function (decal) {
	return _in("0xC694D74949CAFD0C", decal, _r);
};

window.IsDisabledControlJustPressed = function (inputGroup, control) {
	return _in("0x91AEF906BCA88877", inputGroup, control, _r);
};

window.IsDisabledControlJustReleased = function (inputGroup, control) {
	return _in("0x305C8DCD79DA8B0F", inputGroup, control, _r);
};

window.IsDisabledControlPressed = function (inputGroup, control) {
	return _in("0xE2587F8CBBD87B1D", inputGroup, control, _r);
};

window.IsDlcDataEmpty = function (dlcData) {
	return _in("0xD4D7B033C3AA243C", dlcData, _r);
};

window.IsDlcPresent = function (dlcHash) {
	return _in("0x812595A0644CE1DE", _ch(dlcHash), _r);
};

window.IsDlcVehicleMod = function (modData) {
	return _in("0x0564B9FF9631B82C", modData, _r);
};

window.IsDoorClosed = function (door) {
	return _in("0xC531EE8A1145A149", _ch(door), _r);
};

window.IsDrivebyTaskUnderneathDrivingTask = function (ped) {
	return _in("0x8785E6E40C7A8818", ped, _r);
};

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
window.IsDuplicityVersion = function () {
	return _in("0xcf24c52e", _r);
};

window.IsDurangoVersion = function () {
	return _in("0x4D982ADB1978442D", _r);
};

window.IsEntityAMissionEntity = function (entity) {
	return _in("0x0A7B270912999B3C", entity, _r);
};

window.IsEntityAPed = function (entity) {
	return _in("0x524AC5ECEA15343E", entity, _r);
};

window.IsEntityAVehicle = function (entity) {
	return _in("0x6AC7003FA6E5575E", entity, _r);
};

window.IsEntityAnObject = function (entity) {
	return _in("0x8D68C8FD0FACA94E", entity, _r);
};

window.IsEntityAtCoord = function (entity, xPos, yPos, zPos, xSize, ySize, zSize, p7, p8, p9) {
	return _in("0x20B60995556D004F", entity, _fv(xPos), _fv(yPos), _fv(zPos), _fv(xSize), _fv(ySize), _fv(zSize), p7, p8, p9, _r);
};

window.IsEntityAtEntity = function (entity1, entity2, xSize, ySize, zSize, p5, p6, p7) {
	return _in("0x751B70C3D034E187", entity1, entity2, _fv(xSize), _fv(ySize), _fv(zSize), p5, p6, p7, _r);
};

window.IsEntityAttached = function (entity) {
	return _in("0xB346476EF1A64897", entity, _r);
};

window.IsEntityAttachedToAnyObject = function (entity) {
	return _in("0xCF511840CEEDE0CC", entity, _r);
};

window.IsEntityAttachedToAnyPed = function (entity) {
	return _in("0xB1632E9A5F988D11", entity, _r);
};

window.IsEntityAttachedToAnyVehicle = function (entity) {
	return _in("0x26AA915AD89BFB4B", entity, _r);
};

window.IsEntityAttachedToEntity = function (from, to) {
	return _in("0xEFBE71898A993728", from, to, _r);
};

window.IsEntityDead = function (entity) {
	return _in("0x5F9532F3B5CC2551", entity, _r);
};

window.IsEntityFocus = function (entity) {
	return _in("0x2DDFF3FB9075D747", entity, _r);
};

window.IsEntityInAir = function (entity) {
	return _in("0x886E37EC497200B6", entity, _r);
};

window.IsEntityInAngledArea = function (entity, originX, originY, originZ, edgeX, edgeY, edgeZ, angle, p8, p9, p10) {
	return _in("0x51210CED3DA1C78A", entity, _fv(originX), _fv(originY), _fv(originZ), _fv(edgeX), _fv(edgeY), _fv(edgeZ), _fv(angle), p8, p9, p10, _r);
};

window.IsEntityInArea = function (entity, x1, y1, z1, x2, y2, z2, p7, p8, p9) {
	return _in("0x54736AA40E271165", entity, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p7, p8, p9, _r);
};

window.IsEntityInWater = function (entity) {
	return _in("0xCFB0A0D8EDD145A3", entity, _r);
};

window.IsEntityInZone = function (entity, zone) {
	return _in("0xB6463CF6AF527071", entity, _ts(zone), _r);
};

window.IsEntityOccluded = function (entity) {
	return _in("0xE31C2C72B8692B64", entity, _r);
};

window.IsEntityOnFire = function (entity) {
	return _in("0x28D3FED7190D3A0B", entity, _r);
};

window.IsEntityOnScreen = function (entity) {
	return _in("0xE659E47AF827484B", entity, _r);
};

window.IsEntityPlayingAnim = function (entity, animDict, animName, p4) {
	return _in("0x1F0B79228E461EC9", entity, _ts(animDict), _ts(animName), p4, _r);
};

window.IsEntityStatic = function (entity) {
	return _in("0x1218E6886D3D8327", entity, _r);
};

window.IsEntityTouchingEntity = function (entity, targetEntity) {
	return _in("0x17FFC1B2BA35A494", entity, targetEntity, _r);
};

window.IsEntityTouchingModel = function (entity, modelHash) {
	return _in("0x0F42323798A58C8C", entity, _ch(modelHash), _r);
};

window.IsEntityUpright = function (entity, angle) {
	return _in("0x5333F526F6AB19AA", entity, _fv(angle), _r);
};

window.IsEntityUpsidedown = function (entity) {
	return _in("0x1DBD58820FA61D71", entity, _r);
};

window.IsEntityVisible = function (entity) {
	return _in("0x47D6F43D77935C75", entity, _r);
};

window.IsEntityVisibleToScript = function (entity) {
	return _in("0xD796CB5BA8F20E32", entity, _r);
};

window.IsEntityWaitingForWorldCollision = function (entity) {
	return _in("0xD05BFF0C0A12C68F", entity, _r);
};

window.IsExplosionInAngledArea = function (explosionType, x1, y1, z1, x2, y2, z2, angle) {
	return _in("0xA079A6C51525DC4B", explosionType, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(angle), _r);
};

window.IsExplosionInArea = function (explosionType, x1, y1, z1, x2, y2, z2) {
	return _in("0x2E2EBA0EE7CED0E0", explosionType, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r);
};

window.IsExplosionInSphere = function (explosionType, x, y, z, radius) {
	return _in("0xAB0F816885B0E483", explosionType, _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsFirstPersonAimCamActive = function () {
	return _in("0x5E346D934122613F", _r);
};

window.IsFollowPedCamActive = function () {
	return _in("0xC6D3D26810C8E0F9", _r);
};

window.IsFollowVehicleCamActive = function () {
	return _in("0xCBBDE6D335D6D496", _r);
};

window.IsFrontendFading = function () {
	return _in("0x7EA2B6AF97ECA6ED", _r);
};

window.IsGameInControlOfMusic = function () {
	return _in("0x6D28DC1671E334FD", _r);
};

window.IsGameplayCamLookingBehind = function () {
	return _in("0x70FDA869F3317EA9", _r);
};

window.IsGameplayCamRendering = function () {
	return _in("0x39B5D1B10383F0C8", _r);
};

window.IsGameplayCamShaking = function () {
	return _in("0x016C090630DF1F89", _r);
};

window.IsGameplayHintActive = function () {
	return _in("0xE520FF1AD2785B40", _r);
};

window.IsGarageEmpty = function (garage, p1, p2) {
	return _in("0x90E47239EA1980B8", garage, p1, p2, _r);
};

window.IsHeliPartBroken = function (vehicle, p1, p2, p3) {
	return _in("0xBC74B4BE25EB6C8A", vehicle, p1, p2, p3, _r);
};

window.IsHelpMessageBeingDisplayed = function () {
	return _in("0x4D79439A6B55AC67", _r);
};

window.IsHelpMessageFadingOut = function () {
	return _in("0x327EDEEEAC55C369", _r);
};

window.IsHelpMessageOnScreen = function () {
	return _in("0xDAD37F45428801AE", _r);
};

window.IsHornActive = function (vehicle) {
	return _in("0x9D6BFC12B05C6121", vehicle, _r);
};

window.IsHudComponentActive = function (id) {
	return _in("0xBC4C9EA5391ECC0D", id, _r);
};

window.IsHudHidden = function () {
	return _in("0xA86478C6958735C5", _r);
};

window.IsHudPreferenceSwitchedOn = function () {
	return _in("0x1930DFA731813EC4", _r);
};

window.IsInItemset = function (p0, p1) {
	return _in("0x2D0FC594D1E9C107", p0, p1, _r);
};

window.IsInVehicleCamDisabled = function () {
	return _in("0x4F32C0D5A90A9B40", _r);
};

window.IsIncidentValid = function (incidentId) {
	return _in("0xC8BC6461E629BEAA", incidentId, _r);
};

window.IsInputDisabled = function (inputGroup) {
	return _in("0xA571D46727E2B718", inputGroup, _r);
};

window.IsInputJustDisabled = function (inputGroup) {
	return _in("0x13337B38DB572509", inputGroup, _r);
};

window.IsInteriorCapped = function (interiorID) {
	return _in("0x92BAC8ACF88CEC26", interiorID, _r);
};

window.IsInteriorDisabled = function (interiorID) {
	return _in("0xBC5115A5A939DD15", interiorID, _r);
};

window.IsInteriorPropEnabled = function (interiorID, propName) {
	return _in("0x35F7DD45E8C0A16D", interiorID, _ts(propName), _r);
};

window.IsInteriorReady = function (interiorID) {
	return _in("0x6726BDCCC1932F0E", interiorID, _r);
};

window.IsInteriorRenderingDisabled = function () {
	return _in("0x95AB8B5C992C7B58", _r);
};

window.IsInteriorScene = function () {
	return _in("0xBC72B5D7A1CBD54D", _r);
};

window.IsIplActive = function (iplName) {
	return _in("0x88A741E44A2B3495", _ts(iplName), _r);
};

window.IsItemsetValid = function (p0) {
	return _in("0xB1B1EA596344DFAB", p0, _r);
};

window.IsLoadingPromptBeingDisplayed = function () {
	return _in("0xD422FCC5F239A915", _r);
};

window.IsLookInverted = function () {
	return _in("0x77B612531280010D", _r);
};

window.IsMemoryCardInUse = function () {
	return _in("0x8A75CE2956274ADD", _r);
};

window.IsMessageBeingDisplayed = function () {
	return _in("0x7984C03AA5CC2F41", _r);
};

window.IsMinigameInProgress = function () {
	return _in("0x2B4A15E44DE0F478", _r);
};

window.IsMinimapAreaRevealed = function (x, y, radius) {
	return _in("0x6E31B91145873922", _fv(x), _fv(y), _fv(radius), _r);
};

window.IsMissionCompletePlaying = function () {
	return _in("0x19A30C23F5827F8A", _r);
};

window.IsMissionCreatorBlip = function (blip) {
	return _in("0x26F49BF3381D933D", blip, _r);
};

window.IsMobilePhoneCallOngoing = function () {
	return _in("0x7497D2CE2C30D24C", _r);
};

window.IsMobilePhoneRadioActive = function () {
	return _in("0xB35CE999E8EF317E", _r);
};

window.IsModelAPed = function (modelHash) {
	return _in("0x75816577FEA6DAD5", _ch(modelHash), _r);
};

window.IsModelAVehicle = function (model) {
	return _in("0x19AAC8F07BFEC53E", _ch(model), _r);
};

window.IsModelInCdimage = function (model) {
	return _in("0x35B9E0803292B641", _ch(model), _r);
};

window.IsModelValid = function (model) {
	return _in("0xC0296A2EDF545E92", _ch(model), _r);
};

window.IsMountedWeaponTaskUnderneathDrivingTask = function (ped) {
	return _in("0xA320EF046186FA3B", ped, _r);
};

window.IsMoveBlendRatioRunning = function (ped) {
	return _in("0xD4D8636C0199A939", ped, _r);
};

window.IsMoveBlendRatioSprinting = function (ped) {
	return _in("0x24A2AD74FA9814E2", ped, _r);
};

window.IsMoveBlendRatioStill = function (ped) {
	return _in("0x349CE7B56DAFD95C", ped, _r);
};

window.IsMoveBlendRatioWalking = function (ped) {
	return _in("0xF133BBBE91E1691F", ped, _r);
};

window.IsMpGamerTagActive = function (gamerTagId) {
	return _in("0x4E929E7A5796FD26", gamerTagId, _r);
};

window.IsNamedRendertargetLinked = function (hash) {
	return _in("0x113750538FA31298", _ch(hash), _r);
};

window.IsNamedRendertargetRegistered = function (p0) {
	return _in("0x78DCDC15C9F116B4", _ts(p0), _r);
};

window.IsNavmeshLoadedInArea = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xF813C7E63F9062A5", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r);
};

window.IsNetworkLoadingScene = function () {
	return _in("0x41CA5A33160EA4AB", _r);
};

window.IsNetworkVehicleBeenDamagedByAnyObject = function (x, y, z) {
	return _in("0xDBD2056652689917", _fv(x), _fv(y), _fv(z), _r);
};

window.IsNewLoadSceneActive = function () {
	return _in("0xA41A05B6CB741B85", _r);
};

window.IsNewLoadSceneLoaded = function () {
	return _in("0x01B8247A7A8B9AD1", _r);
};

window.IsNextWeatherType = function (weatherType) {
	return _in("0x2FAA3A30BEC0F25D", _ts(weatherType), _r);
};

window.IsNightvisionInactive = function () {
	return _in("0x2202A3F42C8E5F79", _r);
};

window.IsObjectNearPoint = function (objectHash, x, y, z, range) {
	return _in("0x8C90FE4B381BA60A", _ch(objectHash), _fv(x), _fv(y), _fv(z), _fv(range), _r);
};

window.IsObjectVisible = function (object) {
	return _in("0x8B32ACE6326A7546", object, _r);
};

window.IsObjectWithinBrainActivationRange = function (object) {
	return _in("0xCCBA154209823057", object, _r);
};

window.IsOrbisVersion = function () {
	return _in("0xA72BC0B675B1519E", _r);
};

window.IsParticleFxDelayedBlink = function () {
	return _in("0x5CCABFFCA31DDE33", _r, _rf);
};

window.IsPauseMenuActive = function () {
	return _in("0xB0034A223497FFCB", _r);
};

window.IsPauseMenuRestarting = function () {
	return _in("0x1C491717107431C7", _r);
};

window.IsPcVersion = function () {
	return _in("0x48AF36444B965238", _r);
};

window.IsPedAPlayer = function (ped) {
	return _in("0x12534C348C6CB68B", ped, _r);
};

window.IsPedActiveInScenario = function (ped) {
	return _in("0xAA135F9482C82CC3", ped, _r);
};

window.IsPedAimingFromCover = function (ped) {
	return _in("0x3998B1276A3300E5", ped, _r);
};

window.IsPedArmed = function (ped, p1) {
	return _in("0x475768A975D5AD17", ped, p1, _r);
};

window.IsPedBeingArrested = function (ped) {
	return _in("0x90A09F3A45FED688", ped, _r);
};

window.IsPedBeingJacked = function (ped) {
	return _in("0x9A497FE2DF198913", ped, _r);
};

window.IsPedBeingStealthKilled = function (ped) {
	return _in("0x863B23EFDE9C5DF2", ped, _r);
};

window.IsPedBeingStunned = function (ped, p1) {
	return _in("0x4FBACCE3B4138EE8", ped, p1, _r);
};

window.IsPedBlushColorValid = function (colorID) {
	return _in("0x604E810189EE3A59", colorID, _r);
};

window.IsPedClimbing = function (ped) {
	return _in("0x53E8CB4F48BFE623", ped, _r);
};

window.IsPedComponentVariationValid = function (ped, componentId, drawableId, textureId) {
	return _in("0xE825F6B6CEA7671D", ped, componentId, drawableId, textureId, _r);
};

window.IsPedCuffed = function (ped) {
	return _in("0x74E559B3BC910685", ped, _r);
};

window.IsPedCurrentWeaponSilenced = function (ped) {
	return _in("0x65F0C5AE05943EC7", ped, _r);
};

window.IsPedDeadOrDying = function (ped, p1) {
	return _in("0x3317DEDB88C95038", ped, p1, _r);
};

window.IsPedDiving = function (ped) {
	return _in("0x5527B8246FEF9B11", ped, _r);
};

window.IsPedDoingDriveby = function (ped) {
	return _in("0xB2C086CC1BF8F2BF", ped, _r);
};

window.IsPedDucking = function (ped) {
	return _in("0xD125AE748725C6BC", ped, _r);
};

window.IsPedEvasiveDiving = function (ped, evadingEntity) {
	return _in("0x414641C26E105898", ped, _ii(evadingEntity) /* may be optional */, _r);
};

window.IsPedFacingPed = function (ped, otherPed, angle) {
	return _in("0xD71649DB0A545AA3", ped, otherPed, _fv(angle), _r);
};

window.IsPedFalling = function (ped) {
	return _in("0xFB92A102F1C4DFA3", ped, _r);
};

window.IsPedFatallyInjured = function (ped) {
	return _in("0xD839450756ED5A80", ped, _r);
};

window.IsPedFleeing = function (ped) {
	return _in("0xBBCCE00B381F8482", ped, _r);
};

window.IsPedGettingIntoAVehicle = function (ped) {
	return _in("0xBB062B2B5722478E", ped, _r);
};

window.IsPedGettingUp = function (ped) {
	return _in("0x2A74E1D5F2F00EEC", ped, _r);
};

window.IsPedGoingIntoCover = function (ped) {
	return _in("0x9F65DBC537E59AD5", ped, _r);
};

window.IsPedGroupMember = function (ped, groupId) {
	return _in("0x9BB01E3834671191", ped, groupId, _r);
};

window.IsPedHairColorValid = function (colorID) {
	return _in("0xE0D36E5D9E99CC21", colorID, _r);
};

window.IsPedHangingOnToVehicle = function (ped) {
	return _in("0x1C86D8AEF8254B78", ped, _r);
};

window.IsPedHeadtrackingEntity = function (ped, entity) {
	return _in("0x813A0A7C9D2E831F", ped, entity, _r);
};

window.IsPedHeadtrackingPed = function (ped1, ped2) {
	return _in("0x5CD3CB88A7F8850D", ped1, ped2, _r);
};

window.IsPedHuman = function (ped) {
	return _in("0xB980061DA992779D", ped, _r);
};

window.IsPedHurt = function (ped) {
	return _in("0x5983BB449D7FDB12", ped, _r);
};

window.IsPedInAnyBoat = function (ped) {
	return _in("0x2E0E1C2B4F6CB339", ped, _r);
};

window.IsPedInAnyHeli = function (ped) {
	return _in("0x298B91AE825E5705", ped, _r);
};

window.IsPedInAnyPlane = function (ped) {
	return _in("0x5FFF4CFC74D8FB80", ped, _r);
};

window.IsPedInAnyPoliceVehicle = function (ped) {
	return _in("0x0BD04E29640C9C12", ped, _r);
};

window.IsPedInAnySub = function (ped) {
	return _in("0xFBFC01CCFB35D99E", ped, _r);
};

window.IsPedInAnyTaxi = function (ped) {
	return _in("0x6E575D6A898AB852", ped, _r);
};

window.IsPedInAnyTrain = function (ped) {
	return _in("0x6F972C1AB75A1ED0", ped, _r);
};

window.IsPedInAnyVehicle = function (ped, atGetIn) {
	return _in("0x997ABD671D25CA0B", ped, atGetIn, _r);
};

window.IsPedInCombat = function (ped, target) {
	return _in("0x4859F1FC66A6278E", ped, target, _r);
};

window.IsPedInCover = function (ped, p1) {
	return _in("0x60DFD0691A170B88", ped, p1, _r);
};

window.IsPedInCoverFacingLeft = function (ped) {
	return _in("0x845333B3150583AB", ped, _r);
};

window.IsPedInCurrentConversation = function (ped) {
	return _in("0x049E937F18F4020C", ped, _r);
};

window.IsPedInFlyingVehicle = function (ped) {
	return _in("0x9134873537FA419C", ped, _r);
};

window.IsPedInGroup = function (ped) {
	return _in("0x5891CAC5D4ACFF74", ped, _r);
};

window.IsPedInMeleeCombat = function (ped) {
	return _in("0x4E209B2C1EAD5159", ped, _r);
};

window.IsPedInModel = function (ped, modelHash) {
	return _in("0x796D90EFB19AA332", ped, _ch(modelHash), _r);
};

window.IsPedInParachuteFreeFall = function (ped) {
	return _in("0x7DCE8BDA0F1C1200", ped, _r);
};

window.IsPedInVehicle = function (ped, vehicle, atGetIn) {
	return _in("0xA3EE4A07279BB9DB", ped, vehicle, atGetIn, _r);
};

window.IsPedInWrithe = function (ped) {
	return _in("0xDEB6D52126E7D640", ped, _r);
};

window.IsPedInjured = function (ped) {
	return _in("0x84A2DD9AC37C35C1", ped, _r);
};

window.IsPedJacking = function (ped) {
	return _in("0x4AE4FF911DFB61DA", ped, _r);
};

window.IsPedJumping = function (ped) {
	return _in("0xCEDABC5900A0BF97", ped, _r);
};

window.IsPedJumpingOutOfVehicle = function (ped) {
	return _in("0x433DDFFE2044B636", ped, _r);
};

window.IsPedLipstickColorValid = function (colorID) {
	return _in("0x0525A2C2562F3CD4", colorID, _r);
};

window.IsPedMale = function (ped) {
	return _in("0x6D9F5FAA7488BA46", ped, _r);
};

window.IsPedModel = function (ped, modelHash) {
	return _in("0xC9D55B1A358A5BF7", ped, _ch(modelHash), _r);
};

window.IsPedOnAnyBike = function (ped) {
	return _in("0x94495889E22C6479", ped, _r);
};

window.IsPedOnFoot = function (ped) {
	return _in("0x01FEE67DB37F59B2", ped, _r);
};

window.IsPedOnMount = function (ped) {
	return _in("0x460BC76A0E10655E", ped, _r);
};

window.IsPedOnSpecificVehicle = function (ped, vehicle) {
	return _in("0xEC5F66E459AF3BB2", ped, vehicle, _r);
};

window.IsPedOnVehicle = function (ped) {
	return _in("0x67722AEB798E5FAB", ped, _r);
};

window.IsPedPerformingStealthKill = function (ped) {
	return _in("0xFD4CCDBCC59941B7", ped, _r);
};

window.IsPedPlantingBomb = function (ped) {
	return _in("0xC70B5FAE151982D8", ped, _r);
};

window.IsPedProne = function (ped) {
	return _in("0xD6A86331A537A7B9", ped, _r);
};

window.IsPedPropValid = function (ped, componentId, drawableId, TextureId) {
	return _in("0x2B16A3BFF1FBCE49", ped, componentId, drawableId, TextureId, _r);
};

window.IsPedRagdoll = function (ped) {
	return _in("0x47E4E977581C5B55", ped, _r);
};

window.IsPedReloading = function (ped) {
	return _in("0x24B100C68C645951", ped, _r);
};

window.IsPedRespondingToEvent = function (ped, event) {
	return _in("0x625B774D75C87068", ped, event, _r);
};

window.IsPedRingtonePlaying = function (ped) {
	return _in("0x1E8E5E20937E3137", ped, _r);
};

window.IsPedRunning = function (ped) {
	return _in("0xC5286FFC176F28A2", ped, _r);
};

window.IsPedRunningArrestTask = function (ped) {
	return _in("0x3DC52677769B4AE0", ped, _r);
};

window.IsPedRunningMobilePhoneTask = function (ped) {
	return _in("0x2AFE52F782F25775", ped, _r);
};

window.IsPedRunningRagdollTask = function (ped) {
	return _in("0xE3B6097CC25AA69E", ped, _r);
};

window.IsPedShooting = function (ped) {
	return _in("0x34616828CD07F1A1", ped, _r);
};

window.IsPedShootingInArea = function (ped, x1, y1, z1, x2, y2, z2, p7, p8) {
	return _in("0x7E9DFE24AC1E58EF", ped, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p7, p8, _r);
};

window.IsPedSittingInAnyVehicle = function (ped) {
	return _in("0x826AA586EDB9FEF8", ped, _r);
};

window.IsPedSittingInVehicle = function (ped, vehicle) {
	return _in("0xA808AA1D79230FC2", ped, vehicle, _r);
};

window.IsPedSprinting = function (ped) {
	return _in("0x57E457CD2C0FC168", ped, _r);
};

window.IsPedStandingInCover = function (ped) {
	return _in("0x6A03BF943D767C93", ped, _r);
};

window.IsPedStill = function (ped) {
	return _in("0xAC29253EEF8F0180", ped, _r);
};

window.IsPedStopped = function (ped) {
	return _in("0x530944F6F4B8A214", ped, _r);
};

window.IsPedStrafing = function (ped) {
	return _in("0xE45B7F222DE47E09", ped, _r);
};

window.IsPedSwimming = function (ped) {
	return _in("0x9DE327631295B4C2", ped, _r);
};

window.IsPedSwimmingUnderWater = function (ped) {
	return _in("0xC024869A53992F34", ped, _r);
};

window.IsPedTracked = function (ped) {
	return _in("0x4C5E1F087CD10BB7", ped, _r);
};

window.IsPedTryingToEnterALockedVehicle = function (ped) {
	return _in("0x44D28D5DDFE5F68C", ped, _r);
};

window.IsPedUsingActionMode = function (ped) {
	return _in("0x00E73468D085F745", ped, _r);
};

window.IsPedUsingAnyScenario = function (ped) {
	return _in("0x57AB4A3080F85143", ped, _r);
};

window.IsPedUsingScenario = function (ped, scenario) {
	return _in("0x1BF094736DD62C2E", ped, _ts(scenario), _r);
};

window.IsPedVaulting = function (ped) {
	return _in("0x117C70D1F5730B5E", ped, _r);
};

window.IsPedWalking = function (ped) {
	return _in("0xDE4C184B2B9B071A", ped, _r);
};

window.IsPedWeaponComponentActive = function (ped, weaponHash, componentHash) {
	return _in("0x0D78DE0572D3969E", ped, _ch(weaponHash), _ch(componentHash), _r);
};

window.IsPedWeaponReadyToShoot = function (ped) {
	return _in("0xB80CA294F2F26749", ped, _r);
};

window.IsPedWearingHelmet = function (ped) {
	return _in("0xF33BDFE19B309B19", ped, _r);
};

window.IsPedheadshotReady = function (handle) {
	return _in("0x7085228842B13A67", handle, _r);
};

window.IsPedheadshotValid = function (handle) {
	return _in("0xA0A9668F158129A2", handle, _r, _ri);
};

window.IsPickupWithinRadius = function (pickupHash, x, y, z, radius) {
	return _in("0xF9C36251F6E48E33", _ch(pickupHash), _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsPlaybackGoingOnForVehicle = function (p0) {
	return _in("0x1C8A4C2C19E68EEC", p0, _r);
};

window.IsPlaybackUsingAiGoingOnForVehicle = function (p0) {
	return _in("0xAEA8FD591FAD4106", p0, _r);
};

window.IsPlayerBeingArrested = function (player, atArresting) {
	return _in("0x388A47C51ABDAC8E", player, atArresting, _r);
};

window.IsPlayerCamControlDisabled = function () {
	return _in("0x7C814D2FB49F40C0", _r);
};

window.IsPlayerClimbing = function (player) {
	return _in("0x95E8F73DC65EFB9C", player, _r);
};

window.IsPlayerControlOn = function (player) {
	return _in("0x49C32D60007AFA47", player, _r);
};

window.IsPlayerDead = function (player) {
	return _in("0x424D4687FA1E5652", player, _r);
};

window.IsPlayerFreeAiming = function (player) {
	return _in("0x2E397FD2ECD37C87", player, _r);
};

window.IsPlayerFreeAimingAtEntity = function (player, entity) {
	return _in("0x3C06B5C839B38F7B", player, entity, _r);
};

window.IsPlayerFreeForAmbientTask = function (player) {
	return _in("0xDCCFD3F106C36AB4", player, _r);
};

window.IsPlayerInCutscene = function (player) {
	return _in("0xE73092F4157CD126", player, _r);
};

window.IsPlayerLoggingInNp = function () {
	return _in("0x74556E1420867ECA", _r);
};

window.IsPlayerOnline = function () {
	return _in("0xF25D331DC2627BBC", _r);
};

window.IsPlayerPlaying = function (player) {
	return _in("0x5E9564D8246B909A", player, _r);
};

window.IsPlayerPressingHorn = function (player) {
	return _in("0xFA1E2BF8B10598F9", player, _r);
};

window.IsPlayerReadyForCutscene = function (player) {
	return _in("0x908CBECC2CAA3690", player, _r);
};

window.IsPlayerRidingTrain = function (player) {
	return _in("0x4EC12697209F2196", player, _r);
};

window.IsPlayerScriptControlOn = function (player) {
	return _in("0x8A876A65283DD7D7", player, _r);
};

window.IsPlayerSwitchInProgress = function () {
	return _in("0xD9D2CFFF49FAB35F", _r);
};

window.IsPlayerTargettingAnything = function (player) {
	return _in("0x78CFE51896B6B8A4", player, _r);
};

window.IsPlayerTargettingEntity = function (player, entity) {
	return _in("0x7912F7FC4F6264B6", player, entity, _r);
};

window.IsPlayerTeleportActive = function () {
	return _in("0x02B15662D7F8886F", _r);
};

window.IsPlayerVehicleRadioEnabled = function () {
	return _in("0x5F43D83FD6738741", _r);
};

window.IsPlayerWantedLevelGreater = function (player, wantedLevel) {
	return _in("0x238DB2A2C23EE9EF", player, wantedLevel, _r);
};

window.IsPlayingPhoneGestureAnim = function (ped) {
	return _in("0xB8EBB1E9D3588C10", ped, _r);
};

window.IsPointInAngledArea = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x2A70BAE8883E4C81", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), p10, p11, _r);
};

window.IsPointObscuredByAMissionEntity = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xE54E209C35FFA18D", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _r);
};

window.IsPointOnRoad = function (x, y, z, vehicle) {
	return _in("0x125BF4ABFC536B09", _fv(x), _fv(y), _fv(z), vehicle, _r);
};

window.IsPositionOccupied = function (x, y, z, range, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0xADCDE75E1C60F32D", _fv(x), _fv(y), _fv(z), _fv(range), p4, p5, p6, p7, p8, p9, p10, _r);
};

window.IsPrevWeatherType = function (weatherType) {
	return _in("0x44F28F86433B10A9", _ts(weatherType), _r);
};

window.IsProjectileInArea = function (x1, y1, z1, x2, y2, z2, ownedByPlayer) {
	return _in("0x5270A8FBC098C3F8", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), ownedByPlayer, _r);
};

window.IsProjectileTypeInAngledArea = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0xF0BC12401061DEA0", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, _r);
};

window.IsProjectileTypeInArea = function (x1, y1, z1, x2, y2, z2, type, p7) {
	return _in("0x2E0DC353342C4A6D", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), type, p7, _r);
};

window.IsPs3Version = function () {
	return _in("0xCCA1072C29D096C2", _r);
};

window.IsRadarEnabled = function () {
	return _in("0xAF754F20EB5CD51A", _r);
};

window.IsRadarHidden = function () {
	return _in("0x157F93B036700462", _r);
};

window.IsRadarPreferenceSwitchedOn = function () {
	return _in("0x9EB6522EA68F22FE", _r);
};

window.IsRadioRetuning = function () {
	return _in("0xA151A7394A214E65", _r);
};

window.IsRecording = function () {
	return _in("0x1897CA71995A90B4", _r);
};

window.IsRockstarBanned = function () {
	return _in("0x8020A73847E0CA7D", _r);
};

window.IsScInboxValid = function (p0) {
	return _in("0x93028F1DB42BFD08", p0, _r);
};

window.IsScenarioGroupEnabled = function (scenarioGroup) {
	return _in("0x367A09DED4E05B99", _ts(scenarioGroup), _r);
};

window.IsScenarioOccupied = function (p0, p1, p2, p3, p4) {
	return _in("0x788756D73AC2E07C", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, _r);
};

window.IsScenarioTypeEnabled = function (scenarioType) {
	return _in("0x3A815DB3EA088722", _ts(scenarioType), _r);
};

window.IsScreenFadedIn = function () {
	return _in("0x5A859503B0C08678", _r);
};

window.IsScreenFadedOut = function () {
	return _in("0xB16FCE9DDC7BA182", _r);
};

window.IsScreenFadingIn = function () {
	return _in("0x5C544BC6C57AC575", _r);
};

window.IsScreenFadingOut = function () {
	return _in("0x797AC7CB535BA28F", _r);
};

window.IsScriptGlobalShaking = function () {
	return _in("0xC912AF078AF19212", _r);
};

window.IsScriptedConversationLoaded = function () {
	return _in("0xDF0D54BE7A776737", _r);
};

window.IsScriptedConversationOngoing = function () {
	return _in("0x16754C556D2EDE3D", _r);
};

window.IsScriptedHudComponentActive = function (id) {
	return _in("0xDD100EB17A94FF65", id, _r);
};

window.IsScriptedScenarioPedUsingConditionalAnim = function (ped, animDict, anim) {
	return _in("0x6EC47A344923E1ED", ped, _ts(animDict), _ts(anim), _r);
};

window.IsScriptedSpeechPlaying = function (p0) {
	return _in("0xCC9AA18DCC7084F4", p0, _r);
};

window.IsSeethroughActive = function () {
	return _in("0x44B80ABAB9D80BD3", _r);
};

window.IsShockingEventInSphere = function (type, x, y, z, radius) {
	return _in("0x1374ABB7C15BAB92", type, _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsSniperBulletInArea = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xFEFCF11B01287125", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r);
};

window.IsSniperInverted = function () {
	return _in("0x61A23B7EDA9BDA24", _r);
};

window.IsSocialClubActive = function () {
	return _in("0xC406BE343FC4B9AF", _r);
};

window.IsSocialclubBanned = function () {
	return _in("0xA0AD7E2AF5349F61", _r);
};

window.IsSpecialAbilityActive = function (player) {
	return _in("0x3E5F7FC85D854E15", player, _r);
};

window.IsSpecialAbilityEnabled = function (player) {
	return _in("0xB1D200FE26AEF3CB", player, _r);
};

window.IsSpecialAbilityMeterFull = function (player) {
	return _in("0x05A1FE504B7F2587", player, _r);
};

window.IsSpecialAbilityUnlocked = function (playerModel) {
	return _in("0xC6017F6A6CDFA694", _ch(playerModel), _r);
};

window.IsSphereVisible = function (x, y, z, radius) {
	return _in("0xE33D59DA70B58FDF", _fv(x), _fv(y), _fv(z), _fv(radius), _r);
};

window.IsSphereVisibleToAnotherMachine = function (p0, p1, p2, p3) {
	return _in("0xD82CF8E64C8729D8", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r);
};

window.IsSphereVisibleToPlayer = function (p0, p1, p2, p3, p4) {
	return _in("0xDC3A310219E5DA62", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _r);
};

window.IsSrlLoaded = function () {
	return _in("0xD0263801A4C5B0BB", _r);
};

window.IsStreamPlaying = function () {
	return _in("0xD11FA52EB849D978", _r);
};

window.IsStreamingAdditionalText = function (p0) {
	return _in("0x8B6817B71B85EBF0", p0, _r);
};

window.IsStringNull = function (string) {
	return _in("0xF22B6C47C6EAB066", _ts(string), _r);
};

window.IsStringNullOrEmpty = function (string) {
	return _in("0xCA042B6957743895", _ts(string), _r);
};

window.IsStuntJumpInProgress = function () {
	return _in("0x7A3F19700A4D0525", _r);
};

window.IsStuntJumpMessageShowing = function () {
	return _in("0x2272B0A1343129F4", _r);
};

window.IsSubtitlePreferenceSwitchedOn = function () {
	return _in("0xAD6DACA4BA53E0A4", _r);
};

window.IsSynchronizedSceneLooped = function (sceneID) {
	return _in("0x62522002E0C391BA", sceneID, _r);
};

window.IsSynchronizedSceneRunning = function (sceneId) {
	return _in("0x25D39B935A038A26", sceneId, _r);
};

window.IsSystemUiBeingDisplayed = function () {
	return _in("0x5D511E3867C87139", _r);
};

window.IsTaxiLightOn = function (vehicle) {
	return _in("0x7504C0F113AB50FC", vehicle, _r);
};

window.IsTennisMode = function (ped) {
	return _in("0x5D5479D115290C3F", ped, _r);
};

window.IsTextChatActive = function () {
	return _in("0xB118AF58B5F332A1", _r);
};

window.IsThisAMinigameScript = function () {
	return _in("0x7B30F65D7B710098", _r);
};

window.IsThisModelABicycle = function (model) {
	return _in("0xBF94DD42F63BDED2", _ch(model), _r);
};

window.IsThisModelABike = function (model) {
	return _in("0xB50C0B0CEDC6CE84", _ch(model), _r);
};

window.IsThisModelABoat = function (model) {
	return _in("0x45A9187928F4B9E3", _ch(model), _r);
};

window.IsThisModelACar = function (model) {
	return _in("0x7F6DB52EEFC96DF8", _ch(model), _r);
};

window.IsThisModelAHeli = function (model) {
	return _in("0xDCE4334788AF94EA", _ch(model), _r);
};

window.IsThisModelAPlane = function (model) {
	return _in("0xA0948AB42D7BA0DE", _ch(model), _r);
};

window.IsThisModelAQuadbike = function (model) {
	return _in("0x39DAC362EE65FA28", _ch(model), _r);
};

window.IsThisModelATrain = function (model) {
	return _in("0xAB935175B22E822B", _ch(model), _r);
};

window.IsThisModelAnAmphibiousCar = function (model) {
	return _in("0x633F6F44A537EBB6", _ch(model), _r);
};

window.IsThisModelAnEmergencyBoat = function (model) {
	return _in("0x9537097412CF75FE", _ch(model), _r);
};

window.IsThreadActive = function (threadId) {
	return _in("0x46E9AE36D8FA6417", threadId, _r);
};

window.IsTimeEqualTo = function (timeA, timeB) {
	return _in("0xF5BC95857BD6D512", timeA, timeB, _r);
};

window.IsTimeLessThan = function (timeA, timeB) {
	return _in("0xCB2CF5148012C8D0", timeA, timeB, _r);
};

window.IsTimeMoreThan = function (timeA, timeB) {
	return _in("0xDE350F8651E4346C", timeA, timeB, _r);
};

window.IsToggleModOn = function (vehicle, modType) {
	return _in("0x84B233A8C8FC8AE7", vehicle, modType, _r);
};

window.IsTrackedPedVisible = function (ped) {
	return _in("0x91C8E617F64188AC", ped, _r);
};

window.IsTrackedPointVisible = function (point) {
	return _in("0xC45CCDAAC9221CA8", point, _r);
};

window.IsUiLoadingMultiplayer = function () {
	return _in("0xC6DC823253FBB366", _r);
};

window.IsValidInterior = function (interiorID) {
	return _in("0x26B0E73D7EAAF4D3", interiorID, _r);
};

window.IsVehicleAConvertible = function (vehicle, p1) {
	return _in("0x52F357A30698BCCE", vehicle, p1, _r);
};

window.IsVehicleAlarmActivated = function (vehicle) {
	return _in("0x4319E335B71FFF34", vehicle, _r);
};

window.IsVehicleAlarmSet = function (vehicle) {
	return _in("0xdc921211", vehicle, _r);
};

window.IsVehicleAttachedToCargobob = function (cargobob, vehicleAttached) {
	return _in("0xD40148F22E81A1D9", cargobob, vehicleAttached, _r);
};

window.IsVehicleAttachedToTowTruck = function (towTruck, vehicle) {
	return _in("0x146DF9EC4C4B9FD4", towTruck, vehicle, _r);
};

window.IsVehicleAttachedToTrailer = function (vehicle) {
	return _in("0xE7CF3C4F9F489F0C", vehicle, _r);
};

window.IsVehicleBumperBrokenOff = function (vehicle, front) {
	return _in("0x468056A6BB6F3846", vehicle, front, _r);
};

window.IsVehicleDamaged = function (vehicle) {
	return _in("0xBCDC5017D3CE1E9E", vehicle, _r);
};

window.IsVehicleDoorDamaged = function (veh, doorID) {
	return _in("0xB8E181E559464527", veh, doorID, _r);
};

window.IsVehicleDoorFullyOpen = function (vehicle, doorIndex) {
	return _in("0x3E933CFF7B111C22", vehicle, doorIndex, _r);
};

window.IsVehicleDriveable = function (vehicle, p1) {
	return _in("0x4C241E39B23DF959", vehicle, p1, _r);
};

window.IsVehicleEngineStarting = function (vehicle) {
	return _in("0xbb340d04", vehicle, _r);
};

window.IsVehicleExtraTurnedOn = function (vehicle, extraId) {
	return _in("0xD2E6822DBFD6C8BD", vehicle, extraId, _r);
};

window.IsVehicleHighDetail = function (vehicle) {
	return _in("0x1F25887F3C104278", vehicle, _r);
};

window.IsVehicleInBurnout = function (vehicle) {
	return _in("0x1297A88E081430EB", vehicle, _r);
};

window.IsVehicleInGarageArea = function (garageName, vehicle) {
	return _in("0xCEE4490CD57BB3C2", _ts(garageName), vehicle, _r);
};

window.IsVehicleInteriorLightOn = function (vehicle) {
	return _in("0xa411f72c", vehicle, _r);
};

window.IsVehicleModel = function (vehicle, model) {
	return _in("0x423E8DE37D934D89", vehicle, _ch(model), _r);
};

window.IsVehicleNeedsToBeHotwired = function (vehicle) {
	return _in("0xf9933bf4", vehicle, _r);
};

window.IsVehicleNeonLightEnabled = function (vehicle, index) {
	return _in("0x8C4B92553E4766A5", vehicle, index, _r);
};

window.IsVehicleNodeIdValid = function (vehicleNodeId) {
	return _in("0x1EAF30FCFBF5AF74", vehicleNodeId, _r);
};

window.IsVehicleOnAllWheels = function (vehicle) {
	return _in("0xB104CD1BABF302E2", vehicle, _r);
};

window.IsVehiclePreviouslyOwnedByPlayer = function (vehicle) {
	return _in("0xf849ed67", vehicle, _r);
};

window.IsVehicleRadioLoud = function (vehicle) {
	return _in("0x032A116663A4D5AC", vehicle, _r);
};

window.IsVehicleRocketBoostActive = function (vehicle) {
	return _in("0x3D34E80EED4AE3BE", vehicle, _r);
};

window.IsVehicleSearchlightOn = function (vehicle) {
	return _in("0xC0F97FCE55094987", vehicle, _r);
};

window.IsVehicleSeatFree = function (vehicle, seatIndex) {
	return _in("0x22AC59A870E6A669", vehicle, seatIndex, _r);
};

window.IsVehicleShopResprayAllowed = function (vehicle) {
	return _in("0x8D474C8FAEFF6CDE", vehicle, _r);
};

window.IsVehicleSirenOn = function (vehicle) {
	return _in("0x4C9BF537BE2634B2", vehicle, _r);
};

window.IsVehicleSirenSoundOn = function (vehicle) {
	return _in("0xB5CC40FBCB586380", vehicle, _r);
};

window.IsVehicleStolen = function (vehicle) {
	return _in("0x4AF9BD80EEBEB453", vehicle, _r);
};

window.IsVehicleStopped = function (vehicle) {
	return _in("0x5721B434AD84D57A", vehicle, _r);
};

window.IsVehicleStoppedAtTrafficLights = function (vehicle) {
	return _in("0x2959F696AE390A99", vehicle, _r);
};

window.IsVehicleStuckOnRoof = function (vehicle) {
	return _in("0xB497F06B288DCFDF", vehicle, _r);
};

window.IsVehicleStuckTimerUp = function (vehicle, p1, p2) {
	return _in("0x679BE1DAF71DA874", vehicle, p1, p2, _r);
};

window.IsVehicleTyreBurst = function (vehicle, wheelID, completely) {
	return _in("0xBA291848A0815CA9", vehicle, wheelID, completely, _r);
};

window.IsVehicleVisible = function (vehicle) {
	return _in("0xAA0A52D24FB98293", vehicle, _r);
};

window.IsVehicleWanted = function (vehicle) {
	return _in("0xa7daf7c", vehicle, _r);
};

window.IsVehicleWindowIntact = function (vehicle, windowIndex) {
	return _in("0x46E571A0E20D01F1", vehicle, windowIndex, _r);
};

window.IsWarningMessageActive = function () {
	return _in("0xE18B138FABC53103", _r);
};

window.IsWaypointActive = function () {
	return _in("0x1DD1F58F493F1DA5", _r);
};

window.IsWaypointPlaybackGoingOnForPed = function (p0) {
	return _in("0xE03B3F2D3DC59B64", p0, _r);
};

window.IsWaypointPlaybackGoingOnForVehicle = function (p0) {
	return _in("0xF5134943EA29868C", p0, _r);
};

window.IsWeaponValid = function (weaponHash) {
	return _in("0x937C71165CF334B3", _ch(weaponHash), _r);
};

window.IsWorldPointWithinBrainActivationRange = function () {
	return _in("0xC5042CC6F5E3D450", _r);
};

window.IsXbox360Version = function () {
	return _in("0xF6201B4DAF662A9D", _r);
};

window.JitterVehicle = function (vehicle, p1, yaw, pitch, roll) {
	return _in("0xC59872A5134879C7", vehicle, p1, _fv(yaw), _fv(pitch), _fv(roll));
};

window.KeyHudColour = function (p0, p1) {
	return _in("0x1A5CD7752DD28CD3", p0, p1);
};

window.KnockOffPedProp = function (ped, p1, p2, p3, p4) {
	return _in("0x6FD7816A36615F48", ped, p1, p2, p3, p4);
};

window.KnockPedOffVehicle = function (ped) {
	return _in("0x45BBCBA77C29A841", ped);
};

window.Leaderboards2ReadByHandle = function () {
	return _in("0xC30713A383BFBF0E", _i, _i, _r);
};

window.Leaderboards2ReadByRadius = function (p1) {
	return _in("0x5CE587FB5A42C8C4", _i, p1, _i, _r);
};

window.Leaderboards2ReadByRank = function (p1, p2) {
	return _in("0xBA2C7DB0C129449A", _i, p1, p2, _r);
};

window.Leaderboards2ReadByRow = function (p2, p4, p6) {
	return _in("0xA9CDB1E3F0A49883", _i, _i, p2, _i, p4, _i, p6, _r);
};

window.Leaderboards2ReadByScoreFloat = function (p1, p2) {
	return _in("0xE662C8B759D08F3C", _i, _fv(p1), p2, _r);
};

window.Leaderboards2ReadByScoreInt = function (p1, p2) {
	return _in("0x7EEC7E4F6984A16A", _i, p1, p2, _r);
};

window.Leaderboards2ReadFriendsByRow = function (p2, p3, p4, p5) {
	return _in("0x918B101666F9CB83", _i, _i, p2, p3, p4, p5, _r);
};

window.Leaderboards2WriteData = function (p0) {
	return _in("0xAE2206545888AE49", _ii(p0) /* may be optional */, _r);
};

window.LeaderboardsCacheDataRow = function (p0) {
	return _in("0xB9BB18E2C40142ED", _ii(p0) /* may be optional */, _r);
};

window.LeaderboardsClearCacheData = function () {
	return _in("0xD4B02A6B476E1FDC");
};

window.LeaderboardsGetCacheDataRow = function (p0, p1, p2) {
	return _in("0x9120E8DBA3D69273", p0, p1, _ii(p2) /* may be optional */, _r);
};

window.LeaderboardsGetCacheExists = function (p0) {
	return _in("0x9C51349BE6CDFE2C", p0, _r);
};

window.LeaderboardsGetCacheTime = function (p0) {
	return _in("0xF04C1C27DA35F6C8", p0, _r, _ri);
};

window.LeaderboardsGetColumnId = function (p0, p1, p2) {
	return _in("0xC4B5467A1886EA7E", p0, p1, p2, _r, _ri);
};

window.LeaderboardsGetColumnType = function (p0, p1, p2) {
	return _in("0xBF4FEF46DB7894D3", p0, p1, p2, _r, _ri);
};

window.LeaderboardsGetNumberOfColumns = function (p0, p1) {
	return _in("0x117B45156D7EFF2E", p0, p1, _r, _ri);
};

window.LeaderboardsReadClear = function (p0, p1, p2) {
	return _in("0x7CCE5C737A665701", p0, p1, p2, _r, _ri);
};

window.LeaderboardsReadClearAll = function () {
	return _in("0xA34CB6E6F0DF4A0B", _r, _ri);
};

window.LeaderboardsReadPending = function (p0, p1, p2) {
	return _in("0xAC392C8483342AC2", p0, p1, p2, _r);
};

window.LeaderboardsReadSuccessful = function (p0, p1, p2) {
	return _in("0x2FB19228983E832C", p0, p1, p2, _r);
};

window.LinkNamedRendertarget = function (hash) {
	return _in("0xF6C09E276AEB3F2D", _ch(hash));
};

window.LoadAllObjectsNow = function () {
	return _in("0xBD6E84632DD4CB3F");
};

window.LoadAllPathNodes = function (keepInMemory) {
	return _in("0x80E4A6EDDB0BE8D9", keepInMemory, _r);
};

window.LoadInterior = function (interiorID) {
	return _in("0x2CA429C029CCF247", interiorID);
};

window.LoadMovieMeshSet = function (movieMeshSetName) {
	return _in("0xB66064452270E8F1", _ts(movieMeshSetName), _r, _ri);
};

window.LoadMpDlcMaps = function () {
	return _in("0x0888C3502DBBEEF5");
};

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param fileName The file in the resource.
 * @param resourceName The resource name.
 * @return The file contents
 */
window.LoadResourceFile = function (resourceName, fileName) {
	return _in("0x76a9ee1f", _ts(resourceName), _ts(fileName), _r, _s);
};

window.LoadRopeData = function (rope, rope_preset) {
	return _in("0xCBB203C04D1ABD27", rope, _ts(rope_preset), _r, _ri);
};

window.LoadScene = function (x, y, z) {
	return _in("0x4448EB75B4904BDB", _fv(x), _fv(y), _fv(z));
};

window.LoadSpDlcMaps = function () {
	return _in("0xD7C10C4A637992C9");
};

window.LoadStream = function (streamName, soundSet) {
	return _in("0x1F1F957154EC51DF", _ts(streamName), _ts(soundSet), _r);
};

window.LoadStreamWithStartOffset = function (streamName, startOffset, soundSet) {
	return _in("0x59C16B79F53B3712", _ts(streamName), startOffset, _ts(soundSet), _r);
};

window.LoadTvChannel = function (tvChannel) {
	return _in("0x0AD973CA1E077B60", _ch(tvChannel), _r);
};

window.LoadUgcFile = function (filename) {
	return _in("0xC5238C011AF405E4", _ts(filename), _r);
};

window.LockMinimapAngle = function (angle) {
	return _in("0x299FAEBB108AE05B", angle);
};

window.LockMinimapPosition = function (x, y) {
	return _in("0x1279E861A329E73F", _fv(x), _fv(y));
};

window.LogDebugInfo = function (p0) {
	return _in("0x2162C446DFDF38FD", _ts(p0));
};

window.LowerConvertibleRoof = function (vehicle, instantlyLower) {
	return _in("0xDED51F703D0FA83D", vehicle, instantlyLower);
};

window.MakePedReload = function (ped) {
	return _in("0x20AE33F3AC9C0033", ped, _r);
};

window.MarkObjectForDeletion = function (object) {
	return _in("0xADBE4809F19F927A", object);
};

window.MaxRadioStationIndex = function () {
	return _in("0xF1620ECB50E01DE7", _r, _ri);
};

window.ModifyWater = function (x, y, radius, height) {
	return _in("0xC443FD757C3BA637", _fv(x), _fv(y), _fv(radius), _fv(height));
};

window.MoveFinger = function (direction) {
	return _in("0x95C9E72F3D7DEC9B", direction);
};

window.MoveVehicleDecals = function (p0, p1) {
	return _in("0x84C8D7C2D30D3280", p0, p1);
};

window.N_0x0032a6dba562c518 = function () {
	return _in("0x0032A6DBA562C518");
};

window.N_0x0035bb914316f1e3 = function (p0, p1, p2, p3) {
	return _in("0x0035BB914316F1E3", p0, p1, p2, p3);
};

window.N_0x00c09f246abedd82 = function (vehicleClass) {
	return _in("0x00C09F246ABEDD82", vehicleClass, _r, _rf);
};

window.N_0x01095c95cd46b624 = function (p0) {
	return _in("0x01095C95CD46B624", p0, _r);
};

window.N_0x011883f41211432a = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x011883F41211432A", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x013e5cfc38cd5387 = function (p0) {
	return _in("0x013E5CFC38CD5387", p0, _i, _i, _i);
};

window.N_0x0150b6ff25a9e2e5 = function () {
	return _in("0x0150B6FF25A9E2E5");
};

window.N_0x015b03ee1c43e6ec = function (p0) {
	return _in("0x015B03EE1C43E6EC", p0);
};

window.N_0x01708e8dd3ff8c65 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x01708E8DD3FF8C65", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _r, _ri);
};

window.N_0x017568a8182d98a6 = function (p0) {
	return _in("0x017568A8182D98A6", p0, _r, _ri);
};

window.N_0x01a358d9128b7a86 = function () {
	return _in("0x01A358D9128B7A86", _r, _ri);
};

window.N_0x01abce5e7cbda196 = function () {
	return _in("0x01ABCE5E7CBDA196", _r, _ri);
};

window.N_0x01bb4d577d38bd9e = function (p0, p1) {
	return _in("0x01BB4D577D38BD9E", p0, _fv(p1));
};

window.N_0x0218ba067d249dea = function () {
	return _in("0x0218BA067D249DEA");
};

window.N_0x0225778816fdc28c = function (p0) {
	return _in("0x0225778816FDC28C", _fv(p0));
};

window.N_0x02369d5c8a51fdcf = function (p0) {
	return _in("0x02369D5C8A51FDCF", p0);
};

window.N_0x02398b627547189c = function (p0, p1) {
	return _in("0x02398B627547189C", p0, p1);
};

window.N_0x024a60deb0ea69f0 = function (p0, player, p2, p3) {
	return _in("0x024A60DEB0EA69F0", p0, player, _fv(p2), p3, _r);
};

window.N_0x02a8bec6fd9af660 = function (p1) {
	return _in("0x02A8BEC6FD9AF660", _i, p1, _r);
};

window.N_0x02ac28f3a01fa04a = function (p0) {
	return _in("0x02AC28F3A01FA04A", _fv(p0), _r, _ri);
};

window.N_0x02ada21ea2f6918f = function () {
	return _in("0x02ADA21EA2F6918F", _r, _ri);
};

window.N_0x02deaac8f8ea7fe7 = function (p0) {
	return _in("0x02DEAAC8F8EA7FE7", _ts(p0));
};

window.N_0x02e93c796abd3a97 = function (p0) {
	return _in("0x02E93C796ABD3A97", p0);
};

window.N_0x031acb6aba18c729 = function (radioStation, p1) {
	return _in("0x031ACB6ABA18C729", _ts(radioStation), _ts(p1));
};

window.N_0x03300b57fcac6ddb = function (p0) {
	return _in("0x03300B57FCAC6DDB", p0);
};

window.N_0x0378c08504160d0d = function (p0) {
	return _in("0x0378C08504160D0D", p0, _r);
};

window.N_0x0379daf89ba09aa5 = function (p0, p1) {
	return _in("0x0379DAF89BA09AA5", p0, p1);
};

window.N_0x0395cb47b022e62c = function (p0) {
	return _in("0x0395CB47B022E62C", _ii(p0) /* may be optional */, _r);
};

window.N_0x03c27e13b42a0e82 = function (doorHash, p1, p2, p3) {
	return _in("0x03C27E13B42A0E82", _ch(doorHash), _fv(p1), p2, p3);
};

window.N_0x03c2eebb04b3fb72 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x03C2EEBB04B3FB72", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x03ea03af85a85cb7 = function (ped, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x03EA03AF85A85CB7", ped, p1, p2, p3, p4, p5, p6, p7, p8, _r);
};

window.N_0x03f1a106bda7dd3e = function () {
	return _in("0x03F1A106BDA7DD3E");
};

window.N_0x03fc694ae06c5a20 = function () {
	return _in("0x03FC694AE06C5A20");
};

window.N_0x0419b167ee128f33 = function (p0, p1) {
	return _in("0x0419B167EE128F33", p0, p1, _r, _ri);
};

window.N_0x041c7f2a6c9894e6 = function (p0, p1, p2) {
	return _in("0x041C7F2A6C9894E6", p0, p1, p2, _r, _ri);
};

window.N_0x044dbad7a7fa2be5 = function (p0, p1) {
	return _in("0x044DBAD7A7FA2BE5", _ts(p0), _ts(p1));
};

window.N_0x04655f9d075d0ae5 = function (p0) {
	return _in("0x04655F9D075D0AE5", p0);
};

window.N_0x047cbed6f6f8b63c = function () {
	return _in("0x047CBED6F6F8B63C");
};

window.N_0x04918a41bc9b8157 = function (p0, p1, p2) {
	return _in("0x04918A41BC9B8157", p0, p1, p2, _r, _ri);
};

window.N_0x04d90ba8207ada2d = function (p0) {
	return _in("0x04D90BA8207ADA2D", p0);
};

window.N_0x052991e59076e4e4 = function (p0, p1) {
	return _in("0x052991E59076E4E4", _ch(p0), _ii(p1) /* may be optional */, _r);
};

window.N_0x0581730ab9380412 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x0581730AB9380412", p0, p1, p2, p3, p4, p5);
};

window.N_0x0596843b34b95ce5 = function (p0, p1) {
	return _in("0x0596843B34B95CE5", p0, p1);
};

window.N_0x05f04155a226fbbf = function (p0, p1, p2, p3) {
	return _in("0x05F04155A226FBBF", p0, p1, p2, p3);
};

window.N_0x06087579e7aa85a9 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x06087579E7AA85A9", p0, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), _r);
};

window.N_0x061cb768363d6424 = function (p0, p1) {
	return _in("0x061CB768363D6424", p0, p1);
};

window.N_0x0626a247d2405330 = function () {
	return _in("0x0626A247D2405330", _r, _ri);
};

window.N_0x062d5ead4da2fa6a = function () {
	return _in("0x062D5EAD4DA2FA6A");
};

window.N_0x063ae2b2cc273588 = function (p0, p1) {
	return _in("0x063AE2B2CC273588", p0, p1);
};

window.N_0x06462a961e94b67c = function () {
	return _in("0x06462A961E94B67C");
};

window.N_0x06582aff74894c75 = function (p0, p1) {
	return _in("0x06582AFF74894C75", p0, p1);
};

window.N_0x065d03a9d6b2c6b5 = function (p0, p1) {
	return _in("0x065D03A9D6B2C6B5", p0, p1);
};

window.N_0x06a320535f5f0248 = function (p0) {
	return _in("0x06A320535F5F0248", p0);
};

window.N_0x06a3524161c502ba = function (p0) {
	return _in("0x06A3524161C502BA", _ii(p0) /* may be optional */);
};

window.N_0x06c0023bed16dd6b = function (p0, p1) {
	return _in("0x06C0023BED16DD6B", p0, p1);
};

window.N_0x06eaf70ae066441e = function (p0) {
	return _in("0x06EAF70AE066441E", p0);
};

window.N_0x06ee9048fd080382 = function (p0) {
	return _in("0x06EE9048FD080382", p0);
};

window.N_0x06f761ea47c1d3ed = function (p0) {
	return _in("0x06F761EA47C1D3ED", p0);
};

window.N_0x075f1d57402c93ba = function () {
	return _in("0x075F1D57402C93BA", _r, _ri);
};

window.N_0x07c313f94746702c = function (p0) {
	return _in("0x07C313F94746702C", p0, _r, _ri);
};

window.N_0x07c61676e5bb52cd = function (p0) {
	return _in("0x07C61676E5BB52CD", p0, _r, _ri);
};

window.N_0x07dbd622d9533857 = function (p0) {
	return _in("0x07DBD622D9533857", p0, _r, _ri);
};

window.N_0x07dd29d5e22763f1 = function (p0) {
	return _in("0x07DD29D5E22763F1", _ii(p0) /* may be optional */, _r);
};

window.N_0x07eab372c8841d99 = function (p0, p1, p2) {
	return _in("0x07EAB372C8841D99", p0, p1, p2, _r, _ri);
};

window.N_0x07fb139b592fa687 = function (p0, p1, p2, p3) {
	return _in("0x07FB139B592FA687", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r);
};

window.N_0x0811381ef5062fec = function (p0) {
	return _in("0x0811381EF5062FEC", p0);
};

window.N_0x08a1b82b91900682 = function (p0, p1, p2) {
	return _in("0x08A1B82B91900682", p0, p1, p2);
};

window.N_0x08b0ca7a6ab3ac32 = function (p0, p1, p2) {
	return _in("0x08B0CA7A6AB3AC32", p0, p1, p2);
};

window.N_0x0923dbf87dff735e = function (x, y, z) {
	return _in("0x0923DBF87DFF735E", _fv(x), _fv(y), _fv(z));
};

window.N_0x098760c7461724cd = function () {
	return _in("0x098760C7461724CD");
};

window.N_0x098ab65b9ed9a9ec = function (p1, p2) {
	return _in("0x098AB65B9ED9A9EC", _i, p1, p2, _r);
};

window.N_0x09c0403ed9a751c2 = function (p0) {
	return _in("0x09C0403ED9A751C2", p0, _r);
};

window.N_0x0a123435a26c36cd = function () {
	return _in("0x0A123435A26C36CD");
};

window.N_0x0a436b8643716d14 = function () {
	return _in("0x0A436B8643716D14");
};

window.N_0x0a46af8a78dc5e0a = function () {
	return _in("0x0A46AF8A78DC5E0A");
};

window.N_0x0a50d2604e05cb94 = function (p0, p1, p2, p3, p4) {
	return _in("0x0A50D2604E05CB94", p0, p1, p2, p3, p4);
};

window.N_0x0a60017f841a54f2 = function (p0, p1, p2, p3) {
	return _in("0x0A60017F841A54F2", p0, p1, p2, p3);
};

window.N_0x0a6a279f3aa4fd70 = function (vehicle, p1) {
	return _in("0x0A6A279F3AA4FD70", vehicle, p1);
};

window.N_0x0a6d923dffc9bd89 = function () {
	return _in("0x0A6D923DFFC9BD89", _r, _ri);
};

window.N_0x0a9c7f36e5d7b683 = function (p0) {
	return _in("0x0A9C7F36E5D7B683", p0);
};

window.N_0x0a9f2a468b328e74 = function (p0, p1, p2, p3) {
	return _in("0x0A9F2A468B328E74", p0, p1, p2, p3);
};

window.N_0x0aa27680a0bd43fa = function () {
	return _in("0x0AA27680A0BD43FA");
};

window.N_0x0abc54de641dc0fc = function (p0) {
	return _in("0x0ABC54DE641DC0FC", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x0abf535877897560 = function (p0) {
	return _in("0x0ABF535877897560", p0, _r, _ri);
};

window.N_0x0ad9710cee2f590f = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x0AD9710CEE2F590F", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _r, _ri);
};

window.N_0x0ad9e8f87ff7c16f = function (p0, p1) {
	return _in("0x0AD9E8F87FF7C16F", p0, p1);
};

window.N_0x0ae1f1653b554ab9 = function (p0) {
	return _in("0x0AE1F1653B554AB9", p0, _r);
};

window.N_0x0ae73d8df3a762b2 = function (p0) {
	return _in("0x0AE73D8DF3A762B2", p0);
};

window.N_0x0af7b437918103b3 = function (p0) {
	return _in("0x0AF7B437918103B3", _fv(p0));
};

window.N_0x0afc4af510774b47 = function () {
	return _in("0x0AFC4AF510774B47");
};

window.N_0x0afce529f69b21ff = function () {
	return _in("0x0AFCE529F69B21FF", _r, _ri);
};

window.N_0x0b203b4afde53a4f = function (p2) {
	return _in("0x0B203B4AFDE53A4F", _i, _i, p2, _r, _ri);
};

window.N_0x0b3e35ac043707d9 = function (p0, p1) {
	return _in("0x0B3E35AC043707D9", p0, p1);
};

window.N_0x0b40ed49d7d6ff84 = function () {
	return _in("0x0B40ED49D7D6FF84");
};

window.N_0x0b565b0aae56a0e8 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x0B565B0AAE56A0E8", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x0b568201dd99f0eb = function (p0) {
	return _in("0x0B568201DD99F0EB", p0);
};

window.N_0x0b8b7f74bf061c6d = function () {
	return _in("0x0B8B7F74BF061C6D", _r, _ri);
};

window.N_0x0b919e1fb47cc4e0 = function (p0) {
	return _in("0x0B919E1FB47CC4E0", _fv(p0));
};

window.N_0x0bc3144deb678666 = function (modelHash) {
	return _in("0x0BC3144DEB678666", _ch(modelHash), _r);
};

window.N_0x0bca1d2c47b0d269 = function (p0, p1, p2) {
	return _in("0x0BCA1D2C47B0D269", p0, p1, _fv(p2));
};

window.N_0x0be4be946463f917 = function (p0) {
	return _in("0x0BE4BE946463F917", p0, _r, _ri);
};

window.N_0x0bf3b3bd47d79c08 = function (p0, p1) {
	return _in("0x0BF3B3BD47D79C08", p0, p1);
};

window.N_0x0c0c4e81e1ac60a0 = function () {
	return _in("0x0C0C4E81E1AC60A0", _r, _ri);
};

window.N_0x0c112765300c7e1e = function (p0) {
	return _in("0x0C112765300C7E1E", p0, _r, _ri);
};

window.N_0x0c15b0e443b2349d = function () {
	return _in("0x0C15B0E443B2349D", _r, _ri);
};

window.N_0x0c1f7d49c39d2289 = function () {
	return _in("0x0C1F7D49C39D2289", _r, _ri);
};

window.N_0x0c4bbf625ca98c4e = function (ped, p1) {
	return _in("0x0C4BBF625CA98C4E", ped, p1);
};

window.N_0x0c5a80a9e096d529 = function (p0, p2, p3, p4, p5) {
	return _in("0x0C5A80A9E096D529", p0, _i, p2, p3, p4, p5, _r);
};

window.N_0x0c82d21a77c22d49 = function (p0, p1, p2, p3) {
	return _in("0x0C82D21A77C22D49", p0, p1, p2, p3);
};

window.N_0x0c8fac83902a62df = function (p0) {
	return _in("0x0C8FAC83902A62DF", p0);
};

window.N_0x0c978fda19692c2c = function (p0, p1) {
	return _in("0x0C978FDA19692C2C", p0, p1);
};

window.N_0x0cb1be0633c024a8 = function (p0, p1, p2, p3) {
	return _in("0x0CB1BE0633C024A8", p0, p1, p2, p3);
};

window.N_0x0cd9ab83489430ea = function (p0) {
	return _in("0x0CD9AB83489430EA", p0, _r, _ri);
};

window.N_0x0cdda42f9e360ca6 = function (vehicle, p1) {
	return _in("0x0CDDA42F9E360CA6", vehicle, p1);
};

window.N_0x0cf54f20de43879c = function (p0) {
	return _in("0x0CF54F20DE43879C", p0);
};

window.N_0x0cf97f497fe7d048 = function (p0) {
	return _in("0x0CF97F497FE7D048", p0);
};

window.N_0x0d01d20616fc73fb = function (p0, p1) {
	return _in("0x0D01D20616FC73FB", p0, p1);
};

window.N_0x0d30eb83668e63c5 = function (p0, p1, p2, p3) {
	return _in("0x0D30EB83668E63C5", p0, p1, p2, p3);
};

window.N_0x0d5f65a8f4ebdab5 = function (p0, p1) {
	return _in("0x0D5F65A8F4EBDAB5", p0, p1);
};

window.N_0x0d6ca79eeebd8ca3 = function () {
	return _in("0x0D6CA79EEEBD8CA3", _r, _ri);
};

window.N_0x0d77a82dc2d0da59 = function () {
	return _in("0x0D77A82DC2D0DA59", _i, _i);
};

window.N_0x0dbd5d7e3c5bec3b = function () {
	return _in("0x0DBD5D7E3C5BEC3B", _r, _ri);
};

window.N_0x0e4299c549f0d1f1 = function (p0) {
	return _in("0x0E4299C549F0D1F1", p0);
};

window.N_0x0e4f77f7b9d74d84 = function (p0) {
	return _in("0x0E4F77F7B9D74D84", p0);
};

window.N_0x0eacdf8487d5155a = function (p0) {
	return _in("0x0EACDF8487D5155A", p0);
};

window.N_0x0ede326d47cd0f3e = function (ped, player) {
	return _in("0x0EDE326D47CD0F3E", ped, player, _r);
};

window.N_0x0f3b4d4e43177236 = function (p0, p1) {
	return _in("0x0F3B4D4E43177236", p0, p1);
};

window.N_0x0f62619393661d6e = function (p0, p1, p2) {
	return _in("0x0F62619393661D6E", p0, p1, p2);
};

window.N_0x0f70731baccfbb96 = function () {
	return _in("0x0F70731BACCFBB96", _r);
};

window.N_0x0f73393bac7e6730 = function () {
	return _in("0x0F73393BAC7E6730", _i, _i, _r);
};

window.N_0x0fb82563989cf4fb = function (p0, p1, p2, p3) {
	return _in("0x0FB82563989CF4FB", p0, p1, p2, p3);
};

window.N_0x0fde9dbfc0a6bc65 = function (p0) {
	return _in("0x0FDE9DBFC0A6BC65", _ii(p0) /* may be optional */);
};

window.N_0x0fe8e1fcd2b86b33 = function (p0, p1, p2, p3) {
	return _in("0x0FE8E1FCD2B86B33", p0, p1, p2, p3);
};

window.N_0x0ff2862b61a58af9 = function (p0) {
	return _in("0x0FF2862B61A58AF9", p0);
};

window.N_0x1033371fc8e842a7 = function (p0) {
	return _in("0x1033371FC8E842A7", p0, _r);
};

window.N_0x10655fab9915623d = function (p0, p1) {
	return _in("0x10655FAB9915623D", p0, p1);
};

window.N_0x1072f115dab0717e = function (p0, p1) {
	return _in("0x1072F115DAB0717E", p0, p1);
};

window.N_0x1086127b3a63505e = function (p0, p1, p2) {
	return _in("0x1086127B3A63505E", p0, p1, p2);
};

window.N_0x1087bc8ec540daeb = function (p0, p1) {
	return _in("0x1087BC8EC540DAEB", p0, p1);
};

window.N_0x108be26959a9d9bb = function (p0) {
	return _in("0x108BE26959A9D9BB", p0);
};

window.N_0x1093408b4b9d1146 = function (p0, p1) {
	return _in("0x1093408B4B9D1146", p0, _fv(p1));
};

window.N_0x109697e2ffbac8a1 = function () {
	return _in("0x109697E2FFBAC8A1", _r);
};

window.N_0x10bd227a753b0d84 = function () {
	return _in("0x10BD227A753B0D84", _r, _ri);
};

window.N_0x110f526ab784111f = function (ped, p1) {
	return _in("0x110F526AB784111F", ped, _fv(p1));
};

window.N_0x1121bfa1a1a522a8 = function () {
	return _in("0x1121BFA1A1A522A8", _r, _ri);
};

window.N_0x112209ce0290c03a = function (p0, p1, p2, p3) {
	return _in("0x112209CE0290C03A", p0, p1, p2, p3);
};

window.N_0x113e6e3e50e286b0 = function (p0) {
	return _in("0x113E6E3E50E286B0", p0);
};

window.N_0x1153fa02a659051c = function () {
	return _in("0x1153FA02A659051C");
};

window.N_0x11579d940949c49e = function (p0) {
	return _in("0x11579D940949C49E", p0);
};

window.N_0x116fb94dc4b79f17 = function (p0) {
	return _in("0x116FB94DC4B79F17", _ts(p0));
};

window.N_0x1171a97a3d3981b6 = function (p2, p3) {
	return _in("0x1171A97A3D3981B6", _i, _i, p2, p3, _r);
};

window.N_0x1185a8087587322c = function (p0) {
	return _in("0x1185A8087587322C", p0);
};

window.N_0x11b56fbbf7224868 = function (p0) {
	return _in("0x11B56FBBF7224868", _ts(p0));
};

window.N_0x11d1e53a726891fe = function (p0) {
	return _in("0x11D1E53A726891FE", p0, _r);
};

window.N_0x11fa5d3479c7dd47 = function (p0) {
	return _in("0x11FA5D3479C7DD47", p0);
};

window.N_0x11ff1c80276097ed = function (p0, p1, p2) {
	return _in("0x11FF1C80276097ED", p0, p1, p2);
};

window.N_0x1201e8a3290a3b98 = function (p0, p1) {
	return _in("0x1201E8A3290A3B98", p0, p1);
};

window.N_0x120364de2845daf8 = function (p1) {
	return _in("0x120364DE2845DAF8", _i, p1, _r, _ri);
};

window.N_0x1216e0bfa72cc703 = function (p0, p1) {
	return _in("0x1216E0BFA72CC703", p0, p1);
};

window.N_0x121fb4dddc2d5291 = function (p0, p1, p2, p3) {
	return _in("0x121FB4DDDC2D5291", p0, p1, p2, _fv(p3));
};

window.N_0x12561fcbb62d5b9c = function (p0) {
	return _in("0x12561FCBB62D5B9C", p0);
};

window.N_0x125e6d638b8605d4 = function (p0) {
	return _in("0x125E6D638B8605D4", p0, _r, _rv);
};

window.N_0x1280804f7cfd2d6c = function (p0) {
	return _in("0x1280804F7CFD2D6C", p0);
};

window.N_0x129466ed55140f8d = function (ped, toggle) {
	return _in("0x129466ED55140F8D", ped, toggle);
};

window.N_0x12995f2e53ffa601 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x12995F2E53FFA601", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11);
};

window.N_0x12b6281b6c6706c0 = function (p0) {
	return _in("0x12B6281B6C6706C0", p0, _r, _ri);
};

window.N_0x12d148d26538d0f9 = function (p0, p1, p2, p3) {
	return _in("0x12D148D26538D0F9", p0, p1, p2, p3);
};

window.N_0x12ded8ca53d47ea5 = function (p0) {
	return _in("0x12DED8CA53D47EA5", _fv(p0));
};

window.N_0x1312ddd8385aee4e = function (p0, p1) {
	return _in("0x1312DDD8385AEE4E", p0, p1);
};

window.N_0x1327e2fe9746baee = function (p0) {
	return _in("0x1327E2FE9746BAEE", p0, _r);
};

window.N_0x13518ff1c6b28938 = function (p0) {
	return _in("0x13518FF1C6B28938", p0, _r);
};

window.N_0x1353f87e89946207 = function () {
	return _in("0x1353F87E89946207", _r);
};

window.N_0x135f9b7b7add2185 = function (p0) {
	return _in("0x135F9B7B7ADD2185", _ii(p0) /* may be optional */, _r);
};

window.N_0x1398582b7f72b3ed = function (p0) {
	return _in("0x1398582B7F72B3ED", p0);
};

window.N_0x13b350b8ad0eee10 = function () {
	return _in("0x13B350B8AD0EEE10");
};

window.N_0x13c4b962653a5280 = function () {
	return _in("0x13C4B962653A5280", _r, _ri);
};

window.N_0x13f1fcb111b820b0 = function (p0) {
	return _in("0x13F1FCB111B820B0", p0);
};

window.N_0x140e6a44870a11ce = function () {
	return _in("0x140E6A44870A11CE");
};

window.N_0x144da052257ae7d8 = function (p0) {
	return _in("0x144DA052257AE7D8", p0);
};

window.N_0x14590ddbedb1ec85 = function (ped) {
	return _in("0x14590DDBEDB1EC85", ped, _r);
};

window.N_0x1461b28a06717d68 = function (p0) {
	return _in("0x1461B28A06717D68", p0, _r, _ri);
};

window.N_0x14621bb1df14e2b2 = function () {
	return _in("0x14621BB1DF14E2B2");
};

window.N_0x14832bf2aba53fc5 = function () {
	return _in("0x14832BF2ABA53FC5", _r, _ri);
};

window.N_0x148b08c2d2acb884 = function (p0, p1, p2) {
	return _in("0x148B08C2D2ACB884", p0, p1, p2);
};

window.N_0x14922ed3e38761f0 = function () {
	return _in("0x14922ED3E38761F0", _r, _ri);
};

window.N_0x149aee66f0cb3a99 = function (p0, p1) {
	return _in("0x149AEE66F0CB3A99", _fv(p0), _fv(p1));
};

window.N_0x14c9fdcc41f81f63 = function (p0) {
	return _in("0x14C9FDCC41F81F63", p0);
};

window.N_0x14d29bb12d47f68c = function (p0, p1, p2, p3, p4) {
	return _in("0x14D29BB12D47F68C", p0, p1, p2, p3, p4);
};

window.N_0x14e0b2d1ad1044e0 = function () {
	return _in("0x14E0B2D1AD1044E0", _i, _i, _i, _i);
};

window.N_0x14eda9ee27bd1626 = function (p0) {
	return _in("0x14EDA9EE27BD1626", p0);
};

window.N_0x14fc5833464340a8 = function () {
	return _in("0x14FC5833464340A8");
};

window.N_0x152d90e4c1b4738a = function () {
	return _in("0x152D90E4C1B4738A", _i, _i, _r);
};

window.N_0x15803fec3b9a872b = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x15803FEC3B9A872B", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
};

window.N_0x158ec424f35ec469 = function (p1) {
	return _in("0x158EC424F35EC469", _i, p1, _i, _r);
};

window.N_0x159b7318403a1cd8 = function (p0) {
	return _in("0x159B7318403A1CD8", p0);
};

window.N_0x15cfa549788d35ef = function () {
	return _in("0x15CFA549788D35EF");
};

window.N_0x15e33297c3e8dc60 = function (p0) {
	return _in("0x15E33297C3E8DC60", p0);
};

window.N_0x15e69e2802c24b8d = function (p0) {
	return _in("0x15E69E2802C24B8D", _fv(p0));
};

window.N_0x15f944730c832252 = function (p0, p1) {
	return _in("0x15F944730C832252", p0, p1);
};

window.N_0x15ff52b809db2353 = function (p0) {
	return _in("0x15FF52B809DB2353", p0, _r);
};

window.N_0x1600fd8cf72ebc12 = function (p0) {
	return _in("0x1600FD8CF72EBC12", _fv(p0));
};

window.N_0x160aa1b32f6139b8 = function (doorHash) {
	return _in("0x160AA1B32F6139B8", _ch(doorHash), _r, _ri);
};

window.N_0x1612c45f9e3e0d44 = function () {
	return _in("0x1612C45F9E3E0D44");
};

window.N_0x162c23ca83ed0a62 = function (p0) {
	return _in("0x162C23CA83ED0A62", p0, _r);
};

window.N_0x162f9d995753dc19 = function () {
	return _in("0x162F9D995753DC19", _r, _rf);
};

window.N_0x1632be0ac1e62876 = function (p0, p1) {
	return _in("0x1632BE0AC1E62876", p0, p1);
};

window.N_0x1636d7fc127b10d2 = function (p0) {
	return _in("0x1636D7FC127B10D2", p0);
};

window.N_0x163f8b586bc95f2a = function (coords, radius, modelHash, x, y, z, p7) {
	return _in("0x163F8B586BC95F2A", coords, _fv(radius), _ch(modelHash), _fv(x), _fv(y), _fv(z), _v, p7, _r, _ri);
};

window.N_0x164c5ff663790845 = function (p0) {
	return _in("0x164C5FF663790845", p0);
};

window.N_0x1654f24a88a8e3fe = function (radioStation) {
	return _in("0x1654F24A88A8E3FE", _ts(radioStation));
};

window.N_0x1670f8d05056f257 = function (p0) {
	return _in("0x1670F8D05056F257", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x16a304e6cb2bfab9 = function (r, g, b, a) {
	return _in("0x16A304E6CB2BFAB9", r, g, b, a);
};

window.N_0x16b5e274bde402f8 = function (vehicle, trailer, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x16B5E274BDE402F8", vehicle, trailer, _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11));
};

window.N_0x16da8172459434aa = function () {
	return _in("0x16DA8172459434AA", _r, _ri);
};

window.N_0x16f46fb18c8009e4 = function (p0, p1, p2, p3, p4) {
	return _in("0x16F46FB18C8009E4", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0x170910093218c8b9 = function (p0) {
	return _in("0x170910093218C8B9", _ii(p0) /* may be optional */, _r);
};

window.N_0x170f541e1cadd1de = function (p0) {
	return _in("0x170F541E1CADD1DE", p0);
};

window.N_0x171bafb3c60389f4 = function (p0) {
	return _in("0x171BAFB3C60389F4", p0, _r, _ri);
};

window.N_0x171df6a0c07fb3dc = function (p0, p1) {
	return _in("0x171DF6A0C07FB3DC", p0, p1, _r, _ri);
};

window.N_0x172f75b6ee2233ba = function () {
	return _in("0x172F75B6EE2233BA", _r, _ri);
};

window.N_0x17330ebf2f2124a8 = function () {
	return _in("0x17330EBF2F2124A8");
};

window.N_0x17440aa15d1d3739 = function () {
	return _in("0x17440AA15D1D3739");
};

window.N_0x1761dc5d8471cbaa = function (p0, player, p2) {
	return _in("0x1761DC5D8471CBAA", p0, player, p2, _r);
};

window.N_0x17ad8c9706bdd88a = function (p0) {
	return _in("0x17AD8C9706BDD88A", p0);
};

window.N_0x17df68d720aa77f8 = function (p0) {
	return _in("0x17DF68D720AA77F8", p0, _r);
};

window.N_0x17e0198b3882c2cb = function () {
	return _in("0x17E0198B3882C2CB");
};

window.N_0x17f7471eaca78290 = function (p0) {
	return _in("0x17F7471EACA78290", p0);
};

window.N_0x17fca7199a530203 = function () {
	return _in("0x17FCA7199A530203", _r, _ri);
};

window.N_0x182f266c2d9e2beb = function (vehicle, p1) {
	return _in("0x182F266C2D9E2BEB", vehicle, _fv(p1));
};

window.N_0x1888694923ef4591 = function () {
	return _in("0x1888694923EF4591");
};

window.N_0x18eb48cfc41f2ea0 = function (p0, p1) {
	return _in("0x18EB48CFC41F2EA0", p0, _fv(p1));
};

window.N_0x190428512b240692 = function (p0, p1, p2, p3, p4) {
	return _in("0x190428512B240692", p0, p1, p2, p3, p4);
};

window.N_0x192547247864dfdd = function (vehicle, p1) {
	return _in("0x192547247864DFDD", vehicle, p1);
};

window.N_0x1950dae9848a4739 = function (p0, p1, p2) {
	return _in("0x1950DAE9848A4739", p0, p1, p2, _r, _ri);
};

window.N_0x19853b5b17d77bca = function (p0, p1) {
	return _in("0x19853B5B17D77BCA", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x1989c6e6f67e76a8 = function () {
	return _in("0x1989C6E6F67E76A8", _i, _i, _i, _r);
};

window.N_0x19af7ed9b9d23058 = function () {
	return _in("0x19AF7ED9B9D23058");
};

window.N_0x19bfed045c647c49 = function (p0) {
	return _in("0x19BFED045C647C49", p0, _r);
};

window.N_0x19cafa3c87f7c2ff = function () {
	return _in("0x19CAFA3C87F7C2FF", _r, _ri);
};

window.N_0x19d1b791cb3670fe = function (p0, p1) {
	return _in("0x19D1B791CB3670FE", p0, p1);
};

window.N_0x19e50eb6e33e1d28 = function (p0) {
	return _in("0x19E50EB6E33E1D28", p0);
};

window.N_0x1a092bb0c3808b96 = function (entity, p1) {
	return _in("0x1A092BB0C3808B96", entity, p1);
};

window.N_0x1a330d297aac6bc1 = function (ped, p1) {
	return _in("0x1A330D297AAC6BC1", ped, p1);
};

window.N_0x1a78ad3d8240536f = function (vehicle, p1) {
	return _in("0x1A78AD3D8240536F", vehicle, p1);
};

window.N_0x1a7ce7cd3e653485 = function (p0) {
	return _in("0x1A7CE7CD3E653485", p0);
};

window.N_0x1a8e2c8b9cf4549c = function () {
	return _in("0x1A8E2C8B9CF4549C", _i, _i);
};

window.N_0x1a8ea222f9c67dbb = function (p0) {
	return _in("0x1A8EA222F9C67DBB", p0, _r, _ri);
};

window.N_0x1aa8a837d2169d94 = function (vehicle, p1) {
	return _in("0x1AA8A837D2169D94", vehicle, p1);
};

window.N_0x1accfba3d8dab2ee = function (p0, p1) {
	return _in("0x1ACCFBA3D8DAB2EE", p0, p1, _r, _ri);
};

window.N_0x1ad5b71586b94820 = function (p0, p2) {
	return _in("0x1AD5B71586B94820", p0, _i, p2, _r);
};

window.N_0x1b0b4aeed5b9b41c = function (p0) {
	return _in("0x1B0B4AEED5B9B41C", _fv(p0));
};

window.N_0x1b212b26dd3c04df = function (p0, p1) {
	return _in("0x1B212B26DD3C04DF", p0, p1);
};

window.N_0x1b2366c3f2a5c8df = function () {
	return _in("0x1B2366C3F2A5C8DF", _r, _ri);
};

window.N_0x1b7abe26cbcbf8c7 = function (p0, p1, p2) {
	return _in("0x1B7ABE26CBCBF8C7", p0, p1, p2);
};

window.N_0x1b857666604b1a74 = function (p0) {
	return _in("0x1B857666604B1A74", p0);
};

window.N_0x1bb299305c3e8c13 = function (p0, p1, p2, p3) {
	return _in("0x1BB299305C3E8C13", p0, p1, p2, p3);
};

window.N_0x1bbac99c0bc53656 = function (p0, p1) {
	return _in("0x1BBAC99C0BC53656", p0, p1);
};

window.N_0x1bbc135a4d25edde = function (p0) {
	return _in("0x1BBC135A4D25EDDE", p0);
};

window.N_0x1c073274e065c6d2 = function (p0, p1) {
	return _in("0x1C073274E065C6D2", p0, p1);
};

window.N_0x1c186837d0619335 = function (p0) {
	return _in("0x1C186837D0619335", p0, _r, _ri);
};

window.N_0x1c1b69fae509ba97 = function (p0, p1) {
	return _in("0x1C1B69FAE509BA97", p0, p1);
};

window.N_0x1c2473301b1c66ba = function () {
	return _in("0x1C2473301B1C66BA", _r, _ri);
};

window.N_0x1c4fc5752bcd8e48 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
	return _in("0x1C4FC5752BCD8E48", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11), _fv(p12));
};

window.N_0x1cae5d2e3f9a07f0 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x1CAE5D2E3F9A07F0", p0, p1, p2, p3, p4, p5);
};

window.N_0x1cba05ae7bd7ee05 = function (p0) {
	return _in("0x1CBA05AE7BD7EE05", _fv(p0));
};

window.N_0x1cf38d529d7441d9 = function (vehicle, toggle) {
	return _in("0x1CF38D529D7441D9", vehicle, toggle);
};

window.N_0x1d4446a62d35b0d0 = function (p0, p1) {
	return _in("0x1D4446A62D35B0D0", p0, p1, _r, _ri);
};

window.N_0x1d4dc17c38feaff0 = function () {
	return _in("0x1D4DC17C38FEAFF0", _r, _ri);
};

window.N_0x1d610eb0fea716d9 = function (p0) {
	return _in("0x1D610EB0FEA716D9", p0, _r);
};

window.N_0x1d97d1e3a70a649f = function (vehicle, p1) {
	return _in("0x1D97D1E3A70A649F", vehicle, p1);
};

window.N_0x1da0da9cb3f0c8bf = function (p0) {
	return _in("0x1DA0DA9CB3F0C8BF", p0, _r, _ri);
};

window.N_0x1dd2139a9a20dce8 = function () {
	return _in("0x1DD2139A9A20DCE8", _r, _ri);
};

window.N_0x1dda078d12879eee = function (p0, p1, p2) {
	return _in("0x1DDA078D12879EEE", p0, p1, p2);
};

window.N_0x1de0f5f50d723caa = function () {
	return _in("0x1DE0F5F50D723CAA", _i, _i, _i, _r);
};

window.N_0x1e3f1b1b891a2aaa = function (p0, p1) {
	return _in("0x1E3F1B1B891A2AAA", p0, p1);
};

window.N_0x1e45b34adebee48e = function () {
	return _in("0x1E45B34ADEBEE48E");
};

window.N_0x1e77fa7a62ee6c4c = function (p0) {
	return _in("0x1E77FA7A62EE6C4C", p0, _r, _ri);
};

window.N_0x1e9057a74fd73e23 = function () {
	return _in("0x1E9057A74FD73E23");
};

window.N_0x1eac5f91bcbc5073 = function (p0) {
	return _in("0x1EAC5F91BCBC5073", p0);
};

window.N_0x1eae0a6e978894a2 = function (p0, p1) {
	return _in("0x1EAE0A6E978894A2", p0, p1);
};

window.N_0x1eae6dd17b7a5efa = function (p0) {
	return _in("0x1EAE6DD17B7A5EFA", p0);
};

window.N_0x1ee7d8df4425f053 = function (p0) {
	return _in("0x1EE7D8DF4425F053", p0);
};

window.N_0x1f1e9682483697c7 = function (p0, p1) {
	return _in("0x1F1E9682483697C7", p0, p1, _r);
};

window.N_0x1f2300cb7fa7b7f6 = function () {
	return _in("0x1F2300CB7FA7B7F6", _r, _ri);
};

window.N_0x1f2e4e06dea8992b = function (p0, p1) {
	return _in("0x1F2E4E06DEA8992B", p0, p1);
};

window.N_0x1f34b0626c594380 = function (p0, p1) {
	return _in("0x1F34B0626C594380", p0, p1);
};

window.N_0x1f351cf1c6475734 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x1F351CF1C6475734", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
};

window.N_0x1f3f018bc3afa77c = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x1F3F018BC3AFA77C", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, _r, _ri);
};

window.N_0x1f8e00fb18239600 = function (p0) {
	return _in("0x1F8E00FB18239600", p0);
};

window.N_0x1f9fb66f3a3842d2 = function (vehicle, p1) {
	return _in("0x1F9FB66F3A3842D2", vehicle, p1);
};

window.N_0x1fc289a0c3ff470f = function (p0) {
	return _in("0x1FC289A0C3FF470F", p0, _r, _ri);
};

window.N_0x1ff6bf9a63e5757f = function () {
	return _in("0x1FF6BF9A63E5757F");
};

window.N_0x2016c603d6b8987c = function (p0, p1) {
	return _in("0x2016C603D6B8987C", p0, p1);
};

window.N_0x203b381133817079 = function (p0) {
	return _in("0x203B381133817079", p0);
};

window.N_0x206bc5dc9d1ac70a = function (vehicle, p1) {
	return _in("0x206BC5DC9D1AC70A", vehicle, p1);
};

window.N_0x20746f7b1032a3c7 = function (p0, p1, p2, p3) {
	return _in("0x20746F7B1032A3C7", p0, p1, p2, p3);
};

window.N_0x208784099002bc30 = function (missionNameLabel, p1) {
	return _in("0x208784099002BC30", _ts(missionNameLabel), p1);
};

window.N_0x20c6c7e4eb082a7f = function (p0) {
	return _in("0x20C6C7E4EB082A7F", p0);
};

window.N_0x20fe7fdfeead38c0 = function () {
	return _in("0x20FE7FDFEEAD38C0");
};

window.N_0x2107a3773771186d = function () {
	return _in("0x2107A3773771186D", _r, _ri);
};

window.N_0x21115bcd6e44656a = function (p0, p1) {
	return _in("0x21115BCD6E44656A", p0, p1);
};

window.N_0x211c4ef450086857 = function () {
	return _in("0x211C4EF450086857");
};

window.N_0x213aeb2b90cba7ac = function (p0, p1, p2) {
	return _in("0x213AEB2B90CBA7AC", p0, p1, p2);
};

window.N_0x214cd562a939246a = function () {
	return _in("0x214CD562A939246A", _r);
};

window.N_0x21973bbf8d17edfa = function (p0, p1) {
	return _in("0x21973BBF8D17EDFA", p0, p1);
};

window.N_0x21c235bc64831e5a = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x21C235BC64831E5A", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), p9, _r, _rv);
};

window.N_0x21d04d7bc538c146 = function (p0) {
	return _in("0x21D04D7BC538C146", p0, _r);
};

window.N_0x21e253a7f8da5dfb = function (vehicleName) {
	return _in("0x21E253A7F8DA5DFB", _ts(vehicleName));
};

window.N_0x2201c576facaebe8 = function (p0, p1, p2) {
	return _in("0x2201C576FACAEBE8", p0, _ts(p1), p2);
};

window.N_0x2208438012482a1a = function (ped, p1, p2) {
	return _in("0x2208438012482A1A", ped, p1, p2);
};

window.N_0x225798743970412b = function (p0) {
	return _in("0x225798743970412B", _ii(p0) /* may be optional */, _r);
};

window.N_0x228e5c6ad4d74bfd = function (p0) {
	return _in("0x228E5C6AD4D74BFD", p0);
};

window.N_0x22a249a53034450a = function (p0) {
	return _in("0x22A249A53034450A", p0);
};

window.N_0x22da66936e0fff37 = function (p0) {
	return _in("0x22DA66936E0FFF37", p0, _r);
};

window.N_0x2302c0264ea58d31 = function () {
	return _in("0x2302C0264EA58D31");
};

window.N_0x2311dd7159f00582 = function (vehicle, p1) {
	return _in("0x2311DD7159F00582", vehicle, p1);
};

window.N_0x23227df0b2115469 = function () {
	return _in("0x23227DF0B2115469");
};

window.N_0x23789e777d14ce44 = function () {
	return _in("0x23789E777D14CE44", _r, _ri);
};

window.N_0x237d5336a9a54108 = function (p0) {
	return _in("0x237D5336A9A54108", p0, _r);
};

window.N_0x2382ab11450ae7ba = function (p0, p1) {
	return _in("0x2382AB11450AE7BA", p0, p1);
};

window.N_0x23b59d8912f94246 = function () {
	return _in("0x23B59D8912F94246");
};

window.N_0x23ba6b0c2ad7b0d3 = function (p0) {
	return _in("0x23BA6B0C2AD7B0D3", p0);
};

window.N_0x23f09eadc01449d6 = function (p0) {
	return _in("0x23F09EADC01449D6", p0, _r);
};

window.N_0x241fca5b1aa14f75 = function () {
	return _in("0x241FCA5B1AA14F75", _r, _ri);
};

window.N_0x2432784aca090da4 = function (p0) {
	return _in("0x2432784ACA090DA4", p0, _r);
};

window.N_0x24409fc4c55cb22d = function (p0) {
	return _in("0x24409FC4C55CB22D", p0, _r, _ri);
};

window.N_0x2467a2d807d37ca3 = function (p0) {
	return _in("0x2467A2D807D37CA3", p0, _r, _ri);
};

window.N_0x2472622ce1f2d45f = function (p0, p1, p2) {
	return _in("0x2472622CE1F2D45F", p0, p1, p2);
};

window.N_0x247acbc4abbc9d1c = function (p0) {
	return _in("0x247ACBC4ABBC9D1C", p0);
};

window.N_0x2485d34e50a22e84 = function (p0, p1, p2) {
	return _in("0x2485D34E50A22E84", _fv(p0), _fv(p1), _fv(p2));
};

window.N_0x24a49beaf468dc90 = function (p0, p2, p3, p4) {
	return _in("0x24A49BEAF468DC90", p0, _i, p2, p3, p4, _r);
};

window.N_0x24e4e51fc16305f9 = function () {
	return _in("0x24E4E51FC16305F9", _r, _ri);
};

window.N_0x25361a96e0f7e419 = function (p0, p1, p2, p3) {
	return _in("0x25361A96E0F7E419", p0, p1, p2, p3, _r, _ri);
};

window.N_0x25367de49d64cf16 = function (vehicle, p1) {
	return _in("0x25367DE49D64CF16", vehicle, p1);
};

window.N_0x25615540d894b814 = function (p0, p1) {
	return _in("0x25615540D894B814", p0, p1);
};

window.N_0x2587a48bc88dfadf = function (p0) {
	return _in("0x2587A48BC88DFADF", p0);
};

window.N_0x259ba6d4e6f808f1 = function (p0) {
	return _in("0x259BA6D4E6F808F1", p0);
};

window.N_0x25b99872d588a101 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x25B99872D588A101", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _r, _ri);
};

window.N_0x25d990f8e0e3f13c = function () {
	return _in("0x25D990F8E0E3F13C");
};

window.N_0x25f87b30c382fca7 = function () {
	return _in("0x25F87B30C382FCA7");
};

window.N_0x25fc3e33a31ad0c9 = function (p0) {
	return _in("0x25FC3E33A31AD0C9", p0);
};

window.N_0x2605663bd4f23b5d = function (p0) {
	return _in("0x2605663BD4F23B5D", p0);
};

window.N_0x260ee4fdbdf4db01 = function (p0) {
	return _in("0x260EE4FDBDF4DB01", p0, _r, _rf);
};

window.N_0x261e97ad7bcf3d40 = function (p0) {
	return _in("0x261E97AD7BCF3D40", p0);
};

window.N_0x2632482fd6b9ab87 = function () {
	return _in("0x2632482FD6B9AB87");
};

window.N_0x265559da40b3f327 = function (p0) {
	return _in("0x265559DA40B3F327", p0);
};

window.N_0x265635150fb0d82e = function () {
	return _in("0x265635150FB0D82E");
};

window.N_0x267c78c60e806b9a = function (p0, p1) {
	return _in("0x267C78C60E806B9A", p0, p1);
};

window.N_0x26903d9cd1175f2c = function (p0, p1) {
	return _in("0x26903D9CD1175F2C", p0, p1, _r, _ri);
};

window.N_0x26af0e8e30bd2a2c = function (ped) {
	return _in("0x26AF0E8E30BD2A2C", ped, _r);
};

window.N_0x26d7399b9587fe89 = function (p0) {
	return _in("0x26D7399B9587FE89", p0);
};

window.N_0x26d99d5a82fd18e8 = function (p0) {
	return _in("0x26D99D5A82FD18E8", p0);
};

window.N_0x26f07dd83a5f7f98 = function () {
	return _in("0x26F07DD83A5F7F98", _r, _ri);
};

window.N_0x2708fc083123f9ff = function () {
	return _in("0x2708FC083123F9FF");
};

window.N_0x271017b9ba825366 = function (p0, p1) {
	return _in("0x271017B9BA825366", p0, p1);
};

window.N_0x271401846bd26e92 = function (p0, p1) {
	return _in("0x271401846BD26E92", p0, p1);
};

window.N_0x271c9d3aca5d6409 = function (rope) {
	return _in("0x271C9D3ACA5D6409", rope, _r);
};

window.N_0x2735233a786b1bef = function (ped, p1) {
	return _in("0x2735233A786B1BEF", ped, _fv(p1));
};

window.N_0x274a1519dfc1094f = function (p1) {
	return _in("0x274A1519DFC1094F", _i, p1, _i, _r);
};

window.N_0x2790f4b17d098e26 = function (p0) {
	return _in("0x2790F4B17D098E26", p0);
};

window.N_0x279d50de5652d935 = function (p0, p1) {
	return _in("0x279D50DE5652D935", p0, p1);
};

window.N_0x27aa1c973cacfe63 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x27AA1C973CACFE63", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
};

window.N_0x27b926779deb502d = function (vehicle, p1) {
	return _in("0x27B926779DEB502D", vehicle, p1, _r);
};

window.N_0x27cb772218215325 = function () {
	return _in("0x27CB772218215325");
};

window.N_0x27cfb1b1e078cb2d = function () {
	return _in("0x27CFB1B1E078CB2D");
};

window.N_0x27e32866e9a5c416 = function (p0) {
	return _in("0x27E32866E9A5C416", _fv(p0));
};

window.N_0x27feb5254759cde3 = function (textureDict, p1) {
	return _in("0x27FEB5254759CDE3", _ts(textureDict), p1, _r);
};

window.N_0x2801d0012266df07 = function (p0) {
	return _in("0x2801D0012266DF07", p0);
};

window.N_0x280c7e3ac7f56e90 = function (p0) {
	return _in("0x280C7E3AC7F56E90", p0, _i, _i, _i);
};

window.N_0x282b6739644f4347 = function (p0) {
	return _in("0x282B6739644F4347", p0);
};

window.N_0x283b6062a2c01e9b = function () {
	return _in("0x283B6062A2C01E9B");
};

window.N_0x287f1f75d2803595 = function (p0, p1) {
	return _in("0x287F1F75D2803595", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x288df530c92dad6f = function (p0, p1) {
	return _in("0x288DF530C92DAD6F", p0, _fv(p1));
};

window.N_0x28b18377eb6e25f6 = function (p0, p1) {
	return _in("0x28B18377EB6E25F6", p0, p1);
};

window.N_0x28ecb8ac2f607db2 = function (p0, p1, p2, p3, p4) {
	return _in("0x28ECB8AC2F607DB2", p0, p1, p2, p3, p4);
};

window.N_0x2916a928514c9827 = function () {
	return _in("0x2916A928514C9827");
};

window.N_0x29280002282f1928 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23) {
	return _in("0x29280002282F1928", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23);
};

window.N_0x293220da1b46cebc = function (p0, p1, p2) {
	return _in("0x293220DA1B46CEBC", _fv(p0), _fv(p1), p2);
};

window.N_0x299ef3c576773506 = function () {
	return _in("0x299EF3C576773506", _r, _ri);
};

window.N_0x29c24bfbed8ab8fb = function (p0, p1) {
	return _in("0x29C24BFBED8AB8FB", _fv(p0), _fv(p1), _r, _rf);
};

window.N_0x2a2173e46daecd12 = function (p0, p1) {
	return _in("0x2A2173E46DAECD12", p0, p1);
};

window.N_0x2a25adc48f87841f = function () {
	return _in("0x2A25ADC48F87841F", _r, _ri);
};

window.N_0x2a2a52824db96700 = function (p0) {
	return _in("0x2A2A52824DB96700", _ii(p0) /* may be optional */);
};

window.N_0x2a56c06ebef2b0d9 = function (cutsceneEntName, ped, modelHash) {
	return _in("0x2A56C06EBEF2B0D9", _ts(cutsceneEntName), ped, _ch(modelHash));
};

window.N_0x2a5e0621dd815a9a = function (p0, p1, p2, p3) {
	return _in("0x2A5E0621DD815A9A", p0, p1, p2, p3);
};

window.N_0x2a7776c709904ab0 = function (p0) {
	return _in("0x2A7776C709904AB0", p0, _r, _ri);
};

window.N_0x2a86a0475b6a1434 = function (p0, p1) {
	return _in("0x2A86A0475B6A1434", p0, p1);
};

window.N_0x2a893980e96b659a = function (p0) {
	return _in("0x2A893980E96B659A", p0, _r, _ri);
};

window.N_0x2a8f319b392e7b3f = function (vehicle, p1) {
	return _in("0x2A8F319B392E7B3F", vehicle, _fv(p1));
};

window.N_0x2aed6301f67007d5 = function (entity) {
	return _in("0x2AED6301F67007D5", entity);
};

window.N_0x2afc2d19b50797f2 = function (p0, p1, p2, p3) {
	return _in("0x2AFC2D19B50797F2", p0, p1, p2, p3);
};

window.N_0x2b1c623823db0d9d = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x2B1C623823DB0D9D", p0, p1, p2, p3, p4, p5, p6, _r, _ri);
};

window.N_0x2b3334bca57cd799 = function (p0) {
	return _in("0x2B3334BCA57CD799", p0);
};

window.N_0x2b40a97646381508 = function (p0) {
	return _in("0x2B40A97646381508", p0);
};

window.N_0x2b51edbefc301339 = function (p0, p1) {
	return _in("0x2B51EDBEFC301339", p0, _ts(p1), _r);
};

window.N_0x2b5aa717a181fb4c = function (p0, p1) {
	return _in("0x2B5AA717A181FB4C", p0, p1);
};

window.N_0x2b5e102e4a42f2bf = function () {
	return _in("0x2B5E102E4A42F2BF", _r, _ri);
};

window.N_0x2b626a0150e4d449 = function () {
	return _in("0x2B626A0150E4D449", _r, _ri);
};

window.N_0x2b6747faa9db9d6b = function (vehicle, p1) {
	return _in("0x2B6747FAA9DB9D6B", vehicle, p1, _r, _ri);
};

window.N_0x2b694afcf64e6994 = function (ped, p1) {
	return _in("0x2B694AFCF64E6994", ped, p1);
};

window.N_0x2b69f5074c894811 = function (p0, p1, p2, p3) {
	return _in("0x2B69F5074C894811", p0, p1, p2, p3);
};

window.N_0x2b949a1e6aec8f6a = function () {
	return _in("0x2B949A1E6AEC8F6A", _r, _ri);
};

window.N_0x2bc54a8188768488 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x2BC54A8188768488", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
};

window.N_0x2be4bc731d039d5a = function (p0, p1) {
	return _in("0x2BE4BC731D039D5A", p0, p1);
};

window.N_0x2bf66d2e7414f686 = function () {
	return _in("0x2BF66D2E7414F686", _r, _ri);
};

window.N_0x2bf72ad5b41aa739 = function () {
	return _in("0x2BF72AD5B41AA739");
};

window.N_0x2c173ae2bdb9385e = function (p0) {
	return _in("0x2C173AE2BDB9385E", p0, _r, _ri);
};

window.N_0x2c1d8b3b19e517cc = function (p0, p1) {
	return _in("0x2C1D8B3B19E517CC", p0, p1, _r, _ri);
};

window.N_0x2c2e3dc128f44309 = function (entity, p1) {
	return _in("0x2C2E3DC128F44309", entity, p1);
};

window.N_0x2c328af17210f009 = function (p0) {
	return _in("0x2C328AF17210F009", _fv(p0));
};

window.N_0x2c42340f916c5930 = function (p0) {
	return _in("0x2C42340F916C5930", p0, _r, _ri);
};

window.N_0x2c4a1590abf43e8b = function (p0, p1) {
	return _in("0x2C4A1590ABF43E8B", p0, p1);
};

window.N_0x2c8cbfe1ea5fc631 = function (p0) {
	return _in("0x2C8CBFE1EA5FC631", p0, _r, _ri);
};

window.N_0x2c96cdb04fca358e = function (p0) {
	return _in("0x2C96CDB04FCA358E", _fv(p0));
};

window.N_0x2c9f302398e13141 = function (p0, p1) {
	return _in("0x2C9F302398E13141", p0, p1);
};

window.N_0x2cc848a861d01493 = function () {
	return _in("0x2CC848A861D01493", _r, _ri);
};

window.N_0x2cd90358f67d0aa8 = function (p0) {
	return _in("0x2CD90358F67D0AA8", p0);
};

window.N_0x2ce544c68fb812a0 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x2CE544C68FB812A0", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), p5, _r, _ri);
};

window.N_0x2ce9d95e4051aecd = function (p0) {
	return _in("0x2CE9D95E4051AECD", p0);
};

window.N_0x2d4259f1feb81da9 = function (p0, p1, p2, p3) {
	return _in("0x2D4259F1FEB81DA9", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r, _ri);
};

window.N_0x2d5dc831176d0114 = function (p0) {
	return _in("0x2D5DC831176D0114", p0, _r);
};

window.N_0x2da41ed6e1fcd7a5 = function (p0, p1) {
	return _in("0x2DA41ED6E1FCD7A5", p0, p1, _r, _ri);
};

window.N_0x2de6c5e2e996f178 = function (p0) {
	return _in("0x2DE6C5E2E996F178", p0);
};

window.N_0x2de7efa66b906036 = function (funcData) {
	return _in("0x2DE7EFA66B906036", funcData, _r, _ri);
};

window.N_0x2df9038c90ad5264 = function (p0, p1, p2, p3, p4, interiorFlags, scale, duration) {
	return _in("0x2DF9038C90AD5264", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), interiorFlags, _fv(scale), duration);
};

window.N_0x2dfc81c9b9608549 = function (p0, p1) {
	return _in("0x2DFC81C9B9608549", p0, p1, _r, _ri);
};

window.N_0x2e0bf682cc778d49 = function (p0) {
	return _in("0x2E0BF682CC778D49", p0, _r);
};

window.N_0x2e22fefa0100275e = function () {
	return _in("0x2E22FEFA0100275E", _r, _ri);
};

window.N_0x2e4c123d1c8a710e = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x2E4C123D1C8A710E", p0, p1, p2, p3, p4, p5, p6, _r, _ri);
};

window.N_0x2e65248609523599 = function (p0, p1, p2) {
	return _in("0x2E65248609523599", p0, p1, p2);
};

window.N_0x2e89990ddff670c3 = function (p0, p1) {
	return _in("0x2E89990DDFF670C3", p0, p1, _r, _ri);
};

window.N_0x2eac52b4019e2782 = function () {
	return _in("0x2EAC52B4019E2782", _r, _ri);
};

window.N_0x2ed61456317b8178 = function () {
	return _in("0x2ED61456317B8178");
};

window.N_0x2f057596f2bd0061 = function () {
	return _in("0x2F057596F2BD0061", _r, _ri);
};

window.N_0x2f074c904d85129e = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x2F074C904D85129E", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x2f09f7976c512404 = function (xCoord, yCoord, zCoord, p3) {
	return _in("0x2F09F7976C512404", _fv(xCoord), _fv(yCoord), _fv(zCoord), _fv(p3), _r);
};

window.N_0x2f137b508de238f2 = function (p0) {
	return _in("0x2F137B508DE238F2", p0);
};

window.N_0x2f3c3d9f50681de4 = function (p0, p1) {
	return _in("0x2F3C3D9F50681DE4", p0, p1);
};

window.N_0x2f41a3bae005e5fa = function (p0, p1) {
	return _in("0x2F41A3BAE005E5FA", p0, p1);
};

window.N_0x2f7ceb6520288061 = function (p0) {
	return _in("0x2F7CEB6520288061", p0);
};

window.N_0x2f7f2b26dd3f18ee = function (p0, p1) {
	return _in("0x2F7F2B26DD3F18EE", _fv(p0), _fv(p1));
};

window.N_0x2fa2494b47fdd009 = function (p0, p1) {
	return _in("0x2FA2494B47FDD009", p0, p1);
};

window.N_0x2fab6614ce22e196 = function (p0, p1, p2, p3) {
	return _in("0x2FAB6614CE22E196", p0, p1, p2, p3);
};

window.N_0x2fc5650b0271cb57 = function () {
	return _in("0x2FC5650B0271CB57", _r, _ri);
};

window.N_0x3001bef2feca3680 = function () {
	return _in("0x3001BEF2FECA3680", _r);
};

window.N_0x302c91ab2d477f7e = function () {
	return _in("0x302C91AB2D477F7E");
};

window.N_0x3044240d2e0fa842 = function () {
	return _in("0x3044240D2E0FA842", _r);
};

window.N_0x3054f114121c21ea = function (p0) {
	return _in("0x3054F114121C21EA", p0, _r);
};

window.N_0x308f96458b7087cc = function (p1, p2, p3, p5) {
	return _in("0x308F96458B7087CC", _i, p1, p2, p3, _i, p5, _r, _ri);
};

window.N_0x30a6614c1f7799b8 = function (p0, p1, p2) {
	return _in("0x30A6614C1F7799B8", p0, _fv(p1), p2);
};

window.N_0x30d779de7c4f6dd3 = function (p0, p1) {
	return _in("0x30D779DE7C4F6DD3", p0, _fv(p1));
};

window.N_0x30ed88d5e0c56a37 = function (p0) {
	return _in("0x30ED88D5E0C56A37", p0, _r);
};

window.N_0x30fd873ece50e9f6 = function (p0, p1, p2, p3, p4) {
	return _in("0x30FD873ECE50E9F6", p0, p1, p2, p3, p4);
};

window.N_0x31125fd509d9043f = function (p0) {
	return _in("0x31125FD509D9043F", p0);
};

window.N_0x311438a071dd9b1a = function (p0, p1, p2) {
	return _in("0x311438A071DD9B1A", p0, p1, p2);
};

window.N_0x3117d84efa60f77b = function (p0) {
	return _in("0x3117D84EFA60F77B", _fv(p0));
};

window.N_0x312342e1a4874f3f = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x312342E1A4874F3F", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), p8);
};

window.N_0x3133b907d8b32053 = function (p0, p1) {
	return _in("0x3133B907D8B32053", p0, p1, _r, _rf);
};

window.N_0x31727907b2c43c55 = function (p0) {
	return _in("0x31727907B2C43C55", _fv(p0));
};

window.N_0x317eba71d7543f52 = function () {
	return _in("0x317EBA71D7543F52", _i, _i, _i, _i);
};

window.N_0x318516e02de3ece2 = function (p0) {
	return _in("0x318516E02DE3ECE2", _fv(p0));
};

window.N_0x3195f8dd0d531052 = function (p0, p1) {
	return _in("0x3195F8DD0D531052", p0, p1, _i, _i, _r);
};

window.N_0x31e90b8873a4cd3b = function (p0, p1) {
	return _in("0x31E90B8873A4CD3B", p0, p1);
};

window.N_0x31f924b53eaddf65 = function (p0) {
	return _in("0x31F924B53EADDF65", p0);
};

window.N_0x3270f67eed31fbc1 = function (p0) {
	return _in("0x3270F67EED31FBC1", p0, _i, _i, _r);
};

window.N_0x32888337579a5970 = function () {
	return _in("0x32888337579A5970");
};

window.N_0x32c7a7e8c43a1f80 = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x32C7A7E8C43A1F80", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, p7, _r, _ri);
};

window.N_0x32cac93c9de73d32 = function () {
	return _in("0x32CAC93C9DE73D32", _r, _ri);
};

window.N_0x32caedf24a583345 = function (p0) {
	return _in("0x32CAEDF24A583345", p0);
};

window.N_0x32dd916f3f7c9672 = function (p0) {
	return _in("0x32DD916F3F7C9672", p0, _r, _ri);
};

window.N_0x32ebd154cb6b8b99 = function (p0, p1, p2) {
	return _in("0x32EBD154CB6B8B99", p0, p1, p2);
};

window.N_0x32f34ff7f617643b = function (p0, p1) {
	return _in("0x32F34FF7F617643B", p0, p1);
};

window.N_0x33506883545ac0df = function (vehicle, p1) {
	return _in("0x33506883545AC0DF", vehicle, p1);
};

window.N_0x336511a34f2e5185 = function (left, right) {
	return _in("0x336511A34F2E5185", _fv(left), _fv(right), _r, _rf);
};

window.N_0x336b3d200ab007cb = function (p0, p1, p2, p3, p4) {
	return _in("0x336B3D200AB007CB", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _r, _ri);
};

window.N_0x33981d6804e62f49 = function (p0, p1, p2, p3) {
	return _in("0x33981D6804E62F49", p0, p1, p2, p3);
};

window.N_0x33a60d8bdd6e508c = function (ped, p1) {
	return _in("0x33A60D8BDD6E508C", ped, p1);
};

window.N_0x33d47e85b476abcd = function (p0) {
	return _in("0x33D47E85B476ABCD", p0, _r);
};

window.N_0x33d72899e24c3365 = function (p0, p1) {
	return _in("0x33D72899E24C3365", p0, p1, _r, _ri);
};

window.N_0x33de49edf4dde77a = function (p0) {
	return _in("0x33DE49EDF4DDE77A", p0, _r, _rv);
};

window.N_0x33e3c6c6f2f0b506 = function (p0, p1, p2, p3) {
	return _in("0x33E3C6C6F2F0B506", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0x33ee12743ccd6343 = function (p0, p1, p2) {
	return _in("0x33EE12743CCD6343", p0, p1, p2, _r, _ri);
};

window.N_0x341de7ed1d2a1bfd = function (componentHash, drawableSlotHash, p2) {
	return _in("0x341DE7ED1D2A1BFD", _ch(componentHash), _ch(drawableSlotHash), p2, _r);
};

window.N_0x34318593248c8fb2 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x34318593248C8FB2", _fv(p0), _fv(p1), _fv(p2), p3, _fv(p4), p5, _r);
};

window.N_0x3441cad2f2231923 = function (vehicle, p1) {
	return _in("0x3441CAD2F2231923", vehicle, p1);
};

window.N_0x346ef3ecaaab149e = function () {
	return _in("0x346EF3ECAAAB149E");
};

window.N_0x34770b9ce0e03b91 = function (p0, p1) {
	return _in("0x34770B9CE0E03B91", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x350aa5ebc03d3bd2 = function () {
	return _in("0x350AA5EBC03D3BD2", _r, _ri);
};

window.N_0x352e2b5cf420bf3b = function (p0, p1) {
	return _in("0x352E2B5CF420BF3B", p0, p1);
};

window.N_0x357b152ef96c30b6 = function () {
	return _in("0x357B152EF96C30B6", _r, _ri);
};

window.N_0x3599d741c9ac6310 = function (p0, p1, p2, p3) {
	return _in("0x3599D741C9AC6310", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r, _rf);
};

window.N_0x359af31a4b52f5ed = function () {
	return _in("0x359AF31A4B52F5ED", _r, _ri);
};

window.N_0x35a1b3e1d1315cfa = function (p0, p1) {
	return _in("0x35A1B3E1D1315CFA", p0, p1, _r);
};

window.N_0x35bb21de06784373 = function (p0, p1) {
	return _in("0x35BB21DE06784373", p0, p1);
};

window.N_0x35e0654f4bad7971 = function (p0) {
	return _in("0x35E0654F4BAD7971", p0);
};

window.N_0x35edd5b2e3ff01c0 = function () {
	return _in("0x35EDD5B2E3FF01C0");
};

window.N_0x35f0b98a8387274d = function () {
	return _in("0x35F0B98A8387274D", _r, _ri);
};

window.N_0x35fb78dc42b7bd21 = function () {
	return _in("0x35FB78DC42B7BD21", _r, _ri);
};

window.N_0x36391f397731595d = function (p0) {
	return _in("0x36391F397731595D", p0, _r, _ri);
};

window.N_0x36492c2f0d134c56 = function (p0) {
	return _in("0x36492C2F0D134C56", p0, _r, _ri);
};

window.N_0x365e877c61d6988b = function (p0, p1, p2, p3) {
	return _in("0x365E877C61D6988B", p0, p1, p2, p3);
};

window.N_0x3669f1b198dcaa4f = function () {
	return _in("0x3669F1B198DCAA4F");
};

window.N_0x367ef5e2f439b4c6 = function (p0) {
	return _in("0x367EF5E2F439B4C6", p0);
};

window.N_0x36b77bb84687c318 = function (ped, p1) {
	return _in("0x36B77BB84687C318", ped, p1, _r, _ri);
};

window.N_0x36c1451a88a09630 = function () {
	return _in("0x36C1451A88A09630", _i, _i);
};

window.N_0x36c6984c3ed0c911 = function (p0) {
	return _in("0x36C6984C3ED0C911", p0);
};

window.N_0x36ccb9be67b970fd = function (p0, p1) {
	return _in("0x36CCB9BE67B970FD", p0, p1);
};

window.N_0x36f1b38855f2a8df = function (player) {
	return _in("0x36F1B38855F2A8DF", player);
};

window.N_0x36f32de87082343e = function (p0, p1) {
	return _in("0x36F32DE87082343E", p0, p1);
};

window.N_0x36f6626459d91457 = function (p0) {
	return _in("0x36F6626459D91457", _fv(p0));
};

window.N_0x372ef6699146a1e4 = function (p0, entity, p2, p3) {
	return _in("0x372EF6699146A1E4", p0, entity, _fv(p2), p3, _r);
};

window.N_0x374706271354cb18 = function (vehicle, p1, p2) {
	return _in("0x374706271354CB18", vehicle, p1, _fv(p2));
};

window.N_0x375a706a5c2fd084 = function (p0) {
	return _in("0x375A706A5C2FD084", p0);
};

window.N_0x3795688a307e1eb6 = function (p0) {
	return _in("0x3795688A307E1EB6", p0, _r, _ri);
};

window.N_0x37a4494483b9f5c9 = function () {
	return _in("0x37A4494483B9F5C9", _r, _ri);
};

window.N_0x37d5f739fd494675 = function (p0) {
	return _in("0x37D5F739FD494675", p0, _r, _ri);
};

window.N_0x37deb0aa183fb6d8 = function () {
	return _in("0x37DEB0AA183FB6D8");
};

window.N_0x37ebbf3117bd6a25 = function (vehicle, p1) {
	return _in("0x37EBBF3117BD6A25", vehicle, _fv(p1));
};

window.N_0x38491439b6ba7f7d = function (p0, p1) {
	return _in("0x38491439B6BA7F7D", p0, p1, _r, _rf);
};

window.N_0x3855fb5eb2c5e8b2 = function (p0) {
	return _in("0x3855FB5EB2C5E8B2", p0, _r, _ri);
};

window.N_0x38baaa5dd4c9d19f = function (value) {
	return _in("0x38BAAA5DD4C9D19F", value);
};

window.N_0x38d28da81e4e9bf9 = function (player) {
	return _in("0x38D28DA81E4E9BF9", player, _r);
};

window.N_0x393bd2275ceb7793 = function () {
	return _in("0x393BD2275CEB7793", _r, _ri);
};

window.N_0x394cd08e31313c28 = function () {
	return _in("0x394CD08E31313C28");
};

window.N_0x397baa01068baa96 = function () {
	return _in("0x397BAA01068BAA96", _r, _ri);
};

window.N_0x39917e1b4cb0f911 = function (p0) {
	return _in("0x39917E1B4CB0F911", p0);
};

window.N_0x39a5fb7eaf150840 = function (p0, p1) {
	return _in("0x39A5FB7EAF150840", p0, p1);
};

window.N_0x39d55a620fcb6a3a = function (ped, p1, drawableId, textureId) {
	return _in("0x39D55A620FCB6A3A", ped, p1, drawableId, textureId, _r, _ri);
};

window.N_0x3a17a27d75c74887 = function () {
	return _in("0x3A17A27D75C74887", _r, _ri);
};

window.N_0x3a3d5568af297cd5 = function (p0) {
	return _in("0x3A3D5568AF297CD5", p0, _r);
};

window.N_0x3a48ab4445d499be = function () {
	return _in("0x3A48AB4445D499BE", _r, _ri);
};

window.N_0x3a8b55fda4c8ddef = function (p0, p1, p2) {
	return _in("0x3A8B55FDA4C8DDEF", p0, p1, p2, _r, _ri);
};

window.N_0x3b2fd68db5f8331c = function (p0, p1) {
	return _in("0x3B2FD68DB5F8331C", p0, p1);
};

window.N_0x3b39236746714134 = function (p0) {
	return _in("0x3B39236746714134", p0, _r, _ri);
};

window.N_0x3b458ddb57038f08 = function (p0, p1, p2) {
	return _in("0x3B458DDB57038F08", p0, p1, p2);
};

window.N_0x3bab9a4e4f2ff5c7 = function () {
	return _in("0x3BAB9A4E4F2FF5C7", _r, _ri);
};

window.N_0x3bbbd13e5041a79e = function () {
	return _in("0x3BBBD13E5041A79E", _r, _ri);
};

window.N_0x3c4487461e9b0dcb = function () {
	return _in("0x3C4487461E9B0DCB", _r, _ri);
};

window.N_0x3c5c1e2c2ff814b1 = function (p0) {
	return _in("0x3C5C1E2C2FF814B1", p0);
};

window.N_0x3c67506996001f5e = function () {
	return _in("0x3C67506996001F5E", _r, _ri);
};

window.N_0x3c891a251567dfce = function (p0) {
	return _in("0x3C891A251567DFCE", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x3ca6050692bc61b0 = function (p0) {
	return _in("0x3CA6050692BC61B0", p0);
};

window.N_0x3d120012440e6683 = function () {
	return _in("0x3D120012440E6683", _r, _ri);
};

window.N_0x3d3d15af7bcaaf83 = function (p0, p1, p2) {
	return _in("0x3D3D15AF7BCAAF83", p0, p1, p2);
};

window.N_0x3d3d8b3be5a83d35 = function () {
	return _in("0x3D3D8B3BE5A83D35", _r, _ri);
};

window.N_0x3d42b92563939375 = function (p0) {
	return _in("0x3D42B92563939375", _ts(p0), _r);
};

window.N_0x3d9acb1eb139e702 = function () {
	return _in("0x3D9ACB1EB139E702", _r, _ri);
};

window.N_0x3dbf2df0aeb7d289 = function (p0) {
	return _in("0x3DBF2DF0AEB7D289", p0, _r);
};

window.N_0x3dda37128dd1aca8 = function (p0) {
	return _in("0x3DDA37128DD1ACA8", p0);
};

window.N_0x3de3aa516fb126a4 = function (p0) {
	return _in("0x3DE3AA516FB126A4", p0);
};

window.N_0x3de51e9c80b116cf = function (p0) {
	return _in("0x3DE51E9C80B116CF", p0, _r, _ri);
};

window.N_0x3dec726c25a11bac = function (p0) {
	return _in("0x3DEC726C25A11BAC", p0, _r, _ri);
};

window.N_0x3e200c2bcf4164eb = function (p0, p1) {
	return _in("0x3E200C2BCF4164EB", p0, p1);
};

window.N_0x3e38e28a1d80ddf6 = function (ped) {
	return _in("0x3E38E28A1D80DDF6", ped, _r);
};

window.N_0x3e4adaff1830f146 = function () {
	return _in("0x3E4ADAFF1830F146", _r, _ri);
};

window.N_0x3e802f11fbe27674 = function (p0) {
	return _in("0x3E802F11FBE27674", p0, _r);
};

window.N_0x3e9679c1dfcf422c = function (p0, p1) {
	return _in("0x3E9679C1DFCF422C", p0, p1);
};

window.N_0x3ebeac6c3f81f6bd = function (p0) {
	return _in("0x3EBEAC6C3F81F6BD", p0);
};

window.N_0x3ed1438c1f5c6612 = function (p0) {
	return _in("0x3ED1438C1F5C6612", p0);
};

window.N_0x3ed2b83ab2e82799 = function (p0, p1) {
	return _in("0x3ED2B83AB2E82799", p0, p1);
};

window.N_0x3f0cf9cb7e589b88 = function () {
	return _in("0x3F0CF9CB7E589B88", _r, _ri);
};

window.N_0x3f52e880aaf6c8ca = function (p0) {
	return _in("0x3F52E880AAF6C8CA", p0);
};

window.N_0x3f5cc444dcaaa8f2 = function (p0, p1, p2) {
	return _in("0x3F5CC444DCAAA8F2", p0, p1, p2);
};

window.N_0x3f7325574e41b44d = function (p0, p1, p2, p3) {
	return _in("0x3F7325574E41B44D", p0, p1, p2, p3);
};

window.N_0x3f9990bf5f22759c = function (p0) {
	return _in("0x3F9990BF5F22759C", _ii(p0) /* may be optional */, _r);
};

window.N_0x3fa36981311fa4ff = function (netId, state) {
	return _in("0x3FA36981311FA4FF", netId, state);
};

window.N_0x4008edf7d6e48175 = function (p0) {
	return _in("0x4008EDF7D6E48175", p0);
};

window.N_0x402f9ed62087e898 = function () {
	return _in("0x402F9ED62087E898");
};

window.N_0x405591ec8fd9096d = function (p0) {
	return _in("0x405591EC8FD9096D", _fv(p0));
};

window.N_0x4056ea1105f5abd7 = function (p0, p1) {
	return _in("0x4056EA1105F5ABD7", p0, p1);
};

window.N_0x405dc2aef6af95b9 = function (roomHashKey) {
	return _in("0x405DC2AEF6AF95B9", _ch(roomHashKey));
};

window.N_0x407091cf6037118e = function (netID) {
	return _in("0x407091CF6037118E", netID);
};

window.N_0x40763ea7b9b783e7 = function (p0, p1, p2) {
	return _in("0x40763EA7B9B783E7", p0, p1, p2, _r, _ri);
};

window.N_0x40aefd1a244741f2 = function (p0) {
	return _in("0x40AEFD1A244741F2", p0);
};

window.N_0x40cf0d12d142a9e8 = function (ped) {
	return _in("0x40CF0D12D142A9E8", ped);
};

window.N_0x40f7e66472df3e5c = function (p0, p1) {
	return _in("0x40F7E66472DF3E5C", p0, p1, _r, _ri);
};

window.N_0x4128464231e3ca0b = function (p0, p1, p2, p3) {
	return _in("0x4128464231E3CA0B", p0, p1, p2, p3);
};

window.N_0x41290b40fa63e6da = function (p0) {
	return _in("0x41290B40FA63E6DA", p0);
};

window.N_0x412f1364fa066cfb = function (p0) {
	return _in("0x412F1364FA066CFB", p0, _r, _ri);
};

window.N_0x41350b4fc28e3941 = function (p0) {
	return _in("0x41350B4FC28E3941", p0);
};

window.N_0x4167efe0527d706e = function () {
	return _in("0x4167EFE0527D706E", _r);
};

window.N_0x418dc16fae452c1c = function (p0) {
	return _in("0x418DC16FAE452C1C", p0, _r);
};

window.N_0x419594e137637120 = function (p0, p1, p2) {
	return _in("0x419594E137637120", p0, p1, p2);
};

window.N_0x419615486bbf1956 = function (p0) {
	return _in("0x419615486BBF1956", p0);
};

window.N_0x41faa8fb2ece8720 = function (p0) {
	return _in("0x41FAA8FB2ECE8720", p0);
};

window.N_0x42156508606de65e = function (p0) {
	return _in("0x42156508606DE65E", _fv(p0));
};

window.N_0x422d396f80a96547 = function () {
	return _in("0x422D396F80A96547", _r, _ri);
};

window.N_0x422f32cc7e56abad = function (p0) {
	return _in("0x422F32CC7E56ABAD", p0, _r);
};

window.N_0x4237e822315d8ba9 = function () {
	return _in("0x4237E822315D8BA9", _r);
};

window.N_0x425aecf167663f48 = function (ped, p1) {
	return _in("0x425AECF167663F48", ped, p1);
};

window.N_0x42613035157e4208 = function (p0) {
	return _in("0x42613035157E4208", p0);
};

window.N_0x4282e08174868be3 = function () {
	return _in("0x4282E08174868BE3", _r, _ri);
};

window.N_0x428ad3e26c8d9eb0 = function (p0, p1, p2, p3, p4) {
	return _in("0x428AD3E26C8D9EB0", p0, p1, p2, p3, p4);
};

window.N_0x428baccdf5e26ead = function (vehicle, p1) {
	return _in("0x428BACCDF5E26EAD", vehicle, p1);
};

window.N_0x428eaf89e24f6c36 = function (p0, p1) {
	return _in("0x428EAF89E24F6C36", p0, _fv(p1));
};

window.N_0x42a4beb35d372407 = function (p0) {
	return _in("0x42A4BEB35D372407", p0, _r, _ri);
};

window.N_0x42b65deef2edf2a1 = function (p0) {
	return _in("0x42B65DEEF2EDF2A1", p0);
};

window.N_0x4348bfda56023a2f = function (p0, p1) {
	return _in("0x4348BFDA56023A2F", p0, p1, _r, _ri);
};

window.N_0x437138b6a830166a = function () {
	return _in("0x437138B6A830166A");
};

window.N_0x43865688ae10f0d7 = function () {
	return _in("0x43865688AE10F0D7", _r, _ri);
};

window.N_0x438822c279b73b93 = function (p0) {
	return _in("0x438822C279B73B93", p0);
};

window.N_0x43d1680c6d19a8e9 = function () {
	return _in("0x43D1680C6D19A8E9");
};

window.N_0x43fa0dfc5df87815 = function (vehicle, p1) {
	return _in("0x43FA0DFC5DF87815", vehicle, p1);
};

window.N_0x4419966c9936071a = function (p0) {
	return _in("0x4419966C9936071A", p0);
};

window.N_0x444c4525ece0a4b9 = function () {
	return _in("0x444C4525ECE0A4B9");
};

window.N_0x44621483ff966526 = function (p0, p1) {
	return _in("0x44621483FF966526", p0, p1);
};

window.N_0x44919cc079bb60bf = function (p0) {
	return _in("0x44919CC079BB60BF", p0);
};

window.N_0x44a0bdc559b35f6e = function () {
	return _in("0x44A0BDC559B35F6E", _r, _ri);
};

window.N_0x44aca259d67651db = function (p1) {
	return _in("0x44ACA259D67651DB", _i, p1);
};

window.N_0x44b37cdcae765aae = function (p0, p1) {
	return _in("0x44B37CDCAE765AAE", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x44cd1f493db2a0a6 = function (p0, p1, p2) {
	return _in("0x44CD1F493DB2A0A6", p0, p1, p2);
};

window.N_0x44f1012b69313374 = function (p0, p1, p2, p3) {
	return _in("0x44F1012B69313374", p0, p1, p2, p3);
};

window.N_0x451294e859ecc018 = function (p0) {
	return _in("0x451294E859ECC018", p0, _r, _ri);
};

window.N_0x451d05012ccec234 = function (p0) {
	return _in("0x451D05012CCEC234", p0, _r, _ri);
};

window.N_0x459fd2c8d0ab78bc = function () {
	return _in("0x459FD2C8D0AB78BC", _r, _ri);
};

window.N_0x45a561a9421ab6ad = function (p0, p1) {
	return _in("0x45A561A9421AB6AD", p0, p1, _r, _ri);
};

window.N_0x45a83257ed02d9bc = function () {
	return _in("0x45A83257ED02D9BC");
};

window.N_0x45e816772e93a9db = function () {
	return _in("0x45E816772E93A9DB", _r, _ri);
};

window.N_0x46326e13da4e0546 = function (p0) {
	return _in("0x46326E13DA4E0546", _ii(p0) /* may be optional */);
};

window.N_0x4645de9980999e93 = function (p0, p1, p2, p3, type) {
	return _in("0x4645DE9980999E93", _ts(p0), _ts(p1), _ts(p2), _ts(p3), _ts(type), _r);
};

window.N_0x46494a2475701343 = function (p0, p1, p2, p3, modelHash, p5) {
	return _in("0x46494A2475701343", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _ch(modelHash), p5, _r);
};

window.N_0x4668d80430d6c299 = function (ped) {
	return _in("0x4668D80430D6C299", ped);
};

window.N_0x4669b3ed80f24b4e = function (player) {
	return _in("0x4669B3ED80F24B4E", player, _r, _ri);
};

window.N_0x466da42c89865553 = function (p0) {
	return _in("0x466DA42C89865553", _fv(p0));
};

window.N_0x4683149ed1dde7a1 = function (p0) {
	return _in("0x4683149ED1DDE7A1", _ts(p0), _r);
};

window.N_0x469f2ecdec046337 = function (p0) {
	return _in("0x469F2ECDEC046337", p0);
};

window.N_0x46b05bcae43856b0 = function (ped, flag) {
	return _in("0x46B05BCAE43856B0", ped, flag, _r);
};

window.N_0x46d1a61a21f566fc = function (p0) {
	return _in("0x46D1A61A21F566FC", _fv(p0));
};

window.N_0x46f3add1e2d5baf2 = function (p0, p1) {
	return _in("0x46F3ADD1E2D5BAF2", p0, p1);
};

window.N_0x46f8696933a63c9b = function (p0, p1) {
	return _in("0x46F8696933A63C9B", p0, p1, _r, _rv);
};

window.N_0x46fb3ed415c7641c = function (p0, p1, p2) {
	return _in("0x46FB3ED415C7641C", p0, p1, p2, _r);
};

window.N_0x472397322e92a856 = function () {
	return _in("0x472397322E92A856");
};

window.N_0x472841a026d26d8b = function () {
	return _in("0x472841A026D26D8B", _r, _ri);
};

window.N_0x473151ebc762c6da = function () {
	return _in("0x473151EBC762C6DA", _r, _ri);
};

window.N_0x4737980e8a283806 = function (p0, p1) {
	return _in("0x4737980E8A283806", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x4750fc27570311ec = function () {
	return _in("0x4750FC27570311EC", _r, _ri);
};

window.N_0x4757f00bc6323cfe = function (p0, p1) {
	return _in("0x4757F00BC6323CFE", p0, p1);
};

window.N_0x4759cc730f947c81 = function () {
	return _in("0x4759CC730F947C81");
};

window.N_0x47b32f5611e6e483 = function (p0) {
	return _in("0x47B32F5611E6E483", p0);
};

window.N_0x47b595d60664cffa = function (p0, p1) {
	return _in("0x47B595D60664CFFA", p0, p1);
};

window.N_0x4811bbac21c5fcd5 = function (p0) {
	return _in("0x4811BBAC21C5FCD5", p0);
};

window.N_0x483aca1176ca93f1 = function () {
	return _in("0x483ACA1176CA93F1");
};

window.N_0x4852fc386e2e1bb5 = function (p0) {
	return _in("0x4852FC386E2E1BB5", p0, _i, _i, _i);
};

window.N_0x48608c3464f58ab4 = function (p0, p1, p2) {
	return _in("0x48608C3464F58AB4", p0, p1, p2);
};

window.N_0x48621c9fca3ebd28 = function (p0) {
	return _in("0x48621C9FCA3EBD28", p0);
};

window.N_0x4862437a486f91b0 = function (p1, p2, p3) {
	return _in("0x4862437A486F91B0", _i, p1, p2, p3, _r);
};

window.N_0x487912fd248efddf = function (p0, p1) {
	return _in("0x487912FD248EFDDF", p0, _fv(p1), _r);
};

window.N_0x4879e4fe39074cdf = function () {
	return _in("0x4879E4FE39074CDF", _r, _ri);
};

window.N_0x488043841bbe156f = function () {
	return _in("0x488043841BBE156F");
};

window.N_0x48adc8a773564670 = function () {
	return _in("0x48ADC8A773564670");
};

window.N_0x48c633e94a8142a7 = function (p0) {
	return _in("0x48C633E94A8142A7", p0, _r, _ri);
};

window.N_0x48f069265a0e4bec = function (name) {
	return _in("0x48F069265A0E4BEC", _i, _ts(name));
};

window.N_0x490861b88f4fd846 = function (p0) {
	return _in("0x490861B88F4FD846", p0);
};

window.N_0x49482f9fcd825aaa = function (entity) {
	return _in("0x49482F9FCD825AAA", entity);
};

window.N_0x497420e022796b3f = function () {
	return _in("0x497420E022796B3F", _r, _ri);
};

window.N_0x49b99bf3fda89a7a = function (ped, speechName, unk) {
	return _in("0x49B99BF3FDA89A7A", ped, _ts(speechName), unk, _r);
};

window.N_0x49e50bdb8ba4dab2 = function (ped, p1) {
	return _in("0x49E50BDB8BA4DAB2", ped, p1);
};

window.N_0x49ec8030f5015f8b = function (p0) {
	return _in("0x49EC8030F5015F8B", p0);
};

window.N_0x4a0c7c9bb10abb36 = function (p0) {
	return _in("0x4A0C7C9BB10ABB36", p0);
};

window.N_0x4a2d4e8bf4265b0f = function (p0) {
	return _in("0x4A2D4E8BF4265B0F", p0, _r);
};

window.N_0x4a39db43e47cf3aa = function (p0) {
	return _in("0x4A39DB43E47CF3AA", p0);
};

window.N_0x4a7d6e727f941747 = function (p0) {
	return _in("0x4A7D6E727F941747", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x4a9923385bdb9dad = function () {
	return _in("0x4A9923385BDB9DAD", _r);
};

window.N_0x4a9fde3a5a6d0437 = function (p0) {
	return _in("0x4A9FDE3A5A6D0437", p0);
};

window.N_0x4ad490ae1536933b = function (p0, p1) {
	return _in("0x4AD490AE1536933B", p0, p1, _r, _ri);
};

window.N_0x4ada3f19be4a6047 = function (ped) {
	return _in("0x4ADA3F19BE4A6047", ped);
};

window.N_0x4af92acd3141d96c = function () {
	return _in("0x4AF92ACD3141D96C");
};

window.N_0x4b5b4da5d79f1943 = function (checkpoint, p0) {
	return _in("0x4B5B4DA5D79F1943", checkpoint, _fv(p0));
};

window.N_0x4b5b620c9b59ed34 = function (p0, p1) {
	return _in("0x4B5B620C9B59ED34", p0, p1);
};

window.N_0x4b5cfc83122df602 = function () {
	return _in("0x4B5CFC83122DF602");
};

window.N_0x4ba166079d658ed4 = function (p0, p1) {
	return _in("0x4BA166079D658ED4", p0, p1);
};

window.N_0x4ba92a18502bca61 = function (player, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, flags) {
	return _in("0x4BA92A18502BCA61", player, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), flags, _r);
};

window.N_0x4bc2854478f3a749 = function (doorHash) {
	return _in("0x4BC2854478F3A749", _ch(doorHash), _r, _ri);
};

window.N_0x4c2330e61d3deb56 = function (interiorID) {
	return _in("0x4C2330E61D3DEB56", interiorID, _r, _ri);
};

window.N_0x4c2a9fdc22377075 = function () {
	return _in("0x4C2A9FDC22377075");
};

window.N_0x4c61b39930d045da = function (p0) {
	return _in("0x4C61B39930D045DA", p0, _r);
};

window.N_0x4c61c75bee8184c2 = function (p0, p1, p2) {
	return _in("0x4C61C75BEE8184C2", _ts(p0), p1, p2);
};

window.N_0x4c815eb175086f84 = function (p0, p1) {
	return _in("0x4C815EB175086F84", p0, p1, _r, _ri);
};

window.N_0x4c89fe2bdeb3f169 = function () {
	return _in("0x4C89FE2BDEB3F169", _r, _ri);
};

window.N_0x4cebc1ed31e8925e = function (cutsceneName) {
	return _in("0x4CEBC1ED31E8925E", _ts(cutsceneName), _r);
};

window.N_0x4d02279c83be69fe = function () {
	return _in("0x4D02279C83BE69FE", _r, _ri);
};

window.N_0x4d1cb8dc40208a17 = function (p0, p1) {
	return _in("0x4D1CB8DC40208A17", p0, p1, _r, _ri);
};

window.N_0x4d89d607cb3dd1d2 = function (object, toggle) {
	return _in("0x4D89D607CB3DD1D2", object, toggle);
};

window.N_0x4d953df78ebf8158 = function () {
	return _in("0x4D953DF78EBF8158");
};

window.N_0x4d9d109f63fee1d4 = function (p0, p1) {
	return _in("0x4D9D109F63FEE1D4", p0, p1);
};

window.N_0x4dcdf92bf64236cd = function (p0, p1) {
	return _in("0x4DCDF92BF64236CD", p0, p1);
};

window.N_0x4df7cfff471a7fb1 = function (p0) {
	return _in("0x4DF7CFFF471A7FB1", p0, _r);
};

window.N_0x4dfdd9eb705f8140 = function (p0) {
	return _in("0x4DFDD9EB705F8140", _i /* actually bool */, _r);
};

window.N_0x4e20d2a627011e8e = function (p0, p1) {
	return _in("0x4E20D2A627011E8E", p0, p1, _r, _ri);
};

window.N_0x4e3cd0ef8a489541 = function () {
	return _in("0x4E3CD0EF8A489541", _r, _ri);
};

window.N_0x4e404a9361f75bb2 = function (radioStation, p1, p2) {
	return _in("0x4E404A9361F75BB2", _ts(radioStation), _ts(p1), p2);
};

window.N_0x4e417c547182c84d = function (p0) {
	return _in("0x4E417C547182C84D", p0, _r, _ri);
};

window.N_0x4e52e752c76e7e7a = function (p0) {
	return _in("0x4E52E752C76E7E7A", p0);
};

window.N_0x4e548c0d7ae39ff9 = function (p0, p1) {
	return _in("0x4E548C0D7AE39FF9", p0, p1, _r, _ri);
};

window.N_0x4e74e62e0a97e901 = function (vehicle, p1) {
	return _in("0x4E74E62E0A97E901", vehicle, p1);
};

window.N_0x4e90d746056e273d = function (p0, p1) {
	return _in("0x4E90D746056E273D", p0, p1);
};

window.N_0x4f8a26a890fd62fb = function (inputGroup, control) {
	return _in("0x4F8A26A890FD62FB", inputGroup, control, _r, _rf);
};

window.N_0x4fef53183c3c6414 = function () {
	return _in("0x4FEF53183C3C6414", _r, _ri);
};

window.N_0x500873a45724c863 = function (vehicle, p1) {
	return _in("0x500873A45724C863", vehicle, p1);
};

window.N_0x5009dfd741329729 = function (p0, p1) {
	return _in("0x5009DFD741329729", _ts(p0), p1);
};

window.N_0x501478855a6074ce = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x501478855A6074CE", p0, p1, p2, p3, p4, p5);
};

window.N_0x503f5920162365b2 = function (p0, p1, p2, p3) {
	return _in("0x503F5920162365B2", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0x50634e348c8d44ef = function (p0) {
	return _in("0x50634E348C8D44EF", p0, _r, _ri);
};

window.N_0x5068f488ddb54dd8 = function () {
	return _in("0x5068F488DDB54DD8", _r, _ri);
};

window.N_0x5096fd9ccb49056d = function (p0) {
	return _in("0x5096FD9CCB49056D", _ii(p0) /* may be optional */);
};

window.N_0x50c375537449f369 = function (p0) {
	return _in("0x50C375537449F369", p0);
};

window.N_0x50f457823ce6eb5f = function (p0, p1, p2, p3) {
	return _in("0x50F457823CE6EB5F", p0, p1, p2, p3, _r, _ri);
};

window.N_0x511f1a683387c7e2 = function (p0) {
	return _in("0x511F1A683387C7E2", p0, _r, _ri);
};

window.N_0x516fc96eb88eefe5 = function (p0) {
	return _in("0x516FC96EB88EEFE5", p0);
};

window.N_0x5182a339a3474510 = function (p0, p1, p2) {
	return _in("0x5182A339A3474510", p0, p1, p2);
};

window.N_0x51bb2d88d31a914b = function (vehicle, p1) {
	return _in("0x51BB2D88D31A914B", vehicle, p1);
};

window.N_0x51db102f4a3ba5e0 = function (p0) {
	return _in("0x51DB102F4A3BA5E0", p0);
};

window.N_0x51f1a8e48c3d2f6d = function (p0, p1, p2) {
	return _in("0x51F1A8E48C3D2F6D", p0, p1, p2, _r);
};

window.N_0x523a590c1a3cc0d3 = function () {
	return _in("0x523A590C1A3CC0D3");
};

window.N_0x524ff0aeff9c3973 = function (p0) {
	return _in("0x524FF0AEFF9C3973", p0);
};

window.N_0x52818819057f2b40 = function (p0) {
	return _in("0x52818819057F2B40", p0, _r);
};

window.N_0x52d59ab61ddc05dd = function (ped, p1) {
	return _in("0x52D59AB61DDC05DD", ped, p1);
};

window.N_0x5324a0e3e4ce3570 = function (p0, p1) {
	return _in("0x5324A0E3E4CE3570", p0, p1, _i, _i, _r);
};

window.N_0x5335be58c083e74e = function (p0) {
	return _in("0x5335BE58C083E74E", p0);
};

window.N_0x53409b5163d5b846 = function (modelHash) {
	return _in("0x53409B5163D5B846", _ch(modelHash), _r, _rf);
};

window.N_0x53af99baa671ca47 = function (vehicle) {
	return _in("0x53AF99BAA671CA47", vehicle, _r, _rf);
};

window.N_0x53afd64c6758f2f9 = function () {
	return _in("0x53AFD64C6758F2F9", _r, _ri);
};

window.N_0x53c10c8bd774f2c9 = function () {
	return _in("0x53C10C8BD774F2C9", _r, _ri);
};

window.N_0x53cae13e9b426993 = function (p0) {
	return _in("0x53CAE13E9B426993", p0);
};

window.N_0x53f4892d18ec90a4 = function (p0) {
	return _in("0x53F4892D18EC90A4", _fv(p0));
};

window.N_0x5407b7288d0478b7 = function (p0) {
	return _in("0x5407B7288D0478B7", p0, _r, _ri);
};

window.N_0x54318c915d27e4ce = function (p0, p1) {
	return _in("0x54318C915D27E4CE", p0, p1);
};

window.N_0x544810ed9db6bbe6 = function () {
	return _in("0x544810ED9DB6BBE6", _r, _ri);
};

window.N_0x544996c0081abdeb = function (p0, p1) {
	return _in("0x544996C0081ABDEB", p0, p1);
};

window.N_0x547237aa71ab44de = function (p0) {
	return _in("0x547237AA71AB44DE", p0);
};

window.N_0x54b0f614960f4a5f = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x54B0F614960F4A5F", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _r, _ri);
};

window.N_0x54e22ea2c1956a8d = function (p0) {
	return _in("0x54E22EA2C1956A8D", _fv(p0));
};

window.N_0x54f157e0336a3822 = function (p0, p1, p2) {
	return _in("0x54F157E0336A3822", p0, _ts(p1), _fv(p2));
};

window.N_0x5501b7a5cdb79d37 = function (p0) {
	return _in("0x5501B7A5CDB79D37", p0);
};

window.N_0x551df99658db6ee8 = function (p0, p1, p2) {
	return _in("0x551DF99658DB6EE8", _fv(p0), _fv(p1), _fv(p2), _r, _ri);
};

window.N_0x55384438fc55ad8e = function (value) {
	return _in("0x55384438FC55AD8E", value);
};

window.N_0x5539c3ebf104a53a = function (p0) {
	return _in("0x5539C3EBF104A53A", p0);
};

window.N_0x55598d21339cb998 = function (p0) {
	return _in("0x55598D21339CB998", _fv(p0));
};

window.N_0x55a1e095db052fa5 = function (p0, p1) {
	return _in("0x55A1E095DB052FA5", p0, p1);
};

window.N_0x55a8becaf28a4eb7 = function () {
	return _in("0x55A8BECAF28A4EB7", _r, _ri);
};

window.N_0x55fcc0c390620314 = function (p0, p1, p2) {
	return _in("0x55FCC0C390620314", p0, p1, p2);
};

window.N_0x56105e599cab0efa = function (p0) {
	return _in("0x56105E599CAB0EFA", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x5615e0c5eb2bc6e2 = function (p0, p1) {
	return _in("0x5615E0C5EB2BC6E2", p0, p1);
};

window.N_0x56176892826a4fe8 = function (ped) {
	return _in("0x56176892826A4FE8", ped, _r, _ri);
};

window.N_0x5626d9d6810730d5 = function () {
	return _in("0x5626D9D6810730D5", _r, _ri);
};

window.N_0x563b65a643ed072e = function (p0, p1, p2) {
	return _in("0x563B65A643ED072E", p0, p1, p2, _r, _ri);
};

window.N_0x565e430db3b05bec = function (p0) {
	return _in("0x565E430DB3B05BEC", p0, _r);
};

window.N_0x567384dfa67029e6 = function () {
	return _in("0x567384DFA67029E6", _r, _ri);
};

window.N_0x5688585e6d563cd8 = function (p0) {
	return _in("0x5688585E6D563CD8", p0);
};

window.N_0x56b94c6d7127dfba = function (p0, p1, p2) {
	return _in("0x56B94C6D7127DFBA", p0, _fv(p1), p2);
};

window.N_0x56c8b608cfd49854 = function () {
	return _in("0x56C8B608CFD49854");
};

window.N_0x56eb5e94318d3fb6 = function (p0, p1) {
	return _in("0x56EB5E94318D3FB6", p0, p1);
};

window.N_0x5702b917b99db1cd = function (p0) {
	return _in("0x5702B917B99DB1CD", p0);
};

window.N_0x570389d1c3de3c6b = function (p0) {
	return _in("0x570389D1C3DE3C6B", p0);
};

window.N_0x571feb383f629926 = function (cargobob, p1) {
	return _in("0x571FEB383F629926", cargobob, p1);
};

window.N_0x576594e8d64375e2 = function (p0, p1) {
	return _in("0x576594E8D64375E2", p0, p1);
};

window.N_0x577599cced639ca2 = function (p0) {
	return _in("0x577599CCED639CA2", p0);
};

window.N_0x57b192b4d4ad23d5 = function (p0) {
	return _in("0x57B192B4D4AD23D5", p0);
};

window.N_0x57d760d55f54e071 = function (p0) {
	return _in("0x57D760D55F54E071", p0);
};

window.N_0x583049884a2eee3c = function () {
	return _in("0x583049884A2EEE3C");
};

window.N_0x5835d9cd92e83184 = function () {
	return _in("0x5835D9CD92E83184", _i, _i, _r);
};

window.N_0x583df8e3d4afbd98 = function () {
	return _in("0x583DF8E3D4AFBD98", _r, _ri);
};

window.N_0x5845066d8a1ea7f7 = function (vehicle, x, y, z, p4) {
	return _in("0x5845066D8A1EA7F7", vehicle, _fv(x), _fv(y), _fv(z), p4);
};

window.N_0x584770794d758c18 = function (p0, p1) {
	return _in("0x584770794D758C18", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x585847c5e4e11709 = function (p0, p1, p2) {
	return _in("0x585847C5E4E11709", p0, p1, p2, _r, _ri);
};

window.N_0x5873c14a52d74236 = function (p0) {
	return _in("0x5873C14A52D74236", p0, _r, _ri);
};

window.N_0x589f80b325cc82c5 = function (p0, p1, p2, p3, p4) {
	return _in("0x589F80B325CC82C5", _fv(p0), _fv(p1), _fv(p2), p3, _ii(p4) /* may be optional */, _r);
};

window.N_0x58a39be597ce99cd = function () {
	return _in("0x58A39BE597CE99CD");
};

window.N_0x58a651cd201d89ad = function (p0) {
	return _in("0x58A651CD201D89AD", p0, _r, _ri);
};

window.N_0x58bb377bec7cd5f4 = function (p0, p1) {
	return _in("0x58BB377BEC7CD5F4", p0, p1);
};

window.N_0x58c21165f6545892 = function (p0, p1) {
	return _in("0x58C21165F6545892", p0, p1);
};

window.N_0x58cc181719256197 = function (p0, p1, p2) {
	return _in("0x58CC181719256197", p0, p1, p2, _r, _ri);
};

window.N_0x59328eb08c5ceb2b = function () {
	return _in("0x59328EB08C5CEB2B", _r, _ri);
};

window.N_0x593570c289a77688 = function () {
	return _in("0x593570C289A77688", _r, _ri);
};

window.N_0x593feae1f73392d4 = function () {
	return _in("0x593FEAE1F73392D4", _r, _ri);
};

window.N_0x59424bd75174c9b1 = function () {
	return _in("0x59424BD75174C9B1");
};

window.N_0x595f028698072dd9 = function (p0, p1, p2) {
	return _in("0x595F028698072DD9", p0, p1, p2, _r);
};

window.N_0x597f8dba9b206fc7 = function () {
	return _in("0x597F8DBA9B206FC7", _r, _ri);
};

window.N_0x59b9a7af4c95133c = function () {
	return _in("0x59B9A7AF4C95133C", _r, _ri);
};

window.N_0x59d421683d31835a = function (p0) {
	return _in("0x59D421683D31835A", p0);
};

window.N_0x59df79317f85a7e0 = function () {
	return _in("0x59DF79317F85A7E0", _r, _ri);
};

window.N_0x59e7b488451f4d3a = function (p0, p1) {
	return _in("0x59E7B488451F4D3A", p0, _fv(p1));
};

window.N_0x5a0a3d1a186a5508 = function () {
	return _in("0x5A0A3D1A186A5508", _r, _ri);
};

window.N_0x5a34cd9c3c5bec44 = function (p0) {
	return _in("0x5A34CD9C3C5BEC44", p0, _r);
};

window.N_0x5a43c76f7fc7ba5f = function () {
	return _in("0x5A43C76F7FC7BA5F");
};

window.N_0x5a556b229a169402 = function () {
	return _in("0x5A556B229A169402", _r);
};

window.N_0x5a6aa44ff8e931e6 = function () {
	return _in("0x5A6AA44FF8E931E6", _r);
};

window.N_0x5a6ffa2433e2f14c = function (player, p1, p2, p3, p4, p5, p6, p7, flags) {
	return _in("0x5A6FFA2433E2F14C", player, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), flags, _r);
};

window.N_0x5a7f62fda59759bd = function () {
	return _in("0x5A7F62FDA59759BD");
};

window.N_0x5aa3befa29f03ad4 = function () {
	return _in("0x5AA3BEFA29F03AD4", _r, _ri);
};

window.N_0x5aa3f878a178c4fc = function (modelHash) {
	return _in("0x5AA3F878A178C4FC", _ch(modelHash), _r, _rf);
};

window.N_0x5aab586ffec0fd96 = function (p0) {
	return _in("0x5AAB586FFEC0FD96", p0);
};

window.N_0x5ad3932daeb1e5d3 = function () {
	return _in("0x5AD3932DAEB1E5D3");
};

window.N_0x5ae17c6b0134b7f1 = function () {
	return _in("0x5AE17C6B0134B7F1", _r, _ri);
};

window.N_0x5b0316762afd4a64 = function () {
	return _in("0x5B0316762AFD4A64", _r, _ri);
};

window.N_0x5b1f2e327b6b6fe1 = function () {
	return _in("0x5B1F2E327B6B6FE1", _r, _ri);
};

window.N_0x5b48a06dd0e792a5 = function () {
	return _in("0x5B48A06DD0E792A5", _r, _ri);
};

window.N_0x5b50abb1fe3746f4 = function () {
	return _in("0x5B50ABB1FE3746F4", _r, _ri);
};

window.N_0x5b6010b3cbc29095 = function (p0, p1) {
	return _in("0x5B6010B3CBC29095", p0, p1);
};

window.N_0x5b73c77d9eb66e24 = function (p0) {
	return _in("0x5B73C77D9EB66E24", p0);
};

window.N_0x5b84d09cec5209c5 = function (inputGroup, control) {
	return _in("0x5B84D09CEC5209C5", inputGroup, control, _r, _rf);
};

window.N_0x5b8ed3db018927b1 = function (p0) {
	return _in("0x5B8ED3DB018927B1", p0);
};

window.N_0x5b91b229243351a8 = function (p0, p1) {
	return _in("0x5B91B229243351A8", p0, p1);
};

window.N_0x5b9853296731e88d = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x5B9853296731E88D", p0, p1, p2, p3, p4, p5);
};

window.N_0x5ba68a0840d546ac = function (p0, p1) {
	return _in("0x5BA68A0840D546AC", p0, p1, _r, _ri);
};

window.N_0x5bcde0f640c773d2 = function (p0, p1, p2, p3) {
	return _in("0x5BCDE0F640C773D2", p0, p1, p2, p3);
};

window.N_0x5bd5f255321c4aaf = function (p0) {
	return _in("0x5BD5F255321C4AAF", p0, _r, _ri);
};

window.N_0x5bff36d6ed83e0ae = function () {
	return _in("0x5BFF36D6ED83E0AE", _r, _rv);
};

window.N_0x5c3b791d580e0bc2 = function (entity, p1) {
	return _in("0x5C3B791D580E0BC2", entity, _fv(p1));
};

window.N_0x5c41e6babc9e2112 = function (p0) {
	return _in("0x5C41E6BABC9E2112", p0);
};

window.N_0x5c48a1d6e3b33179 = function (p0) {
	return _in("0x5C48A1D6E3B33179", p0, _r);
};

window.N_0x5c48b75732c8456c = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x5C48B75732C8456C", p0, p1, p2, p3, p4, p5);
};

window.N_0x5c497525f803486b = function () {
	return _in("0x5C497525F803486B");
};

window.N_0x5c4ebffa98bdb41c = function (p0) {
	return _in("0x5C4EBFFA98BDB41C", p0, _r, _ri);
};

window.N_0x5c707a667df8b9fa = function (p0, p1) {
	return _in("0x5C707A667DF8B9FA", p0, p1);
};

window.N_0x5cae833b0ee0c500 = function (p0) {
	return _in("0x5CAE833B0EE0C500", p0, _r);
};

window.N_0x5ce62918f8d703c7 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x5CE62918F8D703C7", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11);
};

window.N_0x5d10b3795f3fc886 = function () {
	return _in("0x5D10B3795F3FC886", _r);
};

window.N_0x5d2bfaab8d956e0e = function () {
	return _in("0x5D2BFAAB8D956E0E");
};

window.N_0x5d517b27cf6ecd04 = function (p0) {
	return _in("0x5D517B27CF6ECD04", p0);
};

window.N_0x5d5caff661ddf6fc = function (p0, p1) {
	return _in("0x5D5CAFF661DDF6FC", p0, _ii(p1) /* may be optional */);
};

window.N_0x5d7b620dae436138 = function (p0) {
	return _in("0x5D7B620DAE436138", _fv(p0));
};

window.N_0x5d97630a8a0ef123 = function (p0, p1, p2) {
	return _in("0x5D97630A8A0EF123", p0, p1, p2);
};

window.N_0x5da3a8de8cb6226f = function (time) {
	return _in("0x5DA3A8DE8CB6226F", time);
};

window.N_0x5da825a85d0ea6e6 = function (p0, p1, p2) {
	return _in("0x5DA825A85D0EA6E6", p0, p1, p2);
};

window.N_0x5db8010ee71fdef2 = function (vehicle) {
	return _in("0x5DB8010EE71FDEF2", vehicle, _r);
};

window.N_0x5dbf05db5926d089 = function (p0) {
	return _in("0x5DBF05DB5926D089", p0);
};

window.N_0x5dc40a8869c22141 = function (p0, p1) {
	return _in("0x5DC40A8869C22141", p0, p1);
};

window.N_0x5dc577201723960a = function () {
	return _in("0x5DC577201723960A", _r);
};

window.N_0x5debd9c4dc995692 = function () {
	return _in("0x5DEBD9C4DC995692");
};

window.N_0x5e0165278f6339ee = function (p0) {
	return _in("0x5E0165278F6339EE", p0, _r, _ri);
};

window.N_0x5e203da2ba15d436 = function (p0) {
	return _in("0x5E203DA2BA15D436", p0, _r, _ri);
};

window.N_0x5e24341a7f92a74b = function () {
	return _in("0x5E24341A7F92A74B", _r, _ri);
};

window.N_0x5e3aa4ca2b6fb0ee = function (p0) {
	return _in("0x5E3AA4CA2B6FB0EE", p0);
};

window.N_0x5e569ec46ec21cae = function (vehicle, toggle) {
	return _in("0x5E569EC46EC21CAE", vehicle, toggle);
};

window.N_0x5e657ef1099edd65 = function (p0) {
	return _in("0x5E657EF1099EDD65", p0, _r);
};

window.N_0x5e9daf5a20f15908 = function (p0) {
	return _in("0x5E9DAF5A20F15908", _fv(p0));
};

window.N_0x5ea784d197556507 = function () {
	return _in("0x5EA784D197556507", _r, _ri);
};

window.N_0x5eaad83f8cfb4575 = function (pickupHash) {
	return _in("0x5EAAD83F8CFB4575", pickupHash, _r, _ri);
};

window.N_0x5ead2bf6484852e4 = function () {
	return _in("0x5EAD2BF6484852E4", _r);
};

window.N_0x5ecb40269053c0d4 = function (p0) {
	return _in("0x5ECB40269053C0D4", p0, _r, _ri);
};

window.N_0x5ecd378ee64450ab = function (p0) {
	return _in("0x5ECD378EE64450AB", p0);
};

window.N_0x5edef0cf8c1dab3c = function () {
	return _in("0x5EDEF0CF8C1DAB3C", _r, _ri);
};

window.N_0x5ee5632f47ae9695 = function (p0, p1) {
	return _in("0x5EE5632F47AE9695", p0, p1);
};

window.N_0x5f0f3f56635809ef = function (p0) {
	return _in("0x5F0F3F56635809EF", _fv(p0));
};

window.N_0x5f2013f8bc24ee69 = function (p0) {
	return _in("0x5F2013F8BC24EE69", p0);
};

window.N_0x5f35f6732c3fbba0 = function (p0) {
	return _in("0x5F35F6732C3FBBA0", p0, _r, _rf);
};

window.N_0x5f456788b05faeac = function (p0, p1, p2) {
	return _in("0x5F456788B05FAEAC", p0, p1, p2);
};

window.N_0x5fbd7095fe7ae57f = function (p0, p1) {
	return _in("0x5FBD7095FE7AE57F", p0, _fi(p1) /* may be optional */, _r);
};

window.N_0x5fc472c501ccadb3 = function (player) {
	return _in("0x5FC472C501CCADB3", player, _r);
};

window.N_0x5ff2c33b13a02a11 = function (p0) {
	return _in("0x5FF2C33B13A02A11", p0);
};

window.N_0x600048c60d5c2c51 = function (p0) {
	return _in("0x600048C60D5C2C51", p0);
};

window.N_0x600f8cb31c7aab6e = function (p0) {
	return _in("0x600F8CB31C7AAB6E", p0);
};

window.N_0x60190048c0764a26 = function (p0) {
	return _in("0x60190048C0764A26", p0, _r, _ri);
};

window.N_0x606e4d3e3cccf3eb = function () {
	return _in("0x606E4D3E3CCCF3EB", _r, _ri);
};

window.N_0x6070104b699b2ef4 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x6070104B699B2EF4", p0, p1, p2, p3, p4, p5, p6, _r, _ri);
};

window.N_0x60734cc207c9833c = function (p0) {
	return _in("0x60734CC207C9833C", p0);
};

window.N_0x609278246a29ca34 = function (p0, p1, p2) {
	return _in("0x609278246A29CA34", p0, p1, p2);
};

window.N_0x60e892ba4f5bdca4 = function () {
	return _in("0x60E892BA4F5BDCA4");
};

window.N_0x60edd13eb3ac1ff3 = function () {
	return _in("0x60EDD13EB3AC1FF3", _r, _ri);
};

window.N_0x60eedc12af66e846 = function (p0) {
	return _in("0x60EEDC12AF66E846", p0);
};

window.N_0x613f125ba3bd2eb9 = function () {
	return _in("0x613F125BA3BD2EB9", _r, _ri);
};

window.N_0x615d3925e87a3b26 = function (checkpoint) {
	return _in("0x615D3925E87A3B26", checkpoint);
};

window.N_0x616093ec6b139dd9 = function (player, pickupHash, p2) {
	return _in("0x616093EC6B139DD9", player, _ch(pickupHash), p2);
};

window.N_0x61631f5df50d1c34 = function (p0) {
	return _in("0x61631F5DF50D1C34", p0);
};

window.N_0x61767f73eaceed21 = function (ped) {
	return _in("0x61767F73EACEED21", ped, _r);
};

window.N_0x617f49c2668e6155 = function () {
	return _in("0x617F49C2668E6155", _r, _ri);
};

window.N_0x61a885d3f7cfee9a = function () {
	return _in("0x61A885D3F7CFEE9A");
};

window.N_0x61f95e5bb3e0a8c6 = function (p0) {
	return _in("0x61F95E5BB3E0A8C6", p0);
};

window.N_0x6216b116083a7cb4 = function (p0) {
	return _in("0x6216B116083A7CB4", _fv(p0));
};

window.N_0x621c6e4729388e41 = function (ped) {
	return _in("0x621C6E4729388E41", ped, _r);
};

window.N_0x62374889a4d59f72 = function () {
	return _in("0x62374889A4D59F72");
};

window.N_0x62454a641b41f3c5 = function (p0) {
	return _in("0x62454A641B41F3C5", p0);
};

window.N_0x6274c4712850841e = function (entity, p1) {
	return _in("0x6274C4712850841E", entity, p1);
};

window.N_0x629526aba383bcaa = function () {
	return _in("0x629526ABA383BCAA");
};

window.N_0x62a0296c1bb1ceb3 = function () {
	return _in("0x62A0296C1BB1CEB3", _r, _ri);
};

window.N_0x62b9fec9a11f10ef = function () {
	return _in("0x62B9FEC9A11F10EF", _r, _ri);
};

window.N_0x62ca17b74c435651 = function (vehicle) {
	return _in("0x62CA17B74C435651", vehicle, _r);
};

window.N_0x62e849b7eb28e770 = function (p0) {
	return _in("0x62E849B7EB28E770", p0);
};

window.N_0x62ec273d00187dca = function (x, y, z, radius, object) {
	return _in("0x62EC273D00187DCA", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(object), _r, _ri);
};

window.N_0x62ecfcfdee7885d6 = function () {
	return _in("0x62ECFCFDEE7885D6");
};

window.N_0x631dc5dff4b110e3 = function (p0) {
	return _in("0x631DC5DFF4B110E3", p0, _r);
};

window.N_0x632b2940c67f4ea9 = function (scaleformHandle) {
	return _in("0x632B2940C67F4EA9", scaleformHandle, _i, _i, _i, _r);
};

window.N_0x634148744f385576 = function (vehicle) {
	return _in("0x634148744F385576", vehicle, _r);
};

window.N_0x638a3a81733086db = function () {
	return _in("0x638A3A81733086DB", _r, _ri);
};

window.N_0x639431e895b9aa57 = function (ped, vehicle, p2, p3, p4) {
	return _in("0x639431E895B9AA57", ped, vehicle, p2, p3, p4, _r);
};

window.N_0x63b406d7884bfa95 = function () {
	return _in("0x63B406D7884BFA95", _r, _ri);
};

window.N_0x63eb2b972a218cac = function () {
	return _in("0x63EB2B972A218CAC");
};

window.N_0x641f272b52e2f0f8 = function (p0, p1) {
	return _in("0x641F272B52E2F0F8", p0, p1);
};

window.N_0x643ed62d5ea3bebd = function () {
	return _in("0x643ED62D5EA3BEBD");
};

window.N_0x644546ec5287471b = function () {
	return _in("0x644546EC5287471B", _r);
};

window.N_0x6483c25849031c4f = function (p0, p1, p2, p3) {
	return _in("0x6483C25849031C4F", p0, p1, p2, _ii(p3) /* may be optional */);
};

window.N_0x648e7a5434af7969 = function (p0, p2, type) {
	return _in("0x648E7A5434AF7969", _ts(p0), _i, p2, _i, _i, _i, _ts(type), _r);
};

window.N_0x6493cf69859b116a = function () {
	return _in("0x6493CF69859B116A");
};

window.N_0x649c97d52332341a = function (p0) {
	return _in("0x649C97D52332341A", p0);
};

window.N_0x64d779659bc37b19 = function (p0) {
	return _in("0x64D779659BC37B19", p0, _r, _rv);
};

window.N_0x64f62afb081e260d = function () {
	return _in("0x64F62AFB081E260D");
};

window.N_0x6501129c9e0ffa05 = function (p0, p1) {
	return _in("0x6501129C9E0FFA05", p0, p1);
};

window.N_0x6512765e3be78c50 = function () {
	return _in("0x6512765E3BE78C50", _r, _ri);
};

window.N_0x651d3228960d08af = function (p0, p1) {
	return _in("0x651D3228960D08AF", p0, p1);
};

window.N_0x65499865fca6e5ec = function (doorHash) {
	return _in("0x65499865FCA6E5EC", _ch(doorHash), _r, _rf);
};

window.N_0x6551b1f7f6cd46ea = function (p0) {
	return _in("0x6551B1F7F6CD46EA", p0);
};

window.N_0x6558ac7c17bfef58 = function (p0) {
	return _in("0x6558AC7C17BFEF58", p0, _r, _ri);
};

window.N_0x658500ae6d723a7e = function (p0) {
	return _in("0x658500AE6D723A7E", p0);
};

window.N_0x6585d955a68452a5 = function (ped) {
	return _in("0x6585D955A68452A5", ped, _r, _ri);
};

window.N_0x659cf2ef7f550c4f = function () {
	return _in("0x659CF2EF7F550C4F", _r, _ri);
};

window.N_0x65b080555ea48149 = function (p0) {
	return _in("0x65B080555EA48149", p0);
};

window.N_0x65d2ebb47e1cec21 = function (p0) {
	return _in("0x65D2EBB47E1CEC21", p0);
};

window.N_0x65e7e78842e74cdb = function (p0) {
	return _in("0x65E7E78842E74CDB", p0, _r, _ri);
};

window.N_0x65faee425de637b0 = function (p0) {
	return _in("0x65FAEE425DE637B0", p0, _r);
};

window.N_0x661b5c8654add825 = function (p0, p1) {
	return _in("0x661B5C8654ADD825", p0, p1);
};

window.N_0x662635855957c411 = function (p0) {
	return _in("0x662635855957C411", p0, _r, _ri);
};

window.N_0x6636c535f6cc2725 = function (vehicle) {
	return _in("0x6636C535F6CC2725", vehicle, _r, _rf);
};

window.N_0x6647c5f6f5792496 = function (ped, p1) {
	return _in("0x6647C5F6F5792496", ped, p1);
};

window.N_0x66680a92700f43df = function (p0) {
	return _in("0x66680A92700F43DF", p0, _r);
};

window.N_0x668fd40bcba5de48 = function (p0, p1, p2, p3, p4) {
	return _in("0x668FD40BCBA5DE48", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0x66972397e0757e7a = function (p0, p1, p2) {
	return _in("0x66972397E0757E7A", p0, p1, p2);
};

window.N_0x66979acf5102fd2f = function (cargobob, p1) {
	return _in("0x66979ACF5102FD2F", cargobob, _fv(p1));
};

window.N_0x66a49d021870fe88 = function () {
	return _in("0x66A49D021870FE88");
};

window.N_0x66b59cffd78467af = function () {
	return _in("0x66B59CFFD78467AF", _r, _ri);
};

window.N_0x66e3aaface2d1eb8 = function (p0, p1, p2) {
	return _in("0x66E3AAFACE2D1EB8", p0, p1, p2);
};

window.N_0x66e7cb63c97b7d20 = function () {
	return _in("0x66E7CB63C97B7D20", _r, _ri);
};

window.N_0x66f010a4b031a331 = function (p0) {
	return _in("0x66F010A4B031A331", _ii(p0) /* may be optional */);
};

window.N_0x673ed815d6e323b7 = function (p0, p1, p2, p3, p4) {
	return _in("0x673ED815D6E323B7", p0, p1, p2, p3, p4, _r);
};

window.N_0x675721c9f644d161 = function () {
	return _in("0x675721C9F644D161");
};

window.N_0x675d19c6067cae08 = function (p0, p1, p2, p3) {
	return _in("0x675D19C6067CAE08", p0, p1, p2, p3);
};

window.N_0x678bb03c1a3bd51e = function (p0, p1, p2) {
	return _in("0x678BB03C1A3BD51E", p0, p1, p2, _i, _i, _r);
};

window.N_0x678f86d8fc040bdb = function (p0) {
	return _in("0x678F86D8FC040BDB", p0);
};

window.N_0x67a5589628e0cff6 = function () {
	return _in("0x67A5589628E0CFF6", _r);
};

window.N_0x67eedea1b9bafd94 = function () {
	return _in("0x67EEDEA1B9BAFD94");
};

window.N_0x67f6413d3220e18d = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x67F6413D3220E18D", p0, p1, p2, p3, p4, p5, p6, p7, p8, _r, _ri);
};

window.N_0x67fc09bc554a75e5 = function () {
	return _in("0x67FC09BC554A75E5", _r, _ri);
};

window.N_0x68103e2247887242 = function () {
	return _in("0x68103E2247887242");
};

window.N_0x684a41975f077262 = function () {
	return _in("0x684A41975F077262", _r);
};

window.N_0x6856ec3d35c81ea4 = function () {
	return _in("0x6856EC3D35C81EA4", _r, _ri);
};

window.N_0x685d5561680d088b = function (p0, p1) {
	return _in("0x685D5561680D088B", p0, _fv(p1));
};

window.N_0x68772db2b2526f9f = function (ped, x, y, z, range) {
	return _in("0x68772DB2B2526F9F", ped, _fv(x), _fv(y), _fv(z), _fv(range), _r);
};

window.N_0x687c0b594907d2e8 = function (ped) {
	return _in("0x687C0B594907D2E8", ped);
};

window.N_0x68f8be6af5cdf8a6 = function (p0, p1) {
	return _in("0x68F8BE6AF5CDF8A6", p0, p1);
};

window.N_0x690a61a6d13583f6 = function (p0) {
	return _in("0x690A61A6D13583F6", p0, _r);
};

window.N_0x692d58df40657e8c = function (p0, p1, p2, p4, p5) {
	return _in("0x692D58DF40657E8C", p0, p1, p2, _i, p4, p5, _r);
};

window.N_0x692d808c34a82143 = function (p0, p1, type) {
	return _in("0x692D808C34A82143", _ts(p0), _fv(p1), _ts(type), _r);
};

window.N_0x693478acbd7f18e7 = function () {
	return _in("0x693478ACBD7F18E7");
};

window.N_0x694e00132f2823ed = function (entity, p1) {
	return _in("0x694E00132F2823ED", entity, p1);
};

window.N_0x697f508861875b42 = function (p0, p1, p2) {
	return _in("0x697F508861875B42", p0, p1, p2, _r, _ri);
};

window.N_0x699e4a5c8c893a18 = function (p0, p1, p2) {
	return _in("0x699E4A5C8C893A18", p0, _ts(p1), _ii(p2) /* may be optional */, _r);
};

window.N_0x69ef772b192614c1 = function (p0, p1, p2, p3) {
	return _in("0x69EF772B192614C1", p0, p1, p2, p3);
};

window.N_0x69fe6dc87bd2a5e9 = function (p0) {
	return _in("0x69FE6DC87BD2A5E9", p0);
};

window.N_0x6a12d88881435dca = function () {
	return _in("0x6A12D88881435DCA");
};

window.N_0x6a1738b4323fe2d9 = function (p0) {
	return _in("0x6A1738B4323FE2D9", p0);
};

window.N_0x6a51f78772175a51 = function (p0) {
	return _in("0x6A51F78772175A51", p0);
};

window.N_0x6a5d89d7769a40d8 = function (p0) {
	return _in("0x6A5D89D7769A40D8", p0);
};

window.N_0x6a60e43998228229 = function (p0) {
	return _in("0x6A60E43998228229", p0);
};

window.N_0x6a98c2ecf57fa5d4 = function (vehicle, entity) {
	return _in("0x6A98C2ECF57FA5D4", vehicle, entity);
};

window.N_0x6adaabd3068c5235 = function () {
	return _in("0x6ADAABD3068C5235", _r, _ri);
};

window.N_0x6afd2cd753feef83 = function (p0) {
	return _in("0x6AFD2CD753FEEF83", _ts(p0), _r);
};

window.N_0x6b0e6172c9a4d902 = function (p0) {
	return _in("0x6B0E6172C9A4D902", p0);
};

window.N_0x6b1de27ee78e6a19 = function (p0) {
	return _in("0x6B1DE27EE78E6A19", p0);
};

window.N_0x6bc0acd0673acebe = function (p0, p1, p2) {
	return _in("0x6BC0ACD0673ACEBE", p0, p1, p2);
};

window.N_0x6bc97f4f4bb3c04b = function (p0, p1) {
	return _in("0x6BC97F4F4BB3C04B", p0, p1);
};

window.N_0x6bccf9948492fd85 = function (p0, p1, p2, p3, p4) {
	return _in("0x6BCCF9948492FD85", p0, p1, p2, p3, p4);
};

window.N_0x6bfb12ce158e3dd4 = function (p0) {
	return _in("0x6BFB12CE158E3DD4", p0, _r);
};

window.N_0x6bff5f84102df80a = function (p0) {
	return _in("0x6BFF5F84102DF80A", p0);
};

window.N_0x6c34f1208b8923fd = function (p0) {
	return _in("0x6C34F1208B8923FD", p0, _r, _ri);
};

window.N_0x6cc86e78358d5119 = function () {
	return _in("0x6CC86E78358D5119");
};

window.N_0x6cd5a433374d4cfb = function (p0, p1) {
	return _in("0x6CD5A433374D4CFB", p0, p1, _r);
};

window.N_0x6cd79468a1e595c6 = function (inputGroup) {
	return _in("0x6CD79468A1E595C6", inputGroup, _r);
};

window.N_0x6cdd58146a436083 = function (p0) {
	return _in("0x6CDD58146A436083", p0);
};

window.N_0x6ce177d014502e8a = function (p0) {
	return _in("0x6CE177D014502E8A", p0);
};

window.N_0x6ce50e47f5543d0c = function () {
	return _in("0x6CE50E47F5543D0C");
};

window.N_0x6d4cb481fac835e8 = function (p0, p1, p3) {
	return _in("0x6D4CB481FAC835E8", p0, p1, _i, p3, _r);
};

window.N_0x6d6840cee8845831 = function (action) {
	return _in("0x6D6840CEE8845831", _ts(action));
};

window.N_0x6d6af961b72728ae = function (vehicle) {
	return _in("0x6D6AF961B72728AE", vehicle);
};

window.N_0x6d8eac07506291fb = function (cargobob, p1) {
	return _in("0x6D8EAC07506291FB", cargobob, _fv(p1));
};

window.N_0x6d955f6a9e0295b1 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x6D955F6A9E0295B1", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x6dd8f5aa635eb4b2 = function (p0, p1) {
	return _in("0x6DD8F5AA635EB4B2", _fv(p0), _fv(p1), _i, _i);
};

window.N_0x6ddbf9dffc4ac080 = function (p0) {
	return _in("0x6DDBF9DFFC4AC080", p0);
};

window.N_0x6dee77aff8c21bd1 = function () {
	return _in("0x6DEE77AFF8C21BD1", _i, _i, _r);
};

window.N_0x6e04f06094c87047 = function () {
	return _in("0x6E04F06094C87047", _r, _ri);
};

window.N_0x6e0a5253375c4584 = function () {
	return _in("0x6E0A5253375C4584", _r, _ri);
};

window.N_0x6e0eb3eb47c8d7aa = function () {
	return _in("0x6E0EB3EB47C8D7AA", _r);
};

window.N_0x6e4361ff3e8cd7ca = function (p0) {
	return _in("0x6E4361FF3E8CD7CA", p0, _r, _ri);
};

window.N_0x6e91b04e08773030 = function (action) {
	return _in("0x6E91B04E08773030", _ts(action));
};

window.N_0x6eaaefc76acc311f = function (p0) {
	return _in("0x6EAAEFC76ACC311F", p0, _r, _ri);
};

window.N_0x6ebfb22d646ffc18 = function (vehicle, p1) {
	return _in("0x6EBFB22D646FFC18", vehicle, p1);
};

window.N_0x6ef54ab721dc6242 = function () {
	return _in("0x6EF54AB721DC6242");
};

window.N_0x6f1554b0cc2089fa = function (p0) {
	return _in("0x6F1554B0CC2089FA", p0);
};

window.N_0x6f2135b6129620c1 = function (p0) {
	return _in("0x6F2135B6129620C1", p0);
};

window.N_0x6f259f82d873b8b8 = function () {
	return _in("0x6F259F82D873B8B8", _r, _ri);
};

window.N_0x6f361b8889a792a3 = function () {
	return _in("0x6F361B8889A792A3");
};

window.N_0x6f44cbf56d79fac0 = function (p0, p1) {
	return _in("0x6F44CBF56D79FAC0", p0, p1, _r, _ri);
};

window.N_0x6f697a66ce78674e = function (team, toggle) {
	return _in("0x6F697A66CE78674E", team, toggle);
};

window.N_0x6f72cd94f7b5b68c = function () {
	return _in("0x6F72CD94F7B5B68C", _r, _ri);
};

window.N_0x6f7794f28c6b2535 = function (name) {
	return _in("0x6F7794F28C6B2535", _i, _ts(name));
};

window.N_0x6fb7bb3607d27fa2 = function () {
	return _in("0x6FB7BB3607D27FA2", _r, _ri);
};

window.N_0x6fcf8ddea146c45b = function (p0) {
	return _in("0x6FCF8DDEA146C45B", p0, _r, _ri);
};

window.N_0x6fd97159fe3c971a = function (p0, p1, p2, p3) {
	return _in("0x6FD97159FE3C971A", p0, p1, p2, p3);
};

window.N_0x6fddad856e36988a = function (p0, p1) {
	return _in("0x6FDDAD856E36988A", p0, p1);
};

window.N_0x6fddf453c0c756ec = function () {
	return _in("0x6FDDF453C0C756EC", _r);
};

window.N_0x700569dba175a77c = function (p0) {
	return _in("0x700569DBA175A77C", p0, _r, _ri);
};

window.N_0x701fda1e82076ba4 = function () {
	return _in("0x701FDA1E82076BA4");
};

window.N_0x702bc4d605522539 = function (p0) {
	return _in("0x702BC4D605522539", p0);
};

window.N_0x7033eefd9b28088e = function (p0) {
	return _in("0x7033EEFD9B28088E", p0);
};

window.N_0x703cc7f60cbb2b57 = function (p0) {
	return _in("0x703CC7F60CBB2B57", p0);
};

window.N_0x703f12425eca8bf5 = function (p0) {
	return _in("0x703F12425ECA8BF5", p0, _r, _ri);
};

window.N_0x705a276ebff3133d = function () {
	return _in("0x705A276EBFF3133D", _r);
};

window.N_0x705a844002b39dc0 = function () {
	return _in("0x705A844002B39DC0", _r, _ri);
};

window.N_0x70894bd0915c5bca = function (p0) {
	return _in("0x70894BD0915C5BCA", _fv(p0), _r, _ri);
};

window.N_0x708bdd8cd795b043 = function () {
	return _in("0x708BDD8CD795B043", _r);
};

window.N_0x70b8ec8fc108a634 = function (p0, p1) {
	return _in("0x70B8EC8FC108A634", p0, p1);
};

window.N_0x70ea8da57840f9be = function (p0) {
	return _in("0x70EA8DA57840F9BE", p0, _r);
};

window.N_0x711794453cfd692b = function (p0, p1) {
	return _in("0x711794453CFD692B", p0, p1);
};

window.N_0x71302ec70689052a = function (p0) {
	return _in("0x71302EC70689052A", p0, _r, _ri);
};

window.N_0x715135f4b82ac90d = function (entity) {
	return _in("0x715135F4B82AC90D", entity);
};

window.N_0x717e4d1f2048376d = function (ped) {
	return _in("0x717E4D1F2048376D", ped, _r, _s);
};

window.N_0x71862b1d855f32e1 = function (p1, p2, p3) {
	return _in("0x71862B1D855F32E1", _i, p1, p2, p3);
};

window.N_0x71b008056e5692d6 = function () {
	return _in("0x71B008056E5692D6");
};

window.N_0x71b74d2ae19338d0 = function (p0) {
	return _in("0x71B74D2AE19338D0", p0, _r);
};

window.N_0x71bdb63dbaf8da59 = function (p0) {
	return _in("0x71BDB63DBAF8DA59", p0);
};

window.N_0x71dc455f5cd1c2b1 = function (p0) {
	return _in("0x71DC455F5CD1C2B1", p0, _r, _ri);
};

window.N_0x71e7b2e657449aad = function () {
	return _in("0x71E7B2E657449AAD", _r, _ri);
};

window.N_0x722f5d28b61c5ea8 = function (p0) {
	return _in("0x722F5D28B61C5EA8", p0, _r, _ri);
};

window.N_0x723c1ce13fbfdb67 = function (p0, p1) {
	return _in("0x723C1CE13FBFDB67", p0, p1);
};

window.N_0x7241ccb7d020db69 = function (p0, p1) {
	return _in("0x7241CCB7D020DB69", p0, p1);
};

window.N_0x7242f8b741ce1086 = function (p0) {
	return _in("0x7242F8B741CE1086", p0, _r, _ri);
};

window.N_0x728c4cc7920cd102 = function (p0) {
	return _in("0x728C4CC7920CD102", p0, _r, _ri);
};

window.N_0x72beccf4b829522e = function (p0, p1) {
	return _in("0x72BECCF4B829522E", p0, p1);
};

window.N_0x72c1056d678bb7d8 = function (weaponHash) {
	return _in("0x72C1056D678BB7D8", _ch(weaponHash));
};

window.N_0x72d0706cd6ccdb58 = function () {
	return _in("0x72D0706CD6CCDB58");
};

window.N_0x72d918c99bcacc54 = function (p0) {
	return _in("0x72D918C99BCACC54", p0, _r);
};

window.N_0x72dd432f3cdfc0ee = function (posX, posY, posZ, radius, p4) {
	return _in("0x72DD432F3CDFC0EE", _fv(posX), _fv(posY), _fv(posZ), _fv(radius), p4);
};

window.N_0x72de52178c291cb5 = function () {
	return _in("0x72DE52178C291CB5", _r, _ri);
};

window.N_0x72eb7ba9b69bf6ab = function () {
	return _in("0x72EB7BA9B69BF6AB", _r, _ri);
};

window.N_0x73001e34f85137f8 = function (p0) {
	return _in("0x73001E34F85137F8", p0);
};

window.N_0x7303e27cc6532080 = function (p0, p1, p2, p3, p5) {
	return _in("0x7303E27CC6532080", p0, p1, p2, p3, _i, p5, _r);
};

window.N_0x733adf241531e5c2 = function (name, p1) {
	return _in("0x733ADF241531E5C2", _ts(name), _fv(p1));
};

window.N_0x733c87d4ce22bea2 = function (p0) {
	return _in("0x733C87D4CE22BEA2", p0);
};

window.N_0x7350823473013c02 = function (ped) {
	return _in("0x7350823473013C02", ped, _r);
};

window.N_0x73561d4425a021a2 = function (p0, p1) {
	return _in("0x73561D4425A021A2", p0, p1);
};

window.N_0x736d7aa1b750856b = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31) {
	return _in("0x736D7AA1B750856B", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31);
};

window.N_0x737e398138550fff = function (p0, p1) {
	return _in("0x737E398138550FFF", p0, p1);
};

window.N_0x741a3d8380319a81 = function () {
	return _in("0x741A3D8380319A81");
};

window.N_0x742b58f723233ed9 = function (p0) {
	return _in("0x742B58F723233ED9", p0, _r, _ri);
};

window.N_0x74698374c45701d2 = function () {
	return _in("0x74698374C45701D2", _r, _ri);
};

window.N_0x74a0fd0688f1ee45 = function (p0) {
	return _in("0x74A0FD0688F1EE45", p0, _r);
};

window.N_0x74bd83ea840f6bc9 = function () {
	return _in("0x74BD83EA840F6BC9", _r);
};

window.N_0x74c180030fde4b69 = function (p0) {
	return _in("0x74C180030FDE4B69", p0);
};

window.N_0x74de2e8739086740 = function () {
	return _in("0x74DE2E8739086740");
};

window.N_0x74fb3e29e6d10fa9 = function () {
	return _in("0x74FB3E29E6D10FA9", _r, _ri);
};

window.N_0x7543bb439f63792b = function (bufferSize) {
	return _in("0x7543BB439F63792B", _i, bufferSize, _r);
};

window.N_0x756ae6e962168a04 = function (p0, p1) {
	return _in("0x756AE6E962168A04", p0, p1);
};

window.N_0x75773e11ba459e90 = function (p0, p1) {
	return _in("0x75773E11BA459E90", p0, p1);
};

window.N_0x758a5c1b3b1e1990 = function (p0) {
	return _in("0x758A5C1B3B1E1990", p0);
};

window.N_0x759299c5bb31d2a9 = function (p0, p1) {
	return _in("0x759299C5BB31D2A9", p0, p1, _r, _ri);
};

window.N_0x759650634f07b6b4 = function (p0) {
	return _in("0x759650634F07B6B4", p0, _r);
};

window.N_0x75a16c3da34f1245 = function (p0, p1) {
	return _in("0x75A16C3DA34F1245", p0, p1);
};

window.N_0x75ba1cb3b7d40caf = function (ped, p1) {
	return _in("0x75BA1CB3B7D40CAF", ped, p1);
};

window.N_0x75d3691713c3b05a = function () {
	return _in("0x75D3691713C3B05A");
};

window.N_0x762db2d380b48d04 = function (p0) {
	return _in("0x762DB2D380B48D04", p0);
};

window.N_0x7669f9e39dc17063 = function () {
	return _in("0x7669F9E39DC17063");
};

window.N_0x7679cc1bcebe3d4c = function (p0, p1, p2) {
	return _in("0x7679CC1BCEBE3D4C", p0, _fv(p1), _fv(p2));
};

window.N_0x768ff8961ba904d6 = function (funcData) {
	return _in("0x768FF8961BA904D6", funcData, _r);
};

window.N_0x769951e2455e2eb5 = function () {
	return _in("0x769951E2455E2EB5", _r, _ri);
};

window.N_0x76bba2cee66d47e9 = function (p0) {
	return _in("0x76BBA2CEE66D47E9", p0, _r, _ri);
};

window.N_0x76bf03fadbf154f5 = function () {
	return _in("0x76BF03FADBF154F5", _r, _ri);
};

window.N_0x76d26a22750e849e = function (p0) {
	return _in("0x76D26A22750E849E", p0);
};

window.N_0x774bd811f656a122 = function (radioStation, p1) {
	return _in("0x774BD811F656A122", _ts(radioStation), p1);
};

window.N_0x77758139ec9b66c7 = function (p0) {
	return _in("0x77758139EC9B66C7", p0);
};

window.N_0x7792424aa0eac32e = function () {
	return _in("0x7792424AA0EAC32E");
};

window.N_0x77f16b447824da6c = function (p0) {
	return _in("0x77F16B447824DA6C", p0);
};

window.N_0x77f33f2ccf64b3aa = function (object, p1) {
	return _in("0x77F33F2CCF64B3AA", object, p1);
};

window.N_0x77faddcbe3499df7 = function (p0) {
	return _in("0x77FADDCBE3499DF7", p0);
};

window.N_0x77fe3402004cd1b0 = function (p0) {
	return _in("0x77FE3402004CD1B0", p0);
};

window.N_0x7808619f31ff22db = function () {
	return _in("0x7808619F31FF22DB", _r, _ri);
};

window.N_0x781de8fa214e87d2 = function (ped, p1) {
	return _in("0x781DE8FA214E87D2", ped, _ts(p1));
};

window.N_0x78321bea235fd8cd = function (p0, p1) {
	return _in("0x78321BEA235FD8CD", p0, p1, _r);
};

window.N_0x784002a632822099 = function (ped) {
	return _in("0x784002A632822099", ped, _r);
};

window.N_0x784ba7e0eceb4178 = function (p0, x, y, z) {
	return _in("0x784BA7E0ECEB4178", p0, _fv(x), _fv(y), _fv(z));
};

window.N_0x78857fc65cadb909 = function (p0) {
	return _in("0x78857FC65CADB909", p0);
};

window.N_0x788e7fd431bd67f1 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x788E7FD431BD67F1", p0, p1, p2, p3, p4, p5);
};

window.N_0x78c0d93253149435 = function () {
	return _in("0x78C0D93253149435", _r, _ri);
};

window.N_0x78c4e9961db3eb5b = function (p0, p1) {
	return _in("0x78C4E9961DB3EB5B", p0, p1);
};

window.N_0x78ceee41f49f421f = function (p0, p1) {
	return _in("0x78CEEE41F49F421F", p0, p1);
};

window.N_0x78e8e3a640178255 = function (entity) {
	return _in("0x78E8E3A640178255", entity);
};

window.N_0x792271ab35c356a4 = function (p0, p1) {
	return _in("0x792271AB35C356A4", p0, p1);
};

window.N_0x793ff272d5b365f4 = function () {
	return _in("0x793FF272D5B365F4", _r, _ri);
};

window.N_0x796a877e459b99ea = function (p0, p1, p2, p3) {
	return _in("0x796A877E459B99EA", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0x796a87b3b68d1f3d = function (p0) {
	return _in("0x796A87B3B68D1F3D", _ii(p0) /* may be optional */, _r);
};

window.N_0x799017f9e3b10112 = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x799017F9E3B10112", p0, p1, p2, p3, p4, p5, p6, p7);
};

window.N_0x79ab33f0fbfac40c = function (p0) {
	return _in("0x79AB33F0FBFAC40C", p0);
};

window.N_0x79df7e806202ce01 = function (p0, p1) {
	return _in("0x79DF7E806202CE01", p0, p1);
};

window.N_0x7a42b2e236e71415 = function () {
	return _in("0x7A42B2E236E71415");
};

window.N_0x7a73d05a607734c7 = function (ped) {
	return _in("0x7A73D05A607734C7", ped);
};

window.N_0x7ac24eab6d74118d = function (p0) {
	return _in("0x7AC24EAB6D74118D", p0, _r);
};

window.N_0x7ac752103856fb20 = function (p0) {
	return _in("0x7AC752103856FB20", p0);
};

window.N_0x7ae0589093a2e088 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x7AE0589093A2E088", p0, p1, p2, p3, p4, p5, _r, _ri);
};

window.N_0x7b18da61f6bae9d5 = function (p0) {
	return _in("0x7B18DA61F6BAE9D5", p0);
};

window.N_0x7b21e0bb01e8224a = function (p0) {
	return _in("0x7B21E0BB01E8224A", p0);
};

window.N_0x7b226c785a52a0a9 = function () {
	return _in("0x7B226C785A52A0A9", _r, _ri);
};

window.N_0x7b7723747ccb55b6 = function (gamerTagId, string) {
	return _in("0x7B7723747CCB55B6", gamerTagId, _ts(string));
};

window.N_0x7b8a361c1813fbef = function () {
	return _in("0x7B8A361C1813FBEF");
};

window.N_0x7bbe7ff626a591fe = function (p0) {
	return _in("0x7BBE7FF626A591FE", p0);
};

window.N_0x7bf1a54ae67ac070 = function (p0, p1, p2) {
	return _in("0x7BF1A54AE67AC070", p0, p1, p2);
};

window.N_0x7c0043fdff6436bc = function (vehicle) {
	return _in("0x7C0043FDFF6436BC", vehicle);
};

window.N_0x7c06330bfdda182e = function (p0) {
	return _in("0x7C06330BFDDA182E", p0);
};

window.N_0x7c226d5346d4d10a = function (p0) {
	return _in("0x7C226D5346D4D10A", p0);
};

window.N_0x7c4fccd2e4deb394 = function () {
	return _in("0x7C4FCCD2E4DEB394", _r);
};

window.N_0x7c9c0b1eeb1f9072 = function (p0) {
	return _in("0x7C9C0B1EEB1F9072", _fv(p0));
};

window.N_0x7cd934010e115c2c = function (ped) {
	return _in("0x7CD934010E115C2C", ped, _r, _ri);
};

window.N_0x7cdc8c3b89f661b3 = function (playerPed, p1) {
	return _in("0x7CDC8C3B89F661B3", playerPed, _ch(p1));
};

window.N_0x7d36291161859389 = function (p0) {
	return _in("0x7D36291161859389", p0);
};

window.N_0x7d395ea61622e116 = function (p0) {
	return _in("0x7D395EA61622E116", p0);
};

window.N_0x7d41e9d2d17c5b2d = function (p0) {
	return _in("0x7D41E9D2D17C5B2D", p0, _r, _ri);
};

window.N_0x7d6f9a3ef26136a0 = function (vehicle, p1, p2) {
	return _in("0x7D6F9A3EF26136A0", vehicle, p1, p2);
};

window.N_0x7d7a2e43e74e2eb8 = function (p0) {
	return _in("0x7D7A2E43E74E2EB8", p0);
};

window.N_0x7d8ba05688ad64c7 = function (p0) {
	return _in("0x7D8BA05688AD64C7", p0);
};

window.N_0x7db18ca8cad5b098 = function () {
	return _in("0x7DB18CA8CAD5B098", _r, _ri);
};

window.N_0x7db53b37a2f211a0 = function () {
	return _in("0x7DB53B37A2F211A0", _r, _ri);
};

window.N_0x7e07c78925d5fd96 = function (p0) {
	return _in("0x7E07C78925D5FD96", p0, _r, _ri);
};

window.N_0x7e17be53e1aaabaf = function () {
	return _in("0x7E17BE53E1AAABAF", _i, _i, _i);
};

window.N_0x7e2bd3ef6c205f09 = function (p0, p1) {
	return _in("0x7E2BD3EF6C205F09", p0, p1);
};

window.N_0x7e6946f68a38b74f = function (p0) {
	return _in("0x7E6946F68A38B74F", p0, _r);
};

window.N_0x7ec3c679d0e7e46b = function (p0, p1, p2, p3) {
	return _in("0x7EC3C679D0E7E46B", p0, p1, p2, p3);
};

window.N_0x7ec6f9a478a6a512 = function () {
	return _in("0x7EC6F9A478A6A512");
};

window.N_0x7eec2a316c250073 = function (p0, p1, p2) {
	return _in("0x7EEC2A316C250073", p0, p1, p2);
};

window.N_0x7ef7649b64d7ff10 = function (p0) {
	return _in("0x7EF7649B64D7FF10", p0, _r, _ri);
};

window.N_0x7f2c4cdf2e82df4c = function (p0) {
	return _in("0x7F2C4CDF2E82DF4C", p0, _r);
};

window.N_0x7f2f4f13ac5257ef = function (p0) {
	return _in("0x7F2F4F13AC5257EF", p0, _r);
};

window.N_0x7f8f6405f4777af6 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x7F8F6405F4777AF6", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), p9, _r, _rf);
};

window.N_0x7f96f23fa9b73327 = function (modelHash) {
	return _in("0x7F96F23FA9B73327", _ch(modelHash));
};

window.N_0x7fa5d82b8f58ec06 = function () {
	return _in("0x7FA5D82B8F58EC06", _r, _ri);
};

window.N_0x7fcc39c46c3c03bd = function (p0) {
	return _in("0x7FCC39C46C3C03BD", p0, _r);
};

window.N_0x7fd2990af016795e = function (p2, p3, p4) {
	return _in("0x7FD2990AF016795E", _i, _i, p2, p3, p4, _r, _ri);
};

window.N_0x80054d7fcc70eec6 = function (p0) {
	return _in("0x80054D7FCC70EEC6", p0);
};

window.N_0x801879a9b4f4b2fb = function () {
	return _in("0x801879A9B4F4B2FB", _r, _ri);
};

window.N_0x806058bbdc136e06 = function () {
	return _in("0x806058BBDC136E06");
};

window.N_0x8098c8d6597aae18 = function (p0) {
	return _in("0x8098C8D6597AAE18", p0, _r, _ri);
};

window.N_0x80c2fd58d720c801 = function (inputGroup, control, p2) {
	return _in("0x80C2FD58D720C801", inputGroup, control, p2, _r, _s);
};

window.N_0x80e3357fdef45c21 = function (p0, p1) {
	return _in("0x80E3357FDEF45C21", p0, p1);
};

window.N_0x80ec114669daeff4 = function () {
	return _in("0x80EC114669DAEFF4", _r, _rf);
};

window.N_0x80fe4f3ab4e1b62a = function () {
	return _in("0x80FE4F3AB4E1B62A");
};

window.N_0x8147fff6a718e1ad = function (p0) {
	return _in("0x8147FFF6A718E1AD", p0, _r, _ri);
};

window.N_0x814af7dcaacc597b = function (p0) {
	return _in("0x814AF7DCAACC597B", p0);
};

window.N_0x815f18ad865f057f = function (p0) {
	return _in("0x815F18AD865F057F", p0, _r, _ri);
};

window.N_0x817b86108eb94e51 = function (p0) {
	return _in("0x817B86108EB94E51", p0, _i, _i, _i, _i, _i, _i, _i, _i);
};

window.N_0x8181ce2f25cb9bb7 = function (p0, p1) {
	return _in("0x8181CE2F25CB9BB7", p0, p1, _r, _ri);
};

window.N_0x81aa517fbba05d39 = function (p0) {
	return _in("0x81AA517FBBA05D39", p0, _r, _ri);
};

window.N_0x81cbae94390f9f89 = function () {
	return _in("0x81CBAE94390F9F89");
};

window.N_0x820e9892a77e97cd = function (p0, p1) {
	return _in("0x820E9892A77E97CD", p0, p1);
};

window.N_0x821418c727fcacd7 = function (p0) {
	return _in("0x821418C727FCACD7", p0);
};

window.N_0x821fdc827d6f4090 = function (p0) {
	return _in("0x821FDC827D6F4090", p0);
};

window.N_0x82377b65e943f72d = function (p0) {
	return _in("0x82377B65E943F72D", p0, _r);
};

window.N_0x8269816f6cfd40f8 = function (name) {
	return _in("0x8269816F6CFD40F8", _i, _ts(name));
};

window.N_0x826d1ee4d1cafc78 = function (p0, p1) {
	return _in("0x826D1EE4D1CAFC78", p0, p1);
};

window.N_0x8290252fff36acb5 = function (p0, red, green, blue) {
	return _in("0x8290252FFF36ACB5", p0, red, green, blue);
};

window.N_0x82a2b386716608f1 = function () {
	return _in("0x82A2B386716608F1", _r, _ri);
};

window.N_0x82acc484ffa3b05f = function (p0) {
	return _in("0x82ACC484FFA3B05F", p0, _r, _ri);
};

window.N_0x82cedc33687e1f50 = function (p0) {
	return _in("0x82CEDC33687E1F50", p0);
};

window.N_0x82ebb79e258fa2b7 = function (entity, interiorID) {
	return _in("0x82EBB79E258FA2B7", entity, interiorID);
};

window.N_0x82fde6a57ee4ee44 = function (ped, weaponhash, p2, p3, p4, p5) {
	return _in("0x82FDE6A57EE4EE44", ped, _ch(weaponhash), _fv(p2), _fv(p3), _fv(p4), p5, _r, _ri);
};

window.N_0x83660b734994124d = function (p0, p1, p2) {
	return _in("0x83660B734994124D", p0, p1, p2, _r, _ri);
};

window.N_0x838da0936a24ed4d = function (p0, p1) {
	return _in("0x838DA0936A24ED4D", p0, p1);
};

window.N_0x83a169eabcdb10a2 = function (p0, p1) {
	return _in("0x83A169EABCDB10A2", p0, p1);
};

window.N_0x83b8201ed82a9a2d = function (p0, p1, p2, p3) {
	return _in("0x83B8201ED82A9A2D", p0, p1, p2, _fv(p3));
};

window.N_0x83bcce3224735f05 = function (filename) {
	return _in("0x83BCCE3224735F05", _ts(filename), _r);
};

window.N_0x83f28ce49fbbffba = function (p0, p1, p2) {
	return _in("0x83F28CE49FBBFFBA", p0, p1, p2, _r);
};

window.N_0x83f813570ff519de = function (p0, p1) {
	return _in("0x83F813570FF519DE", p0, p1);
};

window.N_0x83fe8d7229593017 = function () {
	return _in("0x83FE8D7229593017");
};

window.N_0x8416fe4e4629d7d7 = function (p0) {
	return _in("0x8416FE4E4629D7D7", _ts(p0), _r);
};

window.N_0x84698ab38d0c6636 = function (hash) {
	return _in("0x84698AB38D0C6636", _ch(hash), _r);
};

window.N_0x848b66100ee33b05 = function (p0) {
	return _in("0x848B66100EE33B05", p0);
};

window.N_0x84a810b375e69c0e = function () {
	return _in("0x84A810B375E69C0E", _r, _ri);
};

window.N_0x84c0116d012e8fc2 = function (p0) {
	return _in("0x84C0116D012E8FC2", p0);
};

window.N_0x84de3b5fb3e666f0 = function (p0) {
	return _in("0x84DE3B5FB3E666F0", _ii(p0) /* may be optional */, _r);
};

window.N_0x84dfc579c2fc214c = function (p0) {
	return _in("0x84DFC579C2FC214C", p0);
};

window.N_0x84ea99c62cb3ef0c = function (p0, p1, p2) {
	return _in("0x84EA99C62CB3EF0C", p0, p1, p2);
};

window.N_0x84fd40f56075e816 = function (p0) {
	return _in("0x84FD40F56075E816", _fv(p0));
};

window.N_0x851cd923176eba7c = function () {
	return _in("0x851CD923176EBA7C");
};

window.N_0x8533cafde1f0f336 = function (p0) {
	return _in("0x8533CAFDE1F0F336", p0, _r, _ri);
};

window.N_0x85535acf97fc0969 = function (p0) {
	return _in("0x85535ACF97FC0969", p0, _r, _ri);
};

window.N_0x855bc38818f6f684 = function () {
	return _in("0x855BC38818F6F684", _r);
};

window.N_0x8586789730b10caf = function (p0, p1, p2, p3) {
	return _in("0x8586789730B10CAF", p0, p1, p2, p3);
};

window.N_0x858ec9fd25de04aa = function (p0, p1) {
	return _in("0x858EC9FD25DE04AA", p0, p1);
};

window.N_0x85a0ef54a500882c = function (p0) {
	return _in("0x85A0EF54A500882C", _ii(p0) /* may be optional */, _r);
};

window.N_0x85b6c850546fdde2 = function (p0, p1, p2, p3, p4) {
	return _in("0x85B6C850546FDDE2", p0, p1, p2, p3, p4, _r);
};

window.N_0x85f6c9aba1de2bcf = function () {
	return _in("0x85F6C9ABA1DE2BCF", _r, _ri);
};

window.N_0x867458251d47ccb2 = function (p0, p1) {
	return _in("0x867458251D47CCB2", p0, p1);
};

window.N_0x869daacbbe9fa006 = function () {
	return _in("0x869DAACBBE9FA006", _r, _ri);
};

window.N_0x86b4b6212cb8b627 = function (p0, p1) {
	return _in("0x86B4B6212CB8B627", p0, p1);
};

window.N_0x86e0660e4f5c956d = function () {
	return _in("0x86E0660E4F5C956D");
};

window.N_0x870b8b7a766615c8 = function (p0, p1, p2) {
	return _in("0x870B8B7A766615C8", p0, p1, p2);
};

window.N_0x876928dddfccc9cd = function () {
	return _in("0x876928DDDFCCC9CD", _r, _ri);
};

window.N_0x878c75c09fbdb942 = function () {
	return _in("0x878C75C09FBDB942", _r, _ri);
};

window.N_0x87ddeb611b329a9c = function (p0) {
	return _in("0x87DDEB611B329A9C", p0);
};

window.N_0x87e0052f08bd64e6 = function (p0, p1) {
	return _in("0x87E0052F08BD64E6", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x87e5c46c187fe0ae = function (p0, p1) {
	return _in("0x87E5C46C187FE0AE", p0, p1, _r, _ri);
};

window.N_0x87eb7a3ffcb314db = function (p0) {
	return _in("0x87EB7A3FFCB314DB", _ii(p0) /* may be optional */, _r);
};

window.N_0x8806cebfabd3ce05 = function (p0) {
	return _in("0x8806CEBFABD3CE05", p0, _r);
};

window.N_0x88087ee1f28024ae = function (p0) {
	return _in("0x88087EE1F28024AE", p0);
};

window.N_0x8817605c2ba76200 = function () {
	return _in("0x8817605C2BA76200");
};

window.N_0x883d79c4071e18b3 = function () {
	return _in("0x883D79C4071E18B3", _r, _ri);
};

window.N_0x88578f6ec36b4a3a = function (p0, p1) {
	return _in("0x88578F6EC36B4A3A", p0, p1, _r, _ri);
};

window.N_0x886913bbeaca68c1 = function (p0) {
	return _in("0x886913BBEACA68C1", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0x8881c98a31117998 = function (p0) {
	return _in("0x8881C98A31117998", p0);
};

window.N_0x88b588b41ff7868e = function () {
	return _in("0x88B588B41FF7868E", _r, _ri);
};

window.N_0x88bc673ca9e0ae99 = function (vehicle, p1) {
	return _in("0x88BC673CA9E0AE99", vehicle, p1);
};

window.N_0x88e32db8c1a4aa4b = function (ped, p1) {
	return _in("0x88E32DB8C1A4AA4B", ped, _fv(p1));
};

window.N_0x88eaec617cd26926 = function (p0, p1) {
	return _in("0x88EAEC617CD26926", _ch(p0), p1);
};

window.N_0x89023fbbf9200e9f = function () {
	return _in("0x89023FBBF9200E9F", _r, _ri);
};

window.N_0x89215ec747df244a = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x89215EC747DF244A", _fv(p0), p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, p8, _r, _ri);
};

window.N_0x892b6ab8f33606f5 = function (p0, p1) {
	return _in("0x892B6AB8F33606F5", p0, p1);
};

window.N_0x8951eb9c6906d3c8 = function () {
	return _in("0x8951EB9C6906D3C8");
};

window.N_0x897433d292b44130 = function () {
	return _in("0x897433D292B44130", _i, _i, _r);
};

window.N_0x8989cbd7b4e82534 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x8989CBD7B4E82534", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x89d630cf5ea96d23 = function (vehicle, entity) {
	return _in("0x89D630CF5EA96D23", vehicle, entity, _r);
};

window.N_0x8a24b067d175a7bd = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x8A24B067D175A7BD", p0, p1, p2, p3, p4, p5, _r, _ri);
};

window.N_0x8a35c742130c6080 = function (p0) {
	return _in("0x8A35C742130C6080", p0, _i, _i);
};

window.N_0x8a694d7a68f8dc38 = function (p0, p1, p2) {
	return _in("0x8A694D7A68F8DC38", p0, _ts(p1), _ts(p2));
};

window.N_0x8a7a40100edfec58 = function (interiorID, roomName) {
	return _in("0x8A7A40100EDFEC58", interiorID, _ts(roomName));
};

window.N_0x8a800daccc0da55d = function () {
	return _in("0x8A800DACCC0DA55D");
};

window.N_0x8aa464d4e0f6accd = function () {
	return _in("0x8AA464D4E0F6ACCD", _r, _ri);
};

window.N_0x8aa9180de2fedd45 = function (vehicle, p1) {
	return _in("0x8AA9180DE2FEDD45", vehicle, p1);
};

window.N_0x8abe8608576d9ce3 = function (p0, p1, p2, p3) {
	return _in("0x8ABE8608576D9CE3", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r, _rf);
};

window.N_0x8b0c2964ba471961 = function () {
	return _in("0x8B0C2964BA471961", _r, _ri);
};

window.N_0x8b4ffc790ca131ef = function (p0, p1, p2, p3) {
	return _in("0x8B4FFC790CA131EF", p0, p1, p2, p3, _r, _ri);
};

window.N_0x8b9cdbd6c566c38c = function () {
	return _in("0x8B9CDBD6C566C38C", _r, _ri);
};

window.N_0x8bbacbf51da047a8 = function (p0) {
	return _in("0x8BBACBF51DA047A8", p0);
};

window.N_0x8bc515bae4aaf8ff = function (p0) {
	return _in("0x8BC515BAE4AAF8FF", p0, _r, _ri);
};

window.N_0x8bd6c6dea20e82c6 = function (p0) {
	return _in("0x8BD6C6DEA20E82C6", p0, _r, _ri);
};

window.N_0x8bdc7bfc57a81e76 = function (x, y, z) {
	return _in("0x8BDC7BFC57A81E76", _fv(x), _fv(y), _fv(z), _f, _v, _r);
};

window.N_0x8bf907833be275de = function (p0, p1) {
	return _in("0x8BF907833BE275DE", _fv(p0), _fv(p1));
};

window.N_0x8bfceb5ea1b161b6 = function () {
	return _in("0x8BFCEB5EA1B161B6", _r, _ri);
};

window.N_0x8c33220c8d78ca0d = function (p0, p1) {
	return _in("0x8C33220C8D78CA0D", p0, p1);
};

window.N_0x8c4f3bf23b6237db = function (ped, p1, p2) {
	return _in("0x8C4F3BF23B6237DB", ped, p1, p2, _r, _ri);
};

window.N_0x8c8d2739ba44af0f = function (p0) {
	return _in("0x8C8D2739BA44AF0F", p0, _r);
};

window.N_0x8c9d11605e59d955 = function (p0) {
	return _in("0x8C9D11605E59D955", p0);
};

window.N_0x8caab2bd3ea58bd4 = function (p0) {
	return _in("0x8CAAB2BD3EA58BD4", p0);
};

window.N_0x8cc469ab4d349b7c = function (p0, p1, p2) {
	return _in("0x8CC469AB4D349B7C", p0, _ts(p1), _ii(p2) /* may be optional */, _r);
};

window.N_0x8cde909a0370bb3a = function (p0) {
	return _in("0x8CDE909A0370BB3A", p0);
};

window.N_0x8d11e61a4abf49cc = function () {
	return _in("0x8D11E61A4ABF49CC", _r);
};

window.N_0x8d30f648014a92b5 = function () {
	return _in("0x8D30F648014A92B5", _r, _ri);
};

window.N_0x8d74e26f54b4e5c3 = function (p0) {
	return _in("0x8D74E26F54B4E5C3", _ts(p0));
};

window.N_0x8d768602adef2245 = function (p0, p1) {
	return _in("0x8D768602ADEF2245", p0, p1);
};

window.N_0x8d7a43ec6a5fea45 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x8D7A43EC6A5FEA45", p0, p1, p2, p3, p4, p5, p6, p7, p8, _r, _ri);
};

window.N_0x8d8adb562f09a245 = function (p0) {
	return _in("0x8D8ADB562F09A245", p0);
};

window.N_0x8d9df6eca8768583 = function (p0) {
	return _in("0x8D9DF6ECA8768583", p0);
};

window.N_0x8e243837643d9583 = function (p0, p1, p2, p3) {
	return _in("0x8E243837643D9583", p0, p1, p2, p3);
};

window.N_0x8e2a065abdae6994 = function () {
	return _in("0x8E2A065ABDAE6994");
};

window.N_0x8ea86df356801c7d = function (p0, p1) {
	return _in("0x8EA86DF356801C7D", p0, p1);
};

window.N_0x8ec74ceb042e7cff = function (p0) {
	return _in("0x8EC74CEB042E7CFF", p0);
};

window.N_0x8ef5573a1f801a5c = function (p0) {
	return _in("0x8EF5573A1F801A5C", p0, _i, _i, _r);
};

window.N_0x8efccf6ec66d85e4 = function (p3, p4) {
	return _in("0x8EFCCF6EC66D85E4", _i, _i, _i, p3, p4, _r, _ri);
};

window.N_0x8f08017f9d7c47bd = function (p0, p2) {
	return _in("0x8F08017F9D7C47BD", p0, _i, p2, _r);
};

window.N_0x8f5d1ad832aeb06c = function (p0) {
	return _in("0x8F5D1AD832AEB06C", p0, _r, _ri);
};

window.N_0x8f5ea1c01d65a100 = function (p0) {
	return _in("0x8F5EA1C01D65A100", p0, _r);
};

window.N_0x8f719973e1445ba2 = function (vehicle, p1) {
	return _in("0x8F719973E1445BA2", vehicle, p1);
};

window.N_0x8fa9c42fc5d7c64b = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x8FA9C42FC5D7C64B", p0, p1, _fv(p2), _fv(p3), _fv(p4), p5);
};

window.N_0x8fd89a6240813fd0 = function (ped, p1, p2) {
	return _in("0x8FD89A6240813FD0", ped, p1, p2);
};

window.N_0x900086f371220b6f = function (p0, p1, p2) {
	return _in("0x900086F371220B6F", p0, p1, p2);
};

window.N_0x9007a2f21dc108d4 = function (p0, p1) {
	return _in("0x9007A2F21DC108D4", p0, _fv(p1));
};

window.N_0x9049fe339d5f6f6f = function () {
	return _in("0x9049FE339D5F6F6F", _r, _ri);
};

window.N_0x90a6526cf0381030 = function (p0, p2, p3) {
	return _in("0x90A6526CF0381030", p0, _i, p2, p3, _r);
};

window.N_0x90a78ecaa4e78453 = function () {
	return _in("0x90A78ECAA4E78453", _r, _ri);
};

window.N_0x90d0622866e80445 = function (p0, p1) {
	return _in("0x90D0622866E80445", p0, _ts(p1));
};

window.N_0x9135584d09a3437e = function () {
	return _in("0x9135584D09A3437E", _r, _ri);
};

window.N_0x918c7b2d2ff3928b = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x918C7B2D2FF3928B", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _r, _ri);
};

window.N_0x919b3c98ed8292f9 = function (p0) {
	return _in("0x919B3C98ED8292F9", p0, _r);
};

window.N_0x91a0bd635321f145 = function (vehicle, p1) {
	return _in("0x91A0BD635321F145", vehicle, p1);
};

window.N_0x91b87c55093de351 = function () {
	return _in("0x91B87C55093DE351", _r, _ri);
};

window.N_0x91d6dd290888cbab = function () {
	return _in("0x91D6DD290888CBAB", _r);
};

window.N_0x91ef34584710be99 = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x91EF34584710BE99", p0, p1, p2, p3, p4, p5, p6, p7, _r, _ri);
};

window.N_0x91ef6ee6419e5b97 = function (p0) {
	return _in("0x91EF6EE6419E5B97", p0);
};

window.N_0x920d853f3e17f1da = function (interiorID, roomHashKey) {
	return _in("0x920D853F3E17F1DA", interiorID, _ch(roomHashKey));
};

window.N_0x921ce12c489c4c41 = function (PlayerID) {
	return _in("0x921CE12C489C4C41", PlayerID, _r);
};

window.N_0x9237e334f6e43156 = function (p0) {
	return _in("0x9237E334F6E43156", p0, _r, _ri);
};

window.N_0x9245e81072704b8a = function (p0) {
	return _in("0x9245E81072704B8A", p0);
};

window.N_0x9251b6abf2d0a5b4 = function (p0, p1) {
	return _in("0x9251B6ABF2D0A5B4", p0, p1);
};

window.N_0x92523b76657a517d = function (p0, p1) {
	return _in("0x92523B76657A517D", p0, _fv(p1), _r, _ri);
};

window.N_0x92790862e36c2ada = function () {
	return _in("0x92790862E36C2ADA");
};

window.N_0x928dbfb892638ef3 = function () {
	return _in("0x928DBFB892638EF3");
};

window.N_0x92aefb5f6e294023 = function (object, p1, p2) {
	return _in("0x92AEFB5F6E294023", object, p1, p2);
};

window.N_0x92c360b5f15d2302 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x92C360B5F15D2302", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0x92ccc17a7a2285da = function () {
	return _in("0x92CCC17A7A2285DA");
};

window.N_0x92da6e70ef249bd1 = function (p0, p1) {
	return _in("0x92DA6E70EF249BD1", _ts(p0), _ii(p1) /* may be optional */, _r);
};

window.N_0x92f0da1e27db96dc = function (p0) {
	return _in("0x92F0DA1E27DB96DC", p0);
};

window.N_0x930de22f07b1cce3 = function (p0) {
	return _in("0x930DE22F07B1CCE3", p0, _r, _ri);
};

window.N_0x930f504203f561c9 = function (p0) {
	return _in("0x930F504203F561C9", p0);
};

window.N_0x933bbeeb8c61b5f4 = function () {
	return _in("0x933BBEEB8C61B5F4", _r, _ri);
};

window.N_0x941e5306bcd7c2c7 = function () {
	return _in("0x941E5306BCD7C2C7", _r, _ri);
};

window.N_0x94538037ee44f5cf = function (p0) {
	return _in("0x94538037EE44F5CF", p0);
};

window.N_0x9465e683b12d3f6b = function () {
	return _in("0x9465E683B12D3F6B");
};

window.N_0x9489659372a81585 = function () {
	return _in("0x9489659372A81585", _r, _ri);
};

window.N_0x949f397a288b28b3 = function (p0) {
	return _in("0x949F397A288B28B3", _fv(p0));
};

window.N_0x94a8394d150b013a = function () {
	return _in("0x94A8394D150B013A", _r, _ri);
};

window.N_0x94f12abf9c79e339 = function (p0) {
	return _in("0x94F12ABF9C79E339", p0, _r, _ri);
};

window.N_0x952f06beecd775cc = function (p0, p1, p2, p3) {
	return _in("0x952F06BEECD775CC", p0, p1, p2, p3);
};

window.N_0x953563ce563143af = function (p0) {
	return _in("0x953563CE563143AF", p0, _r, _ri);
};

window.N_0x95a7dabddbb78ae7 = function () {
	return _in("0x95A7DABDDBB78AE7", _i, _i);
};

window.N_0x95cf53b3d687f9fa = function (vehicle) {
	return _in("0x95CF53B3D687F9FA", vehicle);
};

window.N_0x95cf81bd06ee1887 = function () {
	return _in("0x95CF81BD06EE1887");
};

window.N_0x95eb5e34f821babe = function (p0, p1, p2) {
	return _in("0x95EB5E34F821BABE", p0, p1, p2, _r, _ri);
};

window.N_0x9614b71f8adb982b = function () {
	return _in("0x9614B71F8ADB982B", _r, _ri);
};

window.N_0x9641588dab93b4b5 = function (p0) {
	return _in("0x9641588DAB93B4B5", p0);
};

window.N_0x966dd84fb6a46017 = function () {
	return _in("0x966DD84FB6A46017");
};

window.N_0x967278682cb6967a = function (p0, p1, p2, p3) {
	return _in("0x967278682CB6967A", p0, p1, p2, p3);
};

window.N_0x9689123e3f213aa5 = function () {
	return _in("0x9689123E3F213AA5", _r);
};

window.N_0x96e6d5150dbf1c09 = function (p0, p1, p2) {
	return _in("0x96E6D5150DBF1C09", p0, p1, p2);
};

window.N_0x96ee0eba0163df80 = function (p0, p1) {
	return _in("0x96EE0EBA0163DF80", p0, p1);
};

window.N_0x9737a37136f07e75 = function (vehicle, toggle) {
	return _in("0x9737A37136F07E75", vehicle, toggle);
};

window.N_0x973d76aa760a6cb6 = function (p0) {
	return _in("0x973D76AA760A6CB6", p0);
};

window.N_0x975d66a0bc17064c = function (p0) {
	return _in("0x975D66A0BC17064C", p0);
};

window.N_0x9769f811d1785b03 = function (player, x, y, z, p4, p5) {
	return _in("0x9769F811D1785B03", player, _fv(x), _fv(y), _fv(z), p4, p5);
};

window.N_0x9777734dad16992f = function () {
	return _in("0x9777734DAD16992F", _r, _ri);
};

window.N_0x977ca98939e82e4b = function (p0, p1) {
	return _in("0x977CA98939E82E4B", p0, p1);
};

window.N_0x9780f32bcaf72431 = function () {
	return _in("0x9780F32BCAF72431", _r, _rf);
};

window.N_0x97dd4c5944cc2e6a = function (player, toggle) {
	return _in("0x97DD4C5944CC2E6A", player, toggle);
};

window.N_0x97e7e2c04245115b = function (p0) {
	return _in("0x97E7E2C04245115B", p0);
};

window.N_0x98215325a695e78a = function (p0) {
	return _in("0x98215325A695E78A", p0);
};

window.N_0x98c3cf913d895111 = function (p0, p1) {
	return _in("0x98C3CF913D895111", p0, p1, _r, _ri);
};

window.N_0x98c4fe6ec34154ca = function (p0, ped, p2, posX, posY, posZ) {
	return _in("0x98C4FE6EC34154CA", _ts(p0), ped, p2, _fv(posX), _fv(posY), _fv(posZ), _r);
};

window.N_0x98e2bc1ca26287c3 = function () {
	return _in("0x98E2BC1CA26287C3");
};

window.N_0x98edf76a7271e4f2 = function () {
	return _in("0x98EDF76A7271E4F2");
};

window.N_0x99093f60746708ca = function (p0) {
	return _in("0x99093F60746708CA", p0, _r, _ri);
};

window.N_0x9911f4a24485f653 = function (p0) {
	return _in("0x9911F4A24485F653", p0);
};

window.N_0x993cbe59d350d225 = function (p0) {
	return _in("0x993CBE59D350D225", p0, _r);
};

window.N_0x996dd1e1e02f1008 = function () {
	return _in("0x996DD1E1E02F1008", _r, _ri);
};

window.N_0x998e18ceb44487fc = function (p0, p1, p2, p3) {
	return _in("0x998E18CEB44487FC", p0, p1, p2, p3);
};

window.N_0x99ac7f0d8b9c893d = function (p0) {
	return _in("0x99AC7F0D8B9C893D", _fv(p0));
};

window.N_0x99ad4cccb128cbc9 = function (vehicle) {
	return _in("0x99AD4CCCB128CBC9", vehicle);
};

window.N_0x99b72c7abde5c910 = function (ped, player) {
	return _in("0x99B72C7ABDE5C910", ped, player, _r);
};

window.N_0x99cad8e7afdb60fa = function (vehicle, p1, p2) {
	return _in("0x99CAD8E7AFDB60FA", vehicle, _fv(p1), _fv(p2));
};

window.N_0x9a53ded9921de990 = function (p0, p1) {
	return _in("0x9A53DED9921DE990", p0, p1);
};

window.N_0x9a62ec95ae10e011 = function () {
	return _in("0x9A62EC95AE10E011", _r, _ri);
};

window.N_0x9a75585fb2e54fad = function (p0, p1, p2, p3) {
	return _in("0x9A75585FB2E54FAD", _fv(p0), _fv(p1), _fv(p2), _fv(p3));
};

window.N_0x9a77dfd295e29b09 = function (p0, p1) {
	return _in("0x9A77DFD295E29B09", p0, p1);
};

window.N_0x9a83f5f9963775ef = function (vehicle) {
	return _in("0x9A83F5F9963775EF", vehicle, _r);
};

window.N_0x9aa47fff660cb932 = function (p0, p1) {
	return _in("0x9AA47FFF660CB932", p0, _fv(p1));
};

window.N_0x9ac92eed5e4793ab = function () {
	return _in("0x9AC92EED5E4793AB");
};

window.N_0x9b079e5221d984d3 = function (p0) {
	return _in("0x9B079E5221D984D3", p0);
};

window.N_0x9b2bd3773123ea2f = function (type, toggle) {
	return _in("0x9B2BD3773123EA2F", type, toggle);
};

window.N_0x9b4bd21d69b1e609 = function () {
	return _in("0x9B4BD21D69B1E609");
};

window.N_0x9b6e70c5ceef4eeb = function (p0) {
	return _in("0x9B6E70C5CEEF4EEB", p0, _r, _ri);
};

window.N_0x9ba001cb45cbf627 = function (doorHash, heading, p2, p3) {
	return _in("0x9BA001CB45CBF627", _ch(doorHash), _fv(heading), p2, p3);
};

window.N_0x9bddc73cc6a115d4 = function (p0, p1, p2) {
	return _in("0x9BDDC73CC6A115D4", p0, p1, p2);
};

window.N_0x9becd4b9fef3f8a6 = function (vehicle, p1) {
	return _in("0x9BECD4B9FEF3F8A6", vehicle, p1);
};

window.N_0x9bf438815f5d96ea = function (p0, p1, p3, p4, p5) {
	return _in("0x9BF438815F5D96EA", p0, p1, _i, p3, p4, p5, _r);
};

window.N_0x9c16459b2324b2cf = function (p0, p1) {
	return _in("0x9C16459B2324B2CF", p0, p1);
};

window.N_0x9c6a6c19b6c0c496 = function (p0, p1) {
	return _in("0x9C6A6C19B6C0C496", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0x9cb0bfa7a9342c3d = function (p0, p1) {
	return _in("0x9CB0BFA7A9342C3D", p0, p1, _r);
};

window.N_0x9cfdd90b2b844bf7 = function (p0, p1, p2, p3, p4) {
	return _in("0x9CFDD90B2B844BF7", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4));
};

window.N_0x9d30687c57baa0bb = function (p0) {
	return _in("0x9D30687C57BAA0BB", p0);
};

window.N_0x9d3af56e94c9ae98 = function (p0, p1) {
	return _in("0x9D3AF56E94C9AE98", p0, _fv(p1));
};

window.N_0x9d728c1e12bf5518 = function (p0) {
	return _in("0x9D728C1E12BF5518", p0, _r, _ri);
};

window.N_0x9d75795b9dc6ebbf = function (p0) {
	return _in("0x9D75795B9DC6EBBF", p0);
};

window.N_0x9d7afcbf21c51712 = function (p0) {
	return _in("0x9D7AFCBF21C51712", p0);
};

window.N_0x9d8d44adbba61ef2 = function (p0) {
	return _in("0x9D8D44ADBBA61EF2", p0);
};

window.N_0x9da58cdbf6bdbc08 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x9DA58CDBF6BDBC08", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, _r, _ri);
};

window.N_0x9dba107b4937f809 = function (p0, p1) {
	return _in("0x9DBA107B4937F809", p0, _ts(p1));
};

window.N_0x9e30e91fb03a2caf = function () {
	return _in("0x9E30E91FB03A2CAF", _i, _i, _r);
};

window.N_0x9e4cfff989258472 = function () {
	return _in("0x9E4CFFF989258472");
};

window.N_0x9e6542f0ce8e70a3 = function (toggle) {
	return _in("0x9E6542F0CE8E70A3", toggle);
};

window.N_0x9e778248d6685fe0 = function (p0) {
	return _in("0x9E778248D6685FE0", _ts(p0));
};

window.N_0x9e82f0f362881b29 = function (p0, p1, p2, p3, p4) {
	return _in("0x9E82F0F362881B29", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0x9ebc85ed0fffe51c = function (entity, p1, p2) {
	return _in("0x9EBC85ED0FFFE51C", entity, p1, p2);
};

window.N_0x9ebd751e5787baf2 = function (p0) {
	return _in("0x9EBD751E5787BAF2", p0);
};

window.N_0x9ec8858184cd253a = function () {
	return _in("0x9EC8858184CD253A", _r, _ri);
};

window.N_0x9eca15adfe141431 = function () {
	return _in("0x9ECA15ADFE141431", _r, _ri);
};

window.N_0x9edd76e87d5d51ba = function (player) {
	return _in("0x9EDD76E87D5D51BA", player);
};

window.N_0x9f3f689b814f2599 = function (vehicle, p1) {
	return _in("0x9F3F689B814F2599", vehicle, p1);
};

window.N_0x9f5e6bb6b34540da = function (p0) {
	return _in("0x9F5E6BB6B34540DA", _fv(p0));
};

window.N_0x9f6e2821885caee2 = function (p0, p1, p2) {
	return _in("0x9F6E2821885CAEE2", p0, p1, p2, _i, _i, _r);
};

window.N_0x9fe5633880ecd8ed = function (p0, p1, p2, p3) {
	return _in("0x9FE5633880ECD8ED", p0, p1, p2, p3);
};

window.N_0x9fedf86898f100e9 = function () {
	return _in("0x9FEDF86898F100E9", _r, _ri);
};

window.N_0xa01bc64dd4bfbbac = function (vehicle, p1) {
	return _in("0xA01BC64DD4BFBBAC", vehicle, p1, _r, _ri);
};

window.N_0xa03502fc581f7d9b = function () {
	return _in("0xA03502FC581F7D9B", _r, _rf);
};

window.N_0xa049a5be0f04f2f8 = function () {
	return _in("0xA049A5BE0F04F2F8", _r, _ri);
};

window.N_0xa071e0ed98f91286 = function (p0, p1) {
	return _in("0xA071E0ED98F91286", p0, p1);
};

window.N_0xa08fe5e49bdc39dd = function (p0, p1, p2) {
	return _in("0xA08FE5E49BDC39DD", p0, _fv(p1), p2);
};

window.N_0xa097ab275061fb21 = function () {
	return _in("0xA097AB275061FB21", _r, _ri);
};

window.N_0xa09f896ce912481f = function (p0) {
	return _in("0xA09F896CE912481F", p0, _r, _ri);
};

window.N_0xa0cefcea390aab9b = function (p0) {
	return _in("0xA0CEFCEA390AAB9B", p0);
};

window.N_0xa0d3e4f7aafb7e78 = function (p0, p1) {
	return _in("0xA0D3E4F7AAFB7E78", p0, p1, _r, _ri);
};

window.N_0xa0f8a7517a273c05 = function (p0, p1, p2, p3, p4) {
	return _in("0xA0F8A7517A273C05", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0xa0f93d5465b3094d = function (p0) {
	return _in("0xA0F93D5465B3094D", _ii(p0) /* may be optional */, _r);
};

window.N_0xa0fa4ec6a05da44e = function () {
	return _in("0xA0FA4EC6A05DA44E", _r, _ri);
};

window.N_0xa0fe76168a189ddb = function () {
	return _in("0xA0FE76168A189DDB", _r, _ri);
};

window.N_0xa12d3a5a3753cc23 = function () {
	return _in("0xA12D3A5A3753CC23", _r, _ri);
};

window.N_0xa134777ff7f33331 = function (p0, p1) {
	return _in("0xA134777FF7F33331", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0xa13c11e1b5c06bfc = function () {
	return _in("0xA13C11E1B5C06BFC");
};

window.N_0xa13e93403f26c812 = function (p0) {
	return _in("0xA13E93403F26C812", p0, _r, _ri);
};

window.N_0xa1607996431332df = function (netId) {
	return _in("0xA1607996431332DF", netId, _r);
};

window.N_0xa17784fca9548d15 = function (p0, p1, p2) {
	return _in("0xA17784FCA9548D15", p0, p1, p2);
};

window.N_0xa17bad153b51547e = function (cargobob, p1) {
	return _in("0xA17BAD153B51547E", cargobob, _fv(p1));
};

window.N_0xa1a9fc1c76a6730d = function (p0) {
	return _in("0xA1A9FC1C76A6730D", p0, _r, _ri);
};

window.N_0xa1c996c2a744262e = function (p0) {
	return _in("0xA1C996C2A744262E", _ii(p0) /* may be optional */, _r);
};

window.N_0xa1dd82f3ccf9a01e = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xA1DD82F3CCF9A01E", p0, p1, p2, p3, p4, p5);
};

window.N_0xa1e5e0204a6fcc70 = function () {
	return _in("0xA1E5E0204A6FCC70");
};

window.N_0xa213b11dff526300 = function () {
	return _in("0xA213B11DFF526300", _r, _ri);
};

window.N_0xa21c118553bbdf02 = function (p0) {
	return _in("0xA21C118553BBDF02", p0);
};

window.N_0xa238192f33110615 = function () {
	return _in("0xA238192F33110615", _i, _i, _i, _r);
};

window.N_0xa247f9ef01d8082e = function (p0) {
	return _in("0xA247F9EF01D8082E", p0);
};

window.N_0xa2767257a320fc82 = function (p0, p1) {
	return _in("0xA2767257A320FC82", p0, p1);
};

window.N_0xa277800a9eae340e = function () {
	return _in("0xA277800A9EAE340E", _r, _ri);
};

window.N_0xa2a707979fe754dc = function (p0, p1) {
	return _in("0xA2A707979FE754DC", p0, p1);
};

window.N_0xa2c1f5e92afe49ed = function () {
	return _in("0xA2C1F5E92AFE49ED");
};

window.N_0xa2c9ac24b4061285 = function (p0, p1) {
	return _in("0xA2C9AC24B4061285", p0, p1, _r, _ri);
};

window.N_0xa2ccbe62cd4c91a4 = function (toggle) {
	return _in("0xA2CCBE62CD4C91A4", _ii(toggle) /* may be optional */);
};

window.N_0xa2e9c1ab8a92e8cd = function (p0) {
	return _in("0xA2E9C1AB8A92E8CD", p0);
};

window.N_0xa2f952104fc6dd4b = function (p0) {
	return _in("0xA2F952104FC6DD4B", p0, _r);
};

window.N_0xa306f470d1660581 = function () {
	return _in("0xA306F470D1660581", _r, _ri);
};

window.N_0xa31fd15197b192bd = function () {
	return _in("0xA31FD15197B192BD", _r, _ri);
};

window.N_0xa356990e161c9e65 = function (p0) {
	return _in("0xA356990E161C9E65", p0);
};

window.N_0xa3a9299c4f2adb98 = function (p0) {
	return _in("0xA3A9299C4F2ADB98", p0);
};

window.N_0xa3c53804bdb68ed2 = function (p0, p1) {
	return _in("0xA3C53804BDB68ED2", p0, p1);
};

window.N_0xa3f3564a5b3646c0 = function (ped) {
	return _in("0xA3F3564A5B3646C0", ped, _r);
};

window.N_0xa40cc53df8e50837 = function (p0, args, argCount, bit) {
	return _in("0xA40CC53DF8E50837", p0, args, argCount, bit);
};

window.N_0xa41bcd7213805aac = function (p0) {
	return _in("0xA41BCD7213805AAC", p0);
};

window.N_0xa44ff770dfbc5dae = function () {
	return _in("0xA44FF770DFBC5DAE");
};

window.N_0xa4664972a9b8f8ba = function (p0) {
	return _in("0xA4664972A9B8F8BA", p0, _r, _ri);
};

window.N_0xa46b73faa3460ae1 = function (p0) {
	return _in("0xA46B73FAA3460AE1", p0);
};

window.N_0xa4819f5e23e2ffad = function () {
	return _in("0xA4819F5E23E2FFAD", _r, _ri);
};

window.N_0xa4822f1cf23f4810 = function (p1, p3, p4, p5, p6, p7, p8) {
	return _in("0xA4822F1CF23F4810", _v, p1, _v, p3, p4, p5, p6, p7, p8, _r);
};

window.N_0xa48931185f0536fe = function () {
	return _in("0xA48931185F0536FE", _r, _ri);
};

window.N_0xa4a0065e39c9f25c = function (p0, p1, p2, p3) {
	return _in("0xA4A0065E39C9F25C", p0, p1, p2, p3, _r, _ri);
};

window.N_0xa4dede28b1814289 = function () {
	return _in("0xA4DEDE28B1814289");
};

window.N_0xa51b086b0b2c0f7a = function (p0, p1, p2, p3) {
	return _in("0xA51B086B0B2C0F7A", p0, p1, p2, p3);
};

window.N_0xa51c4b86b71652ae = function (p0) {
	return _in("0xA51C4B86B71652AE", p0);
};

window.N_0xa52d5247a4227e14 = function (p0) {
	return _in("0xA52D5247A4227E14", p0);
};

window.N_0xa5342d390cda41d6 = function (p0, p1) {
	return _in("0xA5342D390CDA41D6", p0, p1);
};

window.N_0xa586fbeb32a53dbb = function () {
	return _in("0xA586FBEB32A53DBB", _r, _ri);
};

window.N_0xa5c80d8e768a9e66 = function (p0) {
	return _in("0xA5C80D8E768A9E66", _ii(p0) /* may be optional */, _r);
};

window.N_0xa5efc3e847d60507 = function (p0, p1, p2, p3, p4) {
	return _in("0xA5EFC3E847D60507", _ts(p0), _ts(p1), _ts(p2), _ts(p3), p4, _r);
};

window.N_0xa5f377b175a699c5 = function (p0) {
	return _in("0xA5F377B175A699C5", p0);
};

window.N_0xa635c11b8c44afc2 = function () {
	return _in("0xA635C11B8C44AFC2", _r, _ri);
};

window.N_0xa6385deb180f319f = function (p0, p1, p2) {
	return _in("0xA6385DEB180F319F", p0, p1, _fv(p2));
};

window.N_0xa660faf550eb37e5 = function (p0, p1) {
	return _in("0xA660FAF550EB37E5", p0, p1);
};

window.N_0xa67c35c56eb1bd9d = function () {
	return _in("0xA67C35C56EB1BD9D", _r, _ri);
};

window.N_0xa67f9c46d612b6f1 = function (headDisplayId, p1) {
	return _in("0xA67F9C46D612B6F1", headDisplayId, p1);
};

window.N_0xa68d3d229f4f3b06 = function (p0) {
	return _in("0xA68D3D229F4F3B06", _ts(p0));
};

window.N_0xa699957e60d80214 = function (p0) {
	return _in("0xA699957E60D80214", p0, _r);
};

window.N_0xa69ac4ade82b57a4 = function (p0) {
	return _in("0xA69AC4ADE82B57A4", p0, _r);
};

window.N_0xa6a12939f16d85be = function (hash, p1) {
	return _in("0xA6A12939F16D85BE", _ch(hash), p1);
};

window.N_0xa6d3a8750dc73270 = function (p0, p1) {
	return _in("0xA6D3A8750DC73270", p0, p1);
};

window.N_0xa6f54bb2ffca35ea = function (p0) {
	return _in("0xA6F54BB2FFCA35EA", p0);
};

window.N_0xa72835064dd63e4c = function () {
	return _in("0xA72835064DD63E4C", _r, _ri);
};

window.N_0xa735353c77334ea0 = function () {
	return _in("0xA735353C77334EA0", _i, _i);
};

window.N_0xa736cf7fb7c5bff4 = function () {
	return _in("0xA736CF7FB7C5BFF4", _i, _i, _i, _i);
};

window.N_0xa74802fb8d0b7814 = function (p0, p1) {
	return _in("0xA74802FB8D0B7814", _ts(p0), _fv(p1));
};

window.N_0xa75ccf58a60a5fd1 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0xA75CCF58A60A5FD1", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
};

window.N_0xa75e2b6733da5142 = function () {
	return _in("0xA75E2B6733DA5142", _r, _ri);
};

window.N_0xa761d4ac6115623d = function () {
	return _in("0xA761D4AC6115623D", _r, _ri);
};

window.N_0xa76359fc80b2438e = function (p0) {
	return _in("0xA76359FC80B2438E", _fv(p0));
};

window.N_0xa7862bc5ed1dfd7e = function (p0, p1) {
	return _in("0xA7862BC5ED1DFD7E", p0, p1, _i, _i, _r);
};

window.N_0xa78b8fa58200da56 = function (p0) {
	return _in("0xA78B8FA58200DA56", p0);
};

window.N_0xa78de25577300ba1 = function (p0) {
	return _in("0xA78DE25577300BA1", p0);
};

window.N_0xa7a1127490312c36 = function (p0) {
	return _in("0xA7A1127490312C36", _fv(p0));
};

window.N_0xa7c511fa1c5bda38 = function (p0, p1) {
	return _in("0xA7C511FA1C5BDA38", p0, p1);
};

window.N_0xa7dcdf4ded40a8f4 = function (vehicle, p1) {
	return _in("0xA7DCDF4DED40A8F4", vehicle, p1);
};

window.N_0xa7e30de9272b6d49 = function (ped, x, y, z, p4) {
	return _in("0xA7E30DE9272B6D49", ped, _fv(x), _fv(y), _fv(z), _fv(p4));
};

window.N_0xa7ffba498e4aaf67 = function (p0, p1) {
	return _in("0xA7FFBA498E4AAF67", p0, _ts(p1), _r);
};

window.N_0xa80ae305e0a3044f = function (entity, p1) {
	return _in("0xA80AE305E0A3044F", entity, p1);
};

window.N_0xa8434f1dff41d6e7 = function (p0) {
	return _in("0xA8434F1DFF41D6E7", _fv(p0));
};

window.N_0xa85a21582451e951 = function (doorHash, p1) {
	return _in("0xA85A21582451E951", _ch(doorHash), p1);
};

window.N_0xa8733668d1047b51 = function (p0) {
	return _in("0xA8733668D1047B51", p0);
};

window.N_0xa8acb6459542a8c8 = function () {
	return _in("0xA8ACB6459542A8C8", _r, _ri);
};

window.N_0xa8b6afdac320ac87 = function (p0, p1) {
	return _in("0xA8B6AFDAC320AC87", p0, p1);
};

window.N_0xa8fdb297a8d25fba = function () {
	return _in("0xA8FDB297A8D25FBA");
};

window.N_0xa905192a6781c41b = function (x, y, z) {
	return _in("0xA905192A6781C41B", _fv(x), _fv(y), _fv(z));
};

window.N_0xa90e7227a9303fa9 = function (p0, p1) {
	return _in("0xA90E7227A9303FA9", p0, p1);
};

window.N_0xa9240a96c74cca13 = function (p0) {
	return _in("0xA9240A96C74CCA13", p0, _r);
};

window.N_0xa943fd1722e11efd = function () {
	return _in("0xA943FD1722E11EFD", _r, _ri);
};

window.N_0xa95f667a755725da = function (p0, p1, p2, p3) {
	return _in("0xA95F667A755725DA", p0, p1, p2, p3);
};

window.N_0xa9b61a329bfdcbea = function (p0, p1) {
	return _in("0xA9B61A329BFDCBEA", p0, p1);
};

window.N_0xa9cbfd40b3fa3010 = function () {
	return _in("0xA9CBFD40B3FA3010", _r, _ri);
};

window.N_0xa9f9c2e0fde11cbb = function (p0, p1, p2) {
	return _in("0xA9F9C2E0FDE11CBB", p0, p1, _ii(p2) /* may be optional */, _r);
};

window.N_0xaa19f5572c38b564 = function (p0) {
	return _in("0xAA19F5572C38B564", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0xaa3f739abddcf21f = function () {
	return _in("0xAA3F739ABDDCF21F");
};

window.N_0xaa525dff66bb82f5 = function (p0, p1, p2) {
	return _in("0xAA525DFF66BB82F5", p0, p1, p2);
};

window.N_0xaa5fafcd2c5f5e47 = function () {
	return _in("0xAA5FAFCD2C5F5E47", _r, _ri);
};

window.N_0xaa76052dda9bfc3e = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xAA76052DDA9BFC3E", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0xaaa553e7dd28a457 = function (p0) {
	return _in("0xAAA553E7DD28A457", p0);
};

window.N_0xaaa6a3698a69e048 = function (p0) {
	return _in("0xAAA6A3698A69E048", p0, _r, _ri);
};

window.N_0xab04325045427aae = function (vehicle, p1) {
	return _in("0xAB04325045427AAE", vehicle, p1);
};

window.N_0xab13a5565480b6d9 = function (p0, p1) {
	return _in("0xAB13A5565480B6D9", p0, p1, _r, _ri);
};

window.N_0xab31ef4de6800ce9 = function (p0, p1) {
	return _in("0xAB31EF4DE6800CE9", p0, p1);
};

window.N_0xabb2fa71c83a1b72 = function () {
	return _in("0xABB2FA71C83A1B72", _r, _ri);
};

window.N_0xabd5e88b8a2d3db2 = function (globalPtr) {
	return _in("0xABD5E88B8A2D3DB2", _ii(globalPtr) /* may be optional */);
};

window.N_0xac272c0ae01b4bd8 = function (p0, p1, p2, p3) {
	return _in("0xAC272C0AE01B4BD8", p0, p1, p2, p3);
};

window.N_0xac2890471901861c = function (p0) {
	return _in("0xAC2890471901861C", _fv(p0));
};

window.N_0xacb5dcca1ec76840 = function (vehicle) {
	return _in("0xACB5DCCA1EC76840", vehicle, _r, _ri);
};

window.N_0xad2d28a1afdff131 = function (vehicle, p1) {
	return _in("0xAD2D28A1AFDFF131", vehicle, _fv(p1));
};

window.N_0xad5fdf34b81bfe79 = function () {
	return _in("0xAD5FDF34B81BFE79");
};

window.N_0xad6875bbc0fc899c = function (p0) {
	return _in("0xAD6875BBC0FC899C", p0);
};

window.N_0xad73ce5a09e42d12 = function (player) {
	return _in("0xAD73CE5A09E42D12", player, _r, _ri);
};

window.N_0xadb57e5b663cca8b = function (p0) {
	return _in("0xADB57E5B663CCA8B", p0, _f, _f);
};

window.N_0xaddd1c754e2e2914 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0xADDD1C754E2E2914", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
};

window.N_0xaded7f5748acafe6 = function () {
	return _in("0xADED7F5748ACAFE6");
};

window.N_0xae3fee8709b39dcb = function (vehicle) {
	return _in("0xAE3FEE8709B39DCB", vehicle, _r);
};

window.N_0xae51bc858f32ba66 = function (p0, p1, p2, p3, p4) {
	return _in("0xAE51BC858F32BA66", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4));
};

window.N_0xaeab987727c5a8a4 = function (p0) {
	return _in("0xAEAB987727C5A8A4", p0, _r);
};

window.N_0xaeef48cdf5b6ce7c = function (p0, p1) {
	return _in("0xAEEF48CDF5B6CE7C", p0, p1, _r);
};

window.N_0xaf03011701811146 = function (p0, p1) {
	return _in("0xAF03011701811146", p0, p1, _r, _ri);
};

window.N_0xaf12610c644a35c9 = function (p0, p1) {
	return _in("0xAF12610C644A35C9", _ts(p0), p1);
};

window.N_0xaf348afcb575a441 = function (roomName) {
	return _in("0xAF348AFCB575A441", _ts(roomName));
};

window.N_0xaf42195a42c63bba = function () {
	return _in("0xAF42195A42C63BBA", _r, _ri);
};

window.N_0xaf60e6a2936f982a = function (p0, p1) {
	return _in("0xAF60E6A2936F982A", p0, p1);
};

window.N_0xaf66dcee6609b148 = function () {
	return _in("0xAF66DCEE6609B148");
};

window.N_0xafc976fd0580c7b3 = function (ped, toggle) {
	return _in("0xAFC976FD0580C7B3", ped, toggle);
};

window.N_0xaff4710e2a0a6c12 = function (ped) {
	return _in("0xAFF4710E2A0A6C12", ped);
};

window.N_0xaff47709f1d5dcce = function () {
	return _in("0xAFF47709F1D5DCCE", _r, _ri);
};

window.N_0xb055a34527cb8fd7 = function (vehicle, p1) {
	return _in("0xB055A34527CB8FD7", vehicle, p1);
};

window.N_0xb07d3185e11657a5 = function (p0) {
	return _in("0xB07D3185E11657A5", p0, _r);
};

window.N_0xb088e9a47ae6edd5 = function (vehicle, p1) {
	return _in("0xB088E9A47AE6EDD5", vehicle, p1);
};

window.N_0xb08b85d860e7ba3c = function (p0, p1, p2) {
	return _in("0xB08B85D860E7BA3C", p0, p1, p2);
};

window.N_0xb094bc1db4018240 = function (p0, p1, p2, p3) {
	return _in("0xB094BC1DB4018240", p0, p1, _fv(p2), _fv(p3));
};

window.N_0xb09d25e77c33eb3f = function (p0, p1, p2) {
	return _in("0xB09D25E77C33EB3F", p0, p1, p2, _r, _ri);
};

window.N_0xb0a6cfd2c69c1088 = function (p0, p2) {
	return _in("0xB0A6CFD2C69C1088", p0, _i, p2);
};

window.N_0xb0ad1238a709b1a2 = function (p0) {
	return _in("0xB0AD1238A709B1A2", p0, _r, _ri);
};

window.N_0xb0c56bd3d808d863 = function (p0) {
	return _in("0xB0C56BD3D808D863", p0);
};

window.N_0xb11d94bc55f41932 = function (p0) {
	return _in("0xB11D94BC55F41932", _ts(p0));
};

window.N_0xb1252e3e59a82aaf = function (p0) {
	return _in("0xB1252E3E59A82AAF", p0);
};

window.N_0xb129e447a2eda4bf = function (p0, p1) {
	return _in("0xB129E447A2EDA4BF", p0, p1);
};

window.N_0xb13dcb4c6faad238 = function (p0, p1, p2) {
	return _in("0xB13DCB4C6FAAD238", p0, p1, p2);
};

window.N_0xb13e88e655e5a3bc = function () {
	return _in("0xB13E88E655E5A3BC");
};

window.N_0xb1577667c3708f9b = function () {
	return _in("0xB1577667C3708F9B");
};

window.N_0xb17bc6453f6cf5ac = function (p0, p1) {
	return _in("0xB17BC6453F6CF5AC", p0, p1);
};

window.N_0xb1b6216ca2e7b55e = function (p0, p1, p2) {
	return _in("0xB1B6216CA2E7B55E", p0, p1, p2);
};

window.N_0xb1bb03742917a5d6 = function (type, xPos, yPos, zPos, p4, red, green, blue, alpha) {
	return _in("0xB1BB03742917A5D6", type, _fv(xPos), _fv(yPos), _fv(zPos), _fv(p4), red, green, blue, alpha);
};

window.N_0xb1d2bb1e1631f5b1 = function () {
	return _in("0xB1D2BB1E1631F5B1", _r);
};

window.N_0xb2092a1eaa7fd45f = function (p0) {
	return _in("0xB2092A1EAA7FD45F", p0, _r, _ri);
};

window.N_0xb214d570ead7f81a = function (p0, p1) {
	return _in("0xB214D570EAD7F81A", p0, p1);
};

window.N_0xb264c4d2f2b0a78b = function (vehicle) {
	return _in("0xB264C4D2F2B0A78B", vehicle);
};

window.N_0xb282749d5e028163 = function (p0, p1) {
	return _in("0xB282749D5E028163", p0, p1);
};

window.N_0xb28b1fe5bfadd7f5 = function (vehicle, p1) {
	return _in("0xB28B1FE5BFADD7F5", vehicle, p1);
};

window.N_0xb2a592b04648a9cb = function () {
	return _in("0xB2A592B04648A9CB", _r, _ri);
};

window.N_0xb2aff10216defa2f = function (x, y, z, p3, p4, p5, p6, interiorFlags, scale, duration) {
	return _in("0xB2AFF10216DEFA2F", _fv(x), _fv(y), _fv(z), _fv(p3), _fv(p4), _fv(p5), _fv(p6), interiorFlags, _fv(scale), duration);
};

window.N_0xb2d0bde54f0e8e5a = function (object, toggle) {
	return _in("0xB2D0BDE54F0E8E5A", object, toggle);
};

window.N_0xb2e0c0d6922d31f2 = function (p0, p1) {
	return _in("0xB2E0C0D6922D31F2", p0, p1);
};

window.N_0xb2ebe8cbc58b90e9 = function () {
	return _in("0xB2EBE8CBC58B90E9", _r, _ri);
};

window.N_0xb309ebea797e001f = function (p0) {
	return _in("0xB309EBEA797E001F", p0, _r, _ri);
};

window.N_0xb328dcc3a3aa401b = function (p0) {
	return _in("0xB328DCC3A3AA401B", p0, _r, _ri);
};

window.N_0xb335f761606db47c = function (p2, p3) {
	return _in("0xB335F761606DB47C", _i, _i, p2, p3, _r);
};

window.N_0xb37e4e6a2388ca7b = function () {
	return _in("0xB37E4E6A2388CA7B", _r, _ri);
};

window.N_0xb3c641f3630bf6da = function (p0) {
	return _in("0xB3C641F3630BF6DA", _fv(p0));
};

window.N_0xb3cd58cca6cda852 = function () {
	return _in("0xB3CD58CCA6CDA852");
};

window.N_0xb3da2606774a8e2d = function () {
	return _in("0xB3DA2606774A8E2D", _r, _ri);
};

window.N_0xb3e6360dde733e82 = function (p0) {
	return _in("0xB3E6360DDE733E82", _fv(p0));
};

window.N_0xb3ea4feabf41464b = function (p0, p1) {
	return _in("0xB3EA4FEABF41464B", p0, p1, _r, _ri);
};

window.N_0xb3eca65c7317f174 = function () {
	return _in("0xB3ECA65C7317F174", _r, _ri);
};

window.N_0xb4271092ca7edf48 = function (p0) {
	return _in("0xB4271092CA7EDF48", p0, _r, _ri);
};

window.N_0xb45eff719d8427a6 = function (p0) {
	return _in("0xB45EFF719D8427A6", _fv(p0));
};

window.N_0xb475f27c6a994d65 = function () {
	return _in("0xB475F27C6A994D65");
};

window.N_0xb4771b9aaf4e68e4 = function (p0, p1, p2) {
	return _in("0xB4771B9AAF4E68E4", p0, p1, p2);
};

window.N_0xb49eca122467d05f = function (p0, p1, p2, p3) {
	return _in("0xB49ECA122467D05F", p0, p1, p2, p3);
};

window.N_0xb4bbfd9cd8b3922b = function (p0) {
	return _in("0xB4BBFD9CD8B3922B", _ts(p0));
};

window.N_0xb4c2ec463672474e = function (p0, p1, p2, p3) {
	return _in("0xB4C2EC463672474E", p0, p1, p2, p3);
};

window.N_0xb4c8d77c80c0421e = function (ped, p1) {
	return _in("0xB4C8D77C80C0421E", ped, _fv(p1), _r, _ri);
};

window.N_0xb4f47213df45a64c = function (p0, p1) {
	return _in("0xB4F47213DF45A64C", p0, _ii(p1) /* may be optional */, _r);
};

window.N_0xb50eb4ccb29704ac = function (p0) {
	return _in("0xB50EB4CCB29704AC", p0);
};

window.N_0xb51b9ab9ef81868c = function (toggle) {
	return _in("0xB51B9AB9EF81868C", toggle);
};

window.N_0xb542de8c3d1cb210 = function (p0) {
	return _in("0xB542DE8C3D1CB210", p0);
};

window.N_0xb552929b85fc27ec = function (p0, p1) {
	return _in("0xB552929B85FC27EC", p0, p1);
};

window.N_0xb569f41f3e7e83a4 = function (p0) {
	return _in("0xB569F41F3E7E83A4", p0);
};

window.N_0xb56bbbcc2955d9cb = function () {
	return _in("0xB56BBBCC2955D9CB", _r);
};

window.N_0xb57a49545ba53ce7 = function (p0) {
	return _in("0xB57A49545BA53CE7", _ii(p0) /* may be optional */, _r);
};

window.N_0xb5a4db34fe89b88a = function () {
	return _in("0xB5A4DB34FE89B88A");
};

window.N_0xb5d3453c98456528 = function () {
	return _in("0xB5D3453C98456528", _r, _ri);
};

window.N_0xb606e6cc59664972 = function (p0) {
	return _in("0xB606E6CC59664972", p0);
};

window.N_0xb6871b0555b02996 = function (p2, p5) {
	return _in("0xB6871B0555B02996", _i, _i, p2, _i, _i, p5, _r, _ri);
};

window.N_0xb695e2cd0a2da9ee = function () {
	return _in("0xB695E2CD0A2DA9EE");
};

window.N_0xb7257ba2550ea10a = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xB7257BA2550EA10A", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0xb743f735c03d7810 = function (p0, p1) {
	return _in("0xB743F735C03D7810", p0, p1);
};

window.N_0xb746d20b17f2a229 = function () {
	return _in("0xB746D20B17F2A229", _i, _i, _r);
};

window.N_0xb782f8238512bad5 = function (p0, p1) {
	return _in("0xB782F8238512BAD5", p0, _ii(p1) /* may be optional */);
};

window.N_0xb7c7f6ad6424304b = function () {
	return _in("0xB7C7F6AD6424304B");
};

window.N_0xb7ed70c49521a61d = function (p0) {
	return _in("0xB7ED70C49521A61D", p0);
};

window.N_0xb81cf134aeb56ffb = function () {
	return _in("0xB81CF134AEB56FFB");
};

window.N_0xb8721407ee9c3ff6 = function (p0, p1, p2) {
	return _in("0xB8721407EE9C3FF6", p0, p1, p2);
};

window.N_0xb885852c39cc265d = function () {
	return _in("0xB885852C39CC265D");
};

window.N_0xb8b52e498014f5b0 = function (ped) {
	return _in("0xB8B52E498014F5B0", ped, _r);
};

window.N_0xb8f87ead7533b176 = function (p0) {
	return _in("0xB8F87EAD7533B176", _fv(p0));
};

window.N_0xb9449845f73f5e9c = function (functionName) {
	return _in("0xB9449845F73F5E9C", _ts(functionName), _r);
};

window.N_0xb9496ce47546db2c = function (p0) {
	return _in("0xB9496CE47546DB2C", p0, _r, _ri);
};

window.N_0xb9562064627ff9db = function (p0, p1) {
	return _in("0xB9562064627FF9DB", p0, p1);
};

window.N_0xb9854dfde0d833d6 = function (p0) {
	return _in("0xB9854DFDE0D833D6", _fv(p0));
};

window.N_0xb99c4e4d9499df29 = function (p0) {
	return _in("0xB99C4E4D9499DF29", p0);
};

window.N_0xb9c362babecddc7a = function (p0, p1, p2, p3, p4) {
	return _in("0xB9C362BABECDDC7A", p0, p1, p2, p3, p4);
};

window.N_0xb9cf1f793a9f1bf1 = function () {
	return _in("0xB9CF1F793A9F1BF1", _r, _ri);
};

window.N_0xba0127da25fd54c9 = function (p0, p1) {
	return _in("0xBA0127DA25FD54C9", p0, p1);
};

window.N_0xba3d194057c79a7b = function (p0) {
	return _in("0xBA3D194057C79A7B", p0);
};

window.N_0xba3d65906822bed5 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xBA3D65906822BED5", p0, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5));
};

window.N_0xba4b8d83bdc75551 = function (p0) {
	return _in("0xBA4B8D83BDC75551", p0);
};

window.N_0xba63d9fe45412247 = function (ped, p1) {
	return _in("0xBA63D9FE45412247", ped, p1, _r);
};

window.N_0xba751764f0821256 = function () {
	return _in("0xBA751764F0821256");
};

window.N_0xba7f0b77d80a4eb7 = function (p0, p1) {
	return _in("0xBA7F0B77D80A4EB7", p0, p1);
};

window.N_0xba8805a1108a2515 = function (p0) {
	return _in("0xBA8805A1108A2515", p0, _r, _ri);
};

window.N_0xba8d65c1c65702e5 = function (p0) {
	return _in("0xBA8D65C1C65702E5", p0);
};

window.N_0xba91d045575699ad = function (p0) {
	return _in("0xBA91D045575699AD", p0, _r, _ri);
};

window.N_0xba96394a0eecfa65 = function () {
	return _in("0xBA96394A0EECFA65");
};

window.N_0xba9749cc94c1fd85 = function () {
	return _in("0xBA9749CC94C1FD85", _r, _ri);
};

window.N_0xba9775570db788cf = function () {
	return _in("0xBA9775570DB788CF", _r, _ri);
};

window.N_0xbaa045b4e42f3c06 = function (p0, p1) {
	return _in("0xBAA045B4E42F3C06", p0, p1);
};

window.N_0xbaa2f0490e146be8 = function (p0) {
	return _in("0xBAA2F0490E146BE8", p0);
};

window.N_0xbae4f9b97cd43b30 = function (p0) {
	return _in("0xBAE4F9B97CD43B30", p0);
};

window.N_0xbaf6babf9e7ccc13 = function (p0, p1) {
	return _in("0xBAF6BABF9E7CCC13", p0, p1, _r, _ri);
};

window.N_0xbb0527ec6341496d = function () {
	return _in("0xBB0527EC6341496D", _r, _ri);
};

window.N_0xbb2333bb87ddd87f = function (p0, p1) {
	return _in("0xBB2333BB87DDD87F", p0, p1);
};

window.N_0xbb90e12cac1dab25 = function (p0) {
	return _in("0xBB90E12CAC1DAB25", _fv(p0));
};

window.N_0xbbb45c3cf5c8aa85 = function () {
	return _in("0xBBB45C3CF5C8AA85", _r, _ri);
};

window.N_0xbbdf066252829606 = function (p0, p1) {
	return _in("0xBBDF066252829606", p0, p1);
};

window.N_0xbbf327ded94e4deb = function (p0) {
	return _in("0xBBF327DED94E4DEB", _ts(p0));
};

window.N_0xbc0753c9ca14b506 = function (player, p1, p2) {
	return _in("0xBC0753C9CA14B506", player, p1, p2, _r);
};

window.N_0xbc0ce682d4d05650 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13) {
	return _in("0xBC0CE682D4D05650", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13);
};

window.N_0xbc1cc91205ec8d6e = function () {
	return _in("0xBC1CC91205EC8D6E", _r, _ri);
};

window.N_0xbc3cca5844452b06 = function (p0) {
	return _in("0xBC3CCA5844452B06", _fv(p0));
};

window.N_0xbc9490ca15aea8fb = function (player) {
	return _in("0xBC9490CA15AEA8FB", player);
};

window.N_0xbc9823ab80a3dcac = function () {
	return _in("0xBC9823AB80A3DCAC", _r, _ri);
};

window.N_0xbce595371a5fbaaf = function (p0, p1) {
	return _in("0xBCE595371A5FBAAF", p0, p1);
};

window.N_0xbcedb009461da156 = function () {
	return _in("0xBCEDB009461DA156", _r, _ri);
};

window.N_0xbcfc632db7673bf0 = function (p0, p1) {
	return _in("0xBCFC632DB7673BF0", _fv(p0), _fv(p1));
};

window.N_0xbcfde9ede4cf27dc = function (p0, p1) {
	return _in("0xBCFDE9EDE4CF27DC", p0, p1);
};

window.N_0xbd0be0bfc927eac1 = function () {
	return _in("0xBD0BE0BFC927EAC1");
};

window.N_0xbd0efb25cca8f97a = function (p0, p1, p2, p3) {
	return _in("0xBD0EFB25CCA8F97A", p0, p1, p2, p3);
};

window.N_0xbd32e46aa95c1dd2 = function (p0) {
	return _in("0xBD32E46AA95C1DD2", p0);
};

window.N_0xbd545d44cce70597 = function () {
	return _in("0xBD545D44CCE70597", _r);
};

window.N_0xbd605b8e0e18b3bb = function () {
	return _in("0xBD605B8E0E18B3BB");
};

window.N_0xbdb6f89c729cf388 = function () {
	return _in("0xBDB6F89C729CF388", _r, _ri);
};

window.N_0xbdeb86f4d5809204 = function (p0) {
	return _in("0xBDEB86F4D5809204", _fv(p0));
};

window.N_0xbe197eaa669238f4 = function (p0, p1, p2, p3) {
	return _in("0xBE197EAA669238F4", p0, p1, p2, p3, _r, _ri);
};

window.N_0xbe3db208333d9844 = function () {
	return _in("0xBE3DB208333D9844", _r, _ri);
};

window.N_0xbe509b0a3693de8b = function (p0) {
	return _in("0xBE509B0A3693DE8B", p0);
};

window.N_0xbe5c1255a1830ff5 = function (vehicle, toggle) {
	return _in("0xBE5C1255A1830FF5", vehicle, toggle);
};

window.N_0xbeb2d9a1d9a8f55a = function (p0, p1, p2, p3) {
	return _in("0xBEB2D9A1D9A8F55A", p0, p1, p2, p3);
};

window.N_0xbeb3d46bb7f043c0 = function (p0) {
	return _in("0xBEB3D46BB7F043C0", p0);
};

window.N_0xbec0816ff5acbcda = function (p0, p1) {
	return _in("0xBEC0816FF5ACBCDA", p0, p1);
};

window.N_0xbed8ca5ff5e04113 = function (p0, p1, p2, p3) {
	return _in("0xBED8CA5FF5E04113", _fv(p0), _fv(p1), _fv(p2), _fv(p3));
};

window.N_0xbed9f5693f34ed17 = function (statName, p1, outValue) {
	return _in("0xBED9F5693F34ED17", _ch(statName), p1, _fi(outValue) /* may be optional */, _r);
};

window.N_0xbef34b1d9624d5dd = function (p0) {
	return _in("0xBEF34B1D9624D5DD", p0);
};

window.N_0xbf09786a7fcab582 = function (p0) {
	return _in("0xBF09786A7FCAB582", p0, _r, _ri);
};

window.N_0xbf22e0f32968e967 = function (player, p1) {
	return _in("0xBF22E0F32968E967", player, p1);
};

window.N_0xbf371cd2b64212fd = function (p0) {
	return _in("0xBF371CD2B64212FD", p0);
};

window.N_0xbf4dc1784be94dfa = function (p0, p1, p2) {
	return _in("0xBF4DC1784BE94DFA", p0, p1, p2);
};

window.N_0xbf4f34a85ca2970c = function () {
	return _in("0xBF4F34A85CA2970C");
};

window.N_0xbf59707b3e5ed531 = function (p0) {
	return _in("0xBF59707B3E5ED531", _ts(p0));
};

window.N_0xbf72910d0f26f025 = function () {
	return _in("0xBF72910D0F26F025", _r, _ri);
};

window.N_0xbfa0a56a817c6c7d = function (p0) {
	return _in("0xBFA0A56A817C6C7D", p0);
};

window.N_0xbfafdb5faaa5c5ab = function (p0) {
	return _in("0xBFAFDB5FAAA5C5AB", p0);
};

window.N_0xbfba3ba79cff7ebf = function (modelHash) {
	return _in("0xBFBA3BA79CFF7EBF", _ch(modelHash), _r, _rf);
};

window.N_0xbfe5756e7407064a = function (x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed, entity, p14, p15, p16, p17) {
	return _in("0xBFE5756E7407064A", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), damage, p7, _ch(weaponHash), ownerPed, isAudible, isInvisible, _fv(speed), entity, p14, p15, p16, p17);
};

window.N_0xc0416b061f2b7e5e = function (p0) {
	return _in("0xC0416B061F2B7E5E", p0);
};

window.N_0xc098810437312fff = function (modData) {
	return _in("0xC098810437312FFF", modData, _r, _ri);
};

window.N_0xc0d2af00bcc234ca = function () {
	return _in("0xC0D2AF00BCC234CA", _r, _ri);
};

window.N_0xc0e0d686ddfc6eae = function () {
	return _in("0xC0E0D686DDFC6EAE", _r, _ri);
};

window.N_0xc0ed6438e6d39ba8 = function (p0, p1, p2) {
	return _in("0xC0ED6438E6D39BA8", p0, p1, p2);
};

window.N_0xc13c38e47ea5df31 = function (p0) {
	return _in("0xC13C38E47EA5DF31", _ii(p0) /* may be optional */, _r);
};

window.N_0xc141b8917e0017ec = function () {
	return _in("0xC141B8917E0017EC");
};

window.N_0xc15907d667f7cfb2 = function (vehicle, toggle) {
	return _in("0xC15907D667F7CFB2", vehicle, toggle);
};

window.N_0xc17ad0e5752becda = function (componentHash) {
	return _in("0xC17AD0E5752BECDA", _ch(componentHash), _r, _ri);
};

window.N_0xc1805d05e6d4fe10 = function (vehicle) {
	return _in("0xC1805D05E6D4FE10", vehicle);
};

window.N_0xc1952f3773ba18fe = function (p0, p1, p2) {
	return _in("0xC1952F3773BA18FE", p0, p1, p2);
};

window.N_0xc1f6ebf9a3d55538 = function (p0, p1) {
	return _in("0xC1F6EBF9A3D55538", p0, p1);
};

window.N_0xc1f981a6f74f0c23 = function (p0, p1) {
	return _in("0xC1F981A6F74F0C23", p0, p1);
};

window.N_0xc22912b1d85f26b1 = function (p0) {
	return _in("0xC22912B1D85F26B1", p0, _i, _i, _r);
};

window.N_0xc24075310a8b9cd1 = function (p0, p1, p2, p3, p4) {
	return _in("0xC24075310A8B9CD1", p0, p1, p2, p3, p4);
};

window.N_0xc265df9fb44a9fbd = function (p0) {
	return _in("0xC265DF9FB44A9FBD", p0, _r);
};

window.N_0xc2afffdabbdc2c5c = function (p0, p1) {
	return _in("0xC2AFFFDABBDC2C5C", p0, p1, _r);
};

window.N_0xc2d15bef167e27bc = function () {
	return _in("0xC2D15BEF167E27BC");
};

window.N_0xc2d2ad9eaae265b8 = function () {
	return _in("0xC2D2AD9EAAE265B8", _r, _ri);
};

window.N_0xc2eae3fb8cdbed31 = function (p0, p1, p2, p3) {
	return _in("0xC2EAE3FB8CDBED31", _ts(p0), _ts(p1), _ts(p2), _fv(p3));
};

window.N_0xc2ee020f5fb4db53 = function (ped) {
	return _in("0xC2EE020F5FB4DB53", ped);
};

window.N_0xc32ea7a2f6ca7557 = function () {
	return _in("0xC32EA7A2F6CA7557", _r, _ri);
};

window.N_0xc3376f42b1faccc6 = function (player) {
	return _in("0xC3376F42B1FACCC6", player);
};

window.N_0xc34bc448da29f5e9 = function (p0, p1) {
	return _in("0xC34BC448DA29F5E9", p0, p1);
};

window.N_0xc35a6d07c93802b2 = function () {
	return _in("0xC35A6D07C93802B2");
};

window.N_0xc361aa040d6637a8 = function (p0, p1) {
	return _in("0xC361AA040D6637A8", p0, p1);
};

window.N_0xc388a0f065f5bc34 = function (p0, p1) {
	return _in("0xC388A0F065F5BC34", p0, p1);
};

window.N_0xc38dc1e90d22547c = function () {
	return _in("0xC38DC1E90D22547C", _i, _i, _i, _r);
};

window.N_0xc3bfed92026a2aad = function (p0, p1, p2, p3, p4) {
	return _in("0xC3BFED92026A2AAD", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0xc3c221addde31a11 = function (p0) {
	return _in("0xC3C221ADDDE31A11", _fv(p0));
};

window.N_0xc3ead29ab273ece8 = function (p0) {
	return _in("0xC3EAD29AB273ECE8", _fv(p0));
};

window.N_0xc4278f70131baa6d = function (p0, p1) {
	return _in("0xC4278F70131BAA6D", p0, p1);
};

window.N_0xc42dd763159f3461 = function () {
	return _in("0xC42DD763159F3461", _r, _ri);
};

window.N_0xc434133d9ba52777 = function (p0, p1) {
	return _in("0xC434133D9BA52777", p0, p1, _r, _ri);
};

window.N_0xc45c27ef50f36adc = function (vehicle, p1) {
	return _in("0xC45C27EF50F36ADC", vehicle, p1);
};

window.N_0xc485e07e4f0b7958 = function (doorHash, p1, p2, p3) {
	return _in("0xC485E07E4F0B7958", _ch(doorHash), p1, p2, p3);
};

window.N_0xc4b3347bd68bd609 = function (p0) {
	return _in("0xC4B3347BD68BD609", p0);
};

window.N_0xc505036a35afd01b = function (p0) {
	return _in("0xC505036A35AFD01B", p0);
};

window.N_0xc50ce861b55eab8b = function (vehicle, p1) {
	return _in("0xC50CE861B55EAB8B", vehicle, p1);
};

window.N_0xc54a08c85ae4d410 = function (p0) {
	return _in("0xC54A08C85AE4D410", _fv(p0));
};

window.N_0xc55854c7d7274882 = function () {
	return _in("0xC55854C7D7274882");
};

window.N_0xc55a0b40ffb1ed23 = function () {
	return _in("0xC55A0B40FFB1ED23", _r, _ri);
};

window.N_0xc56fbf2f228e1dac = function (p0, p1, p2) {
	return _in("0xC56FBF2F228E1DAC", p0, p1, p2, _r, _ri);
};

window.N_0xc571d0e77d8bbc29 = function () {
	return _in("0xC571D0E77D8BBC29", _r, _ri);
};

window.N_0xc594b315edf2d4af = function (ped) {
	return _in("0xC594B315EDF2D4AF", ped);
};

window.N_0xc5be134ec7ba96a0 = function (p0, p1, p2, p3, p4) {
	return _in("0xC5BE134EC7BA96A0", p0, p1, p2, p3, p4);
};

window.N_0xc5c8f970d4edff71 = function (p0) {
	return _in("0xC5C8F970D4EDFF71", p0);
};

window.N_0xc6033d32241f6fb5 = function (p0, p1) {
	return _in("0xC6033D32241F6FB5", p0, p1);
};

window.N_0xc61b86c9f61eb404 = function (toggle) {
	return _in("0xC61B86C9F61EB404", toggle);
};

window.N_0xc6372ecd45d73bcd = function (p0) {
	return _in("0xC6372ECD45D73BCD", p0);
};

window.N_0xc64ded7ef0d2fe37 = function (p0) {
	return _in("0xC64DED7EF0D2FE37", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0xc65ab383cd91df98 = function () {
	return _in("0xC65AB383CD91DF98");
};

window.N_0xc6ad107ddc9054cc = function (modelHash) {
	return _in("0xC6AD107DDC9054CC", _ch(modelHash), _r, _rf);
};

window.N_0xc6e0e2616a7576bb = function () {
	return _in("0xC6E0E2616A7576BB", _r, _ri);
};

window.N_0xc70ddce56d0d3a99 = function () {
	return _in("0xC70DDCE56D0D3A99", _r, _ri);
};

window.N_0xc729991a9065376e = function (p0) {
	return _in("0xC729991A9065376E", p0);
};

window.N_0xc7397a83f7a2a462 = function (p1, p2) {
	return _in("0xC7397A83F7A2A462", _i, p1, p2, _i, _r);
};

window.N_0xc78e239ac5b2ddb9 = function (p0, p1, p2) {
	return _in("0xC78E239AC5B2DDB9", p0, p1, p2);
};

window.N_0xc79196dcb36f6121 = function (p0) {
	return _in("0xC79196DCB36F6121", p0);
};

window.N_0xc79ae21974b01fb2 = function () {
	return _in("0xC79AE21974B01FB2");
};

window.N_0xc7abac5de675ee3b = function () {
	return _in("0xC7ABAC5DE675EE3B", _r, _ri);
};

window.N_0xc7be335216b5ec7c = function () {
	return _in("0xC7BE335216B5EC7C", _r, _ri);
};

window.N_0xc7db36c24634f52b = function () {
	return _in("0xC7DB36C24634F52B");
};

window.N_0xc7e7181c09f33b69 = function (p0) {
	return _in("0xC7E7181C09F33B69", p0);
};

window.N_0xc7f29ca00f46350e = function (p0) {
	return _in("0xC7F29CA00F46350E", p0);
};

window.N_0xc819f3cbb62bf692 = function (render, p1, p2) {
	return _in("0xC819F3CBB62BF692", render, p1, p2);
};

window.N_0xc8391c309684595a = function () {
	return _in("0xC8391C309684595A");
};

window.N_0xc8407624cef2354b = function (p0, p1) {
	return _in("0xC8407624CEF2354B", p0, p1);
};

window.N_0xc84527e235fca219 = function (p0, p1, p2, type, p6) {
	return _in("0xC84527E235FCA219", _ts(p0), p1, _ts(p2), _i, _i, _ts(type), p6, _r);
};

window.N_0xc847b43f369ac0b5 = function () {
	return _in("0xC847B43F369AC0B5");
};

window.N_0xc87e740d9f3872cc = function () {
	return _in("0xC87E740D9F3872CC", _r, _ri);
};

window.N_0xc8b1b2425604cdd0 = function () {
	return _in("0xC8B1B2425604CDD0", _r, _ri);
};

window.N_0xc8b5c4a79cc18b94 = function (p0) {
	return _in("0xC8B5C4A79CC18B94", p0);
};

window.N_0xc8e1071177a23be5 = function () {
	return _in("0xC8E1071177A23BE5", _i, _i, _i, _r);
};

window.N_0xc8ede9bdbccba6d4 = function (p1, p2, p3) {
	return _in("0xC8EDE9BDBCCBA6D4", _i, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0xc8f3aaf93d0600bf = function (p0, p1, p2, p3) {
	return _in("0xC8F3AAF93D0600BF", p0, p1, p2, p3, _r, _ri);
};

window.N_0xc91c6c55199308ca = function (p0, p1, p2, p3) {
	return _in("0xC91C6C55199308CA", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0xc92717ef615b6704 = function (p0) {
	return _in("0xC92717EF615B6704", _fv(p0));
};

window.N_0xc980e62e33df1d5c = function () {
	return _in("0xC980E62E33DF1D5C", _i, _i, _r);
};

window.N_0xc9a763d8fe87436a = function (player) {
	return _in("0xC9A763D8FE87436A", player);
};

window.N_0xc9b18b4619f48f7b = function (p0) {
	return _in("0xC9B18B4619F48F7B", _fv(p0));
};

window.N_0xc9b43a33d09cada7 = function (p0) {
	return _in("0xC9B43A33D09CADA7", p0);
};

window.N_0xca465d9cc0d231ba = function (p0) {
	return _in("0xCA465D9CC0D231BA", p0);
};

window.N_0xca4ac3eaae46ec7b = function (p0, p1) {
	return _in("0xCA4AC3EAAE46EC7B", p0, p1, _r, _ri);
};

window.N_0xca4ae345a153d573 = function (p0) {
	return _in("0xCA4AE345A153D573", p0);
};

window.N_0xca575c391fea25cc = function (p0) {
	return _in("0xCA575C391FEA25CC", p0);
};

window.N_0xca6b2f7ce32ab653 = function (p0, p2) {
	return _in("0xCA6B2F7CE32AB653", p0, _i, p2, _r);
};

window.N_0xca94551b50b4932c = function (p0) {
	return _in("0xCA94551B50B4932C", p0, _r, _ri);
};

window.N_0xca9d2aa3e326d720 = function () {
	return _in("0xCA9D2AA3E326D720", _r);
};

window.N_0xcac57395b151135f = function (player, p1) {
	return _in("0xCAC57395B151135F", player, p1);
};

window.N_0xcac66558b944da67 = function (vehicle, p1) {
	return _in("0xCAC66558B944DA67", vehicle, p1);
};

window.N_0xcada5a0d0702381e = function (p0, soundset) {
	return _in("0xCADA5A0D0702381E", _ts(p0), _ts(soundset));
};

window.N_0xcae55f48d3d7875c = function (p0) {
	return _in("0xCAE55F48D3D7875C", p0);
};

window.N_0xcb00196b31c39eb1 = function (p0, p1, p2, p3) {
	return _in("0xCB00196B31C39EB1", p0, p1, p2, p3);
};

window.N_0xcb0360efefb2580d = function (p0) {
	return _in("0xCB0360EFEFB2580D", p0);
};

window.N_0xcb215c4b56a7fae7 = function (p0) {
	return _in("0xCB215C4B56A7FAE7", p0, _r, _ri);
};

window.N_0xcb645e85e97ea48b = function () {
	return _in("0xCB645E85E97EA48B", _r, _ri);
};

window.N_0xcb82a0bf0e3e3265 = function (p0) {
	return _in("0xCB82A0BF0E3E3265", p0, _r, _ri);
};

window.N_0xcb968b53fc7f916d = function (p0, p1, p2, p3) {
	return _in("0xCB968B53FC7F916D", p0, p1, p2, p3);
};

window.N_0xcc25a4553dfbf9ea = function (p0, p1, p2, p3, p4) {
	return _in("0xCC25A4553DFBF9EA", p0, p1, p2, p3, p4);
};

window.N_0xcc3fdded67bcfc63 = function () {
	return _in("0xCC3FDDED67BCFC63");
};

window.N_0xcc6e3b6bb69501f1 = function (p0) {
	return _in("0xCC6E3B6BB69501F1", p0, _r, _ri);
};

window.N_0xcc6e963682533882 = function (p0) {
	return _in("0xCC6E963682533882", p0);
};

window.N_0xcc9682b8951c5229 = function (ped, r, g, b, p4) {
	return _in("0xCC9682B8951C5229", ped, r, g, b, p4);
};

window.N_0xcca4318e1ab03f1f = function (p0) {
	return _in("0xCCA4318E1AB03F1F", _ii(p0) /* may be optional */, _r);
};

window.N_0xccd078c2665d2973 = function (p0) {
	return _in("0xCCD078C2665D2973", p0);
};

window.N_0xcd018c591f94cb43 = function (p0, p1) {
	return _in("0xCD018C591F94CB43", p0, p1);
};

window.N_0xcd71a4ecab22709e = function (entity) {
	return _in("0xCD71A4ECAB22709E", entity);
};

window.N_0xcd74233600c4ea6b = function (p0) {
	return _in("0xCD74233600C4EA6B", p0);
};

window.N_0xcd79a550999d7d4f = function (p0) {
	return _in("0xCD79A550999D7D4F", p0, _r, _ri);
};

window.N_0xcda1c62be2777802 = function (p0, p1, p2) {
	return _in("0xCDA1C62BE2777802", p0, p1, p2);
};

window.N_0xcdca26e80faecb8f = function () {
	return _in("0xCDCA26E80FAECB8F");
};

window.N_0xce5aa445aba8dee0 = function (p0) {
	return _in("0xCE5AA445ABA8DEE0", _ii(p0) /* may be optional */, _r, _ri);
};

window.N_0xce5d0e5e315db238 = function (p0, p1, p2, p3, p4) {
	return _in("0xCE5D0E5E315DB238", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0xce6294a232d03786 = function (p0, p1) {
	return _in("0xCE6294A232D03786", p0, p1, _r, _rv);
};

window.N_0xcea553e35c2246e1 = function (p0, p1, p2) {
	return _in("0xCEA553E35C2246E1", p0, p1, p2);
};

window.N_0xcea7c8e1b48ff68c = function (p0, p1) {
	return _in("0xCEA7C8E1B48FF68C", p0, p1);
};

window.N_0xced08cbe8ebb97c7 = function (p0, p1) {
	return _in("0xCED08CBE8EBB97C7", _fv(p0), _fv(p1));
};

window.N_0xceda60a74219d064 = function (p0, p1) {
	return _in("0xCEDA60A74219D064", p0, p1);
};

window.N_0xcef214315d276fd1 = function (p0) {
	return _in("0xCEF214315D276FD1", p0);
};

window.N_0xcf1182f682f65307 = function (p0, p1) {
	return _in("0xCF1182F682F65307", p0, _fv(p1));
};

window.N_0xcf38dafbb49ede5e = function (p0) {
	return _in("0xCF38DAFBB49EDE5E", _ii(p0) /* may be optional */, _r);
};

window.N_0xcf61d4b4702ee9eb = function () {
	return _in("0xCF61D4B4702EE9EB", _r, _ri);
};

window.N_0xcf9159024555488c = function (p0) {
	return _in("0xCF9159024555488C", p0);
};

window.N_0xcfd115b373c0df63 = function (p0, p1) {
	return _in("0xCFD115B373C0DF63", p0, _ii(p1) /* may be optional */);
};

window.N_0xcfd778e7904c255e = function (vehicle) {
	return _in("0xCFD778E7904C255E", vehicle);
};

window.N_0xcfeb46dcd7d8d5eb = function (p0) {
	return _in("0xCFEB46DCD7D8D5EB", p0);
};

window.N_0xcfeb8af24fc1d0bb = function (p0) {
	return _in("0xCFEB8AF24FC1D0BB", p0);
};

window.N_0xd0082607100d7193 = function () {
	return _in("0xD0082607100D7193", _r, _rf);
};

window.N_0xd00d76a7dfc9d852 = function (p0) {
	return _in("0xD00D76A7DFC9D852", _ii(p0) /* may be optional */);
};

window.N_0xd01005d2ba2eb778 = function (p0) {
	return _in("0xD01005D2BA2EB778", _ii(p0) /* may be optional */);
};

window.N_0xd01015c7316ae176 = function (ped, p1) {
	return _in("0xD01015C7316AE176", ped, _ts(p1), _r, _ri);
};

window.N_0xd05d1a6c74da3498 = function (p1) {
	return _in("0xD05D1A6C74DA3498", _i, p1, _i, _r);
};

window.N_0xd0a484cb2f829fbe = function () {
	return _in("0xD0A484CB2F829FBE", _r, _ri);
};

window.N_0xd0bc1c6fb18ee154 = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xD0BC1C6FB18EE154", p0, p1, p2, p3, p4, p5, p6);
};

window.N_0xd0ee05fe193646ea = function () {
	return _in("0xD0EE05FE193646EA", _i, _i, _i, _r);
};

window.N_0xd10282b6e3751ba0 = function () {
	return _in("0xD10282B6E3751BA0", _r, _ri);
};

window.N_0xd1032e482629049e = function (p0) {
	return _in("0xD1032E482629049E", p0);
};

window.N_0xd10f442036302d50 = function (p0, p1, p2) {
	return _in("0xD10F442036302D50", p0, p1, p2);
};

window.N_0xd12882d3ff82bf11 = function () {
	return _in("0xD12882D3FF82BF11");
};

window.N_0xd1871251f3b5acd7 = function (ped) {
	return _in("0xD1871251F3B5ACD7", ped, _r);
};

window.N_0xd1942374085c8469 = function (p0) {
	return _in("0xD1942374085C8469", p0);
};

window.N_0xd1a1ee3b4fa8e760 = function (p0) {
	return _in("0xD1A1EE3B4FA8E760", p0);
};

window.N_0xd1b0f412f109ea5d = function (p0, p1) {
	return _in("0xD1B0F412F109EA5D", p0, p1);
};

window.N_0xd1c55b110e4df534 = function (p0) {
	return _in("0xD1C55B110E4DF534", p0);
};

window.N_0xd1c7cb175e012964 = function (scaleformHandle) {
	return _in("0xD1C7CB175E012964", scaleformHandle, _r);
};

window.N_0xd1c9b92bdd3f151d = function (p0, p1, p2) {
	return _in("0xD1C9B92BDD3F151D", p0, p1, p2);
};

window.N_0xd1f8363dfad03848 = function (p0) {
	return _in("0xD1F8363DFAD03848", _fv(p0));
};

window.N_0xd202b92cbf1d816f = function (type, image, text) {
	return _in("0xD202B92CBF1D816F", type, image, _ts(text), _r, _ri);
};

window.N_0xd2049635deb9c375 = function () {
	return _in("0xD2049635DEB9C375");
};

window.N_0xd2209be128b5418c = function (graphicsName) {
	return _in("0xD2209BE128B5418C", _ts(graphicsName));
};

window.N_0xd2300034310557e4 = function (vehicle, p1) {
	return _in("0xD2300034310557E4", vehicle, p1);
};

window.N_0xd261ba3e7e998072 = function (p0, p1) {
	return _in("0xD261BA3E7E998072", p0, _fv(p1));
};

window.N_0xd2936cab8b58fcbd = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xD2936CAB8B58FCBD", p0, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _fv(p7));
};

window.N_0xd2b315b6689d537d = function (player, p1) {
	return _in("0xD2B315B6689D537D", player, p1);
};

window.N_0xd2b32be3fc1626c6 = function () {
	return _in("0xD2B32BE3FC1626C6");
};

window.N_0xd2cc78cd3d0b50f9 = function (p0, p1) {
	return _in("0xD2CC78CD3D0B50F9", p0, p1);
};

window.N_0xd2dccd8e16e20997 = function (p0) {
	return _in("0xD2DCCD8E16E20997", p0);
};

window.N_0xd302e99edf0449cf = function (p0) {
	return _in("0xD302E99EDF0449CF", p0, _r, _ri);
};

window.N_0xd313de83394af134 = function () {
	return _in("0xD313DE83394AF134", _r, _ri);
};

window.N_0xd3301660a57c9272 = function (p0) {
	return _in("0xD3301660A57C9272", p0);
};

window.N_0xd33daa36272177c4 = function (ped) {
	return _in("0xD33DAA36272177C4", ped);
};

window.N_0xd38c4a6d047c019d = function () {
	return _in("0xD38C4A6D047C019D", _r, _ri);
};

window.N_0xd39b3fff8ffdd5bf = function (p0) {
	return _in("0xD39B3FFF8FFDD5BF", p0, _r, _ri);
};

window.N_0xd39d13c9febf0511 = function (p0) {
	return _in("0xD39D13C9FEBF0511", p0);
};

window.N_0xd3a10fc7fd8d98cd = function () {
	return _in("0xD3A10FC7FD8D98CD", _r);
};

window.N_0xd3a6a0ef48823a8c = function () {
	return _in("0xD3A6A0EF48823A8C", _r, _ri);
};

window.N_0xd3d15555431ab793 = function () {
	return _in("0xD3D15555431AB793", _r, _ri);
};

window.N_0xd3e51c0ab8c26eee = function (p0, p1) {
	return _in("0xD3E51C0AB8C26EEE", p0, p1, _r, _ri);
};

window.N_0xd40aac51e8e4c663 = function (p0) {
	return _in("0xD40AAC51E8E4C663", p0, _r, _ri);
};

window.N_0xd4196117af7bb974 = function (p0, p1) {
	return _in("0xD4196117AF7BB974", p0, p1, _r, _ri);
};

window.N_0xd4438c0564490e63 = function () {
	return _in("0xD4438C0564490E63");
};

window.N_0xd4793dff3af2abcd = function () {
	return _in("0xD4793DFF3AF2ABCD");
};

window.N_0xd4b8e3d1917bc86b = function (toggle) {
	return _in("0xD4B8E3D1917BC86B", toggle);
};

window.N_0xd4c4642cb7f50b5d = function (vehicle) {
	return _in("0xD4C4642CB7F50B5D", vehicle, _r);
};

window.N_0xd53acdbef24a46e8 = function () {
	return _in("0xD53ACDBEF24A46E8", _r, _ri);
};

window.N_0xd558bec0bba7e8d2 = function (p0, p1, p2, p3, p4) {
	return _in("0xD558BEC0BBA7E8D2", p0, p1, p2, p3, p4);
};

window.N_0xd565f438137f0e10 = function (p0, p1) {
	return _in("0xD565F438137F0E10", p0, p1);
};

window.N_0xd57aaae0e2214d11 = function () {
	return _in("0xD57AAAE0E2214D11");
};

window.N_0xd5a4b59980401588 = function (p0, p1) {
	return _in("0xD5A4B59980401588", p0, p1, _i, _i, _r);
};

window.N_0xd5bb4025ae449a4e = function (p0, p1, p2) {
	return _in("0xD5BB4025AE449A4E", p0, _ts(p1), _fv(p2));
};

window.N_0xd642319c54aadeb6 = function () {
	return _in("0xD642319C54AADEB6", _r, _ri);
};

window.N_0xd66c9e72b3cc4982 = function (p1) {
	return _in("0xD66C9E72B3CC4982", _i, p1, _r, _ri);
};

window.N_0xd6781e42755531f7 = function (p0) {
	return _in("0xD6781E42755531F7", p0);
};

window.N_0xd68a5ff8a3a89874 = function (r, g, b, a) {
	return _in("0xD68A5FF8A3A89874", r, g, b, a);
};

window.N_0xd69411aa0cebf9e9 = function (ped, p1, p2, p3) {
	return _in("0xD69411AA0CEBF9E9", ped, p1, p2, p3);
};

window.N_0xd6ade981781fca09 = function (p0) {
	return _in("0xD6ADE981781FCA09", _fv(p0));
};

window.N_0xd7021272eb0a451e = function (p0) {
	return _in("0xD7021272EB0A451E", _ts(p0));
};

window.N_0xd7360051c885628b = function () {
	return _in("0xD7360051C885628B", _r, _ri);
};

window.N_0xd76eeef746057fd6 = function (p0) {
	return _in("0xD76EEEF746057FD6", p0, _r, _ri);
};

window.N_0xd79185689f8fd5df = function (p0) {
	return _in("0xD79185689F8FD5DF", p0);
};

window.N_0xd7b6c73cad419bcf = function (p0) {
	return _in("0xD7B6C73CAD419BCF", p0);
};

window.N_0xd7c95d322ff57522 = function () {
	return _in("0xD7C95D322FF57522", _r, _ri);
};

window.N_0xd7cccba28c4ecaf0 = function (p0, p1, p2, p3, p4) {
	return _in("0xD7CCCBA28C4ECAF0", p0, p1, p2, p3, p4);
};

window.N_0xd7d0b00177485411 = function (p0, p1) {
	return _in("0xD7D0B00177485411", p0, _fv(p1));
};

window.N_0xd7d22f5592aed8ba = function (p0) {
	return _in("0xD7D22F5592AED8BA", p0, _r, _ri);
};

window.N_0xd801cc02177fa3f1 = function () {
	return _in("0xD801CC02177FA3F1");
};

window.N_0xd80a80346a45d761 = function (p0) {
	return _in("0xD80A80346A45D761", p0, _r, _ri);
};

window.N_0xd8122c407663b995 = function () {
	return _in("0xD8122C407663B995", _r, _ri);
};

window.N_0xd81b7f27bc773e66 = function (p0, p1, p2, p3, p4) {
	return _in("0xD81B7F27BC773E66", p0, p1, p2, p3, p4);
};

window.N_0xd821056b9acf8052 = function (p0, p1) {
	return _in("0xD821056B9ACF8052", p0, p1);
};

window.N_0xd8295af639fd9cb8 = function (p0) {
	return _in("0xD8295AF639FD9CB8", p0);
};

window.N_0xd8c3be3ee94caf2d = function (p0, p1, p2, p3, p4) {
	return _in("0xD8C3BE3EE94CAF2D", p0, p1, p2, p3, p4);
};

window.N_0xd8e694757bcea8e9 = function () {
	return _in("0xD8E694757BCEA8E9");
};

window.N_0xd9454b5752c857dc = function () {
	return _in("0xD9454B5752C857DC");
};

window.N_0xd95cc5d2ab15a09f = function (p0) {
	return _in("0xD95CC5D2AB15A09F", p0, _r, _ri);
};

window.N_0xd972df67326f966e = function () {
	return _in("0xD972DF67326F966E");
};

window.N_0xd99db210089617fe = function (p0, p1, p2) {
	return _in("0xD99DB210089617FE", p0, p1, p2);
};

window.N_0xd9b71952f78a2640 = function (doorHash, p1) {
	return _in("0xD9B71952F78A2640", _ch(doorHash), p1);
};

window.N_0xd9f692d349249528 = function () {
	return _in("0xD9F692D349249528");
};

window.N_0xda024bdbd600f44a = function (p0) {
	return _in("0xDA024BDBD600F44A", _ii(p0) /* may be optional */);
};

window.N_0xda05194260cdcdf9 = function (p0, p1) {
	return _in("0xDA05194260CDCDF9", p0, p1);
};

window.N_0xda07819e452ffe8f = function (p0) {
	return _in("0xDA07819E452FFE8F", p0);
};

window.N_0xdab963831dbfd3f4 = function (p0, p1, p2, p3, p4) {
	return _in("0xDAB963831DBFD3F4", p0, p1, p2, p3, p4, _r, _ri);
};

window.N_0xdac073c7901f9e15 = function (p0) {
	return _in("0xDAC073C7901F9E15", p0);
};

window.N_0xdaf80797fc534bec = function (p0) {
	return _in("0xDAF80797FC534BEC", p0);
};

window.N_0xdaf87174be7454ff = function (p0) {
	return _in("0xDAF87174BE7454FF", p0, _r);
};

window.N_0xdb34e8d56fc13b08 = function (p0, p1, p2) {
	return _in("0xDB34E8D56FC13B08", p0, p1, p2);
};

window.N_0xdb41d07a45a6d4b7 = function (p0) {
	return _in("0xDB41D07A45A6D4B7", p0, _r, _ri);
};

window.N_0xdb90c6cca48940f1 = function (p0) {
	return _in("0xDB90C6CCA48940F1", p0);
};

window.N_0xdba3c090e3d74690 = function (vehicle) {
	return _in("0xDBA3C090E3D74690", vehicle);
};

window.N_0xdbaa5ec848ba2d46 = function (p0, p1) {
	return _in("0xDBAA5EC848BA2D46", p0, p1);
};

window.N_0xdbc631f109350b8c = function (vehicle, p1) {
	return _in("0xDBC631F109350B8C", vehicle, p1);
};

window.N_0xdbc966a01c02bca7 = function (p0, p1, p2) {
	return _in("0xDBC966A01C02BCA7", p0, p1, p2);
};

window.N_0xdc18531d7019a535 = function (p0, p1) {
	return _in("0xDC18531D7019A535", p0, p1, _r);
};

window.N_0xdc459cfa0cce245b = function (p0) {
	return _in("0xDC459CFA0CCE245B", p0);
};

window.N_0xdc48473142545431 = function () {
	return _in("0xDC48473142545431", _r, _ri);
};

window.N_0xdc54a7af8b3a14ef = function () {
	return _in("0xDC54A7AF8B3A14EF", _r, _ri);
};

window.N_0xdc57a637a20006ed = function (p0, p1) {
	return _in("0xDC57A637A20006ED", p0, p1);
};

window.N_0xdc64d2c53493ed12 = function (player) {
	return _in("0xDC64D2C53493ED12", player);
};

window.N_0xdc6f8601faf2e893 = function (entity, p1) {
	return _in("0xDC6F8601FAF2E893", entity, p1);
};

window.N_0xdc9274a7ef6b2867 = function () {
	return _in("0xDC9274A7EF6B2867", _r, _ri);
};

window.N_0xdc9da9e8789f5246 = function () {
	return _in("0xDC9DA9E8789F5246");
};

window.N_0xdcca191df9980fd7 = function (ped) {
	return _in("0xDCCA191DF9980FD7", ped, _r);
};

window.N_0xdce97bdf8a0eabc8 = function () {
	return _in("0xDCE97BDF8A0EABC8", _r, _ri);
};

window.N_0xdcfb5d4db8bf367e = function (p0, p1) {
	return _in("0xDCFB5D4DB8BF367E", p0, p1);
};

window.N_0xdd2238f57b977751 = function (p0) {
	return _in("0xDD2238F57B977751", p0, _r);
};

window.N_0xdd2620b7b9d16ff1 = function (player, p1) {
	return _in("0xDD2620B7B9D16FF1", player, _fv(p1), _r);
};

window.N_0xdd6bcf9e94425df9 = function () {
	return _in("0xDD6BCF9E94425DF9");
};

window.N_0xdd6cb2cce7c2735c = function (type, button, text) {
	return _in("0xDD6CB2CCE7C2735C", type, _ts(button), _ts(text), _r, _ri);
};

window.N_0xdd79df9f4d26e1c9 = function () {
	return _in("0xDD79DF9F4D26E1C9");
};

window.N_0xddc635d5b3262c56 = function (p0) {
	return _in("0xDDC635D5B3262C56", _ii(p0) /* may be optional */);
};

window.N_0xde03620f8703a9df = function () {
	return _in("0xDE03620F8703A9DF", _r, _ri);
};

window.N_0xde45d1a1ef45ee61 = function (player, toggle) {
	return _in("0xDE45D1A1EF45EE61", player, toggle);
};

window.N_0xde81239437e8c5a8 = function () {
	return _in("0xDE81239437E8C5A8");
};

window.N_0xdea36202fc3382df = function (p0) {
	return _in("0xDEA36202FC3382DF", p0);
};

window.N_0xdeaaf77eb3687e97 = function (p0, p1) {
	return _in("0xDEAAF77EB3687E97", p0, _ii(p1) /* may be optional */, _r, _ri);
};

window.N_0xdeadc0dedeadc0de = function (object) {
	return _in("0xDEADC0DEDEADC0DE", object);
};

window.N_0xdeb2b99a1af1a2a6 = function (p0) {
	return _in("0xDEB2B99A1AF1A2A6", p0, _r, _ri);
};

window.N_0xded5af5a0ea4b297 = function (driver, p1) {
	return _in("0xDED5AF5A0EA4B297", driver, _fv(p1));
};

window.N_0xdf4b952f7d381b95 = function () {
	return _in("0xDF4B952F7D381B95", _r, _ri);
};

window.N_0xdf649c4e9afdd788 = function () {
	return _in("0xDF649C4E9AFDD788", _r, _ri);
};

window.N_0xdf6ca0330f2e737b = function (p0, p1) {
	return _in("0xDF6CA0330F2E737B", p0, p1);
};

window.N_0xdf7e3eeb29642c38 = function (vehicle, p1, p2) {
	return _in("0xDF7E3EEB29642C38", vehicle, p1, p2);
};

window.N_0xdf97cdd4fc08fd34 = function (p0) {
	return _in("0xDF97CDD4FC08FD34", p0, _r);
};

window.N_0xdfa80cb25d0a19b3 = function () {
	return _in("0xDFA80CB25D0A19B3", _r, _ri);
};

window.N_0xdfb4138eefed7b81 = function (ped, weaponHash, radius, p4) {
	return _in("0xDFB4138EEFED7B81", ped, _ch(weaponHash), _fv(radius), _i, p4, _r);
};

window.N_0xdfc8cbc606fdb0fc = function () {
	return _in("0xDFC8CBC606FDB0FC", _r, _rf);
};

window.N_0xdffa5be8381c3314 = function () {
	return _in("0xDFFA5BE8381C3314", _r, _ri);
};

window.N_0xdffcef48e511db48 = function (p0, p1) {
	return _in("0xDFFCEF48E511DB48", p0, p1);
};

window.N_0xe0130b41d3cf4574 = function () {
	return _in("0xE0130B41D3CF4574", _r, _rf);
};

window.N_0xe01903c47c7ac89e = function () {
	return _in("0xE01903C47C7AC89E");
};

window.N_0xe058175f8eafe79a = function (p0) {
	return _in("0xE058175F8EAFE79A", p0);
};

window.N_0xe05dd0e9707003a3 = function (p0, p1) {
	return _in("0xE05DD0E9707003A3", p0, p1);
};

window.N_0xe0a6138401bcb837 = function () {
	return _in("0xE0A6138401BCB837", _r, _ri);
};

window.N_0xe111a7c0d200cbc5 = function (p0, p1) {
	return _in("0xE111A7C0D200CBC5", p0, _fv(p1));
};

window.N_0xe12abe5e3a389a6c = function (entity, p1) {
	return _in("0xE12ABE5E3A389A6C", entity, p1);
};

window.N_0xe154b48b68ef72bc = function (p0) {
	return _in("0xE154B48B68EF72BC", p0, _r, _ri);
};

window.N_0xe16142b94664defd = function (p0, p1) {
	return _in("0xE16142B94664DEFD", p0, p1);
};

window.N_0xe1615ec03b3bb4fd = function () {
	return _in("0xE1615EC03B3BB4FD", _r);
};

window.N_0xe16aa70ce9beedc3 = function (p0) {
	return _in("0xE16AA70CE9BEEDC3", p0, _r, _ri);
};

window.N_0xe1c8709406f2c41c = function () {
	return _in("0xE1C8709406F2C41C");
};

window.N_0xe1ca84ebf72e691d = function (p0, p1) {
	return _in("0xE1CA84EBF72E691D", p0, p1, _i, _i, _i);
};

window.N_0xe1cd1e48e025e661 = function () {
	return _in("0xE1CD1E48E025E661");
};

window.N_0xe23adc6fcb1f29ae = function (p0, p1, p2) {
	return _in("0xE23ADC6FCB1F29AE", p0, p1, p2);
};

window.N_0xe260e0bb9cd995ac = function (p0) {
	return _in("0xE260E0BB9CD995AC", p0, _r);
};

window.N_0xe266ed23311f24d4 = function (p0, p3, p4, p5) {
	return _in("0xE266ED23311F24D4", p0, _i, _i, _fv(p3), _fv(p4), p5);
};

window.N_0xe2892e7e55d7073a = function (p0) {
	return _in("0xE2892E7E55D7073A", _fv(p0));
};

window.N_0xe2f53f172b45ede1 = function () {
	return _in("0xE2F53F172B45EDE1");
};

window.N_0xe301bd63e9e13cf0 = function (cargobob, vehicle) {
	return _in("0xE301BD63E9E13CF0", cargobob, vehicle);
};

window.N_0xe30524e1871f481d = function (p0) {
	return _in("0xE30524E1871F481D", p0);
};

window.N_0xe3261d791eb44acb = function (p0) {
	return _in("0xE3261D791EB44ACB", p0);
};

window.N_0xe33ffa906ce74880 = function (vehicle, p1) {
	return _in("0xE33FFA906CE74880", vehicle, p1, _r);
};

window.N_0xe35b38a27e8e7179 = function (p0) {
	return _in("0xE35B38A27E8E7179", p0, _r, _ri);
};

window.N_0xe36a98d8ab3d3c66 = function (p0) {
	return _in("0xE36A98D8AB3D3C66", p0);
};

window.N_0xe3a7742e0b7a2f8b = function (x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed, entity) {
	return _in("0xE3A7742E0B7A2F8B", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), damage, p7, _ch(weaponHash), ownerPed, isAudible, isInvisible, _fv(speed), entity);
};

window.N_0xe3b05614dce1d014 = function (p0) {
	return _in("0xE3B05614DCE1D014", p0, _r, _ri);
};

window.N_0xe3d969d2785ffb5e = function () {
	return _in("0xE3D969D2785FFB5E");
};

window.N_0xe3e2c1b4c59dbc77 = function (p0) {
	return _in("0xE3E2C1B4C59DBC77", p0);
};

window.N_0xe3e5a7c64ca2c6ed = function () {
	return _in("0xE3E5A7C64CA2C6ED", _r, _ri);
};

window.N_0xe3ebaae484798530 = function (vehicle, p1) {
	return _in("0xE3EBAAE484798530", vehicle, p1);
};

window.N_0xe43a13c9e4cccbcf = function (ped, p1) {
	return _in("0xE43A13C9E4CCCBCF", ped, p1);
};

window.N_0xe44a982368a4af23 = function (vehicle, vehicle2) {
	return _in("0xE44A982368A4AF23", vehicle, vehicle2);
};

window.N_0xe45087d85f468bc2 = function (p0, p1) {
	return _in("0xE45087D85F468BC2", p0, _ii(p1) /* may be optional */);
};

window.N_0xe4723db6e736ccff = function (ped, p1, p2, p3, p4, p5, p6) {
	return _in("0xE4723DB6E736CCFF", ped, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6);
};

window.N_0xe496a53ba5f50a56 = function (p0) {
	return _in("0xE496A53BA5F50A56", p0, _r, _ri);
};

window.N_0xe4dcec7fd5b739a5 = function (ped) {
	return _in("0xE4DCEC7FD5B739A5", ped);
};

window.N_0xe4e2fd323574965c = function (p0, p1) {
	return _in("0xE4E2FD323574965C", p0, p1);
};

window.N_0xe4e6dd5566d28c82 = function () {
	return _in("0xE4E6DD5566D28C82");
};

window.N_0xe52b8e7f85d39a08 = function (ped, unk) {
	return _in("0xE52B8E7F85D39A08", ped, unk);
};

window.N_0xe532ec1a63231b4f = function (p0, p1) {
	return _in("0xE532EC1A63231B4F", p0, p1);
};

window.N_0xe547e9114277098f = function () {
	return _in("0xE547E9114277098F", _r, _ri);
};

window.N_0xe574a662acaefbb1 = function () {
	return _in("0xE574A662ACAEFBB1");
};

window.N_0xe5810ac70602f2f5 = function (vehicle, p1) {
	return _in("0xE5810AC70602F2F5", vehicle, _fv(p1));
};

window.N_0xe59343e9e96529e7 = function () {
	return _in("0xE59343E9E96529E7", _r, _ri);
};

window.N_0xe599a503b3837e1b = function () {
	return _in("0xE599A503B3837E1B", _r, _rf);
};

window.N_0xe620fd3512a04f18 = function (p0) {
	return _in("0xE620FD3512A04F18", _fv(p0));
};

window.N_0xe63d7c6eececb66b = function (p0) {
	return _in("0xE63D7C6EECECB66B", p0);
};

window.N_0xe64a3ca08dfa37a9 = function (p0) {
	return _in("0xE64A3CA08DFA37A9", p0, _r);
};

window.N_0xe66c690248f11150 = function (p0, p1) {
	return _in("0xE66C690248F11150", p0, p1);
};

window.N_0xe6717e652b8c8d8a = function (p0, p1) {
	return _in("0xE6717E652B8C8D8A", p0, p1);
};

window.N_0xe67c6dfd386ea5e7 = function (p0) {
	return _in("0xE67C6DFD386EA5E7", p0);
};

window.N_0xe6869becdd8f2403 = function (p0, p1) {
	return _in("0xE6869BECDD8F2403", p0, p1);
};

window.N_0xe6a9f00d4240b519 = function (p0, p1) {
	return _in("0xE6A9F00D4240B519", p0, p1);
};

window.N_0xe6ac6c45fbe83004 = function (x1, y1, z1, x2, y2, z2, radius, flags, entity, p9) {
	return _in("0xE6AC6C45FBE83004", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(radius), flags, entity, p9, _r, _ri);
};

window.N_0xe6b0e8cfc3633bf0 = function (vehicle) {
	return _in("0xE6B0E8CFC3633BF0", vehicle, _r, _ri);
};

window.N_0xe6c0c80b8c867537 = function (p0) {
	return _in("0xE6C0C80B8C867537", p0);
};

window.N_0xe6ca85e7259ce16b = function (p0) {
	return _in("0xE6CA85E7259CE16B", p0);
};

window.N_0xe6de0561d9232a64 = function () {
	return _in("0xE6DE0561D9232A64");
};

window.N_0xe6f13851780394da = function (vehicle, p1) {
	return _in("0xE6F13851780394DA", vehicle, _fv(p1));
};

window.N_0xe70ba7b90f8390dc = function (p0, p1, p2, p3) {
	return _in("0xE70BA7B90F8390DC", p0, p1, p2, p3);
};

window.N_0xe73364db90778ffa = function () {
	return _in("0xE73364DB90778FFA", _r, _ri);
};

window.N_0xe791df1f73ed2c8b = function (p0) {
	return _in("0xE791DF1F73ED2C8B", p0, _r, _ri);
};

window.N_0xe7df4e0545dfb56e = function (p0, p1, p2) {
	return _in("0xE7DF4E0545DFB56E", p0, p1, p2);
};

window.N_0xe7e4c198b0185900 = function (p0, p1, p2) {
	return _in("0xE7E4C198B0185900", p0, p1, p2);
};

window.N_0xe82728f0de75d13a = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24) {
	return _in("0xE82728F0DE75D13A", p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24);
};

window.N_0xe827b9382cfb41ba = function (p0, p1, p2, p3) {
	return _in("0xE827B9382CFB41BA", p0, p1, p2, p3);
};

window.N_0xe83a3e3557a56640 = function (p0) {
	return _in("0xE83A3E3557A56640", _ts(p0));
};

window.N_0xe842a9398079bd82 = function (vehicle, p1) {
	return _in("0xE842A9398079BD82", vehicle, _fv(p1));
};

window.N_0xe84eb93729c5f36a = function (p0) {
	return _in("0xE84EB93729C5F36A", p0, _r, _ri);
};

window.N_0xe851e480b814d4ba = function (vehicle, p1) {
	return _in("0xE851E480B814D4BA", vehicle, p1);
};

window.N_0xe861d0b05c7662b8 = function (p0, p1, p2) {
	return _in("0xE861D0B05C7662B8", p0, p1, p2);
};

window.N_0xe8853fbce7d8d0d6 = function () {
	return _in("0xE8853FBCE7D8D0D6", _r, _ri);
};

window.N_0xe8a169e666cbc541 = function () {
	return _in("0xE8A169E666CBC541", _r, _ri);
};

window.N_0xe8b0b270b6e7c76e = function (p0, p1, p2, p3) {
	return _in("0xE8B0B270B6E7C76E", p0, p1, p2, p3);
};

window.N_0xe8b9c0ec9e183f35 = function () {
	return _in("0xE8B9C0EC9E183F35", _r, _ri);
};

window.N_0xe906ec930f5fe7c8 = function (p0, p1) {
	return _in("0xE906EC930F5FE7C8", p0, p1);
};

window.N_0xe95b0c7d5ba3b96b = function (p0) {
	return _in("0xE95B0C7D5BA3B96B", p0, _r);
};

window.N_0xe95c8a1875a02ca4 = function (p0, p1, p2) {
	return _in("0xE95C8A1875A02CA4", p0, p1, p2);
};

window.N_0xe9b99b6853181409 = function () {
	return _in("0xE9B99B6853181409");
};

window.N_0xe9ea16d6e54cdca4 = function (p0, p1) {
	return _in("0xE9EA16D6E54CDCA4", p0, p1, _r, _ri);
};

window.N_0xea14eef5b7cd2c30 = function () {
	return _in("0xEA14EEF5B7CD2C30", _r, _ri);
};

window.N_0xea2f2061875eed90 = function () {
	return _in("0xEA2F2061875EED90", _r, _ri);
};

window.N_0xea9960d07dadcf10 = function (p0) {
	return _in("0xEA9960D07DADCF10", p0, _r, _ri);
};

window.N_0xeaf0fa793d05c592 = function () {
	return _in("0xEAF0FA793D05C592", _r, _ri);
};

window.N_0xeb078ca2b5e82add = function (p0, p1) {
	return _in("0xEB078CA2B5E82ADD", p0, p1);
};

window.N_0xeb2104e905c6f2e9 = function () {
	return _in("0xEB2104E905C6F2E9", _r, _ri);
};

window.N_0xeb2bf817463dfa28 = function (p0, p1) {
	return _in("0xEB2BF817463DFA28", p0, p1, _r, _ri);
};

window.N_0xeb2d525b57f42b40 = function () {
	return _in("0xEB2D525B57F42B40");
};

window.N_0xeb3dac2c86001e5e = function () {
	return _in("0xEB3DAC2C86001E5E", _r);
};

window.N_0xeb4a0c2d56441717 = function (p0) {
	return _in("0xEB4A0C2D56441717", p0, _r, _ri);
};

window.N_0xeb6f1a9b5510a5d2 = function (p0, p1) {
	return _in("0xEB6F1A9B5510A5D2", p0, p1);
};

window.N_0xeb709a36958abe0d = function (gamerTagId) {
	return _in("0xEB709A36958ABE0D", gamerTagId, _r);
};

window.N_0xebb376779a760aa8 = function () {
	return _in("0xEBB376779A760AA8", _r, _ri);
};

window.N_0xebcab9e5048434f4 = function () {
	return _in("0xEBCAB9E5048434F4", _r, _ri);
};

window.N_0xebd0edba5be957cf = function (ped) {
	return _in("0xEBD0EDBA5BE957CF", ped, _r);
};

window.N_0xebd3205a207939ed = function (p0) {
	return _in("0xEBD3205A207939ED", p0);
};

window.N_0xebefc2e77084f599 = function (p0, p1, p2) {
	return _in("0xEBEFC2E77084F599", p0, _ts(p1), p2);
};

window.N_0xebf8284d8cadeb53 = function () {
	return _in("0xEBF8284D8CADEB53");
};

window.N_0xebfa8d50addc54c4 = function (p0) {
	return _in("0xEBFA8D50ADDC54C4", p0, _r);
};

window.N_0xec4b4b3b9908052a = function (ped, unk) {
	return _in("0xEC4B4B3B9908052A", ped, _fv(unk));
};

window.N_0xec52c631a1831c03 = function (p0) {
	return _in("0xEC52C631A1831C03", p0);
};

window.N_0xec6935ebe0847b90 = function (p0, p1, p2, p3) {
	return _in("0xEC6935EBE0847B90", p0, p1, p2, p3, _r, _ri);
};

window.N_0xec69adf931aae0c3 = function (p0) {
	return _in("0xEC69ADF931AAE0C3", p0, _r, _ri);
};

window.N_0xec72c258667be5ea = function (p0) {
	return _in("0xEC72C258667BE5EA", p0, _r, _ri);
};

window.N_0xec9264727eec0f28 = function () {
	return _in("0xEC9264727EEC0F28");
};

window.N_0xeca658ce2a4e5a72 = function (p0, p1) {
	return _in("0xECA658CE2A4E5A72", p0, p1);
};

window.N_0xecb41ac6ab754401 = function () {
	return _in("0xECB41AC6AB754401", _r, _ri);
};

window.N_0xecdc202b25e5cf48 = function (p0, p1, p2) {
	return _in("0xECDC202B25E5CF48", p0, p1, p2);
};

window.N_0xecf128344e9ff9f1 = function (p0) {
	return _in("0xECF128344E9FF9F1", p0);
};

window.N_0xed3c76adfa6d07c4 = function (p0) {
	return _in("0xED3C76ADFA6D07C4", p0);
};

window.N_0xed5ede9e676643c9 = function (p0, p1) {
	return _in("0xED5EDE9E676643C9", p0, p1);
};

window.N_0xed5fd7af10f5e262 = function (p0, p1, p2, p3) {
	return _in("0xED5FD7AF10F5E262", p0, p1, p2, p3);
};

window.N_0xed6d8e27a43b8cde = function (p0) {
	return _in("0xED6D8E27A43B8CDE", p0, _r);
};

window.N_0xed8286f71a819baa = function (cargobob, p1) {
	return _in("0xED8286F71A819BAA", cargobob, _fv(p1));
};

window.N_0xedbc8405b3895cc9 = function (p0, p1) {
	return _in("0xEDBC8405B3895CC9", p0, p1);
};

window.N_0xedbf6c9b0d2c65c8 = function (p0) {
	return _in("0xEDBF6C9B0D2C65C8", p0);
};

window.N_0xedead9a91ec768b3 = function (p0, p1, p2) {
	return _in("0xEDEAD9A91EC768B3", p0, p1, p2);
};

window.N_0xedf7f927136c224b = function () {
	return _in("0xEDF7F927136C224B", _r, _ri);
};

window.N_0xee066c7006c49c0a = function (p0, p1, p2) {
	return _in("0xEE066C7006C49C0A", p0, p1, _ii(p2) /* may be optional */);
};

window.N_0xee4c0e6dbc6f2c6f = function () {
	return _in("0xEE4C0E6DBC6F2C6F");
};

window.N_0xee76ff7e6a0166b0 = function (headDisplayId, p1) {
	return _in("0xEE76FF7E6A0166B0", headDisplayId, p1);
};

window.N_0xee778f8c7e1142e2 = function (p0) {
	return _in("0xEE778F8C7E1142E2", p0, _r, _ri);
};

window.N_0xeebfc7a7efdc35b4 = function (vehicle) {
	return _in("0xEEBFC7A7EFDC35B4", vehicle, _r, _ri);
};

window.N_0xeeed8fafec331a70 = function (p0, p1, p2, p3) {
	return _in("0xEEED8FAFEC331A70", p0, p1, p2, p3, _r, _ri);
};

window.N_0xef0912ddf7c4cb4b = function () {
	return _in("0xEF0912DDF7C4CB4B", _r);
};

window.N_0xef398beee4ef45f9 = function (p0) {
	return _in("0xEF398BEEE4EF45F9", p0);
};

window.N_0xef39ee20c537e98c = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xEF39EE20C537E98C", p0, p1, p2, p3, p4, p5);
};

window.N_0xef49cf0270307cbe = function () {
	return _in("0xEF49CF0270307CBE");
};

window.N_0xef7d17bc6c85264c = function () {
	return _in("0xEF7D17BC6C85264C", _r);
};

window.N_0xefabc7722293da7c = function () {
	return _in("0xEFABC7722293DA7C");
};

window.N_0xefb55e7c25d3b3be = function () {
	return _in("0xEFB55E7C25D3B3BE");
};

window.N_0xefc13b1ce30d755d = function (p0, p1) {
	return _in("0xEFC13B1CE30D755D", p0, p1);
};

window.N_0xefd79fa81dfba9cb = function (p0, p1) {
	return _in("0xEFD79FA81DFBA9CB", p0, p1);
};

window.N_0xefd97ff47b745b8d = function (p0) {
	return _in("0xEFD97FF47B745B8D", p0);
};

window.N_0xeff296097ff1e509 = function (p0, p1) {
	return _in("0xEFF296097FF1E509", p0, p1);
};

window.N_0xf033419d1b81fae8 = function (p0) {
	return _in("0xF033419D1B81FAE8", p0, _r, _ri);
};

window.N_0xf03755696450470c = function () {
	return _in("0xF03755696450470C");
};

window.N_0xf051d9bfb6ba39c0 = function (p0) {
	return _in("0xF051D9BFB6BA39C0", p0);
};

window.N_0xf06a16ca55d138d8 = function (p0, p1) {
	return _in("0xF06A16CA55D138D8", p0, p1);
};

window.N_0xf06a6f41cb445443 = function (p0) {
	return _in("0xF06A6F41CB445443", p0);
};

window.N_0xf06ebb91a81e09e3 = function (p0) {
	return _in("0xF06EBB91A81E09E3", p0);
};

window.N_0xf083835b70ba9bfe = function () {
	return _in("0xF083835B70BA9BFE");
};

window.N_0xf086ad9354fac3a3 = function (p0) {
	return _in("0xF086AD9354FAC3A3", p0);
};

window.N_0xf0a60040be558f2d = function (p0, p1, p2) {
	return _in("0xF0A60040BE558F2D", p0, p1, p2, _r, _ri);
};

window.N_0xf0daef2f545bee25 = function (p0) {
	return _in("0xF0DAEF2F545BEE25", p0, _r);
};

window.N_0xf0e4ba16d1db546c = function (vehicle, p1, p2) {
	return _in("0xF0E4BA16D1DB546C", vehicle, p1, p2);
};

window.N_0xf0eed5a6bc7b237a = function (p0, entity, p2) {
	return _in("0xF0EED5A6BC7B237A", p0, entity, p2, _r);
};

window.N_0xf0f2103efaf8cba7 = function (p0, p1) {
	return _in("0xF0F2103EFAF8CBA7", p0, _fv(p1), _r, _rv);
};

window.N_0xf10b44fd479d69f3 = function (player, p1) {
	return _in("0xF10B44FD479D69F3", player, p1, _r);
};

window.N_0xf11f01d98113536a = function (p0) {
	return _in("0xF11F01D98113536A", p0, _r, _ri);
};

window.N_0xf12e33034d887f66 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xF12E33034D887F66", p0, p1, p2, p3, p4, p5, _r, _ri);
};

window.N_0xf12e6cd06c73d69e = function () {
	return _in("0xF12E6CD06C73D69E", _r, _ri);
};

window.N_0xf13fe2a80c05c561 = function () {
	return _in("0xF13FE2A80C05C561", _r, _ri);
};

window.N_0xf154b8d1775b2dec = function (p0) {
	return _in("0xF154B8D1775B2DEC", p0);
};

window.N_0xf1a1803d3476f215 = function (value) {
	return _in("0xF1A1803D3476F215", value);
};

window.N_0xf1a6c18b35bcade6 = function (p0) {
	return _in("0xF1A6C18B35BCADE6", p0);
};

window.N_0xf1ae5dcdbfca2721 = function () {
	return _in("0xF1AE5DCDBFCA2721", _i, _i, _i, _r);
};

window.N_0xf1b84178f8674195 = function (p0) {
	return _in("0xF1B84178F8674195", p0);
};

window.N_0xf1c03a5352243a30 = function (p0) {
	return _in("0xF1C03A5352243A30", p0);
};

window.N_0xf1cea8a4198d8e9a = function (p0) {
	return _in("0xF1CEA8A4198D8E9A", _ts(p0), _r);
};

window.N_0xf1e22dc13f5eebad = function (p0) {
	return _in("0xF1E22DC13F5EEBAD", _fv(p0));
};

window.N_0xf1eea2dda9ffa69d = function (p0) {
	return _in("0xF1EEA2DDA9FFA69D", p0);
};

window.N_0xf1f8157b8c3f171c = function (p0, p1, p2) {
	return _in("0xF1F8157B8C3F171C", p0, _ts(p1), _ts(p2));
};

window.N_0xf22ca0fd74b80e7a = function (p0) {
	return _in("0xF22CA0FD74B80E7A", p0, _r);
};

window.N_0xf2385935bffd4d92 = function (p0) {
	return _in("0xF2385935BFFD4D92", p0, _r);
};

window.N_0xf239400e16c23e08 = function (p0, p1) {
	return _in("0xF239400E16C23E08", p0, p1);
};

window.N_0xf25e02cb9c5818f8 = function () {
	return _in("0xF25E02CB9C5818F8");
};

window.N_0xf284ac67940c6812 = function () {
	return _in("0xF284AC67940C6812", _r, _ri);
};

window.N_0xf287f506767cc8a9 = function () {
	return _in("0xF287F506767CC8A9", _r, _ri);
};

window.N_0xf2bebcdfafdaa19e = function (toggle) {
	return _in("0xF2BEBCDFAFDAA19E", toggle);
};

window.N_0xf2ca003f167e21d2 = function () {
	return _in("0xF2CA003F167E21D2", _r, _ri);
};

window.N_0xf2e07819ef1a5289 = function () {
	return _in("0xF2E07819EF1A5289", _r);
};

window.N_0xf2e1a7133dd356a6 = function (hash, toggle) {
	return _in("0xF2E1A7133DD356A6", _ch(hash), toggle);
};

window.N_0xf2eac213d5ea0623 = function () {
	return _in("0xF2EAC213D5EA0623", _r, _ri);
};

window.N_0xf2f6a2fa49278625 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0xF2F6A2FA49278625", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _i, _i, _i, _i);
};

window.N_0xf3162836c28f9da5 = function (p0, p1, p2, p3) {
	return _in("0xF3162836C28F9DA5", p0, p1, p2, p3, _r, _ri);
};

window.N_0xf3365489e0dd50f9 = function (p0, p1) {
	return _in("0xF3365489E0DD50F9", p0, p1);
};

window.N_0xf3b0e0aed097a3f5 = function (p0, p1) {
	return _in("0xF3B0E0AED097A3F5", p0, p1, _r, _ri);
};

window.N_0xf3fbe2d50a6a8c28 = function (character, p1) {
	return _in("0xF3FBE2D50A6A8C28", character, p1, _r, _ri);
};

window.N_0xf41b5d290c99a3d6 = function (p0) {
	return _in("0xF41B5D290C99A3D6", p0, _r);
};

window.N_0xf434a10ba01c37d0 = function (p0) {
	return _in("0xF434A10BA01C37D0", p0);
};

window.N_0xf445de8da80a1792 = function () {
	return _in("0xF445DE8DA80A1792", _r, _ri);
};

window.N_0xf44a5456ac3f4f97 = function (p0) {
	return _in("0xF44A5456AC3F4F97", p0);
};

window.N_0xf45352426ff3a4f0 = function (bufferSize) {
	return _in("0xF45352426FF3A4F0", _i, bufferSize, _i);
};

window.N_0xf46a1e03e8755980 = function (p0) {
	return _in("0xF46A1E03E8755980", p0);
};

window.N_0xf47e567b3630dd12 = function (p0, p1) {
	return _in("0xF47E567B3630DD12", p0, p1);
};

window.N_0xf488c566413b4232 = function (p0, p1) {
	return _in("0xF488C566413B4232", p0, _fv(p1));
};

window.N_0xf49abc20d8552257 = function (p0) {
	return _in("0xF49ABC20D8552257", p0);
};

window.N_0xf4a0dadb70f57fa6 = function () {
	return _in("0xF4A0DADB70F57FA6");
};

window.N_0xf4c8cf9e353afeca = function (p0, p1) {
	return _in("0xF4C8CF9E353AFECA", _ts(p0), _fv(p1));
};

window.N_0xf4d8e7ac2a27758c = function (p0) {
	return _in("0xF4D8E7AC2A27758C", p0, _r, _ri);
};

window.N_0xf4f2c0d4ee209e20 = function () {
	return _in("0xF4F2C0D4EE209E20");
};

window.N_0xf4ff020a08bc8863 = function (p0, p1) {
	return _in("0xF4FF020A08BC8863", p0, p1);
};

window.N_0xf51d36185993515d = function (checkpoint, posX, posY, posZ, unkX, unkY, unkZ) {
	return _in("0xF51D36185993515D", checkpoint, _fv(posX), _fv(posY), _fv(posZ), _fv(unkX), _fv(unkY), _fv(unkZ));
};

window.N_0xf534d94dfa2ead26 = function (p0, p1, p2, p3, p4) {
	return _in("0xF534D94DFA2EAD26", p0, p1, p2, p3, p4);
};

window.N_0xf53e48461b71eecb = function (p0) {
	return _in("0xF53E48461B71EECB", p0, _r);
};

window.N_0xf55e4046f6f831dc = function (p0, p1) {
	return _in("0xF55E4046F6F831DC", p0, _fv(p1));
};

window.N_0xf56dfb7b61be7276 = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
	return _in("0xF56DFB7B61BE7276", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11), _ii(p12) /* may be optional */, _r);
};

window.N_0xf5846edb26a98a24 = function (ped, p1) {
	return _in("0xF5846EDB26A98A24", ped, p1);
};

window.N_0xf5bb8dac426a52c0 = function () {
	return _in("0xF5BB8DAC426A52C0", _i, _i, _i, _i);
};

window.N_0xf5bed327cea362b1 = function (p0) {
	return _in("0xF5BED327CEA362B1", p0, _r, _ri);
};

window.N_0xf60165e1d2c5370b = function (ped) {
	return _in("0xF60165E1D2C5370B", ped, _i, _i, _r);
};

window.N_0xf6792800ac95350d = function (p0) {
	return _in("0xF6792800AC95350D", p0);
};

window.N_0xf6baaaf762e1bf40 = function (p0, p1) {
	return _in("0xF6BAAAF762E1BF40", _ts(p0), _ii(p1) /* may be optional */, _r);
};

window.N_0xf6f4383b7c92f11a = function (p0) {
	return _in("0xF6F4383B7C92F11A", p0);
};

window.N_0xf70efa14fe091429 = function (p0) {
	return _in("0xF70EFA14FE091429", p0, _r, _ri);
};

window.N_0xf751b16fb32abc1d = function (p0) {
	return _in("0xF751B16FB32ABC1D", _fv(p0));
};

window.N_0xf78b803082d4386f = function (p0) {
	return _in("0xF78B803082D4386F", _fv(p0));
};

window.N_0xf78f94d60248c737 = function (p0, p1) {
	return _in("0xF78F94D60248C737", p0, p1, _r);
};

window.N_0xf79f9def0aade61a = function (ped) {
	return _in("0xF79F9DEF0AADE61A", ped);
};

window.N_0xf7b38b8305f1fe8b = function (p0, p1, p2) {
	return _in("0xF7B38B8305F1FE8B", p0, _ts(p1), p2);
};

window.N_0xf7b79a50b905a30d = function (p0, p1, p2, p3) {
	return _in("0xF7B79A50B905A30D", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _r);
};

window.N_0xf7f203e31f96f6a1 = function (vehicle, flag) {
	return _in("0xF7F203E31F96F6A1", vehicle, flag, _r);
};

window.N_0xf814fec6a19fd6e0 = function () {
	return _in("0xF814FEC6A19FD6E0");
};

window.N_0xf8155a7f03ddfc8e = function (p0) {
	return _in("0xF8155A7F03DDFC8E", p0);
};

window.N_0xf854439efbb3b583 = function () {
	return _in("0xF854439EFBB3B583");
};

window.N_0xf87d9f2301f7d206 = function (p0) {
	return _in("0xF87D9F2301F7D206", p0);
};

window.N_0xf8bdbf3d573049a1 = function (p0) {
	return _in("0xF8BDBF3D573049A1", _fv(p0));
};

window.N_0xf8c54a461c3e11dc = function () {
	return _in("0xF8C54A461C3E11DC", _i, _i, _i, _i);
};

window.N_0xf8cc1ebe0b62e29f = function (p0) {
	return _in("0xF8CC1EBE0B62E29F", p0, _r);
};

window.N_0xf8ebccc96adb9fb7 = function (p0, p1, p2) {
	return _in("0xF8EBCCC96ADB9FB7", p0, _fv(p1), p2);
};

window.N_0xf92099527db8e2a7 = function (p0, p1) {
	return _in("0xF92099527DB8E2A7", p0, p1);
};

window.N_0xf98dde0a8ed09323 = function (p0) {
	return _in("0xF98DDE0A8ED09323", p0);
};

window.N_0xf98e4b3e56afc7b1 = function (p0, p1) {
	return _in("0xF98E4B3E56AFC7B1", p0, _fv(p1));
};

window.N_0xf9acf4a08098ea25 = function (ped, p1) {
	return _in("0xF9ACF4A08098EA25", ped, p1);
};

window.N_0xf9b83b77929d8863 = function () {
	return _in("0xF9B83B77929D8863", _r, _ri);
};

window.N_0xf9c1681347c8bd15 = function (object) {
	return _in("0xF9C1681347C8BD15", object);
};

window.N_0xf9e1ccae8ba4c281 = function (p0, p1) {
	return _in("0xF9E1CCAE8BA4C281", p0, p1, _i, _i, _r);
};

window.N_0xf9f2922717b819ec = function () {
	return _in("0xF9F2922717B819EC", _r, _ri);
};

window.N_0xfa07759e6fddd7cf = function (p0, p1, p2, p3) {
	return _in("0xFA07759E6FDDD7CF", p0, p1, p2, p3);
};

window.N_0xfa1e0e893d915215 = function (p0) {
	return _in("0xFA1E0E893D915215", p0);
};

window.N_0xfa2888e3833c8e96 = function () {
	return _in("0xFA2888E3833C8E96");
};

window.N_0xfaa457ef263e8763 = function (name) {
	return _in("0xFAA457EF263E8763", _i, _ts(name));
};

window.N_0xfac75988a7d078d3 = function (p0) {
	return _in("0xFAC75988A7D078D3", p0);
};

window.N_0xfae628f1e9adb239 = function (p0, p1, p2) {
	return _in("0xFAE628F1E9ADB239", p0, p1, p2);
};

window.N_0xfaf2a78061fd9ef4 = function (p0, p1, p2, p3) {
	return _in("0xFAF2A78061FD9EF4", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.N_0xfafc23aee23868db = function () {
	return _in("0xFAFC23AEE23868DB", _r, _ri);
};

window.N_0xfb00ca71da386228 = function () {
	return _in("0xFB00CA71DA386228");
};

window.N_0xfb199266061f820a = function () {
	return _in("0xFB199266061F820A", _r, _ri);
};

window.N_0xfb1f9381e80fa13f = function (p0, p1) {
	return _in("0xFB1F9381E80FA13F", p0, p1, _r, _ri);
};

window.N_0xfb680d403909dc70 = function (p0, p1) {
	return _in("0xFB680D403909DC70", p0, p1);
};

window.N_0xfb6c4072e9a32e92 = function (p0, p1) {
	return _in("0xFB6C4072E9A32E92", p0, p1, _r, _ri);
};

window.N_0xfb80ab299d2ee1bd = function (p0) {
	return _in("0xFB80AB299D2EE1BD", p0);
};

window.N_0xfb8f2a6f3df08cbe = function () {
	return _in("0xFB8F2A6F3DF08CBE");
};

window.N_0xfbc5e768c7a77a6a = function () {
	return _in("0xFBC5E768C7A77A6A", _r, _ri);
};

window.N_0xfbe20329593dec9d = function (p0, p1, p2, p3) {
	return _in("0xFBE20329593DEC9D", p0, p1, p2, p3);
};

window.N_0xfc18db55ae19e046 = function (p0) {
	return _in("0xFC18DB55AE19E046", p0);
};

window.N_0xfc309e94546fcdb5 = function (p0) {
	return _in("0xFC309E94546FCDB5", p0);
};

window.N_0xfc40cbf7b90ca77c = function (p0) {
	return _in("0xFC40CBF7B90CA77C", p0);
};

window.N_0xfc4ee00a7b3bfb76 = function (p0, p1, p2) {
	return _in("0xFC4EE00A7B3BFB76", p0, p1, p2);
};

window.N_0xfc859e2374407556 = function () {
	return _in("0xFC859E2374407556", _r);
};

window.N_0xfcc228e07217fcac = function (p0) {
	return _in("0xFCC228E07217FCAC", p0);
};

window.N_0xfccae5b92a830878 = function (p0) {
	return _in("0xFCCAE5B92A830878", p0, _r);
};

window.N_0xfcf37a457cb96dc0 = function (p0, p1, p2, p3, p4) {
	return _in("0xFCF37A457CB96DC0", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _r);
};

window.N_0xfcfacd0db9d7a57d = function (p0, p1) {
	return _in("0xFCFACD0DB9D7A57D", p0, p1);
};

window.N_0xfd1695c5d3b05439 = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xFD1695C5D3B05439", p0, p1, p2, p3, p4, p5);
};

window.N_0xfd3151cd37ea2245 = function (p0) {
	return _in("0xFD3151CD37EA2245", p0);
};

window.N_0xfd75dabc0957bf33 = function (p0) {
	return _in("0xFD75DABC0957BF33", p0);
};

window.N_0xfd8b834a8ba05048 = function () {
	return _in("0xFD8B834A8BA05048", _r, _ri);
};

window.N_0xfdb423997fa30340 = function () {
	return _in("0xFDB423997FA30340");
};

window.N_0xfdbf4cdbc07e1706 = function (x, y, z, radius, unk) {
	return _in("0xFDBF4CDBC07E1706", _fv(x), _fv(y), _fv(z), _fv(radius), _fv(unk), _r, _ri);
};

window.N_0xfdd85225b2dea55e = function () {
	return _in("0xFDD85225B2DEA55E");
};

window.N_0xfdec055ab549e328 = function () {
	return _in("0xFDEC055AB549E328");
};

window.N_0xfe07ff6495d52e2a = function (p0, p1, p2, p3) {
	return _in("0xFE07FF6495D52E2A", p0, p1, p2, p3, _r, _ri);
};

window.N_0xfe205f38aaa58e5b = function (p0, p1) {
	return _in("0xFE205F38AAA58E5B", p0, p1);
};

window.N_0xfe26117a5841b2ff = function (vehicle, p1) {
	return _in("0xFE26117A5841B2FF", vehicle, p1, _r, _ri);
};

window.N_0xfe4c1d0d3b9cc17e = function (p0, p1) {
	return _in("0xFE4C1D0D3B9CC17E", p0, p1, _r);
};

window.N_0xfebfbfdfb66039de = function (p0) {
	return _in("0xFEBFBFDFB66039DE", p0);
};

window.N_0xfec9a3b1820f3331 = function (p0) {
	return _in("0xFEC9A3B1820F3331", p0, _r);
};

window.N_0xfee4a5459472a9f8 = function () {
	return _in("0xFEE4A5459472A9F8");
};

window.N_0xff266d1d0eb1195d = function () {
	return _in("0xFF266D1D0EB1195D");
};

window.N_0xff300c7649724a0b = function (player, p1) {
	return _in("0xFF300C7649724A0B", player, p1);
};

window.N_0xff4803bc019852d9 = function (p0, p1) {
	return _in("0xFF4803BC019852D9", _fv(p0), p1);
};

window.N_0xff56381874f82086 = function (p0, p1, outComponent) {
	return _in("0xFF56381874F82086", p0, p1, _ii(outComponent) /* may be optional */, _r);
};

window.N_0xff5992e1c9e65d05 = function (p0) {
	return _in("0xFF5992E1C9E65D05", p0);
};

window.N_0xff6be494c7987f34 = function (flag, entity, flag2) {
	return _in("0xFF6BE494C7987F34", _v, _v, flag, entity, flag2, _r, _ri);
};

window.N_0xff8f3a92b75ed67a = function () {
	return _in("0xFF8F3A92B75ED67A", _r, _ri);
};

window.N_0xffbe02cd385356bd = function () {
	return _in("0xFFBE02CD385356BD", _r, _ri);
};

window.N_0xffe1e5b792d92b34 = function () {
	return _in("0xFFE1E5B792D92B34", _r, _ri);
};

window.N_0xffee8fa29ab9a18e = function (player) {
	return _in("0xFFEE8FA29AB9A18E", player);
};

window.NetToEnt = function (netHandle) {
	return _in("0xBFFEAB45A9A9094A", netHandle, _r, _ri);
};

window.NetToObj = function (netHandle) {
	return _in("0xD8515F5FEA14CB3F", netHandle, _r, _ri);
};

window.NetToPed = function (netHandle) {
	return _in("0xBDCD95FC216A8B3E", netHandle, _r, _ri);
};

window.NetToVeh = function (netHandle) {
	return _in("0x367B936610BA360C", netHandle, _r, _ri);
};

window.NetworkAcceptPresenceInvite = function (p0) {
	return _in("0xFA91550DF9318B22", p0, _r);
};

window.NetworkAccessTunableBool = function (tunableContext, tunableName) {
	return _in("0xAA6A47A573ABB75A", _ts(tunableContext), _ts(tunableName), _r);
};

window.NetworkAccessTunableBoolHash = function (tunableContext, tunableName) {
	return _in("0xEA16B69D93D71A45", _ch(tunableContext), _ch(tunableName), _r);
};

window.NetworkAccessTunableBoolHashFailVal = function (tunableContext, tunableName, defaultValue) {
	return _in("0xC7420099936CE286", _ch(tunableContext), _ch(tunableName), defaultValue, _r);
};

window.NetworkAccessTunableFloat = function (tunableContext, tunableName, value) {
	return _in("0xE5608CA7BC163A5F", _ts(tunableContext), _ts(tunableName), _fi(value) /* may be optional */, _r);
};

window.NetworkAccessTunableFloatHash = function (tunableContext, tunableName, value) {
	return _in("0x972BC203BBC4C4D5", _ch(tunableContext), _ch(tunableName), _fi(value) /* may be optional */, _r);
};

window.NetworkAccessTunableInt = function (tunableContext, tunableName, value) {
	return _in("0x8BE1146DFD5D4468", _ts(tunableContext), _ts(tunableName), _ii(value) /* may be optional */, _r);
};

window.NetworkAccessTunableIntHash = function (tunableContext, tunableName, value) {
	return _in("0x40FCE03E50E8DBE8", _ch(tunableContext), _ch(tunableName), _ii(value) /* may be optional */, _r);
};

window.NetworkActionFollowInvite = function () {
	return _in("0xC88156EBB786F8D5", _r, _ri);
};

window.NetworkAddEntityAngledArea = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0x376C6375BA60293A", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _r, _ri);
};

window.NetworkAddEntityArea = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x494C8FB299290269", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _r, _ri);
};

window.NetworkAddEntityToSynchronisedScene = function (entity, netScene, animDict, animName, speed, speedMulitiplier, flag) {
	return _in("0xF2404D68CBC855FA", entity, netScene, _ts(animDict), _ts(animName), _fv(speed), _fv(speedMulitiplier), flag);
};

window.NetworkAddFollowers = function (p1) {
	return _in("0x236406F60CF216D6", _i, p1);
};

window.NetworkAddFriend = function (p1) {
	return _in("0x8E02D73914064223", _i, _ts(p1), _r);
};

window.NetworkAddPedToSynchronisedScene = function (ped, netScene, animDict, animnName, speed, speedMultiplier, duration, flag, playbackRate, p9) {
	return _in("0x742A637471BCECD9", ped, netScene, _ts(animDict), _ts(animnName), _fv(speed), _fv(speedMultiplier), duration, flag, _fv(playbackRate), p9);
};

window.NetworkAmIBlockedByGamer = function (p0) {
	return _in("0x15337C7C268A27B2", _ii(p0) /* may be optional */, _r);
};

window.NetworkAmIBlockedByPlayer = function (player) {
	return _in("0x87F395D957D4353D", player, _r);
};

window.NetworkAmIMutedByGamer = function (p0) {
	return _in("0xDF02A2C93F1F26DA", _ii(p0) /* may be optional */, _r);
};

window.NetworkAmIMutedByPlayer = function (player) {
	return _in("0x9D6981DFC91A8604", player, _r);
};

window.NetworkApplyTransitionParameter = function (p0, p1) {
	return _in("0x521638ADA1BA0D18", p0, p1);
};

window.NetworkAreHandlesTheSame = function () {
	return _in("0x57DBA049E110F217", _i, _i, _r);
};

window.NetworkAreRosAvailable = function () {
	return _in("0x85443FF4C328F53B", _r);
};

window.NetworkAreTransitionDetailsValid = function (p0) {
	return _in("0x2615AA2A695930C1", p0, _r);
};

window.NetworkAttachSynchronisedSceneToEntity = function (netScene, entity, bone) {
	return _in("0x478DCBD2A98B705A", netScene, entity, bone);
};

window.NetworkBail = function () {
	return _in("0x95914459A87EBA28");
};

window.NetworkBailTransition = function () {
	return _in("0xEAA572036990CD1B");
};

window.NetworkBlockInvites = function (toggle) {
	return _in("0x34F9E9049454A7A0", toggle);
};

window.NetworkBlockKickedPlayers = function (p0) {
	return _in("0x6B07B9CE4D390375", p0);
};

window.NetworkBuyAirstrike = function (cost, p1, p2) {
	return _in("0x763B4BD305338F19", cost, p1, p2);
};

window.NetworkBuyBounty = function (amount, victim, p2, p3) {
	return _in("0x7B718E197453F2D9", amount, victim, p2, p3);
};

window.NetworkBuyFairgroundRide = function (amountSpent, p1, p2, p3) {
	return _in("0x8A7B3952DD64D2B5", amountSpent, p1, p2, p3);
};

window.NetworkBuyHealthcare = function (cost, p1, p2) {
	return _in("0xD9B067E55253E3DD", cost, p1, p2);
};

window.NetworkBuyHeliStrike = function (cost, p1, p2) {
	return _in("0x81AA4610E3FD3A69", cost, p1, p2);
};

window.NetworkBuyItem = function (player, item, p2, p3, p4, item_name, p6, p7, p8, p9) {
	return _in("0xF0077C797F66A355", player, _ch(item), p2, p3, p4, _ts(item_name), p6, p7, p8, p9);
};

window.NetworkBuyProperty = function (propertyCost, propertyName, p2, p3) {
	return _in("0x650A08A280870AF6", _fv(propertyCost), _ch(propertyName), p2, p3);
};

window.NetworkCanAccessMultiplayer = function (loadingState) {
	return _in("0xAF50DA1A3F8B1BA4", _ii(loadingState) /* may be optional */, _r);
};

window.NetworkCanBail = function () {
	return _in("0x580CE4438479CC61", _r);
};

window.NetworkCanBet = function (p0) {
	return _in("0x3A54E33660DED67F", p0, _r);
};

window.NetworkCanCommunicateWithGamer = function (player) {
	return _in("0xA150A4F065806B1F", _ii(player) /* may be optional */, _r);
};

window.NetworkCanEnterMultiplayer = function () {
	return _in("0x7E782A910C362C25", _r);
};

window.NetworkCanReceivePlayerCash = function (p0, p1, p2, p3) {
	return _in("0x5D17BE59D2123284", p0, p1, p2, p3, _r);
};

window.NetworkCanSessionEnd = function () {
	return _in("0x4EEBC3694E49C572", _r);
};

window.NetworkCanSetWaypoint = function () {
	return _in("0xC927EC229934AF60", _r);
};

window.NetworkCanSpendMoney = function (p0, p1, p2, p3, p4) {
	return _in("0xAB3CAA6B422164DA", p0, p1, p2, p3, p4, _r);
};

window.NetworkChangeTransitionSlots = function (p0, p1) {
	return _in("0xEEEDA5E6D7080987", p0, p1);
};

window.NetworkClanAnimation = function (animDict, animName) {
	return _in("0x729E3401F0430686", _ts(animDict), _ts(animName), _r);
};

window.NetworkClanDownloadMembership = function (networkHandle) {
	return _in("0xA989044E70010ABE", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkClanDownloadMembershipPending = function (p0) {
	return _in("0x5B9E023DC6EBEDC0", _ii(p0) /* may be optional */, _r);
};

window.NetworkClanGetMembership = function (p2) {
	return _in("0xC8BC2011F67B3411", _i, _i, p2, _r);
};

window.NetworkClanGetMembershipCount = function (p0) {
	return _in("0xAAB11F6C4ADBC2C1", _ii(p0) /* may be optional */, _r, _ri);
};

window.NetworkClanGetMembershipDesc = function (p1) {
	return _in("0x48DE78AF2C8885B8", _i, p1, _r);
};

window.NetworkClanGetMembershipValid = function (p1) {
	return _in("0x48A59CF88D43DF0E", _i, p1, _r);
};

window.NetworkClanJoin = function (clanDesc) {
	return _in("0x9FAAA4F4FC71F87F", clanDesc, _r);
};

window.NetworkClanPlayerGetDesc = function (bufferSize) {
	return _in("0xEEE6EACBE8874FBA", _i, bufferSize, _i, _r);
};

window.NetworkClanPlayerIsActive = function (networkHandle) {
	return _in("0xB124B57F571D8F18", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkClanRemoteMembershipsAreInCache = function (p0) {
	return _in("0xBB6E6FEE99D866B2", _ii(p0) /* may be optional */, _r);
};

window.NetworkClearCharacterWallet = function (p0) {
	return _in("0xA921DED15FDF28F5", p0);
};

window.NetworkClearFollowInvite = function () {
	return _in("0x439BFDE3CD0610F6", _r, _ri);
};

window.NetworkClearFollowers = function () {
	return _in("0x058F43EC59A8631A");
};

window.NetworkClearFoundGamers = function () {
	return _in("0x6D14CCEE1B40381A");
};

window.NetworkClearPropertyId = function () {
	return _in("0xC2B82527CA77053E");
};

window.NetworkClearTransitionCreatorHandle = function () {
	return _in("0xFB3272229A82C759");
};

window.NetworkClearVoiceChannel = function () {
	return _in("0xE036A705F989E049");
};

window.NetworkCloseTransitionMatchmaking = function () {
	return _in("0x43F4DBA69710E01E");
};

window.NetworkCreateSynchronisedScene = function (x, y, z, xRot, yRot, zRot, p6, p7, p8, p9) {
	return _in("0x7CD6BC4C2BBDD526", _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), p6, p7, p8, _fv(p9), _r, _ri);
};

window.NetworkDeleteCharacter = function (characterIndex, p1, p2) {
	return _in("0x05A50AF38947EB8D", characterIndex, p1, p2);
};

window.NetworkDisableInvincibleFlashing = function (player, p1) {
	return _in("0x9DD368BF06983221", player, p1);
};

window.NetworkDoTransitionQuickmatch = function (p0, p1, p2, p3) {
	return _in("0x71FB0EBCD4915D56", p0, p1, p2, p3, _r);
};

window.NetworkDoTransitionQuickmatchAsync = function (p0, p1, p2, p3) {
	return _in("0xA091A5E44F0072E5", p0, p1, p2, p3, _r);
};

window.NetworkDoTransitionQuickmatchWithGroup = function (p0, p1, p2, p3, p5) {
	return _in("0x9C4AB58491FDC98A", p0, p1, p2, p3, _i, p5, _r);
};

window.NetworkDoTransitionToFreemode = function (p1, p2, players, p4) {
	return _in("0x3AAD8B2FCA1E289F", _i, p1, p2, players, p4, _r);
};

window.NetworkDoTransitionToGame = function (p0, maxPlayers) {
	return _in("0x3E9BB38102A589B0", p0, maxPlayers, _r);
};

window.NetworkDoTransitionToNewFreemode = function (players, p3, p4, p5) {
	return _in("0x9E80A5BA8109F974", _i, _i, players, p3, p4, p5, _r);
};

window.NetworkDoTransitionToNewGame = function (p0, maxPlayers, p2) {
	return _in("0x4665F51EFED00034", p0, maxPlayers, p2, _r);
};

window.NetworkDoesEntityExistWithNetworkId = function (entity) {
	return _in("0x18A47D074708FD68", entity, _r);
};

window.NetworkDoesNetworkIdExist = function (netID) {
	return _in("0x38CE16C96BD11344", netID, _r);
};

window.NetworkDoesTunableExist = function (tunableContext, tunableName) {
	return _in("0x85E5F8B9B898B20A", _ts(tunableContext), _ts(tunableName), _r);
};

window.NetworkDoesTunableExistHash = function (tunbaleContext, tunableName) {
	return _in("0xE4E53E1419D81127", _ch(tunbaleContext), _ch(tunableName), _r);
};

window.NetworkEarnFromAiTargetKill = function (p0, p1) {
	return _in("0x515B4A22E4D3C6D7", p0, p1);
};

window.NetworkEarnFromAmbientJob = function (p0, p1, p2) {
	return _in("0xFB6DB092FBAE29E6", p0, _ts(p1), _ii(p2) /* may be optional */);
};

window.NetworkEarnFromArmourTruck = function (amount) {
	return _in("0xF514621E8EA463D0", amount);
};

window.NetworkEarnFromBetting = function (amount, p1) {
	return _in("0x827A5BA1A44ACA6D", amount, _ts(p1));
};

window.NetworkEarnFromBounty = function (amount, p3) {
	return _in("0x131BB5DA15453ACF", amount, _i, _i, p3);
};

window.NetworkEarnFromChallengeWin = function (p0, p2) {
	return _in("0x2B171E6B2F64D8DF", p0, _i, p2);
};

window.NetworkEarnFromCrateDrop = function (amount) {
	return _in("0xB1CC1B9EC3007A2A", amount);
};

window.NetworkEarnFromDailyObjective = function (p0, p1, p2) {
	return _in("0x6EA318C91C1A8786", p0, _ts(p1), p2);
};

window.NetworkEarnFromGangPickup = function (amount) {
	return _in("0xA03D4ACE0A3284CE", amount);
};

window.NetworkEarnFromHoldups = function (amount) {
	return _in("0x45B8154E077D9E4D", amount);
};

window.NetworkEarnFromImportExport = function (p0, p1) {
	return _in("0xF92A014A634442D6", p0, p1);
};

window.NetworkEarnFromJob = function (amount, p1) {
	return _in("0xB2CC4836834E8A98", amount, _ts(p1));
};

window.NetworkEarnFromJobBonus = function (p0) {
	return _in("0x6816FB4416760775", p0, _i, _i);
};

window.NetworkEarnFromMissionH = function (amount, heistHash) {
	return _in("0x61326EE6DF15B0CA", amount, _ts(heistHash));
};

window.NetworkEarnFromNotBadsport = function (amount) {
	return _in("0x4337511FA8221D36", amount);
};

window.NetworkEarnFromPersonalVehicle = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x3F4D00167E41E0AD", p0, p1, p2, p3, p4, p5, p6, p7, p8);
};

window.NetworkEarnFromPickup = function (amount) {
	return _in("0xED1517D3AF17C698", amount, _r, _ri);
};

window.NetworkEarnFromProperty = function (amount, propertyName) {
	return _in("0x849648349D77F5C5", amount, _ch(propertyName));
};

window.NetworkEarnFromRockstar = function (amount) {
	return _in("0x02CE1D6AC0FC73EA", amount);
};

window.NetworkEarnFromVehicle = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xB539BD8A4C1EECF8", p0, p1, p2, p3, p4, p5, p6, p7);
};

window.NetworkEnableMotionDrugged = function () {
	return _in("0x0B0CC10720653F3B", _r, _ri);
};

window.NetworkEndTutorialSession = function () {
	return _in("0xD0AFAFF5A51D72F7");
};

window.NetworkExplodeVehicle = function (vehicle, isAudible, isInvisible, p3) {
	return _in("0x301A42153C9AD707", vehicle, isAudible, isInvisible, p3, _r, _ri);
};

window.NetworkFadeInEntity = function (entity, state) {
	return _in("0x1F4ED342ACEFE62D", entity, state);
};

window.NetworkFadeOutEntity = function (entity, normal, slow) {
	return _in("0xDE564951F95E09ED", entity, normal, slow);
};

window.NetworkFindMatchedGamers = function (p0, p1, p2, p3) {
	return _in("0xF7B2CFDE5C9F700D", p0, _fv(p1), _fv(p2), _fv(p3), _r);
};

window.NetworkForceLocalUseOfSyncedSceneCamera = function (netScene, animDict, animName) {
	return _in("0xCF8BD3B0BD6D42D7", netScene, _ts(animDict), _ts(animName));
};

window.NetworkGamerHasHeadset = function (p0) {
	return _in("0xF2FD55CB574BCC55", _ii(p0) /* may be optional */, _r);
};

window.NetworkGamertagFromHandlePending = function () {
	return _in("0xB071E27958EF4CF0", _r);
};

window.NetworkGamertagFromHandleStart = function (networkHandle) {
	return _in("0x9F0C0A981D73FA56", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkGamertagFromHandleSucceeded = function () {
	return _in("0xFD00798DBA7523DD", _r);
};

window.NetworkGetActivityPlayerNum = function (p0) {
	return _in("0x73E2B500410DA5A2", p0, _r, _ri);
};

window.NetworkGetBackgroundLoadingRecipients = function (p0, p1) {
	return _in("0x97A770BEEF227E2B", p0, p1, _i, _i, _r);
};

window.NetworkGetBankBalanceString = function () {
	return _in("0xA6FA3979BED01B81", _r, _s);
};

window.NetworkGetCurrentlySelectedGamerHandleFromInviteMenu = function (p0) {
	return _in("0x74881E6BCAE2327C", _ii(p0) /* may be optional */, _r);
};

window.NetworkGetDesroyerOfEntity = function (p0, p1, p2) {
	return _in("0x4CACA84440FA26F6", p0, p1, _ii(p2) /* may be optional */, _r);
};

window.NetworkGetDestroyerOfNetworkId = function (netId, weaponHash) {
	return _in("0x7A1ADEEF01740A24", netId, _ii(weaponHash) /* may be optional */, _r, _ri);
};

window.NetworkGetEntityFromNetworkId = function (netId) {
	return _in("0xCE4E5D9B0A4FF560", netId, _r, _ri);
};

window.NetworkGetEntityIsLocal = function (entity) {
	return _in("0x0991549DE4D64762", entity, _r);
};

window.NetworkGetEntityIsNetworked = function (entity) {
	return _in("0xC7827959479DCC78", entity, _r);
};

window.NetworkGetEntityKillerOfPlayer = function (player, weaponHash) {
	return _in("0x42B2DAA6B596F5F8", player, _ii(weaponHash) /* may be optional */, _r, _ri);
};

window.NetworkGetFoundGamer = function (p1) {
	return _in("0x9DCFF2AFB68B3476", _i, p1, _r);
};

window.NetworkGetFriendCount = function () {
	return _in("0x203F1CFD823B27A4", _r, _ri);
};

window.NetworkGetFriendName = function (player) {
	return _in("0xE11EBBB2A783FE8B", player, _r, _s);
};

window.NetworkGetFriendNameFromIndex = function (friendIndex) {
	return _in("0x4164F227D052E293", friendIndex, _r, _s);
};

window.NetworkGetGamertagFromHandle = function (networkHandle) {
	return _in("0x426141162EBE5CDB", _ii(networkHandle) /* may be optional */, _r, _s);
};

window.NetworkGetHostOfScript = function (scriptName, p1, p2) {
	return _in("0x1D6A14F1F9A736FC", _ts(scriptName), p1, p2, _r, _ri);
};

window.NetworkGetHostOfThisScript = function () {
	return _in("0xC7B4D79B01FA7A5C", _r, _ri);
};

window.NetworkGetLocalHandle = function (bufferSize) {
	return _in("0xE86051786B66CD8E", _i, bufferSize);
};

window.NetworkGetMaxFriends = function () {
	return _in("0xAFEBB0D5D8F687D2", _r, _ri);
};

window.NetworkGetNetworkIdFromEntity = function (entity) {
	return _in("0xA11700682F3AD45C", entity, _r, _ri);
};

window.NetworkGetNumConnectedPlayers = function () {
	return _in("0xA4A79DD2D9600654", _r, _ri);
};

window.NetworkGetNumFoundGamers = function () {
	return _in("0xA1B043EE79A916FB", _r, _ri);
};

window.NetworkGetNumParticipants = function () {
	return _in("0x18D0456E86604654", _r, _ri);
};

window.NetworkGetNumParticipantsHost = function () {
	return _in("0xA6C90FBC38E395EE", _r, _ri);
};

window.NetworkGetNumPresenceInvites = function () {
	return _in("0xCEFA968912D0F78D", _r, _ri);
};

window.NetworkGetNumScriptParticipants = function (p1, p2) {
	return _in("0x3658E8CD94FC121A", _i, p1, p2, _r, _ri);
};

window.NetworkGetParticipantIndex = function (index) {
	return _in("0x1B84DF6AF2A46938", index, _r, _ri);
};

window.NetworkGetPlayerFromGamerHandle = function (networkHandle) {
	return _in("0xCE5F689CF5A0A49D", _ii(networkHandle) /* may be optional */, _r, _ri);
};

window.NetworkGetPlayerIndex = function (player) {
	return _in("0x24FB80D107371267", player, _r, _ri);
};

window.NetworkGetPlayerIndexFromPed = function (ped) {
	return _in("0x6C0E2E0125610278", ped, _r, _ri);
};

window.NetworkGetPlayerLoudness = function (p0) {
	return _in("0x21A1684A25C2867F", p0, _r, _rf);
};

window.NetworkGetPresenceInviteHandle = function (p0, p1) {
	return _in("0x38D5B0FEBB086F75", p0, _ii(p1) /* may be optional */, _r);
};

window.NetworkGetPresenceInviteId = function (p0) {
	return _in("0xDFF09646E12EC386", p0, _r, _ri);
};

window.NetworkGetPresenceInviteInviter = function (p0) {
	return _in("0x4962CC4AA2F345B7", p0, _r, _ri);
};

window.NetworkGetPresenceInviteSessionId = function (p0) {
	return _in("0x26E1CD96B0903D60", p0, _r, _ri);
};

window.NetworkGetPrimaryClanDataCancel = function () {
	return _in("0x042E4B70B93E6054");
};

window.NetworkGetPrimaryClanDataClear = function () {
	return _in("0x9AA46BADAD0E27ED", _r, _ri);
};

window.NetworkGetPrimaryClanDataNew = function () {
	return _in("0xC080FF658B2E41DA", _i, _i, _r);
};

window.NetworkGetPrimaryClanDataPending = function () {
	return _in("0xB5074DB804E28CE7", _r, _ri);
};

window.NetworkGetPrimaryClanDataStart = function (p1) {
	return _in("0xCE86D8191B762107", _i, p1, _r);
};

window.NetworkGetPrimaryClanDataSuccess = function () {
	return _in("0x5B4F04F19376A0BA", _r, _ri);
};

window.NetworkGetRandomInt = function () {
	return _in("0x599E4FA1F87EB5FF", _r, _ri);
};

window.NetworkGetRandomIntInRange = function (rangeStart, rangeEnd) {
	return _in("0xE30CF56F1EFA5F43", rangeStart, rangeEnd, _r, _ri);
};

window.NetworkGetRespawnResult = function (randomInt) {
	return _in("0x371EA43692861CF1", randomInt, _v, _f);
};

window.NetworkGetScriptStatus = function () {
	return _in("0x57D158647A6BFABF", _r, _ri);
};

window.NetworkGetServerTime = function () {
	return _in("0x6D03BFBD643B2A02", _i, _i, _i);
};

window.NetworkGetTalkerProximity = function () {
	return _in("0x84F0F13120B4E098", _r, _ri);
};

window.NetworkGetThisScriptIsNetworkScript = function () {
	return _in("0x2910669969E9535E", _r);
};

window.NetworkGetTimeoutTime = function () {
	return _in("0x5ED0356A0CE3A34F", _r, _ri);
};

window.NetworkGetTransitionHost = function (networkHandle) {
	return _in("0x65042B9774C4435E", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkGetTransitionMembers = function (p1) {
	return _in("0x73B000F7FBC55829", _i, p1, _r, _ri);
};

window.NetworkGetVcBalance = function () {
	return _in("0x5CBAD97E059E1B94", _r, _ri);
};

window.NetworkGetVcBankBalance = function () {
	return _in("0x76EF28DA05EA395A", _r, _ri);
};

window.NetworkGetVcWalletBalance = function (character) {
	return _in("0xA40F9C2623F6A8B5", character, _r, _ri);
};

window.NetworkGivePlayerJobshareCash = function (amount, networkHandle) {
	return _in("0xFB18DF9CB95E0105", amount, _ii(networkHandle) /* may be optional */);
};

window.NetworkHandleFromFriend = function (friendIndex, bufferSize) {
	return _in("0xD45CB817D7E177D2", friendIndex, _i, bufferSize);
};

window.NetworkHandleFromMemberId = function (memberId, bufferSize) {
	return _in("0xA0FD21BED61E5C4C", _ts(memberId), _i, bufferSize);
};

window.NetworkHandleFromPlayer = function (player, bufferSize) {
	return _in("0x388EB2B86C73B6B3", player, _i, bufferSize);
};

window.NetworkHandleFromUserId = function (userId, bufferSize) {
	return _in("0xDCD51DD8F87AEC5C", _ts(userId), _i, bufferSize);
};

window.NetworkHasControlOfDoor = function (doorID) {
	return _in("0xCB3C68ADB06195DF", doorID, _r);
};

window.NetworkHasControlOfEntity = function (entity) {
	return _in("0x01BF60A500E28887", entity, _r);
};

window.NetworkHasControlOfNetworkId = function (netId) {
	return _in("0x4D36070FE0215186", netId, _r);
};

window.NetworkHasControlOfPavementStats = function (hash) {
	return _in("0xC01E93FAC20C3346", _ch(hash), _r);
};

window.NetworkHasControlOfPickup = function (pickup) {
	return _in("0x5BC9495F0B3B6FA6", pickup, _r);
};

window.NetworkHasFollowInvite = function () {
	return _in("0x76D9B976C4C09FDE", _r);
};

window.NetworkHasHeadset = function () {
	return _in("0xE870F9F1F7B4F1FA", _r);
};

window.NetworkHasInvitedGamer = function (p0) {
	return _in("0x4D86CD31E8976ECE", _ii(p0) /* may be optional */, _r);
};

window.NetworkHasInvitedGamerToTransition = function (p0) {
	return _in("0x7284A47B3540E6CF", _ii(p0) /* may be optional */, _r);
};

window.NetworkHasPendingInvite = function () {
	return _in("0xAC8C7B9B88C4A668", _r);
};

window.NetworkHasPlayerStartedTransition = function (player) {
	return _in("0x9AC9CCBFA8C29795", player, _r);
};

window.NetworkHashFromGamerHandle = function (networkHandle) {
	return _in("0x58575AC3CF2CA8EC", _ii(networkHandle) /* may be optional */, _r, _ri);
};

window.NetworkHashFromPlayerHandle = function (player) {
	return _in("0xBC1D768F2F5D6C05", player, _r, _ri);
};

window.NetworkHaveOnlinePrivileges = function () {
	return _in("0x25CB5A9F37BFD063", _r);
};

window.NetworkHostTransition = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xA60BB5CE242BB254", p0, p1, p2, p3, p4, p5, _r, _ri);
};

window.NetworkInitializeCash = function (p0, p1) {
	return _in("0x3DA5ECD1A56CBA6D", p0, p1);
};

window.NetworkInviteGamers = function (p1) {
	return _in("0x9D80CD1D0E6327DE", _i, p1, _i, _i, _r);
};

window.NetworkInviteGamersToTransition = function (p1) {
	return _in("0x4A595C32F77DFF76", _i, p1, _r);
};

window.NetworkIsActivitySession = function () {
	return _in("0x05095437424397FA", _r);
};

window.NetworkIsActivitySpectator = function () {
	return _in("0x12103B9E0C9F92FB", _r, _ri);
};

window.NetworkIsActivitySpectatorFromHandle = function (networkHandle) {
	return _in("0x2763BBAA72A7BCB9", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsAddingFriend = function () {
	return _in("0x6EA101606F6E4D81", _r, _ri);
};

window.NetworkIsCableConnected = function () {
	return _in("0xEFFB25453D8600F9", _r);
};

window.NetworkIsChattingInPlatformParty = function (networkHandle) {
	return _in("0x8DE9945BCC9AEC52", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsClanMembershipFinishedDownloading = function () {
	return _in("0xB3F64A6A91432477", _r);
};

window.NetworkIsCloudAvailable = function () {
	return _in("0x9A4CF4F48AD77302", _r);
};

window.NetworkIsFindingGamers = function () {
	return _in("0xDDDF64C91BFCF0AA", _r);
};

window.NetworkIsFriend = function (networkHandle) {
	return _in("0x1A24A179F9B31654", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsFriendInMultiplayer = function (networkHandle) {
	return _in("0x57005C18827F3A28", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsFriendInSameTitle = function (networkHandle) {
	return _in("0x2EA9A3BEDF3F17B8", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsFriendIndexOnline = function (friendIndex) {
	return _in("0xBAD8F2A42B844821", friendIndex, _r);
};

window.NetworkIsFriendOnline = function (name) {
	return _in("0x425A44533437B64D", _ts(name), _r);
};

window.NetworkIsGameInProgress = function () {
	return _in("0x10FAB35428CCC9D7", _r);
};

window.NetworkIsGamerBlockedByMe = function (p0) {
	return _in("0xE944C4F5AF1B5883", _ii(p0) /* may be optional */, _r);
};

window.NetworkIsGamerInMySession = function (networkHandle) {
	return _in("0x0F10B05DDF8D16E9", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsGamerMutedByMe = function (p0) {
	return _in("0xCE60DE011B6C7978", _ii(p0) /* may be optional */, _r);
};

window.NetworkIsGamerTalking = function (p0) {
	return _in("0x71C33B22606CD88A", _ii(p0) /* may be optional */, _r);
};

window.NetworkIsHandleValid = function (bufferSize) {
	return _in("0x6F79B93B0A8E4133", _i, bufferSize, _r);
};

window.NetworkIsHost = function () {
	return _in("0x8DB296B814EDDA07", _r);
};

window.NetworkIsHostOfThisScript = function () {
	return _in("0x83CD99A1E6061AB5", _r);
};

window.NetworkIsInMpCutscene = function () {
	return _in("0x6CC27C9FA2040220", _r);
};

window.NetworkIsInParty = function () {
	return _in("0x966C2BC2A7FE3F30", _r);
};

window.NetworkIsInSession = function () {
	return _in("0xCA97246103B63917", _r);
};

window.NetworkIsInSpectatorMode = function () {
	return _in("0x048746E388762E11", _r);
};

window.NetworkIsInTransition = function () {
	return _in("0x68049AEFF83D8F0A", _r);
};

window.NetworkIsInTutorialSession = function () {
	return _in("0xADA24309FE08DACF", _r, _ri);
};

window.NetworkIsInactiveProfile = function (p0) {
	return _in("0x7E58745504313A2E", _ii(p0) /* may be optional */, _r);
};

window.NetworkIsLocalPlayerInvincible = function () {
	return _in("0x8A8694B48715B000", _r);
};

window.NetworkIsMultiplayerDisabled = function () {
	return _in("0x9747292807126EDA", _r);
};

window.NetworkIsParticipantActive = function (p0) {
	return _in("0x6FF8FF40B6357D45", p0, _r);
};

window.NetworkIsPartyMember = function (networkHandle) {
	return _in("0x676ED266AADD31E0", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsPendingFriend = function (p0) {
	return _in("0x0BE73DA6984A6E33", p0, _r, _ri);
};

window.NetworkIsPlayerAParticipant = function (p0) {
	return _in("0x3CA58F6CB7CBD784", p0, _r);
};

window.NetworkIsPlayerActive = function (player) {
	return _in("0xB8DFD30D6973E135", player, _r);
};

window.NetworkIsPlayerAnimationDrawingSynchronized = function () {
	return _in("0xC6F8AB8A4189CF3A");
};

window.NetworkIsPlayerBlockedByMe = function (player) {
	return _in("0x57AF1F8E27483721", player, _r);
};

window.NetworkIsPlayerConnected = function (player) {
	return _in("0x93DC1BE4E1ABE9D1", player, _r);
};

window.NetworkIsPlayerEqualToIndex = function (player, index) {
	return _in("0x9DE986FC9A87C474", player, index, _r);
};

window.NetworkIsPlayerInMpCutscene = function (player) {
	return _in("0x63F9EE203C3619F2", player, _r);
};

window.NetworkIsPlayerMutedByMe = function (player) {
	return _in("0x8C71288AE68EDE39", player, _r);
};

window.NetworkIsPlayerTalking = function (player) {
	return _in("0x031E11F3D447647E", player, _r);
};

window.NetworkIsScriptActive = function (scriptName, p1, p2, p3) {
	return _in("0x9D40DF90FAD26098", _ts(scriptName), p1, p2, p3, _r);
};

window.NetworkIsSessionActive = function () {
	return _in("0xD83C2B94E7508980", _r);
};

window.NetworkIsSessionBusy = function () {
	return _in("0xF4435D66A8E2905E", _r);
};

window.NetworkIsSessionStarted = function () {
	return _in("0x9DE624D2FC4B603F", _r);
};

window.NetworkIsSignedIn = function () {
	return _in("0x054354A99211EB96", _r);
};

window.NetworkIsSignedOnline = function () {
	return _in("0x1077788E268557C2", _r);
};

window.NetworkIsTextChatActive = function () {
	return _in("0x5FCF4D7069B09026", _r);
};

window.NetworkIsTransitionBusy = function () {
	return _in("0x520F3282A53D26B7", _r, _ri);
};

window.NetworkIsTransitionHost = function () {
	return _in("0x0B824797C9BF2159", _r, _ri);
};

window.NetworkIsTransitionHostFromHandle = function (networkHandle) {
	return _in("0x6B5C83BA3EFE6A10", _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkIsTransitionMatchmaking = function () {
	return _in("0x292564C735375EDF", _r, _ri);
};

window.NetworkIsTransitionStarted = function () {
	return _in("0x53FA83401D9C07FE", _r);
};

window.NetworkIsTransitionToGame = function () {
	return _in("0x9D7696D8F4FA6CB7", _r, _ri);
};

window.NetworkJoinGroupActivity = function () {
	return _in("0xA06509A691D12BE4", _r, _ri);
};

window.NetworkJoinTransition = function (player) {
	return _in("0x9D060B08CD63321A", player, _r);
};

window.NetworkLaunchTransition = function () {
	return _in("0x2DCF46CB1A4F0884", _r, _ri);
};

window.NetworkLeaveTransition = function () {
	return _in("0xD23A1A815D21DB19", _r, _ri);
};

window.NetworkMarkTransitionGamerAsFullyJoined = function (p0) {
	return _in("0x5728BB6D63E3FF1D", _ii(p0) /* may be optional */, _r);
};

window.NetworkMemberIdFromGamerHandle = function (networkHandle) {
	return _in("0xC82630132081BB6F", _ii(networkHandle) /* may be optional */, _r, _s);
};

window.NetworkMoneyCanBet = function (p0, p1, p2) {
	return _in("0x81404F3DC124FE5B", p0, p1, p2, _r);
};

window.NetworkOpenTransitionMatchmaking = function () {
	return _in("0x2B3A8F7CA3A38FDE");
};

window.NetworkOverrideChatRestrictions = function (player, toggle) {
	return _in("0x3039AE5AD2C9C0C4", player, toggle);
};

window.NetworkOverrideClockTime = function (Hours, Minutes, Seconds) {
	return _in("0xE679E3E06E363892", Hours, Minutes, Seconds);
};

window.NetworkOverrideReceiveRestrictions = function (player, toggle) {
	return _in("0xDDF73E2B1FEC5AB4", player, toggle);
};

window.NetworkOverrideTransitionChat = function (p0) {
	return _in("0xAF66059A131AA269", p0);
};

window.NetworkPayEmployeeWage = function (p0, p1, p2) {
	return _in("0x5FD5ED82CBBE9989", p0, p1, p2);
};

window.NetworkPayMatchEntryFee = function (value, p2, p3) {
	return _in("0x9346E14F2AF74D46", value, _i, p2, p3);
};

window.NetworkPayUtilityBill = function (p0, p1, p2) {
	return _in("0xAFE08B35EC0C9EAE", p0, p1, p2);
};

window.NetworkPlayerGetName = function (player) {
	return _in("0x7718D2E2060837D2", player, _r, _s);
};

window.NetworkPlayerGetUserid = function (player, userID) {
	return _in("0x4927FC39CD0869A0", player, _ii(userID) /* may be optional */, _r, _s);
};

window.NetworkPlayerHasHeadset = function (player) {
	return _in("0x3FB99A8B08D18FD6", player, _r);
};

window.NetworkPlayerIdToInt = function () {
	return _in("0xEE68096F9F37341E", _r, _ri);
};

window.NetworkPlayerIsBadsport = function () {
	return _in("0x19D8DA0E5A68045A", _r);
};

window.NetworkPlayerIsCheater = function () {
	return _in("0x655B91F1495A9090", _r);
};

window.NetworkPlayerIsInClan = function () {
	return _in("0x579CCED0265D4896", _r);
};

window.NetworkPlayerIsRockstarDev = function (player) {
	return _in("0x544ABDDA3B409B6D", player, _r);
};

window.NetworkReceivePlayerJobshareCash = function (value, networkHandle) {
	return _in("0x56A3B51944C50598", value, _ii(networkHandle) /* may be optional */);
};

window.NetworkRefundCash = function (index, context, reason, unk) {
	return _in("0xF9C812CD7C46E817", index, _ts(context), _ts(reason), unk);
};

window.NetworkRegisterEntityAsNetworked = function (entity) {
	return _in("0x06FAACD625D80CAA", entity);
};

window.NetworkRegisterHostBroadcastVariables = function (numVars) {
	return _in("0x3E9B2F01C50DF595", _i, numVars);
};

window.NetworkRegisterPlayerBroadcastVariables = function (numVars) {
	return _in("0x3364AA97340CA215", _i, numVars);
};

window.NetworkRemoveAllTransitionInvite = function () {
	return _in("0x726E0375C7A26368");
};

window.NetworkRemoveEntityArea = function (p0) {
	return _in("0x93CF869BAA0C4874", p0, _r);
};

window.NetworkRemovePresenceInvite = function (p0) {
	return _in("0xF0210268DB0974B1", p0, _r);
};

window.NetworkRemoveTransitionInvite = function (p0) {
	return _in("0x7524B431B2E6F7EE", _ii(p0) /* may be optional */);
};

window.NetworkRequestCloudBackgroundScripts = function () {
	return _in("0x924426BFFD82E915", _r);
};

window.NetworkRequestCloudTunables = function () {
	return _in("0x42FB3B532D526E6C");
};

window.NetworkRequestControlOfDoor = function (doorID) {
	return _in("0x870DDFD5A4A796E4", doorID, _r);
};

window.NetworkRequestControlOfEntity = function (entity) {
	return _in("0xB69317BF5E782347", entity, _r);
};

window.NetworkRequestControlOfNetworkId = function (netId) {
	return _in("0xA670B3662FAFFBD0", netId, _r);
};

window.NetworkResetBodyTracker = function () {
	return _in("0x72433699B4E6DD64");
};

window.NetworkResurrectLocalPlayer = function (x, y, z, heading, unk, changetime) {
	return _in("0xEA23C49EAA83ACFB", _fv(x), _fv(y), _fv(z), _fv(heading), unk, changetime);
};

window.NetworkSendPresenceInvite = function (p2, p3) {
	return _in("0xC3C7A6AFDB244624", _i, _i, p2, p3, _r);
};

window.NetworkSendPresenceTransitionInvite = function (p2, p3) {
	return _in("0xC116FF9B4D488291", _i, _i, p2, p3, _r);
};

window.NetworkSendTextMessage = function (message, networkHandle) {
	return _in("0x3A214F2EC889B100", _ts(message), _ii(networkHandle) /* may be optional */, _r);
};

window.NetworkSendTransitionGamerInstruction = function (p1, p2, p3, p4) {
	return _in("0x31D1D2B858D25E6B", _i, _ts(p1), p2, p3, p4, _r);
};

window.NetworkSessionActivityQuickmatch = function (p0, p1, p2, p3) {
	return _in("0xBE3E347A87ACEB82", p0, p1, p2, p3, _r);
};

window.NetworkSessionBlockJoinRequests = function (p0) {
	return _in("0xA73667484D7037C3", p0);
};

window.NetworkSessionCancelInvite = function () {
	return _in("0x2FBF47B1B36D36F9");
};

window.NetworkSessionChangeSlots = function (p0, p1) {
	return _in("0xB4AB419E0D86ACAE", p0, p1);
};

window.NetworkSessionCrewMatchmaking = function (p0, p1, p2, maxPlayers, p4) {
	return _in("0x94BC51E9449D917F", p0, p1, p2, maxPlayers, p4, _r);
};

window.NetworkSessionEnd = function (p0, p1) {
	return _in("0xA02E59562D711006", p0, p1, _r);
};

window.NetworkSessionEnter = function (p0, p1, p2, maxPlayers, p4, p5) {
	return _in("0x330ED4D05491934F", p0, p1, p2, maxPlayers, p4, p5, _r, _ri);
};

window.NetworkSessionForceCancelInvite = function () {
	return _in("0xA29177F7703B5644");
};

window.NetworkSessionFriendMatchmaking = function (p0, p1, maxPlayers, p3) {
	return _in("0x2CFC76E0D087C994", p0, p1, maxPlayers, p3, _r);
};

window.NetworkSessionGetInviter = function (networkHandle) {
	return _in("0xE57397B4A3429DD0", _ii(networkHandle) /* may be optional */);
};

window.NetworkSessionGetUnk = function (p0) {
	return _in("0x56CE820830EF040B", p0, _r, _ri);
};

window.NetworkSessionHost = function (p0, maxPlayers, p2) {
	return _in("0x6F3D4ED9BEE4E61D", p0, maxPlayers, p2, _r);
};

window.NetworkSessionHostClosed = function (p0, maxPlayers) {
	return _in("0xED34C0C02C098BB7", p0, maxPlayers, _r);
};

window.NetworkSessionHostFriendsOnly = function (p0, maxPlayers) {
	return _in("0xB9CFD27A5D578D83", p0, maxPlayers, _r);
};

window.NetworkSessionHostSinglePlayer = function (p0) {
	return _in("0xC74C33FCA52856D5", p0);
};

window.NetworkSessionHosted = function (p0) {
	return _in("0xC19F6C8E7865A6FF", p0);
};

window.NetworkSessionIsClosedCrew = function () {
	return _in("0x74732C6CA90DA2B4", _r);
};

window.NetworkSessionIsClosedFriends = function () {
	return _in("0xFBCFA2EA2E206890", _r);
};

window.NetworkSessionIsPlayerVotedToKick = function (player) {
	return _in("0xD6D09A6F32F49EF1", player, _r);
};

window.NetworkSessionIsPrivate = function () {
	return _in("0xCEF70AA5B3F89BA1", _r);
};

window.NetworkSessionIsSolo = function () {
	return _in("0xF3929C2379B60CCE", _r);
};

window.NetworkSessionIsVisible = function () {
	return _in("0xBA416D68C631496A", _r, _ri);
};

window.NetworkSessionKickPlayer = function (player) {
	return _in("0xFA8904DC5F304220", player);
};

window.NetworkSessionLeaveSinglePlayer = function () {
	return _in("0x3442775428FD2DAA");
};

window.NetworkSessionMarkVisible = function (p0) {
	return _in("0x271CC6AB59EBF9A5", p0);
};

window.NetworkSessionSetMaxPlayers = function (playerType, playerCount) {
	return _in("0x8B6A4DD0AF9CE215", playerType, playerCount);
};

window.NetworkSessionVoiceHost = function () {
	return _in("0x9C1556705F864230");
};

window.NetworkSessionVoiceLeave = function () {
	return _in("0x6793E42BE02B575D");
};

window.NetworkSessionWasInvited = function () {
	return _in("0x23DFB504655D0CE4", _r);
};

window.NetworkSetActivitySpectator = function (toggle) {
	return _in("0x75138790B4359A74", toggle);
};

window.NetworkSetActivitySpectatorMax = function (maxSpectators) {
	return _in("0x9D277B76D1D12222", maxSpectators);
};

window.NetworkSetCurrentlySelectedGamerHandleFromInviteMenu = function (p0) {
	return _in("0x7206F674F2A3B1BB", _ii(p0) /* may be optional */, _r);
};

window.NetworkSetEntityCanBlend = function (entity, toggle) {
	return _in("0xD830567D88A1E873", entity, toggle);
};

window.NetworkSetEntityVisibleToNetwork = function (entity, toggle) {
	return _in("0xF1CA12B18AEF5298", entity, toggle);
};

window.NetworkSetFriendlyFireOption = function (toggle) {
	return _in("0xF808475FA571D823", toggle);
};

window.NetworkSetGamerInvitedToTransition = function (networkHandle) {
	return _in("0xCA2C8073411ECDB6", _ii(networkHandle) /* may be optional */);
};

window.NetworkSetInMpCutscene = function (p0, p1) {
	return _in("0x9CA5DE655269FEC4", p0, p1);
};

window.NetworkSetInSpectatorMode = function (toggle, playerPed) {
	return _in("0x423DE3854BB50894", toggle, playerPed);
};

window.NetworkSetKeepFocuspoint = function (p0, p1) {
	return _in("0x7F8413B7FC2AA6B9", p0, p1);
};

window.NetworkSetLocalPlayerInvincibleTime = function (time) {
	return _in("0x2D95C7E2D7E07307", time);
};

window.NetworkSetMissionFinished = function () {
	return _in("0x3B3D11CD9FFCDFC9");
};

window.NetworkSetNetworkIdDynamic = function (netID, toggle) {
	return _in("0x2B1813ABA29016C5", netID, toggle);
};

window.NetworkSetOverrideSpectatorMode = function (toggle) {
	return _in("0x70DA3BF8DACD3210", toggle);
};

window.NetworkSetPropertyId = function (p0) {
	return _in("0x1775961C2FBBCB5C", p0);
};

window.NetworkSetRichPresence = function (p0, p1, p2, p3) {
	return _in("0x1DCCACDCFC569362", p0, p1, p2, p3);
};

window.NetworkSetScriptIsSafeForNetworkGame = function () {
	return _in("0x9243BAC96D64C050");
};

window.NetworkSetTalkerProximity = function (p0) {
	return _in("0xCBF12D65F95AD686", _fv(p0));
};

window.NetworkSetTeamOnlyChat = function (toggle) {
	return _in("0xD5B4883AC32F24C3", toggle);
};

window.NetworkSetThisScriptIsNetworkScript = function (lobbySize, p1, playerId) {
	return _in("0x1CA59E306ECB80A5", lobbySize, p1, playerId);
};

window.NetworkSetThisScriptMarked = function (p0, p1, p2) {
	return _in("0xD1110739EEADB592", p0, p1, p2, _r);
};

window.NetworkSetTransitionActivityId = function (p0) {
	return _in("0x30DE938B516F0AD2", p0);
};

window.NetworkSetTransitionCreatorHandle = function (p0) {
	return _in("0xEF26739BCD9907D5", _ii(p0) /* may be optional */);
};

window.NetworkSetVoiceActive = function (toggle) {
	return _in("0xBABEC9E69A91C57B", toggle);
};

window.NetworkSetVoiceChannel = function (p0) {
	return _in("0xEF6212C2EFEF1A23", p0);
};

window.NetworkShopBasketAddItem = function (p1) {
	return _in("0xF30980718C8ED876", _i, p1, _r, _ri);
};

window.NetworkShopBasketApplyServerData = function (p0, p1) {
	return _in("0xE1A0450ED46A7812", p0, _ii(p1) /* may be optional */, _r);
};

window.NetworkShopBasketEnd = function () {
	return _in("0xA65568121DF2EA26", _r, _ri);
};

window.NetworkShopBasketIsFull = function () {
	return _in("0x27F76CC6C55AD30E", _r, _ri);
};

window.NetworkShopBasketStart = function (p1, p2, p3) {
	return _in("0x279F08B1A4B29B7E", _i, p1, p2, p3, _r);
};

window.NetworkShopBeginService = function (p1, p2, p3, p4, p5) {
	return _in("0x3C5FD37B5499582E", _i, p1, p2, p3, p4, p5, _r);
};

window.NetworkShopCashTransferSetTelemetryNonceSeed = function () {
	return _in("0x498C1E05CE5F7877", _r, _ri);
};

window.NetworkShopCheckoutStart = function (p0) {
	return _in("0x39BE7CEA8D9CC8E6", p0, _r);
};

window.NetworkShopDeleteSetTelemetryNonceSeed = function () {
	return _in("0x112CEF1615A1139F", _r, _ri);
};

window.NetworkShopEndService = function (p0) {
	return _in("0xE2A99A9B524BEFFF", p0, _r);
};

window.NetworkShopGetPrice = function (hash, hash2, p2) {
	return _in("0xC27009422FCCA88D", _ch(hash), _ch(hash2), p2, _r, _ri);
};

window.NetworkShopGetTransactionsDisabled = function () {
	return _in("0x810E8431C0614BF9", _r);
};

window.NetworkShopGetTransactionsEnabledForCharacter = function (mpChar) {
	return _in("0xB24F0944DA203D9E", mpChar, _r);
};

window.NetworkShopIsItemUnlocked = function (name) {
	return _in("0xBD4D7EAF8A30F637", _ts(name), _r);
};

window.NetworkShopIsItemUnlockedHash = function (hash) {
	return _in("0x247F0F73A182EA0B", _ch(hash), _r);
};

window.NetworkShopSessionApplyReceivedData = function (p0) {
	return _in("0x2F41D51BA3BCD1F1", p0, _r);
};

window.NetworkShopSetTelemetryNonceSeed = function (p0) {
	return _in("0x9507D4271988E1AE", p0, _r);
};

window.NetworkShopStartSession = function (p0) {
	return _in("0xA135AC892A58FC07", p0, _r);
};

window.NetworkShowProfileUi = function (networkHandle) {
	return _in("0x859ED1CEA343FCA8", _ii(networkHandle) /* may be optional */);
};

window.NetworkSpentAmmoDrop = function (p0, p1, p2) {
	return _in("0xB162DC95C0A3317B", p0, p1, p2);
};

window.NetworkSpentArrestBail = function (p0, p1, p2) {
	return _in("0x812F5488B1B2A299", p0, p1, p2);
};

window.NetworkSpentBetting = function (p0, p1, p3, p4) {
	return _in("0x1C436FD11FFA692F", p0, p1, _i, p3, p4);
};

window.NetworkSpentBoatPickup = function (p0, p1, p2) {
	return _in("0x524EE43A37232C00", p0, p1, p2);
};

window.NetworkSpentBounty = function (p0, p1, p2) {
	return _in("0x29B260B84947DFCC", p0, p1, p2);
};

window.NetworkSpentBullShark = function (p0, p1, p2) {
	return _in("0xA6DD8458CE24012C", p0, p1, p2);
};

window.NetworkSpentBuyOfftheradar = function (p0, p1, p2) {
	return _in("0xA628A745E2275C5D", p0, p1, p2);
};

window.NetworkSpentBuyPassiveMode = function (p0, p1, p2) {
	return _in("0x6D3A430D1A809179", p0, p1, p2);
};

window.NetworkSpentBuyRevealPlayers = function (p0, p1, p2) {
	return _in("0x6E176F1B18BC0637", p0, p1, p2);
};

window.NetworkSpentBuyWantedlevel = function (p0, p2, p3) {
	return _in("0xE1B13771A843C4F6", p0, _i, p2, p3);
};

window.NetworkSpentCallPlayer = function (p0, p2, p3) {
	return _in("0xACDE7185B374177C", p0, _i, p2, p3);
};

window.NetworkSpentCarwash = function (p0, p1, p2, p3, p4) {
	return _in("0xEC03C719DB2F4306", p0, p1, p2, p3, p4);
};

window.NetworkSpentCashDrop = function (p0, p1, p2) {
	return _in("0x289016EC778D60E0", p0, p1, p2);
};

window.NetworkSpentCinema = function (p0, p1, p2, p3) {
	return _in("0x6B38ECB05A63A685", p0, p1, p2, p3);
};

window.NetworkSpentFromRockstar = function (bank, p1, p2) {
	return _in("0x6A445B64ED7ABEB5", bank, p1, p2);
};

window.NetworkSpentHeliPickup = function (p0, p1, p2) {
	return _in("0x7BF1D73DB2ECA492", p0, p1, p2);
};

window.NetworkSpentHireMercenary = function (p0, p1, p2) {
	return _in("0xE7B80E2BF9D80BD6", p0, p1, p2);
};

window.NetworkSpentHireMugger = function (p0, p1, p2) {
	return _in("0xE404BFB981665BF0", p0, p1, p2);
};

window.NetworkSpentHoldups = function (p0, p1, p2) {
	return _in("0xD9B86B9872039763", p0, p1, p2);
};

window.NetworkSpentInStripclub = function (p0, p1, p2, p3) {
	return _in("0xEE99784E4467689C", p0, p1, p2, p3);
};

window.NetworkSpentNoCops = function (p0, p1, p2) {
	return _in("0xD5BB406F4E04019F", p0, p1, p2);
};

window.NetworkSpentPayVehicleInsurancePremium = function (amount, vehicleModel, notBankrupt, hasTheMoney) {
	return _in("0x9FF28D88C766E3E8", amount, _ch(vehicleModel), _i, notBankrupt, hasTheMoney);
};

window.NetworkSpentPlayerHealthcare = function (p0, p1, p2, p3) {
	return _in("0x7C99101F7FCE2EE5", p0, p1, p2, p3);
};

window.NetworkSpentProstitutes = function (p0, p1, p2) {
	return _in("0xB21B89501CFAC79E", p0, p1, p2);
};

window.NetworkSpentRequestHeist = function (p0, p1, p2) {
	return _in("0x9D26502BB97BFE62", p0, p1, p2);
};

window.NetworkSpentRequestJob = function (p0, p1, p2) {
	return _in("0x8204DA7934DF3155", p0, p1, p2);
};

window.NetworkSpentRobbedByMugger = function (amount, p1, p2) {
	return _in("0x995A65F15F581359", amount, p1, p2);
};

window.NetworkSpentTaxi = function (amount, p1, p2) {
	return _in("0x17C3A7D31EAE39F9", amount, p1, p2);
};

window.NetworkSpentTelescope = function (p0, p1, p2) {
	return _in("0x7FE61782AD94CC09", p0, p1, p2);
};

window.NetworkStartSynchronisedScene = function (netScene) {
	return _in("0x9A1B3FCDB36C8697", netScene);
};

window.NetworkStopLoadScene = function () {
	return _in("0x64E630FAF5F60F44");
};

window.NetworkStopSynchronisedScene = function (netScene) {
	return _in("0xC254481A4574CB2F", netScene);
};

window.NetworkSuppressInvite = function (toggle) {
	return _in("0xA0682D67EF1FBA3D", toggle);
};

window.NetworkTransferBankToWallet = function (charStatInt, amount) {
	return _in("0xD47A2C1BA117471D", charStatInt, amount, _r);
};

window.NetworkTransferWalletToBank = function (charStatInt, amount) {
	return _in("0xC2F7FE5309181C7D", charStatInt, amount, _r);
};

window.NetworkUnlinkNetworkedSynchronisedScene = function (netScene) {
	return _in("0x02C40BF885C567B6", netScene, _r, _ri);
};

window.NetworkUnregisterNetworkedEntity = function (entity) {
	return _in("0x7368E683BB9038D6", entity);
};

window.NetworkUpdateLoadScene = function () {
	return _in("0xC4582015556D1C46", _r, _ri);
};

window.NetworkXAffectsGamers = function (p0) {
	return _in("0xE532D6811B3A4D2A", p0, _r);
};

window.NewLoadSceneStart = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x212A8D0D2BABFAC2", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7, _r);
};

window.NewLoadSceneStartSphere = function (p0, p1, p2, p3, p4) {
	return _in("0xACCFB4ACF53551B0", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, _r);
};

window.NewLoadSceneStop = function () {
	return _in("0xC197616D221FF4A4");
};

window.NotificationSendApartmentInvite = function (p0, p1, p3, isLeader, unk0, clanDesc, R, G, B) {
	return _in("0x97C9E4E7024A8F2C", p0, p1, _i, p3, isLeader, unk0, clanDesc, R, G, B, _r, _ri);
};

window.NotificationSendClanInvite = function (p0, p1, p3, isLeader, unk0, clanDesc, playerName, R, G, B) {
	return _in("0x137BC35589E34E1E", p0, p1, _i, p3, isLeader, unk0, clanDesc, _ts(playerName), R, G, B, _r, _ri);
};

window.Nullify = function (unused) {
	return _in("0x46E2B844905BC5F0", _i, unused, _r);
};

window.ObjToNet = function (object) {
	return _in("0x99BFDC94A603E541", object, _r, _ri);
};

window.ObjectDecalToggle = function (hash) {
	return _in("0x444D8CF241EC25C5", _ch(hash));
};

window.ObjectValueAddArray = function (key) {
	return _in("0x5B11728527CA6E5F", _i, _ts(key), _r, _ri);
};

window.ObjectValueAddBoolean = function (key, value) {
	return _in("0x35124302A556A325", _i, _ts(key), value);
};

window.ObjectValueAddFloat = function (key, value) {
	return _in("0xC27E1CC2D795105E", _i, _ts(key), _fv(value));
};

window.ObjectValueAddInteger = function (key, value) {
	return _in("0xE7E035450A7948D5", _i, _ts(key), value);
};

window.ObjectValueAddObject = function (key) {
	return _in("0xA358F56F10732EE1", _i, _ts(key), _r, _ri);
};

window.ObjectValueAddString = function (key, value) {
	return _in("0x8FF3847DADD8E30C", _i, _ts(key), _ts(value));
};

window.ObjectValueAddVector3 = function (key, valueX, valueY, valueZ) {
	return _in("0x4CD49B76338C7DEE", _i, _ts(key), _fv(valueX), _fv(valueY), _fv(valueZ));
};

window.ObjectValueGetArray = function (key) {
	return _in("0x7A983AA9DA2659ED", _i, _ts(key), _r, _ri);
};

window.ObjectValueGetBoolean = function (key) {
	return _in("0x1186940ED72FFEEC", _i, _ts(key), _r);
};

window.ObjectValueGetFloat = function (key) {
	return _in("0x06610343E73B9727", _i, _ts(key), _r, _rf);
};

window.ObjectValueGetInteger = function (key) {
	return _in("0x78F06F6B1FB5A80C", _i, _ts(key), _r, _ri);
};

window.ObjectValueGetObject = function (key) {
	return _in("0xB6B9DDC412FCEEE2", _i, _ts(key), _r, _ri);
};

window.ObjectValueGetString = function (key) {
	return _in("0x3D2FD9E763B24472", _i, _ts(key), _r, _s);
};

window.ObjectValueGetType = function (key) {
	return _in("0x031C55ED33227371", _i, _ts(key), _r, _ri);
};

window.ObjectValueGetVector3 = function (key) {
	return _in("0x46CD3CB66E0825CC", _i, _ts(key), _r, _rv);
};

window.OpenBombBayDoors = function (vehicle) {
	return _in("0x87E7F24270732CB1", vehicle);
};

window.OpenPatrolRoute = function (patrolRoute) {
	return _in("0xA36BFB5EE89F3D82", _ts(patrolRoute));
};

window.OpenSequenceTask = function (taskSequence) {
	return _in("0xE8854A4326B9E12B", _ii(taskSequence) /* may be optional */, _r, _ri);
};

window.OverrideCamSplineMotionBlur = function (cam, p1, p2, p3) {
	return _in("0x7DCF7C708D292D55", cam, p1, _fv(p2), _fv(p3));
};

window.OverrideCamSplineVelocity = function (cam, p1, p2, p3) {
	return _in("0x40B62FA033EB0346", cam, p1, _fv(p2), _fv(p3));
};

window.OverridePopscheduleVehicleModel = function (scheduleId, vehicleHash) {
	return _in("0x5F7D596BAC2E7777", scheduleId, _ch(vehicleHash));
};

window.OverrideSaveHouse = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x1162EA8AE9D24EEA", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), p5, _fv(p6), _fv(p7), _r);
};

window.OverrideTrevorRage = function (p0) {
	return _in("0x13AD665062541A7E", _ii(p0) /* may be optional */);
};

window.OverrideUnderwaterStream = function (p1) {
	return _in("0xF2A9CDABCEA04BD6", _i, p1);
};

window.OverrideVehHorn = function (vehicle, mute, p2) {
	return _in("0x3CDC1E622CCE0356", vehicle, mute, p2);
};

window.ParticipantId = function () {
	return _in("0x90986E8876CE0A83", _r, _ri);
};

window.ParticipantIdToInt = function () {
	return _in("0x57A3BDDAD8E5AA0A", _r, _ri);
};

window.PauseClock = function (toggle) {
	return _in("0x4055E40BD2DBEC1D", toggle);
};

window.PausePlaybackRecordedVehicle = function (p0) {
	return _in("0x632A689BF42301B1", p0);
};

window.PauseScriptedConversation = function (p0) {
	return _in("0x8530AD776CD72B12", p0);
};

window.PedHasUseScenarioTask = function (ped) {
	return _in("0x295E3CCEC879CCD7", ped, _r);
};

window.PedSkipNextReloading = function (ped) {
	return _in("0x8C0D57EA686FAD87", ped, _r);
};

window.PedToNet = function (ped) {
	return _in("0x0EDEC3C276198689", ped, _r, _ri);
};

window.PinRopeVertex = function (rope, vertex, x, y, z) {
	return _in("0x2B320CF14146B69A", rope, vertex, _fv(x), _fv(y), _fv(z));
};

window.PlaceObjectOnGroundProperly = function (object) {
	return _in("0x58A850EAEE20FAA3", object, _r);
};

window.PlayAmbientSpeech1 = function (ped, speechName, speechParam) {
	return _in("0x8E04FEDD28D42462", ped, _ts(speechName), _ts(speechParam));
};

window.PlayAmbientSpeech2 = function (ped, speechName, speechParam) {
	return _in("0xC6941B4A3A8FBBB9", ped, _ts(speechName), _ts(speechParam));
};

window.PlayAmbientSpeechAtCoords = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xED640017ED337E45", _ts(p0), _ts(p1), _fv(p2), _fv(p3), _fv(p4), _ts(p5));
};

window.PlayAmbientSpeechWithVoice = function (p0, speechName, voiceName, speechParam, p4) {
	return _in("0x3523634255FC3318", p0, _ts(speechName), _ts(voiceName), _ts(speechParam), p4);
};

window.PlayAnimOnRunningScenario = function (ped, animDict, animName) {
	return _in("0x748040460F8DF5DC", ped, _ts(animDict), _ts(animName));
};

window.PlayCamAnim = function (cam, animName, animDictionary, x, y, z, xRot, yRot, zRot, p9, p10) {
	return _in("0x9A2D0FB2E7852392", cam, _ts(animName), _ts(animDictionary), _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), p9, p10, _r);
};

window.PlayEndCreditsMusic = function (play) {
	return _in("0xCD536C4D33DCC900", play);
};

window.PlayEntityAnim = function (entity, animName, animDict, p3, loop, stayInAnim, p6, delta, bitset) {
	return _in("0x7FB218262B810701", entity, _ts(animName), _ts(animDict), _fv(p3), loop, stayInAnim, p6, _fv(delta), bitset, _r);
};

window.PlayEntityScriptedAnim = function (p0, p4, p5) {
	return _in("0x77A1EEC547E7FCF1", p0, _i, _i, _i, _fv(p4), _fv(p5));
};

window.PlayFacialAnim = function (ped, animName, animDict) {
	return _in("0xE1E65CA8AC9C00ED", ped, _ts(animName), _ts(animDict));
};

window.PlayMissionCompleteAudio = function (audioName) {
	return _in("0xB138AAB8A70D3C69", _ts(audioName));
};

window.PlayPain = function (ped, painID, p1) {
	return _in("0xBC9AE166038A5CEC", ped, painID, p1);
};

window.PlayPedRingtone = function (ringtoneName, ped, p2) {
	return _in("0xF9E56683CA8E11A5", _ts(ringtoneName), ped, p2);
};

window.PlayPoliceReport = function (name, p1) {
	return _in("0xDFEBD56D9BD1EB16", _ts(name), _fv(p1), _r, _ri);
};

window.PlaySound = function (soundId, audioName, audioRef, p3, p4, p5) {
	return _in("0x7FF4944CC209192D", soundId, _ts(audioName), _ts(audioRef), p3, p4, p5);
};

window.PlaySoundFromCoord = function (soundId, audioName, x, y, z, audioRef, p6, range, p8) {
	return _in("0x8D8686B622B88120", soundId, _ts(audioName), _fv(x), _fv(y), _fv(z), _ts(audioRef), p6, range, p8);
};

window.PlaySoundFromEntity = function (soundId, audioName, entity, audioRef, p4, p5) {
	return _in("0xE65F427EB70AB1ED", soundId, _ts(audioName), entity, _ts(audioRef), p4, p5);
};

window.PlaySoundFrontend = function (soundId, audioName, audioRef, p3) {
	return _in("0x67C540AA08E4A6F5", soundId, _ts(audioName), _ts(audioRef), p3);
};

window.PlayStreamFromObject = function (object) {
	return _in("0xEBAA9B64D76356FD", object);
};

window.PlayStreamFromPed = function (ped) {
	return _in("0x89049DD63C08B5D1", ped);
};

window.PlayStreamFromVehicle = function (vehicle) {
	return _in("0xB70374A758007DFA", vehicle);
};

window.PlayStreamFrontend = function () {
	return _in("0x58FCE43488F9F5F4");
};

window.PlaySynchronizedAudioEvent = function (p0) {
	return _in("0x8B2FD4560E55DD2D", p0, _r);
};

window.PlaySynchronizedCamAnim = function (p0, p1, animName, animDictionary) {
	return _in("0xE32EFE9AB4A9AA0C", p0, p1, _ts(animName), _ts(animDictionary), _r);
};

window.PlaySynchronizedEntityAnim = function (entity, syncedScene, animation, propName, p4, p5, p6, p7) {
	return _in("0xC77720A12FE14A86", entity, syncedScene, _ts(animation), _ts(propName), _fv(p4), _fv(p5), p6, _fv(p7), _r);
};

window.PlaySynchronizedMapEntityAnim = function (p0, p1, p2, p3, p4, p5, p8, p9, p10, p11) {
	return _in("0xB9C54555ED30FBC4", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, p5, _i, _i, _fv(p8), _fv(p9), p10, _fv(p11), _r);
};

window.PlayVehicleDoorCloseSound = function (vehicle, p1) {
	return _in("0x62A456AA4769EF34", vehicle, p1);
};

window.PlayVehicleDoorOpenSound = function (vehicle, p1) {
	return _in("0x3A539D52857EA82D", vehicle, p1);
};

window.PlayerAttachVirtualBound = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xED51733DC73AED51", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7));
};

window.PlayerDetachVirtualBound = function () {
	return _in("0x1DD5897E2FA6E7C9");
};

window.PlayerId = function () {
	return _in("0x4F8644AF03D0E0D6", _r, _ri);
};

window.PlayerPedId = function () {
	return _in("0xD80958FC74E988A6", _r, _ri);
};

window.PlaystatsAmbientMissionCrateCreated = function (p0, p1, p2) {
	return _in("0xAFC7E5E075A96F46", _fv(p0), _fv(p1), _fv(p2));
};

window.PlaystatsAwardXp = function (p0, p1, p2) {
	return _in("0x46F917F6B4128FE4", p0, p1, p2);
};

window.PlaystatsCheatApplied = function (cheat) {
	return _in("0x6058665D72302D3F", _ts(cheat));
};

window.PlaystatsClothChange = function (p0, p1, p2, p3, p4) {
	return _in("0x34B973047A2268B9", p0, p1, p2, p3, p4);
};

window.PlaystatsFriendActivity = function (p0, p1) {
	return _in("0x0F71DE29AB2258F1", p0, p1);
};

window.PlaystatsMatchStarted = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xBC80E22DED931E3D", p0, p1, p2, p3, p4, p5, p6);
};

window.PlaystatsMissionCheckpoint = function (p1, p2, p3) {
	return _in("0xC900596A63978C1D", _i, p1, p2, p3);
};

window.PlaystatsMissionOver = function (p1, p2, p3, p4, p5) {
	return _in("0x7C4BB33A8CED7324", _i, p1, p2, p3, p4, p5);
};

window.PlaystatsMissionStarted = function (p1, p2, p3) {
	return _in("0xC19A2925C34D2231", _i, p1, p2, p3);
};

window.PlaystatsNpcInvite = function (p0) {
	return _in("0x93054C88E6AA7C44", _ii(p0) /* may be optional */);
};

window.PlaystatsOddjobDone = function (p0, p1, p2) {
	return _in("0x69DEA3E9DB727B4C", p0, p1, p2);
};

window.PlaystatsPropChange = function (p0, p1, p2, p3) {
	return _in("0xBA739D6D5A05D6E7", p0, p1, p2, p3);
};

window.PlaystatsRaceCheckpoint = function (p0, p1, p2, p3, p4) {
	return _in("0x9C375C315099DDE4", p0, p1, p2, p3, p4);
};

window.PlaystatsRankUp = function (p0) {
	return _in("0xC7F2DE41D102BFB4", p0);
};

window.PlaystatsShopItem = function (p0, p1, p2, p3, p4) {
	return _in("0x176852ACAAC173D1", p0, p1, p2, p3, p4);
};

window.PlaystatsWebsiteVisited = function (scaleformHash, p1) {
	return _in("0xDDF24D535060F811", _ch(scaleformHash), p1);
};

window.PointCamAtCoord = function (cam, x, y, z) {
	return _in("0xF75497BB865F0803", cam, _fv(x), _fv(y), _fv(z));
};

window.PointCamAtEntity = function (cam, entity, p2, p3, p4, p5) {
	return _in("0x5640BFF86B16E8DC", cam, entity, _fv(p2), _fv(p3), _fv(p4), p5);
};

window.PointCamAtPedBone = function (cam, ped, boneIndex, x, y, z, p6) {
	return _in("0x68B2B5F33BA63C41", cam, ped, boneIndex, _fv(x), _fv(y), _fv(z), p6);
};

window.PopScaleformMovieFunction = function () {
	return _in("0xC50AA39A577AF886", _r, _ri);
};

window.PopScaleformMovieFunctionVoid = function () {
	return _in("0xC6796A8FFA375E53");
};

window.PopTimecycleModifier = function () {
	return _in("0x3C8938D7D872211E");
};

window.PopulateNow = function () {
	return _in("0x7472BB270D7B4F3E");
};

window.Pow = function (base, exponent) {
	return _in("0xE3621CC40F31FE2E", _fv(base), _fv(exponent), _r, _rf);
};

window.PrefetchSrl = function (srl) {
	return _in("0x3D245789CE12982C", _ts(srl));
};

window.PreloadScriptConversation = function (p0, p1, p2, p3) {
	return _in("0x3B3CAD6166916D87", p0, p1, p2, p3);
};

window.PreloadScriptPhoneConversation = function (p0, p1) {
	return _in("0x6004BCB0E226AAEA", p0, p1);
};

window.PreloadVehicleMod = function (p0, p1, p2) {
	return _in("0x758F49C24925568A", p0, p1, p2);
};

window.PrepareAlarm = function (alarmName) {
	return _in("0x9D74AE343DB65533", _ts(alarmName), _r);
};

window.PrepareMusicEvent = function (eventName) {
	return _in("0x1E5185B72EF5158A", _ts(eventName), _r);
};

window.PrepareSynchronizedAudioEvent = function (p0, p1) {
	return _in("0xC7ABCACA4985A766", _ts(p0), p1, _r, _ri);
};

window.PrepareSynchronizedAudioEventForScene = function (p0, p1) {
	return _in("0x029FE7CD1B7E2E75", p0, _ii(p1) /* may be optional */, _r);
};

window.ProcessCashGift = function (p2) {
	return _in("0x20194D48EAEC9A41", _i, _i, _ts(p2), _r, _s);
};

window.ProcessEntityAttachments = function (entity) {
	return _in("0xF4080490ADC51C6F", entity);
};

window.PulseBlip = function (blip) {
	return _in("0x742D6FD43115AF73", blip);
};

window.PushScaleformMovieFunction = function (scaleform, functionName) {
	return _in("0xF6E48914C7A8694E", scaleform, _ts(functionName), _r);
};

window.PushScaleformMovieFunctionFromHudComponent = function (hudComponent, functionName) {
	return _in("0x98C494FD5BDFBFD5", hudComponent, _ts(functionName), _r);
};

window.PushScaleformMovieFunctionN = function (functionName) {
	return _in("0xAB58C27C2E6123C6", _ts(functionName), _r);
};

window.PushScaleformMovieFunctionParameterBool = function (value) {
	return _in("0xC58424BA936EB458", value);
};

window.PushScaleformMovieFunctionParameterFloat = function (value) {
	return _in("0xD69736AAE04DB51A", _fv(value));
};

window.PushScaleformMovieFunctionParameterInt = function (value) {
	return _in("0xC3D0841A0CC546A6", value);
};

window.PushScaleformMovieFunctionParameterString = function (value) {
	return _in("0xBA7148484BD90365", _ts(value));
};

window.PushTimecycleModifier = function () {
	return _in("0x58F735290861E6B4");
};

window.RaiseConvertibleRoof = function (vehicle, instantlyRaise) {
	return _in("0x8F5FB35D7E88FC70", vehicle, instantlyRaise);
};

window.RaiseLowerableWheels = function (vehicle) {
	return _in("0xF660602546D27BA8", vehicle);
};

window.RefreshInterior = function (interiorID) {
	return _in("0x41F37C3427C75AE0", interiorID);
};

window.RefreshWaypoint = function () {
	return _in("0x81FA173F170560D1");
};

window.RegisterBoolToSave = function (name) {
	return _in("0xC8F4131414C835A1", _i, _ts(name));
};

window.RegisterCommand = function (commandName, handler, restricted) {
	return _in("0x5fa79b0f", _ts(commandName), _mfr(handler), restricted);
};

window.RegisterEntityForCutscene = function (cutscenePed, cutsceneEntName, p2, modelHash, p4) {
	return _in("0xE40C1C56DF95C2E8", cutscenePed, _ts(cutsceneEntName), p2, _ch(modelHash), p4);
};

window.RegisterEnumToSave = function (name) {
	return _in("0x10C2FA78D0E128A1", _i, _ts(name));
};

window.RegisterFloatToSave = function (name) {
	return _in("0x7CAEC29ECB5DFEBB", _i, _ts(name));
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

window.RegisterHatedTargetsAroundPed = function (ped, radius) {
	return _in("0x9222F300BF8354FE", ped, _fv(radius));
};

window.RegisterIntToSave = function (name) {
	return _in("0x34C9EE5986258415", _i, _ts(name));
};

window.RegisterNamedRendertarget = function (p0, p1) {
	return _in("0x57D9C12635E25CE3", _ts(p0), p1, _r);
};

window.RegisterNuiCallbackType = function (callbackType) {
	return _in("0xcd03cda9", _ts(callbackType));
};

window.RegisterObjectScriptBrain = function (scriptName, objectName, p2, p3, p4, p5) {
	return _in("0x0BE84C318BA6EC22", _ts(scriptName), _ch(objectName), p2, _fv(p3), p4, p5);
};

window.RegisterPedheadshot = function (ped) {
	return _in("0x4462658788425076", ped, _r, _ri);
};

window.RegisterSaveHouse = function (p0, p1, p2, p3, p5, p6) {
	return _in("0xC0714D0A7EEECA54", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _i, p5, p6, _r, _ri);
};

window.RegisterScriptWithAudio = function (p0) {
	return _in("0xC6ED9D5092438D91", p0);
};

window.RegisterSynchronisedScriptSpeech = function () {
	return _in("0x2131046957F31B04");
};

window.RegisterTarget = function (ped, target) {
	return _in("0x2F25D9AEFA34FBA2", ped, target);
};

window.RegisterTextLabelToSave = function (name) {
	return _in("0xEDB1232C5BEAE62F", _i, _ts(name));
};

window.RegisterWorldPointScriptBrain = function (p1, p2) {
	return _in("0x3CDC7136613284BD", _i, _fv(p1), p2);
};

window.ReleaseAmbientAudioBank = function () {
	return _in("0x65475A218FFAA93D");
};

window.ReleaseMissionAudioBank = function () {
	return _in("0x0EC92A1BF0857187");
};

window.ReleaseMovieMeshSet = function (movieMeshSet) {
	return _in("0xEB119AA014E89183", movieMeshSet);
};

window.ReleaseNamedRendertarget = function (p0) {
	return _in("0xE9F6FFE837354DD4", _ii(p0) /* may be optional */, _r);
};

window.ReleaseNamedScriptAudioBank = function (audioBank) {
	return _in("0x77ED170667F50170", _ts(audioBank));
};

window.ReleasePreloadMods = function (vehicle) {
	return _in("0x445D79F995508307", vehicle);
};

window.ReleaseScriptAudioBank = function () {
	return _in("0x7A2D8AD0A9EB9C3F");
};

window.ReleaseSoundId = function (soundId) {
	return _in("0x353FC880830B88FA", soundId);
};

window.RemoveActionModeAsset = function (asset) {
	return _in("0x13E940F88470FA51", _ts(asset));
};

window.RemoveAllCoverBlockingAreas = function () {
	return _in("0xDB6708C0B46F56D8");
};

window.RemoveAllPedWeapons = function (ped, p1) {
	return _in("0xF25DF915FA38C5F3", ped, p1);
};

window.RemoveAllPickupsOfType = function (pickupHash) {
	return _in("0x27F9D613092159CF", _ch(pickupHash));
};

window.RemoveAllProjectilesOfType = function (weaponHash, p1) {
	return _in("0xFC52E0F37E446528", _ch(weaponHash), p1);
};

window.RemoveAllShockingEvents = function (p0) {
	return _in("0xEAABE8FDFA21274C", p0);
};

window.RemoveAnimDict = function (animDict) {
	return _in("0xF66A602F829E2A06", _ts(animDict));
};

window.RemoveAnimSet = function (animSet) {
	return _in("0x16350528F93024B3", _ts(animSet));
};

window.RemoveBlip = function (blip) {
	return _in("0x86A652570E5F25DD", _ii(blip) /* may be optional */);
};

window.RemoveClipSet = function (clipSet) {
	return _in("0x01F73A131C18CD94", _ts(clipSet));
};

window.RemoveCoverPoint = function (coverpoint) {
	return _in("0xAE287C923D891715", coverpoint);
};

window.RemoveCutscene = function () {
	return _in("0x440AF51A3462B86F");
};

window.RemoveDecal = function (decal) {
	return _in("0xED3F346429CCD659", decal);
};

window.RemoveDecalsFromObject = function (obj) {
	return _in("0xCCF71CBDDF5B6CB9", obj);
};

window.RemoveDecalsFromObjectFacing = function (obj, x, y, z) {
	return _in("0xA6F6F70FDC6D144C", obj, _fv(x), _fv(y), _fv(z));
};

window.RemoveDecalsFromVehicle = function (vehicle) {
	return _in("0xE91F1B65F2B48D57", vehicle);
};

window.RemoveDecalsInRange = function (x, y, z, range) {
	return _in("0x5D6B2D4830A67C62", _fv(x), _fv(y), _fv(z), _fv(range));
};

window.RemoveDispatchSpawnBlockingArea = function (p0) {
	return _in("0x264AC28B01B353A5", p0);
};

window.RemoveDoorFromSystem = function (doorHash) {
	return _in("0x464D8E1427156FE4", _ch(doorHash));
};

window.RemoveForcedObject = function (p0, p1, p2, p3, p4) {
	return _in("0x61B6775E83C0DB6F", p0, p1, p2, p3, p4);
};

window.RemoveFromItemset = function (p0, p1) {
	return _in("0x25E68244B0177686", p0, p1);
};

window.RemoveGroup = function (groupId) {
	return _in("0x8EB2F69076AF7053", groupId);
};

window.RemoveIpl = function (iplName) {
	return _in("0xEE6C5AD3ECE0A82D", _ts(iplName));
};

window.RemoveLoadingPrompt = function () {
	return _in("0x10D373323E5B9C0D");
};

window.RemoveModelHide = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xD9E3006FB3CBD765", p0, p1, p2, p3, p4, p5);
};

window.RemoveModelSwap = function (x, y, z, radius, originalModel, newModel, p6) {
	return _in("0x033C0F9A64E229AE", _fv(x), _fv(y), _fv(z), _fv(radius), _ch(originalModel), _ch(newModel), p6);
};

window.RemoveMpGamerTag = function (gamerTagId) {
	return _in("0x31698AA80E0223F8", gamerTagId);
};

window.RemoveMultiplayerBankCash = function () {
	return _in("0xC7C6789AA1CFEDD0");
};

window.RemoveMultiplayerHudCash = function () {
	return _in("0x968F270E39141ECA");
};

window.RemoveNamedPtfxAsset = function (fxName) {
	return _in("0x5F61EBBE1A00F96D", _ts(fxName));
};

window.RemoveNavmeshBlockingObject = function (p0) {
	return _in("0x46399A7895957C0E", p0);
};

window.RemoveNavmeshRequiredRegions = function () {
	return _in("0x916F0A3CDEC3445E");
};

window.RemoveNotification = function (notificationId) {
	return _in("0xBE4390CB40B3E627", notificationId);
};

window.RemoveParticleFx = function (ptfxHandle, p1) {
	return _in("0xC401503DFE8D53CF", ptfxHandle, p1);
};

window.RemoveParticleFxFromEntity = function (entity) {
	return _in("0xB8FEAEEBCC127425", entity);
};

window.RemoveParticleFxInRange = function (X, Y, Z, radius) {
	return _in("0xDD19FA1C6D657305", _fv(X), _fv(Y), _fv(Z), _fv(radius));
};

window.RemovePedDefensiveArea = function (ped, toggle) {
	return _in("0x74D4E028107450A9", ped, toggle);
};

window.RemovePedElegantly = function (ped) {
	return _in("0xAC6D445B994DF95E", _ii(ped) /* may be optional */);
};

window.RemovePedFromGroup = function (ped) {
	return _in("0xED74007FFB146BC2", ped);
};

window.RemovePedHelmet = function (ped, instantly) {
	return _in("0xA7B2458D0AD6DED8", ped, instantly);
};

window.RemovePedPreferredCoverSet = function (ped) {
	return _in("0xFDDB234CF74073D9", ped);
};

window.RemovePickUpRopeForCargobob = function (cargobob) {
	return _in("0x9768CF648F54C804", cargobob);
};

window.RemovePickup = function (pickup) {
	return _in("0x3288D8ACAECD2AB2", pickup);
};

window.RemovePlayerHelmet = function (player, p2) {
	return _in("0xF3AC26D3CC576528", player, p2, _r, _ri);
};

window.RemovePtfxAsset = function () {
	return _in("0x88C6814073DD4A73");
};

window.RemoveRelationshipGroup = function (groupHash) {
	return _in("0xB6BA2444AB393DA2", _ch(groupHash));
};

window.RemoveScenarioBlockingArea = function (p0, p1) {
	return _in("0x31D16B74C6E29D66", p0, p1);
};

window.RemoveScenarioBlockingAreas = function () {
	return _in("0xD37401D78A929A49");
};

window.RemoveScriptFire = function (fireHandle) {
	return _in("0x7FF548385680673F", fireHandle);
};

window.RemoveShockingEvent = function (event) {
	return _in("0x2CDA538C44C6CCE5", event, _r);
};

window.RemoveShockingEventSpawnBlockingAreas = function () {
	return _in("0x340F1415B68AEADE");
};

window.RemoveStealthModeAsset = function (asset) {
	return _in("0x9219857D21F0E842", _ts(asset));
};

window.RemoveVehicleAsset = function (vehicleAsset) {
	return _in("0xACE699C71AB9DEB5", vehicleAsset);
};

window.RemoveVehicleHighDetailModel = function (vehicle) {
	return _in("0x00689CDE5F7C6787", vehicle);
};

window.RemoveVehicleMod = function (vehicle, modType) {
	return _in("0x92D619E420858204", vehicle, modType);
};

window.RemoveVehicleRecording = function (p0, p1) {
	return _in("0xF1160ACCF98A3FC8", p0, _ii(p1) /* may be optional */);
};

window.RemoveVehicleStuckCheck = function (vehicle) {
	return _in("0x8386BFB614D06749", vehicle);
};

window.RemoveVehicleUpsidedownCheck = function (vehicle) {
	return _in("0xC53EB42A499A7E90", vehicle);
};

window.RemoveVehicleWindow = function (vehicle, windowIndex) {
	return _in("0xA711568EEDB43069", vehicle, windowIndex);
};

window.RemoveVehiclesFromGeneratorsInArea = function (x1, y1, z1, x2, y2, z2, unk) {
	return _in("0x46A1E1A299EC4BBA", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), unk);
};

window.RemoveWaypointRecording = function (name) {
	return _in("0xFF1B8B4AA1C25DC8", _ts(name));
};

window.RemoveWeaponAsset = function (weaponHash) {
	return _in("0xAA08EF13F341C8FC", _ch(weaponHash));
};

window.RemoveWeaponComponentFromPed = function (ped, weaponHash, componentHash) {
	return _in("0x1E8BE90C74FB4C09", ped, _ch(weaponHash), _ch(componentHash));
};

window.RemoveWeaponComponentFromWeaponObject = function (p0, p1) {
	return _in("0xF7D82B0D66777611", p0, p1);
};

window.RemoveWeaponFromPed = function (ped, weaponHash) {
	return _in("0x4899CB088EDF59B8", ped, _ch(weaponHash));
};

window.RenderScriptCams = function (render, ease, easeTime, p3, p4) {
	return _in("0x07E5B515DB0636FC", render, ease, easeTime, p3, p4);
};

window.ReportCrime = function (player, crimeType, wantedLvlThresh) {
	return _in("0xE9B09589827545E7", player, crimeType, wantedLvlThresh);
};

window.RequestActionModeAsset = function (asset) {
	return _in("0x290E2780BB7AA598", _ts(asset));
};

window.RequestAdditionalCollisionAtCoord = function (p0, p1, p2) {
	return _in("0xC9156DC11411A9EA", _fv(p0), _fv(p1), _fv(p2));
};

window.RequestAdditionalText = function (gxt, slot) {
	return _in("0x71A78003C8E71424", _ts(gxt), slot);
};

window.RequestAdditionalText_2 = function (gxt, slot) {
	return _in("0x6009F9F1AE90D8A6", _ts(gxt), slot);
};

window.RequestAmbientAudioBank = function (p0, p1) {
	return _in("0xFE02FFBED8CA9D99", _ts(p0), p1, _r);
};

window.RequestAnimDict = function (animDict) {
	return _in("0xD3BD40951412FEF6", _ts(animDict));
};

window.RequestAnimSet = function (animSet) {
	return _in("0x6EA47DAE7FAD0EED", _ts(animSet));
};

window.RequestClipSet = function (clipSet) {
	return _in("0xD2A71E1A77418A49", _ts(clipSet));
};

window.RequestCollisionAtCoord = function (x, y, z) {
	return _in("0x07503F7948F491A7", _fv(x), _fv(y), _fv(z), _r, _ri);
};

window.RequestCollisionForModel = function (model) {
	return _in("0x923CB32A3B874FCB", _ch(model));
};

window.RequestCutscene = function (cutsceneName, p1) {
	return _in("0x7A86743F475D9E09", _ts(cutsceneName), p1);
};

window.RequestCutsceneEx = function (cutsceneName, p1, p2) {
	return _in("0xC23DE0E91C30B58C", _ts(cutsceneName), p1, p2);
};

window.RequestHudScaleform = function (hudComponent) {
	return _in("0x9304881D6F6537EA", hudComponent);
};

window.RequestIpl = function (iplName) {
	return _in("0x41B4893843BBDB74", _ts(iplName));
};

window.RequestMenuPedModel = function (model) {
	return _in("0xA0261AEF7ACFC51E", _ch(model));
};

window.RequestMissionAudioBank = function (p0, p1) {
	return _in("0x7345BDD95E62E0F2", _ts(p0), p1, _r);
};

window.RequestModel = function (model) {
	return _in("0x963D27A58DF860AC", _ch(model));
};

window.RequestNamedPtfxAsset = function (fxName) {
	return _in("0xB80D8756B4668AB6", _ts(fxName));
};

window.RequestPtfxAsset = function () {
	return _in("0x944955FB2A3935C8", _r, _ri);
};

window.RequestScaleformMovie = function (scaleformName) {
	return _in("0x11FE353CF9733E6F", _ts(scaleformName), _r, _ri);
};

window.RequestScaleformMovieInstance = function (scaleformName) {
	return _in("0xC514489CFB8AF806", _ts(scaleformName), _r, _ri);
};

window.RequestScaleformMovieInteractive = function (scaleformName) {
	return _in("0xBD06C611BB9048C2", _ts(scaleformName), _r, _ri);
};

window.RequestScript = function (scriptName) {
	return _in("0x6EB5F71AA68F2E8E", _ts(scriptName));
};

window.RequestScriptAudioBank = function (p0, p1) {
	return _in("0x2F844A8B08D76685", _ts(p0), p1, _r);
};

window.RequestScriptWithNameHash = function (scriptHash) {
	return _in("0xD62A67D26D9653E6", _ch(scriptHash));
};

window.RequestStealthModeAsset = function (asset) {
	return _in("0x2A0A62FCDEE16D4F", _ts(asset));
};

window.RequestStreamedTextureDict = function (textureDict, p1) {
	return _in("0xDFA2EF8E04127DD5", _ts(textureDict), p1);
};

window.RequestVehicleAsset = function (vehicleHash, vehicleAsset) {
	return _in("0x81A15811460FAB3A", _ch(vehicleHash), vehicleAsset);
};

window.RequestVehicleHighDetailModel = function (vehicle) {
	return _in("0xA6E9FDCB2C76785E", vehicle);
};

window.RequestVehicleRecording = function (p0, p1) {
	return _in("0xAF514CABE74CBF15", p0, _ii(p1) /* may be optional */);
};

window.RequestWaypointRecording = function (name) {
	return _in("0x9EEFB62EB27B5792", _ts(name));
};

window.RequestWeaponAsset = function (weaponHash, p1, p2) {
	return _in("0x5443438F033E29C3", _ch(weaponHash), p1, p2);
};

window.RequestWeaponHighDetailModel = function (weaponObject) {
	return _in("0x48164DBB970AC3F0", weaponObject);
};

window.ReserveNetworkMissionObjects = function (p0) {
	return _in("0x4E5C93BD0C32FBF8", p0);
};

window.ReserveNetworkMissionPeds = function (p0) {
	return _in("0xB60FEBA45333D36F", p0);
};

window.ReserveNetworkMissionVehicles = function (p0) {
	return _in("0x76B02E21ED27A469", p0);
};

window.ResetAiMeleeWeaponDamageModifier = function () {
	return _in("0x46E56A7CD1D63C3F");
};

window.ResetAiWeaponDamageModifier = function () {
	return _in("0xEA16670E7BA4743C");
};

window.ResetDispatchIdealSpawnDistance = function () {
	return _in("0x77A84429DD9F0A15");
};

window.ResetDispatchSpawnBlockingAreas = function () {
	return _in("0xAC7BFD5C1D83EA75");
};

window.ResetEditorValues = function () {
	return _in("0x3353D13F09307691");
};

window.ResetEntityAlpha = function (entity) {
	return _in("0x9B1E824FFBB7027A", entity, _r, _ri);
};

window.ResetExclusiveScenarioGroup = function () {
	return _in("0x4202BBCB8684563D");
};

window.ResetGroupFormationDefaultSpacing = function (groupHandle) {
	return _in("0x63DAB4CCB3273205", groupHandle);
};

window.ResetHudComponentValues = function (id) {
	return _in("0x450930E616475D0D", id);
};

window.ResetLocalplayerState = function () {
	return _in("0xC0AA53F866B3134D");
};

window.ResetParticleFxAssetOldToNew = function (name) {
	return _in("0x89C8553DD3274AAE", _ts(name));
};

window.ResetPedAudioFlags = function (p0) {
	return _in("0xF54BB7B61036F335", p0);
};

window.ResetPedInVehicleContext = function (ped) {
	return _in("0x22EF8FF8778030EB", ped);
};

window.ResetPedLastVehicle = function (ped) {
	return _in("0xBB8DE8CF6A8DD8BB", ped);
};

window.ResetPedMovementClipset = function (ped, p1) {
	return _in("0xAA74EC0CB0AAEA2C", ped, _fv(p1));
};

window.ResetPedRagdollBlockingFlags = function (ped, flags) {
	return _in("0xD86D101FCFD00A4B", ped, flags);
};

window.ResetPedRagdollTimer = function (ped) {
	return _in("0x9FA4664CF62E47E8", ped);
};

window.ResetPedStrafeClipset = function (ped) {
	return _in("0x20510814175EA477", ped);
};

window.ResetPedVisibleDamage = function (ped) {
	return _in("0x3AC1F7B898F30C05", ped, _r, _ri);
};

window.ResetPedWeaponMovementClipset = function (ped) {
	return _in("0x97B0DB5B4AA74E77", ped);
};

window.ResetPlayerArrestState = function (player) {
	return _in("0x2D03E13C460760D6", player);
};

window.ResetPlayerInputGait = function (player) {
	return _in("0x19531C47A2ABD691", player);
};

window.ResetPlayerStamina = function (player) {
	return _in("0xA6F312FCCE9C1DFE", player);
};

window.ResetReticuleValues = function () {
	return _in("0x12782CE0A636E9F0");
};

window.ResetScenarioGroupsEnabled = function () {
	return _in("0xDD902D0349AFAD3A");
};

window.ResetScenarioTypesEnabled = function () {
	return _in("0x0D40EE2A7F2B2D6D");
};

window.ResetTrevorRage = function () {
	return _in("0xE78503B10C4314E0");
};

window.ResetVehicleStuckTimer = function (vehicle, nullAttributes) {
	return _in("0xD7591B0065AFAA7A", vehicle, nullAttributes);
};

window.ResetVehicleWheels = function (vehicle, toggle) {
	return _in("0x21D2E5662C1F6FED", vehicle, toggle);
};

window.ResetWantedLevelDifficulty = function (player) {
	return _in("0xB9D0DD990DC141DD", player);
};

window.ResetWavesIntensity = function () {
	return _in("0x5E5E99285AE812DB");
};

window.RespondingAsTemp = function (p0) {
	return _in("0xBD12C5EEE184C337", _fv(p0));
};

window.RestartFrontendMenu = function (menuHash, p1) {
	return _in("0x10706DC6AD2D49C0", _ch(menuHash), p1);
};

window.RestartScriptedConversation = function () {
	return _in("0x9AEB285D1818C9AC");
};

window.RestorePlayerStamina = function (player, p1) {
	return _in("0xA352C1B864CAFD33", player, _fv(p1));
};

window.ResurrectPed = function (ped) {
	return _in("0x71BC8E838B9C6035", ped);
};

window.ReturnTwo = function (p0) {
	return _in("0x40AFB081F8ADD4EE", p0, _r, _ri);
};

window.ReviveInjuredPed = function (ped) {
	return _in("0x8D8ACD8388CD99CE", ped);
};

window.RollDownWindow = function (vehicle, windowIndex) {
	return _in("0x7AD9E6CE657D69E3", vehicle, windowIndex, _r, _ri);
};

window.RollDownWindows = function (vehicle) {
	return _in("0x85796B0549DDE156", vehicle);
};

window.RollUpWindow = function (vehicle, windowIndex) {
	return _in("0x602E548F46E24D59", vehicle, windowIndex, _r, _ri);
};

window.RopeAreTexturesLoaded = function () {
	return _in("0xF2D0E6A75CC05597", _r);
};

window.RopeConvertToSimple = function (rope) {
	return _in("0x5389D48EFA2F079A", rope);
};

window.RopeDrawShadowEnabled = function (toggle) {
	return _in("0xF159A63806BB5BA8", _i, toggle);
};

window.RopeForceLength = function (rope, length) {
	return _in("0xD009F759A723DB1B", rope, _fv(length), _r, _ri);
};

window.RopeLoadTextures = function () {
	return _in("0x9B9039DBF2D258C1", _r, _ri);
};

window.RopeResetLength = function (rope, length) {
	return _in("0xC16DE94D9BEA14A0", rope, length, _r, _ri);
};

window.RopeSetUpdatePinverts = function (rope) {
	return _in("0xC8D667EE52114ABA", rope);
};

window.RopeUnloadTextures = function () {
	return _in("0x6CE36C35C1AC8163", _r, _ri);
};

window.Round = function (value) {
	return _in("0xF2DB717A73826179", _fv(value), _r, _ri);
};

window.ScEmailMessageClearRecipList = function () {
	return _in("0x55DF6DB45179236E");
};

window.ScEmailMessagePushGamerToRecipList = function (player) {
	return _in("0x2330C12A7A605D16", _ii(player) /* may be optional */);
};

window.ScGetCheckStringStatus = function (taskHandle) {
	return _in("0x82E4A58BABC15AE7", taskHandle, _r, _ri);
};

window.ScGetNickname = function () {
	return _in("0x198D161F458ECC7F", _r, _s);
};

window.ScHasCheckStringTaskCompleted = function (taskHandle) {
	return _in("0x1753344C770358AE", taskHandle, _r);
};

window.ScInboxGetEmails = function (offset, limit) {
	return _in("0x040ADDCBAFA1018A", offset, limit);
};

window.ScInboxMessageGetDataBool = function (p0, p1) {
	return _in("0xFFE5C16F402D851D", p0, _ts(p1), _r);
};

window.ScInboxMessageGetDataInt = function (p0, context, out) {
	return _in("0xA00EFE4082C4056E", p0, _ts(context), _ii(out) /* may be optional */, _r);
};

window.ScInboxMessageGetDataString = function (p0, context, out) {
	return _in("0x7572EF42FC6A9B6D", p0, _ts(context), _ts(out), _r);
};

window.ScInboxMessageGetString = function (p0) {
	return _in("0xF3E31D16CBDCB304", p0, _r, _s);
};

window.ScInboxMessageGetUgcdata = function (p0, p1) {
	return _in("0x69D82604A1A5A254", p0, _ii(p1) /* may be optional */, _r);
};

window.ScInboxMessageInit = function (p0) {
	return _in("0xBB8EA16ECBC976C4", p0, _r, _ri);
};

window.ScInboxMessagePop = function (p0) {
	return _in("0x2C015348CF19CA1D", p0, _r);
};

window.ScInboxMessagePush = function (p0) {
	return _in("0x9A2C8064B6C1E41A", p0, _r);
};

window.ScStartCheckStringTask = function (string, taskHandle) {
	return _in("0x75632C5ECD7ED843", _ts(string), _ii(taskHandle) /* may be optional */, _r);
};

window.ScreenDrawPositionEnd = function () {
	return _in("0xE3A3DB414A373DAB");
};

window.ScreenDrawPositionRatio = function (x, y, p2, p3) {
	return _in("0xF5A2C681787E579D", _fv(x), _fv(y), _fv(p2), _fv(p3));
};

window.ScriptIsMovingMobilePhoneOffscreen = function (toggle) {
	return _in("0xF511F759238A5122", toggle);
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

window.SetAbilityBarValue = function (p0, p1) {
	return _in("0x9969599CCFF5D85E", _fv(p0), _fv(p1));
};

window.SetActivateObjectPhysicsAsSoonAsItIsUnfrozen = function (object, toggle) {
	return _in("0x406137F8EF90EAF5", object, toggle);
};

window.SetAggressiveHorns = function (toggle) {
	return _in("0x395BF71085D1B1D9", toggle);
};

window.SetAiBlipMaxDistance = function (ped, p1) {
	return _in("0x97C65887D4B37FA9", ped, _fv(p1));
};

window.SetAiMeleeWeaponDamageModifier = function (modifier) {
	return _in("0x66460DEDDD417254", _fv(modifier));
};

window.SetAiWeaponDamageModifier = function (value) {
	return _in("0x1B1E2A40A65B8521", _fv(value));
};

window.SetAirDragMultiplierForPlayersVehicle = function (player, multiplier) {
	return _in("0xCA7DC8329F0A1E9E", player, _fv(multiplier));
};

window.SetAllLowPriorityVehicleGeneratorsActive = function (active) {
	return _in("0x608207E7A8FB787C", active);
};

window.SetAllRandomPedsFlee = function (player, toggle) {
	return _in("0x056E0FE8534C2949", player, toggle);
};

window.SetAllRandomPedsFleeThisFrame = function (player) {
	return _in("0x471D2FF42A94B4F2", player);
};

window.SetAllVehicleGeneratorsActive = function () {
	return _in("0x34AD89078831A4BC");
};

window.SetAllVehicleGeneratorsActiveInArea = function (x1, y1, z1, x2, y2, z2, p6, p7) {
	return _in("0xC12321827687FE4D", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p6, p7);
};

window.SetAllVehiclesSpawn = function (p0, p1, p2, p3) {
	return _in("0xE023E8AC4EF7C117", p0, p1, p2, p3, _r, _ri);
};

window.SetAmbientVoiceName = function (ped, name) {
	return _in("0x6C8065A3B780185B", ped, _ts(name));
};

window.SetAmbientZoneListState = function (p1, p2) {
	return _in("0x9748FA4DE50CCE3E", _i, p1, p2);
};

window.SetAmbientZoneListStatePersistent = function (ambientZone, p1, p2) {
	return _in("0xF3638DAE8C4045E1", _ts(ambientZone), p1, p2);
};

window.SetAmbientZoneState = function (p1, p2) {
	return _in("0xBDA07E5950085E46", _i, p1, p2);
};

window.SetAmbientZoneStatePersistent = function (ambientZone, p1, p2) {
	return _in("0x1D6650420CEC9D3B", _ts(ambientZone), p1, p2);
};

window.SetAmmoInClip = function (ped, weaponHash, ammo) {
	return _in("0xDCD2A934D65CB497", ped, _ch(weaponHash), ammo, _r);
};

window.SetAnimLooped = function (p0, p1, p2, p3) {
	return _in("0x70033C3CC29A1FF4", p0, p1, p2, p3);
};

window.SetAnimRate = function (p0, p1, p2, p3) {
	return _in("0x032D49C5E359C847", p0, _fv(p1), p2, p3);
};

window.SetAnimWeight = function (p0, p1, p2, p3, p4) {
	return _in("0x207F1A47C0342F48", p0, _fv(p1), p2, p3, p4);
};

window.SetAnimalMood = function (animal, mood) {
	return _in("0xCC97B29285B1DC3B", animal, mood);
};

window.SetAudioFlag = function (flagName, toggle) {
	return _in("0xB9EFD5C25018725A", _ts(flagName), toggle);
};

window.SetAudioSceneVariable = function (scene, variable, value) {
	return _in("0xEF21A9EF089A2668", _ts(scene), _ts(variable), _fv(value));
};

window.SetAudioVehiclePriority = function (vehicle, p1) {
	return _in("0xE5564483E407F914", vehicle, p1);
};

window.SetAutoGiveParachuteWhenEnterPlane = function (player, toggle) {
	return _in("0x9F343285A00B4BB6", player, toggle);
};

window.SetBalanceAddMachine = function () {
	return _in("0x815E5E3073DA1D67", _i, _i, _r);
};

window.SetBalanceAddMachines = function (p1) {
	return _in("0xB8322EEB38BE7C26", _i, p1, _i, _r);
};

window.SetBikeLeanAngle = function (vehicle, x, y) {
	return _in("0x9CFA4896C3A53CBB", vehicle, _fv(x), _fv(y));
};

window.SetBit = function (offset) {
	return _in("0x933D6A9EEC1BACD0", _i, offset);
};

window.SetBitsInRange = function (rangeStart, rangeEnd, p3) {
	return _in("0x8EF07E15701D61ED", _i, rangeStart, rangeEnd, p3);
};

window.SetBlackout = function (enable) {
	return _in("0x1268615ACE24D504", enable);
};

window.SetBlipAlpha = function (blip, alpha) {
	return _in("0x45FF974EEE1C8734", blip, alpha);
};

window.SetBlipAsFriendly = function (blip, toggle) {
	return _in("0x6F6F290102C02AB4", blip, toggle);
};

window.SetBlipAsMissionCreatorBlip = function (blip, toggle) {
	return _in("0x24AC0137444F9FD5", blip, toggle);
};

window.SetBlipAsShortRange = function (blip, toggle) {
	return _in("0xBE8BE4FE60E27B72", blip, toggle);
};

window.SetBlipBright = function (blip, toggle) {
	return _in("0xB203913733F27884", blip, toggle);
};

window.SetBlipCategory = function (blip, index) {
	return _in("0x234CDD44D996FD9A", blip, index);
};

window.SetBlipChecked = function (blip, toggle) {
	return _in("0x74513EA3E505181E", blip, toggle);
};

window.SetBlipColour = function (blip, color) {
	return _in("0x03D7FB09E75D6B7E", blip, color);
};

window.SetBlipCoords = function (blip, posX, posY, posZ) {
	return _in("0xAE2AF67E9D9AF65D", blip, _fv(posX), _fv(posY), _fv(posZ));
};

window.SetBlipDisplay = function (blip, displayId) {
	return _in("0x9029B2F3DA924928", blip, displayId);
};

window.SetBlipFade = function (blip, opacity, duration) {
	return _in("0x2AEE8F8390D2298C", blip, opacity, duration);
};

window.SetBlipFlashInterval = function (blip, p1) {
	return _in("0xAA51DB313C010A7E", blip, p1);
};

window.SetBlipFlashTimer = function (blip, duration) {
	return _in("0xD3CD6FD297AE87CC", blip, duration);
};

window.SetBlipFlashes = function (blip, toggle) {
	return _in("0xB14552383D39CE3E", blip, toggle);
};

window.SetBlipFlashesAlternate = function (blip, toggle) {
	return _in("0x2E8D9498C56DD0D1", blip, toggle);
};

window.SetBlipFriend = function (blip, toggle) {
	return _in("0x23C3EB807312F01A", blip, toggle);
};

window.SetBlipFriendly = function (blip, toggle) {
	return _in("0xB81656BC81FE24D1", blip, toggle);
};

window.SetBlipHighDetail = function (blip, toggle) {
	return _in("0xE2590BC29220CEBB", blip, toggle);
};

window.SetBlipNameFromTextFile = function (blip, gxtEntry) {
	return _in("0xEAA0FFE120D92784", blip, _ts(gxtEntry));
};

window.SetBlipNameToPlayerName = function (blip, player) {
	return _in("0x127DE7B20C60A6A3", blip, player);
};

window.SetBlipPriority = function (blip, priority) {
	return _in("0xAE9FC9EF6A9FAC79", blip, priority);
};

window.SetBlipRotation = function (blip, rotation) {
	return _in("0xF87683CDF73C3F6E", blip, rotation);
};

window.SetBlipRoute = function (blip, enabled) {
	return _in("0x4F7D8A9BFB0B43E9", blip, enabled);
};

window.SetBlipRouteColour = function (blip, colour) {
	return _in("0x837155CD2F63DA09", blip, colour);
};

window.SetBlipScale = function (blip, scale) {
	return _in("0xD38744167B2FA257", blip, _fv(scale));
};

window.SetBlipSecondaryColour = function (blip, r, g, b) {
	return _in("0x14892474891E09EB", blip, _fv(r), _fv(g), _fv(b));
};

window.SetBlipShowCone = function (blip, toggle) {
	return _in("0x13127EC3665E8EE1", blip, toggle);
};

window.SetBlipShrink = function (blip, toggle) {
	return _in("0x2B6D467DAB714E8D", blip, toggle);
};

window.SetBlipSprite = function (blip, spriteId) {
	return _in("0xDF735600A4696DAF", blip, spriteId);
};

window.SetBlockingOfNonTemporaryEvents = function (ped, toggle) {
	return _in("0x9F8AA94D6D97DBF4", ped, toggle);
};

window.SetBoatAnchor = function (vehicle, toggle) {
	return _in("0x75DBEC174AEEAD10", vehicle, toggle);
};

window.SetCamActive = function (cam, active) {
	return _in("0x026FB97D0A425F84", cam, active);
};

window.SetCamActiveWithInterp = function (camTo, camFrom, duration, easeLocation, easeRotation) {
	return _in("0x9FBDA379383A52A4", camTo, camFrom, duration, easeLocation, easeRotation);
};

window.SetCamAffectsAiming = function (cam, toggle) {
	return _in("0x8C1DC7770C51DC8D", cam, toggle);
};

window.SetCamAnimCurrentPhase = function (cam, phase) {
	return _in("0x4145A4C44FF3B5A6", cam, _fv(phase));
};

window.SetCamCoord = function (cam, posX, posY, posZ) {
	return _in("0x4D41783FB745E42E", cam, _fv(posX), _fv(posY), _fv(posZ));
};

window.SetCamDebugName = function (camera, name) {
	return _in("0x1B93E0107865DD40", camera, _ts(name));
};

window.SetCamDofFnumberOfLens = function (camera, p1) {
	return _in("0x7DD234D6F3914C5B", camera, _fv(p1));
};

window.SetCamDofFocusDistanceBias = function (camera, p1) {
	return _in("0xC669EEA5D031B7DE", camera, _fv(p1));
};

window.SetCamDofMaxNearInFocusDistance = function (camera, p1) {
	return _in("0xC3654A441402562D", camera, _fv(p1));
};

window.SetCamDofMaxNearInFocusDistanceBlendLevel = function (camera, p1) {
	return _in("0x2C654B4943BDDF7C", camera, _fv(p1));
};

window.SetCamDofPlanes = function (cam, p1, p2, p3, p4) {
	return _in("0x3CF48F6F96E749DC", cam, _fv(p1), _fv(p2), _fv(p3), _fv(p4));
};

window.SetCamDofStrength = function (cam, dofStrength) {
	return _in("0x5EE29B4D7D5DF897", cam, _fv(dofStrength));
};

window.SetCamEffect = function (p0) {
	return _in("0x80C8B1846639BB19", p0);
};

window.SetCamFarClip = function (cam, farClip) {
	return _in("0xAE306F2A904BF86E", cam, _fv(farClip));
};

window.SetCamFarDof = function (cam, farDOF) {
	return _in("0xEDD91296CD01AEE0", cam, _fv(farDOF));
};

window.SetCamFov = function (cam, fieldOfView) {
	return _in("0xB13C14F66A00D047", cam, _fv(fieldOfView));
};

window.SetCamInheritRollVehicle = function (cam, p1) {
	return _in("0x45F1DE9C34B93AE6", cam, p1);
};

window.SetCamMotionBlurStrength = function (cam, strength) {
	return _in("0x6F0F77FBA9A8F2E6", cam, _fv(strength));
};

window.SetCamNearClip = function (cam, nearClip) {
	return _in("0xC7848EFCCC545182", cam, _fv(nearClip));
};

window.SetCamNearDof = function (cam, nearDOF) {
	return _in("0x3FA4BF0A7AB7DE2C", cam, _fv(nearDOF));
};

window.SetCamParams = function (cam, posX, posY, posZ, rotX, rotY, rotZ, fieldOfView, p8, p9, p10, p11) {
	return _in("0xBFD8727AEA3CCEBA", cam, _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(fieldOfView), p8, p9, p10, p11);
};

window.SetCamRot = function (cam, rotX, rotY, rotZ, rotationOrder) {
	return _in("0x85973643155D0B07", cam, _fv(rotX), _fv(rotY), _fv(rotZ), rotationOrder);
};

window.SetCamShakeAmplitude = function (cam, amplitude) {
	return _in("0xD93DB43B82BC0D00", cam, _fv(amplitude));
};

window.SetCamSplineDuration = function (cam, timeDuration) {
	return _in("0x1381539FEE034CDA", cam, timeDuration);
};

window.SetCamSplinePhase = function (cam, p1) {
	return _in("0x242B5874F0A4E052", cam, _fv(p1));
};

window.SetCamUseShallowDofMode = function (cam, toggle) {
	return _in("0x16A96863A17552BB", cam, toggle);
};

window.SetCameraRange = function (cam, range) {
	return _in("0xF9D02130ECDD1D77", cam, _fv(range));
};

window.SetCanAttackFriendly = function (ped, toggle, p2) {
	return _in("0xB3B1CB349FF9C75D", ped, toggle, p2);
};

window.SetCanResprayVehicle = function (vehicle, state) {
	return _in("0x52BBA29D5EC69356", vehicle, state);
};

window.SetCargobobHookPosition = function (p0, p1, p2, p3) {
	return _in("0x877C1EAEAC531023", p0, _fv(p1), _fv(p2), p3);
};

window.SetCargobobPickupMagnetActive = function (cargobob, isActive) {
	return _in("0x9A665550F8DA349B", cargobob, isActive);
};

window.SetCargobobPickupMagnetStrength = function (cargobob, strength) {
	return _in("0xBCBFCD9D1DAC19E2", cargobob, _fv(strength));
};

window.SetCgAtBoundcenter = function (rope) {
	return _in("0xBE520D9761FF811F", rope);
};

window.SetCgoffset = function (rope, x, y, z) {
	return _in("0xD8FA3908D7B86904", rope, _fv(x), _fv(y), _fv(z));
};

window.SetCheckpointCylinderHeight = function (checkpoint, nearHeight, farHeight, radius) {
	return _in("0x2707AAE9D9297D89", checkpoint, _fv(nearHeight), _fv(farHeight), _fv(radius));
};

window.SetCheckpointIconRgba = function (checkpoint, red, green, blue, alpha) {
	return _in("0xB9EA40907C680580", checkpoint, red, green, blue, alpha);
};

window.SetCheckpointRgba = function (checkpoint, red, green, blue, alpha) {
	return _in("0x7167371E8AD747F7", checkpoint, red, green, blue, alpha);
};

window.SetCinematicButtonActive = function (p0) {
	return _in("0x51669F7D1FB53D9F", p0);
};

window.SetCinematicCamShakeAmplitude = function (p0) {
	return _in("0xC724C701C30B2FE7", _fv(p0));
};

window.SetCinematicModeActive = function (p0) {
	return _in("0xDCF0754AC3D6FD4E", p0);
};

window.SetClockDate = function (day, month, year) {
	return _in("0xB096419DF0D06CE7", day, month, year);
};

window.SetClockTime = function (hour, minute, second) {
	return _in("0x47C3B5848C3E45D8", hour, minute, second);
};

window.SetCloudHatOpacity = function (opacity) {
	return _in("0xF36199225D6D8C86", _fv(opacity));
};

window.SetCloudHatTransition = function (type, transitionTime) {
	return _in("0xFC4842A34657BFCB", _ts(type), _fv(transitionTime));
};

window.SetCombatFloat = function (ped, combatType, p2) {
	return _in("0xFF41B4B141ED981C", ped, combatType, _fv(p2));
};

window.SetControlNormal = function (inputGroup, control, amount) {
	return _in("0xE8A25867FBA3B05E", inputGroup, control, _fv(amount), _r);
};

window.SetConvertibleRoof = function (vehicle, p1) {
	return _in("0xF39C4F538B5124C2", vehicle, p1);
};

window.SetCreateRandomCops = function (toggle) {
	return _in("0x102E68B2024D536D", toggle);
};

window.SetCreateRandomCopsNotOnScenarios = function (toggle) {
	return _in("0x8A4986851C4EF6E7", toggle);
};

window.SetCreateRandomCopsOnScenarios = function (toggle) {
	return _in("0x444CB7D7DBE6973D", toggle);
};

window.SetCreditsActive = function (toggle) {
	return _in("0xB938B7E6D3C0620C", toggle);
};

window.SetCurrentPedVehicleWeapon = function (ped, weaponHash) {
	return _in("0x75C55983C2C39DAA", ped, _ch(weaponHash), _r);
};

window.SetCurrentPedWeapon = function (ped, weaponHash, equipNow) {
	return _in("0xADF692B254977C0C", ped, _ch(weaponHash), equipNow);
};

window.SetCursorLocation = function (x, y) {
	return _in("0xFC695459D4D0E219", _fv(x), _fv(y), _r);
};

window.SetCursorSprite = function (spriteId) {
	return _in("0x8DB8CFFD58B62552", spriteId);
};

window.SetCustomRespawnPosition = function (x, y, z, heading) {
	return _in("0x706B5EDCAA7FA663", _fv(x), _fv(y), _fv(z), _fv(heading));
};

window.SetCutsceneAudioOverride = function (p0) {
	return _in("0x3B4BF5F0859204D9", _ts(p0));
};

window.SetCutsceneFadeValues = function (p0, p1, p2, p3) {
	return _in("0x8093F23ABACCC7D4", p0, p1, p2, p3);
};

window.SetCutsceneOrigin = function (x, y, z, p3, p4) {
	return _in("0xB812B3FD1C01CF27", _fv(x), _fv(y), _fv(z), _fv(p3), p4);
};

window.SetCutscenePedComponentVariation = function (cutsceneEntName, p1, p2, p3, modelHash) {
	return _in("0xBA01E7B6DEEFBBC9", _ts(cutsceneEntName), p1, p2, p3, _ch(modelHash));
};

window.SetCutscenePedPropVariation = function (cutsceneEntName, p1, p2, p3, modelHash) {
	return _in("0x0546524ADE2E9723", _ts(cutsceneEntName), p1, p2, p3, _ch(modelHash));
};

window.SetCutsceneTriggerArea = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x9896CE4721BE84BA", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5));
};

window.SetDamping = function (rope, vertex, value) {
	return _in("0xEEA3B200A6FEB65B", rope, vertex, _fv(value));
};

window.SetDebugLinesAndSpheresDrawingActive = function (enabled) {
	return _in("0x175B6BFC15CDD0C5", enabled);
};

window.SetDecisionMaker = function (ped, name) {
	return _in("0xB604A2942ADED0EE", ped, _ch(name));
};

window.SetDesObjectState = function (handle, state) {
	return _in("0x5C29F698D404C5E1", handle, state);
};

window.SetDirectorMode = function (toggle) {
	return _in("0x808519373FD336A3", toggle);
};

window.SetDisableAmbientMeleeMove = function (player, toggle) {
	return _in("0x2E8AABFA40A84F8C", player, toggle);
};

window.SetDisableBreaking = function (rope, enabled) {
	return _in("0x5CEC1A84620E7D5B", rope, enabled, _r, _ri);
};

window.SetDisableFragDamage = function (object, toggle) {
	return _in("0x01BA3AED21C16CFB", object, toggle);
};

window.SetDisableVehiclePetrolTankDamage = function (vehicle, toggle) {
	return _in("0x37C8252A7C92D017", vehicle, toggle);
};

window.SetDisableVehiclePetrolTankFires = function (vehicle, toggle) {
	return _in("0x465BF26AB9684352", vehicle, toggle);
};

window.SetDispatchCopsForPlayer = function (player, toggle) {
	return _in("0xDB172424876553F4", player, toggle);
};

window.SetDispatchIdealSpawnDistance = function (p0) {
	return _in("0x6FE601A64180D423", _fv(p0));
};

window.SetDispatchTimeBetweenSpawnAttempts = function (p0, p1) {
	return _in("0x44F7CBC1BEB3327D", p0, _fv(p1));
};

window.SetDispatchTimeBetweenSpawnAttemptsMultiplier = function (p0, p1) {
	return _in("0x48838ED9937A15D1", p0, _fv(p1));
};

window.SetDitchPoliceModels = function (toggle) {
	return _in("0x42CBE54462D92634", toggle);
};

window.SetDoorAccelerationLimit = function (doorHash, limit, p2, p3) {
	return _in("0x6BAB9442830C7F53", _ch(doorHash), limit, p2, p3);
};

window.SetDoorAjarAngle = function (doorHash, ajar, p2, p3) {
	return _in("0xB6E6FBA95C7324AC", _ch(doorHash), _fv(ajar), p2, p3);
};

window.SetDrawOrigin = function (x, y, z, p3) {
	return _in("0xAA0008F3BBB8F416", _fv(x), _fv(y), _fv(z), p3);
};

window.SetDriveTaskCruiseSpeed = function (driver, cruiseSpeed) {
	return _in("0x5C9B84BD7D31D908", driver, _fv(cruiseSpeed));
};

window.SetDriveTaskDrivingStyle = function (ped, drivingStyle) {
	return _in("0xDACE1BE37D88AF67", ped, drivingStyle);
};

window.SetDriveTaskMaxCruiseSpeed = function (p0, p1) {
	return _in("0x404A5AA9B9F0B746", p0, _fv(p1));
};

window.SetDrivebyTaskTarget = function (shootingPed, targetPed, targetVehicle, x, y, z) {
	return _in("0xE5B302114D8162EE", shootingPed, targetPed, targetVehicle, _fv(x), _fv(y), _fv(z));
};

window.SetDriverAbility = function (driver, ability) {
	return _in("0xB195FFA8042FC5C3", driver, _fv(ability));
};

window.SetDriverAggressiveness = function (driver, aggressiveness) {
	return _in("0xA731F608CA104E3C", driver, _fv(aggressiveness));
};

window.SetEmitterRadioStation = function (emitterName, radioStation) {
	return _in("0xACF57305B12AF907", _ts(emitterName), _ts(radioStation));
};

window.SetEnableBoundAnkles = function (ped, toggle) {
	return _in("0xC52E0F855C58FC2E", ped, toggle);
};

window.SetEnableHandcuffs = function (ped, toggle) {
	return _in("0xDF1AF8B5D56542FA", ped, toggle);
};

window.SetEnablePedEnveffScale = function (ped, toggle) {
	return _in("0xD2C5AA0C0E8D0F1E", ped, toggle);
};

window.SetEnableScuba = function (ped, toggle) {
	return _in("0xF99F62004024D506", ped, toggle);
};

window.SetEntityAlpha = function (entity, alphaLevel, skin) {
	return _in("0x44A0870B7E92D7C0", entity, alphaLevel, skin);
};

window.SetEntityAlwaysPrerender = function (entity, toggle) {
	return _in("0xACAD101E1FB66689", entity, toggle);
};

window.SetEntityAnimCurrentTime = function (entity, animDictionary, animName, time) {
	return _in("0x4487C259F0F70977", entity, _ts(animDictionary), _ts(animName), _fv(time));
};

window.SetEntityAnimSpeed = function (entity, animDictionary, animName, speedMultiplier) {
	return _in("0x28D1A16553C51776", entity, _ts(animDictionary), _ts(animName), _fv(speedMultiplier));
};

window.SetEntityAsMissionEntity = function (entity, p1, p2) {
	return _in("0xAD738C3085FE7E11", entity, p1, p2);
};

window.SetEntityAsNoLongerNeeded = function (entity) {
	return _in("0xB736A491E64A32CF", _ii(entity) /* may be optional */);
};

window.SetEntityCanBeDamaged = function (entity, toggle) {
	return _in("0x1760FFA8AB074D66", entity, toggle);
};

window.SetEntityCanBeDamagedByRelationshipGroup = function (entity, bCanBeDamaged, relGroup) {
	return _in("0xE22D8FDE858B8119", entity, bCanBeDamaged, relGroup);
};

window.SetEntityCanBeTargetedWithoutLos = function (entity, toggle) {
	return _in("0xD3997889736FD899", entity, toggle);
};

window.SetEntityCollision = function (entity, toggle, keepPhysics) {
	return _in("0x1A9205C1B9EE827F", entity, toggle, keepPhysics);
};

window.SetEntityCoords = function (entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea) {
	return _in("0x06843DA7060A026B", entity, _fv(xPos), _fv(yPos), _fv(zPos), xAxis, yAxis, zAxis, clearArea);
};

window.SetEntityCoordsNoOffset = function (entity, xPos, yPos, zPos, xAxis, yAxis, zAxis) {
	return _in("0x239A3351AC1DA385", entity, _fv(xPos), _fv(yPos), _fv(zPos), xAxis, yAxis, zAxis);
};

window.SetEntityCoords_2 = function (entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea) {
	return _in("0x621873ECE1178967", entity, _fv(xPos), _fv(yPos), _fv(zPos), xAxis, yAxis, zAxis, clearArea);
};

window.SetEntityDynamic = function (entity, toggle) {
	return _in("0x1718DE8E3F2823CA", entity, toggle);
};

window.SetEntityHasGravity = function (entity, toggle) {
	return _in("0x4A4722448F18EEF5", entity, toggle);
};

window.SetEntityHeading = function (entity, heading) {
	return _in("0x8E2530AA8ADA980E", entity, _fv(heading));
};

window.SetEntityHealth = function (entity, health) {
	return _in("0x6B76DC1F3AE6E6A3", entity, health);
};

window.SetEntityIconColor = function (entity, red, green, blue, alpha) {
	return _in("0x1D5F595CCAE2E238", entity, red, green, blue, alpha);
};

window.SetEntityIconVisibility = function (entity, toggle) {
	return _in("0xE0E8BEECCA96BA31", entity, toggle);
};

window.SetEntityInvincible = function (entity, toggle) {
	return _in("0x3882114BDE571AD4", entity, toggle);
};

window.SetEntityIsTargetPriority = function (entity, p1, p2) {
	return _in("0xEA02E132F5C68722", entity, p1, _fv(p2));
};

window.SetEntityLights = function (entity, toggle) {
	return _in("0x7CFBA6A80BDF3874", entity, toggle);
};

window.SetEntityLoadCollisionFlag = function (entity, toggle) {
	return _in("0x0DC7CABAB1E9B67E", entity, toggle);
};

window.SetEntityLocallyInvisible = function (entity) {
	return _in("0xE135A9FF3F5D05D8", entity);
};

window.SetEntityLocallyVisible = function (entity) {
	return _in("0x241E289B5C059EDC", entity);
};

window.SetEntityLodDist = function (entity, value) {
	return _in("0x5927F96A78577363", entity, value);
};

window.SetEntityMaxHealth = function (entity, value) {
	return _in("0x166E7CF68597D8B5", entity, value);
};

window.SetEntityMaxSpeed = function (entity, speed) {
	return _in("0x0E46A3FCBDE2A1B1", entity, _fv(speed));
};

window.SetEntityMotionBlur = function (entity, toggle) {
	return _in("0x295D82A8559F9150", entity, toggle);
};

window.SetEntityNoCollisionEntity = function (entity1, entity2, unknown) {
	return _in("0xA53ED5520C07654A", entity1, entity2, unknown);
};

window.SetEntityOnlyDamagedByPlayer = function (entity, toggle) {
	return _in("0x79F020FF9EDC0748", entity, toggle);
};

window.SetEntityOnlyDamagedByRelationshipGroup = function (entity, p1, p2) {
	return _in("0x7022BD828FA0B082", entity, p1, p2);
};

window.SetEntityProofs = function (entity, bulletProof, fireProof, explosionProof, collisionProof, meleeProof, p6, p7, drownProof) {
	return _in("0xFAEE099C6F890BB8", entity, bulletProof, fireProof, explosionProof, collisionProof, meleeProof, p6, p7, drownProof);
};

window.SetEntityQuaternion = function (entity, x, y, z, w) {
	return _in("0x77B21BE7AC540F07", entity, _fv(x), _fv(y), _fv(z), _fv(w));
};

window.SetEntityRecordsCollisions = function (entity, toggle) {
	return _in("0x0A50A1EEDAD01E65", entity, toggle);
};

window.SetEntityRegister = function (entity, toggle) {
	return _in("0x3910051CCECDB00C", entity, toggle);
};

window.SetEntityRenderScorched = function (entity, toggle) {
	return _in("0x730F5F8D3F0F2050", entity, toggle);
};

window.SetEntityRotation = function (entity, pitch, roll, yaw, rotationOrder, p5) {
	return _in("0x8524A8B0171D5E07", entity, _fv(pitch), _fv(roll), _fv(yaw), rotationOrder, p5);
};

window.SetEntityTrafficlightOverride = function (entity, state) {
	return _in("0x57C5DB656185EAC4", entity, state);
};

window.SetEntityVelocity = function (entity, x, y, z) {
	return _in("0x1C99BB7B6E96D16F", entity, _fv(x), _fv(y), _fv(z));
};

window.SetEntityVisible = function (entity, toggle, unk) {
	return _in("0xEA1C610A04DB6BBB", entity, toggle, unk);
};

window.SetEntityVisibleInCutscene = function (p0, p1, p2) {
	return _in("0xE0031D3C8F36AB82", p0, p1, p2);
};

window.SetEveryoneIgnorePlayer = function (player, toggle) {
	return _in("0x8EEDA153AD141BA4", player, toggle);
};

window.SetExclusivePhoneRelationships = function (ped) {
	return _in("0xF92691AED837A5FC", ped, _r, _ri);
};

window.SetExclusiveScenarioGroup = function (scenarioGroup) {
	return _in("0x535E97E1F7FC0C6A", _ts(scenarioGroup));
};

window.SetExplosiveAmmoThisFrame = function (player) {
	return _in("0xA66C71C98D5F2CFB", player, _r, _ri);
};

window.SetExplosiveMeleeThisFrame = function (player) {
	return _in("0xFF1BED81BFDC0FE0", player, _r, _ri);
};

window.SetFacialIdleAnimOverride = function (ped, animName, animDict) {
	return _in("0xFFC24B988B938B38", ped, _ts(animName), _ts(animDict));
};

window.SetFadeInAfterDeathArrest = function (toggle) {
	return _in("0xDA66D2796BA33F12", toggle);
};

window.SetFadeInAfterLoad = function (toggle) {
	return _in("0xF3D78F59DFE18D79", toggle);
};

window.SetFadeOutAfterArrest = function (toggle) {
	return _in("0x1E0B4DC0D990A4E7", toggle);
};

window.SetFadeOutAfterDeath = function (toggle) {
	return _in("0x4A18E01DF2C87B86", toggle);
};

window.SetFakeWantedLevel = function (fakeWantedLevel) {
	return _in("0x1454F2448DE30163", fakeWantedLevel);
};

window.SetFarDrawVehicles = function (toggle) {
	return _in("0x26324F33423F3CC3", toggle);
};

window.SetFarShadowsSuppressed = function (toggle) {
	return _in("0x80ECBC0C856D3B0B", toggle);
};

window.SetFireAmmoThisFrame = function (player) {
	return _in("0x11879CDD803D30F4", player, _r, _ri);
};

window.SetFlash = function (p0, p1, fadeIn, duration, fadeOut) {
	return _in("0x0AB84296FED9CFC6", _fv(p0), _fv(p1), _fv(fadeIn), _fv(duration), _fv(fadeOut));
};

window.SetFlashLightFadeDistance = function (distance) {
	return _in("0xCEA66DAD478CD39B", _fv(distance), _r, _ri);
};

window.SetFocusArea = function (x, y, z, offsetX, offsetY, offsetZ) {
	return _in("0xBB7454BAFF08FE25", _fv(x), _fv(y), _fv(z), _fv(offsetX), _fv(offsetY), _fv(offsetZ));
};

window.SetFocusEntity = function (entity) {
	return _in("0x198F77705FA0931D", entity);
};

window.SetFollowPedCamCutsceneChat = function (p0, p1) {
	return _in("0x44A113DD6FFC48D1", _ts(p0), p1, _r);
};

window.SetFollowPedCamViewMode = function (viewMode) {
	return _in("0x5A4F9EDF1673F704", viewMode);
};

window.SetFollowVehicleCamViewMode = function (viewMode) {
	return _in("0xAC253D7842768F48", viewMode);
};

window.SetFollowVehicleCamZoomLevel = function (zoomLevel) {
	return _in("0x19464CB6E4078C8A", zoomLevel);
};

window.SetForceHdVehicle = function (vehicle, toggle) {
	return _in("0x97CE68CB032583F0", vehicle, toggle);
};

window.SetForceObjectThisFrame = function (p0, p1, p2, p3) {
	return _in("0xF538081986E49E9D", p0, p1, p2, p3);
};

window.SetForcePedFootstepsTracks = function (toggle) {
	return _in("0xAEEDAD1420C65CC0", toggle);
};

window.SetForceVehicleTrails = function (toggle) {
	return _in("0x4CC7F0FEA5283FE0", toggle);
};

window.SetFrontendActive = function (active) {
	return _in("0x745711A75AB09277", active);
};

window.SetFrontendRadioActive = function (active) {
	return _in("0xF7F26C6E9CC9EBB8", active);
};

window.SetFrozenRenderingDisabled = function (enabled) {
	return _in("0xDFC252D8A3E15AB7", enabled);
};

window.SetGamePaused = function (toggle) {
	return _in("0x577D1284D6873711", toggle);
};

window.SetGamePausesForStreaming = function (toggle) {
	return _in("0x717CD6E6FAEBBEDC", toggle);
};

window.SetGameplayCamRawPitch = function (pitch) {
	return _in("0x759E13EBC1C15C5A", _fv(pitch));
};

window.SetGameplayCamRawYaw = function (yaw) {
	return _in("0x103991D4A307D472", _fv(yaw));
};

window.SetGameplayCamRelativeHeading = function (heading) {
	return _in("0xB4EC2312F4E5B1F1", _fv(heading));
};

window.SetGameplayCamRelativePitch = function (x, Value2) {
	return _in("0x6D0858B8EDFD2B7D", _fv(x), _fv(Value2), _r, _ri);
};

window.SetGameplayCamShakeAmplitude = function (amplitude) {
	return _in("0xA87E00932DB4D85D", _fv(amplitude));
};

window.SetGameplayCoordHint = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xD51ADCD2D8BC0FB3", _fv(p0), _fv(p1), _fv(p2), p3, p4, p5, p6);
};

window.SetGameplayEntityHint = function (entity, xOffset, yOffset, zOffset, p4, p5, p6, p7, p8) {
	return _in("0x189E955A8313E298", entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), p4, p5, p6, p7, p8);
};

window.SetGameplayHintFov = function (FOV) {
	return _in("0x513403FB9C56211F", _fv(FOV));
};

window.SetGameplayObjectHint = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x83E87508A2CA2AC6", p0, _fv(p1), _fv(p2), _fv(p3), p4, p5, p6, p7);
};

window.SetGameplayPedHint = function (p0, x1, y1, z1, p4, p5, p6, p7) {
	return _in("0x2B486269ACD548D3", p0, _fv(x1), _fv(y1), _fv(z1), p4, p5, p6, p7);
};

window.SetGameplayVehicleHint = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0xA2297E18F3E71C2E", p0, _fv(p1), _fv(p2), _fv(p3), p4, p5, p6, p7);
};

window.SetGarbageTrucks = function (toggle) {
	return _in("0x2AFD795EEAC8D30D", toggle, _r, _ri);
};

window.SetGlobalMinBirdFlightHeight = function (height) {
	return _in("0x6C6B148586F934F7", _fv(height));
};

window.SetGpsActive = function (active) {
	return _in("0x3BD3F52BA9B1E4E8", active);
};

window.SetGpsDisabledZone = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xDC20483CD3DD5201", p0, p1, p2, p3, p4, p5);
};

window.SetGpsFlags = function (p0, p1) {
	return _in("0x5B440763A4C8D15B", p0, _fv(p1));
};

window.SetGpsFlashes = function (toggle) {
	return _in("0x320D0E0D936A0E9B", toggle);
};

window.SetGravityLevel = function (level) {
	return _in("0x740E14FAD5842351", level);
};

window.SetGroupFormation = function (groupId, formationType) {
	return _in("0xCE2F5FC3AF7E8C1E", groupId, formationType);
};

window.SetGroupFormationSpacing = function (groupId, p1, p2, p3) {
	return _in("0x1D9D45004C28C916", groupId, _fv(p1), _fv(p2), _fv(p3));
};

window.SetGroupSeparationRange = function (groupHandle, separationRange) {
	return _in("0x4102C7858CFEE4E4", groupHandle, _fv(separationRange));
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The value to set.
 */
window.SetHandlingField = function (vehicle, _class, fieldName, value) {
	return _in("0xfe8064e3", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The floating-point value to set.
 */
window.SetHandlingFloat = function (vehicle, _class, fieldName, value) {
	return _in("0x90dd01c", _ts(vehicle), _ts(_class), _ts(fieldName), _fv(value));
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The integer value to set.
 */
window.SetHandlingInt = function (vehicle, _class, fieldName, value) {
	return _in("0x8ab3f46c", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The Vector3 value to set.
 */
window.SetHandlingVector = function (vehicle, _class, fieldName, value) {
	return _in("0x7f9d543", _ts(vehicle), _ts(_class), _ts(fieldName), value);
};

window.SetHdArea = function (x, y, z, ground) {
	return _in("0xB85F26619073E775", _fv(x), _fv(y), _fv(z), _fv(ground));
};

window.SetHeliBladesFullSpeed = function (vehicle) {
	return _in("0xA178472EBB8AE60D", vehicle);
};

window.SetHeliBladesSpeed = function (vehicle, speed) {
	return _in("0xFD280B4D7F3ABC4D", vehicle, _fv(speed));
};

window.SetHelicopterRollPitchYawMult = function (helicopter, multiplier) {
	return _in("0x6E0859B530A365CC", helicopter, _fv(multiplier));
};

window.SetHighFallTask = function (ped, p1, p2, p3) {
	return _in("0x8C825BDC7741D37C", ped, p1, p2, p3);
};

window.SetHornEnabled = function (vehicle, toggle) {
	return _in("0x76D683C108594D0E", vehicle, toggle);
};

window.SetHudColour = function (hudColorIndex, r, g, b, a) {
	return _in("0xF314CF4F0211894E", hudColorIndex, r, g, b, a);
};

window.SetHudColoursSwitch = function (hudColorIndex, hudColorIndex2) {
	return _in("0x1CCC708F0F850613", hudColorIndex, hudColorIndex2);
};

window.SetHudComponentPosition = function (id, x, y) {
	return _in("0xAABB1F56E2A17CED", id, _fv(x), _fv(y));
};

window.SetIgnoreLowPriorityShockingEvents = function (player, toggle) {
	return _in("0x596976B02B6B5700", player, toggle);
};

window.SetIgnoreNoGpsFlag = function (ignore) {
	return _in("0x72751156E7678833", ignore);
};

window.SetIkTarget = function (ped, p1, targetPed, boneLookAt, x, y, z, p7, duration, duration1) {
	return _in("0xC32779C16FCEECD9", ped, p1, targetPed, boneLookAt, _fv(x), _fv(y), _fv(z), p7, duration, duration1);
};

window.SetInitialPlayerStation = function (radioStation) {
	return _in("0x88795F13FACDA88D", _ts(radioStation));
};

window.SetInputExclusive = function (inputGroup, control) {
	return _in("0xEDE476E5EE29EDB1", inputGroup, control);
};

window.SetInteriorActive = function (interiorID, toggle) {
	return _in("0xE37B76C387BE28ED", interiorID, toggle);
};

window.SetInteriorPropColor = function (interiorID, propName, color) {
	return _in("0xC1F1920BAF281317", interiorID, _ts(propName), color);
};

window.SetLastDrivenVehicle = function (vehicle) {
	return _in("0xACFB2463CC22BED2", vehicle);
};

window.SetLoadingPromptTextEntry = function (string) {
	return _in("0xABA17D7CE615ADBF", _ts(string));
};

window.SetLocalPlayerInvisibleLocally = function (p0) {
	return _in("0xE5F773C1A1D9D168", p0);
};

window.SetLocalPlayerVisibleInCutscene = function (p0, p1) {
	return _in("0xD1065D68947E7B6E", p0, p1);
};

window.SetLocalPlayerVisibleLocally = function (p0) {
	return _in("0x7619364C82D3BF14", p0);
};

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
window.SetManualShutdownLoadingScreenNui = function (manualShutdown) {
	return _in("0x1722c938", manualShutdown);
};

window.SetMapFullScreen = function (toggle) {
	return _in("0x5354C5BA2EA868A4", toggle);
};

window.SetMaxWantedLevel = function (maxWantedLevel) {
	return _in("0xAA5F02DB48D704B9", maxWantedLevel);
};

window.SetMicrophonePosition = function (p0, x1, y1, z1, x2, y2, z2, x3, y3, z3) {
	return _in("0xB6AE90EDDE95C762", p0, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(x3), _fv(y3), _fv(z3));
};

window.SetMinigameInProgress = function (toggle) {
	return _in("0x19E00D7322C6F85B", toggle);
};

window.SetMinimapAttitudeIndicatorLevel = function (altitude, p1) {
	return _in("0xD201F3FF917A506D", _fv(altitude), p1);
};

window.SetMinimapBlockWaypoint = function (toggle) {
	return _in("0x58FADDED207897DC", toggle);
};

window.SetMinimapComponent = function (p0, p1, p2) {
	return _in("0x75A9A10948D1DEA6", p0, p1, p2, _r, _ri);
};

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 */
window.SetMinimapOverlayDisplay = function (miniMap, x, y, xScale, yScale, alpha) {
	return _in("0x6a48b3ca", miniMap, _fv(x), _fv(y), _fv(xScale), _fv(yScale), _fv(alpha));
};

window.SetMinimapRevealed = function (toggle) {
	return _in("0xF8DEE0A5600CBB93", toggle);
};

window.SetMissionFlag = function (toggle) {
	return _in("0xC4301E5121A0ED73", toggle);
};

window.SetMissionName = function (p0, name) {
	return _in("0x5F28ECF5FC84772F", p0, _ts(name));
};

window.SetMissionTrainAsNoLongerNeeded = function (p1) {
	return _in("0xBBE7648349B49BE8", _i, p1);
};

window.SetMissionTrainCoords = function (train, x, y, z) {
	return _in("0x591CA673AA6AB736", train, _fv(x), _fv(y), _fv(z));
};

window.SetMobilePhonePosition = function (posX, posY, posZ) {
	return _in("0x693A5C6D6734085B", _fv(posX), _fv(posY), _fv(posZ));
};

window.SetMobilePhoneRadioState = function (state) {
	return _in("0xBF286C554784F3DF", state);
};

window.SetMobilePhoneRotation = function (rotX, rotY, rotZ, p3) {
	return _in("0xBB779C0CA917E865", _fv(rotX), _fv(rotY), _fv(rotZ), p3);
};

window.SetMobilePhoneScale = function (scale) {
	return _in("0xCBDD322A73D6D932", _fv(scale));
};

window.SetMobileRadioEnabledDuringGameplay = function (Toggle) {
	return _in("0x1098355A16064BB3", Toggle);
};

window.SetModelAsNoLongerNeeded = function (model) {
	return _in("0xE532F5D78798DAAB", _ch(model));
};

window.SetModelHeadlightConfiguration = function (modelHash, ratePerSecond, headlightRotation, invertRotation) {
	return _in("0x7f6b8d75", _ch(modelHash), _fv(ratePerSecond), _fv(headlightRotation), invertRotation);
};

window.SetMountedWeaponTarget = function (shootingPed, targetPed, targetVehicle, x, y, z) {
	return _in("0xCCD892192C6D2BB9", shootingPed, targetPed, targetVehicle, _fv(x), _fv(y), _fv(z));
};

window.SetMpGamerTagAlpha = function (gamerTagId, component, alpha) {
	return _in("0xD48FE545CD46F857", gamerTagId, component, alpha);
};

window.SetMpGamerTagColour = function (gamerTagId, flag, color) {
	return _in("0x613ED644950626AE", gamerTagId, flag, color);
};

window.SetMpGamerTagHealthBarColor = function (headDisplayId, color) {
	return _in("0x3158C77A7E888AB4", headDisplayId, color);
};

window.SetMpGamerTagName = function (gamerTagId, string) {
	return _in("0xDEA2B8283BAA3944", gamerTagId, _ts(string));
};

window.SetMpGamerTagVisibility = function (gamerTagId, component, toggle) {
	return _in("0x63BB75ABEDC1F6A0", gamerTagId, component, toggle);
};

window.SetMpGamerTagWantedLevel = function (gamerTagId, wantedlvl) {
	return _in("0xCF228E2AA03099C3", gamerTagId, wantedlvl);
};

window.SetMultiplayerBankCash = function () {
	return _in("0xDD21B55DF695CD0A");
};

window.SetMultiplayerHudCash = function (p0, p1) {
	return _in("0xFD1D220394BCB824", p0, p1);
};

window.SetNetworkIdCanMigrate = function (netId, toggle) {
	return _in("0x299EEB23175895FC", netId, toggle);
};

window.SetNetworkIdExistsOnAllMachines = function (netId, toggle) {
	return _in("0xE05E81A888FA63C8", netId, toggle);
};

window.SetNetworkIdSyncToPlayer = function (netId, player, toggle) {
	return _in("0xA8A024587329F36A", netId, player, toggle);
};

window.SetNetworkIdVisibleInCutscene = function (netId, p1, p2) {
	return _in("0xA6928482543022B4", netId, p1, p2);
};

window.SetNetworkVehicleRespotTimer = function (netId, p1) {
	return _in("0xEC51713AB6EC36E8", netId, p1);
};

window.SetNewWaypoint = function (x, y) {
	return _in("0xFE43368D2AA4F2FC", _fv(x), _fv(y));
};

window.SetNextDesiredMoveState = function (p0) {
	return _in("0xF1B9F16E89E2C93A", _fv(p0));
};

window.SetNextRespawnToCustom = function () {
	return _in("0xA2716D40842EAF79");
};

window.SetNightvision = function (toggle) {
	return _in("0x18F621F7A5B1F85D", toggle);
};

window.SetNoLoadingScreen = function (toggle) {
	return _in("0x5262CC1995D07E09", toggle);
};

window.SetNoiseoveride = function (toggle) {
	return _in("0xE787BF1C5CF823C9", toggle);
};

window.SetNoisinessoveride = function (value) {
	return _in("0xCB6A7C3BB17A0C67", _fv(value));
};

window.SetNorthYanktonMap = function (toggle) {
	return _in("0x9133955F1A2DA957", toggle);
};

window.SetNotificationColorNext = function (p0) {
	return _in("0x39BBF623FC803EAC", p0);
};

window.SetNotificationFlashColor = function (red, green, blue, alpha) {
	return _in("0x17430B918701C342", red, green, blue, alpha);
};

window.SetNotificationMessage = function (picName1, picName2, flash, iconType, sender, subject) {
	return _in("0x1CCD9A37359072CF", _ts(picName1), _ts(picName2), flash, iconType, _ts(sender), _ts(subject), _r, _ri);
};

window.SetNotificationMessageClanTag = function (picName1, picName2, flash, iconType, sender, subject, duration, clanTag) {
	return _in("0x5CBF7BADE20DB93E", _ts(picName1), _ts(picName2), flash, iconType, _ts(sender), _ts(subject), _fv(duration), _ts(clanTag), _r, _ri);
};

window.SetNotificationMessageClanTag_2 = function (picName1, picName2, flash, iconType1, sender, subject, duration, clanTag, iconType2, p9) {
	return _in("0x531B84E7DA981FB6", _ts(picName1), _ts(picName2), flash, iconType1, _ts(sender), _ts(subject), _fv(duration), _ts(clanTag), iconType2, p9, _r, _ri);
};

window.SetNotificationMessage_2 = function (p0, p1, p2, p3, p4, picName1, picName2) {
	return _in("0x2B7E9A4EAAA93C89", _ts(p0), p1, p2, p3, p4, _ts(picName1), _ts(picName2), _r, _ri);
};

window.SetNotificationMessage_3 = function (picName1, picName2, p2, p3, p4, p5) {
	return _in("0xC6F580E4C94926AC", _ts(picName1), _ts(picName2), p2, p3, _ts(p4), _ts(p5), _r, _ri);
};

window.SetNotificationMessage_4 = function (picName1, picName2, flash, iconType, sender, subject, duration) {
	return _in("0x1E6611149DB3DB6B", _ts(picName1), _ts(picName2), flash, iconType, _ts(sender), _ts(subject), _fv(duration), _r, _ri);
};

window.SetNotificationTextEntry = function (type) {
	return _in("0x202709F4C58A0424", _ts(type));
};

window.SetNuiFocus = function (hasFocus, hasCursor) {
	return _in("0x5b98ae30", hasFocus, hasCursor);
};

window.SetNumberOfParkedVehicles = function (value) {
	return _in("0xCAA15F13EBD417FF", value, _r, _ri);
};

window.SetObjectAsNoLongerNeeded = function (object) {
	return _in("0x3AE22DEB5BA5A3E6", _ii(object) /* may be optional */);
};

window.SetObjectPhysicsParams = function (object, weight, p2, p3, p4, p5, gravity, p7, p8, p9, p10, buoyancy) {
	return _in("0xF6DF6E90DE7DF90F", object, _fv(weight), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(gravity), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(buoyancy));
};

window.SetObjectTargettable = function (object, targettable) {
	return _in("0x8A7391690F5AFD81", object, targettable, _r, _ri);
};

window.SetObjectTextureVariant = function (object, paintIndex) {
	return _in("0x971DA0055324D033", object, paintIndex);
};

window.SetOverrideWeather = function (weatherType) {
	return _in("0xA43D5C6FE51ADBEF", _ts(weatherType));
};

window.SetPadShake = function (p0, duration, frequency) {
	return _in("0x48B3886C1358D0D5", p0, duration, frequency);
};

window.SetParachuteTaskTarget = function (ped, x, y, z) {
	return _in("0xC313379AF0FCEDA7", ped, _fv(x), _fv(y), _fv(z));
};

window.SetParachuteTaskThrust = function (ped, thrust) {
	return _in("0x0729BAC1B8C64317", ped, _fv(thrust));
};

window.SetParkedVehicleDensityMultiplierThisFrame = function (multiplier) {
	return _in("0xEAE6DCC7EEE3DB1D", _fv(multiplier));
};

window.SetParticleFxAssetOldToNew = function (oldAsset, newAsset) {
	return _in("0xEA1E2D93F6F75ED9", _ts(oldAsset), _ts(newAsset));
};

window.SetParticleFxBloodScale = function (p0) {
	return _in("0x5F6DF3D92271E8A1", p0);
};

window.SetParticleFxCamInsideNonplayerVehicle = function (p0, p1) {
	return _in("0xACEE6F360FC1F6B6", p0, p1);
};

window.SetParticleFxCamInsideVehicle = function (p0) {
	return _in("0xEEC4047028426510", p0);
};

window.SetParticleFxLoopedAlpha = function (ptfxHandle, alpha) {
	return _in("0x726845132380142E", ptfxHandle, _fv(alpha));
};

window.SetParticleFxLoopedColour = function (ptfxHandle, r, g, b, p4) {
	return _in("0x7F8F65877F88783B", ptfxHandle, _fv(r), _fv(g), _fv(b), p4);
};

window.SetParticleFxLoopedEvolution = function (ptfxHandle, propertyName, amount, Id) {
	return _in("0x5F0C4B5B1C393BE2", ptfxHandle, _ts(propertyName), _fv(amount), Id);
};

window.SetParticleFxLoopedOffsets = function (ptfxHandle, x, y, z, rotX, rotY, rotZ) {
	return _in("0xF7DDEBEC43483C43", ptfxHandle, _fv(x), _fv(y), _fv(z), _fv(rotX), _fv(rotY), _fv(rotZ));
};

window.SetParticleFxLoopedRange = function (ptfxHandle, range) {
	return _in("0xDCB194B85EF7B541", ptfxHandle, _fv(range));
};

window.SetParticleFxLoopedScale = function (ptfxHandle, scale) {
	return _in("0xB44250AAA456492D", ptfxHandle, _fv(scale));
};

window.SetParticleFxNonLoopedAlpha = function (alpha) {
	return _in("0x77168D722C58B2FC", _fv(alpha));
};

window.SetParticleFxNonLoopedColour = function (r, g, b) {
	return _in("0x26143A59EF48B262", _fv(r), _fv(g), _fv(b));
};

window.SetParticleFxShootoutBoat = function (p0) {
	return _in("0x96EF97DAEB89BEF5", p0);
};

window.SetPauseMenuActive = function (toggle) {
	return _in("0xDF47FC56C71569CF", toggle);
};

window.SetPedAccuracy = function (ped, accuracy) {
	return _in("0x7AEFB85C1D49DEB6", ped, accuracy, _r, _ri);
};

window.SetPedAlertness = function (ped, value) {
	return _in("0xDBA71115ED9941A6", ped, value);
};

window.SetPedAllowVehiclesOverride = function (ped, toggle) {
	return _in("0x3C028C636A414ED9", ped, toggle);
};

window.SetPedAllowedToDuck = function (ped, toggle) {
	return _in("0xDA1F1B7BE1A8766F", ped, toggle);
};

window.SetPedAlternateMovementAnim = function (ped, stance, animDictionary, animationName, p4, p5) {
	return _in("0x90A43CC281FFAB46", ped, stance, _ts(animDictionary), _ts(animationName), _fv(p4), p5);
};

window.SetPedAlternateWalkAnim = function (ped, animDict, animName, p3, p4) {
	return _in("0x6C60394CB4F75E9A", ped, _ts(animDict), _ts(animName), _fv(p3), p4);
};

window.SetPedAmmo = function (ped, weaponHash, ammo) {
	return _in("0x14E56BC5B5DB6A19", ped, _ch(weaponHash), ammo);
};

window.SetPedAmmoByType = function (ped, ammoType, ammo) {
	return _in("0x5FD1E1F011E76D7E", ped, ammoType, ammo);
};

window.SetPedAmmoToDrop = function (p0, p1) {
	return _in("0xA4EFEF9440A5B0EF", p0, p1);
};

window.SetPedAngledDefensiveArea = function (ped, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0xC7F76DF27A5045A1", ped, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), p8, p9);
};

window.SetPedArmour = function (ped, amount) {
	return _in("0xCEA04D83135264CC", ped, amount);
};

window.SetPedAsCop = function (ped, toggle) {
	return _in("0xBB03C38DD3FB7FFD", ped, toggle);
};

window.SetPedAsEnemy = function (ped, toggle) {
	return _in("0x02A0C9720B854BFA", ped, toggle);
};

window.SetPedAsGroupLeader = function (ped, groupId) {
	return _in("0x2A7819605465FBCE", ped, groupId);
};

window.SetPedAsGroupMember = function (ped, groupId) {
	return _in("0x9F3480FE65DB31B5", ped, groupId);
};

window.SetPedAsNoLongerNeeded = function (ped) {
	return _in("0x2595DD4236549CE3", _ii(ped) /* may be optional */);
};

window.SetPedBlendFromParents = function (ped, p1, p2, p3, p4) {
	return _in("0x137BBD05230DB22D", ped, p1, p2, _fv(p3), _fv(p4));
};

window.SetPedBoundsOrientation = function (ped, p1, p2, p3, p4, p5) {
	return _in("0x4F5F651ACCC9C4CF", ped, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5));
};

window.SetPedCanArmIk = function (ped, toggle) {
	return _in("0x6C3B4D6D13B4C841", ped, toggle);
};

window.SetPedCanBeDraggedOut = function (ped, toggle) {
	return _in("0xC1670E958EEE24E5", ped, toggle);
};

window.SetPedCanBeKnockedOffVehicle = function (ped, state) {
	return _in("0x7A6535691B477C48", ped, state);
};

window.SetPedCanBeShotInVehicle = function (ped, toggle) {
	return _in("0xC7EF1BA83230BA07", ped, toggle);
};

window.SetPedCanBeTargetedWhenInjured = function (ped, toggle) {
	return _in("0x638C03B0F9878F57", ped, toggle);
};

window.SetPedCanBeTargetedWithoutLos = function (ped, toggle) {
	return _in("0x4328652AE5769C71", ped, toggle);
};

window.SetPedCanBeTargetted = function (ped, toggle) {
	return _in("0x63F58F7C80513AAD", ped, toggle);
};

window.SetPedCanBeTargettedByPlayer = function (ped, player, toggle) {
	return _in("0x66B57B72E0836A76", ped, player, toggle);
};

window.SetPedCanBeTargettedByTeam = function (ped, team, toggle) {
	return _in("0xBF1CA77833E58F2C", ped, team, toggle);
};

window.SetPedCanCowerInCover = function (ped, toggle) {
	return _in("0xCB7553CDCEF4A735", ped, toggle);
};

window.SetPedCanEvasiveDive = function (ped, toggle) {
	return _in("0x6B7A646C242A7059", ped, toggle);
};

window.SetPedCanHeadIk = function (ped, toggle) {
	return _in("0xC11C18092C5530DC", ped, toggle);
};

window.SetPedCanLegIk = function (ped, toggle) {
	return _in("0x73518ECE2485412B", ped, toggle);
};

window.SetPedCanPeekInCover = function (ped, toggle) {
	return _in("0xC514825C507E3736", ped, toggle);
};

window.SetPedCanPlayAmbientAnims = function (ped, toggle) {
	return _in("0x6373D1349925A70E", ped, toggle);
};

window.SetPedCanPlayAmbientBaseAnims = function (ped, toggle) {
	return _in("0x0EB0585D15254740", ped, toggle);
};

window.SetPedCanPlayGestureAnims = function (ped, toggle) {
	return _in("0xBAF20C5432058024", ped, toggle);
};

window.SetPedCanPlayVisemeAnims = function (ped, toggle, p2) {
	return _in("0xF833DDBA3B104D43", ped, toggle, p2);
};

window.SetPedCanRagdoll = function (ped, toggle) {
	return _in("0xB128377056A54E2A", ped, toggle);
};

window.SetPedCanRagdollFromPlayerImpact = function (ped, toggle) {
	return _in("0xDF993EE5E90ABA25", ped, toggle);
};

window.SetPedCanSmashGlass = function (ped, p1, p2) {
	return _in("0x1CCE141467FF42A2", ped, p1, p2);
};

window.SetPedCanSwitchWeapon = function (ped, toggle) {
	return _in("0xED7F7EFE9FABF340", ped, toggle);
};

window.SetPedCanTeleportToGroupLeader = function (pedHandle, groupHandle, toggle) {
	return _in("0x2E2F4240B3F24647", pedHandle, groupHandle, toggle);
};

window.SetPedCanTorsoIk = function (ped, toggle) {
	return _in("0xF2B7106D37947CE0", ped, toggle);
};

window.SetPedCanUseAutoConversationLookat = function (ped, toggle) {
	return _in("0xEC4686EC06434678", ped, toggle);
};

window.SetPedCapsule = function (ped, value) {
	return _in("0x364DF566EC833DE2", ped, _fv(value));
};

window.SetPedChanceOfFiringBlanks = function (ped, xBias, yBias) {
	return _in("0x8378627201D5497D", ped, _fv(xBias), _fv(yBias));
};

window.SetPedClothProne = function (p0, p1) {
	return _in("0x82A3D6D9CC2CB8E3", p0, p1);
};

window.SetPedCombatAbility = function (ped, p1) {
	return _in("0xC7622C0D36B2FDA8", ped, p1);
};

window.SetPedCombatAttributes = function (ped, attributeIndex, enabled) {
	return _in("0x9F7794730795E019", ped, attributeIndex, enabled);
};

window.SetPedCombatMovement = function (ped, combatMovement) {
	return _in("0x4D9CA1009AFBD057", ped, combatMovement);
};

window.SetPedCombatRange = function (ped, p1) {
	return _in("0x3C606747B23E497B", ped, p1);
};

window.SetPedComponentVariation = function (ped, componentId, drawableId, textureId, paletteId) {
	return _in("0x262B14F48D29DE80", ped, componentId, drawableId, textureId, paletteId);
};

window.SetPedConfigFlag = function (ped, flagId, value) {
	return _in("0x1913FE4CBF41C463", ped, flagId, value);
};

window.SetPedCoordsKeepVehicle = function (ped, posX, posY, posZ) {
	return _in("0x9AFEFF481A85AB2E", ped, _fv(posX), _fv(posY), _fv(posZ));
};

window.SetPedCoordsNoGang = function (ped, posX, posY, posZ) {
	return _in("0x87052FE446E07247", ped, _fv(posX), _fv(posY), _fv(posZ));
};

window.SetPedCowerHash = function (ped, p1) {
	return _in("0xA549131166868ED3", ped, _ts(p1));
};

window.SetPedCurrentWeaponVisible = function (ped, visible, deselectWeapon, p3, p4) {
	return _in("0x0725A4CCFDED9A70", ped, visible, deselectWeapon, p3, p4);
};

window.SetPedDecoration = function (ped, collection, overlay) {
	return _in("0x5F5D1665E352A839", ped, _ch(collection), _ch(overlay));
};

window.SetPedDefaultComponentVariation = function (ped) {
	return _in("0x45EEE61580806D63", ped);
};

window.SetPedDefensiveAreaAttachedToPed = function (ped, attachPed, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0x4EF47FE21698A8B6", ped, attachPed, _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), _fv(p8), p9, p10);
};

window.SetPedDefensiveAreaDirection = function (ped, p1, p2, p3, p4) {
	return _in("0x413C6C763A4AFFAD", ped, _fv(p1), _fv(p2), _fv(p3), p4);
};

window.SetPedDefensiveSphereAttachedToPed = function (ped, target, xOffset, yOffset, zOffset, radius, p6) {
	return _in("0xF9B8F91AAD3B953E", ped, target, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(radius), p6);
};

window.SetPedDensityMultiplierThisFrame = function (multiplier) {
	return _in("0x95E3D6257B166CF2", _fv(multiplier));
};

window.SetPedDesiredHeading = function (ped, heading) {
	return _in("0xAA5A7ECE2AA8FE70", ped, _fv(heading));
};

window.SetPedDesiredMoveBlendRatio = function (ped, p1) {
	return _in("0x1E982AC8716912C5", ped, _fv(p1));
};

window.SetPedDiesInSinkingVehicle = function (ped, toggle) {
	return _in("0xD718A22995E2B4BC", ped, toggle);
};

window.SetPedDiesInVehicle = function (ped, toggle) {
	return _in("0x2A30922C90C9B42C", ped, toggle);
};

window.SetPedDiesInWater = function (ped, toggle) {
	return _in("0x56CEF0AC79073BDE", ped, toggle);
};

window.SetPedDiesInstantlyInWater = function (ped, toggle) {
	return _in("0xEEB64139BA29A7CF", ped, toggle);
};

window.SetPedDiesWhenInjured = function (ped, toggle) {
	return _in("0x5BA7919BED300023", ped, toggle, _r, _ri);
};

window.SetPedDriveByClipsetOverride = function (ped, clipset) {
	return _in("0xED34AB6C5CB36520", ped, _ts(clipset));
};

window.SetPedDropsInventoryWeapon = function (ped, weaponHash, xOffset, yOffset, zOffset, p5) {
	return _in("0x208A1888007FC0E6", ped, _ch(weaponHash), _fv(xOffset), _fv(yOffset), _fv(zOffset), p5);
};

window.SetPedDropsWeapon = function (ped) {
	return _in("0x6B7513D9966FBEC0", ped);
};

window.SetPedDropsWeaponsWhenDead = function (ped, toggle) {
	return _in("0x476AE72C1D19D1A8", ped, toggle);
};

window.SetPedDucking = function (ped, toggle) {
	return _in("0x030983CA930B692D", ped, toggle);
};

window.SetPedEnableWeaponBlocking = function (ped, toggle) {
	return _in("0x97A790315D3831FD", ped, toggle, _r, _ri);
};

window.SetPedEnabledBikeRingtone = function (vehicle, entity) {
	return _in("0x57715966069157AD", vehicle, entity, _r);
};

window.SetPedEnemyAiBlip = function (pedHandle, showViewCones) {
	return _in("0xD30C50DF888D58B5", pedHandle, showViewCones);
};

window.SetPedEnveffScale = function (ped, value) {
	return _in("0xBF29516833893561", ped, _fv(value));
};

window.SetPedEyeColor = function (ped, index) {
	return _in("0x50B56988B170AFDF", ped, index);
};

window.SetPedFaceFeature = function (ped, index, scale) {
	return _in("0x71A5C1DBA060049E", ped, index, _fv(scale));
};

window.SetPedFacialDecoration = function (ped, collection, overlay) {
	return _in("0x5619BFA07CFD7833", ped, _ch(collection), _ch(overlay));
};

window.SetPedFiringPattern = function (ped, patternHash) {
	return _in("0x9AC577F5A12AD8A9", ped, _ch(patternHash));
};

window.SetPedFleeAttributes = function (ped, attributes, p2) {
	return _in("0x70A2D1137C8ED7C9", ped, attributes, p2);
};

window.SetPedGadget = function (ped, gadgetHash, p2) {
	return _in("0xD0D7B1E680ED4A1A", ped, _ch(gadgetHash), p2);
};

window.SetPedGeneratesDeadBodyEvents = function (ped, toggle) {
	return _in("0x7FB17BA2E7DECA5B", ped, toggle);
};

window.SetPedGestureGroup = function (ped, animGroupGesture) {
	return _in("0xDDF803377F94AAA8", ped, _ts(animGroupGesture));
};

window.SetPedGetOutUpsideDownVehicle = function (ped, toggle) {
	return _in("0xBC0ED94165A48BC2", ped, toggle);
};

window.SetPedGravity = function (ped, toggle) {
	return _in("0x9FF447B6B6AD960A", ped, toggle);
};

window.SetPedGroupMemberPassengerIndex = function (ped, index) {
	return _in("0x0BDDB8D9EC6BCF3C", ped, index);
};

window.SetPedHairColor = function (ped, colorID, highlightColorID) {
	return _in("0x4CFFC65454C93A49", ped, colorID, highlightColorID);
};

window.SetPedHeadBlendData = function (ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) {
	return _in("0x9414E18B9434C2FE", ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, _fv(shapeMix), _fv(skinMix), _fv(thirdMix), isParent);
};

window.SetPedHeadOverlay = function (ped, overlayID, index, opacity) {
	return _in("0x48F44967FA05CC1E", ped, overlayID, index, _fv(opacity));
};

window.SetPedHeadOverlayColor = function (ped, overlayID, colorType, colorID, secondColorID) {
	return _in("0x497BF74A7B9CB952", ped, overlayID, colorType, colorID, secondColorID);
};

window.SetPedHearingRange = function (ped, value) {
	return _in("0x33A8F7F7D5F7F33C", ped, _fv(value));
};

window.SetPedHelmet = function (ped, canWearHelmet) {
	return _in("0x560A43136EB58105", ped, canWearHelmet);
};

window.SetPedHelmetFlag = function (ped, helmetFlag) {
	return _in("0xC0E78D5C2CE3EB25", ped, helmetFlag);
};

window.SetPedHelmetPropIndex = function (ped, propIndex) {
	return _in("0x26D83693ED99291C", ped, propIndex);
};

window.SetPedHelmetTextureIndex = function (ped, textureIndex) {
	return _in("0xF1550C4BD22582E2", ped, textureIndex);
};

window.SetPedIdRange = function (ped, value) {
	return _in("0xF107E836A70DCE05", ped, _fv(value));
};

window.SetPedInVehicleContext = function (ped, context) {
	return _in("0x530071295899A8C6", ped, _ch(context));
};

window.SetPedInfiniteAmmo = function (ped, toggle, weaponHash) {
	return _in("0x3EDCB0505123623B", ped, toggle, _ch(weaponHash));
};

window.SetPedInfiniteAmmoClip = function (ped, toggle) {
	return _in("0x183DADC6AA953186", ped, toggle);
};

window.SetPedIntoVehicle = function (ped, vehicle, seatIndex) {
	return _in("0xF75B0D629E1C063D", ped, vehicle, seatIndex);
};

window.SetPedIsDrunk = function (ped, toggle) {
	return _in("0x95D2D383D5396B8A", ped, toggle);
};

window.SetPedKeepTask = function (ped, toggle) {
	return _in("0x971D38760FBC02EF", ped, toggle);
};

window.SetPedLegIkMode = function (ped, mode) {
	return _in("0xC396F5B86FF9FEBD", ped, mode);
};

window.SetPedLodMultiplier = function (ped, multiplier) {
	return _in("0xDC2C5C242AAC342B", ped, _fv(multiplier));
};

window.SetPedMaxHealth = function (ped, value) {
	return _in("0xF5F6378C4F3419D3", ped, value);
};

window.SetPedMaxMoveBlendRatio = function (ped, value) {
	return _in("0x433083750C5E064A", ped, _fv(value));
};

window.SetPedMaxTimeInWater = function (ped, value) {
	return _in("0x43C851690662113D", ped, _fv(value));
};

window.SetPedMaxTimeUnderwater = function (ped, value) {
	return _in("0x6BA428C528D9E522", ped, _fv(value));
};

window.SetPedMinGroundTimeForStungun = function (ped, ms) {
	return _in("0xFA0675AB151073FA", ped, ms);
};

window.SetPedMinMoveBlendRatio = function (ped, value) {
	return _in("0x01A898D26E2333DD", ped, _fv(value));
};

window.SetPedModelIsSuppressed = function (ped, toggle) {
	return _in("0xE163A4BCE4DE6F11", ped, toggle);
};

window.SetPedMoney = function (ped, amount) {
	return _in("0xA9C8960E8684C1B5", ped, amount);
};

window.SetPedMotionBlur = function (ped, toggle) {
	return _in("0x0A986918B102B448", ped, toggle);
};

window.SetPedMoveAnimsBlendOut = function (ped) {
	return _in("0x9E8C908F41584ECD", ped);
};

window.SetPedMoveRateOverride = function (ped, value) {
	return _in("0x085BF80FA50A39D1", ped, _fv(value));
};

window.SetPedMovementClipset = function (ped, clipSet, p2) {
	return _in("0xAF8A94EDE7712BEF", ped, _ts(clipSet), _fv(p2));
};

window.SetPedNameDebug = function (ped, name) {
	return _in("0x98EFA132A4117BE1", ped, _ts(name));
};

window.SetPedNeverLeavesGroup = function (ped, toggle) {
	return _in("0x3DBFC55D5C9BB447", ped, toggle);
};

window.SetPedNonCreationArea = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xEE01041D559983EA", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2));
};

window.SetPedParachuteTintIndex = function (ped, tintIndex) {
	return _in("0x333FC8DB079B7186", ped, tintIndex);
};

window.SetPedPathAvoidFire = function (ped, avoidFire) {
	return _in("0x4455517B28441E60", ped, avoidFire);
};

window.SetPedPathCanDropFromHeight = function (ped, Toggle) {
	return _in("0xE361C5C71C431A4F", ped, Toggle);
};

window.SetPedPathCanUseClimbovers = function (ped, Toggle) {
	return _in("0x8E06A6FE76C9EFF4", ped, Toggle, _r, _ri);
};

window.SetPedPathCanUseLadders = function (ped, Toggle) {
	return _in("0x77A5B103C87F476E", ped, Toggle, _r, _ri);
};

window.SetPedPathPreferToAvoidWater = function (ped, avoidWater) {
	return _in("0x38FE1EC73743793C", ped, avoidWater);
};

window.SetPedPathsBackToOriginal = function (p0, p1, p2, p3, p4, p5) {
	return _in("0xE04B48F2CC926253", p0, p1, p2, p3, p4, p5);
};

window.SetPedPathsInArea = function (x1, y1, z1, x2, y2, z2, unknown) {
	return _in("0x34F060F4BF92E018", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), unknown);
};

window.SetPedPathsWidthPlant = function (ped, mayEnterWater) {
	return _in("0xF35425A4204367EC", ped, mayEnterWater);
};

window.SetPedPinnedDown = function (ped, pinned, i) {
	return _in("0xAAD6D1ACF08F4612", ped, pinned, i, _r, _ri);
};

window.SetPedPlaysHeadOnHornAnimWhenDiesInVehicle = function (ped, toggle) {
	return _in("0x94D94BF1A75AED3D", ped, toggle);
};

window.SetPedPopulationBudget = function (p0) {
	return _in("0x8C95333CFC3340F3", p0);
};

window.SetPedPreferredCoverSet = function (ped, itemSet) {
	return _in("0x8421EB4DA7E391B9", ped, itemSet);
};

window.SetPedPrimaryLookat = function (ped, lookAt) {
	return _in("0xCD17B554996A8D9E", ped, lookAt);
};

window.SetPedPropIndex = function (ped, componentId, drawableId, TextureId, attach) {
	return _in("0x93376B65A266EB5F", ped, componentId, drawableId, TextureId, attach);
};

window.SetPedRagdollBlockingFlags = function (ped, flags) {
	return _in("0x26695EC767728D84", ped, flags);
};

window.SetPedRagdollForceFall = function (ped) {
	return _in("0x01F6594B923B9251", ped, _r, _ri);
};

window.SetPedRagdollOnCollision = function (ped, toggle) {
	return _in("0xF0A4F1BBF4FA7497", ped, toggle);
};

window.SetPedRandomComponentVariation = function (ped, p1) {
	return _in("0xC8A9481A01E63C28", ped, p1);
};

window.SetPedRandomProps = function (ped) {
	return _in("0xC44AA05345C992C6", ped);
};

window.SetPedRelationshipGroupDefaultHash = function (ped, hash) {
	return _in("0xADB3F206518799E8", ped, _ch(hash));
};

window.SetPedRelationshipGroupHash = function (ped, hash) {
	return _in("0xC80A74AC829DDD92", ped, _ch(hash));
};

window.SetPedReserveParachuteTintIndex = function (ped, p1) {
	return _in("0xE88DA0751C22A2AD", ped, p1);
};

window.SetPedResetFlag = function (ped, flagId, doReset) {
	return _in("0xC1E8A365BF3B29F2", ped, flagId, doReset);
};

window.SetPedSeeingRange = function (ped, value) {
	return _in("0xF29CF591C4BF6CEE", ped, _fv(value));
};

window.SetPedShootRate = function (ped, shootRate) {
	return _in("0x614DA022990752DC", ped, shootRate);
};

window.SetPedShootsAtCoord = function (ped, x, y, z, toggle) {
	return _in("0x96A05E4FB321B1BA", ped, _fv(x), _fv(y), _fv(z), toggle);
};

window.SetPedSphereDefensiveArea = function (ped, x, y, z, radius, p5, p6) {
	return _in("0x9D3151A373974804", ped, _fv(x), _fv(y), _fv(z), _fv(radius), p5, p6);
};

window.SetPedStayInVehicleWhenJacked = function (ped, toggle) {
	return _in("0xEDF4079F9D54C9A1", ped, toggle);
};

window.SetPedStealthMovement = function (ped, p1, action) {
	return _in("0x88CBB5CEB96B7BD2", ped, p1, _ts(action));
};

window.SetPedSteersAroundObjects = function (ped, toggle) {
	return _in("0x1509C089ADC208BF", ped, toggle);
};

window.SetPedSteersAroundPeds = function (ped, toggle) {
	return _in("0x46F2193B3AD1D891", ped, toggle);
};

window.SetPedSteersAroundVehicles = function (ped, toggle) {
	return _in("0xEB6FB9D48DDE23EC", ped, toggle);
};

window.SetPedStrafeClipset = function (ped, clipSet) {
	return _in("0x29A28F3F8CF6D854", ped, _ts(clipSet));
};

window.SetPedSuffersCriticalHits = function (ped, toggle) {
	return _in("0xEBD76F2359F190AC", ped, toggle);
};

window.SetPedSweat = function (ped, sweat) {
	return _in("0x27B0405F59637D1F", ped, _fv(sweat));
};

window.SetPedTargetLossResponse = function (ped, responseType) {
	return _in("0x0703B9079823DA4A", ped, responseType);
};

window.SetPedTargettableVehicleDestroy = function (vehicle, vehicleComponent, destroyType) {
	return _in("0xBE70724027F85BCD", vehicle, vehicleComponent, destroyType);
};

window.SetPedToInformRespectedFriends = function (ped, radius, maxFriends) {
	return _in("0x112942C6E708F70B", ped, _fv(radius), maxFriends);
};

window.SetPedToLoadCover = function (ped, toggle) {
	return _in("0x332B562EEDA62399", ped, toggle);
};

window.SetPedToRagdoll = function (ped, time1, time2, ragdollType, p4, p5, p6) {
	return _in("0xAE99FB955581844A", ped, time1, time2, ragdollType, p4, p5, p6, _r);
};

window.SetPedToRagdollWithFall = function (ped, time, p2, ragdollType, x, y, z, p7, p8, p9, p10, p11, p12, p13) {
	return _in("0xD76632D99E4966C8", ped, time, p2, ragdollType, _fv(x), _fv(y), _fv(z), _fv(p7), _fv(p8), _fv(p9), _fv(p10), _fv(p11), _fv(p12), _fv(p13), _r);
};

window.SetPedUsingActionMode = function (ped, p1, p2, action) {
	return _in("0xD75ACCF5E0FB5367", ped, p1, p2, _ts(action));
};

window.SetPedVisualFieldCenterAngle = function (ped, angle) {
	return _in("0x3B6405E8AB34A907", ped, _fv(angle));
};

window.SetPedVisualFieldMaxAngle = function (ped, value) {
	return _in("0x70793BDCA1E854D4", ped, _fv(value));
};

window.SetPedVisualFieldMaxElevationAngle = function (ped, angle) {
	return _in("0x78D0B67629D75856", ped, _fv(angle));
};

window.SetPedVisualFieldMinAngle = function (ped, value) {
	return _in("0x2DB492222FB21E26", ped, _fv(value));
};

window.SetPedVisualFieldMinElevationAngle = function (ped, angle) {
	return _in("0x7A276EB2C224D70F", ped, _fv(angle));
};

window.SetPedVisualFieldPeripheralRange = function (ped, range) {
	return _in("0x9C74B0BC831B753A", ped, _fv(range));
};

window.SetPedWaypointRouteOffset = function (p0, p1, p2, p3) {
	return _in("0xED98E10B0AFCE4B4", p0, p1, p2, p3, _r, _ri);
};

window.SetPedWeaponMovementClipset = function (ped, clipSet) {
	return _in("0x2622E35B77D3ACA2", ped, _ts(clipSet));
};

window.SetPedWeaponTintIndex = function (ped, weaponHash, tintIndex) {
	return _in("0x50969B9B89ED5738", ped, _ch(weaponHash), tintIndex);
};

window.SetPedWetnessEnabledThisFrame = function (ped) {
	return _in("0xB5485E4907B53019", ped);
};

window.SetPedWetnessHeight = function (ped, height) {
	return _in("0x44CB6447D2571AA0", ped, _fv(height));
};

window.SetPhoneLean = function (Toggle) {
	return _in("0x44E44169EF70138E", Toggle);
};

window.SetPickupRegenerationTime = function (p0, p1) {
	return _in("0x78015C9B4B3ECC9D", p0, p1);
};

window.SetPlaneMinHeightAboveGround = function (plane, height) {
	return _in("0xB893215D8D4C015B", plane, height);
};

window.SetPlaybackSpeed = function (p0, speed) {
	return _in("0x6683AB880E427778", p0, _fv(speed), _r, _ri);
};

window.SetPlaybackToUseAi = function (vehicle, flag) {
	return _in("0xA549C3B37EA28131", vehicle, flag);
};

window.SetPlaybackToUseAiTryToRevertBackLater = function (p0, p1, p2, p3) {
	return _in("0x6E63860BBB190730", p0, p1, p2, p3);
};

window.SetPlayerAngry = function (playerPed, disabled) {
	return _in("0xEA241BB04110F091", playerPed, disabled);
};

window.SetPlayerBlipPositionThisFrame = function (x, y) {
	return _in("0x77E2DD177910E1CF", _fv(x), _fv(y));
};

window.SetPlayerCanBeHassledByGangs = function (player, toggle) {
	return _in("0xD5E460AD7020A246", player, toggle);
};

window.SetPlayerCanDoDriveBy = function (player, toggle) {
	return _in("0x6E8834B52EC20C77", player, toggle);
};

window.SetPlayerCanLeaveParachuteSmokeTrail = function (player, enabled) {
	return _in("0xF401B182DBA8AF53", player, enabled);
};

window.SetPlayerCanUseCover = function (player, toggle) {
	return _in("0xD465A8599DFF6814", player, toggle, _r, _ri);
};

window.SetPlayerCashChange = function (cash, bank) {
	return _in("0x0772DF77852C2E30", cash, bank);
};

window.SetPlayerClothLockCounter = function (value) {
	return _in("0x14D913B777DFF5DA", value);
};

window.SetPlayerClothPackageIndex = function (index) {
	return _in("0x9F7BBA2EA6372500", index);
};

window.SetPlayerClothPinFrames = function (player, toggle) {
	return _in("0x749FADDF97DFE930", player, toggle);
};

window.SetPlayerControl = function (player, toggle, possiblyFlags) {
	return _in("0x8D32347D6D4C40A2", player, toggle, possiblyFlags);
};

window.SetPlayerForceSkipAimIntro = function (player, toggle) {
	return _in("0x7651BC64AE59E128", player, toggle);
};

window.SetPlayerForcedAim = function (player, toggle) {
	return _in("0x0FEE4F80AC44A726", player, toggle);
};

window.SetPlayerForcedZoom = function (player, toggle) {
	return _in("0x75E7D505F2B15902", player, toggle);
};

window.SetPlayerHasReserveParachute = function (player) {
	return _in("0x7DDAB28D31FAC363", player);
};

window.SetPlayerHealthRechargeMultiplier = function (player, regenRate) {
	return _in("0x5DB660B38DD98A31", player, _fv(regenRate));
};

window.SetPlayerInvertedUp = function () {
	return _in("0x08C2D6C52A3104BB", _r, _ri);
};

window.SetPlayerInvincible = function (player, toggle) {
	return _in("0x239528EACDC3E7DE", player, toggle);
};

window.SetPlayerInvisibleLocally = function (player, toggle) {
	return _in("0x12B37D54667DB0B8", player, toggle);
};

window.SetPlayerLockon = function (player, toggle) {
	return _in("0x5C8B2F450EE4328E", player, toggle);
};

window.SetPlayerLockonRangeOverride = function (player, range) {
	return _in("0x29961D490E5814FD", player, _fv(range));
};

window.SetPlayerMaxArmour = function (player, value) {
	return _in("0x77DFCCF5948B8C71", player, value);
};

window.SetPlayerMayNotEnterAnyVehicle = function (player) {
	return _in("0x1DE37BBF9E9CC14A", player);
};

window.SetPlayerMayOnlyEnterThisVehicle = function (player, vehicle) {
	return _in("0x8026FF78F208978A", player, vehicle);
};

window.SetPlayerMeleeWeaponDamageModifier = function (player, modifier) {
	return _in("0x4A3DC7ECCC321032", player, _fv(modifier));
};

window.SetPlayerMeleeWeaponDefenseModifier = function (player, modifier) {
	return _in("0xAE540335B4ABC4E2", player, _fv(modifier));
};

window.SetPlayerModel = function (player, model) {
	return _in("0x00A1CADD00108836", player, _ch(model));
};

window.SetPlayerNoiseMultiplier = function (player, multiplier) {
	return _in("0xDB89EF50FF25FCE9", player, _fv(multiplier));
};

window.SetPlayerParachuteModelOverride = function (player, model) {
	return _in("0x977DB4641F6FC3DB", player, _ch(model));
};

window.SetPlayerParachutePackModelOverride = function (player, model) {
	return _in("0xDC80A4C2F18A2B64", player, _ch(model));
};

window.SetPlayerParachutePackTintIndex = function (player, tintIndex) {
	return _in("0x93B0FB27C9A04060", player, tintIndex);
};

window.SetPlayerParachuteSmokeTrailColor = function (player, r, g, b) {
	return _in("0x8217FD371A4625CF", player, r, g, b);
};

window.SetPlayerParachuteTintIndex = function (player, tintIndex) {
	return _in("0xA3D0E54541D9A5E5", player, tintIndex);
};

window.SetPlayerParachuteVariationOverride = function (player, p1, p2, p3, p4) {
	return _in("0xD9284A8C0D48352C", player, p1, p2, p3, p4);
};

window.SetPlayerReserveParachuteTintIndex = function (player, index) {
	return _in("0xAF04C87F5DC1DF38", player, index);
};

window.SetPlayerResetFlagPreferRearSeats = function (player, flags) {
	return _in("0x11D5F725F0E780E0", player, flags);
};

window.SetPlayerSimulateAiming = function (player, toggle) {
	return _in("0xC54C95DA968EC5B5", player, toggle);
};

window.SetPlayerSneakingNoiseMultiplier = function (player, multiplier) {
	return _in("0xB2C1A29588A9F47C", player, _fv(multiplier));
};

window.SetPlayerSprint = function (player, toggle) {
	return _in("0xA01B8075D8B92DF4", player, toggle);
};

window.SetPlayerStealthPerceptionModifier = function (player, value) {
	return _in("0x4E9021C1FCDD507A", player, _fv(value));
};

window.SetPlayerSwitchOutro = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0xC208B673CE446B61", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), p8);
};

window.SetPlayerTargetingMode = function (targetMode) {
	return _in("0xB1906895227793F3", targetMode);
};

window.SetPlayerTeam = function (player, team) {
	return _in("0x0299FA38396A4940", player, team);
};

window.SetPlayerVehicleDamageModifier = function (player, damageAmount) {
	return _in("0xA50E117CDDF82F0C", player, _fv(damageAmount));
};

window.SetPlayerVehicleDefenseModifier = function (player, modifier) {
	return _in("0x4C60E6EFDAFF2462", player, _fv(modifier));
};

window.SetPlayerVisibleLocally = function (player, toggle) {
	return _in("0xFAA10F1FAFB11AF2", player, toggle);
};

window.SetPlayerWantedCentrePosition = function (player, p2, p3) {
	return _in("0x520E541A97A13354", player, _v, p2, p3);
};

window.SetPlayerWantedLevel = function (player, wantedLevel, disableNoMission) {
	return _in("0x39FF19C64EF7DA5B", player, wantedLevel, disableNoMission);
};

window.SetPlayerWantedLevelNoDrop = function (player, wantedLevel, p2) {
	return _in("0x340E61DE7F471565", player, wantedLevel, p2);
};

window.SetPlayerWantedLevelNow = function (player, p1) {
	return _in("0xE0A7D1E497FFCD6F", player, p1);
};

window.SetPlayerWeaponDamageModifier = function (player, damageAmount) {
	return _in("0xCE07B9F7817AADA3", player, _fv(damageAmount));
};

window.SetPlayerWeaponDefenseModifier = function (player, modifier) {
	return _in("0x2D83BC011CA14A3C", player, _fv(modifier));
};

window.SetPlayerpadShakesWhenControllerDisabled = function (toggle) {
	return _in("0x798FDEB5B1575088", toggle);
};

window.SetPlayersLastVehicle = function (vehicle) {
	return _in("0xBCDF8BAF56C87B6A", vehicle, _r, _ri);
};

window.SetPoliceIgnorePlayer = function (player, toggle) {
	return _in("0x32C62AA929C2DA6A", player, toggle);
};

window.SetPoliceRadarBlips = function (toggle) {
	return _in("0x43286D561B72B8BF", toggle);
};

window.SetRadarAsExteriorThisFrame = function () {
	return _in("0xE81B7D2A3DAB2D81");
};

window.SetRadarAsInteriorThisFrame = function (interior, x, y, z, zoom) {
	return _in("0x59E727A1C9D3E31A", _ch(interior), _fv(x), _fv(y), z, zoom);
};

window.SetRadarBigmapEnabled = function (toggleBigMap, showFullMap) {
	return _in("0x231C8F89D0539D8F", toggleBigMap, showFullMap);
};

window.SetRadarZoom = function (zoomLevel) {
	return _in("0x096EF57A0C999BBA", zoomLevel);
};

window.SetRadarZoomLevelThisFrame = function (zoomLevel) {
	return _in("0xCB7CC0D58405AD41", _fv(zoomLevel));
};

window.SetRadioAutoUnfreeze = function (toggle) {
	return _in("0xC1AA9F53CE982990", toggle);
};

window.SetRadioToStationIndex = function (radioStation) {
	return _in("0xA619B168B8A8570F", radioStation);
};

window.SetRadioToStationName = function (stationName) {
	return _in("0xC69EDA28699D5107", _ts(stationName));
};

window.SetRadioTrack = function (radioStation, radioTrack) {
	return _in("0xB39786F201FEE30B", _ts(radioStation), _ts(radioTrack));
};

window.SetRainFxIntensity = function (intensity) {
	return _in("0x643E26EA6E024D92", _fv(intensity));
};

window.SetRampVehicleReceivesRampDamage = function (vehicle, receivesDamage) {
	return _in("0x28D034A93FE31BF5", vehicle, receivesDamage);
};

window.SetRandomBoats = function (toggle) {
	return _in("0x84436EC293B1415F", toggle, _r, _ri);
};

window.SetRandomEventFlag = function (p0) {
	return _in("0x971927086CFD2158", p0);
};

window.SetRandomSeed = function (time) {
	return _in("0x444D98F98C11F3EC", time);
};

window.SetRandomTrains = function (toggle) {
	return _in("0x80D9F74197EA47D9", toggle);
};

window.SetRandomVehicleDensityMultiplierThisFrame = function (multiplier) {
	return _in("0xB3B3359379FE77D3", _fv(multiplier));
};

window.SetRandomWeatherType = function () {
	return _in("0x8B05F884CF7E8020");
};

window.SetReducePedModelBudget = function (toggle) {
	return _in("0x77B5F9A36BF96710", toggle);
};

window.SetReduceVehicleModelBudget = function (toggle) {
	return _in("0x80C527893080CCF3", toggle);
};

window.SetRelationshipBetweenGroups = function (relationship, group1, group2) {
	return _in("0xBF25EB89375A37AD", relationship, _ch(group1), _ch(group2));
};

window.SetRenderTrainAsDerailed = function (train, toggle) {
	return _in("0x317B11A312DF5534", train, toggle);
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

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
window.SetRichPresence = function (presenceState) {
	return _in("0x7bdcbd45", _ts(presenceState));
};

window.SetRoadsBackToOriginal = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x1EE7063B80FFC77C", _fv(p0), _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5));
};

window.SetRoadsBackToOriginalInAngledArea = function (x1, y1, z1, x2, y2, z2, p6) {
	return _in("0x0027501B9F3B407E", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(p6));
};

window.SetRoadsInAngledArea = function (x1, y1, z1, x2, y2, z2, angle, unknown1, unknown2, unknown3) {
	return _in("0x1A5AA1208AF5DB59", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(angle), unknown1, unknown2, unknown3);
};

window.SetRoadsInArea = function (x1, y1, z1, x2, y2, z2, unknown1, unknown2) {
	return _in("0xBF1A602B5BA52FEE", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), unknown1, unknown2);
};

window.SetRunSprintMultiplierForPlayer = function (player, multiplier) {
	return _in("0x6DB47AA77FD94E09", player, _fv(multiplier));
};

window.SetSaveHouse = function (p0, p1, p2) {
	return _in("0x4F548CABEAE553BC", p0, p1, p2);
};

window.SetSaveMenuActive = function (unk) {
	return _in("0xC9BF75D28165FF77", unk);
};

window.SetScaleformMovieAsNoLongerNeeded = function (scaleformHandle) {
	return _in("0x1D132D614DD86811", _ii(scaleformHandle) /* may be optional */);
};

window.SetScaleformMovieToUseSystemTime = function (scaleform, toggle) {
	return _in("0x6D8EB211944DCE08", scaleform, toggle);
};

window.SetScenarioGroupEnabled = function (scenarioGroup, p1) {
	return _in("0x02C8E5B49848664E", _ts(scenarioGroup), p1);
};

window.SetScenarioPedDensityMultiplierThisFrame = function (p0, p1) {
	return _in("0x7A556143A1C03898", _fv(p0), _fv(p1));
};

window.SetScenarioPedsSpawnInSphereArea = function (p0, p1, p2, p3, p4) {
	return _in("0x28157D43CF600981", p0, p1, p2, p3, p4);
};

window.SetScenarioPedsToBeReturnedByNextCommand = function (value) {
	return _in("0x14F19A8782C8071E", value);
};

window.SetScenarioTypeEnabled = function (scenarioType, toggle) {
	return _in("0xEB47EC4E34FB7EE1", _ts(scenarioType), toggle);
};

window.SetScreenDrawPosition = function (x, y) {
	return _in("0xB8A850F20A067EB6", x, y);
};

window.SetScriptAsNoLongerNeeded = function (scriptName) {
	return _in("0xC90D2DCACD56184C", _ts(scriptName));
};

window.SetScriptVehicleGenerator = function (vehicleGenerator, enabled) {
	return _in("0xD9D620E0AC6DC4B0", vehicleGenerator, enabled);
};

window.SetScriptWithNameHashAsNoLongerNeeded = function (scriptHash) {
	return _in("0xC5BC038960E9DB27", _ch(scriptHash));
};

window.SetScriptedAnimSeatOffset = function (ped, p1) {
	return _in("0x5917BBA32D06C230", ped, _fv(p1));
};

window.SetScriptedConversionCoordThisFrame = function (x, y, z) {
	return _in("0x5086C7843552CF85", _fv(x), _fv(y), _fv(z));
};

window.SetSeethrough = function (toggle) {
	return _in("0x7E08924259E08CE0", toggle);
};

window.SetSequenceToRepeat = function (taskSequence, repeat) {
	return _in("0x58C70CF3A41E4AE7", taskSequence, repeat);
};

window.SetSirenWithNoDriver = function (vehicle, toggle) {
	return _in("0x1FEF0683B96EBCF2", vehicle, toggle);
};

window.SetSnakeoilForEntry = function (name, path, data) {
	return _in("0xa7dd3209", _ts(name), _ts(path), _ts(data));
};

window.SetSomeVehicleDensityMultiplierThisFrame = function (value) {
	return _in("0x90B6DA738A9A25DA", _fv(value));
};

window.SetSpecialAbilityMultiplier = function (multiplier) {
	return _in("0xA49C426ED0CA4AB7", _fv(multiplier));
};

window.SetSrlTime = function (p0) {
	return _in("0xA74A541C6884E7B8", _fv(p0));
};

window.SetStateOfClosestDoorOfType = function (type, x, y, z, locked, heading, p6) {
	return _in("0xF82D8F1926A02C3D", _ch(type), _fv(x), _fv(y), _fv(z), locked, _fv(heading), p6);
};

window.SetStaticEmitterEnabled = function (emitterName, toggle) {
	return _in("0x399D2D3B33F1B8EB", _ts(emitterName), toggle);
};

window.SetStoreEnabled = function (toggle) {
	return _in("0x9641A9FF718E9C5E", toggle);
};

window.SetStreamedTextureDictAsNoLongerNeeded = function (textureDict) {
	return _in("0xBE2CACCF5A8AA805", _ts(textureDict));
};

window.SetStreaming = function (toggle) {
	return _in("0x6E0C692677008888", toggle);
};

window.SetSuperJumpThisFrame = function (player) {
	return _in("0x57FFF03E423A4C0B", player, _r, _ri);
};

window.SetSwimMultiplierForPlayer = function (player, multiplier) {
	return _in("0xA91C6F0FF7D16A13", player, _fv(multiplier));
};

window.SetSynchronizedAudioEventPositionThisFrame = function (p0, p1) {
	return _in("0x950A154B8DAB6185", _ts(p0), p1);
};

window.SetSynchronizedSceneLooped = function (sceneID, toggle) {
	return _in("0xD9A897A4C6C2974F", sceneID, toggle);
};

window.SetSynchronizedSceneOcclusionPortal = function (sceneID, p1) {
	return _in("0x394B9CD12435C981", sceneID, p1);
};

window.SetSynchronizedSceneOrigin = function (sceneID, x, y, z, roll, pitch, yaw, p7) {
	return _in("0x6ACF6B7225801CD7", sceneID, _fv(x), _fv(y), _fv(z), _fv(roll), _fv(pitch), _fv(yaw), p7);
};

window.SetSynchronizedScenePhase = function (sceneID, phase) {
	return _in("0x734292F4F0ABF6D0", sceneID, _fv(phase));
};

window.SetSynchronizedSceneRate = function (sceneID, rate) {
	return _in("0xB6C49F8A5E295A5D", sceneID, _fv(rate));
};

window.SetTaskVehicleChaseBehaviorFlag = function (ped, flag, set) {
	return _in("0xCC665AAC360D31E7", ped, flag, set);
};

window.SetTaskVehicleChaseIdealPursuitDistance = function (ped, distance) {
	return _in("0x639B642FACBE4EDD", ped, _fv(distance));
};

window.SetTaxiLights = function (vehicle, state) {
	return _in("0x598803E85E8448D9", vehicle, state);
};

window.SetTeamPickupObject = function (object, p1, p2) {
	return _in("0x53E0DF1A2A3CF0CA", object, p1, p2);
};

window.SetTextCentre = function (align) {
	return _in("0xC02F4DBFB51D988B", align);
};

window.SetTextChatEnabled = function (enabled) {
	return _in("0x97b2f9f8", enabled, _r);
};

window.SetTextChatUnk = function (p0) {
	return _in("0x1DB21A44B09E8BA3", p0);
};

window.SetTextColour = function (red, green, blue, alpha) {
	return _in("0xBE6B23FFA53FB442", red, green, blue, alpha);
};

window.SetTextDropShadow = function () {
	return _in("0x1CA3E9EAC9D93E5E");
};

window.SetTextDropshadow = function (distance, r, g, b, a) {
	return _in("0x465C84BC39F1C351", distance, r, g, b, a);
};

window.SetTextEdge = function (p0, r, g, b, a) {
	return _in("0x441603240D202FA6", p0, r, g, b, a);
};

window.SetTextFont = function (fontType) {
	return _in("0x66E0276CC5F6B9DA", fontType);
};

window.SetTextJustification = function (justifyType) {
	return _in("0x4E096588B13FFECA", justifyType);
};

window.SetTextLeading = function (p0) {
	return _in("0xA50ABC31E3CDFAFF", p0);
};

window.SetTextOutline = function () {
	return _in("0x2513DFB0FB8400FE");
};

window.SetTextProportional = function (p0) {
	return _in("0x038C1F517D7FDCF8", p0);
};

window.SetTextRenderId = function (renderId) {
	return _in("0x5F15302936E07111", renderId);
};

window.SetTextRightJustify = function (toggle) {
	return _in("0x6B3C4650BC8BEE47", toggle);
};

window.SetTextScale = function (p0, size) {
	return _in("0x07C837F9A01C34C9", _fv(p0), _fv(size));
};

window.SetTextWrap = function (start, end) {
	return _in("0x63145D9C883A1A70", _fv(start), _fv(end));
};

window.SetThisScriptCanBePaused = function (toggle) {
	return _in("0xAA391C728106F7AF", toggle);
};

window.SetThisScriptCanRemoveBlipsCreatedByAnyScript = function (toggle) {
	return _in("0xB98236CAAECEF897", toggle);
};

window.SetTimeExclusiveDisplayTexture = function (p0, p1) {
	return _in("0xFD325494792302D7", p0, p1);
};

window.SetTimeIdleDrop = function (p0, p1) {
	return _in("0x9DFE13ECDC1EC196", p0, p1);
};

window.SetTimeScale = function (time) {
	return _in("0x1D408577D440E81E", _fv(time));
};

window.SetTimecycleModifier = function (modifierName) {
	return _in("0x2C933ABF17A1DF41", _ts(modifierName));
};

window.SetTimecycleModifierStrength = function (strength) {
	return _in("0x82E7FFCD5B2326B3", _fv(strength));
};

window.SetTowTruckCraneHeight = function (towTruck, height) {
	return _in("0xFE54B92A344583CA", towTruck, _fv(height));
};

window.SetTrackedPointInfo = function (point, x, y, z, radius) {
	return _in("0x164ECBB3CF750CB0", point, _fv(x), _fv(y), _fv(z), _fv(radius), _r, _ri);
};

window.SetTrainCruiseSpeed = function (train, speed) {
	return _in("0x16469284DB8C62B5", train, _fv(speed), _r, _ri);
};

window.SetTrainSpeed = function (train, speed) {
	return _in("0xAA0BC91BE0B796E3", train, _fv(speed), _r, _ri);
};

window.SetTransitionTimecycleModifier = function (modifierName, transition) {
	return _in("0x3BCF567485E1971C", _ts(modifierName), _fv(transition));
};

window.SetTvAudioFrontend = function (toggle) {
	return _in("0x113D2C5DC57E1774", toggle);
};

window.SetTvChannel = function (channel) {
	return _in("0xBAABBB23EB6E484E", channel);
};

window.SetTvVolume = function (volume) {
	return _in("0x2982BF73F66E9DDC", _fv(volume));
};

window.SetUnkMapFlag = function (flag) {
	return _in("0xC5F0A8EBD3F361CE", flag);
};

window.SetUseHiDof = function () {
	return _in("0xA13B0222F3D94A94");
};

window.SetUserRadioControlEnabled = function (toggle) {
	return _in("0x19F21E63AE6EAE4E", toggle);
};

window.SetUseridsUihidden = function (p0, p1) {
	return _in("0xEF4CED81CEBEDC6D", p0, _ii(p1) /* may be optional */, _r);
};

window.SetVariableOnSound = function (soundId, p2) {
	return _in("0xAD6B3148A78AE9B6", soundId, _i, _fv(p2));
};

window.SetVariableOnStream = function (p0, p1) {
	return _in("0x2F9D3834AEB9EF79", _ts(p0), _fv(p1));
};

window.SetVehRadioStation = function (vehicle, radioStation) {
	return _in("0x1B9C0099CB942AC6", vehicle, _ts(radioStation));
};

window.SetVehicleAlarm = function (vehicle, state) {
	return _in("0xCDE5E70C1DDB954C", vehicle, state);
};

window.SetVehicleAlarmTimeLeft = function (vehicle, time) {
	return _in("0xc108ee6f", vehicle, time);
};

window.SetVehicleAllowNoPassengersLockon = function (veh, toggle) {
	return _in("0x5D14D4154BFE7B2C", veh, toggle);
};

window.SetVehicleAsNoLongerNeeded = function (vehicle) {
	return _in("0x629BFA74418D6239", _ii(vehicle) /* may be optional */);
};

window.SetVehicleAudio = function (vehicle, audioName) {
	return _in("0x4F0C413926060B38", vehicle, _ts(audioName));
};

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
window.SetVehicleAutoRepairDisabled = function (vehicle, value) {
	return _in("0x5f3a3574", vehicle, value);
};

window.SetVehicleAutomaticallyAttaches = function (vehicle, p1, p2) {
	return _in("0x8BA6F76BC53A1493", vehicle, p1, p2, _r, _ri);
};

window.SetVehicleBodyHealth = function (vehicle, value) {
	return _in("0xB77D05AC8C78AADB", vehicle, _fv(value));
};

window.SetVehicleBoostActive = function (vehicle, Toggle) {
	return _in("0x4A04DE7CAB2739A1", vehicle, Toggle);
};

window.SetVehicleBrakeLights = function (vehicle, toggle) {
	return _in("0x92B35082E0B42F66", vehicle, toggle);
};

window.SetVehicleBurnout = function (vehicle, toggle) {
	return _in("0xFB8794444A7D60FB", vehicle, toggle);
};

window.SetVehicleCanBeTargetted = function (vehicle, state) {
	return _in("0x3750146A28097A82", vehicle, state);
};

window.SetVehicleCanBeUsedByFleeingPeds = function (vehicle, toggle) {
	return _in("0x300504B23BD3B711", vehicle, toggle);
};

window.SetVehicleCanBeVisiblyDamaged = function (vehicle, state) {
	return _in("0x4C7028F78FFD3681", vehicle, state);
};

window.SetVehicleCanBreak = function (vehicle, toggle) {
	return _in("0x59BF8C3D52C92F66", vehicle, toggle);
};

window.SetVehicleCeilingHeight = function (vehicle, p1) {
	return _in("0xA46413066687A328", vehicle, _fv(p1));
};

window.SetVehicleClutch = function (vehicle, clutch) {
	return _in("0x2f70aced", vehicle, _fv(clutch));
};

window.SetVehicleColourCombination = function (vehicle, colorCombination) {
	return _in("0x33E8CD3322E2FE31", vehicle, colorCombination);
};

window.SetVehicleColours = function (vehicle, colorPrimary, colorSecondary) {
	return _in("0x4F1D4BE3A7F24601", vehicle, colorPrimary, colorSecondary);
};

window.SetVehicleCreatesMoneyPickupsWhenExploded = function (vehicle, toggle) {
	return _in("0x068F64F2470F9656", vehicle, toggle);
};

window.SetVehicleCurrentRpm = function (vehicle, rpm) {
	return _in("0x2a01a8fc", vehicle, _fv(rpm));
};

window.SetVehicleCustomPrimaryColour = function (vehicle, r, g, b) {
	return _in("0x7141766F91D15BEA", vehicle, r, g, b);
};

window.SetVehicleCustomSecondaryColour = function (vehicle, r, g, b) {
	return _in("0x36CED73BFED89754", vehicle, r, g, b);
};

window.SetVehicleDamage = function (vehicle, xOffset, yOffset, zOffset, damage, radius, p6) {
	return _in("0xA1DD317EA8FD4F29", vehicle, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(damage), _fv(radius), p6);
};

window.SetVehicleDashboardColour = function (vehicle, color) {
	return _in("0x6089CDF6A57F326C", vehicle, color);
};

window.SetVehicleDeformationFixed = function (vehicle) {
	return _in("0x953DA1E1B12C0491", vehicle);
};

window.SetVehicleDensityMultiplierThisFrame = function (multiplier) {
	return _in("0x245A6883D966D537", _fv(multiplier));
};

window.SetVehicleDirtLevel = function (vehicle, dirtLevel) {
	return _in("0x79D3B596FE44EE8B", vehicle, _fv(dirtLevel));
};

window.SetVehicleDoorBroken = function (vehicle, doorIndex, deleteDoor) {
	return _in("0xD4D4F6A4AB575A33", vehicle, doorIndex, deleteDoor);
};

window.SetVehicleDoorCanBreak = function (vehicle, doorIndex, isBreakable) {
	return _in("0x2FA133A4A9D37ED8", vehicle, doorIndex, isBreakable);
};

window.SetVehicleDoorControl = function (vehicle, doorIndex, speed, angle) {
	return _in("0xF2BFA0430F0A0FCB", vehicle, doorIndex, speed, _fv(angle));
};

window.SetVehicleDoorLatched = function (vehicle, doorIndex, p2, p3, p4) {
	return _in("0xA5A9653A8D2CAF48", vehicle, doorIndex, p2, p3, p4);
};

window.SetVehicleDoorOpen = function (vehicle, doorIndex, loose, openInstantly) {
	return _in("0x7C65DAC73C35C862", vehicle, doorIndex, loose, openInstantly);
};

window.SetVehicleDoorShut = function (vehicle, doorIndex, closeInstantly) {
	return _in("0x93D9BD300D7789E5", vehicle, doorIndex, closeInstantly);
};

window.SetVehicleDoorsLocked = function (vehicle, doorLockStatus) {
	return _in("0xB664292EAECF7FA6", vehicle, doorLockStatus);
};

window.SetVehicleDoorsLockedForAllPlayers = function (vehicle, toggle) {
	return _in("0xA2F80B8D040727CC", vehicle, toggle);
};

window.SetVehicleDoorsLockedForPlayer = function (vehicle, player, toggle) {
	return _in("0x517AAF684BB50CD1", vehicle, player, toggle);
};

window.SetVehicleDoorsLockedForTeam = function (vehicle, team, toggle) {
	return _in("0xB81F6D4A8F5EEBA8", vehicle, team, toggle);
};

window.SetVehicleDoorsShut = function (vehicle, closeInstantly) {
	return _in("0x781B3D62BB013EF5", vehicle, closeInstantly);
};

window.SetVehicleEngineCanDegrade = function (vehicle, toggle) {
	return _in("0x983765856F2564F9", vehicle, toggle);
};

window.SetVehicleEngineHealth = function (vehicle, health) {
	return _in("0x45F6D8EEF34ABEF1", vehicle, _fv(health));
};

window.SetVehicleEngineOn = function (vehicle, value, instantly, otherwise) {
	return _in("0x2497C4717C8B881E", vehicle, value, instantly, otherwise);
};

window.SetVehicleEnginePowerMultiplier = function (vehicle, value) {
	return _in("0x93A3996368C94158", vehicle, _fv(value));
};

window.SetVehicleEngineTemperature = function (vehicle, temperature) {
	return _in("0x6c93c4a9", vehicle, _fv(temperature));
};

window.SetVehicleEngineTorqueMultiplier = function (vehicle, value) {
	return _in("0xB59E4BD37AE292DB", vehicle, _fv(value));
};

window.SetVehicleEnveffScale = function (vehicle, fade) {
	return _in("0x3AFDC536C3D01674", vehicle, _fv(fade));
};

window.SetVehicleExclusiveDriver = function (vehicle, p1) {
	return _in("0x41062318F23ED854", vehicle, p1);
};

window.SetVehicleExclusiveDriver_2 = function (vehicle, ped, p2) {
	return _in("0xB5C51B5502E85E83", vehicle, ped, p2);
};

window.SetVehicleExplodesOnHighExplosionDamage = function (vehicle, toggle) {
	return _in("0x71B0892EC081D60A", vehicle, toggle);
};

window.SetVehicleExtra = function (vehicle, extraId, toggle) {
	return _in("0x7EE3A3C5E4A40CC9", vehicle, extraId, toggle);
};

window.SetVehicleExtraColours = function (vehicle, pearlescentColor, wheelColor) {
	return _in("0x2036F561ADD12E33", vehicle, pearlescentColor, wheelColor);
};

window.SetVehicleFixed = function (vehicle) {
	return _in("0x115722B1B9C14C1C", vehicle);
};

window.SetVehicleForwardSpeed = function (vehicle, speed) {
	return _in("0xAB54A438726D25D5", vehicle, _fv(speed));
};

window.SetVehicleFrictionOverride = function (vehicle, friction) {
	return _in("0x1837AF7C627009BA", vehicle, _fv(friction));
};

window.SetVehicleFuelLevel = function (vehicle, level) {
	return _in("0xba970511", vehicle, _fv(level));
};

window.SetVehicleFullbeam = function (vehicle, toggle) {
	return _in("0x8B7FD87F0DDB421E", vehicle, toggle);
};

window.SetVehicleGravity = function (vehicle, toggle) {
	return _in("0x89F149B6131E57DA", vehicle, toggle);
};

window.SetVehicleGravityAmount = function (vehicle, gravity) {
	return _in("0x1a963e58", vehicle, _fv(gravity));
};

window.SetVehicleHalt = function (vehicle, distance, killEngine, unknown) {
	return _in("0x260BE8F09E326A20", vehicle, _fv(distance), killEngine, unknown);
};

window.SetVehicleHandbrake = function (vehicle, toggle) {
	return _in("0x684785568EF26A22", vehicle, toggle);
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The value to set.
 */
window.SetVehicleHandlingField = function (vehicle, _class, fieldName, value) {
	return _in("0x2ba40795", vehicle, _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The floating-point value to set.
 */
window.SetVehicleHandlingFloat = function (vehicle, _class, fieldName, value) {
	return _in("0x488c86d2", vehicle, _ts(_class), _ts(fieldName), _fv(value));
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The integer value to set.
 */
window.SetVehicleHandlingInt = function (vehicle, _class, fieldName, value) {
	return _in("0xc37f4cf9", vehicle, _ts(_class), _ts(fieldName), value);
};

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param value The Vector3 value to set.
 */
window.SetVehicleHandlingVector = function (vehicle, _class, fieldName, value) {
	return _in("0x12497890", vehicle, _ts(_class), _ts(fieldName), value);
};

window.SetVehicleHasBeenOwnedByPlayer = function (vehicle, owned) {
	return _in("0x2B5F9D2AF1F1722D", vehicle, owned);
};

window.SetVehicleHasStrongAxles = function (vehicle, toggle) {
	return _in("0x92F0CF722BC4202F", vehicle, toggle);
};

window.SetVehicleHighGear = function (vehicle, gear) {
	return _in("0x20b1b3e6", vehicle, gear);
};

window.SetVehicleHudSpecialAbilityBarActive = function (vehicle, p1) {
	return _in("0x99C82F8A139F3E4E", vehicle, p1);
};

window.SetVehicleIndicatorLights = function (vehicle, turnSignal, toggle) {
	return _in("0xB5D45264751B7DF0", vehicle, turnSignal, toggle);
};

window.SetVehicleInteriorColour = function (vehicle, color) {
	return _in("0xF40DD601A65F7F19", vehicle, color);
};

window.SetVehicleInteriorlight = function (vehicle, toggle) {
	return _in("0xBC2042F090AF6AD3", vehicle, toggle);
};

window.SetVehicleIsConsideredByPlayer = function (vehicle, toggle) {
	return _in("0x31B927BBC44156CD", vehicle, toggle);
};

window.SetVehicleIsStolen = function (vehicle, isStolen) {
	return _in("0x67B2C79AA7FF5738", vehicle, isStolen, _r, _ri);
};

window.SetVehicleIsWanted = function (vehicle, state) {
	return _in("0xF7EC25A3EBEEC726", vehicle, state);
};

window.SetVehicleJetEngineOn = function (vehicle, toggle) {
	return _in("0xB8FBC8B1330CA9B4", vehicle, toggle);
};

window.SetVehicleLightMultiplier = function (vehicle, multiplier) {
	return _in("0xB385454F8791F57C", vehicle, _fv(multiplier));
};

window.SetVehicleLights = function (vehicle, state) {
	return _in("0x34E710FF01247C5A", vehicle, state);
};

window.SetVehicleLightsMode = function (vehicle, p1) {
	return _in("0x1FD09E7390A74D54", vehicle, p1);
};

window.SetVehicleLivery = function (vehicle, livery) {
	return _in("0x60BF608F1B8CD1B6", vehicle, livery);
};

window.SetVehicleLodMultiplier = function (vehicle, multiplier) {
	return _in("0x93AE6A61BE015BF1", vehicle, _fv(multiplier));
};

window.SetVehicleMod = function (vehicle, modType, modIndex, customTires) {
	return _in("0x6AF0636DDEDCB6DD", vehicle, modType, modIndex, customTires);
};

window.SetVehicleModColor_1 = function (vehicle, paintType, color, p3) {
	return _in("0x43FEB945EE7F85B8", vehicle, paintType, color, p3);
};

window.SetVehicleModColor_2 = function (vehicle, paintType, color) {
	return _in("0x816562BADFDEC83E", vehicle, paintType, color);
};

window.SetVehicleModKit = function (vehicle, modKit) {
	return _in("0x1F2AA07F00B3217A", vehicle, modKit);
};

window.SetVehicleModelIsSuppressed = function (model, suppressed) {
	return _in("0x0FC2D89AC25A5814", _ch(model), suppressed);
};

window.SetVehicleNameDebug = function (vehicle, name) {
	return _in("0xBFDF984E2C22B94F", vehicle, _ts(name));
};

window.SetVehicleNeedsToBeHotwired = function (vehicle, toggle) {
	return _in("0xFBA550EA44404EE6", vehicle, toggle);
};

window.SetVehicleNeonLightEnabled = function (vehicle, index, toggle) {
	return _in("0x2AA720E4287BF269", vehicle, index, toggle);
};

window.SetVehicleNeonLightsColour = function (vehicle, r, g, b) {
	return _in("0x8E0A582209A62695", vehicle, r, g, b);
};

window.SetVehicleNumberPlateText = function (vehicle, plateText) {
	return _in("0x95A88F0B409CDA47", vehicle, _ts(plateText));
};

window.SetVehicleNumberPlateTextIndex = function (vehicle, plateIndex) {
	return _in("0x9088EB5A43FFB0A1", vehicle, plateIndex);
};

window.SetVehicleOilLevel = function (vehicle, level) {
	return _in("0x90d1cad1", vehicle, _fv(level));
};

window.SetVehicleOnGroundProperly = function (vehicle) {
	return _in("0x49733E92263139D1", vehicle, _r);
};

window.SetVehicleOutOfControl = function (vehicle, killDriver, explodeOnImpact) {
	return _in("0xF19D095E42D430CC", vehicle, killDriver, explodeOnImpact);
};

window.SetVehicleParachuteActive = function (vehicle, active) {
	return _in("0x0BFFB028B3DD0A97", vehicle, active);
};

window.SetVehiclePetrolTankHealth = function (vehicle, health) {
	return _in("0x70DB57649FA8D0D8", vehicle, _fv(health));
};

window.SetVehiclePopulationBudget = function (p0) {
	return _in("0xCB9E1EB3BE2AF4E9", p0);
};

window.SetVehicleProvidesCover = function (vehicle, toggle) {
	return _in("0x5AFEEDD9BB2899D7", vehicle, toggle);
};

window.SetVehicleRadioEnabled = function (vehicle, toggle) {
	return _in("0x3B988190C0AA6C0B", vehicle, toggle);
};

window.SetVehicleRadioLoud = function (vehicle, toggle) {
	return _in("0xBB6F1CAEC68B0BCE", vehicle, toggle);
};

window.SetVehicleReduceGrip = function (vehicle, toggle) {
	return _in("0x222FF6A823D122E2", vehicle, toggle);
};

window.SetVehicleRocketBoostActive = function (vehicle, active) {
	return _in("0x81E1552E35DC3839", vehicle, active);
};

window.SetVehicleRocketBoostPercentage = function (vehicle, percentage) {
	return _in("0xFEB2DDED3509562E", vehicle, _fv(percentage));
};

window.SetVehicleRocketBoostRefillTime = function (vehicle, time) {
	return _in("0xE00F2AB100B76E89", vehicle, _fv(time));
};

window.SetVehicleRudderBroken = function (vehicle, p1) {
	return _in("0x09606148B6C71DEF", vehicle, p1);
};

window.SetVehicleSearchlight = function (heli, toggle, canBeUsedByAI) {
	return _in("0x14E85C5EE7A4D542", heli, toggle, canBeUsedByAI);
};

window.SetVehicleShootAtTarget = function (driver, entity, xTarget, yTarget, zTarget) {
	return _in("0x74CD9A9327A282EA", driver, entity, _fv(xTarget), _fv(yTarget), _fv(zTarget));
};

window.SetVehicleSilent = function (vehicle, toggle) {
	return _in("0x9D44FCCE98450843", vehicle, toggle);
};

window.SetVehicleSiren = function (vehicle, toggle) {
	return _in("0xF4924635A19EB37D", vehicle, toggle);
};

window.SetVehicleSteerBias = function (vehicle, value) {
	return _in("0x42A8EC77D5150CBE", vehicle, _fv(value));
};

window.SetVehicleSteeringAngle = function (vehicle, angle) {
	return _in("0xffccc2ea", vehicle, _fv(angle));
};

window.SetVehicleSteeringScale = function (vehicle, scale) {
	return _in("0xeb46596f", vehicle, _fv(scale));
};

window.SetVehicleStrong = function (vehicle, toggle) {
	return _in("0x3E8C8727991A8A0B", vehicle, toggle);
};

window.SetVehicleTimedExplosion = function (vehicle, ped, toggle) {
	return _in("0x2E0A74E1002380B1", vehicle, ped, toggle);
};

window.SetVehicleTurboPressure = function (vehicle, pressure) {
	return _in("0x6485615e", vehicle, _fv(pressure));
};

window.SetVehicleTyreBurst = function (vehicle, index, onRim, p3) {
	return _in("0xEC6A202EE4960385", vehicle, index, onRim, _fv(p3));
};

window.SetVehicleTyreFixed = function (vehicle, tyreIndex) {
	return _in("0x6E13FC662B882D1D", vehicle, tyreIndex);
};

window.SetVehicleTyreSmokeColor = function (vehicle, r, g, b) {
	return _in("0xB5BA80F839791C0F", vehicle, r, g, b);
};

window.SetVehicleTyresCanBurst = function (vehicle, toggle) {
	return _in("0xEB9DC3C7D8596C46", vehicle, toggle);
};

window.SetVehicleUndriveable = function (vehicle, toggle) {
	return _in("0x8ABA6AF54B942B95", vehicle, toggle);
};

window.SetVehicleWheelHealth = function (vehicle, wheelIndex, health) {
	return _in("0xb22ecefd", vehicle, wheelIndex, _fv(health));
};

window.SetVehicleWheelType = function (vehicle, WheelType) {
	return _in("0x487EB21CC7295BA1", vehicle, WheelType);
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

window.SetVehicleWheelsCanBreak = function (vehicle, enabled) {
	return _in("0x29B18B4FD460CA8F", vehicle, enabled, _r, _ri);
};

window.SetVehicleWheelsCanBreakOffWhenBlowUp = function (vehicle, toggle) {
	return _in("0xA37B9A517B133349", vehicle, toggle);
};

window.SetVehicleWindowTint = function (vehicle, tint) {
	return _in("0x57C51E6BAD752696", vehicle, tint);
};

window.SetWantedLevelDifficulty = function (player, difficulty) {
	return _in("0x9B0BB33B04405E7A", player, _fv(difficulty));
};

window.SetWantedLevelMultiplier = function (multiplier) {
	return _in("0x020E5F00CDA207BA", _fv(multiplier));
};

window.SetWarningMessage = function (entryLine1, instructionalKey, entryLine2, p3, p4, background) {
	return _in("0x7B1776B3B53F8D74", _ts(entryLine1), instructionalKey, _ts(entryLine2), p3, p4, _i, _i, background);
};

window.SetWarningMessage_2 = function (entryHeader, entryLine1, instructionalKey, entryLine2, p4, p5, background) {
	return _in("0xDC38CC1E35B6A5D7", _ts(entryHeader), _ts(entryLine1), instructionalKey, _ts(entryLine2), p4, p5, _i, _i, background);
};

window.SetWarningMessage_3 = function (entryHeader, entryLine1, instructionalKey, entryLine2, p4, p5, p6, p9) {
	return _in("0x701919482C74B5AB", _ts(entryHeader), _ts(entryLine1), instructionalKey, _ts(entryLine2), p4, p5, p6, _i, _i, p9);
};

window.SetWavesIntensity = function (intensity) {
	return _in("0xB96B00E976BE977F", _fv(intensity));
};

window.SetWaypointOff = function () {
	return _in("0xA7E4E2D361C2627F");
};

window.SetWeaponAnimationOverride = function (ped, animStyle) {
	return _in("0x1055AC3A667F09D9", ped, _ch(animStyle));
};

window.SetWeaponObjectTintIndex = function (weapon, tintIndex) {
	return _in("0xF827589017D4E4A9", weapon, tintIndex);
};

window.SetWeaponSmokegrenadeAssigned = function (ped) {
	return _in("0x4B7620C47217126C", ped, _r);
};

window.SetWeatherTypeNow = function (weatherType) {
	return _in("0x29B487C359E19889", _ts(weatherType));
};

window.SetWeatherTypeNowPersist = function (weatherType) {
	return _in("0xED712CA327900C8A", _ts(weatherType));
};

window.SetWeatherTypeOverTime = function (weatherType, time) {
	return _in("0xFB5045B7C42B75BF", _ts(weatherType), _fv(time));
};

window.SetWeatherTypePersist = function (weatherType) {
	return _in("0x704983DF373B198F", _ts(weatherType));
};

window.SetWeatherTypeTransition = function (weatherType1, weatherType2, percentWeather2) {
	return _in("0x578C752848ECFA0C", _ch(weatherType1), _ch(weatherType2), _fv(percentWeather2));
};

window.SetWidescreenBorders = function (p0, p1) {
	return _in("0xDCD4EA924F42D01A", p0, p1, _r, _ri);
};

window.SetWidescreenFormat = function (p0) {
	return _in("0xC3B07BA00A83B0F1", p0);
};

window.SetWind = function (speed) {
	return _in("0xAC3A74E8384A9919", _fv(speed));
};

window.SetWindDirection = function (direction) {
	return _in("0xEB0F4468467B4528", _fv(direction));
};

window.SetWindSpeed = function (speed) {
	return _in("0xEE09ECEDBABE47FC", _fv(speed));
};

window.SetZoneEnabled = function (zoneId, toggle) {
	return _in("0xBA5ECEEA120E5611", zoneId, toggle);
};

window.Set_2dLayer = function (layer) {
	return _in("0x61BB1D9B3A95D802", layer);
};

window.Settimera = function (value) {
	return _in("0xC1B1E9A034A63A62", value);
};

window.Settimerb = function (value) {
	return _in("0x5AE11BC36633DE4E", value);
};

window.ShakeCam = function (cam, type, amplitude) {
	return _in("0x6A25241C340D3822", cam, _ts(type), _fv(amplitude));
};

window.ShakeCinematicCam = function (p0, p1) {
	return _in("0xDCE214D9ED58F3CF", _ts(p0), _fv(p1));
};

window.ShakeGameplayCam = function (shakeName, intensity) {
	return _in("0xFD55E49555E017CF", _ts(shakeName), _fv(intensity));
};

window.ShiftLeft = function (value, bitShift) {
	return _in("0xEDD95A39E5544DE8", value, bitShift, _r, _ri);
};

window.ShiftRight = function (value, bitShift) {
	return _in("0x97EF1E5BCE9DC075", value, bitShift, _r, _ri);
};

window.ShootSingleBulletBetweenCoords = function (x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed) {
	return _in("0x867654CBC7606F2C", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), damage, p7, _ch(weaponHash), ownerPed, isAudible, isInvisible, _fv(speed));
};

window.ShowCursorThisFrame = function () {
	return _in("0xAAE7CE1D63167423");
};

window.ShowHeadingIndicatorOnBlip = function (blip, toggle) {
	return _in("0x5FBCA48327B914DF", blip, toggle);
};

window.ShowHudComponentThisFrame = function (id) {
	return _in("0x0B4DF1FA60C0E664", id);
};

window.ShowLoadingPrompt = function (busySpinnerType) {
	return _in("0xBD12F8228410D9B4", busySpinnerType);
};

window.ShowNumberOnBlip = function (blip, number) {
	return _in("0xA3C0B359DCB848B6", blip, number);
};

window.ShowPedInPauseMenu = function (toggle) {
	return _in("0x4EBB7E87AA0DBED4", toggle);
};

window.ShowSocialClubLegalScreen = function () {
	return _in("0x805D7CBB36FD6C4C");
};

window.ShowWeaponWheel = function (forcedShow) {
	return _in("0xEB354E5376BC81A7", forcedShow);
};

window.ShutdownAndLaunchSinglePlayerGame = function () {
	return _in("0x593850C16A36B692");
};

window.ShutdownCreatorBudget = function () {
	return _in("0xCCE26000E9A6FAD7");
};

window.ShutdownLoadingScreen = function () {
	return _in("0x078EBE9809CCD637");
};

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
window.ShutdownLoadingScreenNui = function () {
	return _in("0xb9234afb");
};

window.SimulatePlayerInputGait = function (player, amount, gaitType, speed, p4, p5) {
	return _in("0x477D5D63E63ECA5D", player, _fv(amount), gaitType, _fv(speed), p4, p5);
};

window.Sin = function (value) {
	return _in("0x0BADBFA3B172435F", _fv(value), _r, _rf);
};

window.SittingTv = function (scaleform) {
	return _in("0xE1E258829A885245", scaleform, _r, _s);
};

window.SkipRadioForward = function () {
	return _in("0x6DDBBDD98E2E9C25");
};

window.SkipTimeInPlaybackRecordedVehicle = function (p0, p1) {
	return _in("0x9438F7AD68771A20", p0, _fv(p1));
};

window.SkipToEndAndStopPlaybackRecordedVehicle = function (p0) {
	return _in("0xAB8E2EDA0C0A5883", p0);
};

window.SkipToNextScriptedConversationLine = function () {
	return _in("0x9663FE6B7A61EB00");
};

window.SlideObject = function (object, toX, toY, toZ, speedX, speedY, speedZ, collision) {
	return _in("0x2FDFF4107B8C1147", object, _fv(toX), _fv(toY), _fv(toZ), _fv(speedX), _fv(speedY), _fv(speedZ), collision, _r);
};

window.SmashVehicleWindow = function (vehicle, index) {
	return _in("0x9E5B5E4D2CCD2259", vehicle, index, _r, _ri);
};

window.SoundVehicleHornThisFrame = function (vehicle) {
	return _in("0x9C11908013EA4715", vehicle);
};

window.SpecialAbilityChargeAbsolute = function (player, p1, p2) {
	return _in("0xB7B0870EB531D08D", player, p1, p2);
};

window.SpecialAbilityChargeContinuous = function (player, p2) {
	return _in("0xED481732DFF7E997", player, p2);
};

window.SpecialAbilityChargeLarge = function (player, p1, p2) {
	return _in("0xF733F45FA4497D93", player, p1, p2);
};

window.SpecialAbilityChargeMedium = function (player, p1, p2) {
	return _in("0xF113E3AA9BC54613", player, p1, p2);
};

window.SpecialAbilityChargeNormalized = function (player, normalizedValue, p2) {
	return _in("0xA0696A65F009EE18", player, _fv(normalizedValue), p2);
};

window.SpecialAbilityChargeSmall = function (player, p1, p2) {
	return _in("0x2E7B9B683481687D", player, p1, p2);
};

window.SpecialAbilityDeactivate = function (player) {
	return _in("0xD6A953C6D1492057", player);
};

window.SpecialAbilityDeactivateFast = function (player) {
	return _in("0x9CB5CE07A3968D5A", player);
};

window.SpecialAbilityDepleteMeter = function (player, p1) {
	return _in("0x1D506DBBBC51E64B", player, p1);
};

window.SpecialAbilityFillMeter = function (player, p1) {
	return _in("0x3DACA8DDC6FD4980", player, p1);
};

window.SpecialAbilityLock = function (playerModel) {
	return _in("0x6A09D0D590A47D13", _ch(playerModel));
};

window.SpecialAbilityReset = function (player) {
	return _in("0x375F0E738F861A94", player);
};

window.SpecialAbilityUnlock = function (playerModel) {
	return _in("0xF145F3BE2EFA9A3B", _ch(playerModel));
};

window.SpecialFrontendEqual = function (x, y, z) {
	return _in("0x21442F412E8DE56B", _fv(x), _fv(y), _fv(z));
};

window.Sqrt = function (value) {
	return _in("0x71D93B57D07F9804", _fv(value), _r, _rf);
};

window.StartAlarm = function (alarmName, p2) {
	return _in("0x0355EF116C4C97B2", _ts(alarmName), p2);
};

window.StartAudioScene = function (scene) {
	return _in("0x013A80FC08F6E4F2", _ts(scene), _r);
};

window.StartCutscene = function (p0) {
	return _in("0x186D5CB5E7B0FF7B", p0);
};

window.StartCutsceneAtCoords = function (x, y, z, p3) {
	return _in("0x1C9ADDA3244A1FBF", _fv(x), _fv(y), _fv(z), p3);
};

window.StartEntityFire = function (entity) {
	return _in("0xF6A9D9708F6F23DF", entity, _r, _ri);
};

window.StartFindKvp = function (prefix) {
	return _in("0xdd379006", _ts(prefix), _r, _ri);
};

window.StartFiringAmnesty = function (duration) {
	return _in("0xBF9BD71691857E48", duration);
};

window.StartNewScript = function (scriptName, stackSize) {
	return _in("0xE81651AD79516E48", _ts(scriptName), stackSize, _r, _ri);
};

window.StartNewScriptWithArgs = function (scriptName, argCount, stackSize) {
	return _in("0xB8BA7F44DF1575E1", _ts(scriptName), _i, argCount, stackSize, _r, _ri);
};

window.StartNewScriptWithNameHash = function (scriptHash, stackSize) {
	return _in("0xEB1C67C3A5333A92", _ch(scriptHash), stackSize, _r, _ri);
};

window.StartNewScriptWithNameHashAndArgs = function (scriptHash, argCount, stackSize) {
	return _in("0xC4BB298BD441BE78", _ch(scriptHash), _i, argCount, stackSize, _r, _ri);
};

window.StartParticleFxLoopedAtCoord = function (effectName, x, y, z, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis, p11) {
	return _in("0xE184F4F0DC5910E7", _ts(effectName), _fv(x), _fv(y), _fv(z), _fv(xRot), _fv(yRot), _fv(zRot), _fv(scale), xAxis, yAxis, zAxis, p11, _r, _ri);
};

window.StartParticleFxLoopedOnEntity = function (effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {
	return _in("0x1AE42C1660FD6517", _ts(effectName), entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(xRot), _fv(yRot), _fv(zRot), _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxLoopedOnEntityBone = function (effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {
	return _in("0xC6EB449E33977F0B", _ts(effectName), entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(xRot), _fv(yRot), _fv(zRot), boneIndex, _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxLoopedOnEntityBone_2 = function (effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {
	return _in("0xDDE23F30CC5A0F03", _ts(effectName), entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(xRot), _fv(yRot), _fv(zRot), boneIndex, _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxLoopedOnEntity_2 = function (effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {
	return _in("0x6F60E89A7B64EE1D", _ts(effectName), entity, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(xRot), _fv(yRot), _fv(zRot), _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxLoopedOnPedBone = function (effectName, ped, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {
	return _in("0xF28DA9F38CD1787C", _ts(effectName), ped, _fv(xOffset), _fv(yOffset), _fv(zOffset), _fv(xRot), _fv(yRot), _fv(zRot), boneIndex, _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxNonLoopedAtCoord = function (effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {
	return _in("0x25129531F77B9ED3", _ts(effectName), _fv(xPos), _fv(yPos), _fv(zPos), _fv(xRot), _fv(yRot), _fv(zRot), _fv(scale), xAxis, yAxis, zAxis, _r, _ri);
};

window.StartParticleFxNonLoopedAtCoord_2 = function (effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {
	return _in("0xF56B8137DF10135D", _ts(effectName), _fv(xPos), _fv(yPos), _fv(zPos), _fv(xRot), _fv(yRot), _fv(zRot), _fv(scale), xAxis, yAxis, zAxis, _r);
};

window.StartParticleFxNonLoopedOnEntity = function (effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ) {
	return _in("0x0D53A3B8DA0809D2", _ts(effectName), entity, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(scale), axisX, axisY, axisZ, _r);
};

window.StartParticleFxNonLoopedOnEntity_2 = function (effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ) {
	return _in("0xC95EB1DB6E92113D", _ts(effectName), entity, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(scale), axisX, axisY, axisZ, _r);
};

window.StartParticleFxNonLoopedOnPedBone = function (effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ) {
	return _in("0x0E7E72961BA18619", _ts(effectName), ped, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _fv(rotX), _fv(rotY), _fv(rotZ), boneIndex, _fv(scale), axisX, axisY, axisZ, _r);
};

window.StartParticleFxNonLoopedOnPedBone_2 = function (effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ) {
	return _in("0xA41B6A43642AC2CF", _ts(effectName), ped, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _fv(rotX), _fv(rotY), _fv(rotZ), boneIndex, _fv(scale), axisX, axisY, axisZ, _r);
};

window.StartPlaybackRecordedVehicle = function (vehicle, p1, playback, p3) {
	return _in("0x3F878F92B3A7A071", vehicle, p1, _ts(playback), p3);
};

window.StartPlaybackRecordedVehicleUsingAi = function (p0, p1, p3, p4) {
	return _in("0x29DE5FA52D00428C", p0, p1, _i, _fv(p3), p4);
};

window.StartPlaybackRecordedVehicleWithFlags = function (vehicle, p1, playback, p3, p4, p5) {
	return _in("0x7D80FD645D4DA346", vehicle, p1, _ts(playback), p3, p4, p5);
};

window.StartPlayerSwitch = function (from, to, flags, switchType) {
	return _in("0xFAA23F2CBA159D67", from, to, flags, switchType);
};

window.StartPlayerTeleport = function (player, x, y, z, heading, p5, p6, p7) {
	return _in("0xAD15F075A4DA0FDE", player, _fv(x), _fv(y), _fv(z), _fv(heading), p5, p6, p7);
};

window.StartPreloadedConversation = function () {
	return _in("0x23641AFE870AF385");
};

window.StartRecording = function (mode) {
	return _in("0xC3AC2FFF9612AC81", mode);
};

window.StartRopeUnwindingFront = function (rope) {
	return _in("0x538D1179EC1AA9A9", rope);
};

window.StartRopeWinding = function (rope) {
	return _in("0x1461C72C889E343E", rope);
};

window.StartSaveArray = function (p1, arrayName) {
	return _in("0x60FE567DF1B1AF9D", _i, p1, _ts(arrayName));
};

window.StartSaveData = function (p1, p2) {
	return _in("0xA9575F812C6A7997", _i, p1, p2);
};

window.StartSaveStruct = function (p1, structName) {
	return _in("0xBF737600CDDBEADD", _i, p1, _ts(structName));
};

window.StartScreenEffect = function (effectName, duration, looped) {
	return _in("0x2206BF9A37B7F724", _ts(effectName), duration, looped);
};

window.StartScriptConversation = function (p0, p1, p2, p3) {
	return _in("0x6B17C62C9635D2DC", p0, p1, p2, p3);
};

window.StartScriptFire = function (X, Y, Z, maxChildren, isGasFire) {
	return _in("0x6B83617E04503888", _fv(X), _fv(Y), _fv(Z), maxChildren, isGasFire, _r, _ri);
};

window.StartScriptPhoneConversation = function (p0, p1) {
	return _in("0x252E5F915EABB675", p0, p1);
};

window.StartShapeTestBound = function (entity, flags1, flags2) {
	return _in("0x37181417CE7C8900", entity, flags1, flags2, _r, _ri);
};

window.StartShapeTestBoundingBox = function (entity, flags1, flags2) {
	return _in("0x052837721A854EC7", entity, flags1, flags2, _r, _ri);
};

window.StartShapeTestBox = function (x, y, z, x1, y2, z2, rotX, rotY, rotZ, p9, p10, entity, p12) {
	return _in("0xFE466162C4401D18", _fv(x), _fv(y), _fv(z), _fv(x1), _fv(y2), _fv(z2), _fv(rotX), _fv(rotY), _fv(rotZ), p9, p10, entity, p12, _r, _ri);
};

window.StartShapeTestCapsule = function (x1, y1, z1, x2, y2, z2, radius, flags, entity, p9) {
	return _in("0x28579D1B8F8AAC80", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(radius), flags, entity, p9, _r, _ri);
};

window.StartShapeTestLosProbe = function (x1, y1, z1, x2, y2, z2, flags, entity, p8) {
	return _in("0x7EE9F5D83DD4F90E", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), flags, entity, p8, _r, _ri);
};

window.StartShapeTestRay = function (x1, y1, z1, x2, y2, z2, flags, entity, p8) {
	return _in("0x377906D8A31E5586", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), flags, entity, p8, _r, _ri);
};

window.StartVehicleAlarm = function (vehicle) {
	return _in("0xB8FF7AB45305C345", vehicle, _r, _ri);
};

window.StartVehicleHorn = function (vehicle, duration, mode, forever) {
	return _in("0x9C8C6504B5B63D2C", vehicle, duration, _ch(mode), forever);
};

window.StatClearSlotForReload = function (statSlot) {
	return _in("0xEB0A72181D4AA4AD", statSlot, _r, _ri);
};

window.StatDeleteSlot = function (p0) {
	return _in("0x49A49BED12794D70", p0, _r, _ri);
};

window.StatGetBool = function (statHash, p2) {
	return _in("0x11B5E6D2AE73F48E", _ch(statHash), _i /* actually bool */, p2, _r);
};

window.StatGetBoolMasked = function (statName, mask, p2) {
	return _in("0x10FE3F1B79F9B071", _ch(statName), mask, p2, _r);
};

window.StatGetDate = function (statHash, p2, p3) {
	return _in("0x8B0FACEFC36C824B", _ch(statHash), _i, p2, p3, _r);
};

window.StatGetFloat = function (statHash, p2) {
	return _in("0xD7AE6C9C9C6AC54C", _ch(statHash), _f, p2, _r);
};

window.StatGetInt = function (statHash, p2) {
	return _in("0x767FBC2AC802EF3D", _ch(statHash), _i, p2, _r);
};

window.StatGetLicensePlate = function (statName) {
	return _in("0x5473D4195058B2E4", _ch(statName), _r, _s);
};

window.StatGetMaskedInt = function (p0, p2, p3, p4) {
	return _in("0x655185A06D9EEAAB", p0, _i, p2, p3, p4, _r);
};

window.StatGetNumberOfDays = function (statName) {
	return _in("0xE0E854F5280FB769", _ch(statName), _r, _ri);
};

window.StatGetNumberOfHours = function (statName) {
	return _in("0xF2D4B2FE415AAFC3", _ch(statName), _r, _ri);
};

window.StatGetNumberOfMinutes = function (statName) {
	return _in("0x7583B4BE4C5A41B5", _ch(statName), _r, _ri);
};

window.StatGetNumberOfSeconds = function (statName) {
	return _in("0x2CE056FF3723F00B", _ch(statName), _r, _ri);
};

window.StatGetPos = function (p0, p4) {
	return _in("0x350F82CCB186AA1B", p0, _i, _i, _i, p4, _r);
};

window.StatGetString = function (statHash, p1) {
	return _in("0xE50384ACC2C3DB74", _ch(statHash), p1, _r, _s);
};

window.StatGetUserId = function (p0) {
	return _in("0x2365C388E393BBE2", p0, _r, _s);
};

window.StatIncrement = function (statName, value) {
	return _in("0x9B5A68C6489E9909", _ch(statName), _fv(value));
};

window.StatLoad = function (p0) {
	return _in("0xA651443F437B1CE6", p0, _r);
};

window.StatLoadPending = function (p0) {
	return _in("0xA1750FFAFA181661", p0, _r);
};

window.StatSave = function (p0, p1, p2) {
	return _in("0xE07BCA305B82D2FD", p0, p1, p2, _r);
};

window.StatSavePending = function () {
	return _in("0x7D3A583856F2C5AC", _r, _ri);
};

window.StatSavePendingOrRequested = function () {
	return _in("0xBBB6AD006F1BBEA3", _r, _ri);
};

window.StatSetBool = function (statName, value, save) {
	return _in("0x4B33C4243DE0C432", _ch(statName), value, save, _r);
};

window.StatSetBoolMasked = function (statName, value, mask, save) {
	return _in("0x5BC62EC1937B9E5B", _ch(statName), value, mask, save, _r);
};

window.StatSetCurrentPosixTime = function (statName, p1) {
	return _in("0xC2F84B7F9C4D0C61", _ch(statName), p1, _r);
};

window.StatSetDate = function (statName, numFields, save) {
	return _in("0x2C29BFB64F4FCBE4", _ch(statName), _i, numFields, save, _r);
};

window.StatSetFloat = function (statName, value, save) {
	return _in("0x4851997F37FE9B3C", _ch(statName), _fv(value), save, _r);
};

window.StatSetGxtLabel = function (statName, value, save) {
	return _in("0x17695002FD8B2AE0", _ch(statName), _ts(value), save, _r);
};

window.StatSetInt = function (statName, value, save) {
	return _in("0xB3271D7AB655B441", _ch(statName), value, save, _r);
};

window.StatSetLicensePlate = function (statName, str) {
	return _in("0x69FF13266D7296DA", _ch(statName), _ts(str), _r);
};

window.StatSetMaskedInt = function (statName, p1, p2, p3, save) {
	return _in("0x7BBB1B54583ED410", _ch(statName), p1, p2, p3, save, _r);
};

window.StatSetPos = function (statName, x, y, z, save) {
	return _in("0xDB283FDE680FE72E", _ch(statName), _fv(x), _fv(y), _fv(z), save, _r);
};

window.StatSetProfileSetting = function (profileSetting, value) {
	return _in("0x68F01422BE1D838F", profileSetting, value);
};

window.StatSetString = function (statName, value, save) {
	return _in("0xA87B2335D12531D7", _ch(statName), _ts(value), save, _r);
};

window.StatSetUserId = function (statName, value, save) {
	return _in("0x8CDDF1E452BABE11", _ch(statName), _ts(value), save, _r);
};

window.StatSlotIsLoaded = function (p0) {
	return _in("0x0D0A9F0E7BD91E3C", p0, _r);
};

window.SteerUnlockBias = function (vehicle, toggle) {
	return _in("0x07116E24E9D1929D", vehicle, toggle);
};

window.StopAlarm = function (alarmName, toggle) {
	return _in("0xA1CADDCD98415A41", _ts(alarmName), toggle);
};

window.StopAllAlarms = function (stop) {
	return _in("0x2F794A877ADD4C92", stop);
};

window.StopAllGarageActivity = function () {
	return _in("0x0F87E938BDF29D66");
};

window.StopAllScreenEffects = function () {
	return _in("0xB4EDDC19532BFB85");
};

window.StopAnimPlayback = function (ped, p1, p2) {
	return _in("0xEE08C992D238C5D1", ped, p1, p2);
};

window.StopAnimTask = function (ped, animDictionary, animationName, p3) {
	return _in("0x97FF36A1D40EA00A", ped, _ts(animDictionary), _ts(animationName), _fv(p3));
};

window.StopAnyPedModelBeingSuppressed = function () {
	return _in("0xB47BD05FA66B40CF");
};

window.StopAudioScene = function (scene) {
	return _in("0xDFE8422B3B94E688", _ts(scene));
};

window.StopAudioScenes = function () {
	return _in("0xBAC7FC81A75EC1A1");
};

window.StopCamPointing = function (cam) {
	return _in("0xF33AB75780BA57DE", cam);
};

window.StopCamShaking = function (cam, p1) {
	return _in("0xBDECF64367884AC3", cam, p1);
};

window.StopCinematicCamShaking = function (p0) {
	return _in("0x2238E588E588A6D7", p0);
};

window.StopCinematicShot = function (p0) {
	return _in("0x7660C6E75D3A078E", p0);
};

window.StopCurrentPlayingAmbientSpeech = function (ped) {
	return _in("0xB8BEC0CA6F0EDB0F", ped);
};

window.StopCutscene = function (p0) {
	return _in("0xC7272775B4DC786E", p0);
};

window.StopCutsceneCamShaking = function () {
	return _in("0xDB629FFD9285FA06");
};

window.StopCutsceneImmediately = function () {
	return _in("0xD220BDD222AC4A1E");
};

window.StopEntityAnim = function (entity, animation, animGroup, p3) {
	return _in("0x28004F88151E03E0", entity, _ts(animation), _ts(animGroup), _fv(p3), _r, _ri);
};

window.StopEntityFire = function (entity) {
	return _in("0x7F0DD2EBBB651AFF", entity);
};

window.StopFireInRange = function (x, y, z, radius) {
	return _in("0x056A8A219B8E829F", _fv(x), _fv(y), _fv(z), _fv(radius));
};

window.StopGameplayCamShaking = function (p0) {
	return _in("0x0EF93E9F3D08C178", p0);
};

window.StopGameplayHint = function (p0) {
	return _in("0xF46C581C61718916", p0);
};

window.StopPadShake = function (p0) {
	return _in("0x38C16A305E8CDC8D", p0);
};

window.StopParticleFxLooped = function (ptfxHandle, p1) {
	return _in("0x8F75998877616996", ptfxHandle, p1);
};

window.StopPedRingtone = function (ped) {
	return _in("0x6C5AE23EFA885092", ped);
};

window.StopPedSpeaking = function (ped, shaking) {
	return _in("0x9D64D7405520E3D3", ped, shaking);
};

window.StopPedWeaponFiringWhenDropped = function (ped) {
	return _in("0xC158D28142A34608", ped);
};

window.StopPlaybackRecordedVehicle = function (p0) {
	return _in("0x54833611C17ABDEA", p0);
};

window.StopPlayerSwitch = function () {
	return _in("0x95C0A5BBDC189AA1");
};

window.StopPlayerTeleport = function () {
	return _in("0xC449EDED9D73009C");
};

window.StopRecordingAndDiscardClip = function () {
	return _in("0x88BB3507ED41A240");
};

window.StopRecordingAndSaveClip = function () {
	return _in("0x071A5197D6AFC8B3");
};

window.StopRopeUnwindingFront = function (rope) {
	return _in("0xFFF3A50779EFBBB3", rope);
};

window.StopRopeWinding = function (rope) {
	return _in("0xCB2D4AB84A19AA7C", rope);
};

window.StopSaveArray = function () {
	return _in("0x04456F95153C6BE4");
};

window.StopSaveData = function () {
	return _in("0x74E20C9145FB66FD");
};

window.StopSaveStruct = function () {
	return _in("0xEB1774DF12BB9F12");
};

window.StopScreenEffect = function (effectName) {
	return _in("0x068E835A1D0DC0E3", _ts(effectName));
};

window.StopScriptGlobalShaking = function (p0) {
	return _in("0x1C9D7949FA533490", p0);
};

window.StopScriptedConversation = function (p0) {
	return _in("0xD79DEEFB53455EBA", p0, _r, _ri);
};

window.StopSound = function (soundId) {
	return _in("0xA3B0C41BA5CC0BB5", soundId);
};

window.StopStream = function () {
	return _in("0xA4718A1419D18151");
};

window.StopSynchronizedAudioEvent = function (p0) {
	return _in("0x92D6A88E64A94430", p0, _r);
};

window.StopSynchronizedEntityAnim = function (entity, p1, p2) {
	return _in("0x43D3807C077261E3", entity, _fv(p1), p2, _r);
};

window.StopSynchronizedMapEntityAnim = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x11E79CAB7183B6F5", _fv(p0), _fv(p1), _fv(p2), _fv(p3), p4, _fv(p5), _r);
};

window.StringToInt = function (string, outInteger) {
	return _in("0x5A5F40FE637EB584", _ts(string), _ii(outInteger) /* may be optional */, _r);
};

window.SuppressAgitationEventsNextFrame = function () {
	return _in("0x5F3B7749C112D552");
};

window.SuppressShockingEventTypeNextFrame = function (type) {
	return _in("0x3FD2EC8BF1F1CF30", type);
};

window.SuppressShockingEventsNextFrame = function () {
	return _in("0x2F9A292AD0A3BD89");
};

window.SwitchCrimeType = function (player, p1) {
	return _in("0x9A987297ED8BD838", player, p1);
};

window.SwitchOutPlayer = function (ped, flags, unknown) {
	return _in("0xAAB3200ED59016BC", ped, flags, unknown);
};

window.SwitchTrainTrack = function (intersectionId, state) {
	return _in("0xFD813BB7DB977F20", intersectionId, state, _r, _ri);
};

window.Tan = function (p0) {
	return _in("0x632106CC96E82E91", _fv(p0), _r, _rf);
};

window.TaskAchieveHeading = function (ped, heading, timeout) {
	return _in("0x93B93A37987F1F3D", ped, _fv(heading), timeout);
};

window.TaskAimGunAtCoord = function (ped, x, y, z, time, p5, p6) {
	return _in("0x6671F3EEC681BDA1", ped, _fv(x), _fv(y), _fv(z), time, p5, p6);
};

window.TaskAimGunAtEntity = function (ped, entity, duration, p3) {
	return _in("0x9B53BB6E8943AF53", ped, entity, duration, p3);
};

window.TaskAimGunScripted = function (ped, scriptTask, p2, p3) {
	return _in("0x7A192BE16D373D00", ped, _ch(scriptTask), p2, p3);
};

window.TaskAimGunScriptedWithTarget = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x8605AF0DE8B3A5AC", p0, p1, _fv(p2), _fv(p3), _fv(p4), p5, p6, p7);
};

window.TaskArrestPed = function (ped, target) {
	return _in("0xF3B9A78A178572B1", ped, target);
};

window.TaskBoatMission = function (pedDriver, boat, p2, p3, x, y, z, p7, maxSpeed, drivingStyle, p10, p11) {
	return _in("0x15C86013127CE63F", pedDriver, boat, p2, p3, _fv(x), _fv(y), _fv(z), p7, _fv(maxSpeed), drivingStyle, _fv(p10), p11);
};

window.TaskChatToPed = function (ped, target, p2, p3, p4, p5, p6, p7) {
	return _in("0x8C338E0263E4FD19", ped, target, p2, _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7));
};

window.TaskClearDefensiveArea = function (p0) {
	return _in("0x95A6C46A31D1917D", p0);
};

window.TaskClearLookAt = function (ped) {
	return _in("0x0F804F1DB19B9689", ped);
};

window.TaskClimb = function (ped, unused) {
	return _in("0x89D9FCC2435112F1", ped, unused);
};

window.TaskClimbLadder = function (ped, p1) {
	return _in("0xB6C987F9285A3814", ped, p1);
};

window.TaskCombatHatedTargetsAroundPed = function (ped, radius, p2) {
	return _in("0x7BF835BB9E2698C8", ped, _fv(radius), p2);
};

window.TaskCombatHatedTargetsAroundPedTimed = function (p0, p1, p2, p3) {
	return _in("0x2BBA30B854534A0C", p0, _fv(p1), p2, p3);
};

window.TaskCombatHatedTargetsInArea = function (ped, x, y, z, radius, p5) {
	return _in("0x4CF5F55DAC3280A0", ped, _fv(x), _fv(y), _fv(z), _fv(radius), p5);
};

window.TaskCombatPed = function (ped, targetPed, p2, p3) {
	return _in("0xF166E48407BAC484", ped, targetPed, p2, p3);
};

window.TaskCombatPedTimed = function (p0, ped, p2, p3) {
	return _in("0x944F30DCB7096BDE", p0, ped, p2, p3);
};

window.TaskCower = function (ped, duration) {
	return _in("0x3EB1FE9E8E908E15", ped, duration);
};

window.TaskDriveBy = function (driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, p8, firingPattern) {
	return _in("0x2F8AF0E82773A171", driverPed, targetPed, targetVehicle, _fv(targetX), _fv(targetY), _fv(targetZ), _fv(distanceToShoot), pedAccuracy, p8, _ch(firingPattern));
};

window.TaskEnterVehicle = function (ped, vehicle, timeout, seat, speed, p5, p6) {
	return _in("0xC20E50AA46D09CA8", ped, vehicle, timeout, seat, _fv(speed), p5, p6);
};

window.TaskEveryoneLeaveVehicle = function (vehicle) {
	return _in("0x7F93691AB4B92272", vehicle);
};

window.TaskExitCover = function (p0, p1, p2, p3, p4) {
	return _in("0x79B258E397854D29", p0, p1, _fv(p2), _fv(p3), _fv(p4));
};

window.TaskExtendRoute = function (x, y, z) {
	return _in("0x1E7889778264843A", _fv(x), _fv(y), _fv(z));
};

window.TaskFlushRoute = function () {
	return _in("0x841142A1376E9006");
};

window.TaskFollowNavMeshToCoord = function (ped, x, y, z, speed, timeout, stoppingRange, persistFollowing, unk) {
	return _in("0x15D3A79D4E44B913", ped, _fv(x), _fv(y), _fv(z), _fv(speed), timeout, _fv(stoppingRange), persistFollowing, _fv(unk));
};

window.TaskFollowNavMeshToCoordAdvanced = function (ped, x, y, z, speed, timeout, unkFloat, unkInt, unkX, unkY, unkZ, unk_40000f) {
	return _in("0x17F58B88D085DBAC", ped, _fv(x), _fv(y), _fv(z), _fv(speed), timeout, _fv(unkFloat), unkInt, _fv(unkX), _fv(unkY), _fv(unkZ), _fv(unk_40000f));
};

window.TaskFollowPointRoute = function (ped, speed, unknown) {
	return _in("0x595583281858626E", ped, _fv(speed), unknown);
};

window.TaskFollowToOffsetOfEntity = function (ped, entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing) {
	return _in("0x304AE42E357B8C7E", ped, entity, _fv(offsetX), _fv(offsetY), _fv(offsetZ), _fv(movementSpeed), timeout, _fv(stoppingRange), persistFollowing);
};

window.TaskFollowWaypointRecording = function (p0, p1, p2, p3, p4) {
	return _in("0x0759591819534F7B", p0, p1, p2, p3, p4);
};

window.TaskForceMotionState = function (ped, state, p2) {
	return _in("0x4F056E1AFFEF17AB", ped, _ch(state), p2);
};

window.TaskGetOffBoat = function (ped, boat) {
	return _in("0x9C00E77AF14B2DFF", ped, boat);
};

window.TaskGoStraightToCoord = function (ped, x, y, z, speed, timeout, targetHeading, distanceToSlide) {
	return _in("0xD76B57B44F1E6F8B", ped, _fv(x), _fv(y), _fv(z), _fv(speed), timeout, _fv(targetHeading), _fv(distanceToSlide));
};

window.TaskGoStraightToCoordRelativeToEntity = function (entity1, entity2, p2, p3, p4, p5, p6) {
	return _in("0x61E360B7E040D12E", entity1, entity2, _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6);
};

window.TaskGoToCoordAndAimAtHatedEntitiesNearCoord = function (pedHandle, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, unkTrue, unkFlag, aimingFlag, firingPattern) {
	return _in("0xA55547801EB331FC", pedHandle, _fv(goToLocationX), _fv(goToLocationY), _fv(goToLocationZ), _fv(focusLocationX), _fv(focusLocationY), _fv(focusLocationZ), _fv(speed), shootAtEnemies, _fv(distanceToStopAt), _fv(noRoadsDistance), unkTrue, unkFlag, aimingFlag, _ch(firingPattern));
};

window.TaskGoToCoordAnyMeans = function (ped, x, y, z, speed, p5, p6, walkingStyle, p8) {
	return _in("0x5BC448CB78FA3E88", ped, _fv(x), _fv(y), _fv(z), _fv(speed), p5, p6, walkingStyle, _fv(p8));
};

window.TaskGoToCoordAnyMeansExtraParams = function (ped, x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11) {
	return _in("0x1DD45F9ECFDB1BC9", ped, _fv(x), _fv(y), _fv(z), _fv(speed), p5, p6, walkingStyle, _fv(p8), p9, p10, p11);
};

window.TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed = function (ped, x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11, p12) {
	return _in("0xB8ECD61F531A7B02", ped, _fv(x), _fv(y), _fv(z), _fv(speed), p5, p6, walkingStyle, _fv(p8), p9, p10, p11, p12);
};

window.TaskGoToCoordWhileAimingAtCoord = function (ped, x, y, z, aimAtX, aimAtY, aimAtZ, moveSpeed, p8, p9, p10, p11, flags, p13, firingPattern) {
	return _in("0x11315AB3385B8AC0", ped, _fv(x), _fv(y), _fv(z), _fv(aimAtX), _fv(aimAtY), _fv(aimAtZ), _fv(moveSpeed), p8, _fv(p9), _fv(p10), p11, flags, p13, _ch(firingPattern));
};

window.TaskGoToCoordWhileAimingAtEntity = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13) {
	return _in("0xB2A16444EAD9AE47", p0, _fv(p1), _fv(p2), _fv(p3), p4, _fv(p5), p6, _fv(p7), _fv(p8), p9, p10, p11, p12, p13);
};

window.TaskGoToEntity = function (entity, target, duration, distance, speed, p5, p6) {
	return _in("0x6A071245EB0D1882", entity, target, duration, _fv(distance), _fv(speed), _fv(p5), p6);
};

window.TaskGoToEntityWhileAimingAtCoord = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
	return _in("0x04701832B739DCE5", p0, p1, _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _fv(p7), _fv(p8), p9, p10, p11);
};

window.TaskGoToEntityWhileAimingAtEntity = function (ped, entityToWalkTo, entityToAimAt, speed, shootatEntity, p5, p6, p7, p8, firingPattern) {
	return _in("0x97465886D35210E9", ped, entityToWalkTo, entityToAimAt, _fv(speed), shootatEntity, _fv(p5), _fv(p6), p7, p8, _ch(firingPattern));
};

window.TaskGotoEntityAiming = function (ped, target, distanceToStopAt, StartAimingDist) {
	return _in("0xA9DA48FAB8A76C12", ped, target, _fv(distanceToStopAt), _fv(StartAimingDist));
};

window.TaskGotoEntityOffset = function (ped, p1, p2, x, y, z, duration) {
	return _in("0xE39B4FF4FDEBDE27", ped, p1, p2, _fv(x), _fv(y), _fv(z), duration);
};

window.TaskGotoEntityOffsetXy = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x338E7EF52B6095A9", p0, p1, p2, _fv(p3), _fv(p4), _fv(p5), _fv(p6), p7);
};

window.TaskGuardAssignedDefensiveArea = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xD2A207EEBDF9889B", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6);
};

window.TaskGuardCurrentPosition = function (p0, p1, p2, p3) {
	return _in("0x4A58A47A72E3FCB4", p0, _fv(p1), _fv(p2), p3);
};

window.TaskGuardSphereDefensiveArea = function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
	return _in("0xC946FE14BE0EB5E2", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), p6, _fv(p7), _fv(p8), _fv(p9), _fv(p10));
};

window.TaskHandsUp = function (ped, duration, facingPed, p3, p4) {
	return _in("0xF2EAB31979A7F910", ped, duration, facingPed, p3, p4);
};

window.TaskHeliChase = function (pilot, entityToFollow, x, y, z) {
	return _in("0xAC83B1DB38D0ADA0", pilot, entityToFollow, _fv(x), _fv(y), _fv(z));
};

window.TaskHeliMission = function (pilot, vehicle, vehicleToFollow, pedToFollow, posX, posY, posZ, mode, speed, radius, angle, p11, height, p13, p14) {
	return _in("0xDAD029E187A2BEB4", pilot, vehicle, vehicleToFollow, pedToFollow, _fv(posX), _fv(posY), _fv(posZ), mode, _fv(speed), _fv(radius), _fv(angle), p11, height, _fv(p13), p14);
};

window.TaskJump = function (ped, unused) {
	return _in("0x0AE4086104E067B1", ped, unused);
};

window.TaskLeaveAnyVehicle = function (ped, p1, p2) {
	return _in("0x504D54DF3F6F2247", ped, p1, p2);
};

window.TaskLeaveVehicle = function (ped, vehicle, flags) {
	return _in("0xD3DBCE61A490BE02", ped, vehicle, flags);
};

window.TaskLookAtCoord = function (entity, x, y, z, duration, p5, p6) {
	return _in("0x6FA46612594F7973", entity, _fv(x), _fv(y), _fv(z), _fv(duration), p5, p6);
};

window.TaskLookAtEntity = function (ped, lookAt, duration, unknown1, unknown2) {
	return _in("0x69F4BE8C8CC4796C", ped, lookAt, duration, unknown1, unknown2);
};

window.TaskMoveNetwork = function (ped, task, multiplier, p3, animDict, flags) {
	return _in("0x2D537BA194896636", ped, _ts(task), _fv(multiplier), p3, _ts(animDict), flags);
};

window.TaskMoveNetworkAdvanced = function (ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, animDict, flags) {
	return _in("0xD5B35BEA41919ACB", ped, _ts(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), p8, _fv(p9), p10, _ts(animDict), flags);
};

window.TaskOpenVehicleDoor = function (ped, vehicle, timeOut, doorIndex, speed) {
	return _in("0x965791A9A488A062", ped, vehicle, timeOut, doorIndex, _fv(speed));
};

window.TaskParachute = function (ped, p1) {
	return _in("0xD2F1C53C97EE81AB", ped, p1);
};

window.TaskParachuteToTarget = function (ped, x, y, z) {
	return _in("0xB33E291AFA6BD03A", ped, _fv(x), _fv(y), _fv(z));
};

window.TaskPatrol = function (ped, p1, p2, p3, p4) {
	return _in("0xBDA5DF49D080FE4E", ped, _ts(p1), p2, p3, p4);
};

window.TaskPause = function (ped, ms) {
	return _in("0xE73A266DB0CA9042", ped, ms);
};

window.TaskPedSlideToCoord = function (ped, x, y, z, heading, p5) {
	return _in("0xD04FE6765D990A06", ped, _fv(x), _fv(y), _fv(z), _fv(heading), _fv(p5));
};

window.TaskPedSlideToCoordHdgRate = function (ped, x, y, z, heading, p5, p6) {
	return _in("0x5A4A6A6D3DC64F52", ped, _fv(x), _fv(y), _fv(z), _fv(heading), _fv(p5), _fv(p6));
};

window.TaskPerformSequence = function (ped, taskSequence) {
	return _in("0x5ABA3986D90D8A3B", ped, taskSequence, _r, _ri);
};

window.TaskPerformSequenceFromProgress = function (p0, p1, p2, p3) {
	return _in("0x89221B16730234F0", p0, p1, p2, p3);
};

window.TaskPlaneChase = function (pilot, entityToFollow, x, y, z) {
	return _in("0x2D2386F273FF7A25", pilot, entityToFollow, _fv(x), _fv(y), _fv(z));
};

window.TaskPlaneLand = function (pilot, plane, runwayStartX, runwayStartY, runwayStartZ, runwayEndX, runwayEndY, runwayEndZ) {
	return _in("0xBF19721FA34D32C0", pilot, plane, _fv(runwayStartX), _fv(runwayStartY), _fv(runwayStartZ), _fv(runwayEndX), _fv(runwayEndY), _fv(runwayEndZ));
};

window.TaskPlaneMission = function (pilot, plane, targetVehicle, targetPed, destinationX, destinationY, destinationZ, missionType, vehicleSpeed, p9, heading, maxAltitude, minAltitude) {
	return _in("0x23703CD154E83B88", pilot, plane, targetVehicle, targetPed, _fv(destinationX), _fv(destinationY), _fv(destinationZ), missionType, _fv(vehicleSpeed), _fv(p9), _fv(heading), _fv(maxAltitude), _fv(minAltitude));
};

window.TaskPlantBomb = function (ped, x, y, z, heading) {
	return _in("0x965FEC691D55E9BF", ped, _fv(x), _fv(y), _fv(z), _fv(heading));
};

window.TaskPlayAnim = function (ped, animDictionary, animationName, speed, speedMultiplier, duration, flag, playbackRate, lockX, lockY, lockZ) {
	return _in("0xEA47FE3719165B94", ped, _ts(animDictionary), _ts(animationName), _fv(speed), _fv(speedMultiplier), duration, flag, _fv(playbackRate), lockX, lockY, lockZ);
};

window.TaskPlayAnimAdvanced = function (ped, animDict, animName, posX, posY, posZ, rotX, rotY, rotZ, speed, speedMultiplier, duration, flag, animTime, p14, p15) {
	return _in("0x83CDB10EA29B370B", ped, _ts(animDict), _ts(animName), _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(speed), _fv(speedMultiplier), duration, flag, _fv(animTime), p14, p15);
};

window.TaskPlayPhoneGestureAnimation = function (ped, animDict, animation, boneMaskType, p4, p5, p6, p7) {
	return _in("0x8FBB6758B3B3E9EC", ped, _ts(animDict), _ts(animation), _ts(boneMaskType), _fv(p4), _fv(p5), p6, p7);
};

window.TaskPutPedDirectlyIntoCover = function (ped, x, y, z, timeout, p5, p6, p7, p8, p9, p10) {
	return _in("0x4172393E6BE1FECE", ped, _fv(x), _fv(y), _fv(z), timeout, p5, _fv(p6), p7, p8, p9, p10);
};

window.TaskPutPedDirectlyIntoMelee = function (ped, meleeTarget, p2, p3, p4, p5) {
	return _in("0x1C6CD14A876FFE39", ped, meleeTarget, _fv(p2), _fv(p3), _fv(p4), p5);
};

window.TaskRappelFromHeli = function (ped, unused) {
	return _in("0x09693B0312F91649", ped, unused);
};

window.TaskReactAndFleePed = function (ped, fleeTarget) {
	return _in("0x72C896464915D1B1", ped, fleeTarget);
};

window.TaskReloadWeapon = function (ped, unused) {
	return _in("0x62D2916F56B9CD2D", ped, unused);
};

window.TaskScriptedAnimation = function (ped, p4, p5) {
	return _in("0x126EF75F1E17ABE5", ped, _i, _i, _i, _fv(p4), _fv(p5));
};

window.TaskSeekCoverFromPed = function (ped, target, duration, p3) {
	return _in("0x84D32B3BEC531324", ped, target, duration, p3);
};

window.TaskSeekCoverFromPos = function (ped, x, y, z, duration, p5) {
	return _in("0x75AC2B60386D89F2", ped, _fv(x), _fv(y), _fv(z), duration, p5);
};

window.TaskSeekCoverToCoords = function (ped, x1, y1, z1, x2, y2, z2, p7, p8) {
	return _in("0x39246A6958EF072C", ped, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), p7, p8);
};

window.TaskSeekCoverToCoverPoint = function (p0, p1, p2, p3, p4, p5, p6) {
	return _in("0xD43D95C7A869447F", p0, p1, _fv(p2), _fv(p3), _fv(p4), p5, p6);
};

window.TaskSetBlockingOfNonTemporaryEvents = function (ped, toggle) {
	return _in("0x90D2156198831D69", ped, toggle);
};

window.TaskSetDecisionMaker = function (p0, p1) {
	return _in("0xEB8517DDA73720DA", p0, _ch(p1));
};

window.TaskSetSphereDefensiveArea = function (p0, p1, p2, p3, p4) {
	return _in("0x933C06518B52A9A4", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4));
};

window.TaskShockingEventReact = function (ped, eventHandle) {
	return _in("0x452419CBD838065B", ped, eventHandle);
};

window.TaskShootAtCoord = function (ped, x, y, z, duration, firingPattern) {
	return _in("0x46A6CC01E0826106", ped, _fv(x), _fv(y), _fv(z), duration, _ch(firingPattern));
};

window.TaskShootAtEntity = function (entity, target, duration, firingPattern) {
	return _in("0x08DA95E8298AE772", entity, target, duration, _ch(firingPattern));
};

window.TaskShuffleToNextVehicleSeat = function (ped, vehicle) {
	return _in("0x7AA80209BDA643EB", ped, vehicle);
};

window.TaskSkyDive = function (ped) {
	return _in("0x601736CFE536B0A0", ped);
};

window.TaskSmartFleeCoord = function (ped, x, y, z, distance, time, p6, p7) {
	return _in("0x94587F17E9C365D5", ped, _fv(x), _fv(y), _fv(z), _fv(distance), time, p6, p7);
};

window.TaskSmartFleePed = function (ped, fleeTarget, distance, fleeTime, p4, p5) {
	return _in("0x22B0D0E37CCB840D", ped, fleeTarget, _fv(distance), fleeTime, p4, p5);
};

window.TaskStandGuard = function (ped, x, y, z, heading, scenarioName) {
	return _in("0xAE032F8BBA959E90", ped, _fv(x), _fv(y), _fv(z), _fv(heading), _ts(scenarioName));
};

window.TaskStandStill = function (ped, time) {
	return _in("0x919BE13EED931959", ped, time);
};

window.TaskStartScenarioAtPosition = function (ped, scenarioName, x, y, z, heading, duration, sittingScenario, teleport) {
	return _in("0xFA4EFC79F69D4F07", ped, _ts(scenarioName), _fv(x), _fv(y), _fv(z), _fv(heading), duration, sittingScenario, teleport);
};

window.TaskStartScenarioInPlace = function (ped, scenarioName, unkDelay, playEnterAnim) {
	return _in("0x142A02425FF02BD9", ped, _ts(scenarioName), unkDelay, playEnterAnim);
};

window.TaskStayInCover = function (ped) {
	return _in("0xE5DA8615A6180789", ped);
};

window.TaskStealthKill = function (killer, target, killType, p3, p4) {
	return _in("0xAA5DC05579D60BD9", killer, target, _ch(killType), _fv(p3), p4, _r, _ri);
};

window.TaskStopPhoneGestureAnimation = function (ped) {
	return _in("0x3FA00D4F4641BFAE", ped);
};

window.TaskSwapWeapon = function (ped, p1) {
	return _in("0xA21C51255B205245", ped, p1);
};

window.TaskSweepAimEntity = function (ped, anim, p2, p3, p4, p5, vehicle, p7, p8) {
	return _in("0x2047C02158D6405A", ped, _ts(anim), _ts(p2), _ts(p3), _ts(p4), p5, vehicle, _fv(p7), _fv(p8));
};

window.TaskSweepAimPosition = function (p0, p5, p6, p7, p8, p9, p10) {
	return _in("0x7AFE8FDC10BC07D2", p0, _i, _i, _i, _i, p5, _fv(p6), _fv(p7), _fv(p8), _fv(p9), _fv(p10));
};

window.TaskSynchronizedScene = function (ped, scene, animDictionary, animationName, speed, speedMultiplier, duration, flag, playbackRate, p9) {
	return _in("0xEEA929141F699854", ped, scene, _ts(animDictionary), _ts(animationName), _fv(speed), _fv(speedMultiplier), duration, flag, _fv(playbackRate), p9);
};

window.TaskThrowProjectile = function (ped, x, y, z) {
	return _in("0x7285951DBF6B5A51", ped, _fv(x), _fv(y), _fv(z));
};

window.TaskToggleDuck = function (p0, p1) {
	return _in("0xAC96609B9995EDF8", p0, p1);
};

window.TaskTurnPedToFaceCoord = function (ped, x, y, z, duration) {
	return _in("0x1DDA930A0AC38571", ped, _fv(x), _fv(y), _fv(z), duration);
};

window.TaskTurnPedToFaceEntity = function (ped, entity, duration) {
	return _in("0x5AD23D40115353AC", ped, entity, duration);
};

window.TaskUseMobilePhone = function (ped, p1) {
	return _in("0xBD2A8EC3AF4DE7DB", ped, p1);
};

window.TaskUseMobilePhoneTimed = function (ped, duration) {
	return _in("0x5EE02954A14C69DB", ped, duration);
};

window.TaskUseNearestScenarioChainToCoord = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x9FDA1B3D7E7028B3", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), p5);
};

window.TaskUseNearestScenarioChainToCoordWarp = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x97A28E63F0BA5631", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), p5);
};

window.TaskUseNearestScenarioToCoord = function (ped, x, y, z, distance, duration) {
	return _in("0x277F471BA9DB000B", ped, _fv(x), _fv(y), _fv(z), _fv(distance), duration);
};

window.TaskUseNearestScenarioToCoordWarp = function (ped, x, y, z, radius, p5) {
	return _in("0x58E2E0F23F6B76C3", ped, _fv(x), _fv(y), _fv(z), _fv(radius), p5);
};

window.TaskVehicleAimAtCoord = function (ped, x, y, z) {
	return _in("0x447C1E9EF844BC0F", ped, _fv(x), _fv(y), _fv(z));
};

window.TaskVehicleAimAtPed = function (ped, target) {
	return _in("0xE41885592B08B097", ped, target);
};

window.TaskVehicleChase = function (driver, targetEnt) {
	return _in("0x3C08A8E30363B353", driver, targetEnt);
};

window.TaskVehicleDriveToCoord = function (ped, vehicle, x, y, z, speed, p6, vehicleModel, drivingMode, stopRange, p10) {
	return _in("0xE2A2AA2F659D77A7", ped, vehicle, _fv(x), _fv(y), _fv(z), _fv(speed), p6, _ch(vehicleModel), drivingMode, _fv(stopRange), _fv(p10));
};

window.TaskVehicleDriveToCoordLongrange = function (ped, vehicle, x, y, z, speed, driveMode, stopRange) {
	return _in("0x158BB33F920D360C", ped, vehicle, _fv(x), _fv(y), _fv(z), _fv(speed), driveMode, _fv(stopRange));
};

window.TaskVehicleDriveWander = function (ped, vehicle, speed, drivingStyle) {
	return _in("0x480142959D337D00", ped, vehicle, _fv(speed), drivingStyle);
};

window.TaskVehicleEscort = function (ped, vehicle, targetVehicle, mode, speed, drivingStyle, minDistance, p7, noRoadsDistance) {
	return _in("0x0FA6E4B75F302400", ped, vehicle, targetVehicle, mode, _fv(speed), drivingStyle, _fv(minDistance), p7, _fv(noRoadsDistance));
};

window.TaskVehicleFollow = function (driver, vehicle, targetEntity, drivingStyle, speed, minDistance) {
	return _in("0xFC545A9F0626E3B6", driver, vehicle, targetEntity, drivingStyle, _fv(speed), minDistance);
};

window.TaskVehicleFollowWaypointRecording = function (ped, vehicle, WPRecording, p3, p4, p5, p6, p7, p8, p9) {
	return _in("0x3123FAA6DB1CF7ED", ped, vehicle, _ts(WPRecording), p3, p4, p5, p6, _fv(p7), p8, _fv(p9));
};

window.TaskVehicleGotoNavmesh = function (ped, vehicle, x, y, z, speed, behaviorFlag, stoppingRange) {
	return _in("0x195AEEB13CEFE2EE", ped, vehicle, _fv(x), _fv(y), _fv(z), _fv(speed), behaviorFlag, _fv(stoppingRange));
};

window.TaskVehicleHeliProtect = function (pilot, vehicle, entityToFollow, targetSpeed, p4, radius, altitude, p7) {
	return _in("0x1E09C32048FEFD1C", pilot, vehicle, entityToFollow, _fv(targetSpeed), p4, _fv(radius), altitude, p7);
};

window.TaskVehicleMission = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x659427E0EF36BCDE", p0, p1, p2, p3, _fv(p4), p5, _fv(p6), _fv(p7), p8);
};

window.TaskVehicleMissionCoorsTarget = function (ped, vehicle, x, y, z, p5, p6, p7, p8, p9, p10) {
	return _in("0xF0AF20AA7731F8C3", ped, vehicle, _fv(x), _fv(y), _fv(z), p5, p6, p7, _fv(p8), _fv(p9), p10);
};

window.TaskVehicleMissionPedTarget = function (ped, vehicle, pedTarget, mode, maxSpeed, drivingStyle, minDistance, p7, p8) {
	return _in("0x9454528DF15D657A", ped, vehicle, pedTarget, mode, _fv(maxSpeed), drivingStyle, _fv(minDistance), _fv(p7), p8);
};

window.TaskVehiclePark = function (ped, vehicle, x, y, z, heading, mode, radius, keepEngineOn) {
	return _in("0x0F3E34E968EA374E", ped, vehicle, _fv(x), _fv(y), _fv(z), _fv(heading), mode, _fv(radius), keepEngineOn);
};

window.TaskVehiclePlayAnim = function (vehicle, animation_set, animation_name) {
	return _in("0x69F5C3BD0F3EBD89", vehicle, _ts(animation_set), _ts(animation_name));
};

window.TaskVehicleShootAtCoord = function (ped, x, y, z, p4) {
	return _in("0x5190796ED39C9B6D", ped, _fv(x), _fv(y), _fv(z), _fv(p4));
};

window.TaskVehicleShootAtPed = function (ped, target, p2) {
	return _in("0x10AB107B887214D8", ped, target, _fv(p2));
};

window.TaskVehicleTempAction = function (driver, vehicle, action, time) {
	return _in("0xC429DCEEB339E129", driver, vehicle, action, time);
};

window.TaskWanderInArea = function (ped, x, y, z, radius, minimalLength, timeBetweenWalks) {
	return _in("0xE054346CA3A0F315", ped, _fv(x), _fv(y), _fv(z), _fv(radius), _fv(minimalLength), _fv(timeBetweenWalks));
};

window.TaskWanderStandard = function (ped, p1, p2) {
	return _in("0xBB9CE077274F6A1B", ped, _fv(p1), p2);
};

window.TaskWarpPedIntoVehicle = function (ped, vehicle, seat) {
	return _in("0x9A7D091411C5F684", ped, vehicle, seat);
};

window.TaskWrithe = function (ped, target, time, p3) {
	return _in("0xCDDC2B77CE54AC6E", ped, target, time, p3);
};

window.TerminateAllScriptsWithThisName = function (scriptName) {
	return _in("0x9DC711BC69C548DF", _ts(scriptName));
};

window.TerminateThisThread = function () {
	return _in("0x1090044AD1DA76FA");
};

window.TerminateThread = function (threadId) {
	return _in("0xC8B189ED9138BCD4", threadId);
};

window.TestProbeAgainstAllWater = function (p0, p1, p2, p3, p4, p5, p6, p7) {
	return _in("0x8974647ED222EA5F", p0, p1, p2, p3, p4, p5, p6, p7, _r);
};

window.TestProbeAgainstWater = function (x1, y1, z1, x2, y2, z2, result) {
	return _in("0xFFA5D878809819DB", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _v, _r);
};

window.TestVerticalProbeAgainstAllWater = function (x, y, z, p3, p4) {
	return _in("0x2B3451FA1E3142E2", _fv(x), _fv(y), _fv(z), p3, _ii(p4) /* may be optional */, _r);
};

window.TextureDownloadGetName = function (p0) {
	return _in("0x3448505B6E35262D", p0, _r, _s);
};

window.TextureDownloadHasFailed = function (p0) {
	return _in("0x5776ED562C134687", p0, _r);
};

window.TextureDownloadRelease = function (p0) {
	return _in("0x487EB90B98E9FB19", p0);
};

window.TextureDownloadRequest = function (FilePath, Name, p3) {
	return _in("0x16160DA74A8E74A2", _i, _ts(FilePath), _ts(Name), p3, _r, _ri);
};

window.Timera = function () {
	return _in("0x83666F9FB8FEBD4B", _r, _ri);
};

window.Timerb = function () {
	return _in("0xC9D9444186B5A374", _r, _ri);
};

window.Timestep = function () {
	return _in("0x0000000050597EE2", _r, _rf);
};

window.ToFloat = function (value) {
	return _in("0xBBDA792448DB5A89", value, _r, _rf);
};

window.ToggleStealthRadar = function (toggle) {
	return _in("0x6AFDFB93754950C7", toggle);
};

window.ToggleVehicleMod = function (vehicle, modType, toggle) {
	return _in("0x2A1F4F37F95BAD08", vehicle, modType, toggle);
};

window.TrackObjectVisibility = function (p0) {
	return _in("0xB252BC036B525623", p0);
};

window.TrackVehicleVisibility = function (vehicle) {
	return _in("0x64473AEFDCF47DCA", vehicle);
};

window.TransitionFromBlurred = function (transitionTime) {
	return _in("0xEFACC8AEF94430D5", _fv(transitionTime), _r);
};

window.TransitionToBlurred = function (transitionTime) {
	return _in("0xA328A24AAA6B7FDC", _fv(transitionTime), _r);
};

/**
 * The backing function for TriggerEvent.
 */
window.TriggerEventInternal = function (eventName, eventPayload, payloadLength) {
	return _in("0x91310870", _ts(eventName), _ts(eventPayload), payloadLength);
};

window.TriggerMusicEvent = function (eventName) {
	return _in("0x706D57B0F50DA710", _ts(eventName), _r);
};

window.TriggerScriptEvent = function (p0, argCount, bitset) {
	return _in("0x5AE99C571D5BBE5D", p0, _i, argCount, bitset);
};

/**
 * The backing function for TriggerServerEvent.
 */
window.TriggerServerEventInternal = function (eventName, eventPayload, payloadLength) {
	return _in("0x7fdd1128", _ts(eventName), _ts(eventPayload), payloadLength);
};

window.UnblockDecisionMakerEvent = function (name, type) {
	return _in("0xD7CD9CF34F2C99E8", _ch(name), type);
};

window.UncuffPed = function (ped) {
	return _in("0x67406F2C8F87FC4F", ped);
};

window.UnfreezeRadioStation = function (radioStation) {
	return _in("0xFC00454CF60B91DD", _ts(radioStation));
};

window.UnkGetInteriorAtCoords = function (x, y, z, unk) {
	return _in("0xF0F77ADB9F67E79D", _fv(x), _fv(y), _fv(z), unk, _r, _ri);
};

window.UnlockMinimapAngle = function () {
	return _in("0x8183455E16C42E3A");
};

window.UnlockMinimapPosition = function () {
	return _in("0x3E93E06DB8EF1F30");
};

window.UnlockMissionNewsStory = function (newsStory) {
	return _in("0xB165AB7C248B2DC1", newsStory);
};

window.UnpausePlaybackRecordedVehicle = function (p0) {
	return _in("0x8879EE09268305D5", p0);
};

window.UnpinInterior = function (interiorID) {
	return _in("0x261CCE7EED010641", interiorID);
};

window.UnpinRopeVertex = function (rope, vertex) {
	return _in("0x4B5AE2EEE4A8F180", rope, vertex, _r, _ri);
};

window.UnregisterPedheadshot = function (ped) {
	return _in("0x96B1361D9B24C2FF", ped);
};

window.UnregisterScriptWithAudio = function () {
	return _in("0xA8638BE228D4751A");
};

window.UpdateNavmeshBlockingObject = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	return _in("0x109E99373F290687", p0, _fv(p1), _fv(p2), _fv(p3), _fv(p4), _fv(p5), _fv(p6), _fv(p7), p8);
};

window.UpdateOnscreenKeyboard = function () {
	return _in("0x0CF2B696BBF945AE", _r, _ri);
};

window.UpdatePedHeadBlendData = function (ped, shapeMix, skinMix, thirdMix) {
	return _in("0x723538F61C647C5A", ped, _fv(shapeMix), _fv(skinMix), _fv(thirdMix));
};

window.UpdateTaskAimGunScriptedTarget = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x9724FB59A3E72AD0", p0, p1, _fv(p2), _fv(p3), _fv(p4), p5);
};

window.UpdateTaskHandsUpDuration = function (ped, duration) {
	return _in("0xA98FCAFD7893C834", ped, duration);
};

window.UpdateTaskSweepAimEntity = function (ped, entity) {
	return _in("0xE4973DBDBE6E44B3", ped, entity);
};

window.UpdateTaskSweepAimPosition = function (p0, p1, p2, p3) {
	return _in("0xBB106883F5201FC4", p0, _fv(p1), _fv(p2), _fv(p3));
};

window.UseFreemodeMapBehavior = function (toggle) {
	return _in("0x9BAE5AD2508DF078", toggle);
};

window.UseParticleFxAssetNextCall = function (name) {
	return _in("0x6C38AF3693A69A91", _ts(name));
};

window.UsePlayerColourInsteadOfTeamColour = function (toggle) {
	return _in("0x5FFE9B4144F9712F", toggle);
};

window.UseSirenAsHorn = function (vehicle, toggle) {
	return _in("0xFA932DE350266EF8", vehicle, toggle);
};

window.UseWaypointRecordingAsAssistedMovementRoute = function (p1, p2, p3) {
	return _in("0x5A353B8E6B1095B5", _i, p1, _fv(p2), _fv(p3));
};

window.UsingMissionCreator = function (toggle) {
	return _in("0xF14878FC50BEC6EE", toggle);
};

window.UsingNetworkWeapontype = function (p0) {
	return _in("0xE26CCFF8094D8C74", p0, _r);
};

window.Vdist = function (x1, y1, z1, x2, y2, z2) {
	return _in("0x2A488C176D52CCA5", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r, _rf);
};

window.Vdist2 = function (x1, y1, z1, x2, y2, z2) {
	return _in("0xB7A628320EFF8E47", _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _r, _rf);
};

window.VehToNet = function (vehicle) {
	return _in("0xB4C94523F023419C", vehicle, _r, _ri);
};

window.VehicleHasLandingGear = function (vehicle) {
	return _in("0x4198AB0022B15F87", vehicle, _r);
};

/**
 * parachuteModel = 230075693
 */
window.VehicleSetCustomParachuteModel = function (vehicle, parachuteModel) {
	return _in("0x4D610C6B56031351", vehicle, _ch(parachuteModel));
};

/**
 * colorIndex = 0
 */
window.VehicleSetCustomParachuteTexture = function (vehicle, colorIndex) {
	return _in("0xA74AD2439468C883", vehicle, colorIndex);
};

window.VehicleWaypointPlaybackOverrideSpeed = function (p0, p1) {
	return _in("0x121F0593E0A431D7", p0, _fv(p1));
};

window.VehicleWaypointPlaybackPause = function (p0) {
	return _in("0x8A4E6AC373666BC5", p0);
};

window.VehicleWaypointPlaybackResume = function (p0) {
	return _in("0xDC04FCAA7839D492", p0);
};

window.VehicleWaypointPlaybackUseDefaultSpeed = function (p0) {
	return _in("0x5CEB25A7D2848963", p0);
};

window.Vmag = function (x, y, z) {
	return _in("0x652D2EEEF1D3E62C", _fv(x), _fv(y), _fv(z), _r, _rf);
};

window.Vmag2 = function (x, y, z) {
	return _in("0xA8CEACB4F35AE058", _fv(x), _fv(y), _fv(z), _r, _rf);
};

window.Wait = function (ms) {
	return _in("0x4EDE34FBADD967A6", ms);
};

window.WasCounterActivated = function (vehicle, p1) {
	return _in("0x3EC8BF18AA453FE9", vehicle, p1, _r);
};

window.WasCutsceneSkipped = function () {
	return _in("0x40C8656EDAEDD569", _r);
};

/**
 * Returns whether or not the currently executing event was canceled. See https://wiki.fivem.net/wiki/WasEventCanceled
 * @return A boolean.
 */
window.WasEventCanceled = function () {
	return _in("0x58382a19", _r);
};

window.WasPedKilledByStealth = function (ped) {
	return _in("0xF9800AA1A771B000", ped, _r);
};

window.WasPedKilledByTakedown = function (ped) {
	return _in("0x7F08E26039C7347C", ped, _r);
};

window.WasPedSkeletonUpdated = function (ped) {
	return _in("0x11B499C1E0FF8559", ped, _r);
};

window.WashDecalsFromVehicle = function (vehicle, p1) {
	return _in("0x5B712761429DBC14", vehicle, _fv(p1));
};

window.WashDecalsInRange = function (p0, p1, p2, p3, p4) {
	return _in("0x9C30613D50A6ADEF", p0, p1, p2, p3, p4);
};

window.WaypointPlaybackGetIsPaused = function (p0) {
	return _in("0x701375A7D43F01CB", p0, _r);
};

window.WaypointPlaybackOverrideSpeed = function (p0, p1, p2) {
	return _in("0x7D7D2B47FA788E85", p0, _fv(p1), p2);
};

window.WaypointPlaybackPause = function (p0, p1, p2) {
	return _in("0x0F342546AA06FED5", p0, p1, p2);
};

window.WaypointPlaybackResume = function (p0, p1, p2, p3) {
	return _in("0x244F70C84C547D2D", p0, p1, p2, p3);
};

window.WaypointPlaybackStartAimingAtCoord = function (p0, p1, p2, p3, p4) {
	return _in("0x8968400D900ED8B3", p0, _fv(p1), _fv(p2), _fv(p3), p4);
};

window.WaypointPlaybackStartAimingAtPed = function (p0, p1, p2) {
	return _in("0x20E330937C399D29", p0, p1, p2);
};

window.WaypointPlaybackStartShootingAtCoord = function (p0, p1, p2, p3, p4, p5) {
	return _in("0x057A25CFCC9DB671", p0, _fv(p1), _fv(p2), _fv(p3), p4, p5);
};

window.WaypointPlaybackStopAimingOrShooting = function (p0) {
	return _in("0x47EFA040EBB8E2EA", p0);
};

window.WaypointPlaybackUseDefaultSpeed = function (p0) {
	return _in("0x6599D834B12D0800", p0);
};

window.WaypointRecordingGetClosestWaypoint = function (name, x, y, z, point) {
	return _in("0xB629A298081F876F", _ts(name), _fv(x), _fv(y), _fv(z), _ii(point) /* may be optional */, _r);
};

window.WaypointRecordingGetCoord = function (name, point, coord) {
	return _in("0x2FB897405C90B361", _ts(name), point, _v, _r);
};

window.WaypointRecordingGetNumPoints = function (name, points) {
	return _in("0x5343532C01A07234", _ts(name), _ii(points) /* may be optional */, _r);
};

window.WaypointRecordingGetSpeedAtPoint = function (name, point) {
	return _in("0x005622AEBC33ACA9", _ts(name), point, _r, _rf);
};

window.WouldEntityBeOccluded = function (entityModelHash, x, y, z, p4) {
	return _in("0xEE5D2A122E09EC42", _ch(entityModelHash), _fv(x), _fv(y), _fv(z), p4, _r);
};

