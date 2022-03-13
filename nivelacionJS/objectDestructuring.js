/* El Object Destructuring es usado para evitar los puntos '.' cuando llamamos a las propiedades
de un objeto */

/* // --- Ejemplo usando el objeto Persona --- //
const Persona = {
    //propiedades del objeto Persona
    nombre: 'Kevin',
    edad: 24,
    casado: false,
    //objeto dentro de un objeto
    musicas: {
        generos: ['rock','electronica','rap']
    }
}

//retorna el valor de la propiedad que está en el objeto
const {nombre,edad} = Persona
const {generos} = Persona.musicas
console.log(`${nombre} ${edad}`)
console.log(`${generos}\n${generos[2]}`) */