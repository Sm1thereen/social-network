const DataTypes = require('sequelize');

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.TEXT,
    unique: true,
  },
  first_name: {
    type: DataTypes.TEXT,
  },
  last_name: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.TEXT,
  },
};