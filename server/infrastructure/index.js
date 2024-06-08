import {userSchema} from './schemas/userSchema.js';
import {Sequelize} from 'sequelize';
import {postSchema} from './schemas/postSchema.js';
import {followerSchema} from './schemas/followerSchema.js';
import {commentSchema} from './schemas/commentSchema.js';

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
export const CommentModel = sequelize.define('comment', commentSchema, {
  tableName: 'comments',
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
  foreignKey: 'follow_to',
  otherKey: 'follow_from',


});

UserModel.belongsToMany(UserModel, {
  through: FollowerModel,
  as: 'following',
  foreignKey: 'follow_from',
  otherKey: 'follow_to',
});
// Асоціації для моделі Comment
UserModel.hasMany(CommentModel, {
  as: 'comments',
  foreignKey: 'user_id',
  sourceKey: 'id',
});

CommentModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
});

PostModel.hasMany(CommentModel, {
  as: 'comments',
  foreignKey: 'post_id',
  sourceKey: 'id',
});

CommentModel.belongsTo(PostModel, {
  as: 'post',
  foreignKey: 'post_id',
  targetKey: 'id',
});


await sequelize.sync();
