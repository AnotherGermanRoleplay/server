/*
Navicat MySQL Data Transfer

Source Server         : LOKAL
Source Server Version : 100206
Source Host           : localhost:3306
Source Database       : agrp-esx

Target Server Type    : MYSQL
Target Server Version : 100206
File Encoding         : 65001

Date: 2018-03-25 17:52:18
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
INSERT INTO `addon_account_data` VALUES ('1', 'society_police', '0', null);
INSERT INTO `addon_account_data` VALUES ('2', 'society_mecano', '0', null);
INSERT INTO `addon_account_data` VALUES ('3', 'society_realestateagent', '0', null);
INSERT INTO `addon_account_data` VALUES ('4', 'society_taxi', '0', null);
INSERT INTO `addon_account_data` VALUES ('5', 'society_ambulance', '0', null);
INSERT INTO `addon_account_data` VALUES ('6', 'society_cardealer', '0', null);
INSERT INTO `addon_account_data` VALUES ('7', 'society_banker', '0', null);
INSERT INTO `addon_account_data` VALUES ('8', 'society_bus', '0', null);
INSERT INTO `addon_account_data` VALUES ('9', 'society_mafia', '0', null);

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
  `reason` text COLLATE utf8mb4_bin DEFAULT NULL,
  `dateTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
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
INSERT INTO `cardealer_vehicles` VALUES ('54', 'schafter2', '25000');
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
INSERT INTO `cardealer_vehicles` VALUES ('175', 'bmx', '160');
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
  `sex` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'f',
  `height` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(255) DEFAULT 'unemployed',
  `job_grade` int(11) DEFAULT 0,
  `second_job` varchar(255) DEFAULT 'unemployed',
  `loadout` longtext DEFAULT NULL,
  `skin` longtext DEFAULT NULL,
  `phone_number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of characters
-- ----------------------------

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
INSERT INTO `datastore` VALUES ('1', 'society_police', 'LSPD', '1');
INSERT INTO `datastore` VALUES ('2', 'property', 'Propriété', '0');
INSERT INTO `datastore` VALUES ('3', 'user_mask', 'Masque', '0');

-- ----------------------------
-- Table structure for datastore_data
-- ----------------------------
DROP TABLE IF EXISTS `datastore_data`;
CREATE TABLE `datastore_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datastore_data
-- ----------------------------

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
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `limit` int(11) NOT NULL DEFAULT -1,
  `rare` int(11) NOT NULL DEFAULT 0,
  `can_remove` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;

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
INSERT INTO `items` VALUES ('69', 'beer', 'Bier', '-1', '0', '1');
INSERT INTO `items` VALUES ('70', 'binsack', 'Müllsack', '100', '0', '1');
INSERT INTO `items` VALUES ('71', 'bandage', 'Bandage', '20', '0', '1');
INSERT INTO `items` VALUES ('72', 'medikit', 'Medikit', '5', '0', '1');
INSERT INTO `items` VALUES ('73', 'defi', 'Defibrillator', '1', '0', '0');
INSERT INTO `items` VALUES ('74', 'handcuffs', 'Handschellen', '-1', '0', '1');
INSERT INTO `items` VALUES ('75', 'whiskey', 'Glas Whiskey', '-1', '0', '1');
INSERT INTO `items` VALUES ('76', 'vodka', 'Glas Vodka', '-1', '0', '1');
INSERT INTO `items` VALUES ('77', 'tequila', 'Tequila-Shot', '-1', '0', '1');
INSERT INTO `items` VALUES ('78', 'sekt', 'Flasche Sekt', '-1', '0', '1');
INSERT INTO `items` VALUES ('79', 'donut', 'Donut', '-1', '0', '1');
INSERT INTO `items` VALUES ('80', 'corny', 'Müsliriegel', '-1', '0', '1');
INSERT INTO `items` VALUES ('81', 'redbull', 'Dose RedBull', '-1', '0', '1');
INSERT INTO `items` VALUES ('82', 'coffee', 'Tasse Kaffee', '-1', '0', '1');
INSERT INTO `items` VALUES ('83', 'blackberry', 'BlackBerry MOTION', '1', '0', '1');
-- TODO: add item functionality if necessary! vvv
INSERT INTO `items` VALUES ('84', 'medics1', 'Aspirin', '10', '0', '1');
INSERT INTO `items` VALUES ('84', 'medics2', 'Antibiotika', '10', '0', '1');
INSERT INTO `items` VALUES ('84', 'medics3', 'Morphin', '10', '0', '1');
INSERT INTO `items` VALUES ('84', 'medics4', 'Sufentanil', '10', '0', '1');
INSERT INTO `items` VALUES ('84', 'medics5', 'Ibuprofen', '10', '0', '1');
INSERT INTO `items` VALUES ('85', 'roses', 'Bund Rosen', '1', '0', '1');
INSERT INTO `items` VALUES ('86', 'pralines', 'Schachtel Pralinen', '1', '0', '1');
INSERT INTO `items` VALUES ('87', 'ring', 'Goldener Ehering (24 Karat)', '2', '0', '1');
INSERT INTO `items` VALUES ('88', 'defi', 'Defibrilator', '3', '0', '1');

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `whitelisted` tinyint(1) NOT NULL DEFAULT 0,
  `job_place` int(11) NOT NULL DEFAULT 1,
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

-- ----------------------------
-- Table structure for job_grades
-- ----------------------------
DROP TABLE IF EXISTS `job_grades`;
CREATE TABLE `job_grades` (
  `id` int(11) NOT NULL,
  `job_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `grade` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `salary` int(11) NOT NULL,
  `skin_male` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `skin_female` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
INSERT INTO `job_grades` VALUES ('9', 'police', '0', 'recruit', 'Rekrut', '450', 0x7B227473686972745F31223A35372C22746F72736F5F31223A35352C2261726D73223A302C2270616E74735F31223A33352C22676C6173736573223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A352C2266616365223A31392C22676C61737365735F32223A312C22746F72736F5F32223A302C2273686F6573223A32342C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C2270616E74735F32223A302C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A387D, 0x7B227473686972745F31223A33342C22746F72736F5F31223A34382C2273686F6573223A32342C2270616E74735F31223A33342C22746F72736F5F32223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C22676C6173736573223A302C2268656C6D65745F32223A302C22686169725F32223A332C2266616365223A32312C22646563616C735F31223A302C22676C61737365735F32223A312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C2270616E74735F32223A302C2261726D73223A31342C22686169725F636F6C6F725F31223A31302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('10', 'police', '1', 'patrol', 'Patrouille', '1350', 0x7B227473686972745F31223A35372C22746F72736F5F31223A35352C2261726D73223A302C2270616E74735F31223A33352C22676C6173736573223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A352C2266616365223A31392C22676C61737365735F32223A312C22746F72736F5F32223A302C2273686F6573223A32342C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C2270616E74735F32223A302C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A387D, 0x7B227473686972745F31223A33342C22746F72736F5F31223A34382C2273686F6573223A32342C2270616E74735F31223A33342C22746F72736F5F32223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C22676C6173736573223A302C2268656C6D65745F32223A302C22686169725F32223A332C2266616365223A32312C22646563616C735F31223A302C22676C61737365735F32223A312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C2270616E74735F32223A302C2261726D73223A31342C22686169725F636F6C6F725F31223A31302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('11', 'police', '2', 'detective', 'Detective', '1600', 0x7B227473686972745F31223A35372C22746F72736F5F31223A35352C2261726D73223A302C2270616E74735F31223A33352C22676C6173736573223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A352C2266616365223A31392C22676C61737365735F32223A312C22746F72736F5F32223A302C2273686F6573223A32342C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C2270616E74735F32223A302C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A387D, 0x7B227473686972745F31223A33342C22746F72736F5F31223A34382C2273686F6573223A32342C2270616E74735F31223A33342C22746F72736F5F32223A302C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C22676C6173736573223A302C2268656C6D65745F32223A302C22686169725F32223A332C2266616365223A32312C22646563616C735F31223A302C22676C61737365735F32223A312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C2270616E74735F32223A302C2261726D73223A31342C22686169725F636F6C6F725F31223A31302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('12', 'police', '3', 'sergeant', 'Sergeant', '2000', 0x7B227473686972745F31223A35382C22746F72736F5F31223A35352C2273686F6573223A32342C2270616E74735F31223A33352C2270616E74735F32223A302C22646563616C735F32223A312C22686169725F636F6C6F725F32223A302C2266616365223A31392C2268656C6D65745F32223A302C22686169725F32223A302C2261726D73223A302C22646563616C735F31223A382C22746F72736F5F32223A302C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C22676C61737365735F32223A312C22686169725F636F6C6F725F31223A352C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A31317D, 0x7B227473686972745F31223A33352C22746F72736F5F31223A34382C2261726D73223A31342C2270616E74735F31223A33342C2270616E74735F32223A302C22646563616C735F32223A312C22686169725F636F6C6F725F32223A302C2273686F6573223A32342C2268656C6D65745F32223A302C22686169725F32223A332C22646563616C735F31223A372C22746F72736F5F32223A302C2266616365223A32312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C22676C61737365735F32223A312C22686169725F636F6C6F725F31223A31302C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
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
INSERT INTO `job_grades` VALUES ('46', 'police', '4', 'lieutenant', 'Lieutenant', '2300', 0x7B227473686972745F31223A35382C22746F72736F5F31223A35352C2273686F6573223A32342C2270616E74735F31223A33352C2270616E74735F32223A302C22646563616C735F32223A312C22686169725F636F6C6F725F32223A302C2266616365223A31392C2268656C6D65745F32223A302C22686169725F32223A302C2261726D73223A302C22646563616C735F31223A382C22746F72736F5F32223A302C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C22676C61737365735F32223A312C22686169725F636F6C6F725F31223A352C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A31317D, 0x7B227473686972745F31223A33352C22746F72736F5F31223A34382C2261726D73223A31342C2270616E74735F31223A33342C2270616E74735F32223A302C22646563616C735F32223A312C22686169725F636F6C6F725F32223A302C2273686F6573223A32342C2268656C6D65745F32223A302C22686169725F32223A332C22646563616C735F31223A372C22746F72736F5F32223A302C2266616365223A32312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C22676C61737365735F32223A312C22686169725F636F6C6F725F31223A31302C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('47', 'police', '5', 'captain', 'Captain', '2600', 0x7B227473686972745F31223A35382C22746F72736F5F31223A35352C2273686F6573223A32342C2270616E74735F31223A33352C2270616E74735F32223A302C22646563616C735F32223A322C22686169725F636F6C6F725F32223A302C2266616365223A31392C2268656C6D65745F32223A302C22686169725F32223A302C22676C6173736573223A302C22646563616C735F31223A382C22686169725F636F6C6F725F31223A352C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C22676C61737365735F32223A312C22746F72736F5F32223A302C2261726D73223A34312C227473686972745F32223A302C2268656C6D65745F31223A31317D, 0x7B227473686972745F31223A33352C22746F72736F5F31223A34382C2261726D73223A34342C2270616E74735F31223A33342C22686169725F32223A332C22646563616C735F32223A322C22686169725F636F6C6F725F32223A302C22686169725F636F6C6F725F31223A31302C2268656C6D65745F32223A302C2266616365223A32312C2273686F6573223A32342C22746F72736F5F32223A302C22676C61737365735F32223A312C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C2270616E74735F32223A302C22646563616C735F31223A372C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('48', 'police', '6', 'boss', 'Chief of Department', '3000', 0x7B227473686972745F31223A35382C22746F72736F5F31223A35352C2273686F6573223A32342C2270616E74735F31223A33352C2270616E74735F32223A302C22646563616C735F32223A332C22686169725F636F6C6F725F32223A302C2266616365223A31392C2268656C6D65745F32223A302C22686169725F32223A302C2261726D73223A34312C22746F72736F5F32223A302C22686169725F636F6C6F725F31223A352C22686169725F31223A322C22736B696E223A33342C22736578223A302C22676C61737365735F31223A302C22676C61737365735F32223A312C22646563616C735F31223A382C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A31317D, 0x7B227473686972745F31223A33352C22746F72736F5F31223A34382C2261726D73223A34342C2270616E74735F31223A33342C2270616E74735F32223A302C22646563616C735F32223A332C22686169725F636F6C6F725F32223A302C2266616365223A32312C2268656C6D65745F32223A302C22686169725F32223A332C22646563616C735F31223A372C22746F72736F5F32223A302C22686169725F636F6C6F725F31223A31302C22686169725F31223A31312C22736B696E223A33342C22736578223A312C22676C61737365735F31223A352C22676C61737365735F32223A312C2273686F6573223A32342C22676C6173736573223A302C227473686972745F32223A302C2268656C6D65745F31223A35377D);
INSERT INTO `job_grades` VALUES ('49', 'trucker', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F31223A35392C22746F72736F5F31223A38392C2261726D73223A33312C2270616E74735F31223A33362C22676C61737365735F31223A31392C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C2266616365223A322C22676C61737365735F32223A302C22746F72736F5F32223A312C2273686F6573223A33352C22686169725F31223A302C22736B696E223A302C22736578223A302C22676C61737365735F31223A31392C2270616E74735F32223A302C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A357D, 0x7B227473686972745F31223A33362C22746F72736F5F31223A302C2261726D73223A36382C2270616E74735F31223A33302C22676C61737365735F31223A31352C22646563616C735F32223A302C22686169725F636F6C6F725F32223A302C2268656C6D65745F32223A302C22686169725F636F6C6F725F31223A302C2266616365223A32372C22676C61737365735F32223A302C22746F72736F5F32223A31312C2273686F6573223A32362C22686169725F31223A352C22736B696E223A302C22736578223A312C22676C61737365735F31223A31352C2270616E74735F32223A322C22686169725F32223A302C22646563616C735F31223A302C227473686972745F32223A302C2268656C6D65745F31223A31397D);
INSERT INTO `job_grades` VALUES ('50', 'garbageman', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('51', 'realgarbageman', '0', 'employee', 'Fahrer', '75', 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A307D, 0x7B227473686972745F32223A302C22656172735F31223A382C22676C61737365735F31223A31352C22746F72736F5F32223A372C22656172735F32223A322C22676C61737365735F32223A332C2273686F65735F32223A332C2270616E74735F31223A332C2273686F65735F31223A31322C22626167735F31223A302C2268656C6D65745F32223A302C2270616E74735F32223A372C22746F72736F5F31223A332C227473686972745F31223A302C2261726D73223A31312C22626167735F32223A302C2268656C6D65745F31223A302C22736578223A317D);
INSERT INTO `job_grades` VALUES ('52', 'mafia', '0', 'recruit', 'Made Man', '250', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('53', 'mafia', '1', 'novice', 'Caporegime', '600', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('54', 'mafia', '2', 'experience', 'Underboss', '1000', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('55', 'mafia', '3', 'boss', 'Boss', '1500', 0x7B7D, 0x7B7D);
INSERT INTO `job_grades` VALUES ('70', 'ambulance', '0', 'trainee', 'Praktikant', '200', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3134362C22746F72736F5F32223A382C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38352C2270616E74735F31223A32342C2270616E74735F32223A352C2273686F65735F31223A31302C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3134312C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A39382C2270616E74735F31223A32332C2270616E74735F32223A302C2273686F65735F31223A31302C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('71', 'ambulance', '1', 'medic', 'Rettungshelfer', '800', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3134362C22746F72736F5F32223A362C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38352C2270616E74735F31223A32342C2270616E74735F32223A352C2273686F65735F31223A31302C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3134312C22746F72736F5F32223A312C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A39382C2270616E74735F31223A32332C2270616E74735F32223A302C2273686F65735F31223A31302C2273686F65735F32223A312C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('72', 'ambulance', '2', 'paramedic', 'Rettungssanitäter', '1200', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A36312C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38382C2270616E74735F31223A35392C2270616E74735F32223A382C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A35342C22746F72736F5F32223A302C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A39392C2270616E74735F31223A36312C2270616E74735F32223A382C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('73', 'ambulance', '3', 'emergencyparamedic', 'Notfallsanitäter', '1500', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A36312C22746F72736F5F32223A322C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38382C2270616E74735F31223A35392C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A35342C22746F72736F5F32223A322C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A39392C2270616E74735F31223A36312C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('74', 'ambulance', '4', 'doctor', 'Notarzt', '2200', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A35302C22746F72736F5F32223A332C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38382C2270616E74735F31223A35392C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31342C227473686972745F32223A302C22746F72736F5F31223A34332C22746F72736F5F32223A332C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A3130312C2270616E74735F31223A36312C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('75', 'ambulance', '5', 'chief', 'Leitender Notarzt', '2800', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3131312C22746F72736F5F32223A352C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38382C2270616E74735F31223A35392C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31342C227473686972745F32223A302C22746F72736F5F31223A3133362C22746F72736F5F32223A352C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A3130312C2270616E74735F31223A36312C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);
INSERT INTO `job_grades` VALUES ('76', 'ambulance', '6', 'boss', 'Ärztlicher Leiter', '3000', 0x7B226270726F6F665F31223A302C226270726F6F665F32223A302C227473686972745F31223A31352C227473686972745F32223A302C22746F72736F5F31223A3131312C22746F72736F5F32223A332C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A38382C2270616E74735F31223A35392C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D, 0x7B227473686972745F31223A31342C227473686972745F32223A302C22746F72736F5F31223A3133362C22746F72736F5F32223A332C22646563616C735F31223A302C22646563616C735F32223A302C2261726D73223A3130312C2270616E74735F31223A36312C2270616E74735F32223A342C2273686F65735F31223A32342C2273686F65735F32223A302C2268656C6D65745F31223A2D312C2268656C6D65745F32223A307D);

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
  `grade` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_vehicles
-- ----------------------------
INSERT INTO `job_vehicles` VALUES ('2', 'Taxi', 'taxi', '3000', 'taxi', 'taxi', '0');
INSERT INTO `job_vehicles` VALUES ('3', 'Krankenwagen', 'ambulance', '3000', 'ambulance', 'ambulance', '0');
INSERT INTO `job_vehicles` VALUES ('4', 'Tieflader', 'flatbed', '3000', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('6', 'Leihwagen', 'asea', '4250', 'mecano', 'mecano', '0');
INSERT INTO `job_vehicles` VALUES ('7', 'Interceptor Sedan', 'police4', '3000', 'police', 'police', '0');
INSERT INTO `job_vehicles` VALUES ('8', 'CVPI', 'police', '8000', 'police', 'police', '1');
INSERT INTO `job_vehicles` VALUES ('9', 'Dodge Changer', 'police2', '12000', 'police', 'police', '1');
INSERT INTO `job_vehicles` VALUES ('10', 'Interceptor Utility', 'police3', '12000', 'police', 'police', '1');
INSERT INTO `job_vehicles` VALUES ('11', 'Motorrad', 'policeb', '5000', 'police', 'police', '1');
INSERT INTO `job_vehicles` VALUES ('12', 'Riot (Sperre)', 'riot', '50000', 'police', 'police', '3');
INSERT INTO `job_vehicles` VALUES ('13', 'Sheriff 1 (Auto)', 'sheriff', '20000', 'police', 'police', '2');
INSERT INTO `job_vehicles` VALUES ('14', 'Sheriff 2 (SUV)', 'sheriff2', '22000', 'police', 'police', '2');
INSERT INTO `job_vehicles` VALUES ('15', 'Transporter', 'policet', '24000', 'police', 'police', '2');
INSERT INTO `job_vehicles` VALUES ('16', 'Ferrari', 'polf430', '200000', 'police', 'police', '3');
INSERT INTO `job_vehicles` VALUES ('17', 'FBI 1 (Auto)', 'fbi', '100000', 'police', 'police', '3');
INSERT INTO `job_vehicles` VALUES ('18', 'FBI 1 (SUV)', 'fbi2', '120000', 'police', 'police', '3');
INSERT INTO `job_vehicles` VALUES ('19', 'NEF 1 (Auto)', 'fbi', '100000', 'ambulance', 'ambulance', '5');
INSERT INTO `job_vehicles` VALUES ('20', 'NEF 2 (SUV)', 'fbi2', '120000', 'ambulance', 'ambulance', '5');

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
INSERT INTO `licenses` VALUES ('2', 'drive', 'Autoführerschein');
INSERT INTO `licenses` VALUES ('3', 'drive_bike', 'Motorradführerschein');
INSERT INTO `licenses` VALUES ('4', 'drive_truck', 'Lkwführerschein');
INSERT INTO `licenses` VALUES ('5', 'weapon', 'Waffenschein');

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
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

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
  `state` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Etat de la voiture',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owned_vehicles
-- ----------------------------

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
INSERT INTO `properties` VALUES ('7', 'LowEndApartment', 'Appartement de base', '{\"y\":-1078.735,\"z\":28.4031,\"x\":292.528}', '{\"y\":-1007.152,\"z\":-102.002,\"x\":265.845}', '{\"y\":-1002.802,\"z\":-100.008,\"x\":265.307}', '{\"y\":-1078.669,\"z\":28.401,\"x\":296.738}', '[]', null, '1', '1', '0', '{\"x\":265.916,\"y\":-999.38,\"z\":-100.008}', '562500');
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
INSERT INTO `properties` VALUES ('73', 'VillaDelKasakow', 'Villa del Kasakow', '{\n	\"x\" : -2587.936523,\n	\"y\" : 1910.948120,\n	\"z\" : 166.840000\n}', '{\n	\"x\" : -2587.1166992188\n	\"y\" : 1908.1655273438,\n	\"z\" : 167.00661682129\n}', '{\n	\"x\" : -2587.1166992188\n	\"y\" : 1908.1655273438,\n	\"z\" : 167.41661682129\n}', '{\n	\"x\" : -2585.232666,\n	\"y\" : 1916.788818,\n	\"z\" : 168.312943\n}', '[]', 'NULL', '1', '1', '0', '{\n	\"x\" : -2598.301025,\n	\"y\" : 1912.262451,\n	\"z\" : 167.016617\n}', '10000000');

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
INSERT INTO `shops` VALUES ('1', 'TwentyFourSeven', 'bread', '20');
INSERT INTO `shops` VALUES ('2', 'TwentyFourSeven', 'water', '15');
INSERT INTO `shops` VALUES ('3', 'RobsLiquor', 'curry', '15');
INSERT INTO `shops` VALUES ('4', 'RobsLiquor', 'cola', '10');
INSERT INTO `shops` VALUES ('5', 'LTDgasoline', 'bread', '30');
INSERT INTO `shops` VALUES ('6', 'LTDgasoline', 'water', '20');
INSERT INTO `shops` VALUES ('7', 'TwentyFourSeven', 'curry', '10');
INSERT INTO `shops` VALUES ('8', 'TwentyFourSeven', 'cola', '5');
INSERT INTO `shops` VALUES ('9', 'TwentyFourSeven', 'beer', '9');
INSERT INTO `shops` VALUES ('10', 'RobsLiquor', 'beer', '15');
INSERT INTO `shops` VALUES ('11', 'LTDgasoline', 'beer', '12');

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
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `identifier` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `license` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `money` int(11) DEFAULT 2500,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `skin` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'unemployed',
  `job_grade` int(11) DEFAULT 0,
  `loadout` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
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
  `status` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`identifier`),
  UNIQUE KEY `identifier` (`identifier`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Table structure for user_accounts
-- ----------------------------
DROP TABLE IF EXISTS `user_accounts`;
CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `money` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

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
  `vehicle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
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
  `whitelisted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_whitelist
-- ----------------------------
INSERT INTO `user_whitelist` VALUES ('steam:110000106abab10', '1'); -- Birdmachine

-- ----------------------------
-- Table structure for vehicles
-- ----------------------------
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `model` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `job` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES ('1', 'Blade', 'blade', '15000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('2', 'Buccaneer', 'buccaneer', '18000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('3', 'Buccaneer Rider', 'buccaneer2', '24000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('4', 'Chino', 'chino', '15000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('5', 'Chino Luxe', 'chino2', '19000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('6', 'Coquette BlackFin', 'coquette3', '55000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('7', 'Dominator', 'dominator', '35000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('8', 'Dukes', 'dukes', '28000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('9', 'Gauntlet', 'gauntlet', '30000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('10', 'Hotknife', 'hotknife', '125000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('11', 'Faction', 'faction', '20000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('12', 'Faction Rider', 'faction2', '30000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('13', 'Faction XL', 'faction3', '40000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('14', 'Nightshade', 'nightshade', '65000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('15', 'Phoenix', 'phoenix', '12500', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('16', 'Picador', 'picador', '18000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('17', 'Sabre Turbo', 'sabregt', '20000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('18', 'Sabre GT', 'sabregt2', '25000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('19', 'Slam Van', 'slamvan3', '11500', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('20', 'Tampa', 'tampa', '16000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('21', 'Virgo', 'virgo', '14000', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('22', 'Vigero', 'vigero', '12500', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('23', 'Voodoo', 'voodoo', '7200', 'muscle', null, null);
INSERT INTO `vehicles` VALUES ('24', 'Blista', 'blista', '8000', 'compacts', null, null);
INSERT INTO `vehicles` VALUES ('25', 'Brioso R/A', 'brioso', '18000', 'compacts', null, null);
INSERT INTO `vehicles` VALUES ('26', 'Issi', 'issi2', '10000', 'compacts', null, null);
INSERT INTO `vehicles` VALUES ('27', 'Panto', 'panto', '10000', 'compacts', null, null);
INSERT INTO `vehicles` VALUES ('28', 'Prairie', 'prairie', '12000', 'compacts', null, null);
INSERT INTO `vehicles` VALUES ('29', 'Bison', 'bison', '45000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('30', 'Bobcat XL', 'bobcatxl', '32000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('31', 'Burrito', 'burrito3', '19000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('32', 'Burrito', 'gburrito2', '29000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('33', 'Camper', 'camper', '42000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('34', 'Gang Burrito', 'gburrito', '45000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('35', 'Journey', 'journey', '6500', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('36', 'Minivan', 'minivan', '13000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('37', 'Moonbeam', 'moonbeam', '18000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('38', 'Moonbeam Rider', 'moonbeam2', '35000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('39', 'Paradise', 'paradise', '19000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('40', 'Rumpo', 'rumpo', '15000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('41', 'Rumpo Trail', 'rumpo3', '19500', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('42', 'Surfer', 'surfer', '12000', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('43', 'Youga', 'youga', '10800', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('44', 'Youga Luxuary', 'youga2', '14500', 'vans', null, null);
INSERT INTO `vehicles` VALUES ('45', 'Asea', 'asea', '5500', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('46', 'Cognoscenti', 'cognoscenti', '55000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('47', 'Emperor', 'emperor', '8500', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('48', 'Fugitive', 'fugitive', '12000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('49', 'Glendale', 'glendale', '6500', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('50', 'Intruder', 'intruder', '7500', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('51', 'Premier', 'premier', '8000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('52', 'Primo Custom', 'primo2', '14000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('53', 'Regina', 'regina', '5000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('54', 'Schafter', 'schafter2', '25000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('55', 'Stretch', 'stretch', '90000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('56', 'Super Diamond', 'superd', '130000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('57', 'Tailgater', 'tailgater', '30000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('58', 'Warrener', 'warrener', '4000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('59', 'Washington', 'washington', '9000', 'sedans', null, null);
INSERT INTO `vehicles` VALUES ('60', 'Baller', 'baller2', '40000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('61', 'Baller Sport', 'baller3', '60000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('62', 'Cavalcade', 'cavalcade2', '55000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('63', 'Contender', 'contender', '70000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('64', 'Dubsta', 'dubsta', '45000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('65', 'Dubsta Luxuary', 'dubsta2', '60000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('66', 'Fhantom', 'fq2', '17000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('67', 'Grabger', 'granger', '50000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('68', 'Gresley', 'gresley', '47500', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('69', 'Huntley S', 'huntley', '40000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('70', 'Landstalker', 'landstalker', '35000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('71', 'Mesa', 'mesa', '16000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('72', 'Mesa Trail', 'mesa3', '40000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('73', 'Patriot', 'patriot', '55000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('74', 'Radius', 'radi', '29000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('75', 'Rocoto', 'rocoto', '45000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('76', 'Seminole', 'seminole', '25000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('77', 'XLS', 'xls', '32000', 'suvs', null, null);
INSERT INTO `vehicles` VALUES ('78', 'Btype', 'btype', '62000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('79', 'Btype Luxe', 'btype3', '85000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('80', 'Btype Hotroad', 'btype2', '155000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('81', 'Casco', 'casco', '30000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('82', 'Coquette Classic', 'coquette2', '40000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('83', 'Manana', 'manana', '12800', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('84', 'Monroe', 'monroe', '55000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('85', 'Pigalle', 'pigalle', '20000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('86', 'Stinger', 'stinger', '80000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('87', 'Stinger GT', 'stingergt', '75000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('88', 'Stirling GT', 'feltzer3', '65000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('89', 'Z-Type', 'ztype', '220000', 'sportsclassics', null, null);
INSERT INTO `vehicles` VALUES ('90', 'Bifta', 'bifta', '12000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('91', 'Bf Injection', 'bfinjection', '16000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('92', 'Blazer', 'blazer', '6500', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('93', 'Blazer Sport', 'blazer4', '8500', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('94', 'Brawler', 'brawler', '45000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('95', 'Bubsta 6x6', 'dubsta3', '120000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('96', 'Dune Buggy', 'dune', '8000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('97', 'Guardian', 'guardian', '45000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('98', 'Rebel', 'rebel2', '35000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('99', 'Sandking', 'sandking', '55000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('100', 'The Liberator', 'monster', '210000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('101', 'Trophy Truck', 'trophytruck', '60000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('102', 'Trophy Truck Limited', 'trophytruck2', '80000', 'offroad', null, null);
INSERT INTO `vehicles` VALUES ('103', 'Cognoscenti Cabrio', 'cogcabrio', '55000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('104', 'Exemplar', 'exemplar', '32000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('105', 'Lexus RC F', 'f620', '40000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('106', 'Felon', 'felon', '42000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('107', 'Felon GT', 'felon2', '55000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('108', 'Jackal', 'jackal', '38000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('109', 'Oracle XS', 'oracle2', '35000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('110', 'Sentinel', 'sentinel', '32000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('111', 'Sentinel XS', 'sentinel2', '40000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('112', 'Windsor', 'windsor', '95000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('113', 'Windsor Drop', 'windsor2', '125000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('114', 'Zion', 'zion', '36000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('115', 'Zion Cabrio', 'zion2', '45000', 'coupes', null, null);
INSERT INTO `vehicles` VALUES ('116', '9F', 'ninef', '65000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('117', '9F Cabrio', 'ninef2', '80000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('118', 'Alpha', 'alpha', '60000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('119', 'Banshee', 'banshee', '70000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('120', 'Bestia GTS', 'bestiagts', '55000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('121', 'Buffalo', 'buffalo', '12000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('122', 'Buffalo S', 'buffalo2', '20000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('123', 'Carbonizzare', 'carbonizzare', '75000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('124', 'Comet', 'comet2', '65000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('125', 'Coquette', 'coquette', '65000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('126', 'Drift Tampa', 'tampa2', '80000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('127', 'Elegy', 'elegy2', '38500', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('128', 'Feltzer', 'feltzer2', '55000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('129', 'Furore GT', 'furoregt', '45000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('130', 'Fusilade', 'fusilade', '40000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('131', 'Jester', 'jester', '65000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('132', 'Jester(Racecar)', 'jester2', '135000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('133', 'Khamelion', 'khamelion', '38000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('134', 'Kuruma', 'kuruma', '30000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('135', 'Lynx', 'lynx', '40000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('136', 'Mamba', 'mamba', '70000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('137', 'Massacro', 'massacro', '65000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('138', 'Massacro(Racecar)', 'massacro2', '130000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('139', 'Omnis', 'omnis', '35000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('140', 'Penumbra', 'penumbra', '28000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('141', 'Rapid GT', 'rapidgt', '35000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('142', 'Rapid GT Convertible', 'rapidgt2', '45000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('143', 'Schafter V12', 'schafter3', '50000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('144', 'Seven 70', 'seven70', '39500', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('145', 'Sultan', 'sultan', '15000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('146', 'Surano', 'surano', '50000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('147', 'Tropos', 'tropos', '40000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('148', 'Verlierer', 'verlierer2', '70000', 'sports', null, null);
INSERT INTO `vehicles` VALUES ('149', 'Adder', 'adder', '200000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('150', 'Banshee 900R', 'banshee2', '155000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('151', 'Bullet', 'bullet', '90000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('152', 'Cheetah', 'cheetah', '175000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('153', 'Entity XF', 'entityxf', '225000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('154', 'ETR1', 'sheava', '220000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('155', 'FMJ', 'fmj', '185000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('156', 'Infernus', 'infernus', '180000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('157', 'Osiris', 'osiris', '160000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('158', 'Pfister', 'pfister811', '85000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('159', 'RE-7B', 'le7b', '325000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('160', 'Reaper', 'reaper', '150000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('161', 'Sultan RS', 'sultanrs', '165000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('162', 'T20', 't20', '130000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('163', 'Turismo R', 'turismor', '120000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('164', 'Tyrus', 'tyrus', '250000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('165', 'Vacca', 'vacca', '120000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('166', 'Voltic', 'voltic', '90000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('167', 'X80 Proto', 'prototipo', '250000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('168', 'Zentorno', 'zentorno', '150000', 'super', null, null);
INSERT INTO `vehicles` VALUES ('169', 'Akuma', 'AKUMA', '7500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('170', 'Avarus', 'avarus', '18000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('171', 'Bagger', 'bagger', '13500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('172', 'Bati 801', 'bati', '12000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('173', 'Bati 801RR', 'bati2', '19000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('174', 'BF400', 'bf400', '6500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('175', 'BMX (velo)', 'bmx', '160', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('176', 'Carbon RS', 'carbonrs', '18000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('177', 'Chimera', 'chimera', '38000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('178', 'Cliffhanger', 'cliffhanger', '9500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('179', 'Cruiser (velo)', 'cruiser', '510', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('180', 'Daemon', 'daemon', '11500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('181', 'Daemon High', 'daemon2', '13500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('182', 'Defiler', 'defiler', '9800', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('183', 'Double T', 'double', '28000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('184', 'Enduro', 'enduro', '5500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('185', 'Esskey', 'esskey', '4200', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('186', 'Faggio', 'faggio', '1900', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('187', 'Vespa', 'faggio2', '2800', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('188', 'Fixter (velo)', 'fixter', '225', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('189', 'Gargoyle', 'gargoyle', '16500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('190', 'Hakuchou', 'hakuchou', '31000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('191', 'Hakuchou Sport', 'hakuchou2', '55000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('192', 'Hexer', 'hexer', '12000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('193', 'Innovation', 'innovation', '23500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('194', 'Manchez', 'manchez', '5300', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('195', 'Nemesis', 'nemesis', '5800', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('196', 'Nightblade', 'nightblade', '35000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('197', 'PCJ-600', 'pcj', '6200', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('198', 'Ruffian', 'ruffian', '6800', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('199', 'Sanchez', 'sanchez', '5300', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('200', 'Sanchez Sport', 'sanchez2', '5300', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('201', 'Sanctus', 'sanctus', '25000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('202', 'Scorcher (velo)', 'scorcher', '280', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('203', 'Sovereign', 'sovereign', '22000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('204', 'Shotaro Concept', 'shotaro', '160000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('205', 'Thrust', 'thrust', '24000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('206', 'Tri bike (velo)', 'tribike3', '520', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('207', 'Vader', 'vader', '7200', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('208', 'Vortex', 'vortex', '9800', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('209', 'Woflsbane', 'wolfsbane', '9000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('210', 'Zombie', 'zombiea', '9500', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('211', 'Zombie Luxuary', 'zombieb', '12000', 'motorcycles', null, null);
INSERT INTO `vehicles` VALUES ('212', 'Buccaneer Rider', 'buccaneer2', '24000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('213', 'Chino Luxe', 'chino2', '19000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('214', 'Comet Retro', 'comet3', '75000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('215', 'Elegy Retro', 'elegy', '45000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('216', 'Faction Rider', 'faction2', '30000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('217', 'Faction XL', 'faction3', '40000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('218', 'FCR 1000', 'fcr2', '50000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('219', 'Minivan', 'minivan2', '18000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('220', 'Moonbeam Rider', 'moonbeam2', '35000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('221', 'Nero', 'nero2', '200000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('222', 'Primo Custom', 'primo2', '14000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('223', 'Sabre GT', 'sabregt2', '25000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('224', 'Slam Van', 'slamvan3', '11500', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('225', 'Specter', 'specter2', '120000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('226', 'Tornado', 'tornado2', '45000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('227', 'Virgo', 'virgo2', '19000', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('228', 'Voodoo', 'voodoo', '7200', 'customs', null, null);
INSERT INTO `vehicles` VALUES ('229', 'Audi RS6 C7', 'rs6', '106000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('231', 'Audi S8', 'audis8om', '60000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('232', 'Audi TT RS', 'ttrs', '120000', 'audi', null, null);
INSERT INTO `vehicles` VALUES ('233', 'Bentley Mulsanne', 'mulsanneom', '200000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('234', 'Camaro ZL1', 'zl12017', '165000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('235', 'Lexus RC F', 'f620', '40000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('236', 'Mustang GT11', 'rmodfordgt', '340000', 'ford', null, null);
INSERT INTO `vehicles` VALUES ('237', 'Nissan GTR R35', 'gtr', '100000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('238', 'Peugeot 108', 'peug108', '4000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('240', 'M4 GTS Liberty Walk', 'rmodm4gts', '480000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('241', 'Honda S2000', 'ap2', '35000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('242', 'Eclipse', 'eclipse', '25000', 'mitsubishi', null, null);
INSERT INTO `vehicles` VALUES ('243', 'Evo 9', 'evo9', '45000', 'mitsubishi', null, null);
INSERT INTO `vehicles` VALUES ('245', 'Nissan Skyline GTR R34', 'skyline', '70000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('246', 'CL65 AMG', 'cl65', '295000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('247', 'S63 AMG', 's63w222', '160000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('248', 'S600', 's600w220', '110000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('249', 'G65 AMG', 'g65amg', '320000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('250', 'M3 E36', 'rm3e36', '247500', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('251', 'BMW 750Li', '750li', '55000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('252', 'Lumma 750', 'lumma750', '160000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('253', 'BMW e90', 'BMWe90', '115000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('254', 'Mercedes e400', 'e400w213', '50000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('255', 'Mercedes Benz S63 (Wald)', 'W222Wald', '95000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('256', 'BMW i8', 'i8', '135000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('257', 'BMW E92', 'E92', '105000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('258', 'BMW M235i', 'm235', '93000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('259', 'BMW z4i', 'z4i', '55000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('260', 'Golf GTi', 'golfgti', '35000', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('261', 'Passat', 'passat', '135000', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('262', 'Passat R', 'passatr', '140000', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('263', 'R50', 'R50', '125000', 'vw', null, null);
INSERT INTO `vehicles` VALUES ('264', 'BMW e60', 'e60', '82000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('265', 'Dodge Challenger', '16challenger', '59000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('266', 'M4 mit Bodykit', 'rmodm4', '650000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('267', 'DeClasse Rhapsody', 'rhapsody', '500', 'cheap', null, null);
INSERT INTO `vehicles` VALUES ('268', 'BMW e90', 'BMWe90', '115000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('269', 'Lamborghini Centenario', 'rmodlp770', '3000000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('270', 'SL65 AMG', 'benzsl63', '340000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('271', 'Porsche 911r', 'p911r', '2500000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('272', 'X6 M', 'x6m', '145000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('273', 'GLE63 AMG', 'gle', '155000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('274', 'A45 AMG', 'a45', '140000', 'benz', null, null);
INSERT INTO `vehicles` VALUES ('275', '850 R', 'v850r', '55000', 'volvo', null, null);
INSERT INTO `vehicles` VALUES ('276', 'V60', 'v60pols', '11000', 'volvo', null, null);
INSERT INTO `vehicles` VALUES ('277', 'GT86 mit RBC', 'gt86rbc', '525000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('278', 'Mini Cooper', 'cooper15', '25000', 'bmw', null, null);
INSERT INTO `vehicles` VALUES ('279', 'Toyota Supra', 'supra2', '85000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('280', 'Yamaha R1', 'r1', '23000', 'addon_motos', null, null);
INSERT INTO `vehicles` VALUES ('281', 'Yamaha R6', 'r6', '36000', 'addon_motos', null, null);
INSERT INTO `vehicles` VALUES ('282', 'Lamborghini Huracane Spyder', 'lp610', '725000', 'addons', null, null);
INSERT INTO `vehicles` VALUES ('283', 'Tempesta', 'tempesta', '175000', 'super', null, null);

-- ----------------------------
-- Table structure for vehicle_categories
-- ----------------------------
DROP TABLE IF EXISTS `vehicle_categories`;
CREATE TABLE `vehicle_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `label` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle_categories
-- ----------------------------
INSERT INTO `vehicle_categories` VALUES ('1', 'compacts', 'Compacts');
INSERT INTO `vehicle_categories` VALUES ('2', 'coupes', 'Coupés');
INSERT INTO `vehicle_categories` VALUES ('3', 'sedans', 'Sedans');
INSERT INTO `vehicle_categories` VALUES ('4', 'sports', 'Sports');
INSERT INTO `vehicle_categories` VALUES ('5', 'sportsclassics', 'Sports Classics');
INSERT INTO `vehicle_categories` VALUES ('6', 'super', 'Super');
INSERT INTO `vehicle_categories` VALUES ('7', 'muscle', 'Muscle');
INSERT INTO `vehicle_categories` VALUES ('8', 'offroad', 'Off Road');
INSERT INTO `vehicle_categories` VALUES ('9', 'suvs', 'SUVs');
INSERT INTO `vehicle_categories` VALUES ('10', 'vans', 'Vans');
INSERT INTO `vehicle_categories` VALUES ('11', 'motorcycles', 'Motorräder');
INSERT INTO `vehicle_categories` VALUES ('12', 'customs', 'Customs');
INSERT INTO `vehicle_categories` VALUES ('13', 'addons', 'Addons');
INSERT INTO `vehicle_categories` VALUES ('14', 'cheap', 'Gut&Günstig');
INSERT INTO `vehicle_categories` VALUES ('15', 'audi', 'Audi');
INSERT INTO `vehicle_categories` VALUES ('16', 'benz', 'Benz');
INSERT INTO `vehicle_categories` VALUES ('17', 'bmw', 'BMW');
INSERT INTO `vehicle_categories` VALUES ('18', 'ford', 'Ford');
INSERT INTO `vehicle_categories` VALUES ('19', 'mitsubishi', 'Mitsubishi');
INSERT INTO `vehicle_categories` VALUES ('20', 'volvo', 'Volvo');
INSERT INTO `vehicle_categories` VALUES ('21', 'vw', 'VW');
INSERT INTO `vehicle_categories` VALUES ('22', 'addon_motos', 'Motorräder [A]');

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