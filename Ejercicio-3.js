function obtenerParesMultiplicadosPorDos(numeros) {
    return numeros
        .filter(numero => numero % 2 === 0) 
        .map(numero => numero * 2); 
}

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = obtenerParesMultiplicadosPorDos([...arregloNumeros]);

console.log(resultado);