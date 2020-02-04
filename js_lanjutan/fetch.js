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

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click',function(){
    let params = {s:document.querySelector('.input-keyword').value};
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

        document.querySelector('.movie-container').innerHTML = cards;
            
        // ketika tombol detail diklik
        const modalDetaiButton = document.querySelectorAll('.modal-detail-button');
        modalDetaiButton.forEach(btn => {
            btn.addEventListener('click',function(){
                const imdbid = this.dataset.imdbid;
                getDataOMDbDetails(`${URLAPI}${apiKey}&${stringify_baru({i:imdbid})}`,{
                    method:"GET",
                    headers:new Headers({})
                }).then(data=> {
                    const movieDetail = showCardDetail(data);
                    document.querySelector('.modal-body').innerHTML = movieDetail;
                }).catch(err => console.log('Ooops, error', err.responseText));
            });
        });
    })
    .catch(err => console.log('Ooops, error', err.message));
});