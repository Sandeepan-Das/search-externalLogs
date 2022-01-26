const decompress = require("decompress");
const { parsing } = require("../Parse/searchParse");
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
  const files = await decompress(
    `./${distFolder}/${pathSubFile}.zip`,
    distFolder
  ); //check path

  return files;
};

module.exports = { serchDecompress };
