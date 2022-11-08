import React from 'react';
import ReactDOM from 'react-dom/client';
import { Enderecos, Box, StarBox, NavPageBox } from './Components/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      {/* <Box/>   */}
      {/* <StarBox/>
      <NavPageBox/> */}
      <Enderecos/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
