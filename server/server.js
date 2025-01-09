const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config()
// Connect to MongoDB

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema and model
const PromptSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Prompt = mongoose.model("Prompt", PromptSchema);

// API endpoint to save prompt and response
app.post("/api/prompts", async (req, res) => {
  const { prompt, response } = req.body;

  if (!prompt || !response) {
    return res.status(400).json({ error: "Prompt and response are required" });
  }

  try {
    const newPrompt = new Prompt({ prompt, response });
    await newPrompt.save();
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(500).json({ error: "Error saving prompt" });
  }
});

// API endpoint to get all saved prompts
app.get("/api/prompts", async (req, res) => {
  try {
    const prompts = await Prompt.find().sort({ createdAt: -1 });
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching prompts" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
