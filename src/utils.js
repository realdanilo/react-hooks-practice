import {createContext} from "react"
import { v4 as uuid } from 'uuid';

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const reducer = ( state, action) => {
    switch(action.type){
        case "ADD":
            return [...state,{id:uuid(), task: action.payload, score:0}]
        case "DELETE":
            return state.filter( t => t.id !== action.payload)
        case "SCORE_UPDATE":
            return state.map(t => {
                if(t.id === action.payloadID){
                    let newScore  = t.score + action.payloadPoint
                    return { ...t, score:newScore}
                }else{ return t}
            })
        case "SORT":
            return state.sort( (a,b)=> b.score-a.score)
    }
}

export const initialState=[
    {
        id:uuid(),
        task:"wash car",
        score:0
    }
]