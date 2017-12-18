const bcrypt = require('bcrypt');

const AUTH = {
    encryptPassword: (password) => {
        let saltRounds = 10
        let hashword = bcrypt.hash(password, saltRounds)
            .then((err, hash) => hash)
        return hashword
    },
    checkUserLogin: (password, hash) => {
        return bcrypt.compare(password, hash).then((err, hash) => hash)
    }
}

module.exports = AUTH