import express from "express";
import { storage } from "./storage.js";
import { insertNewsSchema } from "../shared/schema.js";

const router = express.Router();

// Get all news
router.get("/api/news", async (req, res) => {
  try {
    const news = await storage.getAllNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// Create news
router.post("/api/news", async (req, res) => {
  try {
    const newsData = insertNewsSchema.parse(req.body);
    const news = await storage.createNews(newsData);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
