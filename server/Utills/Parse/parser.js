//demoPurpose

var fs = require("fs"),
  xml2js = require("xml2js");
const parsing = async (distFolder, fileLocation) => {
  let res;
  var parser = new xml2js.Parser();

  var data = fs.readFileSync(`./${distFolder}/${fileLocation}`);

  parser.parseString(data, function (err, result) {
    
    res = result.note.to[0];
    
  });
  return res;
};

module.exports = { parsing };
