function progressBar(){
  $("#progressbar").css("width","0px");
  var speed = 20;

var time = setInterval(function(){
    nowWidth = parseInt($("#progressbar").width());
    
    if(nowWidth<=200){
      barWidth = (nowWidth + 1)+"px";
      $("#progressbar").css("width",barWidth);
    }else{
      clearInterval(time);
    }
  },speed);
}
function pause(){
    progressBar();
}
