import React from 'react';
import { useState } from "react";
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Typography from "@mui/material/Typography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import curved9 from "assets/images/curved-images/hospital.jpg";




const SignIn = () => {

  const [rememberMe, setRememberMe] = useState(true);
  const [dLogin, setDLogin] = useState({
    email: '',
    password: '',
  });

  const [open, setOpen] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleOpen = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const inputChange = (event) => {
    setDLogin({
      ...dLogin,
      [event.target.name]: event.target.value,
    });

    // Validaciones en tiempo real
    if (event.target.name === "email") {
      if (!event.target.value) {
        setEmailError("Por favor, ingrese su email.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
        setEmailError("Por favor, ingrese un email válido.");
      } else {
        setEmailError("");
      }
    }

    if (event.target.name === "password") {
      if (!event.target.value) {
        setPasswordError("Por favor, ingrese su contraseña.");
      } else {
        setPasswordError("");
      }
      // Puedes agregar validaciones adicionales para la fortaleza de la contraseña si lo deseas
    }
  };

  const showAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const navigate = useNavigate();

  const fnLogin = async (e) => {
    e.preventDefault();

    // Validación final antes de enviar los datos
    if (!dLogin.email || !dLogin.password) {
      showAlert("error", "Por favor, complete todos los campos.");
      return;
    }

    console.log('Usuario:' + dLogin.email)
    console.log('Contraseña:' + dLogin.password)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', dLogin);

      if (response.data.token) {
        secureLocalStorage.setItem('token', response.data.token);
        navigate("/dashboard");
      } else {
        // Mostrar el Snackbar con el mensaje de error
        handleOpen("error", "Usuario no existe o contraseña incorrecta.");
      }
    } catch (error) {
      handleOpen("error", "Ha ocurrido un error en el servidor.");
    }
  };

  return (
    <CoverLayout
      title="Bienvenido"
      description="Hospital Esperanza y Vida"
      image={curved9}
    >
      
      <form onSubmit={fnLogin}>
        <SoftBox component="form" role="form">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="email"
              placeholder="Email"
              name='email'
              value={dLogin.email}
              onChange={(e) => inputChange(e)}
            />
          </SoftBox>
          {emailError && (
            <Stack sx={{ width: "100%" }} spacing={3}>
              
              <Alert severity="error">
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    {emailError}
                  </Typography>
              </Alert>
            </Stack>
          )}
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="password"
              placeholder="Password"
              name='password'
              value={dLogin.password}
              onChange={(e) => inputChange(e)}
            />
          </SoftBox>
          {passwordError && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    {passwordError}
                  </Typography>
              </Alert>
            </Stack>
          )}
          <SoftBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SoftTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </SoftTypography>
          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={fnLogin}
              disabled={!dLogin.email || !dLogin.password || emailError || passwordError}
            >
              Enviar
            </SoftButton>
          </SoftBox>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
              {alertMessage}
            </MuiAlert>
          </Snackbar>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </form>
    </CoverLayout>
  );
};

export default SignIn;
