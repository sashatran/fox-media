$(document).ready(function(){
	$(".menu > .navi").click(function(){
  	$(this).toggleClass("active");
})

$("#about").click(function(){
  $(".about").toggleClass("show");
});

$("#contact").click(function(){
  $(".contact").toggleClass("show");
});

$("#service").click(function(){
  $(".service").toggleClass("show");
})


setTimeout(function(){
  $(".hero").addClass("load");
}, 500)
})