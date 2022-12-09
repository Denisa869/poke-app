const pokemonID = document.querySelector("#pokemonid");
const searchInput = document.querySelector("#searchInput");
const formPokedex = document.querySelector("form");

formPokedex.addEventListener("submit", (e) => {
  e.preventDefault(); //frena el comportamiento por defecto//
  const value = searchInput.value;

  for (child of pokemonID.children) {
    const name = child.children[1].children[1].innerText;
    if (name.toUpperCase() !== value.toUpperCase()) {
      child.style.display = "none";
    } else {
      child.style.display = "grid";
    }
    if (value === "") {
      child.style.display = "grid";
    }
  }
});

let users = [];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function setTypeClass(type) {
  switch (type) {
    case "normal":
      return "divNormal";
    case "fire":
      return "divFire";
    case "water":
      return "divWater";
    case "grass":
      return "divGrass";
    case "electric":
      return "divElectric";
    case "ice":
      return "divIce";
    case "fighting":
      return "divFighting";
    case "poison":
      return "divPoison";
    case "ground":
      return "divGround";
    case "flying":
      return "divFlying";
    case "psychic":
      return "divPsychic";
    case "bug":
      return "divBug";
    case "rock":
      return "divRock";
    case "ghost":
      return "divGhost";
    case "dragon":
      return "divDragon";
    case "dark":
      return "divDark";
    case "steel":
      return "divSteel";
    case "fairy":
      return "divFairy";
  }
}

function minTwoDigit(n) {
  if (n < 10) {
    return "N° 00" + n;
  }
  if (n < 100) {
    return "N° 0" + n;
  }
  return "N°" + n;
}

async function fetchPokeAPI() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0"
  );

  const data = await response.json();

  for (let pokemon of data.results) {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    const divPokemon = document.createElement("div");
    const imagePokemon = document.createElement("img");
    const infoPokemon = document.createElement("div");
    const numberPokemon = document.createElement("p");
    const namePokemon = document.createElement("h5");
    const pokemonType = document.createElement("div");
    namePokemon.innerText = capitalize(data.name);
    numberPokemon.innerText = minTwoDigit(data.id);
    imagePokemon.src = data.sprites.front_default;

    for (let type of data.types) {
      const typeElement = document.createElement("div");
      typeElement.innerText = type.type.name.toUpperCase();
      typeElement.className = setTypeClass(type.type.name);
      pokemonType.append(typeElement);
    }

    infoPokemon.append(numberPokemon, namePokemon, pokemonType);
    divPokemon.append(imagePokemon, infoPokemon);

    divPokemon.className = "pokeDiv";
    imagePokemon.className = "imgPokemon";
    namePokemon.className = "pokemon-name";

    pokemonID.append(divPokemon);
  }
}

fetchPokeAPI();
