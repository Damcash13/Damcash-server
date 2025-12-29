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
  res.json({
    from: [2, 3],
    to: [3, 4],
    captures: []
  });
});

git add server.js
git commit -m "return Option A move"
git push



  // ✅ TEST: coup "factice" (pour valider Base44 → serveur → Base44)
  // À remplacer par le vrai moteur IA juste après.
  res.json({
    from: [2, 3],
    to: [3, 4],
    captures: []
  });
});
git add server.js
git commit -m "return move in Option A format"
git push



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

