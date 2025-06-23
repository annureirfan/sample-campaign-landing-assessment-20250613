import express from "express";
import * as sectionContentController from "#controllers/section-content.controller";

const router = express.Router();
router.get("/", sectionContentController.getAll);
router.post("/", sectionContentController.create);
router.put("/:id", sectionContentController.update);
router.delete("/:id", sectionContentController.remove);
router.get("/:campaignId", sectionContentController.getSectionContent);

export default router;
