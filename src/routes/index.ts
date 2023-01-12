import express from "express";
import searchRoute from "./search.route";
import downloadRoute from "./download.route";

const router = express.Router();
router.use("/", searchRoute);
router.use("/", downloadRoute);

export default router;
