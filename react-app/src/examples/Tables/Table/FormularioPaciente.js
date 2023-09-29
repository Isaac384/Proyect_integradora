import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

import AccessibleIcon from '@mui/icons-material/Accessible';

import LinearProgress from '@mui/material/LinearProgress';

import { useNavigate } from 'react-router-dom';


import { useLocation } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';

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
import MuiAlert from '@mui/material/Alert';
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

function FormularioPaciente() {
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
    const [paciente,setPaciente] = useState({
        id:0,
        nombre: '',
        edad:'',
        nss: '',
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
    const [edadError, setEdadError] = useState('');
    const [nssError, setNssError] = useState('');
    const [domicilioError, setDomicilioError] = useState('');

    const [formValid, setFormValid] = useState(false);
    
    const inputChange = (event) => {
      setPaciente({
        ...paciente,
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
        case 'edad':
          setEdadError(
            value.trim()
              ? !/^\d+$/.test(value) || value.includes('+') || value.includes('-') || value.includes('.')
                ? 'La edad debe ser un número entero positivo'
                : value <= 0 || value > 110
                ? 'La edad debe estar entre 1 y 110 años'
                : ''
              : 'La edad es requerida'
          );
          break;
        case 'nss':
          setNssError(
            value.trim()
              ? !/^\d{3}-\d{2}-\d{3}-\d{2}$/.test(value)
                ? 'El NSS debe tener el formato xxx-xx-xxx-xx y solo puede contener números y guiones ("-")'
                : !/^[0-9-]*$/.test(value)
                ? 'El NSS solo puede contener números y guiones ("-")'
                : ''
              : 'El NSS es requerido'
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
    
      const navigate = useNavigate();
    
      const [loading, setLoading] = useState(false)
    
      const location = useLocation()
    
      const fnObtenerDatos = async() => {
        setLoading(true)
        await axios.get('http://127.0.0.1:8000/api/paciente', {
          params:{
            id:location.state.id
          }
        }).then((response) => {
          setPaciente(response.data)
          setLoading(false)
          setIsUpdating(true); 
        })
      }
    
      useEffect(() => {
        
        setFormValid(!nombreError && !edadError && !nssError && !domicilioError);
      }, [nombreError, edadError, nssError, domicilioError]);

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


        console.log('nombre:' + paciente.nombre)
        console.log('edad:' + paciente.edad)
        console.log('nss:' + paciente.nss)
        console.log('domicilio:' + paciente.domicilio)
    
        await axios.post('http://127.0.0.1:8000/api/paciente/crear', paciente).then((response) => {
          console.log("Validando Acceso...")
          console.log(response.data)
      
          if (response.data.token !== "") {
            console.log("Ok")
            secureLocalStorage.setItem('token', response.data.token);
            setOpenAlert(true); 
            setTimeout(() => {
              navigate("/paciente"); 
            }, 2000); 
          } else {
            console.log("Error" + response.data.error)
          }
      
        }).catch((error) => {
      
        })
      }
    
      const fnEliminar = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await axios.post(`http://127.0.0.1:8000/api/paciente/borrar/?id=${location.state.id}`);
          console.log('Paciente eliminado con éxito');
          setOpenDeleteAlert(true); 
          setTimeout(() => {
            navigate("/paciente"); 
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
          <AccessibleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Paciente
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
              label="Nombre del Paciente"
              value={paciente.nombre}
              onChange={inputChange}
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
              label="Nss"
              name='nss'
              value={paciente.nss}
              onChange={inputChange}
            />
            {nssError && (
              <Stack sx={{ width: '100%' }} spacing={3}>
                <Alert severity="error">
                  {nssError}
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
              type="number"
              label="Edad"
              name="edad"
              value={paciente.edad}
              onChange={inputChange}
            />
            {edadError && (
              <Stack sx={{ width: '100%' }} spacing={3}>
                <Alert severity="error">
                  {edadError}
                </Alert>
              </Stack>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="telefono"
              label="Domicilio"
              name="domicilio"
              value={paciente.domicilio}
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
            disabled={!formValid}
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
          El paciente ha sido guardado exitosamente.
        </CustomAlert>
      </Snackbar>

      <Snackbar open={openDeleteAlert} autoHideDuration={6000} onClose={() => setOpenDeleteAlert(false)}>
      <CustomAlert onClose={handleCloseAlert} variant="filled" severity="success" showCustomStyle sx={{ width: '100%' }} >
          El paciente ha sido eliminado exitosamente.
        </CustomAlert>
    </Snackbar>
    </Container>
    </div>
  )
}

export default FormularioPaciente