const { decompression } = require("../Utills/Decompress/decompression");

const testFolder = "./SampleData";
const distFolder = "dist";

const buildZip = async function (req, res) {
  console.time("Build")
  var filePaths = []
  try {
    filePaths = await decompression(testFolder, distFolder);
    // console.log(filePaths)
    console.timeEnd("Build")
    res.send("pre processing completed successfully.");
  } catch (error) {
    console.log(error)
  }
};

module.exports = buildZip;
