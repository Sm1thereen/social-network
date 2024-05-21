import {userSchema} from './schemas/userSchema.js';
import {Sequelize} from 'sequelize';
import {postSchema} from './schemas/postSchema.js';

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

export const UserModel = sequelize.define('user', userSchema, {
  tableName: 'users',
});
export const PostModel = sequelize.define('post', postSchema, {
  tableName: 'posts',
});


UserModel.hasMany(PostModel, {
  as: 'posts',
  foreignKey: 'user_id',
  sourceKey: 'id',
});


PostModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
});
await sequelize.sync();