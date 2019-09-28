// this adalah suatu keyword special yang 
// secara otomatis didefinisikan pd setiap function
// shg setiap buat function atau object, ada keyword this yg didefinisikan

// contoh: 
// console.log(this) // output: window = object global
// console.log(this == window); //output: true
// jadi setiap kita membuat suatu variabel di scope
// tertentu nah this itu mewakili object yg dibuat secara
// otomatis di dlm scope tersebut

// var a = 10;

// console.log(window.a); // output : 10
// console.log(this.a); // output : 10
// console.log(a); // output : 10

// jadi setiap kit amembuat variabel di scope
// global sama aja this adalah properti atau method
// dari object window, maka this = objek dari window


// cara 1 - function declaration
// function halo (){

	// console.log(this); // outputnya : window

	// console.log('halo1');
// }
// halo();
// function diatas scopenya global sehingga sama aja
// ketika kita menjalankan fungsi dengan 
// window.halo();
// artinya kita bisa mengganti kata window dengan 
// this.halo();
// Jadi ketika kita menggunakan function declaration 
// this mengembalikan object Global

// cara 2 - objek literal
// let obj = { a :10,nama:'riventus'};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('halo2');
// }
// obj.halo();
// dia mengembalikan objeck yg bersangkutan
// yg dikembalikan object itu sendiri berserta seluruh isinya
// jadi mengembalikan object itu sendiri


// cara 3 - constructor
function Halo(){
	console.log(this);
	console.log('halo3');
}
let obj1 = new Halo(); //this nya mengembalikan object di obj1

let obj2 = new Halo(); //this nya mengembalikan object di obj2
// jadi tiap kita panggil function Halo dengan keyword new 
// akan otomatis dibuat baru (new) object
// this mengembalikan object yg baru dibuat



