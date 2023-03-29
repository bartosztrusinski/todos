import { Typography } from '@mui/material';
import TodoForm from './TodoForm';

const AddTodoPage = () => {
  return (
    <>
      <Typography
        variant='h4'
        component='h1'
        sx={{ textAlign: 'center', my: 2 }}>
        Add a new ToDo to your list!
      </Typography>
      <TodoForm />
    </>
  );
};

export default AddTodoPage;
