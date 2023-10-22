const  booksSchema=require('../../model/Books')
let mongodb = require('mongodb')

const deleteBooks=async(id,data)=>{
    try {
        let mydata=await booksSchema.deleteOne({"_id": new mongodb.ObjectId(id) },data)
        return mydata

} catch (error) {
    console.log(error)
}}

module.exports={
    deleteBooks
}