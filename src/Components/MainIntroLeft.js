import React from 'react';
import '../Styles/Intros.css';
import '../Styles/MainIntroLeft.css';
import Badge from 'react-bootstrap/Badge';
import BingleImage from '../images/BINGLE.png';
import DevatingImage from '../images/devating.png';
import DorstepImage from '../images/dorstep.png';
import CelezumImage from '../images/celeZum.png';

function MainIntroLeft() {
  return (
    <section className="left-section featured-container">
      <div className="featured-card one"></div>
      <div className="featured-card startup-box">
        <span>category</span>
        <h2 className="title-section">startups</h2>
      </div>
      <div className="featured-card two">
        <img
          src="http://www.graphicsfuel.com/wp-content/uploads/2015/11/branding-mockup-psd.jpg"
          alt="robin"
        />
      </div>
      <div className="featured-card three">
        <img src={BingleImage} alt="bingle-logo" />
      </div>
      <div className="featured-card article-box">
        <span>category</span>
        <h2 className="title-section">articles</h2>
      </div>

      <div className="featured-card five">
        <img src={DevatingImage} alt="devating-main" />
      </div>
      <div className="featured-card six">
        <img src="http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg" />
      </div>
      <div className="featured-card seven">
        <img src="http://www.pixeden.com/media/k2/galleries/468/001-business-card-clip-brand-mock-up-vol-20-psd.jpg" />
      </div>

      <div className="featured-card project-box ">
        <span>category</span>
        <h2 className="title-section">projects</h2>
      </div>
      <div className="featured-card nine">
        <img src={DorstepImage} alt="dorstep" />
      </div>
      <div className="featured-card ten">
        <img src={CelezumImage} />
      </div>
    </section>
  );
}

export default MainIntroLeft;
