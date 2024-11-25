$(document).ready(function(){
  // 푸터 패밀리사이트 버튼
  $(".lg-box").click(function () {
    $(".site-box").addClass("active");

    return false;
  });

  $("body").click(function () {
    $(".site-box").removeClass("active");
  });

  // -------- 카테고리 ---------
  // 모바일 사이드바 열기
  function MobileSideBar__show() {
    // 모바일 사이드바 보여지도록 처리
    $(".mobile-side-bar").addClass("active");
    // html, body 수준에서 스크롤바 잠금
    $("html").addClass("mobile-side-bar-actived");
  }

  // 모바일 사이드바 닫기
  function MobileSideBar__hide() {
    // 모바일 사이드바 숨겨지도록 처리
    $(".mobile-side-bar, .mobile-menu-box-1 ul > li ").removeClass("active");
    // html, body 수준에서 스크롤바 잠금해제
    $("html").removeClass("mobile-side-bar-actived");
  }

  // 三 버튼 클릭시 모바일사이드바 보여지도록 설정
  $(".mobile-top-bar__btn-show-side-bar").click(MobileSideBar__show);
  // 모바일사이드바 혹은 x버튼을 클릭하면 모바일사이드바가 숨겨지도록 설정
  $(".mobile-side-bar, .mobile-side-bar__btn-close").click(MobileSideBar__hide);

  // 모바일사이드바의 콘텐트 부분을 클릭해도 모바일사이드바 숨겨지지 않도록 설정
  $(".mobile-side-bar__content").click(function () {
    return false;
  });

  // 모바일 사이드바의 메뉴 아이템이 클릭되면 해야할 일
  $(".mobile-menu-box-1 ul > li").click(function () {
    // 클릭된 li 요소
    const $this = $(this);

    // 클릭된 요소의 형제의 후손중에서 활성화된 li 요소들 비활성화
    $this.siblings(".active").find(".active").removeClass("active");
    // 클릭된 요소의 형제를 비활성화
    $this.siblings(".active").removeClass("active");

    // 현재(클릭된) li가 활성화 되었다면
    if ($this.hasClass("active")) {
      // 현재 li의 후손들 중 활성화된 요소를 비활성화
      $this.find(".active").removeClass("active");
      // 현재 li를 비활성화
      $this.removeClass("active");
    } else {
      // 현재 li를 활성화
      $this.addClass("active");
    }
  });

  // 서브 메뉴가 클릭되어도 해당 서브메뉴가 닫히지 않도록 설정
  $(".mobile-menu-box-1 > ul ul").click(function () {
    return false;
  });

});

