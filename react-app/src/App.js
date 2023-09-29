import { useState, useEffect, useMemo } from "react";

import secureLocalStorage from "react-secure-storage";

// react-router components
import { Routes, Route, Navigate, Redirect, useLocation } from "react-router-dom";


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import SignIn from "layouts/authentication/sign-in";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";



// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "routes";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import ForDoctor from "layouts/tables/ForDoctor";
import ForPaciente from "layouts/tables/ForPaciente";
import ForEnfermedad from "layouts/tables/ForEnfermedad";
import ForCita from "layouts/tables/ForCita";
import HeaderOne from "layouts/authentication/sign-in/HeaderOne";
import UnioHeader from "views/UnioHeader";
import NosotrosLayout from "layouts/authentication/components/CoverLayout/NosotrosLayout";
import NostrosOne from "layouts/authentication/sign-in/NostrosOne";
import NostrosUnion from "views/NostrosUnion";
import ContactanosUnion from "views/ContactanosUnion";
import Errores404 from "views/Errores404";
import Tables from "layouts/tables";
import DoctorComponent from "layouts/tables/DoctorComponent";
import EnfermedadComponent from "layouts/tables/EnfermedadComponent";
import CitaComponent from "layouts/tables/CitaComponent";
import Dashboard from "layouts/dashboard";




export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    console.log('Render');
    const token = secureLocalStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheckingToken(false);
  }, []);

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => {
    setOpenConfigurator(dispatch, !openConfigurator);
  };

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Soft UI Dashboard"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          <Route path="/dashboard" element={isLoggedIn ? <Sidenav /* ... */ /> : <Navigate to="/login" />} />
          {getRoutes(routes)}
          <Route path="/login" element={<SignIn />} />
          <Route path="/error404" element={<Errores404 />} />
          <Route path="*" element={<Navigate to="/error404" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Hospital"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        <Route exact path="/" element={<UnioHeader />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/nosotros" element={<NostrosUnion />} />
        <Route path="/contactanos" element={<ContactanosUnion />} />
        <Route path="/error404" element={<Errores404 />} />
        <Route path="/doctor/nuevo" element={isLoggedIn ? <ForDoctor /> : <Navigate to="/login" />} />
        <Route path="/paciente/nuevo" element={isLoggedIn ? <ForPaciente /> : <Navigate to="/login" />} />
        <Route path="/enfermedad/nuevo" element={isLoggedIn ? <ForEnfermedad /> : <Navigate to="/login" />} />
        <Route path="/cita/nuevo" element={isLoggedIn ? <ForCita /> : <Navigate to="/login" />} />
        <Route path="/paciente" element={isLoggedIn ? <Tables /> : <Navigate to="/login" />} />
        <Route path="/doctor" element={isLoggedIn ? <DoctorComponent/> : <Navigate to="/login" />} />
        <Route path="/enfermedad" element={isLoggedIn ? <EnfermedadComponent/> : <Navigate to="/login" />} />
        <Route path="/cita" element={isLoggedIn ? <CitaComponent/> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/login" />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
    </ThemeProvider>
  );
}
