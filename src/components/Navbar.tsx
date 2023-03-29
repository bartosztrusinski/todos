import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { useMatch } from 'react-router-dom';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

const drawerWidth = 240;
const pages = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeRoundedIcon />,
  },
  {
    name: 'My Todos',
    url: '/todos',
    icon: <StickyNote2RoundedIcon />,
  },
  {
    name: 'Add Todo',
    url: '/todos/new',
    icon: <NoteAddRoundedIcon />,
  },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <WidgetsRoundedIcon sx={{ fontSize: '2rem' }} />
        <Typography
          variant='h3'
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            fontSize: '2rem',
            textTransform: 'none',
          }}>
          Menu
        </Typography>
      </Box>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              href={page.url}
              selected={Boolean(useMatch(page.url))}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              flexGrow: { xs: 1, sm: 0 },
              color: 'background.default',
              placeContent: 'center',
              mr: { xs: 4, sm: 2 },
            }}>
            <Button href='/' sx={{ color: 'inherit' }}>
              <EventNoteRoundedIcon sx={{ mr: 1, fontSize: '2rem' }} />
              <Typography
                variant='h2'
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  fontSize: '2rem',
                  textTransform: 'none',
                }}>
                ToDos
              </Typography>
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                size='large'
                startIcon={page.icon}
                href={page.url}
                key={page.name}
                sx={{
                  mr: 1,
                  color: 'background.default',
                  backgroundColor: useMatch(page.url)
                    ? 'primary.dark'
                    : 'primary.main',
                }}>
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component='nav'>
        <Drawer
          container={window.document.body}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default NavBar;
