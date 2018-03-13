var bar;
function progressBar(){
 var pg = document.getElementById('pg');
 bar = setInterval(function(e){
 if(pg.value!=100) pg.value++;
    else pg.value=100;
  },100);
}
function pause(){
  var pg= document.getElementById('pg');
  var stop = (pg.value-100)>0?bar-100:0;
    for(var i = stop;i<=bar;i++){
  clearInterval(i); 
}
}
function reset(){
  var pg = document.getElementById('pg');
  pg.value=0;
  bar = setInterval(function(e){
    if(pg.value!=100) pg.value++;
    else pg.value=100;
  },100);
}
