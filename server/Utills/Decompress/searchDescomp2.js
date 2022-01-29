const {
  parsing
} = require("../Parse/searchParse");
const serchDecompress = async (
  xmlFilePath,
  distFolder,
) => {
  const result = await parsing(distFolder, xmlFilePath);
  return result;
};


module.exports = {
  serchDecompress
};