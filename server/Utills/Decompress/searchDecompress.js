const decompress = require("decompress");
const { parsing } = require("../Parse/searchParse");
const serchDecompress = async (
  xmlFilePath,
  distFolder,
  folderName,
  targetFolder
) => {
  await decompress(`./${targetFolder}/${folderName}`, distFolder);
  var path;
  const zipLoc = xmlFilePath.split(".zip");
  for (let zipFile of zipLoc) {
    if (zipFile[0] == "/") zipFile = zipFile.substring(1, zipFile.length);
    if (!zipFile.endsWith(".xml")) {
      const res2 = await unzipSubFiles(distFolder, zipFile);
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
