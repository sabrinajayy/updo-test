import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

WebFont.load({
  google: {
    families: ['Open+Sans:300,400,600,700', 'Raleway:400,600,700,800', 'sans-serif']
  }
});
