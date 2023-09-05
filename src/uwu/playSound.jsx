const playSound = (soundName) => {
    getSound(soundName).play()
}

export const getSound = (soundName) => new Audio(`./assets/${soundName}.mp3`)

export default playSound