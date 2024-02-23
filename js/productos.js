const listaProductos = [];

const cargarProductos = () => {
    for (let i = 0; i <= 10; i++) {
        const nuevoProducto = {
            id: `PROD${i}`,
            nombre: faker.commerce.productName(),
            descripcion : faker.commerce.productName(),
            precio : parseFloat(faker.commerce.price(10,100,2)),
        };
        listaProductos.push(nuevoProducto);
    }
}

const cargarFormularioProductos = () => {
    const productosForm = document.getElementById('productos-form');
    productosForm.innerHTML = `
        <form>
            <label for="nombreProducto">Nombre del Producto:</label>
            <input type="text" id="nombreProducto" required>
            <label for="descripcionProducto">Descripción del Producto:</label>
            <input type="text" id="descripcionProducto" required>
            <label for="precioProducto">Precio del Producto:</label>
            <input type="number" id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListadoProducto()">Ver Listado de Productos</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar Productos -->
        </form>
    `;
    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display = 'none';
}

const crearProducto = () => {
    const nombreInput = document.getElementById('nombreProducto');
    const descripcionInput = document.getElementById('descripcionProducto');
    const precioInput = document.getElementById('precioProducto');

    const nombre = nombreInput.value;
    const descripcion = descripcionInput.value;
    const precio = precioInput.value;

    const nuevoProducto = {
        id: listaProductos.length + 1,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    }

    listaProductos.push(nuevoProducto);

    nombreInput.value = '';
    descripcionInput.value = '';
    precioInput.value = '';

    alert('Producto creado con éxito!');
    console.log(listaProductos);

    return nuevoProducto;

}

const mostrarListadoProducto = () => {
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    productosForm.style.display = 'none';
    listadoProductos.style.display = 'block';

    const ul = document.createElement('ul');

    for (const producto of listaProductos) {
        const li = document.createElement('li');
        li.textContent = `ID: ${producto.id}, Nombre: ${producto.nombre}, descripcion: ${producto.descripcion}, precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML = '';
    listadoProductos.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormularioProducto);
    listadoProductos.appendChild(volverButton);

}

const volverFormularioProducto = () => {
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    listadoProductos.style.display = 'none';
    productosForm.style.display = 'block';

}




console.log(listaProductos); 