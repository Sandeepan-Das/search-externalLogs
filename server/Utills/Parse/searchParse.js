//demoPurpose
var fs = require("fs");
const terms = {
  SERVICETAGFILENAME: "",
  BUSUNITID: "",
  GPO_ORDER: "",
  SALESORDNUM: "",
  CUSNUM: "",
};
const res = [];
const { KmpPatternMatching } = require("../Kmp_Algorithm/kmpAlgo");

const parsing = async (distFolder, fileLocation) => {
  var data = fs.readFileSync(`./${distFolder}/${fileLocation}`, "utf8");
  for (const term in terms) {
    var match1 = await KmpPatternMatching(data, term);
    var match2 = await KmpPatternMatching(data, `/${term}`);
    terms[term] = data.substring(
      match1[0] + term.length - 1 + 2,
      match2[0] - 1
    );
  }

  return terms;
};

module.exports = { parsing };
