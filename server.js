import express from "express";
import dotenv from "dotenv";

import connectDb from "./api/db/dbConnection.js";
import router from "./api/routes/index.js";

dotenv.config();
const app = express();

connectDb();

app.use(express.json());

app.use("/api/v1", router);

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server is successfully running on port:${port}.`);
});
