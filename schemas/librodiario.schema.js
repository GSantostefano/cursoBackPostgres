const Joi = require('joi');

const id = Joi.number().integer();
const fecha = Joi.string().required();
const detalle = Joi.string().required();
const debe = Joi.string().required();
const haber = Joi.string().required();
const descripcion = Joi.string().required();
const createdAt = Joi.date().default(Date.now);

const createLibroDiarioSchema = Joi.object({
  fecha: fecha,
  detalle: detalle,
  debe: debe,
  haber: haber,
  descripcion: descripcion,
  createdAt: createdAt,
});

const updateLibroDiarioSchema = Joi.object({
  fecha: fecha,
  detalle: detalle,
  debe: debe,
  haber: haber,
  descripcion: descripcion,
  createdAt: createdAt,
});

const getLibroDiarioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLibroDiarioSchema, updateLibroDiarioSchema, getLibroDiarioSchema };
