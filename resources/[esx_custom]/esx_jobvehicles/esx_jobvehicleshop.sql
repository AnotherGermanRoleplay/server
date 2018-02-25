USE `essentialmode`;

CREATE TABLE `owned_job_vehicles` (

  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle` longtext NOT NULL,
  `owner` varchar(60) NOT NULL,
  `job` varchar(60) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `job_vehicle_categories` (

  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `label` varchar(60) NOT NULL,

  PRIMARY KEY (`id`)
);

INSERT INTO `job_vehicle_categories` (name, label) VALUES
  ('police','Police'),
  ('taxi','Taxi'),
  ('ambulance','Ambulance'),
;

CREATE TABLE `job_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `model` varchar(60) NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(60) DEFAULT NULL,
  `job` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `job_vehicles` (name, model, price, category) VALUES
  ('Policecar','police1',1000,'police','police'),
  ('Taxi','taxi',1000,'taxi','taxi'),
  ('Ambulance','ambulance',1000,'ambulance','ambulance'),
;
