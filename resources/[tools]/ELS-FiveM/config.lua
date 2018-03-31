vcf_files = {
	"police3.xml",
	"ambulance.xml",
	"lspd.xml",
	"lspd2.xml",
	"lspd3.xml",
	"lspd4.xml",
	"lspd5.xml",
	"lspd7.xml",
	"lspd8.xml",
	"lspd9.xml",
	"lspd10.xml",
	"lspd11.xml",
	"lspd12.xml",
	"POLICE2.xml",
	"POLICE.xml",
	"SHERIFF.xml",
	"SHERIFF2.xml",
	"police4.xml",
	"police6.xml",
	"police8.xml",
	"PRANGER.xml",
	"PBUS.xml",
	"POLICE7.xml",
	"FBI2.xml"
}

pattern_files = {
	"WIGWAG.xml",
	"WIGWAG3.xml",
	"FAST.xml",
	"COMPLEX.xml",
	"BACKFOURTH.xml",
	"BACKFOURTH2.xml",
	"T_ADVIS_RIGHT_LEFT.xml",
	"T_ADVIS_LEFT_RIGHT.xml",
	"T_ADVIS_BACKFOURTH.xml",
	"WIGWAG5.xml"
}

modelsWithTrafficAdvisor = {
	"police3",
	"ambulance",
	"lspd",
	"lspd2",
	"lspd3",
	"lspd4",
	"lspd5",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd10",
	"lspd11",
	"lspd12",
	"police2",
	"police6",
	"police4",
	"police8",
	"POLICE",
	"SHERIFF",
	"SHERIFF2",
	"PRANGER",
	"PBUS",
	"POLICE7",
	"fbi2"
}

modelsWithFireSiren =
{

}


modelsWithAmbWarnSiren = {
	"police3",
	"police4",
	"PRANGER",
	"PBUS",
	"ambulance"
}

stagethreewithsiren = false
playButtonPressSounds = true
vehicleStageThreeAdvisor = {
	"police3",
	"ambulance",
	"lspd",
	"lspd2",
	"lspd3",
	"lspd4",
	"lspd5",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd10",
	"lspd11",
	"lspd12",
	"police2",
	"police4",
	"POLICE7",
	"police8",
	"POLICE",
	"police6",
	"SHERIFF",
	"SHERIFF2",
	"PRANGER",
	"PBUS",
	"fbi2"
}


vehicleSyncDistance = 150
envirementLightBrightness = 0.2

build = "master"

shared = {
	horn = 86,
}

keyboard = {
	modifyKey = 132,
	stageChange = 85,
	guiKey = 243,
	takedown = 245,
	siren = {
		tone_one = 157,
		tone_two = 158,
		tone_three = 160,
		dual_toggle = 164,
		dual_one = 165,
		dual_two = 159,
		dual_three = 161,
	},
	pattern = {
		primary = 246,
		secondary = 303,
		advisor = 182,
	},
}

controller = {
	modifyKey = 73,
	stageChange = 80,
	takedown = 74,
	siren = {
		tone_one = 173,
		tone_two = 85,
		tone_three = 172,
	},
}