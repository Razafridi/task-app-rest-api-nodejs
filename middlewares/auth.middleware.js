const jwt = require('jsonwebtoken')

const authUser = async (req, res , next) =>{
    
    try{
        const autherization = req.headers.authorization
        const token = autherization.split(' ')[1]
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!data){
            return res.status(201).json({msg: "Incorrect Token"})
        }
        req.user = data
        next()
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    authUser,
}