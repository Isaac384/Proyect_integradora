import { useEffect, useRef } from "react";

// typed-js
import Typed from "typed.js";

// @mui material components
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
import ContactanosLayout from '../components/CoverLayout/ContactanosLayout';




const ContactoOne = () => {
    const typedJSRef = useRef(null);

    // Setting up typedJS
    useEffect(() => {
      const typedJS = new Typed(typedJSRef.current, {
        strings: [" con compasión", "con calidez", "con empatía"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      });
  
      return () => typedJS.destroy();
    }, []);

  return (
    
        <ContactanosLayout>
          <SoftBox
        
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
          >
            <SoftTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Brindamos atención médica excepcional <span ref={typedJSRef} />
            </SoftTypography>
            <SoftTypography variant="body1" color="white" mt={4} mb={6} px={{ xs: 3, lg: 6 }}>
            Nuestra misión como hospital es proporcionar la mejor atención médica posible, cuidando de 
            la salud y el bienestar de nuestros pacientes con profesionalismo y compasión
            </SoftTypography>
            <SoftButton color="info">Contactanos</SoftButton>
          </Grid>
        </Container>
      </SoftBox>
   
           
        </ContactanosLayout> 
        
  );
};

export default ContactoOne;
