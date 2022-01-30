const decompress = require("decompress");

const subDecompress = async (dataFolder, folder, distFolder) => {
  var xmlFilePath = [];
  var zipFolderNames = {};
  const files = await decompress(`${dataFolder}/${folder}`, distFolder);
  zipFolderNames[folder.split(".")[0]] = true;
  for (const xmlFile of files) {
    if (xmlFile.type === "file") {
      // if (!xmlFile.finalPath) xmlFile.finalPath = `${folder}/${xmlFile.path}`;
      if (xmlFile.path.endsWith(".zip")) {
        var currentZip =xmlFile.path.split("/") 
        
        zipFolderNames[currentZip[currentZip.length-1].split(".")[0]] = true;
        const newSubFile = await unzipSubFiles(distFolder, xmlFile.path);
        for (const subFile of newSubFile) {
          if (subFile.type === "file") {
            // subFile.finalPath = `${xmlFile.finalPath}/${subFile.path}`;

            files.push(subFile);
          }
        }
      } else if(xmlFile.path.endsWith(".xml")){
        // if (!xmlFile.finalPath) xmlFile.finalPath = xmlFile.path;
        xmlFilePath.push(xmlFile);
      }
    }
  }
  
  return {xmlFilePath,zipFolderNames};
};
const unzipSubFiles = async (distFolder, pathSubFile) => {
  const files = await decompress(`./${distFolder}/${pathSubFile}`, distFolder); //check path

  return files;
};
module.exports = { subDecompress };
