USE `essentialmode`;

INSERT INTO `addon_account` (name, label, shared) VALUES
  ('society_bus','Bus',1)
;

INSERT INTO `addon_inventory` (name, label, shared) VALUES
  ('society_bus','Bus',1)
;

INSERT INTO `jobs` (name, label) VALUES
  ('bus','Bus')
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
  ('bus',0,'recrue','Rekrut',12,'{}','{}'),
  ('bus',1,'novice','Anfänger',24,'{}','{}'),
  ('bus',2,'experimente','Experte',36,'{}','{}'),
  ('bus',3,'driver','Fahrer',48,'{}','{}'),
  ('bus',4,'boss','Chef',0,'{}','{}')
;
