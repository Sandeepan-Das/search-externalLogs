const insertZip = function (req, res){
    const { file } = req.body;
    console.log(file);
    res.send("inserted successfully.");
}

module.exports = insertZip;