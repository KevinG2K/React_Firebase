//Esto sirve para mantener persistencia dentro de los datos
//Para crear rápidamente la estructura básica teclear → rafc + TAB
import React, {Fragment, useState} from 'react'

export const Contador = () => {
    
    //--- Aquí se ejecuta todo el código ---//
    //el useState hace que el numero mantenga su estado variable, es decir que pueda cambiar
    const [numero, setNumero] = useState(0)
    const Aumentar = () => {
        setNumero(numero+1)
    }
    const Reducir = () => {
        setNumero(numero-1)
    }
    //-------------------------------------//

  return (
    <Fragment>
        <h2>Cantidad del contador: {numero}
        </h2>
        <button onClick={Aumentar}>Aumentar</button>
        <button onClick={Reducir}>Reducir</button>
    </Fragment>
  )
}

export default Contador