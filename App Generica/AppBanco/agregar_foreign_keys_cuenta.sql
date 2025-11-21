-- Script para agregar las claves foráneas faltantes a la tabla cuenta
-- Ejecutar solo si las claves foráneas no existen

-- Agregar clave foránea para idtipocuenta
ALTER TABLE cuenta 
ADD CONSTRAINT cuenta_ibfk_1 FOREIGN KEY (idtipocuenta) REFERENCES tipocuenta (idtipocuenta);

-- Agregar clave foránea para idsucursal
ALTER TABLE cuenta 
ADD CONSTRAINT cuenta_ibfk_2 FOREIGN KEY (idsucursal) REFERENCES sucursal (idSucursal);

-- Agregar clave foránea para idcuenta en prestamo
ALTER TABLE prestamo 
ADD CONSTRAINT prestamo_ibfk_1 FOREIGN KEY (idcuenta) REFERENCES cuenta (idcuenta);

