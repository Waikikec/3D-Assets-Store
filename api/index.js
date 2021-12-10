const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const modelRoute = require('./routes/models');

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}!`)
);