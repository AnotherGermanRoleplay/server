INSERT INTO `addon_account` (name, label, shared) VALUES 
	('society_government', 'Regierung', 1)
;

INSERT INTO `datastore` (name, label, shared) VALUES 
	('society_government', 'Regierung', 1)
;

INSERT INTO `addon_inventory` (name, label, shared) VALUES 
	('society_government', 'Regierung', 1)
;

INSERT INTO `jobs` (name, label) VALUES 
	('government','Regierung')
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
	('government',0,'security','Leibwächter',20,'{\"tshirt_1\":4,\"tshirt_2\":0,\"torso_1\":27,\"torso_2\":0,\"decals_1\":0,\"decals_2\":0,\"arms\":33,\"pants_1\":25,\"pants_2\":0,\"shoes_1\":12,\"shoes_2\":6,\"helmet_1\":-1,\"helmet_2\":0,\"chain_1\":24,\"chain_2\":2}','{\"tshirt_1\":20,\"tshirt_2\":1,\"torso_1\":6,\"torso_2\":4,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":6,\"pants_2\":0,\"shoes_1\":22,\"shoes_2\":1,\"helmet_1\":-1,\"helmet_2\":0}'),
	('government',1,'securityc','Agent',40,'{\"tshirt_1\":4,\"tshirt_2\":0,\"torso_1\":27,\"torso_2\":0,\"decals_1\":0,\"decals_2\":0,\"arms\":33,\"pants_1\":25,\"pants_2\":0,\"shoes_1\":12,\"shoes_2\":6,\"helmet_1\":-1,\"helmet_2\":0,\"chain_1\":24,\"chain_2\":2}','{\"tshirt_1\":20,\"tshirt_2\":1,\"torso_1\":6,\"torso_2\":4,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":6,\"pants_2\":0,\"shoes_1\":22,\"shoes_2\":1,\"helmet_1\":-1,\"helmet_2\":0}'),
	('government',2,'senator','Senator',65,'{\"tshirt_1\":4,\"tshirt_2\":0,\"torso_1\":28,\"torso_2\":0,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":25,\"pants_2\":0,\"shoes_1\":55,\"shoes_2\":9,\"helmet_1\":-1,\"helmet_2\":0,\"chain_1\":24,\"chain_2\":2}','{\"tshirt_1\":20,\"tshirt_2\":0,\"torso_1\":6,\"torso_2\":0,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":8,\"pants_2\":0,\"shoes_1\":19,\"shoes_2\":9,\"helmet_1\":-1,\"helmet_2\":0}'),
	('government',3,'boss','President',80,'{\"tshirt_1\":4,\"tshirt_2\":0,\"torso_1\":28,\"torso_2\":0,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":25,\"pants_2\":0,\"shoes_1\":55,\"shoes_2\":5,\"helmet_1\":-1,\"helmet_2\":0,\"chain_1\":24,\"chain_2\":5}','{\"tshirt_1\":20,\"tshirt_2\":2,\"torso_1\":6,\"torso_2\":4,\"decals_1\":0,\"decals_2\":0,\"arms\":1,\"pants_1\":8,\"pants_2\":0,\"shoes_1\":20,\"shoes_2\":4,\"helmet_1\":-1,\"helmet_2\":0}')
;