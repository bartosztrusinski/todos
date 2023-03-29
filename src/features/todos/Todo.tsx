import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todosSlice';
import { useState } from 'react';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

type TodoProps = Todo;

const Todo = ({ id, task, completed }: TodoProps) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    setOpenDialog(false);
  };

  const completedStyle = {
    textDecoration: 'line-through',
    color: 'text.secondary',
    fontWeight: '400',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        p: 2,
      }}
      gap={2}>
      <Typography
        sx={{
          flex: 1,
          flexWrap: 'wrap',
          textAlign: 'justify',
          fontWeight: '500',
          ...(completed && completedStyle),
        }}>
        {task}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          placeContent: 'end',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
        gap={1}>
        <Button
          size='small'
          variant='outlined'
          color={completed ? 'warning' : 'success'}
          startIcon={
            completed ? <ReplayRoundedIcon /> : <DoneOutlineRoundedIcon />
          }
          onClick={() => dispatch(toggleTodo(id))}>
          {completed ? 'Undo' : 'Complete'}
        </Button>

        <Button
          size='small'
          variant='outlined'
          color='error'
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}>
          Delete
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Delete the ToDo?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {task}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size='small' variant='outlined' onClick={handleCloseDialog}>
            Close
          </Button>
          <Button
            size='small'
            variant='outlined'
            color='error'
            startIcon={<DeleteIcon />}
            onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Todo;
