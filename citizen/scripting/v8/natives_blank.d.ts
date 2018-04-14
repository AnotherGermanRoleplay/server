/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntryByHash(entryKey: string | number, entryText: string): void;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param fnName A function in the overlay's TIMELINE.
 * @param miniMap The minimap overlay ID.
 */
declare function CallMinimapScaleformFunction(miniMap: number, fnName: string): number;

declare function CanRegisterMissionPickups(p0: number): number;

declare function CanVehicleParachuteBeActivated(vehicle: number): number;

/**
 * Cancels the currently executing event. See https://wiki.fivem.net/wiki/CancelEvent
 */
declare function CancelEvent(): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

declare function DeleteResourceKvp(key: string): void;

declare function DoesVehicleHaveDoor(vehicle: number, doorIndex: number): number;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

declare function EndFindKvp(handle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function ExecuteCommand(commandString: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneCreate(data: string, objectId: number, tree: string): number;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneSync(entity: number, data: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneCreate(entity: number): string;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneSync(entity: number): string;

declare function FindFirstObject(outEntity: number): number;

declare function FindFirstPed(outEntity: number): number;

declare function FindFirstPickup(outEntity: number): number;

declare function FindFirstVehicle(outEntity: number): number;

declare function FindKvp(handle: number): string;

declare function FindNextObject(findHandle: number, outEntity: number): number;

declare function FindNextPed(findHandle: number, outEntity: number): number;

declare function FindNextPickup(findHandle: number, outEntity: number): number;

declare function FindNextVehicle(findHandle: number, outEntity: number): number;

declare function GetAllVehicles(vehArray: number): number;

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
declare function GetCamMatrix(camera: number): [number[], number[], number[], number[]];

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

declare function GetEntryPositionOfDoor(vehicle: number, doorIndex: number): number[];

declare function GetHasLowerableWheels(vehicle: number): number;

declare function GetInstanceId(): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

declare function GetNumResources(): number;

declare function GetNumberOfVehicleDoors(vehicle: number): number;

declare function GetPedAmmoTypeFromWeapon_2(ped: number, weaponHash: string | number): number;

declare function GetPlayerFromServerId(serverId: number): number;

declare function GetPlayerServerId(player: number): number;

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
declare function GetRegisteredCommands(): any;

declare function GetResourceByFindIndex(findIndex: number): string;

declare function GetResourceKvpFloat(key: string): number;

declare function GetResourceKvpInt(key: string): number;

declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key in the resource manifest.
 * @param resourceName The resource name.
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 */
declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;

declare function GetVehicleAcceleration(vehicle: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

declare function GetVehicleClutch(vehicle: number): number;

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleDashboardColour(vehicle: number, color: number): void;

declare function GetVehicleDashboardSpeed(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleHandbrake(vehicle: number): number;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle The vehicle to obtain data for.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): number[];

declare function GetVehicleHighGear(vehicle: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

declare function GetVehicleInteriorColour(vehicle: number, color: number): void;

declare function GetVehicleNextGear(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleWheelHealth(vehicle: number, wheelIndex: number): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(vehicle: number, wheelIndex: number): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
declare function GetVehicleWheelXOffset(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelXrot(vehicle: number, wheelIndex: number): number;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): number;

declare function HasVehicleJumpingAbility(vehicle: number): number;

declare function HasVehicleParachute(vehicle: number): number;

declare function HasVehicleRocketBoost(vehicle: number): number;

declare function InvokeFunctionReference(referenceIdentity: string, argsSerialized: string, argsLength: number, retvalLength: number): string;

declare function IsAceAllowed(object: string): number;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): number;

declare function IsModelAPed(modelHash: string | number): number;

declare function IsThisModelAnAmphibiousCar(model: string | number): number;

declare function IsVehicleAlarmSet(vehicle: number): number;

declare function IsVehicleEngineStarting(vehicle: number): number;

declare function IsVehicleInteriorLightOn(vehicle: number): number;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): number;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): number;

declare function IsVehicleRocketBoostActive(vehicle: number): number;

declare function IsVehicleWanted(vehicle: number): number;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(resourceName: string, fileName: string): string;

declare function N_0x0035bb914316f1e3(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x015b03ee1c43e6ec(p0: number): void;

declare function N_0x0379daf89ba09aa5(p0: number, p1: number): void;

declare function N_0x03c2eebb04b3fb72(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x0419b167ee128f33(p0: number, p1: number): number;

declare function N_0x041c7f2a6c9894e6(p0: number, p1: number, p2: number): number;

declare function N_0x04918a41bc9b8157(p0: number, p1: number, p2: number): number;

declare function N_0x04d90ba8207ada2d(p0: number): void;

declare function N_0x0581730ab9380412(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x0596843b34b95ce5(p0: number, p1: number): void;

declare function N_0x05f04155a226fbbf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x065d03a9d6b2c6b5(p0: number, p1: number): void;

declare function N_0x06eaf70ae066441e(p0: number): void;

declare function N_0x07dbd622d9533857(p0: number): number;

declare function N_0x07eab372c8841d99(p0: number, p1: number, p2: number): number;

declare function N_0x08a1b82b91900682(p0: number, p1: number, p2: number): void;

declare function N_0x08b0ca7a6ab3ac32(p0: number, p1: number, p2: number): void;

declare function N_0x0a50d2604e05cb94(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x0a9c7f36e5d7b683(p0: number): void;

declare function N_0x0aa27680a0bd43fa(): void;

declare function N_0x0abf535877897560(p0: number): number;

declare function N_0x0b3e35ac043707d9(p0: number, p1: number): void;

declare function N_0x0b565b0aae56a0e8(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x0b8b7f74bf061c6d(): number;

declare function N_0x0be4be946463f917(p0: number): number;

declare function N_0x0c112765300c7e1e(p0: number): number;

declare function N_0x0c82d21a77c22d49(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0c8fac83902a62df(p0: number): void;

declare function N_0x0cb1be0633c024a8(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0cf97f497fe7d048(p0: number): void;

declare function N_0x0d30eb83668e63c5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0d5f65a8f4ebdab5(p0: number, p1: number): void;

declare function N_0x0e4f77f7b9d74d84(p0: number): void;

declare function N_0x0eacdf8487d5155a(p0: number): void;

declare function N_0x0f62619393661d6e(p0: number, p1: number, p2: number): void;

declare function N_0x0fe8e1fcd2b86b33(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x1086127b3a63505e(p0: number, p1: number, p2: number): void;

declare function N_0x1087bc8ec540daeb(p0: number, p1: number): void;

declare function N_0x112209ce0290c03a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x11579d940949c49e(p0: number): void;

declare function N_0x1201e8a3290a3b98(p0: number, p1: number): void;

declare function N_0x125e6d638b8605d4(p0: number): number[];

declare function N_0x12d148d26538d0f9(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x1312ddd8385aee4e(p0: number, p1: number): void;

declare function N_0x1398582b7f72b3ed(p0: number): void;

declare function N_0x13f1fcb111b820b0(p0: number): void;

declare function N_0x144da052257ae7d8(p0: number): void;

declare function N_0x1461b28a06717d68(p0: number): number;

declare function N_0x148b08c2d2acb884(p0: number, p1: number, p2: number): void;

declare function N_0x14eda9ee27bd1626(p0: number): void;

declare function N_0x15803fec3b9a872b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

declare function N_0x159b7318403a1cd8(p0: number): void;

declare function N_0x15cfa549788d35ef(): void;

declare function N_0x15f944730c832252(p0: number, p1: number): void;

declare function N_0x1632be0ac1e62876(p0: number, p1: number): void;

declare function N_0x1636d7fc127b10d2(p0: number): void;

declare function N_0x164c5ff663790845(p0: number): void;

declare function N_0x171bafb3c60389f4(p0: number): number;

declare function N_0x17330ebf2f2124a8(): void;

declare function N_0x17f7471eaca78290(p0: number): void;

declare function N_0x1888694923ef4591(): void;

declare function N_0x1950dae9848a4739(p0: number, p1: number, p2: number): number;

declare function N_0x19d1b791cb3670fe(p0: number, p1: number): void;

declare function N_0x19e50eb6e33e1d28(p0: number): void;

declare function N_0x1a7ce7cd3e653485(p0: number): void;

declare function N_0x1a8ea222f9c67dbb(p0: number): number;

declare function N_0x1b212b26dd3c04df(p0: number, p1: number): void;

declare function N_0x1b7abe26cbcbf8c7(p0: number, p1: number, p2: number): void;

declare function N_0x1bbac99c0bc53656(p0: number, p1: number): void;

declare function N_0x1c1b69fae509ba97(p0: number, p1: number): void;

declare function N_0x1da0da9cb3f0c8bf(p0: number): number;

declare function N_0x1dda078d12879eee(p0: number, p1: number, p2: number): void;

declare function N_0x1e3f1b1b891a2aaa(p0: number, p1: number): void;

declare function N_0x1e45b34adebee48e(): void;

declare function N_0x1f34b0626c594380(p0: number, p1: number): void;

declare function N_0x1f351cf1c6475734(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0x1f8e00fb18239600(p0: number): void;

declare function N_0x203b381133817079(p0: number): void;

declare function N_0x213aeb2b90cba7ac(p0: number, p1: number, p2: number): void;

declare function N_0x2382ab11450ae7ba(p0: number, p1: number): void;

declare function N_0x2467a2d807d37ca3(p0: number): number;

declare function N_0x2472622ce1f2d45f(p0: number, p1: number, p2: number): void;

declare function N_0x259ba6d4e6f808f1(p0: number): void;

declare function N_0x2605663bd4f23b5d(p0: number): void;

declare function N_0x265559da40b3f327(p0: number): void;

declare function N_0x26d99d5a82fd18e8(p0: number): void;

declare function N_0x2790f4b17d098e26(p0: number): void;

declare function N_0x27aa1c973cacfe63(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0x282b6739644f4347(p0: number): void;

declare function N_0x28b18377eb6e25f6(p0: number, p1: number): void;

declare function N_0x28ecb8ac2f607db2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x2916a928514c9827(): void;

declare function N_0x29280002282f1928(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number): void;

declare function N_0x2a5e0621dd815a9a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2a86a0475b6a1434(p0: number, p1: number): void;

declare function N_0x2afc2d19b50797f2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2b1c623823db0d9d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x2b40a97646381508(p0: number): void;

declare function N_0x2bc54a8188768488(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

declare function N_0x2c173ae2bdb9385e(p0: number): number;

declare function N_0x2c1d8b3b19e517cc(p0: number, p1: number): number;

declare function N_0x2c9f302398e13141(p0: number, p1: number): void;

declare function N_0x2cd90358f67d0aa8(p0: number): void;

declare function N_0x2ce9d95e4051aecd(p0: number): void;

declare function N_0x2da41ed6e1fcd7a5(p0: number, p1: number): number;

declare function N_0x2de6c5e2e996f178(p0: number): void;

declare function N_0x2dfc81c9b9608549(p0: number, p1: number): number;

declare function N_0x2e4c123d1c8a710e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x2f074c904d85129e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x2f41a3bae005e5fa(p0: number, p1: number): void;

declare function N_0x2fa2494b47fdd009(p0: number, p1: number): void;

declare function N_0x2fab6614ce22e196(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x30fd873ece50e9f6(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x31e90b8873a4cd3b(p0: number, p1: number): void;

declare function N_0x32888337579a5970(): void;

declare function N_0x32cac93c9de73d32(): number;

declare function N_0x32caedf24a583345(p0: number): void;

declare function N_0x32ebd154cb6b8b99(p0: number, p1: number, p2: number): void;

declare function N_0x32f34ff7f617643b(p0: number, p1: number): void;

declare function N_0x33981d6804e62f49(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x33d72899e24c3365(p0: number, p1: number): number;

declare function N_0x33de49edf4dde77a(p0: number): number[];

declare function N_0x352e2b5cf420bf3b(p0: number, p1: number): void;

declare function N_0x35bb21de06784373(p0: number, p1: number): void;

declare function N_0x365e877c61d6988b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x36f32de87082343e(p0: number, p1: number): void;

declare function N_0x375a706a5c2fd084(p0: number): void;

declare function N_0x3795688a307e1eb6(p0: number): number;

declare function N_0x37d5f739fd494675(p0: number): number;

declare function N_0x3855fb5eb2c5e8b2(p0: number): number;

declare function N_0x393bd2275ceb7793(): number;

declare function N_0x394cd08e31313c28(): void;

declare function N_0x39a5fb7eaf150840(p0: number, p1: number): void;

declare function N_0x3a8b55fda4c8ddef(p0: number, p1: number, p2: number): number;

declare function N_0x3b2fd68db5f8331c(p0: number, p1: number): void;

declare function N_0x3b458ddb57038f08(p0: number, p1: number, p2: number): void;

declare function N_0x3d120012440e6683(): number;

declare function N_0x3de3aa516fb126a4(p0: number): void;

declare function N_0x3de51e9c80b116cf(p0: number): number;

declare function N_0x3e4adaff1830f146(): number;

declare function N_0x3e9679c1dfcf422c(p0: number, p1: number): void;

declare function N_0x3ebeac6c3f81f6bd(p0: number): void;

declare function N_0x3ed2b83ab2e82799(p0: number, p1: number): void;

declare function N_0x3f0cf9cb7e589b88(): number;

declare function N_0x3f7325574e41b44d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x4056ea1105f5abd7(p0: number, p1: number): void;

declare function N_0x40763ea7b9b783e7(p0: number, p1: number, p2: number): number;

declare function N_0x4128464231e3ca0b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x41290b40fa63e6da(p0: number): void;

declare function N_0x412f1364fa066cfb(p0: number): number;

declare function N_0x419615486bbf1956(p0: number): void;

declare function N_0x42613035157e4208(p0: number): void;

declare function N_0x428ad3e26c8d9eb0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x42b65deef2edf2a1(p0: number): void;

declare function N_0x4348bfda56023a2f(p0: number, p1: number): number;

declare function N_0x438822c279b73b93(p0: number): void;

declare function N_0x4419966c9936071a(p0: number): void;

declare function N_0x44621483ff966526(p0: number, p1: number): void;

declare function N_0x44919cc079bb60bf(p0: number): void;

declare function N_0x44cd1f493db2a0a6(p0: number, p1: number, p2: number): void;

declare function N_0x44f1012b69313374(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x451d05012ccec234(p0: number): number;

declare function N_0x45a561a9421ab6ad(p0: number, p1: number): number;

declare function N_0x46f3add1e2d5baf2(p0: number, p1: number): void;

declare function N_0x46f8696933a63c9b(p0: number, p1: number): number[];

declare function N_0x472841a026d26d8b(): number;

declare function N_0x4757f00bc6323cfe(p0: number, p1: number): void;

declare function N_0x47b32f5611e6e483(p0: number): void;

declare function N_0x47b595d60664cffa(p0: number, p1: number): void;

declare function N_0x483aca1176ca93f1(): void;

declare function N_0x48608c3464f58ab4(p0: number, p1: number, p2: number): void;

declare function N_0x4879e4fe39074cdf(): number;

declare function N_0x488043841bbe156f(): void;

declare function N_0x48c633e94a8142a7(p0: number): number;

declare function N_0x490861b88f4fd846(p0: number): void;

declare function N_0x497420e022796b3f(): number;

declare function N_0x4ad490ae1536933b(p0: number, p1: number): number;

declare function N_0x4b5b620c9b59ed34(p0: number, p1: number): void;

declare function N_0x4ba166079d658ed4(p0: number, p1: number): void;

declare function N_0x4c2a9fdc22377075(): void;

declare function N_0x4c815eb175086f84(p0: number, p1: number): number;

declare function N_0x4d1cb8dc40208a17(p0: number, p1: number): number;

declare function N_0x4e20d2a627011e8e(p0: number, p1: number): number;

declare function N_0x4e417c547182c84d(p0: number): number;

declare function N_0x4e90d746056e273d(p0: number, p1: number): void;

declare function N_0x501478855a6074ce(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x50634e348c8d44ef(p0: number): number;

declare function N_0x50c375537449f369(p0: number): void;

declare function N_0x516fc96eb88eefe5(p0: number): void;

declare function N_0x5182a339a3474510(p0: number, p1: number, p2: number): void;

declare function N_0x5335be58c083e74e(p0: number): void;

declare function N_0x53c10c8bd774f2c9(): number;

declare function N_0x53cae13e9b426993(p0: number): void;

declare function N_0x544996c0081abdeb(p0: number, p1: number): void;

declare function N_0x547237aa71ab44de(p0: number): void;

declare function N_0x55a1e095db052fa5(p0: number, p1: number): void;

declare function N_0x55a8becaf28a4eb7(): number;

declare function N_0x55fcc0c390620314(p0: number, p1: number, p2: number): void;

declare function N_0x5615e0c5eb2bc6e2(p0: number, p1: number): void;

declare function N_0x5626d9d6810730d5(): number;

declare function N_0x563b65a643ed072e(p0: number, p1: number, p2: number): number;

declare function N_0x577599cced639ca2(p0: number): void;

declare function N_0x585847c5e4e11709(p0: number, p1: number, p2: number): number;

declare function N_0x5873c14a52d74236(p0: number): number;

declare function N_0x58a39be597ce99cd(): void;

declare function N_0x59d421683d31835a(p0: number): void;

declare function N_0x5b91b229243351a8(p0: number, p1: number): void;

declare function N_0x5b9853296731e88d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x5ba68a0840d546ac(p0: number, p1: number): number;

declare function N_0x5bcde0f640c773d2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5c48b75732c8456c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x5d2bfaab8d956e0e(): void;

declare function N_0x5d97630a8a0ef123(p0: number, p1: number, p2: number): void;

declare function N_0x5da825a85d0ea6e6(p0: number, p1: number, p2: number): void;

declare function N_0x5dbf05db5926d089(p0: number): void;

declare function N_0x5e203da2ba15d436(p0: number): number;

declare function N_0x5ecb40269053c0d4(p0: number): number;

declare function N_0x5ecd378ee64450ab(p0: number): void;

declare function N_0x5ee5632f47ae9695(p0: number, p1: number): void;

declare function N_0x5f456788b05faeac(p0: number, p1: number, p2: number): void;

declare function N_0x5ff2c33b13a02a11(p0: number): void;

declare function N_0x60190048c0764a26(p0: number): number;

declare function N_0x60eedc12af66e846(p0: number): void;

declare function N_0x613f125ba3bd2eb9(): number;

declare function N_0x617f49c2668e6155(): number;

declare function N_0x62374889a4d59f72(): void;

declare function N_0x62454a641b41f3c5(p0: number): void;

declare function N_0x641f272b52e2f0f8(p0: number, p1: number): void;

declare function N_0x6493cf69859b116a(): void;

declare function N_0x64d779659bc37b19(p0: number): number[];

declare function N_0x6501129c9e0ffa05(p0: number, p1: number): void;

declare function N_0x651d3228960d08af(p0: number, p1: number): void;

declare function N_0x6551b1f7f6cd46ea(p0: number): void;

declare function N_0x6558ac7c17bfef58(p0: number): number;

declare function N_0x658500ae6d723a7e(p0: number): void;

declare function N_0x659cf2ef7f550c4f(): number;

declare function N_0x65b080555ea48149(p0: number): void;

declare function N_0x65e7e78842e74cdb(p0: number): number;

declare function N_0x668fd40bcba5de48(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x66e3aaface2d1eb8(p0: number, p1: number, p2: number): void;

declare function N_0x675d19c6067cae08(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x678f86d8fc040bdb(p0: number): void;

declare function N_0x68f8be6af5cdf8a6(p0: number, p1: number): void;

declare function N_0x693478acbd7f18e7(): void;

declare function N_0x697f508861875b42(p0: number, p1: number, p2: number): number;

declare function N_0x69ef772b192614c1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x6a1738b4323fe2d9(p0: number): void;

declare function N_0x6a51f78772175a51(p0: number): void;

declare function N_0x6a60e43998228229(p0: number): void;

declare function N_0x6bc0acd0673acebe(p0: number, p1: number, p2: number): void;

declare function N_0x6bc97f4f4bb3c04b(p0: number, p1: number): void;

declare function N_0x6bccf9948492fd85(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x6cdd58146a436083(p0: number): void;

declare function N_0x6ce177d014502e8a(p0: number): void;

declare function N_0x6ce50e47f5543d0c(): void;

declare function N_0x6e0a5253375c4584(): number;

declare function N_0x6e4361ff3e8cd7ca(p0: number): number;

declare function N_0x6eaaefc76acc311f(p0: number): number;

declare function N_0x6fd97159fe3c971a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x7033eefd9b28088e(p0: number): void;

declare function N_0x705a844002b39dc0(): number;

declare function N_0x711794453cfd692b(p0: number, p1: number): void;

declare function N_0x71302ec70689052a(p0: number): number;

declare function N_0x71dc455f5cd1c2b1(p0: number): number;

declare function N_0x7241ccb7d020db69(p0: number, p1: number): void;

declare function N_0x7242f8b741ce1086(p0: number): number;

declare function N_0x72beccf4b829522e(p0: number, p1: number): void;

declare function N_0x73001e34f85137f8(p0: number): void;

declare function N_0x73561d4425a021a2(p0: number, p1: number): void;

declare function N_0x736d7aa1b750856b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number, p24: number, p25: number, p26: number, p27: number, p28: number, p29: number, p30: number, p31: number): void;

declare function N_0x737e398138550fff(p0: number, p1: number): void;

declare function N_0x756ae6e962168a04(p0: number, p1: number): void;

declare function N_0x758a5c1b3b1e1990(p0: number): void;

declare function N_0x76bba2cee66d47e9(p0: number): number;

declare function N_0x76d26a22750e849e(p0: number): void;

declare function N_0x77fe3402004cd1b0(p0: number): void;

declare function N_0x78ceee41f49f421f(p0: number, p1: number): void;

declare function N_0x792271ab35c356a4(p0: number, p1: number): void;

declare function N_0x799017f9e3b10112(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function N_0x7b18da61f6bae9d5(p0: number): void;

declare function N_0x7b8a361c1813fbef(): void;

declare function N_0x7bbe7ff626a591fe(p0: number): void;

declare function N_0x7c06330bfdda182e(p0: number): void;

declare function N_0x7c226d5346d4d10a(p0: number): void;

declare function N_0x7d36291161859389(p0: number): void;

declare function N_0x7d8ba05688ad64c7(p0: number): void;

declare function N_0x7db18ca8cad5b098(): number;

declare function N_0x7e07c78925d5fd96(p0: number): number;

declare function N_0x7ec3c679d0e7e46b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x7ef7649b64d7ff10(p0: number): number;

declare function N_0x801879a9b4f4b2fb(): number;

declare function N_0x80e3357fdef45c21(p0: number, p1: number): void;

declare function N_0x814af7dcaacc597b(p0: number): void;

declare function N_0x815f18ad865f057f(p0: number): number;

declare function N_0x8181ce2f25cb9bb7(p0: number, p1: number): number;

declare function N_0x81aa517fbba05d39(p0: number): number;

declare function N_0x820e9892a77e97cd(p0: number, p1: number): void;

declare function N_0x821418c727fcacd7(p0: number): void;

declare function N_0x821fdc827d6f4090(p0: number): void;

declare function N_0x826d1ee4d1cafc78(p0: number, p1: number): void;

declare function N_0x82a2b386716608f1(): number;

declare function N_0x82acc484ffa3b05f(p0: number): number;

declare function N_0x83660b734994124d(p0: number, p1: number, p2: number): number;

declare function N_0x838da0936a24ed4d(p0: number, p1: number): void;

declare function N_0x83f813570ff519de(p0: number, p1: number): void;

declare function N_0x848b66100ee33b05(p0: number): void;

declare function N_0x84a810b375e69c0e(): number;

declare function N_0x84c0116d012e8fc2(p0: number): void;

declare function N_0x84dfc579c2fc214c(p0: number): void;

declare function N_0x84ea99c62cb3ef0c(p0: number, p1: number, p2: number): void;

declare function N_0x8533cafde1f0f336(p0: number): number;

declare function N_0x8586789730b10caf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x858ec9fd25de04aa(p0: number, p1: number): void;

declare function N_0x867458251d47ccb2(p0: number, p1: number): void;

declare function N_0x86b4b6212cb8b627(p0: number, p1: number): void;

declare function N_0x870b8b7a766615c8(p0: number, p1: number, p2: number): void;

declare function N_0x878c75c09fbdb942(): number;

declare function N_0x87ddeb611b329a9c(p0: number): void;

declare function N_0x88087ee1f28024ae(p0: number): void;

declare function N_0x8881c98a31117998(p0: number): void;

declare function N_0x8989cbd7b4e82534(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x8a24b067d175a7bd(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x8a800daccc0da55d(): void;

declare function N_0x8b4ffc790ca131ef(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x8b9cdbd6c566c38c(): number;

declare function N_0x8bc515bae4aaf8ff(p0: number): number;

declare function N_0x8c33220c8d78ca0d(p0: number, p1: number): void;

declare function N_0x8c9d11605e59d955(p0: number): void;

declare function N_0x8caab2bd3ea58bd4(p0: number): void;

declare function N_0x8d768602adef2245(p0: number, p1: number): void;

declare function N_0x8d8adb562f09a245(p0: number): void;

declare function N_0x8e243837643d9583(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8ea86df356801c7d(p0: number, p1: number): void;

declare function N_0x8f5d1ad832aeb06c(p0: number): number;

declare function N_0x91ef34584710be99(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

declare function N_0x9251b6abf2d0a5b4(p0: number, p1: number): void;

declare function N_0x928dbfb892638ef3(): void;

declare function N_0x92c360b5f15d2302(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x930f504203f561c9(p0: number): void;

declare function N_0x95eb5e34f821babe(p0: number, p1: number, p2: number): number;

declare function N_0x9641588dab93b4b5(p0: number): void;

declare function N_0x96e6d5150dbf1c09(p0: number, p1: number, p2: number): void;

declare function N_0x96ee0eba0163df80(p0: number, p1: number): void;

declare function N_0x9777734dad16992f(): number;

declare function N_0x977ca98939e82e4b(p0: number, p1: number): void;

declare function N_0x98c3cf913d895111(p0: number, p1: number): number;

declare function N_0x99093f60746708ca(p0: number): number;

declare function N_0x998e18ceb44487fc(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9a53ded9921de990(p0: number, p1: number): void;

declare function N_0x9c16459b2324b2cf(p0: number, p1: number): void;

declare function N_0x9d30687c57baa0bb(p0: number): void;

declare function N_0x9d75795b9dc6ebbf(p0: number): void;

declare function N_0x9da58cdbf6bdbc08(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): number;

declare function N_0x9e82f0f362881b29(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x9ebd751e5787baf2(p0: number): void;

declare function N_0x9ec8858184cd253a(): number;

declare function N_0x9eca15adfe141431(): number;

declare function N_0x9fe5633880ecd8ed(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa0d3e4f7aafb7e78(p0: number, p1: number): number;

declare function N_0xa0f8a7517a273c05(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xa12d3a5a3753cc23(): number;

declare function N_0xa17784fca9548d15(p0: number, p1: number, p2: number): void;

declare function N_0xa1a9fc1c76a6730d(p0: number): number;

declare function N_0xa1dd82f3ccf9a01e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xa247f9ef01d8082e(p0: number): void;

declare function N_0xa2a707979fe754dc(p0: number, p1: number): void;

declare function N_0xa2c9ac24b4061285(p0: number, p1: number): number;

declare function N_0xa3c53804bdb68ed2(p0: number, p1: number): void;

declare function N_0xa40cc53df8e50837(p0: boolean, args: number, argCount: number, bit: number): void;

declare function N_0xa51b086b0b2c0f7a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa6d3a8750dc73270(p0: number, p1: number): void;

declare function N_0xa6f54bb2ffca35ea(p0: number): void;

declare function N_0xa75ccf58a60a5fd1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0xa761d4ac6115623d(): number;

declare function N_0xa78de25577300ba1(p0: number): void;

declare function N_0xa7c511fa1c5bda38(p0: number, p1: number): void;

declare function N_0xa8b6afdac320ac87(p0: number, p1: number): void;

declare function N_0xa90e7227a9303fa9(p0: number, p1: number): void;

declare function N_0xa943fd1722e11efd(): number;

declare function N_0xa95f667a755725da(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xaa3f739abddcf21f(): void;

declare function N_0xaa525dff66bb82f5(p0: number, p1: number, p2: number): void;

declare function N_0xaa5fafcd2c5f5e47(): number;

declare function N_0xab31ef4de6800ce9(p0: number, p1: number): void;

declare function N_0xac272c0ae01b4bd8(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xaf03011701811146(p0: number, p1: number): number;

declare function N_0xaf60e6a2936f982a(p0: number, p1: number): void;

declare function N_0xaff47709f1d5dcce(): number;

declare function N_0xb09d25e77c33eb3f(p0: number, p1: number, p2: number): number;

declare function N_0xb0ad1238a709b1a2(p0: number): number;

declare function N_0xb13dcb4c6faad238(p0: number, p1: number, p2: number): void;

declare function N_0xb17bc6453f6cf5ac(p0: number, p1: number): void;

declare function N_0xb2092a1eaa7fd45f(p0: number): number;

declare function N_0xb214d570ead7f81a(p0: number, p1: number): void;

declare function N_0xb282749d5e028163(p0: number, p1: number): void;

declare function N_0xb2e0c0d6922d31f2(p0: number, p1: number): void;

declare function N_0xb328dcc3a3aa401b(p0: number): number;

declare function N_0xb3ea4feabf41464b(p0: number, p1: number): number;

declare function N_0xb3eca65c7317f174(): number;

declare function N_0xb4771b9aaf4e68e4(p0: number, p1: number, p2: number): void;

declare function N_0xb49eca122467d05f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb4c2ec463672474e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb552929b85fc27ec(p0: number, p1: number): void;

declare function N_0xb569f41f3e7e83a4(p0: number): void;

declare function N_0xb7257ba2550ea10a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0xb81cf134aeb56ffb(): void;

declare function N_0xb9496ce47546db2c(p0: number): number;

declare function N_0xb9562064627ff9db(p0: number, p1: number): void;

declare function N_0xb9c362babecddc7a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xba0127da25fd54c9(p0: number, p1: number): void;

declare function N_0xba3d194057c79a7b(p0: number): void;

declare function N_0xba7f0b77d80a4eb7(p0: number, p1: number): void;

declare function N_0xba8805a1108a2515(p0: number): number;

declare function N_0xba91d045575699ad(p0: number): number;

declare function N_0xba9749cc94c1fd85(): number;

declare function N_0xbaa045b4e42f3c06(p0: number, p1: number): void;

declare function N_0xbaa2f0490e146be8(p0: number): void;

declare function N_0xbb2333bb87ddd87f(p0: number, p1: number): void;

declare function N_0xbcfde9ede4cf27dc(p0: number, p1: number): void;

declare function N_0xbd0efb25cca8f97a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbd32e46aa95c1dd2(p0: number): void;

declare function N_0xbe3db208333d9844(): number;

declare function N_0xbe509b0a3693de8b(p0: number): void;

declare function N_0xbec0816ff5acbcda(p0: number, p1: number): void;

declare function N_0xbf371cd2b64212fd(p0: number): void;

declare function N_0xbfafdb5faaa5c5ab(p0: number): void;

declare function N_0xc0ed6438e6d39ba8(p0: number, p1: number, p2: number): void;

declare function N_0xc1952f3773ba18fe(p0: number, p1: number, p2: number): void;

declare function N_0xc24075310a8b9cd1(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc2d2ad9eaae265b8(): number;

declare function N_0xc34bc448da29f5e9(p0: number, p1: number): void;

declare function N_0xc388a0f065f5bc34(p0: number, p1: number): void;

declare function N_0xc3bfed92026a2aad(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xc434133d9ba52777(p0: number, p1: number): number;

declare function N_0xc4b3347bd68bd609(p0: number): void;

declare function N_0xc5c8f970d4edff71(p0: number): void;

declare function N_0xc729991a9065376e(p0: number): void;

declare function N_0xc8407624cef2354b(p0: number, p1: number): void;

declare function N_0xca465d9cc0d231ba(p0: number): void;

declare function N_0xca4ac3eaae46ec7b(p0: number, p1: number): number;

declare function N_0xcb645e85e97ea48b(): number;

declare function N_0xcc25a4553dfbf9ea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xcc6e3b6bb69501f1(p0: number): number;

declare function N_0xcd74233600c4ea6b(p0: number): void;

declare function N_0xcd79a550999d7d4f(p0: number): number;

declare function N_0xcda1c62be2777802(p0: number, p1: number, p2: number): void;

declare function N_0xce5d0e5e315db238(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xce6294a232d03786(p0: number, p1: number): number[];

declare function N_0xcea553e35c2246e1(p0: number, p1: number, p2: number): void;

declare function N_0xcea7c8e1b48ff68c(p0: number, p1: number): void;

declare function N_0xcf9159024555488c(p0: number): void;

declare function N_0xd12882d3ff82bf11(): void;

declare function N_0xd1942374085c8469(p0: number): void;

declare function N_0xd1a1ee3b4fa8e760(p0: number): void;

declare function N_0xd1c9b92bdd3f151d(p0: number, p1: number, p2: number): void;

declare function N_0xd3301660a57c9272(p0: number): void;

declare function N_0xd3e51c0ab8c26eee(p0: number, p1: number): number;

declare function N_0xd40aac51e8e4c663(p0: number): number;

declare function N_0xd4196117af7bb974(p0: number, p1: number): number;

declare function N_0xd558bec0bba7e8d2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd565f438137f0e10(p0: number, p1: number): void;

declare function N_0xd6781e42755531f7(p0: number): void;

declare function N_0xd7360051c885628b(): number;

declare function N_0xd76eeef746057fd6(p0: number): number;

declare function N_0xd7b6c73cad419bcf(p0: number): void;

declare function N_0xd7cccba28c4ecaf0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd80a80346a45d761(p0: number): number;

declare function N_0xd81b7f27bc773e66(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd821056b9acf8052(p0: number, p1: number): void;

declare function N_0xd95cc5d2ab15a09f(p0: number): number;

declare function N_0xd99db210089617fe(p0: number, p1: number, p2: number): void;

declare function N_0xda05194260cdcdf9(p0: number, p1: number): void;

declare function N_0xda07819e452ffe8f(p0: number): void;

declare function N_0xdab963831dbfd3f4(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xdaf80797fc534bec(p0: number): void;

declare function N_0xdbc966a01c02bca7(p0: number, p1: number, p2: number): void;

declare function N_0xdce97bdf8a0eabc8(): number;

declare function N_0xdf6ca0330f2e737b(p0: number, p1: number): void;

declare function N_0xdffa5be8381c3314(): number;

declare function N_0xe16aa70ce9beedc3(p0: number): number;

declare function N_0xe23adc6fcb1f29ae(p0: number, p1: number, p2: number): void;

declare function N_0xe2f53f172b45ede1(): void;

declare function N_0xe3261d791eb44acb(p0: number): void;

declare function N_0xe35b38a27e8e7179(p0: number): number;

declare function N_0xe4e2fd323574965c(p0: number, p1: number): void;

declare function N_0xe547e9114277098f(): number;

declare function N_0xe574a662acaefbb1(): void;

declare function N_0xe6717e652b8c8d8a(p0: number, p1: number): void;

declare function N_0xe6a9f00d4240b519(p0: number, p1: number): void;

declare function N_0xe7df4e0545dfb56e(p0: number, p1: number, p2: number): void;

declare function N_0xe82728f0de75d13a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number, p24: number): void;

declare function N_0xe827b9382cfb41ba(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe84eb93729c5f36a(p0: number): number;

declare function N_0xe8853fbce7d8d0d6(): number;

declare function N_0xe8b0b270b6e7c76e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe906ec930f5fe7c8(p0: number, p1: number): void;

declare function N_0xeb2bf817463dfa28(p0: number, p1: number): number;

declare function N_0xec69adf931aae0c3(p0: number): number;

declare function N_0xeca658ce2a4e5a72(p0: number, p1: number): void;

declare function N_0xecdc202b25e5cf48(p0: number, p1: number, p2: number): void;

declare function N_0xed5ede9e676643c9(p0: number, p1: number): void;

declare function N_0xed5fd7af10f5e262(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xedbc8405b3895cc9(p0: number, p1: number): void;

declare function N_0xedbf6c9b0d2c65c8(p0: number): void;

declare function N_0xedead9a91ec768b3(p0: number, p1: number, p2: number): void;

declare function N_0xefc13b1ce30d755d(p0: number, p1: number): void;

declare function N_0xefd79fa81dfba9cb(p0: number, p1: number): void;

declare function N_0xefd97ff47b745b8d(p0: number): void;

declare function N_0xeff296097ff1e509(p0: number, p1: number): void;

declare function N_0xf051d9bfb6ba39c0(p0: number): void;

declare function N_0xf06a16ca55d138d8(p0: number, p1: number): void;

declare function N_0xf06a6f41cb445443(p0: number): void;

declare function N_0xf0a60040be558f2d(p0: number, p1: number, p2: number): number;

declare function N_0xf11f01d98113536a(p0: number): number;

declare function N_0xf12e33034d887f66(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf12e6cd06c73d69e(): number;

declare function N_0xf287f506767cc8a9(): number;

declare function N_0xf3162836c28f9da5(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf3b0e0aed097a3f5(p0: number, p1: number): number;

declare function N_0xf47e567b3630dd12(p0: number, p1: number): void;

declare function N_0xf534d94dfa2ead26(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xf6f4383b7c92f11a(p0: number): void;

declare function N_0xf9f2922717b819ec(): number;

declare function N_0xfa07759e6fddd7cf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfac75988a7d078d3(p0: number): void;

declare function N_0xfafc23aee23868db(): number;

declare function N_0xfb6c4072e9a32e92(p0: number, p1: number): number;

declare function N_0xfb80ab299d2ee1bd(p0: number): void;

declare function N_0xfc40cbf7b90ca77c(p0: number): void;

declare function N_0xfc4ee00a7b3bfb76(p0: number, p1: number, p2: number): void;

declare function N_0xfcc228e07217fcac(p0: number): void;

declare function N_0xfcfacd0db9d7a57d(p0: number, p1: number): void;

declare function N_0xfd1695c5d3b05439(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xfe205f38aaa58e5b(p0: number, p1: number): void;

declare function N_0xfebfbfdfb66039de(p0: number): void;

declare function N_0xff5992e1c9e65d05(p0: number): void;

declare function N_0xffbe02cd385356bd(): number;

declare function RaiseLowerableWheels(vehicle: number): void;

declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
declare function RegisterFontFile(fileName: string): void;

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET\_TEXT\_FONT](#_0x66E0276CC5F6B9DA) and similar natives.
 */
declare function RegisterFontId(fontName: string): number;

declare function RegisterNuiCallbackType(callbackType: string): void;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): number;

declare function SendNuiMessage(jsonString: string): number;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The value to set.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetHandlingField(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The floating-point value to set.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetHandlingFloat(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param value The integer value to set.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetHandlingInt(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param value The Vector3 value to set.
 * @param vehicle The vehicle class to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetHandlingVector(vehicle: string, _class: string, fieldName: string): void;

declare function SetInteriorPropColor(interiorID: number, propName: string, color: number): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(manualShutdown: boolean): void;

/**
 * Sets the display info for a minimap overlay.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param miniMap The minimap overlay ID.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 * @param xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 */
declare function SetMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;

declare function SetModelHeadlightConfiguration(modelHash: string | number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetRampVehicleReceivesRampDamage(vehicle: number, receivesDamage: boolean): void;

declare function SetResourceKvp(key: string, value: string): void;

declare function SetResourceKvpFloat(key: string, value: number): void;

declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
declare function SetRichPresence(presenceState: string): void;

declare function SetSnakeoilForEntry(name: string, path: string, data: string): void;

declare function SetTextChatEnabled(enabled: boolean): number;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 */
declare function SetVehicleAutoRepairDisabled(vehicle: number, value: boolean): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

declare function SetVehicleDashboardColour(vehicle: number, color: number): void;

declare function SetVehicleEngineTemperature(vehicle: number, temperature: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

declare function SetVehicleGravityAmount(vehicle: number, gravity: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The value to set.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetVehicleHandlingField(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param value The floating-point value to set.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param value The integer value to set.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param value The Vector3 value to set.
 * @param vehicle The vehicle to set data for.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 */
declare function SetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

declare function SetVehicleInteriorColour(vehicle: number, color: number): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

declare function SetVehicleParachuteActive(vehicle: number, active: boolean): void;

declare function SetVehicleRocketBoostActive(vehicle: number, active: boolean): void;

declare function SetVehicleRocketBoostPercentage(vehicle: number, percentage: number): void;

declare function SetVehicleRocketBoostRefillTime(vehicle: number, time: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

declare function SetVehicleTurboPressure(vehicle: number, pressure: number): void;

declare function SetVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void;

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
declare function SetVehicleWheelXOffset(vehicle: number, wheelIndex: number, offset: number): void;

declare function SetVehicleWheelXrot(vehicle: number, wheelIndex: number, value: number): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

declare function StartFindKvp(prefix: string): number;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

/**
 * The backing function for TriggerServerEvent.
 */
declare function TriggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

/**
 * parachuteModel = 230075693
 */
declare function VehicleSetCustomParachuteModel(vehicle: number, parachuteModel: string | number): void;

/**
 * colorIndex = 0
 */
declare function VehicleSetCustomParachuteTexture(vehicle: number, colorIndex: number): void;

/**
 * Returns whether or not the currently executing event was canceled. See https://wiki.fivem.net/wiki/WasEventCanceled
 * @return A boolean.
 */
declare function WasEventCanceled(): number;

