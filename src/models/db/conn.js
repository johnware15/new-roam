const pgp = require('pg-promise')();
const config = {
    database: "roam_db",
    host: "localhost",
    port: 5432
};

const conn = pgp(config)

module.exports = conn