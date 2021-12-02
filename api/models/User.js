const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    website: { type: String, required: false },
    behance: { type: String, required: false },
    instagram: { type: String, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

