const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max,
}).with('price_min', 'price_max') // Esto indica que si price_min está, price_max puede estar, pero no es obligatorio
  .with('price_max', 'price_min') // De manera inversa, si price_max está, price_min puede estar
  .custom((value, helpers) => {
    if (value.price_min && value.price_max && value.price_min > value.price_max) {
      return helpers.error('any.invalid', { message: 'price_max debe ser mayor que price_min' });
    }
    return value;
  });

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
