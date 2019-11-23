// array
const mhs = ['a','b','c'];

for(let i = 0; i < mhs.length; i++){
	console.log(mhs[i]);
}
console.log('================================');

mhs.forEach( (m,i)=> console.log(`${m} dengan index ke-${i}`));
console.log('================================');

for(const [i,m] of mhs.entries()){
	console.log(`${m} dengan index ke-${i}`)
}
console.log('================================');


// string
const nama = 'Riventus';
for(const n of nama){
	console.log(n);
}
console.log('================================');

// nama.forEach(m=> console.log(m)); // tidak bisa utk string 

/* NODE LIST*/
const liNama = document.querySelectorAll('.nama');
console.log(liNama);

// dengan forEach
liNama.forEach(n => console.log(n.textContent));

// dngn for of
for(const n of liNama){
	console.log(n.innerHTML);
}
console.log('================================');


/* Arguments*/
function sumAngka(){
	// console.log(arguments);
	/* tidak bisa*/ //return arguments.reduce((a,i) => a + i);
	// arguments.forEach(a => jml+=a); // tidak bisa juga
	jml = 0;
	for ( a of arguments){
		jml+=a
	}
	return jml;
}
	console.log(sumAngka(1,2,3,4,5));
console.log('================================');

// for ... in
const data = {
	nama :'Riventus',
	umur:33,
	email:'ventuscode@gmail.com'
};

for (dt in data){
	console.log(`${data[dt]}, indexnya adlh ${dt}`);
}



