import React, { useState } from "react";
import { Button, Display} from '../index'
import { CSS } from './index.css'

export const Box = () => {

    const teste = {
        width: '1000px',
        height: '500px',
        background: 'red',
        allingItens: 'center',
        display: 'flex',
        color: 'white'
    }

    const [valor, setValor] = useState(0)

    const  decrement = () => valor > 0 && setValor(valor - 1)

    const increment = () => valor < 10 && setValor(valor + 1)

    return (
        <div style={teste}>
            <Button disabled={valor === 0} onClick={decrement}>-</Button>
            <Display valor={valor}/>
            <Button disabled={valor === 10} onClick={increment}>+</Button>
        </div>
    )
}
