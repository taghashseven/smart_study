import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Dzidzo backend running 🚀");
});


app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});