const decompress = require("decompress");

const subDecompress = async (dataFolder, folder, distFolder) => {
  var xmlFilePath = [];
  const files = await decompress(`${dataFolder}/${folder}`, distFolder);
  for (const xmlFile of files) {
    if (xmlFile.type === "file") {
      if (xmlFile.path.endsWith(".zip")) {

        const newSubFile = await unzipSubFiles(distFolder, xmlFile.path);
        for (const subFile of newSubFile) {
          subFile.finalPath = `${xmlFile.path}/${subFile.path}`;

          files.push(subFile);
        }
      } else {
        if (!xmlFile.finalPath) xmlFile.finalPath = xmlFile.path;
        xmlFilePath.push(xmlFile);
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
