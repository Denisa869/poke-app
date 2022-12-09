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

if (newsletter && divContainer) {
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
