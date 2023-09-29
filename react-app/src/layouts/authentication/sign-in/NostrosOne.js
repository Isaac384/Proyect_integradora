import React from 'react'
import "./style.css";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import bgImage from "assets/images/hospital2.jpg";
import Navbars from "examples/Navbars/DefaultNavbar/index";
import NuevoLayout from '../components/CoverLayout/NuevoLayout';
import NosotrosLayout from '../components/CoverLayout/NosotrosLayout';
import { Pinterest } from '@material-ui/icons';

function NostrosOne() {
    const pageHeader = React.useRef(null);
  return (
    <NosotrosLayout>
          <Container >
              <SoftBox className="hom2">
              <Grid 
            container
            item
            xs={12}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
            
          >
            <SoftTypography className='hom2'
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"], paddingtop: "-25px",
                },
              })}
              mb={3}
            >
              Conoce nuestras instalaciones
            </SoftTypography>
            <SoftTypography variant="body1" color="white" mt={1} mb={{ xs: 3, sm: 8 }} px={0}>
              Te invitamos a conocer nuestras modernas instalaciones en el Hospital de la Esperanza, 
              donde encontrarás un equipo comprometido con tu bienestar y una atención médica de vanguardia
            </SoftTypography>
            <SoftTypography variant="h6" color="white" textTransform="uppercase" mb={3}>
              connect with us on:
            </SoftTypography>
            <Stack direction="row" spacing={6} mx="auto">
        <SoftTypography
            component={Link}
            href="#"
            variant="body2"
            onClick={(e) => e.preventDefault()}
        >
        <SoftBox mr={3} color="secondary">
                    <FacebookIcon fontSize="medium" color='white' />
                    </SoftBox>
        </SoftTypography>
        <SoftTypography
            component={Link}
            href="#"
            variant="body2"
            onClick={(e) => e.preventDefault()}
        >
            <SoftBox mr={3} color="secondary">
                    <InstagramIcon fontSize="medium" color='white' />
                    </SoftBox>
        </SoftTypography>
        <SoftTypography
            component={Link}
            href="#"
            variant="body2"
            onClick={(e) => e.preventDefault()}
        >
            <SoftBox mr={3} color="secondary">
                    <TwitterIcon fontSize="medium" color='white' />
                    </SoftBox>
        </SoftTypography>
                <SoftTypography
                    component={Link}
                    href="#"
                    variant="body2"
                    onClick={(e) => e.preventDefault()}
                >
                    <SoftBox mr={3} color="secondary">
                            <LinkedInIcon fontSize="medium" color='white' />
                            </SoftBox>
                </SoftTypography>
        </Stack>
          </Grid>
        </SoftBox>
          </Container>
            
          
    </NosotrosLayout>
  )
}

export default NostrosOne