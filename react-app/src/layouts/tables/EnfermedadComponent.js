import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { useNavigate } from 'react-router-dom';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Doctor from "examples/Tables/Table/Doctor";
import Enfermedad from "examples/Tables/Table/Enfermedad";
function EnfermedadComponent() {
    const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const actions = [
    { icon: <FileCopyIcon />, name: 'Nueva Enfermedad', key: 'new' },

  ];

  const hadleFuction = (e, key) => {
    e.preventDefault();
  
    if (key === "new") {
      navigate("/enfermedad/nuevo", { state: { id: 0 } });
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
            onClick={
              (e)=>{
                hadleFuction(e, action.key)
              }
            }
          />
        ))}
      </SpeedDial>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Doctor</SoftTypography>
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
              <Enfermedad columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        
      </SoftBox>
    </DashboardLayout>
  )
}

export default EnfermedadComponent