import Todo from './Todo';
import { useSelector } from 'react-redux';
import { selectTodos } from './todosSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const todoElements = todos.map((todo) => <Todo key={todo.id} {...todo} />);

  return <ul>{todoElements}</ul>;
};

export default TodoList;
