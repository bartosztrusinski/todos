import Todo from './Todo';
import { useSelector } from 'react-redux';
import { selectTodos } from './todosSlice';
import { Divider, List, ListItem } from '@mui/material';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} sx={{ display: 'block', p: 0 }}>
          <Todo {...todo} />
          <Divider />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
