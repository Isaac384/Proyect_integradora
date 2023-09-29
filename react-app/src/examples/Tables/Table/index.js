import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Container from '@material-ui/core/Container';



import { useNavigate } from 'react-router-dom';

function Table() {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Nuevo Paciente', key: 'new' },
      ];
    
      const hadleFuction = (e, key) => {
        e.preventDefault();
      
        if (key === "new") {
          handleClickOpen({ state: { id: 0 } });
        } 
      
        console.log("Presiona Boton" + key);
      };
    
    
      const navigate = useNavigate();
    
      const hadleRowClick = (params) => {
        console.log('ID: ' + params.row.id)
        console.log('Nombre: ' + params.row.id)
        console.log('Edad: ' + params.row.id)
        console.log('NSS: ' + params.row.id)
        console.log('Domicilio: ' + params.row.id)
        navigate('/paciente/nuevo',{
         state:{
          id: params.row.id,
          nombre: params.row.nombre,
          edad: params.row.edad,
          nss: params.row.nss,
          domicilio: params.row.domicilio
    
         }
        })
      }
      const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'nombre', headerName: 'Nombre', width: 180 },
        { field: 'nss', headerName: 'NSS', width: 150 },
        {
          field: 'edad',
          headerName: 'Edad',
          type: 'number',
          width: 100,
        },
        {
          field: 'domicilio',
          headerName: 'Domicilio',
          description: 'No se podra reordenar',
          sortable: false,
          width: 250,
          valueGetter: (params) =>
            `${params.row.domicilio}`,
        },
      ];

      const getData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/pacientes').then((response) => {
          console.log(response.data);
          setRows(response.data);
        });
      };
    
      const [rows, setRows] = useState([]);

      useEffect(() => {
        console.log('Reader');
        getData();
      }, []);
 
      return(
          <div>
            <Container component="main" maxWidth="xs">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                onRowClick={hadleRowClick}
              />
            </Container>
      
          </div>
      )
}

export default Table;
