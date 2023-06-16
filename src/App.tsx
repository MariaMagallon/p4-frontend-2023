
import './App.css'

function App() {

  return (
    <>
      <h1>App</h1>
      <button onClick={()=> console.log(import.meta.env.VITE_API_KEY)}></button>
    </>
  )
}

export default App
