const express=require("express");
const app=express();
const noteRoutes = require('../routes/noteRoutes')
const userRoutes = require('../routes/userRoutes')
const  { errorHandler, notFound } = require('../middleware/errormiddleware')
require('dotenv').config()
const PORT = process.env.PORT || 5000;
require('../config/db')

app.use(express.json()); // to accept json data
app.get('/',(req,res)=>{
    res.send('api is runing')
})
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("frontend/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    })


}

app.listen(PORT,console.log("Server started on PORT 5000"));