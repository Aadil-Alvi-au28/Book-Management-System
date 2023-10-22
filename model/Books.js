const mongoose=require('mongoose');

const books= ('Digisalt', new mongoose.Schema({
    Title:{
        type:String,
    },
    Author:{
        type:String,
    },
    ISBN:{
        type:Number,
    },
    PublishedDate:{
        type:Date,
    },
    del:{
        type:Boolean
    }

}))
module.exports = mongoose.model("books", books);