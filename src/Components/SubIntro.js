import React from 'react';
import '../Styles/Intros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SubIntro() {
  return (
    <section className="right-section">
      <div id="sub-about">
        <div class="about-intro">
          <h4>About Me</h4>
          <h1>I'm Jade Kang</h1>
          <h3>Software Engineer / CPA / Scrum Master</h3>
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
          <div class="sub-footer">
            <div class="nav-social">
              <ul>
                <li>
                  <a href="https://github.com/jadekang0611">
                    <FontAwesomeIcon
                      icon={['fab', 'github-square']}
                      className="font-awesome"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={['fab', 'linkedin']}
                      className="font-awesome"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={['fab', 'slack']}
                      className="font-awesome"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubIntro;
