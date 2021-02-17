import React from 'react'
import {useContext} from "react"
import {TodosContext, DispatchContext} from "./utils"

const TodosList = () => {
    const todos = useContext(TodosContext)
    const dispatch = useContext(DispatchContext)
    const handleDelete = (id) => {
        dispatch({type:"DELETE", payload:id})
        dispatch({type:"SORT"})

    }
    const handleScore = (id, point)=>{
        dispatch({type:"SCORE_UPDATE", payloadID:id, payloadPoint:point})
        dispatch({type:"SORT"})
    }
    return (
        <div>
            <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <button onClick={()=> handleDelete( todo.id)}>X</button>
                    <button onClick={()=> handleScore(todo.id, 1)}>Increase</button>
                    <button onClick={()=> handleScore(todo.id, -1)}>Decrease</button>
                    {todo.task} { todo.score}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodosList
