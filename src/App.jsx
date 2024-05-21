import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Container, ThemeProvider, Typography, createTheme } from '@mui/material'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import Quote from './components/Quote'

const App = () => {

    const [color, setColor] = useState();

    const theme = createTheme({
        palette: {
            primary: {
                main: color ? "#3D3B40" : "#365486"
            },
            warning: {
                main: color ? "#FF9843" : "#FFDD95"
            },
            error: {
                main: color ? "#B80000" : "#820300"
            }
        }
    })

    const handleTheme = () => {
        if (color) {
            setColor(false);
        } else {
            setColor(true);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Navbar handleTheme={handleTheme} color={color} />
            <Container sx={{ padding: "80px 20px" }}>
                <Quote />
                <Form />
                <ListGroup />
            </Container>
        </ThemeProvider>
    )
}

export default App