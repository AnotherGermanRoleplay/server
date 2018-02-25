resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'

files {
	'carcols.meta',
	'carvariations.meta',
	'dlctext.meta',
	'handling.meta',
	'rmodmustangcontentunlocks.meta',
	'shop_vehicle.meta',
	'vehicles.meta'
}

data_file 'HANDLING_FILE' 'handling.meta'
data_file 'VEHICLE_METADATA_FILE' 'vehicles.meta'
data_file 'CARCOLS_FILE' 'carcols.meta'
data_file 'VEHICLE_VARIATION_FILE' 'carvariations.meta'
data_file 'VEHICLE_LAYOUTS_FILE' 'vehiclelayouts.meta'   -- Not Required

client_script {
	'vehicle_names.lua'
}