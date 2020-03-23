import React from 'react';
import '../Styles/Intros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import * as CONSTANTS from '../Constants';
import Badge from 'react-bootstrap/Badge';
import '../Styles/Badge.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <p>I have experience with</p>

          <Row>
            {CONSTANTS.technologies.map(tech => {
              return (
                <Col lg={4} md={4} xs={3}>
                  <Badge className="badge-intro">{tech}</Badge>
                </Col>
              );
            })}
          </Row>

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
