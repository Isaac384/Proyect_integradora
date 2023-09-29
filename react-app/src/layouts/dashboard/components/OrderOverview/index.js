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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Ordenes
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              24%
            </SoftTypography>{" "}
            este mes
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Cambios de diseño"
          dateTime="22 Julio 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Nueva cita #1832412"
          dateTime="21 Junio 11:10 AM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Compra medicamentos"
          dateTime="11 Julio 9:34 AM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Nuevo medicamento #4395133"
          dateTime="20 Junio 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Nueva tarjeta agregada para el usuario #4395133"
          dateTime="18 Junio 4:54 AM"
        />
        <TimelineItem color="dark" icon="paid" title="Compra articulos #9583120" dateTime="17 Junio 10:45 AM" />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
