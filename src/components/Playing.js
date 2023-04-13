import React, { useContext } from 'react'
import AudioPlayerautoPlay from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../context';
export default function Playing() {
    const {song,handleSetSong} = useContext(Songs)
    const handleClickNext=()=>{
        handleSetSong(song.id+1)
    }
    const handleClickPrevious=()=>{
        handleSetSong(song.id-1)
    }
  return (
    <div> 
        <AudioPlayerautoPlay 
        className='player-music' 
        src={song.url} onPlay={e => console.log("onPlay")}
    // other props here
         showSkipControls={true} 
        showJumpControls={false} 
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}


  /></div>
  )
}
