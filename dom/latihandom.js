const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function (){
	// alert('ok');
	// document.body.style.background = 'lightblue';
	document.body.classList.toggle('biru_muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click',function(){
	// nilai random 1-255 
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.background = `rgb(${r},${g},${b})`;
	// document.body.classList.toggle('biru_muda');
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
	let r = sMerah.value;
	let g = sHijau.value;
	let b = sBiru.value;
	document.body.style.background = `rgb(${r},${g},${b})`;
})

sHijau.addEventListener('input', function(){
	let r = sMerah.value;
	let g = sHijau.value;
	let b = sBiru.value;
	document.body.style.background = `rgb(${r},${g},${b})`;
})

sBiru.addEventListener('input', function(){
	let r = sMerah.value;
	let g = sHijau.value;
	let b = sBiru.value;
	document.body.style.background = `rgb(${r},${g},${b})`;
})

document.body.addEventListener('mousemove', function(e){
	// mouse
	let x = e.clientX;
	let y = e.clientY;
	// console.log(x,y);

	// lebar window
	// console.log(window.innerWidth);

	let lebarWindow = window.innerWidth;

	const r = Math.round((x / lebarWindow) * 255);
	const g = Math.round((y / lebarWindow) * 255);
	const b = Math.round(Math.random() * 255 + 1);

	document.body.style.background = `rgb(${r},${g},${b})`;

});
function mainSuwitJawa(){
	var tanya = true;
	while( tanya ) {
	    // menangkap pilihan player
	    var p = prompt('pilih : gajah, semut, orang');

	    // menangkap pilihan computer
	    // membangkitkan bilangan random
	    var comp = Math.random();

	    if( comp < 0.34 ) {
	        comp = 'gajah';
	    } else if( comp >= 0.34 && comp < 0.67 ) {
	        comp = 'orang';
	    } else {
	        comp = 'semut';
	    }

	    // menentukan rules
	    var hasil = '';
	    if( p == comp ) {
	        hasil = 'SERI!';
	    } else if( p == 'gajah' ) {
	        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	    } else if( p == 'orang' ) {
	        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	    } else if( p == 'semut' ) {
	        hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
	    } else {
	        hasil = 'memasukkan pilihan yang salah!';
	    }

	    // tampilkan hasilnya
	    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

	    tanya = confirm('lagi?');
	}

	alert('terimakasih sudah bermain.');
}


























