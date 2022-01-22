const decompress = require("decompress");
const path = require("path");
const fs = require("fs");
const deleteDir = require("del");
const util = require('util')

const { parsing } = require("../Parse/parser");
const {createNode,insert,search} = require("../TrieDs/trieNode")

const root = new createNode('');


const decompression = async (dataFolder, distFolder) => {
  var xmlFilePath = [];

  try {
    const folders = fs.readdirSync(dataFolder);

    for (const folder of folders) {
      const files = await decompress(`${dataFolder}/${folder}`, distFolder);
      for (const xmlFile of files) {
        if (xmlFile.type === "file") {
          if (xmlFile.path.endsWith(".zip")) {
            const newSubFile = await unzipSubFiles(distFolder, xmlFile.path);
            for (const subFile of newSubFile) {
              // subFile.path = xmlFile.path.concat(subFile.path)  //optimize this
              files.push(subFile);
            }
          } else {
            xmlFilePath.push(xmlFile.path);
          }
        }
      }

      //Parsing
      for (const xmlFile of xmlFilePath) {
        
        let match = await parsing(distFolder, xmlFile);
        
        if (match == folder.split(".")[0]) {
          insert(folder.split(".")[0],root,`./${distFolder}/${xmlFile}`)
          console.log(util.inspect(root, false, null, true /* enable colors */))
          //trie
        }
      }
      xmlFilePath = [];
      await deleteDir(`./${distFolder}`)
      
    }
    
    
  } catch (error) {
    console.log(error);
  }
};
const unzipSubFiles = async (distFolder, pathSubFile) => {
  const files = await decompress(`./${distFolder}/${pathSubFile}`, distFolder); //check path

  return files;
};
module.exports = {
  decompression,
};
