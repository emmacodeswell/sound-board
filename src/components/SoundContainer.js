import SoundCube from "./SoundCube";
import { soundList } from "./data";

const SoundContainer = () => {
    return (
        <div className="wrapper">
            <section className="selection">
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

// heavily referenced from Shang's react-drum-kit-starter lesson