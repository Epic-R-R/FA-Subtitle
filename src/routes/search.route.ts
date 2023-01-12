import express from "express";
import searchController from "../controllers/search.controller";

const router = express.Router({ mergeParams: true });

router.get("/search", searchController.searchDetail);

export default router;
