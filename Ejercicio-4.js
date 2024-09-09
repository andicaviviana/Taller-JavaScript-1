function obtenerUsuariosMayoresDeEdad(usuarios) {
    return usuarios
        .filter(usuario => usuario.edad >= 18) 
        .map(usuario => ({
            ...usuario, 
            age_in_days: usuario.edad * 365
        }));
}
const arregloUsuarios = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Maria', edad: 15 },
    { nombre: 'Pedro', edad: 30 }
];

const resultado = obtenerUsuariosMayoresDeEdad([...arregloUsuarios]);

console.log(resultado);