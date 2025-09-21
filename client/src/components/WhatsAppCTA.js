import React from 'react';
import chatIcon from '../assets/chat-icon.svg';
import rocketIcon from '../assets/rocket-icon.svg';

const WhatsAppCTA = ({ floating }) => (
  <div className={floating ? 'floating-whatsapp' : 'whatsapp-cta'}>
    <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className={floating ? 'fab-whatsapp' : 'cta-button'}>
      {floating ? (
        <img src={chatIcon} alt="Chat with IDC Indian Developer Community" className="whatsapp-chat-icon" />
      ) : (
        <>
          Join Our WhatsApp Community 
          <img src={rocketIcon} alt="Launch Your Developer Career with IDC Community" className="whatsapp-rocket-icon" />
        </>
      )}
    </a>
  </div>
);

export default WhatsAppCTA;
