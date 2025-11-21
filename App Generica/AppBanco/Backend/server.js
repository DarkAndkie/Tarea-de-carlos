const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const banco = require('./controlador/banco.controlador');
app.use('/api/banco', banco);
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});