$(document).ready(function() {
  const swiper = new Swiper('.pc-main-swiper-box .pc-main-swiper', {
    effect: 'fade',         // 페이드 효과
    fadeEffect: {
      crossFade: true       // 슬라이드 간 크로스 페이드
    },
    autoplay: {
      delay: 5000,          // 슬라이드 전환 간격 (3초)
      disableOnInteraction: false // 사용자 상호작용 후에도 자동 재생 계속
    },
    speed: 3000,
    loop: true,             // 루프 설정으로 끝없이 전환
  });

  const swiper2 = new Swiper(".brand-swiper", {
    // Optional parameters
    loop: true,
  
    slidesPerView: 1,
  
    breakpoints: {
      // 화면 너비가 640px 이상일 때
      640: {
        slidesPerView: 2,
        spaceBetween: 2
      },
      // 화면 너비가 768px 이상일 때
      768: {
        slidesPerView: 3,
        spaceBetween: 4
      },
      // 화면 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 4,
        spaceBetween: 6
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 8
      }
    },
    navigation: {
      nextEl: ".pc-brand-slider .my-swiper-button-next",
      prevEl: ".pc-brand-slider .my-swiper-button-prev"
    }
  });

  const swiper3 = new Swiper(".dw-social .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    autoplay: {
      delay: 3000, // 슬라이드 간 전환 시간 (밀리초 단위)
      disableOnInteraction: false // 사용자 상호작용 후에도 자동 재생 유지
    },
  
    // If we need pagination
    pagination: {
      el: ".dw-social .swiper-pagination",
      clickable: true
    }
  });

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
})