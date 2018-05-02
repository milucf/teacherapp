$(document).ready(function(){

    loadAllData();

    $("button").on("click",function(){
        if($("#value").val()!="")
       $.get("filter/"+$("#ddField").val()+"/"+$("#ddOp").val()+"/"+$("#value").val(), function(data) {
        loadingData(data);
       });
       else
       $.get("/select", function(data) {
        loadingData(data);
      });
    });

    function loadAllData(){
        $.get("/select", function(data) {
          loadingData(data);
        });
    }
function loadingData(data){
    var grid="";
    if(data.length>0){
    for(var i=0;i<data.length;i++){
        grid=grid+"<tr><td>"+data[i].first_name+"</td>";
        grid=grid+"<td>"+data[i].last_name+"</td>";
        grid=grid+"<td>"+data[i].dob.toString().substr(0,10)+"</td>";
        grid=grid+"<td>"+data[i].address+"</td>";
        grid=grid+"<td>"+data[i].city+"</td>";
        grid=grid+"<td>"+data[i].county+"</td>";
        grid=grid+"<td>"+data[i].state+"</td>";
        grid=grid+"<td>"+data[i].zip+"</td></tr>";
    }
}
else
grid="<tr><td colspan=\"8\">No Result To Show</td></tr>";

$("#gridview").html(grid);
}

});