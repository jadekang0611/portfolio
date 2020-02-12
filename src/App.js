import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainIntro from './Components/MainIntro';
import SubIntro from './Components/SubIntro';
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [showSubIntro, setShowSubIntro] = useState(false);
  const [showMainIntro, setShowMainIntro] = useState(true);
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
      {showSubIntro && (
        <>
          <SubIntro />
        </>
      )}

      <MainIntro />
    </div>
  );
}

export default App;
