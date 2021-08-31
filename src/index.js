import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'; //Used to create the redux store 
import { Provider } from 'react-redux'; //Used to wrap the app components to provide it the redux state store
import reducers from './reducers/index.js';

//Creating React Store
const store = createStore(reducers /*,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux devtools extension  */
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
