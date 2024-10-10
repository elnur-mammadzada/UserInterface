import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Container } from '@mui/material';
import MUIButton from '../../components/Button/MUIButton';
import AddIcon from '@mui/icons-material/Add';
import MUITable from '../../components/Table/MUITable';
import '../Home/home.css'
import axios from 'axios'


const Home = () => {
    const navigate = useNavigate();
    const handleGoRegistration = () => {
        navigate('/registration')
    }
    const [data, setData] = useState([]);

    const BASE_URL = "https://66fcde2bc3a184a84d1834e8.mockapi.io/api"

    const getAllUsers = async () => {
        const response = await axios.get(BASE_URL + "/users/users")

        setData(response.data)
    }


    const onRemoveUserById = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/users/users/${id}`);
            setData((prevData) => prevData.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Silinən zaman problem yaşandı:", error);
        }
    };


    useEffect(() => {
        getAllUsers()
    }, [])





    return (
        <div className='home'>
            <Container fixed className="container">
                <div className="button-container">
                    <MUIButton className="home__button" text={"YARAT"} variant={"contained"} color={"error"} onClick={handleGoRegistration} startIcon={<AddIcon />} />
                </div>
                <MUITable data={data} onRemoveUserById={onRemoveUserById} className="home__table" />
            </Container>
        </div>
    )
}

export default Home
