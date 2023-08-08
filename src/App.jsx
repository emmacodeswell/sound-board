import { useState, useEffect } from 'react'
import firebase from './firebase';
import { getDatabase, ref, onValue } from 'firebase/database'
import './App.css'

// This is a highly specific (to me) sound board
// The basic premise of this sound board is to create a 9 panel soundboard with sounds that can play from it
// Other sounds off to the side can be dragged in per the user's preference or need
// The replaced sound will snap into the new sounds old place in the 'container' off to the side

// Stretch goals
// Light and dark theme just for fun (loads user's system preference first)

// Pseudo code
// Create a json file that holds ALL possible sounds with MP3 or MP4 file
// Import json file into firebase
//  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
    </>
  )
}

export default App
