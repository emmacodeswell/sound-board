import SoundCube from "./SoundCube";

const SoundBoard = ({sounds, children}) => {

    return (

        <>
            <div className="wrapper">
                {children}
                <section className="keyboard">
                    <fieldset>
                        { sounds.length ? (
                            sounds.map(soundName => <SoundCube name={soundName}/>)
                        ) : <>
                            <h2>Why no sounds? <span className="sadFace">☹</span></h2>
                        </>}
                    </fieldset>
                </section>
            </div>
        </>

    );

}

export default SoundBoard;