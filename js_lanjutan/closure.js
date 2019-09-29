// execution context
// console.log(nama);
// var nama = 'asdasd';

// creation phase pada global context
// js mencari keyword var = undefined
// nama function = fn()
// js melakukan hoisting // menaikkan variabel n fungsi jadi yg paling atas utk dieksekusi
// window = global object
// this = window

// execution phase
console.log(sayHi());	
var nama = 'ventus';
var umur = 23;


function sayHi(){
	 // console.log(`Hi, nama saya ${nama}, umur ${umur} tahun.`);
	  return `Hi, nama saya ${nama}, umur ${umur} tahun.`;
}
console.log('============================')

// fungsi mengembalikan nilai, atau ada keyword return sehingga tidak ada undefined
// function membuat Local Execution Contexr
// yang didlmnya terdapat creation n execution phase
// window
// arguments //object di dlm fungsi
// hoisting

var data1 = 'asmdkamsd';
var data2 = '@amkd';

function cetakURL(data2){
	console.log(arguments);
	var IG = 'https://instagram.com/';
	return IG+data2;
}

console.log(cetakURL('@asmdkasd','@asmdkams'));

console.log('============================')
/*
fungsi mencari local variabel, jika tidak ada mencari di argument,
jika tidak ada maka mencari di global contexr, jk tdk ada maka ERROR
*/ 


function a(){
	console.log('ini a');

	function b(){
		console.log('ini b');

		function c(){
			console.log('ini c');
		}
		c();
	}
	b();
}
a();

console.log('============================')

function satu(){
	var data3 = 'ehehhe';
	console.log(data3);
}

function dua(){
	console.log(data3);
}

console.log(data3);
var data3 = 'ventus';
satu();
dua('olip');
console.log(data3);

// ouputnya undefined, ehehhe , ventus, ventus































