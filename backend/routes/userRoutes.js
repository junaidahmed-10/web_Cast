import express from 'express';
import { check, logOut, signIn, signUp, userDetails } from '../controllers/user.controllers.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.route("/signUp").post(signUp)
router.route("/signIn").post(signIn)
router.route("/logout").post(logOut)
router.route("/check-cookie").get(check)
router.route("/user-details").get(authMiddleware, userDetails)


export default router
