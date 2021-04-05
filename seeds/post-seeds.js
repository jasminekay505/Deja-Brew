const { Post } = require('../models');

const postData = [
    {
        title: "Fremont Brewery",
        post_text: "Kid and dog friendly with free apples and pretzels.",
        user_id: 1
    },
    {
        title: "Aslan Brewing",
        post_text: "A great spot to relax.",
        user_id: 2
    },
    {
        title: "Outlander Brewery",
        post_text: "Plenty of outdoor seating.",
        user_id: 3
    },
    {
        title: "Rooftop Brewing",
        post_text:"Microbrewery and tasting room with rotating food trucks.",
        user_id: 4
    },
    {
        title: "Urban Brewing",
        post_text: "House and craft beers served here.",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;