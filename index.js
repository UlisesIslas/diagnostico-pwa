const APP_URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonList = () => {
    const cardList = document.getElementById("pokeList");
    let body = '';
    const res = fetch(APP_URL).then((res) => res.json()).then(pokemon => {
        const list = pokemon.results;
        list.forEach(x => {
            body += 
            '<div class="col-6 mt-2">'+
                '<div class="card">'+
                    '<div class="card-header">'+
                        x.name +
                    '</div>'+
                    /* '<ul class="list-group list-group-flush">'+
                        '<li cliass="list-group-item"> <button class="btn btn-primary">Detalles</button>'+
                    '</ul>'+ */
                '</div>'+
            '</div>';
        });
        if(cardList !=null) {
            cardList.innerHTML = body;
        }
    });
}