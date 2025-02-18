import React from 'react'
import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='Share'>
      <div className='ShareWrapper'> 
      <div className='ShareTop'>

      <img className='shareProfileName' src='\images\bleser.jpg'></img>
      <input placeholder='What is in your mind safic' className='shareInput'> 
      
      </input>

      </div>
      <hr className='shareHr'/>
      <div className='shareBottom'>
        <div className='shareOptions'>
          <div className='shareOption'>
               <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
             <span className='shareOptionText'>Photo or Vedio</span>

          </div>

          <div className='shareOption'>
               <LabelIcon htmlColor='blue' className='shareIcon'/>
             <span className='shareOptionText'>Tag</span>

          </div>

          <div className='shareOption'>
               <RoomIcon htmlColor='green' className='shareIcon'/>
             <span className='shareOptionText'>Location</span>

          </div>

          <div className='shareOption'>
               <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
             <span className='shareOptionText'>Feeling</span>

          </div>
        </div>
        <button className='shareButton'>Share</button>
      </div>
      </div>
    </div>
  )
}
