const { autocomplete } = require("../Utills/AutoComplete/autocomplete");
const { root } = require("../Utills/Decompress/decompression");
const autoFill = async (req, res) => {
  try {
    var resp = [];
    const word = req.params.word;
    if (word != undefined) {
      resp = autocomplete(word, root);
    }
    res.status(200).send({ words: resp });
  } catch (error) {}
};

module.exports = autoFill;
