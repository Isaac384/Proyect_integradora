import React from 'react'
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Typography from "@mui/material/Typography";
import SoftInput from "components/SoftInput";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import "./style.css";
import doctor from "assets/images/doctor.png";

import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
function PrincipalComponent() {
  return (
    <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <br/>
              <br/>
              <br/>
                <h2 className="title"> Mejor Servicio Medico</h2>
                <h5 className="description">
                En Mejor Servicio Médico, nuestra prioridad es brindar una atención médica excepcional y 
                compasiva a cada uno de nuestros pacientes. Somos un equipo de profesionales altamente capacitados
                 y dedicados, comprometidos a mejorar la salud y el bienestar de quienes nos eligen para cuidar de ellos.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images/hospital3.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    En nuestro hospital, cuidamos de tu salud con amor y profesionalismo, 
                    porque cada vida es valiosa.
                      <br></br>
                      <small>Hospital</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images/hospital5.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images/hospital4.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    Áreas Especializadas
                  </h3>
                  <p>
                  En el Hospital San Rafael, contamos con áreas especializadas para diferentes disciplinas médicas. 
                  Nuestros pacientes pueden acceder a servicios de cardiología, oncología, neurología, pediatría, 
                  obstetricia y ginecología, entre otras especialidades. Cada área está equipada con tecnología médica de
                  punta y cuenta con profesionales altamente capacitados para ofrecer una atención integral y especializada.
                  </p>
                  <p>
                  Nuestras salas de cirugía cumplen con los más altos estándares de seguridad y tecnología. Los procedimientos 
                  quirúrgicos se llevan a cabo con equipos médicos de última generación y bajo la supervisión de cirujanos experimentados 
                  y calificados. Nuestro enfoque en la seguridad del paciente y la precisión nos permite obtener excelentes resultados en cada
                   intervención.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Conoce nuestro Equipo</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/images/doctor2.jpg")}
                    ></img>
                    <h4 className="title">Fernando Olvera</h4>
                    <p className="category text-info">Cirujano</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/images/Doctor_Mike_1.jpg")}
                    ></img>
                    <h4 className="title">Ricardo Mendiola</h4>
                    <p className="category text-info">Nutriologo</p>
                    <p className="description1">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/images/doctor3.jpg")}
                    ></img>
                    <h4 className="title">Erik Jimarez</h4>
                    <p className="category text-info">Quiropractico</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">¿Quieres trabajar con nosotros?</h2>
            <p className="description">Envia tu información</p>
            
            <SoftBox style={{ width: "50%", marginBottom: "2rem" }}>
              <SoftInput success
              type="text"
              placeholder="Ingresa tu Nombre"
              name='text'
              className="custom-input"
            />
            
            <SoftInput  placeholder="Ingresa tu email" type="email" success className="custom-input" />
            <SoftInput placeholder="Descripción" multiline rows={5} success  className="custom-input" />

            <SoftButton variant="contained" color="info" style={{ width: "50%"}}>Enviar</SoftButton>
            </SoftBox>
            
          </Container>
        </div>
        
      </div>
        

  )
}

export default PrincipalComponent