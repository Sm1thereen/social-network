import {userSchema} from './schemas/userSchema.js';
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('social_network', 'postgres', 'postgres', {
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
  tableName: 'Users',
});

await sequelize.sync();