import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    // --- Para validar si los campos no estan vacíos --- //
    const Validar = (event) => {
        //para que la página no se recargue
        event.preventDefault()
        console.log('formulario funcionando correctamente')
        if(!nombre.trim()) {
            console.log('No introdujo un nombre')
        }
        if(!edad.trim()) {
            console.log('No introdujo una edad')
        }
    }
    // ------------------------------------------------- //

  return (
    <div className='container'>
        {/* colocamos el evento (onSubmit) y en un JSX colocamos la const Validar */}
        <form onSubmit={Validar} className='form-group'>
            <input placeholder='Introduce el nombre' className='form-control mb-3' type="text"
                onChange={ (e) => {setNombre(e.target.value)} }
            />
            <input placeholder='Introduce la edad' className='form-control mb-3' type="text"
                onChange={ (e) => {setEdad(e.target.value)} }
            />
            <input className='btn btn-info btn-block mb-3' type="submit" />
        </form>
    </div>
  )
}

export default Formulario
