import React, { useState} from 'react'
import PlayAudio from './PlayAudio'
import { FaVolumeUp, FaVolumeDown } from 'react-icons/fa'

const Audio = ( {audio, name }) => {
    const [volume, setVolume] = useState(1)

    return (
        <div>
            <PlayAudio audio= {audio} name={name} volume= {volume}></PlayAudio>
            <div className="volume-control">
                <FaVolumeDown style={{fontSize:'20px'}}></FaVolumeDown>
                <input className='volume-slider' type="range"
                style={{color: '#750C00'}}
                min={0}
                max={1}
                step={0.02}
                value={volume}
                onChange={(e) => {
                    setVolume(e.target.valueAsNumber)
                }} />
                <FaVolumeUp style={{fontSize:'20px'}}></FaVolumeUp>
            </div>
            
        </div>
    )
}

export default Audio
