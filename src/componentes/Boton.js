import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props){
    const esOperador = valor =>{
        //isNaN es si no es un numero
        //Si no es un numero, ni punto ni un igual entonces retornamos true
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return(
        //La propieda children toma el valor que hay cuando se llama la funcion <Boton>1</Boton> ese 1
        //La funcion trimEnd elimina los espacios al final
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={ () => props.click(props.children) }>

            
            {props.children}
        </div>
    );
}

export default Boton