
// closure merupakan kombinasi antara function 
// dan lingkungan leksikal (lexical scope) di dlm function tsb - Mozilla

// CLosure adalah sebuah function ketika memiliki akses ke parent scope-nya, 
// meskipun parent scope-nya sudah selesai dieksekusi - w3school

// closure adlaah sebuah function dikembalikan oleh function
// yg lain, yg memiliki akses ke lingkungan saat ia diciptakan. - Code Fellow

// CLosure adalah sebuah function yg sebelumnya sudah memiliki data,
// hasil dari function yg lain - Techsith

// Lexcial Scope 
console.log('======================== PART 2 =============================')
console.log('======================== CLosure =============================')
function init(){
	// let nama = 'Riventus'; //local variabel
	function tampilNama(nama){ // inner function (*closure)
		console.log(nama) //akses ke parent variable
	}
	return tampilNama;
}

function init2(){
	return function (nama){ // inner function (*closure)
		console.log(nama) //akses ke parent variable
	}
}

let panggilNama2 = init2();
panggilNama2('Olip');

let panggilNama = init();
panggilNama('Riventus');

// diatas adalah fungsi yg menarik 
// yang nantinya bisa utk function factory 
// dimn variable nama tidak harus Riventus tetapi tergantung 
// dr user memasukkan apa
// salah satu penggunaan dari closure

// kenapa menggunakan closure
// membuat function factories
// membuat seolah2 private method

function ucapSalam(waktu){
	return function(nama){
		console.log(`Halo, ${nama}, selamat ${waktu}, semoga harimu GGWP`);
	}
}

let pagi = ucapSalam('pagi');
let siang = ucapSalam('siang');
let malam = ucapSalam('malam');
// jadi diatas adalah factory function : membuat function 
// dari function yg lain

// console.dir(pagi);
// pagi('Riventus');
// siang('Olip');

let add = (function(){
	// nilai counter tetap private karena tidak terpengaruh dari luar
	// tapi nilainya tetep dipertahankan krn dia jadi closure
	let counter = 0;
	return function(){
		return ++counter;
	}
}())

// dijadikan IIFE(immediately invoke function expresion) utk 
// mengeksekusi saat pengammilang fungsi agar tidak membuat
// variable baru

// let a = add();
counter = 100;

console.log(add());
console.log(add());
console.log(add());

// let utk perulangan
// const gunakan saat nilainya g mau berubah tetapi 
// bisa dimanipulasi utk variable const dlm btk array dan object
// utk meminimalisir perubahan state
// program scalable maka 






































