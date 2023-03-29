import ReactDOM from 'react-dom/client';
import store from './store';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import TodosPage from './features/todos/TodosPage';
import Root from './components/Root';
import AddTodoPage from './features/todos/AddTodoPage';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'todos',
        element: <TodosPage />,
      },
      {
        path: 'todos/new',
        element: <AddTodoPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
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
