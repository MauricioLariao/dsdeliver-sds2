import { useState } from "react";

function Counter (){

  //conceito de estado, que funciona como uma variavel
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter +1);
  }

  const handleDecrease = () => {
    if (counter >= 1) {
      setCounter(counter -1)
    }
   
  }

  return(
    <div>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Decrementar</button>
  <h1>Valor do contador: {counter}</h1>
    </div>
  )
}

export default Counter;