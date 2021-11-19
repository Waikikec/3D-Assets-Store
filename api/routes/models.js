const router = require('express').Router();

const Model = require('../models/Model');
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const model = await new Model(req.body);
        await model.save();
        res.status(200).json(model);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        console.log(req.body);
        if (model.author.toString() === req.body.author) {
            try {
                const updatedModel = await Model
                    .findByIdAndUpdate(req.params.id,
                        { $set: req.body },
                        { new: true });
                res.status(200).json(updatedModel);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json('You can update only your models!');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (model.author.toString() === req.body.author) {
            try {
                await model.delete();
                res.status(200).json('Model has been deleted!');
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json('You can update only your models!');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/', async (req, res) => {
    const category = req.query.category;
    const user = await User.find({ username: req.query.user });  

    try {
        let models;
        if (!user) {
            models = await Model.find({ author: user[0] });
        } else if (category) {
            models = await Model.find({
                categories: { $in: [category] }
            });
        } else {
            models = await Model.find({});
        }
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;