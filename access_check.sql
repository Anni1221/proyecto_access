-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2024 a las 03:45:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `access_check`
--

DELIMITER $$
--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `cantidad_agendamientos_activos` (`p_usuarioId` INT) RETURNS INT(11)  BEGIN
    DECLARE cantidad INT;
    SELECT COUNT(*) INTO cantidad
    FROM AgendamientoEntrada
    WHERE usuarioId = p_usuarioId AND estado = 'Activo';
    RETURN cantidad;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendamientoentrada`
--

CREATE TABLE `agendamientoentrada` (
  `idAgendamiento` int(11) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `numPersonas` int(11) NOT NULL CHECK (`numPersonas` <= 5),
  `estado` enum('Pendiente','Aceptada','Rechazada') DEFAULT 'Pendiente',
  `usuarioId` int(11) NOT NULL,
  `visitanteId` int(11) NOT NULL,
  `vehiculoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agendamientoentrada`
--

INSERT INTO `agendamientoentrada` (`idAgendamiento`, `fechaInicio`, `fechaFin`, `horaInicio`, `horaFin`, `numPersonas`, `estado`, `usuarioId`, `visitanteId`, `vehiculoId`) VALUES
(1, '2024-12-03', '2024-12-03', '10:00:00', '22:00:00', 2, 'Aceptada', 1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parqueadero`
--

CREATE TABLE `parqueadero` (
  `idParqueadero` int(11) NOT NULL,
  `TipoParqueadero` enum('Automovil','Bicicleta','Motocicleta') DEFAULT NULL,
  `CantidadParqueadero` int(11) DEFAULT NULL,
  `vehiculoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `tipoDocumento` varchar(2) DEFAULT NULL,
  `rol` enum('Administrador','Vigilante','Residente') DEFAULT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `numDoc` varchar(10) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `torre` varchar(1) NOT NULL,
  `apartamento` varchar(3) NOT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasenia` varbinary(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoDocumento`, `rol`, `nombres`, `apellidos`, `numDoc`, `telefono`, `torre`, `apartamento`, `correo`, `contrasenia`) VALUES
(1, 'CC', 'Residente', 'Edgar', 'Avendaño', '79397402', '3124222434', 'B', '103', 'hernan0013_@hotmail.com', 0x2432622431302463),
(2, 'CC', 'Residente', 'Karen', 'Avendaño', '1022926068', '3153625332', 'A', '101', 'cokie13.20@gmail.com', 0x2432622431302439),
(3, 'CC', 'Vigilante', 'Angie', 'Avendaño', '1019605452', '3136442633', '', '', 'blanconicol698@gmail.com', 0x2432622431302433),
(4, 'CC', 'Residente', 'David', 'Torres', '1040506070', '3138456321', 'A', '102', 'davidtorres@gmail.com', 0x2432622431302458),
(5, 'CC', 'Residente', 'Maria', 'Torres', '1234567890', '3136984523', 'B', '101', 'maritorres@gmail.com', 0x3837363534333231);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

CREATE TABLE `vehiculo` (
  `idVehiculo` int(11) NOT NULL,
  `tipoVehiculo` enum('Automovil','Bicicleta','Motocicleta') DEFAULT NULL,
  `placa` varchar(6) NOT NULL,
  `modelo` varchar(20) DEFAULT NULL,
  `color` enum('Rojo','Azul','Negro','Blanco','Gris') DEFAULT NULL,
  `marca` varchar(20) DEFAULT NULL,
  `Residente` tinyint(2) DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculo`
--

INSERT INTO `vehiculo` (`idVehiculo`, `tipoVehiculo`, `placa`, `modelo`, `color`, `marca`, `Residente`, `usuarioId`) VALUES
(1, 'Automovil', 'SQL158', 'BMW R1250RT', 'Blanco', '', NULL, 1),
(2, 'Automovil', 'BCH123', 'Toyota Corolla', 'Rojo', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitante`
--

CREATE TABLE `visitante` (
  `idVisitante` int(11) NOT NULL,
  `nombresVisitante` varchar(30) NOT NULL,
  `apellidosVisitante` varchar(30) NOT NULL,
  `telefonoVisitante` varchar(10) NOT NULL,
  `tipoDocumentoVisitante` varchar(2) DEFAULT NULL,
  `numDocVisitante` varchar(10) NOT NULL,
  `vehiculoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `visitante`
--

INSERT INTO `visitante` (`idVisitante`, `nombresVisitante`, `apellidosVisitante`, `telefonoVisitante`, `tipoDocumentoVisitante`, `numDocVisitante`, `vehiculoId`) VALUES
(1, 'Mónica Esperanza', 'Blanco Huertas', '3197359738', 'CC', '39767367', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendamientoentrada`
--
ALTER TABLE `agendamientoentrada`
  ADD PRIMARY KEY (`idAgendamiento`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `visitanteId` (`visitanteId`),
  ADD KEY `vehiculoId` (`vehiculoId`);

--
-- Indices de la tabla `parqueadero`
--
ALTER TABLE `parqueadero`
  ADD PRIMARY KEY (`idParqueadero`),
  ADD KEY `vehiculoId` (`vehiculoId`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`idVehiculo`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `visitante`
--
ALTER TABLE `visitante`
  ADD PRIMARY KEY (`idVisitante`),
  ADD KEY `fk_visitante_vehiculo` (`vehiculoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendamientoentrada`
--
ALTER TABLE `agendamientoentrada`
  MODIFY `idAgendamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `parqueadero`
--
ALTER TABLE `parqueadero`
  MODIFY `idParqueadero` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  MODIFY `idVehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `visitante`
--
ALTER TABLE `visitante`
  MODIFY `idVisitante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agendamientoentrada`
--
ALTER TABLE `agendamientoentrada`
  ADD CONSTRAINT `agendamientoentrada_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `agendamientoentrada_ibfk_2` FOREIGN KEY (`visitanteId`) REFERENCES `visitante` (`idVisitante`),
  ADD CONSTRAINT `agendamientoentrada_ibfk_3` FOREIGN KEY (`vehiculoId`) REFERENCES `vehiculo` (`idVehiculo`);

--
-- Filtros para la tabla `parqueadero`
--
ALTER TABLE `parqueadero`
  ADD CONSTRAINT `parqueadero_ibfk_1` FOREIGN KEY (`vehiculoId`) REFERENCES `vehiculo` (`idVehiculo`);

--
-- Filtros para la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `vehiculo_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `visitante`
--
ALTER TABLE `visitante`
  ADD CONSTRAINT `fk_visitante_vehiculo` FOREIGN KEY (`vehiculoId`) REFERENCES `vehiculo` (`idVehiculo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
