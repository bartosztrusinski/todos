import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    dispatch(addTodo(input));
    setInput('');
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', placeContent: 'center', my: 3 }}>
      <form onSubmit={handleSubmit}>
        <Paper elevation={3} sx={{ p: 2, pt: 0 }}>
          <Typography
            variant='h6'
            component='h2'
            sx={{ color: 'primary.main', textAlign: 'center', py: 1 }}>
            ToDo Form
          </Typography>
          <Box
            gap={1}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyItems: 'center',
            }}>
            <TextField
              id='outlined-basic'
              label='Thing to do'
              variant='outlined'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type='submit' variant='outlined' size='large'>
              Add a ToDo
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              <Alert onClose={handleClose} severity='success'>
                ToDo added!
                <Button href='/todos' size='small' sx={{ ml: 1, p: 0 }}>
                  Show
                </Button>
              </Alert>
            </Snackbar>
          </Box>
        </Paper>
      </form>
    </Box>
  );
};

export default TodoForm;
