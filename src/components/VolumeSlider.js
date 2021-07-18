import React from 'react'
import { useState } from 'react'
import PlayAudio from './PlayAudio';
import rain from '../images/rain-sound.mp3'

const VolumeSlider = ({ audio, name}) => {
    const [volume, setVolume] = useState(1)

    return (
        <div>
            <PlayAudio audio= {rain} name={'Rain'} volume= {volume}></PlayAudio>
            <input className='volume-slider' type="range"
            style={{color: '#750C00'}}
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(e) => {
                setVolume(e.target.valueAsNumber)
            }} />
        </div>
    )
}

export default VolumeSlider
