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
import * as CONSTANTS from '../Constants';
import Robin from '../ modals/Robin';

function MainIntroLeft() {
  const [showRobin, setShowRobin] = useState(false);

  const robinOpenHandler = () => {
    setShowRobin(true);
  };
  const robinCloseHandler = () => {
    setShowRobin(false);
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
        <Robin show={showRobin} onHide={robinCloseHandler} />
      </div>
      <div className="featured-card three hover-effect">
        <img src={BingleImage} alt="bingle-logo" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>
      <div className="featured-card article-box">
        <span>category</span>
        <h2 className="title-section">articles</h2>
      </div>

      <div className="featured-card five hover-effect">
        <img src={DevatingImage} alt="devating-main" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>
      <div className="featured-card six hover-effect">
        <img src={ArticleImage2} alt="article 2" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>
      <div className="featured-card seven hover-effect">
        <img src={ArticleImage1} alt="article 1" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>

      <div className="featured-card project-box ">
        <span>category</span>
        <h2 className="title-section">projects</h2>
      </div>
      <div className="featured-card nine hover-effect">
        <img src={DorstepImage} alt="dorstep" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>
      <div className="featured-card ten hover-effect">
        <img src={CelezumImage} alt="celezum" />
        <div className="modalIndicator">
          <a href="https://google.com">
            {' '}
            <FontAwesomeIcon
              className="modal-icon"
              icon={faExternalLinkAlt}
            />{' '}
            View details
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainIntroLeft;
