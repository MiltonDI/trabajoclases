import React from 'react';

function Hola(props) {
    return (
        <div>
            <h1>PUCESE</h1>
            <h2>{props.mensaje}</h2>
            <h3>{props.pie}</h3>
        </div>
    );
}

export default Hola;