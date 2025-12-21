import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import connectionDB from './config/connectionDB.js';
import cookieParser from 'cookie-parser';
import cartRoute from './routes/cartRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(cookieParser());

connectionDB();

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;

app.use('/api',authRoutes);
app.use('/cart',cartRoute);

app.listen(PORT,()=>{
    console.log('server start at port number :',PORT);
})