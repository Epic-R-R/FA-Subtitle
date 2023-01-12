import express from "express";
import downloadController from "../controllers/download.controller";

const router = express.Router({ mergeParams: true });

router.get("/download", downloadController.movieDetail);

export default router;
