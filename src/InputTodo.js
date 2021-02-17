import React,{useState} from 'react'
import {useContext} from "react"
import {DispatchContext} from "./utils"

const InputTodo = () => {
    const [newToDo, setNewToDo] = useState("")
    const dispatch = useContext(DispatchContext)

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch({type:"ADD", payload: newToDo})
        dispatch({type:"SORT"})

        setNewToDo("")
    }
    return (
        <div>
            <input type="text" autoFocus={true} value={newToDo} onChange={(e)=>{setNewToDo(e.target.value)}} />
            <button onClick={(e)=> handleSubmit(e)}>Add Todo</button>
        </div>
    )
}

export default InputTodo
