const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

//* ?? to fill in later
app.use(express.static("../client/dist"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
