import { TextField } from '@mui/material'
import React from 'react'
import { InputAdornment } from '@mui/material'



const MUITextField = ({ variant, icon, type, placeholder, onChange, label, value, ...props }) => {
    const InputProps = icon
        ? {
            startAdornment: (
                <InputAdornment position="start">
                    {icon}
                </InputAdornment>
            ),
        }
        : {};


    return (
        <div>
            <TextField {...props} value={value} variant={variant} InputProps={InputProps} type={type} placeholder={placeholder} onChange={onChange} label={label} />
        </div>
    )
}

export default MUITextField
