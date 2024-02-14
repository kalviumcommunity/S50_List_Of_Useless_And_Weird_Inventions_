const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    InventionIDNumber: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Inventor: {
        type: String,
        required: true
    },
    InventedYear: {
        type: Date,
        required: true
    },
    Users: {
        type: Number,
        required: true
    },
    QuirkinessLevel: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
