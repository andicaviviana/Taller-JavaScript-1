const calcularSumaProductos = (productos) => {
  const { totalPrecio, totalValorStock } = productos.reduce(
      (acumulador, item) => ({
          totalPrecio: acumulador.totalPrecio + item.precio,
          totalValorStock: acumulador.totalValorStock + (item.precio * item.stock)
      }),
      { totalPrecio: 0, totalValorStock: 0 }
  );

  return { totalPrecio, totalValorStock };
};

const productos = [
  { id: 1, nombre: 'Camiseta', precio: 90000, stock: 89 },
  { id: 2, nombre: 'Pantalón', precio: 75000, stock: 44 },
  { id: 3, nombre: 'Chaqueta', precio: 120000, stock: 23 },
  { id: 4, nombre: 'Correa', precio: 85000, stock: 104 },
];

const resultado = calcularSumaProductos(productos);

console.log(`Suma de precios: ${resultado.totalPrecio}`);
console.log(`Valor total del stock: ${resultado.totalValorStock}`);