Config = {}

Config.Animations = {
	
	{
		name  = 'festlich',
		label = 'Festlich',
		items = {
	    {label = "Musik abspielen", type = "scenario", data = {anim = "WORLD_HUMAN_MUSICIAN"}},
	    {label = "Dj", type = "anim", data = {lib = "anim@mp_player_intcelebrationmale@dj", anim = "dj"}},
	    {label = "Bier trinken", type = "scenario", data = {anim = "WORLD_HUMAN_DRINKING"}},
	    {label = "Bier im Zik", type = "scenario", data = {anim = "WORLD_HUMAN_PARTYING"}},
	    {label = "Luftgitarre", type = "anim", data = {lib = "anim@mp_player_intcelebrationmale@air_guitar", anim = "air_guitar"}},
	    {label = "Luft Fetzen", type = "anim", data = {lib = "anim@mp_player_intcelebrationfemale@air_shagging", anim = "air_shagging"}},
	    {label = "Rock'n'roll", type = "anim", data = {lib = "mp_player_int_upperrock", anim = "mp_player_int_rock"}},
	    -- {label = "Fumer un joint", type = "scenario", data = {anim = "WORLD_HUMAN_SMOKING_POT"}},
	    {label = "Vor Ort getrunken", type = "anim", data = {lib = "amb@world_human_bum_standing@drunk@idle_a", anim = "idle_a"}},
	    {label = "Erbrechen im Auto", type = "anim", data = {lib = "oddjobs@taxi@tie", anim = "vomit_outside"}},
		}
	},

	{
		name  = 'greetings',
		label = 'Begrüßungen',
		items = {
	    {label = "Grüße", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_hello"}},
	    {label = "Gebt euch die Hände.", type = "anim", data = {lib = "mp_common", anim = "givetake1_a"}},
	    {label = "Check", type = "anim", data = {lib = "mp_ped_interaction", anim = "handshake_guy_a"}},
	    {label = "Hallo Bandit", type = "anim", data = {lib = "mp_ped_interaction", anim = "hugs_guy_a"}},
	    {label = "Militärischer Gruß", type = "anim", data = {lib = "mp_player_int_uppersalute", anim = "mp_player_int_salute"}},
		}
	},

	{
		name  = 'arbeiten',
		label = 'Arbeit',
		items = {
	    {label = "Verdächtiger: Übergabe an die Polizei", type = "anim", data = {lib = "random@arrests@busted", anim = "idle_c"}},
	    {label = "Fischer", type = "scenario", data = {anim = "world_human_stand_fishing"}},
	    {label = "Polizei: Ermittlungen", type = "anim", data = {lib = "amb@code_human_police_investigate@idle_b", anim = "idle_f"}},
	    {label = "Polizei: Funkgespräch", type = "anim", data = {lib = "random@arrests", anim = "generic_radio_chatter"}},
	    {label = "Polizei: Verkehr", type = "scenario", data = {anim = "WORLD_HUMAN_CAR_PARK_ATTENDANT"}},
	    {label = "Schriftart: Fernglas", type = "scenario", data = {anim = "WORLD_HUMAN_BINOCULARS"}},
	    {label = "Landwirtschaft: Ernte", type = "scenario", data = {anim = "world_human_gardener_plant"}},
	    {label = "Reparatur Unter-dem-Auto : Unter-Fahrzeug-Reparatur", type = "scenario", data = {anim = "world_human_vehicle_mechanic"}},
	    {label = "Reparatur :Reparatur des Motors", type = "anim", data = {lib = "mini@repair", anim = "fixing_a_ped"}},
	    {label = "Arzt: beobachten", type = "scenario", data = {anim = "CODE_HUMAN_MEDIC_KNEEL"}},
	    {label = "Taxi: Gespräch mit dem Kunden", type = "anim", data = {lib = "oddjobs@taxi@driver", anim = "leanover_idle"}},
	    {label = "Taxi: Rechnung ausstellen", type = "anim", data = {lib = "oddjobs@taxi@cyi", anim = "std_hand_off_ps_passenger"}},
	    {label = "Lebensmittelhändler: geben Lebensmittel", type = "anim", data = {lib = "mp_am_hold_up", anim = "purchase_beerbox_shopkeeper"}},
	    {label = "Barmixer: einen Schuss abgeben", type = "anim", data = {lib = "mini@drinking", anim = "shots_barman_b"}},
	    {label = "Journalist: Machen Sie ein Foto", type = "scenario", data = {anim = "WORLD_HUMAN_PAPARAZZI"}},
	    {label = "Alle Gewerke: Notizen machen", type = "scenario", data = {anim = "WORLD_HUMAN_CLIPBOARD"}},
	    {label = "Alle Gewerke: Hammerschlag", type = "scenario", data = {anim = "WORLD_HUMAN_HAMMERING"}},
	    {label = "Bum: Schlafen im Manhandle", type = "scenario", data = {anim = "WORLD_HUMAN_BUM_FREEWAY"}},
	    {label = "Bum: Herstellung der Statue", type = "scenario", data = {anim = "WORLD_HUMAN_HUMAN_STATUE"}},
		}
	},

	{
		name  = 'Humor',
		label = 'Stimmungen',
		items = {
	    {label = "Gratuliere", type = "scenario", data = {anim = "WORLD_HUMAN_CHEERING"}},
	    {label = "Super", type = "anim", data = {lib = "mp_action", anim = "thanks_male_06"}},
	    {label = "Wissen Sie, Sie haben", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_point"}},
	    {label = "Komm schon.", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_come_here_soft"}}, 
	    {label = "Was willst du?", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_bring_it_on"}},
	    {label = "Zu mir", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_me"}},
	    {label = "Ich wusste es, verdammt.", type = "anim", data = {lib = "anim@am_hold_up@male", anim = "shoplift_high"}},
	    {label = "Erschöpft sein", type = "scenario", data = {lib = "amb@world_human_jog_standing@male@idle_b", anim = "idle_d"}},
	    {label = "Ich bin in großen Schwierigkeiten.", type = "scenario", data = {lib = "amb@world_human_bum_standing@depressed@idle_a", anim = "idle_a"}},
	    {label = "Facepalm", type = "anim", data = {lib = "anim@mp_player_intcelebrationmale@face_palm", anim = "face_palm"}},
	    {label = "Beruhige dich. ", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_easy_now"}},
	    {label = "Was habe ich dir getan?", type = "anim", data = {lib = "oddjobs@assassinate@multi@", anim = "react_big_variations_a"}},
	    {label = "Hab Angst davor, Angst zu haben", type = "anim", data = {lib = "amb@code_human_cower_stand@male@react_cowering", anim = "base_right"}},
	    {label = "Kampf ?", type = "anim", data = {lib = "anim@deathmatch_intros@unarmed", anim = "intro_male_unarmed_e"}},
	    {label = "Das ist nicht möglich!", type = "anim", data = {lib = "gestures@m@standing@casual", anim = "gesture_damn"}},
	    {label = "Umarmung", type = "anim", data = {lib = "mp_ped_interaction", anim = "kisses_guy_a"}},
	    {label = "Finger der Ehre", type = "anim", data = {lib = "mp_player_int_upperfinger", anim = "mp_player_int_finger_01_enter"}},
	    {label = "Wichser", type = "anim", data = {lib = "mp_player_int_upperwank", anim = "mp_player_int_wank_01"}},
	    {label = "Kopfschuss", type = "anim", data = {lib = "mp_suicide", anim = "pistol"}},
		}
	},

	{
		name  = 'Sport',
		label = 'Sportarten',
		items = {
	    {label = "Muskeln posen", type = "anim", data = {lib = "amb@world_human_muscle_flex@arms_at_side@base", anim = "base"}},
	    {label = "Gewicht Trainingsstange", type = "anim", data = {lib = "amb@world_human_muscle_free_weights@male@barbell@base", anim = "base"}},
	    {label = "Liegestütze", type = "anim", data = {lib = "amb@world_human_push_ups@male@base", anim = "base"}},
	    {label = "Bauchmuskeln", type = "anim", data = {lib = "amb@world_human_sit_ups@male@base", anim = "base"}},
	    {label = "Yoga machen", type = "anim", data = {lib = "amb@world_human_yoga@male@base", anim = "base_a"}},
		}
	},

	{
		name  = 'Verschiedenes',
		label = 'Diverse',
		items = {
	    {label = "Kaffee trinken", type = "anim", data = {lib = "amb@world_human_aa_coffee@idle_a", anim = "idle_a"}},
	    {label = "Hinsetzen", type = "anim", data = {lib = "anim@heists@prison_heistunfinished_biztarget_idle", anim = "target_idle"}},
	    {label = "Hinsetzen (Bodenebene)", type = "scenario", data = {anim = "WORLD_HUMAN_PICNIC"}},
	    {label = "Warten an der Wand", type = "scenario", data = {anim = "world_human_leaning"}},
	    {label = "Auf dem Rücken liegen", type = "scenario", data = {anim = "WORLD_HUMAN_SUNBATHE_BACK"}},
	    {label = "Auf dem Bauch liegen", type = "scenario", data = {anim = "WORLD_HUMAN_SUNBATHE"}},
	    {label = "Etwas aufräumen", type = "scenario", data = {anim = "world_human_maid_clean"}},
	    {label = "Zubereitung von Lebensmitteln", type = "scenario", data = {anim = "PROP_HUMAN_BBQ"}},
	    {label = "Suche Position", type = "anim", data = {lib = "mini@prostitutes@sexlow_veh", anim = "low_car_bj_to_prop_female"}},
	    {label = "Selfie machen", type = "scenario", data = {anim = "world_human_tourist_mobile"}},
	    {label = "An Tür lauschen", type = "anim", data = {lib = "mini@safe_cracking", anim = "idle_base"}}, 
		}
	},

	{
		name  = 'Porn',
		label = 'FSK 21',
		items = {
	    {label = "Autoblowjob (M)", type = "anim", data = {lib = "oddjobs@towing", anim = "m_blow_job_loop"}},
	    {label = "Autoblowjob (W)", type = "anim", data = {lib = "oddjobs@towing", anim = "f_blow_job_loop"}},
	    {label = "Autosex (M)", type = "anim", data = {lib = "mini@prostitutes@sexlow_veh", anim = "low_car_sex_loop_player"}},
	    {label = "Autosex (W)", type = "anim", data = {lib = "mini@prostitutes@sexlow_veh", anim = "low_car_sex_loop_female"}},
	    {label = "Eier kraulen", type = "anim", data = {lib = "mp_player_int_uppergrab_crotch", anim = "mp_player_int_grab_crotch"}},
	    {label = "Den Charme machen", type = "anim", data = {lib = "mini@strip_club@idles@stripper", anim = "stripper_idle_02"}},
	    {label = "Michto-Pose", type = "scenario", data = {anim = "WORLD_HUMAN_PROSTITUTE_HIGH_CLASS"}},
	    {label = "Brüste posen", type = "anim", data = {lib = "mini@strip_club@backroom@", anim = "stripper_b_backroom_idle_b"}},
	    {label = "Strip Tease 1", type = "anim", data = {lib = "mini@strip_club@lap_dance@ld_girl_a_song_a_p1", anim = "ld_girl_a_song_a_p1_f"}},
	    {label = "Strip Tease 2", type = "anim", data = {lib = "mini@strip_club@private_dance@part2", anim = "priv_dance_p2"}},
	    {label = "Strip Tease am Boden", type = "anim", data = {lib = "mini@strip_club@private_dance@part3", anim = "priv_dance_p3"}},
			}
	},

}