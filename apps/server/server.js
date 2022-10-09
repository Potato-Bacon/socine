require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const registerController = require("./controllers/RegisterController");
const loginController = require("./controllers/LoginController");
const imagesController = require("./controllers/ImagesController");

//configuration
const port = process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI ?? "";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo at ${MONGO_URI}`);
});

const app = express();

//middleware
app.use(express.static("../client/dist"));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//controllers
app.use("/register", registerController);
app.use("/login", loginController);
app.use("/images", imagesController);

//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
