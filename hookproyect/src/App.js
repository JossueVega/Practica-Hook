import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header';
import Repertorio from './Componentes/Repertorio';
import Libros from './Componentes/Libros';
import Libreria from './Formato/Estructura';

function App() {
  return (
    <div className="App">
        <Libreria>
          <Header/>
          <div className="Containers">
              <Libros/>
              <Repertorio/>            
          </div> 
        </Libreria>
      </div>
  );
}

export default App;
