const deleteDir = require("del");

const { search } = require("../Utills/TrieDs/trieNode");
const { root } = require("../Utills/Decompress/decompression");
const { serchDecompress } = require("../Utills/Decompress/searchDecompress");

const testFolder = "./SampleData";
const distFolder = "dist";

const searchZip = async (req, res) => {
  console.time("Search")
  const zipNames = req.params.word;
  console.log(zipNames)
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
      if (xmlFilePath != "Not Found") {
        resp2 = await serchDecompress(
          xmlFilePath.path,
          distFolder,
          zipName,
          testFolder
        );
        resp2.time = xmlFilePath.time;
        resp = Object.assign({}, resp2);

        result[zipName] = resp;
      } else {
        result[zipName] = { SERVICETAGFILENAME: "Not Found" };
      }
    }
    // deleteDir(distFolder)
    console.timeEnd("Search")
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
// const searchZipBrute = async (req, res) => {
//   console.time("Search Brute")
//   try {
//     var xmlFilePath;
//     var result = {};
//     var resp2 = {};
//     for (const zipName of req.body.inputQuery) {
//       var resp = {};
//       xmlFilePath = search(zipName.query, root);
//       zipName.query = zipName.query.concat(".zip");
//       if (xmlFilePath != "Not Found") {
//         resp2 = await serchDecompress(
//           xmlFilePath.path,
//           distFolder,
//           zipName.query,
//           testFolder
//         );
//         resp2.time = xmlFilePath.time;
//         resp = Object.assign({}, resp2);

//         result[zipName.query] = resp;
//       } else {
//         result[zipName.query] = { SERVICETAGFILENAME: "Not Found" };
//       }
//     }
//     deleteDir(distFolder)
//     console.timeEnd("Search Brute")
//     res.status(200).send(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// 45thrg4,tr5re7,hi6th8,ui897ps,i43dy2,ythgfr5
module.exports = searchZip;
