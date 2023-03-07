import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() {
  //useRef is different from useState - it doesn't trigger re-renders. Use to maintain variables 
  //that will not alter functionality or itneractivity of the app
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
  console.log(resultRef.current)
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function multiply(e) { 
    // Add the code for the multiply function
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
    inputRef.current.value = null 
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault(); 
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */}
          {`Current Total: ${Number(result)}`}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
