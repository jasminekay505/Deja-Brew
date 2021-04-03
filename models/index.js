const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//Set up user relationships
User.hasMany(Post, {
    foreignKey: 'user_id',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//Set up post relationships
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

//Set up comment relationships
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };