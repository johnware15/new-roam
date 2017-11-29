const conn = require('./conn');
const AUTH = require('./auth')
const USERS = {
    getAllUsers: () => conn.query(`SELECT * FROM users`),
    getUserByID: (userInfo) => conn.query(`SELECT * FROM users WHERE id={id}`, userInfo),
    getHashwordByUsername: (username) => conn.query(`SELECT hashword FROM users WHERE username=$1`, username),
    checkLogin: function(userInfo) {
        let { username, password } = userInfo
        AUTH.checkLogin(password, this.getHashwordByUsername(username)) ?
        true :
        false
    }
};


module.exports = {
    getAllUsers: USERS.getAllUsers,
    getUserByID: USERS.getUserByID,
    checkLogin: USERS.checkLogin
}