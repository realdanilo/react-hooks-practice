import {createContext} from "react"
import { v4 as uuid } from 'uuid';

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const reducer = ( state, action) => {
    switch(action.type){
        case "ADD":
            return [...state,{id:uuid(), task: action.payload}]
        case "DELETE":
            return state.filter( t => t.id !== action.payload)
    }
}

export const initialState=[
    {
        id:uuid(),
        task:"wash car"
    }
]