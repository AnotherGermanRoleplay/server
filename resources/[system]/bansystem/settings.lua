settings = {
	--Shows Debug ouput in server console
	['showDebugOutput'] = true,
	
	--[[
		~id~ = db entry id
		~name~ = banned player name
		~ip~ = banned player ip
		~steam~ = banned player steamid
		~license~ = banned player licence
		~until~ = time until player can play again
		~reason~ = reason message player got banned for
		~time~ = time when player was banned
		~admin~ = name of admin who banned player
		~adminSteam~ = steamid of admin
		~adminLicense~ = license of admin
	]]
	['playerKickedReason'] = "You're banned until (~until~) by ~admin~ for: ~reason~",
	['time'] = "o'clock",
	['noReason'] = "Kein Bangrund angegeben",
	['banerror_tomanyfound'] = "Zu viele Spieler gefunden!",
	['banerror_noPlayerfound'] = "Keinen Spieler gefunden!",
	['banerror_numargs'] = "Mindestens Name oder ID müssen eingegeben werden!",
	['banerror_timeNotNumber'] = "Die Dauer des Banns muss als Zahl angegeben werden.",
	['banerror_wrongBannTimeType'] = "Unbekannte Zeitangabe (Gültig: y, d, h, m, u)",
	['banerror_noPermission'] = "/ban is nur für Admins verfügbar"
}