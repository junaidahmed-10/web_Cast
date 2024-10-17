import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { uploads } from '../middlewares/multer.js';
import { addPodcasts, getAllPodcasts, getPodcastByCat, getPodcastById, getUserPodcasts } from '../controllers/podcasts.controllers.js';

const router = express.Router();

router.route("/addPodcasts").post(authMiddleware, uploads, addPodcasts)
router.route("/getAllPodcasts").get(getAllPodcasts)
router.route("/getUserPodcasts").get(authMiddleware, getUserPodcasts)
router.route("/getPodcastbyId").get(getPodcastById)
router.route("/getPodcastbyCat").get(getPodcastByCat)

export default router;