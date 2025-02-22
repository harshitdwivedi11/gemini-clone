import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest Beautiful Places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize concept of urban planning.</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding strategies for our work retreat.</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve readibility of following Code.</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter Prompt Here' />
            <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
            </div>
        </div>
      <p className="bottom-info">
      Crimson leaves danced, whispering secrets to the wind. Lost keys echoed in empty halls. Sunlight fractured, painting abstract patterns on dusty floors.
      </p>
      </div>
    </div>
    </div>
  )
}

export default Main
