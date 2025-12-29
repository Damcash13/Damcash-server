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


app.post("/move", (req, res) => {
  const { board, turn, difficulty } = req.body;

  res.json({
    ok: true,
    message: "Damcash AI endpoint ready ♟️",
    received: { turn, difficulty }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

