


$(window).on('load', function() {
	$('.flexslider').flexslider();
     $("#header").load("header.html"); 
 	 $("#footer").load("footer.html"); 

	setTimeout(function(){
 		$('body').addClass('loaded');
	}, 4000)
});



	

