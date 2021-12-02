const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Model = require('../models/Model');

const { verifyToken, isUser } = require('./guards');

//Get User by Id with valid Token
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Update User Info with valid Token
router.put('/:id', isUser, async (req, res) => {
    if (req.user.id === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json('You can update only your account!');
    }
})

//Delete User
router.delete('/:id', isUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!');
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;