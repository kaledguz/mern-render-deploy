import "./App.css"
import { useState } from "react"

function App() {
  const [result, setResult] = useState("")
  const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
  return (
    <>
      <div className="App">
        <h1>Mern Render</h1>

        <button
          onClick={async () => {
            const res = await fetch(`${URL}/ping`)
            const data = await res.json()
            console.log(data)
            setResult(data)
          }}
        >
          Users
        </button>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
