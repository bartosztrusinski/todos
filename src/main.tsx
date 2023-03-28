import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
