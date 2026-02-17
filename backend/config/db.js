import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config({path:'backend/config/config.env'});

 export const connectdb  = ()=>{
mongoose.connect(process.env.MONGODB_URI).then((data)=>{
    console.log(`mongoose is connected to server ${data.connection.host}`)
})
}
