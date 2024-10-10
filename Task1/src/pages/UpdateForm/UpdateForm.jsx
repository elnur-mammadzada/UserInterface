import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MUITextField from '../../components/TextField/MUITextField';
import MUIButton from '../../components/Button/MUIButton';
import MUISelect from '../../components/Select/MUISelect';
import '../UpdateForm/UpdateForm.css';

const UpdateForm = () => {
    const BASE_URL = "https://66fcde2bc3a184a84d1834e8.mockapi.io/api";
    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        birthDate: '',
        gender: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchUserData = async (userId) => {
        console.log("Fetching user with ID:", userId);
        try {
            const response = await axios.get(`${BASE_URL}/users/users/${userId}`);
            setUserData(response.data);
        } catch (error) {
            setErrorMessage("Məlumat alınarkən xəta baş verdi");
            console.error("Xəta baş verdi:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserData(id);
        }
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`${BASE_URL}/users/users/${id}`, userData);
            console.log('Məlumat uğurla yeniləndi');
            navigate('/');
        } catch (error) {
            console.error("Yeniləmə zamanı xəta baş verdi:", error);
            setErrorMessage("Yeniləmə zamanı xəta baş verdi");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className='update-form'>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='input__info'>
                <MUITextField
                    placeholder="Ad"
                    variant="filled"
                    value={userData.name || ""}
                    name="name"
                    onChange={handleChange}
                />
                <MUITextField
                    placeholder="Soyad"
                    variant="filled"
                    value={userData.surname || ""}
                    name="surname"
                    onChange={handleChange}
                />
            </div>
            <div className='input__date'>
                <MUITextField
                    type="date"
                    value={userData.birthDate || ""}
                    name="birthDate"
                    onChange={handleChange}
                />
            </div>
            <div className='input__email'>
                <MUISelect
                    value={userData.gender || 'male'}
                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </MUISelect>
                <MUITextField
                    placeholder="Email"
                    variant="filled"
                    value={userData.email || ''}
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div className='input__btn'>
                <MUIButton
                    text='Düzəliş et'
                    color='success'
                    variant='contained'
                    onClick={handleUpdate}
                />
                <MUIButton
                    text='Ləğv et'
                    color='error'
                    variant='contained'
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    );
}

export default UpdateForm;