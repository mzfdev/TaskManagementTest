const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../dbconnection')

const login = async (req, res) => {
    const { email, user_password } = req.body;
    try {
        const response = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (response.rows.length === 0) {
            return res.status(401).json({ message: 'Credentials are wrong' });
        }
        
        const user = response.rows[0];

        const passwordMatch = await bcrypt.compare(user_password, user.user_password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credentials are wrong' });
        }
        
        const token = jwt.sign({ id: user.id, email: user.email }, 'ditobanx', {
            expiresIn: '1h'
        });
        
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login
};
