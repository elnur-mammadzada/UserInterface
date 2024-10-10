import React from 'react';
import Button from '@mui/material/Button'
import '../Button/button.css'





const MUIButton = ({ text, variant, color, onClick, startIcon, disabled }) => {


    return (

        <Button onClick={onClick} variant={variant} color={color} startIcon={startIcon} disabled={disabled}>{text}</Button>

    )
}

export default MUIButton
