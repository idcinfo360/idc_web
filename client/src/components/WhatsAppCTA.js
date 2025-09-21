import React from 'react';
import chatIcon from '../assets/chat-icon.svg';
import rocketIcon from '../assets/rocket-icon.svg';

const WhatsAppCTA = ({ floating }) => (
  <div className={floating ? 'floating-whatsapp' : 'whatsapp-cta'}>
    <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className={floating ? 'fab-whatsapp' : 'cta-button'}>
      {floating ? (
        <img src={chatIcon} alt="Chat" className="whatsapp-chat-icon" />
      ) : (
        <>
          Join Our WhatsApp Community 
          <img src={rocketIcon} alt="Rocket" className="whatsapp-rocket-icon" />
        </>
      )}
    </a>
  </div>
);

export default WhatsAppCTA;
