const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const router = express.Router();

router.get("*", async (req, res) => {
  let filename = req.path.slice(1);

  try {
    let s3File = await s3
      .getObject({
        Bucket: process.env.BUCKET,
        Key: filename,
      })
      .promise();

    res.set("Content-type", s3File.ContentType);
    res.send(s3File.Body.toString()).end();
  } catch (error) {
    if (error.code === "NoSuchKey") {
      console.log(`No such key ${filename}`);
      res.sendStatus(404).end();
    } else {
      console.log(error);
      res.sendStatus(500).end();
    }
  }
});

// curl -i -XPUT --data '{"k1":"value 1", "k2": "value 2"}' -H 'Content-type: application/json' https://some-app.cyclic.app/myFile.txt
app.put("*", async (req, res) => {
  let filename = req.path.slice(1);

  console.log(typeof req.body);

  await s3
    .putObject({
      Body: JSON.stringify(req.body),
      Bucket: process.env.BUCKET,
      Key: filename,
    })
    .promise();

  res.set("Content-type", "text/plain");
  res.send("ok").end();
});

// curl -i -XDELETE https://some-app.cyclic.app/myFile.txt
app.delete("*", async (req, res) => {
  let filename = req.path.slice(1);

  await s3
    .deleteObject({
      Bucket: process.env.BUCKET,
      Key: filename,
    })
    .promise();

  res.set("Content-type", "text/plain");
  res.send("ok").end();
});

// /////////////////////////////////////////////////////////////////////////////
// Catch all handler for all other request.
app.use("*", (req, res) => {
  res.sendStatus(404).end();
});

// /////////////////////////////////////////////////////////////////////////////
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`index.js listening at http://localhost:${port}`);
});
