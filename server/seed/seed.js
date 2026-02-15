import mongoose from "mongoose";
import connectionDB from "../config/connectionDB.js";
import Product from "../models/productModel.js";
import { products } from "./products.js";

const dataFeed = async () =>{
    try {
        await connectionDB();

        await Product.deleteMany();
        await Product.insertMany(products);

        console.log('seeds are added');

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

dataFeed();