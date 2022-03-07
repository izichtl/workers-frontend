import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import {
  Box,
  Typography,
  Container,
  Button,
  Link,
} from '@mui/material';
// import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';



export default function Home() {
  return (
    <React.Fragment>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Maxxi Workers
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Dashboard para controle e cadastro de Profissionais'}
          <br />
        </Typography>
        <Typography variant="body">Aplicação para teste de ingresso, desenvolvido utilizando React/MaterialUI.</Typography>
        <br />
        <Link href="/login" >
          <Button
            sx={{
              mt:2,
            }}
            variant="contained">Login</Button>
        </Link>
        <br />
        <Link href="/dashboard" >
          <Button
            sx={{
              mt:2,
            }}
            variant="contained">Dashboard</Button>
        </Link>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Desenvolvido com carinho por, Ivan Zichtl
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
    </React.Fragment>
  );
}