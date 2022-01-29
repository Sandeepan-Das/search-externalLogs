const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const ApiErrorHandler = require("./Errors/ApiErrorHandler");


const ziprouter = require("./Routes/zipRoute");
const cron = require("./Utills/cron/unzip")
const cron2 = require("./Utills/cron/delDist")
const port = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000 }))
app.use(express.json({limit:"50mb"}))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to search logs." });
});

app.use("/", ziprouter);

app.use(ApiErrorHandler);
app.listen(port, () => {
  console.log("server started on port 5000");
});
