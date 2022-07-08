import React, { useState } from 'react'
import useSound from 'use-sound'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayAudio = ( {audio, name, volume} ) => {
    const [playing, setPlaying] = useState(false)
    const [play, { stop }] = useSound(audio, { volume });

    return (
        <div className='sound' 
        onClick={() => {    
            playing ?  stop(): play() ;
            setPlaying(!playing);
        }}>
            {playing ? <FaPauseCircle style={{fontSize:'20px'}}/> 
            : <FaPlayCircle  style={{fontSize:'20px'}}/> }
            <h3 style={{fontSize:'1.2em'}}>{name}</h3>
        </div>
    )
}

export default PlayAudio
