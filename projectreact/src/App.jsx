import logo from './logo.svg';
import './App.css';
import Cards from './componentesProps/ejemploPractico';


function App() {
  return (
    <div className='container'>
      <h1>Propiedades de los componentes</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <Cards
            imagen="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
            titulo="Titulo de card 1"
            texto="Texto de la card 1"
            >
          </Cards>
        </div>
        <div className='col'>
          <Cards
            imagen="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
            titulo="Titulo de card 2"
            texto="Texto de la card 2"
            >
          </Cards>
        </div>
        <div className='col'>
          <Cards
            imagen="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
            titulo="Titulo de card 3"
            texto="Texto de la card 3"
            >
          </Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
