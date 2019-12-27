// callback
// synchronous callback
// function halo(nama){
// 	alert(`Halo ${nama}`);
// }

function tampilkanPesan(callback){
	const nama = prompt('Masukkan Nama: ');
	callback(nama);
}

// tampilkanPesan(nama => {
// 	alert(`Halo ${nama}`);
// });


const warna = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

// Snychronous callback
// console.log('mulai');
// warna.forEach(w => {
// 	for( let i=0; i < 1000000; i++){
// 		let date = new Date();
// 	}
// 	console.log(w.color);
// });
// console.log('selesai');


// Asycnhronous 
function getDataWarna(url,success,error){
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				success(xhr.response);
			}else if(xhr.status === 404){
				error();
			}
		}
	}

	xhr.open('get',url);
	xhr.send();
}


console.log('mulai');
getDataWarna('./callback_1.json', async results=>{
	const mhs = await JSON.parse(results);
	const data = await mhs.forEach(m => {
		console.log(m);
		return m;
	});
	// const data2 = data.warna.map(w => {
	// 		console.log(w.color);
	// 		});
},()=>{
	console.log('error');
});
console.log('selesai');
















