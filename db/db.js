const mongoose = require('mongoose')


function connectToDB(){
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then((res) => {
        console.log("Connection Established")
    }).catch((e) => {
        console.log(e)
    })
}



module.exports = connectToDB