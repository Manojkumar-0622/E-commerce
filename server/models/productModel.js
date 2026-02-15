import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    image : String,
    starts : Number,
    name : String,
    date : String,
    message : String
})

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price :[{
            price : Number,
            discount : Number
        }],
    image : [{
            normal_img : String,
            hover_img : String,
            full_img : String
    }],
    simple_des : {
        type : String
    },
    product_review : [reviewSchema],
    full_des : String,
    color : [String],
    Categories : [String],
    Tags : [String],
    review : Number,
    stock : Number
})

const Product = mongoose.model("Product",productSchema);

export default Product;