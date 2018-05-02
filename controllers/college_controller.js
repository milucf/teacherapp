var express = require("express");
var college=require("../models/college.js");

var router=express.Router();
router.get("/select",function(req,res){
    college.all(function(data){
        res.json(data);
    });
});

router.get("/filter/:field/:operator/:value",function(req,res){
    college.filter(req.params.field,req.params.operator,req.params.value,function(data){
        res.json(data);
    });
});


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });


module.exports = router;