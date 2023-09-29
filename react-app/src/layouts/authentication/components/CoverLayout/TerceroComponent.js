import React from 'react'
import SoftBox from "components/SoftBox";
import { Container } from '@mui/material';
import SoftTypography from "components/SoftTypography";
import Typography from "@mui/material/Typography";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SoftInput from "components/SoftInput";
import SoftButton from 'components/SoftButton';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import "./style.css";
import bgImage from "assets/img/bg8.jpg";
import { margin } from '@mui/system';
function TerceroComponent() {
  return (
    <SoftBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item px={6}>
          <SoftBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <SoftBox component="form" p={2} method="post">
                  <SoftBox px={3} py={{ xs: 2, sm: 6 }}>
                    <SoftTypography variant="h2" mb={1}>
                      Hola de nuevo!
                    </SoftTypography>
                    <SoftTypography variant="body1" color="text" mb={2}>
                      Contactanos para agendar tu cita
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={3}>
                        <SoftInput
                          variant="standard"
                          label="My name is"
                          placeholder="Ingresa tu nombre completo"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <SoftInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="Ingresa tu domicilio"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <SoftInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="Ingresa tu telefono"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <SoftInput
                          variant="standard"
                          label="Your message"
                          placeholder="Ingresa tu descripción"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <SoftButton variant="gradient" color="info">
                        Enviar Mensaje
                      </SoftButton>
                    </Grid>
                  </SoftBox>
                </SoftBox>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) => `${linearGradient(rgba(gradients.info.main, 0.2), rgba(gradients.info.state, 0.2))}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <SoftBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <SoftBox py={6} pl={6} pr={{ xs: 6, sm: 12, }} my="auto">
                    <SoftTypography variant="h3" color="white" mb={1} className="texto">
                     Información de contacto
                    </SoftTypography>
                    <SoftTypography variant="body2" color="white" opacity={0.8} mb={3} ClassName="just">
                      Estamos disponibles a las 24 horas en el Hospital Esperanza y Vida
                    </SoftTypography>
                    <SoftBox display="flex" p={1}>
                      <SoftTypography variant="button" color="white">
                        <CallIcon fontSize="small" />
                      </SoftTypography>
                      <SoftTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+52) 772 100 200
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" color="white" p={1}>
                      <SoftTypography variant="button" color="white">
                        <EmailIcon fontSize='small'/>
                      </SoftTypography>
                      <SoftTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Esperanza_Vida@gmail.com
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" color="white" p={1}>
                      <SoftTypography variant="button" color="white">
                        <RoomIcon fontSize='small'/>
                      </SoftTypography>
                      <SoftTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Periférico Sur 5050, Jardines del Pedregal, México, CDMX, México
                      </SoftTypography>
                      <br/>
                    </SoftBox>
                    <Grid item xs={12} lg={8} style={{ display: 'flex', justifyContent: 'center' , marginTop: 45, marginLeft: 32 }}>
                    <br/>
                    <SoftBox display="flex" justifyContent="center" mt={1} mb={3} className="right-content">
                        <SoftBox mr={3} color="secondary">
                        <FacebookIcon fontSize="medium" color="white" />
                        </SoftBox>
                        <SoftBox mr={3} color="secondary">
                        <TwitterIcon fontSize="medium" color="white"  />
                        </SoftBox>
                        <SoftBox mr={3} color="secondary">
                        <InstagramIcon fontSize="medium" color="white"  />
                        </SoftBox>
                        <SoftBox mr={3} color="secondary">
                        <PinterestIcon fontSize="medium" color="white"  />
                        </SoftBox>
                        <SoftBox color="secondary">
                        <LinkedInIcon fontSize="medium" color="white"  />
                        </SoftBox>
                    </SoftBox>
                    </Grid>
                  </SoftBox>
                </SoftBox>
              </Grid>
            </Grid>
          </SoftBox>
        </Grid>
      </Container>
    </SoftBox>
  )
}

export default TerceroComponent