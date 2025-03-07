var express = require("express");
var router = express.Router();

router.use("/home", require(__dirname + "/homecontroller"));

router.use("/", require(__dirname + "/admin/admincontroller"));


router.get("/", function(req, res) {
    res.render("index.ejs");
});
module.exports = router;