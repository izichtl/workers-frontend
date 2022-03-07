import * as React from 'react';
import { useState, useContext } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Grid,
  Snackbar,
  Alert,
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import api from '../service/api';
import { Context } from '../context/AuthContext';

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const { handleLogin } = useContext(Context);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackData, setSnackData] = useState({
    text: 'msg',
    color: 'info',
    status: false,
  });

  const handleCloseSnack = () => {
    if (!snackData.status) setOpenSnack(false);
    if (snackData.status) {
      setOpenSnack(false);
      setTimeout( () => {
        return navigate("/dashboard");
      }, 1000);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup
        .string()
        .email('Email de cadastro precisa ser válido')
        .max(255)
        .required('Por favor, digite um e-mail válido'),
    }),
    onSubmit: async (values, {
      setErrors, setStatus, setSubmitting, resetForm,
    }) => {
      try {
        await handleLogin(values).then(() => {
          setSnackData({
            text: 'Login realizado com sucesso',
            color: 'success',
            status: true,
          });
          setOpenSnack(true);
        });
        resetForm();
      } catch (err) {
        setSnackData({
          text: err.response.data.error,
          color: 'error',
          status: false,
        });
        setOpenSnack(true);
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Faça login
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              fullWidth
              id="email"
              label="Email"
              placeholder="seu@email.com"
              name="email"
            />
            <TextField
              margin="normal"
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logar com Email
            </Button>
            {/* <Link href="https://github.com/login/oauth/authorize?client_id=20a70bf43019f5229a00" variant="body2">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Login com GitHub
              </Button>
            </Link> */}
            <Grid container>
              {/* <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openSnack}
              autoHideDuration={2000}
              onClose={handleCloseSnack}
              >
              <Alert onClose={handleCloseSnack} severity={snackData.color} sx={{ width: '100%' }}>
                { snackData.text }
              </Alert>
            </Snackbar>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}