const taskModel = require("../models/task.model");

const addTask = async (req, res)=>{
    try{
        const { title, description } = req.body;
        const username = req.user
        console.log(username)
        const task = new taskModel({ title, description, username:  username.username})
        await task.save()
        res.json(task)
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// ReadAll
const readAll = async (req, res) => {
    try {
        const username = req.user.username
        const data = await taskModel.find({username})
        res.json(data)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}
// Read a Specific

const readASpecific = async (req , res)=>{
    try{
        const data = await taskModel.find({_id: req.params.id})
        res.json(data)

    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// Delete Task

const deleteTask = async (req, res) => {
    try {
        const data = await taskModel.findByIdAndDelete(req.params.id);
        if(data === null){
            return res.status(201).json({msg: "No Data found"})
        }
        res.json(data)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

// Update
const updateTask = async (req, res) => {
    try {
        const {title , description,isDone } = req.body
        const id = req.params.id
        const data = await taskModel.findById(id)
        if(!data){
            return res.status(201).json({msg: "Data Not Found with Id"})
        }



        data.title = title
        data.description = description
        data.isDone = isDone
        await data.save()
        res.json(data)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}


module.exports = {
    addTask,
    readAll,
    readASpecific,
    deleteTask,
    updateTask
}

