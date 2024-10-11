import express from 'express';
import { check, logOut, signIn, signUp } from '../controllers/user.controllers.js';

const router = express.Router();

router.route("/signUp").post(signUp)
router.route("/signIn").post(signIn)
router.route("/logout").post(logOut)
router.route("/check-cookie").get(check)


export default router
