import React, {useState} from 'react'
// Genera id únicas aleatorias por objetos
import uniqid from 'uniqid'

const ListadoNombres = () => {
  
  // usado para setear en el | string nombre | lo que hay en el input del formulario
  const [nombre, setNombre] = useState('')
  // usado para  setear en el | array listarNombres | al presionar el boton del formulario
  const [listaNombres, setListaNombres] = useState([])
  // usado para cambiar al modo edicion, es decir, para editar el nombre
  const [modoEdicion, setModoEdicion] = useState(false)
  // usado para manipular el id, cuando estamos editando el nombre
  const [id, setId] = useState()
  // usado notificar si el input del nombre esta vacío
  const [error, setError] = useState(null)

  // Agrega nuevo nombre
  const addNombre = (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      setError('El campo nombre está vacío')
      return
    }
    // agrega nombre de tipo objeto con id único
    const nuevoNombre = {
      id:uniqid(),
      newNombre:nombre
    }

    //añade los nombres a la lista de nombres
    setListaNombres([...listaNombres, nuevoNombre])

    //setamos vacío en el nombre, para limpiar el input después de setear el nombre
    setNombre('')

    // setear el error de nombre vacío a null, después de rellar el nombre
    setError(null)
  }

  //no elimina, pero genera un nuevo array filtrando el item seleccionado
  const deleteNombre = (id) => {
    const nuevaArray = listaNombres.filter( item => item.id !== id)
    setListaNombres(nuevaArray)
  }

  // función para cambiar al modoEdicion → usado para editar nombre
  const editarModoEdicion = (item) => {
    setModoEdicion(true)
    setNombre(item.newNombre)
    setId(item.id)
  }

  // Editar el nombre
  const editarNombre = (e) => {
    e.preventDefault()
    const nuevoArray = listaNombres
      .map(item => item.id === id ? {id:item.id, newNombre:nombre}: item)
      setListaNombres(nuevoArray)
      // una vez editado el nombre, se quita el modo edicion y se limpia el input
      // de esta manera, está listo para registrar un nuevo nombre
      setModoEdicion(false)
      setNombre('')
  }

  return (
    <div>
      <h4>CRUD Básico</h4>
        <div className="row">
          <div className="col">
            <h2>Lista de Nombres</h2>  
            <ul className='list-group'>
              {
                //se muestra la lista de nombres
                listaNombres.map( (item) =>
                <li key={item.id} className='list-group-item'>
                  {item.newNombre}
                  {/* boton para editar */}
                  <button
                    className="btn btn-info float-right"
                    onClick={ () => {editarModoEdicion(item)} }>
                      Editar
                  </button>
                  {/* boton para eliminar */}
                  <button
                    className="btn btn-danger float-right"
                    onClick={ () => {deleteNombre(item.id)} }>
                      Borrar
                  </button>
                </li>
                )
              }
            </ul>
          </div>
          <div className="col">
            <h2>Espacio para añadir Nombres</h2>
            {/* setea la lista de nombres */}
            <form onSubmit={modoEdicion ? editarNombre : addNombre} classname='form-group'>
              {/* setea el nombre */}
              <input
                onChange={(e)=>{setNombre(e.target.value)}}
                className='form-control mb-3' type="text"
                placeholder='Introduce el nombre'
                // con esto extrapolamos el nombre, en este caso, limpiamos el input
                value={nombre}  
              />
              <input
                className='btn btn-info btn-block mb-3'
                type="submit"
                value={ modoEdicion ? 'Editar Nombre' : 'Registrar Nombre' } 
              />  
            </form>
            {
              error != null ? (
                <div className='alert alert-danger'>
                  {error}
                </div>
              ) : (
                <div></div>
              )
            }
          </div>  
        </div>
        
    </div>
    
  )
}

export default ListadoNombres
