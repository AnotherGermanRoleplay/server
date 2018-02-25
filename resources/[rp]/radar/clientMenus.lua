local text1 = ""
local text2 = ""

local sub = ""
local subSelected = ""

local askRender = false

local limitationSelected = 0


function mainMenu()

	ped = GetPlayerPed(-1);
	inSubMenu = false
	askRender = false
	--GUIoptions.width = 0.4
	if(lang == "fr") then
		--GUIoptions.width = 0.6
	end
	--GUIoptions.x = 0.9
	--GUIoptions.menu_subtitle = "Categories :"
    ClearMenu()
    OMenu.addButton(text[lang].menuOnOff, "setPower", nil)
    OMenu.addButton(text[lang].menuDeplacementMultiplier, "multiplier",nil)

    OMenu.addButton(text[lang].menuSetLimitation, "setLimitation", nil)
    OMenu.addButton(text[lang].menuSetModelPriority, "addModel", nil)
    OMenu.addButton(text[lang].menuSetPlatePriority, "addPlate", nil)
    OMenu.addButton(text[lang].menuSetOnlyShowSpeed, "onlyShowSpeed", nil)
    OMenu.addButton(text[lang].menuSetOnlyShowModel, "onlyShowModels", nil)
    OMenu.addButton(text[lang].menuSetOnlyShowPlate, "onlyShowPlates", nil)
end


function multiplier()
	GUIoptions.menu_subtitle = text[lang].menuDeplacementMultiplier.." :"
    ClearMenu()
    OMenu.addButton("x1", "setMultiplier", 1)
    OMenu.addButton("x2", "setMultiplier", 2)
    OMenu.addButton("x3", "setMultiplier", 3)
    OMenu.addButton("x4", "setMultiplier", 4)
    OMenu.addButton("x5", "setMultiplier", 5)
    OMenu.addButton("x6", "setMultiplier", 6)
    OMenu.addButton("x7", "setMultiplier", 7)
    OMenu.addButton("x8", "setMultiplier", 8)
    OMenu.addButton("x9", "setMultiplier", 9)
    OMenu.addButton("x10", "setMultiplier", 10)
end


function addModel()
	OMenu.hidden = false
	inSubMenu = true
	ped = GetPlayerPed(-1);
	askRender = true
	--options.menu_subtitle = text[lang].menuSetModelPriority
    ClearMenu()
    OMenu.addButton(text[lang].menuSetLabel, "setModel", nil)
    OMenu.addButton(text[lang].menuValideLabel, "ValiderModel", nil)
    text1 = text[lang].HUDAddModel1
    text2 = text[lang].HUDAddModel2
    sub = "Model : "
    subSelected = 0
end


function addPlate()
	OMenu.hidden = false
	inSubMenu = true
	ped = GetPlayerPed(-1);
	askRender = true
	--options.menu_subtitle = text[lang].menuSetPlatePriority
    ClearMenu()
    OMenu.addButton(text[lang].menuSetLabel, "setModel", nil)
    OMenu.addButton(text[lang].menuValideLabel, "ValiderPlate", nil)
    text1 = text[lang].HUDAddPlate1
    text2 = text[lang].HUDAddPlate2
    sub = "Plate : "
    subSelected = 0
end



function setLimitation()
	OMenu.hidden = false
	inSubMenu = true
	ped = GetPlayerPed(-1);
	askRender = true
	--options.menu_subtitle = text[lang].menuSetLimitation
    ClearMenu()
    OMenu.addButton(text[lang].menuSetLabel, "ChangeLimitation", nil)
    OMenu.addButton(text[lang].menuValideLabel, "ValiderLimitation", nil)
    text1 = text[lang].HUDSetLimitation1
    text2 = text[lang].HUDSetLimitation2
    sub = "Limitation : "
    subSelected = 0
end



