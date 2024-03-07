import sequelize, {DataTypes} from 'sequelize';

export const postSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
  },
  
};