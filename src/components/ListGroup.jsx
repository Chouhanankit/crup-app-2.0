import { List } from '@mui/material'
import React from 'react'
import ListDeteails from './ListDeteails'
import { useSelector } from 'react-redux'


const ListGroup = () => {
    const { allTodos } = useSelector((state) => state.todos)

    return (
        <>
            <List>
                {
                    allTodos.map((todo) => (<ListDeteails key={todo._id} todo={todo} />))
                }
            </List>
        </>
    )
}

export default ListGroup