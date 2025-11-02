import express from 'express'
import { checkAuth, login, Signup, updateProfile } from '../controllers/userController.js';
import { protectRouter } from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/signup',Signup)
userRouter.post('/login',login)
userRouter.put('/update-profile',protectRouter, updateProfile)
userRouter.get('/check', protectRouter, checkAuth)

export default userRouter;
