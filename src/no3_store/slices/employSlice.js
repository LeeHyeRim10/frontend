import { createSlice } from "@reduxjs/toolkit"



const initEmpSt = [
    { id: "1", name: "John", email: "testttt@tttt.com", job: "frontend", pay: 600 },
    { id: "2", name: "qqqq", email: "qqqq@tttt.com", job: "backend", pay: 600 },
    { id: "3", name: "wwww", email: "wwww@tttt.com", job: "db", pay: 600 },
    { id: "4", name: "eeee", email: "eeee@tttt.com", job: "ai", pay: 600 }
]

const initEmp = {
    id: '', name: '', email: '', job: '', pay: null
}

const initialState = {
    empTable: initEmpSt,
    emp: initEmp,
    mode: '',
    selectedId: ''
}

const employSlice = createSlice({
    name: "employSlice",
    initialState,
    reducers: {
        select: (state, action) => {
            state.selectedId = action.payload
        },
        setEmp: (state, action) => {
            state.emp = action.payload || initEmp;
        },
        addEmp: (state, action) => {
            state.empTable = [
                ...state.empTable,
                {
                    ...action.payload.emp,
                    id: action.payload.newId
                }
            ]
        },
        update: (state, action) => {
            state.empTable = state.empTable.map(i => (
                i.id === action.payload.id ?
                    action.payload : i
            ))
        },
        remove: (state) => {
            state.empTable = state.empTable.filter(i => (
                i.id !== state.selectedId
            ))
        },
        setMode: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const { select, setEmp, addEmp, update, remove, setMode } = employSlice.actions;
export default employSlice.reducer