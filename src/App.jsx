import { useState, useEffect } from 'react'
import firebase from './firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database'
import SoundCube from './components/SoundCube';
import SoundContainer from './components/SoundContainer';
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

// Global Variables
const database = getDatabase(firebase)
const dbRef = ref(database)
const userSoundsRef = ref(database, '/userSounds')

function App() {
  const [count, setCount] = useState(0)
  const [userSounds, setUserSounds] = useState([])

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

  }, [])

  return (
    <div className='soundBoard'>
      <SoundContainer />
      <button onClick={handleSubmit}>Create Soundboard!</button>
      {/* If button = checked handleAddSound, if unchecked handleRemoveSound */}
    </div>
  )
}

const handleAddSound = (event) => {
  event.preventDefault()

  const database = getDatabase(firebase)
  const dbRef = ref(database)
  push(dbRef, userSounds)
  setUserSounds([])
}

const handleRemoveSound = (soundId) => {
  // Connect to database
  const database = getDatabase(firebase)
  const dbRef = ref(database, `/${soundId}`)

  remove(dbRef)
}

const handleSubmit = (event) => {
  
}

export default App
