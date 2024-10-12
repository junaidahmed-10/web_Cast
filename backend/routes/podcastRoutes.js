import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { uploads } from '../middlewares/multer.js';
import { addPodcasts, getAllPodcasts, getUserPodcasts } from '../controllers/podcasts.controllers.js';

const router = express.Router();

router.route("/addPodcast").post(authMiddleware, uploads, addPodcasts)
router.route("/getAllPodcasts").get(getAllPodcasts)
router.route("/getUserPodcasts").get(authMiddleware, getUserPodcasts)

export default router;