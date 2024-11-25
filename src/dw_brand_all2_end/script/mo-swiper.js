// 스와이퍼 탭메뉴
$(document).ready(function () {
	const mobrandSwiper = new Swiper(".mo_brand_all-box .brand-swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// // If we need pagination
		// pagination: {
		//   el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: ".mo-swiper-button-next",
			prevEl: ".mo-swiper-button-prev"
		}

		// // And if we need scrollbar
		// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },
	});
	// 첫화면에 첫 브랜드 보임
	$(".mo_brand2_all-box .brand-swiper .swiper-slide >.br_tab").first().addClass("mo-active-tab");
	$(".mo_brand-contents>ul>li").first().addClass("active-contents").show();
	$(".mo_brand-contents>ul>li").not(":first").hide();
	// 클릭이벤트시 글씨 색 변경 + 컨텐츠 나타나기
	// mo-active-tab: 글씨 색 변경 / active-contents: 컨텐츠 나타나기
	$(".mo_brand_all-box .brand-swiper .swiper-slide>.br_tab").on("click", function () {
		$(".mo_brand_all-box .brand-swiper .swiper-slide>.br_tab").removeClass("mo-active-tab");
		$(this).addClass("mo-active-tab");
		$(".mo_brand-contents>ul>li").removeClass("active-contents").hide();

		const contentClass = $(this)
			.attr("class")
			.split(" ")[1]
			.replace("_tab", "_contents");
		$("." + contentClass)
			.addClass("active-content")
			.show();
	});
	// 스와이퍼 페이지네이션 클릭시 글씨 색 초기화
	$('.mo-swiper-tab-all-box .brand-swiper>.mo-swiper-button-prev, .mo-swiper-tab-all-box .brand-swiper>.mo-swiper-button-next').click(function(){
		$(this).removeClass("mo-active-tab");
	});

	// 스와이퍼 2
	const movidSwiper2 = new Swiper('.mo_brand2_all-box .vid-swiper', {
		centeredSlides: true,
		slidesPerView: 1.0001,
		direction: 'horizontal',
		loop: true,
		spaceBetween:40,
		autoplay: {
		  delay: 2000,
		  disableOnInteraction: true
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
});
