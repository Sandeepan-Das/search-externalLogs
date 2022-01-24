const deleteDir = require("del");

const { search } = require("../Utills/TrieDs/trieNode");
const { root } = require("../Utills/Decompress/decompression");
const { serchDecompress } = require("../Utills/Decompress/searchDecompress");

const testFolder = "./SampleData";
const distFolder = "dist";

const searchZip = async (req, res) => {
  try {
    var xmlFilePath;
    var result = {};
    var resp2 = {};
    for (const zipName of req.body.inputQuery) {
      var resp = {};
      xmlFilePath = search(zipName.query, root);
      zipName.query = zipName.query.concat(".zip");
      if (xmlFilePath != "Not Found") {
        resp2 = await serchDecompress(
          xmlFilePath.path,
          distFolder,
          zipName.query,
          testFolder
        );
        resp2.time = xmlFilePath.time;
        resp = Object.assign({}, resp2);

        result[zipName.query] = resp;
      } else {
        result[zipName.query] = { SERVICETAGFILENAME: "Not Found" };
      }
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchZip;
