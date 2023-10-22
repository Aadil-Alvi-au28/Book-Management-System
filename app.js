const express = require('express');
const dotenv = require('dotenv');
const app = express();
var cors = require('cors')
app.use(cors({origin:'*'}))
const router = require("./routes/route.js");
app.use(express.json());
const db= require("./config/DB.js") 
dotenv.config();
db.dbinit()
const prt = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(router.booksRoute);


// app.listen(process.env.PORT)
app.listen(prt, () => {
  console.log(`Sever is now listening at port ${prt}`);
});
