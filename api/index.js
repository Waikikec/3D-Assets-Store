const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const modelRoute = require('./routes/models');
const categoryRoute = require('./routes/categories');

const cors = require('cors');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('Connected to MongoDB!'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/models', modelRoute);
app.use('/api/categories', categoryRoute);

app.listen(proess.env.PORT || 5000, () =>
    console.log(`Server listening on port ${PORT}!`)
);