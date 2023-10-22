const  booksSchema=require('../../model/Books')
let mongodb = require('mongodb')


const getbooks=async()=>{
    try {
     const dataToSave=await booksSchema.find({})
     return (dataToSave)
      
     
    } catch (error) {
     console.log(error)
    }
     }

 const getbooksid=async(id)=>{
        try {
         const dataToSave=await booksSchema.findById({"_id" :new mongodb.ObjectId(id)},)
         return (dataToSave)

        } catch (error) {
         console.log(error)
        }
         }
    


module.exports={getbooks,getbooksid}
