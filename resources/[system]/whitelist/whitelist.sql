CREATE TABLE IF NOT EXISTS `user_whitelist` (
  `identifier` varchar(255) CHARACTER SET utf8 NOT NULL,
  `whitelisted` BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;