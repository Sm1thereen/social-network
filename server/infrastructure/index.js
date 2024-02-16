import {userSchema} from './schemas/userSchema';

const {Sequilize} = require('sequelize');

const sequelize = new Sequilize('social_network', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.error('Unable to connect to the database', error);
  process.exit(1);
}

export const UserModel = sequelize.define('User', userSchema, {
  tableName: 'users',
});

await sequelize.sync();