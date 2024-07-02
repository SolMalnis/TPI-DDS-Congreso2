import React, { useEffect, useState } from 'react'

import servicesSala from "../../../services/sala.service.js"

import TablaSala from "./TablaSala.jsx"

//import RegistroSala from "./RegistroSala.jsx"

export default function Sala(){
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')

    const loadGrid = async() =>{
        const data = await servicesSala.getSalas()
        setRows(data)
    }

    useEffect(() => {
        loadGrid()
    }, [])

    const onEliminar = async (id) => {
        await servicesSala.eliminarSala(id)
        loadGrid()
    }

    return (
        <>
            {
                action === 'C' && (
                    <>
                         
                         <TablaSala rows={rows}  onEliminar={onEliminar} ></TablaSala>
                    </>
                ) 
            }
            {
                action !== 'C' && (
                    <>
                        
                    </>
                )
            }
        </>
    )

}