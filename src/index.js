import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const isMemberOfGraph = [
  { from: 'g2', to: 'g1' },
  { from: 'g3', to: 'g1' },
  { from: 'g4', to: 'g1' },

  { from: 'u1', to: 'g2' },
  { from: 'u2', to: 'g2' },
  { from: 'u3', to: 'g3' },
  { from: 'u4', to: 'g3' },
  { from: 'u5', to: 'g4' },
  { from: 'u6', to: 'g4' },
  { from: 'u7', to: 'g5' }
];

const nodes = {
  g1: { name: 'Group 1', type: 'group' },
  g2: { name: 'Group 2', type: 'group' },
  g3: { name: 'Group 3', type: 'group' },
  g4: { name: 'Group 4', type: 'group' },
  g5: { name: 'Group 5', type: 'group' },
  u1: { name: 'User 1', type: 'user' },
  u2: { name: 'User 2', type: 'user' },
  u3: { name: 'User 3', type: 'user' },
  u4: { name: 'User 4', type: 'user' },
  u5: { name: 'User 5', type: 'user' },
  u6: { name: 'User 6', type: 'user' },
  u7: { name: 'User 7', type: 'user' }
};
export const store = createStore(rootReducer, {nodes, members: isMemberOfGraph});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
