import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import connectionDB from './config/connectionDB.js';


const app = express();
connectionDB();

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;

app.use('/api',authRoutes);


app.listen(PORT,()=>{
    console.log('server start at port number :',PORT);
})