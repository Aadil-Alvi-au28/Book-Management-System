const  booksSchema=require('../../model/Books')


const insertBooks=async(data)=>{
    try {
        console.log(data);
    const dataToSave= await booksSchema.create(data)
   return dataToSave
} catch (error) {
    console.log(error)
}
}


module.exports={
    insertBooks
}