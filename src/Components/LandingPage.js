import React from 'react';
import '../Styles/LandingPage.css';
import logo from '../image/logo-animation.gif';

function LandingPage() {
  return (
    <div class="wrapper ar-personal">
      <a href="#" class="logo hidden-md hidden-lg hidden-xs">
        <img src={logo} width="64" height="64" alt="Jade Kang Logo" />
      </a>
      <div class="nav-trigger" role="button" title="sweet hamburger">
        <div class="hamburger">
          <div class="icon"></div>
        </div>
      </div>

      <div id="ar-about">
        <div class="about-intro">
          <h4>About Me</h4>
          <h1>I'm Jade Kang</h1>
          <h3>Software Engineer / Accountant</h3>
          <p>
            Eu euismod placerat mandamus sea, autem timeam hendrerit eu vel, sea
            debet conclusionemque te. Veniam persius suavitate sit cu. Brute
            suavitate maiestatis qui in, an eam sumo illud. Explicari
            necessitatibus eam et. Ea oratio voluptua postulant eam, sit eu tale
            molestiae, verear latine concludaturque ex vel. Sed mutat etiam
            utroque te, vis at error eirmod numquam.
          </p>
          <p>
            Brute suavitate maiestatis qui in, an eam sumo illud. Explicari
            necessitatibus eam et. Ea oratio voluptua postulant eam, sit eu tale
            molestiae, verear latine concludaturque ex vel. Sed mutat etiam
            utroque te, vis at error eirmod numquam.
          </p>
          <div class="ar-footer">
            <div class="nav-social">
              <ul>
                <li>
                  <a href="#">
                    <i class="ion-social-instagram-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-dribbble-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <section className="split-home">
          <section
            clssName="left-section personal wow fadeIn"
            data-wow-delay="0.2s"
          ></section>
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
                  href="mailto:contact@domain.com"
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
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
