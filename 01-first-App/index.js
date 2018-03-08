$(function(){
  var $width = $('.width');
  var $height = $('.height');
    $calc.click(function(){
       var width = $width.val();
       var height = $height.val();
      $('.perimeter').val(perimeter(width,height));
      $('.area').val(area(width,height));
    });
    $width.focusout(function(){
      validate('.width');
    });
$height.focusout(function(){
  validate('.height');
});

function perimeter(x,y){
  var lenX=(x.split('.').length ===2)?x.split('.')[1].length:0;
  var lenY=(y.split('.').length ===2)?y.split('.')[1].length:0;
  var max = Math.max(lenX,lenY);
  return (x*(10**max)+y*(10**max))*2/(10**max);
}
function area(x,y){
  var lenX=(x.split('.').length ===2)?x.split('.')[1].length:0;
  var lenY=(y.split('.').length ===2)?y.split('.')[1].length:0;
  var max = Math.max(lenX,lenY);
  return (x*(10**max)+y*(10**max))/(10**max);
}
function validate(field){
  var $data = $(field),
      $message = $(field+'-validate'),
      label = $(field).attr('data-label');

  if($data.val() === ''){
    $message.html(label + '不能为空！');
    $data.select();
    return;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
    $message.html(label + '必须是数值');
    $data.select();
    return;
  }

  if(window.Number($data.val())<0){
    $message.html(label + '必须大于零');
    $data.select();
    return;
  }

  $message.html('');
}
});
