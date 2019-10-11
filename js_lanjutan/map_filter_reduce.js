// filter itu menyarin
// map itu memotong menjadi array2 baru
// reduce menggabungkan hasil map menjadi 
// product baru gabungan array hasil potongan map
// reduce menghasilkan array yg baru n nantinya
// ketiga bisa digabungkan dengan menggunakan 
// method chaining

const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// find angka >=3
// for()
const newAngka = [];
for(let k = 0; k < angka.length; k++){
	if(angka[k] >= 3){
		newAngka.push(angka[k]);
	}
}
console.log(newAngka);

// filter 
// utk tiap2 a elemnt dari angka kita filter
const newAngka1 = angka.filter(a => a >= 3);
console.log(newAngka1);


// map
// kalikan semua angka dngn 2
const newAngka2 = angka.map(a => a*2);
console.log(newAngka2);

// reduce ==> punya argument : accumulator (hasil dari proses), current value (elemnt array yg sedang dilooping)
// menjumlahkan seluuruh elemt pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9

// ada nilai awal jika tidak ditulis adalah 0  jika diubah maka ada nilai awal bukan 0 misal saya pakai angka 5
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka3 = angka.reduce((accumulator,currentValue) => accumulator + currentValue , 5);
console.log(newAngka3);


// method chaining 
// menggabungkan HOF diatas dalam 1 function tanpa ditampung ke variabel

// Cari angka > 5
// kalikan 3
// kemudian seluruhnya dijumlahkan.

const hasil = angka.filter(a => a > 5) // 8,9,9
				   .map(a => a*3) //24,27,27
				   .map(a => a/2) //24,27,27
				   .reduce((accumulator,currVal) => accumulator + currVal);

console.log(hasil); 










