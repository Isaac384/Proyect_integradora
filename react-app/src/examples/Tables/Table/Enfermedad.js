import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';



function Enfermedad() {
  const navigate = useNavigate();
    const EnfermedadRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)
        console.log('Descripcion: ' + params.row.id)
        navigate('/enfermedad/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,
          descripcion: params.row.descripcion,
    
         }
        })
      }
    const columnsss = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'nombre', headerName: 'Nombre de la enfermedad', width: 250 },
        { field: 'descripcion', headerName: 'Descripcion', width: 300 },
      
    ];

    const getDataaa = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/enfermedades').then((response) => {
          console.log(response.data);
          setRowsss(response.data);
        });
    };

    const [rowsss, setRowsss] = useState([]);

    useEffect(() => {
        console.log('Reader');
        getDataaa();
      }, []);
    

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <DataGrid
        rows={rowsss} // Corrige el nombre de la variable a rowss
        columns={columnsss}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={EnfermedadRowClick}
      />
      </Container>
        
    </div>
  )
}

export default Enfermedad