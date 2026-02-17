import app from './app.js'
import dotenv from 'dotenv'
dotenv.config({path : 'backend/config/config.env'});
import { connectdb } from './config/db.js';

const PORT = process.env.PORT || 3000;

//connect db
connectdb();

//route

const server = app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
process.on('unhandledRejection',(error)=>{
    console.log(`error ${error}`);
    console.log('server is shutting down ,due to unhandles promise rejection')
    server.close(()=>{
        process.exit(1)
    })
})