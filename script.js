// membuat objeck

// Object literal
let mhs = {
	nama : "Riventus",
	nim : '12033',
	email:'riventus@gmail.com',
	jurusan : 'SI'
}

let mhs2 = {
	nama : "Riventus1",
	nim : '120331',
	email:'riventus1@gmail.com',
	jurusan : 'SI'
}

function declaration(nama,nim,email,jurusan){
	let mhs = {};
	// key = argumen/param didlm function
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusan = jurusan;

	return mhs;
}	

let mhs3 = declaration('riventus3','123123','makdma@mail.com','SI');

// Constructor
// khusus utk membuat object
// mirip function declaration
// membuat function constructor huruf pertama nama function harus Capital
function Mahasiswa(nama,nim,email,jurusan){
	// let this = {};
	// key = argumen/param di dlm function
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}
// constructor harus ada keyword new (*WAJIB)
let mhs4 = new Mahasiswa('riventus4','1203123','sakmdka@mail.com','SI')

// cara membuat dan cara memanggil berbeda maka contextnya berbeda
// hal ini terpakai ketika kita belajar memahami keyword "this"

// cara 1 - function declaration
function halo (){
	console.log('halo1');
}
halo();

// cara 2 - objek literal
let obj = {};
obj.halo = () => {
	console.log('halo2');
}
obj.halo();

// cara 3 - constructor
function Halo(){
	console.log('halo3');
}
new Halo();

















