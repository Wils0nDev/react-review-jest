
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'
import { HelloWorlApp } from './HelloWorlApp'

function App() {

  const title = true
  const value = 0
 
  return (
     // Un fragmento "<> </>" es como un nodo padre pero sin etiquetas html 
    <> 
    {/* Nuestros componentes siempre tienen q estar dentro de un nodo padre */}
    {/* <HelloWorlApp />
    <FirstApp  title={123}/> */}
    <CounterApp value={value} />
    </>
   )
}

export default App
