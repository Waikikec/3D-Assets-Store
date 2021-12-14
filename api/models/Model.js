const { Schema, model } = require('mongoose');

const modelSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        maxLength: [30, 'Title must be less than 30 symbols!']
    },
    imageUrl: { type: String, required: [true, 'Image Url is required!'] },
    color: { type: Array, required: [true, 'Color is required!'] },
    software: { type: String, required: [true, 'Software is required!'] },
    category: { type: String, required: [true, 'Category is required!'] },
    material: { type: Array, required: [true, 'Material is required!'] },
    style: { type: String, required: [true, 'Style is required!'] },
    render: { type: String, required: [true, 'Render is required!'] },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [100, 'Description must be less than 50 symbols!']
    },
    tags: { type: Array, required: [true, 'Tags are required'] },
    likes: { type: Array, default: [] },
    favourites: { type: Array, default: [] },
    author: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = model('Model', modelSchema);

