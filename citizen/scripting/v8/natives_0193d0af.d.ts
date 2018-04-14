declare function AbortTextChat(): void;

declare function Absf(value: number): number;

declare function Absi(value: number): number;

declare function Acos(p0: number): number;

declare function ActivateDamageTrackerOnNetworkId(netID: number, p1: boolean): void;

declare function ActivateFrontendMenu(menuhash: string | number, Toggle_Pause: boolean, component: number): void;

declare function ActivatePhysics(entity: number): void;

declare function ActivateRockstarEditor(): void;

declare function AddAMarkerOverVehicle(vehicle: number): number;

declare function AddAmmoToPed(ped: number, weaponHash: string | number, ammo: number): void;

declare function AddArmourToPed(ped: number, amount: number): void;

declare function AddBlipForCoord(x: number, y: number, z: number): number;

declare function AddBlipForEntity(entity: number): number;

declare function AddBlipForPickup(pickup: number): number;

declare function AddBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;

declare function AddCamSplineNode(camera: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, p9: number): void;

declare function AddClanDecalToVehicle(vehicle: number, ped: number, boneIndex: number, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: number, alpha: number): number;

declare function AddCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;

declare function AddCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;

declare function AddDecal(decalType: number, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: boolean, p18: boolean, p19: boolean): number;

declare function AddDoorToSystem(doorHash: string | number, modelHash: string | number, x: number, y: number, z: number, p5: boolean, p6: boolean, p7: boolean): void;

declare function AddEntityIcon(entity: number, icon: string): number;

declare function AddExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

declare function AddExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: string | number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

declare function AddFrontendMenuContext(hash: string | number): void;

declare function AddHospitalRestart(x: number, y: number, z: number, p3: number, p4: number): number;

declare function AddLineToConversation(p0: number, p1: string, p2: string, p3: number, p4: number, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: number, p10: boolean, p11: boolean, p12: boolean): void;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

declare function AddNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: number): number;

declare function AddNavmeshRequiredRegion(x: number, y: number, radius: number): void;

declare function AddNextMessageToPreviousBriefs(p0: boolean): void;

declare function AddOwnedExplosion(ped: number, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

declare function AddPatrolRouteLink(p0: number, p1: number): void;

declare function AddPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;

declare function AddPedToConversation(p0: number, ped: number, p2: string): void;

declare function AddPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): number;

declare function AddPickupToInteriorRoomByName(pickup: number, roomName: string): void;

declare function AddPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function AddRelationshipGroup(name: string, groupHash: number): number;

declare function AddRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: number, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean, unkPtr: number): number;

declare function AddScenarioBlockingArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): number;

declare function AddScriptToRandomPed(name: string, model: string | number, p2: number, p3: number): void;

declare function AddShockingEventAtPosition(_type: number, x: number, y: number, z: number, duration: number): number;

declare function AddShockingEventForEntity(_type: number, entity: number, duration: number): number;

declare function AddStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number): number;

declare function AddStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number): number;

declare function AddTextComponentAppTitle(p0: string, p1: number): void;

declare function AddTextComponentFloat(value: number, decimalPlaces: number): void;

declare function AddTextComponentFormattedInteger(value: number, commaSeparated: boolean): void;

declare function AddTextComponentInteger(value: number): void;

declare function AddTextComponentScaleform(p0: string): void;

declare function AddTextComponentSubstringBlipName(blip: number): void;

declare function AddTextComponentSubstringPlayerName(text: string): void;

declare function AddTextComponentSubstringTextLabel(labelName: string): void;

declare function AddTextComponentSubstringTextLabelHashKey(gxtEntryHash: string | number): void;

declare function AddTextComponentSubstringTime(timestamp: number, flags: number): void;

declare function AddTextComponentSubstringWebsite(website: string): void;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntryByHash(entryKey: string | number, entryText: string): void;

declare function AddToClockTime(hours: number, minutes: number, seconds: number): void;

declare function AddToItemset(p0: number, p1: number): number;

declare function AddTrevorRandomModifier(gamerTagId: number): number;

declare function AddVehicleStuckCheckWithWarp(p0: number, p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean, p6: number): void;

declare function AddVehicleSubtaskAttackCoord(ped: number, x: number, y: number, z: number): void;

declare function AddVehicleSubtaskAttackPed(ped: number, ped2: number): void;

declare function AddVehicleUpsidedownCheck(vehicle: number): void;

declare function AdvanceClockTimeTo(hour: number, minute: number, second: number): void;

declare function AnimateGameplayCamZoom(p0: number, distance: number): void;

declare function AnimatedShakeCam(cam: number, p1: string, p2: string, p3: string, amplitude: number): void;

declare function AnyPassengersRappeling(vehicle: number): number;

declare function AppClearBlock(): void;

declare function AppCloseApp(): void;

declare function AppCloseBlock(): void;

declare function AppDataValid(): number;

declare function AppDeleteAppData(appName: string): number;

declare function AppGetDeletedFileStatus(): number;

declare function AppGetFloat(property: string): number;

declare function AppGetInt(property: string): number;

declare function AppGetString(property: string): string;

declare function AppHasLinkedSocialClubAccount(): number;

declare function AppHasSyncedData(appName: string): number;

declare function AppSaveData(): void;

declare function AppSetApp(appName: string): void;

declare function AppSetBlock(blockName: string): void;

declare function AppSetFloat(property: string, value: number): void;

declare function AppSetInt(property: string, value: number): void;

declare function AppSetString(property: string, value: string): void;

declare function ApplyDamageToPed(ped: number, damageAmount: number, p2: boolean): void;

declare function ApplyForceToEntity(entity: number, forceType: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, isRel: boolean, p10: boolean, highForce: boolean, p12: boolean, p13: boolean): void;

declare function ApplyForceToEntityCenterOfMass(entity: number, forceType: number, x: number, y: number, z: number, p5: boolean, isRel: boolean, highForce: boolean, p8: boolean): void;

declare function ApplyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;

declare function ApplyPedBlood(ped: number, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;

declare function ApplyPedBloodByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function ApplyPedBloodDamageByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function ApplyPedBloodSpecific(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

declare function ApplyPedDamageDecal(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string): void;

declare function ApplyPedDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;

declare function AreAllNavmeshRegionsLoaded(): number;

declare function AreAllVehicleWindowsIntact(vehicle: number): number;

declare function AreAnyVehicleSeatsFree(vehicle: number): number;

declare function AreCoordsCollidingWithExterior(x: number, y: number, z: number): number;

declare function ArePlayerFlashingStarsAboutToDrop(player: number): number;

declare function ArePlayerStarsGreyedOut(player: number): number;

declare function ArePropellersUndamaged(vehicle: number): number;

declare function AreStringsEqual(string1: string, string2: string): number;

declare function ArrayValueAddBoolean(value: boolean): number;

declare function ArrayValueAddFloat(value: number): number;

declare function ArrayValueAddInteger(value: number): number;

declare function ArrayValueAddObject(arrayData: number): number;

declare function ArrayValueAddString(value: string): number;

declare function ArrayValueAddVector3(valueX: number, valueY: number, valueZ: number): number;

declare function ArrayValueGetBoolean(arrayIndex: number): [number, number];

declare function ArrayValueGetFloat(arrayIndex: number): [number, number];

declare function ArrayValueGetInteger(arrayIndex: number): [number, number];

declare function ArrayValueGetObject(arrayIndex: number): [number, number];

declare function ArrayValueGetSize(arrayData: number): number;

declare function ArrayValueGetString(arrayIndex: number): [string, number];

declare function ArrayValueGetType(arrayIndex: number): [number, number];

declare function ArrayValueGetVector3(arrayIndex: number): [number[], number];

declare function Asin(p0: number): number;

declare function AssistedMovementCloseRoute(): void;

declare function AssistedMovementFlushRoute(): void;

declare function AssistedMovementIsRouteLoaded(route: string): number;

declare function AssistedMovementOverrideLoadDistanceThisFrame(dist: number): void;

declare function AssistedMovementRemoveRoute(route: string): void;

declare function AssistedMovementRequestRoute(route: string): void;

declare function AssistedMovementSetRouteProperties(route: string, props: number): void;

declare function Atan(p0: number): number;

declare function Atan2(p0: number, p1: number): number;

declare function AttachCamToEntity(cam: number, entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;

declare function AttachCamToPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;

declare function AttachEntitiesToRope(rope: number, ent1: number, ent2: number, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean): [number, number];

declare function AttachEntityToEntity(entity1: number, entity2: number, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void;

declare function AttachEntityToEntityPhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p15: boolean, collision: boolean, p17: boolean, p18: number): void;

declare function AttachPortablePickupToPed(ped: number, p1: number): void;

declare function AttachRopeToEntity(rope: number, entity: number, x: number, y: number, z: number, p5: boolean): void;

declare function AttachSynchronizedSceneToEntity(sceneID: number, entity: number, boneIndex: number): void;

declare function AttachTvAudioToEntity(entity: number): void;

declare function AttachVehicleToCargobob(vehicle: number, cargobob: number, p2: number, x: number, y: number, z: number): void;

declare function AttachVehicleToTowTruck(towTruck: number, vehicle: number, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;

declare function AttachVehicleToTrailer(vehicle: number, trailer: number, radius: number): void;

declare function AudioIsScriptedMusicPlaying(): number;

declare function BadSportPlayerLeftDetected(p1: number, p2: number): [number, number];

declare function BeginEnumeratingThreads(): void;

declare function BeginReplayStats(p0: number, p1: number): void;

declare function BeginSrl(): void;

declare function BeginTextCommandClearPrint(text: string): void;

declare function BeginTextCommandDisplayHelp(inputType: string): void;

declare function BeginTextCommandDisplayText(text: string): void;

declare function BeginTextCommandIsMessageDisplayed(text: string): void;

declare function BeginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;

declare function BeginTextCommandLineCount(entry: string): void;

declare function BeginTextCommandObjective(p0: string): void;

declare function BeginTextCommandPrint(GxtEntry: string): void;

declare function BeginTextCommandScaleformString(componentType: string): void;

declare function BeginTextCommandSetBlipName(gxtentry: string): void;

declare function BeginTextCommandTimer(p0: string): void;

declare function BeginTextCommandWidth(text: string): void;

declare function BlipSiren(vehicle: number): void;

declare function BlockDecisionMakerEvent(name: string | number, _type: number): void;

declare function BreakEntityGlass(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean): void;

declare function CalculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param fnName A function in the overlay's TIMELINE.
 * @param miniMap The minimap overlay ID.
 */
declare function CallMinimapScaleformFunction(miniMap: number, fnName: string): number;

declare function CallScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;

declare function CallScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;

declare function CallScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;

declare function CallScaleformMovieMethod(scaleform: number, method: string): void;

declare function CanCreateRandomBikeRider(): number;

declare function CanCreateRandomCops(): number;

declare function CanCreateRandomDriver(): number;

declare function CanCreateRandomPed(unk: boolean): number;

declare function CanKnockPedOffVehicle(ped: number): number;

declare function CanPedHearPlayer(player: number, ped: number): number;

declare function CanPedInCombatSeeTarget(ped: number, target: number): number;

declare function CanPedRagdoll(ped: number): number;

declare function CanPhoneBeSeenOnScreen(): number;

declare function CanPlayOnline(): number;

declare function CanPlayerStartMission(player: number): number;

declare function CanRegisterMissionEntities(p0: number, p1: number, p2: number, p3: number): number;

declare function CanRegisterMissionObjects(p0: number): number;

declare function CanRegisterMissionPeds(p0: number): number;

declare function CanRegisterMissionPickups(p0: number): number;

declare function CanRegisterMissionVehicles(p0: number): number;

declare function CanSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function CanSetExitStateForCamera(p0: boolean): number;

declare function CanSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function CanShuffleSeat(vehicle: number, p1: number): number;

declare function CanUseWeaponOnParachute(weaponHash: string | number): number;

declare function CanVehicleParachuteBeActivated(vehicle: number): number;

/**
 * Cancels the currently executing event. See https://wiki.fivem.net/wiki/CancelEvent
 */
declare function CancelEvent(): void;

declare function CancelMusicEvent(eventName: string): number;

declare function CancelStuntJump(): void;

declare function CapInterior(interiorID: number, toggle: boolean): void;

declare function Ceil(value: number): number;

declare function CellCamActivate(p0: boolean, p1: boolean): void;

declare function CellCamIsCharVisibleNoFaceCheck(entity: number): number;

declare function CenterPlayerOnRadarThisFrame(): void;

declare function ChangePlayerPed(player: number, ped: number, b2: boolean, b3: boolean): void;

declare function ClampGameplayCamPitch(minimum: number, maximum: number): number;

declare function ClampGameplayCamYaw(minimum: number, maximum: number): number;

declare function CleanItemset(p0: number): void;

declare function ClearAdditionalText(p0: number, p1: boolean): void;

declare function ClearAllBrokenGlass(): number;

declare function ClearAllHelpMessages(): void;

declare function ClearAllPedProps(ped: number): void;

declare function ClearAmbientZoneListState(p1: boolean): number;

declare function ClearAmbientZoneState(zoneName: string, p1: boolean): void;

declare function ClearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean): void;

declare function ClearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;

declare function ClearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;

declare function ClearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;

declare function ClearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;

declare function ClearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;

declare function ClearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;

declare function ClearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;

declare function ClearBit(offset: number): number;

declare function ClearBrief(): void;

declare function ClearCloudHat(): void;

declare function ClearDecisionMakerEventResponse(name: string | number, _type: number): void;

declare function ClearDrawOrigin(): void;

declare function ClearDrivebyTaskUnderneathDrivingTask(ped: number): void;

declare function ClearEntityLastDamageEntity(entity: number): number;

declare function ClearEntityLastWeaponDamage(entity: number): void;

declare function ClearFacialIdleAnimOverride(ped: number): void;

declare function ClearFloatingHelp(p0: number, p1: boolean): void;

declare function ClearFocus(): void;

declare function ClearGpsFlags(): void;

declare function ClearGpsPlayerWaypoint(): void;

declare function ClearGpsRaceTrack(): void;

declare function ClearHdArea(): void;

declare function ClearHelp(toggle: boolean): void;

declare function ClearOverrideWeather(): void;

declare function ClearPedAlternateMovementAnim(ped: number, stance: number, p2: number): void;

declare function ClearPedAlternateWalkAnim(ped: number, p1: number): void;

declare function ClearPedBloodDamage(ped: number): void;

declare function ClearPedBloodDamageByZone(ped: number, p1: number): void;

declare function ClearPedDamageDecalByZone(ped: number, p1: number, p2: string): void;

declare function ClearPedDecorations(ped: number): void;

declare function ClearPedDriveByClipsetOverride(ped: number): void;

declare function ClearPedFacialDecorations(ped: number): void;

declare function ClearPedInPauseMenu(): void;

declare function ClearPedLastDamageBone(ped: number): void;

declare function ClearPedLastWeaponDamage(ped: number): void;

declare function ClearPedNonCreationArea(): void;

declare function ClearPedProp(ped: number, propId: number): void;

declare function ClearPedSecondaryTask(ped: number): void;

declare function ClearPedTasks(ped: number): void;

declare function ClearPedTasksImmediately(ped: number): void;

declare function ClearPedWetness(ped: number): void;

declare function ClearPlayerHasDamagedAtLeastOneNonAnimalPed(player: number): void;

declare function ClearPlayerHasDamagedAtLeastOnePed(player: number): void;

declare function ClearPlayerParachuteModelOverride(player: number): void;

declare function ClearPlayerParachutePackModelOverride(player: number): void;

declare function ClearPlayerParachuteVariationOverride(player: number): void;

declare function ClearPlayerWantedLevel(player: number): void;

declare function ClearPopscheduleOverrideVehicleModel(scheduleId: number): void;

declare function ClearPrints(): void;

declare function ClearRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;

declare function ClearReminderMessage(): void;

declare function ClearReplayStats(): void;

declare function ClearRoomForEntity(entity: number): void;

declare function ClearSequenceTask(taskSequence: number): number;

declare function ClearSmallPrints(): void;

declare function ClearThisPrint(p0: string): void;

declare function ClearTimecycleModifier(): void;

declare function ClearVehicleCustomPrimaryColour(vehicle: number): number;

declare function ClearVehicleCustomSecondaryColour(vehicle: number): number;

declare function ClearWeatherTypePersist(): void;

declare function ClonePed(ped: number, heading: number, isNetwork: boolean, p3: boolean): number;

declare function ClonePedToTarget(ped: number, targetPed: number): void;

declare function CloseBombBayDoors(vehicle: number): void;

declare function ClosePatrolRoute(): void;

declare function CloseSequenceTask(taskSequence: number): number;

declare function CompareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;

declare function ControlLandingGear(vehicle: number, state: number): void;

declare function ControlMountedWeapon(ped: number): number;

declare function Cos(value: number): number;

declare function CreateAmbientPickup(pickupHash: string | number, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: string | number, p7: boolean, p8: boolean): number;

declare function CreateCam(camName: string, p1: boolean): number;

declare function CreateCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: number): number;

declare function CreateCamera(camHash: string | number, p1: boolean): number;

declare function CreateCameraWithParams(camHash: string | number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: number): number;

declare function CreateCheckpoint(_type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, red: number, green: number, blue: number, alpha: number, reserved: number): number;

declare function CreateCinematicShot(p0: number, p1: number, p2: number, entity: number): void;

declare function CreateForcedObject(x: number, y: number, z: number, p3: number, modelHash: string | number, p5: boolean): void;

declare function CreateGroup(unused: number): number;

declare function CreateIncident(incidentType: number, x: number, y: number, z: number, p5: number, radius: number, outIncidentID: number): number;

declare function CreateIncidentWithEntity(incidentType: number, ped: number, amountOfPeople: number, radius: number, outIncidentID: number): number;

declare function CreateItemset(p0: boolean): number;

declare function CreateLightningThunder(): void;

declare function CreateMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): number;

declare function CreateMobilePhone(phoneType: number): void;

declare function CreateModelHide(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;

declare function CreateModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;

declare function CreateModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;

declare function CreateMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: string | number): void;

declare function CreateMpGamerTag(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number): number;

declare function CreateMpGamerTagColor(headDisplayId: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number, r: number, g: number, b: number): void;

declare function CreateNewScriptedConversation(): void;

declare function CreateNmMessage(startImmediately: boolean, messageId: number): void;

declare function CreateObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, p5: boolean, dynamic: boolean): number;

declare function CreateObjectNoOffset(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, p5: boolean, dynamic: boolean): number;

declare function CreatePatrolRoute(): void;

declare function CreatePed(pedType: number, modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, p7: boolean): number;

declare function CreatePedInsideVehicle(vehicle: number, pedType: number, modelHash: string | number, seat: number, isNetwork: boolean, p5: boolean): number;

declare function CreatePickUpRopeForCargobob(cargobob: number, state: number): void;

declare function CreatePickup(pickupHash: string | number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: string | number): number;

declare function CreatePickupRotate(pickupHash: string | number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: number, p10: boolean, modelHash: string | number): number;

declare function CreatePortablePickup(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): number;

declare function CreatePortablePickup_2(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): number;

declare function CreateRandomPed(posX: number, posY: number, posZ: number): number;

declare function CreateRandomPedAsDriver(vehicle: number, returnHandle: boolean): number;

declare function CreateScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: string | number, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: number): number;

declare function CreateSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;

declare function CreateTrackedPoint(): number;

declare function CreateVehicle(modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, p6: boolean): number;

declare function CreateWeaponObject(weaponHash: string | number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: number): number;

declare function CustomMenuCoordinates(p0: number): void;

declare function DatafileCreate(): void;

declare function DatafileDelete(): void;

declare function DatafileGetFileDict(): string;

declare function DatafileIsSavePending(): number;

declare function DecorExistOn(entity: number, propertyName: string): number;

declare function DecorGetBool(entity: number, propertyName: string): number;

declare function DecorGetFloat(entity: number, propertyName: string): number;

declare function DecorGetInt(entity: number, propertyName: string): number;

declare function DecorIsRegisteredAsType(propertyName: string, _type: number): number;

declare function DecorRegister(propertyName: string, _type: number): void;

declare function DecorRegisterLock(): void;

declare function DecorRemove(entity: number, propertyName: string): number;

declare function DecorSetBool(entity: number, propertyName: string, value: boolean): number;

declare function DecorSetFloat(entity: number, propertyName: string, value: number): number;

declare function DecorSetInt(entity: number, propertyName: string, value: number): number;

declare function DecorSetTime(entity: number, propertyName: string, value: number): number;

declare function DeleteAllTrains(): void;

declare function DeleteCheckpoint(checkpoint: number): void;

declare function DeleteChildRope(rope: number): number;

declare function DeleteEntity(entity: number): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

declare function DeleteIncident(incidentId: number): void;

declare function DeleteMissionTrain(train: number): void;

declare function DeleteObject(object: number): void;

declare function DeletePatrolRoute(patrolRoute: string): void;

declare function DeletePed(ped: number): void;

declare function DeleteResourceKvp(key: string): void;

declare function DeleteRope(rope: number): void;

declare function DeleteScriptVehicleGenerator(vehicleGenerator: number): void;

declare function DeleteStuntJump(p0: number): void;

declare function DeleteVehicle(vehicle: number): void;

declare function DestroyAllCams(thisScriptCheck: boolean): void;

declare function DestroyCam(cam: number, thisScriptCheck: boolean): void;

declare function DestroyItemset(p0: number): void;

declare function DestroyMobilePhone(): void;

declare function DestroyPlayerInPauseMenu(): number;

declare function DestroyTrackedPoint(point: number): void;

declare function DetachCam(cam: number): void;

declare function DetachEntity(entity: number, p1: boolean, collision: boolean): void;

declare function DetachPortablePickupFromPed(ped: number): void;

declare function DetachRopeFromEntity(rope: number, entity: number): void;

declare function DetachSynchronizedScene(sceneID: number): void;

declare function DetachVehicleFromAnyCargobob(vehicle: number): number;

declare function DetachVehicleFromAnyTowTruck(vehicle: number): number;

declare function DetachVehicleFromCargobob(vehicle: number, cargobob: number): void;

declare function DetachVehicleFromTowTruck(towTruck: number, vehicle: number): void;

declare function DetachVehicleFromTrailer(vehicle: number): void;

declare function DetachVehicleWindscreen(vehicle: number): void;

declare function DisableAimCamThisUpdate(): void;

declare function DisableAllControlActions(inputGroup: number): void;

declare function DisableAutomaticRespawn(disableRespawn: boolean): void;

declare function DisableBlipNameForVar(): number;

declare function DisableControlAction(inputGroup: number, control: number, disable: boolean): void;

declare function DisableFirstPersonCamThisFrame(): void;

declare function DisableFrontendThisFrame(): void;

declare function DisableHospitalRestart(hospitalIndex: number, toggle: boolean): void;

declare function DisableInputGroup(inputGroup: number): void;

declare function DisableInterior(interiorID: number, toggle: boolean): void;

declare function DisableInteriorProp(interiorID: number, propName: string): void;

declare function DisableNavmeshInArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function DisablePedPainAudio(ped: number, toggle: boolean): void;

declare function DisablePhoneThisFrame(toggle: boolean): void;

declare function DisablePlaneAileron(vehicle: number, p1: boolean, p2: boolean): void;

declare function DisablePlayerFiring(player: number, toggle: boolean): void;

declare function DisablePlayerVehicleRewards(player: number): void;

declare function DisablePoliceReports(): void;

declare function DisablePoliceRestart(policeIndex: number, toggle: boolean): void;

declare function DisableRadarThisFrame(): void;

declare function DisableScriptBrainSet(brainSet: number): void;

declare function DisableStuntJumpSet(p0: number): void;

declare function DisableVehicleDistantlights(toggle: boolean): void;

declare function DisableVehicleFirstPersonCamThisFrame(): void;

declare function DisableVehicleImpactExplosionActivation(vehicle: number, toggle: boolean): void;

declare function DisableVehicleWeapon(disabled: boolean, weaponHash: string | number, vehicle: number, owner: number): void;

declare function DisplayAmmoThisFrame(display: boolean): void;

declare function DisplayAreaName(toggle: boolean): void;

declare function DisplayCash(toggle: boolean): void;

declare function DisplayDistantVehicles(toggle: boolean): void;

declare function DisplayHelpTextThisFrame(message: string, p1: boolean): void;

declare function DisplayHud(toggle: boolean): void;

declare function DisplayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;

declare function DisplayOnscreenKeyboard_2(p0: number, windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): number;

declare function DisplayRadar(Toggle: boolean): number;

declare function DisplaySniperScopeThisFrame(): void;

declare function DisplaySystemSigninUi(unk: boolean): void;

declare function DisposeSynchronizedScene(scene: number): void;

declare function DoAutoSave(): void;

declare function DoScreenFadeIn(duration: number): void;

declare function DoScreenFadeOut(duration: number): void;

declare function DoesAnimDictExist(animDict: string): number;

declare function DoesBlipExist(blip: number): number;

declare function DoesCamExist(cam: number): number;

declare function DoesCargobobHavePickUpRope(cargobob: number): number;

declare function DoesCargobobHavePickupMagnet(cargobob: number): number;

declare function DoesCutsceneEntityExist(cutsceneEntName: string, modelHash: string | number): number;

declare function DoesDesObjectExist(handle: number): number;

declare function DoesDoorExist(doorHash: string | number): number;

declare function DoesEntityBelongToThisScript(entity: number, p1: boolean): number;

declare function DoesEntityExist(entity: number): number;

declare function DoesEntityHaveDrawable(entity: number): number;

declare function DoesEntityHavePhysics(entity: number): number;

declare function DoesExtraExist(vehicle: number, extraId: number): number;

declare function DoesGroupExist(groupId: number): number;

declare function DoesNavmeshBlockingObjectExist(p0: number): number;

declare function DoesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: string | number, p5: boolean): number;

declare function DoesParticleFxLoopedExist(ptfxHandle: number): number;

declare function DoesPedHaveAiBlip(ped: number): number;

declare function DoesPickupExist(pickup: number): number;

declare function DoesPickupObjectExist(pickupObject: number): number;

declare function DoesRopeExist(rope: number): number;

declare function DoesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): number;

declare function DoesScenarioGroupExist(scenarioGroup: string): number;

declare function DoesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): [number, number];

declare function DoesScriptExist(scriptName: string): number;

declare function DoesScriptVehicleGeneratorExist(vehicleGenerator: number): number;

declare function DoesScriptWithNameHashExist(scriptHash: string | number): number;

declare function DoesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): number;

declare function DoesTextBlockExist(gxt: string): number;

declare function DoesTextLabelExist(gxt: string): number;

declare function DoesVehicleExistWithDecorator(decorator: string): number;

declare function DoesVehicleHaveDecal(vehicle: number, p1: number): number;

declare function DoesVehicleHaveDoor(vehicle: number, doorIndex: number): number;

declare function DoesVehicleHaveRoof(vehicle: number): number;

declare function DoesVehicleHaveStuckVehicleCheck(vehicle: number): number;

declare function DoesVehicleHaveWeapons(vehicle: number): number;

declare function DoesWeaponTakeWeaponComponent(weaponHash: string | number, componentHash: string | number): number;

declare function DoorControl(doorHash: string | number, x: number, y: number, z: number, locked: boolean, p5: number, p6: number, p7: number): void;

declare function DownloadCheck(): void;

declare function DrawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;

declare function DrawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawDebugText_2d(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;

declare function DrawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;

declare function DrawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawMarker(_type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: number, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;

declare function DrawNotification(blink: boolean, p1: boolean): number;

declare function DrawNotificationIcon(p0: string, p1: string, p2: number, p3: number, p4: string): number;

declare function DrawNotification_2(blink: boolean, p1: boolean): number;

declare function DrawNotification_3(blink: boolean, p1: boolean): number;

declare function DrawNotification_4(blink: boolean, p1: boolean): number;

declare function DrawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;

declare function DrawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

declare function DrawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

declare function DrawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawScaleformMovie_3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;

declare function DrawScaleformMovie_3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;

declare function DrawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number): void;

declare function DrawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadow: number): void;

declare function DrawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

declare function DynamicMixerRelatedFn(p0: number, p1: string, p2: number): void;

declare function EjectJb700Roof(vehicle: number, x: number, y: number, z: number): void;

declare function EnableAlienBloodVfx(Toggle: boolean): void;

declare function EnableAllControlActions(inputGroup: number): void;

declare function EnableClownBloodVfx(toggle: boolean): void;

declare function EnableControlAction(inputGroup: number, control: number, enable: boolean): void;

declare function EnableCrosshairThisFrame(): void;

declare function EnableDeathbloodSeethrough(p0: boolean): void;

declare function EnableDispatchService(dispatchType: number, toggle: boolean): void;

declare function EnableInteriorProp(interiorID: number, propName: string): void;

declare function EnableLaserSightRendering(toggle: boolean): void;

declare function EnableMovieSubtitles(toggle: boolean): void;

declare function EnableScriptBrainSet(brainSet: number): void;

declare function EnableSpecialAbility(player: number, toggle: boolean): void;

declare function EnableStuntJumpSet(p0: number): void;

declare function EnableTennisMode(ped: number, toggle: boolean, p2: boolean): void;

declare function EndFindKvp(handle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function EndReplayStats(): void;

declare function EndSrl(): void;

declare function EndTextCommandClearPrint(): void;

declare function EndTextCommandDisplayHelp(p0: number, loop: boolean, beep: boolean, shape: number): void;

declare function EndTextCommandDisplayText(x: number, y: number): void;

declare function EndTextCommandGetLineCount(x: number, y: number): number;

declare function EndTextCommandGetWidth(font: number): number;

declare function EndTextCommandIsMessageDisplayed(): number;

declare function EndTextCommandIsThisHelpMessageBeingDisplayed(p0: number): number;

declare function EndTextCommandObjective(p0: boolean): void;

declare function EndTextCommandPrint(duration: number, drawImmediately: boolean): void;

declare function EndTextCommandScaleformString(): void;

declare function EndTextCommandScaleformString_2(): void;

declare function EndTextCommandSetBlipName(blip: number): void;

declare function EndTextCommandTimer(p0: boolean): void;

declare function ExecuteCommand(commandString: string): void;

declare function ExpandWorldLimits(x: number, y: number, z: number): void;

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

declare function ExplodePedHead(ped: number, weaponHash: string | number): void;

declare function ExplodeProjectiles(ped: number, weaponHash: string | number, p2: boolean): void;

declare function ExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean): void;

declare function ExplodeVehicleInCutscene(vehicle: number, p1: boolean): void;

declare function FadeDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function FadeOutLocalPlayer(p0: boolean): void;

declare function FilloutPmPlayerList(p1: number, p2: number): [number, number];

declare function FilloutPmPlayerListWithNames(p2: number, p3: number): [number, number, number];

declare function FindAnimEventPhase(animDictionary: string, animName: string, p2: string): [number, number, number];

declare function FindFirstObject(outEntity: number): number;

declare function FindFirstPed(outEntity: number): number;

declare function FindFirstPickup(outEntity: number): number;

declare function FindFirstVehicle(outEntity: number): number;

declare function FindKvp(handle: number): string;

declare function FindNextObject(findHandle: number, outEntity: number): number;

declare function FindNextPed(findHandle: number, outEntity: number): number;

declare function FindNextPickup(findHandle: number, outEntity: number): number;

declare function FindNextVehicle(findHandle: number, outEntity: number): number;

declare function FindRadioStationIndex(station: number): number;

declare function FindSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number): [number, number[]];

declare function FixVehicleWindow(vehicle: number, index: number): number;

declare function FlashAbilityBar(toggle: boolean): void;

declare function FlashMinimapDisplay(): void;

declare function FlashWantedDisplay(p0: boolean): number;

declare function Floor(value: number): number;

declare function ForceAmbientSiren(value: boolean): void;

declare function ForceCleanup(cleanupFlags: number): void;

declare function ForceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;

declare function ForceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;

declare function ForceEntityAiAndAnimationUpdate(entity: number): void;

declare function ForcePedMotionState(ped: number, motionStateHash: string | number, p2: boolean, p3: boolean, p4: boolean): number;

declare function ForcePedToOpenParachute(ped: number): void;

declare function ForceRoomForEntity(entity: number, interiorID: number, roomHashKey: string | number): void;

declare function ForceSocialClubUpdate(): void;

declare function FormatFocusHeading(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;

declare function FreezeEntityPosition(entity: number, toggle: boolean): void;

declare function FreezePedCameraRotation(ped: number): void;

declare function FreezeRadioStation(radioStation: string): void;

declare function GenerateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): [number, number, number, number];

declare function GetActiveScreenResolution(): [number, number];

declare function GetActiveVehicleMissionType(veh: number): number;

declare function GetAllVehicles(vehArray: number): number;

declare function GetAllocatedStackSize(): number;

declare function GetAmmoInClip(ped: number, weaponHash: string | number, ammo: number): number;

declare function GetAmmoInPedWeapon(ped: number, weaponhash: string | number): number;

declare function GetAngleBetween_2dVectors(x1: number, y1: number, x2: number, y2: number): number;

declare function GetAnimDuration(animDict: string, animName: string): number;

declare function GetAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): number[];

declare function GetAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): number[];

declare function GetAspectRatio(b: boolean): number;

declare function GetAudibleMusicTrackTextId(): number;

declare function GetBestPedWeapon(ped: number, p1: boolean): number;

declare function GetBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number;

declare function GetBlipAlpha(blip: number): number;

declare function GetBlipColour(blip: number): number;

declare function GetBlipCoords(blip: number): number[];

declare function GetBlipFromEntity(entity: number): number;

declare function GetBlipHudColour(blip: number): number;

declare function GetBlipInfoIdCoord(blip: number): number[];

declare function GetBlipInfoIdDisplay(blip: number): number;

declare function GetBlipInfoIdEntityIndex(blip: number): number;

declare function GetBlipInfoIdIterator(): number;

declare function GetBlipInfoIdPickupIndex(blip: number): number;

declare function GetBlipInfoIdType(blip: number): number;

declare function GetBlipSprite(blip: number): number;

declare function GetBoatAnchor(vehicle: number): number;

declare function GetCamAnimCurrentPhase(cam: number): number;

declare function GetCamCoord(cam: number): number[];

declare function GetCamFarClip(cam: number): number;

declare function GetCamFarDof(cam: number): number;

declare function GetCamFov(cam: number): number;

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
declare function GetCamMatrix(camera: number): [number[], number[], number[], number[]];

declare function GetCamNearClip(cam: number): number;

declare function GetCamRot(cam: number, rotationOrder: number): number[];

declare function GetCamSplineNodeIndex(cam: number): number;

declare function GetCamSplineNodePhase(cam: number): number;

declare function GetCamSplinePhase(cam: number): number;

declare function GetCargobobHookPosition(cargobob: number): number[];

declare function GetCauseOfMostRecentForceCleanup(): number;

declare function GetCgoffset(rope: number): number[];

declare function GetClipSetForScriptedGunTask(p0: number): string;

declare function GetClockDayOfMonth(): number;

declare function GetClockDayOfWeek(): number;

declare function GetClockHours(): number;

declare function GetClockMinutes(): number;

declare function GetClockMonth(): number;

declare function GetClockSeconds(): number;

declare function GetClockYear(): number;

declare function GetClosestFirePos(x: number, y: number, z: number): [number, number[]];

declare function GetClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: number): [number, number[]];

declare function GetClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: string | number, isMission: boolean, p6: boolean, p7: boolean): number;

declare function GetClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): [number, number];

declare function GetClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): number;

declare function GetClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: string | number, flags: number): number;

declare function GetClosestVehicleNode(x: number, y: number, z: number, nodeType: number, p5: number, p6: number): [number, number[]];

declare function GetClosestVehicleNodeWithHeading(x: number, y: number, z: number, nodeType: number, p6: number, p7: number): [number, number[], number];

declare function GetCloudHatOpacity(): number;

declare function GetCollisionNormalOfLastHitForEntity(entity: number): number[];

declare function GetCombatFloat(ped: number, p1: number): number;

declare function GetContentCategory(p0: number): number;

declare function GetContentDescriptionHash(p0: number): number;

declare function GetContentFileVersion(p0: number, p1: number): number;

declare function GetContentId(p0: number): string;

declare function GetContentUserId(p0: number): string;

declare function GetControlInstructionalButton(inputGroup: number, control: number, p2: boolean): string;

declare function GetControlNormal(inputGroup: number, control: number): number;

declare function GetControlValue(inputGroup: number, control: number): number;

declare function GetConvertibleRoofState(vehicle: number): number;

declare function GetCurrentFrontendMenu(): number;

declare function GetCurrentLanguageId(): number;

declare function GetCurrentNotification(): number;

declare function GetCurrentPedVehicleWeapon(ped: number, weaponHash: number): number;

declare function GetCurrentPedWeapon(ped: number, p2: boolean): [number, number];

declare function GetCurrentPedWeaponEntityIndex(ped: number): number;

declare function GetCurrentPlaybackForVehicle(p0: number): number;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

declare function GetCurrentScriptedConversationLine(): number;

declare function GetCurrentWebsiteId(): number;

declare function GetCutsceneSectionPlaying(): number;

declare function GetCutsceneTime(): number;

declare function GetCutsceneTotalDuration(): number;

declare function GetDateAndTimeFromUnixEpoch(unixEpoch: number, timeStructure: number): void;

declare function GetDeadPedPickupCoords(ped: number, p1: number, p2: number): number[];

declare function GetDecalWashLevel(decal: number): number;

declare function GetDefaultScriptRendertargetRenderId(): number;

declare function GetDesObject(x: number, y: number, z: number, rotation: number, name: string): number;

declare function GetDesObjectState(handle: number): number;

declare function GetDisabledControlNormal(inputGroup: number, control: number): number;

declare function GetDisplayNameFromVehicleModel(modelHash: string | number): string;

declare function GetDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;

declare function GetDlcVehicleData(dlcVehicleIndex: number, outData: number): number;

declare function GetDlcVehicleFlags(dlcVehicleIndex: number): number;

declare function GetDlcVehicleModel(dlcVehicleIndex: number): number;

declare function GetDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: number): number;

declare function GetDlcWeaponData(dlcWeaponIndex: number, outData: number): number;

declare function GetEntityAlpha(entity: number): number;

declare function GetEntityAnimCurrentTime(entity: number, animDict: string, animName: string): number;

declare function GetEntityAnimTotalTime(entity: number, animDict: string, animName: string): number;

declare function GetEntityAttachedTo(entity: number): number;

declare function GetEntityAttachedToTowTruck(towTruck: number): number;

declare function GetEntityBoneIndexByName(entity: number, boneName: string): number;

declare function GetEntityCollisonDisabled(entity: number): number;

declare function GetEntityCoords(entity: number, alive: boolean): number[];

declare function GetEntityForwardVector(entity: number): number[];

declare function GetEntityForwardX(entity: number): number;

declare function GetEntityForwardY(entity: number): number;

declare function GetEntityHeading(entity: number): number;

declare function GetEntityHealth(entity: number): number;

declare function GetEntityHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;

declare function GetEntityHeightAboveGround(entity: number): number;

declare function GetEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function GetEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function GetEntityLodDist(entity: number): number;

declare function GetEntityMatrix(entity: number): [number[], number[], number[], number[]];

declare function GetEntityMaxHealth(entity: number): number;

declare function GetEntityModel(entity: number): number;

declare function GetEntityPhysicsHeading(entity: number): number;

declare function GetEntityPitch(entity: number): number;

declare function GetEntityPlayerIsFreeAimingAt(player: number, entity: number): number;

declare function GetEntityPopulationType(entity: number): number;

declare function GetEntityQuaternion(entity: number): [number, number, number, number];

declare function GetEntityRoll(entity: number): number;

declare function GetEntityRotation(entity: number, rotationOrder: number): number[];

declare function GetEntityRotationVelocity(entity: number): number[];

declare function GetEntityScript(entity: number, script: number): string;

declare function GetEntitySpeed(entity: number): number;

declare function GetEntitySpeedVector(entity: number, relative: boolean): number[];

declare function GetEntitySubmergedLevel(entity: number): number;

declare function GetEntityType(entity: number): number;

declare function GetEntityUprightValue(entity: number): number;

declare function GetEntityVelocity(entity: number): number[];

declare function GetEntryPositionOfDoor(vehicle: number, doorIndex: number): number[];

declare function GetEventAtIndex(p0: boolean, p1: number): number;

declare function GetEventData(p0: boolean, p1: number, p3: number): [number, number];

declare function GetEventExists(p0: boolean, p1: number): number;

declare function GetFakeWantedLevel(): number;

declare function GetFirstBlipInfoId(blipSprite: number): number;

declare function GetFirstParentIdForPedType(_type: number): number;

declare function GetFollowPedCamViewMode(): number;

declare function GetFollowPedCamZoomLevel(): number;

declare function GetFollowVehicleCamViewMode(): number;

declare function GetFollowVehicleCamZoomLevel(): number;

declare function GetForcedComponent(componentHash: string | number, componentId: number): [number, number, number];

declare function GetFrameCount(): number;

declare function GetFrameTime(): number;

declare function GetFreeStackSlotsCount(stackSize: number): number;

declare function GetGameTimer(): number;

declare function GetGameplayCamCoord(): number[];

declare function GetGameplayCamCoords(): number[];

declare function GetGameplayCamFov(): number;

declare function GetGameplayCamRelativeHeading(): number;

declare function GetGameplayCamRelativePitch(): number;

declare function GetGameplayCamRot(rotationOrder: number): number[];

declare function GetGameplayCamRot(rotationOrder: number): number[];

declare function GetGameplayCamZoom(): number;

declare function GetGlobalCharBuffer(): string;

declare function GetGroundZFor_3dCoord(x: number, y: number, z: number, unk: boolean): [number, number];

declare function GetGroupSize(groupID: number): [number, number];

declare function GetHasLowerableWheels(vehicle: number): number;

declare function GetHashKey(value: string): number;

declare function GetHashNameForComponent(entity: number, componentId: number, drawableVariant: number, textureVariant: number): number;

declare function GetHashNameForProp(entity: number, componentId: number, propIndex: number, propTextureIndex: number): number;

declare function GetHashOfMapAreaAtCoords(x: number, y: number, z: number): number;

declare function GetHashOfThisScriptName(): number;

declare function GetHeadingFromVector_2d(dx: number, dy: number): number;

declare function GetHeliEngineHealth(vehicle: number): number;

declare function GetHeliMainRotorHealth(vehicle: number): number;

declare function GetHeliTailRotorHealth(vehicle: number): number;

declare function GetHudColour(hudColorIndex: number): [number, number, number, number];

declare function GetHudComponentPosition(id: number): number[];

declare function GetIdOfNextThreadInEnumeration(): number;

declare function GetIdOfThisThread(): number;

declare function GetIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function GetIndexOfCurrentLevel(): number;

declare function GetIndexedItemInItemset(p0: number, p1: number): number;

declare function GetInstanceId(): number;

declare function GetInteriorAtCoords(x: number, y: number, z: number): number;

declare function GetInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;

declare function GetInteriorFromCollision(x: number, y: number, z: number): number;

declare function GetInteriorFromEntity(entity: number): number;

declare function GetInteriorGroupId(interiorID: number): number;

declare function GetIsHidef(): number;

declare function GetIsLeftVehicleHeadlightDamaged(vehicle: number): number;

declare function GetIsLoadingScreenActive(): number;

declare function GetIsMultiplayerBrief(p0: boolean): void;

declare function GetIsPedGadgetEquipped(ped: number, gadgetHash: string | number): number;

declare function GetIsRightVehicleHeadlightDamaged(vehicle: number): number;

declare function GetIsSlowRoadFlag(nodeID: number): number;

declare function GetIsTaskActive(ped: number, taskNumber: number): number;

declare function GetIsVehicleEngineRunning(vehicle: number): number;

declare function GetIsVehiclePrimaryColourCustom(vehicle: number): number;

declare function GetIsVehicleSecondaryColourCustom(vehicle: number): number;

declare function GetIsWaypointRecordingLoaded(name: string): number;

declare function GetIsWidescreen(): number;

declare function GetItemsetSize(p0: number): number;

declare function GetJackTarget(ped: number): number;

declare function GetKeyForEntityInRoom(entity: number): number;

declare function GetLabelText(labelName: string): string;

declare function GetLandingGearState(vehicle: number): number;

declare function GetLastDrivenVehicle(): number;

declare function GetLastMaterialHitByEntity(entity: number): number;

declare function GetLastPedInVehicleSeat(vehicle: number, seatIndex: number): number;

declare function GetLengthOfLiteralString(_string: string): number;

declare function GetLengthOfString(p0: string): number;

declare function GetLengthOfStringWithThisTextLabel(gxt: string): number;

declare function GetLiveryName(vehicle: number, liveryIndex: number): string;

declare function GetLocalPlayerAimState(): number;

declare function GetLocalTime(): [number, number, number, number, number, number];

declare function GetLockonRangeOfCurrentPedWeapon(ped: number): number;

declare function GetMainPlayerBlipId(): number;

declare function GetMaxAmmo(ped: number, weaponHash: string | number, ammo: number): number;

declare function GetMaxAmmoInClip(ped: number, weaponHash: string | number, p2: boolean): number;

declare function GetMaxRangeOfCurrentPedWeapon(ped: number): number;

declare function GetMaxWantedLevel(): number;

declare function GetMaximumNumberOfPhotos(): number;

declare function GetMeleeTargetForPed(ped: number): number;

declare function GetMillisecondsPerGameMinute(): number;

declare function GetMissionFlag(): number;

declare function GetMobilePhonePosition(): number[];

declare function GetMobilePhoneRenderId(renderId: number): void;

declare function GetMobilePhoneRotation(p1: number): number[];

declare function GetModSlotName(vehicle: number, modType: number): string;

declare function GetModTextLabel(vehicle: number, modType: number, modValue: number): string;

declare function GetModelDimensions(modelHash: string | number): [number[], number[]];

declare function GetMount(ped: number): number;

declare function GetMusicPlaytime(): number;

declare function GetNameOfThread(threadId: number): string;

declare function GetNameOfZone(x: number, y: number, z: number): string;

declare function GetNamedRendertargetRenderId(p0: string): number;

declare function GetNavmeshRouteDistanceRemaining(ped: number): [number, number, number];

declare function GetNavmeshRouteResult(ped: number): number;

declare function GetNearestPlayerToEntity(entity: number): number;

declare function GetNearestPlayerToEntityOnTeam(entity: number, team: number): number;

declare function GetNetworkIdFromSoundId(soundId: number): number;

declare function GetNetworkTime(): number;

declare function GetNextBlipInfoId(blipSprite: number): number;

declare function GetNextWeatherTypeHashName(): number;

declare function GetNgstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

declare function GetNgstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

declare function GetNoLoadingScreen(): number;

declare function GetNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, unknown1: number, unknown2: number, unknown3: number): [number, number[]];

declare function GetNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodetype: number, p10: number, p11: number): [number, number[], number];

declare function GetNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;

declare function GetNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outHeading: number, p6: number, p7: number, p8: number): [number, number[]];

declare function GetNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, unknown2: number, unknown3: number, unknown4: number): [number, number[], number, number];

declare function GetNumDecorations(character: number): number;

declare function GetNumDlcVehicles(): number;

declare function GetNumDlcWeaponComponents(dlcWeaponIndex: number): number;

declare function GetNumDlcWeapons(): number;

declare function GetNumForcedComponents(componentHash: string | number): number;

declare function GetNumHairColors(): number;

declare function GetNumHeadOverlayValues(overlayID: number): number;

declare function GetNumMakeupColors(): number;

declare function GetNumMembershipDesc(): number;

declare function GetNumModColors(p0: number, p1: boolean): number;

declare function GetNumModKits(vehicle: number): number;

declare function GetNumParentPedsOfType(_type: number): number;

declare function GetNumPropsFromOutfit(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;

declare function GetNumReservedMissionObjects(p0: boolean): number;

declare function GetNumReservedMissionPeds(p0: boolean): number;

declare function GetNumReservedMissionVehicles(p0: boolean): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key to look up in the resource manifest.
 * @param resourceName The resource name.
 */
declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

declare function GetNumResources(): number;

declare function GetNumVehicleMods(vehicle: number, modType: number): number;

declare function GetNumVehicleWindowTints(): number;

declare function GetNumberOfActiveBlips(): number;

declare function GetNumberOfEvents(p0: boolean): number;

declare function GetNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;

declare function GetNumberOfInstancesOfScriptWithNameHash(scriptHash: string | number): number;

declare function GetNumberOfPassengerVoiceVariations(p0: number): number;

declare function GetNumberOfPedDrawableVariations(ped: number, componentId: number): number;

declare function GetNumberOfPedPropDrawableVariations(ped: number, propId: number): number;

declare function GetNumberOfPedPropTextureVariations(ped: number, propId: number, drawableId: number): number;

declare function GetNumberOfPedTextureVariations(ped: number, componentId: number, drawableId: number): number;

declare function GetNumberOfPlayers(): number;

declare function GetNumberOfStreamingRequests(): number;

declare function GetNumberOfVehicleColours(vehicle: number): number;

declare function GetNumberOfVehicleDoors(vehicle: number): number;

declare function GetNumberOfVehicleNumberPlates(): number;

declare function GetObjectFragmentDamageHealth(p0: number, p1: boolean): number;

declare function GetObjectIndexFromEntityIndex(entity: number): number;

declare function GetObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): number[];

declare function GetOffsetFromEntityGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): number[];

declare function GetOffsetFromEntityInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): number[];

declare function GetOffsetFromInteriorInWorldCoords(interiorID: number, x: number, y: number, z: number): number[];

declare function GetOnlineVersion(): string;

declare function GetOnscreenKeyboardResult(): string;

declare function GetPauseMenuState(): number;

declare function GetPedAccuracy(ped: number): number;

declare function GetPedAlertness(ped: number): number;

declare function GetPedAmmoByType(ped: number, ammoType: number): number;

declare function GetPedAmmoTypeFromWeapon(ped: number, weaponHash: string | number): number;

declare function GetPedAmmoTypeFromWeapon_2(ped: number, weaponHash: string | number): number;

declare function GetPedArmour(ped: number): number;

declare function GetPedAsGroupLeader(groupID: number): number;

declare function GetPedAsGroupMember(groupID: number, memberNumber: number): number;

declare function GetPedBoneCoords(ped: number, boneId: number, offsetX: number, offsetY: number, offsetZ: number): number[];

declare function GetPedBoneIndex(ped: number, boneId: number): number;

declare function GetPedCauseOfDeath(ped: number): number;

declare function GetPedCombatMovement(ped: number): number;

declare function GetPedCombatRange(ped: number): number;

declare function GetPedConfigFlag(ped: number, flagId: number, p2: boolean): number;

declare function GetPedDecorationsState(ped: number): number;

declare function GetPedDefensiveAreaPosition(ped: number, p1: boolean): number[];

declare function GetPedDesiredMoveBlendRatio(ped: number): number;

declare function GetPedDrawableVariation(ped: number, componentId: number): number;

declare function GetPedEnveffScale(ped: number): number;

declare function GetPedExtractedDisplacement(ped: number, worldSpace: boolean): number[];

declare function GetPedFloodInvincibility(ped: number, p1: boolean): void;

declare function GetPedGroupIndex(ped: number): number;

declare function GetPedHeadBlendData(ped: number, headBlendData: number): number;

declare function GetPedHeadOverlayValue(ped: number, overlayID: number): number;

declare function GetPedInVehicleSeat(vehicle: number, index: number): number;

declare function GetPedIndexFromEntityIndex(entity: number): number;

declare function GetPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;

declare function GetPedLastDamageBone(ped: number, outBone: number): number;

declare function GetPedLastWeaponImpactCoord(ped: number): [number, number[]];

declare function GetPedMaxHealth(ped: number): number;

declare function GetPedMoney(ped: number): number;

declare function GetPedNearbyPeds(ped: number, ignore: number): [number, number];

declare function GetPedNearbyVehicles(ped: number, sizeAndVehs: number): number;

declare function GetPedPaletteVariation(ped: number, componentId: number): number;

declare function GetPedParachuteLandingType(ped: number): number;

declare function GetPedParachuteState(ped: number): number;

declare function GetPedParachuteTintIndex(ped: number, outTintIndex: number): void;

declare function GetPedPropIndex(ped: number, componentId: number): number;

declare function GetPedPropTextureIndex(ped: number, componentId: number): number;

declare function GetPedRagdollBoneIndex(ped: number, bone: number): number;

declare function GetPedRelationshipGroupDefaultHash(ped: number): number;

declare function GetPedRelationshipGroupHash(ped: number): number;

declare function GetPedResetFlag(ped: number, flagId: number): number;

declare function GetPedSourceOfDeath(ped: number): number;

declare function GetPedStealthMovement(ped: number): number;

declare function GetPedTextureVariation(ped: number, componentId: number): number;

declare function GetPedTimeOfDeath(ped: number): number;

declare function GetPedType(ped: number): number;

declare function GetPedUsingVehicleDoor(vehicle: number, doorIndex: number): number;

declare function GetPedWaypointDistance(p0: number): number;

declare function GetPedWaypointProgress(p0: number): number;

declare function GetPedWeaponTintIndex(ped: number, weaponHash: string | number): number;

declare function GetPedWeapontypeInSlot(ped: number, weaponSlot: string | number): number;

declare function GetPedheadshotTxdString(handle: number): string;

declare function GetPedsJacker(ped: number): number;

declare function GetPhoneGestureAnimCurrentTime(ped: number): number;

declare function GetPhoneGestureAnimTotalTime(ped: number): number;

declare function GetPickupCoords(pickup: number): number[];

declare function GetPickupObject(pickup: number): number;

declare function GetPlayerCurrentStealthNoise(player: number): number;

declare function GetPlayerFromServerId(serverId: number): number;

declare function GetPlayerGroup(player: number): number;

declare function GetPlayerHasReserveParachute(player: number): number;

declare function GetPlayerHeadsetSoundAlternate(p0: string, p1: number): void;

declare function GetPlayerIndex(): number;

declare function GetPlayerInvincible(player: number): number;

declare function GetPlayerMaxArmour(player: number): number;

declare function GetPlayerName(player: number): string;

declare function GetPlayerParachutePackTintIndex(player: number, tintIndex: number): void;

declare function GetPlayerParachuteSmokeTrailColor(player: number): [number, number, number];

declare function GetPlayerParachuteTintIndex(player: number, tintIndex: number): void;

declare function GetPlayerPed(player: number): number;

declare function GetPlayerPedIsFollowing(ped: number): number;

declare function GetPlayerPedScriptIndex(player: number): number;

declare function GetPlayerRadioStationGenre(): number;

declare function GetPlayerRadioStationIndex(): number;

declare function GetPlayerRadioStationName(): string;

declare function GetPlayerReserveParachuteTintIndex(player: number, index: number): void;

declare function GetPlayerRgbColour(player: number): [number, number, number];

declare function GetPlayerServerId(player: number): number;

declare function GetPlayerShortSwitchState(): number;

declare function GetPlayerSprintStaminaRemaining(player: number): number;

declare function GetPlayerSprintTimeRemaining(player: number): number;

declare function GetPlayerSwitchState(): number;

declare function GetPlayerSwitchType(): number;

declare function GetPlayerTargetEntity(player: number, entity: number): number;

declare function GetPlayerTeam(player: number): number;

declare function GetPlayerUnderwaterTimeRemaining(player: number): number;

declare function GetPlayerWantedCentrePosition(player: number): number[];

declare function GetPlayerWantedLevel(player: number): number;

declare function GetPlayersLastVehicle(): number;

declare function GetPositionInRecording(p0: number): number;

declare function GetPositionOfVehicleRecordingAtTime(p0: number, p1: number, p2: string): number[];

declare function GetPosixTime(): number;

declare function GetPosixTime(): [number, number, number, number, number, number];

declare function GetPrevWeatherTypeHashName(): number;

declare function GetProfileSetting(profileSetting: number): number;

declare function GetPropFromOutfit(outfit: number, slot: number, item: number): number;

declare function GetPstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetPstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetRadioStationName(radioStation: number): string;

declare function GetRainLevel(): number;

declare function GetRandomEventFlag(): number;

declare function GetRandomFloatInRange(startRange: number, endRange: number): number;

declare function GetRandomIntInRange(startRange: number, endRange: number): number;

declare function GetRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;

declare function GetRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function GetRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function GetRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: string | number, flags: number): number;

declare function GetRandomVehicleModelInMemory(p0: boolean): [number, number];

declare function GetRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): [number, number[], number];

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

declare function GetRelationshipBetweenGroups(group1: string | number, group2: string | number): number;

declare function GetRelationshipBetweenPeds(ped1: number, ped2: number): number;

declare function GetRenderingCam(): number;

declare function GetResourceByFindIndex(findIndex: number): string;

declare function GetResourceKvpFloat(key: string): number;

declare function GetResourceKvpInt(key: string): number;

declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 * @param resourceName The resource name.
 */
declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;

declare function GetRoomKeyFromEntity(entity: number): number;

declare function GetRoomKeyFromGameplayCam(): number;

declare function GetRootContentId(p0: number): string;

declare function GetRopeLastVertexCoord(rope: number): number;

declare function GetRopeLength(rope: number): number;

declare function GetRopeVertexCoord(rope: number, vertex: number): number;

declare function GetRopeVertexCount(rope: number): number;

declare function GetRotationOfVehicleRecordingAtTime(p0: number, p1: number, p2: number): number;

declare function GetSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: number): [number, number[]];

declare function GetSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): number[];

declare function GetSafeZoneSize(): number;

declare function GetScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): [number, number, number];

declare function GetScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): [number, number, number];

declare function GetScreenEffectIsActive(effectName: string): number;

declare function GetScreenResolution(): [number, number];

declare function GetScriptTaskStatus(targetPed: number, taskHash: string | number): number;

declare function GetScriptedCoverPointCoords(coverpoint: number): number[];

declare function GetSeatPedIsTryingToEnter(ped: number): number;

declare function GetSelectedPedWeapon(ped: number): number;

declare function GetSequenceProgress(ped: number): number;

declare function GetShapeTestResult(rayHandle: number): [number, any /* actually bool */, number[], number[], number];

declare function GetShapeTestResultEx(rayHandle: number): [number, any /* actually bool */, number[], number[], number, number];

declare function GetShopPedComponent(p0: string | number, p1: number): void;

declare function GetShopPedOutfit(p0: number, p1: number): void;

declare function GetShopPedOutfitLocate(p0: number): number;

declare function GetShopPedQueryComponent(componentId: number, outComponent: number): void;

declare function GetShopPedQueryOutfit(p0: number, outfit: number): void;

declare function GetShopPedQueryProp(p0: number, p1: number): void;

declare function GetSnowLevel(): number;

declare function GetSoundId(): number;

declare function GetSoundIdFromNetworkId(netId: number): number;

declare function GetStateOfClosestDoorOfType(_type: string | number, x: number, y: number, z: number): [any /* actually bool */, number];

declare function GetStreamPlayTime(): number;

declare function GetStreetNameAtCoord(x: number, y: number, z: number): [number, number];

declare function GetStreetNameFromHashKey(hash: string | number): string;

declare function GetSupportsGpsRouteFlag(nodeID: number): number;

declare function GetSynchronizedScenePhase(sceneID: number): number;

declare function GetSynchronizedSceneRate(sceneID: number): number;

declare function GetTattooZone(collection: string | number, overlay: string | number): number;

declare function GetTextScaleHeight(size: number, font: number): number;

declare function GetTextSubstring(text: string, position: number, length: number): string;

declare function GetTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;

declare function GetTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;

declare function GetTextureResolution(textureDict: string, textureName: string): number[];

declare function GetThisScriptName(): string;

declare function GetTimeAsString(time: number): string;

declare function GetTimeDifference(timeA: number, timeB: number): number;

declare function GetTimeOffset(timeA: number, timeB: number): number;

declare function GetTimePositionInRecording(p0: number): number;

declare function GetTimeSinceLastArrest(): number;

declare function GetTimeSinceLastDeath(): number;

declare function GetTimeSincePlayerDroveAgainstTraffic(player: number): number;

declare function GetTimeSincePlayerDroveOnPavement(player: number): number;

declare function GetTimeSincePlayerHitPed(player: number): number;

declare function GetTimeSincePlayerHitVehicle(player: number): number;

declare function GetTimecycleModifierIndex(): number;

declare function GetTotalDurationOfVehicleRecording(p0: number, p1: number): number;

declare function GetTotalDurationOfVehicleRecordingId(p0: number): number;

declare function GetTotalScInboxIds(): number;

declare function GetTrainCarriage(train: number, trailerNumber: number): number;

declare function GetTunablesContentModifierId(contentHash: string | number): number;

declare function GetTupstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetTupstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetTvChannel(): number;

declare function GetTvVolume(): number;

declare function GetUserLanguageId(): number;

declare function GetUtcTime(): [number, number, number, number, number, number];

declare function GetVariantComponent(componentHash: string | number, componentId: number): [number, number, number];

declare function GetVehicleAcceleration(vehicle: number): number;

declare function GetVehicleAcceleration(vehicle: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

declare function GetVehicleAttachedToCargobob(cargobob: number): number;

declare function GetVehicleAttachedToEntity(object: number): number;

declare function GetVehicleBodyHealth(vehicle: number): number;

declare function GetVehicleBodyHealth_2(vehicle: number): number;

declare function GetVehicleCauseOfDestruction(vehicle: number): number;

declare function GetVehicleClass(vehicle: number): number;

declare function GetVehicleClassFromName(modelHash: string | number): number;

declare function GetVehicleClassMaxAcceleration(vehicleClass: number): number;

declare function GetVehicleClassMaxAgility(vehicleClass: number): number;

declare function GetVehicleClassMaxBraking(vehicleClass: number): number;

declare function GetVehicleClassMaxTraction(vehicleClass: number): number;

declare function GetVehicleClutch(vehicle: number): number;

declare function GetVehicleColor(vehicle: number): [number, number, number];

declare function GetVehicleColourCombination(vehicle: number): number;

declare function GetVehicleColours(vehicle: number): [number, number];

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleCustomPrimaryColour(vehicle: number): [number, number, number];

declare function GetVehicleCustomSecondaryColour(vehicle: number): [number, number, number];

declare function GetVehicleDashboardColour(vehicle: number, color: number): void;

declare function GetVehicleDashboardSpeed(vehicle: number): number;

declare function GetVehicleDefaultHorn(vehicle: number): number;

declare function GetVehicleDeformationAtPos(vehicle: number, offsetX: number, offsetY: number, offsetZ: number): number[];

declare function GetVehicleDirtLevel(vehicle: number): number;

declare function GetVehicleDoorAngleRatio(vehicle: number, door: number): number;

declare function GetVehicleDoorLockStatus(vehicle: number): number;

declare function GetVehicleDoorsLockedForPlayer(vehicle: number, player: number): number;

declare function GetVehicleEngineHealth(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

declare function GetVehicleEnveffScale(vehicle: number): number;

declare function GetVehicleExtraColours(vehicle: number): [number, number];

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleHandbrake(vehicle: number): number;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): number[];

declare function GetVehicleHighGear(vehicle: number): number;

declare function GetVehicleIndexFromEntityIndex(entity: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

declare function GetVehicleInteriorColour(vehicle: number, color: number): void;

declare function GetVehicleLayoutHash(vehicle: number): number;

declare function GetVehicleLightsState(vehicle: number): [number, any /* actually bool */, any /* actually bool */];

declare function GetVehicleLivery(vehicle: number): number;

declare function GetVehicleLiveryCount(vehicle: number): number;

declare function GetVehicleMaxBraking(vehicle: number): number;

declare function GetVehicleMaxNumberOfPassengers(vehicle: number): number;

declare function GetVehicleMaxTraction(vehicle: number): number;

declare function GetVehicleMod(vehicle: number, modType: number): number;

declare function GetVehicleModColor_1(vehicle: number): [number, number, number];

declare function GetVehicleModColor_1Name(vehicle: number, p1: boolean): string;

declare function GetVehicleModColor_2(vehicle: number): [number, number];

declare function GetVehicleModColor_2Name(vehicle: number): string;

declare function GetVehicleModData(vehicle: number, modType: number, modIndex: number): number;

declare function GetVehicleModKit(vehicle: number): number;

declare function GetVehicleModKitType(vehicle: number): number;

declare function GetVehicleModModifierValue(vehicle: number, modType: number, modIndex: number): number;

declare function GetVehicleModVariation(vehicle: number, modType: number): number;

declare function GetVehicleModelAcceleration(modelHash: string | number): number;

declare function GetVehicleModelMaxBraking(modelHash: string | number): number;

declare function GetVehicleModelMaxSpeed(modelHash: string | number): number;

declare function GetVehicleModelMaxTraction(modelHash: string | number): number;

declare function GetVehicleModelNumberOfSeats(modelHash: string | number): number;

declare function GetVehicleNeonLightsColour(vehicle: number): [number, number, number];

declare function GetVehicleNextGear(vehicle: number): number;

declare function GetVehicleNodePosition(nodeId: number): number[];

declare function GetVehicleNodeProperties(x: number, y: number, z: number): [number, number, number];

declare function GetVehicleNumberOfPassengers(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

declare function GetVehicleNumberPlateText(vehicle: number): string;

declare function GetVehicleNumberPlateTextIndex(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

declare function GetVehicleOwner(vehicle: number, entity: number): number;

declare function GetVehiclePedIsIn(ped: number, lastVehicle: boolean): number;

declare function GetVehiclePedIsTryingToEnter(ped: number): number;

declare function GetVehiclePedIsUsing(ped: number): number;

declare function GetVehiclePetrolTankHealth(vehicle: number): number;

declare function GetVehiclePlateType(vehicle: number): number;

declare function GetVehicleRecordingId(p0: number, p1: string): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

declare function GetVehicleSuspensionHeight(vehicle: number): number;

declare function GetVehicleTrailerVehicle(vehicle: number, trailer: number): number;

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleTyreSmokeColor(vehicle: number): [number, number, number];

declare function GetVehicleTyresCanBurst(vehicle: number): number;

declare function GetVehicleWaypointProgress(p0: number): number;

declare function GetVehicleWaypointTargetPoint(p0: number): number;

declare function GetVehicleWheelHealth(vehicle: number, wheelIndex: number): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelType(vehicle: number): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
declare function GetVehicleWheelXOffset(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelXrot(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWindowTint(vehicle: number): number;

declare function GetWantedLevelRadius(player: number): number;

declare function GetWantedLevelThreshold(wantedLevel: number): number;

declare function GetWaterHeight(x: number, y: number, z: number, height: number): number;

declare function GetWaterHeightNoWaves(x: number, y: number, z: number, height: number): number;

declare function GetWavesIntensity(): number;

declare function GetWaypointDistanceAlongRoute(p0: string, p1: number): number;

declare function GetWeaponClipSize(weaponHash: string | number): number;

declare function GetWeaponComponentHudStats(componentHash: string | number, outData: number): number;

declare function GetWeaponComponentTypeModel(componentHash: string | number): number;

declare function GetWeaponDamageType(weaponHash: string | number): number;

declare function GetWeaponHashFromPickup(pickupHash: number): number;

declare function GetWeaponHudStats(weaponHash: string | number, outData: number): number;

declare function GetWeaponObjectFromPed(ped: number, p1: boolean): number;

declare function GetWeaponObjectTintIndex(weapon: number): number;

declare function GetWeaponTintCount(weaponHash: string | number): number;

declare function GetWeapontypeGroup(weaponHash: string | number): number;

declare function GetWeapontypeModel(weaponHash: string | number): number;

declare function GetWeapontypeSlot(weaponHash: string | number): number;

declare function GetWeatherTypeTransition(): [number, number, number];

declare function GetWindDirection(): number[];

declare function GetWindSpeed(): number;

declare function GetWorldPositionOfEntityBone(entity: number, boneIndex: number): number[];

declare function GetZoneAtCoords(x: number, y: number, z: number): number;

declare function GetZoneFromNameId(zoneName: string): number;

declare function GetZonePopschedule(zoneId: number): number;

declare function GetZoneScumminess(zoneId: number): number;

declare function GiveAchievementToPlayer(achievement: number): number;

declare function GiveDelayedWeaponToPed(ped: number, weaponHash: string | number, time: number, equipNow: boolean): void;

declare function GivePedHelmet(ped: number, cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;

declare function GivePedNmMessage(ped: number): void;

declare function GivePedToPauseMenu(ped: number, p1: number): void;

declare function GivePlayerRagdollControl(player: number, toggle: boolean): void;

declare function GiveWeaponComponentToPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

declare function GiveWeaponComponentToWeaponObject(weaponObject: number, addonHash: string | number): void;

declare function GiveWeaponObjectToPed(weaponObject: number, ped: number): void;

declare function GiveWeaponToPed(ped: number, weaponHash: string | number, ammoCount: number, isHidden: boolean, equipNow: boolean): void;

declare function HasAchievementBeenPassed(achievement: number): number;

declare function HasActionModeAssetLoaded(asset: string): number;

declare function HasAdditionalTextLoaded(slot: number): number;

declare function HasAnimDictLoaded(animDict: string): number;

declare function HasAnimEventFired(entity: number, actionHash: string | number): number;

declare function HasAnimSetLoaded(animSet: string): number;

declare function HasBgScriptBeenDownloaded(): number;

declare function HasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): number;

declare function HasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): number;

declare function HasButtonCombinationJustBeenEntered(hash: string | number, amount: number): number;

declare function HasCheatStringJustBeenEntered(hash: string | number): number;

declare function HasClipSetLoaded(clipSet: string): number;

declare function HasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: string | number, p5: number): number;

declare function HasCollisionForModelLoaded(model: string | number): number;

declare function HasCollisionLoadedAroundEntity(entity: number): number;

declare function HasCutsceneFinished(): number;

declare function HasCutsceneLoaded(): number;

declare function HasEntityAnimFinished(entity: number, animDict: string, animName: string, p3: number): number;

declare function HasEntityBeenDamagedByAnyObject(entity: number): number;

declare function HasEntityBeenDamagedByAnyPed(entity: number): number;

declare function HasEntityBeenDamagedByAnyVehicle(entity: number): number;

declare function HasEntityBeenDamagedByEntity(entity1: number, entity2: number, p2: boolean): number;

declare function HasEntityBeenDamagedByWeapon(entity: number, weaponHash: string | number, weaponType: number): number;

declare function HasEntityClearLosToEntity(entity1: number, entity2: number, traceType: number): number;

declare function HasEntityClearLosToEntityInFront(entity1: number, entity2: number): number;

declare function HasEntityCollidedWithAnything(entity: number): number;

declare function HasForceCleanupOccurred(cleanupFlags: number): number;

declare function HasHudScaleformLoaded(hudComponent: number): number;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): number;

declare function HasModelLoaded(model: string | number): number;

declare function HasNamedPtfxAssetLoaded(fxName: string): number;

declare function HasNamedScaleformMovieLoaded(scaleformName: string): number;

declare function HasNetworkTimeStarted(): number;

declare function HasObjectBeenBroken(object: number): number;

declare function HasPedBeenDamagedByWeapon(ped: number, weaponHash: string | number, weaponType: number): number;

declare function HasPedGotWeapon(ped: number, weaponHash: string | number, p2: boolean): number;

declare function HasPedGotWeaponComponent(ped: number, weaponHash: string | number, componentHash: string | number): number;

declare function HasPedHeadBlendFinished(ped: number): number;

declare function HasPedReceivedEvent(p0: number, p1: number): number;

declare function HasPickupBeenCollected(pickup: number): number;

declare function HasPlayerBeenSpottedInStolenVehicle(player: number): number;

declare function HasPlayerDamagedAtLeastOneNonAnimalPed(player: number): number;

declare function HasPlayerDamagedAtLeastOnePed(player: number): number;

declare function HasPlayerLeftTheWorld(player: number): number;

declare function HasPlayerTeleportFinished(player: number): number;

declare function HasPreloadModsFinished(p0: number): number;

declare function HasPtfxAssetLoaded(): number;

declare function HasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): number;

declare function HasScaleformMovieLoaded(scaleformHandle: number): number;

declare function HasScriptLoaded(scriptName: string): number;

declare function HasScriptWithNameHashLoaded(scriptHash: string | number): number;

declare function HasSoundFinished(soundId: number): number;

declare function HasStealthModeAssetLoaded(asset: string): number;

declare function HasStreamedTextureDictLoaded(textureDict: string): number;

declare function HasThisAdditionalTextLoaded(gxt: string, slot: number): number;

declare function HasThisCutsceneLoaded(cutsceneName: string): number;

declare function HasTunablesBeenDownloaded(): number;

declare function HasVehicleAssetLoaded(vehicleAsset: number): number;

declare function HasVehicleGotProjectileAttached(driver: number, vehicle: number, weaponHash: string | number, p3: number): number;

declare function HasVehicleJumpingAbility(vehicle: number): number;

declare function HasVehicleParachute(vehicle: number): number;

declare function HasVehicleRecordingBeenLoaded(p0: number, p1: number): number;

declare function HasVehicleRocketBoost(vehicle: number): number;

declare function HasWeaponAssetLoaded(weaponHash: string | number): number;

declare function HasWeaponGotWeaponComponent(weapon: number, addonHash: string | number): number;

declare function HideHelpTextThisFrame(): void;

declare function HideHudAndRadarThisFrame(): void;

declare function HideHudComponentThisFrame(id: number): void;

declare function HideLoadingOnFadeThisFrame(): void;

declare function HideMapObjectThisFrame(mapObjectHash: string | number): void;

declare function HideNumberOnBlip(blip: number): void;

declare function HidePedBloodDamageByZone(ped: number, p1: number, p2: boolean): void;

declare function HidePedWeaponForScriptedCutscene(ped: number, toggle: boolean): void;

declare function HideScriptedHudComponentThisFrame(id: number): void;

declare function HideSpecialAbilityLockonOperation(p0: number, p1: boolean): void;

declare function HighlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;

declare function HintAmbientAudioBank(p0: number, p1: number): number;

declare function HintScriptAudioBank(p0: number, p1: number): number;

declare function IgnoreNextRestart(toggle: boolean): void;

declare function InitShopPedComponent(outComponent: number): void;

declare function InitShopPedProp(outProp: number): void;

declare function IntToParticipantindex(value: number): number;

declare function IntToPlayerindex(value: number): number;

declare function InterruptConversation(p0: number): [number, number];

declare function InvokeFunctionReference(referenceIdentity: string, argsSerialized: string, argsLength: number, retvalLength: number): string;

declare function IsAceAllowed(object: string): number;

declare function IsAimCamActive(): number;

declare function IsAlarmPlaying(alarmName: string): number;

declare function IsAmbientSpeechDisabled(ped: number): number;

declare function IsAmbientSpeechPlaying(p0: number): number;

declare function IsAmbientZoneEnabled(ambientZone: string): number;

declare function IsAnEntity(handle: number): number;

declare function IsAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): number;

declare function IsAnyPedNearPoint(x: number, y: number, z: number, radius: number): number;

declare function IsAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): number;

declare function IsAnySpeechPlaying(ped: number): number;

declare function IsAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): number;

declare function IsAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: number, p12: boolean): number;

declare function IsAudioSceneActive(scene: string): number;

declare function IsAussieVersion(): number;

declare function IsAutoSaveInProgress(): number;

declare function IsBigVehicle(vehicle: number): number;

declare function IsBitSet(address: number, offset: number): number;

declare function IsBlipFlashing(blip: number): number;

declare function IsBlipOnMinimap(blip: number): number;

declare function IsBlipShortRange(blip: number): number;

declare function IsBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;

declare function IsBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): number;

declare function IsBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): number;

declare function IsCamActive(cam: number): number;

declare function IsCamInterpolating(cam: number): number;

declare function IsCamPlayingAnim(cam: number, animName: string, animDictionary: string): number;

declare function IsCamRendering(cam: number): number;

declare function IsCamShaking(cam: number): number;

declare function IsCamSplinePaused(p0: number): number;

declare function IsCinematicCamRendering(): number;

declare function IsCinematicCamShaking(): number;

declare function IsCinematicShotActive(p0: number): number;

declare function IsControlEnabled(inputGroup: number, control: number): number;

declare function IsControlJustPressed(inputGroup: number, control: number): number;

declare function IsControlJustReleased(inputGroup: number, control: number): number;

declare function IsControlPressed(inputGroup: number, control: number): number;

declare function IsControlReleased(inputGroup: number, control: number): number;

declare function IsConversationPedDead(ped: number): number;

declare function IsCopPedInArea_3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsCopVehicleInArea_3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number;

declare function IsCutsceneActive(): number;

declare function IsCutscenePlaying(): number;

declare function IsDamageTrackerActiveOnNetworkId(netID: number): number;

declare function IsDecalAlive(decal: number): number;

declare function IsDisabledControlJustPressed(inputGroup: number, control: number): number;

declare function IsDisabledControlJustReleased(inputGroup: number, control: number): number;

declare function IsDisabledControlPressed(inputGroup: number, control: number): number;

declare function IsDlcDataEmpty(dlcData: number): number;

declare function IsDlcPresent(dlcHash: string | number): number;

declare function IsDlcVehicleMod(modData: number): number;

declare function IsDoorClosed(door: string | number): number;

declare function IsDrivebyTaskUnderneathDrivingTask(ped: number): number;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): number;

declare function IsDurangoVersion(): number;

declare function IsEntityAMissionEntity(entity: number): number;

declare function IsEntityAPed(entity: number): number;

declare function IsEntityAVehicle(entity: number): number;

declare function IsEntityAnObject(entity: number): number;

declare function IsEntityAtCoord(entity: number, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: boolean, p8: boolean, p9: number): number;

declare function IsEntityAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): number;

declare function IsEntityAttached(entity: number): number;

declare function IsEntityAttachedToAnyObject(entity: number): number;

declare function IsEntityAttachedToAnyPed(entity: number): number;

declare function IsEntityAttachedToAnyVehicle(entity: number): number;

declare function IsEntityAttachedToEntity(_from: number, to: number): number;

declare function IsEntityDead(entity: number): number;

declare function IsEntityFocus(entity: number): number;

declare function IsEntityInAir(entity: number): number;

declare function IsEntityInAngledArea(entity: number, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p8: boolean, p9: boolean, p10: number): number;

declare function IsEntityInArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: number): number;

declare function IsEntityInWater(entity: number): number;

declare function IsEntityInZone(entity: number, zone: string): number;

declare function IsEntityOccluded(entity: number): number;

declare function IsEntityOnFire(entity: number): number;

declare function IsEntityOnScreen(entity: number): number;

declare function IsEntityPlayingAnim(entity: number, animDict: string, animName: string, p4: number): number;

declare function IsEntityStatic(entity: number): number;

declare function IsEntityTouchingEntity(entity: number, targetEntity: number): number;

declare function IsEntityTouchingModel(entity: number, modelHash: string | number): number;

declare function IsEntityUpright(entity: number, angle: number): number;

declare function IsEntityUpsidedown(entity: number): number;

declare function IsEntityVisible(entity: number): number;

declare function IsEntityVisibleToScript(entity: number): number;

declare function IsEntityWaitingForWorldCollision(entity: number): number;

declare function IsExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): number;

declare function IsExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): number;

declare function IsFirstPersonAimCamActive(): number;

declare function IsFollowPedCamActive(): number;

declare function IsFollowVehicleCamActive(): number;

declare function IsFrontendFading(): number;

declare function IsGameInControlOfMusic(): number;

declare function IsGameplayCamLookingBehind(): number;

declare function IsGameplayCamRendering(): number;

declare function IsGameplayCamShaking(): number;

declare function IsGameplayHintActive(): number;

declare function IsGarageEmpty(garage: number, p1: boolean, p2: number): number;

declare function IsHeliPartBroken(vehicle: number, p1: boolean, p2: boolean, p3: boolean): number;

declare function IsHelpMessageBeingDisplayed(): number;

declare function IsHelpMessageFadingOut(): number;

declare function IsHelpMessageOnScreen(): number;

declare function IsHornActive(vehicle: number): number;

declare function IsHudComponentActive(id: number): number;

declare function IsHudHidden(): number;

declare function IsHudPreferenceSwitchedOn(): number;

declare function IsInItemset(p0: number, p1: number): number;

declare function IsInVehicleCamDisabled(): number;

declare function IsIncidentValid(incidentId: number): number;

declare function IsInputDisabled(inputGroup: number): number;

declare function IsInputJustDisabled(inputGroup: number): number;

declare function IsInteriorCapped(interiorID: number): number;

declare function IsInteriorDisabled(interiorID: number): number;

declare function IsInteriorPropEnabled(interiorID: number, propName: string): number;

declare function IsInteriorReady(interiorID: number): number;

declare function IsInteriorRenderingDisabled(): number;

declare function IsInteriorScene(): number;

declare function IsIplActive(iplName: string): number;

declare function IsItemsetValid(p0: number): number;

declare function IsLoadingPromptBeingDisplayed(): number;

declare function IsLookInverted(): number;

declare function IsMemoryCardInUse(): number;

declare function IsMessageBeingDisplayed(): number;

declare function IsMinigameInProgress(): number;

declare function IsMinimapAreaRevealed(x: number, y: number, radius: number): number;

declare function IsMissionCompletePlaying(): number;

declare function IsMissionCreatorBlip(blip: number): number;

declare function IsMobilePhoneCallOngoing(): number;

declare function IsMobilePhoneRadioActive(): number;

declare function IsModelAPed(modelHash: string | number): number;

declare function IsModelAVehicle(model: string | number): number;

declare function IsModelInCdimage(model: string | number): number;

declare function IsModelValid(model: string | number): number;

declare function IsMountedWeaponTaskUnderneathDrivingTask(ped: number): number;

declare function IsMoveBlendRatioRunning(ped: number): number;

declare function IsMoveBlendRatioSprinting(ped: number): number;

declare function IsMoveBlendRatioStill(ped: number): number;

declare function IsMoveBlendRatioWalking(ped: number): number;

declare function IsMpGamerTagActive(gamerTagId: number): number;

declare function IsNamedRendertargetLinked(hash: string | number): number;

declare function IsNamedRendertargetRegistered(p0: string): number;

declare function IsNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsNetworkLoadingScene(): number;

declare function IsNetworkVehicleBeenDamagedByAnyObject(x: number, y: number, z: number): number;

declare function IsNewLoadSceneActive(): number;

declare function IsNewLoadSceneLoaded(): number;

declare function IsNextWeatherType(weatherType: string): number;

declare function IsNightvisionInactive(): number;

declare function IsObjectNearPoint(objectHash: string | number, x: number, y: number, z: number, range: number): number;

declare function IsObjectVisible(object: number): number;

declare function IsObjectWithinBrainActivationRange(object: number): number;

declare function IsOrbisVersion(): number;

declare function IsParticleFxDelayedBlink(): number;

declare function IsPauseMenuActive(): number;

declare function IsPauseMenuRestarting(): number;

declare function IsPcVersion(): number;

declare function IsPedAPlayer(ped: number): number;

declare function IsPedActiveInScenario(ped: number): number;

declare function IsPedAimingFromCover(ped: number): number;

declare function IsPedArmed(ped: number, p1: number): number;

declare function IsPedBeingArrested(ped: number): number;

declare function IsPedBeingJacked(ped: number): number;

declare function IsPedBeingStealthKilled(ped: number): number;

declare function IsPedBeingStunned(ped: number, p1: number): number;

declare function IsPedBlushColorValid(colorID: number): number;

declare function IsPedClimbing(ped: number): number;

declare function IsPedComponentVariationValid(ped: number, componentId: number, drawableId: number, textureId: number): number;

declare function IsPedCuffed(ped: number): number;

declare function IsPedCurrentWeaponSilenced(ped: number): number;

declare function IsPedDeadOrDying(ped: number, p1: boolean): number;

declare function IsPedDiving(ped: number): number;

declare function IsPedDoingDriveby(ped: number): number;

declare function IsPedDucking(ped: number): number;

declare function IsPedEvasiveDiving(ped: number, evadingEntity: number): number;

declare function IsPedFacingPed(ped: number, otherPed: number, angle: number): number;

declare function IsPedFalling(ped: number): number;

declare function IsPedFatallyInjured(ped: number): number;

declare function IsPedFleeing(ped: number): number;

declare function IsPedGettingIntoAVehicle(ped: number): number;

declare function IsPedGettingUp(ped: number): number;

declare function IsPedGoingIntoCover(ped: number): number;

declare function IsPedGroupMember(ped: number, groupId: number): number;

declare function IsPedHairColorValid(colorID: number): number;

declare function IsPedHangingOnToVehicle(ped: number): number;

declare function IsPedHeadtrackingEntity(ped: number, entity: number): number;

declare function IsPedHeadtrackingPed(ped1: number, ped2: number): number;

declare function IsPedHuman(ped: number): number;

declare function IsPedHurt(ped: number): number;

declare function IsPedInAnyBoat(ped: number): number;

declare function IsPedInAnyHeli(ped: number): number;

declare function IsPedInAnyPlane(ped: number): number;

declare function IsPedInAnyPoliceVehicle(ped: number): number;

declare function IsPedInAnySub(ped: number): number;

declare function IsPedInAnyTaxi(ped: number): number;

declare function IsPedInAnyTrain(ped: number): number;

declare function IsPedInAnyVehicle(ped: number, atGetIn: boolean): number;

declare function IsPedInCombat(ped: number, target: number): number;

declare function IsPedInCover(ped: number, p1: boolean): number;

declare function IsPedInCoverFacingLeft(ped: number): number;

declare function IsPedInCurrentConversation(ped: number): number;

declare function IsPedInFlyingVehicle(ped: number): number;

declare function IsPedInGroup(ped: number): number;

declare function IsPedInMeleeCombat(ped: number): number;

declare function IsPedInModel(ped: number, modelHash: string | number): number;

declare function IsPedInParachuteFreeFall(ped: number): number;

declare function IsPedInVehicle(ped: number, vehicle: number, atGetIn: boolean): number;

declare function IsPedInWrithe(ped: number): number;

declare function IsPedInjured(ped: number): number;

declare function IsPedJacking(ped: number): number;

declare function IsPedJumping(ped: number): number;

declare function IsPedJumpingOutOfVehicle(ped: number): number;

declare function IsPedLipstickColorValid(colorID: number): number;

declare function IsPedMale(ped: number): number;

declare function IsPedModel(ped: number, modelHash: string | number): number;

declare function IsPedOnAnyBike(ped: number): number;

declare function IsPedOnFoot(ped: number): number;

declare function IsPedOnMount(ped: number): number;

declare function IsPedOnSpecificVehicle(ped: number, vehicle: number): number;

declare function IsPedOnVehicle(ped: number): number;

declare function IsPedPerformingStealthKill(ped: number): number;

declare function IsPedPlantingBomb(ped: number): number;

declare function IsPedProne(ped: number): number;

declare function IsPedPropValid(ped: number, componentId: number, drawableId: number, TextureId: number): number;

declare function IsPedRagdoll(ped: number): number;

declare function IsPedReloading(ped: number): number;

declare function IsPedRespondingToEvent(ped: number, event: number): number;

declare function IsPedRingtonePlaying(ped: number): number;

declare function IsPedRunning(ped: number): number;

declare function IsPedRunningArrestTask(ped: number): number;

declare function IsPedRunningMobilePhoneTask(ped: number): number;

declare function IsPedRunningRagdollTask(ped: number): number;

declare function IsPedShooting(ped: number): number;

declare function IsPedShootingInArea(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): number;

declare function IsPedSittingInAnyVehicle(ped: number): number;

declare function IsPedSittingInVehicle(ped: number, vehicle: number): number;

declare function IsPedSprinting(ped: number): number;

declare function IsPedStandingInCover(ped: number): number;

declare function IsPedStill(ped: number): number;

declare function IsPedStopped(ped: number): number;

declare function IsPedStrafing(ped: number): number;

declare function IsPedSwimming(ped: number): number;

declare function IsPedSwimmingUnderWater(ped: number): number;

declare function IsPedTracked(ped: number): number;

declare function IsPedTryingToEnterALockedVehicle(ped: number): number;

declare function IsPedUsingActionMode(ped: number): number;

declare function IsPedUsingAnyScenario(ped: number): number;

declare function IsPedUsingScenario(ped: number, scenario: string): number;

declare function IsPedVaulting(ped: number): number;

declare function IsPedWalking(ped: number): number;

declare function IsPedWeaponComponentActive(ped: number, weaponHash: string | number, componentHash: string | number): number;

declare function IsPedWeaponReadyToShoot(ped: number): number;

declare function IsPedWearingHelmet(ped: number): number;

declare function IsPedheadshotReady(handle: number): number;

declare function IsPedheadshotValid(handle: number): number;

declare function IsPickupWithinRadius(pickupHash: string | number, x: number, y: number, z: number, radius: number): number;

declare function IsPlaybackGoingOnForVehicle(p0: number): number;

declare function IsPlaybackUsingAiGoingOnForVehicle(p0: number): number;

declare function IsPlayerBeingArrested(player: number, atArresting: boolean): number;

declare function IsPlayerCamControlDisabled(): number;

declare function IsPlayerClimbing(player: number): number;

declare function IsPlayerControlOn(player: number): number;

declare function IsPlayerDead(player: number): number;

declare function IsPlayerFreeAiming(player: number): number;

declare function IsPlayerFreeAimingAtEntity(player: number, entity: number): number;

declare function IsPlayerFreeForAmbientTask(player: number): number;

declare function IsPlayerInCutscene(player: number): number;

declare function IsPlayerLoggingInNp(): number;

declare function IsPlayerOnline(): number;

declare function IsPlayerPlaying(player: number): number;

declare function IsPlayerPressingHorn(player: number): number;

declare function IsPlayerReadyForCutscene(player: number): number;

declare function IsPlayerRidingTrain(player: number): number;

declare function IsPlayerScriptControlOn(player: number): number;

declare function IsPlayerSwitchInProgress(): number;

declare function IsPlayerTargettingAnything(player: number): number;

declare function IsPlayerTargettingEntity(player: number, entity: number): number;

declare function IsPlayerTeleportActive(): number;

declare function IsPlayerVehicleRadioEnabled(): number;

declare function IsPlayerWantedLevelGreater(player: number, wantedLevel: number): number;

declare function IsPlayingPhoneGestureAnim(ped: number): number;

declare function IsPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, p11: boolean): number;

declare function IsPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function IsPointOnRoad(x: number, y: number, z: number, vehicle: number): number;

declare function IsPositionOccupied(x: number, y: number, z: number, range: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: number, p10: boolean): number;

declare function IsPrevWeatherType(weatherType: string): number;

declare function IsProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): number;

declare function IsProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): number;

declare function IsProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, _type: number, p7: boolean): number;

declare function IsPs3Version(): number;

declare function IsRadarEnabled(): number;

declare function IsRadarHidden(): number;

declare function IsRadarPreferenceSwitchedOn(): number;

declare function IsRadioRetuning(): number;

declare function IsRecording(): number;

declare function IsRockstarBanned(): number;

declare function IsScInboxValid(p0: number): number;

declare function IsScenarioGroupEnabled(scenarioGroup: string): number;

declare function IsScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): number;

declare function IsScenarioTypeEnabled(scenarioType: string): number;

declare function IsScreenFadedIn(): number;

declare function IsScreenFadedOut(): number;

declare function IsScreenFadingIn(): number;

declare function IsScreenFadingOut(): number;

declare function IsScriptGlobalShaking(): number;

declare function IsScriptedConversationLoaded(): number;

declare function IsScriptedConversationOngoing(): number;

declare function IsScriptedHudComponentActive(id: number): number;

declare function IsScriptedScenarioPedUsingConditionalAnim(ped: number, animDict: string, anim: string): number;

declare function IsScriptedSpeechPlaying(p0: number): number;

declare function IsSeethroughActive(): number;

declare function IsShockingEventInSphere(_type: number, x: number, y: number, z: number, radius: number): number;

declare function IsSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsSniperInverted(): number;

declare function IsSocialClubActive(): number;

declare function IsSocialclubBanned(): number;

declare function IsSpecialAbilityActive(player: number): number;

declare function IsSpecialAbilityEnabled(player: number): number;

declare function IsSpecialAbilityMeterFull(player: number): number;

declare function IsSpecialAbilityUnlocked(playerModel: string | number): number;

declare function IsSphereVisible(x: number, y: number, z: number, radius: number): number;

declare function IsSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): number;

declare function IsSphereVisibleToPlayer(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function IsSrlLoaded(): number;

declare function IsStreamPlaying(): number;

declare function IsStreamingAdditionalText(p0: number): number;

declare function IsStringNull(_string: string): number;

declare function IsStringNullOrEmpty(_string: string): number;

declare function IsStuntJumpInProgress(): number;

declare function IsStuntJumpMessageShowing(): number;

declare function IsSubtitlePreferenceSwitchedOn(): number;

declare function IsSynchronizedSceneLooped(sceneID: number): number;

declare function IsSynchronizedSceneRunning(sceneId: number): number;

declare function IsSystemUiBeingDisplayed(): number;

declare function IsTaxiLightOn(vehicle: number): number;

declare function IsTennisMode(ped: number): number;

declare function IsTextChatActive(): number;

declare function IsThisAMinigameScript(): number;

declare function IsThisModelABicycle(model: string | number): number;

declare function IsThisModelABike(model: string | number): number;

declare function IsThisModelABoat(model: string | number): number;

declare function IsThisModelACar(model: string | number): number;

declare function IsThisModelAHeli(model: string | number): number;

declare function IsThisModelAPlane(model: string | number): number;

declare function IsThisModelAQuadbike(model: string | number): number;

declare function IsThisModelATrain(model: string | number): number;

declare function IsThisModelAnAmphibiousCar(model: string | number): number;

declare function IsThisModelAnEmergencyBoat(model: string | number): number;

declare function IsThreadActive(threadId: number): number;

declare function IsTimeEqualTo(timeA: number, timeB: number): number;

declare function IsTimeLessThan(timeA: number, timeB: number): number;

declare function IsTimeMoreThan(timeA: number, timeB: number): number;

declare function IsToggleModOn(vehicle: number, modType: number): number;

declare function IsTrackedPedVisible(ped: number): number;

declare function IsTrackedPointVisible(point: number): number;

declare function IsUiLoadingMultiplayer(): number;

declare function IsValidInterior(interiorID: number): number;

declare function IsVehicleAConvertible(vehicle: number, p1: boolean): number;

declare function IsVehicleAlarmActivated(vehicle: number): number;

declare function IsVehicleAlarmSet(vehicle: number): number;

declare function IsVehicleAttachedToCargobob(cargobob: number, vehicleAttached: number): number;

declare function IsVehicleAttachedToTowTruck(towTruck: number, vehicle: number): number;

declare function IsVehicleAttachedToTrailer(vehicle: number): number;

declare function IsVehicleBumperBrokenOff(vehicle: number, front: boolean): number;

declare function IsVehicleDamaged(vehicle: number): number;

declare function IsVehicleDoorDamaged(veh: number, doorID: number): number;

declare function IsVehicleDoorFullyOpen(vehicle: number, doorIndex: number): number;

declare function IsVehicleDriveable(vehicle: number, p1: boolean): number;

declare function IsVehicleEngineStarting(vehicle: number): number;

declare function IsVehicleExtraTurnedOn(vehicle: number, extraId: number): number;

declare function IsVehicleHighDetail(vehicle: number): number;

declare function IsVehicleInBurnout(vehicle: number): number;

declare function IsVehicleInGarageArea(garageName: string, vehicle: number): number;

declare function IsVehicleInteriorLightOn(vehicle: number): number;

declare function IsVehicleModel(vehicle: number, model: string | number): number;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): number;

declare function IsVehicleNeonLightEnabled(vehicle: number, index: number): number;

declare function IsVehicleNodeIdValid(vehicleNodeId: number): number;

declare function IsVehicleOnAllWheels(vehicle: number): number;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): number;

declare function IsVehicleRadioLoud(vehicle: number): number;

declare function IsVehicleRocketBoostActive(vehicle: number): number;

declare function IsVehicleSearchlightOn(vehicle: number): number;

declare function IsVehicleSeatFree(vehicle: number, seatIndex: number): number;

declare function IsVehicleShopResprayAllowed(vehicle: number): number;

declare function IsVehicleSirenOn(vehicle: number): number;

declare function IsVehicleSirenSoundOn(vehicle: number): number;

declare function IsVehicleStolen(vehicle: number): number;

declare function IsVehicleStopped(vehicle: number): number;

declare function IsVehicleStoppedAtTrafficLights(vehicle: number): number;

declare function IsVehicleStuckOnRoof(vehicle: number): number;

declare function IsVehicleStuckTimerUp(vehicle: number, p1: number, p2: number): number;

declare function IsVehicleTyreBurst(vehicle: number, wheelID: number, completely: boolean): number;

declare function IsVehicleVisible(vehicle: number): number;

declare function IsVehicleWanted(vehicle: number): number;

declare function IsVehicleWindowIntact(vehicle: number, windowIndex: number): number;

declare function IsWarningMessageActive(): number;

declare function IsWaypointActive(): number;

declare function IsWaypointPlaybackGoingOnForPed(p0: number): number;

declare function IsWaypointPlaybackGoingOnForVehicle(p0: number): number;

declare function IsWeaponValid(weaponHash: string | number): number;

declare function IsWorldPointWithinBrainActivationRange(): number;

declare function IsXbox360Version(): number;

declare function JitterVehicle(vehicle: number, p1: boolean, yaw: number, pitch: number, roll: number): void;

declare function KeyHudColour(p0: boolean, p1: number): void;

declare function KnockOffPedProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function KnockPedOffVehicle(ped: number): void;

declare function Leaderboards2ReadByHandle(): [number, number, number];

declare function Leaderboards2ReadByRadius(p1: number): [number, number, number];

declare function Leaderboards2ReadByRank(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadByRow(p2: number, p4: number, p6: number): [number, number, number, number, number];

declare function Leaderboards2ReadByScoreFloat(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadByScoreInt(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadFriendsByRow(p2: number, p3: boolean, p4: number, p5: number): [number, number, number];

declare function Leaderboards2WriteData(p0: number): number;

declare function LeaderboardsCacheDataRow(p0: number): number;

declare function LeaderboardsClearCacheData(): void;

declare function LeaderboardsGetCacheDataRow(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetCacheExists(p0: number): number;

declare function LeaderboardsGetCacheTime(p0: number): number;

declare function LeaderboardsGetColumnId(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetColumnType(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetNumberOfColumns(p0: number, p1: number): number;

declare function LeaderboardsReadClear(p0: number, p1: number, p2: number): number;

declare function LeaderboardsReadClearAll(): number;

declare function LeaderboardsReadPending(p0: number, p1: number, p2: number): number;

declare function LeaderboardsReadSuccessful(p0: number, p1: number, p2: number): number;

declare function LinkNamedRendertarget(hash: string | number): void;

declare function LoadAllObjectsNow(): void;

declare function LoadAllPathNodes(keepInMemory: boolean): number;

declare function LoadInterior(interiorID: number): void;

declare function LoadMovieMeshSet(movieMeshSetName: string): number;

declare function LoadMpDlcMaps(): void;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param fileName The file in the resource.
 * @param resourceName The resource name.
 * @return The file contents
 */
declare function LoadResourceFile(resourceName: string, fileName: string): string;

declare function LoadRopeData(rope: number, rope_preset: string): number;

declare function LoadScene(x: number, y: number, z: number): void;

declare function LoadSpDlcMaps(): void;

declare function LoadStream(streamName: string, soundSet: string): number;

declare function LoadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): number;

declare function LoadTvChannel(tvChannel: string | number): number;

declare function LoadUgcFile(filename: string): number;

declare function LockMinimapAngle(angle: number): void;

declare function LockMinimapPosition(x: number, y: number): void;

declare function LogDebugInfo(p0: string): void;

declare function LowerConvertibleRoof(vehicle: number, instantlyLower: boolean): void;

declare function MakePedReload(ped: number): number;

declare function MarkObjectForDeletion(object: number): void;

declare function MaxRadioStationIndex(): number;

declare function ModifyWater(x: number, y: number, radius: number, height: number): void;

declare function MoveFinger(direction: number): void;

declare function MoveVehicleDecals(p0: number, p1: number): void;

declare function N_0x0032a6dba562c518(): void;

declare function N_0x0035bb914316f1e3(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x00c09f246abedd82(vehicleClass: number): number;

declare function N_0x01095c95cd46b624(p0: number): number;

declare function N_0x011883f41211432a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x013e5cfc38cd5387(p0: number): [number, number, number];

declare function N_0x0150b6ff25a9e2e5(): void;

declare function N_0x015b03ee1c43e6ec(p0: number): void;

declare function N_0x01708e8dd3ff8c65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x017568a8182d98a6(p0: number): number;

declare function N_0x01a358d9128b7a86(): number;

declare function N_0x01abce5e7cbda196(): number;

declare function N_0x01bb4d577d38bd9e(p0: number, p1: number): void;

declare function N_0x0218ba067d249dea(): void;

declare function N_0x0225778816fdc28c(p0: number): void;

declare function N_0x02369d5c8a51fdcf(p0: boolean): void;

declare function N_0x02398b627547189c(p0: number, p1: boolean): void;

declare function N_0x024a60deb0ea69f0(p0: number, player: number, p2: number, p3: number): number;

declare function N_0x02a8bec6fd9af660(p1: number): [number, number];

declare function N_0x02ac28f3a01fa04a(p0: number): number;

declare function N_0x02ada21ea2f6918f(): number;

declare function N_0x02deaac8f8ea7fe7(p0: string): void;

declare function N_0x02e93c796abd3a97(p0: boolean): void;

declare function N_0x031acb6aba18c729(radioStation: string, p1: string): void;

declare function N_0x03300b57fcac6ddb(p0: boolean): void;

declare function N_0x0378c08504160d0d(p0: number): number;

declare function N_0x0379daf89ba09aa5(p0: number, p1: number): void;

declare function N_0x0395cb47b022e62c(p0: number): number;

declare function N_0x03c27e13b42a0e82(doorHash: string | number, p1: number, p2: boolean, p3: boolean): void;

declare function N_0x03c2eebb04b3fb72(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x03ea03af85a85cb7(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: number): number;

declare function N_0x03f1a106bda7dd3e(): void;

declare function N_0x03fc694ae06c5a20(): void;

declare function N_0x0419b167ee128f33(p0: number, p1: number): number;

declare function N_0x041c7f2a6c9894e6(p0: number, p1: number, p2: number): number;

declare function N_0x044dbad7a7fa2be5(p0: string, p1: string): void;

declare function N_0x04655f9d075d0ae5(p0: boolean): void;

declare function N_0x047cbed6f6f8b63c(): void;

declare function N_0x04918a41bc9b8157(p0: number, p1: number, p2: number): number;

declare function N_0x04d90ba8207ada2d(p0: number): void;

declare function N_0x052991e59076e4e4(p0: string | number, p1: number): number;

declare function N_0x0581730ab9380412(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x0596843b34b95ce5(p0: number, p1: number): void;

declare function N_0x05f04155a226fbbf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x06087579e7aa85a9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x061cb768363d6424(p0: number, p1: boolean): void;

declare function N_0x0626a247d2405330(): number;

declare function N_0x062d5ead4da2fa6a(): void;

declare function N_0x063ae2b2cc273588(p0: number, p1: boolean): void;

declare function N_0x06462a961e94b67c(): void;

declare function N_0x06582aff74894c75(p0: number, p1: boolean): void;

declare function N_0x065d03a9d6b2c6b5(p0: number, p1: number): void;

declare function N_0x06a320535f5f0248(p0: number): void;

declare function N_0x06a3524161c502ba(p0: number): void;

declare function N_0x06c0023bed16dd6b(p0: number, p1: boolean): void;

declare function N_0x06eaf70ae066441e(p0: number): void;

declare function N_0x06ee9048fd080382(p0: boolean): void;

declare function N_0x06f761ea47c1d3ed(p0: boolean): void;

declare function N_0x075f1d57402c93ba(): number;

declare function N_0x07c313f94746702c(p0: number): number;

declare function N_0x07c61676e5bb52cd(p0: number): number;

declare function N_0x07dbd622d9533857(p0: number): number;

declare function N_0x07dd29d5e22763f1(p0: number): number;

declare function N_0x07eab372c8841d99(p0: number, p1: number, p2: number): number;

declare function N_0x07fb139b592fa687(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x0811381ef5062fec(p0: number): void;

declare function N_0x08a1b82b91900682(p0: number, p1: number, p2: number): void;

declare function N_0x08b0ca7a6ab3ac32(p0: number, p1: number, p2: number): void;

declare function N_0x0923dbf87dff735e(x: number, y: number, z: number): void;

declare function N_0x098760c7461724cd(): void;

declare function N_0x098ab65b9ed9a9ec(p1: number, p2: number): [number, number];

declare function N_0x09c0403ed9a751c2(p0: number): number;

declare function N_0x0a123435a26c36cd(): void;

declare function N_0x0a436b8643716d14(): void;

declare function N_0x0a46af8a78dc5e0a(): void;

declare function N_0x0a50d2604e05cb94(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x0a60017f841a54f2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0a6a279f3aa4fd70(vehicle: number, p1: boolean): void;

declare function N_0x0a6d923dffc9bd89(): number;

declare function N_0x0a9c7f36e5d7b683(p0: number): void;

declare function N_0x0a9f2a468b328e74(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0aa27680a0bd43fa(): void;

declare function N_0x0abc54de641dc0fc(p0: number): number;

declare function N_0x0abf535877897560(p0: number): number;

declare function N_0x0ad9710cee2f590f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x0ad9e8f87ff7c16f(p0: number, p1: boolean): void;

declare function N_0x0ae1f1653b554ab9(p0: number): number;

declare function N_0x0ae73d8df3a762b2(p0: boolean): void;

declare function N_0x0af7b437918103b3(p0: number): void;

declare function N_0x0afc4af510774b47(): void;

declare function N_0x0afce529f69b21ff(): number;

declare function N_0x0b203b4afde53a4f(p2: boolean): [number, number, number];

declare function N_0x0b3e35ac043707d9(p0: number, p1: number): void;

declare function N_0x0b40ed49d7d6ff84(): void;

declare function N_0x0b565b0aae56a0e8(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x0b568201dd99f0eb(p0: boolean): void;

declare function N_0x0b8b7f74bf061c6d(): number;

declare function N_0x0b919e1fb47cc4e0(p0: number): void;

declare function N_0x0bc3144deb678666(modelHash: string | number): number;

declare function N_0x0bca1d2c47b0d269(p0: number, p1: number, p2: number): void;

declare function N_0x0be4be946463f917(p0: number): number;

declare function N_0x0bf3b3bd47d79c08(p0: number, p1: number): void;

declare function N_0x0c0c4e81e1ac60a0(): number;

declare function N_0x0c112765300c7e1e(p0: number): number;

declare function N_0x0c15b0e443b2349d(): number;

declare function N_0x0c1f7d49c39d2289(): number;

declare function N_0x0c4bbf625ca98c4e(ped: number, p1: boolean): void;

declare function N_0x0c5a80a9e096d529(p0: number, p2: number, p3: number, p4: number, p5: number): [number, number];

declare function N_0x0c82d21a77c22d49(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0c8fac83902a62df(p0: number): void;

declare function N_0x0c978fda19692c2c(p0: boolean, p1: boolean): void;

declare function N_0x0cb1be0633c024a8(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0cd9ab83489430ea(p0: boolean): number;

declare function N_0x0cdda42f9e360ca6(vehicle: number, p1: boolean): void;

declare function N_0x0cf54f20de43879c(p0: number): void;

declare function N_0x0cf97f497fe7d048(p0: number): void;

declare function N_0x0d01d20616fc73fb(p0: number, p1: number): void;

declare function N_0x0d30eb83668e63c5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0d5f65a8f4ebdab5(p0: number, p1: number): void;

declare function N_0x0d6ca79eeebd8ca3(): number;

declare function N_0x0d77a82dc2d0da59(): [number, number];

declare function N_0x0dbd5d7e3c5bec3b(): number;

declare function N_0x0e4299c549f0d1f1(p0: boolean): void;

declare function N_0x0e4f77f7b9d74d84(p0: number): void;

declare function N_0x0eacdf8487d5155a(p0: number): void;

declare function N_0x0ede326d47cd0f3e(ped: number, player: number): number;

declare function N_0x0f3b4d4e43177236(p0: number, p1: boolean): void;

declare function N_0x0f62619393661d6e(p0: number, p1: number, p2: number): void;

declare function N_0x0f70731baccfbb96(): number;

declare function N_0x0f73393bac7e6730(): [number, number, number];

declare function N_0x0fb82563989cf4fb(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0fde9dbfc0a6bc65(p0: number): void;

declare function N_0x0fe8e1fcd2b86b33(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0ff2862b61a58af9(p0: boolean): void;

declare function N_0x1033371fc8e842a7(p0: number): number;

declare function N_0x10655fab9915623d(p0: number, p1: number): void;

declare function N_0x1072f115dab0717e(p0: boolean, p1: boolean): void;

declare function N_0x1086127b3a63505e(p0: number, p1: number, p2: number): void;

declare function N_0x1087bc8ec540daeb(p0: number, p1: number): void;

declare function N_0x108be26959a9d9bb(p0: boolean): void;

declare function N_0x1093408b4b9d1146(p0: number, p1: number): void;

declare function N_0x109697e2ffbac8a1(): number;

declare function N_0x10bd227a753b0d84(): number;

declare function N_0x110f526ab784111f(ped: number, p1: number): void;

declare function N_0x1121bfa1a1a522a8(): number;

declare function N_0x112209ce0290c03a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x113e6e3e50e286b0(p0: number): void;

declare function N_0x1153fa02a659051c(): void;

declare function N_0x11579d940949c49e(p0: number): void;

declare function N_0x116fb94dc4b79f17(p0: string): void;

declare function N_0x1171a97a3d3981b6(p2: number, p3: number): [number, number, number];

declare function N_0x1185a8087587322c(p0: boolean): void;

declare function N_0x11b56fbbf7224868(p0: string): void;

declare function N_0x11d1e53a726891fe(p0: number): number;

declare function N_0x11fa5d3479c7dd47(p0: number): void;

declare function N_0x11ff1c80276097ed(p0: number, p1: number, p2: number): void;

declare function N_0x1201e8a3290a3b98(p0: number, p1: number): void;

declare function N_0x120364de2845daf8(p1: number): [number, number];

declare function N_0x1216e0bfa72cc703(p0: number, p1: number): void;

declare function N_0x121fb4dddc2d5291(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x12561fcbb62d5b9c(p0: number): void;

declare function N_0x125e6d638b8605d4(p0: number): number[];

declare function N_0x1280804f7cfd2d6c(p0: number): void;

declare function N_0x129466ed55140f8d(ped: number, toggle: boolean): void;

declare function N_0x12995f2e53ffa601(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x12b6281b6c6706c0(p0: boolean): number;

declare function N_0x12d148d26538d0f9(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x12ded8ca53d47ea5(p0: number): void;

declare function N_0x1312ddd8385aee4e(p0: number, p1: number): void;

declare function N_0x1327e2fe9746baee(p0: number): number;

declare function N_0x13518ff1c6b28938(p0: number): number;

declare function N_0x1353f87e89946207(): number;

declare function N_0x135f9b7b7add2185(p0: number): number;

declare function N_0x1398582b7f72b3ed(p0: number): void;

declare function N_0x13b350b8ad0eee10(): void;

declare function N_0x13c4b962653a5280(): number;

declare function N_0x13f1fcb111b820b0(p0: number): void;

declare function N_0x140e6a44870a11ce(): void;

declare function N_0x144da052257ae7d8(p0: number): void;

declare function N_0x14590ddbedb1ec85(ped: number): number;

declare function N_0x1461b28a06717d68(p0: number): number;

declare function N_0x14621bb1df14e2b2(): void;

declare function N_0x14832bf2aba53fc5(): number;

declare function N_0x148b08c2d2acb884(p0: number, p1: number, p2: number): void;

declare function N_0x14922ed3e38761f0(): number;

declare function N_0x149aee66f0cb3a99(p0: number, p1: number): void;

declare function N_0x14c9fdcc41f81f63(p0: boolean): void;

declare function N_0x14d29bb12d47f68c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x14e0b2d1ad1044e0(): [number, number, number, number];

declare function N_0x14eda9ee27bd1626(p0: number): void;

declare function N_0x14fc5833464340a8(): void;

declare function N_0x152d90e4c1b4738a(): [number, number, number];

declare function N_0x15803fec3b9a872b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

declare function N_0x158ec424f35ec469(p1: boolean): [number, number, number];

declare function N_0x159b7318403a1cd8(p0: number): void;

declare function N_0x15cfa549788d35ef(): void;

declare function N_0x15e33297c3e8dc60(p0: number): void;

declare function N_0x15e69e2802c24b8d(p0: number): void;

declare function N_0x15f944730c832252(p0: number, p1: number): void;

declare function N_0x15ff52b809db2353(p0: number): number;

declare function N_0x1600fd8cf72ebc12(p0: number): void;

declare function N_0x160aa1b32f6139b8(doorHash: string | number): number;

declare function N_0x1612c45f9e3e0d44(): void;

declare function N_0x162c23ca83ed0a62(p0: number): number;

declare function N_0x162f9d995753dc19(): number;

declare function N_0x1632be0ac1e62876(p0: number, p1: number): void;

declare function N_0x1636d7fc127b10d2(p0: number): void;

declare function N_0x163f8b586bc95f2a(coords: number, radius: number, modelHash: string | number, x: number, y: number, z: number, p7: number): [number, number[]];

declare function N_0x164c5ff663790845(p0: number): void;

declare function N_0x1654f24a88a8e3fe(radioStation: string): void;

declare function N_0x1670f8d05056f257(p0: number): number;

declare function N_0x16a304e6cb2bfab9(r: number, g: number, b: number, a: number): void;

declare function N_0x16b5e274bde402f8(vehicle: number, trailer: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x16da8172459434aa(): number;

declare function N_0x16f46fb18c8009e4(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x170910093218c8b9(p0: number): number;

declare function N_0x170f541e1cadd1de(p0: boolean): void;

declare function N_0x171bafb3c60389f4(p0: number): number;

declare function N_0x171df6a0c07fb3dc(p0: number, p1: number): number;

declare function N_0x172f75b6ee2233ba(): number;

declare function N_0x17330ebf2f2124a8(): void;

declare function N_0x17440aa15d1d3739(): void;

declare function N_0x1761dc5d8471cbaa(p0: number, player: number, p2: number): number;

declare function N_0x17ad8c9706bdd88a(p0: number): void;

declare function N_0x17df68d720aa77f8(p0: number): number;

declare function N_0x17e0198b3882c2cb(): void;

declare function N_0x17f7471eaca78290(p0: number): void;

declare function N_0x17fca7199a530203(): number;

declare function N_0x182f266c2d9e2beb(vehicle: number, p1: number): void;

declare function N_0x1888694923ef4591(): void;

declare function N_0x18eb48cfc41f2ea0(p0: number, p1: number): void;

declare function N_0x190428512b240692(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function N_0x192547247864dfdd(vehicle: number, p1: boolean): void;

declare function N_0x1950dae9848a4739(p0: number, p1: number, p2: number): number;

declare function N_0x19853b5b17d77bca(p0: number, p1: number): number;

declare function N_0x1989c6e6f67e76a8(): [number, number, number, number];

declare function N_0x19af7ed9b9d23058(): void;

declare function N_0x19bfed045c647c49(p0: number): number;

declare function N_0x19cafa3c87f7c2ff(): number;

declare function N_0x19d1b791cb3670fe(p0: number, p1: number): void;

declare function N_0x19e50eb6e33e1d28(p0: number): void;

declare function N_0x1a092bb0c3808b96(entity: number, p1: boolean): void;

declare function N_0x1a330d297aac6bc1(ped: number, p1: number): void;

declare function N_0x1a78ad3d8240536f(vehicle: number, p1: boolean): void;

declare function N_0x1a7ce7cd3e653485(p0: number): void;

declare function N_0x1a8e2c8b9cf4549c(): [number, number];

declare function N_0x1a8ea222f9c67dbb(p0: number): number;

declare function N_0x1aa8a837d2169d94(vehicle: number, p1: boolean): void;

declare function N_0x1accfba3d8dab2ee(p0: number, p1: number): number;

declare function N_0x1ad5b71586b94820(p0: number, p2: number): [number, number];

declare function N_0x1b0b4aeed5b9b41c(p0: number): void;

declare function N_0x1b212b26dd3c04df(p0: number, p1: number): void;

declare function N_0x1b2366c3f2a5c8df(): number;

declare function N_0x1b7abe26cbcbf8c7(p0: number, p1: number, p2: number): void;

declare function N_0x1b857666604b1a74(p0: boolean): void;

declare function N_0x1bb299305c3e8c13(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x1bbac99c0bc53656(p0: number, p1: number): void;

declare function N_0x1bbc135a4d25edde(p0: boolean): void;

declare function N_0x1c073274e065c6d2(p0: number, p1: boolean): void;

declare function N_0x1c186837d0619335(p0: number): number;

declare function N_0x1c1b69fae509ba97(p0: number, p1: number): void;

declare function N_0x1c2473301b1c66ba(): number;

declare function N_0x1c4fc5752bcd8e48(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): void;

declare function N_0x1cae5d2e3f9a07f0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x1cba05ae7bd7ee05(p0: number): void;

declare function N_0x1cf38d529d7441d9(vehicle: number, toggle: boolean): void;

declare function N_0x1d4446a62d35b0d0(p0: number, p1: number): number;

declare function N_0x1d4dc17c38feaff0(): number;

declare function N_0x1d610eb0fea716d9(p0: number): number;

declare function N_0x1d97d1e3a70a649f(vehicle: number, p1: boolean): void;

declare function N_0x1da0da9cb3f0c8bf(p0: number): number;

declare function N_0x1dd2139a9a20dce8(): number;

declare function N_0x1dda078d12879eee(p0: number, p1: number, p2: number): void;

declare function N_0x1de0f5f50d723caa(): [number, number, number, number];

declare function N_0x1e3f1b1b891a2aaa(p0: number, p1: number): void;

declare function N_0x1e45b34adebee48e(): void;

declare function N_0x1e77fa7a62ee6c4c(p0: number): number;

declare function N_0x1e9057a74fd73e23(): void;

declare function N_0x1eac5f91bcbc5073(p0: boolean): void;

declare function N_0x1eae0a6e978894a2(p0: number, p1: boolean): void;

declare function N_0x1eae6dd17b7a5efa(p0: number): void;

declare function N_0x1ee7d8df4425f053(p0: number): void;

declare function N_0x1f1e9682483697c7(p0: number, p1: number): number;

declare function N_0x1f2300cb7fa7b7f6(): number;

declare function N_0x1f2e4e06dea8992b(p0: number, p1: boolean): void;

declare function N_0x1f34b0626c594380(p0: number, p1: number): void;

declare function N_0x1f351cf1c6475734(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0x1f3f018bc3afa77c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x1f8e00fb18239600(p0: number): void;

declare function N_0x1f9fb66f3a3842d2(vehicle: number, p1: boolean): void;

declare function N_0x1fc289a0c3ff470f(p0: boolean): number;

declare function N_0x1ff6bf9a63e5757f(): void;

declare function N_0x2016c603d6b8987c(p0: number, p1: boolean): void;

declare function N_0x203b381133817079(p0: number): void;

declare function N_0x206bc5dc9d1ac70a(vehicle: number, p1: boolean): void;

declare function N_0x20746f7b1032a3c7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

declare function N_0x208784099002bc30(missionNameLabel: string, p1: number): void;

declare function N_0x20c6c7e4eb082a7f(p0: boolean): void;

declare function N_0x20fe7fdfeead38c0(): void;

declare function N_0x2107a3773771186d(): number;

declare function N_0x21115bcd6e44656a(p0: number, p1: boolean): void;

declare function N_0x211c4ef450086857(): void;

declare function N_0x213aeb2b90cba7ac(p0: number, p1: number, p2: number): void;

declare function N_0x214cd562a939246a(): number;

declare function N_0x21973bbf8d17edfa(p0: number, p1: number): void;

declare function N_0x21c235bc64831e5a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number[];

declare function N_0x21d04d7bc538c146(p0: number): number;

declare function N_0x21e253a7f8da5dfb(vehicleName: string): void;

declare function N_0x2201c576facaebe8(p0: number, p1: string, p2: number): void;

declare function N_0x2208438012482a1a(ped: number, p1: boolean, p2: boolean): void;

declare function N_0x225798743970412b(p0: number): number;

declare function N_0x228e5c6ad4d74bfd(p0: boolean): void;

declare function N_0x22a249a53034450a(p0: boolean): void;

declare function N_0x22da66936e0fff37(p0: number): number;

declare function N_0x2302c0264ea58d31(): void;

declare function N_0x2311dd7159f00582(vehicle: number, p1: boolean): void;

declare function N_0x23227df0b2115469(): void;

declare function N_0x23789e777d14ce44(): number;

declare function N_0x237d5336a9a54108(p0: number): number;

declare function N_0x2382ab11450ae7ba(p0: number, p1: number): void;

declare function N_0x23b59d8912f94246(): void;

declare function N_0x23ba6b0c2ad7b0d3(p0: boolean): void;

declare function N_0x23f09eadc01449d6(p0: boolean): number;

declare function N_0x241fca5b1aa14f75(): number;

declare function N_0x2432784aca090da4(p0: number): number;

declare function N_0x24409fc4c55cb22d(p0: number): number;

declare function N_0x2467a2d807d37ca3(p0: number): number;

declare function N_0x2472622ce1f2d45f(p0: number, p1: number, p2: number): void;

declare function N_0x247acbc4abbc9d1c(p0: boolean): void;

declare function N_0x2485d34e50a22e84(p0: number, p1: number, p2: number): void;

declare function N_0x24a49beaf468dc90(p0: number, p2: number, p3: number, p4: number): [number, number];

declare function N_0x24e4e51fc16305f9(): number;

declare function N_0x25361a96e0f7e419(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x25367de49d64cf16(vehicle: number, p1: boolean): void;

declare function N_0x25615540d894b814(p0: number, p1: boolean): void;

declare function N_0x2587a48bc88dfadf(p0: boolean): void;

declare function N_0x259ba6d4e6f808f1(p0: number): void;

declare function N_0x25b99872d588a101(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x25d990f8e0e3f13c(): void;

declare function N_0x25f87b30c382fca7(): void;

declare function N_0x25fc3e33a31ad0c9(p0: boolean): void;

declare function N_0x2605663bd4f23b5d(p0: number): void;

declare function N_0x260ee4fdbdf4db01(p0: number): number;

declare function N_0x261e97ad7bcf3d40(p0: boolean): void;

declare function N_0x2632482fd6b9ab87(): void;

declare function N_0x265559da40b3f327(p0: number): void;

declare function N_0x265635150fb0d82e(): void;

declare function N_0x267c78c60e806b9a(p0: number, p1: boolean): void;

declare function N_0x26903d9cd1175f2c(p0: number, p1: number): number;

declare function N_0x26af0e8e30bd2a2c(ped: number): number;

declare function N_0x26d7399b9587fe89(p0: number): void;

declare function N_0x26d99d5a82fd18e8(p0: number): void;

declare function N_0x26f07dd83a5f7f98(): number;

declare function N_0x2708fc083123f9ff(): void;

declare function N_0x271017b9ba825366(p0: number, p1: boolean): void;

declare function N_0x271401846bd26e92(p0: boolean, p1: boolean): void;

declare function N_0x271c9d3aca5d6409(rope: number): number;

declare function N_0x2735233a786b1bef(ped: number, p1: number): void;

declare function N_0x274a1519dfc1094f(p1: boolean): [number, number, number];

declare function N_0x2790f4b17d098e26(p0: number): void;

declare function N_0x279d50de5652d935(p0: number, p1: boolean): void;

declare function N_0x27aa1c973cacfe63(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0x27b926779deb502d(vehicle: number, p1: boolean): number;

declare function N_0x27cb772218215325(): void;

declare function N_0x27cfb1b1e078cb2d(): void;

declare function N_0x27e32866e9a5c416(p0: number): void;

declare function N_0x27feb5254759cde3(textureDict: string, p1: boolean): number;

declare function N_0x2801d0012266df07(p0: number): void;

declare function N_0x280c7e3ac7f56e90(p0: number): [number, number, number];

declare function N_0x282b6739644f4347(p0: number): void;

declare function N_0x283b6062a2c01e9b(): void;

declare function N_0x287f1f75d2803595(p0: number, p1: number): number;

declare function N_0x288df530c92dad6f(p0: number, p1: number): void;

declare function N_0x28b18377eb6e25f6(p0: number, p1: number): void;

declare function N_0x28ecb8ac2f607db2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x2916a928514c9827(): void;

declare function N_0x29280002282f1928(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number): void;

declare function N_0x293220da1b46cebc(p0: number, p1: number, p2: boolean): void;

declare function N_0x299ef3c576773506(): number;

declare function N_0x29c24bfbed8ab8fb(p0: number, p1: number): number;

declare function N_0x2a2173e46daecd12(p0: number, p1: number): void;

declare function N_0x2a25adc48f87841f(): number;

declare function N_0x2a2a52824db96700(p0: number): void;

declare function N_0x2a56c06ebef2b0d9(cutsceneEntName: string, ped: number, modelHash: string | number): void;

declare function N_0x2a5e0621dd815a9a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2a7776c709904ab0(p0: number): number;

declare function N_0x2a86a0475b6a1434(p0: number, p1: number): void;

declare function N_0x2a893980e96b659a(p0: number): number;

declare function N_0x2a8f319b392e7b3f(vehicle: number, p1: number): void;

declare function N_0x2aed6301f67007d5(entity: number): void;

declare function N_0x2afc2d19b50797f2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2b1c623823db0d9d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x2b3334bca57cd799(p0: number): void;

declare function N_0x2b40a97646381508(p0: number): void;

declare function N_0x2b51edbefc301339(p0: number, p1: string): number;

declare function N_0x2b5aa717a181fb4c(p0: number, p1: boolean): void;

declare function N_0x2b5e102e4a42f2bf(): number;

declare function N_0x2b626a0150e4d449(): number;

declare function N_0x2b6747faa9db9d6b(vehicle: number, p1: boolean): number;

declare function N_0x2b694afcf64e6994(ped: number, p1: boolean): void;

declare function N_0x2b69f5074c894811(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2b949a1e6aec8f6a(): number;

declare function N_0x2bc54a8188768488(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

declare function N_0x2be4bc731d039d5a(p0: number, p1: boolean): void;

declare function N_0x2bf66d2e7414f686(): number;

declare function N_0x2bf72ad5b41aa739(): void;

declare function N_0x2c173ae2bdb9385e(p0: number): number;

declare function N_0x2c1d8b3b19e517cc(p0: number, p1: number): number;

declare function N_0x2c2e3dc128f44309(entity: number, p1: boolean): void;

declare function N_0x2c328af17210f009(p0: number): void;

declare function N_0x2c42340f916c5930(p0: number): number;

declare function N_0x2c4a1590abf43e8b(p0: number, p1: boolean): void;

declare function N_0x2c8cbfe1ea5fc631(p0: number): number;

declare function N_0x2c96cdb04fca358e(p0: number): void;

declare function N_0x2c9f302398e13141(p0: number, p1: number): void;

declare function N_0x2cc848a861d01493(): number;

declare function N_0x2cd90358f67d0aa8(p0: number): void;

declare function N_0x2ce544c68fb812a0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x2ce9d95e4051aecd(p0: number): void;

declare function N_0x2d4259f1feb81da9(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x2d5dc831176d0114(p0: number): number;

declare function N_0x2da41ed6e1fcd7a5(p0: number, p1: number): number;

declare function N_0x2de6c5e2e996f178(p0: number): void;

declare function N_0x2de7efa66b906036(funcData: number): number;

declare function N_0x2df9038c90ad5264(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: number, scale: number, duration: number): void;

declare function N_0x2dfc81c9b9608549(p0: number, p1: number): number;

declare function N_0x2e0bf682cc778d49(p0: number): number;

declare function N_0x2e22fefa0100275e(): number;

declare function N_0x2e4c123d1c8a710e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x2e65248609523599(p0: number, p1: number, p2: number): void;

declare function N_0x2e89990ddff670c3(p0: number, p1: number): number;

declare function N_0x2eac52b4019e2782(): number;

declare function N_0x2ed61456317b8178(): void;

declare function N_0x2f057596f2bd0061(): number;

declare function N_0x2f074c904d85129e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x2f09f7976c512404(xCoord: number, yCoord: number, zCoord: number, p3: number): number;

declare function N_0x2f137b508de238f2(p0: boolean): void;

declare function N_0x2f3c3d9f50681de4(p0: number, p1: boolean): void;

declare function N_0x2f41a3bae005e5fa(p0: number, p1: number): void;

declare function N_0x2f7ceb6520288061(p0: boolean): void;

declare function N_0x2f7f2b26dd3f18ee(p0: number, p1: number): void;

declare function N_0x2fa2494b47fdd009(p0: number, p1: number): void;

declare function N_0x2fab6614ce22e196(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2fc5650b0271cb57(): number;

declare function N_0x3001bef2feca3680(): number;

declare function N_0x302c91ab2d477f7e(): void;

declare function N_0x3044240d2e0fa842(): number;

declare function N_0x3054f114121c21ea(p0: number): number;

declare function N_0x308f96458b7087cc(p1: number, p2: number, p3: number, p5: boolean): [number, number, number];

declare function N_0x30a6614c1f7799b8(p0: number, p1: number, p2: number): void;

declare function N_0x30d779de7c4f6dd3(p0: number, p1: number): void;

declare function N_0x30ed88d5e0c56a37(p0: number): number;

declare function N_0x30fd873ece50e9f6(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x31125fd509d9043f(p0: number): void;

declare function N_0x311438a071dd9b1a(p0: number, p1: number, p2: number): void;

declare function N_0x3117d84efa60f77b(p0: number): void;

declare function N_0x312342e1a4874f3f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;

declare function N_0x3133b907d8b32053(p0: number, p1: number): number;

declare function N_0x31727907b2c43c55(p0: number): void;

declare function N_0x317eba71d7543f52(): [number, number, number, number];

declare function N_0x318516e02de3ece2(p0: number): void;

declare function N_0x3195f8dd0d531052(p0: number, p1: number): [number, number, number];

declare function N_0x31e90b8873a4cd3b(p0: number, p1: number): void;

declare function N_0x31f924b53eaddf65(p0: boolean): void;

declare function N_0x3270f67eed31fbc1(p0: number): [number, number, number];

declare function N_0x32888337579a5970(): void;

declare function N_0x32c7a7e8c43a1f80(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): number;

declare function N_0x32cac93c9de73d32(): number;

declare function N_0x32caedf24a583345(p0: number): void;

declare function N_0x32dd916f3f7c9672(p0: number): number;

declare function N_0x32ebd154cb6b8b99(p0: number, p1: number, p2: number): void;

declare function N_0x32f34ff7f617643b(p0: number, p1: number): void;

declare function N_0x33506883545ac0df(vehicle: number, p1: boolean): void;

declare function N_0x336511a34f2e5185(left: number, right: number): number;

declare function N_0x336b3d200ab007cb(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x33981d6804e62f49(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x33a60d8bdd6e508c(ped: number, p1: boolean): void;

declare function N_0x33d47e85b476abcd(p0: boolean): number;

declare function N_0x33d72899e24c3365(p0: number, p1: number): number;

declare function N_0x33de49edf4dde77a(p0: number): number[];

declare function N_0x33e3c6c6f2f0b506(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x33ee12743ccd6343(p0: number, p1: number, p2: number): number;

declare function N_0x341de7ed1d2a1bfd(componentHash: string | number, drawableSlotHash: string | number, p2: boolean): number;

declare function N_0x34318593248c8fb2(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x3441cad2f2231923(vehicle: number, p1: boolean): void;

declare function N_0x346ef3ecaaab149e(): void;

declare function N_0x34770b9ce0e03b91(p0: number, p1: number): number;

declare function N_0x350aa5ebc03d3bd2(): number;

declare function N_0x352e2b5cf420bf3b(p0: number, p1: number): void;

declare function N_0x357b152ef96c30b6(): number;

declare function N_0x3599d741c9ac6310(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x359af31a4b52f5ed(): number;

declare function N_0x35a1b3e1d1315cfa(p0: boolean, p1: boolean): number;

declare function N_0x35bb21de06784373(p0: number, p1: number): void;

declare function N_0x35e0654f4bad7971(p0: boolean): void;

declare function N_0x35edd5b2e3ff01c0(): void;

declare function N_0x35f0b98a8387274d(): number;

declare function N_0x35fb78dc42b7bd21(): number;

declare function N_0x36391f397731595d(p0: number): number;

declare function N_0x36492c2f0d134c56(p0: number): number;

declare function N_0x365e877c61d6988b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x3669f1b198dcaa4f(): void;

declare function N_0x367ef5e2f439b4c6(p0: number): void;

declare function N_0x36b77bb84687c318(ped: number, p1: number): number;

declare function N_0x36c1451a88a09630(): [number, number];

declare function N_0x36c6984c3ed0c911(p0: number): void;

declare function N_0x36ccb9be67b970fd(p0: number, p1: boolean): void;

declare function N_0x36f1b38855f2a8df(player: number): void;

declare function N_0x36f32de87082343e(p0: number, p1: number): void;

declare function N_0x36f6626459d91457(p0: number): void;

declare function N_0x372ef6699146a1e4(p0: number, entity: number, p2: number, p3: number): number;

declare function N_0x374706271354cb18(vehicle: number, p1: number, p2: number): void;

declare function N_0x375a706a5c2fd084(p0: number): void;

declare function N_0x3795688a307e1eb6(p0: number): number;

declare function N_0x37a4494483b9f5c9(): number;

declare function N_0x37d5f739fd494675(p0: number): number;

declare function N_0x37deb0aa183fb6d8(): void;

declare function N_0x37ebbf3117bd6a25(vehicle: number, p1: number): void;

declare function N_0x38491439b6ba7f7d(p0: number, p1: number): number;

declare function N_0x3855fb5eb2c5e8b2(p0: number): number;

declare function N_0x38baaa5dd4c9d19f(value: number): void;

declare function N_0x38d28da81e4e9bf9(player: number): number;

declare function N_0x393bd2275ceb7793(): number;

declare function N_0x394cd08e31313c28(): void;

declare function N_0x397baa01068baa96(): number;

declare function N_0x39917e1b4cb0f911(p0: boolean): void;

declare function N_0x39a5fb7eaf150840(p0: number, p1: number): void;

declare function N_0x39d55a620fcb6a3a(ped: number, p1: number, drawableId: number, textureId: number): number;

declare function N_0x3a17a27d75c74887(): number;

declare function N_0x3a3d5568af297cd5(p0: number): number;

declare function N_0x3a48ab4445d499be(): number;

declare function N_0x3a8b55fda4c8ddef(p0: number, p1: number, p2: number): number;

declare function N_0x3b2fd68db5f8331c(p0: number, p1: number): void;

declare function N_0x3b39236746714134(p0: number): number;

declare function N_0x3b458ddb57038f08(p0: number, p1: number, p2: number): void;

declare function N_0x3bab9a4e4f2ff5c7(): number;

declare function N_0x3bbbd13e5041a79e(): number;

declare function N_0x3c4487461e9b0dcb(): number;

declare function N_0x3c5c1e2c2ff814b1(p0: boolean): void;

declare function N_0x3c67506996001f5e(): number;

declare function N_0x3c891a251567dfce(p0: number): number;

declare function N_0x3ca6050692bc61b0(p0: boolean): void;

declare function N_0x3d120012440e6683(): number;

declare function N_0x3d3d15af7bcaaf83(p0: number, p1: boolean, p2: boolean): void;

declare function N_0x3d3d8b3be5a83d35(): number;

declare function N_0x3d42b92563939375(p0: string): number;

declare function N_0x3d9acb1eb139e702(): number;

declare function N_0x3dbf2df0aeb7d289(p0: number): number;

declare function N_0x3dda37128dd1aca8(p0: boolean): void;

declare function N_0x3de3aa516fb126a4(p0: number): void;

declare function N_0x3de51e9c80b116cf(p0: number): number;

declare function N_0x3dec726c25a11bac(p0: number): number;

declare function N_0x3e200c2bcf4164eb(p0: number, p1: number): void;

declare function N_0x3e38e28a1d80ddf6(ped: number): number;

declare function N_0x3e4adaff1830f146(): number;

declare function N_0x3e802f11fbe27674(p0: number): number;

declare function N_0x3e9679c1dfcf422c(p0: number, p1: number): void;

declare function N_0x3ebeac6c3f81f6bd(p0: number): void;

declare function N_0x3ed1438c1f5c6612(p0: number): void;

declare function N_0x3ed2b83ab2e82799(p0: number, p1: number): void;

declare function N_0x3f0cf9cb7e589b88(): number;

declare function N_0x3f52e880aaf6c8ca(p0: boolean): void;

declare function N_0x3f5cc444dcaaa8f2(p0: number, p1: number, p2: boolean): void;

declare function N_0x3f7325574e41b44d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x3f9990bf5f22759c(p0: number): number;

declare function N_0x3fa36981311fa4ff(netId: number, state: boolean): void;

declare function N_0x4008edf7d6e48175(p0: boolean): void;

declare function N_0x402f9ed62087e898(): void;

declare function N_0x405591ec8fd9096d(p0: number): void;

declare function N_0x4056ea1105f5abd7(p0: number, p1: number): void;

declare function N_0x405dc2aef6af95b9(roomHashKey: string | number): void;

declare function N_0x407091cf6037118e(netID: number): void;

declare function N_0x40763ea7b9b783e7(p0: number, p1: number, p2: number): number;

declare function N_0x40aefd1a244741f2(p0: boolean): void;

declare function N_0x40cf0d12d142a9e8(ped: number): void;

declare function N_0x40f7e66472df3e5c(p0: number, p1: number): number;

declare function N_0x4128464231e3ca0b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x41290b40fa63e6da(p0: number): void;

declare function N_0x412f1364fa066cfb(p0: number): number;

declare function N_0x41350b4fc28e3941(p0: boolean): void;

declare function N_0x4167efe0527d706e(): number;

declare function N_0x418dc16fae452c1c(p0: number): number;

declare function N_0x419594e137637120(p0: boolean, p1: number, p2: boolean): void;

declare function N_0x419615486bbf1956(p0: number): void;

declare function N_0x41faa8fb2ece8720(p0: boolean): void;

declare function N_0x42156508606de65e(p0: number): void;

declare function N_0x422d396f80a96547(): number;

declare function N_0x422f32cc7e56abad(p0: number): number;

declare function N_0x4237e822315d8ba9(): number;

declare function N_0x425aecf167663f48(ped: number, p1: boolean): void;

declare function N_0x42613035157e4208(p0: number): void;

declare function N_0x4282e08174868be3(): number;

declare function N_0x428ad3e26c8d9eb0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x428baccdf5e26ead(vehicle: number, p1: boolean): void;

declare function N_0x428eaf89e24f6c36(p0: number, p1: number): void;

declare function N_0x42a4beb35d372407(p0: number): number;

declare function N_0x42b65deef2edf2a1(p0: number): void;

declare function N_0x4348bfda56023a2f(p0: number, p1: number): number;

declare function N_0x437138b6a830166a(): void;

declare function N_0x43865688ae10f0d7(): number;

declare function N_0x438822c279b73b93(p0: number): void;

declare function N_0x43d1680c6d19a8e9(): void;

declare function N_0x43fa0dfc5df87815(vehicle: number, p1: boolean): void;

declare function N_0x4419966c9936071a(p0: number): void;

declare function N_0x444c4525ece0a4b9(): void;

declare function N_0x44621483ff966526(p0: number, p1: number): void;

declare function N_0x44919cc079bb60bf(p0: number): void;

declare function N_0x44a0bdc559b35f6e(): number;

declare function N_0x44aca259d67651db(p1: number): number;

declare function N_0x44b37cdcae765aae(p0: number, p1: number): number;

declare function N_0x44cd1f493db2a0a6(p0: number, p1: number, p2: number): void;

declare function N_0x44f1012b69313374(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x451294e859ecc018(p0: number): number;

declare function N_0x451d05012ccec234(p0: number): number;

declare function N_0x459fd2c8d0ab78bc(): number;

declare function N_0x45a561a9421ab6ad(p0: number, p1: number): number;

declare function N_0x45a83257ed02d9bc(): void;

declare function N_0x45e816772e93a9db(): number;

declare function N_0x46326e13da4e0546(p0: number): void;

declare function N_0x4645de9980999e93(p0: string, p1: string, p2: string, p3: string, _type: string): number;

declare function N_0x46494a2475701343(p0: number, p1: number, p2: number, p3: number, modelHash: string | number, p5: boolean): number;

declare function N_0x4668d80430d6c299(ped: number): void;

declare function N_0x4669b3ed80f24b4e(player: number): number;

declare function N_0x466da42c89865553(p0: number): void;

declare function N_0x4683149ed1dde7a1(p0: string): number;

declare function N_0x469f2ecdec046337(p0: boolean): void;

declare function N_0x46b05bcae43856b0(ped: number, flag: number): number;

declare function N_0x46d1a61a21f566fc(p0: number): void;

declare function N_0x46f3add1e2d5baf2(p0: number, p1: number): void;

declare function N_0x46f8696933a63c9b(p0: number, p1: number): number[];

declare function N_0x46fb3ed415c7641c(p0: number, p1: number, p2: number): number;

declare function N_0x472397322e92a856(): void;

declare function N_0x472841a026d26d8b(): number;

declare function N_0x473151ebc762c6da(): number;

declare function N_0x4737980e8a283806(p0: number, p1: number): number;

declare function N_0x4750fc27570311ec(): number;

declare function N_0x4757f00bc6323cfe(p0: number, p1: number): void;

declare function N_0x4759cc730f947c81(): void;

declare function N_0x47b32f5611e6e483(p0: number): void;

declare function N_0x47b595d60664cffa(p0: number, p1: number): void;

declare function N_0x4811bbac21c5fcd5(p0: number): void;

declare function N_0x483aca1176ca93f1(): void;

declare function N_0x4852fc386e2e1bb5(p0: number): [number, number, number];

declare function N_0x48608c3464f58ab4(p0: number, p1: number, p2: number): void;

declare function N_0x48621c9fca3ebd28(p0: boolean): void;

declare function N_0x4862437a486f91b0(p1: number, p2: number, p3: number): [number, number];

declare function N_0x487912fd248efddf(p0: number, p1: number): number;

declare function N_0x4879e4fe39074cdf(): number;

declare function N_0x488043841bbe156f(): void;

declare function N_0x48adc8a773564670(): void;

declare function N_0x48c633e94a8142a7(p0: number): number;

declare function N_0x48f069265a0e4bec(name: string): number;

declare function N_0x490861b88f4fd846(p0: number): void;

declare function N_0x49482f9fcd825aaa(entity: number): void;

declare function N_0x497420e022796b3f(): number;

declare function N_0x49b99bf3fda89a7a(ped: number, speechName: string, unk: boolean): number;

declare function N_0x49e50bdb8ba4dab2(ped: number, p1: boolean): void;

declare function N_0x49ec8030f5015f8b(p0: number): void;

declare function N_0x4a0c7c9bb10abb36(p0: boolean): void;

declare function N_0x4a2d4e8bf4265b0f(p0: number): number;

declare function N_0x4a39db43e47cf3aa(p0: number): void;

declare function N_0x4a7d6e727f941747(p0: number): number;

declare function N_0x4a9923385bdb9dad(): number;

declare function N_0x4a9fde3a5a6d0437(p0: number): void;

declare function N_0x4ad490ae1536933b(p0: number, p1: number): number;

declare function N_0x4ada3f19be4a6047(ped: number): void;

declare function N_0x4af92acd3141d96c(): void;

declare function N_0x4b5b4da5d79f1943(checkpoint: number, p0: number): void;

declare function N_0x4b5b620c9b59ed34(p0: number, p1: number): void;

declare function N_0x4b5cfc83122df602(): void;

declare function N_0x4ba166079d658ed4(p0: number, p1: number): void;

declare function N_0x4ba92a18502bca61(player: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, flags: number): number;

declare function N_0x4bc2854478f3a749(doorHash: string | number): number;

declare function N_0x4c2330e61d3deb56(interiorID: number): number;

declare function N_0x4c2a9fdc22377075(): void;

declare function N_0x4c61b39930d045da(p0: number): number;

declare function N_0x4c61c75bee8184c2(p0: string, p1: number, p2: number): void;

declare function N_0x4c815eb175086f84(p0: number, p1: number): number;

declare function N_0x4c89fe2bdeb3f169(): number;

declare function N_0x4cebc1ed31e8925e(cutsceneName: string): number;

declare function N_0x4d02279c83be69fe(): number;

declare function N_0x4d1cb8dc40208a17(p0: number, p1: number): number;

declare function N_0x4d89d607cb3dd1d2(object: number, toggle: boolean): void;

declare function N_0x4d953df78ebf8158(): void;

declare function N_0x4d9d109f63fee1d4(p0: number, p1: boolean): void;

declare function N_0x4dcdf92bf64236cd(p0: number, p1: number): void;

declare function N_0x4df7cfff471a7fb1(p0: number): number;

declare function N_0x4dfdd9eb705f8140(): [number, any /* actually bool */];

declare function N_0x4e20d2a627011e8e(p0: number, p1: number): number;

declare function N_0x4e3cd0ef8a489541(): number;

declare function N_0x4e404a9361f75bb2(radioStation: string, p1: string, p2: boolean): void;

declare function N_0x4e417c547182c84d(p0: number): number;

declare function N_0x4e52e752c76e7e7a(p0: number): void;

declare function N_0x4e548c0d7ae39ff9(p0: number, p1: number): number;

declare function N_0x4e74e62e0a97e901(vehicle: number, p1: boolean): void;

declare function N_0x4e90d746056e273d(p0: number, p1: number): void;

declare function N_0x4f8a26a890fd62fb(inputGroup: number, control: number): number;

declare function N_0x4fef53183c3c6414(): number;

declare function N_0x500873a45724c863(vehicle: number, p1: number): void;

declare function N_0x5009dfd741329729(p0: string, p1: number): void;

declare function N_0x501478855a6074ce(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x503f5920162365b2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x50634e348c8d44ef(p0: number): number;

declare function N_0x5068f488ddb54dd8(): number;

declare function N_0x5096fd9ccb49056d(p0: number): void;

declare function N_0x50c375537449f369(p0: number): void;

declare function N_0x50f457823ce6eb5f(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x511f1a683387c7e2(p0: number): number;

declare function N_0x516fc96eb88eefe5(p0: number): void;

declare function N_0x5182a339a3474510(p0: number, p1: number, p2: number): void;

declare function N_0x51bb2d88d31a914b(vehicle: number, p1: boolean): void;

declare function N_0x51db102f4a3ba5e0(p0: boolean): void;

declare function N_0x51f1a8e48c3d2f6d(p0: number, p1: boolean, p2: number): number;

declare function N_0x523a590c1a3cc0d3(): void;

declare function N_0x524ff0aeff9c3973(p0: number): void;

declare function N_0x52818819057f2b40(p0: number): number;

declare function N_0x52d59ab61ddc05dd(ped: number, p1: boolean): void;

declare function N_0x5324a0e3e4ce3570(p0: number, p1: number): [number, number, number];

declare function N_0x5335be58c083e74e(p0: number): void;

declare function N_0x53409b5163d5b846(modelHash: string | number): number;

declare function N_0x53af99baa671ca47(vehicle: number): number;

declare function N_0x53afd64c6758f2f9(): number;

declare function N_0x53c10c8bd774f2c9(): number;

declare function N_0x53cae13e9b426993(p0: number): void;

declare function N_0x53f4892d18ec90a4(p0: number): void;

declare function N_0x5407b7288d0478b7(p0: number): number;

declare function N_0x54318c915d27e4ce(p0: number, p1: boolean): void;

declare function N_0x544810ed9db6bbe6(): number;

declare function N_0x544996c0081abdeb(p0: number, p1: number): void;

declare function N_0x547237aa71ab44de(p0: number): void;

declare function N_0x54b0f614960f4a5f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x54e22ea2c1956a8d(p0: number): void;

declare function N_0x54f157e0336a3822(p0: number, p1: string, p2: number): void;

declare function N_0x5501b7a5cdb79d37(p0: number): void;

declare function N_0x551df99658db6ee8(p0: number, p1: number, p2: number): number;

declare function N_0x55384438fc55ad8e(value: number): void;

declare function N_0x5539c3ebf104a53a(p0: boolean): void;

declare function N_0x55598d21339cb998(p0: number): void;

declare function N_0x55a1e095db052fa5(p0: number, p1: number): void;

declare function N_0x55a8becaf28a4eb7(): number;

declare function N_0x55fcc0c390620314(p0: number, p1: number, p2: number): void;

declare function N_0x56105e599cab0efa(p0: number): number;

declare function N_0x5615e0c5eb2bc6e2(p0: number, p1: number): void;

declare function N_0x56176892826a4fe8(ped: number): number;

declare function N_0x5626d9d6810730d5(): number;

declare function N_0x563b65a643ed072e(p0: number, p1: number, p2: number): number;

declare function N_0x565e430db3b05bec(p0: number): number;

declare function N_0x567384dfa67029e6(): number;

declare function N_0x5688585e6d563cd8(p0: number): void;

declare function N_0x56b94c6d7127dfba(p0: number, p1: number, p2: boolean): void;

declare function N_0x56c8b608cfd49854(): void;

declare function N_0x56eb5e94318d3fb6(p0: number, p1: boolean): void;

declare function N_0x5702b917b99db1cd(p0: number): void;

declare function N_0x570389d1c3de3c6b(p0: number): void;

declare function N_0x571feb383f629926(cargobob: number, p1: boolean): void;

declare function N_0x576594e8d64375e2(p0: number, p1: boolean): void;

declare function N_0x577599cced639ca2(p0: number): void;

declare function N_0x57b192b4d4ad23d5(p0: boolean): void;

declare function N_0x57d760d55f54e071(p0: boolean): void;

declare function N_0x583049884a2eee3c(): void;

declare function N_0x5835d9cd92e83184(): [number, number, number];

declare function N_0x583df8e3d4afbd98(): number;

declare function N_0x5845066d8a1ea7f7(vehicle: number, x: number, y: number, z: number, p4: number): void;

declare function N_0x584770794d758c18(p0: number, p1: number): number;

declare function N_0x585847c5e4e11709(p0: number, p1: number, p2: number): number;

declare function N_0x5873c14a52d74236(p0: number): number;

declare function N_0x589f80b325cc82c5(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x58a39be597ce99cd(): void;

declare function N_0x58a651cd201d89ad(p0: number): number;

declare function N_0x58bb377bec7cd5f4(p0: boolean, p1: boolean): void;

declare function N_0x58c21165f6545892(p0: number, p1: number): void;

declare function N_0x58cc181719256197(p0: number, p1: number, p2: number): number;

declare function N_0x59328eb08c5ceb2b(): number;

declare function N_0x593570c289a77688(): number;

declare function N_0x593feae1f73392d4(): number;

declare function N_0x59424bd75174c9b1(): void;

declare function N_0x595f028698072dd9(p0: number, p1: number, p2: boolean): number;

declare function N_0x597f8dba9b206fc7(): number;

declare function N_0x59b9a7af4c95133c(): number;

declare function N_0x59d421683d31835a(p0: number): void;

declare function N_0x59df79317f85a7e0(): number;

declare function N_0x59e7b488451f4d3a(p0: number, p1: number): void;

declare function N_0x5a0a3d1a186a5508(): number;

declare function N_0x5a34cd9c3c5bec44(p0: number): number;

declare function N_0x5a43c76f7fc7ba5f(): void;

declare function N_0x5a556b229a169402(): number;

declare function N_0x5a6aa44ff8e931e6(): number;

declare function N_0x5a6ffa2433e2f14c(player: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, flags: number): number;

declare function N_0x5a7f62fda59759bd(): void;

declare function N_0x5aa3befa29f03ad4(): number;

declare function N_0x5aa3f878a178c4fc(modelHash: string | number): number;

declare function N_0x5aab586ffec0fd96(p0: number): void;

declare function N_0x5ad3932daeb1e5d3(): void;

declare function N_0x5ae17c6b0134b7f1(): number;

declare function N_0x5b0316762afd4a64(): number;

declare function N_0x5b1f2e327b6b6fe1(): number;

declare function N_0x5b48a06dd0e792a5(): number;

declare function N_0x5b50abb1fe3746f4(): number;

declare function N_0x5b6010b3cbc29095(p0: number, p1: boolean): void;

declare function N_0x5b73c77d9eb66e24(p0: boolean): void;

declare function N_0x5b84d09cec5209c5(inputGroup: number, control: number): number;

declare function N_0x5b8ed3db018927b1(p0: number): void;

declare function N_0x5b91b229243351a8(p0: number, p1: number): void;

declare function N_0x5b9853296731e88d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x5ba68a0840d546ac(p0: number, p1: number): number;

declare function N_0x5bcde0f640c773d2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5bd5f255321c4aaf(p0: number): number;

declare function N_0x5bff36d6ed83e0ae(): number[];

declare function N_0x5c3b791d580e0bc2(entity: number, p1: number): void;

declare function N_0x5c41e6babc9e2112(p0: number): void;

declare function N_0x5c48a1d6e3b33179(p0: number): number;

declare function N_0x5c48b75732c8456c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x5c497525f803486b(): void;

declare function N_0x5c4ebffa98bdb41c(p0: number): number;

declare function N_0x5c707a667df8b9fa(p0: boolean, p1: number): void;

declare function N_0x5cae833b0ee0c500(p0: number): number;

declare function N_0x5ce62918f8d703c7(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x5d10b3795f3fc886(): number;

declare function N_0x5d2bfaab8d956e0e(): void;

declare function N_0x5d517b27cf6ecd04(p0: number): void;

declare function N_0x5d5caff661ddf6fc(p0: number, p1: number): void;

declare function N_0x5d7b620dae436138(p0: number): void;

declare function N_0x5d97630a8a0ef123(p0: number, p1: number, p2: number): void;

declare function N_0x5da3a8de8cb6226f(time: number): void;

declare function N_0x5da825a85d0ea6e6(p0: number, p1: number, p2: number): void;

declare function N_0x5db8010ee71fdef2(vehicle: number): number;

declare function N_0x5dbf05db5926d089(p0: number): void;

declare function N_0x5dc40a8869c22141(p0: boolean, p1: number): void;

declare function N_0x5dc577201723960a(): number;

declare function N_0x5debd9c4dc995692(): void;

declare function N_0x5e0165278f6339ee(p0: number): number;

declare function N_0x5e203da2ba15d436(p0: number): number;

declare function N_0x5e24341a7f92a74b(): number;

declare function N_0x5e3aa4ca2b6fb0ee(p0: number): void;

declare function N_0x5e569ec46ec21cae(vehicle: number, toggle: boolean): void;

declare function N_0x5e657ef1099edd65(p0: number): number;

declare function N_0x5e9daf5a20f15908(p0: number): void;

declare function N_0x5ea784d197556507(): number;

declare function N_0x5eaad83f8cfb4575(pickupHash: number): number;

declare function N_0x5ead2bf6484852e4(): number;

declare function N_0x5ecb40269053c0d4(p0: number): number;

declare function N_0x5ecd378ee64450ab(p0: number): void;

declare function N_0x5edef0cf8c1dab3c(): number;

declare function N_0x5ee5632f47ae9695(p0: number, p1: number): void;

declare function N_0x5f0f3f56635809ef(p0: number): void;

declare function N_0x5f2013f8bc24ee69(p0: number): void;

declare function N_0x5f35f6732c3fbba0(p0: number): number;

declare function N_0x5f456788b05faeac(p0: number, p1: number, p2: number): void;

declare function N_0x5fbd7095fe7ae57f(p0: number, p1: number): number;

declare function N_0x5fc472c501ccadb3(player: number): number;

declare function N_0x5ff2c33b13a02a11(p0: number): void;

declare function N_0x600048c60d5c2c51(p0: number): void;

declare function N_0x600f8cb31c7aab6e(p0: number): void;

declare function N_0x60190048c0764a26(p0: number): number;

declare function N_0x606e4d3e3cccf3eb(): number;

declare function N_0x6070104b699b2ef4(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x60734cc207c9833c(p0: boolean): void;

declare function N_0x609278246a29ca34(p0: number, p1: number, p2: number): void;

declare function N_0x60e892ba4f5bdca4(): void;

declare function N_0x60edd13eb3ac1ff3(): number;

declare function N_0x60eedc12af66e846(p0: number): void;

declare function N_0x613f125ba3bd2eb9(): number;

declare function N_0x615d3925e87a3b26(checkpoint: number): void;

declare function N_0x616093ec6b139dd9(player: number, pickupHash: string | number, p2: boolean): void;

declare function N_0x61631f5df50d1c34(p0: boolean): void;

declare function N_0x61767f73eaceed21(ped: number): number;

declare function N_0x617f49c2668e6155(): number;

declare function N_0x61a885d3f7cfee9a(): void;

declare function N_0x61f95e5bb3e0a8c6(p0: number): void;

declare function N_0x6216b116083a7cb4(p0: number): void;

declare function N_0x621c6e4729388e41(ped: number): number;

declare function N_0x62374889a4d59f72(): void;

declare function N_0x62454a641b41f3c5(p0: number): void;

declare function N_0x6274c4712850841e(entity: number, p1: boolean): void;

declare function N_0x629526aba383bcaa(): void;

declare function N_0x62a0296c1bb1ceb3(): number;

declare function N_0x62b9fec9a11f10ef(): number;

declare function N_0x62ca17b74c435651(vehicle: number): number;

declare function N_0x62e849b7eb28e770(p0: boolean): void;

declare function N_0x62ec273d00187dca(x: number, y: number, z: number, radius: number, object: string | number): number;

declare function N_0x62ecfcfdee7885d6(): void;

declare function N_0x631dc5dff4b110e3(p0: number): number;

declare function N_0x632b2940c67f4ea9(scaleformHandle: number): [number, number, number, number];

declare function N_0x634148744f385576(vehicle: number): number;

declare function N_0x638a3a81733086db(): number;

declare function N_0x639431e895b9aa57(ped: number, vehicle: number, p2: boolean, p3: boolean, p4: boolean): number;

declare function N_0x63b406d7884bfa95(): number;

declare function N_0x63eb2b972a218cac(): void;

declare function N_0x641f272b52e2f0f8(p0: number, p1: number): void;

declare function N_0x643ed62d5ea3bebd(): void;

declare function N_0x644546ec5287471b(): number;

declare function N_0x6483c25849031c4f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x648e7a5434af7969(p0: string, p2: boolean, _type: string): [number, number, number, number, number];

declare function N_0x6493cf69859b116a(): void;

declare function N_0x649c97d52332341a(p0: number): void;

declare function N_0x64d779659bc37b19(p0: number): number[];

declare function N_0x64f62afb081e260d(): void;

declare function N_0x6501129c9e0ffa05(p0: number, p1: number): void;

declare function N_0x6512765e3be78c50(): number;

declare function N_0x651d3228960d08af(p0: number, p1: number): void;

declare function N_0x65499865fca6e5ec(doorHash: string | number): number;

declare function N_0x6551b1f7f6cd46ea(p0: number): void;

declare function N_0x6558ac7c17bfef58(p0: number): number;

declare function N_0x658500ae6d723a7e(p0: number): void;

declare function N_0x6585d955a68452a5(ped: number): number;

declare function N_0x659cf2ef7f550c4f(): number;

declare function N_0x65b080555ea48149(p0: number): void;

declare function N_0x65d2ebb47e1cec21(p0: boolean): void;

declare function N_0x65e7e78842e74cdb(p0: number): number;

declare function N_0x65faee425de637b0(p0: number): number;

declare function N_0x661b5c8654add825(p0: number, p1: boolean): void;

declare function N_0x662635855957c411(p0: number): number;

declare function N_0x6636c535f6cc2725(vehicle: number): number;

declare function N_0x6647c5f6f5792496(ped: number, p1: boolean): void;

declare function N_0x66680a92700f43df(p0: number): number;

declare function N_0x668fd40bcba5de48(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x66972397e0757e7a(p0: number, p1: number, p2: number): void;

declare function N_0x66979acf5102fd2f(cargobob: number, p1: number): void;

declare function N_0x66a49d021870fe88(): void;

declare function N_0x66b59cffd78467af(): number;

declare function N_0x66e3aaface2d1eb8(p0: number, p1: number, p2: number): void;

declare function N_0x66e7cb63c97b7d20(): number;

declare function N_0x66f010a4b031a331(p0: number): void;

declare function N_0x673ed815d6e323b7(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function N_0x675721c9f644d161(): void;

declare function N_0x675d19c6067cae08(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x678bb03c1a3bd51e(p0: number, p1: number, p2: number): [number, number, number];

declare function N_0x678f86d8fc040bdb(p0: number): void;

declare function N_0x67a5589628e0cff6(): number;

declare function N_0x67eedea1b9bafd94(): void;

declare function N_0x67f6413d3220e18d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x67fc09bc554a75e5(): number;

declare function N_0x68103e2247887242(): void;

declare function N_0x684a41975f077262(): number;

declare function N_0x6856ec3d35c81ea4(): number;

declare function N_0x685d5561680d088b(p0: number, p1: number): void;

declare function N_0x68772db2b2526f9f(ped: number, x: number, y: number, z: number, range: number): number;

declare function N_0x687c0b594907d2e8(ped: number): void;

declare function N_0x68f8be6af5cdf8a6(p0: number, p1: number): void;

declare function N_0x690a61a6d13583f6(p0: number): number;

declare function N_0x692d58df40657e8c(p0: number, p1: number, p2: number, p4: number, p5: boolean): [number, number];

declare function N_0x692d808c34a82143(p0: string, p1: number, _type: string): number;

declare function N_0x693478acbd7f18e7(): void;

declare function N_0x694e00132f2823ed(entity: number, p1: boolean): void;

declare function N_0x697f508861875b42(p0: number, p1: number, p2: number): number;

declare function N_0x699e4a5c8c893a18(p0: number, p1: string, p2: number): number;

declare function N_0x69ef772b192614c1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x69fe6dc87bd2a5e9(p0: number): void;

declare function N_0x6a12d88881435dca(): void;

declare function N_0x6a1738b4323fe2d9(p0: number): void;

declare function N_0x6a51f78772175a51(p0: number): void;

declare function N_0x6a5d89d7769a40d8(p0: boolean): void;

declare function N_0x6a60e43998228229(p0: number): void;

declare function N_0x6a98c2ecf57fa5d4(vehicle: number, entity: number): void;

declare function N_0x6adaabd3068c5235(): number;

declare function N_0x6afd2cd753feef83(p0: string): number;

declare function N_0x6b0e6172c9a4d902(p0: boolean): void;

declare function N_0x6b1de27ee78e6a19(p0: number): void;

declare function N_0x6bc0acd0673acebe(p0: number, p1: number, p2: number): void;

declare function N_0x6bc97f4f4bb3c04b(p0: number, p1: number): void;

declare function N_0x6bccf9948492fd85(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x6bfb12ce158e3dd4(p0: number): number;

declare function N_0x6bff5f84102df80a(p0: number): void;

declare function N_0x6c34f1208b8923fd(p0: number): number;

declare function N_0x6cc86e78358d5119(): void;

declare function N_0x6cd5a433374d4cfb(p0: number, p1: number): number;

declare function N_0x6cd79468a1e595c6(inputGroup: number): number;

declare function N_0x6cdd58146a436083(p0: number): void;

declare function N_0x6ce177d014502e8a(p0: number): void;

declare function N_0x6ce50e47f5543d0c(): void;

declare function N_0x6d4cb481fac835e8(p0: number, p1: number, p3: number): [number, number];

declare function N_0x6d6840cee8845831(action: string): void;

declare function N_0x6d6af961b72728ae(vehicle: number): void;

declare function N_0x6d8eac07506291fb(cargobob: number, p1: number): void;

declare function N_0x6d955f6a9e0295b1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x6dd8f5aa635eb4b2(p0: number, p1: number): [number, number];

declare function N_0x6ddbf9dffc4ac080(p0: boolean): void;

declare function N_0x6dee77aff8c21bd1(): [number, number, number];

declare function N_0x6e04f06094c87047(): number;

declare function N_0x6e0a5253375c4584(): number;

declare function N_0x6e0eb3eb47c8d7aa(): number;

declare function N_0x6e4361ff3e8cd7ca(p0: number): number;

declare function N_0x6e91b04e08773030(action: string): void;

declare function N_0x6eaaefc76acc311f(p0: number): number;

declare function N_0x6ebfb22d646ffc18(vehicle: number, p1: boolean): void;

declare function N_0x6ef54ab721dc6242(): void;

declare function N_0x6f1554b0cc2089fa(p0: boolean): void;

declare function N_0x6f2135b6129620c1(p0: boolean): void;

declare function N_0x6f259f82d873b8b8(): number;

declare function N_0x6f361b8889a792a3(): void;

declare function N_0x6f44cbf56d79fac0(p0: number, p1: number): number;

declare function N_0x6f697a66ce78674e(team: number, toggle: boolean): void;

declare function N_0x6f72cd94f7b5b68c(): number;

declare function N_0x6f7794f28c6b2535(name: string): number;

declare function N_0x6fb7bb3607d27fa2(): number;

declare function N_0x6fcf8ddea146c45b(p0: number): number;

declare function N_0x6fd97159fe3c971a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x6fddad856e36988a(p0: number, p1: boolean): void;

declare function N_0x6fddf453c0c756ec(): number;

declare function N_0x700569dba175a77c(p0: number): number;

declare function N_0x701fda1e82076ba4(): void;

declare function N_0x702bc4d605522539(p0: number): void;

declare function N_0x7033eefd9b28088e(p0: number): void;

declare function N_0x703cc7f60cbb2b57(p0: number): void;

declare function N_0x703f12425eca8bf5(p0: number): number;

declare function N_0x705a276ebff3133d(): number;

declare function N_0x705a844002b39dc0(): number;

declare function N_0x70894bd0915c5bca(p0: number): number;

declare function N_0x708bdd8cd795b043(): number;

declare function N_0x70b8ec8fc108a634(p0: boolean, p1: number): void;

declare function N_0x70ea8da57840f9be(p0: number): number;

declare function N_0x711794453cfd692b(p0: number, p1: number): void;

declare function N_0x71302ec70689052a(p0: number): number;

declare function N_0x715135f4b82ac90d(entity: number): void;

declare function N_0x717e4d1f2048376d(ped: number): string;

declare function N_0x71862b1d855f32e1(p1: number, p2: number, p3: number): number;

declare function N_0x71b008056e5692d6(): void;

declare function N_0x71b74d2ae19338d0(p0: number): number;

declare function N_0x71bdb63dbaf8da59(p0: number): void;

declare function N_0x71dc455f5cd1c2b1(p0: number): number;

declare function N_0x71e7b2e657449aad(): number;

declare function N_0x722f5d28b61c5ea8(p0: number): number;

declare function N_0x723c1ce13fbfdb67(p0: number, p1: number): void;

declare function N_0x7241ccb7d020db69(p0: number, p1: number): void;

declare function N_0x7242f8b741ce1086(p0: number): number;

declare function N_0x728c4cc7920cd102(p0: number): number;

declare function N_0x72beccf4b829522e(p0: number, p1: number): void;

declare function N_0x72c1056d678bb7d8(weaponHash: string | number): void;

declare function N_0x72d0706cd6ccdb58(): void;

declare function N_0x72d918c99bcacc54(p0: number): number;

declare function N_0x72dd432f3cdfc0ee(posX: number, posY: number, posZ: number, radius: number, p4: number): void;

declare function N_0x72de52178c291cb5(): number;

declare function N_0x72eb7ba9b69bf6ab(): number;

declare function N_0x73001e34f85137f8(p0: number): void;

declare function N_0x7303e27cc6532080(p0: number, p1: boolean, p2: boolean, p3: boolean, p5: number): [number, number];

declare function N_0x733adf241531e5c2(name: string, p1: number): void;

declare function N_0x733c87d4ce22bea2(p0: number): void;

declare function N_0x7350823473013c02(ped: number): number;

declare function N_0x73561d4425a021a2(p0: number, p1: number): void;

declare function N_0x736d7aa1b750856b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number, p24: number, p25: number, p26: number, p27: number, p28: number, p29: number, p30: number, p31: number): void;

declare function N_0x737e398138550fff(p0: number, p1: number): void;

declare function N_0x741a3d8380319a81(): void;

declare function N_0x742b58f723233ed9(p0: number): number;

declare function N_0x74698374c45701d2(): number;

declare function N_0x74a0fd0688f1ee45(p0: number): number;

declare function N_0x74bd83ea840f6bc9(): number;

declare function N_0x74c180030fde4b69(p0: boolean): void;

declare function N_0x74de2e8739086740(): void;

declare function N_0x74fb3e29e6d10fa9(): number;

declare function N_0x7543bb439f63792b(bufferSize: number): [number, number];

declare function N_0x756ae6e962168a04(p0: number, p1: number): void;

declare function N_0x75773e11ba459e90(p0: number, p1: boolean): void;

declare function N_0x758a5c1b3b1e1990(p0: number): void;

declare function N_0x759299c5bb31d2a9(p0: number, p1: number): number;

declare function N_0x759650634f07b6b4(p0: number): number;

declare function N_0x75a16c3da34f1245(p0: number, p1: boolean): void;

declare function N_0x75ba1cb3b7d40caf(ped: number, p1: boolean): void;

declare function N_0x75d3691713c3b05a(): void;

declare function N_0x762db2d380b48d04(p0: number): void;

declare function N_0x7669f9e39dc17063(): void;

declare function N_0x7679cc1bcebe3d4c(p0: number, p1: number, p2: number): void;

declare function N_0x768ff8961ba904d6(funcData: number): number;

declare function N_0x769951e2455e2eb5(): number;

declare function N_0x76bba2cee66d47e9(p0: number): number;

declare function N_0x76bf03fadbf154f5(): number;

declare function N_0x76d26a22750e849e(p0: number): void;

declare function N_0x774bd811f656a122(radioStation: string, p1: boolean): void;

declare function N_0x77758139ec9b66c7(p0: boolean): void;

declare function N_0x7792424aa0eac32e(): void;

declare function N_0x77f16b447824da6c(p0: number): void;

declare function N_0x77f33f2ccf64b3aa(object: number, p1: boolean): void;

declare function N_0x77faddcbe3499df7(p0: number): void;

declare function N_0x77fe3402004cd1b0(p0: number): void;

declare function N_0x7808619f31ff22db(): number;

declare function N_0x781de8fa214e87d2(ped: number, p1: string): void;

declare function N_0x78321bea235fd8cd(p0: number, p1: boolean): number;

declare function N_0x784002a632822099(ped: number): number;

declare function N_0x784ba7e0eceb4178(p0: number, x: number, y: number, z: number): void;

declare function N_0x78857fc65cadb909(p0: boolean): void;

declare function N_0x788e7fd431bd67f1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x78c0d93253149435(): number;

declare function N_0x78c4e9961db3eb5b(p0: number, p1: number): void;

declare function N_0x78ceee41f49f421f(p0: number, p1: number): void;

declare function N_0x78e8e3a640178255(entity: number): void;

declare function N_0x792271ab35c356a4(p0: number, p1: number): void;

declare function N_0x793ff272d5b365f4(): number;

declare function N_0x796a877e459b99ea(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x796a87b3b68d1f3d(p0: number): number;

declare function N_0x799017f9e3b10112(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function N_0x79ab33f0fbfac40c(p0: number): void;

declare function N_0x79df7e806202ce01(p0: number, p1: number): void;

declare function N_0x7a42b2e236e71415(): void;

declare function N_0x7a73d05a607734c7(ped: number): void;

declare function N_0x7ac24eab6d74118d(p0: boolean): number;

declare function N_0x7ac752103856fb20(p0: boolean): void;

declare function N_0x7ae0589093a2e088(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x7b18da61f6bae9d5(p0: number): void;

declare function N_0x7b21e0bb01e8224a(p0: number): void;

declare function N_0x7b226c785a52a0a9(): number;

declare function N_0x7b7723747ccb55b6(gamerTagId: number, _string: string): void;

declare function N_0x7b8a361c1813fbef(): void;

declare function N_0x7bbe7ff626a591fe(p0: number): void;

declare function N_0x7bf1a54ae67ac070(p0: number, p1: number, p2: number): void;

declare function N_0x7c0043fdff6436bc(vehicle: number): void;

declare function N_0x7c06330bfdda182e(p0: number): void;

declare function N_0x7c226d5346d4d10a(p0: number): void;

declare function N_0x7c4fccd2e4deb394(): number;

declare function N_0x7c9c0b1eeb1f9072(p0: number): void;

declare function N_0x7cd934010e115c2c(ped: number): number;

declare function N_0x7cdc8c3b89f661b3(playerPed: number, p1: string | number): void;

declare function N_0x7d36291161859389(p0: number): void;

declare function N_0x7d395ea61622e116(p0: boolean): void;

declare function N_0x7d41e9d2d17c5b2d(p0: number): number;

declare function N_0x7d6f9a3ef26136a0(vehicle: number, p1: boolean, p2: boolean): void;

declare function N_0x7d7a2e43e74e2eb8(p0: number): void;

declare function N_0x7d8ba05688ad64c7(p0: number): void;

declare function N_0x7db18ca8cad5b098(): number;

declare function N_0x7db53b37a2f211a0(): number;

declare function N_0x7e07c78925d5fd96(p0: number): number;

declare function N_0x7e17be53e1aaabaf(): [number, number, number];

declare function N_0x7e2bd3ef6c205f09(p0: number, p1: number): void;

declare function N_0x7e6946f68a38b74f(p0: number): number;

declare function N_0x7ec3c679d0e7e46b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x7ec6f9a478a6a512(): void;

declare function N_0x7eec2a316c250073(p0: number, p1: number, p2: number): void;

declare function N_0x7ef7649b64d7ff10(p0: number): number;

declare function N_0x7f2c4cdf2e82df4c(p0: number): number;

declare function N_0x7f2f4f13ac5257ef(p0: number): number;

declare function N_0x7f8f6405f4777af6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number;

declare function N_0x7f96f23fa9b73327(modelHash: string | number): void;

declare function N_0x7fa5d82b8f58ec06(): number;

declare function N_0x7fcc39c46c3c03bd(p0: number): number;

declare function N_0x7fd2990af016795e(p2: number, p3: number, p4: number): [number, number, number];

declare function N_0x80054d7fcc70eec6(p0: number): void;

declare function N_0x801879a9b4f4b2fb(): number;

declare function N_0x806058bbdc136e06(): void;

declare function N_0x8098c8d6597aae18(p0: number): number;

declare function N_0x80c2fd58d720c801(inputGroup: number, control: number, p2: boolean): string;

declare function N_0x80e3357fdef45c21(p0: number, p1: number): void;

declare function N_0x80ec114669daeff4(): number;

declare function N_0x80fe4f3ab4e1b62a(): void;

declare function N_0x8147fff6a718e1ad(p0: number): number;

declare function N_0x814af7dcaacc597b(p0: number): void;

declare function N_0x815f18ad865f057f(p0: number): number;

declare function N_0x817b86108eb94e51(p0: boolean): [number, number, number, number, number, number, number, number];

declare function N_0x8181ce2f25cb9bb7(p0: number, p1: number): number;

declare function N_0x81aa517fbba05d39(p0: number): number;

declare function N_0x81cbae94390f9f89(): void;

declare function N_0x820e9892a77e97cd(p0: number, p1: number): void;

declare function N_0x821418c727fcacd7(p0: number): void;

declare function N_0x821fdc827d6f4090(p0: number): void;

declare function N_0x82377b65e943f72d(p0: number): number;

declare function N_0x8269816f6cfd40f8(name: string): number;

declare function N_0x826d1ee4d1cafc78(p0: number, p1: number): void;

declare function N_0x8290252fff36acb5(p0: number, red: number, green: number, blue: number): void;

declare function N_0x82a2b386716608f1(): number;

declare function N_0x82acc484ffa3b05f(p0: number): number;

declare function N_0x82cedc33687e1f50(p0: boolean): void;

declare function N_0x82ebb79e258fa2b7(entity: number, interiorID: number): void;

declare function N_0x82fde6a57ee4ee44(ped: number, weaponhash: string | number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x83660b734994124d(p0: number, p1: number, p2: number): number;

declare function N_0x838da0936a24ed4d(p0: number, p1: number): void;

declare function N_0x83a169eabcdb10a2(p0: number, p1: number): void;

declare function N_0x83b8201ed82a9a2d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x83bcce3224735f05(filename: string): number;

declare function N_0x83f28ce49fbbffba(p0: number, p1: number, p2: boolean): number;

declare function N_0x83f813570ff519de(p0: number, p1: number): void;

declare function N_0x83fe8d7229593017(): void;

declare function N_0x8416fe4e4629d7d7(p0: string): number;

declare function N_0x84698ab38d0c6636(hash: string | number): number;

declare function N_0x848b66100ee33b05(p0: number): void;

declare function N_0x84a810b375e69c0e(): number;

declare function N_0x84c0116d012e8fc2(p0: number): void;

declare function N_0x84de3b5fb3e666f0(p0: number): number;

declare function N_0x84dfc579c2fc214c(p0: number): void;

declare function N_0x84ea99c62cb3ef0c(p0: number, p1: number, p2: number): void;

declare function N_0x84fd40f56075e816(p0: number): void;

declare function N_0x851cd923176eba7c(): void;

declare function N_0x8533cafde1f0f336(p0: number): number;

declare function N_0x85535acf97fc0969(p0: number): number;

declare function N_0x855bc38818f6f684(): number;

declare function N_0x8586789730b10caf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x858ec9fd25de04aa(p0: number, p1: number): void;

declare function N_0x85a0ef54a500882c(p0: number): number;

declare function N_0x85b6c850546fdde2(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function N_0x85f6c9aba1de2bcf(): number;

declare function N_0x867458251d47ccb2(p0: number, p1: number): void;

declare function N_0x869daacbbe9fa006(): number;

declare function N_0x86b4b6212cb8b627(p0: number, p1: number): void;

declare function N_0x86e0660e4f5c956d(): void;

declare function N_0x870b8b7a766615c8(p0: number, p1: number, p2: number): void;

declare function N_0x876928dddfccc9cd(): number;

declare function N_0x878c75c09fbdb942(): number;

declare function N_0x87ddeb611b329a9c(p0: number): void;

declare function N_0x87e0052f08bd64e6(p0: number, p1: number): number;

declare function N_0x87e5c46c187fe0ae(p0: number, p1: number): number;

declare function N_0x87eb7a3ffcb314db(p0: number): number;

declare function N_0x8806cebfabd3ce05(p0: number): number;

declare function N_0x88087ee1f28024ae(p0: number): void;

declare function N_0x8817605c2ba76200(): void;

declare function N_0x883d79c4071e18b3(): number;

declare function N_0x88578f6ec36b4a3a(p0: number, p1: number): number;

declare function N_0x886913bbeaca68c1(p0: number): number;

declare function N_0x8881c98a31117998(p0: number): void;

declare function N_0x88b588b41ff7868e(): number;

declare function N_0x88bc673ca9e0ae99(vehicle: number, p1: boolean): void;

declare function N_0x88e32db8c1a4aa4b(ped: number, p1: number): void;

declare function N_0x88eaec617cd26926(p0: string | number, p1: boolean): void;

declare function N_0x89023fbbf9200e9f(): number;

declare function N_0x89215ec747df244a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x892b6ab8f33606f5(p0: number, p1: number): void;

declare function N_0x8951eb9c6906d3c8(): void;

declare function N_0x897433d292b44130(): [number, number, number];

declare function N_0x8989cbd7b4e82534(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x89d630cf5ea96d23(vehicle: number, entity: number): number;

declare function N_0x8a24b067d175a7bd(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x8a35c742130c6080(p0: number): [number, number];

declare function N_0x8a694d7a68f8dc38(p0: number, p1: string, p2: string): void;

declare function N_0x8a7a40100edfec58(interiorID: number, roomName: string): void;

declare function N_0x8a800daccc0da55d(): void;

declare function N_0x8aa464d4e0f6accd(): number;

declare function N_0x8aa9180de2fedd45(vehicle: number, p1: boolean): void;

declare function N_0x8abe8608576d9ce3(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x8b0c2964ba471961(): number;

declare function N_0x8b4ffc790ca131ef(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x8b9cdbd6c566c38c(): number;

declare function N_0x8bbacbf51da047a8(p0: number): void;

declare function N_0x8bc515bae4aaf8ff(p0: number): number;

declare function N_0x8bd6c6dea20e82c6(p0: number): number;

declare function N_0x8bdc7bfc57a81e76(x: number, y: number, z: number): [number, number, number[]];

declare function N_0x8bf907833be275de(p0: number, p1: number): void;

declare function N_0x8bfceb5ea1b161b6(): number;

declare function N_0x8c33220c8d78ca0d(p0: number, p1: number): void;

declare function N_0x8c4f3bf23b6237db(ped: number, p1: boolean, p2: boolean): number;

declare function N_0x8c8d2739ba44af0f(p0: number): number;

declare function N_0x8c9d11605e59d955(p0: number): void;

declare function N_0x8caab2bd3ea58bd4(p0: number): void;

declare function N_0x8cc469ab4d349b7c(p0: number, p1: string, p2: number): number;

declare function N_0x8cde909a0370bb3a(p0: boolean): void;

declare function N_0x8d11e61a4abf49cc(): number;

declare function N_0x8d30f648014a92b5(): number;

declare function N_0x8d74e26f54b4e5c3(p0: string): void;

declare function N_0x8d768602adef2245(p0: number, p1: number): void;

declare function N_0x8d7a43ec6a5fea45(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x8d8adb562f09a245(p0: number): void;

declare function N_0x8d9df6eca8768583(p0: number): void;

declare function N_0x8e243837643d9583(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8e2a065abdae6994(): void;

declare function N_0x8ea86df356801c7d(p0: number, p1: number): void;

declare function N_0x8ec74ceb042e7cff(p0: number): void;

declare function N_0x8ef5573a1f801a5c(p0: number): [number, number, number];

declare function N_0x8efccf6ec66d85e4(p3: boolean, p4: boolean): [number, number, number, number];

declare function N_0x8f08017f9d7c47bd(p0: number, p2: number): [number, number];

declare function N_0x8f5d1ad832aeb06c(p0: number): number;

declare function N_0x8f5ea1c01d65a100(p0: number): number;

declare function N_0x8f719973e1445ba2(vehicle: number, p1: boolean): void;

declare function N_0x8fa9c42fc5d7c64b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function N_0x8fd89a6240813fd0(ped: number, p1: boolean, p2: boolean): void;

declare function N_0x900086f371220b6f(p0: boolean, p1: number, p2: number): void;

declare function N_0x9007a2f21dc108d4(p0: number, p1: number): void;

declare function N_0x9049fe339d5f6f6f(): number;

declare function N_0x90a6526cf0381030(p0: number, p2: number, p3: number): [number, number];

declare function N_0x90a78ecaa4e78453(): number;

declare function N_0x90d0622866e80445(p0: number, p1: string): void;

declare function N_0x9135584d09a3437e(): number;

declare function N_0x918c7b2d2ff3928b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x919b3c98ed8292f9(p0: number): number;

declare function N_0x91a0bd635321f145(vehicle: number, p1: boolean): void;

declare function N_0x91b87c55093de351(): number;

declare function N_0x91d6dd290888cbab(): number;

declare function N_0x91ef34584710be99(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

declare function N_0x91ef6ee6419e5b97(p0: boolean): void;

declare function N_0x920d853f3e17f1da(interiorID: number, roomHashKey: string | number): void;

declare function N_0x921ce12c489c4c41(PlayerID: number): number;

declare function N_0x9237e334f6e43156(p0: number): number;

declare function N_0x9245e81072704b8a(p0: boolean): void;

declare function N_0x9251b6abf2d0a5b4(p0: number, p1: number): void;

declare function N_0x92523b76657a517d(p0: number, p1: number): number;

declare function N_0x92790862e36c2ada(): void;

declare function N_0x928dbfb892638ef3(): void;

declare function N_0x92aefb5f6e294023(object: number, p1: boolean, p2: boolean): void;

declare function N_0x92c360b5f15d2302(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x92ccc17a7a2285da(): void;

declare function N_0x92da6e70ef249bd1(p0: string, p1: number): number;

declare function N_0x92f0da1e27db96dc(p0: number): void;

declare function N_0x930de22f07b1cce3(p0: number): number;

declare function N_0x930f504203f561c9(p0: number): void;

declare function N_0x933bbeeb8c61b5f4(): number;

declare function N_0x941e5306bcd7c2c7(): number;

declare function N_0x94538037ee44f5cf(p0: boolean): void;

declare function N_0x9465e683b12d3f6b(): void;

declare function N_0x9489659372a81585(): number;

declare function N_0x949f397a288b28b3(p0: number): void;

declare function N_0x94a8394d150b013a(): number;

declare function N_0x94f12abf9c79e339(p0: number): number;

declare function N_0x952f06beecd775cc(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x953563ce563143af(p0: number): number;

declare function N_0x95a7dabddbb78ae7(): [number, number];

declare function N_0x95cf53b3d687f9fa(vehicle: number): void;

declare function N_0x95cf81bd06ee1887(): void;

declare function N_0x95eb5e34f821babe(p0: number, p1: number, p2: number): number;

declare function N_0x9614b71f8adb982b(): number;

declare function N_0x9641588dab93b4b5(p0: number): void;

declare function N_0x966dd84fb6a46017(): void;

declare function N_0x967278682cb6967a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9689123e3f213aa5(): number;

declare function N_0x96e6d5150dbf1c09(p0: number, p1: number, p2: number): void;

declare function N_0x96ee0eba0163df80(p0: number, p1: number): void;

declare function N_0x9737a37136f07e75(vehicle: number, toggle: boolean): void;

declare function N_0x973d76aa760a6cb6(p0: boolean): void;

declare function N_0x975d66a0bc17064c(p0: number): void;

declare function N_0x9769f811d1785b03(player: number, x: number, y: number, z: number, p4: boolean, p5: boolean): void;

declare function N_0x9777734dad16992f(): number;

declare function N_0x977ca98939e82e4b(p0: number, p1: number): void;

declare function N_0x9780f32bcaf72431(): number;

declare function N_0x97dd4c5944cc2e6a(player: number, toggle: boolean): void;

declare function N_0x97e7e2c04245115b(p0: number): void;

declare function N_0x98215325a695e78a(p0: boolean): void;

declare function N_0x98c3cf913d895111(p0: number, p1: number): number;

declare function N_0x98c4fe6ec34154ca(p0: string, ped: number, p2: number, posX: number, posY: number, posZ: number): number;

declare function N_0x98e2bc1ca26287c3(): void;

declare function N_0x98edf76a7271e4f2(): void;

declare function N_0x99093f60746708ca(p0: number): number;

declare function N_0x9911f4a24485f653(p0: boolean): void;

declare function N_0x993cbe59d350d225(p0: number): number;

declare function N_0x996dd1e1e02f1008(): number;

declare function N_0x998e18ceb44487fc(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x99ac7f0d8b9c893d(p0: number): void;

declare function N_0x99ad4cccb128cbc9(vehicle: number): void;

declare function N_0x99b72c7abde5c910(ped: number, player: number): number;

declare function N_0x99cad8e7afdb60fa(vehicle: number, p1: number, p2: number): void;

declare function N_0x9a53ded9921de990(p0: number, p1: number): void;

declare function N_0x9a62ec95ae10e011(): number;

declare function N_0x9a75585fb2e54fad(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9a77dfd295e29b09(p0: number, p1: boolean): void;

declare function N_0x9a83f5f9963775ef(vehicle: number): number;

declare function N_0x9aa47fff660cb932(p0: number, p1: number): void;

declare function N_0x9ac92eed5e4793ab(): void;

declare function N_0x9b079e5221d984d3(p0: boolean): void;

declare function N_0x9b2bd3773123ea2f(_type: number, toggle: boolean): void;

declare function N_0x9b4bd21d69b1e609(): void;

declare function N_0x9b6e70c5ceef4eeb(p0: number): number;

declare function N_0x9ba001cb45cbf627(doorHash: string | number, heading: number, p2: boolean, p3: boolean): void;

declare function N_0x9bddc73cc6a115d4(p0: number, p1: boolean, p2: boolean): void;

declare function N_0x9becd4b9fef3f8a6(vehicle: number, p1: boolean): void;

declare function N_0x9bf438815f5d96ea(p0: number, p1: number, p3: number, p4: number, p5: number): [number, number];

declare function N_0x9c16459b2324b2cf(p0: number, p1: number): void;

declare function N_0x9c6a6c19b6c0c496(p0: number, p1: number): number;

declare function N_0x9cb0bfa7a9342c3d(p0: number, p1: boolean): number;

declare function N_0x9cfdd90b2b844bf7(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x9d30687c57baa0bb(p0: number): void;

declare function N_0x9d3af56e94c9ae98(p0: number, p1: number): void;

declare function N_0x9d728c1e12bf5518(p0: number): number;

declare function N_0x9d75795b9dc6ebbf(p0: number): void;

declare function N_0x9d7afcbf21c51712(p0: boolean): void;

declare function N_0x9d8d44adbba61ef2(p0: boolean): void;

declare function N_0x9da58cdbf6bdbc08(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): number;

declare function N_0x9dba107b4937f809(p0: number, p1: string): void;

declare function N_0x9e30e91fb03a2caf(): [number, number, number];

declare function N_0x9e4cfff989258472(): void;

declare function N_0x9e6542f0ce8e70a3(toggle: boolean): void;

declare function N_0x9e778248d6685fe0(p0: string): void;

declare function N_0x9e82f0f362881b29(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x9ebc85ed0fffe51c(entity: number, p1: boolean, p2: boolean): void;

declare function N_0x9ebd751e5787baf2(p0: number): void;

declare function N_0x9ec8858184cd253a(): number;

declare function N_0x9eca15adfe141431(): number;

declare function N_0x9edd76e87d5d51ba(player: number): void;

declare function N_0x9f3f689b814f2599(vehicle: number, p1: boolean): void;

declare function N_0x9f5e6bb6b34540da(p0: number): void;

declare function N_0x9f6e2821885caee2(p0: number, p1: number, p2: number): [number, number, number];

declare function N_0x9fe5633880ecd8ed(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9fedf86898f100e9(): number;

declare function N_0xa01bc64dd4bfbbac(vehicle: number, p1: number): number;

declare function N_0xa03502fc581f7d9b(): number;

declare function N_0xa049a5be0f04f2f8(): number;

declare function N_0xa071e0ed98f91286(p0: number, p1: number): void;

declare function N_0xa08fe5e49bdc39dd(p0: number, p1: number, p2: boolean): void;

declare function N_0xa097ab275061fb21(): number;

declare function N_0xa09f896ce912481f(p0: boolean): number;

declare function N_0xa0cefcea390aab9b(p0: number): void;

declare function N_0xa0d3e4f7aafb7e78(p0: number, p1: number): number;

declare function N_0xa0f8a7517a273c05(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xa0f93d5465b3094d(p0: number): number;

declare function N_0xa0fa4ec6a05da44e(): number;

declare function N_0xa0fe76168a189ddb(): number;

declare function N_0xa12d3a5a3753cc23(): number;

declare function N_0xa134777ff7f33331(p0: number, p1: number): number;

declare function N_0xa13c11e1b5c06bfc(): void;

declare function N_0xa13e93403f26c812(p0: number): number;

declare function N_0xa1607996431332df(netId: number): number;

declare function N_0xa17784fca9548d15(p0: number, p1: number, p2: number): void;

declare function N_0xa17bad153b51547e(cargobob: number, p1: number): void;

declare function N_0xa1a9fc1c76a6730d(p0: number): number;

declare function N_0xa1c996c2a744262e(p0: number): number;

declare function N_0xa1dd82f3ccf9a01e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xa1e5e0204a6fcc70(): void;

declare function N_0xa213b11dff526300(): number;

declare function N_0xa21c118553bbdf02(p0: number): void;

declare function N_0xa238192f33110615(): [number, number, number, number];

declare function N_0xa247f9ef01d8082e(p0: number): void;

declare function N_0xa2767257a320fc82(p0: number, p1: boolean): void;

declare function N_0xa277800a9eae340e(): number;

declare function N_0xa2a707979fe754dc(p0: number, p1: number): void;

declare function N_0xa2c1f5e92afe49ed(): void;

declare function N_0xa2c9ac24b4061285(p0: number, p1: number): number;

declare function N_0xa2ccbe62cd4c91a4(toggle: number): void;

declare function N_0xa2e9c1ab8a92e8cd(p0: boolean): void;

declare function N_0xa2f952104fc6dd4b(p0: number): number;

declare function N_0xa306f470d1660581(): number;

declare function N_0xa31fd15197b192bd(): number;

declare function N_0xa356990e161c9e65(p0: boolean): void;

declare function N_0xa3a9299c4f2adb98(p0: number): void;

declare function N_0xa3c53804bdb68ed2(p0: number, p1: number): void;

declare function N_0xa3f3564a5b3646c0(ped: number): number;

declare function N_0xa40cc53df8e50837(p0: boolean, args: number, argCount: number, bit: number): void;

declare function N_0xa41bcd7213805aac(p0: boolean): void;

declare function N_0xa44ff770dfbc5dae(): void;

declare function N_0xa4664972a9b8f8ba(p0: number): number;

declare function N_0xa46b73faa3460ae1(p0: boolean): void;

declare function N_0xa4819f5e23e2ffad(): number;

declare function N_0xa4822f1cf23f4810(p1: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): [number, number[], number[]];

declare function N_0xa48931185f0536fe(): number;

declare function N_0xa4a0065e39c9f25c(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xa4dede28b1814289(): void;

declare function N_0xa51b086b0b2c0f7a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa51c4b86b71652ae(p0: boolean): void;

declare function N_0xa52d5247a4227e14(p0: number): void;

declare function N_0xa5342d390cda41d6(p0: number, p1: boolean): void;

declare function N_0xa586fbeb32a53dbb(): number;

declare function N_0xa5c80d8e768a9e66(p0: number): number;

declare function N_0xa5efc3e847d60507(p0: string, p1: string, p2: string, p3: string, p4: boolean): number;

declare function N_0xa5f377b175a699c5(p0: number): void;

declare function N_0xa635c11b8c44afc2(): number;

declare function N_0xa6385deb180f319f(p0: number, p1: number, p2: number): void;

declare function N_0xa660faf550eb37e5(p0: number, p1: boolean): void;

declare function N_0xa67c35c56eb1bd9d(): number;

declare function N_0xa67f9c46d612b6f1(headDisplayId: number, p1: boolean): void;

declare function N_0xa68d3d229f4f3b06(p0: string): void;

declare function N_0xa699957e60d80214(p0: number): number;

declare function N_0xa69ac4ade82b57a4(p0: number): number;

declare function N_0xa6a12939f16d85be(hash: string | number, p1: boolean): void;

declare function N_0xa6d3a8750dc73270(p0: number, p1: number): void;

declare function N_0xa6f54bb2ffca35ea(p0: number): void;

declare function N_0xa72835064dd63e4c(): number;

declare function N_0xa735353c77334ea0(): [number, number];

declare function N_0xa736cf7fb7c5bff4(): [number, number, number, number];

declare function N_0xa74802fb8d0b7814(p0: string, p1: number): void;

declare function N_0xa75ccf58a60a5fd1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0xa75e2b6733da5142(): number;

declare function N_0xa761d4ac6115623d(): number;

declare function N_0xa76359fc80b2438e(p0: number): void;

declare function N_0xa7862bc5ed1dfd7e(p0: number, p1: number): [number, number, number];

declare function N_0xa78b8fa58200da56(p0: number): void;

declare function N_0xa78de25577300ba1(p0: number): void;

declare function N_0xa7a1127490312c36(p0: number): void;

declare function N_0xa7c511fa1c5bda38(p0: number, p1: number): void;

declare function N_0xa7dcdf4ded40a8f4(vehicle: number, p1: boolean): void;

declare function N_0xa7e30de9272b6d49(ped: number, x: number, y: number, z: number, p4: number): void;

declare function N_0xa7ffba498e4aaf67(p0: number, p1: string): number;

declare function N_0xa80ae305e0a3044f(entity: number, p1: boolean): void;

declare function N_0xa8434f1dff41d6e7(p0: number): void;

declare function N_0xa85a21582451e951(doorHash: string | number, p1: boolean): void;

declare function N_0xa8733668d1047b51(p0: number): void;

declare function N_0xa8acb6459542a8c8(): number;

declare function N_0xa8b6afdac320ac87(p0: number, p1: number): void;

declare function N_0xa8fdb297a8d25fba(): void;

declare function N_0xa905192a6781c41b(x: number, y: number, z: number): void;

declare function N_0xa90e7227a9303fa9(p0: number, p1: number): void;

declare function N_0xa9240a96c74cca13(p0: number): number;

declare function N_0xa943fd1722e11efd(): number;

declare function N_0xa95f667a755725da(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa9b61a329bfdcbea(p0: number, p1: boolean): void;

declare function N_0xa9cbfd40b3fa3010(): number;

declare function N_0xa9f9c2e0fde11cbb(p0: number, p1: number, p2: number): number;

declare function N_0xaa19f5572c38b564(p0: number): number;

declare function N_0xaa3f739abddcf21f(): void;

declare function N_0xaa525dff66bb82f5(p0: number, p1: number, p2: number): void;

declare function N_0xaa5fafcd2c5f5e47(): number;

declare function N_0xaa76052dda9bfc3e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0xaaa553e7dd28a457(p0: boolean): void;

declare function N_0xaaa6a3698a69e048(p0: number): number;

declare function N_0xab04325045427aae(vehicle: number, p1: boolean): void;

declare function N_0xab13a5565480b6d9(p0: number, p1: number): number;

declare function N_0xab31ef4de6800ce9(p0: number, p1: number): void;

declare function N_0xabb2fa71c83a1b72(): number;

declare function N_0xabd5e88b8a2d3db2(globalPtr: number): void;

declare function N_0xac272c0ae01b4bd8(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xac2890471901861c(p0: number): void;

declare function N_0xacb5dcca1ec76840(vehicle: number): number;

declare function N_0xad2d28a1afdff131(vehicle: number, p1: number): void;

declare function N_0xad5fdf34b81bfe79(): void;

declare function N_0xad6875bbc0fc899c(p0: number): void;

declare function N_0xad73ce5a09e42d12(player: number): number;

declare function N_0xadb57e5b663cca8b(p0: number): [number, number];

declare function N_0xaddd1c754e2e2914(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0xaded7f5748acafe6(): void;

declare function N_0xae3fee8709b39dcb(vehicle: number): number;

declare function N_0xae51bc858f32ba66(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xaeab987727c5a8a4(p0: number): number;

declare function N_0xaeef48cdf5b6ce7c(p0: number, p1: number): number;

declare function N_0xaf03011701811146(p0: number, p1: number): number;

declare function N_0xaf12610c644a35c9(p0: string, p1: boolean): void;

declare function N_0xaf348afcb575a441(roomName: string): void;

declare function N_0xaf42195a42c63bba(): number;

declare function N_0xaf60e6a2936f982a(p0: number, p1: number): void;

declare function N_0xaf66dcee6609b148(): void;

declare function N_0xafc976fd0580c7b3(ped: number, toggle: boolean): void;

declare function N_0xaff4710e2a0a6c12(ped: number): void;

declare function N_0xaff47709f1d5dcce(): number;

declare function N_0xb055a34527cb8fd7(vehicle: number, p1: boolean): void;

declare function N_0xb07d3185e11657a5(p0: number): number;

declare function N_0xb088e9a47ae6edd5(vehicle: number, p1: boolean): void;

declare function N_0xb08b85d860e7ba3c(p0: number, p1: number, p2: number): void;

declare function N_0xb094bc1db4018240(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb09d25e77c33eb3f(p0: number, p1: number, p2: number): number;

declare function N_0xb0a6cfd2c69c1088(p0: number, p2: boolean): number;

declare function N_0xb0ad1238a709b1a2(p0: number): number;

declare function N_0xb0c56bd3d808d863(p0: boolean): void;

declare function N_0xb11d94bc55f41932(p0: string): void;

declare function N_0xb1252e3e59a82aaf(p0: number): void;

declare function N_0xb129e447a2eda4bf(p0: number, p1: boolean): void;

declare function N_0xb13dcb4c6faad238(p0: number, p1: number, p2: number): void;

declare function N_0xb13e88e655e5a3bc(): void;

declare function N_0xb1577667c3708f9b(): void;

declare function N_0xb17bc6453f6cf5ac(p0: number, p1: number): void;

declare function N_0xb1b6216ca2e7b55e(p0: number, p1: boolean, p2: boolean): void;

declare function N_0xb1bb03742917a5d6(_type: number, xPos: number, yPos: number, zPos: number, p4: number, red: number, green: number, blue: number, alpha: number): void;

declare function N_0xb1d2bb1e1631f5b1(): number;

declare function N_0xb2092a1eaa7fd45f(p0: number): number;

declare function N_0xb214d570ead7f81a(p0: number, p1: number): void;

declare function N_0xb264c4d2f2b0a78b(vehicle: number): void;

declare function N_0xb282749d5e028163(p0: number, p1: number): void;

declare function N_0xb28b1fe5bfadd7f5(vehicle: number, p1: boolean): void;

declare function N_0xb2a592b04648a9cb(): number;

declare function N_0xb2aff10216defa2f(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, interiorFlags: number, scale: number, duration: number): void;

declare function N_0xb2d0bde54f0e8e5a(object: number, toggle: boolean): void;

declare function N_0xb2e0c0d6922d31f2(p0: number, p1: number): void;

declare function N_0xb2ebe8cbc58b90e9(): number;

declare function N_0xb309ebea797e001f(p0: number): number;

declare function N_0xb328dcc3a3aa401b(p0: number): number;

declare function N_0xb335f761606db47c(p2: number, p3: boolean): [number, number, number];

declare function N_0xb37e4e6a2388ca7b(): number;

declare function N_0xb3c641f3630bf6da(p0: number): void;

declare function N_0xb3cd58cca6cda852(): void;

declare function N_0xb3da2606774a8e2d(): number;

declare function N_0xb3e6360dde733e82(p0: number): void;

declare function N_0xb3ea4feabf41464b(p0: number, p1: number): number;

declare function N_0xb3eca65c7317f174(): number;

declare function N_0xb4271092ca7edf48(p0: number): number;

declare function N_0xb45eff719d8427a6(p0: number): void;

declare function N_0xb475f27c6a994d65(): void;

declare function N_0xb4771b9aaf4e68e4(p0: number, p1: number, p2: number): void;

declare function N_0xb49eca122467d05f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb4bbfd9cd8b3922b(p0: string): void;

declare function N_0xb4c2ec463672474e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb4c8d77c80c0421e(ped: number, p1: number): number;

declare function N_0xb4f47213df45a64c(p0: number, p1: number): number;

declare function N_0xb50eb4ccb29704ac(p0: number): void;

declare function N_0xb51b9ab9ef81868c(toggle: boolean): void;

declare function N_0xb542de8c3d1cb210(p0: boolean): void;

declare function N_0xb552929b85fc27ec(p0: number, p1: number): void;

declare function N_0xb569f41f3e7e83a4(p0: number): void;

declare function N_0xb56bbbcc2955d9cb(): number;

declare function N_0xb57a49545ba53ce7(p0: number): number;

declare function N_0xb5a4db34fe89b88a(): void;

declare function N_0xb5d3453c98456528(): number;

declare function N_0xb606e6cc59664972(p0: number): void;

declare function N_0xb6871b0555b02996(p2: number, p5: number): [number, number, number, number, number];

declare function N_0xb695e2cd0a2da9ee(): void;

declare function N_0xb7257ba2550ea10a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0xb743f735c03d7810(p0: number, p1: number): void;

declare function N_0xb746d20b17f2a229(): [number, number, number];

declare function N_0xb782f8238512bad5(p0: number, p1: number): void;

declare function N_0xb7c7f6ad6424304b(): void;

declare function N_0xb7ed70c49521a61d(p0: number): void;

declare function N_0xb81cf134aeb56ffb(): void;

declare function N_0xb8721407ee9c3ff6(p0: number, p1: number, p2: number): void;

declare function N_0xb885852c39cc265d(): void;

declare function N_0xb8b52e498014f5b0(ped: number): number;

declare function N_0xb8f87ead7533b176(p0: number): void;

declare function N_0xb9449845f73f5e9c(functionName: string): number;

declare function N_0xb9496ce47546db2c(p0: number): number;

declare function N_0xb9562064627ff9db(p0: number, p1: number): void;

declare function N_0xb9854dfde0d833d6(p0: number): void;

declare function N_0xb99c4e4d9499df29(p0: boolean): void;

declare function N_0xb9c362babecddc7a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xb9cf1f793a9f1bf1(): number;

declare function N_0xba0127da25fd54c9(p0: number, p1: number): void;

declare function N_0xba3d194057c79a7b(p0: number): void;

declare function N_0xba3d65906822bed5(p0: boolean, p1: boolean, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xba4b8d83bdc75551(p0: number): void;

declare function N_0xba63d9fe45412247(ped: number, p1: boolean): number;

declare function N_0xba751764f0821256(): void;

declare function N_0xba7f0b77d80a4eb7(p0: number, p1: number): void;

declare function N_0xba8805a1108a2515(p0: number): number;

declare function N_0xba8d65c1c65702e5(p0: boolean): void;

declare function N_0xba91d045575699ad(p0: number): number;

declare function N_0xba96394a0eecfa65(): void;

declare function N_0xba9749cc94c1fd85(): number;

declare function N_0xba9775570db788cf(): number;

declare function N_0xbaa045b4e42f3c06(p0: number, p1: number): void;

declare function N_0xbaa2f0490e146be8(p0: number): void;

declare function N_0xbae4f9b97cd43b30(p0: boolean): void;

declare function N_0xbaf6babf9e7ccc13(p0: number, p1: number): number;

declare function N_0xbb0527ec6341496d(): number;

declare function N_0xbb2333bb87ddd87f(p0: number, p1: number): void;

declare function N_0xbb90e12cac1dab25(p0: number): void;

declare function N_0xbbb45c3cf5c8aa85(): number;

declare function N_0xbbdf066252829606(p0: number, p1: boolean): void;

declare function N_0xbbf327ded94e4deb(p0: string): void;

declare function N_0xbc0753c9ca14b506(player: number, p1: number, p2: boolean): number;

declare function N_0xbc0ce682d4d05650(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;

declare function N_0xbc1cc91205ec8d6e(): number;

declare function N_0xbc3cca5844452b06(p0: number): void;

declare function N_0xbc9490ca15aea8fb(player: number): void;

declare function N_0xbc9823ab80a3dcac(): number;

declare function N_0xbce595371a5fbaaf(p0: number, p1: boolean): void;

declare function N_0xbcedb009461da156(): number;

declare function N_0xbcfc632db7673bf0(p0: number, p1: number): void;

declare function N_0xbcfde9ede4cf27dc(p0: number, p1: number): void;

declare function N_0xbd0be0bfc927eac1(): void;

declare function N_0xbd0efb25cca8f97a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbd32e46aa95c1dd2(p0: number): void;

declare function N_0xbd545d44cce70597(): number;

declare function N_0xbd605b8e0e18b3bb(): void;

declare function N_0xbdb6f89c729cf388(): number;

declare function N_0xbdeb86f4d5809204(p0: number): void;

declare function N_0xbe197eaa669238f4(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xbe3db208333d9844(): number;

declare function N_0xbe509b0a3693de8b(p0: number): void;

declare function N_0xbe5c1255a1830ff5(vehicle: number, toggle: boolean): void;

declare function N_0xbeb2d9a1d9a8f55a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbeb3d46bb7f043c0(p0: number): void;

declare function N_0xbec0816ff5acbcda(p0: number, p1: number): void;

declare function N_0xbed8ca5ff5e04113(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbed9f5693f34ed17(statName: string | number, p1: number, outValue: number): number;

declare function N_0xbef34b1d9624d5dd(p0: boolean): void;

declare function N_0xbf09786a7fcab582(p0: number): number;

declare function N_0xbf22e0f32968e967(player: number, p1: boolean): void;

declare function N_0xbf371cd2b64212fd(p0: number): void;

declare function N_0xbf4dc1784be94dfa(p0: number, p1: boolean, p2: number): void;

declare function N_0xbf4f34a85ca2970c(): void;

declare function N_0xbf59707b3e5ed531(p0: string): void;

declare function N_0xbf72910d0f26f025(): number;

declare function N_0xbfa0a56a817c6c7d(p0: boolean): void;

declare function N_0xbfafdb5faaa5c5ab(p0: number): void;

declare function N_0xbfba3ba79cff7ebf(modelHash: string | number): number;

declare function N_0xbfe5756e7407064a(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number, p14: boolean, p15: boolean, p16: boolean, p17: boolean): void;

declare function N_0xc0416b061f2b7e5e(p0: boolean): void;

declare function N_0xc098810437312fff(modData: number): number;

declare function N_0xc0d2af00bcc234ca(): number;

declare function N_0xc0e0d686ddfc6eae(): number;

declare function N_0xc0ed6438e6d39ba8(p0: number, p1: number, p2: number): void;

declare function N_0xc13c38e47ea5df31(p0: number): number;

declare function N_0xc141b8917e0017ec(): void;

declare function N_0xc15907d667f7cfb2(vehicle: number, toggle: boolean): void;

declare function N_0xc17ad0e5752becda(componentHash: string | number): number;

declare function N_0xc1805d05e6d4fe10(vehicle: number): void;

declare function N_0xc1952f3773ba18fe(p0: number, p1: number, p2: number): void;

declare function N_0xc1f6ebf9a3d55538(p0: number, p1: number): void;

declare function N_0xc1f981a6f74f0c23(p0: number, p1: boolean): void;

declare function N_0xc22912b1d85f26b1(p0: number): [number, number, number];

declare function N_0xc24075310a8b9cd1(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc265df9fb44a9fbd(p0: number): number;

declare function N_0xc2afffdabbdc2c5c(p0: number, p1: number): number;

declare function N_0xc2d15bef167e27bc(): void;

declare function N_0xc2d2ad9eaae265b8(): number;

declare function N_0xc2eae3fb8cdbed31(p0: string, p1: string, p2: string, p3: number): void;

declare function N_0xc2ee020f5fb4db53(ped: number): void;

declare function N_0xc32ea7a2f6ca7557(): number;

declare function N_0xc3376f42b1faccc6(player: number): void;

declare function N_0xc34bc448da29f5e9(p0: number, p1: number): void;

declare function N_0xc35a6d07c93802b2(): void;

declare function N_0xc361aa040d6637a8(p0: number, p1: boolean): void;

declare function N_0xc388a0f065f5bc34(p0: number, p1: number): void;

declare function N_0xc38dc1e90d22547c(): [number, number, number, number];

declare function N_0xc3bfed92026a2aad(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xc3c221addde31a11(p0: number): void;

declare function N_0xc3ead29ab273ece8(p0: number): void;

declare function N_0xc4278f70131baa6d(p0: number, p1: boolean): void;

declare function N_0xc42dd763159f3461(): number;

declare function N_0xc434133d9ba52777(p0: number, p1: number): number;

declare function N_0xc45c27ef50f36adc(vehicle: number, p1: boolean): void;

declare function N_0xc485e07e4f0b7958(doorHash: string | number, p1: boolean, p2: boolean, p3: boolean): void;

declare function N_0xc4b3347bd68bd609(p0: number): void;

declare function N_0xc505036a35afd01b(p0: boolean): void;

declare function N_0xc50ce861b55eab8b(vehicle: number, p1: boolean): void;

declare function N_0xc54a08c85ae4d410(p0: number): void;

declare function N_0xc55854c7d7274882(): void;

declare function N_0xc55a0b40ffb1ed23(): number;

declare function N_0xc56fbf2f228e1dac(p0: number, p1: number, p2: number): number;

declare function N_0xc571d0e77d8bbc29(): number;

declare function N_0xc594b315edf2d4af(ped: number): void;

declare function N_0xc5be134ec7ba96a0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc5c8f970d4edff71(p0: number): void;

declare function N_0xc6033d32241f6fb5(p0: number, p1: boolean): void;

declare function N_0xc61b86c9f61eb404(toggle: boolean): void;

declare function N_0xc6372ecd45d73bcd(p0: boolean): void;

declare function N_0xc64ded7ef0d2fe37(p0: number): number;

declare function N_0xc65ab383cd91df98(): void;

declare function N_0xc6ad107ddc9054cc(modelHash: string | number): number;

declare function N_0xc6e0e2616a7576bb(): number;

declare function N_0xc70ddce56d0d3a99(): number;

declare function N_0xc729991a9065376e(p0: number): void;

declare function N_0xc7397a83f7a2a462(p1: number, p2: boolean): [number, number, number];

declare function N_0xc78e239ac5b2ddb9(p0: boolean, p1: number, p2: number): void;

declare function N_0xc79196dcb36f6121(p0: number): void;

declare function N_0xc79ae21974b01fb2(): void;

declare function N_0xc7abac5de675ee3b(): number;

declare function N_0xc7be335216b5ec7c(): number;

declare function N_0xc7db36c24634f52b(): void;

declare function N_0xc7e7181c09f33b69(p0: boolean): void;

declare function N_0xc7f29ca00f46350e(p0: boolean): void;

declare function N_0xc819f3cbb62bf692(render: boolean, p1: number, p2: number): void;

declare function N_0xc8391c309684595a(): void;

declare function N_0xc8407624cef2354b(p0: number, p1: number): void;

declare function N_0xc84527e235fca219(p0: string, p1: boolean, p2: string, _type: string, p6: boolean): [number, number, number];

declare function N_0xc847b43f369ac0b5(): void;

declare function N_0xc87e740d9f3872cc(): number;

declare function N_0xc8b1b2425604cdd0(): number;

declare function N_0xc8b5c4a79cc18b94(p0: number): void;

declare function N_0xc8e1071177a23be5(): [number, number, number, number];

declare function N_0xc8ede9bdbccba6d4(p1: number, p2: number, p3: number): number;

declare function N_0xc8f3aaf93d0600bf(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xc91c6c55199308ca(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xc92717ef615b6704(p0: number): void;

declare function N_0xc980e62e33df1d5c(): [number, number, number];

declare function N_0xc9a763d8fe87436a(player: number): void;

declare function N_0xc9b18b4619f48f7b(p0: number): void;

declare function N_0xc9b43a33d09cada7(p0: number): void;

declare function N_0xca465d9cc0d231ba(p0: number): void;

declare function N_0xca4ac3eaae46ec7b(p0: number, p1: number): number;

declare function N_0xca4ae345a153d573(p0: boolean): void;

declare function N_0xca575c391fea25cc(p0: number): void;

declare function N_0xca6b2f7ce32ab653(p0: number, p2: number): [number, number];

declare function N_0xca94551b50b4932c(p0: number): number;

declare function N_0xca9d2aa3e326d720(): number;

declare function N_0xcac57395b151135f(player: number, p1: boolean): void;

declare function N_0xcac66558b944da67(vehicle: number, p1: boolean): void;

declare function N_0xcada5a0d0702381e(p0: string, soundset: string): void;

declare function N_0xcae55f48d3d7875c(p0: number): void;

declare function N_0xcb00196b31c39eb1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcb0360efefb2580d(p0: number): void;

declare function N_0xcb215c4b56a7fae7(p0: boolean): number;

declare function N_0xcb645e85e97ea48b(): number;

declare function N_0xcb82a0bf0e3e3265(p0: number): number;

declare function N_0xcb968b53fc7f916d(p0: number, p1: boolean, p2: number, p3: number): void;

declare function N_0xcc25a4553dfbf9ea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xcc3fdded67bcfc63(): void;

declare function N_0xcc6e3b6bb69501f1(p0: number): number;

declare function N_0xcc6e963682533882(p0: number): void;

declare function N_0xcc9682b8951c5229(ped: number, r: number, g: number, b: number, p4: number): void;

declare function N_0xcca4318e1ab03f1f(p0: number): number;

declare function N_0xccd078c2665d2973(p0: boolean): void;

declare function N_0xcd018c591f94cb43(p0: number, p1: boolean): void;

declare function N_0xcd71a4ecab22709e(entity: number): void;

declare function N_0xcd74233600c4ea6b(p0: number): void;

declare function N_0xcd79a550999d7d4f(p0: number): number;

declare function N_0xcda1c62be2777802(p0: number, p1: number, p2: number): void;

declare function N_0xcdca26e80faecb8f(): void;

declare function N_0xce5aa445aba8dee0(p0: number): number;

declare function N_0xce5d0e5e315db238(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xce6294a232d03786(p0: number, p1: number): number[];

declare function N_0xcea553e35c2246e1(p0: number, p1: number, p2: number): void;

declare function N_0xcea7c8e1b48ff68c(p0: number, p1: number): void;

declare function N_0xced08cbe8ebb97c7(p0: number, p1: number): void;

declare function N_0xceda60a74219d064(p0: number, p1: boolean): void;

declare function N_0xcef214315d276fd1(p0: boolean): void;

declare function N_0xcf1182f682f65307(p0: number, p1: number): void;

declare function N_0xcf38dafbb49ede5e(p0: number): number;

declare function N_0xcf61d4b4702ee9eb(): number;

declare function N_0xcf9159024555488c(p0: number): void;

declare function N_0xcfd115b373c0df63(p0: number, p1: number): void;

declare function N_0xcfd778e7904c255e(vehicle: number): void;

declare function N_0xcfeb46dcd7d8d5eb(p0: boolean): void;

declare function N_0xcfeb8af24fc1d0bb(p0: boolean): void;

declare function N_0xd0082607100d7193(): number;

declare function N_0xd00d76a7dfc9d852(p0: number): void;

declare function N_0xd01005d2ba2eb778(p0: number): void;

declare function N_0xd01015c7316ae176(ped: number, p1: string): number;

declare function N_0xd05d1a6c74da3498(p1: boolean): [number, number, number];

declare function N_0xd0a484cb2f829fbe(): number;

declare function N_0xd0bc1c6fb18ee154(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0xd0ee05fe193646ea(): [number, number, number, number];

declare function N_0xd10282b6e3751ba0(): number;

declare function N_0xd1032e482629049e(p0: boolean): void;

declare function N_0xd10f442036302d50(p0: number, p1: number, p2: number): void;

declare function N_0xd12882d3ff82bf11(): void;

declare function N_0xd1871251f3b5acd7(ped: number): number;

declare function N_0xd1942374085c8469(p0: number): void;

declare function N_0xd1a1ee3b4fa8e760(p0: number): void;

declare function N_0xd1b0f412f109ea5d(p0: number, p1: number): void;

declare function N_0xd1c55b110e4df534(p0: number): void;

declare function N_0xd1c7cb175e012964(scaleformHandle: number): number;

declare function N_0xd1c9b92bdd3f151d(p0: number, p1: number, p2: number): void;

declare function N_0xd1f8363dfad03848(p0: number): void;

declare function N_0xd202b92cbf1d816f(_type: number, image: number, text: string): number;

declare function N_0xd2049635deb9c375(): void;

declare function N_0xd2209be128b5418c(graphicsName: string): void;

declare function N_0xd2300034310557e4(vehicle: number, p1: number): void;

declare function N_0xd261ba3e7e998072(p0: number, p1: number): void;

declare function N_0xd2936cab8b58fcbd(p0: number, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;

declare function N_0xd2b315b6689d537d(player: number, p1: boolean): void;

declare function N_0xd2b32be3fc1626c6(): void;

declare function N_0xd2cc78cd3d0b50f9(p0: number, p1: boolean): void;

declare function N_0xd2dccd8e16e20997(p0: number): void;

declare function N_0xd302e99edf0449cf(p0: number): number;

declare function N_0xd313de83394af134(): number;

declare function N_0xd3301660a57c9272(p0: number): void;

declare function N_0xd33daa36272177c4(ped: number): void;

declare function N_0xd38c4a6d047c019d(): number;

declare function N_0xd39b3fff8ffdd5bf(p0: number): number;

declare function N_0xd39d13c9febf0511(p0: boolean): void;

declare function N_0xd3a10fc7fd8d98cd(): number;

declare function N_0xd3a6a0ef48823a8c(): number;

declare function N_0xd3d15555431ab793(): number;

declare function N_0xd3e51c0ab8c26eee(p0: number, p1: number): number;

declare function N_0xd40aac51e8e4c663(p0: number): number;

declare function N_0xd4196117af7bb974(p0: number, p1: number): number;

declare function N_0xd4438c0564490e63(): void;

declare function N_0xd4793dff3af2abcd(): void;

declare function N_0xd4b8e3d1917bc86b(toggle: boolean): void;

declare function N_0xd4c4642cb7f50b5d(vehicle: number): number;

declare function N_0xd53acdbef24a46e8(): number;

declare function N_0xd558bec0bba7e8d2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd565f438137f0e10(p0: number, p1: number): void;

declare function N_0xd57aaae0e2214d11(): void;

declare function N_0xd5a4b59980401588(p0: number, p1: number): [number, number, number];

declare function N_0xd5bb4025ae449a4e(p0: number, p1: string, p2: number): void;

declare function N_0xd642319c54aadeb6(): number;

declare function N_0xd66c9e72b3cc4982(p1: number): [number, number];

declare function N_0xd6781e42755531f7(p0: number): void;

declare function N_0xd68a5ff8a3a89874(r: number, g: number, b: number, a: number): void;

declare function N_0xd69411aa0cebf9e9(ped: number, p1: number, p2: number, p3: number): void;

declare function N_0xd6ade981781fca09(p0: number): void;

declare function N_0xd7021272eb0a451e(p0: string): void;

declare function N_0xd7360051c885628b(): number;

declare function N_0xd76eeef746057fd6(p0: number): number;

declare function N_0xd79185689f8fd5df(p0: boolean): void;

declare function N_0xd7b6c73cad419bcf(p0: number): void;

declare function N_0xd7c95d322ff57522(): number;

declare function N_0xd7cccba28c4ecaf0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd7d0b00177485411(p0: number, p1: number): void;

declare function N_0xd7d22f5592aed8ba(p0: number): number;

declare function N_0xd801cc02177fa3f1(): void;

declare function N_0xd80a80346a45d761(p0: number): number;

declare function N_0xd8122c407663b995(): number;

declare function N_0xd81b7f27bc773e66(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd821056b9acf8052(p0: number, p1: number): void;

declare function N_0xd8295af639fd9cb8(p0: number): void;

declare function N_0xd8c3be3ee94caf2d(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd8e694757bcea8e9(): void;

declare function N_0xd9454b5752c857dc(): void;

declare function N_0xd95cc5d2ab15a09f(p0: number): number;

declare function N_0xd972df67326f966e(): void;

declare function N_0xd99db210089617fe(p0: number, p1: number, p2: number): void;

declare function N_0xd9b71952f78a2640(doorHash: string | number, p1: boolean): void;

declare function N_0xd9f692d349249528(): void;

declare function N_0xda024bdbd600f44a(p0: number): void;

declare function N_0xda05194260cdcdf9(p0: number, p1: number): void;

declare function N_0xda07819e452ffe8f(p0: number): void;

declare function N_0xdab963831dbfd3f4(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xdac073c7901f9e15(p0: number): void;

declare function N_0xdaf80797fc534bec(p0: number): void;

declare function N_0xdaf87174be7454ff(p0: number): number;

declare function N_0xdb34e8d56fc13b08(p0: number, p1: boolean, p2: boolean): void;

declare function N_0xdb41d07a45a6d4b7(p0: number): number;

declare function N_0xdb90c6cca48940f1(p0: boolean): void;

declare function N_0xdba3c090e3d74690(vehicle: number): void;

declare function N_0xdbaa5ec848ba2d46(p0: number, p1: number): void;

declare function N_0xdbc631f109350b8c(vehicle: number, p1: boolean): void;

declare function N_0xdbc966a01c02bca7(p0: number, p1: number, p2: number): void;

declare function N_0xdc18531d7019a535(p0: number, p1: number): number;

declare function N_0xdc459cfa0cce245b(p0: boolean): void;

declare function N_0xdc48473142545431(): number;

declare function N_0xdc54a7af8b3a14ef(): number;

declare function N_0xdc57a637a20006ed(p0: number, p1: number): void;

declare function N_0xdc64d2c53493ed12(player: number): void;

declare function N_0xdc6f8601faf2e893(entity: number, p1: boolean): void;

declare function N_0xdc9274a7ef6b2867(): number;

declare function N_0xdc9da9e8789f5246(): void;

declare function N_0xdcca191df9980fd7(ped: number): number;

declare function N_0xdce97bdf8a0eabc8(): number;

declare function N_0xdcfb5d4db8bf367e(p0: number, p1: boolean): void;

declare function N_0xdd2238f57b977751(p0: number): number;

declare function N_0xdd2620b7b9d16ff1(player: number, p1: number): number;

declare function N_0xdd6bcf9e94425df9(): void;

declare function N_0xdd6cb2cce7c2735c(_type: number, button: string, text: string): number;

declare function N_0xdd79df9f4d26e1c9(): void;

declare function N_0xddc635d5b3262c56(p0: number): void;

declare function N_0xde03620f8703a9df(): number;

declare function N_0xde45d1a1ef45ee61(player: number, toggle: boolean): void;

declare function N_0xde81239437e8c5a8(): void;

declare function N_0xdea36202fc3382df(p0: boolean): void;

declare function N_0xdeaaf77eb3687e97(p0: number, p1: number): number;

declare function N_0xdeadc0dedeadc0de(object: number): void;

declare function N_0xdeb2b99a1af1a2a6(p0: number): number;

declare function N_0xded5af5a0ea4b297(driver: number, p1: number): void;

declare function N_0xdf4b952f7d381b95(): number;

declare function N_0xdf649c4e9afdd788(): number;

declare function N_0xdf6ca0330f2e737b(p0: number, p1: number): void;

declare function N_0xdf7e3eeb29642c38(vehicle: number, p1: number, p2: number): void;

declare function N_0xdf97cdd4fc08fd34(p0: number): number;

declare function N_0xdfa80cb25d0a19b3(): number;

declare function N_0xdfb4138eefed7b81(ped: number, weaponHash: string | number, radius: number, p4: boolean): [number, number];

declare function N_0xdfc8cbc606fdb0fc(): number;

declare function N_0xdffa5be8381c3314(): number;

declare function N_0xdffcef48e511db48(p0: number, p1: boolean): void;

declare function N_0xe0130b41d3cf4574(): number;

declare function N_0xe01903c47c7ac89e(): void;

declare function N_0xe058175f8eafe79a(p0: boolean): void;

declare function N_0xe05dd0e9707003a3(p0: number, p1: boolean): void;

declare function N_0xe0a6138401bcb837(): number;

declare function N_0xe111a7c0d200cbc5(p0: number, p1: number): void;

declare function N_0xe12abe5e3a389a6c(entity: number, p1: boolean): void;

declare function N_0xe154b48b68ef72bc(p0: number): number;

declare function N_0xe16142b94664defd(p0: number, p1: boolean): void;

declare function N_0xe1615ec03b3bb4fd(): number;

declare function N_0xe16aa70ce9beedc3(p0: number): number;

declare function N_0xe1c8709406f2c41c(): void;

declare function N_0xe1ca84ebf72e691d(p0: number, p1: number): [number, number, number];

declare function N_0xe1cd1e48e025e661(): void;

declare function N_0xe23adc6fcb1f29ae(p0: number, p1: number, p2: number): void;

declare function N_0xe260e0bb9cd995ac(p0: number): number;

declare function N_0xe266ed23311f24d4(p0: number, p3: number, p4: number, p5: boolean): [number, number];

declare function N_0xe2892e7e55d7073a(p0: number): void;

declare function N_0xe2f53f172b45ede1(): void;

declare function N_0xe301bd63e9e13cf0(cargobob: number, vehicle: number): void;

declare function N_0xe30524e1871f481d(p0: number): void;

declare function N_0xe3261d791eb44acb(p0: number): void;

declare function N_0xe33ffa906ce74880(vehicle: number, p1: number): number;

declare function N_0xe35b38a27e8e7179(p0: number): number;

declare function N_0xe36a98d8ab3d3c66(p0: boolean): void;

declare function N_0xe3a7742e0b7a2f8b(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number): void;

declare function N_0xe3b05614dce1d014(p0: number): number;

declare function N_0xe3d969d2785ffb5e(): void;

declare function N_0xe3e2c1b4c59dbc77(p0: number): void;

declare function N_0xe3e5a7c64ca2c6ed(): number;

declare function N_0xe3ebaae484798530(vehicle: number, p1: boolean): void;

declare function N_0xe43a13c9e4cccbcf(ped: number, p1: boolean): void;

declare function N_0xe44a982368a4af23(vehicle: number, vehicle2: number): void;

declare function N_0xe45087d85f468bc2(p0: boolean, p1: number): void;

declare function N_0xe4723db6e736ccff(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;

declare function N_0xe496a53ba5f50a56(p0: number): number;

declare function N_0xe4dcec7fd5b739a5(ped: number): void;

declare function N_0xe4e2fd323574965c(p0: number, p1: number): void;

declare function N_0xe4e6dd5566d28c82(): void;

declare function N_0xe52b8e7f85d39a08(ped: number, unk: number): void;

declare function N_0xe532ec1a63231b4f(p0: number, p1: number): void;

declare function N_0xe547e9114277098f(): number;

declare function N_0xe574a662acaefbb1(): void;

declare function N_0xe5810ac70602f2f5(vehicle: number, p1: number): void;

declare function N_0xe59343e9e96529e7(): number;

declare function N_0xe599a503b3837e1b(): number;

declare function N_0xe620fd3512a04f18(p0: number): void;

declare function N_0xe63d7c6eececb66b(p0: boolean): void;

declare function N_0xe64a3ca08dfa37a9(p0: number): number;

declare function N_0xe66c690248f11150(p0: number, p1: number): void;

declare function N_0xe6717e652b8c8d8a(p0: number, p1: number): void;

declare function N_0xe67c6dfd386ea5e7(p0: boolean): void;

declare function N_0xe6869becdd8f2403(p0: number, p1: boolean): void;

declare function N_0xe6a9f00d4240b519(p0: number, p1: number): void;

declare function N_0xe6ac6c45fbe83004(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;

declare function N_0xe6b0e8cfc3633bf0(vehicle: number): number;

declare function N_0xe6c0c80b8c867537(p0: boolean): void;

declare function N_0xe6ca85e7259ce16b(p0: number): void;

declare function N_0xe6de0561d9232a64(): void;

declare function N_0xe6f13851780394da(vehicle: number, p1: number): void;

declare function N_0xe70ba7b90f8390dc(p0: number, p1: number, p2: boolean, p3: number): void;

declare function N_0xe73364db90778ffa(): number;

declare function N_0xe791df1f73ed2c8b(p0: number): number;

declare function N_0xe7df4e0545dfb56e(p0: number, p1: number, p2: number): void;

declare function N_0xe7e4c198b0185900(p0: number, p1: number, p2: boolean): void;

declare function N_0xe82728f0de75d13a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number, p19: number, p20: number, p21: number, p22: number, p23: number, p24: number): void;

declare function N_0xe827b9382cfb41ba(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe83a3e3557a56640(p0: string): void;

declare function N_0xe842a9398079bd82(vehicle: number, p1: number): void;

declare function N_0xe84eb93729c5f36a(p0: number): number;

declare function N_0xe851e480b814d4ba(vehicle: number, p1: boolean): void;

declare function N_0xe861d0b05c7662b8(p0: number, p1: boolean, p2: number): void;

declare function N_0xe8853fbce7d8d0d6(): number;

declare function N_0xe8a169e666cbc541(): number;

declare function N_0xe8b0b270b6e7c76e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe8b9c0ec9e183f35(): number;

declare function N_0xe906ec930f5fe7c8(p0: number, p1: number): void;

declare function N_0xe95b0c7d5ba3b96b(p0: number): number;

declare function N_0xe95c8a1875a02ca4(p0: number, p1: number, p2: number): void;

declare function N_0xe9b99b6853181409(): void;

declare function N_0xe9ea16d6e54cdca4(p0: number, p1: number): number;

declare function N_0xea14eef5b7cd2c30(): number;

declare function N_0xea2f2061875eed90(): number;

declare function N_0xea9960d07dadcf10(p0: number): number;

declare function N_0xeaf0fa793d05c592(): number;

declare function N_0xeb078ca2b5e82add(p0: number, p1: number): void;

declare function N_0xeb2104e905c6f2e9(): number;

declare function N_0xeb2bf817463dfa28(p0: number, p1: number): number;

declare function N_0xeb2d525b57f42b40(): void;

declare function N_0xeb3dac2c86001e5e(): number;

declare function N_0xeb4a0c2d56441717(p0: number): number;

declare function N_0xeb6f1a9b5510a5d2(p0: number, p1: boolean): void;

declare function N_0xeb709a36958abe0d(gamerTagId: number): number;

declare function N_0xebb376779a760aa8(): number;

declare function N_0xebcab9e5048434f4(): number;

declare function N_0xebd0edba5be957cf(ped: number): number;

declare function N_0xebd3205a207939ed(p0: number): void;

declare function N_0xebefc2e77084f599(p0: number, p1: string, p2: boolean): void;

declare function N_0xebf8284d8cadeb53(): void;

declare function N_0xebfa8d50addc54c4(p0: number): number;

declare function N_0xec4b4b3b9908052a(ped: number, unk: number): void;

declare function N_0xec52c631a1831c03(p0: number): void;

declare function N_0xec6935ebe0847b90(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xec69adf931aae0c3(p0: number): number;

declare function N_0xec72c258667be5ea(p0: number): number;

declare function N_0xec9264727eec0f28(): void;

declare function N_0xeca658ce2a4e5a72(p0: number, p1: number): void;

declare function N_0xecb41ac6ab754401(): number;

declare function N_0xecdc202b25e5cf48(p0: number, p1: number, p2: number): void;

declare function N_0xecf128344e9ff9f1(p0: boolean): void;

declare function N_0xed3c76adfa6d07c4(p0: number): void;

declare function N_0xed5ede9e676643c9(p0: number, p1: number): void;

declare function N_0xed5fd7af10f5e262(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xed6d8e27a43b8cde(p0: number): number;

declare function N_0xed8286f71a819baa(cargobob: number, p1: number): void;

declare function N_0xedbc8405b3895cc9(p0: number, p1: number): void;

declare function N_0xedbf6c9b0d2c65c8(p0: number): void;

declare function N_0xedead9a91ec768b3(p0: number, p1: number, p2: number): void;

declare function N_0xedf7f927136c224b(): number;

declare function N_0xee066c7006c49c0a(p0: number, p1: number, p2: number): void;

declare function N_0xee4c0e6dbc6f2c6f(): void;

declare function N_0xee76ff7e6a0166b0(headDisplayId: number, p1: boolean): void;

declare function N_0xee778f8c7e1142e2(p0: number): number;

declare function N_0xeebfc7a7efdc35b4(vehicle: number): number;

declare function N_0xeeed8fafec331a70(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xef0912ddf7c4cb4b(): number;

declare function N_0xef398beee4ef45f9(p0: boolean): void;

declare function N_0xef39ee20c537e98c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xef49cf0270307cbe(): void;

declare function N_0xef7d17bc6c85264c(): number;

declare function N_0xefabc7722293da7c(): void;

declare function N_0xefb55e7c25d3b3be(): void;

declare function N_0xefc13b1ce30d755d(p0: number, p1: number): void;

declare function N_0xefd79fa81dfba9cb(p0: number, p1: number): void;

declare function N_0xefd97ff47b745b8d(p0: number): void;

declare function N_0xeff296097ff1e509(p0: number, p1: number): void;

declare function N_0xf033419d1b81fae8(p0: number): number;

declare function N_0xf03755696450470c(): void;

declare function N_0xf051d9bfb6ba39c0(p0: number): void;

declare function N_0xf06a16ca55d138d8(p0: number, p1: number): void;

declare function N_0xf06a6f41cb445443(p0: number): void;

declare function N_0xf06ebb91a81e09e3(p0: boolean): void;

declare function N_0xf083835b70ba9bfe(): void;

declare function N_0xf086ad9354fac3a3(p0: number): void;

declare function N_0xf0a60040be558f2d(p0: number, p1: number, p2: number): number;

declare function N_0xf0daef2f545bee25(p0: number): number;

declare function N_0xf0e4ba16d1db546c(vehicle: number, p1: number, p2: number): void;

declare function N_0xf0eed5a6bc7b237a(p0: number, entity: number, p2: number): number;

declare function N_0xf0f2103efaf8cba7(p0: number, p1: number): number[];

declare function N_0xf10b44fd479d69f3(player: number, p1: number): number;

declare function N_0xf11f01d98113536a(p0: number): number;

declare function N_0xf12e33034d887f66(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf12e6cd06c73d69e(): number;

declare function N_0xf13fe2a80c05c561(): number;

declare function N_0xf154b8d1775b2dec(p0: boolean): void;

declare function N_0xf1a1803d3476f215(value: number): void;

declare function N_0xf1a6c18b35bcade6(p0: boolean): void;

declare function N_0xf1ae5dcdbfca2721(): [number, number, number, number];

declare function N_0xf1b84178f8674195(p0: number): void;

declare function N_0xf1c03a5352243a30(p0: number): void;

declare function N_0xf1cea8a4198d8e9a(p0: string): number;

declare function N_0xf1e22dc13f5eebad(p0: number): void;

declare function N_0xf1eea2dda9ffa69d(p0: number): void;

declare function N_0xf1f8157b8c3f171c(p0: number, p1: string, p2: string): void;

declare function N_0xf22ca0fd74b80e7a(p0: number): number;

declare function N_0xf2385935bffd4d92(p0: number): number;

declare function N_0xf239400e16c23e08(p0: number, p1: number): void;

declare function N_0xf25e02cb9c5818f8(): void;

declare function N_0xf284ac67940c6812(): number;

declare function N_0xf287f506767cc8a9(): number;

declare function N_0xf2bebcdfafdaa19e(toggle: boolean): void;

declare function N_0xf2ca003f167e21d2(): number;

declare function N_0xf2e07819ef1a5289(): number;

declare function N_0xf2e1a7133dd356a6(hash: string | number, toggle: boolean): void;

declare function N_0xf2eac213d5ea0623(): number;

declare function N_0xf2f6a2fa49278625(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): [number, number, number, number];

declare function N_0xf3162836c28f9da5(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf3365489e0dd50f9(p0: number, p1: boolean): void;

declare function N_0xf3b0e0aed097a3f5(p0: number, p1: number): number;

declare function N_0xf3fbe2d50a6a8c28(character: number, p1: boolean): number;

declare function N_0xf41b5d290c99a3d6(p0: number): number;

declare function N_0xf434a10ba01c37d0(p0: boolean): void;

declare function N_0xf445de8da80a1792(): number;

declare function N_0xf44a5456ac3f4f97(p0: number): void;

declare function N_0xf45352426ff3a4f0(bufferSize: number): [number, number];

declare function N_0xf46a1e03e8755980(p0: boolean): void;

declare function N_0xf47e567b3630dd12(p0: number, p1: number): void;

declare function N_0xf488c566413b4232(p0: number, p1: number): void;

declare function N_0xf49abc20d8552257(p0: number): void;

declare function N_0xf4a0dadb70f57fa6(): void;

declare function N_0xf4c8cf9e353afeca(p0: string, p1: number): void;

declare function N_0xf4d8e7ac2a27758c(p0: number): number;

declare function N_0xf4f2c0d4ee209e20(): void;

declare function N_0xf4ff020a08bc8863(p0: number, p1: number): void;

declare function N_0xf51d36185993515d(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;

declare function N_0xf534d94dfa2ead26(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xf53e48461b71eecb(p0: number): number;

declare function N_0xf55e4046f6f831dc(p0: number, p1: number): void;

declare function N_0xf56dfb7b61be7276(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): number;

declare function N_0xf5846edb26a98a24(ped: number, p1: boolean): void;

declare function N_0xf5bb8dac426a52c0(): [number, number, number, number];

declare function N_0xf5bed327cea362b1(p0: number): number;

declare function N_0xf60165e1d2c5370b(ped: number): [number, number, number];

declare function N_0xf6792800ac95350d(p0: number): void;

declare function N_0xf6baaaf762e1bf40(p0: string, p1: number): number;

declare function N_0xf6f4383b7c92f11a(p0: number): void;

declare function N_0xf70efa14fe091429(p0: number): number;

declare function N_0xf751b16fb32abc1d(p0: number): void;

declare function N_0xf78b803082d4386f(p0: number): void;

declare function N_0xf78f94d60248c737(p0: number, p1: boolean): number;

declare function N_0xf79f9def0aade61a(ped: number): void;

declare function N_0xf7b38b8305f1fe8b(p0: number, p1: string, p2: boolean): void;

declare function N_0xf7b79a50b905a30d(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf7f203e31f96f6a1(vehicle: number, flag: boolean): number;

declare function N_0xf814fec6a19fd6e0(): void;

declare function N_0xf8155a7f03ddfc8e(p0: number): void;

declare function N_0xf854439efbb3b583(): void;

declare function N_0xf87d9f2301f7d206(p0: number): void;

declare function N_0xf8bdbf3d573049a1(p0: number): void;

declare function N_0xf8c54a461c3e11dc(): [number, number, number, number];

declare function N_0xf8cc1ebe0b62e29f(p0: number): number;

declare function N_0xf8ebccc96adb9fb7(p0: number, p1: number, p2: boolean): void;

declare function N_0xf92099527db8e2a7(p0: number, p1: number): void;

declare function N_0xf98dde0a8ed09323(p0: boolean): void;

declare function N_0xf98e4b3e56afc7b1(p0: number, p1: number): void;

declare function N_0xf9acf4a08098ea25(ped: number, p1: boolean): void;

declare function N_0xf9b83b77929d8863(): number;

declare function N_0xf9c1681347c8bd15(object: number): void;

declare function N_0xf9e1ccae8ba4c281(p0: number, p1: number): [number, number, number];

declare function N_0xf9f2922717b819ec(): number;

declare function N_0xfa07759e6fddd7cf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfa1e0e893d915215(p0: boolean): void;

declare function N_0xfa2888e3833c8e96(): void;

declare function N_0xfaa457ef263e8763(name: string): number;

declare function N_0xfac75988a7d078d3(p0: number): void;

declare function N_0xfae628f1e9adb239(p0: number, p1: number, p2: number): void;

declare function N_0xfaf2a78061fd9ef4(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfafc23aee23868db(): number;

declare function N_0xfb00ca71da386228(): void;

declare function N_0xfb199266061f820a(): number;

declare function N_0xfb1f9381e80fa13f(p0: number, p1: number): number;

declare function N_0xfb680d403909dc70(p0: number, p1: number): void;

declare function N_0xfb6c4072e9a32e92(p0: number, p1: number): number;

declare function N_0xfb80ab299d2ee1bd(p0: number): void;

declare function N_0xfb8f2a6f3df08cbe(): void;

declare function N_0xfbc5e768c7a77a6a(): number;

declare function N_0xfbe20329593dec9d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfc18db55ae19e046(p0: boolean): void;

declare function N_0xfc309e94546fcdb5(p0: boolean): void;

declare function N_0xfc40cbf7b90ca77c(p0: number): void;

declare function N_0xfc4ee00a7b3bfb76(p0: number, p1: number, p2: number): void;

declare function N_0xfc859e2374407556(): number;

declare function N_0xfcc228e07217fcac(p0: number): void;

declare function N_0xfccae5b92a830878(p0: number): number;

declare function N_0xfcf37a457cb96dc0(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xfcfacd0db9d7a57d(p0: number, p1: number): void;

declare function N_0xfd1695c5d3b05439(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xfd3151cd37ea2245(p0: number): void;

declare function N_0xfd75dabc0957bf33(p0: boolean): void;

declare function N_0xfd8b834a8ba05048(): number;

declare function N_0xfdb423997fa30340(): void;

declare function N_0xfdbf4cdbc07e1706(x: number, y: number, z: number, radius: number, unk: number): number;

declare function N_0xfdd85225b2dea55e(): void;

declare function N_0xfdec055ab549e328(): void;

declare function N_0xfe07ff6495d52e2a(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xfe205f38aaa58e5b(p0: number, p1: number): void;

declare function N_0xfe26117a5841b2ff(vehicle: number, p1: number): number;

declare function N_0xfe4c1d0d3b9cc17e(p0: number, p1: number): number;

declare function N_0xfebfbfdfb66039de(p0: number): void;

declare function N_0xfec9a3b1820f3331(p0: number): number;

declare function N_0xfee4a5459472a9f8(): void;

declare function N_0xff266d1d0eb1195d(): void;

declare function N_0xff300c7649724a0b(player: number, p1: boolean): void;

declare function N_0xff4803bc019852d9(p0: number, p1: number): void;

declare function N_0xff56381874f82086(p0: number, p1: number, outComponent: number): number;

declare function N_0xff5992e1c9e65d05(p0: number): void;

declare function N_0xff6be494c7987f34(flag: number, entity: number, flag2: number): [number, number[], number[]];

declare function N_0xff8f3a92b75ed67a(): number;

declare function N_0xffbe02cd385356bd(): number;

declare function N_0xffe1e5b792d92b34(): number;

declare function N_0xffee8fa29ab9a18e(player: number): void;

declare function NetToEnt(netHandle: number): number;

declare function NetToObj(netHandle: number): number;

declare function NetToPed(netHandle: number): number;

declare function NetToVeh(netHandle: number): number;

declare function NetworkAcceptPresenceInvite(p0: number): number;

declare function NetworkAccessTunableBool(tunableContext: string, tunableName: string): number;

declare function NetworkAccessTunableBoolHash(tunableContext: string | number, tunableName: string | number): number;

declare function NetworkAccessTunableBoolHashFailVal(tunableContext: string | number, tunableName: string | number, defaultValue: boolean): number;

declare function NetworkAccessTunableFloat(tunableContext: string, tunableName: string, value: number): number;

declare function NetworkAccessTunableFloatHash(tunableContext: string | number, tunableName: string | number, value: number): number;

declare function NetworkAccessTunableInt(tunableContext: string, tunableName: string, value: number): number;

declare function NetworkAccessTunableIntHash(tunableContext: string | number, tunableName: string | number, value: number): number;

declare function NetworkActionFollowInvite(): number;

declare function NetworkAddEntityAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function NetworkAddEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function NetworkAddEntityToSynchronisedScene(entity: number, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void;

declare function NetworkAddFollowers(p1: number): number;

declare function NetworkAddFriend(p1: string): [number, number];

declare function NetworkAddPedToSynchronisedScene(ped: number, netScene: number, animDict: string, animnName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: number): void;

declare function NetworkAmIBlockedByGamer(p0: number): number;

declare function NetworkAmIBlockedByPlayer(player: number): number;

declare function NetworkAmIMutedByGamer(p0: number): number;

declare function NetworkAmIMutedByPlayer(player: number): number;

declare function NetworkApplyTransitionParameter(p0: number, p1: number): void;

declare function NetworkAreHandlesTheSame(): [number, number, number];

declare function NetworkAreRosAvailable(): number;

declare function NetworkAreTransitionDetailsValid(p0: number): number;

declare function NetworkAttachSynchronisedSceneToEntity(netScene: number, entity: number, bone: number): void;

declare function NetworkBail(): void;

declare function NetworkBailTransition(): void;

declare function NetworkBlockInvites(toggle: boolean): void;

declare function NetworkBlockKickedPlayers(p0: boolean): void;

declare function NetworkBuyAirstrike(cost: number, p1: boolean, p2: boolean): void;

declare function NetworkBuyBounty(amount: number, victim: number, p2: boolean, p3: boolean): void;

declare function NetworkBuyFairgroundRide(amountSpent: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkBuyHealthcare(cost: number, p1: boolean, p2: boolean): void;

declare function NetworkBuyHeliStrike(cost: number, p1: boolean, p2: boolean): void;

declare function NetworkBuyItem(player: number, item: string | number, p2: number, p3: number, p4: boolean, item_name: string, p6: number, p7: number, p8: number, p9: boolean): void;

declare function NetworkBuyProperty(propertyCost: number, propertyName: string | number, p2: boolean, p3: boolean): void;

declare function NetworkCanAccessMultiplayer(loadingState: number): number;

declare function NetworkCanBail(): number;

declare function NetworkCanBet(p0: number): number;

declare function NetworkCanCommunicateWithGamer(player: number): number;

declare function NetworkCanEnterMultiplayer(): number;

declare function NetworkCanReceivePlayerCash(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkCanSessionEnd(): number;

declare function NetworkCanSetWaypoint(): number;

declare function NetworkCanSpendMoney(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function NetworkChangeTransitionSlots(p0: number, p1: number): void;

declare function NetworkClanAnimation(animDict: string, animName: string): number;

declare function NetworkClanDownloadMembership(networkHandle: number): number;

declare function NetworkClanDownloadMembershipPending(p0: number): number;

declare function NetworkClanGetMembership(p2: number): [number, number, number];

declare function NetworkClanGetMembershipCount(p0: number): number;

declare function NetworkClanGetMembershipDesc(p1: number): [number, number];

declare function NetworkClanGetMembershipValid(p1: number): [number, number];

declare function NetworkClanJoin(clanDesc: number): number;

declare function NetworkClanPlayerGetDesc(bufferSize: number): [number, number, number];

declare function NetworkClanPlayerIsActive(networkHandle: number): number;

declare function NetworkClanRemoteMembershipsAreInCache(p0: number): number;

declare function NetworkClearCharacterWallet(p0: number): void;

declare function NetworkClearFollowInvite(): number;

declare function NetworkClearFollowers(): void;

declare function NetworkClearFoundGamers(): void;

declare function NetworkClearPropertyId(): void;

declare function NetworkClearTransitionCreatorHandle(): void;

declare function NetworkClearVoiceChannel(): void;

declare function NetworkCloseTransitionMatchmaking(): void;

declare function NetworkCreateSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p6: number, p7: number, p8: number, p9: number): number;

declare function NetworkDeleteCharacter(characterIndex: number, p1: boolean, p2: boolean): void;

declare function NetworkDisableInvincibleFlashing(player: number, p1: boolean): void;

declare function NetworkDoTransitionQuickmatch(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkDoTransitionQuickmatchAsync(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkDoTransitionQuickmatchWithGroup(p0: number, p1: number, p2: number, p3: number, p5: number): [number, number];

declare function NetworkDoTransitionToFreemode(p1: number, p2: boolean, players: number, p4: boolean): [number, number];

declare function NetworkDoTransitionToGame(p0: boolean, maxPlayers: number): number;

declare function NetworkDoTransitionToNewFreemode(players: number, p3: boolean, p4: boolean, p5: boolean): [number, number, number];

declare function NetworkDoTransitionToNewGame(p0: boolean, maxPlayers: number, p2: boolean): number;

declare function NetworkDoesEntityExistWithNetworkId(entity: number): number;

declare function NetworkDoesNetworkIdExist(netID: number): number;

declare function NetworkDoesTunableExist(tunableContext: string, tunableName: string): number;

declare function NetworkDoesTunableExistHash(tunbaleContext: string | number, tunableName: string | number): number;

declare function NetworkEarnFromAiTargetKill(p0: number, p1: number): void;

declare function NetworkEarnFromAmbientJob(p0: number, p1: string, p2: number): void;

declare function NetworkEarnFromArmourTruck(amount: number): void;

declare function NetworkEarnFromBetting(amount: number, p1: string): void;

declare function NetworkEarnFromBounty(amount: number, p3: number): [number, number];

declare function NetworkEarnFromChallengeWin(p0: number, p2: boolean): number;

declare function NetworkEarnFromCrateDrop(amount: number): void;

declare function NetworkEarnFromDailyObjective(p0: number, p1: string, p2: number): void;

declare function NetworkEarnFromGangPickup(amount: number): void;

declare function NetworkEarnFromHoldups(amount: number): void;

declare function NetworkEarnFromImportExport(p0: number, p1: number): void;

declare function NetworkEarnFromJob(amount: number, p1: string): void;

declare function NetworkEarnFromJobBonus(p0: number): [number, number];

declare function NetworkEarnFromMissionH(amount: number, heistHash: string): void;

declare function NetworkEarnFromNotBadsport(amount: number): void;

declare function NetworkEarnFromPersonalVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

declare function NetworkEarnFromPickup(amount: number): number;

declare function NetworkEarnFromProperty(amount: number, propertyName: string | number): void;

declare function NetworkEarnFromRockstar(amount: number): void;

declare function NetworkEarnFromVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function NetworkEnableMotionDrugged(): number;

declare function NetworkEndTutorialSession(): void;

declare function NetworkExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): number;

declare function NetworkFadeInEntity(entity: number, state: boolean): void;

declare function NetworkFadeOutEntity(entity: number, normal: boolean, slow: boolean): void;

declare function NetworkFindMatchedGamers(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkForceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;

declare function NetworkGamerHasHeadset(p0: number): number;

declare function NetworkGamertagFromHandlePending(): number;

declare function NetworkGamertagFromHandleStart(networkHandle: number): number;

declare function NetworkGamertagFromHandleSucceeded(): number;

declare function NetworkGetActivityPlayerNum(p0: boolean): number;

declare function NetworkGetBackgroundLoadingRecipients(p0: number, p1: number): [number, number, number];

declare function NetworkGetBankBalanceString(): string;

declare function NetworkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: number): number;

declare function NetworkGetDesroyerOfEntity(p0: number, p1: number, p2: number): number;

declare function NetworkGetDestroyerOfNetworkId(netId: number, weaponHash: number): number;

declare function NetworkGetEntityFromNetworkId(netId: number): number;

declare function NetworkGetEntityIsLocal(entity: number): number;

declare function NetworkGetEntityIsNetworked(entity: number): number;

declare function NetworkGetEntityKillerOfPlayer(player: number, weaponHash: number): number;

declare function NetworkGetFoundGamer(p1: number): [number, number];

declare function NetworkGetFriendCount(): number;

declare function NetworkGetFriendName(player: number): string;

declare function NetworkGetFriendNameFromIndex(friendIndex: number): string;

declare function NetworkGetGamertagFromHandle(networkHandle: number): string;

declare function NetworkGetHostOfScript(scriptName: string, p1: number, p2: number): number;

declare function NetworkGetHostOfThisScript(): number;

declare function NetworkGetLocalHandle(bufferSize: number): number;

declare function NetworkGetMaxFriends(): number;

declare function NetworkGetNetworkIdFromEntity(entity: number): number;

declare function NetworkGetNumConnectedPlayers(): number;

declare function NetworkGetNumFoundGamers(): number;

declare function NetworkGetNumParticipants(): number;

declare function NetworkGetNumParticipantsHost(): number;

declare function NetworkGetNumPresenceInvites(): number;

declare function NetworkGetNumScriptParticipants(p1: number, p2: number): [number, number];

declare function NetworkGetParticipantIndex(index: number): number;

declare function NetworkGetPlayerFromGamerHandle(networkHandle: number): number;

declare function NetworkGetPlayerIndex(player: number): number;

declare function NetworkGetPlayerIndexFromPed(ped: number): number;

declare function NetworkGetPlayerLoudness(p0: number): number;

declare function NetworkGetPresenceInviteHandle(p0: number, p1: number): number;

declare function NetworkGetPresenceInviteId(p0: number): number;

declare function NetworkGetPresenceInviteInviter(p0: number): number;

declare function NetworkGetPresenceInviteSessionId(p0: number): number;

declare function NetworkGetPrimaryClanDataCancel(): void;

declare function NetworkGetPrimaryClanDataClear(): number;

declare function NetworkGetPrimaryClanDataNew(): [number, number, number];

declare function NetworkGetPrimaryClanDataPending(): number;

declare function NetworkGetPrimaryClanDataStart(p1: number): [number, number];

declare function NetworkGetPrimaryClanDataSuccess(): number;

declare function NetworkGetRandomInt(): number;

declare function NetworkGetRandomIntInRange(rangeStart: number, rangeEnd: number): number;

declare function NetworkGetRespawnResult(randomInt: number): [number[], number];

declare function NetworkGetScriptStatus(): number;

declare function NetworkGetServerTime(): [number, number, number];

declare function NetworkGetTalkerProximity(): number;

declare function NetworkGetThisScriptIsNetworkScript(): number;

declare function NetworkGetTimeoutTime(): number;

declare function NetworkGetTransitionHost(networkHandle: number): number;

declare function NetworkGetTransitionMembers(p1: number): [number, number];

declare function NetworkGetVcBalance(): number;

declare function NetworkGetVcBankBalance(): number;

declare function NetworkGetVcWalletBalance(character: number): number;

declare function NetworkGivePlayerJobshareCash(amount: number, networkHandle: number): void;

declare function NetworkHandleFromFriend(friendIndex: number, bufferSize: number): number;

declare function NetworkHandleFromMemberId(memberId: string, bufferSize: number): number;

declare function NetworkHandleFromPlayer(player: number, bufferSize: number): number;

declare function NetworkHandleFromUserId(userId: string, bufferSize: number): number;

declare function NetworkHasControlOfDoor(doorID: number): number;

declare function NetworkHasControlOfEntity(entity: number): number;

declare function NetworkHasControlOfNetworkId(netId: number): number;

declare function NetworkHasControlOfPavementStats(hash: string | number): number;

declare function NetworkHasControlOfPickup(pickup: number): number;

declare function NetworkHasFollowInvite(): number;

declare function NetworkHasHeadset(): number;

declare function NetworkHasInvitedGamer(p0: number): number;

declare function NetworkHasInvitedGamerToTransition(p0: number): number;

declare function NetworkHasPendingInvite(): number;

declare function NetworkHasPlayerStartedTransition(player: number): number;

declare function NetworkHashFromGamerHandle(networkHandle: number): number;

declare function NetworkHashFromPlayerHandle(player: number): number;

declare function NetworkHaveOnlinePrivileges(): number;

declare function NetworkHostTransition(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function NetworkInitializeCash(p0: number, p1: number): void;

declare function NetworkInviteGamers(p1: number): [number, number, number, number];

declare function NetworkInviteGamersToTransition(p1: number): [number, number];

declare function NetworkIsActivitySession(): number;

declare function NetworkIsActivitySpectator(): number;

declare function NetworkIsActivitySpectatorFromHandle(networkHandle: number): number;

declare function NetworkIsAddingFriend(): number;

declare function NetworkIsCableConnected(): number;

declare function NetworkIsChattingInPlatformParty(networkHandle: number): number;

declare function NetworkIsClanMembershipFinishedDownloading(): number;

declare function NetworkIsCloudAvailable(): number;

declare function NetworkIsFindingGamers(): number;

declare function NetworkIsFriend(networkHandle: number): number;

declare function NetworkIsFriendInMultiplayer(networkHandle: number): number;

declare function NetworkIsFriendInSameTitle(networkHandle: number): number;

declare function NetworkIsFriendIndexOnline(friendIndex: number): number;

declare function NetworkIsFriendOnline(name: string): number;

declare function NetworkIsGameInProgress(): number;

declare function NetworkIsGamerBlockedByMe(p0: number): number;

declare function NetworkIsGamerInMySession(networkHandle: number): number;

declare function NetworkIsGamerMutedByMe(p0: number): number;

declare function NetworkIsGamerTalking(p0: number): number;

declare function NetworkIsHandleValid(bufferSize: number): [number, number];

declare function NetworkIsHost(): number;

declare function NetworkIsHostOfThisScript(): number;

declare function NetworkIsInMpCutscene(): number;

declare function NetworkIsInParty(): number;

declare function NetworkIsInSession(): number;

declare function NetworkIsInSpectatorMode(): number;

declare function NetworkIsInTransition(): number;

declare function NetworkIsInTutorialSession(): number;

declare function NetworkIsInactiveProfile(p0: number): number;

declare function NetworkIsLocalPlayerInvincible(): number;

declare function NetworkIsMultiplayerDisabled(): number;

declare function NetworkIsParticipantActive(p0: number): number;

declare function NetworkIsPartyMember(networkHandle: number): number;

declare function NetworkIsPendingFriend(p0: number): number;

declare function NetworkIsPlayerAParticipant(p0: number): number;

declare function NetworkIsPlayerActive(player: number): number;

declare function NetworkIsPlayerAnimationDrawingSynchronized(): void;

declare function NetworkIsPlayerBlockedByMe(player: number): number;

declare function NetworkIsPlayerConnected(player: number): number;

declare function NetworkIsPlayerEqualToIndex(player: number, index: number): number;

declare function NetworkIsPlayerInMpCutscene(player: number): number;

declare function NetworkIsPlayerMutedByMe(player: number): number;

declare function NetworkIsPlayerTalking(player: number): number;

declare function NetworkIsScriptActive(scriptName: string, p1: number, p2: boolean, p3: number): number;

declare function NetworkIsSessionActive(): number;

declare function NetworkIsSessionBusy(): number;

declare function NetworkIsSessionStarted(): number;

declare function NetworkIsSignedIn(): number;

declare function NetworkIsSignedOnline(): number;

declare function NetworkIsTextChatActive(): number;

declare function NetworkIsTransitionBusy(): number;

declare function NetworkIsTransitionHost(): number;

declare function NetworkIsTransitionHostFromHandle(networkHandle: number): number;

declare function NetworkIsTransitionMatchmaking(): number;

declare function NetworkIsTransitionStarted(): number;

declare function NetworkIsTransitionToGame(): number;

declare function NetworkJoinGroupActivity(): number;

declare function NetworkJoinTransition(player: number): number;

declare function NetworkLaunchTransition(): number;

declare function NetworkLeaveTransition(): number;

declare function NetworkMarkTransitionGamerAsFullyJoined(p0: number): number;

declare function NetworkMemberIdFromGamerHandle(networkHandle: number): string;

declare function NetworkMoneyCanBet(p0: number, p1: boolean, p2: boolean): number;

declare function NetworkOpenTransitionMatchmaking(): void;

declare function NetworkOverrideChatRestrictions(player: number, toggle: boolean): void;

declare function NetworkOverrideClockTime(Hours: number, Minutes: number, Seconds: number): void;

declare function NetworkOverrideReceiveRestrictions(player: number, toggle: boolean): void;

declare function NetworkOverrideTransitionChat(p0: boolean): void;

declare function NetworkPayEmployeeWage(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkPayMatchEntryFee(value: number, p2: boolean, p3: boolean): number;

declare function NetworkPayUtilityBill(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkPlayerGetName(player: number): string;

declare function NetworkPlayerGetUserid(player: number, userID: number): string;

declare function NetworkPlayerHasHeadset(player: number): number;

declare function NetworkPlayerIdToInt(): number;

declare function NetworkPlayerIsBadsport(): number;

declare function NetworkPlayerIsCheater(): number;

declare function NetworkPlayerIsInClan(): number;

declare function NetworkPlayerIsRockstarDev(player: number): number;

declare function NetworkReceivePlayerJobshareCash(value: number, networkHandle: number): void;

declare function NetworkRefundCash(index: number, context: string, reason: string, unk: boolean): void;

declare function NetworkRegisterEntityAsNetworked(entity: number): void;

declare function NetworkRegisterHostBroadcastVariables(numVars: number): number;

declare function NetworkRegisterPlayerBroadcastVariables(numVars: number): number;

declare function NetworkRemoveAllTransitionInvite(): void;

declare function NetworkRemoveEntityArea(p0: number): number;

declare function NetworkRemovePresenceInvite(p0: number): number;

declare function NetworkRemoveTransitionInvite(p0: number): void;

declare function NetworkRequestCloudBackgroundScripts(): number;

declare function NetworkRequestCloudTunables(): void;

declare function NetworkRequestControlOfDoor(doorID: number): number;

declare function NetworkRequestControlOfEntity(entity: number): number;

declare function NetworkRequestControlOfNetworkId(netId: number): number;

declare function NetworkResetBodyTracker(): void;

declare function NetworkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean): void;

declare function NetworkSendPresenceInvite(p2: number, p3: number): [number, number, number];

declare function NetworkSendPresenceTransitionInvite(p2: number, p3: number): [number, number, number];

declare function NetworkSendTextMessage(message: string, networkHandle: number): number;

declare function NetworkSendTransitionGamerInstruction(p1: string, p2: number, p3: number, p4: boolean): [number, number];

declare function NetworkSessionActivityQuickmatch(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkSessionBlockJoinRequests(p0: boolean): void;

declare function NetworkSessionCancelInvite(): void;

declare function NetworkSessionChangeSlots(p0: number, p1: boolean): void;

declare function NetworkSessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): number;

declare function NetworkSessionEnd(p0: boolean, p1: boolean): number;

declare function NetworkSessionEnter(p0: number, p1: number, p2: number, maxPlayers: number, p4: number, p5: number): number;

declare function NetworkSessionForceCancelInvite(): void;

declare function NetworkSessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: boolean): number;

declare function NetworkSessionGetInviter(networkHandle: number): void;

declare function NetworkSessionGetUnk(p0: number): number;

declare function NetworkSessionHost(p0: number, maxPlayers: number, p2: boolean): number;

declare function NetworkSessionHostClosed(p0: number, maxPlayers: number): number;

declare function NetworkSessionHostFriendsOnly(p0: number, maxPlayers: number): number;

declare function NetworkSessionHostSinglePlayer(p0: number): void;

declare function NetworkSessionHosted(p0: boolean): void;

declare function NetworkSessionIsClosedCrew(): number;

declare function NetworkSessionIsClosedFriends(): number;

declare function NetworkSessionIsPlayerVotedToKick(player: number): number;

declare function NetworkSessionIsPrivate(): number;

declare function NetworkSessionIsSolo(): number;

declare function NetworkSessionIsVisible(): number;

declare function NetworkSessionKickPlayer(player: number): void;

declare function NetworkSessionLeaveSinglePlayer(): void;

declare function NetworkSessionMarkVisible(p0: boolean): void;

declare function NetworkSessionSetMaxPlayers(playerType: number, playerCount: number): void;

declare function NetworkSessionVoiceHost(): void;

declare function NetworkSessionVoiceLeave(): void;

declare function NetworkSessionWasInvited(): number;

declare function NetworkSetActivitySpectator(toggle: boolean): void;

declare function NetworkSetActivitySpectatorMax(maxSpectators: number): void;

declare function NetworkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: number): number;

declare function NetworkSetEntityCanBlend(entity: number, toggle: boolean): void;

declare function NetworkSetEntityVisibleToNetwork(entity: number, toggle: boolean): void;

declare function NetworkSetFriendlyFireOption(toggle: boolean): void;

declare function NetworkSetGamerInvitedToTransition(networkHandle: number): void;

declare function NetworkSetInMpCutscene(p0: boolean, p1: boolean): void;

declare function NetworkSetInSpectatorMode(toggle: boolean, playerPed: number): void;

declare function NetworkSetKeepFocuspoint(p0: boolean, p1: number): void;

declare function NetworkSetLocalPlayerInvincibleTime(time: number): void;

declare function NetworkSetMissionFinished(): void;

declare function NetworkSetNetworkIdDynamic(netID: number, toggle: boolean): void;

declare function NetworkSetOverrideSpectatorMode(toggle: boolean): void;

declare function NetworkSetPropertyId(p0: number): void;

declare function NetworkSetRichPresence(p0: number, p1: number, p2: number, p3: number): void;

declare function NetworkSetScriptIsSafeForNetworkGame(): void;

declare function NetworkSetTalkerProximity(p0: number): void;

declare function NetworkSetTeamOnlyChat(toggle: boolean): void;

declare function NetworkSetThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;

declare function NetworkSetThisScriptMarked(p0: number, p1: boolean, p2: number): number;

declare function NetworkSetTransitionActivityId(p0: number): void;

declare function NetworkSetTransitionCreatorHandle(p0: number): void;

declare function NetworkSetVoiceActive(toggle: boolean): void;

declare function NetworkSetVoiceChannel(p0: number): void;

declare function NetworkShopBasketAddItem(p1: number): [number, number];

declare function NetworkShopBasketApplyServerData(p0: number, p1: number): number;

declare function NetworkShopBasketEnd(): number;

declare function NetworkShopBasketIsFull(): number;

declare function NetworkShopBasketStart(p1: number, p2: number, p3: number): [number, number];

declare function NetworkShopBeginService(p1: number, p2: number, p3: number, p4: number, p5: number): [number, number];

declare function NetworkShopCashTransferSetTelemetryNonceSeed(): number;

declare function NetworkShopCheckoutStart(p0: number): number;

declare function NetworkShopDeleteSetTelemetryNonceSeed(): number;

declare function NetworkShopEndService(p0: number): number;

declare function NetworkShopGetPrice(hash: string | number, hash2: string | number, p2: boolean): number;

declare function NetworkShopGetTransactionsDisabled(): number;

declare function NetworkShopGetTransactionsEnabledForCharacter(mpChar: number): number;

declare function NetworkShopIsItemUnlocked(name: string): number;

declare function NetworkShopIsItemUnlockedHash(hash: string | number): number;

declare function NetworkShopSessionApplyReceivedData(p0: number): number;

declare function NetworkShopSetTelemetryNonceSeed(p0: number): number;

declare function NetworkShopStartSession(p0: number): number;

declare function NetworkShowProfileUi(networkHandle: number): void;

declare function NetworkSpentAmmoDrop(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentArrestBail(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBetting(p0: number, p1: number, p3: boolean, p4: boolean): number;

declare function NetworkSpentBoatPickup(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBounty(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBullShark(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyOfftheradar(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyPassiveMode(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyRevealPlayers(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyWantedlevel(p0: number, p2: boolean, p3: boolean): number;

declare function NetworkSpentCallPlayer(p0: number, p2: boolean, p3: boolean): number;

declare function NetworkSpentCarwash(p0: number, p1: number, p2: number, p3: boolean, p4: boolean): void;

declare function NetworkSpentCashDrop(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentCinema(p0: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkSpentFromRockstar(bank: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHeliPickup(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHireMercenary(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHireMugger(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHoldups(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentInStripclub(p0: number, p1: boolean, p2: number, p3: boolean): void;

declare function NetworkSpentNoCops(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentPayVehicleInsurancePremium(amount: number, vehicleModel: string | number, notBankrupt: boolean, hasTheMoney: boolean): number;

declare function NetworkSpentPlayerHealthcare(p0: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkSpentProstitutes(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentRequestHeist(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentRequestJob(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentRobbedByMugger(amount: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentTaxi(amount: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentTelescope(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkStartSynchronisedScene(netScene: number): void;

declare function NetworkStopLoadScene(): void;

declare function NetworkStopSynchronisedScene(netScene: number): void;

declare function NetworkSuppressInvite(toggle: boolean): void;

declare function NetworkTransferBankToWallet(charStatInt: number, amount: number): number;

declare function NetworkTransferWalletToBank(charStatInt: number, amount: number): number;

declare function NetworkUnlinkNetworkedSynchronisedScene(netScene: number): number;

declare function NetworkUnregisterNetworkedEntity(entity: number): void;

declare function NetworkUpdateLoadScene(): number;

declare function NetworkXAffectsGamers(p0: number): number;

declare function NewLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

declare function NewLoadSceneStartSphere(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function NewLoadSceneStop(): void;

declare function NotificationSendApartmentInvite(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, R: number, G: number, B: number): [number, number];

declare function NotificationSendClanInvite(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, playerName: string, R: number, G: number, B: number): [number, number];

declare function Nullify(unused: number): [number, number];

declare function ObjToNet(object: number): number;

declare function ObjectDecalToggle(hash: string | number): void;

declare function ObjectValueAddArray(key: string): [number, number];

declare function ObjectValueAddBoolean(key: string, value: boolean): number;

declare function ObjectValueAddFloat(key: string, value: number): number;

declare function ObjectValueAddInteger(key: string, value: number): number;

declare function ObjectValueAddObject(key: string): [number, number];

declare function ObjectValueAddString(key: string, value: string): number;

declare function ObjectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): number;

declare function ObjectValueGetArray(key: string): [number, number];

declare function ObjectValueGetBoolean(key: string): [number, number];

declare function ObjectValueGetFloat(key: string): [number, number];

declare function ObjectValueGetInteger(key: string): [number, number];

declare function ObjectValueGetObject(key: string): [number, number];

declare function ObjectValueGetString(key: string): [string, number];

declare function ObjectValueGetType(key: string): [number, number];

declare function ObjectValueGetVector3(key: string): [number[], number];

declare function OpenBombBayDoors(vehicle: number): void;

declare function OpenPatrolRoute(patrolRoute: string): void;

declare function OpenSequenceTask(taskSequence: number): number;

declare function OverrideCamSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;

declare function OverrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;

declare function OverridePopscheduleVehicleModel(scheduleId: number, vehicleHash: string | number): void;

declare function OverrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): number;

declare function OverrideTrevorRage(p0: number): void;

declare function OverrideUnderwaterStream(p1: boolean): number;

declare function OverrideVehHorn(vehicle: number, mute: boolean, p2: number): void;

declare function ParticipantId(): number;

declare function ParticipantIdToInt(): number;

declare function PauseClock(toggle: boolean): void;

declare function PausePlaybackRecordedVehicle(p0: number): void;

declare function PauseScriptedConversation(p0: boolean): void;

declare function PedHasUseScenarioTask(ped: number): number;

declare function PedSkipNextReloading(ped: number): number;

declare function PedToNet(ped: number): number;

declare function PinRopeVertex(rope: number, vertex: number, x: number, y: number, z: number): void;

declare function PlaceObjectOnGroundProperly(object: number): number;

declare function PlayAmbientSpeech1(ped: number, speechName: string, speechParam: string): void;

declare function PlayAmbientSpeech2(ped: number, speechName: string, speechParam: string): void;

declare function PlayAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;

declare function PlayAmbientSpeechWithVoice(p0: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;

declare function PlayAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;

declare function PlayCamAnim(cam: number, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: boolean, p10: number): number;

declare function PlayEndCreditsMusic(play: boolean): void;

declare function PlayEntityAnim(entity: number, animName: string, animDict: string, p3: number, loop: boolean, stayInAnim: boolean, p6: boolean, delta: number, bitset: number): number;

declare function PlayEntityScriptedAnim(p0: number, p4: number, p5: number): [number, number, number];

declare function PlayFacialAnim(ped: number, animName: string, animDict: string): void;

declare function PlayMissionCompleteAudio(audioName: string): void;

declare function PlayPain(ped: number, painID: number, p1: number): void;

declare function PlayPedRingtone(ringtoneName: string, ped: number, p2: boolean): void;

declare function PlayPoliceReport(name: string, p1: number): number;

declare function PlaySound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: number, p5: boolean): void;

declare function PlaySoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: boolean, range: number, p8: boolean): void;

declare function PlaySoundFromEntity(soundId: number, audioName: string, entity: number, audioRef: string, p4: boolean, p5: number): void;

declare function PlaySoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;

declare function PlayStreamFromObject(object: number): void;

declare function PlayStreamFromPed(ped: number): void;

declare function PlayStreamFromVehicle(vehicle: number): void;

declare function PlayStreamFrontend(): void;

declare function PlaySynchronizedAudioEvent(p0: number): number;

declare function PlaySynchronizedCamAnim(p0: number, p1: number, animName: string, animDictionary: string): number;

declare function PlaySynchronizedEntityAnim(entity: number, syncedScene: number, animation: string, propName: string, p4: number, p5: number, p6: number, p7: number): number;

declare function PlaySynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p8: number, p9: number, p10: number, p11: number): [number, number, number];

declare function PlayVehicleDoorCloseSound(vehicle: number, p1: number): void;

declare function PlayVehicleDoorOpenSound(vehicle: number, p1: number): void;

declare function PlayerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function PlayerDetachVirtualBound(): void;

declare function PlayerId(): number;

declare function PlayerPedId(): number;

declare function PlaystatsAmbientMissionCrateCreated(p0: number, p1: number, p2: number): void;

declare function PlaystatsAwardXp(p0: number, p1: number, p2: number): void;

declare function PlaystatsCheatApplied(cheat: string): void;

declare function PlaystatsClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsFriendActivity(p0: number, p1: number): void;

declare function PlaystatsMatchStarted(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function PlaystatsMissionCheckpoint(p1: number, p2: number, p3: number): number;

declare function PlaystatsMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;

declare function PlaystatsMissionStarted(p1: number, p2: number, p3: boolean): number;

declare function PlaystatsNpcInvite(p0: number): void;

declare function PlaystatsOddjobDone(p0: number, p1: number, p2: number): void;

declare function PlaystatsPropChange(p0: number, p1: number, p2: number, p3: number): void;

declare function PlaystatsRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsRankUp(p0: number): void;

declare function PlaystatsShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsWebsiteVisited(scaleformHash: string | number, p1: number): void;

declare function PointCamAtCoord(cam: number, x: number, y: number, z: number): void;

declare function PointCamAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function PointCamAtPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean): void;

declare function PopScaleformMovieFunction(): number;

declare function PopScaleformMovieFunctionVoid(): void;

declare function PopTimecycleModifier(): void;

declare function PopulateNow(): void;

declare function Pow(base: number, exponent: number): number;

declare function PrefetchSrl(srl: string): void;

declare function PreloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

declare function PreloadScriptPhoneConversation(p0: boolean, p1: boolean): void;

declare function PreloadVehicleMod(p0: number, p1: number, p2: number): void;

declare function PrepareAlarm(alarmName: string): number;

declare function PrepareMusicEvent(eventName: string): number;

declare function PrepareSynchronizedAudioEvent(p0: string, p1: number): number;

declare function PrepareSynchronizedAudioEventForScene(p0: number, p1: number): number;

declare function ProcessCashGift(p2: string): [string, number, number];

declare function ProcessEntityAttachments(entity: number): void;

declare function PulseBlip(blip: number): void;

declare function PushScaleformMovieFunction(scaleform: number, functionName: string): number;

declare function PushScaleformMovieFunctionFromHudComponent(hudComponent: number, functionName: string): number;

declare function PushScaleformMovieFunctionN(functionName: string): number;

declare function PushScaleformMovieFunctionParameterBool(value: boolean): void;

declare function PushScaleformMovieFunctionParameterFloat(value: number): void;

declare function PushScaleformMovieFunctionParameterInt(value: number): void;

declare function PushScaleformMovieFunctionParameterString(value: string): void;

declare function PushTimecycleModifier(): void;

declare function RaiseConvertibleRoof(vehicle: number, instantlyRaise: boolean): void;

declare function RaiseLowerableWheels(vehicle: number): void;

declare function RefreshInterior(interiorID: number): void;

declare function RefreshWaypoint(): void;

declare function RegisterBoolToSave(name: string): number;

declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

declare function RegisterEntityForCutscene(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: string | number, p4: number): void;

declare function RegisterEnumToSave(name: string): number;

declare function RegisterFloatToSave(name: string): number;

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

declare function RegisterHatedTargetsAroundPed(ped: number, radius: number): void;

declare function RegisterIntToSave(name: string): number;

declare function RegisterNamedRendertarget(p0: string, p1: boolean): number;

declare function RegisterNuiCallbackType(callbackType: string): void;

declare function RegisterObjectScriptBrain(scriptName: string, objectName: string | number, p2: number, p3: number, p4: number, p5: number): void;

declare function RegisterPedheadshot(ped: number): number;

declare function RegisterSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number): [number, number];

declare function RegisterScriptWithAudio(p0: number): void;

declare function RegisterSynchronisedScriptSpeech(): void;

declare function RegisterTarget(ped: number, target: number): void;

declare function RegisterTextLabelToSave(name: string): number;

declare function RegisterWorldPointScriptBrain(p1: number, p2: number): number;

declare function ReleaseAmbientAudioBank(): void;

declare function ReleaseMissionAudioBank(): void;

declare function ReleaseMovieMeshSet(movieMeshSet: number): void;

declare function ReleaseNamedRendertarget(p0: number): number;

declare function ReleaseNamedScriptAudioBank(audioBank: string): void;

declare function ReleasePreloadMods(vehicle: number): void;

declare function ReleaseScriptAudioBank(): void;

declare function ReleaseSoundId(soundId: number): void;

declare function RemoveActionModeAsset(asset: string): void;

declare function RemoveAllCoverBlockingAreas(): void;

declare function RemoveAllPedWeapons(ped: number, p1: boolean): void;

declare function RemoveAllPickupsOfType(pickupHash: string | number): void;

declare function RemoveAllProjectilesOfType(weaponHash: string | number, p1: boolean): void;

declare function RemoveAllShockingEvents(p0: boolean): void;

declare function RemoveAnimDict(animDict: string): void;

declare function RemoveAnimSet(animSet: string): void;

declare function RemoveBlip(blip: number): void;

declare function RemoveClipSet(clipSet: string): void;

declare function RemoveCoverPoint(coverpoint: number): void;

declare function RemoveCutscene(): void;

declare function RemoveDecal(decal: number): void;

declare function RemoveDecalsFromObject(obj: number): void;

declare function RemoveDecalsFromObjectFacing(obj: number, x: number, y: number, z: number): void;

declare function RemoveDecalsFromVehicle(vehicle: number): void;

declare function RemoveDecalsInRange(x: number, y: number, z: number, range: number): void;

declare function RemoveDispatchSpawnBlockingArea(p0: number): void;

declare function RemoveDoorFromSystem(doorHash: string | number): void;

declare function RemoveForcedObject(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function RemoveFromItemset(p0: number, p1: number): void;

declare function RemoveGroup(groupId: number): void;

declare function RemoveIpl(iplName: string): void;

declare function RemoveLoadingPrompt(): void;

declare function RemoveModelHide(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function RemoveModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;

declare function RemoveMpGamerTag(gamerTagId: number): void;

declare function RemoveMultiplayerBankCash(): void;

declare function RemoveMultiplayerHudCash(): void;

declare function RemoveNamedPtfxAsset(fxName: string): void;

declare function RemoveNavmeshBlockingObject(p0: number): void;

declare function RemoveNavmeshRequiredRegions(): void;

declare function RemoveNotification(notificationId: number): void;

declare function RemoveParticleFx(ptfxHandle: number, p1: boolean): void;

declare function RemoveParticleFxFromEntity(entity: number): void;

declare function RemoveParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;

declare function RemovePedDefensiveArea(ped: number, toggle: boolean): void;

declare function RemovePedElegantly(ped: number): void;

declare function RemovePedFromGroup(ped: number): void;

declare function RemovePedHelmet(ped: number, instantly: boolean): void;

declare function RemovePedPreferredCoverSet(ped: number): void;

declare function RemovePickUpRopeForCargobob(cargobob: number): void;

declare function RemovePickup(pickup: number): void;

declare function RemovePlayerHelmet(player: number, p2: boolean): number;

declare function RemovePtfxAsset(): void;

declare function RemoveRelationshipGroup(groupHash: string | number): void;

declare function RemoveScenarioBlockingArea(p0: number, p1: boolean): void;

declare function RemoveScenarioBlockingAreas(): void;

declare function RemoveScriptFire(fireHandle: number): void;

declare function RemoveShockingEvent(event: number): number;

declare function RemoveShockingEventSpawnBlockingAreas(): void;

declare function RemoveStealthModeAsset(asset: string): void;

declare function RemoveVehicleAsset(vehicleAsset: number): void;

declare function RemoveVehicleHighDetailModel(vehicle: number): void;

declare function RemoveVehicleMod(vehicle: number, modType: number): void;

declare function RemoveVehicleRecording(p0: number, p1: number): void;

declare function RemoveVehicleStuckCheck(vehicle: number): void;

declare function RemoveVehicleUpsidedownCheck(vehicle: number): void;

declare function RemoveVehicleWindow(vehicle: number, windowIndex: number): void;

declare function RemoveVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: number): void;

declare function RemoveWaypointRecording(name: string): void;

declare function RemoveWeaponAsset(weaponHash: string | number): void;

declare function RemoveWeaponComponentFromPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

declare function RemoveWeaponComponentFromWeaponObject(p0: number, p1: number): void;

declare function RemoveWeaponFromPed(ped: number, weaponHash: string | number): void;

declare function RenderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;

declare function ReportCrime(player: number, crimeType: number, wantedLvlThresh: number): void;

declare function RequestActionModeAsset(asset: string): void;

declare function RequestAdditionalCollisionAtCoord(p0: number, p1: number, p2: number): void;

declare function RequestAdditionalText(gxt: string, slot: number): void;

declare function RequestAdditionalText_2(gxt: string, slot: number): void;

declare function RequestAmbientAudioBank(p0: string, p1: boolean): number;

declare function RequestAnimDict(animDict: string): void;

declare function RequestAnimSet(animSet: string): void;

declare function RequestClipSet(clipSet: string): void;

declare function RequestCollisionAtCoord(x: number, y: number, z: number): number;

declare function RequestCollisionForModel(model: string | number): void;

declare function RequestCutscene(cutsceneName: string, p1: number): void;

declare function RequestCutsceneEx(cutsceneName: string, p1: number, p2: number): void;

declare function RequestHudScaleform(hudComponent: number): void;

declare function RequestIpl(iplName: string): void;

declare function RequestMenuPedModel(model: string | number): void;

declare function RequestMissionAudioBank(p0: string, p1: boolean): number;

declare function RequestModel(model: string | number): void;

declare function RequestNamedPtfxAsset(fxName: string): void;

declare function RequestPtfxAsset(): number;

declare function RequestScaleformMovie(scaleformName: string): number;

declare function RequestScaleformMovieInstance(scaleformName: string): number;

declare function RequestScaleformMovieInteractive(scaleformName: string): number;

declare function RequestScript(scriptName: string): void;

declare function RequestScriptAudioBank(p0: string, p1: boolean): number;

declare function RequestScriptWithNameHash(scriptHash: string | number): void;

declare function RequestStealthModeAsset(asset: string): void;

declare function RequestStreamedTextureDict(textureDict: string, p1: boolean): void;

declare function RequestVehicleAsset(vehicleHash: string | number, vehicleAsset: number): void;

declare function RequestVehicleHighDetailModel(vehicle: number): void;

declare function RequestVehicleRecording(p0: number, p1: number): void;

declare function RequestWaypointRecording(name: string): void;

declare function RequestWeaponAsset(weaponHash: string | number, p1: number, p2: number): void;

declare function RequestWeaponHighDetailModel(weaponObject: number): void;

declare function ReserveNetworkMissionObjects(p0: number): void;

declare function ReserveNetworkMissionPeds(p0: number): void;

declare function ReserveNetworkMissionVehicles(p0: number): void;

declare function ResetAiMeleeWeaponDamageModifier(): void;

declare function ResetAiWeaponDamageModifier(): void;

declare function ResetDispatchIdealSpawnDistance(): void;

declare function ResetDispatchSpawnBlockingAreas(): void;

declare function ResetEditorValues(): void;

declare function ResetEntityAlpha(entity: number): number;

declare function ResetExclusiveScenarioGroup(): void;

declare function ResetGroupFormationDefaultSpacing(groupHandle: number): void;

declare function ResetHudComponentValues(id: number): void;

declare function ResetLocalplayerState(): void;

declare function ResetParticleFxAssetOldToNew(name: string): void;

declare function ResetPedAudioFlags(p0: number): void;

declare function ResetPedInVehicleContext(ped: number): void;

declare function ResetPedLastVehicle(ped: number): void;

declare function ResetPedMovementClipset(ped: number, p1: number): void;

declare function ResetPedRagdollBlockingFlags(ped: number, flags: number): void;

declare function ResetPedRagdollTimer(ped: number): void;

declare function ResetPedStrafeClipset(ped: number): void;

declare function ResetPedVisibleDamage(ped: number): number;

declare function ResetPedWeaponMovementClipset(ped: number): void;

declare function ResetPlayerArrestState(player: number): void;

declare function ResetPlayerInputGait(player: number): void;

declare function ResetPlayerStamina(player: number): void;

declare function ResetReticuleValues(): void;

declare function ResetScenarioGroupsEnabled(): void;

declare function ResetScenarioTypesEnabled(): void;

declare function ResetTrevorRage(): void;

declare function ResetVehicleStuckTimer(vehicle: number, nullAttributes: boolean): void;

declare function ResetVehicleWheels(vehicle: number, toggle: boolean): void;

declare function ResetWantedLevelDifficulty(player: number): void;

declare function ResetWavesIntensity(): void;

declare function RespondingAsTemp(p0: number): void;

declare function RestartFrontendMenu(menuHash: string | number, p1: number): void;

declare function RestartScriptedConversation(): void;

declare function RestorePlayerStamina(player: number, p1: number): void;

declare function ResurrectPed(ped: number): void;

declare function ReturnTwo(p0: number): number;

declare function ReviveInjuredPed(ped: number): void;

declare function RollDownWindow(vehicle: number, windowIndex: number): number;

declare function RollDownWindows(vehicle: number): void;

declare function RollUpWindow(vehicle: number, windowIndex: number): number;

declare function RopeAreTexturesLoaded(): number;

declare function RopeConvertToSimple(rope: number): void;

declare function RopeDrawShadowEnabled(toggle: boolean): number;

declare function RopeForceLength(rope: number, length: number): number;

declare function RopeLoadTextures(): number;

declare function RopeResetLength(rope: number, length: boolean): number;

declare function RopeSetUpdatePinverts(rope: number): void;

declare function RopeUnloadTextures(): number;

declare function Round(value: number): number;

declare function ScEmailMessageClearRecipList(): void;

declare function ScEmailMessagePushGamerToRecipList(player: number): void;

declare function ScGetCheckStringStatus(taskHandle: number): number;

declare function ScGetNickname(): string;

declare function ScHasCheckStringTaskCompleted(taskHandle: number): number;

declare function ScInboxGetEmails(offset: number, limit: number): void;

declare function ScInboxMessageGetDataBool(p0: number, p1: string): number;

declare function ScInboxMessageGetDataInt(p0: number, context: string, out: number): number;

declare function ScInboxMessageGetDataString(p0: number, context: string, out: string): number;

declare function ScInboxMessageGetString(p0: number): string;

declare function ScInboxMessageGetUgcdata(p0: number, p1: number): number;

declare function ScInboxMessageInit(p0: number): number;

declare function ScInboxMessagePop(p0: number): number;

declare function ScInboxMessagePush(p0: number): number;

declare function ScStartCheckStringTask(_string: string, taskHandle: number): number;

declare function ScreenDrawPositionEnd(): void;

declare function ScreenDrawPositionRatio(x: number, y: number, p2: number, p3: number): void;

declare function ScriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): number;

declare function SendNuiMessage(jsonString: string): number;

declare function SetAbilityBarValue(p0: number, p1: number): void;

declare function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;

declare function SetAggressiveHorns(toggle: boolean): void;

declare function SetAiBlipMaxDistance(ped: number, p1: number): void;

declare function SetAiMeleeWeaponDamageModifier(modifier: number): void;

declare function SetAiWeaponDamageModifier(value: number): void;

declare function SetAirDragMultiplierForPlayersVehicle(player: number, multiplier: number): void;

declare function SetAllLowPriorityVehicleGeneratorsActive(active: boolean): void;

declare function SetAllRandomPedsFlee(player: number, toggle: boolean): void;

declare function SetAllRandomPedsFleeThisFrame(player: number): void;

declare function SetAllVehicleGeneratorsActive(): void;

declare function SetAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;

declare function SetAllVehiclesSpawn(p0: number, p1: boolean, p2: boolean, p3: boolean): number;

declare function SetAmbientVoiceName(ped: number, name: string): void;

declare function SetAmbientZoneListState(p1: boolean, p2: boolean): number;

declare function SetAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmbientZoneState(p1: boolean, p2: boolean): number;

declare function SetAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmmoInClip(ped: number, weaponHash: string | number, ammo: number): number;

declare function SetAnimLooped(p0: number, p1: boolean, p2: number, p3: boolean): void;

declare function SetAnimRate(p0: number, p1: number, p2: number, p3: boolean): void;

declare function SetAnimWeight(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetAnimalMood(animal: number, mood: number): void;

declare function SetAudioFlag(flagName: string, toggle: boolean): void;

declare function SetAudioSceneVariable(scene: string, variable: string, value: number): void;

declare function SetAudioVehiclePriority(vehicle: number, p1: number): void;

declare function SetAutoGiveParachuteWhenEnterPlane(player: number, toggle: boolean): void;

declare function SetBalanceAddMachine(): [number, number, number];

declare function SetBalanceAddMachines(p1: number): [number, number, number];

declare function SetBikeLeanAngle(vehicle: number, x: number, y: number): void;

declare function SetBit(offset: number): number;

declare function SetBitsInRange(rangeStart: number, rangeEnd: number, p3: number): number;

declare function SetBlackout(enable: boolean): void;

declare function SetBlipAlpha(blip: number, alpha: number): void;

declare function SetBlipAsFriendly(blip: number, toggle: boolean): void;

declare function SetBlipAsMissionCreatorBlip(blip: number, toggle: boolean): void;

declare function SetBlipAsShortRange(blip: number, toggle: boolean): void;

declare function SetBlipBright(blip: number, toggle: boolean): void;

declare function SetBlipCategory(blip: number, index: number): void;

declare function SetBlipChecked(blip: number, toggle: boolean): void;

declare function SetBlipColour(blip: number, color: number): void;

declare function SetBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;

declare function SetBlipDisplay(blip: number, displayId: number): void;

declare function SetBlipFade(blip: number, opacity: number, duration: number): void;

declare function SetBlipFlashInterval(blip: number, p1: number): void;

declare function SetBlipFlashTimer(blip: number, duration: number): void;

declare function SetBlipFlashes(blip: number, toggle: boolean): void;

declare function SetBlipFlashesAlternate(blip: number, toggle: boolean): void;

declare function SetBlipFriend(blip: number, toggle: boolean): void;

declare function SetBlipFriendly(blip: number, toggle: boolean): void;

declare function SetBlipHighDetail(blip: number, toggle: boolean): void;

declare function SetBlipNameFromTextFile(blip: number, gxtEntry: string): void;

declare function SetBlipNameToPlayerName(blip: number, player: number): void;

declare function SetBlipPriority(blip: number, priority: number): void;

declare function SetBlipRotation(blip: number, rotation: number): void;

declare function SetBlipRoute(blip: number, enabled: boolean): void;

declare function SetBlipRouteColour(blip: number, colour: number): void;

declare function SetBlipScale(blip: number, scale: number): void;

declare function SetBlipSecondaryColour(blip: number, r: number, g: number, b: number): void;

declare function SetBlipShowCone(blip: number, toggle: boolean): void;

declare function SetBlipShrink(blip: number, toggle: boolean): void;

declare function SetBlipSprite(blip: number, spriteId: number): void;

declare function SetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

declare function SetBoatAnchor(vehicle: number, toggle: boolean): void;

declare function SetCamActive(cam: number, active: boolean): void;

declare function SetCamActiveWithInterp(camTo: number, camFrom: number, duration: number, easeLocation: number, easeRotation: number): void;

declare function SetCamAffectsAiming(cam: number, toggle: boolean): void;

declare function SetCamAnimCurrentPhase(cam: number, phase: number): void;

declare function SetCamCoord(cam: number, posX: number, posY: number, posZ: number): void;

declare function SetCamDebugName(camera: number, name: string): void;

declare function SetCamDofFnumberOfLens(camera: number, p1: number): void;

declare function SetCamDofFocusDistanceBias(camera: number, p1: number): void;

declare function SetCamDofMaxNearInFocusDistance(camera: number, p1: number): void;

declare function SetCamDofMaxNearInFocusDistanceBlendLevel(camera: number, p1: number): void;

declare function SetCamDofPlanes(cam: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetCamDofStrength(cam: number, dofStrength: number): void;

declare function SetCamEffect(p0: number): void;

declare function SetCamFarClip(cam: number, farClip: number): void;

declare function SetCamFarDof(cam: number, farDOF: number): void;

declare function SetCamFov(cam: number, fieldOfView: number): void;

declare function SetCamInheritRollVehicle(cam: number, p1: boolean): void;

declare function SetCamMotionBlurStrength(cam: number, strength: number): void;

declare function SetCamNearClip(cam: number, nearClip: number): void;

declare function SetCamNearDof(cam: number, nearDOF: number): void;

declare function SetCamParams(cam: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: number, p9: number, p10: number, p11: number): void;

declare function SetCamRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;

declare function SetCamShakeAmplitude(cam: number, amplitude: number): void;

declare function SetCamSplineDuration(cam: number, timeDuration: number): void;

declare function SetCamSplinePhase(cam: number, p1: number): void;

declare function SetCamUseShallowDofMode(cam: number, toggle: boolean): void;

declare function SetCameraRange(cam: number, range: number): void;

declare function SetCanAttackFriendly(ped: number, toggle: boolean, p2: boolean): void;

declare function SetCanResprayVehicle(vehicle: number, state: boolean): void;

declare function SetCargobobHookPosition(p0: number, p1: number, p2: number, p3: boolean): void;

declare function SetCargobobPickupMagnetActive(cargobob: number, isActive: boolean): void;

declare function SetCargobobPickupMagnetStrength(cargobob: number, strength: number): void;

declare function SetCgAtBoundcenter(rope: number): void;

declare function SetCgoffset(rope: number, x: number, y: number, z: number): void;

declare function SetCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;

declare function SetCheckpointIconRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetCinematicButtonActive(p0: boolean): void;

declare function SetCinematicCamShakeAmplitude(p0: number): void;

declare function SetCinematicModeActive(p0: boolean): void;

declare function SetClockDate(day: number, month: number, year: number): void;

declare function SetClockTime(hour: number, minute: number, second: number): void;

declare function SetCloudHatOpacity(opacity: number): void;

declare function SetCloudHatTransition(_type: string, transitionTime: number): void;

declare function SetCombatFloat(ped: number, combatType: number, p2: number): void;

declare function SetControlNormal(inputGroup: number, control: number, amount: number): number;

declare function SetConvertibleRoof(vehicle: number, p1: boolean): void;

declare function SetCreateRandomCops(toggle: boolean): void;

declare function SetCreateRandomCopsNotOnScenarios(toggle: boolean): void;

declare function SetCreateRandomCopsOnScenarios(toggle: boolean): void;

declare function SetCreditsActive(toggle: boolean): void;

declare function SetCurrentPedVehicleWeapon(ped: number, weaponHash: string | number): number;

declare function SetCurrentPedWeapon(ped: number, weaponHash: string | number, equipNow: boolean): void;

declare function SetCursorLocation(x: number, y: number): number;

declare function SetCursorSprite(spriteId: number): void;

declare function SetCustomRespawnPosition(x: number, y: number, z: number, heading: number): void;

declare function SetCutsceneAudioOverride(p0: string): void;

declare function SetCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

declare function SetCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;

declare function SetCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number): void;

declare function SetCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number): void;

declare function SetCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetDamping(rope: number, vertex: number, value: number): void;

declare function SetDebugLinesAndSpheresDrawingActive(enabled: boolean): void;

declare function SetDecisionMaker(ped: number, name: string | number): void;

declare function SetDesObjectState(handle: number, state: number): void;

declare function SetDirectorMode(toggle: boolean): void;

declare function SetDisableAmbientMeleeMove(player: number, toggle: boolean): void;

declare function SetDisableBreaking(rope: number, enabled: boolean): number;

declare function SetDisableFragDamage(object: number, toggle: boolean): void;

declare function SetDisableVehiclePetrolTankDamage(vehicle: number, toggle: boolean): void;

declare function SetDisableVehiclePetrolTankFires(vehicle: number, toggle: boolean): void;

declare function SetDispatchCopsForPlayer(player: number, toggle: boolean): void;

declare function SetDispatchIdealSpawnDistance(p0: number): void;

declare function SetDispatchTimeBetweenSpawnAttempts(p0: number, p1: number): void;

declare function SetDispatchTimeBetweenSpawnAttemptsMultiplier(p0: number, p1: number): void;

declare function SetDitchPoliceModels(toggle: boolean): void;

declare function SetDoorAccelerationLimit(doorHash: string | number, limit: number, p2: boolean, p3: boolean): void;

declare function SetDoorAjarAngle(doorHash: string | number, ajar: number, p2: boolean, p3: boolean): void;

declare function SetDrawOrigin(x: number, y: number, z: number, p3: number): void;

declare function SetDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;

declare function SetDriveTaskDrivingStyle(ped: number, drivingStyle: number): void;

declare function SetDriveTaskMaxCruiseSpeed(p0: number, p1: number): void;

declare function SetDrivebyTaskTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;

declare function SetDriverAbility(driver: number, ability: number): void;

declare function SetDriverAggressiveness(driver: number, aggressiveness: number): void;

declare function SetEmitterRadioStation(emitterName: string, radioStation: string): void;

declare function SetEnableBoundAnkles(ped: number, toggle: boolean): void;

declare function SetEnableHandcuffs(ped: number, toggle: boolean): void;

declare function SetEnablePedEnveffScale(ped: number, toggle: boolean): void;

declare function SetEnableScuba(ped: number, toggle: boolean): void;

declare function SetEntityAlpha(entity: number, alphaLevel: number, skin: boolean): void;

declare function SetEntityAlwaysPrerender(entity: number, toggle: boolean): void;

declare function SetEntityAnimCurrentTime(entity: number, animDictionary: string, animName: string, time: number): void;

declare function SetEntityAnimSpeed(entity: number, animDictionary: string, animName: string, speedMultiplier: number): void;

declare function SetEntityAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;

declare function SetEntityAsNoLongerNeeded(entity: number): void;

declare function SetEntityCanBeDamaged(entity: number, toggle: boolean): void;

declare function SetEntityCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;

declare function SetEntityCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;

declare function SetEntityCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

declare function SetEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

declare function SetEntityCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;

declare function SetEntityCoords_2(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

declare function SetEntityDynamic(entity: number, toggle: boolean): void;

declare function SetEntityHasGravity(entity: number, toggle: boolean): void;

declare function SetEntityHeading(entity: number, heading: number): void;

declare function SetEntityHealth(entity: number, health: number): void;

declare function SetEntityIconColor(entity: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetEntityIconVisibility(entity: number, toggle: boolean): void;

declare function SetEntityInvincible(entity: number, toggle: boolean): void;

declare function SetEntityIsTargetPriority(entity: number, p1: boolean, p2: number): void;

declare function SetEntityLights(entity: number, toggle: boolean): void;

declare function SetEntityLoadCollisionFlag(entity: number, toggle: boolean): void;

declare function SetEntityLocallyInvisible(entity: number): void;

declare function SetEntityLocallyVisible(entity: number): void;

declare function SetEntityLodDist(entity: number, value: number): void;

declare function SetEntityMaxHealth(entity: number, value: number): void;

declare function SetEntityMaxSpeed(entity: number, speed: number): void;

declare function SetEntityMotionBlur(entity: number, toggle: boolean): void;

declare function SetEntityNoCollisionEntity(entity1: number, entity2: number, unknown: boolean): void;

declare function SetEntityOnlyDamagedByPlayer(entity: number, toggle: boolean): void;

declare function SetEntityOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: number): void;

declare function SetEntityProofs(entity: number, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p6: boolean, p7: boolean, drownProof: boolean): void;

declare function SetEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): void;

declare function SetEntityRecordsCollisions(entity: number, toggle: boolean): void;

declare function SetEntityRegister(entity: number, toggle: boolean): void;

declare function SetEntityRenderScorched(entity: number, toggle: boolean): void;

declare function SetEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;

declare function SetEntityTrafficlightOverride(entity: number, state: number): void;

declare function SetEntityVelocity(entity: number, x: number, y: number, z: number): void;

declare function SetEntityVisible(entity: number, toggle: boolean, unk: boolean): void;

declare function SetEntityVisibleInCutscene(p0: number, p1: boolean, p2: boolean): void;

declare function SetEveryoneIgnorePlayer(player: number, toggle: boolean): void;

declare function SetExclusivePhoneRelationships(ped: number): number;

declare function SetExclusiveScenarioGroup(scenarioGroup: string): void;

declare function SetExplosiveAmmoThisFrame(player: number): number;

declare function SetExplosiveMeleeThisFrame(player: number): number;

declare function SetFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;

declare function SetFadeInAfterDeathArrest(toggle: boolean): void;

declare function SetFadeInAfterLoad(toggle: boolean): void;

declare function SetFadeOutAfterArrest(toggle: boolean): void;

declare function SetFadeOutAfterDeath(toggle: boolean): void;

declare function SetFakeWantedLevel(fakeWantedLevel: number): void;

declare function SetFarDrawVehicles(toggle: boolean): void;

declare function SetFarShadowsSuppressed(toggle: boolean): void;

declare function SetFireAmmoThisFrame(player: number): number;

declare function SetFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;

declare function SetFlashLightFadeDistance(distance: number): number;

declare function SetFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;

declare function SetFocusEntity(entity: number): void;

declare function SetFollowPedCamCutsceneChat(p0: string, p1: number): number;

declare function SetFollowPedCamViewMode(viewMode: number): void;

declare function SetFollowVehicleCamViewMode(viewMode: number): void;

declare function SetFollowVehicleCamZoomLevel(zoomLevel: number): void;

declare function SetForceHdVehicle(vehicle: number, toggle: boolean): void;

declare function SetForceObjectThisFrame(p0: number, p1: number, p2: number, p3: number): void;

declare function SetForcePedFootstepsTracks(toggle: boolean): void;

declare function SetForceVehicleTrails(toggle: boolean): void;

declare function SetFrontendActive(active: boolean): void;

declare function SetFrontendRadioActive(active: boolean): void;

declare function SetFrozenRenderingDisabled(enabled: boolean): void;

declare function SetGamePaused(toggle: boolean): void;

declare function SetGamePausesForStreaming(toggle: boolean): void;

declare function SetGameplayCamRawPitch(pitch: number): void;

declare function SetGameplayCamRawYaw(yaw: number): void;

declare function SetGameplayCamRelativeHeading(heading: number): void;

declare function SetGameplayCamRelativePitch(x: number, Value2: number): number;

declare function SetGameplayCamShakeAmplitude(amplitude: number): void;

declare function SetGameplayCoordHint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function SetGameplayEntityHint(entity: number, xOffset: number, yOffset: number, zOffset: number, p4: boolean, p5: number, p6: number, p7: number, p8: number): void;

declare function SetGameplayHintFov(FOV: number): void;

declare function SetGameplayObjectHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGameplayPedHint(p0: number, x1: number, y1: number, z1: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGameplayVehicleHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGarbageTrucks(toggle: boolean): number;

declare function SetGlobalMinBirdFlightHeight(height: number): void;

declare function SetGpsActive(active: boolean): void;

declare function SetGpsDisabledZone(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetGpsFlags(p0: number, p1: number): void;

declare function SetGpsFlashes(toggle: boolean): void;

declare function SetGravityLevel(level: number): void;

declare function SetGroupFormation(groupId: number, formationType: number): void;

declare function SetGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;

declare function SetGroupSeparationRange(groupHandle: number, separationRange: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingField(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingFloat(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingInt(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingVector(vehicle: string, _class: string, fieldName: string): void;

declare function SetHdArea(x: number, y: number, z: number, ground: number): void;

declare function SetHeliBladesFullSpeed(vehicle: number): void;

declare function SetHeliBladesSpeed(vehicle: number, speed: number): void;

declare function SetHelicopterRollPitchYawMult(helicopter: number, multiplier: number): void;

declare function SetHighFallTask(ped: number, p1: number, p2: number, p3: number): void;

declare function SetHornEnabled(vehicle: number, toggle: boolean): void;

declare function SetHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;

declare function SetHudColoursSwitch(hudColorIndex: number, hudColorIndex2: number): void;

declare function SetHudComponentPosition(id: number, x: number, y: number): void;

declare function SetIgnoreLowPriorityShockingEvents(player: number, toggle: boolean): void;

declare function SetIgnoreNoGpsFlag(ignore: boolean): void;

declare function SetIkTarget(ped: number, p1: number, targetPed: number, boneLookAt: number, x: number, y: number, z: number, p7: number, duration: number, duration1: number): void;

declare function SetInitialPlayerStation(radioStation: string): void;

declare function SetInputExclusive(inputGroup: number, control: number): void;

declare function SetInteriorActive(interiorID: number, toggle: boolean): void;

declare function SetInteriorPropColor(interiorID: number, propName: string, color: number): void;

declare function SetLastDrivenVehicle(vehicle: number): void;

declare function SetLoadingPromptTextEntry(_string: string): void;

declare function SetLocalPlayerInvisibleLocally(p0: boolean): void;

declare function SetLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;

declare function SetLocalPlayerVisibleLocally(p0: boolean): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(manualShutdown: boolean): void;

declare function SetMapFullScreen(toggle: boolean): void;

declare function SetMaxWantedLevel(maxWantedLevel: number): void;

declare function SetMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;

declare function SetMinigameInProgress(toggle: boolean): void;

declare function SetMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean): void;

declare function SetMinimapBlockWaypoint(toggle: boolean): void;

declare function SetMinimapComponent(p0: number, p1: boolean, p2: number): number;

/**
 * Sets the display info for a minimap overlay.
 * @param xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param miniMap The minimap overlay ID.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 */
declare function SetMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;

declare function SetMinimapRevealed(toggle: boolean): void;

declare function SetMissionFlag(toggle: boolean): void;

declare function SetMissionName(p0: boolean, name: string): void;

declare function SetMissionTrainAsNoLongerNeeded(p1: boolean): number;

declare function SetMissionTrainCoords(train: number, x: number, y: number, z: number): void;

declare function SetMobilePhonePosition(posX: number, posY: number, posZ: number): void;

declare function SetMobilePhoneRadioState(state: boolean): void;

declare function SetMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;

declare function SetMobilePhoneScale(scale: number): void;

declare function SetMobileRadioEnabledDuringGameplay(Toggle: boolean): void;

declare function SetModelAsNoLongerNeeded(model: string | number): void;

declare function SetModelHeadlightConfiguration(modelHash: string | number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void;

declare function SetMountedWeaponTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;

declare function SetMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;

declare function SetMpGamerTagColour(gamerTagId: number, flag: number, color: number): void;

declare function SetMpGamerTagHealthBarColor(headDisplayId: number, color: number): void;

declare function SetMpGamerTagName(gamerTagId: number, _string: string): void;

declare function SetMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean): void;

declare function SetMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;

declare function SetMultiplayerBankCash(): void;

declare function SetMultiplayerHudCash(p0: number, p1: number): void;

declare function SetNetworkIdCanMigrate(netId: number, toggle: boolean): void;

declare function SetNetworkIdExistsOnAllMachines(netId: number, toggle: boolean): void;

declare function SetNetworkIdSyncToPlayer(netId: number, player: number, toggle: boolean): void;

declare function SetNetworkIdVisibleInCutscene(netId: number, p1: boolean, p2: boolean): void;

declare function SetNetworkVehicleRespotTimer(netId: number, p1: number): void;

declare function SetNewWaypoint(x: number, y: number): void;

declare function SetNextDesiredMoveState(p0: number): void;

declare function SetNextRespawnToCustom(): void;

declare function SetNightvision(toggle: boolean): void;

declare function SetNoLoadingScreen(toggle: boolean): void;

declare function SetNoiseoveride(toggle: boolean): void;

declare function SetNoisinessoveride(value: number): void;

declare function SetNorthYanktonMap(toggle: boolean): void;

declare function SetNotificationColorNext(p0: number): void;

declare function SetNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;

declare function SetNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string): number;

declare function SetNotificationMessageClanTag(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number, clanTag: string): number;

declare function SetNotificationMessageClanTag_2(picName1: string, picName2: string, flash: boolean, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number, p9: number): number;

declare function SetNotificationMessage_2(p0: string, p1: number, p2: number, p3: number, p4: boolean, picName1: string, picName2: string): number;

declare function SetNotificationMessage_3(picName1: string, picName2: string, p2: boolean, p3: number, p4: string, p5: string): number;

declare function SetNotificationMessage_4(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number): number;

declare function SetNotificationTextEntry(_type: string): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNumberOfParkedVehicles(value: number): number;

declare function SetObjectAsNoLongerNeeded(object: number): void;

declare function SetObjectPhysicsParams(object: number, weight: number, p2: number, p3: number, p4: number, p5: number, gravity: number, p7: number, p8: number, p9: number, p10: number, buoyancy: number): void;

declare function SetObjectTargettable(object: number, targettable: boolean): number;

declare function SetObjectTextureVariant(object: number, paintIndex: number): void;

declare function SetOverrideWeather(weatherType: string): void;

declare function SetPadShake(p0: number, duration: number, frequency: number): void;

declare function SetParachuteTaskTarget(ped: number, x: number, y: number, z: number): void;

declare function SetParachuteTaskThrust(ped: number, thrust: number): void;

declare function SetParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetParticleFxAssetOldToNew(oldAsset: string, newAsset: string): void;

declare function SetParticleFxBloodScale(p0: boolean): void;

declare function SetParticleFxCamInsideNonplayerVehicle(p0: number, p1: boolean): void;

declare function SetParticleFxCamInsideVehicle(p0: boolean): void;

declare function SetParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;

declare function SetParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;

declare function SetParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: boolean): void;

declare function SetParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;

declare function SetParticleFxLoopedRange(ptfxHandle: number, range: number): void;

declare function SetParticleFxLoopedScale(ptfxHandle: number, scale: number): void;

declare function SetParticleFxNonLoopedAlpha(alpha: number): void;

declare function SetParticleFxNonLoopedColour(r: number, g: number, b: number): void;

declare function SetParticleFxShootoutBoat(p0: number): void;

declare function SetPauseMenuActive(toggle: boolean): void;

declare function SetPedAccuracy(ped: number, accuracy: number): number;

declare function SetPedAlertness(ped: number, value: number): void;

declare function SetPedAllowVehiclesOverride(ped: number, toggle: boolean): void;

declare function SetPedAllowedToDuck(ped: number, toggle: boolean): void;

declare function SetPedAlternateMovementAnim(ped: number, stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;

declare function SetPedAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;

declare function SetPedAmmo(ped: number, weaponHash: string | number, ammo: number): void;

declare function SetPedAmmoByType(ped: number, ammoType: number, ammo: number): void;

declare function SetPedAmmoToDrop(p0: number, p1: number): void;

declare function SetPedAngledDefensiveArea(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;

declare function SetPedArmour(ped: number, amount: number): void;

declare function SetPedAsCop(ped: number, toggle: boolean): void;

declare function SetPedAsEnemy(ped: number, toggle: boolean): void;

declare function SetPedAsGroupLeader(ped: number, groupId: number): void;

declare function SetPedAsGroupMember(ped: number, groupId: number): void;

declare function SetPedAsNoLongerNeeded(ped: number): void;

declare function SetPedBlendFromParents(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetPedBoundsOrientation(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetPedCanArmIk(ped: number, toggle: boolean): void;

declare function SetPedCanBeDraggedOut(ped: number, toggle: boolean): void;

declare function SetPedCanBeKnockedOffVehicle(ped: number, state: number): void;

declare function SetPedCanBeShotInVehicle(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetedWhenInjured(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetedWithoutLos(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetted(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;

declare function SetPedCanCowerInCover(ped: number, toggle: boolean): void;

declare function SetPedCanEvasiveDive(ped: number, toggle: boolean): void;

declare function SetPedCanHeadIk(ped: number, toggle: boolean): void;

declare function SetPedCanLegIk(ped: number, toggle: boolean): void;

declare function SetPedCanPeekInCover(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayGestureAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayVisemeAnims(ped: number, toggle: boolean, p2: boolean): void;

declare function SetPedCanRagdoll(ped: number, toggle: boolean): void;

declare function SetPedCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;

declare function SetPedCanSmashGlass(ped: number, p1: boolean, p2: boolean): void;

declare function SetPedCanSwitchWeapon(ped: number, toggle: boolean): void;

declare function SetPedCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;

declare function SetPedCanTorsoIk(ped: number, toggle: boolean): void;

declare function SetPedCanUseAutoConversationLookat(ped: number, toggle: boolean): void;

declare function SetPedCapsule(ped: number, value: number): void;

declare function SetPedChanceOfFiringBlanks(ped: number, xBias: number, yBias: number): void;

declare function SetPedClothProne(p0: number, p1: number): void;

declare function SetPedCombatAbility(ped: number, p1: number): void;

declare function SetPedCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;

declare function SetPedCombatMovement(ped: number, combatMovement: number): void;

declare function SetPedCombatRange(ped: number, p1: number): void;

declare function SetPedComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;

declare function SetPedConfigFlag(ped: number, flagId: number, value: boolean): void;

declare function SetPedCoordsKeepVehicle(ped: number, posX: number, posY: number, posZ: number): void;

declare function SetPedCoordsNoGang(ped: number, posX: number, posY: number, posZ: number): void;

declare function SetPedCowerHash(ped: number, p1: string): void;

declare function SetPedCurrentWeaponVisible(ped: number, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;

declare function SetPedDecoration(ped: number, collection: string | number, overlay: string | number): void;

declare function SetPedDefaultComponentVariation(ped: number): void;

declare function SetPedDefensiveAreaAttachedToPed(ped: number, attachPed: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean): void;

declare function SetPedDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetPedDefensiveSphereAttachedToPed(ped: number, target: number, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;

declare function SetPedDensityMultiplierThisFrame(multiplier: number): void;

declare function SetPedDesiredHeading(ped: number, heading: number): void;

declare function SetPedDesiredMoveBlendRatio(ped: number, p1: number): void;

declare function SetPedDiesInSinkingVehicle(ped: number, toggle: boolean): void;

declare function SetPedDiesInVehicle(ped: number, toggle: boolean): void;

declare function SetPedDiesInWater(ped: number, toggle: boolean): void;

declare function SetPedDiesInstantlyInWater(ped: number, toggle: boolean): void;

declare function SetPedDiesWhenInjured(ped: number, toggle: boolean): number;

declare function SetPedDriveByClipsetOverride(ped: number, clipset: string): void;

declare function SetPedDropsInventoryWeapon(ped: number, weaponHash: string | number, xOffset: number, yOffset: number, zOffset: number, p5: number): void;

declare function SetPedDropsWeapon(ped: number): void;

declare function SetPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;

declare function SetPedDucking(ped: number, toggle: boolean): void;

declare function SetPedEnableWeaponBlocking(ped: number, toggle: boolean): number;

declare function SetPedEnabledBikeRingtone(vehicle: number, entity: number): number;

declare function SetPedEnemyAiBlip(pedHandle: number, showViewCones: boolean): void;

declare function SetPedEnveffScale(ped: number, value: number): void;

declare function SetPedEyeColor(ped: number, index: number): void;

declare function SetPedFaceFeature(ped: number, index: number, scale: number): void;

declare function SetPedFacialDecoration(ped: number, collection: string | number, overlay: string | number): void;

declare function SetPedFiringPattern(ped: number, patternHash: string | number): void;

declare function SetPedFleeAttributes(ped: number, attributes: number, p2: boolean): void;

declare function SetPedGadget(ped: number, gadgetHash: string | number, p2: boolean): void;

declare function SetPedGeneratesDeadBodyEvents(ped: number, toggle: boolean): void;

declare function SetPedGestureGroup(ped: number, animGroupGesture: string): void;

declare function SetPedGetOutUpsideDownVehicle(ped: number, toggle: boolean): void;

declare function SetPedGravity(ped: number, toggle: boolean): void;

declare function SetPedGroupMemberPassengerIndex(ped: number, index: number): void;

declare function SetPedHairColor(ped: number, colorID: number, highlightColorID: number): void;

declare function SetPedHeadBlendData(ped: number, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;

declare function SetPedHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;

declare function SetPedHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;

declare function SetPedHearingRange(ped: number, value: number): void;

declare function SetPedHelmet(ped: number, canWearHelmet: boolean): void;

declare function SetPedHelmetFlag(ped: number, helmetFlag: number): void;

declare function SetPedHelmetPropIndex(ped: number, propIndex: number): void;

declare function SetPedHelmetTextureIndex(ped: number, textureIndex: number): void;

declare function SetPedIdRange(ped: number, value: number): void;

declare function SetPedInVehicleContext(ped: number, context: string | number): void;

declare function SetPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: string | number): void;

declare function SetPedInfiniteAmmoClip(ped: number, toggle: boolean): void;

declare function SetPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

declare function SetPedIsDrunk(ped: number, toggle: boolean): void;

declare function SetPedKeepTask(ped: number, toggle: boolean): void;

declare function SetPedLegIkMode(ped: number, mode: number): void;

declare function SetPedLodMultiplier(ped: number, multiplier: number): void;

declare function SetPedMaxHealth(ped: number, value: number): void;

declare function SetPedMaxMoveBlendRatio(ped: number, value: number): void;

declare function SetPedMaxTimeInWater(ped: number, value: number): void;

declare function SetPedMaxTimeUnderwater(ped: number, value: number): void;

declare function SetPedMinGroundTimeForStungun(ped: number, ms: number): void;

declare function SetPedMinMoveBlendRatio(ped: number, value: number): void;

declare function SetPedModelIsSuppressed(ped: number, toggle: boolean): void;

declare function SetPedMoney(ped: number, amount: number): void;

declare function SetPedMotionBlur(ped: number, toggle: boolean): void;

declare function SetPedMoveAnimsBlendOut(ped: number): void;

declare function SetPedMoveRateOverride(ped: number, value: number): void;

declare function SetPedMovementClipset(ped: number, clipSet: string, p2: number): void;

declare function SetPedNameDebug(ped: number, name: string): void;

declare function SetPedNeverLeavesGroup(ped: number, toggle: boolean): void;

declare function SetPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

declare function SetPedParachuteTintIndex(ped: number, tintIndex: number): void;

declare function SetPedPathAvoidFire(ped: number, avoidFire: boolean): void;

declare function SetPedPathCanDropFromHeight(ped: number, Toggle: boolean): void;

declare function SetPedPathCanUseClimbovers(ped: number, Toggle: boolean): number;

declare function SetPedPathCanUseLadders(ped: number, Toggle: boolean): number;

declare function SetPedPathPreferToAvoidWater(ped: number, avoidWater: boolean): void;

declare function SetPedPathsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean): void;

declare function SetPedPathsWidthPlant(ped: number, mayEnterWater: boolean): void;

declare function SetPedPinnedDown(ped: number, pinned: boolean, i: number): number;

declare function SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: number, toggle: boolean): void;

declare function SetPedPopulationBudget(p0: number): void;

declare function SetPedPreferredCoverSet(ped: number, itemSet: number): void;

declare function SetPedPrimaryLookat(ped: number, lookAt: number): void;

declare function SetPedPropIndex(ped: number, componentId: number, drawableId: number, TextureId: number, attach: boolean): void;

declare function SetPedRagdollBlockingFlags(ped: number, flags: number): void;

declare function SetPedRagdollForceFall(ped: number): number;

declare function SetPedRagdollOnCollision(ped: number, toggle: boolean): void;

declare function SetPedRandomComponentVariation(ped: number, p1: boolean): void;

declare function SetPedRandomProps(ped: number): void;

declare function SetPedRelationshipGroupDefaultHash(ped: number, hash: string | number): void;

declare function SetPedRelationshipGroupHash(ped: number, hash: string | number): void;

declare function SetPedReserveParachuteTintIndex(ped: number, p1: number): void;

declare function SetPedResetFlag(ped: number, flagId: number, doReset: boolean): void;

declare function SetPedSeeingRange(ped: number, value: number): void;

declare function SetPedShootRate(ped: number, shootRate: number): void;

declare function SetPedShootsAtCoord(ped: number, x: number, y: number, z: number, toggle: boolean): void;

declare function SetPedSphereDefensiveArea(ped: number, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;

declare function SetPedStayInVehicleWhenJacked(ped: number, toggle: boolean): void;

declare function SetPedStealthMovement(ped: number, p1: boolean, action: string): void;

declare function SetPedSteersAroundObjects(ped: number, toggle: boolean): void;

declare function SetPedSteersAroundPeds(ped: number, toggle: boolean): void;

declare function SetPedSteersAroundVehicles(ped: number, toggle: boolean): void;

declare function SetPedStrafeClipset(ped: number, clipSet: string): void;

declare function SetPedSuffersCriticalHits(ped: number, toggle: boolean): void;

declare function SetPedSweat(ped: number, sweat: number): void;

declare function SetPedTargetLossResponse(ped: number, responseType: number): void;

declare function SetPedTargettableVehicleDestroy(vehicle: number, vehicleComponent: number, destroyType: number): void;

declare function SetPedToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;

declare function SetPedToLoadCover(ped: number, toggle: boolean): void;

declare function SetPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): number;

declare function SetPedToRagdollWithFall(ped: number, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): number;

declare function SetPedUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;

declare function SetPedVisualFieldCenterAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMaxAngle(ped: number, value: number): void;

declare function SetPedVisualFieldMaxElevationAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMinAngle(ped: number, value: number): void;

declare function SetPedVisualFieldMinElevationAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldPeripheralRange(ped: number, range: number): void;

declare function SetPedWaypointRouteOffset(p0: number, p1: number, p2: number, p3: number): number;

declare function SetPedWeaponMovementClipset(ped: number, clipSet: string): void;

declare function SetPedWeaponTintIndex(ped: number, weaponHash: string | number, tintIndex: number): void;

declare function SetPedWetnessEnabledThisFrame(ped: number): void;

declare function SetPedWetnessHeight(ped: number, height: number): void;

declare function SetPhoneLean(Toggle: boolean): void;

declare function SetPickupRegenerationTime(p0: number, p1: number): void;

declare function SetPlaneMinHeightAboveGround(plane: number, height: number): void;

declare function SetPlaybackSpeed(p0: number, speed: number): number;

declare function SetPlaybackToUseAi(vehicle: number, flag: number): void;

declare function SetPlaybackToUseAiTryToRevertBackLater(p0: number, p1: number, p2: number, p3: boolean): void;

declare function SetPlayerAngry(playerPed: number, disabled: boolean): void;

declare function SetPlayerBlipPositionThisFrame(x: number, y: number): void;

declare function SetPlayerCanBeHassledByGangs(player: number, toggle: boolean): void;

declare function SetPlayerCanDoDriveBy(player: number, toggle: boolean): void;

declare function SetPlayerCanLeaveParachuteSmokeTrail(player: number, enabled: boolean): void;

declare function SetPlayerCanUseCover(player: number, toggle: boolean): number;

declare function SetPlayerCashChange(cash: number, bank: number): void;

declare function SetPlayerClothLockCounter(value: number): void;

declare function SetPlayerClothPackageIndex(index: number): void;

declare function SetPlayerClothPinFrames(player: number, toggle: boolean): void;

declare function SetPlayerControl(player: number, toggle: boolean, possiblyFlags: number): void;

declare function SetPlayerForceSkipAimIntro(player: number, toggle: boolean): void;

declare function SetPlayerForcedAim(player: number, toggle: boolean): void;

declare function SetPlayerForcedZoom(player: number, toggle: boolean): void;

declare function SetPlayerHasReserveParachute(player: number): void;

declare function SetPlayerHealthRechargeMultiplier(player: number, regenRate: number): void;

declare function SetPlayerInvertedUp(): number;

declare function SetPlayerInvincible(player: number, toggle: boolean): void;

declare function SetPlayerInvisibleLocally(player: number, toggle: boolean): void;

declare function SetPlayerLockon(player: number, toggle: boolean): void;

declare function SetPlayerLockonRangeOverride(player: number, range: number): void;

declare function SetPlayerMaxArmour(player: number, value: number): void;

declare function SetPlayerMayNotEnterAnyVehicle(player: number): void;

declare function SetPlayerMayOnlyEnterThisVehicle(player: number, vehicle: number): void;

declare function SetPlayerMeleeWeaponDamageModifier(player: number, modifier: number): void;

declare function SetPlayerMeleeWeaponDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerModel(player: number, model: string | number): void;

declare function SetPlayerNoiseMultiplier(player: number, multiplier: number): void;

declare function SetPlayerParachuteModelOverride(player: number, model: string | number): void;

declare function SetPlayerParachutePackModelOverride(player: number, model: string | number): void;

declare function SetPlayerParachutePackTintIndex(player: number, tintIndex: number): void;

declare function SetPlayerParachuteSmokeTrailColor(player: number, r: number, g: number, b: number): void;

declare function SetPlayerParachuteTintIndex(player: number, tintIndex: number): void;

declare function SetPlayerParachuteVariationOverride(player: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetPlayerReserveParachuteTintIndex(player: number, index: number): void;

declare function SetPlayerResetFlagPreferRearSeats(player: number, flags: number): void;

declare function SetPlayerSimulateAiming(player: number, toggle: boolean): void;

declare function SetPlayerSneakingNoiseMultiplier(player: number, multiplier: number): void;

declare function SetPlayerSprint(player: number, toggle: boolean): void;

declare function SetPlayerStealthPerceptionModifier(player: number, value: number): void;

declare function SetPlayerSwitchOutro(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

declare function SetPlayerTargetingMode(targetMode: number): void;

declare function SetPlayerTeam(player: number, team: number): void;

declare function SetPlayerVehicleDamageModifier(player: number, damageAmount: number): void;

declare function SetPlayerVehicleDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerVisibleLocally(player: number, toggle: boolean): void;

declare function SetPlayerWantedCentrePosition(player: number, p2: boolean, p3: boolean): number[];

declare function SetPlayerWantedLevel(player: number, wantedLevel: number, disableNoMission: boolean): void;

declare function SetPlayerWantedLevelNoDrop(player: number, wantedLevel: number, p2: boolean): void;

declare function SetPlayerWantedLevelNow(player: number, p1: boolean): void;

declare function SetPlayerWeaponDamageModifier(player: number, damageAmount: number): void;

declare function SetPlayerWeaponDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;

declare function SetPlayersLastVehicle(vehicle: number): number;

declare function SetPoliceIgnorePlayer(player: number, toggle: boolean): void;

declare function SetPoliceRadarBlips(toggle: boolean): void;

declare function SetRadarAsExteriorThisFrame(): void;

declare function SetRadarAsInteriorThisFrame(interior: string | number, x: number, y: number, z: number, zoom: number): void;

declare function SetRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;

declare function SetRadarZoom(zoomLevel: number): void;

declare function SetRadarZoomLevelThisFrame(zoomLevel: number): void;

declare function SetRadioAutoUnfreeze(toggle: boolean): void;

declare function SetRadioToStationIndex(radioStation: number): void;

declare function SetRadioToStationName(stationName: string): void;

declare function SetRadioTrack(radioStation: string, radioTrack: string): void;

declare function SetRainFxIntensity(intensity: number): void;

declare function SetRampVehicleReceivesRampDamage(vehicle: number, receivesDamage: boolean): void;

declare function SetRandomBoats(toggle: boolean): number;

declare function SetRandomEventFlag(p0: boolean): void;

declare function SetRandomSeed(time: number): void;

declare function SetRandomTrains(toggle: boolean): void;

declare function SetRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetRandomWeatherType(): void;

declare function SetReducePedModelBudget(toggle: boolean): void;

declare function SetReduceVehicleModelBudget(toggle: boolean): void;

declare function SetRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;

declare function SetRenderTrainAsDerailed(train: number, toggle: boolean): void;

declare function SetResourceKvp(key: string, value: string): void;

declare function SetResourceKvpFloat(key: string, value: number): void;

declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
declare function SetRichPresence(presenceState: string): void;

declare function SetRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;

declare function SetRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number, unknown1: boolean, unknown2: boolean, unknown3: boolean): void;

declare function SetRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: boolean, unknown2: boolean): void;

declare function SetRunSprintMultiplierForPlayer(player: number, multiplier: number): void;

declare function SetSaveHouse(p0: number, p1: boolean, p2: boolean): void;

declare function SetSaveMenuActive(unk: boolean): void;

declare function SetScaleformMovieAsNoLongerNeeded(scaleformHandle: number): void;

declare function SetScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;

declare function SetScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;

declare function SetScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;

declare function SetScenarioPedsSpawnInSphereArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetScenarioPedsToBeReturnedByNextCommand(value: boolean): void;

declare function SetScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;

declare function SetScreenDrawPosition(x: number, y: number): void;

declare function SetScriptAsNoLongerNeeded(scriptName: string): void;

declare function SetScriptVehicleGenerator(vehicleGenerator: number, enabled: boolean): void;

declare function SetScriptWithNameHashAsNoLongerNeeded(scriptHash: string | number): void;

declare function SetScriptedAnimSeatOffset(ped: number, p1: number): void;

declare function SetScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;

declare function SetSeethrough(toggle: boolean): void;

declare function SetSequenceToRepeat(taskSequence: number, repeat: boolean): void;

declare function SetSirenWithNoDriver(vehicle: number, toggle: boolean): void;

declare function SetSnakeoilForEntry(name: string, path: string, data: string): void;

declare function SetSomeVehicleDensityMultiplierThisFrame(value: number): void;

declare function SetSpecialAbilityMultiplier(multiplier: number): void;

declare function SetSrlTime(p0: number): void;

declare function SetStateOfClosestDoorOfType(_type: string | number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;

declare function SetStaticEmitterEnabled(emitterName: string, toggle: boolean): void;

declare function SetStoreEnabled(toggle: boolean): void;

declare function SetStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;

declare function SetStreaming(toggle: boolean): void;

declare function SetSuperJumpThisFrame(player: number): number;

declare function SetSwimMultiplierForPlayer(player: number, multiplier: number): void;

declare function SetSynchronizedAudioEventPositionThisFrame(p0: string, p1: number): void;

declare function SetSynchronizedSceneLooped(sceneID: number, toggle: boolean): void;

declare function SetSynchronizedSceneOcclusionPortal(sceneID: number, p1: boolean): void;

declare function SetSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;

declare function SetSynchronizedScenePhase(sceneID: number, phase: number): void;

declare function SetSynchronizedSceneRate(sceneID: number, rate: number): void;

declare function SetTaskVehicleChaseBehaviorFlag(ped: number, flag: number, _set: boolean): void;

declare function SetTaskVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;

declare function SetTaxiLights(vehicle: number, state: boolean): void;

declare function SetTeamPickupObject(object: number, p1: number, p2: boolean): void;

declare function SetTextCentre(align: boolean): void;

declare function SetTextChatEnabled(enabled: boolean): number;

declare function SetTextChatUnk(p0: boolean): void;

declare function SetTextColour(red: number, green: number, blue: number, alpha: number): void;

declare function SetTextDropShadow(): void;

declare function SetTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;

declare function SetTextEdge(p0: number, r: number, g: number, b: number, a: number): void;

declare function SetTextFont(fontType: number): void;

declare function SetTextJustification(justifyType: number): void;

declare function SetTextLeading(p0: boolean): void;

declare function SetTextOutline(): void;

declare function SetTextProportional(p0: boolean): void;

declare function SetTextRenderId(renderId: number): void;

declare function SetTextRightJustify(toggle: boolean): void;

declare function SetTextScale(p0: number, size: number): void;

declare function SetTextWrap(start: number, end: number): void;

declare function SetThisScriptCanBePaused(toggle: boolean): void;

declare function SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;

declare function SetTimeExclusiveDisplayTexture(p0: number, p1: boolean): void;

declare function SetTimeIdleDrop(p0: boolean, p1: boolean): void;

declare function SetTimeScale(time: number): void;

declare function SetTimecycleModifier(modifierName: string): void;

declare function SetTimecycleModifierStrength(strength: number): void;

declare function SetTowTruckCraneHeight(towTruck: number, height: number): void;

declare function SetTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): number;

declare function SetTrainCruiseSpeed(train: number, speed: number): number;

declare function SetTrainSpeed(train: number, speed: number): number;

declare function SetTransitionTimecycleModifier(modifierName: string, transition: number): void;

declare function SetTvAudioFrontend(toggle: boolean): void;

declare function SetTvChannel(channel: number): void;

declare function SetTvVolume(volume: number): void;

declare function SetUnkMapFlag(flag: number): void;

declare function SetUseHiDof(): void;

declare function SetUserRadioControlEnabled(toggle: boolean): void;

declare function SetUseridsUihidden(p0: number, p1: number): number;

declare function SetVariableOnSound(soundId: number, p2: number): number;

declare function SetVariableOnStream(p0: string, p1: number): void;

declare function SetVehRadioStation(vehicle: number, radioStation: string): void;

declare function SetVehicleAlarm(vehicle: number, state: boolean): void;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

declare function SetVehicleAllowNoPassengersLockon(veh: number, toggle: boolean): void;

declare function SetVehicleAsNoLongerNeeded(vehicle: number): void;

declare function SetVehicleAudio(vehicle: number, audioName: string): void;

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 */
declare function SetVehicleAutoRepairDisabled(vehicle: number, value: boolean): void;

declare function SetVehicleAutomaticallyAttaches(vehicle: number, p1: number, p2: number): number;

declare function SetVehicleBodyHealth(vehicle: number, value: number): void;

declare function SetVehicleBoostActive(vehicle: number, Toggle: boolean): void;

declare function SetVehicleBrakeLights(vehicle: number, toggle: boolean): void;

declare function SetVehicleBurnout(vehicle: number, toggle: boolean): void;

declare function SetVehicleCanBeTargetted(vehicle: number, state: boolean): void;

declare function SetVehicleCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;

declare function SetVehicleCanBeVisiblyDamaged(vehicle: number, state: boolean): void;

declare function SetVehicleCanBreak(vehicle: number, toggle: boolean): void;

declare function SetVehicleCeilingHeight(vehicle: number, p1: number): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

declare function SetVehicleColourCombination(vehicle: number, colorCombination: number): void;

declare function SetVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): void;

declare function SetVehicleCreatesMoneyPickupsWhenExploded(vehicle: number, toggle: boolean): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

declare function SetVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void;

declare function SetVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void;

declare function SetVehicleDamage(vehicle: number, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p6: boolean): void;

declare function SetVehicleDashboardColour(vehicle: number, color: number): void;

declare function SetVehicleDeformationFixed(vehicle: number): void;

declare function SetVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

declare function SetVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;

declare function SetVehicleDoorCanBreak(vehicle: number, doorIndex: number, isBreakable: boolean): void;

declare function SetVehicleDoorControl(vehicle: number, doorIndex: number, speed: number, angle: number): void;

declare function SetVehicleDoorLatched(vehicle: number, doorIndex: number, p2: boolean, p3: boolean, p4: boolean): void;

declare function SetVehicleDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void;

declare function SetVehicleDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void;

declare function SetVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void;

declare function SetVehicleDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForPlayer(vehicle: number, player: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;

declare function SetVehicleDoorsShut(vehicle: number, closeInstantly: boolean): void;

declare function SetVehicleEngineCanDegrade(vehicle: number, toggle: boolean): void;

declare function SetVehicleEngineHealth(vehicle: number, health: number): void;

declare function SetVehicleEngineOn(vehicle: number, value: boolean, instantly: boolean, otherwise: boolean): void;

declare function SetVehicleEnginePowerMultiplier(vehicle: number, value: number): void;

declare function SetVehicleEngineTemperature(vehicle: number, temperature: number): void;

declare function SetVehicleEngineTorqueMultiplier(vehicle: number, value: number): void;

declare function SetVehicleEnveffScale(vehicle: number, fade: number): void;

declare function SetVehicleExclusiveDriver(vehicle: number, p1: boolean): void;

declare function SetVehicleExclusiveDriver_2(vehicle: number, ped: number, p2: number): void;

declare function SetVehicleExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;

declare function SetVehicleExtra(vehicle: number, extraId: number, toggle: boolean): void;

declare function SetVehicleExtraColours(vehicle: number, pearlescentColor: number, wheelColor: number): void;

declare function SetVehicleFixed(vehicle: number): void;

declare function SetVehicleForwardSpeed(vehicle: number, speed: number): void;

declare function SetVehicleFrictionOverride(vehicle: number, friction: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

declare function SetVehicleFullbeam(vehicle: number, toggle: boolean): void;

declare function SetVehicleGravity(vehicle: number, toggle: boolean): void;

declare function SetVehicleGravityAmount(vehicle: number, gravity: number): void;

declare function SetVehicleHalt(vehicle: number, distance: number, killEngine: number, unknown: boolean): void;

declare function SetVehicleHandbrake(vehicle: number, toggle: boolean): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingField(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): void;

declare function SetVehicleHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;

declare function SetVehicleHasStrongAxles(vehicle: number, toggle: boolean): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

declare function SetVehicleHudSpecialAbilityBarActive(vehicle: number, p1: boolean): void;

declare function SetVehicleIndicatorLights(vehicle: number, turnSignal: number, toggle: boolean): void;

declare function SetVehicleInteriorColour(vehicle: number, color: number): void;

declare function SetVehicleInteriorlight(vehicle: number, toggle: boolean): void;

declare function SetVehicleIsConsideredByPlayer(vehicle: number, toggle: boolean): void;

declare function SetVehicleIsStolen(vehicle: number, isStolen: boolean): number;

declare function SetVehicleIsWanted(vehicle: number, state: boolean): void;

declare function SetVehicleJetEngineOn(vehicle: number, toggle: boolean): void;

declare function SetVehicleLightMultiplier(vehicle: number, multiplier: number): void;

declare function SetVehicleLights(vehicle: number, state: number): void;

declare function SetVehicleLightsMode(vehicle: number, p1: number): void;

declare function SetVehicleLivery(vehicle: number, livery: number): void;

declare function SetVehicleLodMultiplier(vehicle: number, multiplier: number): void;

declare function SetVehicleMod(vehicle: number, modType: number, modIndex: number, customTires: boolean): void;

declare function SetVehicleModColor_1(vehicle: number, paintType: number, color: number, p3: number): void;

declare function SetVehicleModColor_2(vehicle: number, paintType: number, color: number): void;

declare function SetVehicleModKit(vehicle: number, modKit: number): void;

declare function SetVehicleModelIsSuppressed(model: string | number, suppressed: boolean): void;

declare function SetVehicleNameDebug(vehicle: number, name: string): void;

declare function SetVehicleNeedsToBeHotwired(vehicle: number, toggle: boolean): void;

declare function SetVehicleNeonLightEnabled(vehicle: number, index: number, toggle: boolean): void;

declare function SetVehicleNeonLightsColour(vehicle: number, r: number, g: number, b: number): void;

declare function SetVehicleNumberPlateText(vehicle: number, plateText: string): void;

declare function SetVehicleNumberPlateTextIndex(vehicle: number, plateIndex: number): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

declare function SetVehicleOnGroundProperly(vehicle: number): number;

declare function SetVehicleOutOfControl(vehicle: number, killDriver: boolean, explodeOnImpact: boolean): void;

declare function SetVehicleParachuteActive(vehicle: number, active: boolean): void;

declare function SetVehiclePetrolTankHealth(vehicle: number, health: number): void;

declare function SetVehiclePopulationBudget(p0: number): void;

declare function SetVehicleProvidesCover(vehicle: number, toggle: boolean): void;

declare function SetVehicleRadioEnabled(vehicle: number, toggle: boolean): void;

declare function SetVehicleRadioLoud(vehicle: number, toggle: boolean): void;

declare function SetVehicleReduceGrip(vehicle: number, toggle: boolean): void;

declare function SetVehicleRocketBoostActive(vehicle: number, active: boolean): void;

declare function SetVehicleRocketBoostPercentage(vehicle: number, percentage: number): void;

declare function SetVehicleRocketBoostRefillTime(vehicle: number, time: number): void;

declare function SetVehicleRudderBroken(vehicle: number, p1: boolean): void;

declare function SetVehicleSearchlight(heli: number, toggle: boolean, canBeUsedByAI: boolean): void;

declare function SetVehicleShootAtTarget(driver: number, entity: number, xTarget: number, yTarget: number, zTarget: number): void;

declare function SetVehicleSilent(vehicle: number, toggle: boolean): void;

declare function SetVehicleSiren(vehicle: number, toggle: boolean): void;

declare function SetVehicleSteerBias(vehicle: number, value: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

declare function SetVehicleStrong(vehicle: number, toggle: boolean): void;

declare function SetVehicleTimedExplosion(vehicle: number, ped: number, toggle: boolean): void;

declare function SetVehicleTurboPressure(vehicle: number, pressure: number): void;

declare function SetVehicleTyreBurst(vehicle: number, index: number, onRim: boolean, p3: number): void;

declare function SetVehicleTyreFixed(vehicle: number, tyreIndex: number): void;

declare function SetVehicleTyreSmokeColor(vehicle: number, r: number, g: number, b: number): void;

declare function SetVehicleTyresCanBurst(vehicle: number, toggle: boolean): void;

declare function SetVehicleUndriveable(vehicle: number, toggle: boolean): void;

declare function SetVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void;

declare function SetVehicleWheelType(vehicle: number, WheelType: number): void;

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

declare function SetVehicleWheelsCanBreak(vehicle: number, enabled: boolean): number;

declare function SetVehicleWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;

declare function SetVehicleWindowTint(vehicle: number, tint: number): void;

declare function SetWantedLevelDifficulty(player: number, difficulty: number): void;

declare function SetWantedLevelMultiplier(multiplier: number): void;

declare function SetWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: boolean, p4: number, background: boolean): [number, number];

declare function SetWarningMessage_2(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: number, background: boolean): [number, number];

declare function SetWarningMessage_3(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: number, p6: number, p9: boolean): [number, number];

declare function SetWavesIntensity(intensity: number): void;

declare function SetWaypointOff(): void;

declare function SetWeaponAnimationOverride(ped: number, animStyle: string | number): void;

declare function SetWeaponObjectTintIndex(weapon: number, tintIndex: number): void;

declare function SetWeaponSmokegrenadeAssigned(ped: number): number;

declare function SetWeatherTypeNow(weatherType: string): void;

declare function SetWeatherTypeNowPersist(weatherType: string): void;

declare function SetWeatherTypeOverTime(weatherType: string, time: number): void;

declare function SetWeatherTypePersist(weatherType: string): void;

declare function SetWeatherTypeTransition(weatherType1: string | number, weatherType2: string | number, percentWeather2: number): void;

declare function SetWidescreenBorders(p0: boolean, p1: number): number;

declare function SetWidescreenFormat(p0: number): void;

declare function SetWind(speed: number): void;

declare function SetWindDirection(direction: number): void;

declare function SetWindSpeed(speed: number): void;

declare function SetZoneEnabled(zoneId: number, toggle: boolean): void;

declare function Set_2dLayer(layer: number): void;

declare function Settimera(value: number): void;

declare function Settimerb(value: number): void;

declare function ShakeCam(cam: number, _type: string, amplitude: number): void;

declare function ShakeCinematicCam(p0: string, p1: number): void;

declare function ShakeGameplayCam(shakeName: string, intensity: number): void;

declare function ShiftLeft(value: number, bitShift: number): number;

declare function ShiftRight(value: number, bitShift: number): number;

declare function ShootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number): void;

declare function ShowCursorThisFrame(): void;

declare function ShowHeadingIndicatorOnBlip(blip: number, toggle: boolean): void;

declare function ShowHudComponentThisFrame(id: number): void;

declare function ShowLoadingPrompt(busySpinnerType: number): void;

declare function ShowNumberOnBlip(blip: number, _number: number): void;

declare function ShowPedInPauseMenu(toggle: boolean): void;

declare function ShowSocialClubLegalScreen(): void;

declare function ShowWeaponWheel(forcedShow: boolean): void;

declare function ShutdownAndLaunchSinglePlayerGame(): void;

declare function ShutdownCreatorBudget(): void;

declare function ShutdownLoadingScreen(): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

declare function SimulatePlayerInputGait(player: number, amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;

declare function Sin(value: number): number;

declare function SittingTv(scaleform: number): string;

declare function SkipRadioForward(): void;

declare function SkipTimeInPlaybackRecordedVehicle(p0: number, p1: number): void;

declare function SkipToEndAndStopPlaybackRecordedVehicle(p0: number): void;

declare function SkipToNextScriptedConversationLine(): void;

declare function SlideObject(object: number, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): number;

declare function SmashVehicleWindow(vehicle: number, index: number): number;

declare function SoundVehicleHornThisFrame(vehicle: number): void;

declare function SpecialAbilityChargeAbsolute(player: number, p1: number, p2: boolean): void;

declare function SpecialAbilityChargeContinuous(player: number, p2: number): void;

declare function SpecialAbilityChargeLarge(player: number, p1: boolean, p2: boolean): void;

declare function SpecialAbilityChargeMedium(player: number, p1: boolean, p2: boolean): void;

declare function SpecialAbilityChargeNormalized(player: number, normalizedValue: number, p2: boolean): void;

declare function SpecialAbilityChargeSmall(player: number, p1: boolean, p2: boolean): void;

declare function SpecialAbilityDeactivate(player: number): void;

declare function SpecialAbilityDeactivateFast(player: number): void;

declare function SpecialAbilityDepleteMeter(player: number, p1: boolean): void;

declare function SpecialAbilityFillMeter(player: number, p1: boolean): void;

declare function SpecialAbilityLock(playerModel: string | number): void;

declare function SpecialAbilityReset(player: number): void;

declare function SpecialAbilityUnlock(playerModel: string | number): void;

declare function SpecialFrontendEqual(x: number, y: number, z: number): void;

declare function Sqrt(value: number): number;

declare function StartAlarm(alarmName: string, p2: boolean): void;

declare function StartAudioScene(scene: string): number;

declare function StartCutscene(p0: number): void;

declare function StartCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;

declare function StartEntityFire(entity: number): number;

declare function StartFindKvp(prefix: string): number;

declare function StartFiringAmnesty(duration: number): void;

declare function StartNewScript(scriptName: string, stackSize: number): number;

declare function StartNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): [number, number];

declare function StartNewScriptWithNameHash(scriptHash: string | number, stackSize: number): number;

declare function StartNewScriptWithNameHashAndArgs(scriptHash: string | number, argCount: number, stackSize: number): [number, number];

declare function StartParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): number;

declare function StartParticleFxLoopedOnEntity(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxLoopedOnEntityBone(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxLoopedOnEntityBone_2(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxLoopedOnEntity_2(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxLoopedOnPedBone(effectName: string, ped: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxNonLoopedAtCoord_2(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxNonLoopedOnEntity(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

declare function StartParticleFxNonLoopedOnEntity_2(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

declare function StartParticleFxNonLoopedOnPedBone(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

declare function StartParticleFxNonLoopedOnPedBone_2(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

declare function StartPlaybackRecordedVehicle(vehicle: number, p1: number, playback: string, p3: boolean): void;

declare function StartPlaybackRecordedVehicleUsingAi(p0: number, p1: number, p3: number, p4: number): number;

declare function StartPlaybackRecordedVehicleWithFlags(vehicle: number, p1: number, playback: string, p3: number, p4: number, p5: number): void;

declare function StartPlayerSwitch(_from: number, to: number, flags: number, switchType: number): void;

declare function StartPlayerTeleport(player: number, x: number, y: number, z: number, heading: number, p5: boolean, p6: boolean, p7: boolean): void;

declare function StartPreloadedConversation(): void;

declare function StartRecording(mode: number): void;

declare function StartRopeUnwindingFront(rope: number): void;

declare function StartRopeWinding(rope: number): void;

declare function StartSaveArray(p1: number, arrayName: string): number;

declare function StartSaveData(p1: number, p2: boolean): number;

declare function StartSaveStruct(p1: number, structName: string): number;

declare function StartScreenEffect(effectName: string, duration: number, looped: boolean): void;

declare function StartScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

declare function StartScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;

declare function StartScriptPhoneConversation(p0: boolean, p1: boolean): void;

declare function StartShapeTestBound(entity: number, flags1: number, flags2: number): number;

declare function StartShapeTestBoundingBox(entity: number, flags1: number, flags2: number): number;

declare function StartShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: number, p10: number, entity: number, p12: number): number;

declare function StartShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;

declare function StartShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

declare function StartShapeTestRay(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

declare function StartVehicleAlarm(vehicle: number): number;

declare function StartVehicleHorn(vehicle: number, duration: number, mode: string | number, forever: boolean): void;

declare function StatClearSlotForReload(statSlot: number): number;

declare function StatDeleteSlot(p0: number): number;

declare function StatGetBool(statHash: string | number, p2: number): [number, any /* actually bool */];

declare function StatGetBoolMasked(statName: string | number, mask: number, p2: number): number;

declare function StatGetDate(statHash: string | number, p2: number, p3: number): [number, number];

declare function StatGetFloat(statHash: string | number, p2: number): [number, number];

declare function StatGetInt(statHash: string | number, p2: number): [number, number];

declare function StatGetLicensePlate(statName: string | number): string;

declare function StatGetMaskedInt(p0: number, p2: number, p3: number, p4: number): [number, number];

declare function StatGetNumberOfDays(statName: string | number): number;

declare function StatGetNumberOfHours(statName: string | number): number;

declare function StatGetNumberOfMinutes(statName: string | number): number;

declare function StatGetNumberOfSeconds(statName: string | number): number;

declare function StatGetPos(p0: number, p4: number): [number, number, number, number];

declare function StatGetString(statHash: string | number, p1: number): string;

declare function StatGetUserId(p0: number): string;

declare function StatIncrement(statName: string | number, value: number): void;

declare function StatLoad(p0: number): number;

declare function StatLoadPending(p0: number): number;

declare function StatSave(p0: number, p1: boolean, p2: number): number;

declare function StatSavePending(): number;

declare function StatSavePendingOrRequested(): number;

declare function StatSetBool(statName: string | number, value: boolean, save: boolean): number;

declare function StatSetBoolMasked(statName: string | number, value: boolean, mask: number, save: boolean): number;

declare function StatSetCurrentPosixTime(statName: string | number, p1: boolean): number;

declare function StatSetDate(statName: string | number, numFields: number, save: boolean): [number, number];

declare function StatSetFloat(statName: string | number, value: number, save: boolean): number;

declare function StatSetGxtLabel(statName: string | number, value: string, save: boolean): number;

declare function StatSetInt(statName: string | number, value: number, save: boolean): number;

declare function StatSetLicensePlate(statName: string | number, str: string): number;

declare function StatSetMaskedInt(statName: string | number, p1: number, p2: number, p3: number, save: boolean): number;

declare function StatSetPos(statName: string | number, x: number, y: number, z: number, save: boolean): number;

declare function StatSetProfileSetting(profileSetting: number, value: number): void;

declare function StatSetString(statName: string | number, value: string, save: boolean): number;

declare function StatSetUserId(statName: string | number, value: string, save: boolean): number;

declare function StatSlotIsLoaded(p0: number): number;

declare function SteerUnlockBias(vehicle: number, toggle: boolean): void;

declare function StopAlarm(alarmName: string, toggle: boolean): void;

declare function StopAllAlarms(stop: boolean): void;

declare function StopAllGarageActivity(): void;

declare function StopAllScreenEffects(): void;

declare function StopAnimPlayback(ped: number, p1: number, p2: boolean): void;

declare function StopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;

declare function StopAnyPedModelBeingSuppressed(): void;

declare function StopAudioScene(scene: string): void;

declare function StopAudioScenes(): void;

declare function StopCamPointing(cam: number): void;

declare function StopCamShaking(cam: number, p1: boolean): void;

declare function StopCinematicCamShaking(p0: boolean): void;

declare function StopCinematicShot(p0: number): void;

declare function StopCurrentPlayingAmbientSpeech(ped: number): void;

declare function StopCutscene(p0: boolean): void;

declare function StopCutsceneCamShaking(): void;

declare function StopCutsceneImmediately(): void;

declare function StopEntityAnim(entity: number, animation: string, animGroup: string, p3: number): number;

declare function StopEntityFire(entity: number): void;

declare function StopFireInRange(x: number, y: number, z: number, radius: number): void;

declare function StopGameplayCamShaking(p0: boolean): void;

declare function StopGameplayHint(p0: boolean): void;

declare function StopPadShake(p0: number): void;

declare function StopParticleFxLooped(ptfxHandle: number, p1: boolean): void;

declare function StopPedRingtone(ped: number): void;

declare function StopPedSpeaking(ped: number, shaking: boolean): void;

declare function StopPedWeaponFiringWhenDropped(ped: number): void;

declare function StopPlaybackRecordedVehicle(p0: number): void;

declare function StopPlayerSwitch(): void;

declare function StopPlayerTeleport(): void;

declare function StopRecordingAndDiscardClip(): void;

declare function StopRecordingAndSaveClip(): void;

declare function StopRopeUnwindingFront(rope: number): void;

declare function StopRopeWinding(rope: number): void;

declare function StopSaveArray(): void;

declare function StopSaveData(): void;

declare function StopSaveStruct(): void;

declare function StopScreenEffect(effectName: string): void;

declare function StopScriptGlobalShaking(p0: boolean): void;

declare function StopScriptedConversation(p0: boolean): number;

declare function StopSound(soundId: number): void;

declare function StopStream(): void;

declare function StopSynchronizedAudioEvent(p0: number): number;

declare function StopSynchronizedEntityAnim(entity: number, p1: number, p2: boolean): number;

declare function StopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function StringToInt(_string: string, outInteger: number): number;

declare function SuppressAgitationEventsNextFrame(): void;

declare function SuppressShockingEventTypeNextFrame(_type: number): void;

declare function SuppressShockingEventsNextFrame(): void;

declare function SwitchCrimeType(player: number, p1: number): void;

declare function SwitchOutPlayer(ped: number, flags: number, unknown: number): void;

declare function SwitchTrainTrack(intersectionId: number, state: boolean): number;

declare function Tan(p0: number): number;

declare function TaskAchieveHeading(ped: number, heading: number, timeout: number): void;

declare function TaskAimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;

declare function TaskAimGunAtEntity(ped: number, entity: number, duration: number, p3: boolean): void;

declare function TaskAimGunScripted(ped: number, scriptTask: string | number, p2: boolean, p3: boolean): void;

declare function TaskAimGunScriptedWithTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): void;

declare function TaskArrestPed(ped: number, target: number): void;

declare function TaskBoatMission(pedDriver: number, boat: number, p2: number, p3: number, x: number, y: number, z: number, p7: number, maxSpeed: number, drivingStyle: number, p10: number, p11: number): void;

declare function TaskChatToPed(ped: number, target: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function TaskClearDefensiveArea(p0: number): void;

declare function TaskClearLookAt(ped: number): void;

declare function TaskClimb(ped: number, unused: boolean): void;

declare function TaskClimbLadder(ped: number, p1: number): void;

declare function TaskCombatHatedTargetsAroundPed(ped: number, radius: number, p2: number): void;

declare function TaskCombatHatedTargetsAroundPedTimed(p0: number, p1: number, p2: number, p3: number): void;

declare function TaskCombatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;

declare function TaskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void;

declare function TaskCombatPedTimed(p0: number, ped: number, p2: number, p3: number): void;

declare function TaskCower(ped: number, duration: number): void;

declare function TaskDriveBy(driverPed: number, targetPed: number, targetVehicle: number, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: boolean, firingPattern: string | number): void;

declare function TaskEnterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, p5: number, p6: number): void;

declare function TaskEveryoneLeaveVehicle(vehicle: number): void;

declare function TaskExitCover(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskExtendRoute(x: number, y: number, z: number): void;

declare function TaskFlushRoute(): void;

declare function TaskFollowNavMeshToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, unk: number): void;

declare function TaskFollowNavMeshToCoordAdvanced(ped: number, x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;

declare function TaskFollowPointRoute(ped: number, speed: number, unknown: number): void;

declare function TaskFollowToOffsetOfEntity(ped: number, entity: number, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void;

declare function TaskFollowWaypointRecording(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskForceMotionState(ped: number, state: string | number, p2: boolean): void;

declare function TaskGetOffBoat(ped: number, boat: number): void;

declare function TaskGoStraightToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;

declare function TaskGoStraightToCoordRelativeToEntity(entity1: number, entity2: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: number, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: number, aimingFlag: number, firingPattern: string | number): void;

declare function TaskGoToCoordAnyMeans(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number): void;

declare function TaskGoToCoordAnyMeansExtraParams(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number, p9: number, p10: number, p11: number): void;

declare function TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number, p9: number, p10: number, p11: number, p12: number): void;

declare function TaskGoToCoordWhileAimingAtCoord(ped: number, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: number, p13: boolean, firingPattern: string | number): void;

declare function TaskGoToCoordWhileAimingAtEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: number, p11: boolean, p12: number, p13: number): void;

declare function TaskGoToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;

declare function TaskGoToEntityWhileAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: boolean, p11: number): void;

declare function TaskGoToEntityWhileAimingAtEntity(ped: number, entityToWalkTo: number, entityToAimAt: number, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: string | number): void;

declare function TaskGotoEntityAiming(ped: number, target: number, distanceToStopAt: number, StartAimingDist: number): void;

declare function TaskGotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;

declare function TaskGotoEntityOffsetXy(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function TaskGuardAssignedDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function TaskGuardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;

declare function TaskGuardSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

declare function TaskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;

declare function TaskHeliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

declare function TaskHeliMission(pilot: number, vehicle: number, vehicleToFollow: number, pedToFollow: number, posX: number, posY: number, posZ: number, mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number): void;

declare function TaskJump(ped: number, unused: boolean): void;

declare function TaskLeaveAnyVehicle(ped: number, p1: number, p2: number): void;

declare function TaskLeaveVehicle(ped: number, vehicle: number, flags: number): void;

declare function TaskLookAtCoord(entity: number, x: number, y: number, z: number, duration: number, p5: number, p6: number): void;

declare function TaskLookAtEntity(ped: number, lookAt: number, duration: number, unknown1: number, unknown2: number): void;

declare function TaskMoveNetwork(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;

declare function TaskMoveNetworkAdvanced(ped: number, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, animDict: string, flags: number): void;

declare function TaskOpenVehicleDoor(ped: number, vehicle: number, timeOut: number, doorIndex: number, speed: number): void;

declare function TaskParachute(ped: number, p1: boolean): void;

declare function TaskParachuteToTarget(ped: number, x: number, y: number, z: number): void;

declare function TaskPatrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;

declare function TaskPause(ped: number, ms: number): void;

declare function TaskPedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;

declare function TaskPedSlideToCoordHdgRate(ped: number, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;

declare function TaskPerformSequence(ped: number, taskSequence: number): number;

declare function TaskPerformSequenceFromProgress(p0: number, p1: number, p2: number, p3: number): void;

declare function TaskPlaneChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

declare function TaskPlaneLand(pilot: number, plane: number, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;

declare function TaskPlaneMission(pilot: number, plane: number, targetVehicle: number, targetPed: number, destinationX: number, destinationY: number, destinationZ: number, missionType: number, vehicleSpeed: number, p9: number, heading: number, maxAltitude: number, minAltitude: number): void;

declare function TaskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;

declare function TaskPlayAnim(ped: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;

declare function TaskPlayAnimAdvanced(ped: number, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: number, animTime: number, p14: number, p15: number): void;

declare function TaskPlayPhoneGestureAnimation(ped: number, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: boolean, p7: boolean): void;

declare function TaskPutPedDirectlyIntoCover(ped: number, x: number, y: number, z: number, timeout: number, p5: boolean, p6: number, p7: boolean, p8: boolean, p9: number, p10: boolean): void;

declare function TaskPutPedDirectlyIntoMelee(ped: number, meleeTarget: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function TaskRappelFromHeli(ped: number, unused: number): void;

declare function TaskReactAndFleePed(ped: number, fleeTarget: number): void;

declare function TaskReloadWeapon(ped: number, unused: boolean): void;

declare function TaskScriptedAnimation(ped: number, p4: number, p5: number): [number, number, number];

declare function TaskSeekCoverFromPed(ped: number, target: number, duration: number, p3: boolean): void;

declare function TaskSeekCoverFromPos(ped: number, x: number, y: number, z: number, duration: number, p5: boolean): void;

declare function TaskSeekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;

declare function TaskSeekCoverToCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;

declare function TaskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

declare function TaskSetDecisionMaker(p0: number, p1: string | number): void;

declare function TaskSetSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskShockingEventReact(ped: number, eventHandle: number): void;

declare function TaskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: string | number): void;

declare function TaskShootAtEntity(entity: number, target: number, duration: number, firingPattern: string | number): void;

declare function TaskShuffleToNextVehicleSeat(ped: number, vehicle: number): void;

declare function TaskSkyDive(ped: number): void;

declare function TaskSmartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;

declare function TaskSmartFleePed(ped: number, fleeTarget: number, distance: number, fleeTime: number, p4: boolean, p5: boolean): void;

declare function TaskStandGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;

declare function TaskStandStill(ped: number, time: number): void;

declare function TaskStartScenarioAtPosition(ped: number, scenarioName: string, x: number, y: number, z: number, heading: number, duration: number, sittingScenario: boolean, teleport: boolean): void;

declare function TaskStartScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;

declare function TaskStayInCover(ped: number): void;

declare function TaskStealthKill(killer: number, target: number, killType: string | number, p3: number, p4: boolean): number;

declare function TaskStopPhoneGestureAnimation(ped: number): void;

declare function TaskSwapWeapon(ped: number, p1: boolean): void;

declare function TaskSweepAimEntity(ped: number, anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: number, p7: number, p8: number): void;

declare function TaskSweepAimPosition(p0: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): [number, number, number, number];

declare function TaskSynchronizedScene(ped: number, scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: number): void;

declare function TaskThrowProjectile(ped: number, x: number, y: number, z: number): void;

declare function TaskToggleDuck(p0: boolean, p1: boolean): void;

declare function TaskTurnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;

declare function TaskTurnPedToFaceEntity(ped: number, entity: number, duration: number): void;

declare function TaskUseMobilePhone(ped: number, p1: number): void;

declare function TaskUseMobilePhoneTimed(ped: number, duration: number): void;

declare function TaskUseNearestScenarioChainToCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskUseNearestScenarioChainToCoordWarp(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskUseNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;

declare function TaskUseNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;

declare function TaskVehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;

declare function TaskVehicleAimAtPed(ped: number, target: number): void;

declare function TaskVehicleChase(driver: number, targetEnt: number): void;

declare function TaskVehicleDriveToCoord(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, p6: number, vehicleModel: string | number, drivingMode: number, stopRange: number, p10: number): void;

declare function TaskVehicleDriveToCoordLongrange(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;

declare function TaskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;

declare function TaskVehicleEscort(ped: number, vehicle: number, targetVehicle: number, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;

declare function TaskVehicleFollow(driver: number, vehicle: number, targetEntity: number, drivingStyle: number, speed: number, minDistance: number): void;

declare function TaskVehicleFollowWaypointRecording(ped: number, vehicle: number, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number): void;

declare function TaskVehicleGotoNavmesh(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;

declare function TaskVehicleHeliProtect(pilot: number, vehicle: number, entityToFollow: number, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;

declare function TaskVehicleMission(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;

declare function TaskVehicleMissionCoorsTarget(ped: number, vehicle: number, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean): void;

declare function TaskVehicleMissionPedTarget(ped: number, vehicle: number, pedTarget: number, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: boolean): void;

declare function TaskVehiclePark(ped: number, vehicle: number, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;

declare function TaskVehiclePlayAnim(vehicle: number, animation_set: string, animation_name: string): void;

declare function TaskVehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;

declare function TaskVehicleShootAtPed(ped: number, target: number, p2: number): void;

declare function TaskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;

declare function TaskWanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;

declare function TaskWanderStandard(ped: number, p1: number, p2: number): void;

declare function TaskWarpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;

declare function TaskWrithe(ped: number, target: number, time: number, p3: number): void;

declare function TerminateAllScriptsWithThisName(scriptName: string): void;

declare function TerminateThisThread(): void;

declare function TerminateThread(threadId: number): void;

declare function TestProbeAgainstAllWater(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

declare function TestProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): [number, number[]];

declare function TestVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: number, p4: number): number;

declare function TextureDownloadGetName(p0: number): string;

declare function TextureDownloadHasFailed(p0: number): number;

declare function TextureDownloadRelease(p0: number): void;

declare function TextureDownloadRequest(FilePath: string, Name: string, p3: boolean): [number, number];

declare function Timera(): number;

declare function Timerb(): number;

declare function Timestep(): number;

declare function ToFloat(value: number): number;

declare function ToggleStealthRadar(toggle: boolean): void;

declare function ToggleVehicleMod(vehicle: number, modType: number, toggle: boolean): void;

declare function TrackObjectVisibility(p0: number): void;

declare function TrackVehicleVisibility(vehicle: number): void;

declare function TransitionFromBlurred(transitionTime: number): number;

declare function TransitionToBlurred(transitionTime: number): number;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

declare function TriggerMusicEvent(eventName: string): number;

declare function TriggerScriptEvent(p0: boolean, argCount: number, bitset: number): number;

/**
 * The backing function for TriggerServerEvent.
 */
declare function TriggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

declare function UnblockDecisionMakerEvent(name: string | number, _type: number): void;

declare function UncuffPed(ped: number): void;

declare function UnfreezeRadioStation(radioStation: string): void;

declare function UnkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): number;

declare function UnlockMinimapAngle(): void;

declare function UnlockMinimapPosition(): void;

declare function UnlockMissionNewsStory(newsStory: number): void;

declare function UnpausePlaybackRecordedVehicle(p0: number): void;

declare function UnpinInterior(interiorID: number): void;

declare function UnpinRopeVertex(rope: number, vertex: number): number;

declare function UnregisterPedheadshot(ped: number): void;

declare function UnregisterScriptWithAudio(): void;

declare function UpdateNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

declare function UpdateOnscreenKeyboard(): number;

declare function UpdatePedHeadBlendData(ped: number, shapeMix: number, skinMix: number, thirdMix: number): void;

declare function UpdateTaskAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function UpdateTaskHandsUpDuration(ped: number, duration: number): void;

declare function UpdateTaskSweepAimEntity(ped: number, entity: number): void;

declare function UpdateTaskSweepAimPosition(p0: number, p1: number, p2: number, p3: number): void;

declare function UseFreemodeMapBehavior(toggle: boolean): void;

declare function UseParticleFxAssetNextCall(name: string): void;

declare function UsePlayerColourInsteadOfTeamColour(toggle: boolean): void;

declare function UseSirenAsHorn(vehicle: number, toggle: boolean): void;

declare function UseWaypointRecordingAsAssistedMovementRoute(p1: boolean, p2: number, p3: number): number;

declare function UsingMissionCreator(toggle: boolean): void;

declare function UsingNetworkWeapontype(p0: number): number;

declare function Vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function Vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function VehToNet(vehicle: number): number;

declare function VehicleHasLandingGear(vehicle: number): number;

/**
 * parachuteModel = 230075693
 */
declare function VehicleSetCustomParachuteModel(vehicle: number, parachuteModel: string | number): void;

/**
 * colorIndex = 0
 */
declare function VehicleSetCustomParachuteTexture(vehicle: number, colorIndex: number): void;

declare function VehicleWaypointPlaybackOverrideSpeed(p0: number, p1: number): void;

declare function VehicleWaypointPlaybackPause(p0: number): void;

declare function VehicleWaypointPlaybackResume(p0: number): void;

declare function VehicleWaypointPlaybackUseDefaultSpeed(p0: number): void;

declare function Vmag(x: number, y: number, z: number): number;

declare function Vmag2(x: number, y: number, z: number): number;

declare function Wait(ms: number): void;

declare function WasCounterActivated(vehicle: number, p1: number): number;

declare function WasCutsceneSkipped(): number;

/**
 * Returns whether or not the currently executing event was canceled. See https://wiki.fivem.net/wiki/WasEventCanceled
 * @return A boolean.
 */
declare function WasEventCanceled(): number;

declare function WasPedKilledByStealth(ped: number): number;

declare function WasPedKilledByTakedown(ped: number): number;

declare function WasPedSkeletonUpdated(ped: number): number;

declare function WashDecalsFromVehicle(vehicle: number, p1: number): void;

declare function WashDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function WaypointPlaybackGetIsPaused(p0: number): number;

declare function WaypointPlaybackOverrideSpeed(p0: number, p1: number, p2: boolean): void;

declare function WaypointPlaybackPause(p0: number, p1: boolean, p2: boolean): void;

declare function WaypointPlaybackResume(p0: number, p1: boolean, p2: number, p3: number): void;

declare function WaypointPlaybackStartAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function WaypointPlaybackStartAimingAtPed(p0: number, p1: number, p2: boolean): void;

declare function WaypointPlaybackStartShootingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number): void;

declare function WaypointPlaybackStopAimingOrShooting(p0: number): void;

declare function WaypointPlaybackUseDefaultSpeed(p0: number): void;

declare function WaypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number, point: number): number;

declare function WaypointRecordingGetCoord(name: string, point: number): [number, number[]];

declare function WaypointRecordingGetNumPoints(name: string, points: number): number;

declare function WaypointRecordingGetSpeedAtPoint(name: string, point: number): number;

declare function WouldEntityBeOccluded(entityModelHash: string | number, x: number, y: number, z: number, p4: boolean): number;

