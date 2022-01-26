const decompress = require("decompress");
const path = require("path");
const fs = require("fs");
const deleteDir = require("del");
const util = require("util");

const { parsing } = require("../Parse/parser");
const { createNode, insert, search } = require("../TrieDs/trieNode");
const { subDecompress } = require("./subDecompress");
const root = new createNode("");

const decompression = async (dataFolder, distFolder) => {
  var xmlFilePath = [];

  try {
    const folders = fs.readdirSync(dataFolder);
                    
    for (const folder of folders) {
      // if(search(folder.split(".")[0],root)=="Not Found"){

      xmlFiles = await subDecompress(dataFolder, folder, distFolder);

      //Parsing
      for (const xmlFile of xmlFiles.xmlFilePath) {
        let match = await parsing(distFolder, xmlFile.path);

        if (xmlFiles.zipFolderNames[match]) {
          //trie

          insert(match, root, {
            path: `${xmlFile.finalPath}`,
            time: xmlFile.mtime,
          });
        }
      }
      xmlFilePath = [];
      //delete dir
      await deleteDir(`./${distFolder}`);
    }
    // }
    console.log(util.inspect(root, false, null, true /* enable colors */));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  decompression,
  root,
};
