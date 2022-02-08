import '../styles/components/ContactModal.scss';

const ContactModal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <p>
            Email: <a href="/">mtbishopdev@gmail.com</a>
          </p>
          <p className="phoneNumber">Phone: 385-685-3051</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
