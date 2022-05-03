import { Router } from "express";
import productRoutes from "../routes/product.js";

const router = Router();

router.use("/product", productRoutes);

export default router;
