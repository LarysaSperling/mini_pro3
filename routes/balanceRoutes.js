import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/set-balance", async (req, res) => {
  try {
    const { initialBalance } = req.body;

    if (
      initialBalance === undefined ||
      typeof initialBalance !== "number" ||
      initialBalance < 0
    ) {
      return res.status(400).json({
        message: "Initial balance must be a non-negative number",
      });
    }

    const user = await User.create({
      initialBalance,
      currentBalance: initialBalance,
      transactions: [],
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;