const express = require('express');
const app = express();
const connectDB = require('./config/connect');
const port = 3000; 
const userroute = require('./Routes/user');
const postroute = require('./Routes/Post');
const cors = require('cors');

connectDB();

app.use(cors());

app.get('/ping', (req, res) => {
    res.send("pong");
});

app.use(express.json());

app.use("/", userroute);
app.use("/", postroute);

app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
});

module.exports = app;