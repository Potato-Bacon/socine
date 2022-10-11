require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const registerController = require("./controllers/RegisterController");
const loginController = require("./controllers/LoginController");
const imagesController = require("./controllers/ImagesController");
const seedDataController = require("./controllers/SeedDataController");
const roomListingController = require("./controllers/RoomListingController");
const userListingController = require("./controllers/UserListingController");

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
app.use("/api/register", registerController);
app.use("/api/login", loginController);
app.use("/api/images", imagesController);
app.use("/api/seed", seedDataController);
app.use("/api/roomlistings", roomListingController);
app.use("/api/userlistings", userListingController);

//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Socine app listening on port ${port}`);
});
