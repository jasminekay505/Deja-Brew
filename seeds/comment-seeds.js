const { Comment } = require('../models');

const commentData = [
     { 
        user_id: 1,
        post_id: 2,
        comment_text: 'This brewery started in Bellingham.',
     },
     { 
        user_id: 2,
        post_id: 3,
        comment_text: 'This place is also dog friendly.',
     },
     { 
        user_id: 3,
        post_id: 4,
        comment_text: 'I would like to try this place out.',
     },
     { 
        user_id: 4,
        post_id: 5,
        comment_text: 'This place has a good hazy IPA.',
     },
     { 
      user_id: 5,
      post_id: 1,
      comment_text: 'They recently remodeled the patio.',
   },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;