import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link } from 'react-router-dom'
import firebase from './firebase';
import { getDatabase, ref, child, onValue, set, push } from 'firebase/database'
import Header from './components/Header'
import SoundCube from './components/SoundCube';
import SoundContainer from './components/SoundContainer';
import './App.css'
import SoundBoard from './components/SoundBoard';

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

function AppRouter() {
  const router = createBrowserRouter([ 
    {
      path: '*',
      element: <App />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [userSounds, setUserSounds] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const updateUserSounds = data => setUserSounds(data.val() || [])
    onValue(userSoundsRef, updateUserSounds)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/view")
  }

  return <>
    <Header />
    <div className='soundBoard'> 
      <Routes>
        <Route path="/" element={
          <>
            {!userSounds ? null : (
              <SoundContainer
                onToggleSound={handleToggleSound} 
                name='userSounds'
                value={userSounds}
              >
              </SoundContainer>
            )}
            <Link className='button' to='/view' type='submit'>Create Soundboard!</Link>
          </>
        }/>
        <Route path="/view" element={
          <>
            {!userSounds ? null : (
              <SoundBoard sounds={userSounds}>
              </SoundBoard>
            )}
            <Link className='button' to='/'>Go back</Link>
          </>
        }/>
      </Routes>
    </div>
  </>

}

const handleToggleSound = (selectedValues) => {
  console.log(selectedValues)
  
  set(userSoundsRef, selectedValues)
  // TODO: use push() to generate unique keys for each user 
}

export default AppRouter
