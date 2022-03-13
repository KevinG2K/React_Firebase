
/* //Asi lo hacíamos con fetch, ahora vamos a ver la diferencia
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json.userId))
    .catch(e => console.log(e)) */

//las Promise (then) generan hilos paralelos al principal, y no corta su ejecución.
//AsyncAwait funciona de la misma manera, pero es mas seguro.
const obtenerUsuario = async() => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos)
    } catch (e) {
        console.log(e)
    }
}

obtenerUsuario()