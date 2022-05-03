import { Router } from "express";

import {
  createProduct,
  getProduct,
  getAllProducts,
} from "../controllers/product.js";

const router = Router();

router.post("/create", createProduct);

router.get("/get", getProduct);
router.get("/getAll", getAllProducts);

export default router;
