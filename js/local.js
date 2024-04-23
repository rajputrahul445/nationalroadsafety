
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


// Get the button
let mybutton = document.getElementById("backTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
