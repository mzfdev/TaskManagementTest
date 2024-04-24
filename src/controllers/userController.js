const pool = require('../dbconnection')

const createUser = async(req,res)=>{

    const {name, lastname, email, user_password} = req.body;

    const response = await pool.query('insert into users (names, lastnames, email, user_password) values ($1, $2, $3, $4)', [name, lastname, email, user_password]);
    console.log(response);
    res.status(201).json({
        message: 'UserCreated',
        body: {
            users: { name, lastname, email, user_password }
        }
    });
}

module.exports = {
    createUser,
}