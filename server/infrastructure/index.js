import {userSchema} from './schemas/userSchema.js';
import {Sequelize} from 'sequelize';
import {postSchema} from './schemas/postSchema.js';
import {followerSchema} from './schemas/followerSchema.js';

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
export const FollowerModel = sequelize.define('follower', followerSchema, {
  tableName: 'followers',
  timestamps: false,
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

UserModel.belongsToMany(UserModel, {
  through: FollowerModel,
  as: 'followers',
  foreignKey: 'user_id',
  otherKey: 'follower_id',
});

UserModel.belongsToMany(UserModel, {
  through: FollowerModel,
  as: 'following',
  foreignKey: 'follower_id',
  otherKey: 'user_id',
});


await sequelize.sync();
console.log('All models were synchronized successfully.');