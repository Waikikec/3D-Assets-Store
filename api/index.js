const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const modelRoute = require('./routes/models');
const categoryRoute = require('./routes/categories');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

//upload images in local storage 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    }, filename: (req, file, callback) => {
        callback(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post('/api/upload/', upload.single('file'), (req, res) => {
    res.status(200).json('File is uploaded!');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/models', modelRoute);
app.use('/api/categories', categoryRoute);

app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}!`)
);