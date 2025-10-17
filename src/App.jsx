import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(null)
  

    const changeA = (e) => {
    setA(e.target.value); 

};
    const changeB = (e) => {
    setB(e.target.value); 

};
function Dzialania(znak){
  document.querySelector("#wynik").style.color = "black"
  switch (znak) {
    case "+": setResult( a-(-b));break;
    case "-":setResult( a -b);break;
    case "*":setResult( a*b);break;
    case "/":if(b==0){document.querySelector("#wynik").style.color = "red";setResult("Nie mozna dzielic przez zero")}else{setResult(a/b);}break;
    case "%":setResult(a%b);break;
    case "**":setResult(a**b);break;
    default:
      break;
  }
  


}
function Reset() {
  setA(0);
  setB(0);
  setResult(null);
}

  return (
    <>
      <input type="number" value={a} id ="a" onChange={changeA}/>
      <input type="number" value={b} id ="b" onChange={changeB}/>

       
        <button onClick={() => Dzialania("+")}>+</button>
        <button onClick={() => Dzialania("-")}>-</button>
        <button onClick={() => Dzialania("*")}>*</button>
        <button onClick={() => Dzialania("/")}>/</button>
        <button onClick={() => Dzialania("%")}>%</button>
        <button onClick={() => Dzialania("**")}>**</button>
        <button onClick={() => Reset()}>
          Reset
        </button>
        <p id="wynik">Wynik: {result}</p>
    </>
  )
}

export default App
