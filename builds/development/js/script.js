$(document).ready(function () {
	$(window).scroll(function(){
		if($(window).scrollTop() > 200) {
			$('nav').addClass('navbar-dark');
		} else {
			$('nav').removeClass('navbar-dark');
		}
	});
});