import { useState, useEffect } from 'react'
import firebase from './firebase';
import { getDatabase, ref, child, onValue, set, get, push } from 'firebase/database'
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
const allUserSoundsRef = ref(database, `/userSounds`)

// guid = globally unique identifier
let guid = localStorage.getItem('guid')
let userSoundsRef

if (guid) {
  userSoundsRef = child(allUserSoundsRef, guid)
} else {
  userSoundsRef = push(allUserSoundsRef)
  localStorage.setItem('guid', userSoundsRef.key)
}

function App() {
  const [count, setCount] = useState(0)
  const [userSounds, setUserSounds] = useState(null)
  
  useEffect(() => {
    const promise = get(userSoundsRef)
    promise.then(data => setUserSounds(data.val() || []))
  }, [])

  return (
    <div className='soundBoard'>
      {!userSounds ? null : <SoundContainer
      onToggleSound={handleToggleSound} 
      name='userSounds'
      value={userSounds}/>}

      <button onClick={handleSubmit}>Create Soundboard!</button>
    </div>
  )
}

const handleToggleSound = (selectedValues) => {
  console.log(selectedValues)
  
  set(userSoundsRef, selectedValues)
  // TODO: use push() to generate unique keys for each user 
}

const handleSubmit = (event) => {
  
}

export default App
