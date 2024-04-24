const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    console.log("token:", token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{
        const key = process.env.secretkey
        const decoded = jwt.verify(token, key)

        req.user = decoded;
        next();
    }catch(error){
        console.error('Error with token verification:', error);
        res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = authenticate;