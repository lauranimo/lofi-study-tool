import React from 'react'
import Audio from './Audio';
import test from '../images/levi-test.mp3'
import rain from '../images/rain-sound.mp3'
import cafe from '../images/cafe-sound.mp3'

const Sound = ({ volume }) => {


  return (
    <div className='all-sounds'>
        <Audio audio={rain} name = {'Rain'}></Audio>
        <Audio audio= {cafe} name={'Coffee Shop'}></Audio>
        <Audio audio= {test} name={'Levi'}></Audio>

    </div>
  ); 
}

export default Sound
