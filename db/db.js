const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.MONGO_URI

const connect = async () => {
    try{
        await mongoose.connect(URI)
        console.log('MONGODB Connected..');
    }catch(e){
        console.log('Something went wrong while connecting to DB');
    }
}


module.exports = connect