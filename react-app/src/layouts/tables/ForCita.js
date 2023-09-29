import React, { useEffect, useState } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import Card from "@mui/material/Card";

import LinearProgress from '@mui/material/LinearProgress';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete';


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Doctor from "examples/Tables/Table/Doctor";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormularioDoctor from 'examples/Tables/Table/FormularioDoctor';
import FormularioPaciente from 'examples/Tables/Table/FormularioPaciente';
import FormularioCita from 'examples/Tables/Table/FormularioCita';

function ForCita() {
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
              <SoftTypography variant="h6">Cita</SoftTypography>
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
              <FormularioCita />
            </SoftBox>
          </Card>
        </SoftBox>
        
      </SoftBox>
    </DashboardLayout>
    </div>
  )
}

export default ForCita