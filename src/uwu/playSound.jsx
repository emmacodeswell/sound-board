const playSound = (soundName) => {
    new Audio(`./assets/${soundName}.mp3`).play()
}

export default playSound