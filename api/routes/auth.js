const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
    });

    try {
        const savedUser = await user.save();

        const accessToken = jwt.sign({
            id: savedUser._id,
            email: savedUser.email,
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json('Wrong credentials!');

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json('Wrong credentials!');

        const accessToken = jwt.sign({
            id: user._id,
            email: user.email,
        }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;