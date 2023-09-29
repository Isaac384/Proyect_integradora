import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Container from '@material-ui/core/Container';

function Cita() {
    const navigate = useNavigate();

    const CitaRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('nombre_Paciente: ' + params.row.id)
        console.log('nombre_Enfermedad: ' + params.row.id)
        console.log('nombre_Doctor: ' + params.row.id)
        console.log('fecha: ' + params.row.id)
        console.log('hora: ' + params.row.id)
        navigate('/cita/nuevo',{
         state:{
          id: params.row.id,
          nombre_Paciente: params.row.nombre_Paciente,
          nombre_Enfermedad: params.row.nombre_Enfermedad,
          nombre_Doctor: params.row.nombre_Doctor,
          fecha: params.row.fecha,
          hora: params.row.hora
    
         }
        })
      }
      const columnss = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'nombre_Paciente', headerName: 'Paciente', width: 200 },
        { field: 'nombre_Enfermedad', headerName: 'Enfermedad', width: 200 },
        { field: 'nombre_Doctor', headerName: 'Doctor', width: 200 },
        {
          field: 'fecha',
          headerName: 'Fecha',
          width: 150,
        },
        {
          field: 'hora',
          headerName: 'hora',
          description: 'No se podra reordenar',
          sortable: false,
          width: 150,
          valueGetter: (params) =>
            `${params.row.hora}`,
        },
      ];
      const getDataa = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/citas').then((response) => {
          console.log(response.data);
          setRowss(response.data);
        });
      };

      const [rowss, setRowss] = useState([]);

      useEffect(() => {
        console.log('Reader');
        getDataa();
      }, []);
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <DataGrid
        rows={rowss} // Corrige el nombre de la variable a rowss
        columns={columnss}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={CitaRowClick}
      />
      </Container>
        
    </div>
  )
}

export default Cita