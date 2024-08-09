const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt=require('bcryptjs')
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// hashed the password using bcryptjs
userSchema.pre('save',async function(){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try {
       const saltRound=await bcrypt.genSalt(10);
       const hash_password=await bcrypt.hash(user.password,saltRound);
       user.password=hash_password;
    } catch (error) {
        next(error)
    }
})
exports.Users=mongoose.model('Users',userSchema)