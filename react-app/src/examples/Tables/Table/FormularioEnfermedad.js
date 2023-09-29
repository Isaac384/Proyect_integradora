import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

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
import Enfermedad from './Enfermedad';

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

function FormularioEnfermedad() {
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
        descripcion: '',
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
    const [descripcionError, setDescripcionError] = useState('');
    const [formValid, setFormValid] = useState(false);

    const inputChange = (event) => {
      setDoctor({
        ...doctor,
        [event.target.name]: event.target.value,
      });
      validateField(event.target.name, event.target.value);
    };

    const validateField = (fieldName, value) => {
      switch (fieldName) {
        case 'nombre':
          setNombreError(
            value.trim()
              ? value.length > 100
                ? 'El nombre de la enfermedad debe tener como máximo 100 caracteres'
                : value.length < 4
                ? 'El nombre de la enfermedad debe tener al menos 4 caracteres'
                : !/^[A-ZÁÉÍÓÚ][a-zA-ZÁÉÍÓÚáéíóúüñ\s0-9,]*$/.test(value)
                ? 'El nombre de la enfermedad solo puede contener letras, espacios, comas y números, y debe empezar con mayúscula'
                : ''
              : 'El nombre de la enfermedad es requerido'
          );
          break;
        case 'descripcion':
          setDescripcionError(
            value.trim()
              ? value.length > 200
                ? 'La descripción debe tener como máximo 200 caracteres'
                : !/^[A-Za-zÁÉÍÓÚáéíóúüñ,.\s]*$/.test(value)
                ? 'La descripción solo puede contener letras, espacios, comas y algunos caracteres especiales'
                : /\s{2,}/.test(value)
                ? 'La descripción no debe contener múltiples espacios consecutivos'
                : /,{2,}/.test(value)
                ? 'La descripción no debe contener múltiples comas consecutivas'
                : value !== value.trim()
                ? 'La descripción no debe contener espacios en blanco al principio o al final'
                : value.startsWith(',')
                ? 'La descripción no debe comenzar con una coma'
                : value.endsWith(',')
                ? 'La descripción no debe terminar con una coma'
                : value.split(/\s+/).some((word) => word.length < 1 || word.length > 25)
                ? 'Cada palabra de la descripción debe tener entre 1 y 25 caracteres'
                : value.split(/\s+/).some((word) => !/^[A-Za-zÁÉÍÓÚáéíóúüñ,.\s]*$/.test(word))
                ? 'La descripción contiene palabras no válidas'
                : value.length < 10
                ? 'La descripción debe tener al menos 10 caracteres'
                : ''
              : 'La descripción es requerida'
          );
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      setFormValid(!nombreError && !descripcionError);
    }, [nombreError, descripcionError]);
    
      const navigate = useNavigate();

      const [loading, setLoading] = useState(false)
    
      const location = useLocation()
    
      const fnObtenerDatos = async() => {
        setLoading(true)
        await axios.get('http://127.0.0.1:8000/api/enfermedad', {
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
        console.log('descripcion:' + doctor.descripcion)

        await axios.post('http://127.0.0.1:8000/api/enfermedad/crear', doctor).then((response) => {
          console.log("Validando Acceso...")
          console.log(response.data)
      
          if (response.data.token !== "") {
            console.log("Ok")
            secureLocalStorage.setItem('token', response.data.token)
            setOpenAlert(true); 
            setTimeout(() => {
             navigate("/enfermedad"); 
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
          await axios.post(`http://127.0.0.1:8000/api/enfermedad/borrar/?id=${location.state.id}`);
          console.log('Doctor eliminado con éxito');
          setOpenDeleteAlert(true); 
          setTimeout(() => {
            navigate("/enfermedad"); 
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
          <HealthAndSafetyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enfermedad
        </Typography>
        <form className={classes.form}  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre de la enfermedad"
                value={doctor.nombre}  onChange={inputChange}
                autoFocus
              />
              {nombreError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">{nombreError}</Alert>
                  </Stack>
                )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Descripción"
                name='descripcion'
                value={doctor.descripcion}
                onChange={(e) => inputChange(e)}
                autoComplete="lname"
              />
               {descripcionError && (
                  <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="error">{descripcionError}</Alert>
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
          La enfermedad ha sido guardado exitosamente.
        </CustomAlert>
      </Snackbar>

      <Snackbar open={openDeleteAlert} autoHideDuration={6000} onClose={() => setOpenDeleteAlert(false)}>
        <CustomAlert onClose={handleCloseAlert} variant="filled" severity="success" showCustomStyle sx={{ width: '100%' }} >
          La enfermedad ha sido eliminado exitosamente.
        </CustomAlert>
      </Snackbar>
    </Container>
    </div>
  )
}

export default FormularioEnfermedad