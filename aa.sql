-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 18, 2017 at 03:23 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `equalmeasures`
--

-- --------------------------------------------------------

--
-- Table structure for table `married women currently using any method of contraception`
--

DROP TABLE IF EXISTS `married women currently using any method of contraception`;
CREATE TABLE IF NOT EXISTS `married women currently using any method of contraception` (
  `Country` varchar(255) NOT NULL,
  `Survey` varchar(50) NOT NULL,
  `Total` double NOT NULL,
  `15-19` double NOT NULL,
  `20-29` double NOT NULL,
  `30-39` double NOT NULL,
  `40-49` double NOT NULL,
  PRIMARY KEY (`Country`,`Survey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `married women currently using any method of contraception`
--

INSERT INTO `married women currently using any method of contraception` (`Country`, `Survey`, `Total`, `15-19`, `20-29`, `30-39`, `40-49`) VALUES
('Colombia', '1986 DHS', 64.8, 28.9, 63.4, 74.8, 59.4),
('Colombia', '1990 DHS', 66.1, 36.9, 61.3, 75.7, 65),
('Colombia', '1995 DHS', 72.2, 50.7, 67, 80.1, 72.5),
('Colombia', '2000 DHS', 76.9, 57.2, 73.7, 82, 77.7),
('Colombia', '2005 DHS', 78.2, 57.2, 75.2, 82.9, 79.1),
('Colombia', '2010 DHS', 79.1, 60.5, 75.6, 83.2, 80.5),
('Colombia', '2015 DHS', 81, 64.4, 77.4, 85.2, 82.1),
('India', '1992-93 DHS', 40.7, 7.1, 31.4, 58.2, 51.6),
('India', '1998-99 DHS', 48.2, 8.1, 38.1, 64.9, 61.6),
('India', '2005-06 DHS', 56.3, 13, 45.5, 71.6, 66.4),
('Indonesia', '1987 DHS', 47.7, 25.5, 51, 57.5, 33.8),
('Indonesia', '1991 DHS', 49.7, 30, 52.5, 57.1, 37.9),
('Indonesia', '1994 DHS', 54.7, 36.4, 57.9, 60.4, 44.3),
('Indonesia', '1997 DHS', 57.4, 44.5, 61.6, 62.4, 46.2),
('Indonesia', '2002-03 DHS', 60.3, 47.3, 62.9, 66.1, 51.5),
('Indonesia', '2007 DHS', 61.4, 46.8, 63, 68.9, 51.5),
('Indonesia', '2012 DHS', 61.9, 48.1, 62.4, 66.9, 56.3),
('Kenya', '1989 DHS', 26.9, 13, 23.5, 32.8, 27.9),
('Kenya', '1993 DHS', 32.7, 10.3, 30.6, 38.1, 34.6),
('Kenya', '1998 DHS', 39, 18, 35.9, 46.4, 38.8),
('Kenya', '2003 DHS', 39.3, 16.4, 34.5, 47.2, 44.2),
('Kenya', '2008-09 DHS', 45.5, 22.5, 40.8, 53.3, 46.9),
('Kenya', '2014 DHS', 58, 40.2, 57.9, 63.3, 52.3),
('Senegal', '1986 DHS', 11.3, 9.5, 12.2, 13.2, 6.3),
('Senegal', '1992-93 DHS', 7.5, 2.2, 6.7, 9.2, 8.4),
('Senegal', '1997 DHS', 12.9, 5.5, 11.2, 16.4, 13.6),
('Senegal', '2005 DHS', 11.8, 5, 9.4, 16, 13.3),
('Senegal', '2010-11 DHS', 13.1, 5.8, 11.5, 16, 14.6),
('Senegal', '2012-13 DHS', 17.8, 3.3, 16.8, 22.9, 17.7),
('Senegal', '2014 DHS', 22.2, 12.4, 20.8, 27.7, 19.1),
('Senegal', '2015 DHS', 23.3, 6.2, 21.6, 28.1, 24.8),
('Senegal', '2016 DHS', 25.1, 6.7, 22.2, 31.2, 28);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
