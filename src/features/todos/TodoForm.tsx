import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task'>Task:</label>
      <input
        type='text'
        name='task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit'>Add a ToDo</button>
    </form>
  );
};

export default TodoForm;
