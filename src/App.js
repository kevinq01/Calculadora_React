import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

//npm install mathjs
import { evaluate } from 'mathjs';

function App() {

  const [input, SetInput] = useState('');

  const agregarInput = val => {
    SetInput(input + val);
  }

  const calcularResultado = () =>{
    if(input){
      SetInput(evaluate(input));
    }else{
      alert('Por favor ingrese un valor');
    }
    
  }

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
      
        <div className='fila'>
          <Boton click={agregarInput}>1</Boton>
          <Boton click={agregarInput}>2</Boton>
          <Boton click={agregarInput}>3</Boton>
          <Boton click={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton click={agregarInput}>4</Boton>
          <Boton click={agregarInput}>5</Boton>
          <Boton click={agregarInput}>6</Boton>
          <Boton click={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton click={agregarInput}>7</Boton>
          <Boton click={agregarInput}>8</Boton>
          <Boton click={agregarInput}>9</Boton>
          <Boton click={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton click={calcularResultado}>=</Boton>
          <Boton click={agregarInput}>0</Boton>
          <Boton click={agregarInput}>.</Boton>
          <Boton click={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear clear={ ()=> SetInput('') }>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
