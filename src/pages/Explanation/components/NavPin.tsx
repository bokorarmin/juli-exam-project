import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

import { routePaths } from '../../../router/paths.ts';

export const NavPin = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        left: 16,
        zIndex: 1000,
      }}
    >
      <IconButton
        className={'custom-leaflet-pin'}
        aria-label="navigation pin"
        sx={{
          padding: 0,
          position: 'relative',
          width: 19,
          height: 95,
        }}
        onClick={() => navigate(routePaths.home)}
      >
        <Box
          component="img"
          src="/pin.png"
          alt="Navigation Pin"
          sx={{ width: '100%', height: '100%' }}
        />
      </IconButton>
    </Box>
  );
};
