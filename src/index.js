import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/theme.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
