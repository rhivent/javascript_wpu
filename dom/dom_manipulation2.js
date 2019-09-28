// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

// simpan tulisan ke dlm paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
// simpan di akhir element tsb
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');

liBaru.appendChild(teksLiBaru);

// mengetahui parent utk penyisipan element
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// insertBefore
ul.insertBefore(liBaru,li2);


// remove element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replace element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('JUDUL BARU');

h2Baru.appendChild(teksH2Baru);
//  ada 2 params ===> node baru, mereplace node lama
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

/*



*/
























