const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

// Listar empleados  
router.get('/', empleadosController.getAllEmpleados);

// Crear usuario
router.get('/crear', empleadosController.formEmpleado);
router.post('/add', empleadosController.addEmpleado);

// Borrar empleados
router.get('/eliminar/:id', empleadosController.deleteEmpleado);

// editar empleados
router.get('/editar/:id', empleadosController.editarEmpleado);

// actualizar empleados
router.post('/actualizar/:id', empleadosController.actualizarEmpleado);

// detail empleados
router.get('/detail/:id', empleadosController.detailEmpleado);
module.exports = router;
