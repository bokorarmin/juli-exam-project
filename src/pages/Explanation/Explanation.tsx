import { Box, useMediaQuery } from '@mui/material';

import { Description } from './components/Description.tsx';
import { NavPin } from './components/NavPin.tsx';

export const Explanation = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box mx={isDesktop ? 15 : 2} position="relative" zIndex={1}>
      {isDesktop && <NavPin />}
      <Box height={'70vh'}>
        <Description />
      </Box>
      {/*<Box position="relative" zIndex={'100vh'}>*/}
      {/*  <Gallery />*/}
      {/*</Box>*/}
    </Box>
  );
};
