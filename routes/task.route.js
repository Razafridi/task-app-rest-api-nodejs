const express = require("express")
const { addTask , read, readAll, readASpecific, deleteTask, updateTask } = require("../controllers/task.controller")
const { authUser } = require("../middlewares/auth.middleware")


const taskRouter = express.Router()




// Routes

// Add
taskRouter.post('/add' ,authUser,addTask )

// Read
taskRouter.get('/readAll', authUser, readAll)
taskRouter.get('/read/:id', authUser, readASpecific)
// Delete
taskRouter.delete('/delete/:id' , authUser , deleteTask)

// Update
taskRouter.put('/update/:id' , authUser , updateTask)
module.exports = taskRouter