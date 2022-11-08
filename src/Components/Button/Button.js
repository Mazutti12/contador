import React from "react";
import { CSS } from './index.css'

export const Button = ({children, disabled, onClick}) => {

    const buttonDisgn = {
        width: '200px',
        height: '200px',
        background: 'gray',
        display: 'flex'
    }

    return (
        <>
            <button style={buttonDisgn} disabled={disabled} onClick={onClick}>{children}</button>
        
        </>
    )
}

