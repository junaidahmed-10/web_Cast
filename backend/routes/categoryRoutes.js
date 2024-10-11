import express from'express';
import { addCategory } from '../controllers/category.controllers.js';

const router = express.Router()

router.route("/addCategory").post(addCategory)

export default router