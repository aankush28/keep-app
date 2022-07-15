const mongoose = require('mongoose');
const DB = process.env.MONGO_URI
mongoose.connect(DB, {useNewUrlParser:true,useUnifiedTopology: true })
.then(console.log("connectins sucsefull to data base"))
.catch((e)=>{
    console.log(e);
})