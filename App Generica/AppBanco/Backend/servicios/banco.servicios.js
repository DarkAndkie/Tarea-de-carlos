const db = require('../db');
//GEstion ciudades
module.exports.registrarCiudad = async (obj) => {
  const sql = "insert into ciudad (idciudad,ciudad) values (null,?);";
  const [result] = await db.execute(sql, [obj.ciudad]);
  return result.insertId;
};
module.exports.ciudadregistradas = async () => {
  const [rows] = await db.query("select * from ciudad order by ciudad asc;");
  return rows;
};
// Gestion Tipo Sucursal
module.exports.registrarTiposucursal = async (obj) => {
  const sql = "insert into tiposucursal (idtiposucursal,tipoSucursal)values (null,?);";
  const [result] = await db.execute(sql, [obj.tipoSucursal]);
  return result.insertId;
};
module.exports.tiposucursalregistradas = async () => {
  const [rows] = await db.query("select * from tiposucursal;");
  return rows;
};
// Gestion Sucursales
module.exports.registrarSucursal = async (obj) => {
  const sql = "insert into sucursal (idSucursal,sucursal,idCiudad,idtiposucursal,direccion,telefono,horario)values(null,?,?,?,?,?,?);";
  const [result] = await db.execute(sql, [obj.sucursal,obj.idCiudad,obj.idtiposucursal,obj.direccion,obj.telefono,obj.horario]);
  return result.insertId;
};
module.exports.sucursalesregistradas = async () => {
  const [rows] = await db.query("select * from sucursal;");
  return rows;
};
// Gestion Cuentas
module.exports.registrarTipoCuenta = async (obj) => {
  const sql = "insert into tipocuenta (idtipocuenta,tipocuenta,sobregiro)values(null,?,?);";
  const [result] = await db.execute(sql, [obj.tipocuenta,obj.sobregiro]);
  return result.insertId;
};
module.exports.tipocuentasregistradas = async () => {
  const [rows] = await db.query("select * from tipocuenta;");
  return rows;
};
module.exports.registrarCuenta = async (obj) => {
  const sql = "insert into cuenta (idcuenta,numero,fechaApertura,idtipocuenta,idSucursal,saldo,sobregiro,granmovimiento,sobregironoautorizado)values(null,?,current_timestamp(),?,?,?,?,?,?);";
  const [result] = await db.execute(sql, [obj.numero,
                                          obj.idtipocuenta,
                                          obj.idSucursal,
                                          obj.saldo,
                                          obj.sobregiro,
                                          obj.granmovimiento,
                                          obj.sobregironoautorizado
                                        ]);
  return result.insertId;
};
module.exports.cuentasregistradas = async () => {
  const [rows] = await db.query(" select c.idcuenta,c.numero,c.fechaApertura,a.tipocuenta,b.sucursal,c.saldo from cuenta c left join tipocuenta a on a.idtipocuenta = c.idtipocuenta left join sucursal b on b.idsucursal = c.idsucursal;");
  return rows;
};
module.exports.registrarPrestamo = async (obj) => {
  const sql = "insert into prestamo (idprestamo,idcuenta,numero,fecha,valor,intereses,plazo,seguro,cuota)values(null,?,?,current_timestamp(),?,?,?,?,?);";
  const [result] = await db.execute(sql, [obj.idcuenta,
                                          obj.numero,
                                          obj.valor,
                                          obj.intereses,
                                          obj.plazo,
                                          obj.seguro,
                                          obj.cuota
                                        ]);
  return result.insertId;
};
module.exports.prestamosregistrados = async () => {
  const [rows] = await db.query(" select * from prestamo;");
  return rows;
};
// Gestion Tipo Documento
module.exports.registrarTipoDocumento = async (obj) => {
  const sql = "insert into tipodocumento (idtipodocumento,tipodocumento,sigla)values(null,?,?);";
  const [result] = await db.execute(sql, [obj.tipodocumento, obj.sigla]);
  return result.insertId;
};
module.exports.tipodocumentosregistrados = async () => {
  const [rows] = await db.query("select * from tipodocumento;");
  return rows;
};
// Gestion Cuentahabiente
module.exports.registrarCuentahabiente = async (obj) => {
  const sql = "insert into cuentahabiente (idcuentahabiente,nombre,idtipodocumento,documento,direccion,telefono,idciudad,clave)values(null,?,?,?,?,?,?,?);";
  const [result] = await db.execute(sql, [obj.nombre, obj.idtipodocumento, obj.documento, obj.direccion, obj.telefono, obj.idciudad, obj.clave]);
  return result.insertId;
};
module.exports.cuentahabientesregistrados = async () => {
  const [rows] = await db.query("select c.idcuentahabiente, c.nombre, t.tipodocumento, t.sigla, c.documento, c.direccion, c.telefono, ci.ciudad, c.clave from cuentahabiente c left join tipodocumento t on t.idtipodocumento = c.idtipodocumento left join ciudad ci on ci.idciudad = c.idciudad;");
  return rows;
};
// Gestion Titular
module.exports.registrarTitular = async (obj) => {
  const sql = "insert into titular (idcuenta,idcuentahabiente)values(?,?);";
  const [result] = await db.execute(sql, [obj.idcuenta, obj.idcuentahabiente]);
  return result.insertId;
};
module.exports.titularesregistrados = async () => {
  const [rows] = await db.query("select t.idcuenta, t.idcuentahabiente, c.numero as numeroCuenta, ch.nombre as nombreCuentahabiente from titular t left join cuenta c on c.idcuenta = t.idcuenta left join cuentahabiente ch on ch.idcuentahabiente = t.idcuentahabiente;");
  return rows;
};
// Gestion Tipo Movimiento
module.exports.registrarTipoMovimiento = async (obj) => {
  const sql = "insert into tipomovimiento (idtipomovimiento,tipomovimiento)values(null,?);";
  const [result] = await db.execute(sql, [obj.tipomovimiento]);
  return result.insertId;
};
module.exports.tipomovimientosregistrados = async () => {
  const [rows] = await db.query("select * from tipomovimiento;");
  return rows;
};
// Gestion Movimiento
module.exports.registrarMovimiento = async (obj) => {
  const sql = "insert into movimiento (idmovimiento,idcuenta,idsucursal,fecha,valor,idtipomovimiento,descripcion)values(null,?,?,current_timestamp(),?,?,?);";
  const [result] = await db.execute(sql, [obj.idcuenta, obj.idsucursal, obj.valor, obj.idtipomovimiento, obj.descripcion]);
  return result.insertId;
};
module.exports.movimientosregistrados = async () => {
  const [rows] = await db.query("select m.idmovimiento, m.idcuenta, m.idsucursal, m.fecha, m.valor, tm.tipomovimiento, m.descripcion, c.numero as numeroCuenta, s.sucursal from movimiento m left join cuenta c on c.idcuenta = m.idcuenta left join sucursal s on s.idsucursal = m.idsucursal left join tipomovimiento tm on tm.idtipomovimiento = m.idtipomovimiento;");
  return rows;
};