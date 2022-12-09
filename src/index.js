import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function Footer(){
  return (
    <div className="footer">
      <p>Created with 💝 by Tejas Malave, Sairaj Mirajkar, Pratik Kumbhar</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
