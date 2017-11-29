const router = require('./index');
const USERS = require('../../models/users')

router.get('/:id', (req, res) => {
    let id = req.params.id
    let userInfo = USERS.getUserById(id)
})