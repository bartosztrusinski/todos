import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './features/todos/TodoList/TodoList';
import TodoForm from './features/todos/TodoForm/TodoForm';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'todos',
        element: <TodoList />,
      },
      {
        path: 'todos/new',
        element: <TodoForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
