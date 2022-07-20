import './index.css';
import store from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const update=(state)=>{
  root.render(
    <React.StrictMode>
      <App state={store.getState()}/>
    </React.StrictMode>
  );
}
update(store.getState())
store.subscribe(update)
