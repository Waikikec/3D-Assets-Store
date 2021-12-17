const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Enter a username!'],
        lowercase: true,
        validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers!'],
    },
    email: {
        type: String,
        required: [true, 'Enter an email address!'],
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address!'],
    },
    password: {
        type: String,
        required: [true, 'Enter a password!'],
        minLength: [3, 'Password should be at least 3 characters'],
    },
    profilePicture: { type: String, default: '' },
    birthday: { type: String, default: Date, required: false },
    website: { type: String, required: false, match: /^https?:\/\// },
    behance: { type: String, required: false, match: /^https?:\/\// },
    instagram: { type: String, required: false, match: /^https?:\/\// },
    description: { type: String, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

