const deleteDir = require("del");

const { search } = require("../Utills/TrieDs/trieNode");
const { root } = require("../Utills/cron/unzip");
const { serchDecompress } = require("../Utills/Decompress/searchDescomp2");

const testFolder = "./SampleData";
const distFolder = "dist";

const searchZip = async (req, res) => {
  console.time("Search")
  const zipNames = req.params.word;
  
  const searchQuery=zipNames.split(",")
  console.log(searchQuery)
  try {
    var xmlFilePath;
    var result = {};
    var resp2 = {};  //group the files with nearly same path so don't need to unzip necessarily
    for (let zipName of searchQuery) {
      var resp = {};
      xmlFilePath = search(zipName, root);
      zipName = zipName.concat(".zip");
      if (xmlFilePath != "Not Found" && xmlFilePath.path!="Unzipped") {
        resp2 = await serchDecompress(
          xmlFilePath.path,
          distFolder
        );
        resp2.time = xmlFilePath.time;
        resp = Object.assign({}, resp2);

        result[zipName] = resp;
      } else {
        result[zipName] = { SERVICETAGFILENAME: "Not Found" };
      }
    }
    console.timeEnd("Search")
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
// 45thrg4,tr5re7,hi6th8,ui897ps,i43dy2,ythgfr5
module.exports = searchZip;
