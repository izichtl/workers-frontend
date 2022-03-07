import React from 'react';
import {
  Box, Container,
} from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';


const LoadingAnimation = () => (
  <>
    <Box
      component="main"
      height="100vh"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgoundColor: 'background.default',
        flexGrow: 1,
      }}
    >
      <Container maxWidth="lg">
        <Player
          autoplay
          loop
          // src={Loading}
          style={{ height: '100px', width: '100px' }}
        />
      </Container>
    </Box>
  </>
);

export default LoadingAnimation;
