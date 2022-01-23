const { search } = require("../Utills/TrieDs/trieNode");
const { root } = require("../Utills/Decompress/decompression");
const { subDecompress } = require("../Utills/Decompress/subDecompress");
const { serchDecompress } = require("../Utills/Decompress/searchDecompress");
const testFolder = "./SampleData";
const distFolder = "dist";

const searchZip = async function (req, res) {
  try {
    var xmlFilePath;
    var result;
    for (const zipName of req.body.inputQuery) {
      xmlFilePath = search(zipName.query, root); //Try to extract the file without unzipping the folder
      console.log(xmlFilePath)
      zipName.query = zipName.query.concat(".zip");
      if (xmlFilePath != "Not Found") {
      result=  await serchDecompress(xmlFilePath.path, distFolder, zipName.query,testFolder);
      result.time = xmlFilePath.time
      }
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchZip;
