import SoundCube from "./SoundCube";
import { soundList } from "./data";

const SoundContainer = () => {
    return (
        <div className="wrapper">
            <section className="keyboard">
                {/* Sounds will go here */}
                {
                    soundList.map((soundName, index) => {
                        return <SoundCube 
                            key={index}
                            name={soundName}/>
                    })
                }
            </section>
        </div>
    )
}

export default SoundContainer

// heavily referenced from Shang's react-drum-kit-starter lesson