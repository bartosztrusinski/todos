import Todo from './Todo';
import { useSelector } from 'react-redux';
import { selectTodos } from './todosSlice';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return todos.length > 0 ? (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} sx={{ display: 'block', p: 0 }}>
          <Todo {...todo} />
          <Divider />
        </ListItem>
      ))}
    </List>
  ) : (
    <Box sx={{ display: 'grid', placeItems: 'center' }} gap={1}>
      <Typography variant='h6' component='p' fontWeight={400}>
        You have no ToDos 😬
      </Typography>
      <Button variant='contained' href='/todos/new'>
        Add a ToDo
      </Button>
    </Box>
  );
};

export default TodoList;
