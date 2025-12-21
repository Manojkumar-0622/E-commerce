import jwt from "jsonwebtoken";
import registerModel from "../models/registerModel.js";
import bcrypt from 'bcrypt';

export const authRegister = async (req,res) =>{
    const {username, email, password} = req.body;
    
    try {
        if(!username || !email ||  !password){
            return res.status(400).json({
                success : false, message : 'all fields are required'
            });
        }

        const isEmail = await registerModel.findOne({email});

        if(isEmail){
            return res.status(409).json({
                success : false,
                message : 'this email already used try other email'
            })
        }

        const hashpassword = await bcrypt.hash(password,10);
        
        await registerModel.create({
            username,
            email,
            password : hashpassword
        });
        

        return res.status(200).json({
            success : true,
            message : 'register successfully added'
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success : false,
            message : 'internal server error'
        })
    }
}

export const authLogin = async (req, res) =>{
    const {email, password} = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({
                success :false,
                message : "all field required"
            })
        }

        const user = await registerModel.findOne({email});

        if(!user){
            return res.status(404).json({
                success : false,
                message : "email not found"
            })
        }

        const userPassword = await bcrypt.compare(password,user.password);

        if(!userPassword){
            return res.status(404).json({
                success : false,
                message : "invalid password"
            })
        }

        const token = jwt.sign(
            {id : user._id},
            process.env.SECRET_KET,
            { expiresIn : '1d'}
        );

        console.log(token);

        res.cookie('token',token,{
            httpOnly : true,
            secure : false,
            sameSite : 'strict',
            maxAge : 7 * 24  * 60 * 60 * 1000
        });

        return res.status(200).json({
            success : true,
            message : 'Login successfully'
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success : false,
            message : 'internal server error'
        })
    }
}