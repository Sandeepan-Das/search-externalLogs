const cron = require('node-cron');
const deleteDir = require("del");
const distFolder = "dist";

cron.schedule('00 00 * * *', async function () {
    console.time("crone2")
    console.log('running delete');
    await deleteDir(distFolder)
    console.timeEnd("crone2")

});

// module.exports = {root}