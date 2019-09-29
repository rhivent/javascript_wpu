// Cara utk membuat Object pd JS
// 1. Obj Literal
// Problem : tidak efektif utk objeck yg bnyak
let mahasiswa = {
	nama:'riventus',
	energi:10,
	makan:function(porsi){
		this.energi += porsi;
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);	
	},
	main : function (jam){
		this.energi -= jam;
		console.log(`${this.nama}, Energimu berkurang menjadi ${this.energi}`);
	}

}

// 2. function declaration
// Problem : ada duplikasi ke dalm memori sehingga membuat kembali semua yg ada dlm
// fungsi dan menyimpan dlm memori
// shg manajemen memori tidak baik
// solusinya buat obj literal kemudian di panggil didlm obj dr function deklarasi

// solusi diatas juga kita harus mengubah 2 object, krn
// ketika sudah dihapus di dlm obj literal yg di pnggil di dlm obj deklarasi 
// harus dihapus juga
function mhs(nama,energi){
	let siswa = {};
	siswa.nama = nama;
	siswa.energi = energi;

	siswa.makan = mahasiswa.makan;
	siswa.main = mahasiswa.main;

	return siswa;
}

let ventus = mhs('ventus',10);
let olip = mhs('olip',10);


// 3. constructor

function Siswa(name,energy){
	this.nama = name;
	this.energi = energy;

	this.makan = function(porsi){
		this.energi += porsi
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);
	}

	this.main = function (jam){
		this.energi -= jam;
		console.log(`${this.nama}, Energimu berkurang menjadi ${this.energi}`);
	}

}

let riventus = new Siswa('ventus',10);
let olivia = new Siswa('olip',10);


// ===========================================================
// Object.create()
// ini berguna ketika kita ingin mebuat objek baru didlm fungsi deklarasi
// dengan menampung dari objek lain tanpa harus kita mengulang2 
// mengisiasi objek dlm fungsi

let mahasiswa2 = {
	nama:'riventus',
	energi:10,
	makan:function(porsi){
		this.energi += porsi;
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);	
	},
	main : function (jam){
		this.energi -= jam;
		console.log(`${this.nama}, Energimu berkurang menjadi ${this.energi}`);
	},
	tidur:function(jam){
		this.energi *= jam;
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);	
	}

}
// menghubungkan objek yg satu ke obj yg lain yg berisi objek
// yg dibtuhkan oleh si pemakai obj tsb
function mhs2(nama,energi){
	let siswa = Object.create(mahasiswa2);
	// object.create ini akan menghubungkan parent Object
	// object disini terhubung dngn objek mana
	siswa.nama = nama;
	siswa.energi = energi;

	return siswa;
}

let ventus2 = mhs2('ventus',10);
let olip2 = mhs2('olip',10);


// =========================================================
// Prototype
let mahasiswa3 = {
	nama:'riventus',
	energi:10,
	makan:function(porsi){
		this.energi += porsi;
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);	
	},
	main : function (jam){
		this.energi -= jam;
		console.log(`${this.nama}, Energimu berkurang menjadi ${this.energi}`);
	},
	tidur:function(jam){
		this.energi *= jam;
		console.log(`${this.nama}, Energimu bertambah menjadi ${this.energi}`);	
	}

}


// Prototypeple inheritance
function Mhs3(nama,energi){
	// constructor sudah ada parent object yg namanya prototype
	// let this = Object.create(Mhs3.prototype);
	this.nama = nama;
	this.energi = energi;

	// return siswa;
}
// mebuat object baru dari constructor dengan prototype
Mhs3.prototype.makan = function(porsi){
	this.energi += porsi;
	return `${this.nama}, Energimu bertambah menjadi ${this.energi}`;	
}

Mhs3.prototype.main = function(jam){
	this.energi += jam;
	return `${this.nama}, Energimu bertambah menjadi ${this.energi}`;
}

Mhs3.prototype.tidur = function(jam){
	this.energi += jam;
	return `${this.nama}, Energimu bertambah menjadi ${this.energi}`;
}

let ventus3 = new Mhs3('ventus',10);
let olip3 = new Mhs3('olip',10);


// // // VERSI Class

class Mhs4 {
	constructor (nama,energi){
		this.nama = nama;
		this.energi = energi;
	}

	makan(porsi){
		this.energi += porsi;
		return `${this.nama}, Energimu bertambah menjadi ${this.energi}`;	
	}

	main(jam){
		this.energi -= jam;
		return `${this.nama}, Energimu berkurang menjadi ${this.energi}`;
	}

	tidur(jam){
		this.energi += 0.6*this.energi;
		return `${this.nama}, Energimu bertambah menjadi ${Math.ceil(this.energi)}`;
	}
}


let ventus4 = new Mhs4('ventus',10);
let olip4 = new Mhs4('olip',10);








