import React from 'react';
import {createRoot} from 'react-dom/client';

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
);

registerServiceWorker();
