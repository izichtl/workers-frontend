import * as React from 'react';
import { useState, useEffect } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Switch,
  Grid,
  CssBaseline,
  TextField,
  Button,
  NativeSelect,
  InputLabel
} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  regexName, regexPhone, regexPhoneNumber,
} from '../helpers/regex';
import api from '../service/api';


const theme = createTheme();

export default function ProfessionalForm(props) {
  const { typeprofessional } = props;
  const [status, setStatus] = useState(false);
  const [typeId, setTypeId] = useState('');
  const handlerStatus = () => {
    setStatus(!status);
  }
  const handlerTypeProfessional = (event) => {
    setTypeId(event.target.value);
  }
  const formik = useFormik({
    initialValues: {
      nome: 'Seu nome',
      telefone: '',
      email: '',
      tipoprofissional: typeId,
      situacao: status,
    },
    validationSchema: Yup.object().shape({
      nome: Yup
        .string()
        .max(255)
        .matches(regexName, 'O nome deve conter apenas letras')
        .required('Este campo é obrigatório'),
      email: Yup
        .string()
        .email('Email de cadastro precisa ser válido')
        .max(255)
        .required('Por favor, digite um e-mail válido'),
      telefone: Yup
        .string()
        .matches(regexPhoneNumber, 'O telefone deve conter apenas números')
        .matches(regexPhone, 'O telefone deve ter no mínimo 10 e máximo 11 dígitos')
        .required('Este campo é obrigatório'),
    }),
    onSubmit: async (values, {
      setErrors, setStatus, setSubmitting, resetForm,
    }) => {
      console.log('aqui, formuk');
      try {
        const {
          nome,
          telefone,
          email,
          situacao,
        } = values;
        await api.post('/professional', {
          nome,
          telefone,
          email,
          tipoprofissional: typeId,
          situacao,
        })
          .then((response) => {
            console.log(response, 'response');
          });
        resetForm();
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        if (formik.isMountedRef.current) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }
    },
  });

  useEffect(() => {
    console.log('entrada');
    console.log(typeprofessional[0].id);
    setTypeId(typeprofessional[0].id);
    console.log('type');
  }, [typeprofessional])
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
              Cadastro de profissionais
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="nome"
                    style={{ borderRadius: 50 }}
                    error={Boolean(formik.touched.nome && formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}
                    onBlur={formik.handleBlur}
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    onChange={formik.handleChange}
                    autoFocus
                    type="text"
                    placeholder="nome completo"
                    value={formik.values.nome}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="telefone"
                    error={Boolean(formik.touched.telefone && formik.errors.telefone)}
                    helperText={formik.touched.telefone && formik.errors.telefone}
                    onBlur={formik.handleBlur}
                    required
                    fullWidth
                    id="telefone"
                    onChange={formik.handleChange}
                    label="Telefone"
                    placeholder="DD+NUMERO"
                    autoFocus
                    value={formik.values.telefone}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    id="email"
                    onChange={formik.handleChange}
                    label="Endereço de Email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Tipo de profissional
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  required
                  fullWidth
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                  onChange={handlerTypeProfessional}
                >
                  {typeprofessional.map((option) => (
                    <option value={option.id}>{option.descricao}</option>
                  ))}
                </NativeSelect>
                </Grid>
                <Grid item xs={12}>
                <Typography component="h3" variant="body">
                  Situação
                </Typography>
                  <Switch
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
          </Box>
      </ThemeProvider>
  );
}