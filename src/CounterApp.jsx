
import { useState } from "react"


export const CounterApp = ({value}) => {

    const [counter, setCounter ] = useState(value)

    const handlerOperation = (operation) => {
        switch (operation) {
            case '+':
                setCounter(counter + 1)
                break;
            case '-':
                setCounter(counter - 1)
                break;
        
            default:
                break;
        }
    }
  return (
    
    <>
        <h1>CounterApp</h1>
        <p>{counter}</p>
        <button onClick={()=>handlerOperation('+')} > + </button>
        <button onClick={()=>handlerOperation('-')} > - </button>
    </>
  )
}
