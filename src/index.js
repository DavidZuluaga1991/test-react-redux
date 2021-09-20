import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
// import './styles/styles.scss';
// import './styles/instance.scss';

ReactDOM.render(

  <Provider store={store}>
    <AppRouter />
  </Provider>,
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
