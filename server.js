const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/submit", (req, res) => {
  const { name, surname, mobile, email } = req.body;
  console.log("Received data:");
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Mobile:", mobile);
  console.log("Email:", email);
  res.json({ message: "Data received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
