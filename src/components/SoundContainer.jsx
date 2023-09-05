import { useRef } from 'react';
import SoundCube from "./SoundCube";
import { soundList } from "./data";

const SoundContainer = ({children, onToggleSound, name, value}) => {

    const fieldset = useRef(null)

    const handleChange = (event) => {
        const inputs = Array.from(fieldset.current.elements)
        const selectedValues = inputs
            .filter(input => input.checked)
            .map(input => input.name)
        onToggleSound(selectedValues)
    }

    return (
        <div className='wrapper'>
            {children}
            <section className="keyboard">
                <fieldset 
                    ref={fieldset} 
                    name={name} 
                    onChange={handleChange}>
                    {
                        soundList.map(soundName => {
                            return <SoundCube 
                                key={soundName}
                                name={soundName}
                                defaultChecked={Boolean(value.find(v => v === soundName))}
                            />
                        })
                    }
                </fieldset>
            </section>
        </div>
    )
}

export default SoundContainer