const myFunc = (...args) =>{
	// didlm function ada variabel arguments; 
	// jika itu function bukan memakai arrow function
	return `${args}`;
	// return arguments;
}

console.log(myFunc(1,2,3,4,5));

function func1(){
	// return Array.from(arguments);
	return [...arguments];
}

console.log(func1(1,2,3,4,5));

// menjumlhkan seluruh elemen array pada params nya
function jumlahkan(...angka){
	// let total = 0;
	// for(const a of angka){
	// 	total += a;
	// }
	// return total;

	// HOF
	return angka.reduce((a,b) => a+b);

}

console.log(jumlahkan(1,2,3,4,5,6,7));


// array destructuring
const kelompok1 = ['Riventus','Armandus','Hamonangan','Aritonang'];
const [ketua,wakil,...anggota] = kelompok1;
console.log(ketua,wakil,anggota);

// object destructuring
const team = {
	pm:'Riventus',
	frontEnd:'Doddy',
	frontEnd2:'Armandus',
	backEnd:'Monang',
	ux:'Ari',
	devOps:'tonang'
};

const {pm,...myTeam} = team;
console.log(pm,myTeam);


// filtering dari param yg ada
function filterBy(type,...values){
	return values.filter(v => typeof v === type );
}

console.log(filterBy('boolean',1,2,'Riventus',false,10,true,'Monang'));


