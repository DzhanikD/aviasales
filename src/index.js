import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';

import store from './reducers';
import './index.scss';
import App from './components/App';
import './fonts/OpenSans-Regular.ttf';
import './fonts/OpenSans-SemiBold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
