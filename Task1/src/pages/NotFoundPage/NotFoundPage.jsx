import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Box sx={{ mb: 2 }}>
                <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
            </Box>
            <Typography variant="h2" component="h1" gutterBottom>
                404 - Səhifə tapılmadı
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Axtardığınız səhifə tapılmadı
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleBackHome}
                sx={{ mt: 3 }}
            >
                Ana Səhifəyə Get
            </Button>
        </Container>
    );
};

export default NotFoundPage;
