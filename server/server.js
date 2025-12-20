import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'


const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;

app.use('/api',authRoutes);


app.listen(PORT,()=>{
    console.log('server start at port number :',PORT);
})