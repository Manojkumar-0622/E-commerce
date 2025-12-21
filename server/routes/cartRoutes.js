import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { cartGet } from '../controllers/cartController.js';

const route = express.Router();

route.get('/test',requireAuth,cartGet)

export default route;