function setModel()

	local edmenu = { show = 0, row = 0, input = 0, name = "", inp = 0, cur = 0 }
	local Ed = { id = {}, x = {}, y = {}, x1 = {}, y1 = {}, scale = {}, r = {}, g = {}, b = {}, a = {}, text = {}, font = {}, jus = {} }

	if edmenu.inp > 0 then
		edmenu.show = 2
		edmenu.row = 0
	else
		edmenu.input = 1
		edmenu.row = 1
		DisplayOnscreenKeyboard(false, "FMMC_KEY_TIP8", "", "", "", "", "", 64)
		PlaySound(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", 0, 0, 1)

	end

	local stop = false
	while stop == false do
			Citizen.Wait(0)



		if edmenu.input == 1 then
			if UpdateOnscreenKeyboard() == 3 then
				edmenu.input = 0
				edmenu.show = 1
				edmenu.row = 0
			elseif UpdateOnscreenKeyboard() == 1 then
				local inputText = GetOnscreenKeyboardResult()
						edmenu.inp = 1
						edmenu.cur = 0
						edmenu.name = inputText
						edmenu.show = 2
						edmenu.row = 0
						edmenu.input = 0
						subSelected = inputText
						stop = true
			elseif UpdateOnscreenKeyboard() == 2 then
				edmenu.input = 0
				if edmenu.show == 1 and edmenu.row == 1 then
					edmenu.show = 1
					edmenu.row = 0
				end
			end

		else 
			stop = true
		end
	end

end


function ChangeLimitation()

	local edmenu = { show = 0, row = 0, input = 0, name = "", inp = 0, cur = 0 }
	local Ed = { id = {}, x = {}, y = {}, x1 = {}, y1 = {}, scale = {}, r = {}, g = {}, b = {}, a = {}, text = {}, font = {}, jus = {} }

	if edmenu.inp > 0 then
		edmenu.show = 2
		edmenu.row = 0
	else
		edmenu.input = 1
		edmenu.row = 1
		DisplayOnscreenKeyboard(false, "FMMC_KEY_TIP8", "", "", "", "", "", 64)
		PlaySound(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", 0, 0, 1)

	end

	local stop = false
	while stop == false do
			Citizen.Wait(0)



		if edmenu.input == 1 then
			if UpdateOnscreenKeyboard() == 3 then
				edmenu.input = 0
				edmenu.show = 1
				edmenu.row = 0
			elseif UpdateOnscreenKeyboard() == 1 then
				local inputText = GetOnscreenKeyboardResult()

					if string.len(inputText) >= 1  then
						edmenu.inp = 1
						edmenu.cur = 0
						edmenu.name = inputText
						edmenu.show = 2
						edmenu.row = 0
						edmenu.input = 0
						limitationSelected = tonumber(inputText)
						subSelected = inputText
						stop = true
					else
						stop = true
					end
			elseif UpdateOnscreenKeyboard() == 2 then
				edmenu.input = 0
				if edmenu.show == 1 and edmenu.row == 1 then
					edmenu.show = 1
					edmenu.row = 0
				end
			end

		else 
			stop = true
		end
	end

end


function ValiderLimitation()
	inSubMenu = false
	limitSpeed = limitationSelected
	OMenu.hidden = true
	askRender = false
	text1 = ""
	text2 = ""
	sub = ""
	subSelected = ""
	askRender = false
	limitationSelected = 0
end

function ValiderModel()
	inSubMenu = false
	addModelToArray(subSelected)
	OMenu.hidden = true
	askRender = false
	text1 = ""
	text2 = ""
	sub = ""
	subSelected = ""
	askRender = false
	limitationSelected = 0
end



function ValiderPlate()
	inSubMenu = false
	addPlateToArray(subSelected)
	OMenu.hidden = true
	askRender = false
	text1 = ""
	text2 = ""
	sub = ""
	subSelected = ""
	askRender = false
	limitationSelected = 0
end



function renderMenuHUD()
	if(askRender) then
		DrawAdvancedText(0.528, 0.145, 0.005, 0.0028, 0.85, text1, 255, 255, 255, 255, 1, 0)
		DrawAdvancedText(0.618, 0.181, 0.005, 0.0028, 1.08, text2, 255, 255, 255, 255, 1, 0)
		DrawRect(0.521, 0.218, 0.106, 0.00499999999999994, 50, 100, 140, 255)
		DrawRect(0.421, 0.176, 0.096, 0.00499999999999994, 50, 100, 140, 255)
		DrawRect(0.0849999999999999, 0.721, 0.136, 0.0789999999999999, 0, 0, 0, 150)
		DrawAdvancedText(0.117, 0.722, 0.005, 0.0028, 0.4, sub..subSelected, 255, 255, 255, 255, 0, 1)
	end
end



function DrawAdvancedText(x,y ,w,h,sc, text, r,g,b,a,font,jus)
    SetTextFont(font)
    SetTextProportional(0)
    SetTextScale(sc, sc)
	N_0x4e096588b13ffeca(jus)
    SetTextColour(r, g, b, a)
    SetTextDropShadow(0, 0, 0, 0,255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry("STRING")
    AddTextComponentString(text)
	DrawText(x - 0.1+w, y - 0.02+h)
end
