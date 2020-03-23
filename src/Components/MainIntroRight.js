import React from 'react';
import '../Styles/Intros.css';
import logo from '../image/logo-animation.gif';
import * as CONSTANTS from '../Constants';

function MainIntroRight() {
  return (
    <section className="right-section">
      <div className="main-logo">
        <a href="https://www.jadekang.me">
          <img src={logo} width="56" height="56" alt="logo" />
        </a>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h4>Software Engineer based in California</h4>
          <h1>Jade Kang</h1>
          <p>
            Have you met somebody with a background in finance, great personal
            skills,
            <br className="visible-lg" />
            and technical skills? If you haven't, you have just found that
            person. <br className="visible-lg" />I built this portfolio to
            showcase my unique talents for you.
          </p>
          <a
            className="btn-contact"
            data-wow-delay="0.6s"
            href={CONSTANTS.myEmail}
          >
            Contact Me
          </a>
        </div>

        <div
          className="footer-personal text-center wow fadeInDown"
          data-wow-delay="0.7s"
        >
          <span className="footer-credits">
            &copy; Copyright 2020 Jade Kang. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
}

export default MainIntroRight;
