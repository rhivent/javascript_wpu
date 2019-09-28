// membuat object
function Angkot(sopir,trayek,penumpang,kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang,bayar){
		// jika blm ada penumpang
		if( this.penumpang.length === 0 ) {
			alert('Angkot masih kosong !');
			return false; //supaya keluar dari methodnya
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			// jika penumpang ada trus mau turun
			if(this.penumpang[i] === namaPenumpang){
				// kita set kursi duduk penumpang dengan undefined
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}


	}
}

let angkot1 = new Angkot('mantap',['Jakarta','Jogja'],[],0);
let angkot2 = new Angkot('success',['Bandung','Magelang'],[],0);

// angkot1.penumpangNaik('Riventus');
// angkot1.penumpang;