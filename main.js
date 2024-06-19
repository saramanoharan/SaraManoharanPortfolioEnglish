jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});
// light & dark

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  const lightIcon = themeToggle.querySelector('.theme-icon:first-child');
  const darkIcon = themeToggle.querySelector('.theme-icon:last-child');
  lightIcon.style.opacity = 1 - lightIcon.style.opacity;
  darkIcon.style.opacity = 1 - darkIcon.style.opacity;
});

// Set initial theme based on user preference or device settings
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  lightIcon.style.opacity = 0;
  darkIcon.style.opacity = 1;
}

