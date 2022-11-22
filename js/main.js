// //Algoritmo con condicional y ciclo//
// alert("Welcome to my first Javascript Project");

// let yourName = prompt("What is your name?");
// let count = 0;

// //ciclo//
// while (!yourName) {
//     alert("Name cannot be empty");

//     yourName = prompt("What is your name?");
// }
// for (i = 1; i <= yourName.length; i++) {
//     count++
// }

// let knowMore = prompt(
//     "Hello " + yourName + ", your name has "+ count + " characters, would you like to know more about this new program?"
// );

// console.log(yourName);
// console.log(knowMore);

// if (knowMore.toLowerCase() == "yes") {
//     alert("Thank you, let me tell you more about this.");
//     let yearBorn = prompt('Please submit the year you were born');
//     let currentYear = new Date().getFullYear();
//     console.log(currentYear)
//     let result = (currentYear - yearBorn);

//     alert('You are ' + result + ' years old');

//     if (result >= 8) {
//         alert('Welcome to pokeapp')
//     } else {
//         alert('Thank you for coming. Bye')
//     }

// } else {
//     alert("Thank you, hope to see you again");
// } ;
// //Segunda pre-entrega/
// class Pokemon {
//     constructor(name, type, abilities, color, description) {
//       this.name = name;
//       this.type = type;
//       this.abilities = abilities;
//       this.color = color;
//       this.info = function () {
//         return description;
//       };
//     }
//   }
//   const pokemonMudkip = new Pokemon("Mudkip", "Water", "Torrent", "Blue", 'This is a Water-type Pokémon introduced in Generation III. It evolves into Marshtomp starting at level 16, which evolves into Swampert starting at level 36. Mudkip is a small, amphibious, quadrupedal Pokémon. It has a blue body with a light-blue underside.');
//   const pokemonTreecko = new Pokemon("Treecko", "Grass", "Overgrow", "This is a Grass-type Pokémon introduced in Generation III. It evolves into Grovyle starting at level 16, which evolves into Sceptile starting at level 36.");
//   const pokemonTorchic = new Pokemon("Torchic", "Fire", "Blaze", "Red", 'This is a Fire-type Pokémon introduced in Generation III. it evolves into Combusken starting at level 16, which evolves into Blaziken starting at level 36. Torchic is a small, chick Pokémon with stubby, downy, yellow wings. Its body is covered with orange feathers.');

//   const whichPokemon = prompt(
//     "Which pokemon would you like to know more? \n Mudkip \n Treecko \n Torchic"
//   );

//   const pokemon3 = [pokemonMudkip, pokemonTreecko, pokemonTorchic];

//   const result = pokemon3.find((p) => p.name.toLowerCase() === whichPokemon.toLowerCase());

//   if (result) {
//     alert(result.info());
//   } else {
//     alert("Pokémon not found");
//   }

//Local Storage//
const headers = new Headers();
headers.set("permissions-policy", "interest-cohort=()");

const formContact = document.querySelector("#form-contact");
const divContainer = document.querySelector(".main-div-grid-about");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (formContact) {
  const inlineFormInput = formContact.querySelector("#inlineFormInput");
  const inputEmail = formContact.querySelector("#inputEmail4");
  const inputAddressA = formContact.querySelector("#inputAddress");
  const inputAddressB = formContact.querySelector("#inputAddress2");
  const inputCity = formContact.querySelector("#inputCity");
  const inputZip = formContact.querySelector("#inputZip");
  const newsletterCB = formContact.querySelector("#gridCheck");

  formContact.addEventListener("submit", (event) => {
    event.preventDefault(); //frena el comportamiento por defecto//

    const userRepeat = usuarios.some((user) => user.email === inputEmail.value);

    if (userRepeat) {
      alert("This email already exist"); //validar que no se repita el email
      return;
    }
    // console.log(userRepeat)

    //Crear un objeto con distintas propiedades//
    const user = {
      name: inlineFormInput.value,
      email: inputEmail.value,
      address1: inputAddressA.value,
      address2: inputAddressB.value,
      city: inputCity.value,
      zip: inputZip.value,
      newsletter: newsletterCB.checked, // checkbox
    };
    usuarios.push(user);
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); //convertir el objeto en string//
    formContact.reset(); //Resetea formulario
    // console.log(user)
  });
}

const newsletter = JSON.parse(localStorage.getItem("usuarios") || []).filter(
  (usuario) => usuario.newsletter
);

if (newsletter) {
  const listContainer = document.createElement("div");

  const list = document.createElement("ul");

  const listTitle = document.createElement("span");
  listTitle.textContent = "Usuarios suscritos al newsletter de pokemon";

  //agregar una clase a los nuevos elementos//
  listContainer.className = "listContDiv";
  listTitle.className = "listDiv";
  list.className = "listUl";

  //Agregando una lista de usuarios si quieren suscribirse al newsletter//

  for (const user of newsletter) {
    const listElement = document.createElement("li");
    listElement.innerHTML = user.name;
    list.appendChild(listElement);
  }

  //adjuntar elementos
  listContainer.appendChild(listTitle);
  listContainer.appendChild(list);
  divContainer.appendChild(listContainer);
}
