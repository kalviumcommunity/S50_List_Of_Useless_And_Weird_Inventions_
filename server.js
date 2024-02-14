const express = require('express');
const app = express();
const connectDB = require('./config/connect');
const port = 3000; 
const router = require('./Routes/user');

connectDB();

app.get('/ping', (req, res) => {
    res.send("pong");
});

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
});

module.exports = app;
