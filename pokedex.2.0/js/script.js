
const grupoGrama = ["bulbasaur","ivysaur"]
const grupoFogo = ["charmander"]

/* XMLHttpRequest -> Síncrona
Fetch -> Assíncrona (Promisse)
*/


function onPageLoad(){

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(function response(data){  /* Promises */

        const promiseData = data.json()

        promiseData.then(response =>{
            insertUsers(response.results)             
        })
    })
}

function insertUsers(pokemons) {
    console.log(pokemons)

    for(let index = 0; index < pokemons.length; index ++) {
        const pokemon = pokemons[index]
        const id = index + 1
        pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
        adicionarCardPokemon(pokemon)
    }
}

function adicionarCardPokemon(pokemon) {
    
    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h2")
    textoElemento.innerHTML = pokemon.name
    
    if(grupoGrama.includes(pokemon.name)){
        textoElemento.classList.add("grama")
    } else if(grupoFogo.includes(pokemon.name)) {
        textoElemento.classList.add("fogo")
    }
    
    const divElemento = document.getElementById("conteudo-pokemon")

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)
}
