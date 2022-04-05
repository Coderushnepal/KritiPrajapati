import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "./public";

import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);