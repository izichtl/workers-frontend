import * as React from 'react';
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Switch,
  Grid,
  CssBaseline,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  regexName,
} from '../helpers/regex';
import api from '../service/api';


const theme = createTheme();

export default function TypeForm() {
  const [status, setStatus] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackData, setSnackData] = useState({
    text: 'msg',
    color: 'info',
    status: false,
  });
  let token = '';
  if (localStorage.getItem('token')) token = localStorage.getItem('token').replace(/"/g,'');
  const headers = {
    headers: {
      Authorization: token,
    }}
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const handlerStatus = () => {
    setStatus(!status);
  }
  const formik = useFormik({
    initialValues: {
      descricao: '',
      situacao: status,
    },
    validationSchema: Yup.object().shape({
      descricao: Yup
        .string()
        .max(255)
        .matches(regexName, 'A descricao deve conter apenas letras')
        .required('Este campo é obrigatório'),
    }),
    onSubmit: async (values, {
      setErrors, setStatus, setSubmitting, resetForm,
    }) => {
      try {
        const {
          descricao,
        } = values;
        await api.post('/type', {
          descricao,
          situacao: status,
        }, headers)
          .then((response) => {
            if (response.status === 200)  {
              setSnackData({
                text: 'Categoria Cadastrad com sucesso',
                color: 'success',
                status: true,
              });
            setOpenSnack(true);
            }
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
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              Cadastro de categorias
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    key="descricao"
                    name="descricao"
                    style={{ borderRadius: 50 }}
                    error={Boolean(formik.touched.descricao && formik.errors.descricao)}
                    helperText={formik.touched.descricao && formik.errors.descricao}
                    onBlur={formik.handleBlur}
                    required
                    fullWidth
                    id="descricao"
                    label="Descrição"
                    onChange={formik.handleChange}
                    type="text"
                    placeholder="Descrição da categoria"
                    value={formik.values.descricao}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                <Typography component="h3" variant="body">
                  Situação
                </Typography>
                  <Switch
                      key="situacao"
                      checked={status}
                      onChange={handlerStatus}
                    />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={formik.setSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
            </Box>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openSnack}
              autoHideDuration={3000}
              onClose={handleCloseSnack}
              >
              <Alert onClose={handleCloseSnack} severity={snackData.color} sx={{ width: '100%' }}>
                { snackData.text }
              </Alert>
            </Snackbar>
          </Box>
      </ThemeProvider>
  );
}