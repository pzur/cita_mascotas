import React from 'react';
const Cita = ({ita,eliminar}) => {
    const{mascota,propietario,fecha,hora,sintomas}=ita;
    return ( 
        <div className="cita">
            <p>Mascota:<span>{mascota}</span></p>
            <p>Dueño:<span>{propietario}</span></p>
            <p>Fecha:<span>{fecha}</span></p>
            <p>Hora:<span>{hora}</span></p>
            <p>Síntomas:<span>{sintomas}</span></p>

            <button 
            className="button eliminar u-full-width"
            onClick={()=> eliminar(ita.id)}
            >
                Eliminar &times;
            </button>
        </div>
     );
}
 
export default Cita;