$(function(){
	var $ran = $("#range");
	var $age = $("#age");
	$age.html('0');
  
	$("#range").change(function(){
	  $age.html($ran.val());
	});
  
  });