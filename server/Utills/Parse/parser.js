//demoPurpose
var fs = require("fs")
const term = "SERVICETAGFILENAME"
const {KmpPatternMatching} = require("../Kmp_Algorithm/kmpAlgo")
  
const parsing = async (distFolder, fileLocation) => {
 
  var data = fs.readFileSync(`./${distFolder}/${fileLocation}`,"utf8");
  var match1 = await KmpPatternMatching(data,term);
  var match2 = await KmpPatternMatching(data,`/${term}`);
  
  
  return data.substring((match1[0]+term.length-1)+2,match2[0]-1);
};

module.exports = { parsing };
