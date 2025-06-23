import express from "express";
import * as productController from "#controllers/product.controller";

const router = express.Router();
router.get("/", productController.getAll);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);
router.get("/:campaignId", productController.getProductbyCampaignId);

export default router;
