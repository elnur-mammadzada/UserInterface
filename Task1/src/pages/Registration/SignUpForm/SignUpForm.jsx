import React, { useState } from 'react';
import MUITextField from '../../../components/TextField/MUITextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MUIButton from '../../../components/Button/MUIButton';
import '../SignUpForm/SignUpForm.css';
import { useNavigate } from 'react-router-dom';
import MUISelect from '../../../components/Select/MUISelect';
import axios from 'axios';

const SignUpForm = () => {
    const BASE_URL = "https://66fcde2bc3a184a84d1834e8.mockapi.io/api/users";

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [calculatedAge, setCalculatedAge] = useState(null);

    const calculateAge = (birthDate) => {
        const birthDateObj = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();
        const dayDifference = today.getDate() - birthDateObj.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
        return age;
    };

    const handleSubmit = async () => {
        const age = calculateAge(birthDate);
        setCalculatedAge(age);

        const newUser = {
            name: name,
            surname: surname,
            email: email,
            age: age
        };

        try {

            const response = await axios.post(`${BASE_URL}/users`, newUser);
            console.log('İstifadəçi uğurla yaradıldı:', response.data);

            navigate('/');
        } catch (error) {
            console.error('İstifadəçi yaradılarkən xəta baş verdi:', error);
        }
    };


    const isFormValid = name && surname && email && birthDate;

    return (
        <div className='class'>
            <div className='input__info'>
                <MUITextField
                    placeholder={"Ad"}
                    variant={"filled"}
                    icon={<PersonIcon />}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <MUITextField
                    placeholder={"Soyad"}
                    variant={"filled"}
                    icon={<PersonIcon />}
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div className='input__date'>
                <MUITextField
                    type={"date"}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}

                />
            </div>
            <div className='input__email'>
                <MUISelect />

                <MUITextField
                    label={'Yaş : '}
                    icon={<EmailIcon />}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='input__btn'>
                <MUIButton
                    text={'Əlavə et'}
                    color={'success'}
                    variant={'contained'}
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                />
                <MUIButton
                    text={'Ləğv et'}
                    color={'error'}
                    variant={'contained'}
                    onClick={() => navigate('/')}
                />
            </div>


        </div>
    );
};

export default SignUpForm;
