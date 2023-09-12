const mongoose = require("mongoose");

// create a schema to represent our tasks in MongoDB
const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true,
    }, 
    taskBody: {
        type: String,
        required: true
    }
})

// create a new Task model
const taskCollection = mongoose.model("tasks", taskSchema);

module.exports = {
    // taskCollection: taskCollection
    taskCollection
};