import { useState } from 'react';
import '../styles/components/ContactModal.css';

const ContactModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button className="openModal" onClick={() => setIsOpened(true)}>
        Contact Me
      </button>

      {isOpened && (
        <>
          <div
            onClick={() => {
              setIsOpened(false);
            }}
            className="modalShadow"
          ></div>
          <div className="contactModal">
            <h1>Modal Title</h1>
            <h2>Testing123</h2>
            <button onClick={() => setIsOpened(false)}>X</button>
          </div>
        </>
      )}
    </>
  );
};

export default ContactModal;
