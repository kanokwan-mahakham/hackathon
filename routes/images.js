const multer = require("multer");
const fs = require('fs');
const Image = require('../models/images')

const imageFilter = (req, file, callback) => {
  if (file.mimetype.startWith("image")) {
    callback(null, true);
  } else {
    callback("upload only images", false);
  }
};

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/upload/");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now}-image-${file.originalname}`);
  },
});

let uploadFile = multer({storage: storage, fileFilter: imageFilter})