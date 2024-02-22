//! Clients's list

const clientsList = [];

//! Load Clients's list

const loadClients = () => {

    for (let i = 0; i <= 10; i++) {

        const newClient = {
            id: i,
            name: faker.name.findName(),
            age: Math.floor(Math.random * 30) + 18,
            email: faker.internet.email()
        };

        clientsList.push(newClient);

    };

}

//! Load client's form

const loadClientsForm = () => {
    const clientForm = document.getElementById("clientes-form");

    clientForm.innerHTML = `
    <form>
        <label for="nombreCliente">Nombre del Cliente:</label>
        <input type="text" id="nombreCliente" required>
        <label for="edadCliente">Edad del Cliente:</label>
        <input type="number" id="edadCliente" required>
        <label for="emailCliente">Correo Electrónico del Cliente:</label>
        <input type="email" id="emailCliente" required>
        <button type="button" onclick="createClient()">Crear Cliente</button>
        <button type="button" onclick="mostrarListado()">Ver Listado de Clientes</button>
    </form>
    `;

    const listOfClients = document.getElementById("listado-clientes");

    listOfClients.style.display = "none";

}

//! Create new client
const createClient = () => {
    const nameInput = document.getElementById("nombreCliente");
    const ageInput = document.getElementById("edadCliente");
    const emailInput = document.getElementById("emailCliente");

    const name = nameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;

    const newClient = {
        id : clientsList.length+1,
        name : name,
        age : age,
        email : email
    };

    clientsList.push(newClient);

    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";

    alert("¡Succesfully!: The client is already created");
    console.log(clientsList);

    return newClient;
}

//! Show Client's list

const showClientsList = () => {
    const clientsForm = document.getElementById("clientes-form");
    const clientsListed = document.getElementById("listado-clientes");

    clientsForm.style.display = "none";
    clientsListed.style.display = "block";

    const ul =  document.createElement("ul");

    for (const client of clientsList) {
        const li = document.createElement("li");
        li.textContent = `ID: ${client.id}, Name: ${client.name}, Age: ${client.age}, Email: ${client.email}`;
        ul.appendChild(li);
    };

    clientsListed.innerHTML = "";
    clientsListed.appendChild(ul);

    const comeBackButton = document.createElement("button");

    comeBackButton.textContent = "Back";
}