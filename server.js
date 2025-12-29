import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.json({ status: "Damcash AI server running ✅" });
});

// Route IA – Option A
app.post("/move", (req, res) => {
  res.json({
    from: [2, 3],
    to: [3, 4],
    captures: []
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});


