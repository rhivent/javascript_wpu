// const judul = document.getElementById('judul'); // element
// // judul.style.color = 'red';
// // judul.style.backgroundColor = '#ccc';
// judul.innerHTML = '<em>Riventus<em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf 1</p></div>';

const sectionA = document.querySelector('section#a a');
const a = document.querySelector('section#a a');

// men set  attribute
a.setAttribute('id','link');

// menegetahui atribut
a.getAttribute('id');

// menghapus attribute
// a.removeAttribute('id');

// utk memanipulasi kelas
// element.classList.add()
// element.classList.remove()

// element.classList.toggle()
/*
 toggle fungsinya utk menambah kelas jika blm ada
 dan mengahpus kelas jika sudah ada
Ini berguna utk mebuat Dark Mode, Light Mode Web
misal :  document.body.classList.toggle('dark');


*/


/* 
menampilkan nama tertentu class
 */
// element.classList.item()

/* mengetahui apakah di dlm element tersebut
 ada kelas yg kita ingin cari 
	hasilnya : true (jika ada) , false (jika tidak ada)
 */
// element.classList.contains()

/*
	menimpa kelas yg lama dengan kelas yg baru
// element.classList.replace('namaKelasLama','namaKelasBaru');

*/
// element.classList.replace()

// jadi di dlm html <p class="p2 add1 add2">



