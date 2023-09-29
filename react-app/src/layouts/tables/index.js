import axios from 'axios';
import React, { useEffect, useState } from 'react';
import secureLocalStorage from "react-secure-storage";
import Card from "@mui/material/Card";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import LinearProgress from '@mui/material/LinearProgress';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import DeleteIcon from '@mui/icons-material/Delete';

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const actions = [
    { icon: <FileCopyIcon />, name: 'Nuevo Paciente', key: 'new' },
  ];

  const hadleFuction = (e, key) => {
    e.preventDefault();
  
    if (key === "new") {
      navigate("/paciente/nuevo", { state: { id: 0 } });
    } 
  
    console.log("Presiona Boton" + key);
  };

  const navigate = useNavigate();
  
  return (
    <DashboardLayout>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              hadleFuction(e, action.key)
            }}
          />
        ))}
      </SpeedDial>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Paciente</SoftTypography>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>

      </SoftBox>
    </DashboardLayout>
  );
}

export default Tables;
