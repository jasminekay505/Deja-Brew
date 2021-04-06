const { Post } = require('../models');

const postData = [
    {
        title: "Fremont Brewery",
        post_text: "Kid and dog friendly with free apples and pretzels.",
        location: "Seattle, WA",
        user_id: 1
    },
    {
        title: "Aslan Brewing",
        post_text: "A great spot to relax.",
        location: "Seattle, WA",
        user_id: 2
    },
    {
        title: "Outlander Brewery",
        post_text: "Plenty of outdoor seating.",
        location: "Seattle, WA",
        user_id: 3
    },
    {
        title: "Rooftop Brewing",
        post_text:"Microbrewery and tasting room with rotating food trucks.",
        location: "Seattle, WA",
        user_id: 4
    },
    {
        title: "Urban Brewing",
        post_text: "House and craft beers served here.",
        location: "Seattle, WA",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;