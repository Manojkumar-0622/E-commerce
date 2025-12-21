import mongoose from 'mongoose';


const connectionDB = async () =>{
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017/e-commerce');
        console.log(`MongoDB connected ${connect.connection.host}`);

    }catch(e){
        console.log(e.message);
        console.log('MongoDB error not connected');
        process.exit(1);
    }
}

export default connectionDB;