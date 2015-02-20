var localUrl = 'http://localhost:3000/';
var WS = {


   insertEmp : function(){
      
   $.ajax({
       
       url: localUrl + 'insertEmp',
       type:'POST',
       data:JSON.stringify($("#empName").val()),
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (response, textStatus, jqXHR) {
             
             console.log(response);
       },
       error: function (xhr, ajaxOptions, thrownError) {
     }
    })
       
   }


}