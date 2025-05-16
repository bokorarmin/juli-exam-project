import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const Description = () => {
  return (
    <Box>
      <Box m={15}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" color={'textPrimary'}>
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
              <source src="/videos/video2.webm" type="video/webm" />
            </video>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
