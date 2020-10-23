const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
    no_id: {
        type: Number,
        required:true,
        unique:true

    },
    item_name:{
        type:String,
        required:true,

    },
    item_price:{
        type:Number,
        required:true
    }
},
{timestamps:true})

module.exports = Item = mongoose.model("item",ItemSchema)