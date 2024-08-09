const userModel=require("../Models/Users")
const Users=userModel.Users
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const bcrypt=require('bcryptjs');
require('dotenv').config()
exports.usersignup=async(req,res)=>{

    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.json({success:false, error:"Existing Email"})
    }
    //const hash_password=await bcrypt.hash(req.body.password,10)
    const User=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    
    await User.save()
    const token=jwt.sign({email:User.email},process.env.JWT_SECRET)
    res.json({
        success:true,
        token
    })
}
exports.userlogin=async(req,res)=>{

    const user=await Users.findOne({email:req.body.email})
    if(user){
        // compare entered password with the hashed password in the DB
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if(validPassword){
            const token=jwt.sign({email:user.email},process.env.JWT_SECRET);
            return res.json({success:true,token})
        }else{
           return res.json({success:false,error:"Wrong Password Entered"})
        }
    }else{
        return res.json({success:false,error:"Account not found"})
    }
}
exports.forgotpass=async (req,res)=>{
    console.log(req.body)
    const email=req.body.email;
    let user=await Users.findOne({email:email});
    if(!user){
     return res.send({success:false})
    }
    else{ const token=jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:'15m'});
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure:true,
            auth: {
              user: 'singhkinjal.7272@gmail.com',
              pass: 'mddjygjqbswedfey'
            }
          });
          
          var mailOptions = {
            from: 'singhkinjal.7272@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: "Forget your password?",
            html:`<h2>Greetings from The bulletin!</h2><p>\
          <h3>Hello</h3>\
          Kindly please reset your password by clicking on below link (valid for 15 minutes). Please make sure to reset your password before the link expires.<br/>\
          <a href='http://localhost:3000/resetpassword/${user._id}/${token}' >Click On This Link</a>\
          </p>`,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({success:true,message:'Reset password link sent on your email!.'})
            }
          });
    }}
    exports.resetpass=async (req,res)=>{
        const {id,token}=req.params;
        const password=req.body.pass;
        if(!password){
            return res.send({success:false,message:"Please provide a password"})
        }else{
            const user=await Users.findOne({_id:id});
            if(!user){
               res.send({success:false,message:"User not verified"})
            }else{
               const decode=jwt.verify(token,process.env.JWT_SECRET);
               let user=await Users.findOne({email:decode.email})
               if(user){
                const saltRound=await bcrypt.genSalt(10);
                const hash_password=await bcrypt.hash(user.password,saltRound);
                 const success=await Users.findByIdAndUpdate(user._id,{
                    $set:{
                        password:hash_password
                    }
                 })
                 if(success){
                    res.send({success:true,message:"Password changed"})
                 }
               }else{
                res.send({sucess:false,message:'Token not verified'})
               }
            }
            
        }
    }