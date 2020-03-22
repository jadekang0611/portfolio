import React from 'react';
import '../Styles/Intros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as CONSTANTS from '../Constants';

function SubIntro() {
  return (
    <section className="right-section">
      <div id="sub-about">
        <div class="about-intro">
          <h4>About Me</h4>
          <h1>I'm Jade Kang</h1>
          <h3>Software Engineer / CPA / Scrum Master</h3>
          <p>
            I'm a creative-minded, analytical, and organized software developer
            with a passion for building software that delivers great UI & UX. My
            background as a Certified Public Accountant and startup founder
            displays my abilities in multitasking and researching while
            operating in a collaborative agile environment with a focus on the
            company’s profitability.
          </p>
          <p>
            Brute suavitate maiestatis qui in, an eam sumo illud. Explicari
            necessitatibus eam et. Ea oratio voluptua postulant eam, sit eu tale
            molestiae, verear latine concludaturque ex vel. Sed mutat etiam
            utroque te, vis at error eirmod numquam.
          </p>
          <div class="sub-footer">
            <div class="nav-social">
              <ul>
                <li>
                  <a href={CONSTANTS.myGithub}>
                    <FontAwesomeIcon
                      icon={['fab', 'github-square']}
                      className="font-awesome"
                    />
                  </a>
                </li>
                <li>
                  <a href={CONSTANTS.myLinkedIn}>
                    <FontAwesomeIcon
                      icon={['fab', 'linkedin']}
                      className="font-awesome"
                    />
                  </a>
                </li>
                <li>
                  <a href={CONSTANTS.myStackOverflow}>
                    <FontAwesomeIcon
                      icon={['fab', 'stack-overflow']}
                      className="font-awesome"
                    />
                  </a>
                </li>
              </ul>
              <Link to={CONSTANTS.myResume} target="_blank" download>
                Download my resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubIntro;
