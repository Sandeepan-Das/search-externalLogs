const { search } = require("../Utills/TrieDs/trieNode");
const { root } = require("../Utills/Decompress/decompression");
const { subDecompress } = require("../Utills/Decompress/subDecompress");

const testFolder = "./SampleData";
const distFolder = "dist";

const searchZip = async function (req, res) {
  try {
    
    var xmlFilePath ;
    for (const zipName of req.body.inputQuery) {
      xmlFilePath = search(zipName.query, root); //Try to extract the file without unzipping the folder
      zipName.query = zipName.query.concat(".zip");
        
      subDecompress(testFolder, zipName.query, distFolder);
    }
    res.status(200).send({ xmlFilePath });
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchZip;
