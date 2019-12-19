// asynchronous itu bisa di akali dengan callback
console.log(1);
setTimeout(() => { 
	// prosesYgKompleks();
	console.log(2);
},5000);

// artinya HOF (higher order function) dimn function bisa menerima parameter berupa function lgi.
console.log(3);

// fungsi diatas bisa tidak memblock eksekusi dari console.log(3) karena di stack v8engine setTimeout akan
// diskip sesuai dengan waktu yg diset.

// hal tersebut dinamakan asynchronous callback, ini bisa terjadi karena adanya event loop.
