// single line
console.log(`string text`);


// multi line
console.log(`string text
string text
string text
string text`);


// embedded expression
// console.log(`string text ${expression} string text`);
// console.log(`${alert('haa')}`);
const x =10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)

// tagged template
// tag `string text ${expression} string text`



/* HTML FRAGMENT */ 
const hehe = [
	{
		nama:'Riventus AHA',
		umur:24,
		nim:'33242',
		email:'ventusmn@gmail.com'
	},{
		nama:'Riventus AHA2',
		umur:24,
		nim:'45211',
		email:'ventusmn@gmail.com'
	},{
		nama:'Riventus AHA3',
		umur:24,
		nim:'673452323',
		email:'ventusmn@gmail.com'
	},{
		nama:'Riventus AHA4',
		umur:24,
		nim:'897844900',
		email:'ventusmn@gmail.com'
	}
]

// const elmnt = `<div class="nama">
// 	<h2>${hehe.nama}</h2>
// 	<span class="nim">${hehe.nim}<span>
// </div>`;


// menggunakan metode join utk menghilangkan tanda ,
// const elmnt = `<div class="nama">
// 	${hehe.map(m => `<h2>${m.nama}</h2>
// 	<span class="nim">${m.nim}<span>`).join('')}
// </div>`;


// conditional 
// const lagu = {
// 	title:'ehheheehe',
// 	singer:'qwieoqiwoeiqwoe'
// }

// const elmnt = `<div class="title">
// 	<h2>${lagu.title}</h2>
// 	<span class="singer">${lagu.singer} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}<span>
// </div>`;


// netsted
const mhs2 = 
	{
		nama:'Riventus AHA',
		umur:24,
		nim:'33242',
		mataKuliah:[
		'Matkul1',
		'Matkul2',
		'Matkul3',
		'Matkul4',
		'Matkul5',
		]
	}

function cetakMatKul(matkul){
	return `${matkul.map(m => (`<p>${m}</p>`)).join('')}`
}

const elmnt = `<div class="nama">
	<h2>${mhs2.nama}</h2>
	<span class="nim">${mhs2.nim}<span>
	<span class="matkul">${cetakMatKul(mhs2.mataKuliah)}<span>
</div>`;

document.body.innerHTML = elmnt;