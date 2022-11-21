import './App.css';
import React, { useState } from 'react';
import { evaluate } from "mathjs"


const nums = [{
    id:"one"
  },{
    id:'two'
  },{
    id:'three'
  },{
    id:'four'
  },{
    id:'five'
  },{
    id:'six'
  },{
    id:'seven'
  },{
    id:'eight'
  },{
    id:'nine'
  }
]




const bottomActions = [
  {
    id:'zero',
    signo:'0'
  },
  {
    id:'decimal',
    signo:'.'
  }
]

const topActions =[
  {
    id:'clear',
    signo:'AC'
  },
  {
    id:'divide',
    signo:'/'
  },
  {
    id:'multiply',
    signo:'*'
  }
]

const verticalActions =[
  {
    id:'subtract',
    signo:'-'
  },
  {
    id:'add',
    signo:'+'
  },
   {
    id:'equals',
    signo:'='
   }
]

let decimal = false;
const initialValue = '0';
//hay un operador antes de mi
 let operador = false;

 let negative = false;
function App() {
  // registra cada numero y operador
  const [operations, setOperations] = useState([]);
  //muestra la operación completa basandose en operations
  const [text, setText] = useState(initialValue);
  //solo de prueba
  const [pib, setpib] = useState(0);
  const handleClick = (signo) =>{
    switch(signo){
      case 'AC':
        //limpia el array y el texto
        setOperations([]);
        setText(initialValue);
        decimal = false;
        break;
      case '=':
        if(isNaN(operations[operations.length - 1])) console.log('no se debe de ejecutar la operación');
        //ejecuta la evalucion, pero primero hace un join de todo el texto
        //setText(evaluate(operations.join(' ')));
        setpib(i => i +1);
        break;
      case '.':
        if(!decimal)setText(i => `${i}${signo}`);
        decimal = true;
        break;
      default:
        if(isNaN(signo) && !operador){ 
          //añadir el operador en el array
          setText(i => i === initialValue ? i : `${i} ${signo} `)
          decimal = false;
          operador = true;
          negative = false;
        }
        else if( signo === '-' && !negative){
          setText(i => i === initialValue ? i : `${i} ${signo}`);
          negative = true;
        }
        else if( isNaN(signo) && operador && negative){
          //elimnar los signos anteriores
          const updateOperations = operations.concat();
          const lenght = updateOperations.lastIndexOf
          console.log(updateOperations.slice)
        }
        else if(!isNaN(signo)) {
          setText(i => i === initialValue ? signo : `${i}${signo}` );
          operador = false;
        }
    }
  }
  React.useEffect(() =>{
    console.log('resultado:',text);
  },[pib])

    return (
    <div className="App">
      <div className="calculator">
        <div className="display-container" id='display'>
          <p id='display'>{text}</p>
        </div>
        <div className="pads">
          <div className="pads-actions-top">
            {topActions.map(i => <button id={i.id} onClick={() => handleClick(i.signo)} className='padnum'>{i.signo}</button>)}
          </div>
          <div className="padsnumbers">
            {nums.map((i,n) => <button id={i.id} onClick={() => handleClick(`${n+1}`)} className='padnum'>{n+1}</button>)}
          </div>
          <div className="pads-actions-vertical">
            {verticalActions.map(i => <button id={i.id} onClick={() => handleClick(i.signo)} className='padnum'>{i.signo}</button>)}
          </div>
          <div className="pads-actions-bottom">
            {bottomActions.map(i => <button id={i.id} onClick={() => handleClick(i.signo)} className='padnum'>{i.signo}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


  const example = ['36','*','-','41'];
  const anidado = '';
  const exampleTwo = ['36','*','-','+','41'];
 function makerOperations() {
  const resultado = example.reduce((prev,current,currentIndex) =>{
      const futureIndex = currentIndex + 1;

      //analizar si el siguiente no es un numero
      //analizar si el actual es un numero
      //anazaliar si el previo no es un numero y tu también no eres un numero

  },'');




  console.log(resultado);
}

const  CheckerValues = () =>

function checkerValues (){

}