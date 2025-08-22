import express from 'express'
import authController from '../controller/authController.js';

const authRoute = express.Router();

authRoute.post("/signup", authController.signup)
authRoute.get("/", authController.allUser)
authRoute.delete('/users/:id', authController.deleteById)

export default authRoute 