resource_manifest_version '05cfa83c-a124-4cfa-a768-c24a5811d8f9'

name 'vMenu'
description 'Server sided trainer for FiveM with custom permissions, using NativeUI.'
author 'Tom Grobbe (www.vespura.com)'
version 'v1.1.3'
url 'https://github.com/TomGrobbe/vMenu/'
client_debug_mode 'false'
server_debug_mode 'false'

files {
    'Newtonsoft.Json.dll'
}

client_scripts {
    "NativeUI.dll",
    "vMenuClient.net.dll",
}

server_scripts {
    'vMenuServer.net.dll',
}

