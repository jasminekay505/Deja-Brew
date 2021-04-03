// Import dependencies
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../../utils/auth');

//Homepage - show all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//Single Post
router.get('/post/:id', withAuth, (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: User
            }
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        const post = postData.get({ plain: true });

        const commentData = await Comment.findAll({
            where: {
                post_id: post.id
            },
            include: {
                model: User
            }
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        const comments = commentData.map(comment => comment.get({ plain: true }))

        res.render('single-post', {
            post, comments, loggedIn: req.session.loggedIn
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;