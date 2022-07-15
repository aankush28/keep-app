const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new  mongoose.Schema({

    name:{
        type :String,
        required:true,
    },
    email:{
        type :String,
        required:true,
        unique:true,
    },
    password:{
        type :String,
        required:true,
    },
    isAdmin:{
        type :Boolean, 
        required:true,
        default:false,
    }, 
    pic :{
        type :String,
        required:true,
        default:"https://cdn.dribbble.com/users/291221/screenshots/1425333/helper.gif",
    },
},
{
    timestamps:true,
}
)


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
userSchema.pre('save',async function(naxt){
    if(!this.isModified('password')){
naxt();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = new mongoose.model('user',userSchema)
module.exports = User