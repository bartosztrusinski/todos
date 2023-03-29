import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ display: 'grid', placeItems: 'center', pt: 2 }} gap={1}>
      <Typography variant='h4' component='p'>
        Oops!
      </Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Button variant='contained' href='/'>
        Take me home
      </Button>
    </Box>
  );
};

export default ErrorPage;
