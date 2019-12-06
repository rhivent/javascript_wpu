const mhs = ['Riventus','Armandus','Hamonangan'];
const dosen = ['Ade','Hendra','Wanda'];
// menampilkan tiap element per index
// console.log(...mhs+'');

// menggabungkan 2 array langsung dengan tanda ,
// const orang = [...mhs,...dosen];
// const orang = mhs.concat(dosen);

// menggabungkan array di dlm array
// const orang = [mhs,dosen];

// menambah nilai lain di dlm gabungan spread operator
// const orang = [...mhs,'HEHEHE',...dosen];
// console.log(orang);

// mengcopy array
const mhs1 = [...mhs];
console.log(mhs1);


const liMhs = document.querySelectorAll('li');
// cara 1
const mhs2 = [];
for (let i = 0; i < liMhs.length; i++) {
    mhs2.push(liMhs[i].textContent);
}
console.log(mhs2);

// cara 2
const mhs3 = [...liMhs].map(m => m.textContent);
console.log(mhs3);

// cara 3
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;

