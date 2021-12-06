const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) {
                console.log('token error!');
                res.status(403).json('Token is not valid!');
            } else {
                console.log('token is okay');
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
        console.log(req.user.id);
        console.log(req.params.id);
        if (req.user.id === req.params.id) {
            console.log('user is okay');
            next();
        } else {
            console.log('user error');
            res.status(403).json('You are not authorized!');
        }
    });
}

module.exports = {
    verifyToken,
    isUser,
}