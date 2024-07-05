// Importa Joi, una biblioteca para la validación de esquemas de objetos.
const Joi = require('joi');

// Define los esquemas de validación para los campos.
const id = Joi.number().integer(); // El campo 'id' debe ser un número entero.
const position = Joi.string(); // El campo 'position' debe ser una cadena. (Nota: Cambié 'Position' a 'position' para seguir las convenciones de nombres)
const role = Joi.string().min(5); // El campo 'role' debe ser una cadena con al menos 5 caracteres.

// Define el esquema de validación para crear un nuevo 'Rango'.
const createRangoSchema = Joi.object({
  position: position.required(), // El campo 'position' es requerido.
  role: role.required() // El campo 'role' es requerido.
});

// Define el esquema de validación para actualizar un 'Rango'.
const updateRangoSchema = Joi.object({
  position: position, // El campo 'position' es opcional.
  role: role, // El campo 'role' es opcional.
});

// Define el esquema de validación para obtener un 'Rango' por su 'id'.
const getRangoSchema = Joi.object({
  id: id.required(), // El campo 'id' es requerido.
});

// Exporta los esquemas para que puedan ser utilizados en otras partes de la aplicación.
module.exports = { createRangoSchema, updateRangoSchema, getRangoSchema };
