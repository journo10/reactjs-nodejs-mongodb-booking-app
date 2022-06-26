import React from 'react';
import "./mail-list.css"

const MailList = () => {
  return (
    <div className="m-list">
      <div className="m-item">
        <div className="m-title">
          <h1>Zamandan ve paradan tasarruf edin!</h1>
          <p>Kaydolursanız en iyi fırsatları size göndereceğiz</p>
        </div>
        <div className="m-input" >
          <input type="text" placeholder='E-posta adresiniz:' />
          <button>Üye Ol</button>
        </div>
      </div>
    </div>
  )
}

export default MailList