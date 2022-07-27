const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonType = document.querySelector(".pokemon_type");
const pokemonImg = document.querySelector(".pokemon_img");
const pokemonTypeImg = document.querySelector(".pokemon_type_img");

const form = document.querySelector(".form");
const inputSearch = document.querySelector(".input_search");

const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIresponse.status === 200) {
    pokemonImg.style.display = "block";
    const data = await APIresponse.json();
    return data;
  } else {
    pokemonName.innerHTML = "404";
    pokemonNumber.innerHTML = "Not found";
    pokemonImg.style.display = "none";
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Carregando...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  const name = data.name;
  const id = data.id;
  const type = data["types"][0]["type"]["name"];
  const img =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
  const img_2 =
    data["sprites"]["versions"]["generation-viii"]["icons"]["front_default"];

  if (data.id < 650) {
    pokemonName.innerHTML = name;
    pokemonNumber.innerHTML = id;
    pokemonType.innerHTML = type;
    pokemonImg.src = img;
    searchPokemon = data.id;
  } else if (data.id >= 650) {
    pokemonName.innerHTML = name;
    pokemonNumber.innerHTML = id;
    pokemonImg.src = img_2;
    searchPokemon = id;
  }

  switch (type) {
    case "normal":
      pokemonTypeImg.src = "./assets/PokeTypes/normal.png";
      break;
    case "fire":
      pokemonTypeImg.src = "./assets/PokeTypes/fire.png";
      break;
    case "water":
      pokemonTypeImg.src = "./assets/PokeTypes/water.png";
      break;
    case "grass":
      pokemonTypeImg.src = "./assets/PokeTypes/grass.png";
      break;
    case "eletric":
      pokemonTypeImg.src = "./assets/PokeTypes/eletric.png";
      break;
    case "ice":
      pokemonTypeImg.src = "./assets/PokeTypes/ice.png";
      break;
    case "fighting":
      pokemonTypeImg.src = "./assets/PokeTypes/fighting.png";
      break;
    case "poison":
      pokemonTypeImg.src = "./assets/PokeTypes/poison.png";
      break;
    case "ground":
      pokemonTypeImg.src = "./assets/PokeTypes/ground.png";
      break;
    case "flying":
      pokemonTypeImg.src = "./assets/PokeTypes/flying.png";
      break;
    case "psychic":
      pokemonTypeImg.src = "./assets/PokeTypes/psy.png";
      break;
    case "bug":
      pokemonTypeImg.src = "./assets/PokeTypes/bug.png";
      break;
    case "rock":
      pokemonTypeImg.src = "./assets/PokeTypes/rock.png";
      break;
    case "ghost":
      pokemonTypeImg.src = "./assets/PokeTypes/ghost.png";
      break;
    case "dark":
      pokemonTypeImg.src = "./assets/PokeTypes/dark.png";
      break;
    case "dragon":
      pokemonTypeImg.src = "./assets/PokeTypes/drag.png";
      break;
    case "steel":
      pokemonTypeImg.src = "./assets/PokeTypes/steel.png";
      break;
    case "fairy":
      pokemonTypeImg.src = "./assets/PokeTypes/fairy.png";
      break;
  }
};

form.addEventListener("submit", (e) => {
  event.preventDefault();
  renderPokemon(inputSearch.value.toLowerCase());
  inputSearch.value = "";
});

btn_prev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});
btn_next.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);