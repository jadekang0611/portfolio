import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/Intros.css';
import MainIntroLeft from './Components/MainIntroLeft';
import MainIntroRight from './Components/MainIntroRight';
import SubIntro from './Components/SubIntro';
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
library.add(fab, faCheckSquare, faCoffee, faExternalLinkAlt);

function App() {
  const [showSubIntro, setShowSubIntro] = useState(false);

  function toggleSections() {
    if (showSubIntro === true) {
      return <SubIntro />;
    } else {
      return <MainIntroRight />;
    }
  }

  return (
    <div className="sub-personal">
      <div
        class="nav-trigger"
        role="button"
        title="sweet hamburger"
        onClick={() => setShowSubIntro(!showSubIntro)}
      >
        <div class="hamburger">
          <div class="icon"></div>
        </div>
      </div>

      <div className="main">
        <section className="split-home">
          <MainIntroLeft />
          {toggleSections()}
        </section>
      </div>
    </div>
  );
}

export default App;
