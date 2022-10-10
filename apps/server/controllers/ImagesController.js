const express = require("express");
const multer = require("multer");
const router = express.Router();
const uuid = require("uuid").v4;

const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100000000, files: 5 },
});

router.post("/upload", upload.array("image", 5), async (req, res) => {
  const images = req.files;
  console.log(images);

  const multipleImage = images.map((picture) =>
    cloudinary.uploader.upload(picture.path, {
      upload_preset: "rooms",
      use_filename: true,
    })
  );

  const imageResponse = await Promise.all(multipleImage);
  const imageURL = imageResponse.map((image) => image.url);
  console.log(imageURL);
  res.status(200).send({ imageURL });
});

router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).send({ msg: "File is too large" });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).send({ msg: "File limit reached" });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).send({ msg: "File must be an image" });
    }
  }
});

module.exports = router;
