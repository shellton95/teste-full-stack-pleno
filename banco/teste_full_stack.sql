-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: teste_full_stack
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2019_12_14_000001_create_personal_access_tokens_table',1),(2,'2025_10_02_003700_create_usuarios_table',1),(3,'2025_10_02_144622_create_posts_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conteudo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `autor_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_autor_id_foreign` (`autor_id`),
  CONSTRAINT `posts_autor_id_foreign` FOREIGN KEY (`autor_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'update','oba obad',2,'2025-10-02 19:47:11','2025-10-02 20:27:56'),(11,'dfdfdf','dfdfdfdfdf',1,'2025-10-03 17:47:03','2025-10-03 17:47:03'),(12,'dfdfdf','dfdfdfdf',1,'2025-10-03 17:47:41','2025-10-03 17:47:41'),(15,'novo shell','sfdgrsçlfdklkdjsafklçsjglksfgfgfg',1,'2025-10-03 20:08:54','2025-10-03 20:08:54'),(16,'novo','dsfg~çsfdkgdfksgçlkdfgçlkçlgk  klçkdçlgf lasfdçla ÇÇLskd lçAFÇFSJAGÇKLÇK~Ç LK  LÇ~KDAFÇ~L KDAF KAS~fkl  ~k ~çk ~çakf~çdkf~ç adkf~adskf   ~çaSD~ÇDAKF~ÇDFK ~ÇADSKF~ÇAdk ~çk  ~çSDK~ÇASKF~ÇDGSK~çsak jpoiahfjipod f ~k~ç kasd~çfkd~çfks´dgfkjp´~efgkdçasfkl    ãsçkf~çadkf~çdkf~çasD ~ÇK  ~SKF~ÇDAFK~SAJFDPOÉDS´FP ´ ´PSAkfd~çafk~çdkfp´~af´poasjdfkiadhjkflhdklfjdkçlsfjdaçkjfçde lç kçladjsfçldfjçdlajf  lç~kçasdflÃWDÇ]\nSDFAÃ]\nÇF]~DALF  ~ÇASDKF~ÇDKF´LSDPÇKJPOERJTÇLEDFMK~ÇDFKMÇSLDFG',1,'2025-10-03 21:16:51','2025-10-03 21:16:51'),(17,'teste 12','Nos bastidores, entretanto, comenta-se que o cerne da questão é a Lei das Estatais, que exige uma quarentena para dirigentes partidários em cargos de comando de empresas públicas, já que Câmara foi dirigente do PSB até janeiro de 2023.Embora ele tenha sido inicialmente amparado por uma liminar do STF para assumir o cargo, essa liminar foi derrubada em dezembro de 2023, e o prazo de seu mandato, que se estendeu estatutariamente, expirou. Ainda conforme se comenta nos bastidores, a expectativa é que Câmara, ex-governador de Pernambuco, retorne à presidência, em janeiro do próximo ano, após cumprir a quarentena, e um membro da diretoria deve assumir interinamente.“O Ministério da Fazenda esclarece que a indicação de novo Presidente será feita de forma tempestiva, transparente e nos termos do rito legal estabelecido pela Lei 13.303/16, pelo Decreto 8.945/16 e pelo Estatuto Social do Banco, diz a nota.\n    Leia mais em: https://www.opovo.com.br/noticias/economia/2025/10/03/saida-de-paulo-camara-da-presidencia-do-bnb-e-confirmada-pelo-ministerio-da-fazenda.html\n    ©2022 Todos os direitos são reservados ao Portal O POVO, conforme a Lei nº 9.610/98. A publicação, redistribuição, transmissão e reescrita sem autorização prévia são proibidas',6,'2025-10-03 22:26:30','2025-10-03 22:56:36'),(19,'novo editado','dfdfdfdfdfdf',6,'2025-10-03 22:31:43','2025-10-03 22:32:02');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'teste','teste@teste.com','$2y$10$h7g3EFltYlrUjI7nRZzWc.EIrXt1iHwViBwA2rHoLEdsTV36.wV0K','2025-10-02 17:52:15','2025-10-02 17:52:15'),(2,'teste','teste2@teste.com','$2y$10$9fyeeqf9IjpPfa0BwLuLOuGQJHnbekG/UIJbWzDgs2eUesD0Li5.q','2025-10-02 20:37:01','2025-10-02 20:37:01'),(3,'hh','hh@teste.com','$2y$10$QJ7Rb2uBjO/tFcjtVbFK1eCp2PCp54RC4J42ukAwz28ERaK96Zybi','2025-10-03 05:09:19','2025-10-03 05:09:19'),(4,'dd','dd@teste.com','$2y$10$HPHoTwZWzDIFY1GxjeEIB.LDtpozG9JFx5rutqPBwxxax1WrWWVz.','2025-10-03 05:21:40','2025-10-03 05:21:40'),(5,'ff','hhf@teste.com','$2y$10$WdJNLgJMwP5QYkyxRk/d2.U7unK2nIj/quUisGO/ylNZN17JBXmJ.','2025-10-03 05:29:54','2025-10-03 05:29:54'),(6,'teste full stack','testefull@teste.com','$2y$10$JhZt3t5/RYCIiiutIHfIcO6qyZ6X8o9R86eeg8gLzgcdS.mzcXZfa','2025-10-03 22:22:54','2025-10-03 22:22:54');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-03 17:52:54
