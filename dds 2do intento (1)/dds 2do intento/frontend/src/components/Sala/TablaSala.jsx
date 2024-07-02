import React from "react";

export default function Tabla({rows ,onEliminar}){
    const escribir = (booleano)=>{
        if (booleano){
            return ('SI')
        }
        return('NO')
    }

    const tbody = rows.map(e => 
        <tr key={e.Id}>
            <td>{e.Id}</td>
            <td>{e.NombreSala}</td>
            <td>{e.Capacidad}</td>
            <td>{escribir(e.Activo)}</td>
            <td>
            {e.Activo && (
                    <button
                        disabled={e.Eliminado === true}
                        className="btn btn-sm btn-danger"
                        onClick={() => { onEliminar(e.Id) }}
                    >
                        Eliminar
                    </button>
                )}
            </td>

            <td>
                 {
                     (<button disabled={e.Eliminado === true} className="btn btn-sm btn-secondary"  >Actualizar</button>)   
                 }  

            </td>
        </tr>
    )

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between aling-items-center">
                    <span>Resultados:</span>
                    <button type="button" className="btn btn-primary">
                         Nueva Sala
                    </button>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>Identificacion</th>
                            <th>Nombre</th>
                            <th>Capacidad</th>
                            <th>Activo</th>
                          
                        </thead>
                        <tbody>{tbody}</tbody>
                    </table>
                </div>

            </div>
        </>
    )
}