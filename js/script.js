$(document).ready(function(){
	$('.stocks__thumb a').click(function(e){
		e.preventDefault();
		$('.stocks__main img').attr("src", $(this).attr("href"));
	})
})
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
});
