import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'


function App() {

  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('datos'));
  
  if(!citasIniciales) {
    citasIniciales = [];
  }
  
  //Arreglo de citas
  const[citas, guardarCitas] = useState(citasIniciales);
  
  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect (() => {
    let citasIniciales = JSON.parse(localStorage.getItem('datos'));

    if(citasIniciales){
      localStorage.setItem('datos', JSON.stringify(citas));
    }else {
      localStorage.setItem('datos', JSON.stringify([]));
    }
  }, [citas]);

  //Función que tome citas actuales y la nueva
  const Crear = (tita) => {
   guardarCitas([
     ...citas,
     tita
   ]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(ci => ci.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes- Botica</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita ={Crear}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cit => (
              <Cita 
                key={cit.id}
                ita= {cit}
                eliminar = {eliminarCita}
              />
            ))} 
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
