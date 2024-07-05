const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class LibroDiarioService {
  constructor() {}

  // Método para crear un nuevo registro en el LibroDiario
  async create(data) {
    const newLibroDiario = await models.LibroDiario.create(data);
    return newLibroDiario;
  }

  // Método para obtener todos los registros del LibroDiario
  async find() {
    const libros = await models.LibroDiario.findAll();
    return libros;
  }

  // Método para obtener un registro específico del LibroDiario por su ID
  async findOne(id) {
    const libro = await models.LibroDiario.findByPk(id);
    if (!libro) {
      throw boom.notFound('LibroDiario not found');
    }
    return libro;
  }

  // Método para actualizar un registro existente del LibroDiario por su ID
  async update(id, changes) {
    const libro = await this.findOne(id);
    const updatedLibro = await libro.update(changes);
    return updatedLibro;
  }

  // Método para eliminar un registro del LibroDiario por su ID
  async delete(id) {
    const libro = await this.findOne(id);
    await libro.destroy();
    return { id };
  }
}

module.exports = LibroDiarioService;
