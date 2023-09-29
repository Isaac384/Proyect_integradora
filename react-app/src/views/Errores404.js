import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import Grid from "@mui/material/Grid";
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';
import SoftInput from 'components/SoftInput';
import image from "assets/img/error.png";
import PageLayout from 'examples/LayoutContainers/PageLayout';
import Footer from 'layouts/authentication/components/Footer';

function Errores404() {
  return (
    <div>
      <PageLayout>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          spacing={3}
        >
          <Grid container item xs={12} xl={7} ml="auto" spacing={2}>
            <Grid item xs={12}>
              <SoftTypography variant="h1" color="error" textGradient mb={1} sx={{ fontSize: "5rem" }}>
                ERROR 404
              </SoftTypography>
              <SoftTypography variant="h2" color="inherit" mb={2} sx={{ marginBottom: "1rem" }}>
                Erm. Página no encontrada
              </SoftTypography>
              <SoftTypography variant="subtitle1" color="text" mb={2} sx={{ marginBottom: "1rem" }}>
                Le sugerimos que vaya a la página de inicio mientras resolvemos este problema.
              </SoftTypography>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Utiliza el componente Link para redirigir al usuario */}
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <SoftButton variant="contained" color="info" size="medium" sx={{ with: "100%" }}>
                  Regresar al inicio
                </SoftButton>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} mt={-4}>
            <SoftBox
              component="img"
              src={image}
              alt="image"
              maxWidth="100%"
              height="auto"
              borderRadius="lg"
              boxShadow="xl"
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </PageLayout>
      <Footer />
    </div>
  );
}

export default Errores404;
