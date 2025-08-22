import React from 'react';

const WhatsAppCTA = ({ floating }) => (
  <div className={floating ? 'floating-whatsapp' : 'whatsapp-cta'}>
    <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className={floating ? 'fab-whatsapp' : 'cta-button'}>
      {floating ? '💬' : 'Join Our WhatsApp Community 🚀'}
    </a>
  </div>
);

export default WhatsAppCTA;
