const pool = require('../db/conexion');

// Mostrar todos los usuarios
exports.getAllEmpleados = async (req, res) => {
  const [empleados] = await pool.query('SELECT * FROM empleados');
  res.render('empleados', { empleados });
};

// Crear usuario nuevo
exports.formEmpleado = async (req, res) => {
  res.render('formEmpleado')
};


// editar usuario
exports.addEmpleado = async (req, res) => {
  const { dni, nombre, email, direccion, cp, poblacion, provincia, telf, iban, genero, ec, hijos, f_nac} = req.body;
  await pool.query('INSERT INTO empleados (dni, nombre, email, direccion, cp, poblacion, provincia, telefono, iban, genero, estado_civil, hijos, f_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?)', [dni,nombre, email,direccion, cp, poblacion, provincia, telf, iban, genero, ec, hijos, f_nac]);
  res.redirect('/empleados')};

// Eliminar usuario
exports.deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id]);
  res.redirect('/empleados');
};
// editar usuario
exports.editarEmpleado = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
  res.render('formEditEmpleado',{empleado:result[0]})
};

// editar usuario
exports.actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const { dni,nombre, email } = req.body;

  await pool.query('UPDATE empleados SET dni=?, nombre=?, email=? WHERE id_empleado = ?', [dni,nombre, email,id]);
  res.redirect('/empleados');
};

// detail empleado
exports.detailEmpleado = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
  
  res.render('formDetailEmpleado',{empleado:result[0]})
};