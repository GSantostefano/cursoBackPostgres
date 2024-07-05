const { Model, DataTypes, Sequelize } = require('sequelize');

const RANGO_TABLE = 'rangos';
const RangoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  position: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  pfr_uo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  threebet: {
    allowNull: false,
    type: DataTypes.STRING,
    field: '3BET',
  },
  fourbet: {
    allowNull: false,
    type: DataTypes.STRING,
    field: '4BET',
  },
  
};
class Rango extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: RANGO_TABLE,
      modelName: 'Rango',
      timestamps: false,
    };
  }
}
module.exports = { RANGO_TABLE, RangoSchema, Rango };
