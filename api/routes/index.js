import { Router } from "express";
import productRoutes from "../routes/product.js";
import shopDownRoutes from "../routes/shopDownRoutes.js";

const router = Router();

router.use("/product", productRoutes);
router.use("/shop-down", shopDownRoutes);

export default router;
