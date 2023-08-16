const SoundCube = ({name, theme, onChange, defaultChecked}) => {
    const soundUrl = `./assets/${name}.mp3`

    const handleCubeClick = () => {
        new Audio(soundUrl).play()
    }

    return (
        <>
            <div className={`key ${theme}`} onClick={handleCubeClick}>
            <input 
                type="checkbox" 
                onChange={onChange} 
                name={name}
                defaultChecked={defaultChecked}/>
                <span className={`sound ${theme}`}>{name}</span>
            </div>
        </>
    )
}

export default SoundCube

// heavily referenced from Shang's react-drum-kit-starter lesson