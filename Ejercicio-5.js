function obtenerProductosFiltrados(productos) {
    return productos
        .filter(producto => producto.precio > 80000 && producto.cantidad < 100) 
        .map(producto => {
            const product_tax_value = producto.precio * 0.19; 
            const product_total_value = producto.precio + product_tax_value;
            return {
                ...producto, 
                product_tax_value, 
                product_total_value 
            };
        });
}
const arregloProductos = [
    { id: 1, nombre: 'Pantalon', precio: 90000, cantidad: 50 },
    { id: 2, nombre: 'Camiseta', precio: 75000, cantidad: 150 },
    { id: 3, nombre: 'Chaqueta', precio: 120000, cantidad: 80 },
    { id: 4, nombre: 'Correa', precio: 85000, cantidad: 120 },
];

const resultado = obtenerProductosFiltrados([...arregloProductos]);

console.log(resultado);