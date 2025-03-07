var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    res.render("index.ejs");
});

router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/admin/widget", require(__dirname + "/admin/widgetcontroller"));
module.exports = router;