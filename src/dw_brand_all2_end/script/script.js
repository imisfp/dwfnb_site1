
$(document).ready(function(){
  // 최상단 이동 애니메이션
  $(window).scroll(function(){
    if ($(this).scrollTop() > 30) {
      $('.pc_brand-top').fadeIn();
    } else{ $('.pc_brand-top').fadeOut();}
  })
  $('.pc_brand-top').click(function(){
    $('html,body').animate({
      scrollTop : 0
    }, 400);
    return false;
  });
  // 푸터
  $(".dw-group").click(function () {
    if ($(".group-text-box, .dw-group-con").hasClass("active")) {
      $(".group-text-box, .dw-group-con").removeClass("active");
    } else {
      $(".group-text-box, .dw-group-con").addClass("active");
    }
  });
  
  $(".dw-group-con").click(function () {
    return false;
  });
});