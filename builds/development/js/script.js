$(document).ready(function () {
	$(window).scroll(function(){
		if($(window).scrollTop() > 40) {
			$('nav').addClass('navbar-dark');
		} else {
			$('nav').removeClass('navbar-dark');
		}
	});
});