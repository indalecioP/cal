import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');
  
  return (
    <div className='contenedor'>
      <div className='fila'>
        <div className='pantalla'>
          {input}
        </div>
      </div>
      <div className='fila'>
        <div className='boton' onClick={()=>setInput(input + '1')}>1</div>
        <div className='boton' onClick={()=>setInput(input + 2)}>2</div>
        <div className='boton' onClick={()=>setInput(input + 3)}>3</div>
        <div className='boton2' onClick={()=>setInput(input + '+')}>+</div>
      </div>
      <div className='fila'>
        <div className='boton' onClick={()=>setInput(input + 4)}>4</div>
        <div className='boton' onClick={()=>setInput(input + 5)}>5</div>
        <div className='boton' onClick={()=>setInput(input + 6)}>6</div>
        <div className='boton2' onClick={()=>setInput(input + '-')}>-</div>
      </div>
      <div className='fila'>
        <div className='boton' onClick={()=>setInput(input + 7)}>7</div>
        <div className='boton' onClick={()=>setInput(input + 8)}>8</div>
        <div className='boton' onClick={()=>setInput(input + 9)}>9</div>
        <div className='boton2' onClick={()=>setInput(input + '*')}>*</div>
      </div>
      <div className='fila'>
        <div className='boton' onClick={()=>input != ''?setInput(evaluate(input)):alert('agrega un valor')}>=</div>
        <div className='boton' onClick={()=>setInput(input + 0)}>0</div>
        <div className='boton' onClick={()=>setInput(input + '.')}>.</div>
        <div className='boton2' onClick={()=>setInput(input + '/')}>/</div>
      </div>
      <div className='fila'>
        <div className='boton clear' onClick={()=>setInput('')}>clear</div>      
      </div>
    </div>
  )
}

export default App
