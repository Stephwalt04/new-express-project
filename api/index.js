const express = require("express");
const app = express();

app.get("/", (req, res) => res.json("Express on Vercel"));

app.get("/api", (req, res) => {
  res.json({ name: "John Doe" });
});

app.get("/api/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.get("/api/:id/:name", (req, res) => {
  res.json({ id: req.params.id, name: req.params.name });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server ready on port ${process.env.PORT || 3000}.`)
);

module.exports = app;
