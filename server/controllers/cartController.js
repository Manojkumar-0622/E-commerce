import user from "../models/registerModel.js";

export const cartGet = async (req,res)=>{
    const userId =  req.user_id;
    const userDetails = await user.findById({userId});

    console.log(userDetails);

    res.status(200).json({
        user : userDetails
    });
}

