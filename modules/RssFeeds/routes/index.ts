import express from "express";
import RssFeedsController from "../controllers/RssFeedsController";

const router = express.Router();

const rssfeedController = new RssFeedsController();

router.get("/rssfeed", (req, res) => rssfeedController.getFeed(req, res));

export default router;