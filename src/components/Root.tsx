import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  ThemeProvider,
  createTheme,
  Paper,
  Toolbar,
  CssBaseline,
  Container,
} from '@mui/material';
import { teal } from '@mui/material/colors';
import { Box } from '@mui/system';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Outlet,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { forwardRef, ReactNode } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    primary: teal,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <Container component='main' sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Container maxWidth='sm' sx={{ my: 3 }}>
            <Outlet />
          </Container>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
