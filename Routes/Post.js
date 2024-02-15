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
    }
});

//Post request

router.post("/posts", async (req, res) => {
    try {
        const data = await PostModel.create(req.body);
        console.log(data)
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});


//Put request

router.put("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await PostModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});



// PATCH request

router.patch("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedFields = req.body;
        const updatedPost = await PostModel.findByIdAndUpdate(postId, updatedFields, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});


//Delete request

router.delete("/posts/:id", async (req, res)=>{
    const id = req.params.id
    try{
        const deletedpost = await postModel.findByIdAndDelete(id);
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ msg: 'Deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

module.exports = router;