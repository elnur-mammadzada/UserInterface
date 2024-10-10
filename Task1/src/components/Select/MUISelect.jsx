import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import '../Select/select.css'

const MUISelect = () => {

    const [gender, setGender] = useState('')
    return (

        <div className='select'>

            <FormControl >
                <InputLabel>Cinsiyyət</InputLabel>
                <Select value={gender} onChange={(e) => setGender(e.target.value)} variant='standard'>

                    <MenuItem value='1'>Kişi</MenuItem>
                    <MenuItem value='2' >Qadın</MenuItem>
                </Select>
            </FormControl>
        </div>

    )
}

export default MUISelect
