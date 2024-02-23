const listaProductos = [];

const cargarProductos = () => {
    for (let i = 0; i <= 10; i++) {
        const nuevoProducto = {
            id: i,
            nombre: faker.commerce.productName(),
            descripcion: faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2)),
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
    actulizarProductosEnFacturas();

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

const mostrarListadoFacturas = () => {
    const facturasForm = document.getElementById('facturas-form');
    const listadoFacturas = document.getElementById('listado-facturas');

    // Ocultar formulario de facturas
    facturasForm.style.display = 'none';

    // Mostrar listado de facturas
    listadoFacturas.style.display = 'block';

    // Crear una lista (ul) para mostrar las facturas
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';

    // Recorrer la lista de facturas y agregar cada factura como un elemento de lista (li)
    for (const factura of listaFacturas) {
        const li = document.createElement('li');
        li.style.marginBottom = '15px';
        li.style.borderBottom = '1px solid #ccc';
        li.style.paddingBottom = '10px';

        // Comprobación para asegurarse de que factura.fecha es un objeto Date
        const fecha = factura.fecha instanceof Date ? factura.fecha.toLocaleDateString() : 'Fecha no válida';

        const fechaCliente = document.createElement('div');
        fechaCliente.style.fontWeight = 'bold';
        fechaCliente.textContent = `Fecha: ${fecha}, Cliente: ${factura.cliente.nombre}, Total: ${factura.total}`;
        li.appendChild(fechaCliente);

        const itemsUl = document.createElement('ul');
        itemsUl.style.listStyleType = 'none';
        itemsUl.style.padding = '0';

        // Recorrer los items de la factura y agregar cada item como un elemento de lista (li)
        for (const item of factura.items) {
            const itemLi = document.createElement('li');
            itemLi.textContent = `Producto: ${item}`;
            itemsUl.appendChild(itemLi);
        }

        li.appendChild(itemsUl);
        ul.appendChild(li);
    }

    // Limpiar el contenido anterior del contenedor de listado de facturas
    listadoFacturas.innerHTML = '';

    // Agregar la lista al contenedor
    listadoFacturas.appendChild(ul);

    // Agregar botón para volver al formulario de facturas
    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario de Facturas';
    volverButton.addEventListener('click', volverAlFormularioFacturas);
    listadoFacturas.appendChild(volverButton);

}

const volverAlFormularioFacturas = () => {
    const facturasForm = document.getElementById('facturas-form');
    const listadoFacturas = document.getElementById('listado-facturas');

    // Ocultar listado de facturas
    listadoFacturas.style.display = 'none';

    // Mostrar formulario de facturas
    facturasForm.style.display = 'block';


}


console.log(listaProductos); 