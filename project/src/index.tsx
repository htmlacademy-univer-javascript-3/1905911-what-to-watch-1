import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFavoriteAction, fetchFilmsAction} from './store/api-actions';
import {dispatch} from './types/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
dispatch(checkAuthAction());
dispatch(fetchFilmsAction());
dispatch(fetchFavoriteAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
