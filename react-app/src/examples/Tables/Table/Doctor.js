import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Container from '@material-ui/core/Container';


function Doctor() {
  const navigate = useNavigate();

    const DoctorRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)
        console.log('apellidos: ' + params.row.id)
        console.log('Especialidad: ' + params.row.id)
        console.log('Telefono: ' + params.row.id)
        console.log('Domicilio: ' + params.row.id)
        navigate('/doctor/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,
          apellidos: params.row.apellidos,
          especialidad: params.row.especialidad,
          telefono: params.row.telefono,
          domicilio: params.row.domicilio
    
         }
        })
      }
      const columnss = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'nombre', headerName: 'Nombre', width: 130 },
        { field: 'apellidos', headerName: 'Apellidos', width: 200 },
        { field: 'especialidad', headerName: 'Especialidad', width: 180 },
        {
          field: 'telefono',
          headerName: 'Telefono',
          type: 'tel',
          width: 120,
        },
        {
          field: 'domicilio',
          headerName: 'Domicilio',
          description: 'No se podra reordenar',
          sortable: false,
          width: 200,
          valueGetter: (params) =>
            `${params.row.domicilio}`,
        },
      ];
      const getDataa = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/doctores').then((response) => {
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
        onRowClick={DoctorRowClick}
      />
      </Container>
        
    </div>
  )
}

export default Doctor