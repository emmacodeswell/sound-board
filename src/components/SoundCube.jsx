const SoundCube = ({name, theme}) => {
    const soundUrl = `./assets/${name}.mp3`

    const handleCubeClick = () => {
        new Audio(soundUrl).play()
    }

    return (
        <div className={`key ${theme}`} onClick={handleCubeClick}>
            <span className={`sound ${theme}`}>{name}</span>
        </div>
    )
}

export default SoundCube

// heavily referenced from Shang's react-drum-kit-starter lesson