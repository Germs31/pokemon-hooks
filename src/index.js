import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { directive } from '@babel/types';

function App () {
  return(
    <div className="app-wrapper">
      hello, world
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
