//Import dependencies
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
// const yelp = require('yelp-fusion');
//const client = yelp.client('2FHEw_ewvg39QVUSS1iGbd4bllCdnAZomRqgcWi7qBw_U_MXrHNW76V9YRA_38RcSbFDY1YGU7N3KEhXf8CYl1JJnLK7kmsGdKCZMuFyHRSpurIFRjlVhHnnelNrYHYx');


//Show all posts on homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Single page view with comments
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                        }
                    ]
                },
                {
                    model: User,
                },
            ],
        });

        const post = postData.get({ plain: true });

        // client.search({
        //     term: post.title,
        //     location: 'seattle, wa',
        // }).then(response => {
        //     //console.log(response.jsonBody.businesses[0].name);
        // }).catch(e => {
        //     //console.log(e);
        // });

        res.render('post', {
            post,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Dashboard view for logged_in User
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

//Sign up page
router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

module.exports = router;