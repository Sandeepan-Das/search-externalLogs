const multer = require("multer");
const ApiError = require("../Errors/ApiError");
const diskStorage = "./SampleData";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, diskStorage);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("zip");

const insertZip = function (req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      next(ApiError.badRequest("Error Occurred while uploading."));
    } else if (err) {
      // An unknown error occurred when uploading.
      next({});
    }
    // Everything went fine.
    if (!req.file) {
      next(ApiError.badRequest("File not choosen."));
      return;
    }
    res.send("inserted successfully.");
  });
};

module.exports = insertZip;
