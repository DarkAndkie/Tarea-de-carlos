-- Tablas faltantes para el sistema bancario

-- Tabla TipoDocumento
CREATE TABLE tipodocumento (
  idtipodocumento int NOT NULL AUTO_INCREMENT,
  tipodocumento varchar(50) DEFAULT NULL,
  sigla varchar(10) DEFAULT NULL,
  PRIMARY KEY (idtipodocumento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Cuentahabiente
CREATE TABLE cuentahabiente (
  idcuentahabiente int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) DEFAULT NULL,
  idtipodocumento int DEFAULT NULL,
  documento varchar(50) DEFAULT NULL,
  direccion varchar(100) DEFAULT NULL,
  telefono varchar(50) DEFAULT NULL,
  idciudad int DEFAULT NULL,
  clave varchar(100) DEFAULT NULL,
  PRIMARY KEY (idcuentahabiente),
  KEY idtipodocumento (idtipodocumento),
  KEY idciudad (idciudad),
  CONSTRAINT cuentahabiente_ibfk_1 FOREIGN KEY (idtipodocumento) REFERENCES tipodocumento (idtipodocumento),
  CONSTRAINT cuentahabiente_ibfk_2 FOREIGN KEY (idciudad) REFERENCES ciudad (idCiudad)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Titular (tabla de relación muchos a muchos entre Cuenta y Cuentahabiente)
CREATE TABLE titular (
  idcuenta int NOT NULL,
  idcuentahabiente int NOT NULL,
  PRIMARY KEY (idcuenta, idcuentahabiente),
  KEY idcuentahabiente (idcuentahabiente),
  CONSTRAINT titular_ibfk_1 FOREIGN KEY (idcuenta) REFERENCES cuenta (idcuenta),
  CONSTRAINT titular_ibfk_2 FOREIGN KEY (idcuentahabiente) REFERENCES cuentahabiente (idcuentahabiente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla TipoMovimiento
CREATE TABLE tipomovimiento (
  idtipomovimiento int NOT NULL AUTO_INCREMENT,
  tipomovimiento varchar(50) DEFAULT NULL,
  PRIMARY KEY (idtipomovimiento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Movimiento
CREATE TABLE movimiento (
  idmovimiento int NOT NULL AUTO_INCREMENT,
  idcuenta int DEFAULT NULL,
  idsucursal int DEFAULT NULL,
  fecha varchar(50) DEFAULT NULL,
  valor double DEFAULT NULL,
  idtipomovimiento int DEFAULT NULL,
  descripcion varchar(200) DEFAULT NULL,
  PRIMARY KEY (idmovimiento),
  KEY idcuenta (idcuenta),
  KEY idsucursal (idsucursal),
  KEY idtipomovimiento (idtipomovimiento),
  CONSTRAINT movimiento_ibfk_1 FOREIGN KEY (idcuenta) REFERENCES cuenta (idcuenta),
  CONSTRAINT movimiento_ibfk_2 FOREIGN KEY (idsucursal) REFERENCES sucursal (idSucursal),
  CONSTRAINT movimiento_ibfk_3 FOREIGN KEY (idtipomovimiento) REFERENCES tipomovimiento (idtipomovimiento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
