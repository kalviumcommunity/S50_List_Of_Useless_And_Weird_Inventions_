const express = require('express');
const router = express.Router(); 
const PostModel = require('../Schema/PostModel');

//Get request

router.get("/posts", async (req, res) => {
    try {
        const data = await PostModel.find();
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

module.exports = router;