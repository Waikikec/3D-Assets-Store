const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

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

const app = express();
app.use(express.json());

//upload images in local storage 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    }, filename: (req, file, callback) => {
        callback(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post('/upload/', upload.single('file'), (req, res) => {
    res.status(200).json('File is uploaded!');
});

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/models', modelRoute);
app.use('/categories', categoryRoute);

app.listen('5000', () => {
    console.log('Our server is running!');
})