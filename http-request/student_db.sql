-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2020 at 03:49 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `student_tb`
--

CREATE TABLE `student_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_tb`
--

INSERT INTO `student_tb` (`id`, `name`, `lastname`, `phone`, `email`) VALUES
(19, 'divvhuv', 'jicuhchu', '', ' D@gmail.com'),
(24, 'joshua', 'ifejivije', '', ' ola@gmail.com'),
(28, 'jcd', 'uvuwuv', '', ' uscu'),
(30, 'iofvi', 'ivhe', '', ' hidhvu'),
(35, 'joshua', '744', '', ' w@uifw'),
(36, 'OLawale', 'hfhf', '', ' q@gmail.com'),
(37, 'bulu', 'frgjirgijrg', '', ' you@gmail.com'),
(42, 'iofbhui', 'fjgjt', '', ' hudbu@gmail.com'),
(43, 'kola', 'jkkd', '', ' olaremi@gmail.com'),
(44, 'olarinde', 'losodid', '', ' ee@gmail.com'),
(45, 'oyerinde', 'olamide', '', ' rinedex@gmail.com'),
(46, 'kolamide', 'kolarinde', '', ' ayo@gmail.com'),
(47, 'olarinde', 'holarindex', '', ' tom@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student_tb`
--
ALTER TABLE `student_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student_tb`
--
ALTER TABLE `student_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
