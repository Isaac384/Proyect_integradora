/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Footer() {
  const [open, setOpen] = useState(false); // Estado para controlar la apertura y cierre del diálogo

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SoftBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SoftBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Hospital
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Nosotros
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Equipo
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Servicios
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </SoftTypography>
            </SoftBox>
            <SoftBox>
              <SoftTypography component="a" href="#" onClick={handleClickOpen} variant="body2" color="secondary">
                Privacidad
              </SoftTypography>
              <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                  >
                    <AppBar sx={{ position: 'relative', backgroundColor: "#F5DEB3"}}>
                      <Toolbar color="info">
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <SoftTypography sx={{ ml: 2, flex: 1 }} variant="h4" color="black" component="div">
                          Politicas de Privacidad 
                        </SoftTypography>
                        <SoftButton  variant="gradient" color="info"  onClick={handleClose}>
                          Aceptar
                        </SoftButton>
                      </Toolbar>
                    </AppBar>
                    <List>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Política de Privacidad</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      En Hospital Esperanza y Vida, nos comprometemos a proteger la privacidad y la confidencialidad de la información personal de nuestros pacientes y visitantes. Esta política de privacidad establece cómo recopilamos, utilizamos, divulgamos y protegemos la información que nos proporciona.
                    </p>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Recopilación de información personal</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Cuando usted utiliza nuestros servicios médicos o visita nuestro hospital, es posible que recopilemos información personal como su nombre, fecha de nacimiento, dirección, número de teléfono, dirección de correo electrónico y antecedentes médicos relevantes. Esta información nos permite brindarle la atención médica adecuada y garantizar una comunicación efectiva entre usted y nuestro equipo médico.
                    </p>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Uso de la información personal</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Utilizamos la información personal recopilada con los siguientes propósitos:
                    </p >
                    <ul style={{ marginLeft: '30px', marginBottom: '20px' }}>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Brindar atención médica: Utilizamos su información personal para proporcionarle servicios de atención médica, programar citas, mantener registros médicos, realizar diagnósticos y recomendar tratamientos adecuados.</li>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Comunicación: Utilizamos su información de contacto para enviarle recordatorios de citas, informarle sobre resultados de pruebas médicas, proporcionarle información relevante sobre su atención médica y responder a sus consultas.</li>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Mejora de servicios: Podemos utilizar información anónima y agregada para realizar análisis y mejorar la calidad de nuestros servicios médicos, instalaciones y procedimientos.</li>
                    </ul>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Divulgación de información personal</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      En Hospital Esperanza y Vida, nos comprometemos a no divulgar su información personal a terceros sin su consentimiento, excepto en los siguientes casos:
                    </p>
                    <ul style={{ marginLeft: '30px', marginBottom: '20px' }}>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Colaboradores médicos: Podemos compartir su información con médicos, enfermeras y personal de atención médica autorizado que estén involucrados en su tratamiento y atención.</li>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Requerimientos legales: Si así lo exige la ley o en respuesta a una orden judicial, podemos divulgar su información personal para cumplir con las obligaciones legales.</li>
                      <li style={{ marginBottom: '10px', fontSize: '18px',color: 'black', fontFamily: 'Arial' }}>Protección de derechos: Podemos divulgar su información personal para proteger nuestros derechos legales y tomar medidas en caso de fraude, abuso o violaciones de nuestras políticas.</li>
                    </ul>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Seguridad de la información</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, uso indebido, pérdida o divulgación. Mantenemos sistemas de seguridad y procedimientos internos para salvaguardar la confidencialidad de su información.
                    </p>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Actualización de información personal</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Es importante que nos informe de cualquier cambio en su información personal para garantizar que los registros sean precisos y estén actualizados. Puede acceder y corregir su información personal comunicándose con nuestro equipo de atención al paciente.
                    </p>
                    <h3 className="title" style={{margin: '15px', marginTop: '10px' }}>Consentimiento</h3>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Al utilizar nuestros servicios médicos o visitar nuestro hospital, usted acepta esta política de privacidad y nos otorga su consentimiento para recopilar, utilizar y divulgar su información personal de acuerdo con lo establecido en esta política.
                    </p>
                    <p style={{ fontSize: '20px',color: 'black', fontFamily: 'Arial', margin: '30px' }}>
                      Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de su información personal, no dude en ponerse en contacto con nosotros. Estaremos encantados de brindarle la información adicional que necesite.
                    </p>
                    </List>
                  
                  </Dialog>
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <SoftBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SoftBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </SoftBox>
            <SoftBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SoftTypography variant="body2" color="secondary">
            Copyright &copy; 2023 Hospital Esperanza y Vida
          </SoftTypography>
        </Grid>
      </Grid>
      

    </SoftBox>
  );
}

export default Footer;
