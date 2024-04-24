const pool = require('../dbconnection')
const bcrypt = require('bcrypt');

const createUser = async(req,res)=>{

    const {name, lastname, email, user_password} = req.body;

    const encriptedPassword = await bcrypt.hash(user_password, 10)

    const response = await pool.query('insert into users (names, lastnames, email, user_password) values ($1, $2, $3, $4)', [name, lastname, email, encriptedPassword]);
    console.log(response);
    res.status(201).json({
        message: 'UserCreated',
        body: {
            users: { name, lastname, email }
        }
    });
}

module.exports = {
    createUser,
}