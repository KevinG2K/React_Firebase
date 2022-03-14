import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

  return (
    <div className='container'>
        <form className='form-group'>
            <input placeholder='Introduce el nombre' className='form-control mb-3' type="text"
                // recibe un evento (e), con (e.target.value) recoge el valor del input, luego lo setea
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
