const router = require('express').Router();

const Category = require('../models/Category');

router.post('/', async (req, res) => {
    const category = await new Category(req.body);
    try {
        await category.save();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;