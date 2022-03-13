/* Fetch es una API, mas que una api es una FUNCTION que nos permite trabajar a traves de promesas
para hacer peticiones a APIs */

/* //la API de este ejemplo me devuelve un usuario de un objeto json
fetch('https://jsonplaceholder.typicode.com/todos/1')
    //la respuesta de fetch viaja dentro de una promesa o Promise (then)
    //esta respuesta(response o lo que sea)  transforma la respuesta en un objeto json
    .then(response => response.json())
    //dentro de esta promesa, recibe el objeto json transformado, y lo imprime.
    .then(json => console.log(json.userId))
    //los errores se pueden capturar así...
    .catch(e => console.log(e)) */