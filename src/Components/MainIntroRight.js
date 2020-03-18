import React from 'react';
import '../Styles/Intros.css';
import logo from '../image/logo-animation.gif';

function MainIntroRight() {
  return (
    <section className="right-section">
      <div className="main-logo">
        <a className="wow fadeIn" data-wow-delay="0.3s" href="#">
          <img src={logo} width="56" height="56" alt="logo" />
        </a>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h4 className="wow fadeInDown" data-wow-delay="0.4s">
            Software Engineer based in California
          </h4>
          <h1 className="wow fadeInDown" data-wow-delay="0.5s">
            Jade Kang
          </h1>
          <p className="wow fadeInDown" data-wow-delay="0.6s">
            Everything does something good, only a few make remarkable{' '}
            <br className="visible-lg" />
            things. So, I built this portfolio to showcase my talent in{' '}
            <br className="visible-lg" />
            the as honest medium as possible for you.
          </p>
          <a
            className="btn-contact wow fadeInDown"
            data-wow-delay="0.6s"
            href="mailto:jade@jadekang.me"
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
