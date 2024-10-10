import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Table/table.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const MUITable = ({ data, onRemoveUserById }) => {

    const navigate = useNavigate();
    const handleGoUpdatePage = (id) => {
        navigate(`/edit/${id}`);

    };




    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow sx={{ border: '1px solid black' }}>

                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>


                    </TableRow>

                </TableHead>

                <TableBody>
                    {
                        data.map((row) => (
                            <TableRow sx={{ border: '1px solid black' }} key={row.id} >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.surname}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{<DeleteIcon

                                    onClick={() => onRemoveUserById(row.id)}
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'gray',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: 'red',
                                        },
                                    }} />}</TableCell>
                                <TableCell>{<EditIcon
                                    onClick={() => handleGoUpdatePage(row.id)}
                                    sx={{

                                        cursor: 'pointer',
                                        color: 'gray',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: 'red',
                                        },
                                    }} />}</TableCell>
                            </TableRow>

                        ))
                    }


                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MUITable
