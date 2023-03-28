import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/todos'>Your Todos</Link>
        <br />
        <Link to='/todos/new'>Add Todo</Link>
      </nav>
      <h1>Things ToDo!</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
