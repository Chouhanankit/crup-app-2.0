import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = ({ handleTheme, color }) => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        CRUD-APP
                    </Typography>
                    <Button variant='contained' color='warning' onClick={handleTheme}>
                        {color ? "Light Mode" : "Dark Mode"}
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar