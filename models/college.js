var orm=require("../config/orm.js");

var college={
    all:function(cb){

        orm.selectAll(function(res){
           cb(res);
        });
    },

    filter:function(field,operator,value,cb){
        orm.selectOnes(field,operator,value,function(res){
            cb(res);
        });
    },

}

module.exports=college;