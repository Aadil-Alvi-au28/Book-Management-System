const  booksSchema=require('../../model/Books')
let mongodb = require('mongodb')

const updateBooks=async(id,data)=>{
    try {
        let mydata=await booksSchema.updateOne({"_id" :new mongodb.ObjectId(id)},data)
        return mydata

} catch (error) {
    console.log(error)
}}

module.exports={
    updateBooks
}