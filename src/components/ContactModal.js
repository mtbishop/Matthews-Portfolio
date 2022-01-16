import React, { Component } from 'react';
import GHLogo from '../assets/Images/GH logo.png';
import LILogo from '../assets/Images/LI logo.png';
import M from 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
import './ContactModal.css';

class Modal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <div
          className="modal-trigger wave effect waves-light btn"
          data-target="modal1"
          id="contactButton"
        >
          Contact Me
        </div>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div id="modalBody" className="white-text modal-content">
            <div className="row">
              <div className="col s12">
                <div id="closeButton" className="modal-close">
                  <div className="close-container">
                    <div className="leftright"></div>
                    <div className="rightleft"></div>
                  </div>
                </div>
                <h3 id="myInfo">My Info</h3>
              </div>
              <div id="contactContents">
                <div className="row">
                  <div className="col s12">
                    <p id="emailP">mtbishopdev@gmail.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <p id="phoneP">385-685-3051</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col l2 s12" id="socialLinks">
                    <a
                      rel="noreferrer"
                      href="https://github.com/mtbishop"
                      target="_blank"
                    >
                      <img
                        alt="Github"
                        className="mr-2"
                        src={GHLogo}
                        width="64px"
                      />
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/matthew-t-bishop/"
                      target="_blank"
                    >
                      <img
                        alt="LinkedIn"
                        className="mr-2"
                        src={LILogo}
                        width="64px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
