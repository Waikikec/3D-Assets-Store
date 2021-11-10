const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    render: { type: String, default: '' },
    categories: { type: Array, required: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }
}, {
    timestamps: true
});

module.exports = mongoose.model('Model', modelSchema);

