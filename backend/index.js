require('dotenv').config()
const PORT=process.env.PORT
const express=require('express')
const server=express();
const mongoose=require('mongoose')
const cors=require('cors')
const authRouter=require('./Routes/authRoutes')
const newsRouter=require('./Routes/getNewsRoutes')

//middlewares
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}))

//DB connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://singhkinjal7272:${process.env.PASSWORD}@cluster0.lnbmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
  console.log("Database connected");
}
//ENDPOINTS
server.use('/',authRouter.router)
server.use('/',newsRouter.router)

// SERVER RUNNING
server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})