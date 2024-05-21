import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const Quote = () => {

    const { isLoading, isSuccess, isError } = useSelector((state) => state.quote);

    if (isLoading) {
        return (
            <Typography sx={{ margin: "10px" }} variant='h3' align='center' color="error">
                Loading...
            </Typography>
        )
    }


    if (isSuccess) {
        return (
            <Typography sx={{ margin: "10px" }} variant='h3' align='center' color="success">
                Success...
            </Typography>
        )
    }

    if (isError) {
        return (
            <Typography sx={{ margin: "10px" }} variant='h4' align='center' color="error">
                Something went Wrong...
            </Typography>
        )
    }


    return (
        <Typography sx={{ margin: "10px" }} variant='h3' align='center' color="error">
            CRUD APP
        </Typography>
    )
};

export default Quote;