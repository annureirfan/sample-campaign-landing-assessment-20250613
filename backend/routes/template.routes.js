import express from "express";
import * as templateController from "#controllers/template.controller";

const router = express.Router();
router.get("/", templateController.getAll);
router.post("/", templateController.create);
router.delete("/:id", templateController.remove);

export default router;
