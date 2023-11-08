-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2023 a las 13:49:18
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_inncloud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tip_doc_name` varchar(60) NOT NULL,
  `tip_doc_prefix` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `documents`
--

INSERT INTO `documents` (`id`, `tip_doc_name`, `tip_doc_prefix`, `created_at`, `updated_at`) VALUES
(3, 'Arquitectura', 'ART', '2023-11-07 22:22:55', '2023-11-07 22:22:55'),
(4, 'Construccion', 'CONS', '2023-11-07 23:10:32', '2023-11-08 17:25:52'),
(5, 'Ingenieria', 'ING', '2023-11-08 17:18:07', '2023-11-08 17:25:00'),
(6, 'ARTE', 'ART', '2023-11-08 17:26:47', '2023-11-08 17:26:47'),
(7, 'Comunicación', 'COM', '2023-11-08 17:27:45', '2023-11-08 17:27:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
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
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(42, '2014_10_12_000000_create_users_table', 1),
(43, '2014_10_12_100000_create_password_resets_table', 1),
(44, '2019_08_19_000000_create_failed_jobs_table', 1),
(45, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(46, '2023_11_03_193817_create_processes_table', 1),
(47, '2023_11_03_193851_create_documents_table', 1),
(48, '2023_11_03_230831_create_process_documents_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
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
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'API TOKEN', '005bf14362124ebd1d1cbdf1e03691c2418d515ebf1d6d87886aaa6eddc3eb6e', '[\"*\"]', NULL, NULL, '2023-11-07 22:07:04', '2023-11-07 22:07:04'),
(2, 'App\\Models\\User', 1, 'API TOKEN', '3b292b42fd2a179b8e7d8fe12910e4a0f79a85f42ff11c627581cc3d922ec4e4', '[\"*\"]', '2023-11-08 17:46:58', NULL, '2023-11-07 22:07:27', '2023-11-08 17:46:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `processes`
--

CREATE TABLE `processes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pro_prefix` varchar(20) NOT NULL,
  `pro_name` varchar(60) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `processes`
--

INSERT INTO `processes` (`id`, `pro_prefix`, `pro_name`, `created_at`, `updated_at`) VALUES
(1, 'CPC', 'Capacitacion', '2023-11-07 22:08:34', '2023-11-07 22:08:34'),
(2, 'MTR', 'Master', '2023-11-07 23:09:28', '2023-11-07 23:09:28'),
(3, 'ESP', 'Especialización', '2023-11-07 23:35:38', '2023-11-08 16:58:28'),
(4, 'IND', 'Induccion', '2023-11-08 16:36:22', '2023-11-08 16:36:22'),
(5, 'INS', 'Instructivo', '2023-11-08 16:57:23', '2023-11-08 16:57:23'),
(6, 'APR', 'Aprendizaje', '2023-11-08 17:00:56', '2023-11-08 17:04:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `process_documents`
--

CREATE TABLE `process_documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `doc_name` varchar(50) NOT NULL,
  `doc_code` int(11) NOT NULL,
  `doc_content` varchar(4000) NOT NULL,
  `id_process` bigint(20) UNSIGNED NOT NULL,
  `id_document` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `process_documents`
--

INSERT INTO `process_documents` (`id`, `doc_name`, `doc_code`, `doc_content`, `id_process`, `id_document`, `created_at`, `updated_at`) VALUES
(4, 'Capacitacion a profecionales', 4, 'Ingenierias', 2, 4, '2023-11-07 23:11:16', '2023-11-07 23:11:16'),
(5, 'Capacitacionnes', 3, 'Pruebas', 1, 3, '2023-11-08 01:42:47', '2023-11-08 01:42:47'),
(7, 'Reuniones regionales', 6, 'Reuniones para capacitación a profesionales', 3, 5, '2023-11-08 17:29:35', '2023-11-08 17:29:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
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
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$qr3LJsYW3iKJVR8sN7qXzO2A1YJk6c8clnUdIkmXrob0G5HhKYnXm', NULL, '2023-11-07 22:07:04', '2023-11-07 22:07:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `processes`
--
ALTER TABLE `processes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `process_documents`
--
ALTER TABLE `process_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `process_documents_id_process_foreign` (`id_process`),
  ADD KEY `process_documents_id_document_foreign` (`id_document`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `processes`
--
ALTER TABLE `processes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `process_documents`
--
ALTER TABLE `process_documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `process_documents`
--
ALTER TABLE `process_documents`
  ADD CONSTRAINT `process_documents_id_document_foreign` FOREIGN KEY (`id_document`) REFERENCES `documents` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `process_documents_id_process_foreign` FOREIGN KEY (`id_process`) REFERENCES `processes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
