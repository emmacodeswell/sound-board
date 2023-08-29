import playSound from "../uwu/playSound";

const SoundBoard = ({sounds}) => {

    return (

        <>
            <section>
                { 
                    sounds.map(soundName => (
                        <button key={soundName} onClick={() => playSound(soundName)}>{soundName}</button>
                    )) 
                }
            </section>
        </>

    );

}

export default SoundBoard;