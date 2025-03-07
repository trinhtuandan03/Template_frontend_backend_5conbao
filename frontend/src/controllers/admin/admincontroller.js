var express = require("express");
var router = express.Router();
var User = require("../../model/user");

router.get("/HomeManage/Index", function(req, res) {
    res.render("admin/HomeManage/Index.ejs");
});

router.get("/HomeManage/widgets", function(req, res) {
    res.render("admin/HomeManage/widgets.ejs");
});






module.exports = router;