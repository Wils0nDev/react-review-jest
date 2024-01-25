
import { useState } from "react"


export const CounterApp = ({value}) => {

    const [counter, setCounter ] = useState(value)

    const handlerAdd = () => {
                setCounter(counter + 1)
    }

    const handlerSubtract = () => {
        setCounter(counter - 1)
    }
  return (
    
    <>
        <h1>CounterApp</h1>
        <p>{counter}</p>
        <button onClick={handlerAdd} > + </button>
        <button onClick={handlerSubtract} > - </button>
    </>
  )
}