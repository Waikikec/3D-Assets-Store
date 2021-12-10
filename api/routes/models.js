const router = require('express').Router();

const Model = require('../models/Model');

const { verifyToken, isAuthor } = require('./guards');

router.post('/', verifyToken, async (req, res) => {
    const model = new Model(req.body);
    try {
        const savedModel = await model.save();
        res.status(200).json(savedModel);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', isAuthor, async (req, res) => {
    try {
        const updatedModel = await Model.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedModel);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id);
        res.status(200).json('Model has been deleted!');
    } catch (error) {
        res.status(500).json(error);
    }
})

//All Models for Catalog Page (for all USERS)
router.get('/', async (req, res) => {
    try {
        const models = await Model.find();
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Current Model for Detail Page (for all USERS)
router.get('/:id', async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Like - Dislike Option
router.put('/:id/like', verifyToken, async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model.likes.includes(req.body.userId)) {
            await model.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('The model has been liked!');
        } else {
            await model.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json('The model has been disliked!');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

//Favourite Option
router.put('/:id/favourite', verifyToken, async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model.favourites.includes(req.body.userId)) {
            await model.updateOne({ $push: { favourites: req.body.userId } });
            res.status(200).json('The model has been added to collection!');
        } else {
            await model.updateOne({ $pull: { favourites: req.body.userId } });
            res.status(200).json('The model has been removed from collection!');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


//Get All Favourites Models for USER
router.get('/favourites/:userId', verifyToken, async (req, res) => {
    try {
        const models = await Model.find({ userId: req.params.userId });
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;