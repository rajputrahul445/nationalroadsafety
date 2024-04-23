
$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $(".collapse").toggleClass("active");
    $(".overLay").toggleClass("active");
  });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});



