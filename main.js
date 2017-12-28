//Welcome message animation
var type  = (function (){

	var i = 0;
	var text = ' Welcome To resTemplate';
	var welcome = document.getElementById('welcome');
	var speed = 100;
	typeWriter();

	function typeWriter(){
		if(i < text.length){
			welcome.innerHTML += text.charAt(i);
			i++;
		}
		setTimeout(typeWriter, speed);
	}

})();

//slide navigation
var nav;
document.getElementById('bars').onclick =function(){
		nav = document.getElementById('nav-list');
		nav.classList.toggle('slideIn');
	};

///Smooth scroll animation 
$(document).ready(function(){
		$('.slide-section').click(function(e){
			e.preventDefault();
			var linkHref = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(linkHref).offset().top

			}, 800);
		});

    


});
