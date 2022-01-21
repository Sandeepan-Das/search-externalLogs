const express = require("express");
const app = express();
const cors = require("cors");
const ziprouter = require("./Routes/zipRoute");

const port = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to search logs." });
});

app.use("/", ziprouter);

app.listen(port, () => {
  console.log("server started on port 5000");
});
