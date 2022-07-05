import { Router } from "express";

import {
  createNew,
  getDoc,
  getAllDoc,
  deleteDoc,
} from "../controllers/shopDown.js";

const router = Router();

// post api's
router.post("/create", createNew);

// get api's
router.get("/get", getDoc);
router.get("/get-all", getAllDoc);

// delete api
router.delete("/delete", deleteDoc);

export default router;
