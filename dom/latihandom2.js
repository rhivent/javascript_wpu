function getPilihanComputer(){
	
	const comp = Math.random();
	
	if( comp < 0.34)return 'gajah';
	if(comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp,p){
	// var hasil = '';
    if( p == comp ) return 'SERI!';
    if( p == 'gajah' ) return( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( p == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( p == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
   	// return 'memasukkan pilihan yang salah!';
}

function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah','semut','orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src',`img/${gambar[i++]}.png`);
		if(i == gambar.length) i = 0;
	}, 100);
}


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;

// 	const hasil = getHasil(pilihanComputer,pilihanPlayer);

// 	// console.log(`comp : ${pilihanComputer}`);
// 	// console.log(`player : ${pilihanPlayer}`);
// 	// console.log(`hasil : ${hasil}`);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src',`img/${pilihanComputer}.png`);

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// kode di atas hanya utk 1 img

const pilihan = document.querySelectorAll('li img');
let win = 1;
let lose = 1;
pilihan.forEach(function(pil){
	pil.addEventListener('click',function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;

		const hasil = getHasil(pilihanComputer,pilihanPlayer);

		putar();
		// console.log(`comp : ${pilihanComputer}`);
		// console.log(`player : ${pilihanPlayer}`);
		// console.log(`hasil : ${hasil}`);

		setTimeout(function(){
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src',`img/${pilihanComputer}.png`);

			const info = document.querySelector('.info');
			info.innerHTML = hasil;

			// menambahkan skor
			const skorKomputer = document.querySelector('.skorKomputer');
			const skorPlayer = document.querySelector('.skorPlayer');
			
			if(hasil == 'MENANG!'){
				skorPlayer.innerHTML = win++;
			}
			if(hasil == 'KALAH!'){
				skorKomputer.innerHTML = lose++;
			}
			
		},1000);

	})
})