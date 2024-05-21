import React from 'react'
import { Box, Button, ListItem, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../feature/todos/TodoSlice'


const ListDeteails = ({ todo }) => {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(remove(id))
    }
    const handleEdit = (todo) => {
        dispatch(edit(todo))
    }

    return (
        <>
            <ListItem >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h5'>
                        {todo.title}
                    </Typography>
                    <Typography variant='h6'>
                        {todo.description}
                    </Typography>
                </Box>
                <Box>
                    <Button sx={{ margin: "5px" }} variant='contained' color='warning' onClick={() => handleEdit(todo)}>Edit</Button>
                    <Button variant='contained' color='error' onClick={() => handleDelete(todo._id)}>Delete</Button>
                </Box>
            </ListItem>
        </>

    )
}

export default ListDeteails