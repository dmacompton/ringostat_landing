$(document).ready(function () {
	$(window).scroll(function(){
		if($(window).scrollTop() > 200) {
			$('#navbar').addClass('dma');
		} else {
			$('#navbar').removeClass('dma');
		}
	});
});