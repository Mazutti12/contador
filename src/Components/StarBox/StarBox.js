import React, { useState } from "react";
import { ButtonStar } from './ButtonStar'

export const StarBox = () => {

    const [valor, setValor] = useState(0)

    function verify(v) {valor === v ? setValor(0) : setValor(v)} 

    return (        
            <div>
                <ButtonStar active={valor >= 1} onClick={() => verify(1)}/>
                <ButtonStar active={valor >= 2} onClick={() => verify(2)}/>
                <ButtonStar active={valor >= 3} onClick={() => verify(3)}/>
                <ButtonStar active={valor >= 4} onClick={() => verify(4)}/>
                <ButtonStar active={valor >= 5 } onClick={() => verify(5)}/>
            </div>
    )
}
