import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link } from 'react-router-dom'
import firebase from './firebase';
import { getDatabase, ref, child, onValue, set, push } from 'firebase/database'
import Header from './components/Header'
import SoundCube from './components/SoundCube';
import SoundContainer from './components/SoundContainer';
import './App.css'
import SoundBoard from './components/SoundBoard';
import SparkleIcon from './components/SparkleIcon';

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
                <SparkleIcon className="sparkle top" />
                <SparkleIcon className="sparkle bottom" />
              </SoundContainer>
            )}
            <Link className='button' to='/view' type='submit'>Create Soundboard!</Link>
          </>
        }/>
        <Route path="/view" element={
          <>
            {!userSounds ? null : (
              <SoundBoard sounds={userSounds}>
                  <SparkleIcon className="sparkle top" />
                  <SparkleIcon className="sparkle bottom" />
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
