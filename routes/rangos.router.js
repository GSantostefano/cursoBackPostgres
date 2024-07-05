const express = require('express');

// Importa el servicio para manejar la lógica de negocio relacionada con "Rango".
const RangoService = require('../services/rango.service');

// Importa el middleware para validación de datos.
const validatorHandler = require('../middlewares/validator.handler');

// Importa los esquemas de validación para las diferentes operaciones.
const { updateRangoSchema, createRangoSchema, getRangoSchema } = require('../schemas/rango.schema');

const router = express.Router(); // Crea una instancia del enrutador de Express.
const service = new RangoService(); // Crea una instancia del servicio de "Rango".

// Ruta para obtener todos los "Rangos".
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find(); // Llama al método 'find' del servicio.
    res.json(categories); // Responde con los "Rangos" obtenidos.
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores.
  }
});

// Ruta para obtener un "Rango" específico por su ID.
router.get('/:id',
  validatorHandler(getRangoSchema, 'params'), // Valida el parámetro 'id' usando el esquema 'getRangoSchema'.
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el 'id' de los parámetros de la ruta.
      const category = await service.findOne(id); // Llama al método 'findOne' del servicio con el 'id'.
      res.json(category); // Responde con el "Rango" encontrado.
    } catch (error) {
      next(error); // Pasa el error al middleware de manejo de errores.
    }
  }
);

// Ruta para crear un nuevo "Rango".
router.post('/',
  validatorHandler(createRangoSchema, 'body'), // Valida el cuerpo de la solicitud usando el esquema 'createRangoSchema'.
  async (req, res, next) => {
    try {
      const body = req.body; // Obtiene el cuerpo de la solicitud.
      const newCategory = await service.create(body); // Llama al método 'create' del servicio con el cuerpo de la solicitud.
      res.status(201).json(newCategory); // Responde con el nuevo "Rango" creado y un código de estado 201.
    } catch (error) {
      next(error); // Pasa el error al middleware de manejo de errores.
    }
  }
);

// Ruta para actualizar parcialmente un "Rango" por su ID.
router.patch('/:id',
  validatorHandler(getRangoSchema, 'params'), // Valida el parámetro 'id' usando el esquema 'getRangoSchema'.
  validatorHandler(updateRangoSchema, 'body'), // Valida el cuerpo de la solicitud usando el esquema 'updateRangoSchema'.
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el 'id' de los parámetros de la ruta.
      const body = req.body; // Obtiene el cuerpo de la solicitud.
      const category = await service.update(id, body); // Llama al método 'update' del servicio con el 'id' y el cuerpo de la solicitud.
      res.json(category); // Responde con el "Rango" actualizado.
    } catch (error) {
      next(error); // Pasa el error al middleware de manejo de errores.
    }
  }
);

// Ruta para eliminar un "Rango" por su ID.
router.delete('/:id',
  validatorHandler(getRangoSchema, 'params'), // Valida el parámetro 'id' usando el esquema 'getRangoSchema'.
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el 'id' de los parámetros de la ruta.
      await service.delete(id); // Llama al método 'delete' del servicio con el 'id'.
      res.status(201).json({ id }); // Responde con el 'id' del "Rango" eliminado y un código de estado 201.
    } catch (error) {
      next(error); // Pasa el error al middleware de manejo de errores.
    }
  }
);

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
