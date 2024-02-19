-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 20, 2024 at 12:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `image`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'title', 'content', 'OVy3rxfqyvIS8dwD0ceAo4xEWMSOOqRcO1vTIOXK.png', 'active', 4, '2024-02-17 16:07:15', '2024-02-17 16:07:15'),
(2, 'Title 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, autem! Consectetur velit in porro, illum culpa pariatur dolores natus veritatis, sapiente atque aut doloribus, placeat aliquid! Quaerat assumenda explicabo unde. Excepturi saepe optio aliquam, assumenda cupiditate quisquam explicabo praesentium laborum rem voluptate asperiores porro odio, ab quia, impedit harum hic!', '1M67IHhTEu4vkaFRZAjT4v7aeTRly5ZYK03fXv9R.png', 'active', 1, '2024-02-17 16:27:44', '2024-02-17 16:27:44'),
(3, 'Abc', 'abc12', 'MfuTzTlWkAJcuyeMWOKJRDeGYmAFirzl0PqN632X.png', 'inactive', 1, '2024-02-19 15:59:03', '2024-02-19 15:59:03'),
(4, 'asdas', 'asad', '3w9JkMZEeElm1cZhl6YM82yQYfGdKvrjddWVvF1V.png', 'active', 1, '2024-02-19 15:59:58', '2024-02-19 15:59:58'),
(5, 'asdasd', 'aasdasd', 'yOnZkvRWra7lzjBKj22BxgXcXQ1NhIrD5RTxzip1.png', 'inactive', 1, '2024-02-19 16:02:48', '2024-02-19 16:02:48'),
(6, 'asdasd', 'aasdasd', 'iic1Gqxx3Hlvn8jt3XhJ05WnV1tK3dnGGq3FtfxM.png', 'active', 1, '2024-02-19 16:02:57', '2024-02-19 16:02:57'),
(7, 'asdasd12', 'asdasd', 'W7dBc3ul6lPAqFEjVg3H2jTbrM3Nb0sUA0JBYXvR.png', 'inactive', 1, '2024-02-19 16:05:43', '2024-02-19 16:05:43'),
(8, 'adss', 'asda213', 'I9Qn1mqbC5BAt54T2kbHw7zub2Vkm6Lh59dStikV.png', 'inactive', 1, '2024-02-19 16:10:19', '2024-02-19 16:10:19'),
(9, 'adss', 'asda213', '0c4r1pi96M323XJis7PVANaIrJYkxlNHhF19jS4e.png', 'inactive', 1, '2024-02-19 16:10:30', '2024-02-19 16:10:30'),
(10, 'adss', 'asda213', 'ogQds6BOlfkh7DV6edBsfknwxomrPDA40PPcMpbb.png', 'inactive', 1, '2024-02-19 16:10:43', '2024-02-19 16:10:43'),
(11, 'abc213', 'abc213', 'nTrnnbTW6HkPqRHXsGGjateKXTPoWuPtpfkXsukz.png', 'inactive', 1, '2024-02-19 16:11:37', '2024-02-19 16:11:37'),
(12, 'abc213', 'abc213', 'oDwOpoLZuQZUj7UhFVSNsDt7sB5QsWYQzXkxNRdz.png', 'inactive', 1, '2024-02-19 16:11:43', '2024-02-19 16:11:43'),
(13, 'sadasdasd', 'asdsd', 'EsbS7MPEAhVSi2kLmTLRTUQmk7w8u3HkInUGs0sV.png', 'inactive', 1, '2024-02-19 16:22:01', '2024-02-19 16:22:01'),
(14, 'sdaasdad', 'asdads', 'V3wGYi0dM4b7oC4DKhg2jFDFvkEc9Rx2wGRxG3EU.png', 'active', 1, '2024-02-19 16:22:22', '2024-02-19 16:22:22'),
(15, 'asdasd', 'asddada', 'PeHsZA0txbLTrUSyRt1VmDJvyENWtkG1cKhhutTJ.png', 'active', 1, '2024-02-19 16:22:44', '2024-02-19 16:22:44');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_02_17_210209_create_blogs_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'abea19696979878dc3730f660edf68f3f35b8b51c9e6fd71583e0e2d44d8cd3a', '[\"*\"]', NULL, NULL, '2024-02-17 12:00:34', '2024-02-17 12:00:34'),
(2, 'App\\Models\\User', 1, 'auth_token', '85db3c3ccea0acbd2cf8be0c790983695ef1f82eb5a2fad4a7b0a80b4f5a9424', '[\"*\"]', NULL, NULL, '2024-02-17 13:46:32', '2024-02-17 13:46:32'),
(3, 'App\\Models\\User', 1, 'auth_token', '471fa9e5fa636954bcf1da6cb8e6e2d36bf30c0c1d88b153e6a8d0ce1d52433e', '[\"*\"]', NULL, NULL, '2024-02-17 13:49:57', '2024-02-17 13:49:57'),
(4, 'App\\Models\\User', 1, 'auth_token', '949b202935e0f0392063801239aceaaba5f3d9eb20d797e60a7fde46262f1a73', '[\"*\"]', NULL, NULL, '2024-02-17 13:50:57', '2024-02-17 13:50:57'),
(5, 'App\\Models\\User', 1, 'auth_token', 'b643df9ce02d416e103f7e8aeb0dcfca7d3d701aba06c78f115b55274b155122', '[\"*\"]', NULL, NULL, '2024-02-17 13:52:37', '2024-02-17 13:52:37'),
(6, 'App\\Models\\User', 1, 'auth_token', 'a7532196717d1c39aa1f80273310df4930dde672d0c1bd8118500fc9805f7c76', '[\"*\"]', NULL, NULL, '2024-02-17 13:53:06', '2024-02-17 13:53:06'),
(7, 'App\\Models\\User', 1, 'auth_token', '31fb45f6f6990b8046e37209cdcad8f24a8bf76bb0fc796135fa3d1ede0d8d9e', '[\"*\"]', NULL, NULL, '2024-02-17 13:53:31', '2024-02-17 13:53:31'),
(8, 'App\\Models\\User', 1, 'auth_token', '46ab2d59a60a25494981dbe7d0c0743e1aeec68c28bc07a0731d10a2b0412a8f', '[\"*\"]', NULL, NULL, '2024-02-17 13:55:51', '2024-02-17 13:55:51'),
(9, 'App\\Models\\User', 1, 'auth_token', 'c419f45fcf462d8cd6b5615e92f85676895fbf68cc35e733ff4a44588302c6da', '[\"*\"]', NULL, NULL, '2024-02-17 13:59:16', '2024-02-17 13:59:16'),
(10, 'App\\Models\\User', 1, 'auth_token', '08657f4ee2453be420e45abf5584cc03cc5d6b813c4f184df46473a5795c36a6', '[\"*\"]', NULL, NULL, '2024-02-17 13:59:58', '2024-02-17 13:59:58'),
(11, 'App\\Models\\User', 1, 'auth_token', '19f3237b8ef56a3b923d5bc40595a2193b58d41c14b9ae41e0706b3f228ec81e', '[\"*\"]', NULL, NULL, '2024-02-17 14:10:25', '2024-02-17 14:10:25'),
(12, 'App\\Models\\User', 1, 'auth_token', '5bcb008220b4d7627ef48541d5d7a6fa9c84e08f6d75c71b5ba233e82c13b81b', '[\"*\"]', NULL, NULL, '2024-02-17 14:11:19', '2024-02-17 14:11:19'),
(13, 'App\\Models\\User', 1, 'auth_token', '86b54f371a8199a3c3e0184cacbd38d891247e10eac3da24758f5ef9a2a07e53', '[\"*\"]', NULL, NULL, '2024-02-17 14:18:36', '2024-02-17 14:18:36'),
(14, 'App\\Models\\User', 1, 'auth_token', '6c90dcf935e618b4653d8566ed6b6e2367d30e5d8253ac9a5b4f6e44ce183452', '[\"*\"]', NULL, NULL, '2024-02-17 14:43:30', '2024-02-17 14:43:30'),
(15, 'App\\Models\\User', 1, 'auth_token', '55903dd5b48d635a5d1f2e12710ad697b7b778d92c2ff220437b8d55f5e91ad6', '[\"*\"]', NULL, NULL, '2024-02-17 14:44:20', '2024-02-17 14:44:20'),
(16, 'App\\Models\\User', 1, 'auth_token', '7f6c36fcc702c1aaaa85a712165a28cad292eca66c0cef279a62e2ce664bcb7a', '[\"*\"]', NULL, NULL, '2024-02-17 14:46:51', '2024-02-17 14:46:51'),
(17, 'App\\Models\\User', 1, 'auth_token', '438b118bf1defb122325dbe8c5992e78138672c19e4a5c26ca9fa7775e9330f5', '[\"*\"]', NULL, NULL, '2024-02-17 14:47:32', '2024-02-17 14:47:32'),
(18, 'App\\Models\\User', 1, 'auth_token', '81fd204db2dfbda74ea40938c45ed713b054847c6162654ccd4f7c28b1468547', '[\"*\"]', NULL, NULL, '2024-02-17 14:47:45', '2024-02-17 14:47:45'),
(19, 'App\\Models\\User', 1, 'auth_token', '3610df84c2080f2630ffeeb3e8b0eaeb42e9a40d9e9e13fd68fea725c30e76a6', '[\"*\"]', NULL, NULL, '2024-02-17 14:48:22', '2024-02-17 14:48:22'),
(20, 'App\\Models\\User', 1, 'auth_token', 'cf0547afc318d48765648d6b475b489cdc194cafd9de74eb09889fc1c3a8f732', '[\"*\"]', NULL, NULL, '2024-02-17 14:49:18', '2024-02-17 14:49:18'),
(21, 'App\\Models\\User', 1, 'auth_token', '442b7bf95ccd4dae6a3f922cb6babbb45e4913ab25dcbd99cabb68f03fb3f006', '[\"*\"]', NULL, NULL, '2024-02-17 14:54:46', '2024-02-17 14:54:46'),
(22, 'App\\Models\\User', 1, 'auth_token', 'a2031a61626e4e0c554da1038deca6541de700f45fbafbe2e1fc1731f10e8922', '[\"*\"]', NULL, NULL, '2024-02-17 15:11:30', '2024-02-17 15:11:30'),
(23, 'App\\Models\\User', 2, 'auth_token', '9c0bc53052fef072ea49f9cf09a304b4844a1339c249bd81d6a7b9c047408ffa', '[\"*\"]', NULL, NULL, '2024-02-17 15:12:01', '2024-02-17 15:12:01'),
(24, 'App\\Models\\User', 3, 'auth_token', 'cdb00719ef62bfa981fb2faa6e51511618f2bde24fb85c000e1982b4c9005f4b', '[\"*\"]', NULL, NULL, '2024-02-17 15:12:35', '2024-02-17 15:12:35'),
(25, 'App\\Models\\User', 4, 'auth_token', 'd979da2550e481e34d5d3c92092e08fcdc767a2fc6c4e31d67d9ebf85845c987', '[\"*\"]', NULL, NULL, '2024-02-17 15:14:59', '2024-02-17 15:14:59'),
(26, 'App\\Models\\User', 5, 'auth_token', 'dc2d0ef48e5d88a1da3517ce840b90c1be31f2dd2200e2d9886d1246c8d282a8', '[\"*\"]', NULL, NULL, '2024-02-17 15:15:05', '2024-02-17 15:15:05'),
(27, 'App\\Models\\User', 1, 'auth_token', 'a6826970929bda26ca29e8a7b7de2b07bc8a460a06ebd5093e91d5248c806657', '[\"*\"]', NULL, NULL, '2024-02-17 15:48:15', '2024-02-17 15:48:15'),
(28, 'App\\Models\\User', 1, 'auth_token', '2f12e6560ad909f672219237d53bae87edcebf0ed28b0bf928ff75c0ec580937', '[\"*\"]', NULL, NULL, '2024-02-17 15:48:48', '2024-02-17 15:48:48'),
(29, 'App\\Models\\User', 1, 'auth_token', '0e26f58ab208ead46bee17d2c53d96d87d0631fc43cc3f29fa89fa9242a6da2b', '[\"*\"]', NULL, NULL, '2024-02-17 15:48:52', '2024-02-17 15:48:52'),
(30, 'App\\Models\\User', 1, 'auth_token', 'aef5b87f3d07eff8ffb320f022defb8c52f12ee12e000f20ef6b65e30959704a', '[\"*\"]', NULL, NULL, '2024-02-17 15:49:03', '2024-02-17 15:49:03'),
(31, 'App\\Models\\User', 1, 'auth_token', '920c3f366d26ddca628660aea0f4e7a2f5fc9a8c8f9ccb639b66d6d630f9ebe3', '[\"*\"]', NULL, NULL, '2024-02-17 15:50:29', '2024-02-17 15:50:29'),
(32, 'App\\Models\\User', 1, 'auth_token', '52172d996e819fec3d48636e48a25d1b6d2455112cad2e2865abb1c14bc25f8d', '[\"*\"]', NULL, NULL, '2024-02-19 15:58:25', '2024-02-19 15:58:25'),
(33, 'App\\Models\\User', 1, 'auth_token', 'b478a1b29281f5beef70f363c05c48d8483298235997aa7c1fd54c9226f6ffd8', '[\"*\"]', '2024-02-19 17:38:30', NULL, '2024-02-19 17:24:43', '2024-02-19 17:38:30'),
(34, 'App\\Models\\User', 1, 'auth_token', '3d1772613474afeb022e12c658a9a482b8a07742ab4fdba71dfd51dbabdc7a37', '[\"*\"]', '2024-02-19 17:42:32', NULL, '2024-02-19 17:39:58', '2024-02-19 17:42:32'),
(35, 'App\\Models\\User', 1, 'auth_token', '6bc30759cf02521048d2439bc71448d533121682d34989eacaa6a28badfb6712', '[\"*\"]', '2024-02-19 17:42:49', NULL, '2024-02-19 17:42:41', '2024-02-19 17:42:49'),
(36, 'App\\Models\\User', 1, 'auth_token', '7dbaaec3f5d366bcdf2e1dd83eecb1045dfb5b68f2653867e143713f99b51d63', '[\"*\"]', '2024-02-19 17:55:29', NULL, '2024-02-19 17:44:57', '2024-02-19 17:55:29'),
(37, 'App\\Models\\User', 1, 'auth_token', '2a04f3fbe8d52ede5048ff56fbd125ff99ae3e285169ce7fcb1e9988ff801407', '[\"*\"]', '2024-02-19 18:06:16', NULL, '2024-02-19 17:55:42', '2024-02-19 18:06:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'huzaifa ahmed', 'huzaifa.sidtechno@gmail.com', NULL, '$2y$12$0xcVWo4om/0bmTnRDRBmxO4O41rYfoeooRkHCzXMJcaQrhe.f5kc6', NULL, '2024-02-17 12:00:34', '2024-02-17 12:00:34'),
(2, 'huzaifa12', 'huzaifa.sidtechno12@gmail.com', NULL, '$2y$12$hSsOX2i3KMuejaXRnXB8yuciYq7UgEIMWhK.OnQE2ARdfrJ0ubQKu', NULL, '2024-02-17 15:12:01', '2024-02-17 15:12:01'),
(3, 'admin', 'admin@gmail.com', NULL, '$2y$12$9QPd.5E/dnpEa9Cruo3J3OB4zvcD6w5a67g2GNEr2qGg0zc7VqEG.', NULL, '2024-02-17 15:12:35', '2024-02-17 15:12:35'),
(4, 'admin12', 'admin12@gmail.com', NULL, '$2y$12$xbSPQJkD0dK32TPOzia2P.iVW99bJG8GJCgEtV6WPopB3Oyds5Neq', NULL, '2024-02-17 15:14:59', '2024-02-17 15:14:59'),
(5, 'admin12', 'admin123@gmail.com', NULL, '$2y$12$RUKzbO2foA4Mc3JKysR5leRHvyofpqaicNcyRUtHuTdKZPFXoyFN.', NULL, '2024-02-17 15:15:05', '2024-02-17 15:15:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
