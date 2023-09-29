import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

import DeleteIcon from '@mui/icons-material/Delete';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import LinearProgress from '@mui/material/LinearProgress';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import MuiAlert from '@mui/material/Alert';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function FormularioDoctor() {
  const CustomAlert = React.forwardRef(function CustomAlert(props, ref) {
    const { showCustomStyle, ...rest } = props;
    return showCustomStyle ? (
      <MuiAlert elevation={6} ref={ref} variant="filled" {...rest} />
    ) : (
      <MuiAlert elevation={6} ref={ref} {...rest} />
    );
  });

  CustomAlert.propTypes = {
    showCustomStyle: PropTypes.bool,
  };
  
  
  CustomAlert.defaultProps = {
    showCustomStyle: false,
  };

  const [doctor,setDoctor] = useState({
    id:0,
    nombre: '',
    apellidos: '',
    especialidad:'',
    telefono: '',
    domicilio: ''
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const [nombreError, setNombreError] = useState('');
  const [apellidosError, setApellidosError] = useState('');
  const [especialidadError, setEspecialidadError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [domicilioError, setDomicilioError] = useState('');

  const [formValid, setFormValid] = useState(false);

  const inputChange = (event) => {
    setDoctor({
      ...doctor,
      [event.target.name]: event.target.value
    });
    validateField(event.target.name, event.target.value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'nombre':
        setNombreError(
          value.trim()
            ? value.length > 50
              ? 'El nombre debe tener como máximo 50 caracteres'
              : !/^(?:[A-ZÁÉÍÓÚ][a-záéíóúüñ]*\s*)+$/.test(value)
              ? 'Cada palabra del nombre debe empezar con mayúscula'
              : !/^[A-Za-zÁÉÍÓÚáéíóúüñ\s]*$/.test(value)
              ? 'El nombre solo puede contener letras, espacios y caracteres acentuados'
              : value.split(/\s+/).some((word) => word.length < 3 || word.length > 15)
              ? 'Cada palabra del nombre debe tener entre 3 y 15 caracteres'
              : /[@#$%^&*()_+=[\]{}|\\:;"'<>/?¿]/.test(value)
              ? 'El nombre no puede contener caracteres especiales'
              : ''
            : 'El nombre es requerido'
        );
        break;
      case 'apellidos':
        setApellidosError(
          value.trim()
            ? value.length > 50
              ? 'Los apellidos deben tener como máximo 50 caracteres'
              : !/^(?:[A-ZÁÉÍÓÚ][a-záéíóúüñ]*\s*)+$/.test(value)
              ? 'Cada palabra del apellido debe empezar con mayúscula'
              : !/^[A-Za-zÁÉÍÓÚáéíóúüñ\s]*$/.test(value)
              ? 'Los apellidos solo pueden contener letras, espacios y caracteres acentuados'
              : value.split(/\s+/).some((word) => word.length < 3 || word.length > 15)
              ? 'Cada palabra del apellido debe tener entre 3 y 15 caracteres'
              : value.match(/[+/\-{}]/)
              ? 'Los apellidos no pueden contener caracteres especiales (+, /, - o {})'
              : ''
            : 'Los apellidos son requeridos'
        );
        break;
      case 'especialidad':
        setEspecialidadError(
          value.trim()
            ? value.length > 50
              ? 'La especialidad debe tener como máximo 50 caracteres'
              : !/^[A-Za-zÁÉÍÓÚáéíóúüñ\s]*$/.test(value)
              ? 'La especialidad solo puede contener letras, espacios y caracteres acentuados'
              : !/^(?:[A-ZÁÉÍÓÚ][a-záéíóúüñ]*\s*)+$/.test(value)
              ? 'Cada palabra de la especialidad debe empezar con mayúscula'
              : value.split(/\s+/).some((word) => word.length < 3 || word.length > 20)
              ? 'Cada palabra de la especialidad debe tener entre 3 y 20 caracteres'
              : ''
            : 'La especialidad es requerida'
        );
        break;
      case 'telefono':
        setTelefonoError(
          value.trim()
            ? !/^\d+$/.test(value)
              ? 'El teléfono solo puede contener números'
              : value.length !== 10
              ? 'El teléfono debe tener exactamente 10 dígitos'
              : ''
            : 'El teléfono es requerido'
        );
        break;
      case 'domicilio':
        setDomicilioError(
          value.trim()
            ? value.length < 5
              ? 'El domicilio debe tener al menos 5 caracteres'
              : value.length > 100
              ? 'El domicilio no puede exceder los 100 caracteres'
              : /[@#$%^&*()_+=[\]{}|\\:;"'<>/?¿]/.test(value)
              ? 'El domicilio no puede contener caracteres especiales'
              : ''
            : 'El domicilio es requerido'
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFormValid(!nombreError && !apellidosError && !especialidadError && !telefonoError && !domicilioError);
  }, [nombreError, apellidosError, especialidadError, telefonoError, domicilioError]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const fnObtenerDatos = async() => {
    setLoading(true)
    await axios.get('http://127.0.0.1:8000/api/doctor', {
      params:{
        id:location.state.id
      }
    }).then((response) => {
      setDoctor(response.data)
      setLoading(false)
      setIsUpdating(true)
    })
  }

  useEffect(() => {
    console.log('Reader');
    if (location.state.id !=0){
      fnObtenerDatos();
    }
  }, []);
  
  const fnPaciente = async (e) => {
    e.preventDefault();
    if (!formValid) {

      return;
    }

    console.log('nombre:' + doctor.nombre)
    console.log('apellidos:' + doctor.apellidos)
    console.log('especialidad:' + doctor.especialidad)
    console.log('telefono:' + doctor.telefono)
    console.log('domicilio:' + doctor.domicilio)

    await axios.post('http://127.0.0.1:8000/api/doctor/crear', doctor).then((response) => {
      console.log("Validando Acceso...")
      console.log(response.data)
  
      if (response.data.token !== "") {
        console.log("Ok")
        secureLocalStorage.setItem('token', response.data.token)
        setOpenAlert(true); 
        setTimeout(() => {
         navigate("/doctor"); 
        }, 2000); 
      }
      else {
        console.log("Error" + response.data.error)
      }
  
    }).catch((error) => {
  
    })
  }

  const fnEliminar = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://127.0.0.1:8000/api/doctor/borrar/?id=${location.state.id}`);
      console.log('Doctor eliminado con éxito');
      setOpenDeleteAlert(true); 
          setTimeout(() => {
            navigate("/doctor"); 
          }, 2000); 
    } catch (error) {
      console.error('Error al eliminar el paciente', error);
    } finally {
      setLoading(false);
    }
  };
  
  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalHospitalIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Doctor
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="nombre"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre del doctor"
                  value={doctor.nombre}  onChange={inputChange}
                  autoFocus
                />
                {nombreError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">
                      {nombreError}
                    </Alert>
                  </Stack>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name='apellidos'
                  value={doctor.apellidos}
                  onChange={inputChange}
                  autoComplete="lname"
                />
                {apellidosError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">
                      {apellidosError}
                    </Alert>
                  </Stack>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Especialidad"
                  name="especialidad"
                  autoComplete="especialidad"
                  value={doctor.especialidad}
                  onChange={inputChange}
                />
                {especialidadError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">
                      {especialidadError}
                    </Alert>
                  </Stack>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="tel"
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="telefono"
                  value={doctor.telefono}
                  onChange={inputChange}
                />
                {telefonoError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">
                      {telefonoError}
                    </Alert>
                  </Stack>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="domicilio"
                  label="Domicilio"
                  type="text"
                  id="text"
                  autoComplete="domicilio"
                  value={doctor.domicilio}
                  onChange={inputChange}
                />
                {domicilioError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">
                      {domicilioError}
                    </Alert>
                  </Stack>
                )}
              </Grid>

            <br></br>

        {loading ? <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>: ''}
          </Grid>
          <Button
            type="submit"
            fullWidth
            onClick={fnPaciente}
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!formValid || loading} 
          >
            Guardar
          </Button>
          {isUpdating && (
            <Button
              type="submit"
              fullWidth
              onClick={fnEliminar}
              variant="contained"
              color="secondary"
            >
              Eliminar
            </Button>
          )}
          <br/><br/>
        </form>
      </div>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <CustomAlert onClose={handleCloseAlert} variant="filled" severity="success" showCustomStyle sx={{ width: '100%' }} >
          El doctor ha sido guardado exitosamente.
        </CustomAlert>
      </Snackbar>

      <Snackbar open={openDeleteAlert} autoHideDuration={6000} onClose={() => setOpenDeleteAlert(false)}>
        <CustomAlert onClose={handleCloseAlert} variant="filled" severity="success" showCustomStyle sx={{ width: '100%' }} >
          El doctor ha sido eliminado exitosamente.
        </CustomAlert>
      </Snackbar>
     
    </Container>
    </div>
    
  );
}