const boom = require('@hapi/boom'); // Importa la biblioteca Boom para manejar errores HTTP.

const { models } = require('../libs/sequelize'); // Importa los modelos de Sequelize desde la biblioteca de conexión configurada.

class RangoService {
  constructor() {}

  // Método para crear un nuevo "Rango".
  async create(data) {
    const newRango = await models.Rango.create(data); // Crea un nuevo registro en la tabla "Rango" usando los datos proporcionados.
    return newRango; // Devuelve el nuevo registro creado.
  }

  // Método para obtener todos los "Rangos".
  async find() {
    const rta = await models.Rango.findAll(); // Obtiene todos los registros de la tabla "Rango".
    return rta; // Devuelve todos los registros obtenidos.
  }

  // Método para obtener un "Rango" específico por su ID.
  async findOne(id) {
    const rango = await models.Rango.findByPk(id); // Busca un registro en la tabla "Rango" por su clave primaria (ID).
    if (!rango) {
      throw boom.notFound('Rango not found'); // Lanza un error 404 si no se encuentra el registro.
    }
    return rango; // Devuelve el registro encontrado.
  }

  // Método para actualizar un "Rango" por su ID.
  async update(id, changes) {
    const rango = await this.findOne(id); // Busca el registro que se va a actualizar.
    const updatedRango = await rango.update(changes); // Actualiza el registro con los cambios proporcionados.
    return updatedRango; // Devuelve el registro actualizado.
  }

  // Método para eliminar un "Rango" por su ID.
  async delete(id) {
    const rango = await this.findOne(id); // Busca el registro que se va a eliminar.
    await rango.destroy(); // Elimina el registro.
    return { id }; // Devuelve el ID del registro eliminado.
  }
}

module.exports = RangoService; // Exporta la clase RangoService para que pueda ser utilizada en otras partes de la aplicación.
