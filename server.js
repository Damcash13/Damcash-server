import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Route de test
app.get("/", (req, res) => {
  res.json({ status: "Damcash AI server running ✅" });
});

// (Plus tard : app.post("/move", ...))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

