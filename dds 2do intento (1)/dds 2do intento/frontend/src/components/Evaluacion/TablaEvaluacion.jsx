import React from "react";

export default function Tabla({rows}){

    const tbody = rows.map(e => 
        <tr key={e.Id}>
            <td>{e.IdCongreso}</td>
            <td>{e.IdParticipante}</td>
            <td>{e.Puntuacion}</td>
            <td>{e.Comentarios}</td>
            <td>{e.Fecha}</td>
            <td>
                 {
                     (<button disabled={e.Eliminado === true} className="btn btn-sm btn-danger" >Eliminar</button>)   
                 }  

            </td>

            <td>
                 {
                     (<button disabled={e.Eliminado === true} className="btn btn-sm btn-secondary" >Actualizar</button>)   
                 }  

            </td>
        </tr>
    )

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between aling-items-center">
                    <span>Resultados:</span>
                    <button type="button"  className="btn btn-primary">
                         Nueva Evaluacion
                    </button>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>Identificacion</th>
                            <th>Congreso</th>
                            <th>Participante</th>
                            <th>Puntuacion</th>
                            <th>Comentarios</th>
                            <th>Fecha</th>
                        </thead>
                        <tbody>{tbody}</tbody>
                    </table>
                </div>

            </div>
        </>
    )
}