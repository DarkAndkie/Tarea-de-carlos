const express = require('express');
const router = express.Router();
const service = require('../servicios/banco.servicios');
// Gestion Ciudades
router.post('/', async (req, res) => {
  await service.registrarCiudad(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/', async (req, res) => {
  const registradas = await service.ciudadregistradas();
  res.send(registradas);
});
// Gestion Tipo Sucursal
router.post('/tipo', async (req, res) => {
  await service.registrarTiposucursal(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/tipos', async (req, res) => {
  const registradas = await service.tiposucursalregistradas();
  res.send(registradas);
});
// GEstion Sucursal
router.post('/sucursal', async (req, res) => {
  await service.registrarSucursal(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/sucursales', async (req, res) => {
  const registradas = await service.sucursalesregistradas();
  res.send(registradas);
});
// Gestiion Tipo Cuentas
router.post('/tipocuenta', async (req, res) => {
  await service.registrarTipoCuenta(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/tipocuentas', async (req, res) => {
  const registradas = await service.tipocuentasregistradas();
  res.send(registradas);
});
router.post('/cuenta', async (req, res) => {
  await service.registrarCuenta(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/cuentas', async (req, res) => {
  const registradas = await service.cuentasregistradas();
  res.send(registradas);
});
router.post('/prestamo', async (req, res) => {
  await service.registrarPrestamo(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/prestamos', async (req, res) => {
  const registradas = await service.prestamosregistrados();
  res.send(registradas);
});
// Gestion Tipo Documento
router.post('/tipodocumento', async (req, res) => {
  await service.registrarTipoDocumento(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/tipodocumentos', async (req, res) => {
  const registradas = await service.tipodocumentosregistrados();
  res.send(registradas);
});
// Gestion Cuentahabiente
router.post('/cuentahabiente', async (req, res) => {
  await service.registrarCuentahabiente(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/cuentahabientes', async (req, res) => {
  const registradas = await service.cuentahabientesregistrados();
  res.send(registradas);
});
// Gestion Titular
router.post('/titular', async (req, res) => {
  await service.registrarTitular(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/titulares', async (req, res) => {
  const registradas = await service.titularesregistrados();
  res.send(registradas);
});
// Gestion Tipo Movimiento
router.post('/tipomovimiento', async (req, res) => {
  await service.registrarTipoMovimiento(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/tipomovimientos', async (req, res) => {
  const registradas = await service.tipomovimientosregistrados();
  res.send(registradas);
});
// Gestion Movimiento
router.post('/movimiento', async (req, res) => {
  await service.registrarMovimiento(req.body);
  res.status(201).send('Registro Exitoso!');
});
router.get('/movimientos', async (req, res) => {
  const registradas = await service.movimientosregistrados();
  res.send(registradas);
});
module.exports = router;