jQuery(document).ready(function($){
	if ( $("#owl-slider").length ) {
		$("#owl-slider").owlCarousel({
			items : 10,
			itemsDesktop : [1000,10],
			itemsDesktop : [960,8],
			itemsDesktopSmall : [900,7],
			itemsDesktopSmall : [800,6],
			itemsTablet: [600,5],
			itemsMobile : [480,3],
			lazyLoad : true,
			navigation : false
		});											
	}
	if ( $("#player").length ) {
		setTimeout(function() { $( ".movie-loader" ).show() }, 1000);
		$(window).load(function(){
			$("a#playnow").css('visibility', 'visible');
			$( ".movie-loading" ).hide();
		});
	}
	$(".fullscreen").on('click', function() {
		screenfull.request( document.getElementById('player') );
	});
	$("a#playnow,.play").on('click', function() {
		screenfull.exit();
	});
	$(".inline").colorbox({inline:true, width:"40%"});
	if ( $("#login").length ) {
		$("#login-submit").click(function() {
			$(".login-wait,.login-error").hide();							 
			$(".login-wait").fadeIn().delay( 3000 );
			$(".login-wait").fadeOut();
			setTimeout(function() { $(".login-error").fadeIn(); $("#username, #password").val(""); $("#username").focus(); }, 3500);
		});
	}	
});	

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); 
    s -= h*3600;
    var m = Math.floor(s/60);
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}