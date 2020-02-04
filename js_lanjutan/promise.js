// JQUERY
// $.ajax({
//     url : 'http://www.omdbapi.com/?apikey=e5a0ca0f&s=avengers',
//     success: movies => {
//         console.log(movies.Search);
//     }
// });


// VANILLA JS
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             let data = JSON.parse(xhr.response);
//             console.log(data.Search);
//         }
//     }else{
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get','http://www.omdbapi.com/?apikey=e5a0ca0f&s=avengers');
// xhr.send();


// JS terbaru 
// fetch('http://www.omdbapi.com/?apikey=e5a0ca0f&s=avengers')
//     .then(response => response.json()).then(response => console.log(response));

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve,reject) => {
    if(ditepati){
        resolve('Janji telah di tepati');
    }else{
        reject('ingkar janji');
    }
});

janji1
.then(response => console.log(`OK : ${response}`))
.catch(response => console.log(`NOT OK: ${response}`));

// contoh 2
// let ditepati2 = true;
// const janji2 = new Promise((resolve,reject) => {
//     if(ditepati2){
//         setTimeout( () => {
//             resolve('Ditepati tpi beberapa waktu tunggu ... ');
//         },2000);
//     }else{
//         setTimeout( () => {
//             reject('Tidak Ditepati tpi tunggu beberapa waktu ... ');
//         },2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)) );
// janji2
// .finally(() => console.log('selesai menunggu!'))
// .then(response => console.log(`OK : ${response}`))
// .catch(response => console.log(`NOT OK: ${response}`));
// console.log('selesai');


// contoh 3
// Promise.all 
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            title:"avengers",
            sutradara: "riventus",
            actors : "riventus,hehe"
        }])
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota:"jakarta",
            temp:26,
            condition:"Cerah Berawan"          
        }])
    },500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film,cuaca])
// .then(response => console.log(response))
.then(response => {
    const [film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
})