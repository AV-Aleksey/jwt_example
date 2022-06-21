const Pool = require('pg').Pool;

const pool = new Pool({
    user: "aleksey",
    password: '12345',
    host: 'localhost',
    port: 5432
});


module.exports = pool;