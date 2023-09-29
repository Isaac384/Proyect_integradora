import React from 'react';
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
import NuevoLayout from '../components/CoverLayout/NuevoLayout';




const HeaderOne = () => {

  return (
    
        <NuevoLayout>
          <SoftBox >
             <Container>
              
              <div className="container">
            <img
              alt="..."
              className="centered-image"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="hospital-text">Hospital</h1>
            <h3 className='subtitulo'>Hospital Esperanza y Vida.</h3>
          </div>
              
           </Container>
          </SoftBox>
           
        </NuevoLayout> 
        
  );
};

export default HeaderOne;
