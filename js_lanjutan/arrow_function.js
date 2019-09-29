// jika params hanya 1 g usah pake ()
// jika params > 1 maka harus pake ()
// jika isinya hnya return maka tidak usah ditulis kata return
// jika hanya return maka tidak perlu ada { }
let tampilPesan = (nama,umur) => `halo ${nama}, umur ${umur} tahun`;
	
	// console.log(`halo ${nama}, umur ${umur} tahun`)
	// alert(`halo ${nama}, umur ${umur} tahun`)

console.log(tampilPesan('Riventus','23'));

// code diatas adalah implisit return

// jika tanpa parameter maka wajib ada ()

const data = () => `Halo dunia`;
console.log(data());


// function map utk memetakan sebuah fungsi ke dlm array
let mhs = ['amskda','maskda asmdka','amsdkamsd asmdk'];

let jmlhuruf1 = mhs.map(function(nama){
	return nama.length;
})
console.log(jmlhuruf1);

// memetakan ke dlm array 
let jmlhuruf2 = mhs.map( nama => nama.length );
console.log(jmlhuruf2);

// memetakan ke dlm objek di arrow function memakai ({ obj })
// let jmlhuruf3 = mhs.map( nama => ({nama:nama,jmlhHuruf:nama.length}) )

// jika mengembalikan kedlm objek dimn property dan nilai memiliki nilai yg sama 
let jmlhuruf3 = mhs.map( nama => ({nama,jmlhHuruf:nama.length}) );

console.table(jmlhuruf3); // memetakan objek ke dlm objek

console.log('++++++++++++++++++++++++++++++++++++++++ PART 2 +++++++++++++++++++++++++++++++++++++++++');

// konsep this pada array function

// constructor function tidak bisa lgnsung mnjd array function
const Well = function(){
	this.name = 'adasda';
	this.age = 20;
	this.sayHi = () => {
		console.log(`Halo, nama saya ${this.name}, umur ${this.age} tahun`);

		// arrow function tidak mengenal konsep this
	}

}


const hehe = new Well();


const DPR = {
	name :'adasda',
	age : 20,
	sayHi : () => {
		console.log(`Halo, nama saya ${this.name}, umur ${this.age} tahun`);
		// hasilnya undefined
		// arrow function tidak mengenal konsep this
		console.log(this);
	}
};


const Kokok = function(){
	this.name = 'adasda';
	this.age = 20;
	this.sayHi = function(){
		console.log(`Halo, nama saya ${this.name}, umur ${this.age} tahun`);
		// arrow function tidak mengenal konsep this
	}
	// fungsi ini ke hoisting jika memakai fungsi deklarasi
	// setInterval(function(){
		// this disini scopenya global , outputnya window
		// console.log(this.umur++);
	// }, 500);


	// memakai arrow function === uncomment jika ingin melihat hasil

	// setInterval(() => {
		// arrow function tidk kenal this maka akan mencari ke arah lexical scope, 
		// this ini adalah objek Kokok
		// console.log(this.age++);
	// }, 500);

}

const koko = new Kokok();


const box = document.querySelector('.box');
box.addEventListener('click', function(){
	// console.log(this);
	let satu = 'size';
	let dua = 'caption';

	if(this.classList.contains(satu)){
		// syntax terbaru javascript
		[satu,dua] = [dua,satu];
	}

	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});



























