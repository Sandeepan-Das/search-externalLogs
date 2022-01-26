function autocomplete(prefix, root) {
  var predictions = [];

  for (i = 0; i < prefix.length; i++) {
    root = root.map[prefix[i]];
    if (root == null) return predictions;
  }

  searchSuffix(prefix, root, predictions);
  return predictions;
}

function searchSuffix(word, root, predictions) {
  console.log(root);
  if (root === null) return;

  if (root.isEnd) predictions.push(word);

  for (const val in root.map) {
    searchSuffix(word + root.map[val].ch, root.map[val], predictions);
  }
}
module.exports = { autocomplete, searchSuffix };
// const trie=new createNode('')
// insert("abe",trie,"abc123.zip/abscu1")
// insert("abc",trie,"abc123.zip/abscu1")
// autocomplete("ab",trie)
// ['abe', 'abc']
