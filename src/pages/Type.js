import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  Grid,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '../components/Drawer';
import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import SideBar from '../components/SideBar';
import api from '../service/api';
import TypeTable from '../components/TypeTable';


const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([{
    id: '',
    descricao: '',
    situacao: '',
    createdat: '2022-03-06T17:38:02.198Z',
  }]);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  let token = '';
  if (localStorage.getItem('token')) token = localStorage.getItem('token').replace(/"/g,'');
  const headers = {
    headers: {
      Authorization: token,
    }}
  useEffect(() => {
    (async () => {
      await api.get('/type', headers)
        .then((response) => {
          const { data } = response;
          setData(data);
        });
    })();
  }, []);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <ToolBar
            setOpen={setOpen}
            open={open}
            toggleDrawer={toggleDrawer}
            />
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <SideBar
          setOpen={setOpen}
          open={open}
          toggleDrawer={toggleDrawer}
          />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography component="h1" variant="h5">
                  Categorias Cadastradas
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TypeTable
                  rows={data}
                />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}