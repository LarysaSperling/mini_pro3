import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import balanceRoutes from "./routes/balanceRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", balanceRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});