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
        aria-label="navigation pin"
        sx={{
          padding: 0,
          position: 'relative',
          width: 19,
          height: 95,
          '&:hover::before': {
            content: '""',
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 48,
            height: 24,
            borderRadius: '50% / 100%',
            background:
              'radial-gradient(ellipse at center, rgba(255, 0, 0, 0.7), transparent 70%)',
            filter: 'blur(8px)',
            opacity: 1,
            pointerEvents: 'none',
          },
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
