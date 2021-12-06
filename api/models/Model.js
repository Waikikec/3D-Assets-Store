const { Schema, model } = require('mongoose');

const modelSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    color: { type: Array, required: true },
    software: { type: String, required: true },
    category: { type: String, required: true },
    material: { type: Array, required: true },
    style: { type: String, required: true },
    render: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array, required: true },
    author: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = model('Model', modelSchema);

