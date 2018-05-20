vcf_files = {
	"ambulance.xml",
	"fbi2.xml",
	"Flatbed.xml",
	"ghispo2.xml",
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
	"police.xml",
	"police2.xml",
	"police3.xml",
	"police4.xml",
	"police5.xml",
	"police6.xml",
	"police7.xml",
	"police8.xml",
	"policeb.xml",
	"policet.xml",
	"PRANGER.xml",
	"SFTSU.xml",
	"sheriff.xml",
	"sheriff2.xml",
	"firetruk.xml",
	"burrito4.xml",
	"utillitruck3.xml"
}

pattern_files = {
	"WIGWAG.xml",
	"WIGWAG2.xml",
	"BACKFOURTH.xml",
	"BACKFOURTH2.xml",
	"COMPLEX.xml",
	"FAST.xml",
	"LEFTRIGHT.xml",
	"LEFTSWEEP.xml",
	"NORWEGIAN.xml",
	"OUTSIDEBURN.xml",
	"RIGHTSWEEP.xml",
	"T_ADVIS_ARRW_LEFT.xml",
	"T_ADVIS_ARRW_LLEFT.xml",
	"T_ADVIS_ARRW_RIGHT.xml",
	"T_ADVIS_ARRW_RRIGHT.xml",
	"T_ADVIS_BACKFOURTH.xml",
	"T_ADVIS_FLASH.xml",
	"T_ADVIS_LEFT_RIGHT.xml",
	"T_ADVIS_RIGHT_LEFT.xml",
	"WIGWAG3.xml",
	"WIGWAG5.xml"
}

modelsWithTrafficAdvisor = {
	"sheriff",
	"sheriff2",
	"pbus",
	"fbi2",
	"sftsu",
	"ghispo2",
	"policet",
	"police",
	"police2",
	"police3",
	"police4",
	"police5",
	"police7",
	"police8",
	"lspd",
	"lspd3",
	"lspd4",
	"lspd6",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd10",
	"lspd11",
	"lspd12",
	"policeb",
	"pranger",
	"firetruk",
	"burrito4",
	"utillitruck3"
}

modelsWithFireSiren =
{
	"firetruk"
}


modelsWithAmbWarnSiren = {
	"lspd11",
	"lspd10",
	"pranger",
	"lspd12",
	"pbus",
	"ambulance"
}

stagethreewithsiren = false
playButtonPressSounds = true
vehicleStageThreeAdvisor = {
	"sheriff",
	"sheriff2",
	"pbus",
	"fbi2",
	"sftsu",
	"ghispo2",
	"ambulance",
	"policet",
	"lspd10",
	"police",
	"police2",
	"police3",
	"police4",
	"police5",
	"police7",
	"police8",
	"lspd",
	"lspd3",
	"lspd4",
	"lspd6",
	"lspd7",
	"lspd8",
	"lspd9",
	"lspd11",
	"lspd12",
	"policeb",
	"pranger",
	"firetruk",
	"burrito4",
	"utillitruck3"
}


vehicleSyncDistance = 150
envirementLightBrightness = 0.6

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
