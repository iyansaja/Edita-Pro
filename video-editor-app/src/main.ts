import React from 'react';
import ReactDOM from 'react-dom';
import VideoEditor from './components/VideoEditor';
import './styles/editor.css';

ReactDOM.render(
  <React.StrictMode>
    <VideoEditor />
  </React.StrictMode>,
  document.getElementById('root')
);