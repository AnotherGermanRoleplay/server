INSERT INTO `addon_account` (name, label, shared) VALUES 
	('society_biker_ccmc','CCMC',1)
;

INSERT INTO `datastore` (name, label, shared) VALUES 
	('society_biker_ccmc','CCMC',1)
;

INSERT INTO `addon_inventory` (name, label, shared) VALUES 
	('society_biker_ccmc', 'CCMC', 1)
;

INSERT INTO `jobs` (`name`, `label`, `whitelisted`) VALUES
('ccmc_biker', 'CCMC', 1);

--
-- Déchargement des données de la table `jobs_grades`
--

INSERT INTO `job_grades` (`job_name`, `grade`, `name`, `label`, `salary`, `skin_male`, `skin_female`) VALUES
('biker', 1, 'soldato', 'Artillero De Rabo', 350, '{}', '{}'),
('biker', 2, 'ejec', 'Ejecutor', 400, '{}', '{}'),
('biker', 3, 'capo', 'Capitan De Camino', 450, '{}', '{}'),
('biker', 4, 'secr', 'Secretario', 500, '{}', '{}'),
('biker', 5, 'consigliere', 'Sargento De Armas', 550, '{}', '{}'),
('biker', 6, 'subb', 'V. Presidente', 600, '{}', '{}'),
('biker', 7, 'boss', 'Presidente', 650, '{}', '{}');

CREATE TABLE `fine_types_biker` (
  
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  
  PRIMARY KEY (`id`)
);

INSERT INTO `fine_types_biker` (label, amount, category) VALUES 
	('Schutzgeld',3000,0),
	('Schutzgeld',5000,1),
	('Schutzgeld',10000,3),
	('Erpressung',20000,5),
	('Erpressung',50000,6)
;