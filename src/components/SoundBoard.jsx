import playSound from "../uwu/playSound";
import SoundCube from "./SoundCube";

const SoundBoard = ({sounds, children}) => {

    return (

        <>
            <div className="wrapper">
                {children}
                <section className="keyboard">
                    <fieldset>
                        { 
                            sounds.map(soundName => <SoundCube name={soundName}/>)
                        }
                    </fieldset>
                </section>

            </div>
        </>

    );

}

export default SoundBoard;