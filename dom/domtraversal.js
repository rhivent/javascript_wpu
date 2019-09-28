const close = document.querySelectorAll('.close');
// for (var i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click',function(e){
// 		// card[i].style.display = 'none';
// 		// e.preventDefault();
// 		// console.log(e.target);
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

// close.forEach(function(el){
// 	el.addEventListener('click',function(e){
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 		e.stopPropagation()
// 	})
// })

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card){
// 	card.addEventListener('click',function(e){
// 		alert('ok');
// 	})
// });

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling); // span
// console.log(nama.previousElementSibling); // null 



const container = document.querySelector('.container');
container.addEventListener('click', function(e){
	if(e.target.className == 'close'){
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}
});























