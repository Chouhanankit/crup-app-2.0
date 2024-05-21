import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, update } from '../feature/todos/TodoSlice';


const Form = () => {

    const { edit } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit.isEdit) {
            dispatch(update({
                _id: edit.todo._id,
                title,
                description,
            }))
        } else {
            dispatch(add({
                _id: crypto.randomUUID(),
                title,
                description,
            }))
        }
        setTitle("");
        setDescription("")
    }

    useEffect(() => {
        setTitle(edit.todo.title);
        setDescription(edit.todo.description);
    }, [edit])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField variant='outlined' label="Enter Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} required />
                <TextField sx={{ margin: "10px 0px" }} variant='outlined' label="Description" multiline rows={5} fullWidth value={description} onChange={(e) => setDescription(e.target.value)} required />
                <Button variant='contained' type='submit' fullWidth>Submit</Button>
            </form>
        </>

    )
}

export default Form