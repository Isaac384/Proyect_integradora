import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import MuiAlert from '@mui/material/Alert';


import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

import LinearProgress from '@mui/material/LinearProgress';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom'

import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

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

function FormularioCita() {
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
    
  const [cita, setCita] = useState({
    id: 0,
    nombre_Paciente: '',
    nombre_Enfermedad: '',
    nombre_Doctor: '',
    fecha: '',
    hora: '',
  });

  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [selectedEnfermedad, setSelectedEnfermedad] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(cita.fecha);
  const [selectedHora, setSelectedHora] = useState(cita.hora);
  const [isUpdating, setIsUpdating] = useState(false);

  const esHoraEnRango = (horaSeleccionada) => {
    const horaInicio = dayjs().hour(7).minute(59).second(59);
    const horaFin = dayjs().hour(21).minute(0).second(0);
    return horaSeleccionada.isBetween(horaInicio, horaFin, null, '[]');
  };

  const [prevSelectedHora, setPrevSelectedHora] = useState(null);


  const [botonDesactivado, setBotonDesactivado] = useState(true);

  const [errors, setErrors] = useState({
    paciente: false,
    enfermedad: false,
    doctor: false,
    fecha: false,
    hora: false,
  });

      const inputChange = (event) => {
        setCita({
          ...cita,
          [event.target.name]: event.target.value
        })
      }

      const handlePacienteChange = (event, option) => {
        setSelectedPaciente(option);
        setErrors((prevErrors) => ({
          ...prevErrors,
          paciente: !option,
        }));
      };
    
      const handleEnfermedadChange = (event, option) => {
        setSelectedEnfermedad(option);
        setErrors((prevErrors) => ({
          ...prevErrors,
          enfermedad: !option,
        }));
      };
    
      const handleDoctorChange = (event, option) => {
        setSelectedDoctor(option);
        setErrors((prevErrors) => ({
          ...prevErrors,
          doctor: !option,
        }));
      };

      const handleDateChange = (newValue) => {
        setSelectedFecha(newValue);
      
        // Validar si se ha seleccionado una fecha
        if (!newValue) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            fecha: 'Por favor, selecciona una fecha.',
          }));
        } else if (newValue.isBefore(dayjs(), 'date')) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            fecha: 'La fecha seleccionada debe ser posterior o igual al día actual.',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            fecha: null, // Elimina el mensaje de error cuando la fecha es válida
          }));
      
          // Verificar si la fecha seleccionada es el mismo día que el día actual
          const fechaIgualAlDiaActual = newValue.isSame(dayjs(), 'date');
      
          // Validar la hora solo si la fecha es el mismo día que el día actual
          if (fechaIgualAlDiaActual) {
            const horaActual = dayjs().format('hh:mm A');
            if (!esHoraEnRango(selectedHora)) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                hora: 'La hora seleccionada debe estar dentro del rango de 8:00 am a 9:00 pm.',
              }));
            } else if (!esHoraValida(selectedHora)) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                hora: 'La hora seleccionada debe ser posterior a la hora actual.',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                hora: null, // Elimina el mensaje de error cuando la hora es válida
              }));
            }
      
            // Actualizar la hora en el estado de la cita
            setCita((prevCita) => ({
              ...prevCita,
              hora: horaActual,
            }));
          } else {
            // Eliminar cualquier mensaje de error de hora cuando la fecha no es el mismo día que el día actual
            setErrors((prevErrors) => ({
              ...prevErrors,
              hora: null,
            }));
          }
        }
      };
      
      const handleTimeChange = (newValue) => {
        setSelectedHora(newValue);
      
        // Validar si se ha seleccionado una fecha
        if (!selectedFecha) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            hora: null, // Elimina el mensaje de error si no hay fecha seleccionada
          }));
          return;
        }
      
        // Verificar si la fecha seleccionada es igual al día actual
        const fechaIgualAlDiaActual = selectedFecha.isSame(dayjs(), 'date');
      
        // Validar si se ha seleccionado una hora
        if (!newValue) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            hora: 'Por favor, selecciona una hora.',
          }));
        } else if (!esHoraEnRango(newValue)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            hora: 'La hora seleccionada debe estar dentro del rango de 8:00 am a 9:00 pm.',
          }));
        } else if (fechaIgualAlDiaActual && !esHoraValida(newValue)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            hora: 'La hora seleccionada debe ser posterior a la hora actual.',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            hora: null, // Elimina el mensaje de error cuando la hora es válida
          }));
        }
      };

      const [fechaPosterior, setFechaPosterior] = useState(false);      
      

      const areAllFieldsCorrect = () => {
        return (
          selectedPaciente &&
          selectedEnfermedad &&
          selectedDoctor &&
          selectedFecha &&
          selectedHora &&
          !errors.paciente &&
          !errors.enfermedad &&
          !errors.doctor &&
          !errors.fecha &&
          !errors.hora
        );
      };
    
      useEffect(() => {
        setBotonDesactivado(!areAllFieldsCorrect());
      }, [errors]);
      
      
      const isFechaValida = (selectedDate) => {
        const currentDate = dayjs();
        return selectedDate && selectedDate.isSameOrAfter(currentDate, 'day');
      };

      const esHoraValida = (horaSeleccionada) => {
        const horaActual = dayjs();
        return horaSeleccionada.isAfter(horaActual);
      };
    
      const navigate = useNavigate();

      const [loading, setLoading] = useState(false)
    
      const location = useLocation()
    
      const fnObtenerDatos = async () => {
        setLoading(true);
        await axios
          .get('http://127.0.0.1:8000/api/cita', {
            params: {
              id: location.state.id,
            },
          })
          .then((response) => {
            const { fecha, hora, ...citaData } = response.data;
            setCita(citaData);
            setSelectedFecha(dayjs(fecha));
            setSelectedHora(dayjs(hora, 'hh:mm A'));
            setLoading(false);
            setIsUpdating(true)
          });
      }
    
      useEffect(() => {
        console.log('Reader');
        if (location.state.id !=0){
          fnObtenerDatos();
        }
      }, []);
      
      const fnPaciente = async (e) => {
        e.preventDefault();

        
        cita.nombre_Paciente = selectedPaciente ? selectedPaciente.nombre : '';
        cita.nombre_Enfermedad = selectedEnfermedad ? selectedEnfermedad.nombre : '';
        cita.nombre_Doctor = selectedDoctor ? selectedDoctor.nombre : '';

        if (selectedFecha) {
            cita.fecha = selectedFecha.format('MM/DD/YYYY');
          }
        
          if (selectedHora) {
            cita.hora = selectedHora.format('hh:mm A');
          }

        console.log('nombre_Paciente:' + cita.nombre_Paciente)
        console.log('nombre_Enfermedad:' + cita.nombre_Enfermedad)
        console.log('nombre_Doctor:' + cita.nombre_Doctor)
        console.log('fecha:' + cita.fecha)
        console.log('hora:' + cita.hora)

        await axios.post('http://127.0.0.1:8000/api/cita/crear', cita).then((response) => {
          console.log("Validando Acceso...")
          console.log(response.data)
      
          if (response.data.token !== "") {
            console.log("Ok")
            secureLocalStorage.setItem('token', response.data.token)
    
            navigate("/citas");
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
          await axios.post(`http://127.0.0.1:8000/api/cita/borrar/?id=${location.state.id}`);
          console.log('Cita eliminado con éxito');
          navigate("/citas");
          // Realiza otras acciones después de eliminar el paciente
        } catch (error) {
          console.error('Error al eliminar el paciente', error);
        } finally {
          setLoading(false);
        }
      };
      
      
      const hadleRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)

        navigate('/paciente/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,

    
         }
        })
      }

      const getData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/pacientes').then((response) => {
          console.log(response.data);
          setRows(response.data);
        });
      };
    
      const [rows, setRows] = useState([]);

      useEffect(() => {
        console.log('Reader');
        getData();
      }, []);

      const EnfermedadRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)
        navigate('/enfermedad/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,    
         }
        })
      }
      const getDataaa = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/enfermedades').then((response) => {
          console.log(response.data);
          setRowsss(response.data);
        });
    };

    const [rowsss, setRowsss] = useState([]);

    useEffect(() => {
        console.log('Reader');
        getDataaa();
      }, []);

      const DoctorRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)
        navigate('/doctor/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,
    
         }
        })
      }
      const getDataa = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/doctores').then((response) => {
          console.log(response.data);
          setRowss(response.data);
        });
      };

      const [rowss, setRowss] = useState([]);

      useEffect(() => {
        console.log('Reader');
        getDataa();
      }, []);

      const classes = useStyles();

      useEffect(() => {
        if (cita.nombre_Paciente) {
          const pacienteSeleccionado = rows.find((paciente) => paciente.nombre === cita.nombre_Paciente);
          setSelectedPaciente(pacienteSeleccionado);
        }
      }, [cita.nombre_Paciente, rows]);
    
      useEffect(() => {
        if (cita.nombre_Enfermedad) {
          const enfermedadSeleccionada = rowsss.find((enfermedad) => enfermedad.nombre === cita.nombre_Enfermedad);
          setSelectedEnfermedad(enfermedadSeleccionada);
        }
      }, [cita.nombre_Enfermedad, rowsss]);
    
      useEffect(() => {
        if (cita.nombre_Doctor) {
          const doctorSeleccionado = rowss.find((doctor) => doctor.nombre === cita.nombre_Doctor);
          setSelectedDoctor(doctorSeleccionado);
        }
      }, [cita.nombre_Doctor, rowss]);
    
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EventAvailableIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cita
          </Typography>
          <form className={classes.form} onSubmit={fnPaciente} noValidate>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    name="nombre_Paciente"
                    options={rows}
                    getOptionLabel={(option) => option.nombre}
                    renderInput={(params) => (
                      <TextField {...params} label="Paciente" value={cita.nombre_Paciente} onChange={inputChange} />
                    )}
                    value={selectedPaciente}
                    onChange={handlePacienteChange} 
                  />
                  {errors.paciente && ( 
                  <Alert severity="error">
                    Por favor, selecciona un paciente.
                  </Alert>
                )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    name="nombre_Enfermedad"
                    options={rowsss}
                    getOptionLabel={(option) => option.nombre}
                    renderInput={(params) => (
                      <TextField {...params} label="Enfermedad" value={cita.nombre_Enfermedad} onChange={inputChange} />
                    )}
                    value={selectedEnfermedad}
                    onChange={handleEnfermedadChange}
                  />
                  {errors.enfermedad && ( 
                  <Alert severity="error">
                    Por favor, selecciona una enfermedad.
                  </Alert>
                )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    name="nombre_Doctor"
                    options={rowss}
                    getOptionLabel={(option) => option.nombre}
                    renderInput={(params) => (
                      <TextField {...params} label="Doctor" value={cita.nombre_Doctor} onChange={inputChange} />
                    )}
                    value={selectedDoctor}
                    onChange={handleDoctorChange}
                  />
                  {errors.doctor && ( 
                  <Alert severity="error">
                    Por favor, selecciona un doctor.
                  </Alert>
                )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker name="fecha" value={selectedFecha} onChange={handleDateChange} />
                  </DemoContainer>
                  {errors.fecha && <Alert severity="error" sx={{ width: '300px', marginTop: '10px' }}>{errors.fecha}</Alert>}
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'TimePicker',
                      'MobileTimePicker',
                      'DesktopTimePicker',
                      'StaticTimePicker',
                    ]}
                  >
                    <DemoItem label="Hora">
                    <MobileTimePicker
                      name="hora"
                      value={selectedHora}
                      onChange={handleTimeChange}
                      minTime={dayjs().hour(8).minute(0)}
                      maxTime={dayjs().hour(21).minute(0)}
                    />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                {errors.hora && <Alert severity="error" sx={{marginTop: '10px' }}>{errors.hora}</Alert>}
                
              </Grid>

              <br></br>

              {loading ? (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              ) : null}
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={fnPaciente}
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={botonDesactivado} // Deshabilita el botón según el estado
            >
              Guardar
            </Button>
            <Button
              type="submit"
              fullWidth
              onClick={fnEliminar}
              variant="contained"
              color="secondary"
            >
              Eliminar
            </Button>
            <br/><br/>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default FormularioCita