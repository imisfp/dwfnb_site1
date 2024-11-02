const swiper = new Swiper(".swiper", {
  effect: "fade", // 페이드 효과
  fadeEffect: {
    crossFade: true, // 슬라이드 간 크로스 페이드
  },
  autoplay: {
    delay: 5000, // 슬라이드 전환 간격 (3초)
    disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 계속
  },
  speed: 3000,
  loop: true, // 루프 설정으로 끝없이 전환
});
