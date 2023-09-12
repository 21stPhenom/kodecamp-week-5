const express = require('express');
const mongoose = require('mongoose');
const {taskCollection} = require('./schema/task-schema')

const app = express();
const PORT = 4000;
// working with environment variables
require('dotenv').config();

// connecting mongoose
const connect = mongoose.connect(process.env.mongoDB_URL);
connect.then(() => {
    console.log('Connected successfully.');
}).catch(() => {
    console.log("Failed to connect");
});

app.use(express.json());

// get tasks
app.get("/", async (req, res) => {
    console.log(req);
    const tasks = await taskCollection.find();
    res.json(tasks);
});

// create tasks
app.post("/", async (req, res) => {
    // create a new task
    const newTask = await taskCollection.create({
        taskTitle: req.body.taskTitle,
        taskBody: req.body.taskBody
    });

    // send the new task as JSON
    res.json({
        isRequestSuccessful: true,
        newTask
    });
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});