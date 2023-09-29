import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import Card from "@mui/material/Card";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import FormularioEnfermedad from 'examples/Tables/Table/FormularioEnfermedad';

function ForEnfermedad() {
    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;
    
    
      return (
        <div>
            <DashboardLayout>
          <DashboardNavbar />
          <SoftBox py={3}>
            <SoftBox mb={3}>
              <Card>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6">Enfermedad</SoftTypography>
                </SoftBox>
                <SoftBox
                  sx={{
                    "& .MuiTableRow-root:not(:last-child)": {
                      "& td": {
                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                          `${borderWidth[1]} solid ${borderColor}`,
                      },
                    },
                  }}
                >
                  <FormularioEnfermedad />
                </SoftBox>
              </Card>
            </SoftBox>
            
          </SoftBox>
        </DashboardLayout>
        </div>
      )
}

export default ForEnfermedad