vcf_files = {
	"police3.xml",
	"ambulance.xml",
	"lspd.xml",
	"lspd2.xml",
	"lspd3.xml",
	"lspd4.xml",
	"lspd5.xml",
	"lspd6.xml",
	"lspd7.xml",
	"lspd8.xml",
	"lspd9.xml",
	"lspd10.xml",
	"lspd11.xml",
	"lspd12.xml",
	"POLICE.xml"
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
	"police",
	"lspd",
	"lspd2",
	"lspd3",
	"lspd4",
	"lspd5",
	"lspd6",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd10",
	"lspd11",
	"lspd12"
}

modelsWithFireSiren =
{

}


modelsWithAmbWarnSiren = {
	"police3",
	"ambulance",
	"police"
}

stagethreewithsiren = false
playButtonPressSounds = true
vehicleStageThreeAdvisor = {
	"police3",
	"ambulance",
	"police",
	"lspd",
	"lspd2",
	"lspd3",
	"lspd4",
	"lspd5",
	"lspd6",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd10",
	"lspd11",
	"lspd12"
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