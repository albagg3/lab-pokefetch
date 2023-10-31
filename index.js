console.log("index.js is working!")
const ulElem = document.querySelector("#list");

const getPokemons = async() =>{
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const pokemons = await response.json();
        pokemons.results.forEach(element => {
            const liElem = document.createElement("li");
            liElem.setAttribute("id", element.name);
            liElem.classList.add("card")
            liElem.innerHTML = `
            <h2>${element.name}</h2>`
            ulElem.append(liElem);
            fetchImage(element.url, liElem);
            
        });
    }catch(error){
        console.log(error);
    }
}


const fetchImage = async (urlImage, liElement) =>{
    try{
        const response = await fetch(urlImage)
        const dataEachPokemon = await response.json();
        console.log("Each",dataEachPokemon);
        const imgElem = document.createElement("img")
        imgElem.setAttribute("src",dataEachPokemon.sprites.other.dream_world.front_default)
        imgElem.classList.add("img-size")
        liElement.append(imgElem);
    }catch(error){
        console.log(error);
    }

}
getPokemons()