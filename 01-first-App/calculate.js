$(function(){
    $("#wide").blur(function(){
       if($("#wide").val()==""){

         $("#wide").next("span").html("输入不能为空！");

       } 
    });

  $("#add").attr("disabled","false").css("background","#E0E0E0");
  $("#mutiply").attr("disabled","false").css("background","#E0E0E0")
  $("#btn").click(function(){
     var w = $("#wide").val();
     var h = $("#high").val();
     $("#add").val(w*2+h*2);
     $("#mutiply").val(w*h);


  });
});
