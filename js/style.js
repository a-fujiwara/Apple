var PAGE = 0,
    TIMER;

$(function(){

	
	lastPage = parseInt($("#slide img").length-1);

	$('#slide img').css('display','none');
	$('#slide img').eq(PAGE).css("display","block");

	function changePage(){
      $("#slide img").fadeOut(1000);
      $("#slide img").eq(PAGE).fadeIn(1000);
    };

	function startTimer(){
	TIMER = setInterval(function(){
          if(PAGE === lastPage){
                    PAGE = 0;
                    changePage();
          }else{
                    PAGE ++;
                    changePage();
     };
     },4000);
}
	function stopTimer(){
		clearInterval(TIMER);
}

startTimer();

});

$(function() {
    $("#slide a").mouseover(function(){
    $(".common_button").css("display","block");
  }).mouseout(function(){
    $(".common_button").css("display","");
  });
});


$(function(){
  $('.btnHamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.nav a').toggleClass('active');
  });
});

$(function(){
  $('.btnHamburger').toggle(
    function(){
      $("header").css('height','500px');
    },
    function(){
      $("header").css('height','50px');
    }
);

  $('.dropdown').on('click', function(){
    $(this).next('.menu_wrap').slideToggle();
  });
});

$(function(){
  $('.dropdown').on('click', function(){
    $(this).toggleClass('rotate');
  });
});


