import express from 'express';
import { getAllItem, addNewProduct } from '../controllers/productController.js'

const Route = express.Router();

Route.get('/allItem',getAllItem);
Route.post('/addItem', addNewProduct);

export default Route;