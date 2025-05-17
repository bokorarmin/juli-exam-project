import { Box, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const Description = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box>
      <Box mt={isDesktop ? 10 : 5}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h5"
              color={'textPrimary'}
              fontWeight={'lighter'}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum
              dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
              sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            container
            justifyContent="center"
            alignItems="center"
          >
            <video autoPlay loop muted playsInline style={{ width: '70%' }}>
              <source src="videos/istvan_u_10.webm" type="video/webm" />
            </video>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
