import { useEffect, useMemo, useState } from 'react'
import { getSound } from '../uwu/playSound'
import PlayIcon from './PlayIcon'
import StopIcon from './StopIcon'
import './SoundCube.css'

const SoundCube = ({name, theme, defaultChecked}) => {

    const audio = useMemo(() => getSound(name), [name])
    const [paused, setPaused] = useState(true)

    useEffect(() => {
        audio.addEventListener('play', () => setPaused(false))
        audio.addEventListener('pause', () => setPaused(true))
        audio.addEventListener('ended', () => setPaused(true))
    }, [audio])

    const handleCubeClick = () => {
        audio.currentTime = 0
        audio.paused ? audio.play() : audio.pause()
    }

    const id = `sound-cube-${name}`
    const className = `sound ${theme}`
    const ariaLabel = "Play / pause sound"
    const readOnly = defaultChecked === undefined

    return (
        <div className={`key ${theme}`}>
            { readOnly ? <>
                <button className={className} onClick={handleCubeClick} aria-label={ariaLabel}>
                    {name}
                    <span className="togglePlay">
                        {paused ? <PlayIcon /> : <StopIcon />}
                    </span>
                </button>
            </> : <>
                <input 
                    id={id}
                    type="checkbox" 
                    name={name}
                    defaultChecked={defaultChecked}
                />
                <label htmlFor={id} className={className}>{name}</label>
                <button className="togglePlay" onClick={handleCubeClick} aria-label={ariaLabel}>
                    {paused ? <PlayIcon /> : <StopIcon />}
                </button>
            </> }
        </div>
    )
}

export default SoundCube