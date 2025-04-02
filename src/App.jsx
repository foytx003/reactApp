import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from './WelcomePage' // Import the WelcomePage component

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('') // State for the input field
  const [response, setResponse] = useState(null) // State to store the API response
  // const [firstName, setFirstName] = useState('') // State to store the firstName
  const navigate = useNavigate() // Hook to navigate to another page

  const handleApiCall = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/users/${text}`)
      setResponse(result.data) // Store the API response
      navigate('/welcome', { state: { firstName: result.data.firstName } }) // Navigate to the Welcome page
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter query..." 
        />
        <button onClick={handleApiCall}>Fetch Data</button>
        {response && <p>API Response: {JSON.stringify(response)}</p>}
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  )
}

export default AppWrapper
