const express = require('express');
const router = express.Router(); 
const userModel = require('../Schema/UserModel');

//Get request

router.get("/users", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

//Post request

router.post("/users", async (req, res) => {
    try {
        const data = await userModel.create(req.body);
        console.log(data)
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }   
});

//Put request

router.put("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});

//Patch request 

router.put("/users/:id", async (req, res) =>{
    try {
        const userId = req.params.id;
        const updatedFields = req.body;
        const updatedUser = await PostModel.findByIdAndUpdate(userId, updatedFields, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
})


//Delete request

router.delete("/users/:id", async (req, res)=>{
    const id = req.params.id
    try{
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ msg: 'Deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

module.exports = router;