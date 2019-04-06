import React from 'react';
import ReactDOM from 'react-dom';

//Importing our component files
import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
