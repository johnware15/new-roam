const router = require('./index');
const USERS = require('../../models/users')

const routes = {
    signup: router.get('/:id', (req, res) => {
        let id = req.params.id
        let userInfo = USERS.ge
    }),
    signin: router.get('/:id', (req, res) => {
        let id = req.params.id
        let userInfo = USERS.ge
    })
}
