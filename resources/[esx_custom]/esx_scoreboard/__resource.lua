description 'ESX Scoreboard'

-- temporary!
ui_page 'html/scoreboard.html'

client_scripts {
    '@es_extended/locale.lua',
    'locales/de.lua',
    '@mysql-async/lib/MySQL.lua',
    'config.lua',
    'client/main.lua'
}

files {
    'html/scoreboard.html',
    'html/style.css',
    'html/reset.css',
    'html/listener.js',
    'html/res/futurastd-medium.css',
    'html/res/futurastd-medium.eot',
    'html/res/futurastd-medium.woff',
    'html/res/futurastd-medium.ttf',
    'html/res/futurastd-medium.svg'
}

server_scripts {
    '@es_extended/locale.lua',
    'locales/de.lua',
    '@mysql-async/lib/MySQL.lua',
    'config.lua'
}