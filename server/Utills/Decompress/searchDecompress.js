const decompress = require("decompress");
const fs = require('fs');
const {
  parsing
} = require("../Parse/searchParse");
const serchDecompress = async (
  xmlFilePath,
  distFolder,
  folderName,
  targetFolder
) => {
  var path;
  const zipLoc = xmlFilePath.split(".zip");
  for (let zipFile of zipLoc) {
    if (!zipFile.endsWith(".xml")) {
      if (zipFile[0] == "/") {
        zipFile = zipFile.substring(1, zipFile.length);
        const res2 = await unzipSubFiles(distFolder, zipFile);
      } else {
        if (!fs.existsSync(`./${distFolder}/${zipFile}`))
          await decompress(`./${targetFolder}/${zipFile}.zip`, distFolder);
      }
    } else {
      path = zipFile;
    }
  }
  const result = await parsing(distFolder, path);
  return result;
};
const unzipSubFiles = async (distFolder, pathSubFile) => {
  var files
  var currentZip = pathSubFile.split("/")
  if (!fs.existsSync(`./${distFolder}/${currentZip[currentZip.length-1]}`)) {

    files = await decompress(
      `./${distFolder}/${pathSubFile}.zip`,
      distFolder
    ); //check path
  }

  return files;
};

module.exports = {
  serchDecompress
};