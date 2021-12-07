const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    birthday: { type: String, default: Date, required: false },
    website: { type: String, required: false },
    behance: { type: String, required: false },
    instagram: { type: String, required: false },
    description: { type: String, required: false },
    age: { type: String, required: false },
    born: {
        type: String,
        get: () => {
            let date = new Date(birthday);
            let today = new Date();
            let timeDiff = today.getTime() - date.getTime();
            let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
            return age;
        },
        set: age => age,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

