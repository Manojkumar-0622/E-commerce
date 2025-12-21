import express from 'express'
const routes = express.Router();
import { authRegister, authLogin } from '../controllers/authController.js'; 

routes.post('/register',authRegister);
routes.post('/login',authLogin);

export default routes;