import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

import pets_reducer from './reducers/pets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
  pets_reducer,
});


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
