import React, { useState } from "react";

export const Enderecos = () => {

    const [estados, setEstados]= useState(null)
    const [estados, setEstados]= useState([{sigla: 'RS', nome:'Rio Grande do Sul'}])

    return (
        <>
            <select>
                {estados.map(estado => <option>{estado.nome}</option>)}        
            </select>
            <span>Cidades:</span>
        </>
    )
}

