//---------------- navBar slideup & down (S) ------------------
// $(window).scroll(function() {
// 	let scroll = $(window).scrollTop();
// 	if (scroll >= 1100) {
// 		$("header").addClass("nav_up");
// 	} else {
// 		$("header").removeClass("nav_up");
// 	}
// });

let didScroll;
let lastScrollTop = 0;
let delta = 1100;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    let st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
  
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('nav_up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav_up');
        }
    }

    lastScrollTop = st;
}

//---------------- navBar slideup & down (E) ------------------
//-----------------footer dropdown menu (S) ------------------

$(".footer_dropdown_menu button").click(function(){
  if($(".footer_dropdown_menu .depth2").hasClass("active")){
    $(".footer_dropdown_menu .depth2, .footer_arrow").removeClass("active")
  }else{
    $(".footer_dropdown_menu .depth2, .footer_arrow").addClass("active")
  }
})

$(".footer_dropdown_menu button").blur(function(){
  $(".footer_dropdown_menu .depth2, .footer_arrow").removeClass("active")
})

//---------------- footer dropdown menu (E) ------------------
//---------------- 반응형 드롭다운 메뉴 (S) ------------------

$(".hamberger_btn").click(function(){
  if($("header").hasClass("active")){
    $("header, nav ,.right_btn").removeClass("active")
    $(".line1").removeClass("active1")
    $(".line2").removeClass("active2")
    $(".line3").removeClass("active3")
    $("header").off('scroll touchmove mousewheel'); 
  }else{
    $("header, nav ,.right_btn").addClass("active")
    $(".line1").addClass("active1")
    $(".line2").addClass("active2")
    $(".line3").addClass("active3")
    $("header").on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
      e.stopPropagation(); 
      return false;
      })
  }
})

$("header .depth1 > li > a").click(function(){
  let dropDownIndex = $(this).parent().index()
  if($(document).width() < 1025) {
    if($("header .depth1 > li").eq(dropDownIndex).children(".depth2").hasClass("active") ){
      $("header .depth1 > li").eq(dropDownIndex).children(".depth2").removeClass("active");
      $("header .depth1 > li").eq(dropDownIndex).children("a").addClass("arrow").removeClass("change");
    }else{
      $("header .depth1 > li").eq(dropDownIndex).children(".depth2").addClass("active");
      $("header .depth1 > li").eq(dropDownIndex).children("a").removeClass("arrow").addClass("change");
    }
  }
})

//---------------- 반응형 드롭다운 메뉴 (E) ------------------