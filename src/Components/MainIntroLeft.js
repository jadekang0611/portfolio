import React, { useState } from 'react';
import '../Styles/Intros.css';
import '../Styles/MainIntroLeft.css';
import Badge from 'react-bootstrap/Badge';
import BingleImage from '../images/BINGLE.png';
import RobinImage from '../images/robin.png';
import DevatingImage from '../images/devating.png';
import DorstepImage from '../images/dorstep.png';
import CelezumImage from '../images/celeZum.png';
import ArticleImage1 from '../images/article1.jpg';
import ArticleImage2 from '../images/article2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ModalTemplate from '../ modals/ModalTemplate';
import ModalTemplate2 from '../ modals/ModalTemplate2';
import { information } from '../data/information.js';

function MainIntroLeft() {
  const [showRobin, setShowRobin] = useState(false);
  const robinOpenHandler = () => {
    setShowRobin(true);
  };
  const robinCloseHandler = () => {
    setShowRobin(false);
  };

  const [showBingle, setShowBingle] = useState(false);
  const bingleOpenHandler = () => {
    setShowBingle(true);
  };
  const bingleCloseHandler = () => {
    setShowBingle(false);
  };

  const [showDorstep, setShowDorstep] = useState(false);
  const dorStepOpenHandler = () => {
    setShowDorstep(true);
  };
  const dorStepCloseHandler = () => {
    setShowDorstep(false);
  };

  const [showDevating, setShowDevating] = useState(false);
  const devatingOpenHandler = () => {
    setShowDevating(true);
  };
  const devatingCloseHandler = () => {
    setShowDevating(false);
  };

  const [showCeleZum, setShowCeleZum] = useState(false);
  const celeZumOpenHandler = () => {
    setShowCeleZum(true);
  };
  const celeZumCloseHandler = () => {
    setShowCeleZum(false);
  };

  const [showArticle1, setShowArticle1] = useState(false);
  const article1OpenHandler = () => {
    setShowArticle1(true);
  };
  const article1CloseHandler = () => {
    setShowArticle1(false);
  };

  const [showArticle2, setShowArticle2] = useState(false);
  const article2OpenHandler = () => {
    setShowArticle2(true);
  };
  const article2CloseHandler = () => {
    setShowArticle2(false);
  };

  return (
    <section className="left-section featured-container">
      <div className="featured-card one"></div>
      <div className="featured-card startup-box">
        <span>category</span>
        <h2 className="title-section">startups</h2>
      </div>
      <div className="featured-card two hover-effect">
        <img src={RobinImage} alt="robin" />
        <div className="modalIndicator">
          <button onClick={robinOpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate
          show={showRobin}
          data={information[0]}
          onHide={robinCloseHandler}
        />
      </div>
      <div className="featured-card three hover-effect">
        <img src={BingleImage} alt="bingle-logo" />
        <div className="modalIndicator">
          <button onClick={bingleOpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate
          show={showBingle}
          data={information[1]}
          onHide={bingleCloseHandler}
        />
      </div>
      <div className="featured-card article-box">
        <span>category</span>
        <h2 className="title-section">articles</h2>
      </div>

      <div className="featured-card five hover-effect">
        <img src={DevatingImage} alt="devating-main" />
        <div className="modalIndicator">
          <button onClick={devatingOpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate
          show={showDevating}
          data={information[3]}
          onHide={devatingCloseHandler}
        />
      </div>
      <div className="featured-card six hover-effect">
        <img src={ArticleImage2} alt="article 2" />
        <div className="modalIndicator">
          <button onClick={article2OpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate2
          show={showArticle2}
          data={information[6]}
          onHide={article2CloseHandler}
        />
      </div>
      <div className="featured-card seven hover-effect">
        <img src={ArticleImage1} alt="article 1" />
        <div className="modalIndicator">
          <button onClick={article1OpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate2
          show={showArticle1}
          data={information[5]}
          onHide={article1CloseHandler}
        />
      </div>

      <div className="featured-card project-box ">
        <span>category</span>
        <h2 className="title-section">projects</h2>
      </div>
      <div className="featured-card nine hover-effect">
        <img src={DorstepImage} alt="dorstep" />
        <div className="modalIndicator">
          <button onClick={dorStepOpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate
          show={showDorstep}
          data={information[2]}
          onHide={dorStepCloseHandler}
        />
      </div>
      <div className="featured-card ten hover-effect">
        <img src={CelezumImage} alt="celezum" />
        <div className="modalIndicator">
          <button onClick={celeZumOpenHandler}>
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </button>
        </div>
        <ModalTemplate
          show={showCeleZum}
          data={information[4]}
          onHide={celeZumCloseHandler}
        />
      </div>
    </section>
  );
}

export default MainIntroLeft;
