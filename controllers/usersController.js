const userModel = require("../models/users.model")
const bc = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req , res)=>{

    try{
        const { username, name, password } = req.body
        const result = await userModel.find({ username })
        if (result.length > 0) {
            return res.status(201).json({ msg: "User Already Exists." })
        }

        const encPass = await bc.hash(password, 12);
        const newUser = new userModel({ username, name, password: encPass })
        await newUser.save()
        res.json(newUser)
    }catch(error){
        res.status(500).json({error: error.message})
    }
    
}

// Login

const LoginUser = async (req,  res) =>{
    try{
        const { username, password } = req.body;
        const oldUser = await userModel.find({ username })
        if (oldUser.length == 0) {
            return res.status(201).json({ msg: "User not Found with this username" })
        }


        bc.compare(password, oldUser[0].password).then((result) => {
            if (result) {
                const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY);
                res.json({ token, username, name: oldUser[0].name })

            } else {
                res.status(201).json({ msg: "Incorrect Password" })
            }
        })
    }catch(error){
        res.status(500).json({error: error.message})
    }
    
    // res.json(checkPass)
    // if(!checkPass){
    //     res.status(201).json({ msg: "Incorrect Password" })
    // }

    // const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY)
    // res.json({token , username , name: oldUser.name})


}


// Search User by name


module.exports = {
    registerUser,
    LoginUser
}