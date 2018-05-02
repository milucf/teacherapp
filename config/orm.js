var connection = require("../config/connection.js");

var orm={

    selectAll:function(cb){
    var queryString = "SELECT * FROM names as n inner join sampleData as sd on n.id=sd.id ;";
    connection.query( queryString,function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },

   selectOnes:function(field,operator,value,cb){
     var op="";
     var fld="";
     switch(operator){
       case "Equal": op="=";break;
       case "Not Equal":op="<>";break;
       case "Greater Than": op=">";break;
       case "Less Than": op="<";break;
       case "Include": op=" like ";value="%"+value+"%";break;
     }
     switch(field){
      case "Age": fld="dob";break;
      case "State": fld="state";break;
      case "State": fld="City";break;
      case "County": fld="county";break;
      case "Zipcode": fld="zip";break;
      
    }
     var queryString = "SELECT * FROM names as n inner join sampleData as sd on n.id=sd.id where "+fld+op+"? ;";
     connection.query(queryString,[value.toString()], function(err, result) {
      if (err) throw err;

      cb(result);
    });
   },

};

module.exports = orm;