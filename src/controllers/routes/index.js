const router = require('express').Router();
const users = require('./users');
const cities = require('./cities');
const posts = require('./posts');


router.use('/users', users)
router.use('/posts', posts)
router.use('/cities', cities)

module.exports = router