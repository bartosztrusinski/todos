import { Typography } from '@mui/material';
import TodoList from './TodoList';

const TodosPage = () => {
  return (
    <>
      <Typography
        variant='h4'
        component='h1'
        sx={{ textAlign: 'center', my: 2 }}>
        Things ToDo!
      </Typography>
      <TodoList />
    </>
  );
};

export default TodosPage;
