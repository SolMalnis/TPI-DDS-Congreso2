import React, { useEffect, useState } from 'react'

import getEvaluaciones from "../../../services/evaluacion.service.js"

import TablaEvaluacion from "./TablaEvaluacion.jsx"


export default function Evaluacion(){
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')
    
    const loadGrid = async() =>{
        const data = await getEvaluaciones()
        setRows(data)
    }

    useEffect(() => {
        loadGrid()
    }, [])

    return (
        <>
            {
                action === 'C' && (
                    <>
                         
                         <TablaEvaluacion rows={rows}  ></TablaEvaluacion>
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