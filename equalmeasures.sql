-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 18, 2017 at 06:07 AM
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
-- Table structure for table `demand for family planning satisfied by modern methods`
--

CREATE TABLE IF NOT EXISTS `demand for family planning satisfied by modern methods` (
  `Country` varchar(255) NOT NULL,
  `Survey` varchar(255) NOT NULL,
  `Total` double NOT NULL,
  `15-19` double NOT NULL,
  `20-29` double NOT NULL,
  `30-39` double NOT NULL,
  `40-49` double NOT NULL,
  PRIMARY KEY (`Country`,`Survey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `demand for family planning satisfied by modern methods`
--

INSERT INTO `demand for family planning satisfied by modern methods` (`Country`, `Survey`, `Total`, `15-19`, `20-29`, `30-39`, `40-49`) VALUES
('Colombia', '1990 DHS', 68.4, 50.8, 64.5, 72.6, 70.9),
('Colombia', '1995 DHS', 71, 50.7, 64.7, 76.3, 75.4),
('Colombia', '2000 DHS', 73.6, 55.3, 69.5, 78.3, 75.3),
('Colombia', '2005 DHS', 78.5, 60.3, 74.6, 81.8, 81.2),
('Colombia', '2010 DHS', 83.8, 65.4, 81.1, 87.4, 84.9),
('Colombia', '2015 DHS', 86.4, 72.2, 85.2, 88.7, 86.6),
('India', '1992-93 DHS', 59.7, 9.8, 47.3, 71.4, 82.6),
('India', '1998-99 DHS', 66.6, 13.3, 55, 75.3, 85.3),
('India', '2005-06 DHS', 69.1, 17.3, 58.7, 75.7, 83.4),
('Indonesia', '1991 DHS', 70.5, 59.3, 73.3, 70.9, 66.2),
('Indonesia', '1994 DHS', 74.3, 69.3, 79.1, 74.6, 65.8),
('Indonesia', '1997 DHS', 77.1, 80.5, 82.4, 76.9, 68),
('Indonesia', '2002-03 DHS', 77.1, 86.4, 83, 78.1, 67.6),
('Indonesia', '2007 DHS', 77, 82.2, 82.5, 79.6, 66.9),
('Indonesia', '2012 DHS', 79, 87.1, 84.4, 80.5, 71.5),
('Senegal', '1992-93 DHS', 13.2, 1.6, 10.4, 15.6, 18.1),
('Senegal', '1997 DHS', 16.9, 4.1, 12.6, 20.9, 21.8),
('Senegal', '2005 DHS', 23.5, 12.2, 18.6, 28.5, 29.8),
('Senegal', '2010-11 DHS', 28, 13.4, 25.1, 30.7, 34.6),
('Senegal', '2012-13 DHS', 34.2, 8.3, 33.3, 40.5, 32.6),
('Senegal', '2014 DHS', 42.6, 36.8, 41.8, 46.3, 38.3),
('Senegal', '2015 DHS', 43.6, 18.1, 41.6, 47.2, 46.2),
('Senegal', '2016 DHS', 47.3, 16.7, 45.2, 53.1, 49);

-- --------------------------------------------------------

--
-- Table structure for table `married women currently using any method of contraception`
--

CREATE TABLE IF NOT EXISTS `married women currently using any method of contraception` (
  `Country` varchar(255) NOT NULL,
  `Survey` varchar(255) NOT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `married women currently using any modern method of contraception`
--

CREATE TABLE IF NOT EXISTS `married women currently using any modern method of contraception` (
  `Country` varchar(255) NOT NULL,
  `Survey` varchar(255) NOT NULL,
  `Total` double NOT NULL,
  `15-19` double NOT NULL,
  `20-29` double NOT NULL,
  `30-39` double NOT NULL,
  `40-49` double NOT NULL,
  PRIMARY KEY (`Country`,`Survey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `married women currently using any modern method of contraception`
--

INSERT INTO `married women currently using any modern method of contraception` (`Country`, `Survey`, `Total`, `15-19`, `20-29`, `30-39`, `40-49`) VALUES
('Colombia', '1986 DHS', 52.4, 21.2, 53.9, 59.8, 44.9),
('Colombia', '1990 DHS', 54.6, 31.9, 51.9, 63, 50.7),
('Colombia', '1995 DHS', 59.3, 36.7, 53.7, 67.1, 60.7),
('Colombia', '2000 DHS', 64, 45, 60.8, 69.7, 63.8),
('Colombia', '2005 DHS', 68.2, 47.1, 64.7, 73.2, 69.2),
('Colombia', '2010 DHS', 72.9, 55.1, 69.9, 77.8, 73.2),
('Colombia', '2015 DHS', 75.9, 60.5, 73.5, 79.8, 76.2),
('India', '1992-93 DHS', 36.5, 4, 27.3, 53, 48),
('India', '1998-99 DHS', 42.8, 4.7, 32.9, 58.3, 56.7),
('India', '2005-06 DHS', 48.5, 6.9, 37.8, 62.4, 60),
('Indonesia', '1987 DHS', 43.9, 23.2, 47.4, 52.6, 30.5),
('Indonesia', '1991 DHS', 47.1, 29.1, 50.4, 53.9, 34.9),
('Indonesia', '1994 DHS', 52.1, 35.6, 56.2, 56.9, 40.9),
('Indonesia', '1997 DHS', 54.7, 44.3, 59.9, 58.9, 43),
('Indonesia', '2002-03 DHS', 56.7, 46.8, 60.8, 61.8, 46.7),
('Indonesia', '2007 DHS', 57.4, 46.2, 60.4, 63.9, 47),
('Indonesia', '2012 DHS', 57.9, 47.6, 60, 62.2, 51.4),
('Kenya', '1989 DHS', 17.9, 6.7, 14.7, 22.5, 19.7),
('Kenya', '1993 DHS', 27.3, 6.1, 25.1, 32.5, 29.1),
('Kenya', '1998 DHS', 31.5, 10.1, 28.7, 38.2, 32.2),
('Kenya', '2003 DHS', 31.5, 12.7, 27.8, 38, 35.4),
('Kenya', '2008-09 DHS', 39.4, 19.6, 36.2, 45.6, 40),
('Kenya', '2014 DHS', 53.2, 36.8, 54.2, 58.5, 45.1),
('Senegal', '1986 DHS', 2.4, 0.5, 1.7, 4.4, 1.7),
('Senegal', '1992-93 DHS', 4.8, 0.5, 3.6, 6.6, 5.8),
('Senegal', '1997 DHS', 8.1, 1.5, 5.8, 11.6, 9.4),
('Senegal', '2005 DHS', 10.3, 4.7, 8, 14.1, 11.6),
('Senegal', '2010-11 DHS', 12.1, 5, 10.7, 14.7, 13.4),
('Senegal', '2012-13 DHS', 16.1, 2.8, 15.4, 21, 14.9),
('Senegal', '2014 DHS', 20.3, 12.3, 19.3, 25, 17.5),
('Senegal', '2015 DHS', 21.2, 5.5, 19.6, 25.6, 22.4),
('Senegal', '2016 DHS', 23.1, 5.5, 20.8, 28.4, 25.6);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
