# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.23)
# Database: movie_shop
# Generation Time: 2019-07-20 11:04:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table admin
# ------------------------------------------------------------

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table genre
# ------------------------------------------------------------

DROP TABLE IF EXISTS `genre`;

CREATE TABLE `genre` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT '',
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;

INSERT INTO `genre` (`id`, `title`, `description`)
VALUES
	(1,'Action  3D','action movies'),
	(2,'Thriller 3D',NULL),
	(3,'Animation 3D',NULL),
	(4,'Horror 3D',NULL),
	(5,'Dcoumentary 3D',NULL),
	(6,'Fantasy 3D',NULL),
	(7,'History 3D',NULL),
	(8,'Adventure 3D',NULL);

/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table movie
# ------------------------------------------------------------

DROP TABLE IF EXISTS `movie`;

CREATE TABLE `movie` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT NULL,
  `description` varchar(10000) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `genreId` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `cast` varchar(1000) DEFAULT NULL,
  `producer` varchar(1000) DEFAULT NULL,
  `duration` varchar(20) DEFAULT NULL,
  `thumbnail` varchar(200) DEFAULT NULL,
  `videoUrl` varchar(200) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;

INSERT INTO `movie` (`id`, `title`, `description`, `country`, `genreId`, `year`, `cast`, `producer`, `duration`, `thumbnail`, `videoUrl`, `timestamp`, `rating`)
VALUES
	(1,'The Legend of Tarzan ','The Legend of Tarzan 3d blu ray movie is an overly dark and serious variation on the theme of Tarzan, which ends too weakly for a multi-million dollar Hollywood production. Tarzan the legends about the ape-man began with the story of gorilla rearing of a little boy who grew up and became a mighty warrior, but what happened next after he saved Jane and became her husband?\n\nYears passed after the man whom everyone knew as Tarzan (Skasgard) took his rightful name, John Clayton, Lord Greystock, and left the African jungle. Together with his wife (Robbie) he leads a measured life, becoming one of the representatives of the high society of England, and the incredible adventures of the past have become only a part of the memories. The reputation of John Clayton as an expert in the affairs of the Black Continent is pushing the English Parliament to appoint him trade emissary in the Belgian Congo. Who could have imagined that Lord Greystock would be destined to return to the land where his wild life began? He does not know that the expedition is just a cover for the evil plan of intruders. But in vain they hoped to enrich themselves with its help - upon arriving home, Clayton quickly realizes what lies behind “trading activity”. An attempt to influence the former savage with threats and blackmail, only inflames him, and now there is no trace of a civilized man, the primal rage of the monkey lord falls upon the enemy, the battle cry of Tarzan gathers the entire army of the jungle to destroy the invaders in the ocean.','usa',1,2016,'Alexander Skarsgrd','David Yates','1h 49 min','ae3f475cb6cdc1246b85fdbc90067353','https://youtu.be/Aj7ty6sViiU','2019-07-20 10:47:00',6.3),
	(2,'Life of Pi','Story 3D Movie\n3d movie Life of Pi is another story of Mowgli, which takes place not in the jungle, but in the middle of the Pacific Ocean, where a boat drifts along after the shipwreck along the endless water surface. And few survived - boy Pi, zebra, hyena, orangutan and Bengal tiger, and everyone, of course, wants to survive. Which of them is more likely?\nReview 3D Movie\nScenic adventure movie about a boy and a tiger Traveling by ship from India to Canada, Pi (Sharma), his family and all the animals of their zoo were thrown into the sea during a terrible storm. Only Pi survives: for weeks he drifts through the waves in a boat in the company of an evil tiger.','india',2,2016,'Suraj Sharma, Irrfan Khan','Ang Lee','2h 7 min.','b57d873ed3c609138eb3d24d64aae6ac','https://youtu.be/3mMN693-F3U','2019-07-20 10:52:23',7.9),
	(3,'The Grinch','3d movies 2018 The Grinch this is an animated film version of an old film about the Grincha The Christmas Thief. Only now is this family cartoon. Not far from Ktohrad, a gloomy green Grinch lives in a cave hidden from prying eyes. Once the inhabitants of the city caused him a deadly offense - an unusual appearance made the hero the subject of ridicule of all boys, girls and even adults in Ktograd.','uk',1,2016,'Benedict Cumberbatch,','Yarrow Cheney, Scott Mosier','1h 26 min','34a5e4459e9bc838d98db0a4526472b0','https://youtu.be/vjnqABgxfO0','2019-07-20 15:30:01',6.3),
	(4,'Gods of Egypt','Sbs movies 3d Gods of Egypt talks about how the once peaceful and prosperous Egyptian kingdom plunges into chaos: the merciless god of darkness Seth kills his brother Osiris and usurps the throne. The call to him suddenly throws a simple mortal, resourceful young thief. In order to bring his beautiful beloved back to life, he has to enlist the support of the powerful and vengeful god Gore. Only by enduring the test of strength and sacrificing all the most expensive, they will be able to resist Seth and his minions in the world of the living and the world of the dead. See Gods of Egypt only in 3D.','norway',4,2016,'Brenton Thwaites','Alex Proyas','2h 6 min.','8c916a4403fbede99994f14480888023','https://youtu.be/IJBnK2wNQSo','2019-07-20 15:31:46',5.3);

/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table rating
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rating`;

CREATE TABLE `rating` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `active` int(1) DEFAULT '0',
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `address`, `active`, `timestamp`, `token`)
VALUES
	(1,'Amit Kulkarni','pythoncpp@gmail.com','test','+919850556315','Asawari H-105, Nanded City',1,'2019-07-20 13:16:46','862aa5b0-aac2-11e9-92f3-e38ee7866281');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
