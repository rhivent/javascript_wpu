// // e5a0ca0f
// // http://www.omdbapi.com/?apikey=e5a0ca0f&s=harry potter

let URLAPI = 'http://www.omdbapi.com/?apikey=';
let apiKey = 'e5a0ca0f';
function stringify_baru(obj) {
	if (obj) {
		return Object.entries(obj)
			.map(([key, value]) => {
				return `${encodeURIComponent(key)}=${encodeURIComponent(
					value
				)}`;
			})
			.join("&");
	} else return "";
}
let params = {
    s:'avengers'
};
// const ambildata = fetch(`${URLAPI}${apiKey}&${stringify_baru(params)}`,{
//         method:"GET",
//     })
//     .then(resp => resp) // Transform the data into json
//     .then(function(data) {
//         // Create and append the li's to the ul 
//     })


// // console.log(ambildata); 

// $.ajax({
//     // url:'http://sca.co.id:1000/ws/MTOM.asmx/top_buku_dipinjam_ddc?limit=15&start_date=2019-12-01&end_date=2019-12-24',
//     url:'http://www.omdbapi.com/?apikey=e5a0ca0f&s=harry potter',
//     success: resp => {
//         const movies = resp.Search;
//         console.log(movies);
//     },
//     error:(e) => {
//         // jika error
//         console.error(e.responseText);
//     }
// });

async function getDataOMDb(endpoint,options={}) {
    const res = await fetch(endpoint,options);
    if (!res.ok) {
      throw new Error(res.status); // 404
    }
    const data = await res.json();
    return data;
}

async function getDataOMDbDetails(endpoint,options={}) {
    const res = await fetch(endpoint,options);
    if (!res.ok) {
      throw new Error(res.status); // 404
    }
    const data = await res.json();
    return data;
}

const showCards = data => {
    console.log(data.Poster);
    return (`<div class="col-md-4 my-3">
        <div class="card">
            <img src="${data.Poster}" class="card-img-top" alt="imageOMDb">
            <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tahun Release ${data.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#moviedetailsModal" data-imdbid=${data.imdbID}>Go Details</a>
            </div>
        </div>
    </div>`);
}

const showCardDetail = data => {
    return (`<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${data.Poster}" alt="image-details-movie" class="img-fluid" />
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${data.Title} (${data.Year})</h4></li>
                    <li class="list-group-item"><strong>Director : </strong> ${data.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong> ${data.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong> ${data.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong><br/> ${data.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`);
}

// Searching movie
$('.search-button').on('click',function(){
    let params = {s:$('.input-keyword').val()};
    getDataOMDb(`${URLAPI}${apiKey}&${stringify_baru(params)}`,{
        method:"GET",
        headers:new Headers({})
    })
    .then(data => {
      const movies = data.Search;
      let cards = '';
      movies.forEach(m => {
        cards += showCards(m);
      });

      $('.movie-container').html(cards);
      
      // ketika tombol detail diklik
      $('.modal-detail-button').on('click',function(){
        console.log($(this).data('imdbid'));
        getDataOMDbDetails(`${URLAPI}${apiKey}&${stringify_baru({i:$(this).data('imdbid')})}`,{
            method:"GET",
            headers:new Headers({})
        }).then(data=> {
            const movieDetail = showCardDetail(data);
            $('.modal-body').html(movieDetail);
        }).catch(err => console.log('Ooops, error', err.responseText));
      });
      
    })
    .catch(err => console.log('Ooops, error', err.message));
});