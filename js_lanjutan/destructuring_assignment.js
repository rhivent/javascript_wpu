/*
	Destructuring variable / assignment
*/ 
// Array
const coba = ['satu','dua','tiga'];

// const [a,b,c] = coba;
// skip 1 items just make it blank without anything
const [a,,c] = coba;
console.log(a);
// console.log(b);
console.log(c);

// swap array : memakai let utk merubah isi variabel
let d = 1;
let e = 2;
console.log(`ini variabel d: ${d}`);
console.log(`ini variabel e: ${e}`);
[d,e] = [e,d];
console.log(`ini swap d: ${d}`);
console.log(`ini swap e: ${e}`);

// return value pada function
function coba1 () {
	return [1,2];
}

const [data1] = coba1();
console.log(`ini data1 : ${data1}`);


// Rest parameter
const [data2,...values] = [1,2,3,4,5,6,7];
console.log(`ini data2 : ${data2}`);
console.log(`ini dari rest params: ${values}`);


// OBJECT
const mhs = {
	nama: 'RIventus AHA',
	umur:24,
	email:'ventusmn@gmail.com'
};

/* penamamaan harus sesuai dengan key dlm object tidak seperti array */
const {nama,umur,email} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

/* Assignment tanpa deklarasi object dengan () */ 
({obj1,obj2} = { obj1: 'TEST obj1',obj2: 'TEST obj2' });
console.log(obj1);


/* mengubah menjad nama lain dari nama properti yg panjang */
// assign ke variabel baru
const mhs2 = {
	namaMHS:'Riventus AHA',
	umurMahasiswa:24
}

const { namaMHS:n ,umurMahasiswa:u } = mhs2;
console.log(`${n} dengan umur ${u}`);


// membrikan default value pada destructuring
const mhs3 = {
	namamhs3:'Riventus AHA',
	umurmhs3:24
}

const { namamhs3:nm ,umurmhs3:um, emailmhs3:em = 'email@default.com' } = mhs3;
console.log(`${nm} dengan umur ${um} email: ${em}`);

/* REST params di object */
 const mhs4 = {
	namamhs4:'Riventus AHA',
	umurmhs4:24
}

const { namamhs4:nm4 , ...value} = mhs4;
console.log(`${nm4} dengan umur ${value.umurmhs4}`);


// Mengambil field pada object, seteleh dikirim sebagai parameter utk functions
const dataAPI = {
	id:123,
	namaAPI:'Data ini dari API',
	datalain: 'Ini data-data lain'
}

function getIdAPI({id,namaAPI}){
	return {id,namaAPI};
}

console.log(getIdAPI(dataAPI));