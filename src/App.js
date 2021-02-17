import {useReducer} from "react"
import logo from './logo.svg';
import './App.css';
import InputTodo from "./InputTodo"
import TodosList from './TodosList';
import {TodosContext, DispatchContext, reducer, initialState} from "./utils"


function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <TodosContext.Provider value={todos}>
          <InputTodo/>
          <TodosList/>
        </TodosContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
