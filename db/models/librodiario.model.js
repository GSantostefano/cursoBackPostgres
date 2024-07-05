const { Model, DataTypes, Sequelize } = require('sequelize');

const LIBRODIARIO_TABLE = 'LibroDiarios';

const LibroDiarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    validate: {
      isDate: true,
    },
  },
  detalle: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  debe: {
    allowNull: false,
    type: DataTypes.FLOAT,
    validate: {
      isFloat: true,
      min: 0,
    },
  },
  haber: {
    allowNull: false,
    type: DataTypes.FLOAT,
    validate: {
      isFloat: true,
      min: 0,
    },
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class LibroDiario extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: LIBRODIARIO_TABLE,
      modelName: 'LibroDiario',
      timestamps: false,
    };
  }
}

module.exports = { LIBRODIARIO_TABLE, LibroDiarioSchema, LibroDiario };
