resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

description 'ESX Keyhandler'

version '1.0'


server_scripts {
  '@es_extended/locale.lua',
  'locales/br.lua',
  'locales/en.lua',
  'locales/fr.lua',
  'locales/es.lua',
}

client_scripts {
  'locales/br.lua',
  'locales/en.lua',
  'locales/fr.lua',
  'locales/es.lua',
  'client/main.lua',
  'config.lua'
}