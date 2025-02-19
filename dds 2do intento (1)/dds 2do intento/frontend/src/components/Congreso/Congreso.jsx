import React, { useEffect, useState } from 'react'
import servicesCongreso from "../../../services/congreso.service.js"

import TablaCongreso from "./TablaCongreso.jsx"
import RegistroCongreso from "./RegistroCongreso.jsx"


export default function Congreso(){
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')
    const [item, setItem] = useState({})

    const loadGrid = async() =>{
        const data = await servicesCongreso.getCongreso()
        setRows(data)
    }

    useEffect(() => {
        loadGrid()
    }, [])

    const onEliminar = async (id) => {
        await servicesCongreso.eliminarCongreso(id)
        loadGrid()
    }

    const onNewClick = () => {
        setAction('N')
    }

    const onActualizar = async(item)=>{
        setItem(item)
        setAction('A')
    }

    const onGuardar = async (data) => {
        const result = await servicesCongreso.crearCongreso(data)
        if(result){
            loadGrid()
            setAction('C')
        }

    }
    const onCancelar = () => {
        setAction('C')
    }

    const actualizado = async (id, data) => {
        const result = await servicesCongreso.actualizarCongreso(id, data)
        if(result){
            loadGrid()
            setAction('C')
            setItem({})
        }
    }

    return (
        <>
            {
                action === 'C' && (
                    <>
                         
                         <TablaCongreso rows={rows} onNewClick={onNewClick} onActualizar={onActualizar} onEliminar={onEliminar} ></TablaCongreso>
                    </>
                ) 
            }
            {
                action !== 'C' && (
                    <>
                        <RegistroCongreso onGuardar={onGuardar} onCancelar={onCancelar} item = {item} actualizado={actualizado}/>
                    </>
                )
            }
        </>
    )

}