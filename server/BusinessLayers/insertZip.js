const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../logs");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("zip");

const insertZip = function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).json({ message: "Error Occurred while uploading." });
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(400).json({ message: "Bad Request." });
    }

    // Everything went fine.
    if (!req.file) return res.json({ message: "File not choosen." });
    res.send("inserted successfully.");
  });
};

module.exports = insertZip;
