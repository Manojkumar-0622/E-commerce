import express from 'express'
const routes = express.Router();
import { authRegister , testFile } from '../controllers/authController.js'; 

routes.post('/register',authRegister);

export default routes;