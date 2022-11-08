import React from "react";
import { SideButton } from "./SideButton";

const NavPage = {
    display: 'flex'    
}

export const NavPageBox = () => {
    return (
        <div style={NavPage}>
            <SideButton> {'<'} </SideButton>
            <SideButton> Pra cá</SideButton>
        </div>
    )
}