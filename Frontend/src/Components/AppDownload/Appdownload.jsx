import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets';
const Appdownload = () => {
  return (
    <div className='app-download'   >
        <p>Download the app</p>
        <div className="app-download-btns">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload  