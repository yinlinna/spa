var time = 10;
var timehwnd = setInterval('Countdown()',1000);

function Countdown(){
  time--;
  if(time == 0){
    
    $('#timer').html('同意');
    $('#timer').removeAttr('disabled');
    clearInterval(timehwnd);
    $('#timer').click(function(){
      alert('hello!');
    });
  }else{
    $('#timer').html('同意('+time+')');
  }
}
