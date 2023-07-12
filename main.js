
document.addEventListener("DOMContentLoaded", () => {
	console.log('we made it🎉');

	window.setTimeout(function() {
    document.querySelector('.fade-overlay').classList.add('faded')
  }, 230);

  window.setTimeout(function() {
    document.querySelector('iframe').style.transform = 'scale(1)'
  }, 1000);


	let cursor = document.querySelector('.basketball');

	document.onmousemove = function(e) { 
	    let x= e.clientX;
	    let y= e.clientY;

	    cursor.style.left= x+'px';
	    cursor.style.top= y+'px';
	};

	const closeButton = document.getElementById('closeToggle');
	const mobileMenu = document.querySelector('.mobile-menu');
	const menuToggle = document.getElementById('menuToggle');

	closeButton.addEventListener('click', function(){
		mobileMenu.classList.add('closed');
	})

	menuToggle.addEventListener('click', function(){
		mobileMenu.classList.remove('closed');
	})
})

