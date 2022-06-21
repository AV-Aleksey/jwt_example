require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use('/api', userRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER START on PORT = ${PORT}`));
    } catch(err) {
        console.log(err)
    }
}

start();