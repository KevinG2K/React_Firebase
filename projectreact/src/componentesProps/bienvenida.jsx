// Un componente puede tener diferentes propiedades
// Se puede trabajar con cualquier tipo de datos
import React from 'react'

// como parametros usamos | props | para acceder a las propiedades de un componente 
/* 1ra Forma 
const Bienvenida = (props) => {
  return (
    <h2>Bienvenido {props.nombre} {props.edad}</h2>
  )
}
*/

//2da forma con extrapolación de props
const Bienvenida = (props) => {

  // con esto hacemos el object destructiring de la props
  // es decir, ya no se necesita acceder varias veces a las propiedades del objeto props
  const {nombre} = props
  const {edad} = props
  return (
    <h2>Bienvenido {nombre} {edad}</h2>
  )
}

export default Bienvenida

/* Este ejemplo estaría en App.jsx para que funcione el props
<h1>Propiedades de los Componentes</h1>
      <Bienvenida nombre="Kevin" edad='24' />
      <Bienvenida nombre="Victoria" edad='23'/>
      <Bienvenida nombre="Francisca" edad='22'/>
      <Bienvenida nombre="José" edad='21'/>
*/