const conn = require('./conn');
const AUTH = require('./auth')
const USERS = {
    create: (userInfo) => {
        let { username, password } = userInfo
        userInfo.hashword = AUTH.encryptPassword(password)
        userInfo.password = null
        return conn.query(`INSERT INTO users (email, username, hashword) VALUES ({email}, {username}, {hashword} RETURNING *`, userInfo)
    },
    update: (oldUsername, oldPassword, userInfo) => conn.query(`UPDATE users SET (email={email}, username={username}) RETURNING *`),
    getAllUsers: () => conn.query(`SELECT * FROM users`),
    getUserByUsername: (userInfo) => conn.query(`SELECT * FROM users WHERE username={username}`, userInfo),
    getUserByID: (userInfo) => conn.query(`SELECT * FROM users WHERE id={id}`, userInfo),
    getHashwordByUsername: (username) => conn.query(`SELECT hashword FROM users WHERE username=$1`, username),
    checkLogin: function(userInfo) {
        let { username, password } = userInfo
        return this.getUserByID(userInfo)
            .then(
        AUTH.checkUserLogin(password, this.getHashwordByUsername(username)) ?
            (userInfo) => {
                userInfo.isLoggedIn = true
            } :
            alert("incorrect info asshole!"));
    }
};


module.exports = USERS