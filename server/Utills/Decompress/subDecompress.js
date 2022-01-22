const decompress = require("decompress");

// const { unzipSubFiles } = require("./unZipSubFiles");
var xmlFilePath = [];
const subDecompress = async (dataFolder, folder, distFolder) => {
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
  return xmlFilePath;
};
const unzipSubFiles = async (distFolder, pathSubFile) => {
  const files = await decompress(`./${distFolder}/${pathSubFile}`, distFolder); //check path

  return files;
};
module.exports = { subDecompress };
