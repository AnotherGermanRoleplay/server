/*
Navicat MySQL Data Transfer

Source Server         : AGRP v2 - SoYouStart
Source Server Version : 100126
Source Host           : 164.132.200.154:5798
Source Database       : v2-prod

Target Server Type    : MYSQL
Target Server Version : 100126
File Encoding         : 65001

Date: 2018-05-27 17:51:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for addon_account
-- ----------------------------
DROP TABLE IF EXISTS `addon_account`;
CREATE TABLE `addon_account` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addon_account
-- ----------------------------
INSERT INTO `addon_account` VALUES ('0', 'society_government', 'Regierung', '1');
INSERT INTO `addon_account` VALUES ('1', 'caution', 'Caution', '0');
INSERT INTO `addon_account` VALUES ('2', 'society_police', 'LSPD', '1');
INSERT INTO `addon_account` VALUES ('3', 'society_mecano', 'Mechaniker', '1');
INSERT INTO `addon_account` VALUES ('4', 'property_black_money', 'Argent Sale Propriété', '0');
INSERT INTO `addon_account` VALUES ('5', 'society_realestateagent', 'Makler', '1');
INSERT INTO `addon_account` VALUES ('6', 'society_taxi', 'Taxi', '1');
INSERT INTO `addon_account` VALUES ('7', 'society_ambulance', 'Sanitäter', '1');
INSERT INTO `addon_account` VALUES ('8', 'society_cardealer', 'Autohändler', '1');
INSERT INTO `addon_account` VALUES ('9', 'society_banker', 'Banker', '1');
INSERT INTO `addon_account` VALUES ('10', 'bank_savings', 'Livret Bleu', '0');
INSERT INTO `addon_account` VALUES ('11', 'society_bus', 'Bus', '1');
INSERT INTO `addon_account` VALUES ('12', 'society_mafia', 'Mafia', '1');
INSERT INTO `addon_account` VALUES ('13', 'society_government', 'Regierung', '1');

-- ----------------------------
-- Table structure for addon_account_data
-- ----------------------------
DROP TABLE IF EXISTS `addon_account_data`;
CREATE TABLE `addon_account_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `money` double NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addon_account_data
-- ----------------------------
INSERT INTO `addon_account_data` VALUES ('1', 'society_police', '100000', null);
INSERT INTO `addon_account_data` VALUES ('2', 'society_mecano', '100000', null);
INSERT INTO `addon_account_data` VALUES ('3', 'society_realestateagent', '100000', null);
INSERT INTO `addon_account_data` VALUES ('4', 'society_taxi', '100000', null);
INSERT INTO `addon_account_data` VALUES ('5', 'society_ambulance', '100000', null);
INSERT INTO `addon_account_data` VALUES ('6', 'society_cardealer', '100000', null);
INSERT INTO `addon_account_data` VALUES ('7', 'society_banker', '100000', null);
INSERT INTO `addon_account_data` VALUES ('8', 'society_bus', '100000', null);
INSERT INTO `addon_account_data` VALUES ('9', 'society_mafia', '100000', null);
INSERT INTO `addon_account_data` VALUES ('10', 'society_government', '100000', null);

-- ----------------------------
-- Table structure for addon_inventory
-- ----------------------------
DROP TABLE IF EXISTS `addon_inventory`;
CREATE TABLE `addon_inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addon_inventory
-- ----------------------------
INSERT INTO `addon_inventory` VALUES ('0', 'society_government', 'Regierung', '1');
INSERT INTO `addon_inventory` VALUES ('1', 'society_police', 'LSPD', '1');
INSERT INTO `addon_inventory` VALUES ('2', 'society_mecano', 'Mechaniker', '1');
INSERT INTO `addon_inventory` VALUES ('3', 'property', 'Propriété', '0');
INSERT INTO `addon_inventory` VALUES ('4', 'society_taxi', 'Taxi', '1');
INSERT INTO `addon_inventory` VALUES ('5', 'society_cardealer', 'Autohändler', '1');
INSERT INTO `addon_inventory` VALUES ('6', 'society_bus', 'Bus', '1');

-- ----------------------------
-- Table structure for addon_inventory_items
-- ----------------------------
DROP TABLE IF EXISTS `addon_inventory_items`;
CREATE TABLE `addon_inventory_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inventory_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `count` int(11) NOT NULL,
  `owner` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addon_inventory_items
-- ----------------------------

-- ----------------------------
-- Table structure for banned_user
-- ----------------------------
DROP TABLE IF EXISTS `banned_user`;
CREATE TABLE `banned_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `ip` varchar(19) COLLATE utf8mb4_bin DEFAULT NULL,
  `steamid` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `license` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `bannedUntil` datetime NOT NULL,
  `reason` text COLLATE utf8mb4_bin,
  `dateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `admin` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `adminSteamId` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `adminLicense` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of banned_user
-- ----------------------------

-- ----------------------------
-- Table structure for billing
-- ----------------------------
DROP TABLE IF EXISTS `billing`;
CREATE TABLE `billing` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `sender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `target_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `target` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of billing
-- ----------------------------

-- ----------------------------
-- Table structure for cardealer_vehicles
-- ----------------------------
DROP TABLE IF EXISTS `cardealer_vehicles`;
CREATE TABLE `cardealer_vehicles` (
  `id` int(11) NOT NULL,
  `vehicle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardealer_vehicles
-- ----------------------------
INSERT INTO `cardealer_vehicles` VALUES ('1', 'blade', '15000');
INSERT INTO `cardealer_vehicles` VALUES ('2', 'buccaneer', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('3', 'buccaneer2', '24000');
INSERT INTO `cardealer_vehicles` VALUES ('4', 'chino', '15000');
INSERT INTO `cardealer_vehicles` VALUES ('5', 'chino2', '19000');
INSERT INTO `cardealer_vehicles` VALUES ('6', 'coquette3', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('7', 'dominator', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('8', 'dukes', '28000');
INSERT INTO `cardealer_vehicles` VALUES ('9', 'gauntlet', '30000');
INSERT INTO `cardealer_vehicles` VALUES ('10', 'hotknife', '125000');
INSERT INTO `cardealer_vehicles` VALUES ('11', 'faction', '20000');
INSERT INTO `cardealer_vehicles` VALUES ('12', 'faction2', '30000');
INSERT INTO `cardealer_vehicles` VALUES ('13', 'faction3', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('14', 'nightshade', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('15', 'phoenix', '12500');
INSERT INTO `cardealer_vehicles` VALUES ('16', 'picador', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('17', 'sabregt', '20000');
INSERT INTO `cardealer_vehicles` VALUES ('18', 'sabregt2', '25000');
INSERT INTO `cardealer_vehicles` VALUES ('19', 'slamvan3', '11500');
INSERT INTO `cardealer_vehicles` VALUES ('20', 'tampa', '16000');
INSERT INTO `cardealer_vehicles` VALUES ('21', 'virgo', '14000');
INSERT INTO `cardealer_vehicles` VALUES ('22', 'vigero', '12500');
INSERT INTO `cardealer_vehicles` VALUES ('23', 'voodoo', '7200');
INSERT INTO `cardealer_vehicles` VALUES ('24', 'blista', '8000');
INSERT INTO `cardealer_vehicles` VALUES ('25', 'brioso', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('26', 'issi2', '10000');
INSERT INTO `cardealer_vehicles` VALUES ('27', 'panto', '10000');
INSERT INTO `cardealer_vehicles` VALUES ('28', 'prairie', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('29', 'bison', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('30', 'bobcatxl', '32000');
INSERT INTO `cardealer_vehicles` VALUES ('31', 'burrito3', '19000');
INSERT INTO `cardealer_vehicles` VALUES ('32', 'gburrito2', '29000');
INSERT INTO `cardealer_vehicles` VALUES ('33', 'camper', '42000');
INSERT INTO `cardealer_vehicles` VALUES ('34', 'gburrito', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('35', 'journey', '6500');
INSERT INTO `cardealer_vehicles` VALUES ('36', 'minivan', '13000');
INSERT INTO `cardealer_vehicles` VALUES ('37', 'moonbeam', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('38', 'moonbeam2', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('39', 'paradise', '19000');
INSERT INTO `cardealer_vehicles` VALUES ('40', 'rumpo', '15000');
INSERT INTO `cardealer_vehicles` VALUES ('41', 'rumpo3', '19500');
INSERT INTO `cardealer_vehicles` VALUES ('42', 'surfer', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('43', 'youga', '10800');
INSERT INTO `cardealer_vehicles` VALUES ('44', 'youga2', '14500');
INSERT INTO `cardealer_vehicles` VALUES ('45', 'asea', '5500');
INSERT INTO `cardealer_vehicles` VALUES ('46', 'cognoscenti', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('47', 'emperor', '8500');
INSERT INTO `cardealer_vehicles` VALUES ('48', 'fugitive', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('49', 'glendale', '6500');
INSERT INTO `cardealer_vehicles` VALUES ('50', 'intruder', '7500');
INSERT INTO `cardealer_vehicles` VALUES ('51', 'premier', '8000');
INSERT INTO `cardealer_vehicles` VALUES ('52', 'primo2', '14000');
INSERT INTO `cardealer_vehicles` VALUES ('53', 'regina', '5000');
INSERT INTO `cardealer_vehicles` VALUES ('55', 'stretch', '90000');
INSERT INTO `cardealer_vehicles` VALUES ('56', 'superd', '130000');
INSERT INTO `cardealer_vehicles` VALUES ('57', 'tailgater', '30000');
INSERT INTO `cardealer_vehicles` VALUES ('58', 'warrener', '4000');
INSERT INTO `cardealer_vehicles` VALUES ('59', 'washington', '9000');
INSERT INTO `cardealer_vehicles` VALUES ('60', 'baller2', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('61', 'baller3', '60000');
INSERT INTO `cardealer_vehicles` VALUES ('62', 'cavalcade2', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('63', 'contender', '70000');
INSERT INTO `cardealer_vehicles` VALUES ('64', 'dubsta', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('65', 'dubsta2', '60000');
INSERT INTO `cardealer_vehicles` VALUES ('66', 'fq2', '17000');
INSERT INTO `cardealer_vehicles` VALUES ('67', 'granger', '50000');
INSERT INTO `cardealer_vehicles` VALUES ('68', 'gresley', '47500');
INSERT INTO `cardealer_vehicles` VALUES ('69', 'huntley', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('70', 'landstalker', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('71', 'mesa', '16000');
INSERT INTO `cardealer_vehicles` VALUES ('72', 'mesa3', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('73', 'patriot', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('74', 'radi', '29000');
INSERT INTO `cardealer_vehicles` VALUES ('75', 'rocoto', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('76', 'seminole', '25000');
INSERT INTO `cardealer_vehicles` VALUES ('77', 'xls', '32000');
INSERT INTO `cardealer_vehicles` VALUES ('78', 'btype', '62000');
INSERT INTO `cardealer_vehicles` VALUES ('79', 'btype3', '85000');
INSERT INTO `cardealer_vehicles` VALUES ('80', 'btype2', '155000');
INSERT INTO `cardealer_vehicles` VALUES ('81', 'casco', '30000');
INSERT INTO `cardealer_vehicles` VALUES ('82', 'coquette2', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('83', 'manana', '12800');
INSERT INTO `cardealer_vehicles` VALUES ('84', 'monroe', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('85', 'pigalle', '20000');
INSERT INTO `cardealer_vehicles` VALUES ('86', 'stinger', '80000');
INSERT INTO `cardealer_vehicles` VALUES ('87', 'stingergt', '75000');
INSERT INTO `cardealer_vehicles` VALUES ('88', 'feltzer3', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('89', 'ztype', '220000');
INSERT INTO `cardealer_vehicles` VALUES ('90', 'bifta', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('91', 'bfinjection', '16000');
INSERT INTO `cardealer_vehicles` VALUES ('92', 'blazer', '6500');
INSERT INTO `cardealer_vehicles` VALUES ('93', 'blazer4', '8500');
INSERT INTO `cardealer_vehicles` VALUES ('94', 'brawler', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('95', 'dubsta3', '120000');
INSERT INTO `cardealer_vehicles` VALUES ('96', 'dune', '8000');
INSERT INTO `cardealer_vehicles` VALUES ('97', 'guardian', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('98', 'rebel2', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('99', 'sandking', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('100', 'monster', '210000');
INSERT INTO `cardealer_vehicles` VALUES ('101', 'trophytruck', '60000');
INSERT INTO `cardealer_vehicles` VALUES ('102', 'trophytruck2', '80000');
INSERT INTO `cardealer_vehicles` VALUES ('103', 'cogcabrio', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('104', 'exemplar', '32000');
INSERT INTO `cardealer_vehicles` VALUES ('105', 'f620', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('106', 'felon', '42000');
INSERT INTO `cardealer_vehicles` VALUES ('107', 'felon2', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('108', 'jackal', '38000');
INSERT INTO `cardealer_vehicles` VALUES ('109', 'oracle2', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('110', 'sentinel', '32000');
INSERT INTO `cardealer_vehicles` VALUES ('111', 'sentinel2', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('112', 'windsor', '95000');
INSERT INTO `cardealer_vehicles` VALUES ('113', 'windsor2', '125000');
INSERT INTO `cardealer_vehicles` VALUES ('114', 'zion', '36000');
INSERT INTO `cardealer_vehicles` VALUES ('115', 'zion2', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('116', 'ninef', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('117', 'ninef2', '80000');
INSERT INTO `cardealer_vehicles` VALUES ('118', 'alpha', '60000');
INSERT INTO `cardealer_vehicles` VALUES ('119', 'banshee', '70000');
INSERT INTO `cardealer_vehicles` VALUES ('120', 'bestiagts', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('121', 'buffalo', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('122', 'buffalo2', '20000');
INSERT INTO `cardealer_vehicles` VALUES ('123', 'carbonizzare', '75000');
INSERT INTO `cardealer_vehicles` VALUES ('124', 'comet2', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('125', 'coquette', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('126', 'tampa2', '80000');
INSERT INTO `cardealer_vehicles` VALUES ('127', 'elegy2', '38500');
INSERT INTO `cardealer_vehicles` VALUES ('128', 'feltzer2', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('129', 'furoregt', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('130', 'fusilade', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('131', 'jester', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('132', 'jester2', '135000');
INSERT INTO `cardealer_vehicles` VALUES ('133', 'khamelion', '38000');
INSERT INTO `cardealer_vehicles` VALUES ('134', 'kuruma', '30000');
INSERT INTO `cardealer_vehicles` VALUES ('135', 'lynx', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('136', 'mamba', '70000');
INSERT INTO `cardealer_vehicles` VALUES ('137', 'massacro', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('138', 'massacro2', '130000');
INSERT INTO `cardealer_vehicles` VALUES ('139', 'omnis', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('140', 'penumbra', '28000');
INSERT INTO `cardealer_vehicles` VALUES ('141', 'rapidgt', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('142', 'rapidgt2', '45000');
INSERT INTO `cardealer_vehicles` VALUES ('143', 'schafter3', '50000');
INSERT INTO `cardealer_vehicles` VALUES ('144', 'seven70', '39500');
INSERT INTO `cardealer_vehicles` VALUES ('145', 'sultan', '15000');
INSERT INTO `cardealer_vehicles` VALUES ('146', 'surano', '50000');
INSERT INTO `cardealer_vehicles` VALUES ('147', 'tropos', '40000');
INSERT INTO `cardealer_vehicles` VALUES ('148', 'verlierer2', '70000');
INSERT INTO `cardealer_vehicles` VALUES ('149', 'adder', '900000');
INSERT INTO `cardealer_vehicles` VALUES ('150', 'banshee2', '255000');
INSERT INTO `cardealer_vehicles` VALUES ('151', 'bullet', '90000');
INSERT INTO `cardealer_vehicles` VALUES ('152', 'cheetah', '375000');
INSERT INTO `cardealer_vehicles` VALUES ('153', 'entityxf', '425000');
INSERT INTO `cardealer_vehicles` VALUES ('154', 'sheava', '220000');
INSERT INTO `cardealer_vehicles` VALUES ('155', 'fmj', '185000');
INSERT INTO `cardealer_vehicles` VALUES ('156', 'infernus', '180000');
INSERT INTO `cardealer_vehicles` VALUES ('157', 'osiris', '160000');
INSERT INTO `cardealer_vehicles` VALUES ('158', 'pfister811', '85000');
INSERT INTO `cardealer_vehicles` VALUES ('159', 'le7b', '325000');
INSERT INTO `cardealer_vehicles` VALUES ('160', 'reaper', '150000');
INSERT INTO `cardealer_vehicles` VALUES ('161', 'sultanrs', '65000');
INSERT INTO `cardealer_vehicles` VALUES ('162', 't20', '300000');
INSERT INTO `cardealer_vehicles` VALUES ('163', 'turismor', '350000');
INSERT INTO `cardealer_vehicles` VALUES ('164', 'tyrus', '600000');
INSERT INTO `cardealer_vehicles` VALUES ('165', 'vacca', '120000');
INSERT INTO `cardealer_vehicles` VALUES ('166', 'voltic', '90000');
INSERT INTO `cardealer_vehicles` VALUES ('167', 'prototipo', '2500000');
INSERT INTO `cardealer_vehicles` VALUES ('168', 'zentorno', '1500000');
INSERT INTO `cardealer_vehicles` VALUES ('169', 'AKUMA', '7500');
INSERT INTO `cardealer_vehicles` VALUES ('170', 'avarus', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('171', 'bagger', '13500');
INSERT INTO `cardealer_vehicles` VALUES ('172', 'bati', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('173', 'bati2', '19000');
INSERT INTO `cardealer_vehicles` VALUES ('174', 'bf400', '6500');
INSERT INTO `cardealer_vehicles` VALUES ('176', 'carbonrs', '18000');
INSERT INTO `cardealer_vehicles` VALUES ('177', 'chimera', '38000');
INSERT INTO `cardealer_vehicles` VALUES ('178', 'cliffhanger', '9500');
INSERT INTO `cardealer_vehicles` VALUES ('179', 'cruiser', '510');
INSERT INTO `cardealer_vehicles` VALUES ('180', 'daemon', '11500');
INSERT INTO `cardealer_vehicles` VALUES ('181', 'daemon2', '13500');
INSERT INTO `cardealer_vehicles` VALUES ('182', 'defiler', '9800');
INSERT INTO `cardealer_vehicles` VALUES ('183', 'double', '28000');
INSERT INTO `cardealer_vehicles` VALUES ('184', 'enduro', '5500');
INSERT INTO `cardealer_vehicles` VALUES ('185', 'esskey', '4200');
INSERT INTO `cardealer_vehicles` VALUES ('186', 'faggio', '1900');
INSERT INTO `cardealer_vehicles` VALUES ('187', 'faggio2', '2800');
INSERT INTO `cardealer_vehicles` VALUES ('188', 'fixter', '225');
INSERT INTO `cardealer_vehicles` VALUES ('189', 'gargoyle', '16500');
INSERT INTO `cardealer_vehicles` VALUES ('190', 'hakuchou', '31000');
INSERT INTO `cardealer_vehicles` VALUES ('191', 'hakuchou2', '55000');
INSERT INTO `cardealer_vehicles` VALUES ('192', 'hexer', '12000');
INSERT INTO `cardealer_vehicles` VALUES ('193', 'innovation', '23500');
INSERT INTO `cardealer_vehicles` VALUES ('194', 'manchez', '5300');
INSERT INTO `cardealer_vehicles` VALUES ('195', 'nemesis', '5800');
INSERT INTO `cardealer_vehicles` VALUES ('196', 'nightblade', '35000');
INSERT INTO `cardealer_vehicles` VALUES ('197', 'pcj', '6200');
INSERT INTO `cardealer_vehicles` VALUES ('198', 'ruffian', '6800');
INSERT INTO `cardealer_vehicles` VALUES ('199', 'sanchez', '5300');
INSERT INTO `cardealer_vehicles` VALUES ('200', 'sanchez2', '5300');
INSERT INTO `cardealer_vehicles` VALUES ('201', 'sanctus', '25000');
INSERT INTO `cardealer_vehicles` VALUES ('202', 'scorcher', '280');
INSERT INTO `cardealer_vehicles` VALUES ('203', 'sovereign', '22000');
INSERT INTO `cardealer_vehicles` VALUES ('204', 'shotaro', '320000');
INSERT INTO `cardealer_vehicles` VALUES ('205', 'thrust', '24000');
INSERT INTO `cardealer_vehicles` VALUES ('206', 'tribike3', '520');
INSERT INTO `cardealer_vehicles` VALUES ('207', 'vader', '7200');
INSERT INTO `cardealer_vehicles` VALUES ('208', 'vortex', '9800');
INSERT INTO `cardealer_vehicles` VALUES ('209', 'wolfsbane', '9000');
INSERT INTO `cardealer_vehicles` VALUES ('210', 'zombiea', '9500');
INSERT INTO `cardealer_vehicles` VALUES ('211', 'zombieb', '12000');

-- ----------------------------
-- Table structure for characters
-- ----------------------------
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `dateofbirth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sex` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT 'f',
  `height` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(255) NOT NULL DEFAULT 'unemployed',
  `job_grade` int(11) NOT NULL DEFAULT '0',
  `second_job` varchar(255) NOT NULL DEFAULT 'unemployed',
  `loadout` longtext,
  `skin` longtext,
  `phone_number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of characters
-- ----------------------------
INSERT INTO `characters` VALUES ('1', 'steam:110000106abab10', 'Jack', 'Holmes', '16.03.1986', 'M', '186', 'unemployed', '0', 'unemployed', '[{\"name\":\"WEAPON_KNIFE\",\"ammo\":0,\"label\":\"Messer\"},{\"name\":\"WEAPON_NIGHTSTICK\",\"ammo\":0,\"label\":\"Schlagstock\"},{\"name\":\"WEAPON_HAMMER\",\"ammo\":0,\"label\":\"Hammer\"},{\"name\":\"WEAPON_BAT\",\"ammo\":0,\"label\":\"Schläger\"},{\"name\":\"WEAPON_GOLFCLUB\",\"ammo\":0,\"label\":\"Golfschläger\"},{\"name\":\"WEAPON_CROWBAR\",\"ammo\":0,\"label\":\"Brecheisen\"},{\"name\":\"WEAPON_PISTOL\",\"ammo\":250,\"label\":\"Pistole\"},{\"name\":\"WEAPON_COMBATPISTOL\",\"ammo\":250,\"label\":\"Kampfpistole\"},{\"name\":\"WEAPON_APPISTOL\",\"ammo\":250,\"label\":\"AP Pistole\"},{\"name\":\"WEAPON_PISTOL50\",\"ammo\":250,\"label\":\"Pistole .50\"},{\"name\":\"WEAPON_MICROSMG\",\"ammo\":250,\"label\":\"Mikro SMG\"},{\"name\":\"WEAPON_SMG\",\"ammo\":250,\"label\":\"SMG\"},{\"name\":\"WEAPON_ASSAULTSMG\",\"ammo\":250,\"label\":\"Kampf SMG\"},{\"name\":\"WEAPON_ASSAULTRIFLE\",\"ammo\":250,\"label\":\"Kampfgewehr\"},{\"name\":\"WEAPON_CARBINERIFLE\",\"ammo\":250,\"label\":\"Karabinergewehr\"},{\"name\":\"WEAPON_ADVANCEDRIFLE\",\"ammo\":250,\"label\":\"Advancedgewehr\"},{\"name\":\"WEAPON_MG\",\"ammo\":250,\"label\":\"MG\"},{\"name\":\"WEAPON_COMBATMG\",\"ammo\":250,\"label\":\"Kampf MG\"},{\"name\":\"WEAPON_PUMPSHOTGUN\",\"ammo\":250,\"label\":\"Pumpgun\"},{\"name\":\"WEAPON_SAWNOFFSHOTGUN\",\"ammo\":250,\"label\":\"Abgesägte Schrotflinte\"},{\"name\":\"WEAPON_ASSAULTSHOTGUN\",\"ammo\":250,\"label\":\"Kampf Schrotflinte\"},{\"name\":\"WEAPON_BULLPUPSHOTGUN\",\"ammo\":250,\"label\":\"Bullpup Schrotflinte\"},{\"name\":\"WEAPON_STUNGUN\",\"ammo\":250,\"label\":\"Tazer\"},{\"name\":\"WEAPON_SNIPERRIFLE\",\"ammo\":250,\"label\":\"Scharfschützengewehr\"},{\"name\":\"WEAPON_HEAVYSNIPER\",\"ammo\":250,\"label\":\"Schweres Sniper\"},{\"name\":\"WEAPON_GRENADELAUNCHER\",\"ammo\":5,\"label\":\"Granatwerfer\"},{\"name\":\"WEAPON_RPG\",\"ammo\":0,\"label\":\"RPG\"},{\"name\":\"WEAPON_STINGER\",\"ammo\":1,\"label\":\"Stinger\"},{\"name\":\"WEAPON_MINIGUN\",\"ammo\":250,\"label\":\"Minigun\"},{\"name\":\"WEAPON_BZGAS\",\"ammo\":1,\"label\":\"BZ Gas\"},{\"name\":\"WEAPON_MOLOTOV\",\"ammo\":1,\"label\":\"Molotov Cocktail\"},{\"name\":\"WEAPON_FIREEXTINGUISHER\",\"ammo\":0,\"label\":\"Feuerlöscher\"},{\"name\":\"WEAPON_PETROLCAN\",\"ammo\":4500,\"label\":\"Benzinkanister\"},{\"name\":\"WEAPON_BALL\",\"ammo\":1,\"label\":\"Ball\"},{\"name\":\"WEAPON_SNSPISTOL\",\"ammo\":250,\"label\":\"SNS Pistole\"},{\"name\":\"WEAPON_BOTTLE\",\"ammo\":0,\"label\":\"Flasche\"},{\"name\":\"WEAPON_GUSENBERG\",\"ammo\":250,\"label\":\"Gusenberg\"},{\"name\":\"WEAPON_SPECIALCARBINE\",\"ammo\":250,\"label\":\"Spezialkarabiner\"},{\"name\":\"WEAPON_HEAVYPISTOL\",\"ammo\":250,\"label\":\"Schwere Pistole\"},{\"name\":\"WEAPON_BULLPUPRIFLE\",\"ammo\":250,\"label\":\"Bullpupgewehr\"},{\"name\":\"WEAPON_DAGGER\",\"ammo\":0,\"label\":\"Dolch\"},{\"name\":\"WEAPON_VINTAGEPISTOL\",\"ammo\":250,\"label\":\"Vintage Pistole\"},{\"name\":\"WEAPON_FIREWORK\",\"ammo\":1,\"label\":\"Feuerwerk\"},{\"name\":\"WEAPON_MUSKET\",\"ammo\":250,\"label\":\"Muskete\"},{\"name\":\"WEAPON_HEAVYSHOTGUN\",\"ammo\":250,\"label\":\"Schwere Schrotflinte\"},{\"name\":\"WEAPON_MARKSMANRIFLE\",\"ammo\":250,\"label\":\"Marksmangewehr\"},{\"name\":\"WEAPON_HOMINGLAUNCHER\",\"ammo\":1,\"label\":\"Homing Launcher\"},{\"name\":\"WEAPON_SNOWBALL\",\"ammo\":1,\"label\":\"Schneeball\"},{\"name\":\"WEAPON_FLAREGUN\",\"ammo\":1,\"label\":\"Leuchtpistole\"},{\"name\":\"WEAPON_FLARE\",\"ammo\":1,\"label\":\"Flare\"},{\"name\":\"WEAPON_COMBATPDW\",\"ammo\":250,\"label\":\"Kampf PDW\"},{\"name\":\"WEAPON_MARKSMANPISTOL\",\"ammo\":250,\"label\":\"Marksman Pistole\"},{\"name\":\"WEAPON_KNUCKLE\",\"ammo\":0,\"label\":\"Schlagring\"},{\"name\":\"WEAPON_HATCHET\",\"ammo\":0,\"label\":\"Axt\"},{\"name\":\"WEAPON_RAILGUN\",\"ammo\":1,\"label\":\"Railgun\"},{\"name\":\"WEAPON_MACHETE\",\"ammo\":0,\"label\":\"Machete\"},{\"name\":\"WEAPON_MACHINEPISTOL\",\"ammo\":250,\"label\":\"Maschinenpistole\"},{\"name\":\"WEAPON_SWITCHBLADE\",\"ammo\":0,\"label\":\"Klappmesser\"},{\"name\":\"WEAPON_REVOLVER\",\"ammo\":250,\"label\":\"Schwerer Revolver\"},{\"name\":\"WEAPON_DBSHOTGUN\",\"ammo\":250,\"label\":\"Doppelläufige Schrotflinte\"},{\"name\":\"WEAPON_COMPACTRIFLE\",\"ammo\":250,\"label\":\"Kampfgewehr\"},{\"name\":\"WEAPON_FLASHLIGHT\",\"ammo\":0,\"label\":\"Taschenlampe\"}]', '{\"skin\":5,\"helmet_2\":0,\"age_2\":0,\"hair_1\":10,\"age_1\":0,\"bproof_1\":0,\"makeup_2\":0,\"decals_2\":0,\"lipstick_4\":0,\"glasses_1\":0,\"face\":4,\"beard_3\":3,\"bags_2\":0,\"beard_4\":0,\"chain_1\":17,\"helmet_1\":-1,\"shoes_1\":55,\"hair_color_1\":4,\"chain_2\":1,\"lipstick_3\":0,\"torso_2\":5,\"ears_2\":0,\"pants_2\":0,\"shoes_2\":9,\"lipstick_2\":0,\"eyebrows_3\":0,\"pants_1\":26,\"hair_2\":3,\"sex\":0,\"mask_1\":0,\"torso_1\":6,\"beard_2\":10,\"ears_1\":-1,\"makeup_4\":0,\"bproof_2\":0,\"decals_1\":0,\"lipstick_1\":0,\"bags_1\":0,\"eyebrows_1\":8,\"tshirt_2\":2,\"mask_2\":0,\"arms\":17,\"tshirt_1\":2,\"glasses_2\":0,\"hair_color_2\":8,\"beard_1\":7,\"eyebrows_2\":4,\"makeup_3\":0,\"makeup_1\":0,\"eyebrows_4\":0}', '1337');
INSERT INTO `characters` VALUES ('2', 'steam:110000106abab10', 'John', 'Holmes', '16.03.1986', 'M', '187', 'unemployed', '13', 'unemployed', '[{\"label\":\"Messer\",\"name\":\"WEAPON_KNIFE\",\"ammo\":0},{\"label\":\"Schlagstock\",\"name\":\"WEAPON_NIGHTSTICK\",\"ammo\":0},{\"label\":\"Hammer\",\"name\":\"WEAPON_HAMMER\",\"ammo\":0},{\"label\":\"Schläger\",\"name\":\"WEAPON_BAT\",\"ammo\":0},{\"label\":\"Golfschläger\",\"name\":\"WEAPON_GOLFCLUB\",\"ammo\":0},{\"label\":\"Brecheisen\",\"name\":\"WEAPON_CROWBAR\",\"ammo\":0},{\"label\":\"Pistole\",\"name\":\"WEAPON_PISTOL\",\"ammo\":9999},{\"label\":\"Kampfpistole\",\"name\":\"WEAPON_COMBATPISTOL\",\"ammo\":9999},{\"label\":\"AP Pistole\",\"name\":\"WEAPON_APPISTOL\",\"ammo\":9999},{\"label\":\"Pistole .50\",\"name\":\"WEAPON_PISTOL50\",\"ammo\":9999},{\"label\":\"Mikro SMG\",\"name\":\"WEAPON_MICROSMG\",\"ammo\":9954},{\"label\":\"SMG\",\"name\":\"WEAPON_SMG\",\"ammo\":9954},{\"label\":\"Kampf SMG\",\"name\":\"WEAPON_ASSAULTSMG\",\"ammo\":9954},{\"label\":\"Kampfgewehr\",\"name\":\"WEAPON_ASSAULTRIFLE\",\"ammo\":9999},{\"label\":\"Karabinergewehr\",\"name\":\"WEAPON_CARBINERIFLE\",\"ammo\":9999},{\"label\":\"Advancedgewehr\",\"name\":\"WEAPON_ADVANCEDRIFLE\",\"ammo\":9999},{\"label\":\"MG\",\"name\":\"WEAPON_MG\",\"ammo\":9999},{\"label\":\"Kampf MG\",\"name\":\"WEAPON_COMBATMG\",\"ammo\":9999},{\"label\":\"Pumpgun\",\"name\":\"WEAPON_PUMPSHOTGUN\",\"ammo\":9999},{\"label\":\"Abgesägte Schrotflinte\",\"name\":\"WEAPON_SAWNOFFSHOTGUN\",\"ammo\":9999},{\"label\":\"Kampf Schrotflinte\",\"name\":\"WEAPON_ASSAULTSHOTGUN\",\"ammo\":9999},{\"label\":\"Bullpup Schrotflinte\",\"name\":\"WEAPON_BULLPUPSHOTGUN\",\"ammo\":9999},{\"label\":\"Tazer\",\"name\":\"WEAPON_STUNGUN\",\"ammo\":9999},{\"label\":\"Scharfschützengewehr\",\"name\":\"WEAPON_SNIPERRIFLE\",\"ammo\":9996},{\"label\":\"Schweres Sniper\",\"name\":\"WEAPON_HEAVYSNIPER\",\"ammo\":9996},{\"label\":\"Granatwerfer\",\"name\":\"WEAPON_GRENADELAUNCHER\",\"ammo\":20},{\"label\":\"RPG\",\"name\":\"WEAPON_RPG\",\"ammo\":20},{\"label\":\"Stinger\",\"name\":\"WEAPON_STINGER\",\"ammo\":0},{\"label\":\"Minigun\",\"name\":\"WEAPON_MINIGUN\",\"ammo\":6596},{\"label\":\"Granate\",\"name\":\"WEAPON_GRENADE\",\"ammo\":25},{\"label\":\"Haftbombe\",\"name\":\"WEAPON_STICKYBOMB\",\"ammo\":22},{\"label\":\"Rauchgranate\",\"name\":\"WEAPON_SMOKEGRENADE\",\"ammo\":25},{\"label\":\"BZ Gas\",\"name\":\"WEAPON_BZGAS\",\"ammo\":25},{\"label\":\"Molotov Cocktail\",\"name\":\"WEAPON_MOLOTOV\",\"ammo\":25},{\"label\":\"Feuerlöscher\",\"name\":\"WEAPON_FIREEXTINGUISHER\",\"ammo\":2000},{\"label\":\"Benzinkanister\",\"name\":\"WEAPON_PETROLCAN\",\"ammo\":4500},{\"label\":\"Ball\",\"name\":\"WEAPON_BALL\",\"ammo\":1},{\"label\":\"SNS Pistole\",\"name\":\"WEAPON_SNSPISTOL\",\"ammo\":9999},{\"label\":\"Flasche\",\"name\":\"WEAPON_BOTTLE\",\"ammo\":0},{\"label\":\"Gusenberg\",\"name\":\"WEAPON_GUSENBERG\",\"ammo\":9999},{\"label\":\"Spezialkarabiner\",\"name\":\"WEAPON_SPECIALCARBINE\",\"ammo\":9999},{\"label\":\"Schwere Pistole\",\"name\":\"WEAPON_HEAVYPISTOL\",\"ammo\":9999},{\"label\":\"Bullpupgewehr\",\"name\":\"WEAPON_BULLPUPRIFLE\",\"ammo\":9999},{\"label\":\"Dolch\",\"name\":\"WEAPON_DAGGER\",\"ammo\":0},{\"label\":\"Vintage Pistole\",\"name\":\"WEAPON_VINTAGEPISTOL\",\"ammo\":9999},{\"label\":\"Feuerwerk\",\"name\":\"WEAPON_FIREWORK\",\"ammo\":16},{\"label\":\"Muskete\",\"name\":\"WEAPON_MUSKET\",\"ammo\":9999},{\"label\":\"Schwere Schrotflinte\",\"name\":\"WEAPON_HEAVYSHOTGUN\",\"ammo\":9999},{\"label\":\"Marksmangewehr\",\"name\":\"WEAPON_MARKSMANRIFLE\",\"ammo\":9996},{\"label\":\"Homing Launcher\",\"name\":\"WEAPON_HOMINGLAUNCHER\",\"ammo\":10},{\"label\":\"Annäherungsmine\",\"name\":\"WEAPON_PROXMINE\",\"ammo\":5},{\"label\":\"Schneeball\",\"name\":\"WEAPON_SNOWBALL\",\"ammo\":10},{\"label\":\"Leuchtpistole\",\"name\":\"WEAPON_FLAREGUN\",\"ammo\":20},{\"label\":\"Flare\",\"name\":\"WEAPON_FLARE\",\"ammo\":25},{\"label\":\"Kampf PDW\",\"name\":\"WEAPON_COMBATPDW\",\"ammo\":9954},{\"label\":\"Marksman Pistole\",\"name\":\"WEAPON_MARKSMANPISTOL\",\"ammo\":9999},{\"label\":\"Schlagring\",\"name\":\"WEAPON_KNUCKLE\",\"ammo\":0},{\"label\":\"Axt\",\"name\":\"WEAPON_HATCHET\",\"ammo\":0},{\"label\":\"Railgun\",\"name\":\"WEAPON_RAILGUN\",\"ammo\":18},{\"label\":\"Machete\",\"name\":\"WEAPON_MACHETE\",\"ammo\":0},{\"label\":\"Maschinenpistole\",\"name\":\"WEAPON_MACHINEPISTOL\",\"ammo\":9954},{\"label\":\"Klappmesser\",\"name\":\"WEAPON_SWITCHBLADE\",\"ammo\":0},{\"label\":\"Schwerer Revolver\",\"name\":\"WEAPON_REVOLVER\",\"ammo\":9999},{\"label\":\"Doppelläufige Schrotflinte\",\"name\":\"WEAPON_DBSHOTGUN\",\"ammo\":9999},{\"label\":\"Kampfgewehr\",\"name\":\"WEAPON_COMPACTRIFLE\",\"ammo\":9999},{\"label\":\"Auto Shotgun\",\"name\":\"WEAPON_AUTOSHOTGUN\",\"ammo\":9999},{\"label\":\"Kampfaxt\",\"name\":\"WEAPON_BATTLEAXE\",\"ammo\":0},{\"label\":\"Kompakt Launcher\",\"name\":\"WEAPON_COMPACTLAUNCHER\",\"ammo\":20},{\"label\":\"Mini SMG\",\"name\":\"WEAPON_MINISMG\",\"ammo\":9954},{\"label\":\"Rohrbombe\",\"name\":\"WEAPON_PIPEBOMB\",\"ammo\":10},{\"label\":\"Kö\",\"name\":\"WEAPON_POOLCUE\",\"ammo\":0},{\"label\":\"Rohrzange\",\"name\":\"WEAPON_WRENCH\",\"ammo\":0},{\"label\":\"Taschenlampe\",\"name\":\"WEAPON_FLASHLIGHT\",\"ammo\":0},{\"label\":\"Nachtsichtgerät\",\"name\":\"GADGET_NIGHTVISION\",\"ammo\":0},{\"label\":\"Fallschirm\",\"name\":\"GADGET_PARACHUTE\",\"ammo\":0}]', '{\"bproof_1\":0,\"age_2\":0,\"lipstick_4\":0,\"bags_1\":0,\"bags_2\":0,\"tshirt_1\":2,\"makeup_2\":0,\"eyebrows_2\":4,\"glasses_1\":0,\"bproof_2\":0,\"hair_color_2\":8,\"beard_2\":10,\"lipstick_1\":0,\"helmet_1\":-1,\"hair_color_1\":4,\"beard_3\":3,\"beard_4\":0,\"makeup_3\":0,\"beard_1\":7,\"pants_1\":26,\"shoes_1\":55,\"lipstick_3\":0,\"eyebrows_4\":0,\"makeup_4\":0,\"helmet_2\":0,\"chain_2\":2,\"mask_1\":0,\"skin\":5,\"glasses_2\":0,\"age_1\":0,\"ears_2\":0,\"chain_1\":17,\"hair_1\":10,\"arms\":1,\"pants_2\":0,\"eyebrows_1\":8,\"torso_1\":6,\"shoes_2\":5,\"makeup_1\":0,\"torso_2\":5,\"mask_2\":0,\"decals_1\":0,\"face\":4,\"hair_2\":3,\"ears_1\":2,\"decals_2\":0,\"sex\":0,\"eyebrows_3\":0,\"tshirt_2\":2,\"lipstick_2\":0}', '1338');

-- ----------------------------
-- Table structure for datastore
-- ----------------------------
DROP TABLE IF EXISTS `datastore`;
CREATE TABLE `datastore` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `shared` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datastore
-- ----------------------------
INSERT INTO `datastore` VALUES ('0', 'society_government', 'Regierung', '1');
INSERT INTO `datastore` VALUES ('1', 'society_police', 'LSPD', '1');
INSERT INTO `datastore` VALUES ('2', 'property', 'Gebäude', '0');
INSERT INTO `datastore` VALUES ('3', 'user_mask', 'Masken', '0');

-- ----------------------------
-- Table structure for datastore_data
-- ----------------------------
DROP TABLE IF EXISTS `datastore_data`;
CREATE TABLE `datastore_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datastore_data
-- ----------------------------
INSERT INTO `datastore_data` VALUES ('1', 'society_police', null, 0x7B7D);
INSERT INTO `datastore_data` VALUES ('2', 'society_government', null, 0x7B7D);

-- ----------------------------
-- Table structure for fine_types
-- ----------------------------
DROP TABLE IF EXISTS `fine_types`;
CREATE TABLE `fine_types` (
  `id` int(11) NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fine_types
-- ----------------------------
INSERT INTO `fine_types` VALUES ('1', 'Fahren ohne PKW Führerschein', '950', '0');
INSERT INTO `fine_types` VALUES ('2', 'Fahren ohne LKW Führerschein', '2000', '0');
INSERT INTO `fine_types` VALUES ('3', 'Fahren ohne Beleuchtung', '250', '0');
INSERT INTO `fine_types` VALUES ('4', 'Rotlicht missachtet', '250', '0');
INSERT INTO `fine_types` VALUES ('5', 'Falsches Parken', '550', '0');
INSERT INTO `fine_types` VALUES ('6', 'Verursachen eines Verkehrsunfalls', '970', '0');
INSERT INTO `fine_types` VALUES ('7', 'Fahrerflucht', '2250', '0');
INSERT INTO `fine_types` VALUES ('8', 'Gefährlicher Eingriff in den Straßenverkehr', '1950', '0');
INSERT INTO `fine_types` VALUES ('9', 'Nicht Beachten von Sondersignalen / Rettungsfahrzeuge blockieren', '3550', '0');
INSERT INTO `fine_types` VALUES ('10', 'Geschwindigkeitsüberschreitung:  5-30 Km/h', '175', '0');
INSERT INTO `fine_types` VALUES ('11', 'Geschwindigkeitsüberschreitung: 30-50 Km/h', '395', '0');
INSERT INTO `fine_types` VALUES ('12', 'Geschwindigkeitsüberschreitung: 50-100 Km/h', '1250', '0');
INSERT INTO `fine_types` VALUES ('13', 'Drogenbesitz (Person)', '2000', '1');
INSERT INTO `fine_types` VALUES ('14', 'Drogenbesitz (Fahrzeug)', '3600', '1');
INSERT INTO `fine_types` VALUES ('15', 'Drogenbesitz (Haus)', '15000', '1');
INSERT INTO `fine_types` VALUES ('16', 'Drogenverkauf', '3000', '1');
INSERT INTO `fine_types` VALUES ('17', 'Drogen herstellen', '2800', '1');
INSERT INTO `fine_types` VALUES ('18', 'Diebstahl', '2000', '2');
INSERT INTO `fine_types` VALUES ('19', 'Diebstahl eines Kfz / Helikopters / Flugzeugs / Boots', '2750', '2');
INSERT INTO `fine_types` VALUES ('20', 'Betrug', '3000', '2');
INSERT INTO `fine_types` VALUES ('21', 'Errichten einer Straßenblockade', '3750', '2');
INSERT INTO `fine_types` VALUES ('22', 'Besitz illegaler Gegenstände', '3750', '2');
INSERT INTO `fine_types` VALUES ('23', 'Raub', '4000', '2');
INSERT INTO `fine_types` VALUES ('24', 'Tankstellenraub', '2500', '2');
INSERT INTO `fine_types` VALUES ('25', 'Diebstahl von staatlichem Eigentum', '5000', '2');
INSERT INTO `fine_types` VALUES ('26', 'Besitz einer Waffe ohne Waffenschein', '1650', '3');
INSERT INTO `fine_types` VALUES ('27', 'Offenes führen einer Waffe', '1350', '3');
INSERT INTO `fine_types` VALUES ('28', 'Gefährdung durch den Gebrauch einer Schusswaffe', '3750', '3');
INSERT INTO `fine_types` VALUES ('29', 'Ungesetzlichen Waffenhandel passiv betreiben (Kaufen)', '5000', '3');
INSERT INTO `fine_types` VALUES ('30', 'Ungesetzlichen Waffenhandel aktiv betreiben (Verkaufen)', '6000', '3');
INSERT INTO `fine_types` VALUES ('31', 'Besitz illegaler Handwaffen', '3000', '3');
INSERT INTO `fine_types` VALUES ('32', 'Besitz illegaler Langwaffen', '5000', '3');
INSERT INTO `fine_types` VALUES ('33', 'Beleidigung', '1000', '4');
INSERT INTO `fine_types` VALUES ('34', 'Belästigung', '2000', '4');
INSERT INTO `fine_types` VALUES ('35', 'Prostitution/Annahme von Prostitution', '2250', '4');
INSERT INTO `fine_types` VALUES ('36', 'Drohung', '3000', '4');
INSERT INTO `fine_types` VALUES ('37', 'Unterlassene Hilfeleistung', '3500', '4');
INSERT INTO `fine_types` VALUES ('38', 'Freiheitsberaubung', '4200', '4');
INSERT INTO `fine_types` VALUES ('39', 'Gewaltsame Drohung', '30', '4');
INSERT INTO `fine_types` VALUES ('40', 'Körperverletzung', '3750', '4');
INSERT INTO `fine_types` VALUES ('41', 'Geiselnahme', '7000', '4');
INSERT INTO `fine_types` VALUES ('42', 'Fahrlässige Tötung', '7000', '4');
INSERT INTO `fine_types` VALUES ('43', 'Körperverletzung mit Todesfolge ', '9000', '4');
INSERT INTO `fine_types` VALUES ('44', 'Totschlag', '10000', '4');
INSERT INTO `fine_types` VALUES ('45', 'Mord', '12000', '4');
INSERT INTO `fine_types` VALUES ('46', 'Nichtbeachten einer amtlichen Anweisung ', '600', '5');
INSERT INTO `fine_types` VALUES ('47', 'Entziehung polizeilicher Maßnahmen', '900', '5');
INSERT INTO `fine_types` VALUES ('48', 'Behinderung eines Beamten bei der Ausübung seiner Arbeit', '1100', '5');
INSERT INTO `fine_types` VALUES ('49', 'Widerstand gegen Vollstreckungsbeamte', '1500', '5');
INSERT INTO `fine_types` VALUES ('50', 'Strafvereitelung', '2500', '5');
INSERT INTO `fine_types` VALUES ('51', 'Belästigung/Beleidigung eines Beamten', '3350', '5');
INSERT INTO `fine_types` VALUES ('52', 'Bestechung', '3750', '5');
INSERT INTO `fine_types` VALUES ('53', 'Befreiung von Verdächtigen', '3500', '5');
INSERT INTO `fine_types` VALUES ('55', 'Durchbrechen von Absperrungen', '1500', '6');
INSERT INTO `fine_types` VALUES ('56', 'Falsche Namensangabe', '1500', '6');
INSERT INTO `fine_types` VALUES ('57', 'Betreten von Sperrzonen ohne Genehmigung', '1750', '6');
INSERT INTO `fine_types` VALUES ('58', 'Sachbeschädigung', '1750', '6');
INSERT INTO `fine_types` VALUES ('59', 'Unangemeldete Versammlung für eine Sache (Demonstration)', '2000', '6');
INSERT INTO `fine_types` VALUES ('60', 'Verstoß gegen das Vermummungsverbot', '2000', '6');
INSERT INTO `fine_types` VALUES ('61', 'Missbrauch des Notrufs', '2250', '6');
INSERT INTO `fine_types` VALUES ('62', 'Amtsanmaßung (Als Beamter ausgeben)', '6550', '6');
INSERT INTO `fine_types` VALUES ('63', 'Bildung einer Terroristischen Vereinigung', '10000', '6');
INSERT INTO `fine_types` VALUES ('64', 'Ausübung einer Staatsgefährdenden Gewalttat (Terrorismus)', '20000', '6');

-- ----------------------------
-- Table structure for interiors
-- ----------------------------
DROP TABLE IF EXISTS `interiors`;
CREATE TABLE `interiors` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'key id',
  `enter` text NOT NULL COMMENT 'enter coords',
  `exit` text NOT NULL COMMENT 'destination coords',
  `iname` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of interiors
-- ----------------------------
INSERT INTO `interiors` VALUES ('1', '{-1045.888,-2751.017,21.3634,321.7075}', '{-1055.37,-2698.47,13.82,234.62}', 'first int');

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `limit` int(11) NOT NULL DEFAULT '-1',
  `rare` int(11) NOT NULL DEFAULT '0',
  `can_remove` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2500 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES ('1', 'alive_chicken', 'lebendes Huhn', '20', '0', '1');
INSERT INTO `items` VALUES ('2', 'slaughtered_chicken', 'geschlachtetes Huhn', '-1', '0', '1');
INSERT INTO `items` VALUES ('3', 'packaged_chicken', 'Hähnchenfilet', '-1', '0', '1');
INSERT INTO `items` VALUES ('4', 'fish', 'Fisch', '-1', '0', '1');
INSERT INTO `items` VALUES ('5', 'stone', 'Stein', '20', '0', '1');
INSERT INTO `items` VALUES ('6', 'washed_stone', 'gewaschener Stein', '-1', '0', '1');
INSERT INTO `items` VALUES ('7', 'copper', 'Kupfer', '-1', '0', '1');
INSERT INTO `items` VALUES ('8', 'iron', 'Eisen', '-1', '0', '1');
INSERT INTO `items` VALUES ('9', 'gold', 'Gold', '-1', '0', '1');
INSERT INTO `items` VALUES ('10', 'diamond', 'Diamant', '-1', '0', '1');
INSERT INTO `items` VALUES ('11', 'wood', 'Holz', '50', '0', '1');
INSERT INTO `items` VALUES ('12', 'cutted_wood', 'Holzschnitt', '-1', '0', '1');
INSERT INTO `items` VALUES ('13', 'packaged_plank', 'Satz Bretter', '-1', '0', '1');
INSERT INTO `items` VALUES ('14', 'petrol', 'Öl', '50', '0', '1');
INSERT INTO `items` VALUES ('15', 'petrol_raffin', 'Raffiniertes Öl', '-1', '0', '1');
INSERT INTO `items` VALUES ('16', 'essence', 'Benzin', '-1', '0', '1');
INSERT INTO `items` VALUES ('17', 'whool', 'Wolle', '50', '0', '1');
INSERT INTO `items` VALUES ('18', 'fabric', 'Tuch', '-1', '0', '1');
INSERT INTO `items` VALUES ('19', 'clothe', 'Kleidung', '-1', '0', '1');
INSERT INTO `items` VALUES ('20', 'opium', 'Schlafmohn', '180', '0', '1');
INSERT INTO `items` VALUES ('21', 'opium_pooch', 'Opium', '36', '0', '1');
INSERT INTO `items` VALUES ('22', 'weed', 'Weed Blüte', '180', '0', '1');
INSERT INTO `items` VALUES ('23', 'weed_pooch', 'Haschisch', '36', '0', '1');
INSERT INTO `items` VALUES ('24', 'coke', 'Koka-Blätter', '180', '0', '1');
INSERT INTO `items` VALUES ('25', 'coke_pooch', 'Koks', '36', '0', '1');
INSERT INTO `items` VALUES ('26', 'meth', 'Meth (Flüssig)', '180', '0', '1');
INSERT INTO `items` VALUES ('27', 'meth_pooch', 'Meth (Kristall)', '36', '0', '1');
INSERT INTO `items` VALUES ('30', 'gazbottle', 'Gasflasche', '-1', '0', '1');
INSERT INTO `items` VALUES ('31', 'fixtool', 'Reparaturwerkzeuge', '-1', '0', '1');
INSERT INTO `items` VALUES ('32', 'carotool', 'Karosseriewerkzeug', '-1', '0', '1');
INSERT INTO `items` VALUES ('33', 'blowpipe', 'Fackeln', '-1', '0', '1');
INSERT INTO `items` VALUES ('34', 'fixkit', 'Reparatur-Kit', '-1', '0', '1');
INSERT INTO `items` VALUES ('35', 'carokit', 'Karosserie-Kit', '-1', '0', '1');
INSERT INTO `items` VALUES ('36', 'bread', 'Burger', '-1', '0', '1');
INSERT INTO `items` VALUES ('37', 'water', 'Wasser', '-1', '0', '1');
INSERT INTO `items` VALUES ('64', 'curry', 'Curry', '-1', '0', '1');
INSERT INTO `items` VALUES ('65', 'cola', 'Coke', '-1', '0', '1');
INSERT INTO `items` VALUES ('66', 'trash1', 'Müll (1KG)', '50', '0', '1');
INSERT INTO `items` VALUES ('67', 'trash2', 'Müll (2KG)', '50', '0', '1');
INSERT INTO `items` VALUES ('68', 'trash3', 'Müll (3KG)', '50', '0', '1');
INSERT INTO `items` VALUES ('70', 'binsack', 'Müllsack', '100', '0', '1');
INSERT INTO `items` VALUES ('71', 'bandage', 'Bandage', '20', '0', '1');
INSERT INTO `items` VALUES ('72', 'medikit', 'Medikit', '5', '0', '1');
INSERT INTO `items` VALUES ('73', 'defi', 'Defibrillator', '1', '0', '0');
INSERT INTO `items` VALUES ('74', 'handcuffs', 'Handschellen', '-1', '0', '1');
INSERT INTO `items` VALUES ('75', 'blackberry', 'BlackBerry MOTION', '1', '1', '0');
INSERT INTO `items` VALUES ('76', 'vodka', 'Glas Vodka', '-1', '0', '1');
INSERT INTO `items` VALUES ('77', 'tequila', 'Tequila-Shot', '-1', '0', '1');
INSERT INTO `items` VALUES ('78', 'sekt', 'Flasche Sekt', '-1', '0', '1');
INSERT INTO `items` VALUES ('79', 'donut', 'Donut', '-1', '0', '1');
INSERT INTO `items` VALUES ('80', 'corny', 'Müsliriegel', '-1', '0', '1');
INSERT INTO `items` VALUES ('81', 'redbull', 'Dose RedBull', '-1', '0', '1');
INSERT INTO `items` VALUES ('82', 'coffee', 'Tasse Kaffee', '-1', '0', '1');
INSERT INTO `items` VALUES ('83', 'cake', 'Kuchen', '-1', '0', '1');
INSERT INTO `items` VALUES ('84', 'bun', 'Brötchen', '-1', '0', '1');
INSERT INTO `items` VALUES ('85', 'wine', 'Flasche Wein', '-1', '0', '1');
INSERT INTO `items` VALUES ('86', 'chocoheart', 'Schoko-Herz', '-1', '0', '1');
INSERT INTO `items` VALUES ('87', 'fanta', 'Fanta', '-1', '0', '1');
INSERT INTO `items` VALUES ('88', 'sprite', 'Sprite', '-1', '0', '1');
INSERT INTO `items` VALUES ('89', 'mezzomix', 'Mezzo Mix', '-1', '0', '1');
INSERT INTO `items` VALUES ('90', 'ojuice', 'O-Saft', '-1', '0', '1');
INSERT INTO `items` VALUES ('91', 'cacao', 'Kakao', '-1', '0', '1');
INSERT INTO `items` VALUES ('92', 'espresso', 'Tasse Espresso', '-1', '0', '1');
INSERT INTO `items` VALUES ('93', 'alcopop', 'Alkopops', '-1', '0', '1');
INSERT INTO `items` VALUES ('94', 'juinggum', 'Kaugummis', '-1', '0', '1');
INSERT INTO `items` VALUES ('95', 'tacco', 'Taccos', '-1', '0', '1');
INSERT INTO `items` VALUES ('96', 'burrito', 'Burritos', '-1', '0', '1');
INSERT INTO `items` VALUES ('97', 'nacho', 'Nachos', '-1', '0', '1');
INSERT INTO `items` VALUES ('98', 'pizza', 'Pizza', '-1', '0', '1');
INSERT INTO `items` VALUES ('99', 'schnitzel', 'Schnitzel', '-1', '0', '1');
INSERT INTO `items` VALUES ('100', 'chickenwings', 'Chicken Wings', '-1', '0', '1');
INSERT INTO `items` VALUES ('101', 'doener', 'Döner', '-1', '0', '1');
INSERT INTO `items` VALUES ('102', 'bratwurst', 'Bratwurst', '-1', '0', '1');
INSERT INTO `items` VALUES ('103', 'currywurst', 'Currywurst', '-1', '0', '1');
INSERT INTO `items` VALUES ('104', 'hotdog', 'Hotdog', '-1', '0', '1');
INSERT INTO `items` VALUES ('105', 'pommes', 'Pommes Frites', '-1', '0', '1');
INSERT INTO `items` VALUES ('106', 'noodles', 'Instant Nudeln', '-1', '0', '1');
INSERT INTO `items` VALUES ('107', 'fribun', 'Frikadellen Brötchen', '-1', '0', '1');
INSERT INTO `items` VALUES ('108', 'bifi', 'BiFi', '-1', '0', '1');
INSERT INTO `items` VALUES ('109', 'chocoice', 'Schoko-Eis', '-1', '0', '1');
INSERT INTO `items` VALUES ('110', 'vanilleeis', 'Vanille-Eis', '-1', '0', '1');
INSERT INTO `items` VALUES ('111', 'fruitice', 'Frucht-Eis', '-1', '0', '1');
INSERT INTO `items` VALUES ('112', 'milkshake', 'Milkshake', '-1', '0', '1');
INSERT INTO `items` VALUES ('113', 'milchschnitte', 'Milchschnitte', '-1', '0', '1');
INSERT INTO `items` VALUES ('114', 'glueck', 'Glückskeks', '-1', '0', '1');
INSERT INTO `items` VALUES ('115', 'springroll', 'Frühlingsrolle', '-1', '0', '1');
INSERT INTO `items` VALUES ('116', 'ricewine', 'Flasche Reiswein', '-1', '0', '1');
INSERT INTO `items` VALUES ('120', 'medics1', 'Aspirin', '10', '0', '1');
INSERT INTO `items` VALUES ('121', 'medics2', 'Antibiotika', '10', '0', '1');
INSERT INTO `items` VALUES ('122', 'medics3', 'Morphin', '10', '0', '1');
INSERT INTO `items` VALUES ('123', 'medics4', 'Sufentanil', '10', '0', '1');
INSERT INTO `items` VALUES ('124', 'medics5', 'Ibuprofen', '10', '0', '1');
INSERT INTO `items` VALUES ('125', 'roses', 'Bund Rosen', '1', '0', '1');
INSERT INTO `items` VALUES ('126', 'pralines', 'Schachtel Pralinen', '1', '0', '1');
INSERT INTO `items` VALUES ('127', 'ring', 'Goldener Ehering (24 Karat)', '2', '0', '1');
INSERT INTO `items` VALUES ('128', 'defi', 'Defibrilator', '3', '0', '1');
INSERT INTO `items` VALUES ('773', 'bread', 'Burger', '-1', '0', '1');
INSERT INTO `items` VALUES ('774', 'curry', 'Curry', '-1', '0', '1');
INSERT INTO `items` VALUES ('775', 'water', 'Wasser', '-1', '0', '1');
INSERT INTO `items` VALUES ('776', 'cola', 'Coke', '-1', '0', '1');
INSERT INTO `items` VALUES ('777', 'whiskey', 'Glas Whiskey', '-1', '0', '1');
INSERT INTO `items` VALUES ('2014', 'nightvision_scope', 'Night Vision Scope', '-1', '0', '1');
INSERT INTO `items` VALUES ('2015', 'thermal_scope', 'Thermal Vision Scope', '-1', '0', '1');
INSERT INTO `items` VALUES ('2016', 'extended_magazine', 'Extended Magazine', '-1', '0', '1');
INSERT INTO `items` VALUES ('2017', 'very_extended_magazine', 'Very Extended Magazine', '-1', '0', '1');
INSERT INTO `items` VALUES ('2018', 'scope', 'Scope', '-1', '0', '1');
INSERT INTO `items` VALUES ('2019', 'advanced_scope', 'Advanced Scope', '-1', '0', '1');
INSERT INTO `items` VALUES ('2020', 'yusuf', 'Luxury Skin', '-1', '0', '1');
INSERT INTO `items` VALUES ('2021', 'lowrider', 'Lowrider Skin', '-1', '0', '1');
INSERT INTO `items` VALUES ('2022', 'incendiary', 'Incendiary Bullets', '-1', '0', '1');
INSERT INTO `items` VALUES ('2023', 'tracer_clip', 'Trackers Bullets', '-1', '0', '1');
INSERT INTO `items` VALUES ('2024', 'hollow', 'Hollow Bullets', '-1', '0', '1');
INSERT INTO `items` VALUES ('2025', 'fmj', 'Perforating Bullets', '-1', '0', '1');
INSERT INTO `items` VALUES ('2026', 'lazer_scope', 'Lazer Scope', '-1', '0', '1');
INSERT INTO `items` VALUES ('2027', 'compansator', 'Compensator', '-1', '0', '1');
INSERT INTO `items` VALUES ('2028', 'barrel', 'Barrel', '-1', '0', '1');

-- ----------------------------
-- Table structure for job_grades
-- ----------------------------
DROP TABLE IF EXISTS `job_grades`;
CREATE TABLE `job_grades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `grade` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `salary` int(11) NOT NULL,
  `skin_male` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `skin_female` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_grades
-- ----------------------------
INSERT INTO `job_grades` VALUES ('1', 'unemployed', '0', 'rsa', 'Hartz IV', '50', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('2', 'lumberjack', '0', 'interim', 'Zeitarbeit', '75', 0x7B226167655F31223A302C22676C61737365735F32223A302C2262656172645F31223A31382C22646563616C735F32223A302C2262656172645F34223A31302C2273686F65735F32223A31352C227473686972745F32223A392C226C6970737469636B5F32223A302C22686169725F32223A322C2261726D73223A36372C2270616E74735F31223A302C22736B696E223A32392C2265796562726F77735F32223A31302C2273686F6573223A31302C2268656C6D65745F31223A35382C226C6970737469636B5F31223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A35362C22676C6173736573223A302C226D616B6575705F34223A302C226D616B6575705F31223A302C22686169725F31223A31312C226270726F6F665F31223A302C22626167735F31223A302C226D61736B5F31223A302C226C6970737469636B5F33223A302C22636861696E5F31223A302C2265796562726F77735F34223A302C22736578223A302C22746F72736F5F31223A3231352C2262656172645F32223A31302C2273686F65735F31223A31322C22646563616C735F31223A302C2266616365223A31392C226C6970737469636B5F34223A302C227473686972745F31223A32392C226D61736B5F32223A302C226167655F32223A302C2265796562726F77735F33223A302C22636861696E5F32223A302C22676C61737365735F31223A302C22656172735F31223A2D312C22626167735F32223A302C22656172735F32223A302C22746F72736F5F32223A31352C226270726F6F665F32223A302C226D616B6575705F32223A302C2265796562726F77735F31223A322C226D616B6575705F33223A302C2270616E74735F32223A332C2262656172645F33223A35362C22686169725F636F6C6F725F32223A31307D, 0x7B226167655F31223A302C22676C61737365735F32223A302C2262656172645F31223A31382C22646563616C735F32223A302C2262656172645F34223A31302C2273686F65735F32223A31352C227473686972745F32223A392C226C6970737469636B5F32223A302C22686169725F32223A322C2261726D73223A36372C2270616E74735F31223A302C22736B696E223A32392C2265796562726F77735F32223A31302C2273686F6573223A31302C2268656C6D65745F31223A35382C226C6970737469636B5F31223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A35362C22676C6173736573223A302C226D616B6575705F34223A302C226D616B6575705F31223A302C22686169725F31223A31312C226270726F6F665F31223A302C22626167735F31223A302C226D61736B5F31223A302C226C6970737469636B5F33223A302C22636861696E5F31223A302C2265796562726F77735F34223A302C22736578223A312C22746F72736F5F31223A3231352C2262656172645F32223A31302C2273686F65735F31223A31322C22646563616C735F31223A302C2266616365223A31392C226C6970737469636B5F34223A302C227473686972745F31223A32392C226D61736B5F32223A302C226167655F32223A302C2265796562726F77735F33223A302C22636861696E5F32223A302C22676C61737365735F31223A302C22656172735F31223A2D312C22626167735F32223A302C22656172735F32223A302C22746F72736F5F32223A31352C226270726F6F665F32223A302C226D616B6575705F32223A302C2265796562726F77735F31223A322C226D616B6575705F33223A302C2270616E74735F32223A332C2262656172645F33223A35362C22686169725F636F6C6F725F32223A31307D);
INSERT INTO `job_grades` VALUES ('3', 'fisherman', '0', 'interim', 'Zeitarbeit', '75', 0x7B227473686972745F31223A31352C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A3131302C22746F72736F5F32223A302C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A32372C2273686F65735F32223A302C22626167735F31223A302C2270616E74735F31223A33362C2270616E74735F32223A302C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A32302C2268656C6D65745F32223A302C22736578223A307D, 0x7B227473686972745F31223A31352C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A3131302C22746F72736F5F32223A302C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A32372C2273686F65735F32223A302C22626167735F31223A302C2270616E74735F31223A33362C2270616E74735F32223A302C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A32302C2268656C6D65745F32223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('4', 'fuel', '0', 'interim', 'Zeitarbeit', '75', 0x7B227473686972745F31223A34362C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A34332C22746F72736F5F32223A302C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A32372C2273686F65735F32223A302C22626167735F31223A302C2270616E74735F31223A33362C2270616E74735F32223A302C2261726D73223A37302C22626167735F32223A302C2268656C6D65745F31223A302C2268656C6D65745F32223A302C22736578223A307D, 0x7B227473686972745F31223A34362C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A34332C22746F72736F5F32223A302C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A32372C2273686F65735F32223A302C22626167735F31223A302C2270616E74735F31223A33362C2270616E74735F32223A302C2261726D73223A37302C22626167735F32223A302C2268656C6D65745F31223A302C2268656C6D65745F32223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('5', 'reporter', '0', 'employee', 'Zeitarbeit', '75', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('6', 'textil', '0', 'interim', 'Zeitarbeit', '75', 0x7B226D61736B5F31223A302C2261726D73223A312C22676C61737365735F31223A302C22686169725F636F6C6F725F32223A342C226D616B6575705F31223A302C2266616365223A31392C22676C6173736573223A302C226D61736B5F32223A302C226D616B6575705F33223A302C22736B696E223A32392C2268656C6D65745F32223A302C226C6970737469636B5F34223A302C22736578223A302C22746F72736F5F31223A32342C226D616B6575705F32223A302C22626167735F32223A302C22636861696E5F32223A302C22656172735F31223A2D312C22626167735F31223A302C226270726F6F665F31223A302C2273686F65735F32223A302C226C6970737469636B5F32223A302C22636861696E5F31223A302C227473686972745F31223A302C2265796562726F77735F33223A302C2270616E74735F32223A302C2262656172645F34223A302C22746F72736F5F32223A302C2262656172645F32223A362C22656172735F32223A302C22686169725F32223A302C2273686F65735F31223A33362C227473686972745F32223A302C2262656172645F33223A302C22686169725F31223A322C22686169725F636F6C6F725F31223A302C2270616E74735F31223A34382C2268656C6D65745F31223A2D312C226270726F6F665F32223A302C2265796562726F77735F34223A302C2265796562726F77735F32223A302C22646563616C735F31223A302C226167655F32223A302C2262656172645F31223A352C2273686F6573223A31302C226C6970737469636B5F31223A302C2265796562726F77735F31223A302C22676C61737365735F32223A302C226D616B6575705F34223A302C22646563616C735F32223A302C226C6970737469636B5F33223A302C226167655F31223A307D, 0x7B226D61736B5F31223A302C2261726D73223A352C22676C61737365735F31223A352C22686169725F636F6C6F725F32223A342C226D616B6575705F31223A302C2266616365223A31392C22676C6173736573223A302C226D61736B5F32223A302C226D616B6575705F33223A302C22736B696E223A32392C2268656C6D65745F32223A302C226C6970737469636B5F34223A302C22736578223A312C22746F72736F5F31223A35322C226D616B6575705F32223A302C22626167735F32223A302C22636861696E5F32223A302C22656172735F31223A2D312C22626167735F31223A302C226270726F6F665F31223A302C2273686F65735F32223A312C226C6970737469636B5F32223A302C22636861696E5F31223A302C227473686972745F31223A32332C2265796562726F77735F33223A302C2270616E74735F32223A302C2262656172645F34223A302C22746F72736F5F32223A302C2262656172645F32223A362C22656172735F32223A302C22686169725F32223A302C2273686F65735F31223A34322C227473686972745F32223A342C2262656172645F33223A302C22686169725F31223A322C22686169725F636F6C6F725F31223A302C2270616E74735F31223A33362C2268656C6D65745F31223A2D312C226270726F6F665F32223A302C2265796562726F77735F34223A302C2265796562726F77735F32223A302C22646563616C735F31223A302C226167655F32223A302C2262656172645F31223A352C2273686F6573223A31302C226C6970737469636B5F31223A302C2265796562726F77735F31223A302C22676C61737365735F32223A302C226D616B6575705F34223A302C22646563616C735F32223A302C226C6970737469636B5F33223A302C226167655F31223A307D);
INSERT INTO `job_grades` VALUES ('7', 'miner', '0', 'interim', 'Zeitarbeit', '75', 0x7B227473686972745F32223A312C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A302C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A312C2270616E74735F31223A37352C2273686F65735F31223A35312C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A37312C227473686972745F31223A35392C2261726D73223A322C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A312C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A302C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A312C2270616E74735F31223A37352C2273686F65735F31223A35312C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A37312C227473686972745F31223A35392C2261726D73223A322C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('8', 'slaughterer', '0', 'interim', 'Zeitarbeit', '75', 0x7B226167655F31223A302C22676C61737365735F32223A302C2262656172645F31223A352C22646563616C735F32223A302C2262656172645F34223A302C2273686F65735F32223A302C227473686972745F32223A302C226C6970737469636B5F32223A302C22686169725F32223A302C2261726D73223A36372C2270616E74735F31223A33362C22736B696E223A32392C2265796562726F77735F32223A302C2273686F6573223A31302C2268656C6D65745F31223A2D312C226C6970737469636B5F31223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C22676C6173736573223A302C226D616B6575705F34223A302C226D616B6575705F31223A302C22686169725F31223A322C226270726F6F665F31223A302C22626167735F31223A302C226D61736B5F31223A302C226C6970737469636B5F33223A302C22636861696E5F31223A302C2265796562726F77735F34223A302C22736578223A302C22746F72736F5F31223A35362C2262656172645F32223A362C2273686F65735F31223A31322C22646563616C735F31223A302C2266616365223A31392C226C6970737469636B5F34223A302C227473686972745F31223A31352C226D61736B5F32223A302C226167655F32223A302C2265796562726F77735F33223A302C22636861696E5F32223A302C22676C61737365735F31223A302C22656172735F31223A2D312C22626167735F32223A302C22656172735F32223A302C22746F72736F5F32223A302C226270726F6F665F32223A302C226D616B6575705F32223A302C2265796562726F77735F31223A302C226D616B6575705F33223A302C2270616E74735F32223A302C2262656172645F33223A302C22686169725F636F6C6F725F32223A347D, 0x7B226167655F31223A302C22676C61737365735F32223A302C2262656172645F31223A352C22646563616C735F32223A302C2262656172645F34223A302C2273686F65735F32223A302C227473686972745F32223A302C226C6970737469636B5F32223A302C22686169725F32223A302C2261726D73223A37322C2270616E74735F31223A34352C22736B696E223A32392C2265796562726F77735F32223A302C2273686F6573223A31302C2268656C6D65745F31223A2D312C226C6970737469636B5F31223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C22676C6173736573223A302C226D616B6575705F34223A302C226D616B6575705F31223A302C22686169725F31223A322C226270726F6F665F31223A302C22626167735F31223A302C226D61736B5F31223A302C226C6970737469636B5F33223A302C22636861696E5F31223A302C2265796562726F77735F34223A302C22736578223A312C22746F72736F5F31223A34392C2262656172645F32223A362C2273686F65735F31223A32342C22646563616C735F31223A302C2266616365223A31392C226C6970737469636B5F34223A302C227473686972745F31223A392C226D61736B5F32223A302C226167655F32223A302C2265796562726F77735F33223A302C22636861696E5F32223A302C22676C61737365735F31223A352C22656172735F31223A2D312C22626167735F32223A302C22656172735F32223A302C22746F72736F5F32223A302C226270726F6F665F32223A302C226D616B6575705F32223A302C2265796562726F77735F31223A302C226D616B6575705F33223A302C2270616E74735F32223A302C2262656172645F33223A302C22686169725F636F6C6F725F32223A347D);
INSERT INTO `job_grades` VALUES ('13', 'mecano', '0', 'recrue', 'Rekrut', '600', 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A307D, 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A317D);
INSERT INTO `job_grades` VALUES ('14', 'mecano', '1', 'novice', 'Anfänger', '800', 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A307D, 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A317D);
INSERT INTO `job_grades` VALUES ('15', 'mecano', '2', 'experimente', 'Experte', '1100', 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A307D, 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A317D);
INSERT INTO `job_grades` VALUES ('16', 'mecano', '3', 'chief', 'Schichtführer', '1300', 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A307D, 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A317D);
INSERT INTO `job_grades` VALUES ('17', 'mecano', '4', 'boss', 'Chef', '1500', 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A307D, 0x7B227473686972745F31223A35372C227473686972745F32223A302C22656172735F31223A302C22676C61737365735F31223A302C22746F72736F5F31223A392C22746F72736F5F32223A342C22656172735F32223A302C22676C61737365735F32223A302C2273686F65735F31223A33322C2273686F65735F32223A322C22626167735F31223A302C2270616E74735F31223A39302C2270616E74735F32223A392C2261726D73223A36332C22626167735F32223A302C2268656C6D65745F31223A37372C2268656C6D65745F32223A312C22736578223A317D);
INSERT INTO `job_grades` VALUES ('18', 'realestateagent', '0', 'location', 'Vermieter', '110', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('19', 'realestateagent', '1', 'vendeur', 'Verkäufer', '125', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('20', 'realestateagent', '2', 'gestion', 'Manager', '140', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('21', 'realestateagent', '3', 'boss', 'Boss', '0', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('22', 'taxi', '0', 'recrue', 'Rekrut', '200', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('23', 'taxi', '1', 'novice', 'Anfänger', '300', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('24', 'taxi', '2', 'experimente', 'Experte', '360', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('25', 'taxi', '3', 'uber', 'Schichtführer', '480', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('26', 'taxi', '4', 'boss', 'Chef', '500', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('31', 'cardealer', '0', 'recruit', 'Neuling', '110', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('32', 'cardealer', '1', 'novice', 'Verkäufer', '125', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('33', 'cardealer', '2', 'experienced', 'Verkaufsleiter', '140', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('34', 'cardealer', '3', 'boss', 'Boss', '0', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('35', 'banker', '0', 'advisor', 'Berater', '110', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('36', 'banker', '1', 'banker', 'Banker', '120', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('37', 'banker', '2', 'business_banker', 'Business Banker', '130', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('38', 'banker', '3', 'trader', 'Trader', '140', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('39', 'banker', '4', 'boss', 'Boss', '0', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('40', 'muellmann', '0', 'interim', 'Zeitarbeiter', '75', 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('41', 'bus', '0', 'recrue', 'Rekrut', '112', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('42', 'bus', '1', 'novice', 'Anfänger', '124', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('43', 'bus', '2', 'experimente', 'Experte', '136', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('44', 'bus', '3', 'driver', 'Fahrer', '148', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('45', 'bus', '4', 'boss', 'Chef', '0', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('49', 'trucker', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F31223A35392C22746F72736F5F31223A38392C2261726D73223A33312C2270616E74735F31223A33362C22676C61737365735F31223A31392C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C2266616365223A322C22676C61737365735F32223A302C22746F72736F5F32223A312C2273686F6573223A33352C22686169725F31223A302C22736B696E223A302C22736578223A302C22676C61737365735F31223A31392C2270616E74735F32223A302C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A357D, 0x7B227473686972745F31223A33362C22746F72736F5F31223A302C2261726D73223A36382C2270616E74735F31223A33302C22676C61737365735F31223A31352C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C2266616365223A32372C22676C61737365735F32223A302C22746F72736F5F32223A31312C2273686F6573223A32362C22686169725F31223A352C22736B696E223A302C22736578223A312C22676C61737365735F31223A31352C2270616E74735F32223A322C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A31397D);
INSERT INTO `job_grades` VALUES ('50', 'garbageman', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('51', 'realgarbageman', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('52', 'mafia', '0', 'interim', 'Mafia', '250', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('81', 'police', '0', 'recruit', 'Recruit', '100', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('82', 'police', '1', 'officer', 'Police Officer I', '200', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('83', 'police', '2', 'officer', 'Police Officer II', '300', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('84', 'police', '3', 'officer', 'Police Officer III', '400', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('85', 'police', '4', 'officer', 'Sergant I', '450', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('86', 'police', '5', 'officer', 'Sergant II', '475', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('87', 'police', '6', 'sergeant', 'Detective I', '500', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('88', 'police', '7', 'sergeant', 'Detective II', '525', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('89', 'police', '8', 'sergeant', 'Detective III', '550', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('90', 'police', '9', 'lieutenant', 'Lieutenant', '575', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('91', 'police', '10', 'lieutenant', 'Captain', '600', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('92', 'police', '11', 'lieutenant', 'Commander', '700', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('93', 'police', '12', 'boss', 'Deputy Chief', '800', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('94', 'police', '13', 'boss', 'Assistant Chief', '900', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('95', 'police', '14', 'boss', 'Chief of Police', '950', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('96', 'ambulance', '0', 'trainee', 'Volunteer', '100', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('97', 'ambulance', '1', 'medic', 'First Responder', '150', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('98', 'ambulance', '2', 'medic', 'EMR', '200', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('99', 'ambulance', '3', 'paramedic', 'EMT', '250', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('100', 'ambulance', '4', 'paramedic', 'AEMT', '300', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('101', 'ambulance', '5', 'emergencyparamedic', 'Paramedic', '350', 0x7B0A2020202020202020202261726D7322203A2039302C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A092022646563616C735F3122203A2035372C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203234392C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031352C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130352C0A20202020202020202022646563616C735F3122203A2036352C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235372C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A2031342C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('102', 'ambulance', '6', 'doctor', 'Assistant Physician, M.D.', '500', 0x7B0A2020202020202020202261726D7322203A2038352C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A20202020202020202022646563616C735F3122203A2035382C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235302C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A203132392C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130392C0A20202020202020202022646563616C735F3122203A2036362C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235382C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A203135392C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('103', 'ambulance', '7', 'chief', 'Emergency Physician, M.D.', '550', 0x7B0A2020202020202020202261726D7322203A2038352C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A20202020202020202022646563616C735F3122203A2035382C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235302C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A203132392C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130392C0A20202020202020202022646563616C735F3122203A2036362C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20312C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235382C0A20202020202020202022746F72736F5F3222203A20312C0A202020202020202020227473686972745F3122203A203135392C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('104', 'ambulance', '8', 'boss', 'Senior Physician, M.D.', '650', 0x7B0A2020202020202020202261726D7322203A2038352C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A20202020202020202022646563616C735F3122203A2035382C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20302C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235302C0A20202020202020202022746F72736F5F3222203A20302C0A202020202020202020227473686972745F3122203A203132392C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130392C0A20202020202020202022646563616C735F3122203A2036362C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20302C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20392C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235382C0A20202020202020202022746F72736F5F3222203A20302C0A202020202020202020227473686972745F3122203A203135392C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('105', 'ambulance', '9', 'boss', 'Head Physician, M.D.', '850', 0x7B0A2020202020202020202261726D7322203A2038352C0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A20202020202020202022646563616C735F3122203A2035382C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132322C0A2020202020202020202268656C6D65745F3222203A20302C0A2020202020202020202270616E74735F3122203A2035392C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235302C0A20202020202020202022746F72736F5F3222203A20302C0A202020202020202020227473686972745F3122203A203132392C0A202020202020202020227473686972745F3222203A20300A207D, 0x7B0A202020202020202020226270726F6F665F3122203A20302C0A202020202020202020226270726F6F665F3222203A20302C0A2020202020202020202261726D7322203A203130392C0A20202020202020202022646563616C735F3122203A2036362C0A20202020202020202022646563616C735F3222203A20302C0A2020202020202020202268656C6D65745F3122203A203132312C0A2020202020202020202268656C6D65745F3222203A20302C0A2020202020202020202270616E74735F3122203A2036312C0A2020202020202020202270616E74735F3222203A20382C0A2020202020202020202273686F65735F3122203A2032342C0A2020202020202020202273686F65735F3222203A20302C0A20202020202020202022746F72736F5F3122203A203235382C0A20202020202020202022746F72736F5F3222203A20302C0A202020202020202020227473686972745F3122203A203135392C0A202020202020202020227473686972745F3222203A20300A207D);
INSERT INTO `job_grades` VALUES ('106', 'government', '0', 'security', 'Junior Agent', '400', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('107', 'government', '1', 'agent', 'Agent', '450', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('108', 'government', '2', 'agent', 'Senior Agent', '500', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('109', 'government', '3', 'agent', 'Head Agent', '550', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('110', 'government', '4', 'specagent', 'Special Agent', '700', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('111', 'government', '5', 'boss', 'Deputy Director', '750', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('112', 'government', '6', 'boss', 'Director', '800', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32372C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A33332C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A31322C2273686F65735F32223A362C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A312C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A362C2270616E74735F32223A302C2273686F65735F31223A32322C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('113', 'government', '7', 'senator', 'Senator', '900', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32382C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A35352C2273686F65735F32223A392C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A327D, 0x7B227473686972745F31223A32302C227473686972745F32223A302C22746F72736F5F31223A362C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A382C2270616E74735F32223A302C2273686F65735F31223A31392C2273686F65735F32223A392C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('114', 'government', '8', 'boss', 'President', '1000', 0x7B227473686972745F31223A342C227473686972745F32223A302C22746F72736F5F31223A32382C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A32352C2270616E74735F32223A302C2273686F65735F31223A35352C2273686F65735F32223A352C2268656C6D65745F31223A2D312C2268656C6D65745F32223A302C22636861696E5F31223A32342C22636861696E5F32223A357D, 0x7B227473686972745F31223A32302C227473686972745F32223A322C22746F72736F5F31223A362C22746F72736F5F32223A342C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A312C2270616E74735F31223A382C2270616E74735F32223A302C2273686F65735F31223A32302C2273686F65735F32223A342C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);

-- ----------------------------
-- Table structure for job_vehicle_categories
-- ----------------------------
DROP TABLE IF EXISTS `job_vehicle_categories`;
CREATE TABLE `job_vehicle_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `label` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_vehicle_categories
-- ----------------------------
INSERT INTO `job_vehicle_categories` VALUES ('1', 'police', 'Polizei');
INSERT INTO `job_vehicle_categories` VALUES ('2', 'taxi', 'Taxi');
INSERT INTO `job_vehicle_categories` VALUES ('3', 'ambulance', 'Sanitäter');
INSERT INTO `job_vehicle_categories` VALUES ('4', 'mecano', 'Mechaniker');

-- ----------------------------
-- Table structure for job_vehicles
-- ----------------------------
DROP TABLE IF EXISTS `job_vehicles`;
CREATE TABLE `job_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `model` varchar(60) NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(60) DEFAULT NULL,
  `job` varchar(60) NOT NULL,
  `grade` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_vehicles
-- ----------------------------
INSERT INTO `job_vehicles` VALUES ('2', 'Taxi', 'taxi', '41590', 'taxi', 'taxi', '0');
INSERT INTO `job_vehicles` VALUES ('4', 'ADAC Abschleppwagen', 'flatbed', '127000', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('7', 'kl. ADAC Abschleppwagen', 'towtruck', '50900', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('8', 'ADAC Vito', 'burrito4', '45280', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('9', 'ADAC VW Caddy', 'utillitruck3', '21863', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('10', 'ADAC Ford Crown Victoria', 'asea', '12169', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('42', 'RTW', 'ambulance', '89000', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('43', 'NEF T6', 'lspd12', '51230', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('44', 'NEF Offroad', 'pranger', '32750', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('45', 'Tahoe Chiefcar', 'lspd11', '32750', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('53', 'NEF BMW', 'lspd10', '55000', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('54', 'Ford CVPI', 'police1', '23450', 'police', 'police', '0');
INSERT INTO `job_vehicles` VALUES ('55', 'Ford Taurus PI', 'police2', '26450', 'police', 'police', '0');
INSERT INTO `job_vehicles` VALUES ('56', 'Ford CVPI Sheriff', 'sfbc4', '23450', 'police', 'police', '0');
INSERT INTO `job_vehicles` VALUES ('57', 'Dodge Charger Sheriff', 'sfbc2', '29750', 'police', 'police', '0');

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `whitelisted` tinyint(1) NOT NULL DEFAULT '0',
  `job_place` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jobs
-- ----------------------------
INSERT INTO `jobs` VALUES ('1', 'unemployed', '❌ Arbeitslos', '0', '1');
INSERT INTO `jobs` VALUES ('2', 'slaughterer', 'Schlachter', '0', '2');
INSERT INTO `jobs` VALUES ('3', 'fisherman', 'Fischer', '0', '2');
INSERT INTO `jobs` VALUES ('4', 'miner', '⛰ Bergarbeiter', '0', '2');
INSERT INTO `jobs` VALUES ('5', 'lumberjack', 'Holzfäller', '0', '2');
INSERT INTO `jobs` VALUES ('6', 'fuel', 'Refiner', '0', '2');
INSERT INTO `jobs` VALUES ('7', 'reporter', 'Reporter', '1', '1');
INSERT INTO `jobs` VALUES ('8', 'textil', 'Schneider', '0', '2');
INSERT INTO `jobs` VALUES ('9', 'police', 'Polizist', '1', '1');
INSERT INTO `jobs` VALUES ('10', 'mecano', 'Mechaniker', '1', '1');
INSERT INTO `jobs` VALUES ('11', 'realestateagent', 'Makler', '1', '1');
INSERT INTO `jobs` VALUES ('12', 'taxi', 'Taxi', '0', '1');
INSERT INTO `jobs` VALUES ('13', 'ambulance', 'Sanitäter', '1', '1');
INSERT INTO `jobs` VALUES ('14', 'cardealer', 'Autohändler', '1', '1');
INSERT INTO `jobs` VALUES ('15', 'banker', 'Banker', '1', '1');
INSERT INTO `jobs` VALUES ('16', 'muellmann', 'Müllmann', '1', '1');
INSERT INTO `jobs` VALUES ('17', 'bus', 'Busfahrer', '0', '1');
INSERT INTO `jobs` VALUES ('18', 'trucker', 'Spedition', '0', '2');
INSERT INTO `jobs` VALUES ('19', 'garbageman', 'Müllmann', '1', '2');
INSERT INTO `jobs` VALUES ('20', 'realgarbageman', 'Müllmann', '0', '2');
INSERT INTO `jobs` VALUES ('21', 'unemployed', '❌ Arbeitslos', '0', '2');
INSERT INTO `jobs` VALUES ('22', 'mafia', 'Mafia', '1', '2');
INSERT INTO `jobs` VALUES ('23', 'government', 'Regierung', '1', '1');

-- ----------------------------
-- Table structure for licenses
-- ----------------------------
DROP TABLE IF EXISTS `licenses`;
CREATE TABLE `licenses` (
  `id` int(11) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of licenses
-- ----------------------------
INSERT INTO `licenses` VALUES ('1', 'dmv', 'Theoretische-Prüfung');
INSERT INTO `licenses` VALUES ('2', 'drive', 'Auto-Führerschein');
INSERT INTO `licenses` VALUES ('3', 'drive_bike', 'Motorrad-Führerschein');
INSERT INTO `licenses` VALUES ('4', 'drive_truck', 'LKW-Führerschein');
INSERT INTO `licenses` VALUES ('5', 'weapon', 'Lizenz zum Tragen von Handfeuerwaffen');

-- ----------------------------
-- Table structure for owned_job_vehicles
-- ----------------------------
DROP TABLE IF EXISTS `owned_job_vehicles`;
CREATE TABLE `owned_job_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle` longtext NOT NULL,
  `owner` varchar(60) NOT NULL,
  `job` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owned_job_vehicles
-- ----------------------------

-- ----------------------------
-- Table structure for owned_properties
-- ----------------------------
DROP TABLE IF EXISTS `owned_properties`;
CREATE TABLE `owned_properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` double NOT NULL,
  `rented` int(11) NOT NULL,
  `owner` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owned_properties
-- ----------------------------

-- ----------------------------
-- Table structure for owned_vehicles
-- ----------------------------
DROP TABLE IF EXISTS `owned_vehicles`;
CREATE TABLE `owned_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `owner` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Etat de la voiture',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owned_vehicles
-- ----------------------------
INSERT INTO `owned_vehicles` VALUES ('1', 0x7B226D6F6446726F6E74576865656C73223A32302C226D6F64537472757473223A2D312C226865616C7468223A3938302C226D6F6457696E646F7773223A2D312C226D6F6446726F6E7442756D706572223A2D312C226D6F644772696C6C65223A2D312C226D6F644C6976657279223A2D312C226D6F64456E67696E65426C6F636B223A2D312C226D6F6441726368436F766572223A2D312C226D6F644272616B6573223A322C22636F6C6F7232223A3131332C2274797265536D6F6B65436F6C6F72223A5B302C302C3132385D2C226D6F645472616E736D697373696F6E223A322C226D6F644F726E616D656E7473223A2D312C226D6F64506C617465486F6C646572223A2D312C226D6F6453696465536B697274223A2D312C226D6F64537065616B657273223A2D312C22706C617465223A2241444D494E222C226D6F64486F6F64223A2D312C226D6F64536869667465724C656176657273223A2D312C22636F6C6F7231223A31312C22706561726C657363656E74436F6C6F72223A38312C226D6F6454616E6B223A2D312C226D6F6446656E646572223A2D312C226D6F64446F6F72537065616B6572223A2D312C226D6F6444617368626F617264223A2D312C22646972744C6576656C223A382E3238303631333839393233312C226D6F64526967687446656E646572223A2D312C22776865656C73223A372C226D6F6441657269616C73223A2D312C226D6F64536D6F6B65456E61626C6564223A312C226D6F64487964726F6C6963223A2D312C226D6F64486F726E73223A2D312C2277696E646F7754696E74223A332C226D6F644261636B576865656C73223A2D312C226D6F6441697246696C746572223A2D312C226E656F6E436F6C6F72223A5B302C302C3132385D2C226D6F64456E67696E65223A332C226D6F645265617242756D706572223A2D312C226D6F6458656E6F6E223A312C226D6F64547572626F223A312C22706C617465496E646578223A312C226D6F64526F6F66223A2D312C226D6F645472696D42223A2D312C22776865656C436F6C6F72223A3135362C226D6F6445786861757374223A2D312C226D6F6453757370656E73696F6E223A332C226D6F6441506C617465223A2D312C226D6F6453706F696C657273223A2D312C226D6F6456616E697479506C617465223A2D312C226D6F645472756E6B223A2D312C226D6F645365617473223A2D312C226D6F645374656572696E67576865656C223A2D312C226D6F644469616C223A2D312C226D6F6441726D6F72223A342C226E656F6E456E61626C6564223A5B312C312C312C315D2C226D6F645472696D41223A2D312C226D6F644672616D65223A2D312C226D6F64656C223A2D313539393335383132317D, 'steam:110000106abab10', '1');
INSERT INTO `owned_vehicles` VALUES ('2', 0x7B226D6F6453706F696C657273223A342C2277696E646F7754696E74223A312C226D6F6441657269616C73223A2D312C226D6F6446656E646572223A2D312C226D6F644C6976657279223A2D312C226D6F645472756E6B223A2D312C22636F6C6F7232223A3131382C226D6F644272616B6573223A322C226D6F644F726E616D656E7473223A2D312C226D6F645472696D41223A2D312C226D6F6445786861757374223A302C226D6F6446726F6E74576865656C73223A31372C226865616C7468223A313030302C226D6F645472616E736D697373696F6E223A322C226D6F6446726F6E7442756D706572223A312C22706C617465496E646578223A312C226D6F64456E67696E65426C6F636B223A2D312C22776865656C73223A372C2274797265536D6F6B65436F6C6F72223A5B302C3235352C305D2C226D6F645472696D42223A2D312C22636F6C6F7231223A31312C226D6F6444617368626F617264223A2D312C226D6F645374656572696E67576865656C223A2D312C226D6F644672616D65223A2D312C226D6F64656C223A313039333639373035342C226D6F6441726D6F72223A342C226D6F6458656E6F6E223A312C226D6F6453696465536B697274223A312C226D6F6456616E697479506C617465223A2D312C226D6F6441697246696C746572223A2D312C226D6F6441726368436F766572223A2D312C22706561726C657363656E74436F6C6F72223A3131322C226D6F64446F6F72537065616B6572223A2D312C226D6F644772696C6C65223A312C22776865656C436F6C6F72223A39322C226D6F64526F6F66223A302C226D6F64487964726F6C6963223A2D312C226D6F645365617473223A2D312C226D6F644261636B576865656C73223A2D312C226D6F6453757370656E73696F6E223A332C226D6F64506C617465486F6C646572223A2D312C226D6F6454616E6B223A2D312C226D6F6441506C617465223A2D312C226E656F6E456E61626C6564223A5B312C312C312C315D2C226D6F64486F6F64223A322C22706C617465223A2241444D494E222C226D6F64547572626F223A312C226D6F64526967687446656E646572223A2D312C226D6F644469616C223A2D312C226D6F64537472757473223A2D312C22646972744C6576656C223A302E34383634323238303639373832322C226D6F64536D6F6B65456E61626C6564223A312C226D6F645265617242756D706572223A312C226D6F64536869667465724C656176657273223A2D312C226E656F6E436F6C6F72223A5B302C3235352C305D2C226D6F64456E67696E65223A332C226D6F6457696E646F7773223A2D312C226D6F64486F726E73223A34322C226D6F64537065616B657273223A2D317D, 'steam:110000106abab10', '1');
INSERT INTO `owned_vehicles` VALUES ('3', 0x7B226D6F6446726F6E74576865656C73223A2D312C226D6F64537472757473223A2D312C226865616C7468223A3939392C226D6F6457696E646F7773223A2D312C226D6F6446726F6E7442756D706572223A2D312C226D6F644772696C6C65223A2D312C226D6F644C6976657279223A2D312C226D6F64456E67696E65426C6F636B223A2D312C226D6F6441726368436F766572223A2D312C226D6F644272616B6573223A2D312C22636F6C6F7232223A322C2274797265536D6F6B65436F6C6F72223A5B3235352C3235352C3235355D2C226D6F645472616E736D697373696F6E223A2D312C226D6F644F726E616D656E7473223A2D312C226D6F64506C617465486F6C646572223A2D312C226D6F6453696465536B697274223A2D312C226D6F64537065616B657273223A2D312C22706C617465223A2241444D494E222C226D6F64486F6F64223A2D312C226D6F64536869667465724C656176657273223A2D312C22636F6C6F7231223A322C22706561726C657363656E74436F6C6F72223A372C226D6F6454616E6B223A2D312C226D6F6446656E646572223A2D312C226D6F64446F6F72537065616B6572223A2D312C226D6F6444617368626F617264223A2D312C22646972744C6576656C223A362E353438393038373130343739382C226D6F64526967687446656E646572223A2D312C22776865656C73223A372C226D6F6441657269616C73223A2D312C226D6F64536D6F6B65456E61626C6564223A312C226D6F64487964726F6C6963223A2D312C226D6F64486F726E73223A2D312C2277696E646F7754696E74223A2D312C226D6F644261636B576865656C73223A2D312C226D6F6441697246696C746572223A2D312C226E656F6E436F6C6F72223A5B3133352C3230362C3233355D2C226D6F64456E67696E65223A2D312C226D6F645265617242756D706572223A2D312C226D6F6458656E6F6E223A312C226D6F64547572626F223A312C22706C617465496E646578223A312C226D6F64526F6F66223A2D312C226D6F645472696D42223A2D312C22776865656C436F6C6F72223A3135362C226D6F6445786861757374223A2D312C226D6F6453757370656E73696F6E223A2D312C226D6F6441506C617465223A2D312C226D6F6453706F696C657273223A2D312C226D6F6456616E697479506C617465223A2D312C226D6F645472756E6B223A2D312C226D6F645365617473223A2D312C226D6F645374656572696E67576865656C223A2D312C226D6F644469616C223A2D312C226D6F6441726D6F72223A2D312C226E656F6E456E61626C6564223A5B312C312C312C315D2C226D6F645472696D41223A2D312C226D6F644672616D65223A2D312C226D6F64656C223A2D3330393130353136397D, 'steam:110000106abab10', '1');

-- ----------------------------
-- Table structure for properties
-- ----------------------------
DROP TABLE IF EXISTS `properties`;
CREATE TABLE `properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `entering` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `exit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `inside` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `outside` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `ipls` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]',
  `gateway` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `is_single` int(11) DEFAULT NULL,
  `is_room` int(11) DEFAULT NULL,
  `is_gateway` int(11) DEFAULT NULL,
  `room_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of properties
-- ----------------------------
INSERT INTO `properties` VALUES ('1', 'WhispymoundDrive', '2677 Whispymound Drive', '{\"y\":564.89,\"z\":182.959,\"x\":119.384}', '{\"x\":117.347,\"y\":559.506,\"z\":183.304}', '{\"y\":557.032,\"z\":183.301,\"x\":118.037}', '{\"y\":567.798,\"z\":182.131,\"x\":119.249}', '[]', null, '1', '1', '0', '{\"x\":118.748,\"y\":566.573,\"z\":175.697}', '1500000');
INSERT INTO `properties` VALUES ('2', 'NorthConkerAvenue2045', '2045 North Conker Avenue', '{\"x\":372.796,\"y\":428.327,\"z\":144.685}', '{\"x\":373.548,\"y\":422.982,\"z\":144.907},', '{\"y\":420.075,\"z\":145.904,\"x\":372.161}', '{\"x\":372.454,\"y\":432.886,\"z\":143.443}', '[]', null, '1', '1', '0', '{\"x\":377.349,\"y\":429.422,\"z\":137.3}', '1500000');
INSERT INTO `properties` VALUES ('3', 'RichardMajesticApt2', 'Richard Majestic, Apt 2', '{\"y\":-379.165,\"z\":37.961,\"x\":-936.363}', '{\"y\":-365.476,\"z\":113.274,\"x\":-913.097}', '{\"y\":-367.637,\"z\":113.274,\"x\":-918.022}', '{\"y\":-382.023,\"z\":37.961,\"x\":-943.626}', '[]', null, '1', '1', '0', '{\"x\":-927.554,\"y\":-377.744,\"z\":112.674}', '1700000');
INSERT INTO `properties` VALUES ('4', 'NorthConkerAvenue2044', '2044 North Conker Avenue', '{\"y\":440.8,\"z\":146.702,\"x\":346.964}', '{\"y\":437.456,\"z\":148.394,\"x\":341.683}', '{\"y\":435.626,\"z\":148.394,\"x\":339.595}', '{\"x\":350.535,\"y\":443.329,\"z\":145.764}', '[]', null, '1', '1', '0', '{\"x\":337.726,\"y\":436.985,\"z\":140.77}', '1500000');
INSERT INTO `properties` VALUES ('5', 'WildOatsDrive', '3655 Wild Oats Drive', '{\"y\":502.696,\"z\":136.421,\"x\":-176.003}', '{\"y\":497.817,\"z\":136.653,\"x\":-174.349}', '{\"y\":495.069,\"z\":136.666,\"x\":-173.331}', '{\"y\":506.412,\"z\":135.0664,\"x\":-177.927}', '[]', null, '1', '1', '0', '{\"x\":-174.725,\"y\":493.095,\"z\":129.043}', '1500000');
INSERT INTO `properties` VALUES ('6', 'HillcrestAvenue2862', '2862 Hillcrest Avenue', '{\"y\":596.58,\"z\":142.641,\"x\":-686.554}', '{\"y\":591.988,\"z\":144.392,\"x\":-681.728}', '{\"y\":590.608,\"z\":144.392,\"x\":-680.124}', '{\"y\":599.019,\"z\":142.059,\"x\":-689.492}', '[]', null, '1', '1', '0', '{\"x\":-680.46,\"y\":588.6,\"z\":136.769}', '1500000');
INSERT INTO `properties` VALUES ('7', 'LowEndApartment', 'Appartement de base', '{\"y\":-1078.735,\"z\":28.4031,\"x\":292.528}', '{\"y\":-1007.152,\"z\":-102.002,\"x\":265.845}', '{\"y\":-1002.802,\"z\":-100.008,\"x\":265.307}', '{\"y\":-1078.669,\"z\":28.401,\"x\":296.738}', '[]', null, '1', '1', '0', '{\"x\":265.916,\"y\":-999.38,\"z\":-100.008}', '125790');
INSERT INTO `properties` VALUES ('8', 'MadWayneThunder', '2113 Mad Wayne Thunder', '{\"y\":454.955,\"z\":96.462,\"x\":-1294.433}', '{\"x\":-1289.917,\"y\":449.541,\"z\":96.902}', '{\"y\":446.322,\"z\":96.899,\"x\":-1289.642}', '{\"y\":455.453,\"z\":96.517,\"x\":-1298.851}', '[]', null, '1', '1', '0', '{\"x\":-1287.306,\"y\":455.901,\"z\":89.294}', '1500000');
INSERT INTO `properties` VALUES ('9', 'HillcrestAvenue2874', '2874 Hillcrest Avenue', '{\"x\":-853.346,\"y\":696.678,\"z\":147.782}', '{\"y\":690.875,\"z\":151.86,\"x\":-859.961}', '{\"y\":688.361,\"z\":151.857,\"x\":-859.395}', '{\"y\":701.628,\"z\":147.773,\"x\":-855.007}', '[]', null, '1', '1', '0', '{\"x\":-858.543,\"y\":697.514,\"z\":144.253}', '1500000');
INSERT INTO `properties` VALUES ('10', 'HillcrestAvenue2868', '2868 Hillcrest Avenue', '{\"y\":620.494,\"z\":141.588,\"x\":-752.82}', '{\"y\":618.62,\"z\":143.153,\"x\":-759.317}', '{\"y\":617.629,\"z\":143.153,\"x\":-760.789}', '{\"y\":621.281,\"z\":141.254,\"x\":-750.919}', '[]', null, '1', '1', '0', '{\"x\":-762.504,\"y\":618.992,\"z\":135.53}', '1500000');
INSERT INTO `properties` VALUES ('11', 'TinselTowersApt12', 'Tinsel Towers, Apt 42', '{\"y\":37.025,\"z\":42.58,\"x\":-618.299}', '{\"y\":58.898,\"z\":97.2,\"x\":-603.301}', '{\"y\":58.941,\"z\":97.2,\"x\":-608.741}', '{\"y\":30.603,\"z\":42.524,\"x\":-620.017}', '[]', null, '1', '1', '0', '{\"x\":-622.173,\"y\":54.585,\"z\":96.599}', '1700000');
INSERT INTO `properties` VALUES ('12', 'MiltonDrive', 'Milton Drive', '{\"x\":-775.17,\"y\":312.01,\"z\":84.658}', null, null, '{\"x\":-775.346,\"y\":306.776,\"z\":84.7}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('13', 'Modern1Apartment', 'Appartement Moderne 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_01_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.661,\"y\":327.672,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('14', 'Modern2Apartment', 'Appartement Moderne 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_01_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.735,\"y\":326.757,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('15', 'Modern3Apartment', 'Appartement Moderne 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_01_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.386,\"y\":330.782,\"z\":195.08}', '1300000');
INSERT INTO `properties` VALUES ('16', 'Mody1Apartment', 'Appartement Mode 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_02_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.615,\"y\":327.878,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('17', 'Mody2Apartment', 'Appartement Mode 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_02_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.297,\"y\":327.092,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('18', 'Mody3Apartment', 'Appartement Mode 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_02_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.303,\"y\":330.932,\"z\":195.085}', '1300000');
INSERT INTO `properties` VALUES ('19', 'Vibrant1Apartment', 'Appartement Vibrant 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_03_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.885,\"y\":327.641,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('20', 'Vibrant2Apartment', 'Appartement Vibrant 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_03_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.607,\"y\":327.344,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('21', 'Vibrant3Apartment', 'Appartement Vibrant 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_03_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.525,\"y\":330.851,\"z\":195.085}', '1300000');
INSERT INTO `properties` VALUES ('22', 'Sharp1Apartment', 'Appartement Persan 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_04_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.527,\"y\":327.89,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('23', 'Sharp2Apartment', 'Appartement Persan 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_04_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.642,\"y\":326.497,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('24', 'Sharp3Apartment', 'Appartement Persan 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_04_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.503,\"y\":331.318,\"z\":195.085}', '1300000');
INSERT INTO `properties` VALUES ('25', 'Monochrome1Apartment', 'Appartement Monochrome 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_05_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.289,\"y\":328.086,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('26', 'Monochrome2Apartment', 'Appartement Monochrome 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_05_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.692,\"y\":326.762,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('27', 'Monochrome3Apartment', 'Appartement Monochrome 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_05_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.094,\"y\":330.976,\"z\":195.085}', '1300000');
INSERT INTO `properties` VALUES ('28', 'Seductive1Apartment', 'Appartement Séduisant 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_06_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.263,\"y\":328.104,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('29', 'Seductive2Apartment', 'Appartement Séduisant 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_06_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.655,\"y\":326.611,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('30', 'Seductive3Apartment', 'Appartement Séduisant 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_06_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.3,\"y\":331.414,\"z\":195.085}', '1300000');
INSERT INTO `properties` VALUES ('31', 'Regal1Apartment', 'Appartement Régal 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_07_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.956,\"y\":328.257,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('32', 'Regal2Apartment', 'Appartement Régal 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_07_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.545,\"y\":326.659,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('33', 'Regal3Apartment', 'Appartement Régal 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_07_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.087,\"y\":331.429,\"z\":195.123}', '1300000');
INSERT INTO `properties` VALUES ('34', 'Aqua1Apartment', 'Appartement Aqua 1', null, '{\"x\":-784.194,\"y\":323.636,\"z\":210.997}', '{\"x\":-779.751,\"y\":323.385,\"z\":210.997}', null, '[\"apa_v_mp_h_08_a\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-766.187,\"y\":328.47,\"z\":210.396}', '1300000');
INSERT INTO `properties` VALUES ('35', 'Aqua2Apartment', 'Appartement Aqua 2', null, '{\"x\":-786.8663,\"y\":315.764,\"z\":186.913}', '{\"x\":-781.808,\"y\":315.866,\"z\":186.913}', null, '[\"apa_v_mp_h_08_c\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-795.658,\"y\":326.563,\"z\":186.313}', '1300000');
INSERT INTO `properties` VALUES ('36', 'Aqua3Apartment', 'Appartement Aqua 3', null, '{\"x\":-774.012,\"y\":342.042,\"z\":195.686}', '{\"x\":-779.057,\"y\":342.063,\"z\":195.686}', null, '[\"apa_v_mp_h_08_b\"]', 'MiltonDrive', '0', '1', '0', '{\"x\":-765.287,\"y\":331.084,\"z\":195.086}', '1300000');
INSERT INTO `properties` VALUES ('37', 'IntegrityWay', '4 Integrity Way', '{\"x\":-47.804,\"y\":-585.867,\"z\":36.956}', null, null, '{\"x\":-54.178,\"y\":-583.762,\"z\":35.798}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('38', 'IntegrityWay28', '4 Integrity Way - Apt 28', null, '{\"x\":-31.409,\"y\":-594.927,\"z\":79.03}', '{\"x\":-26.098,\"y\":-596.909,\"z\":79.03}', null, '[]', 'IntegrityWay', '0', '1', '0', '{\"x\":-11.923,\"y\":-597.083,\"z\":78.43}', '1700000');
INSERT INTO `properties` VALUES ('39', 'IntegrityWay30', '4 Integrity Way - Apt 30', null, '{\"x\":-17.702,\"y\":-588.524,\"z\":89.114}', '{\"x\":-16.21,\"y\":-582.569,\"z\":89.114}', null, '[]', 'IntegrityWay', '0', '1', '0', '{\"x\":-26.327,\"y\":-588.384,\"z\":89.123}', '1700000');
INSERT INTO `properties` VALUES ('40', 'DellPerroHeights', 'Dell Perro Heights', '{\"x\":-1447.06,\"y\":-538.28,\"z\":33.74}', null, null, '{\"x\":-1440.022,\"y\":-548.696,\"z\":33.74}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('41', 'DellPerroHeightst4', 'Dell Perro Heights - Apt 28', null, '{\"x\":-1452.125,\"y\":-540.591,\"z\":73.044}', '{\"x\":-1455.435,\"y\":-535.79,\"z\":73.044}', null, '[]', 'DellPerroHeights', '0', '1', '0', '{\"x\":-1467.058,\"y\":-527.571,\"z\":72.443}', '1700000');
INSERT INTO `properties` VALUES ('42', 'DellPerroHeightst7', 'Dell Perro Heights - Apt 30', null, '{\"x\":-1451.562,\"y\":-523.535,\"z\":55.928}', '{\"x\":-1456.02,\"y\":-519.209,\"z\":55.929}', null, '[]', 'DellPerroHeights', '0', '1', '0', '{\"x\":-1457.026,\"y\":-530.219,\"z\":55.937}', '1700000');
INSERT INTO `properties` VALUES ('43', 'MazeBankBuilding', 'Maze Bank Building', '{\"x\":-79.18,\"y\":-795.92,\"z\":43.35}', null, null, '{\"x\":-72.50,\"y\":-786.92,\"z\":43.40}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('44', 'OldSpiceWarm', 'Old Spice Warm', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_01a\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('45', 'OldSpiceClassical', 'Old Spice Classical', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_01b\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('46', 'OldSpiceVintage', 'Old Spice Vintage', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_01c\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('47', 'ExecutiveRich', 'Executive Rich', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_02b\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('48', 'ExecutiveCool', 'Executive Cool', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_02c\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('49', 'ExecutiveContrast', 'Executive Contrast', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_02a\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('50', 'PowerBrokerIce', 'Power Broker Ice', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_03a\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('51', 'PowerBrokerConservative', 'Power Broker Conservative', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_03b\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('52', 'PowerBrokerPolished', 'Power Broker Polished', null, '{\"x\":-75.69,\"y\":-827.08,\"z\":242.43}', '{\"x\":-75.51,\"y\":-823.90,\"z\":242.43}', null, '[\"ex_dt1_11_office_03c\"]', 'MazeBankBuilding', '0', '1', '0', '{\"x\":-72.82,\"y\":-816.84,\"z\":243.43}', '5000000');
INSERT INTO `properties` VALUES ('53', 'LomBank', 'Lom Bank', '{\"x\":-1581.36,\"y\":-558.23,\"z\":34.07}', null, null, '{\"x\":-1583.60,\"y\":-555.12,\"z\":34.07}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('54', 'LBOldSpiceWarm', 'LB Old Spice Warm', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_01a\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('55', 'LBOldSpiceClassical', 'LB Old Spice Classical', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_01b\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('56', 'LBOldSpiceVintage', 'LB Old Spice Vintage', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_01c\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('57', 'LBExecutiveRich', 'LB Executive Rich', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_02b\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('58', 'LBExecutiveCool', 'LB Executive Cool', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_02c\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('59', 'LBExecutiveContrast', 'LB Executive Contrast', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_02a\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('60', 'LBPowerBrokerIce', 'LB Power Broker Ice', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_03a\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('61', 'LBPowerBrokerConservative', 'LB Power Broker Conservative', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_03b\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('62', 'LBPowerBrokerPolished', 'LB Power Broker Polished', null, '{\"x\":-1579.53,\"y\":-564.89,\"z\":107.62}', '{\"x\":-1576.42,\"y\":-567.57,\"z\":107.62}', null, '[\"ex_sm_13_office_03c\"]', 'LomBank', '0', '1', '0', '{\"x\":-1577.68,\"y\":-565.91,\"z\":108.52}', '3500000');
INSERT INTO `properties` VALUES ('63', 'MazeBankWest', 'Maze Bank West', '{\"x\":-1379.58,\"y\":-499.63,\"z\":32.22}', null, null, '{\"x\":-1378.95,\"y\":-502.82,\"z\":32.22}', '[]', null, '0', '0', '1', null, '0');
INSERT INTO `properties` VALUES ('64', 'MBWOldSpiceWarm', 'MBW Old Spice Warm', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_01a\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('65', 'MBWOldSpiceClassical', 'MBW Old Spice Classical', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_01b\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('66', 'MBWOldSpiceVintage', 'MBW Old Spice Vintage', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_01c\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('67', 'MBWExecutiveRich', 'MBW Executive Rich', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_02b\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('68', 'MBWExecutiveCool', 'MBW Executive Cool', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_02c\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('69', 'MBWExecutive Contrast', 'MBW Executive Contrast', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_02a\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('70', 'MBWPowerBrokerIce', 'MBW Power Broker Ice', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_03a\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('71', 'MBWPowerBrokerConvservative', 'MBW Power Broker Convservative', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_03b\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');
INSERT INTO `properties` VALUES ('72', 'MBWPowerBrokerPolished', 'MBW Power Broker Polished', null, '{\"x\":-1392.74,\"y\":-480.18,\"z\":71.14}', '{\"x\":-1389.43,\"y\":-479.01,\"z\":71.14}', null, '[\"ex_sm_15_office_03c\"]', 'MazeBankWest', '0', '1', '0', '{\"x\":-1390.76,\"y\":-479.22,\"z\":72.04}', '2700000');

-- ----------------------------
-- Table structure for rented_vehicles
-- ----------------------------
DROP TABLE IF EXISTS `rented_vehicles`;
CREATE TABLE `rented_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `plate` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `player_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `base_price` int(11) NOT NULL,
  `rent_price` int(11) NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rented_vehicles
-- ----------------------------

-- ----------------------------
-- Table structure for shops
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', 'RobsLiquor', 'whiskey', '4');
INSERT INTO `shops` VALUES ('2', 'RobsLiquor', 'vodka', '3');
INSERT INTO `shops` VALUES ('3', 'RobsLiquor', 'tequila', '3');
INSERT INTO `shops` VALUES ('4', 'RobsLiquor', 'sekt', '30');
INSERT INTO `shops` VALUES ('5', 'RobsLiquor', 'wine', '8');
INSERT INTO `shops` VALUES ('6', 'LTDgasoline', 'wine', '1');
INSERT INTO `shops` VALUES ('7', 'RobsLiquor', 'beer', '2');
INSERT INTO `shops` VALUES ('8', 'LTDgasoline', 'beer', '1');
INSERT INTO `shops` VALUES ('9', 'RobsLiquor', 'ricewine', '7');
INSERT INTO `shops` VALUES ('10', 'RobsLiquor', 'alcopop', '2');
INSERT INTO `shops` VALUES ('11', 'LTDgasoline', 'alcopop', '2');
INSERT INTO `shops` VALUES ('12', 'LTDgasoline', 'cola', '2');
INSERT INTO `shops` VALUES ('13', 'TwentyFourSeven', 'cola', '2');
INSERT INTO `shops` VALUES ('14', 'LTDgasoline', 'fanta', '2');
INSERT INTO `shops` VALUES ('15', 'TwentyFourSeven', 'fanta', '2');
INSERT INTO `shops` VALUES ('16', 'LTDgasoline', 'sprite', '2');
INSERT INTO `shops` VALUES ('17', 'TwentyFourSeven', 'sprite', '2');
INSERT INTO `shops` VALUES ('18', 'LTDgasoline', 'water', '1');
INSERT INTO `shops` VALUES ('19', 'TwentyFourSeven', 'water', '1');
INSERT INTO `shops` VALUES ('20', 'LTDgasoline', 'coffee', '2');
INSERT INTO `shops` VALUES ('21', 'TwentyFourSeven', 'coffee', '2');
INSERT INTO `shops` VALUES ('22', 'LTDgasoline', 'cacao', '2');
INSERT INTO `shops` VALUES ('23', 'TwentyFourSeven', 'cacao', '2');
INSERT INTO `shops` VALUES ('24', 'LTDgasoline', 'espresso', '2');
INSERT INTO `shops` VALUES ('25', 'TwentyFourSeven', 'espresso', '2');
INSERT INTO `shops` VALUES ('26', 'LTDgasoline', 'ojuice', '1');
INSERT INTO `shops` VALUES ('27', 'TwentyFourSeven', 'ojuice', '1');
INSERT INTO `shops` VALUES ('28', 'LTDgasoline', 'milkshake', '2');
INSERT INTO `shops` VALUES ('29', 'TwentyFourSeven', 'milkshake', '2');
INSERT INTO `shops` VALUES ('30', 'TwentyFourSeven', 'bread', '3');
INSERT INTO `shops` VALUES ('31', 'LTDgasoline', 'bread', '3');
INSERT INTO `shops` VALUES ('32', 'TwentyFourSeven', 'curry', '2');
INSERT INTO `shops` VALUES ('33', 'TwentyFourSeven', 'corny', '1');
INSERT INTO `shops` VALUES ('34', 'LTDgasoline', 'corny', '1');
INSERT INTO `shops` VALUES ('35', 'TwentyFourSeven', 'donut', '1');
INSERT INTO `shops` VALUES ('36', 'LTDgasoline', 'donut', '1');
INSERT INTO `shops` VALUES ('37', 'TwentyFourSeven', 'cake', '4');
INSERT INTO `shops` VALUES ('38', 'TwentyFourSeven', 'bun', '1');
INSERT INTO `shops` VALUES ('39', 'LTDgasoline', 'bun', '1');
INSERT INTO `shops` VALUES ('40', 'TwentyFourSeven', 'chocoheart', '4');
INSERT INTO `shops` VALUES ('41', 'LTDgasoline', 'chocoheart', '4');
INSERT INTO `shops` VALUES ('42', 'TwentyFourSeven', 'juinggum', '1');
INSERT INTO `shops` VALUES ('43', 'LTDgasoline', 'juinggum', '1');
INSERT INTO `shops` VALUES ('44', 'TwentyFourSeven', 'tacco', '3');
INSERT INTO `shops` VALUES ('45', 'TwentyFourSeven', 'burrito', '2');
INSERT INTO `shops` VALUES ('46', 'TwentyFourSeven', 'nacho', '2');
INSERT INTO `shops` VALUES ('47', 'TwentyFourSeven', 'schnitzel', '7');
INSERT INTO `shops` VALUES ('48', 'TwentyFourSeven', 'pizza', '5');
INSERT INTO `shops` VALUES ('49', 'TwentyFourSeven', 'chickenwings', '5');
INSERT INTO `shops` VALUES ('50', 'TwentyFourSeven', 'doener', '4');
INSERT INTO `shops` VALUES ('51', 'TwentyFourSeven', 'fribun', '2');
INSERT INTO `shops` VALUES ('52', 'LTDgasoline', 'fribun', '2');
INSERT INTO `shops` VALUES ('53', 'TwentyFourSeven', 'bratwurst', '2');
INSERT INTO `shops` VALUES ('54', 'LTDgasoline', 'bratwurst', '2');
INSERT INTO `shops` VALUES ('55', 'TwentyFourSeven', 'currywurst', '2');
INSERT INTO `shops` VALUES ('56', 'LTDgasoline', 'currywurst', '2');
INSERT INTO `shops` VALUES ('57', 'TwentyFourSeven', 'hotdog', '2');
INSERT INTO `shops` VALUES ('58', 'LTDgasoline', 'hotdog', '2');
INSERT INTO `shops` VALUES ('59', 'TwentyFourSeven', 'pommes', '1');
INSERT INTO `shops` VALUES ('60', 'LTDgasoline', 'pommes', '1');
INSERT INTO `shops` VALUES ('61', 'TwentyFourSeven', 'noodles', '1');
INSERT INTO `shops` VALUES ('62', 'TwentyFourSeven', 'chocoice', '1');
INSERT INTO `shops` VALUES ('63', 'TwentyFourSeven', 'vanilleeis', '1');
INSERT INTO `shops` VALUES ('64', 'TwentyFourSeven', 'fruitice', '1');
INSERT INTO `shops` VALUES ('65', 'TwentyFourSeven', 'milchschnitte', '1');
INSERT INTO `shops` VALUES ('66', 'LTDgasoline', 'milchschnitte', '1');
INSERT INTO `shops` VALUES ('67', 'TwentyFourSeven', 'springroll', '2');
INSERT INTO `shops` VALUES ('68', 'TwentyFourSeven', 'glueck', '1');
INSERT INTO `shops` VALUES ('69', 'LTDgasoline', 'glueck', '1');
INSERT INTO `shops` VALUES ('70', 'TwentyFourSeven', 'bifi', '1');
INSERT INTO `shops` VALUES ('71', 'LTDgasoline', 'bifi', '1');
INSERT INTO `shops` VALUES ('72', 'TwentyFourSeven', 'pralines', '6');
INSERT INTO `shops` VALUES ('73', 'LTDgasoline', 'pralines', '6');
INSERT INTO `shops` VALUES ('74', 'LTDgasoline', 'roses', '10');
INSERT INTO `shops` VALUES ('75', 'TwentyFourSeven', 'ring', '299');

-- ----------------------------
-- Table structure for society_moneywash
-- ----------------------------
DROP TABLE IF EXISTS `society_moneywash`;
CREATE TABLE `society_moneywash` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `society` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of society_moneywash
-- ----------------------------

-- ----------------------------
-- Table structure for user_accounts
-- ----------------------------
DROP TABLE IF EXISTS `user_accounts`;
CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `money` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_accounts
-- ----------------------------

-- ----------------------------
-- Table structure for user_contacts
-- ----------------------------
DROP TABLE IF EXISTS `user_contacts`;
CREATE TABLE `user_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_contacts
-- ----------------------------

-- ----------------------------
-- Table structure for user_inventory
-- ----------------------------
DROP TABLE IF EXISTS `user_inventory`;
CREATE TABLE `user_inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `count` int(111) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inventory
-- ----------------------------

-- ----------------------------
-- Table structure for user_licenses
-- ----------------------------
DROP TABLE IF EXISTS `user_licenses`;
CREATE TABLE `user_licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_licenses
-- ----------------------------

-- ----------------------------
-- Table structure for user_parkings
-- ----------------------------
DROP TABLE IF EXISTS `user_parkings`;
CREATE TABLE `user_parkings` (
  `id` int(11) NOT NULL,
  `identifier` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `garage` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `zone` int(11) NOT NULL,
  `vehicle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_parkings
-- ----------------------------

-- ----------------------------
-- Table structure for user_whitelist
-- ----------------------------
DROP TABLE IF EXISTS `user_whitelist`;
CREATE TABLE `user_whitelist` (
  `identifier` varchar(255) NOT NULL,
  `whitelisted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_whitelist
-- ----------------------------
INSERT INTO `user_whitelist` VALUES ('steam:110000106abab10', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `license` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `money` int(11) DEFAULT '2500',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `skin` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `job` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'unemployed',
  `job_grade` int(11) DEFAULT '0',
  `loadout` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `second_job` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'unemployed',
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `bank` int(11) DEFAULT NULL,
  `permission_level` int(11) DEFAULT NULL,
  `group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `isFirstConnection` int(11) DEFAULT NULL,
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `dateofbirth` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `height` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `phone_number` int(11) DEFAULT NULL,
  `last_property` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identifier` (`identifier`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'steam:110000106abab10', 'license:7de776a41419655bb5361a14b9cecec1c3fde8ca', '11040000', 'BirdMachine', 0x7B22736B696E223A352C2268656C6D65745F32223A302C226167655F32223A302C22686169725F31223A31302C226167655F31223A302C226270726F6F665F31223A302C226D616B6575705F32223A302C22646563616C735F32223A302C226C6970737469636B5F34223A302C22676C61737365735F31223A302C2266616365223A342C2262656172645F33223A332C22626167735F32223A302C2262656172645F34223A302C22636861696E5F31223A31372C2268656C6D65745F31223A2D312C2273686F65735F31223A35352C22686169725F636F6C6F725F31223A342C22636861696E5F32223A312C226C6970737469636B5F33223A302C22746F72736F5F32223A352C22656172735F32223A302C2270616E74735F32223A302C2273686F65735F32223A392C226C6970737469636B5F32223A302C2265796562726F77735F33223A302C2270616E74735F31223A32362C22686169725F32223A332C22736578223A302C226D61736B5F31223A302C22746F72736F5F31223A362C2262656172645F32223A31302C22656172735F31223A2D312C226D616B6575705F34223A302C226270726F6F665F32223A302C22646563616C735F31223A302C226C6970737469636B5F31223A302C22626167735F31223A302C2265796562726F77735F31223A382C227473686972745F32223A322C226D61736B5F32223A302C2261726D73223A31372C227473686972745F31223A322C22676C61737365735F32223A302C22686169725F636F6C6F725F32223A382C2262656172645F31223A372C2265796562726F77735F32223A342C226D616B6575705F33223A302C226D616B6575705F31223A302C2265796562726F77735F34223A307D, 'ambulance', '9', 0x5B7B22616D6D6F223A302C226C6162656C223A224D6573736572222C226E616D65223A22574541504F4E5F4B4E494645227D2C7B22616D6D6F223A302C226C6162656C223A225363686C616773746F636B222C226E616D65223A22574541504F4E5F4E49474854535449434B227D2C7B22616D6D6F223A302C226C6162656C223A2248616D6D6572222C226E616D65223A22574541504F4E5F48414D4D4552227D2C7B22616D6D6F223A302C226C6162656C223A225363686CC3A4676572222C226E616D65223A22574541504F4E5F424154227D2C7B22616D6D6F223A302C226C6162656C223A22476F6C667363686CC3A4676572222C226E616D65223A22574541504F4E5F474F4C46434C5542227D2C7B22616D6D6F223A302C226C6162656C223A224272656368656973656E222C226E616D65223A22574541504F4E5F43524F57424152227D2C7B22616D6D6F223A393939392C226C6162656C223A22506973746F6C65222C226E616D65223A22574541504F4E5F504953544F4C227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D7066706973746F6C65222C226E616D65223A22574541504F4E5F434F4D424154504953544F4C227D2C7B22616D6D6F223A393939392C226C6162656C223A22415020506973746F6C65222C226E616D65223A22574541504F4E5F4150504953544F4C227D2C7B22616D6D6F223A393939392C226C6162656C223A22506973746F6C65202E3530222C226E616D65223A22574541504F4E5F504953544F4C3530227D2C7B22616D6D6F223A393939392C226C6162656C223A224D696B726F20534D47222C226E616D65223A22574541504F4E5F4D4943524F534D47227D2C7B22616D6D6F223A393939392C226C6162656C223A22534D47222C226E616D65223A22574541504F4E5F534D47227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D706620534D47222C226E616D65223A22574541504F4E5F41535341554C54534D47227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D7066676577656872222C226E616D65223A22574541504F4E5F41535341554C545249464C45227D2C7B22616D6D6F223A393939392C226C6162656C223A224B61726162696E6572676577656872222C226E616D65223A22574541504F4E5F43415242494E455249464C45227D2C7B22616D6D6F223A393939392C226C6162656C223A22416476616E636564676577656872222C226E616D65223A22574541504F4E5F414456414E4345445249464C45227D2C7B22616D6D6F223A393939392C226C6162656C223A224D47222C226E616D65223A22574541504F4E5F4D47227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D7066204D47222C226E616D65223A22574541504F4E5F434F4D4241544D47227D2C7B22616D6D6F223A393939392C226C6162656C223A2250756D7067756E222C226E616D65223A22574541504F4E5F50554D5053484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A224162676573C3A467746520536368726F74666C696E7465222C226E616D65223A22574541504F4E5F5341574E4F464653484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D706620536368726F74666C696E7465222C226E616D65223A22574541504F4E5F41535341554C5453484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A2242756C6C70757020536368726F74666C696E7465222C226E616D65223A22574541504F4E5F42554C4C50555053484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A2254617A6572222C226E616D65223A22574541504F4E5F5354554E47554E227D2C7B22616D6D6F223A393939392C226C6162656C223A22536368617266736368C3BC747A656E676577656872222C226E616D65223A22574541504F4E5F534E495045525249464C45227D2C7B22616D6D6F223A393939392C226C6162656C223A22536368776572657320536E69706572222C226E616D65223A22574541504F4E5F4845415659534E49504552227D2C7B22616D6D6F223A32302C226C6162656C223A224772616E6174776572666572222C226E616D65223A22574541504F4E5F4752454E4144454C41554E43484552227D2C7B22616D6D6F223A32302C226C6162656C223A22525047222C226E616D65223A22574541504F4E5F525047227D2C7B22616D6D6F223A393939392C226C6162656C223A224D696E6967756E222C226E616D65223A22574541504F4E5F4D494E4947554E227D2C7B22616D6D6F223A32352C226C6162656C223A224772616E617465222C226E616D65223A22574541504F4E5F4752454E414445227D2C7B22616D6D6F223A32352C226C6162656C223A2248616674626F6D6265222C226E616D65223A22574541504F4E5F535449434B59424F4D42227D2C7B22616D6D6F223A32352C226C6162656C223A2252617563686772616E617465222C226E616D65223A22574541504F4E5F534D4F4B454752454E414445227D2C7B22616D6D6F223A32352C226C6162656C223A22425A20476173222C226E616D65223A22574541504F4E5F425A474153227D2C7B22616D6D6F223A32352C226C6162656C223A224D6F6C6F746F7620436F636B7461696C222C226E616D65223A22574541504F4E5F4D4F4C4F544F56227D2C7B22616D6D6F223A323030302C226C6162656C223A2246657565726CC3B67363686572222C226E616D65223A22574541504F4E5F46495245455854494E47554953484552227D2C7B22616D6D6F223A343530302C226C6162656C223A2242656E7A696E6B616E6973746572222C226E616D65223A22574541504F4E5F504554524F4C43414E227D2C7B22616D6D6F223A312C226C6162656C223A2242616C6C222C226E616D65223A22574541504F4E5F42414C4C227D2C7B22616D6D6F223A393939392C226C6162656C223A22534E5320506973746F6C65222C226E616D65223A22574541504F4E5F534E53504953544F4C227D2C7B22616D6D6F223A302C226C6162656C223A22466C6173636865222C226E616D65223A22574541504F4E5F424F54544C45227D2C7B22616D6D6F223A393939392C226C6162656C223A22477573656E62657267222C226E616D65223A22574541504F4E5F475553454E42455247227D2C7B22616D6D6F223A393939392C226C6162656C223A225370657A69616C6B61726162696E6572222C226E616D65223A22574541504F4E5F5350454349414C43415242494E45227D2C7B22616D6D6F223A393939392C226C6162656C223A225363687765726520506973746F6C65222C226E616D65223A22574541504F4E5F4845415659504953544F4C227D2C7B22616D6D6F223A393939392C226C6162656C223A2242756C6C707570676577656872222C226E616D65223A22574541504F4E5F42554C4C5055505249464C45227D2C7B22616D6D6F223A302C226C6162656C223A22446F6C6368222C226E616D65223A22574541504F4E5F444147474552227D2C7B22616D6D6F223A393939392C226C6162656C223A2256696E7461676520506973746F6C65222C226E616D65223A22574541504F4E5F56494E54414745504953544F4C227D2C7B22616D6D6F223A32302C226C6162656C223A2246657565727765726B222C226E616D65223A22574541504F4E5F46495245574F524B227D2C7B22616D6D6F223A393939392C226C6162656C223A224D75736B657465222C226E616D65223A22574541504F4E5F4D55534B4554227D2C7B22616D6D6F223A393939392C226C6162656C223A225363687765726520536368726F74666C696E7465222C226E616D65223A22574541504F4E5F484541565953484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A224D61726B736D616E676577656872222C226E616D65223A22574541504F4E5F4D41524B534D414E5249464C45227D2C7B22616D6D6F223A31302C226C6162656C223A22486F6D696E67204C61756E63686572222C226E616D65223A22574541504F4E5F484F4D494E474C41554E43484552227D2C7B22616D6D6F223A352C226C6162656C223A22416E6EC3A4686572756E67736D696E65222C226E616D65223A22574541504F4E5F50524F584D494E45227D2C7B22616D6D6F223A31302C226C6162656C223A225363686E656562616C6C222C226E616D65223A22574541504F4E5F534E4F5742414C4C227D2C7B22616D6D6F223A32302C226C6162656C223A224C6575636874706973746F6C65222C226E616D65223A22574541504F4E5F464C41524547554E227D2C7B22616D6D6F223A32352C226C6162656C223A22466C617265222C226E616D65223A22574541504F4E5F464C415245227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D706620504457222C226E616D65223A22574541504F4E5F434F4D424154504457227D2C7B22616D6D6F223A393939392C226C6162656C223A224D61726B736D616E20506973746F6C65222C226E616D65223A22574541504F4E5F4D41524B534D414E504953544F4C227D2C7B22616D6D6F223A302C226C6162656C223A225363686C616772696E67222C226E616D65223A22574541504F4E5F4B4E55434B4C45227D2C7B22616D6D6F223A302C226C6162656C223A22417874222C226E616D65223A22574541504F4E5F48415443484554227D2C7B22616D6D6F223A32302C226C6162656C223A225261696C67756E222C226E616D65223A22574541504F4E5F5241494C47554E227D2C7B22616D6D6F223A302C226C6162656C223A224D616368657465222C226E616D65223A22574541504F4E5F4D414348455445227D2C7B22616D6D6F223A393939392C226C6162656C223A224D61736368696E656E706973746F6C65222C226E616D65223A22574541504F4E5F4D414348494E45504953544F4C227D2C7B22616D6D6F223A302C226C6162656C223A224B6C6170706D6573736572222C226E616D65223A22574541504F4E5F535749544348424C414445227D2C7B22616D6D6F223A393939392C226C6162656C223A225363687765726572205265766F6C766572222C226E616D65223A22574541504F4E5F5245564F4C564552227D2C7B22616D6D6F223A393939392C226C6162656C223A22446F7070656C6CC3A4756669676520536368726F74666C696E7465222C226E616D65223A22574541504F4E5F444253484F5447554E227D2C7B22616D6D6F223A393939392C226C6162656C223A224B616D7066676577656872222C226E616D65223A22574541504F4E5F434F4D504143545249464C45227D2C7B22616D6D6F223A393939392C226C6162656C223A224175746F2053686F7467756E222C226E616D65223A22574541504F4E5F4155544F53484F5447554E227D2C7B22616D6D6F223A302C226C6162656C223A224B616D7066617874222C226E616D65223A22574541504F4E5F424154544C45415845227D2C7B22616D6D6F223A32302C226C6162656C223A224B6F6D70616B74204C61756E63686572222C226E616D65223A22574541504F4E5F434F4D504143544C41554E43484552227D2C7B22616D6D6F223A393939392C226C6162656C223A224D696E6920534D47222C226E616D65223A22574541504F4E5F4D494E49534D47227D2C7B22616D6D6F223A31302C226C6162656C223A22526F6872626F6D6265222C226E616D65223A22574541504F4E5F50495045424F4D42227D2C7B22616D6D6F223A302C226C6162656C223A224BC3B6222C226E616D65223A22574541504F4E5F504F4F4C435545227D2C7B22616D6D6F223A302C226C6162656C223A22526F68727A616E6765222C226E616D65223A22574541504F4E5F5752454E4348227D2C7B22616D6D6F223A302C226C6162656C223A225461736368656E6C616D7065222C226E616D65223A22574541504F4E5F464C4153484C49474854227D2C7B22616D6D6F223A302C226C6162656C223A224E616368747369636874676572C3A474222C226E616D65223A224741444745545F4E49474854564953494F4E227D2C7B22616D6D6F223A302C226C6162656C223A2246616C6C73636869726D222C226E616D65223A224741444745545F504152414348555445227D5D, 'unemployed', '{\"z\":28.922582626342,\"y\":-1071.9230957032,\"x\":219.14608764648}', '985875648', '99', 'superadmin', null, 'Jack', 'Holmes', '16.03.1986', 'M', '186', '1337', null, 0x5B7B2276616C223A3336373430302C2270657263656E74223A33362E37342C226E616D65223A2268756E676572227D2C7B2276616C223A3333343235302C2270657263656E74223A33332E3432352C226E616D65223A22746869727374227D2C7B2276616C223A302C2270657263656E74223A302E302C226E616D65223A226472756E6B227D5D);

-- ----------------------------
-- Table structure for vehicle_categories
-- ----------------------------
DROP TABLE IF EXISTS `vehicle_categories`;
CREATE TABLE `vehicle_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle_categories
-- ----------------------------
INSERT INTO `vehicle_categories` VALUES ('1', 'gg', 'Gut & Günstig');
INSERT INTO `vehicle_categories` VALUES ('2', 'am', 'Aston Martin');
INSERT INTO `vehicle_categories` VALUES ('4', 'audi', 'Audi');
INSERT INTO `vehicle_categories` VALUES ('5', 'bentley', 'Bentley');
INSERT INTO `vehicle_categories` VALUES ('6', 'bmw', 'Bayerische Motorenwerke');
INSERT INTO `vehicle_categories` VALUES ('7', 'cadi', 'Cadillac');
INSERT INTO `vehicle_categories` VALUES ('8', 'chevy', 'Chevrolet');
INSERT INTO `vehicle_categories` VALUES ('9', 'citro', 'Citroen');
INSERT INTO `vehicle_categories` VALUES ('10', 'dodge', 'Dodge');
INSERT INTO `vehicle_categories` VALUES ('11', 'ferrari', 'Ferrari');
INSERT INTO `vehicle_categories` VALUES ('12', 'fiat', 'Fiat');
INSERT INTO `vehicle_categories` VALUES ('13', 'jaguar', 'Jaguar');
INSERT INTO `vehicle_categories` VALUES ('14', 'jeep', 'Jeep');
INSERT INTO `vehicle_categories` VALUES ('15', 'lambo', 'Lamborghini');
INSERT INTO `vehicle_categories` VALUES ('16', 'rover', 'Range Rover');
INSERT INTO `vehicle_categories` VALUES ('17', 'maserati', 'Maserati');
INSERT INTO `vehicle_categories` VALUES ('18', 'mazda', 'Mazda');
INSERT INTO `vehicle_categories` VALUES ('19', 'mercedes', 'Mercedes Benz');
INSERT INTO `vehicle_categories` VALUES ('20', 'mitsu', 'Mitsubishi');
INSERT INTO `vehicle_categories` VALUES ('21', 'nissan', 'Nissan');
INSERT INTO `vehicle_categories` VALUES ('22', 'toyota', 'Toyota');
INSERT INTO `vehicle_categories` VALUES ('23', 'pagani', 'Pagani');
INSERT INTO `vehicle_categories` VALUES ('24', 'peug', 'Peugeot');
INSERT INTO `vehicle_categories` VALUES ('25', 'porsche', 'Porsche');
INSERT INTO `vehicle_categories` VALUES ('26', 'renault', 'Renault');
INSERT INTO `vehicle_categories` VALUES ('27', 'rr', 'Rolls Royce');
INSERT INTO `vehicle_categories` VALUES ('28', 'volvo', 'Volvo');
INSERT INTO `vehicle_categories` VALUES ('29', 'vw', 'Volkswagen');
INSERT INTO `vehicle_categories` VALUES ('30', 'moto', 'Motorräder');
INSERT INTO `vehicle_categories` VALUES ('31', 'hyundai', 'Hyundai');

-- ----------------------------
-- Table structure for vehicles
-- ----------------------------
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `model` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES ('1', 'AMC Pacer', 'yAmcPacer', '3900', 'gg', null, null);
INSERT INTO `vehicles` VALUES ('2', 'Hyandai Accent', 'accent', '4290', 'gg', null, null);
INSERT INTO `vehicles` VALUES ('3', 'Virage', 'virage', '200000', 'am', null, null);
INSERT INTO `vehicles` VALUES ('4', 'DB7', 'db7zagato', '170000', 'am', null, null);
INSERT INTO `vehicles` VALUES ('5', 'RS6 C7', 'rs6', '120000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('6', 'A8', 'a8fsi', '90000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('7', 'A7', 'a7', '70000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('8', 'Bentayga Mansory', 'bentaygam', '400000', 'bentley', null, null);
INSERT INTO `vehicles` VALUES ('9', 'Continental GT', 'ben17', '250000', 'bentley', null, null);
INSERT INTO `vehicles` VALUES ('10', 'M5', 'bmci', '130000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('11', 'M6', 'm6f13', '130000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('12', 'M3 E92', 'bmwm3e92', '80000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('13', 'M3 E92 GTS', 'm3e92gts', '140000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('14', 'M5 E60', 'm5e60', '103000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('15', 'M3 F80', 'm3f80', '80000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('16', 'i8', 'i8', '129900', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('17', '750li Lumma', 'lumma750', '146700', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('18', 'M3 E36', 'rmodm3e36', '80000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('19', 'X6M', 'x6m', '125000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('20', 'E30', 'alpinae30', '49500', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('21', 'Escalade', 'gmt900escalade', '115000', 'cadi', null, null);
INSERT INTO `vehicles` VALUES ('22', 'XTS Limousine', 'limoxts', '80000', 'cadi', null, null);
INSERT INTO `vehicles` VALUES ('23', 'C3', 'citroenc3', '200000', 'citro', null, null);
INSERT INTO `vehicles` VALUES ('24', 'Challenger 1970', 'chall70', '45000', 'dodge', null, null);
INSERT INTO `vehicles` VALUES ('25', 'Challenger SRT 8 Hellcat', 'demon', '65000', 'dodge', null, null);
INSERT INTO `vehicles` VALUES ('26', 'Viper GTS', '99viper', '45000', 'dodge', null, null);
INSERT INTO `vehicles` VALUES ('27', '360 Modena F1', 'modena', '140000', 'ferrari', null, null);
INSERT INTO `vehicles` VALUES ('28', 'F12 Berlinetta', 'f12m', '269000', 'ferrari', null, null);
INSERT INTO `vehicles` VALUES ('29', '595 Abarth', 'yFiat595ssa', '8000', 'fiat', null, null);
INSERT INTO `vehicles` VALUES ('30', 'X351', 'XJR', '200000', 'jaguar', null, null);
INSERT INTO `vehicles` VALUES ('31', 'Grand Cherokee SRT8', 'srt8', '100000', 'jeep', null, null);
INSERT INTO `vehicles` VALUES ('32', 'Wrangler Trailcat', 'trailcat', '75000', 'jeep', null, null);
INSERT INTO `vehicles` VALUES ('33', 'Rubicon', 'jeep2012', '45000', 'jeep', null, null);
INSERT INTO `vehicles` VALUES ('34', 'Huracan LP610', 'lp610', '229000', 'lambo', null, null);
INSERT INTO `vehicles` VALUES ('35', 'Vacca', 'vacca', '120000', 'lambo', null, null);
INSERT INTO `vehicles` VALUES ('36', 'Tempesta', 'tempesta', '175000', 'lambo', null, null);
INSERT INTO `vehicles` VALUES ('37', 'Range Rover', 'rr14', '95000', 'rover', null, null);
INSERT INTO `vehicles` VALUES ('38', 'Quattroporte GTS', 'mqgts', '147500', 'maserati', null, null);
INSERT INTO `vehicles` VALUES ('39', 'Levante Mansory', 'mlmansory', '150000', 'maserati', null, null);
INSERT INTO `vehicles` VALUES ('40', 'Gran Tourismo', 'masgt', '126000', 'maserati', null, null);
INSERT INTO `vehicles` VALUES ('41', 'RX-7', 'rx7tunable2', '20000', 'mazda', null, null);
INSERT INTO `vehicles` VALUES ('42', '600sel', 'sel600', '35000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('43', 'G65 AMG Lifted', 'gclass', '350000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('44', 'MB 300sl Gullwing', 'mb300sl', '1200000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('45', 'S63 AMG Cabriolet', 'mb18', '170000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('46', 'CLA 45 Shootingbreak', 'cla45sb', '80000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('47', 'CLS 63 AMG', 'cls2015', '180000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('48', 'SLS AMG', 'slsamg', '248500', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('49', 'V250', 'v250', '55000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('50', 'Brabus 850', 'brabus850', '230000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('51', 'C63s AMG', 'c63s', '150000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('52', 'S65 AMG WALD', 'w222wald', '230000', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('53', 'A45 AMG', 'a45', '54750', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('54', 'S63 AMG', 'S63w222', '204960', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('55', 'G65 AMG', 'g65amg', '289950', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('56', 'GLE 63 AMG Coupé', 'gle', '137900', 'mercedes', null, null);
INSERT INTO `vehicles` VALUES ('57', 'Eclipse', 'eclipse', '9900', 'mitsu', null, null);
INSERT INTO `vehicles` VALUES ('58', 'Lancer Evolution IX MR', 'evo9', '47500', 'mitsu', null, null);
INSERT INTO `vehicles` VALUES ('59', 'Patrol Nismo', 'tulenis', '105000', 'nissan', null, null);
INSERT INTO `vehicles` VALUES ('60', 'Skyline R34 GT-R', 'skyline', '57500', 'nissan', null, null);
INSERT INTO `vehicles` VALUES ('61', 'Adam', 'opeladam', '13000', 'opel', null, null);
INSERT INTO `vehicles` VALUES ('62', 'Zonda Tricolore', 'tricolore', '1950000', 'pagani', null, null);
INSERT INTO `vehicles` VALUES ('63', 'Huayra BC', 'bc', '2450000', 'pagani', null, null);
INSERT INTO `vehicles` VALUES ('64', '308', 'peug308', '21000', 'peug', null, null);
INSERT INTO `vehicles` VALUES ('65', '106', 'p106', '7000', 'peug', null, null);
INSERT INTO `vehicles` VALUES ('66', 'Panamera Turbo', 'panamera17turbo', '167500', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('67', '911', 'por911', '112000', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('68', '911 GT3 RS', '911gt3rs', '245900', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('69', '911 1982', 'turbo33', '56500', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('70', '718', '718', '99999999', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('71', 'MC GTS', 'mcgts', '99999999', 'porsche', null, null);
INSERT INTO `vehicles` VALUES ('72', 'Twingo', 'twingo', '200000', 'renault', null, null);
INSERT INTO `vehicles` VALUES ('73', 'Zoe', 'zoe', '200000', 'renault', null, null);
INSERT INTO `vehicles` VALUES ('74', 'Wraith', 'Wraith', '340000', 'rr', null, null);
INSERT INTO `vehicles` VALUES ('75', 'supra2', 'supra2', '99999999', 'rr', null, null);
INSERT INTO `vehicles` VALUES ('76', 'V60', 'v60pols', '39800', 'volvo', null, null);
INSERT INTO `vehicles` VALUES ('77', '850r', 'v850r', '15450', 'volvo', null, null);
INSERT INTO `vehicles` VALUES ('78', 'Golf 3 GTI', 'mk3', '7500', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('79', 'Passat GTE', 'pstgte', '50500', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('80', 'Golf 5 GTI', 'golfgti', '32500', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('81', 'Passat R-Line', 'passatr', '48850', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('82', 'Touareg R50', 'R50', '94600', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('83', 'Veloster Turbo', 'veln', '26990', 'hyundai', null, null);
INSERT INTO `vehicles` VALUES ('84', 'YZF-R 1', 'r1', '19325', 'moto', null, null);
INSERT INTO `vehicles` VALUES ('85', 'YZF-R 6', 'r6', '15999', 'moto', null, null);

-- ----------------------------
-- Table structure for weashops
-- ----------------------------
DROP TABLE IF EXISTS `weashops`;
CREATE TABLE `weashops` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `item` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weashops
-- ----------------------------
INSERT INTO `weashops` VALUES ('1', 'GunShop', 'WEAPON_PISTOL', '300');
INSERT INTO `weashops` VALUES ('2', 'BlackWeashop', 'WEAPON_PISTOL', '500');
INSERT INTO `weashops` VALUES ('4', 'BlackWeashop', 'WEAPON_FLASHLIGHT', '70');
INSERT INTO `weashops` VALUES ('6', 'BlackWeashop', 'WEAPON_MACHETE', '110');
INSERT INTO `weashops` VALUES ('8', 'BlackWeashop', 'WEAPON_NIGHTSTICK', '150');
INSERT INTO `weashops` VALUES ('9', 'GunShop', 'WEAPON_BAT', '100');
INSERT INTO `weashops` VALUES ('10', 'BlackWeashop', 'WEAPON_BAT', '100');
INSERT INTO `weashops` VALUES ('11', 'GunShop', 'WEAPON_STUNGUN', '50');
INSERT INTO `weashops` VALUES ('12', 'BlackWeashop', 'WEAPON_STUNGUN', '50');
INSERT INTO `weashops` VALUES ('14', 'BlackWeashop', 'WEAPON_MICROSMG', '1700');
INSERT INTO `weashops` VALUES ('15', 'GunShop', 'WEAPON_PUMPSHOTGUN', '3400');
INSERT INTO `weashops` VALUES ('16', 'BlackWeashop', 'WEAPON_PUMPSHOTGUN', '3500');
INSERT INTO `weashops` VALUES ('18', 'BlackWeashop', 'WEAPON_ASSAULTRIFLE', '10000');
INSERT INTO `weashops` VALUES ('20', 'BlackWeashop', 'WEAPON_SPECIALCARBINE', '13000');
INSERT INTO `weashops` VALUES ('22', 'BlackWeashop', 'WEAPON_SNIPERRIFLE', '19500');
INSERT INTO `weashops` VALUES ('28', 'BlackWeashop', 'WEAPON_BZGAS', '350');
INSERT INTO `weashops` VALUES ('29', 'GunShop', 'WEAPON_FIREEXTINGUISHER', '100');
INSERT INTO `weashops` VALUES ('30', 'BlackWeashop', 'WEAPON_FIREEXTINGUISHER', '100');
INSERT INTO `weashops` VALUES ('31', 'GunShop', 'WEAPON_BALL', '50');
INSERT INTO `weashops` VALUES ('32', 'BlackWeashop', 'WEAPON_BALL', '50');
INSERT INTO `weashops` VALUES ('34', 'BlackWeashop', 'WEAPON_SMOKEGRENADE', '100');
INSERT INTO `weashops` VALUES ('35', 'BlackWeashop', 'WEAPON_APPISTOL', '1100');
INSERT INTO `weashops` VALUES ('36', 'BlackWeashop', 'WEAPON_CARBINERIFLE', '12500');
SET FOREIGN_KEY_CHECKS=1;
