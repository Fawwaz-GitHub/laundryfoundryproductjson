const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        price:{type:Number, required:true}
    },
    {collection:'wash'}
)

module.exports = mongoose.model('userModel',userSchema)