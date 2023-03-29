import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'background.default',
        textAlign: 'center',
        py: 2,
      }}>
      &copy; ToDos 2023 by Bartosz Trusiński
    </Box>
  );
};

export default Footer;
