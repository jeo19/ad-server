const express = require('express');
const router = express.Router();
const User = require('./user.js');
const passport = require('passport');
router.get('/', (req, res) => {
    res.render('main');
});
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/:name', (req, res) => {
    User.find({ name: req.params.name }, (err, user) => {
        res.render('main', { user: user });
    });
});
router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/',
    }),
    (req, res) => {
        res.redirect('/');
    },
);
module.exports = router;
