const calcularProductos = (productos) => {
    const precios = productos.map(({ precio }) => precio);
    const sumaPrecios = precios.reduce((acumulador, precio) => acumulador + precio, 0);
    const cantidadTotal = productos.reduce((acumulador) => acumulador + 1, 0);
    const productoMasCaro = productos.sort((a, b) => b.precio - a.precio)[0].nombre;

    return {
        sumaPrecios,
        cantidadTotal,
        productoMasCaro
    };
};
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id: 2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id: 3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id: 4, nombre: 'Correa', precio: 80000, stock: 104 },
];

const resultado = calcularProductos(productos);

console.log(`Suma de precios: ${resultado.sumaPrecios}`);
console.log(`Cantidad total de productos: ${resultado.cantidadTotal}`);
console.log(`Producto más caro: ${resultado.productoMasCaro}`);