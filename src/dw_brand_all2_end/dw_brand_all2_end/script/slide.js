$(document).ready(function () {
	const brandSwiper = new Swiper(".brand-swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// // If we need pagination
		// pagination: {
		//   el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: ".my-swiper-button-next",
			prevEl: ".my-swiper-button-prev"
		}

		// // And if we need scrollbar
		// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },
	});
	$(".swiper-slide >.br_tab").first().addClass("active-tab");
	$(".pc-brand-contents>ul>li").first().addClass("active-contents").show();

	$(".swiper-slide > .br_tab").on("click", function () {
		$(".swiper-slide > .br_tab").removeClass("active-tab");
		$(this).addClass("active-tab");
		$(".pc-brand-contents>ul>li").removeClass("active-contents").hide();

		const contentClass = $(this)
			.attr("class")
			.split(" ")[1]
			.replace("_tab", "_contents");
		$("." + contentClass)
			.addClass("active-content")
			.show();
	});
});
