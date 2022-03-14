//se importa el Fragment de react
import React, {Fragment} from 'react'


function Hola() {
    //con jsx podemos crear variables javascript
    let nombre = 'Kevin'
    return (
        //es importante que los componentes tengan un root (div)
        //pero en vez de usar div, lo mejor es usar | Fragment |
        <Fragment>
            <h2>Primer Componente</h2>
            {/* lo que está dentro de llaves, es JSX */}
            <p>Mi nombre es {nombre}</p>
            <p>puedo sumar directamente 1 + 1 es {1+1}</p>
        </Fragment>
    )
}

export default Hola