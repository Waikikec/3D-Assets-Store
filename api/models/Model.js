const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    render: { type: String, default: '', required: false },
    categories: { type: Array, required: false },
    author: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Model', modelSchema);

