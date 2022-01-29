const cron = require('node-cron');

const {
    createNode
} = require("../TrieDs/trieNode")
const {
    decompression
} = require("../Decompress/decompress2")

const root = new createNode("");

const testFolder = "./SampleData";
const distFolder = "dist";

cron.schedule('* * * * *', async function () {
    console.time("crone1")
    console.log('running a task every minute');
    await decompression(testFolder, distFolder, root)
    console.timeEnd("crone1")

});

module.exports = {root}