const route = require("express").Router();
const getBooks=require('../controller/Books/getBooks')
const insertBooks=require('../controller/Books/insertBooks')
const updateBooks=require('../controller/Books/updateBooks')
const deleteBooks=require('../controller/Books/deleteBooks')


//getting all Books Data from DB:
route.get('/book',async(req,res)=>{
    const dataRes= await getBooks.getbooks()
    res.status(200).json({
        message:"sucessfull",
        data:dataRes
    })
})

//getting Books Data by ID from DB:
route.get('/book:id',async(req,res)=>{
    const id =req.params.id
    const dataRes= await getBooks.getbooksid(id)
    console.log(dataRes);
    res.status(200).json({
        message:"sucessfull",
        data:dataRes
    })
})


// inserting Books Data to DB:
route.post('/registerbooks',async(req, res) => {
    console.log(req.body);
    const {title,author,isbn,publishingdate}=req.body
    const data={
        Title:title,
        Author:author,
        ISBN:isbn,
        PublishedDate:publishingdate,
        del:false
    }
    const dataRes=await insertBooks.insertBooks(data)
    res.status(200).json({
        message:"Data Inserted sucessfull",
    })
 })


 // updating Books Data from DB
 route.patch('/updatebooks:id',async(req, res) => {
    
    const id =req.params.id
    const {title,author,isbn,publishingdate}=req.body
    const data={
        Title:title,
        Author:author,
        ISBN:isbn,
        PublishedDate:publishingdate,
        del:false
    }
    const dateRes=await updateBooks.updateBooks(id,data)
    res.status(200).json({
        message:"Books data Updated sucessfull",
    })

})

//delete Books Data By Id:(Soft deleting data)
route.put('/deletebooks:id',async(req,res)=>{
    const id=req.params.id
    const dataRes =await deleteBooks.deleteBooks(id)
    res.status(200).json({
        message:"deleted"
    })
})


module.exports = route;
