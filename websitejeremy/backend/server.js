const express = require('express');
const app = express();

app.get("/api", (req, res) => {
  res.json({ "users": ["jeremy", "eclypze", "yuolo"] });
});

app.post("/api/empresa", (req, res) => {
  const {
    empresaName,
    empresaCorreo,
    empresaCorreo2,
    empresaTel,
    empresaTel2,
    empresaCedu,
  } = req.body;

  // mssql conectarse a la base datos
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
