import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';

const pages = [
  {
    title: 'My Todos List',
    url: '/todos',
    description: 'This is where you can find and manage all your todos.',
  },
  {
    title: 'Add a Todo',
    url: '/todos/new',
    description: 'This is where you can add a new todo to your list.',
  },
];

const HomePage = () => (
  <>
    <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mt: 2 }}>
      Welcome to the ToDo App!
    </Typography>
    <Typography variant='body1' component='p' sx={{ textAlign: 'center' }}>
      This app helps you manage things you need ToDo!
    </Typography>

    {pages.map((page) => (
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          my: 3,
        }}>
        <CardContent sx={{ flexGrow: '1' }}>
          <Typography variant='h5' component='h2'>
            {page.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {page.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button href={page.url} size='large' variant='contained'>
            Go
          </Button>
        </CardActions>
      </Card>
    ))}
  </>
);

export default HomePage;
