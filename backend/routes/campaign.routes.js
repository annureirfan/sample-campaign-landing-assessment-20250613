import express from "express";
import * as campaignController from "#controllers/campaign.controller";

const router = express.Router();
router.get("/", campaignController.getAll);
router.post("/", campaignController.create);
router.delete("/:id", campaignController.remove);
router.get("/:slug", campaignController.getOne);

export default router;
