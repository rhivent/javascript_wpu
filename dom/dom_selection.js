// const judul = document.getElementById('judul'); // element
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Riventus';

// const p = document.getElementsByTagName('p'); // HTMLCollection
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// const p1 = document.getElementsByClassName('p1')[0]; // HTMLCollection
// p1.innerHTML = 'ini diubah dari javascript';

// p{ color:green; }
// section#b ul li:nth-child(2) { background-color: orange; }

// document.querySelector(); hasilnya -> element

// yg dicari disini adlaah selector CSS nya
// fungsinya utk mentarget file html yang sudah fix g mau diubah tpi ingin dimanipulasi
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); // yg dikembalikan element yg ditemukan pertama kali

// p.innerHTML = 'ini diubah dr javascript';

// document.querySelectorAll()
const p = document.querySelectorAll('p'); // ypenya NodeList
// ada index karena semuanya array dari index awal 0
for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}


















