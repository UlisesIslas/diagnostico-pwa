const APP_URL = 'https://pokeapi.co/api/v2/pokemon';
let tmpUrl = APP_URL;

const cardList = document.getElementById("pokeList");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let getPokemonList = () => {
    const res = fetch(tmpUrl).then((res) => res.json()).then(pokemon => {
        const list = pokemon.results;
        let body = '<div class="row">';
        list.forEach(x => {
            let poke = fetch(x.url).then(r => r.json()).then(p => {
                let abilities = '';
                for (let i = 0; i < p.abilities.length; i++) {
                    
                    abilities += 
                    '<div class="col-6 mt-2">'+
                        (i+1) + " " + p.abilities[i].ability.name +
                    '</div>';
                }
                body +=
                    '<div class="col-12 col-md-6 col-lg-3 mt-2">' +
                        '<div class="card">' +
                            '<div class="card-header">' +
                                '<b>' + p.name.toUpperCase() + '</b>' +
                            '</div>' +
                            '<ul class="list-group list-group-flush">' +
                                '<li class="list-group-item">'+ 
                                    '<div class="d-flex justify-content-center">'+
                                        '<img src="'+p.sprites.front_default+'">'+
                                    '</div>'+
                                '</li>' +
                                '<li class="list-group-item">'+
                                    abilities +
                                '</li>'+
                            '</ul>' +
                        '</div>' +
                    '</div>';
                if (cardList != null) {
                    cardList.innerHTML = body;
                }
            });
        });
        if (pokemon.previous == null) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            prevBtn.onclick = funcion = () => {
                tmpUrl = pokemon.previous;
                getPokemonList();
            }
        }
        if (pokemon.next == null) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
            nextBtn.onclick = funcion = () => {
                tmpUrl = pokemon.next;
                getPokemonList();
            }
        }
    });
    cardList.innerHTML = '</div>';
}