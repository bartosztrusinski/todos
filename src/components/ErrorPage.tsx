import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ display: 'grid', placeItems: 'center', pt: 2 }}>
      <Typography variant='h3'>Oops!</Typography>
      <p>Sorry, an unexpected error has occurred.</p>
      <Button href='/'>Take me home</Button>
    </Box>
  );
};

export default ErrorPage;
