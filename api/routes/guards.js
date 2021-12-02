const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    //Postman -> Post method requires (header with Bearer + token)
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) {
                res.status(403).json('Token is not valid!');
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json('You are not authenticated!')
    }
}

const isUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) {
            next();
        } else {
            res.status(403).json('You are not authorized!');
        }
    });
}

module.exports = {
    verifyToken,
    isUser,
}