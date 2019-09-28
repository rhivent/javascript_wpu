
// function ubahWarna(){
// 	document.body.style.backgroundColor = 'lightblue';
// }

// const p4 = document.querySelector('.p4');
// p4.addEventListener('click',function() {
// 	const ul = document.querySelector('section#b ul');

// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('Ini adalah list baru');

// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// })

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
// 	p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
// 	p3.style.color = 'red';
// }
// =======// event yg kedua yg akan di eksekusi 
// ======//krn event kedua menimpa yg pertama


// ini contohnya
p3.addEventListener('click',function(){
	p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('click',function(){
	p3.style.color = 'red';
})

// Daftar event
// Mouse event
// Keyboard event
// Resources event
// Focus event
// View event
// Form event
// CSS Animation & Transition event
// Drag & Drop event, dll

// Mouse Event 
// click
// dbclick
// mouseover
// mouseenter
// mouseleave
// mouseup
// wheel
// ....

// Form Event (reset, submit)















