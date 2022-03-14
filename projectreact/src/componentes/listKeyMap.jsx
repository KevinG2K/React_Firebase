import React, {Fragment, useState} from 'react'

const Listado = () => {

    //numeros es el valor, setNumeros es la función
    const [numeros, setNumeros] = useState([1,2,3,4,5,6])


  return (
    <Fragment>
        <ul>
            {
                numeros.map( (item, index) =>
                    <li key={index}>
                        {/* Item es el valor & Index es la posición del valor*/}
                        {item} - {index}
                    </li>
                )
            }
        </ul>
    </Fragment>
  )
}

export default Listado
