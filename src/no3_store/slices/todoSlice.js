import { createSlice } from "@reduxjs/toolkit";


const initObj = { id: "", subject: "", checked: false }

const initialState = {
  todoList: [
    { id: 1, subject: "HTML 공부", checked: true },
    { id: 2, subject: "CSS 공부", checked: false },
    { id: 3, subject: "REACT 공부", checked: true },
    { id: 4, subject: "Python 공부", checked: false },
  ],
  todoObj: initObj
}



const todoSlice = createSlice({
    name : "todoSlice" ,
    initialState ,
    reducers : {
        remove: (state, action) => {
            state.todoList = state.todoList.filter(i =>
                (i.id !== action.payload)
            )
        },
        setTodo: (state, action) => {
            state.todoList = state.todoList.map(i => (
                i.id === action.payload.id ?
                    {...i, subject: action.payload.value}
                    : i
            ))
        },
        toggle: (state, action) => {
            state.todoList = state.todoList.map(i => (
                i.id === action.payload ?
                    {...i, checked: !i.checked}
                    : i
            ))
        },
        change: (state, action) => {
            state.todoObj = {
                ...state.todoObj,
                [action.payload.name] : action.payload.value
            }
        },
        addTodo: (state) => {
            const newId =  state.todoList.length > 0 ? Math.max(...state.todoList.map(i => i.id)) + 1 : 1
            state.todoList = [
                ...state.todoList,
                {
                    ...state.todoObj,
                    id : newId
                }
            ]
            state.todoObj = initObj
        }
    }
})

export const {remove, setTodo, addTodo, toggle, change} = todoSlice.actions ;
export default todoSlice.reducer ;
