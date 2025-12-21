import mongoose from "mongoose";

const register = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        require : true,
        lowercase : true,
        trim : true,
        unique : true,
        match : [/^\S+@\S+./, 'email must containe @']
    },
    password : {
        type : String,
        required : true,
    }
},{timestamps : true});

const registerModel = mongoose.model('register',register);

export default registerModel;