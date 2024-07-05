const express = require('express');

const LibroDiarioService = require('./../services/librodiario.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createLibroDiarioSchema, updateLibroDiarioSchema, getLibroDiarioSchema } = require('./../schemas/librodiario.schema');

const router = express.Router();
const service = new LibroDiarioService();

// Ruta para obtener todos los registros del LibroDiario
router.get('/', async (req, res, next) => {
  try {
    const libros = await service.find();
    res.json(libros);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener un registro específico del LibroDiario por su ID
router.get('/:id',
  validatorHandler(getLibroDiarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const libro = await service.findOne(id);
      res.json(libro);
    } catch (error) {
      next(error);
    }
  }
);

// Ruta para crear un nuevo registro del LibroDiario
router.post('/',
  validatorHandler(createLibroDiarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLibro = await service.create(body);
      res.status(201).json(newLibro);
    } catch (error) {
      next(error);
    }
  }
);

// Ruta para actualizar un registro existente del LibroDiario por su ID
router.patch('/:id',
  validatorHandler(getLibroDiarioSchema, 'params'),
  validatorHandler(updateLibroDiarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedLibro = await service.update(id, body);
      res.json(updatedLibro);
    } catch (error) {
      next(error);
    }
  }
);

// Ruta para eliminar un registro del LibroDiario por su ID
router.delete('/:id',
  validatorHandler(getLibroDiarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
