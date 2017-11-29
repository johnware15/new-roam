import { userInfo } from 'os';

const conn = require('./conn');
const users = {
    getAllUsers: () => conn.query(`SELECT * FROM users`),
    getUserByID: (userInfo) => conn.query(`SELECT * FROM users WHERE id={id}`, userInfo)
};