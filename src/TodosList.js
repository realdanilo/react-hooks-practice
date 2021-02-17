import React from 'react'
import {useContext} from "react"
import {TodosContext, DispatchContext} from "./utils"

const TodosList = () => {
    const todos = useContext(TodosContext)
    const dispatch = useContext(DispatchContext)
    const handleDelete = (id) => {
        dispatch({type:"DELETE", payload:id})
    }
    return (
        <div>
            <ul>
            {todos.map((todo)=>(
                <li key={todo.id}><button onClick={()=> handleDelete( todo.id)}>X</button>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodosList
