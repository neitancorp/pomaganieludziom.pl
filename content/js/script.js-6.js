$(function() {
	$('.flexslider').flexslider( {
		animation: "slide",
		start: function(slider){
			$('body').removeClass('loading');
		}
	});

	$('.to-form').on('click', function(e){
		e.preventDefault();
		var posTop = $("#block9").offset().top;
		$('html, body').animate({scrollTop: posTop}, 400);
	})
});
