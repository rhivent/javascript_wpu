const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');
container.addEventListener('click', function(e){
	// cek apakah yg di klik adalah thumb
	if(e.target.className == 'thumb'){
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		}, 500);

		thumb.forEach(function(thumbOne){
			if(thumbOne.classList.contains('active')){
				thumbOne.classList.remove('active');
			}
			thumbOne.className = 'thumb';
		})
		e.target.classList.add('active');
	}

})